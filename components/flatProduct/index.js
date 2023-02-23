import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from '../Icon'
import { useDispatch } from 'react-redux'
import { removeProductFavorite } from "../../store/slices/favorite";
import { removeProductView } from "../../store/slices/view";

const FlatProduct = ({ heart, title, thumb, id, navigation }) => {

    const dispatch = useDispatch()

    const trashProduct = () => {
        Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa hay không ?', [
            {
                text: 'Hủy',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Đồng ý', onPress: () => {
                    heart
                        ? dispatch(removeProductView({ id }))
                        : dispatch(removeProductFavorite({ id }))
                }
            },
        ])

    }


    const changeScreenProducrt = () => {
        navigation.navigate('ProductScreen', {
            productID: id,
            productName: title
        })
    }

    return (
        <TouchableOpacity onPress={changeScreenProducrt} style={styles.productBox}>
            <View style={styles.product}>
                <View style={styles.productBoxImage}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <View style={styles.productBoxTitle}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
            <View style={styles.icon}>
                {
                    heart
                        ? (<View style={styles.iconBox}>
                            <Icon name={'heart'} />
                        </View>)
                        : <View />
                }
                <TouchableOpacity onPress={trashProduct} style={styles.iconBox}>
                    <Icon name={'trash'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FlatProduct