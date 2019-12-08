import { fetchDataPromise, fetchDataCallBack, fetchDataFail } from './fetchData'

// 非同步, 有 callback functon
test('fetchDataCallBack 返回結果為 { success: true }', done => {
  fetchDataCallBack(data => {
    expect(data).toEqual({
      success: true,
    })
    done()
  })
})

// 非同步 Promise 例子, 需要使用 return, expect 才會在 fetchDataPromise 完成之後執行。
test('fetchDataPromise 返回結果為 { success: true }', () => {
  return fetchDataPromise().then(res => {
    expect(res.data).toEqual({
      success: true,
    })
  })
})

// 測試非同步失敗例子
test('fetchDataFail 返回結果為 404', () => {
  // 若 api 回應正常, 不會跑 catch, 所以會直接通過測試
  // 這時就需要使用 expect.assertions(1) 來驗證需要有多少 expect 被調用才能通過
  expect.assertions(1)
  return fetchDataFail().catch(e => {
    // error 回傳字串為 'Error: Request failed with status code 404'
    // 判斷只要字串內有 404 就通過
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})
