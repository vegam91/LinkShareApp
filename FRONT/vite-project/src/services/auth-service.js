

import jwt_decode from 'jwt-decode'

import apiClient from './api-client'
import { setToken } from './api-client'

const getEndpoint = (slug) => '/users' + slug

const tokenKey = 'token'

setToken(getToken())

const login = async (user) => {
	const endpoint = getEndpoint('/signin')
	const response = await apiClient.post(endpoint, user)

	const token = response.headers['x-auth-token']

	localStorage.setItem(tokenKey, token)

	setToken(token)

	return jwt_decode(token)
}

const loginWithToken = async (token) => {
	localStorage.setItem(tokenKey, token)

	setToken(token)

	return jwt_decode(token)
}

const register = async (user) => {
	try { 
	  const endpoint = getEndpoint('/signup');
	 console.log("AQUI",endpoint);
  
	  const response = await apiClient.post(endpoint, user);
  console.log("resppuesta",response)
	  const token = response.headers['x-auth-token'];
  console.log("esto",token)
	  return token;
	} catch (error) {
	  console.error("Error en la solicitud POST:", error);
	}
  }



const getCurrentUser = () => {
	try {
		return jwt_decode(token)
	} catch (err) {
		console.error("token en localStorage jwt invalido")
		return null
	}}

function getToken() {
	const token = localStorage.getItem(tokenKey)

	return token
}

const authService = {
	login,
	register,
	
	getCurrentUser,
	loginWithToken,
}

export default authService