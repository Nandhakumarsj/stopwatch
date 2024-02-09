import { StyleSheet, View } from "react-native"
import Button from "../components/Button";
import { useEffect, useState, version } from "react";
import Timer from "../components/Timer";

const randomMilli = () => {
    return Math.random() * (30 - 20) + 20 // produces 30 to 40 random Milli seconds
}

let Stopwatch = () => {
    // States
    const [isLive, setIsLive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    let milli = null;

    // Logic
    useEffect(()=>{
        let interval = null;
        if (isLive && isPaused === false){
            milli = randomMilli();
            interval = setInterval(()=>setTime((time)=>time+milli), milli);
        }
        else{
            clearInterval(interval);
        }
        return ()=> {
            clearInterval(interval);
        };
    }, [isLive, isPaused]);

    // Handles
    const startHandler = () => {
        setIsLive(true);
        setIsPaused(false);
    }
    const pauseHandler = () => {
        setIsPaused(!isPaused);
    }
    const resetHandler = () => {
        setIsLive(false);
        setTime(0);
    }

    // State Based Buttons
    const startButton = (
        <Button label={"Start"} handle={startHandler}/>
    );
    const liveButtons = (
        <View>
    <Button label={"Reset"} handle={resetHandler} />
    <Button label={isPaused?"Resume":"Pause"} handle={pauseHandler} /></View>
    );
    return(
            <View style={styles.screen}>
                <Timer time={time} />
                {isLive?liveButtons:startButton}
            </View>
    );
}

export default Stopwatch;

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: "space-around",
    }
});