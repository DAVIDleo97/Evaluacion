import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Producto from '../Components/Producto'

export default function Licores() {

    const [bebida, setbebida] = useState({})

    useEffect(() => {
        fetch("https://api.sampleapis.com/beers/ale/")
        .then(response => response.json())
        .then(data => setbebida(data))
    }, [])
    
      //console.log(bebida)

  return (
    <View>
        <Text style={{fontSize: 20, color: 'red'}}>clic para ver imagen y precio</Text>
        <FlatList
        data={bebida}
        renderItem={({item}) =>
        <Producto datos={item}/>
        }
      />
    </View>
  )
}
