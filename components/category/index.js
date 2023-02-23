import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./styles";
const Category = ({ title, thumb, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.productImg}>
                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={thumb} />
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Category