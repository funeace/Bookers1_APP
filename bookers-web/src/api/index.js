import axios from 'axios'

// apiを簡単に呼び出すための処理
export default () => {
  return axios.create({
    baseURL: 'http://0.0.0.0:3000/v1'
  })
}
