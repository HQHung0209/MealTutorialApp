import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { FlatProduct } from "../../components";
import { PRODUCTS } from "../../data";
import { useSelector } from 'react-redux';
import { COLORS } from '../../contain/theme';

const SeenScreen = ({ navigation }) => {

    const viewed = useSelector(state => state.viewed.items)
    const products = viewed.map(itemID => PRODUCTS.find(item => item.id === itemID))


    const renderGridProduct = ({ item }) => {
        return (
            <FlatProduct
                heart
                id={item.id}
                title={item.title}
                thumb={item.thumb}
                navigation={navigation}
            />
        )
    }

    const renderEmpty = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: COLORS.title, fontWeight: '400' }}>Danh sách đang rỗng</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderGridProduct}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    )
}

export default SeenScreen