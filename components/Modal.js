import { Button, Modal as NewModal, StyleSheet, Text, View} from 'react-native'

import React from 'react'

const Modal = ({ modalVisible, onHandleDelete, hideModal}) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text>⚠️</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Estas Seguro que quieres eLiminar⁉️</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="Aceptar"color={'#548556'} onPress={onHandleDelete} />
            
            <Button title="Cancelar" color={'#548556'} onPress={hideModal}/>
          
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContent: {
    backgroundColor: '#b3e7b3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    
    color: '#FFFFFF',
    fontSize: 8,
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 15,
    flexDirection:'row',
    gap:30
    
    
    
    
  },
})