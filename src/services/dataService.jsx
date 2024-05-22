const URL = "https://6637c048288fedf693813d5c.mockapi.io/exercises"

export const dataService = {

	async getApiData() {
		
			const response = await fetch(URL)
			const data = await response.json()
			return data
	},

	async addApiData(exs) {
		
			const response = await fetch(URL, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
				"Content-Type": "application/json",
			},
				redirect: "follow",
				referrerPolicy: "no-referrer",
				body: JSON.stringify(exs)
			})
			const data = await response.json()
			return data
		
	},

	async deleteApiData(id) {
		
			const response = await fetch(`${URL}/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify()
			})		
			const data = await response.json()
			return data
		
	},
}