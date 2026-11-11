import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import ts from "typescript"

const appPath = path.resolve("src/App.tsx")
const publicPath = path.resolve("public")
const source = fs.readFileSync(appPath, "utf8")
const file = ts.createSourceFile(appPath, source, ts.ScriptTarget.Latest, true)
const errors = []

function findArray(name) {
  let result

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === name &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      result = node.initializer.elements.filter(ts.isObjectLiteralExpression)
      return
    }

    ts.forEachChild(node, visit)
  }

  visit(file)
  if (!result) errors.push(`Could not find the ${name} data array in ${appPath}.`)
  return result ?? []
}

function getProperty(object, name) {
  return object.properties.find(
    (property) =>
      ts.isPropertyAssignment(property) &&
      ts.isIdentifier(property.name) &&
      property.name.text === name,
  )?.initializer
}

function getString(node) {
  return node && ts.isStringLiteral(node) ? node.text : undefined
}

const projects = findArray("projects")
const services = findArray("services")
const projectTitles = new Set()

for (const project of projects) {
  const title = getString(getProperty(project, "title"))
  const image = getString(getProperty(project, "image"))

  if (!title) {
    errors.push("A project is missing a string title.")
  } else if (projectTitles.has(title)) {
    errors.push(`Duplicate project title: ${title}.`)
  } else {
    projectTitles.add(title)
  }

  if (!image) {
    errors.push(`Project "${title ?? "unknown"}" is missing an image path.`)
    continue
  }

  const relativePath = decodeURIComponent(image).replace(/^\/+/, "")
  const resolvedPath = path.resolve(publicPath, relativePath)
  if (!resolvedPath.startsWith(`${publicPath}${path.sep}`) || !fs.existsSync(resolvedPath)) {
    errors.push(`Project "${title ?? "unknown"}" image does not exist: ${image}.`)
  }
}

for (const service of services) {
  const title = getString(getProperty(service, "title")) ?? "Unknown service"
  const image = getString(getProperty(service, "image"))
  const relatedProjects = getProperty(service, "projectTitles")

  if (!image) {
    errors.push(`Service "${title}" is missing an image path.`)
  } else {
    const relativePath = decodeURIComponent(image).replace(/^\/+/, "")
    const resolvedPath = path.resolve(publicPath, relativePath)
    if (!resolvedPath.startsWith(`${publicPath}${path.sep}`) || !fs.existsSync(resolvedPath)) {
      errors.push(`Service "${title}" image does not exist: ${image}.`)
    }
  }

  if (!relatedProjects || !ts.isArrayLiteralExpression(relatedProjects)) {
    errors.push(`Service "${title}" is missing its related project list.`)
    continue
  }

  const references = relatedProjects.elements.map(getString).filter(Boolean)
  const unknown = references.filter((projectTitle) => !projectTitles.has(projectTitle))
  if (unknown.length) {
    errors.push(`Service "${title}" references unknown projects: ${unknown.join(", ")}.`)
  }
  if (references.length === 0 || references.length === unknown.length) {
    errors.push(`Service "${title}" has no valid related projects.`)
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"))
  process.exitCode = 1
} else {
  console.log(
    `Portfolio check passed: ${projects.length} projects, ${services.length} services, all related projects and image assets are valid.`,
  )
}
