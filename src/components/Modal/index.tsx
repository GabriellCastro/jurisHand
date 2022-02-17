import React, { useContext } from 'react';
import { Modal, Text, Pressable, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';

import { Subscription } from '../../contexts/Subscription';

import styles from './style';
import jobs from '../../assets/jobs.png';
import cofetti from '../../assets/cofetti.json';

const SubscriptionModal: React.FC = () => {
  const { handleCloseModal, handleAssine, isOpen, isAssine } = useContext(Subscription);

  return (
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={handleCloseModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={handleCloseModal}>
              <MaterialCommunityIcons 
                name='close'
                size={25}
                color="#7666FC"
              />
            </Pressable>
            <Text style={styles.modalText}>Faça upgrade no JurisHand e seja feliz.</Text>
            <Image source={jobs} />
            <Text style={styles.infoText}>Assine por <Text style={styles.priceText}>R$ 299,90 por ano</Text> (R$ 24,90 por mês)</Text>
            {
              isAssine ? (
                <TouchableOpacity
                  style={styles.subscriberButton}
                  disabled={isAssine}
                >
                  <Text style={styles.subscriberText}>Já é assinante</Text>
                  <Lottie
                    autoPlay
                    style={{zIndex: 10}}
                    source={cofetti}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.assineButton}
                  onPress={handleAssine}
                >
                  <Text style={styles.assineText}>Assine agora</Text>
                </TouchableOpacity>
              )
            }
          </View>
          <Text style={styles.alertText}>Você será cobrado imediatamente. Sem período trial.</Text>
        </View>
      </Modal>
    </View>
  );
}

export default SubscriptionModal;