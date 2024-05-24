import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import styles from "./loginpage.style";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const LoginPage = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const storeInfo = async () => {
		await SecureStore.setItemAsync(1, [username, password]);
		setUsername();
		setPassword();
	};

	const retreiveInfo = async () => {
		let result = await SecureStore.getItemAsync(1);
		setUsername = result[0];
		setPassword = result[1];
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
		</View>
	);
};

export default LoginPage;
