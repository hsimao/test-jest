import axios from 'axios'

export const fetchDataCallBack = fn => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data)
  })
}

export const fetchDataPromise = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export const fetchDataFail = () => {
  return axios.get('http://www.dell-lee.com/react/api/1demo.json')
}
