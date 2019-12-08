// 封裝 expect 方法
function expect(result) {
  return {
    toBe: function(actual) {
      if (result !== actual) {
        throw new Error(`期望結果與實際結果不相等, 預期${actual} 結果卻是${result}`)
      }
    },
  }
}

// 封裝 test 描述方法
function test(desc, fn) {
  try {
    fn()
    console.log(`${desc} 通過測試`)
  } catch (e) {
    console.log(`${desc} 沒有通過測試, ${e}`)
  }
}

// 使用自定義測試方法
test('測試加法 3 + 7', () => {
  expect(add(3, 3)).toBe(6)
})

test('測試減法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('測試乘法 3 - 3', () => {
  expect(multi(3, 3)).toBe(9)
})
