import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
      title='go to settings'
      onPress={()=>{
          navigation.navigate('Settings')
      }}
      />
      <Button
      title='Go back'
      onPress={()=>{
          navigation.goBack();
      }}
      />
    </View>
  )
}