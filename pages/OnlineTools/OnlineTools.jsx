import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState, React } from "react";
import { useNavigation } from "@react-navigation/native";
import Btn from "../../components/UButton/Btn";
import authService from "../../services/getCredentials";

const OnlineTools = () => {
	return (
		<View
			style={{
				marginTop: 100,
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}
		>
			<Text>Hogya Login successfully.</Text>
			<Text>Nhi Ykeen t console log vekhla</Text>
		</View>
	);
};

export default OnlineTools;
