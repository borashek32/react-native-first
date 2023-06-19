import {
  ActivityIndicator,
  Button, Dimensions,
  FlatList,
  Image, ListRenderItem,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {useState} from "react"


const {width, height} = Dimensions.get('screen')
// best practice
const WIDTH = width // all width
const HEIGHT = height // all height

const titles = ['iphone', 'samsung', 'siemens', 'nokia']
const prices = [234, 674, 890, 564]

type ItemType = {
  id: number,
  title: string,
  price: number
}

export default function App() {

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'yellow'}} />
      <View style={{flex: 1, backgroundColor: 'white'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
