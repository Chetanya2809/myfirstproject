import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Settings({navigation}) {
  return (
    <View>
      <Text>Settings</Text>
      <Button
      title='Go back'
      onPress={()=>{
          navigation.goBack();
      }}
      />
    </View>
  )
}