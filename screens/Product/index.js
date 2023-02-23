import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './style'

import { Icon } from '../../components'

import { PRODUCTS } from "../../data";
import { addNewProductView } from "../../store/slices/view";
import { useDispatch, useSelector } from 'react-redux';
import { toogleFavorite } from "../../store/slices/favorite";


const ProductScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const favorites = useSelector(state => state.favorite.items)
    const viewed = useSelector(state => state.viewed.items)

    const { productID, productName } = route.params
    const product = PRODUCTS.find(item => item.id === productID)
    const { id, categoryId, title, thumb, view, favorite, intro, ingredients, instructions } = product


    const isFavorite = favorites.includes(id);
    const isViewed = viewed.includes(id);
    const iconFavorite = isFavorite ? 'heart' : 'heart-o'
    const totalFavorite = isFavorite ? favorite + 1 : favorite
    const totalView = isViewed ? view + 1 : view

    useEffect(() => {
        dispatch(addNewProductView({ id }))
    }, [])

    const onFavorite = () => {
        dispatch(toogleFavorite({ id }))
    }

    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('../../assets/background.png')} />
            <View style={styles.productImage}>
                <Image style={styles.image} source={thumb} />
                <TouchableOpacity onPress={onFavorite} style={[styles.productImgIcon, styles.productImgIconLeft]}>
                    <Icon name={iconFavorite} number={totalFavorite} />
                </TouchableOpacity>
                <View style={[styles.productImgIcon, styles.productImgIconRight]}>
                    <Icon name={'eye'} number={totalView} />
                </View>
            </View>
            <View style={styles.productContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.productContenttext}>{intro}</Text>
                    <View style={styles.productContentBox}>
                        <View style={styles.productContentBoxTitle}>
                            <Text style={styles.textTitle}>Nguyên liệu</Text>
                        </View>
                        <Text style={[styles.text, styles.productContentBoxContent]}>
                            {ingredients}
                        </Text>
                    </View>
                    <View style={styles.productContentBox}>
                        <View style={styles.productContentBoxTitle}>
                            <Text style={styles.textTitle}>Cách làm</Text>
                        </View>
                        <Text style={[styles.text, styles.productContentBoxContent]}>
                            {instructions}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ProductScreen