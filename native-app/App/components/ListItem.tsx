import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

type AppProps = {
    id:string,
    name:string
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        backgroundColor:"#fff",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        fontSize:18,
        color:"#69696969"
    },
    icon: {
        height:30,
        tintColor:"#69696969",
        width:30
    },
    seperator: {
        height:1,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.2)"
    }
})

export const Seperator = () => {
    return (
        <View style={styles.seperator}>
        </View>
    )
}

export default function ListItem({id,name}:AppProps) {
    return (
        <View style={styles.container}key={id}>
            <Text style={styles.text}>{name}</Text>
            <Image
                source={require("../../assets/ios-star-outline.png")}
                style={styles.icon}
                resizeMode="contain"
            />

        </View>
    )
}



