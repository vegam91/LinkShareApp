import axios from "axios"

const baseURL= import.meta.env.VITE_API_URL

const apiCLient= axios.create({baseURL})
export default apiCLient