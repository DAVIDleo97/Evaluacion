import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Modal, Button } from 'react-native'
import React, { useState } from 'react'

export default function Producto(prop) {

    const [modalVisible, setmodalVisible] = useState(false)

  return (
    <View style={styles.container}>
        
        <View style={styles.viewBack}>
            <TouchableOpacity style={styles.center} onPress={() => setmodalVisible(true)}>
                <Text style={styles.txtoscuro}>{prop.datos.name}</Text>
                <Text></Text>
            </TouchableOpacity>
        </View>
        <Text> </Text>
        

        <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}        
        >
            <View style={styles.modal}>
                <Image style={styles.img} source={{uri: prop.datos.image}}/>
                <Text style={styles.txt}>{prop.datos.price}</Text>
                <Text style={styles.txt}>{prop.datos.name}</Text>
                <Button onPress={ ()=> setmodalVisible(false)} title='cerrar'/>
            </View>

        </Modal>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        textAlign: 'center'
    },
    viewBack:{
        backgroundColor: '#80ffff',
    },
    center:{
        alignContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 200
    },
    txt:{
        fontSize:25,
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    txtoscuro:{
        fontSize:25,
        textAlign: 'center',
        textAlignVertical: 'auto'
    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
});
