import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useState, React } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";
import authService from "../../services/getCredentials";
// import scraper from "../../services/scraper";

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

	return (
		<View>
			<Text style={{ margin: 50 }}> HELLO WORLD </Text>
			<Btn text="Log out" action={deleteCredentials} />
			<Text>Username: {storedUsername}</Text>
			<Text>Password: {storedPassword}</Text>
			<Btn text="Retrieve" action={retrieveInfo} />
			{/* <Btn text="Scrape" action={scraper} /> */}
		</View>
	);
};

export default HomePage;
