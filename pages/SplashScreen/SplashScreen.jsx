import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import * as SplashScreen from "expo-splash-screen";

const { width, height } = Dimensions.get("window");

const SplashScreenComponent = ({ onFinish }) => {
	useEffect(() => {
		async function prepare() {
			try {
				onFinish();
			} catch (e) {
				console.warn("Error in splash screen:", e);
				onFinish(); // Proceed even if there's an error
			} finally {
				SplashScreen.hideAsync(); // Always hide the splash screen
			}
		}

		prepare();
	}, [onFinish]); // Dependency on onFinish

	const isVideoReady = async () => {
		try {
			const videoAsset = Asset.fromModule(
				require("../../assets/vid/UVic_logo.mp4")
			);
			await videoAsset.downloadAsync(); // Download the video
			return true;
		} catch (error) {
			console.error("Error loading video:", error);
			return false;
		}
	};

	return (
		<View style={styles.container}>
			<Video
				source={require("../../assets/vid/UVic_logo.mp4")}
				style={styles.video}
				resizeMode="contain"
				shouldPlay
				onPlaybackStatusUpdate={(status) => {
					if (status.didJustFinish) {
						onFinish();
					}
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000",
	},
	video: {
		width,
		height,
	},
});

export default SplashScreenComponent;
