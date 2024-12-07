// This file configures an Axios instance for making HTTP requests to the OpenWeather API
// It exports a pre-configured API client with the base URL set for OpenWeather endpoints

import axios from 'axios'

// Create and export an Axios instance with OpenWeather API base URL
export const api = axios.create({
  baseURL: 'https://api.openweathermap.org' // Base URL for OpenWeather API endpoints
})