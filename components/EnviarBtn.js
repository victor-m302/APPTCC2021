import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image, SafeAreaView} from 'react-native';
//import {UploadMedia} from '../components/uploadMedia.js'
import * as ImagePicker from 'expo-image-picker'


export default function EnviarBtn(props) {
  const [image, setImage] = useState(null) 
  const [storage_alt, setStorage_alt] = useState(null)
  const [storage_img, setStorage_img] = useState(null)
  useEffect(async () => {
      if(Platform.OS !== 'web'){
          const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if(status !== 'granted'){
              alert('permissão negada!')
          }
      }
  }, [])

/*

Object {
  "cancelled": false,
  "duration": 2632,
  "height": 1080,
  "rotation": 90,
  "type": "video",
  "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fapp-alt-d76f2638-43a4-474f-9002-cf8b1e4c3491/ImagePicker/82379928-e6ca-4af5-a66c-1e25d9e6d4f0.mp4",
  "width": 1920,
*/


  const enviaVideo = () => {
    PickVideos() 
  };

  const enviaImagem = async () => {
    PickImage()
  };


  const verificaTipoEnvio = () => {
    if(props.select==1){
      enviaVideo()
    }
    else{
      enviaImagem()
    }
  };  

  const PickVideos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        aspect:[4,3],
        quality:1
    })
    //setStorage_alt(result)
    if(!result.cancelled){
        setImage(result.uri)
        alert(result.uri)
    }


}


const PickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect:[4,3],
      quality:1
  })

  if(!result.cancelled){
      setImage(result.uri)
      alert(result.uri)
  }
}

  return (

    <View style={styles.screen}>
      <TouchableOpacity
        onPress={verificaTipoEnvio}
        style={styles.official}>
        <Text>Envio de {props.whatever}</Text>
      </TouchableOpacity>
      </View>
  )


}
/*

        {image && <Image source={{ uri: image }} style={{
          width: 200,
          height: 200,
        }}
        />}

function EnviarBtn(props) {
  return (

  );
}

      <TouchableOpacity
        onPress={verificaTipoEnvio}
        style={styles.official}>
        <Text>Envio de {props.whatever}</Text>
      </TouchableOpacity>
*/


/// Just some styles
const styles = StyleSheet.create({
  screen: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  official: {
      borderWidth:3,
      marginTop: 20,
      borderColor:'rgba(151, 0, 255, 1)',
      alignItems:'center',
      justifyContent:'center',
      width:200,
      height:50,
      backgroundColor:'#fff',
      borderRadius:6,
  }
});


