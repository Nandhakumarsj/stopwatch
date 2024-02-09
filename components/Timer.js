import { StyleSheet, Text } from "react-native";

export default function Timer({time}){
    return(
            <Text style={styles.txt}>
                {/* Manual Time Separation */}
                {("0" + Math.floor((time/360000)%60)).slice(-2)}{" : "}
                {("0" + Math.floor((time/60000)%60)).slice(-2)}{" : "}
                {("0" + Math.floor((time/1000)%60)).slice(-2)}{" : "}
                {("0" + Math.floor((time/10)%100)).slice(-2)}
            </Text>
    );
}
const styles = StyleSheet.create({
    txt : {
        fontSize:30,
        fontWeight: '500',
    }
});