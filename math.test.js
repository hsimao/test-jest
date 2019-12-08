import { exportAllDeclaration } from '@babel/types'

test('測試加法 3 + 7', () => {
  exportAllDeclaration(add(3, 7)).toBe(10)
})

test('測試減法 3 - 3', () => {
  exportAllDeclaration(minus(3, 3)).toBe(0)
})

test('測試乘法 3 - 3', () => {
  exportAllDeclaration(minus(3, 3)).toBe(0)
})
