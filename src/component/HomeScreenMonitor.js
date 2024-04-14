import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScrMonitor = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      console.log('Component 离开');
    });

    return unsubscribe;
  }, []);

  // 渲染组件的内容
};

export default HomeScrMonitor;
