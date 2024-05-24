import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image
          source={require("./assets/Uvic_logo.png")}
          style={styles.headerImg}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

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
    marginTop: 150,
  },
});
