import axios from "axios";
/* Register user api call */
export const registerUser = async (userDetails) => {
	try {
		const res = await axios.post(
			`https://cors-backend-dyn7.onrender.com/users`,
			userDetails,
		);
		return res.data;
	} catch (error) {
		return error;
	}
};

/* Getting all users register with same email */
export const getUserDataFromApi = async () => {
	try {
		const res = await axios.get(`https://cors-backend-dyn7.onrender.com/users`);
		return res.data;
	} catch (error) {
		return error;
	}
};