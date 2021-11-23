import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'

import FutureForecast from './FutureForecast'

const ClimaScrollBar = () => {
    return (
        <ScrollView horizontal={true} style={styles.ScrollView}>
           <CurrentTempEl/> 
        <FutureForecast/>
        </ScrollView>
    )
}

const CurrentTempEl = () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        <View style={styles.CurrentTempContainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Segunda-Feira</Text>
                <Text style={styles.temp}>Dia - 28&#176;C</Text>
                <Text style={styles.temp}>Noite - 35&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ScrollView: {
        flex: 0.4,
        backgroundColor: '#00000033',
        borderTopColor: '#eee',
        borderWidth: 1,
        padding: 30
    },
    image: {
        width: 150,
        height: 150
    },
    CurrentTempContainer:{
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 10
    },
    day:{
        fontSize: 20,
        color: "white",
        fontWeight:"200",
        textAlign:"center",
        backgroundColor: "#3c3c44",
        padding: 10,
        marginBottom: 15,
        borderRadius: 50
    },
    temp:{
        fontSize: 16,
        color: "white",
        fontWeight: "100",
        textAlign: "center"
    },
    otherContainer:{
        paddingRight: 30,
    },
})
export default ClimaScrollBar
