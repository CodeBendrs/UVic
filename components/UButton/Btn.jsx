import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./btn.style";

const Btn = ({ text, action }) => {
	return (
		<TouchableOpacity onPress={action}>
			<View style={styles.btn}>
				<Text
					style={{
						color: "#fff",
						fontWeight: 600,
					}}
				>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Btn;
