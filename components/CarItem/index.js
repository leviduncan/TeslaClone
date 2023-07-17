import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles'
import { StyledButton } from '../StyledButton';

export const CarItem = (props) => {
  const { title, img } = props
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require(`../../assets/images/ModelX.jpeg`)}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="custom order"
          onPress={() => {
            console.warn("Custom Order was pressed")
          }} />
        <StyledButton
          type="secondary"
          content="existing inventory"
          onPress={() => {
            console.warn("Existing Inventory was pressed")
          }} />
      </View>
    </View>
  )
}
