import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState, React } from "react";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";
import authService from "../../services/getCredentials";

const HomePage = () => {
	const [storedUsername, setStoredUsername] = useState();
	const [storedPassword, setStoredPassword] = useState();

	const navigation = useNavigation();

	const deleteCredentials = async () => {
		authService.logout();
		navigation.navigate("Login");
	};

	const retrieveInfo = async () => {
		setStoredUsername(authService.username);
		setStoredPassword(authService.password);
	};

	const openWebpage = () => {
		navigation.navigate("WebPage");
	};

	const handleLogin = async () => {
		console.log(
			JSON.stringify({
				username: authService.username,
				password: authService.password,
			})
		);
		const response = await fetch(
			"https://us-central1-uvic-424420.cloudfunctions.net/UvicLogin",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: authService.username,
					password: authService.password,
				}),
			}
		);

		if (response.ok) {
			const html = await response.text();
			console.log(html);
			navigation.navigate("OnlineTools");
		} else {
			console.error("Failed to log in:", response.statusText);
		}
	};

	return (
		<View>
			<Text style={{ margin: 50 }}> HELLO WORLD </Text>
			<Btn text="Log out" action={deleteCredentials} />
			<Text>Username: {storedUsername}</Text>
			<Text>Password: {storedPassword}</Text>
			<Btn text="Retrieve" action={retrieveInfo} />
			{/* <Btn text="webpage" action={openWebpage} /> */}
			<Btn text="AutomatedLogin" action={handleLogin} />
		</View>
	);
};

export default HomePage;
