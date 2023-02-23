import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./styles";
import Icon from "../Icon";
import { useDispatch, useSelector } from 'react-redux';
import { toogleFavorite } from "../../store/slices/favorite";

const FlatCategory = ({ id, title, thumb, view, favorite, onPress }) => {

    const dispatch = useDispatch()
    const favoriteData = useSelector(state => state.favorite.items)
    const isFavotite = favoriteData.includes(id)
    const iconFavorite = isFavotite ? 'heart' : 'heart-o'
    const numberFavorite = isFavotite ? favorite + 1 : favorite

    const changeFavorite = () => {
        dispatch(toogleFavorite({ id }))
    }
  
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={thumb} />
                </View>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.productIcon}>
                    <TouchableOpacity onPress={changeFavorite} style={styles.icon}>
                        <Icon name={iconFavorite} number={numberFavorite} />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <Icon name={'eye'} number={view} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FlatCategory