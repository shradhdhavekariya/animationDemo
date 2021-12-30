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
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {NormalText, Box, Button} from '../../component';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const [fontSize, setFontSize] = useState((fontSize || 10) + 5);
  const [opacity, setOpacity] = useState(1);
  const [animation, setAnimation] = useState();
  const [toggledOn, setToggledOn] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState();
  const handleViewRef = useRef();
  const handleTextRef = useRef();
  const handleViewRef2 = useRef();
  const bounce = () => {
    handleViewRef.current
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
      );
  };

  return (
    <Box as={SafeAreaView}>
      <Button onPress={() => setFontSize((fontSize || 10) + 5)}>
        <Animatable.Text
          transition="fontSize"
          style={{fontSize: fontSize || 15}}>
          Size me up, Scotty
        </Animatable.Text>
      </Button>
      <Button
        onPress={bounce}
        style={styles.button}
        background={'lightcoral'}
        width={'50%'}
        alignSelf={'center'}
        p={10}
        m={2}>
        <Animatable.Text ref={handleViewRef}>Bounce me!</Animatable.Text>
      </Button>
      <TouchableWithoutFeedback
        onPress={() => {
          setOpacity(!opacity);
        }}>
        <Animatable.Text
          transition="opacity"
          style={{opacity: opacity ? opacity : 0.2}}
          ref={handleTextRef}>
          Fade me!
        </Animatable.Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setAnimation('zoomIn');
        }}>
        <Animatable.Text animation={animation}>Zoom me out</Animatable.Text>
      </TouchableWithoutFeedback>
      <Button onPress={() => setToggledOn(!toggledOn)}>
        <Text
          style={[styles.toggle, toggledOn && styles.toggledOn]}
          transition={['color', 'rotate', 'fontSize']}>
          Toggle me!
        </Text>
      </Button>
      <TouchableWithoutFeedback onPress={() => setSlideAnimation('zoomInDown')}>
        <View ref={handleViewRef2}>
          <Text
            // style={[styles.toggle, toggledOn && styles.toggledOn]}
            animation={slideAnimation}
            // transition={['color', 'rotate', 'fontSize']}
          >
            SLIDE IN UP
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  button: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBtn: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggle: {
    width: 120,
    backgroundColor: 'pink',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [
      {
        rotate: '5deg',
      },
      {
        translateY: -20,
      },
    ],
  },
});
