import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stopwatch from './screens/Stopwatch';
import { useState } from "react";

export default function App() {
  let [time, setTime] = useState(Date.now());
  return (
    <View style={styles.container}>
      {/* Screens */}
      <Stopwatch/>
      {/* Make Status Bar Visible */}
      <StatusBar style="dark" backgroundColor="#0fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
