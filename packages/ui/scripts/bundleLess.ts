import { dirname, resolve } from 'path'
import { promises as fs } from 'fs'
import cpy from 'cpy'
import fg from 'fast-glob'
import less from 'less'

const SRC_DIR = resolve(__dirname, '../src')
const ES_DIR = resolve(__dirname, '../es')
const LIB_DIR = resolve(__dirname, '../lib')

export const bundleLess = async() => {
  await cpy(`${SRC_DIR}/**/*.less`, ES_DIR)
  await cpy(`${SRC_DIR}/**/*.less`, LIB_DIR)

  const lessFiles = await fg('**/index.less', {
    cwd: SRC_DIR,
    onlyFiles: true,
  })

  for (const file of lessFiles) {
    const filePath = `${SRC_DIR}/${file}`
    const lessContent = await fs.readFile(filePath, 'utf-8')
    // less => css
    const code = await less.render(lessContent, {
      paths: [SRC_DIR, dirname(filePath)],
    })

    // convert file less => css
    await fs.writeFile(resolve(ES_DIR, file.replace('.less', '.css')), code.css)
    await fs.writeFile(resolve(LIB_DIR, file.replace('.less', '.css')), code.css)
  }
}

bundleLess()
