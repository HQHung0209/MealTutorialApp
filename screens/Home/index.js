import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { Category } from '../../components';
import { CATEGORIES } from "../../data";



const HomeScreen = ({ navigation }) => {

    const changeScreen = () => {
        navigation.push('CategoryScreen', {})
    }

    const renderGridCategory = ({ item }) => {
        return (
            <Category
                title={item.title}
                thumb={item.thumb}
                onPress={() => {
                    navigation.push('CategoryScreen', {
                        categoryId : item.id,
                        categoryName : item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderGridCategory}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default HomeScreen