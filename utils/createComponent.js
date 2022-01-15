const fs = require('fs')
const path = require('path')

const join = path.join

const componentName = process.argv[2]

if (!componentName) {
  console.error('Component Name is required') // eslint-disable-line no-console
  process.exit()
}

const outputDir = join(__dirname, '..', 'src', 'components', componentName)

const replaceName = (name, str) => {
  const reg = new RegExp('{name}', 'g')
  return str.replace(reg, name)
}

const createFile = (filename, contents) => {
  fs.open(join(outputDir, filename), 'w+', (err, fd) => {
    if (err) {
      throw new Error(`error opening file: ${err}`)
    }

    fs.writeFile(fd, replaceName(componentName, contents), (error) => {
      if (err) {
        return console.error(error)
      }

      return fs.close(fd, () => {
        console.log(`${filename} written`) // eslint-disable-line no-console
      })
    })
  })
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

const json = fs.readFileSync(
  join(__dirname, 'templates', '_package.json'),
  'utf8'
)
createFile('package.json', json)

const tsx = fs.readFileSync(join(__dirname, 'templates', '_tsx'), 'utf8')
createFile(`${componentName}.tsx`, tsx)

const test = fs.readFileSync(join(__dirname, 'templates', '_test'), 'utf8')
createFile(`${componentName}.test.tsx`, test)
