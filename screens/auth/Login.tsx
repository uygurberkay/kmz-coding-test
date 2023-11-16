import { 
    View, 
    Text, 
    StyleSheet,
    Alert
} from 'react-native';
import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

  /* Component imports */
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import { useTranslation } from 'react-i18next';

const Login = ({navigation} : any) => {
    /* Global State */
    const [state, setState] :any = useContext(AuthContext);

    const { t } = useTranslation();
    /* States */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

  /* Button Functionality */
    const handleSubmit = async () => {
        try {
        setLoading(true)
        if (!email || !password){
            setLoading(false)
            Alert.alert('Please fill all fields')
            return;
        }
        setLoading(false)
        const { data } = await axios.post(
            '/sf/auth/login',
            { username: email, password}
        );
        setState(data)
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        alert('Login successfull')
        navigation.navigate('Home')
        console.log('Login data : ', {email,password})
        } catch (error: any) {
            alert('User Not Found')
            setLoading(false)
            console.log(error)
        }
    };
    const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem('@auth')
        console.log('Local Storage ==> ',data)
    }
    getLocalStorageData()
    return (
        <View style={styles.container}>
        <Text style={styles.pageTitle}>{t('Login')}</Text>
        <View style={{marginHorizontal: 20}}>
            <InputBox 
            inputTitle={t('Email')}
            keyboardType={'email-address'}
            autoComplete={'email'}
            value={email}
            setValue={setEmail}
            />
            <InputBox 
            inputTitle={t('Password')}
            keyboardType={'default'}
            autoComplete={'password'}
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
            />
        </View>
        <SubmitButton 
            buttonTitle={t('Login')}
            loading={loading}
            handleSubmit={handleSubmit}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e1d5c9' // Change it later
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1e2225', // Change it later
        marginBottom: 20,
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color:'#af9f85'
    },
})

export default Login