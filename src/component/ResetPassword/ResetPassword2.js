import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { geticon } from '../img/getIcon';
import CheckBox from 'react-native-check-box';
import AwesomeAlert from 'react-native-awesome-alerts';






const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth * 0.8;
const itemHeight = screenHeight * 0.1;

//Alert

/*const handleCloseAlert2 = () => {
    setShowAlert2(false);
};*/
//const [showAlert2, setShowAlert2] = React.useState(false);

const ResetPassword2 = () => {
    const [showOriPassword, setShowOriPassword] = React.useState(false);
    const toggleShowPassword = () => {
        setShowOriPassword(!showOriPassword);
    };
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const toggleShowPassword2 = () => {
        setShowNewPassword(!showNewPassword);
    };
    const [showSurePassword, setShowSurePassword] = React.useState(false);
    const toggleShowPassword3 = () => {
        setShowSurePassword(!showSurePassword);
    };

    const [OldP, setOldP] = useState('');//舊密碼
    const [NewP, setNewP] = useState('');//新密碼
    const [SureP, setSureP] = useState('');//確認新密碼
    return (
        <View style={styles.container}>
            <View style={{ width: 200, height: 10 }}>
                <AwesomeAlert
                    show={true}
                    title="確認密碼輸入錯誤"
                    message="請重新輸入"
                    showConfirmButton={true}
                    confirmText="重試"
                    confirmButtonColor="#5C94F3"
                    onConfirmPressed={false}
                />
            </View>
            <View style={styles.selectbox}>
                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>請輸入您的舊有密碼。</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={OldP}
                        onChangeText={text => setOldP(text)}
                        secureTextEntry={!showOriPassword}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword}>
                        {geticon(showOriPassword ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>請輸入您要的新密碼。</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={NewP}
                        onChangeText={text => setNewP(text)}
                        secureTextEntry={!showNewPassword}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword2}>
                        {geticon(showOriPassword ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#929191', marginBottom: 10, fontSize: 15, }}>請確認您的新密碼。</Text>
                <View style={styles.input}>
                    <TextInput
                        style={{ width: '88%', height: '99%' }}
                        value={SureP}
                        onChangeText={text => setSureP(text)}
                        secureTextEntry={!showSurePassword}
                    />
                    <TouchableOpacity style={styles.visible} onPress={toggleShowPassword3}>
                        {geticon(showOriPassword ? "Eye" : "Noeye")}
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#244172',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    userSection: {
        alignSelf: 'center',
        padding: 30,
        width: itemWidth,
        height: 600,
        borderRadius: 15,
        backgroundColor: '#E3E3E3',
        justifyContent: 'flex-start',
    },
    selectbox: {
        width: '100%',
        flexDirection: 'column',
        height: 50,
    },
    CheckBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 35,
        width: '100%'
    },

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        width: '99%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    visible: {
        marginRight: 150,
    },
});


export default ResetPassword2;