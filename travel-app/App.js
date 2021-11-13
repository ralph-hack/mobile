import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles/styles';

export default function App() {
  return (
   
   <View style={styles.header}>
    <View style={{ flex: 0.6}}>
       <Text  style={styles.headerText}>Find Your Next trip!</Text>
       </View>
       <View style={{ flex: 0.2}}>
              <Image 
              source={require('./assets/images/img.png')}
              style={styles.headerImage} />
              </View>
       
    </View>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// import React from 'react';
// import { SafeAreaView, Text, View, Image } from 'react-native';
// import { styles } from './styles/styles';
// export default function App() {
//   return (
  
//     <View>
//       <SafeAreaView  style={styles.header}> 
//       <View style={{ flex: 0.6}}>
//       <Text  style={styles.headerText}>Find Your Next trip!</Text>
//       </View>
//       <View style={{ flex: 0.2}}>
//       <Image  style={styles.headerImage} />
//       </View>
//       </SafeAreaView>
//     </View>
//   );
// }

