import React from 'react';
import {View, Text , Button} from 'react-native';


//passing props in navigate in object

export default function HomeScreen({navigation,route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Sreen</Text>
      {route.params?<Text>{route.params.id}</Text>:<Text>{" "}</Text>}
        {/* <Text></Text>
        <Text></Text>
        <Text></Text> */}
        <Text 
          style={{fontSize:20,color:'blue'}}
          onPress={()=>{
         //  navigation.setOptions({ title: 'Updated!' })
            navigation.navigate("Details",{id:1234,name:'chetanya'})}}>
            Go to details
        </Text>
        <Text>hiiiiii</Text>
        <Button
          title="Go to Home... again"
          onPress={() => navigation.push('Home')}
          //onPress={() => navigation.push('Details')}
          // onPress={() => navigation.navigate('Details')}
        />
        {/* <Button
        title="Go to First Screen"
        onPress={()=>{
          navigation.popToTop()
        }}
        /> */}
      </View>
    );
  }




///////////////   to updatre counter from the update button in headre opn right or left
// function HomeScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation]);

//   return <Text>Count: {count}</Text>;
// }

// export default HomeScreen;