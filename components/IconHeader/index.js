import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../contain/theme'
import { FontAwesome } from '@expo/vector-icons';
import { removeAllProduct } from "../../store/slices/favorite";
import { removeAllProductView } from "../../store/slices/view";

import { useDispatch, useSelector } from "react-redux";

const IconHeader = ({ seen, data }) => {

    const dispatch = useDispatch()

    const favorites = useSelector((state) => state.favorite.items)
    const viewed = useSelector((state) => state.viewed.items)


    const trashAllProduct = () => {
        if (data.length !== 0) {
            Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa tất cả ?', [
                {
                    text: 'Hủy',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý', onPress: () => {
                        seen
                            ? dispatch(removeAllProductView())
                            : dispatch(removeAllProduct())
                    }
                },
            ])
        } else {
            alert('Chua co san pham ')
        }

    }

    return (
        <View>
            <TouchableOpacity onPress={trashAllProduct} style={styles.container}>
                <FontAwesome name={'trash'} size={30} color={COLORS.second} />
            </TouchableOpacity>
        </View>
    )
}

export default IconHeader