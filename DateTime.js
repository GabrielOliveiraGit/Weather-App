//rafce create a function componet for react
import React, {useEffect, useState} from 'react';
import { size } from 'lodash';
import { Text, View, StyleSheet } from 'react-native';

const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const months = ['de Janeiro', 'de Fevereiro', 'de Março', 'de Abril', 'de Maio', 'de Junho', 'de Julho', 'de Agosto', 'de Setembro', 'de Outubro', 'de Novembro', 'de Dezembro'];

//function component
const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.WeatherItem}>
            <Text style={styles.WeatherItemTitle}>{title}</Text>
            <Text style={styles.WeatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = (curretn, lat, lon, timezone) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? ' Pm' : ' Am'

            setTime((hoursIn12HrFormat < 10? '0' +hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+ minutes: minutes)+ '' + ampm) 

            setDate(days[day] + ', '+ date+ ' ' + months[month])
        }, 1000);
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>{time}</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>{date}</Text>
                </View>
                <View style={styles.WeatherItemContainer}>
                    <WeatherItem title="Umidade" value={current.humidity} unit="%" />
                    <WeatherItem title="Pressão" value={current.pressure} unit="mBar" />
                    <WeatherItem title="Amanhecer" value={current.sunrise} unit="am" />
                    <WeatherItem title="Anoitecer" value={current.sunset} unit="pm" />
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.Timezone}>{timezone}</Text>
                <Text style={styles.Latitudelongitude}>{lat}N {lon}F</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    heading: {
        marginTop: 40,
        fontSize: 40,
        color: 'white',
        fontWeight: '100'
    },

    subheading: {
        fontSize: 23,
        marginTop:10,
        color: '#eee',
        fontWeight: '300'

    },
    subheading2: {
        fontSize: 25,
        marginTop:0,
        color: '#eee',
        fontWeight: '300'
    },

    rightAlign:{
        textAlign: 'right',
        marginTop: 40,
        marginLeft: -100
    },

    Timezone:{
        fontSize: 20,
        color: 'white',
        //marginLeft: -200
    },

    Latitudelongitude:{
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },

    WeatherItem:{
        flexDirection:"row",
        justifyContent: 'space-between' 
    },

    WeatherItemContainer:{
        backgroundColor: '#00000033',
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
    },

    WeatherItemTitle:{
        color: '#eee',
        fontSize: 14,
        fontWeight: '100'
    },
})
export default DateTime
