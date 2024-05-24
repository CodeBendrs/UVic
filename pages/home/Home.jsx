import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useState, React } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";

const HomePage = () => {
	const [storedUsername, setStoredUsername] = useState();
	const [storedPassword, setStoredPassword] = useState();

	const navigation = useNavigation();

	const deleteCredentials = async () => {
		const credentials = await SecureStore.getItemAsync("userCredentials");

		if (credentials) {
			SecureStore.deleteItemAsync("userCredentials");
		}
		setStoredUsername();
		setStoredPassword();

		navigation.navigate("Login");
	};

	const retrieveInfo = async () => {
		const result = await SecureStore.getItemAsync("userCredentials");

		if (result != null) {
			const { username, password } = JSON.parse(result);

			setStoredUsername(username);
			setStoredPassword(password);
		} else {
			console.log("No credentials found");
		}
	};

	return (
		<View>
			<Text style={{ margin: 50 }}> HELLO WORLD </Text>
			<Btn text="Log out" action={deleteCredentials} />
			<Text>Username: {storedUsername}</Text>
			<Text>Password: {storedPassword}</Text>
			<Btn text="Retrieve" action={retrieveInfo} />
		</View>
	);
};

export default HomePage;
