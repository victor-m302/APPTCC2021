import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'react-native-axios'

// get funfa e axios post https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples
//https://stackoverflow.com/questions/52830312/how-to-upload-image-to-server-using-axios-in-react-native

function API() {

    const [searchCEP,setSearchCEP] = useState('')
    const [infoCEP,setInfoCEP] = useState('')
    const getCEP = async () => {
        const {data} = await axios.get('http://127.0.0.1:5000/') //endereço url aqui
        console.log(data);
        setInfoCEP(data)
        
    }

 return (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text>API: {infoCEP}</Text>
 <TouchableOpacity style={stylesB.buttonLegenda}
    onPress={
        () => {
            alert('ok')
            getCEP()
        }
    }
    >
     <Text style={stylesB.textoLegenda}>Legenda</Text>
 </TouchableOpacity>
 </View>
 );
};

const stylesB = StyleSheet.create({
    buttonLegenda: {
        backgroundColor: 'purple',
        padding:10
    },
    textoLegenda: {
        color: 'white'
    },    
})

export default API;