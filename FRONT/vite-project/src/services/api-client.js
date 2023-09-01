import axios from axios

const baseURL= impor.meta.env.VITE_API_URL

const apiCLient= axios.create({baseURL})
export default apiCLient