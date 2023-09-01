import { useEffect, useState } from 'react'
import linksService from '../services/links-services'

function useLinks() {
	const [links, setLinks] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		costumerService
			.getAll()
			.then(({ data }) => setLinks(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [])

	return { links, loading, errors, setLinks }
}

export default useLinks