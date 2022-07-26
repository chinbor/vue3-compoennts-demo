import { promises as fs } from 'fs'
import { resolve } from 'path'
import { blue, generate, gold, green, red } from '@ant-design/colors'

const genColor = (color: string, prefix = 'blue') => {
  const colors = generate(color)

  const darkColors = generate(color, {
    theme: 'dark',
    backgroundColor: '#222728',
  })

  let code = `@${prefix}-base: ${colors[5]};\n`

  colors.forEach((color, idx) => {
    if (idx === 5)
      code += `@${prefix}-${idx + 1}: @${prefix}-base;\n`
    else
      code += `@${prefix}-${idx + 1}: ${color};\n`
  })

  code += `\n\n@${prefix}-dark-base: ${darkColors[5]};\n`

  darkColors.forEach((color, idx) => {
    if (idx === 5)
      code += `@${prefix}-dark-${idx + 1}: @${prefix}-dark-base;\n`
    else
      code += `@${prefix}-dark-${idx + 1}: ${color};\n`
  })

  return code
}

const run = async() => {
  let code = ''
  // 主色
  code += genColor(blue[5], 'blue')
  code += '\n\n'

  // 警告色
  code += genColor(gold[5], 'gold')
  code += '\n\n'

  // 成功
  code += genColor(green[5], 'green')
  code += '\n\n'

  // 失败
  code += genColor(red[5], 'red')

  // 生成一个colors.less的文件放到src/style下
  await fs.writeFile(resolve(__dirname, '../src/style/colors.less'), code, 'utf-8')
}

run()
