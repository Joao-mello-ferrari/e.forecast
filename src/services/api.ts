import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://openweathermap.org'
  // baseURL: 'https://api.openweathermap.org'
})