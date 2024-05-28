import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState, React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyWebView from "./pages/webpage/MyWebView";
import OnlineTools from "./pages/OnlineTools/OnlineTools";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/Home";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Login" component={LoginPage} />
					<Stack.Screen name="Home" component={HomePage} />
					<Stack.Screen name="WebPage" component={MyWebView} />
					<Stack.Screen name="OnlineTools" component={OnlineTools} />
				</Stack.Navigator>
			</NavigationContainer>
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
