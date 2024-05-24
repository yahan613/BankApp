import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Platform, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { geticon } from '../component/img/getIcon';
import { getBTicon } from '../component/img/getBTIcon';

// 引入 FAQ JSON 文件
import faqData from '../component/data/faq.json';

const Service = () => {
  const [SearchText, onChangeSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('account_management'); // 初始化選擇主題
  const [expandedIndex, setExpandedIndex] = useState(null); // 追踪擴展的問題索引
  const [animation] = useState(new Animated.Value(0));

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    Animated.timing(animation, {
      toValue: expandedIndex === index ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderQuestions = () => {
    const questions = faqData.faq[selectedTopic] || [];
    const filteredQuestions = questions.filter((item) => 
      item.question.includes(SearchText) || 
      item.answer.includes(SearchText)
    );

    return filteredQuestions.map((item, index) => (
      <View key={index} style={styles.labelContainer}>
        <View style={styles.label}>
          <TouchableOpacity
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            onPress={() => toggleExpand(index)}
          >
            <Text style={{ flex: 1, ...Platform.select({ ios: { fontSize: 14, marginBottom: 8 }, android: { fontSize: 16, marginBottom: 3 } }) }}>
              <Text style={{ color: '#5C94F3' }}>Q{index + 1}. </Text>{item.question}
            </Text>
            <Animated.View style={{ transform: [{ rotate: expandedIndex === index ? rotate : '0deg' }] }}>
              {geticon('Arrow_down')}
            </Animated.View>
          </TouchableOpacity>
        </View>
        {expandedIndex === index && (
          <Text style={styles.answer}>{item.answer}</Text>
        )}
      </View>
    ));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D9D9D9' }}>
      <View style={styles.topBackground} />
      <View style={styles.header}>
        <Text style={{ color: '#fff', fontSize: 20 }}>服務</Text>
      </View>
      <View style={styles.BottomBackground} />
      <ScrollView
        contentContainerStyle={{
          marginTop: 35,
          width: '100%',
          ...Platform.select({ ios: { height: 900 }, android: { height: 840 } }),
          alignSelf: 'center',
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center', height: 500 }}>
          <View style={styles.memberbox}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#244172', width: 3, marginRight: 7, marginLeft: 8 }}></View>
              <Text style={{ fontSize: 20, color: '#244172' }}>巴菲特FQA</Text>
            </View>
            <View style={styles.search}>
              <TextInput
                style={{ backgroundColor: 'transparent' }}
                onChangeText={text => onChangeSearch(text)}
                value={SearchText}
                placeholder="請輸入關鍵字..."
              />
              <TouchableOpacity style={{ width: 20, height: 20 }}>
                {geticon("Search")}
              </TouchableOpacity>
            </View>
          </View>

          {/* 主題選擇 */}
          <View style={styles.filters}>
          <ScrollView 
            horizontal 
            contentContainerStyle={styles.filtersContainer}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'account_management' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('account_management')}
            >
              {geticon("Account")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>帳戶管理</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'payment' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('payment')}
            >
              {geticon("Transfer")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>收付相關</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'loan' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('loan')}
            >
              {geticon("Loan")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>貸款相關</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'foreign_currency' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('foreign_currency')}
            >
              {geticon("Foreign_currency")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>外幣交易</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'credit_card' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('credit_card')}
            >
              {geticon("Credit_card")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>信用卡</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'investment' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('investment')}
            >
              {geticon("Up_line")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>投資理財</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'promotions' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('promotions')}
            >
              {geticon("Dis")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>優惠政策</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.topic, selectedTopic === 'faq' && styles.selectedTopic]} 
              onPress={() => setSelectedTopic('faq')}
            >
              {geticon("Contact_support")}
              <Text style={{ ...Platform.select({ ios: { fontSize: 11 }, android: { fontSize: 13 } }) }}>常見問題</Text>
            </TouchableOpacity>
            </ScrollView>

          </View>
          {/* 問題列表 */}
          <View style={styles.box}>
            {renderQuestions()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#244172',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#244172',
  },
  BottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    zIndex: -1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectedOption: {
    marginTop: 20,
    fontSize: 18,
  },
  addbox: {
    width: '70%',
    height: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  memberbox: {
    ...Platform.select({ ios: { width: 355 }, android: { width: 330 } }),
    height: 125,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: 'column',
    padding: 8
  },
  search: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: 40,
    marginLeft: 15,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  box: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelContainer: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'column',
  },
  labelText: {
    fontSize: 16,
    color: '#000000',
  },
  line: {
    margin: 8,
    width: 430,
    height: 1,
    marginLeft: -50,
    backgroundColor: '#D9D9D9'
  },
  filters: {
    height: 80,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  topic: {
    ...Platform.select({ ios: { width: 85 }, android: { width: 75 } }),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  selectedTopic: {
    borderBottomWidth: 2,
    borderBottomColor: '#5C94F3'
  },
  answer: {
    fontSize: 14,
    backgroundColor: '#F6F6F6',
    color: '#929191',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  }
});

export default Service;