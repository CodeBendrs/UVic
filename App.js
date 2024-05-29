import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState, React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyWebView from "./pages/webpage/MyWebView";
import OnlineTools from "./pages/OnlineTools/OnlineTools";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/Home";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import authService from "./services/getCredentials";

const Stack = createNativeStackNavigator();

const App = () => {
	useEffect(() => {
		const loadingCredentials = async () => {
			await authService.loadCredentials();
		};
		loadingCredentials();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						animation: "fade",
						transitionSpec: {
							open: {
								animation: "spring",
								config: { duration: 1000 },
							},
							close: {
								animation: "spring",
								config: { duration: 1000 },
							},
						},

						// cardStyleInterpolator:
						// 	TransitionPresets.FadeFromBottomAndroid.cardStyleInterpolator,
					}}
				>
					<Stack.Screen name="Logo" component={SplashScreen} />
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
