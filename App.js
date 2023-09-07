import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import Modal from './components/Modal'
import AntDesing from "@expo/vector-icons/AntDesign";

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    console.log('ejecuta la funcion de agregar elemnto')
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity style={styles.itemContainer}
      onPress={() => onHandleModal(index)}>
      <Text style={styles.textItem}>{item?.value}</Text>
      <AntDesing name='delete' size={20} color={'white'}/>
    
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemsList
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }
  const hideModal = () => {
    setModalVisible(false) 
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Evelin</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search 🔍 "
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title=" + " color={'#548556'} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} hideModal={hideModal}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#e2c6ab',
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 25,
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingRight:10
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#6c9e6d',
    shadowColor: '#fe6855',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    paddingBottom:0,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  
  },
})