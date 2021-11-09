import React, {useState, useEffect} from 'react'
import DocumentPicker from 'react-native-document-picker'
import { StyleSheet, Text, View, TouchableOpacity, Image, PlatformColor } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function UploadMedia() {
    const [image, setImage] = useState(null) 
    useEffect(async () => {
        if(Platform.OS !== 'web'){
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted'){
                alert('permissão negada!')
            }
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[4,3],
            quality:1

        })
        console.log(result);
        if(!result.cancelled){
            setImage(result.uri)
        }
    }
    return (
        <View>
            <TouchableOpacity onPress={PickImage}>
                
            <Text>aaaa</Text>
            </TouchableOpacity>
        </View>
    )


} /*

{image && <Image source={{uri:image}} style={{
                    width: 200,
                    height: 200,
                }}
                />}
*/
