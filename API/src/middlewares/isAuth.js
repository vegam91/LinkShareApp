const register = async (user) => {
	try { 
	  const endpoint = getEndpoint('/signup');
	 console.log("AQUI",user);
  
	  const response = await apiClient.post(endpoint, user);
  
	  const token = response.headers['x-auth-token'];
  console.log("esto",token)
	  return token;
	} catch (error) {
	  console.error("Error en la solicitud POST:", error);
	}
  }