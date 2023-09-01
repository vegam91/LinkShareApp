import apiCLient from "./api-client"

function create(endpoint) {
	const httpService = {
		getAll: () => apiCLient.get(endpoint),

		getById: (id) => apiCLient.get(endpoint + '/' + id),

		create: (entity) => apiCLient.post(endpoint, entity),
		update: (entity, id) => apiCLient.put(endpoint + '/' + id, entity),

		delete: (id) => apiCLient.delete(endpoint + '/' + id),
	}

	return httpService
}

export default create
