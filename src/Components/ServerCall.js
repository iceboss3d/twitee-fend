import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASEURL;

const ServerCall = {
	async auth(endpoint, data) {
		let response;
		await axios
			.post(`${baseUrl}/${endpoint}`, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				response = response.data;
			})
			.catch((err) => {
				console.log(err);
				console.log(err.message);
				throw new Error(err);
			});
		return response;
	},

	get(endpoint) {
		axios
			.get(`${baseUrl}/${endpoint}`, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('user')}`,
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				throw new Error(err.message);
			});
	},

	post(endpoint, data) {
		axios
			.post(`${baseUrl}/${endpoint}`, data, {
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem('user')}`,
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				throw new Error(err.message);
			});
	},
};
export default ServerCall;
