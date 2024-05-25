import * as SecureStore from "expo-secure-store";

class AuthService {
	constructor() {
		this.isLoggedIn = false;
		this.username = null;
		this.password = null;
	}

	async loadCredentials() {
		try {
			const credentials = await SecureStore.getItemAsync(
				"userCredentials"
			);
			if (credentials) {
				const { username, password } = JSON.parse(credentials);
				this.isLoggedIn = true;
				this.username = username;
				this.password = password;
			}
		} catch (error) {
			console.error("Error loading credentials:", error);
		}
	}

	async saveCredentials(username, password) {
		try {
			await SecureStore.setItemAsync(
				"userCredentials",
				JSON.stringify({ username, password })
			);
			this.isLoggedIn = true;
			this.username = username;
			this.password = password;
		} catch (error) {
			console.error("Error saving credentials:", error);
		}
	}

	logout() {
		this.isLoggedIn = false;
		this.username = null;
		this.password = null;
		SecureStore.deleteItemAsync("userCredentials");
	}
}

const authService = new AuthService();

export default authService;
