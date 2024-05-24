import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import styles from "./loginpage.style";
import * as SecureStore from "expo-secure-store";
import { useState, React, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";

const LoginPage = () => {
	const navigation = useNavigation();

	useEffect(() => {
		checkIsLoggedIn();
	}, []);

	const checkIsLoggedIn = async () => {
		const credentials = await SecureStore.getItemAsync("userCredentials");

		if (credentials) {
			navigation.navigate("Home");
		}
	};

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const [storedUsername, setStoredUsername] = useState();
	const [storedPassword, setStoredPassword] = useState();

	const storeInfo = async () => {
		const userInfo = JSON.stringify({ username, password });
		await SecureStore.setItemAsync("userCredentials", userInfo);

		setUsername();
		setPassword();

		navigation.navigate("Home");
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
		<View style={styles.container}>
			<Image
				source={require("../../assets/img/uvic.png")}
				style={styles.headerImg}
			/>
			<TextInput
				value={username}
				onChangeText={setUsername}
				placeholder="NetLink ID"
				placeholderTextColor="#d3d3d3"
				style={styles.InputField}
			/>
			<TextInput
				value={password}
				onChangeText={setPassword}
				placeholder="Password"
				placeholderTextColor="#d3d3d3"
				style={styles.InputField}
			/>
			<Btn text="Sign in" action={storeInfo} />
			{/* <Btn text="Retrieve" action={retrieveInfo} /> */}
		</View>
	);
};

export default LoginPage;
