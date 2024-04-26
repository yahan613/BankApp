import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const BounceModal = () => {
    console.log("DDD")
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleModal = () => {
      setIsVisible(!isVisible);
    };

    const closeModal = () => {
      setIsVisible(false);
    };
  
    return (
        <AwesomeAlert
            title='Hi'
            message='HHHHHHHH'
        />
    );
};

export default BounceModal;
