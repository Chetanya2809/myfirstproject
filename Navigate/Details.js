import React from 'react';
import {View, Text, Button } from 'react-native';

// function DetailsScreen({navigation}){

//     console.log(navigation)
//     return(
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>details Screen </Text>
//             <Text onPress={()=>{navigation.navigate('Home')}}>Go to Home </Text>
//         </View>
//     )
// }
// export default DetailsScreen;
function DetailsScreen({ route,navigation }) {
  // extracting params through route as params are passed and stored in rotes
 console.log('i am in navigation',navigation)
 // destructuring params
 const{id,name}=route.params
 console.log('ddcdc',id,name)


 return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* simply displaying the params */}
        <Text>{id}{name}</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() =>{ 
            navigation.push('Details',{id,name})}}
        /> */}
        <Button
        title="Go to Details... again"
        onPress={() =>{
          navigation.push('Details', {
            id: Math.floor(Math.random() * 100),
          })
          
        }
          
        }
      />
         <Button title="Go to Home" onPress={() => navigation.navigate('Home',{id:35454})} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
      title='Go to nested components'
      onPress={()=>{
        navigation.navigate('Nest');
      }}
      />
      </View>
    );
  }
  export default DetailsScreen;