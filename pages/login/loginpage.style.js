import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 24,
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		marginVertical: 36,
	},
	headerImg: {
		width: 200,
		height: 100,
		alignSelf: "center",
		marginTop: 130,
		marginBottom: 50,
		objectFit: "contain",
	},
	InputField: {
		borderColor: "#d3d3d3",
		borderWidth: 1,
		borderRadius: 15,
		marginTop: 10,
		marginBottom: 10,
		height: 60,
		padding: 20,
		fontSize: 15,
	},
});

export default styles;
