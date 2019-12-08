import { add, minus, multi } from './math'

test('測試加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})

test('測試減法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('測試乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})
