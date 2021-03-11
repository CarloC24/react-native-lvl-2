import React from 'react';
import {SafeAreaView,Text,ScrollView} from "react-native";
import ListItem, { Seperator } from '../components/ListItem';
import nachoArray from '../data/nacho';




export default function CurrentListView():JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView>
                {nachoArray.map(({id,name}:any) => {
                    return (
<>
                    <ListItem id={id} name={name}/>
                    <Seperator />
                    </>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
