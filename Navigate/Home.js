import React from 'react';
import {View, Text , Button} from 'react-native';


//passing props in navigate in object

export default function HomeScreen({navigation,route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      {route.params?<Text>{route.params.id}</Text>:<Text>{""}</Text>}
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text 
        style={{fontSize:20,color:'blue'}}
        
        onPress={()=>{navigation.navigate("Details",{id:1234,name:'chetanya'})}}>
            Go to details
        </Text>
        <Button
          title="Go to Home... again"
          onPress={() => navigation.push('Home')}
          //onPress={() => navigation.push('Details')}
          // onPress={() => navigation.navigate('Details')}
        />
        <Button
        title="Go to First Screen"
        onPress={()=>{
          navigation.popToTop()
        }}
        />
      </View>
    );
  }