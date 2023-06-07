import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Menu(prop) {
  return (
    <View>
      <View style={styles.viewBack}>
        <Text style={styles.txt}>{prop.datos.strCategory}</Text>
        <Text></Text>
        <View style={styles.view}>
          <Image style={styles.img} source={{uri: prop.datos.strCategoryThumb}}/>
          <Text style={styles.txt2}>{prop.datos.strCategoryDescription}</Text>
        </View>
      </View>
      <Text> </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      alignContent: 'center',
      alignItems: 'center'
  },
  img: {
      width: 120,
      height: 250,
      left: 20,
      borderColor:'gray',
      marginBottom:30,
      borderWidth:2,
  },
  txt:{
      fontSize:40,
      textAlign: 'center'
  },
  txt2:{
    width: 210,
    fontSize:15,
    textAlign: 'center',
    left: 45,
    marginBottom:30,

},
  view:{
    flexDirection:'row',
  },
  viewBack:{
    backgroundColor: '#80ffff'
  }
  
});