import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { FlatCategory } from "../../components";

import { PRODUCTS } from "../../data";

const CategoryScreen = ({ navigation, route }) => {
    const categotyId = route.params.categoryId
    const categoryName = route.params.categoryName
    const productData = PRODUCTS.filter(item => item.categoryId === categotyId)
    const renderGridProduct = ({ item }) => {
        return (
            <FlatCategory
                id={item.id}
                title={item.title}
                thumb={item.thumb}
                view={item.view}
                favorite={item.favorite}
                onPress={() => {
                    navigation.push('ProductScreen', {
                        productID: item.id,
                        productName: item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={productData}
                renderItem={renderGridProduct}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoryScreen