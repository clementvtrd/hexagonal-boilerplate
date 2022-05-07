import axios, { Method, ResponseType } from 'axios'

const host = process.env.API_HOST

axios.defaults.baseURL = host
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

export default function useFetch(endpoint: string, method: Method, responseType: ResponseType = 'json') {
  return async (data?: any) => {
    const response = await axios({
      url: endpoint,
      method,
      responseType,
      data
    })

    return response.data
  }
}
