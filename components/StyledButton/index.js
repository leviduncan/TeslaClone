import React from 'react'
import { Text, View, Pressable } from 'react-native';
import styles from './styles'

export const StyledButton = (props) => {

  const {type, onPress, content} = props


  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'

  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}
