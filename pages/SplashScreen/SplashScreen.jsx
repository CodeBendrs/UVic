// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Dimensions } from "react-native";
// import { Video } from "expo-av";
// import * as SplashScreen from "expo-splash-screen";

// const { width, height } = Dimensions.get("window");

// const SplashScreenComponent = ({ onFinish }) => {
// 	useEffect(() => {
// 		async function prepare() {
// 			try {
// 				onFinish();
// 			} catch (e) {
// 				console.warn("Error in splash screen:", e);
// 				onFinish(); // Proceed even if there's an error
// 			} finally {
// 				SplashScreen.hideAsync(); // Always hide the splash screen
// 			}
// 		}

// 		prepare();
// 	}, [onFinish]); // Dependency on onFinish

// 	const isVideoReady = async () => {
// 		try {
// 			const videoAsset = Asset.fromModule(
// 				require("../../assets/vid/UVic_logo.mp4")
// 			);
// 			await videoAsset.downloadAsync(); // Download the video
// 			return true;
// 		} catch (error) {
// 			console.error("Error loading video:", error);
// 			return false;
// 		}
// 	};

// 	return (
// 		<View style={styles.container}>
// 			<Video
// 				source={require("../../assets/vid/UVic_logo.mp4")}
// 				style={styles.video}
// 				resizeMode="contain"
// 				shouldPlay
// 				onPlaybackStatusUpdate={(status) => {
// 					if (status.didJustFinish) {
// 						onFinish();
// 					}
// 				}}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		backgroundColor: "#000",
// 	},
// 	video: {
// 		width,
// 		height,
// 	},
// });

// export default SplashScreenComponent;

import { useRef, React } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import authService from "../../services/getCredentials";

const LogoVideo = () => {
	const navigation = useNavigation();
	const handleEnd = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: authService.isLoggedIn ? "Home" : "Login" }],
		});
	};

	return (
		<View style={styles.container}>
			<Video
				source={require("../../assets/vid/UVic_logo.mp4")}
				style={styles.backgroundVideo}
				resizeMode="cover"
				shouldPlay
				onPlaybackStatusUpdate={(status) => {
					if (status.didJustFinish) {
						handleEnd();
					}
				}}
				isLooping={false}
				isMuted
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});

export default LogoVideo;
