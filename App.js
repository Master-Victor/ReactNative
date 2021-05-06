import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput, Dimensions, Button, TouchableHighlight, TouchableNativeFeedback
,TouchableOpacity, ScrollView, FlatList, SectionList} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const data = [
  { key: '1', name: 'Romi Te amo' },
  { key: '2', name: 'Te extraño' },
  { key: '3', name: 'para cuando los mimitos? :)' },
  { key: '4', name: 'sos lo mas' },
  { key: '5', name: 'espero te salga todo bien!'},
  { key: '6', name: 'Romi Te amo' },
  { key: '7', name: 'Te extraño' },
  { key: '8', name: 'para cuando los mimitos? :)' },
  { key: '9', name: 'sos lo mas' },
  { key: '10', name: 'espero te salga todo bien!'},
  { key: '11', name: 'Romi Te amo' },
  { key: '12', name: 'Te extraño' },
  { key: '13', name: 'para cuando los mimitos? :)' },
  { key: '14', name: 'sos lo mas' },
  { key: '15', name: 'espero te salga todo bien!'},
  { key: '16', name: 'Romi Te amo' },
  { key: '17', name: 'Te extraño' },
  { key: '18', name: 'para cuando los mimitos? :)' },
  { key: '19', name: 'sos lo mas' },
  { key: '20', name: 'espero te salga todo bien!'},
  { key: '21', name: 'Romi Te amo' },
  { key: '22', name: 'Te extraño' },
  { key: '23', name: 'para cuando los mimitos? :)' },
  { key: '24', name: 'sos lo mas' },
  { key: '25', name: 'espero te salga todo bien!'},
  { key: '26', name: 'Romi Te amo' },
  { key: '27', name: 'Te extraño' },
  { key: '29', name: 'para cuando los mimitos? :)' },
  { key: '30', name: 'sos lo mas' },
  { key: '31', name: 'espero te salga todo bien!'},
  { key: '32', name: 'Romi Te amo' },
  { key: '33', name: 'Te extraño' },
  { key: '34', name: 'para cuando los mimitos? :)' },
  { key: '35', name: 'sos lo mas' },
  { key: '36', name: 'espero te salga todo bien!'},
]

export default function App() {

  //const [text, setText] = useState('chanchito feliz');
  //const [submit, setsubmit] = useState('');

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.Scrollview}>
        <Text>Texto: { submit } </Text>
        <TextInput
        style = { styles.input } 
        placeholder = 'escribe aqui' 
        onChangeText = { (t) => setText(t) }
        defaultValue = { text }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={ () => {
          setsubmit(text)
          alert('texto enviado con exito')
        } }><View style={styles.view} ><Text>aceptar</Text></View></TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView> 
      <FlatList 
        data={}
        renderItem={({item}) => <Text style={styles.item} >{item.key}: {item.name}</Text> }
      />*/}
      <SectionList sections={[
        {title: 'Grupo 1', data: [
          { key: '1', name: 'Romi Te amo' },
          { key: '2', name: 'Te extraño' },
          { key: '3', name: 'para cuando los mimitos? :)' },
          { key: '4', name: 'sos lo mas' },
          { key: '5', name: 'espero te salga todo bien!'},
        ]},
        {title: 'Grupo 2', data: [
          { key: '1', name: 'Romi Te amo' },
          { key: '2', name: 'Te extraño' },
          { key: '3', name: 'para cuando los mimitos? :)' },
          { key: '4', name: 'sos lo mas' },
          { key: '5', name: 'espero te salga todo bien!'},
        ]}
      ]} 
      renderItem={({ item }) => <Text style={styles.item} >{item.name}</Text>}
      renderSectionHeader={ ({ section }) => <Text style={styles.section}>{ section.title }</Text> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section:{
    fontSize: 16,
    fontWeight:'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
  item:{
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  Scrollview:{
    width: width,
  },
  TouchableOpacity:{
    backgroundColor: '#eee',
  },
  view:{
    //flex: 0.5,
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text:{
    color: 'blue',
    fontSize: 30,
    height: 100,//son unidades relativas al celular , no son pixeles
    width: 100,
  },
  red:{
    flex:1,
    backgroundColor: 'red'
  },
  green:{
    flex:2,
    backgroundColor: 'green'
  },
  black:{
    flex:3,
    backgroundColor: 'black'
  },
});
