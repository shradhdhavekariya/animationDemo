// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React, {useRef, useState} from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
//   View,
//   TouchableOpacity,
//   Text,
//   Animated,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import {Button, Box, NormalText} from './src/component';
//
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const handleViewRef = useRef();
//   const handleTextRef = useRef();
//   const [fontSize, setFontSize] = useState();
//   const [fadeValue, setFadeValue] = new Animated.Value(0);
//
//   // MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
//   const bounce = () => {
//     handleViewRef.current
//       .bounce(800)
//       .then(endState =>
//         console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
//       );
//   };
//   const fadeIn = {
//     from: {
//       opacity: 0,
//     },
//     to: {
//       opacity: 1,
//     },
//   };
//
//   const _start = () => {
//     return Animated.timing(fadeValue, {
//       toValue: 1, // output
//       duration: 3000, // duration of the animation
//     }).start();
//   };
//
//   return (
//     <Box as={SafeAreaView} flex={1}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       {/*<ScrollView contentInsetAdjustmentBehavior="automatic">*/}
//       {/*<Button onPress={() => setFontSize((fontSize || 10) + 5)}>*/}
//       {/*  <Animatable.Text*/}
//       {/*    transition="fontSize"*/}
//       {/*    style={{fontSize: fontSize || 15}}>*/}
//       {/*    Size me up, Scotty*/}
//       {/*  </Animatable.Text>*/}
//       {/*</Button>*/}
//       {/*<Button*/}
//       {/*  onPress={bounce}*/}
//       {/*  style={styles.button}*/}
//       {/*  background={'lightcoral'}*/}
//       {/*  width={'50%'}*/}
//       {/*  alignSelf={'center'}*/}
//       {/*  p={10}*/}
//       {/*  m={2}>*/}
//       {/*  <Animatable.View ref={handleViewRef}>*/}
//       {/*    <NormalText>Bounce me!</NormalText>*/}
//       {/*  </Animatable.View>*/}
//       {/*</Button>*/}
//       {/*<Animated.View*/}
//       {/*  style={{*/}
//       {/*    opacity: fadeValue,*/}
//       {/*    height: 250,*/}
//       {/*    width: 200,*/}
//       {/*    margin: 5,*/}
//       {/*    borderRadius: 12,*/}
//       {/*    backgroundColor: '#347a2a',*/}
//       {/*    justifyContent: 'center',*/}
//       {/*  }}>*/}
//       {/*  <Text style={styles.text}>Fade</Text>*/}
//       {/*</Animated.View>*/}
//       {/*<Button>*/}
//       {/*<TouchableOpacity style={styles.btn} onPress={() => _start()}>*/}
//       {/*  <Text style={styles.textBtn}>Start</Text>*/}
//       {/*</TouchableOpacity>*/}
//       {/*<Button*/}
//       {/*  onPress={() =>*/}
//       {/*    handleTextRef.current.transitionTo({opacity: new Animated.Value(1)})*/}
//       {/*  }>*/}
//       {/*  <Animatable.Text ref={handleTextRef}>Fade me in</Animatable.Text>*/}
//       {/*</Button>*/}
//       {/*</ScrollView>*/}
//     </Box>
//   );
// };
//
// export default App;
// const styles = StyleSheet.create({
//   textBtn: {
//     color: '#f4f4f4',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
import React from 'react';
import Navigator from './src/navigator';

const App = () => {
  return <Navigator />;
};

export default App;
