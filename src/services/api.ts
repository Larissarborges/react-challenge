import axios from 'axios';

const token = process.env.REACT_APP_API_TOKEN;
console.log('TOKEN: ', token)
export const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: { 'Authorization': `token ${token}` }
})