import React from 'react';
import {View, Text, Button} from 'react-native';

//passing props in navigate in object

export default function HomeScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>First Home Sreen</Text>
      {route.params ? <Text>{route.params.id}</Text> : <Text> </Text>}
      <Text
        style={{fontSize: 20, color: 'blue'}}
        onPress={() => {
          navigation.navigate('Details', {id: 1234, name: 'chetanya'});
        }}>
        Go to details
      </Text>
      <Text>hiiiiii</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.push('Home')}
      />
      <Button
        title="Go To Bottom Tab"
        onPress={() => navigation.navigate('Bottom')}
      />
    </View>
  );
}
