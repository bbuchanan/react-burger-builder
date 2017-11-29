import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-d94d6.firebaseio.com/'
})

export default instance