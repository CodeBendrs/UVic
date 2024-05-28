import React, { useState, useRef } from "react";
import { ActivityIndicator } from "react-native"; // Import ActivityIndicator
import { WebView } from "react-native-webview";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import authService from "../../services/getCredentials";

const MyWebView = () => {
	const [isLoading, setIsLoading] = useState(false);

	const webViewRef = useRef(null);

	const injectFormSubmissionScript = () => {
		const script = `
		(function() {

			setTimeout(() => {

			document.getElementById('username').value = '${authService.username}';
			document.getElementById('password').value = '${authService.password}';

			document.getElementById('form-submit').click();
			}, 1000); // 1-second delay
		})();
    `;

		webViewRef.current.injectJavaScript(script);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={{ flex: 1 }}>
				<WebView
					ref={webViewRef}
					source={{
						uri: "https://www.uvic.ca/cas/login?service=https%3A%2F%2Fwww.uvic.ca%2Ftools%2Findex.php",
					}}
					onLoadEnd={injectFormSubmissionScript} // Hide when loading finishes
				/>
				{isLoading && (
					<ActivityIndicator
						size="large"
						color="#0000ff"
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
						}}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default MyWebView;
