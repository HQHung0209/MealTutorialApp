import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS } from '../../contain/theme'
import { FontAwesome } from '@expo/vector-icons';


const Icon = ({name,number}) => {
  return (
    <View style={styles.container}> 
      <FontAwesome name={name} size={30} color={COLORS.primary}/>
        {
          number 
          ? <Text style={styles.iconText}>{number}</Text>
          : <Text></Text>
        }
    </View>
  )
}

export default Icon