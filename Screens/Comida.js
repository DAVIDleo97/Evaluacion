import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../Components/Menu'

export default function Comida() {

const [comida, setcomida] = useState('')

useEffect(() => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(response => response.json())
  .then(data => setcomida(data.categories))
}, [])

console.log(comida)

  return (
    <View style={styles.container}>
      <FlatList
        data={comida}
        renderItem={({item}) =>
        <Menu datos={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});