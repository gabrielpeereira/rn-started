import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetails 
                imageSource={require('../../assets/forest.jpg')}
                title="Forest" 
                score={9}  
                />
            <ImageDetails 
                imageSource={require('../../assets/beach.jpg')}
                title="Beach"
                score={7}  
                />
            <ImageDetails 
                imageSource={require('../../assets/mountain.jpg')}
                title="Montain"
                score={10}   
                />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;