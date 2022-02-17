import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Subscription } from '../../contexts/Subscription';

import Modal from '../../components/Modal';
import styles from './style';

// state == !true
const Home: React.FC = () => {
  const { handleOpenModal } = useContext(Subscription);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <TouchableOpacity
        style={styles.buttonModal}
        onPress={handleOpenModal}
        >
        <MaterialCommunityIcons
          name="update"
          size={25}
          color="#A1AAB4"
          />
        <Text style={styles.textUp}>Faça upgrade agora</Text>
      </TouchableOpacity>
      <Modal />
    </View>
  );
}

export default Home;
