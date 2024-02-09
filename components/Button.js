import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, handle }) {
  return (
    <View style={styles.btnContainer}>
      <Pressable style={styles.btn} onPress={()=>handle()}>
        <Text style={styles.btnLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 160,
    height: 60,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
},
btn: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#9ff',
    borderColor: '#0112',
    borderWidth:2
  },

  btnLabel: {
    color:'#115',
    fontSize: 16,
    fontWeight:'600'
  }
});
