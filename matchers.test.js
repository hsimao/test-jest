// test('toBe 匹配器', () => {
//   // toBe 會判斷儲存位置
//   // toBe 匹配器 matchers object.is ===
//   const a = { one: 1 }
//   expect(a).toBe(b)
// })

// toEqual 只會判斷內容是否相等
test('toEqual 匹配器', () => {
  const a = { one: 1 }
  expect(a).toEqual({ one: 1 })
})

// toBeNull
test('toEqual 匹配器', () => {
  const a = null
  expect(a).toBeNull()
})

// 真假相關匹配器 toBeUndifined
test('toBeUndifined 匹配器', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

// 真假相關匹配器 toBeDefined, 變數要有被定義過
test('toBeDefined 匹配器', () => {
  const a = 1
  expect(a).toBeDefined()
})

// 真假相關匹配器 toBeTruthy, 判斷是否為 true
test('toBeTruthy 匹配器', () => {
  const a = true
  expect(a).toBeTruthy()
})

// 真假相關匹配器 toBeFalsy, 判斷是否為 false
test('toBeFalsy 匹配器', () => {
  const a = undefined
  expect(a).toBeFalsy()
})

// not 匹配器
test('toBeFalsy 匹配器', () => {
  const a = true
  expect(a).not.toBeFalsy()
})

// == 數字相關匹配器 start
// toBeGreaterThan 數字要比我大
test('toBeGreaterThan 匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThan(9)
})

// toBeLessThan 數字要比我小
test('toBeLessThan 匹配器', () => {
  const count = 10
  expect(count).toBeLessThan(11)
})

// toBeGreaterThanOrEqual 數字大於等於
test('toBeGreaterThanOrEqual 匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThanOrEqual(10)
})

// toBeLessThanOrEqual 數字小於等於
test('toBeLessThanOrEqual 匹配器', () => {
  const count = 10
  expect(count).toBeLessThanOrEqual(10)
})

// 允許浮點數字判斷匹配器
test('toBeCloseTo 匹配器', () => {
  const firstNumber = 0.1
  const secondNumber = 0.2
  // 0.30000000000000004 等於 0.3
  expect(firstNumber + secondNumber).toBeCloseTo(0.3)
})

// == 數字相關匹配器 End

// 字串相關匹配器 toMatch
test('toMatch', () => {
  const str = 'http://www.google.com'
  // expect(str).toMatch('google')
  // 可用正規表達式
  expect(str).toMatch(/google/)
})

// 字串相關匹配器 toContain
test('toContain', () => {
  const arr = ['mars', 'hello']
  const data = new Set(arr)
  expect(data).toContain('hello')
})

// 異常相關匹配器 toThrow, 捕捉有 thorw 的錯誤
const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}
test('toThrow', () => {
  // expect(throwNewErrorFunc).toThrow()
  // 亦可判斷 error 內容
  expect(throwNewErrorFunc).toThrow('this is a new error')
})
