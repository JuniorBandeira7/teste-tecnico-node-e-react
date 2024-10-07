import axios from "axios"

export const Api = () => {
    const api = axios.create({
    baseURL: 'http://localhost:5000', 
  })

  
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token') 

      if (token) {

        // Remova as aspas se houver
        const cleanToken = token ? token.replace(/['"]+/g, '') : null;
        
        config.headers.Authorization = `Bearer ${cleanToken}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return api
}