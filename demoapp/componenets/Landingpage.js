import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Landingpage() {
    const navigation = useNavigation();

    useEffect(() => {
      // Navigate to the next screen after 3 seconds
      const timer = setTimeout(() => {
        navigation.navigate('NextScreen'); // Replace 'NextScreen' with your target screen name
      }, 3000);
  
      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [navigation]);
  

  return (
    <>
    <View style={styles.container}>  
      <StatusBar style="dark" />
      <View>
        <Text style={styles.titlediv}>Grow Smarter With Our  <Text style={styles.stylemainheading}>Kritim Krishi</Text></Text>
      </View>
      
      <View style={styles.logoanimationdiv}>
      <LottieView
      source={require('../assets/Animation - 1741714996424.json')}
      autoPlay
      loop
      style={styles.logoanimation}
      >
        </LottieView>
      </View>
      <View style={styles.imagestyling}>
        <Image 
        source = {require('../assets/download (1).png')}
        style={{ width: 900, height: 400 }} 
        resizeMode="contain" 
        >
        </Image></View>

    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems:'center',
    // justifyContent:'center'
    
  },
  titlediv:{
    position:'relative',
    top:100,
    height:'auto',
    width:'auto',
    // backgroundColor:'blue',
    fontSize:50,
    textAlign:'center',
  fontWeight:700,
  fontFamily:'Cochin',
  color:'black',



  },
  stylemainheading:{
    color:'green',
  },
  logoanimationdiv:{
    position:'relative',
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300,
    top:140
  },
  logoanimation:{
    height:500,
    width:500,
  },
  imagestyling:{
    
    top:158,
  left:5,
    position:'relative',
    height:320,
    width:800,
    backgroundColor:'balck',
   
    alignItems:'center',
    
    justifyContent:'center'
  }
,

});
