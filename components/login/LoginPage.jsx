import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import styles from "./loginpage.style";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { connectStorageEmulator } from "firebase/storage";

const LoginPage = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const [storedUsername, setStoredUsername] = useState();
	const [storedPassword, setStoredPassword] = useState();

	const storeInfo = async () => {
		const userInfo = JSON.stringify({ username, password });
		await SecureStore.setItemAsync("userCredentials", userInfo);

		setUsername();
		setPassword();
	};

	const retreiveInfo = async () => {
		const result = await SecureStore.getItemAsync("userCredentials");

		if (result) {
			// Parse the JSON string back to an object
			console.log(JSON.parse(result));
			const { username, password } = JSON.parse(result);
		}

		// Set the state with the retrieved credentials
		setStoredUsername(username);
		setStoredPassword(password);

		// setUsername(result); // output: H
		// setPassword(result[1]); // i
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/Uvic_logo.png")}
				style={styles.headerImg}
			/>
			<TextInput
				value={username}
				onChangeText={setUsername}
				placeholder="Username"
			/>
			<TextInput
				value={password}
				onChangeText={setPassword}
				placeholder="Password"
			/>
			<TouchableOpacity style={styles.btn} onPress={storeInfo}>
				<Text style={{ color: "#fff" }}>Save</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btn} onPress={retreiveInfo}>
				<Text style={{ color: "#fff" }}>Retreive</Text>
			</TouchableOpacity>

			<Text> Stored Info :</Text>
			<Text> Username: {storedUsername}</Text>
			<Text> Password: {storedPassword}</Text>
		</View>
	);
};

export default LoginPage;
