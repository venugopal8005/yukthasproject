import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import LottieView from 'lottie-react-native';
export default function App() {
  return (
    <>
    <View style={styles.container}>  
      <StatusBar style="dark" />
      <View>
        <Text style={styles.titlediv}>Grow Smarter With Our <Text style={styles.stylemainheading}>Kritim Krishi</Text></Text>
      </View>
      
      <View style={styles.logoanimationdiv}>
      <LottieView
      source={require('./assets/Animation - 1741714996424.json')}
      autoPlay
      loop
      style={styles.logoanimation}
      >
        </LottieView>
      </View>
      <View style={styles.imagestyling}>
        <Image 
        source = {require('./assets/download (1).jpg')}
        style={{ width: 700, height: 400 }} 
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
    height:400,
    width:400,
    top:140
  },
  logoanimation:{
    height:500,
    width:500,
  },
  imagestyling:{
    
    top:165,
  left:5,
    position:'relative',
    height:320,
    width:400,
   
    alignItems:'center',
    
    justifyContent:'center'
  }
});
