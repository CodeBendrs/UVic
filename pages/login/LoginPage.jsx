import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import styles from "./loginpage.style";
import * as SecureStore from "expo-secure-store";
import { useState, React, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";
import authService from "../../services/getCredentials";

const LoginPage = () => {
	const navigation = useNavigation();

	useEffect(() => {
		checkIsLoggedIn();
	}, []);

	const checkIsLoggedIn = async () => {
		authService.loadCredentials().then(() => {
			if (authService.isLoggedIn) {
				navigation.navigate("Home");
			}
		});
	};

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const [storedUsername, setStoredUsername] = useState();
	const [storedPassword, setStoredPassword] = useState();

	const storeInfo = async () => {
		if (
			authService.username == null ||
			authService.password == null ||
			!username ||
			username === "" ||
			!password ||
			password === ""
		) {
			console.log("password heni");
		} else {
			authService.saveCredentials(username, password).then(() => {
				setUsername();
				setPassword();

				navigation.navigate("Home");
			});
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
