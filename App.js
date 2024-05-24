import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import LoginPage from "./components/login/LoginPage";

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<LoginPage />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default App;
