import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
/* Context */

const AuthContext = createContext()

/* Provider */
const AuthProvider = ({children}: any) => {
    // Global state
    const [state, setState] = useState({
        token: '',
    })

    // Initial local storage data
    useEffect(() => {
        const loadLoaclStorageData = async () => {
            let data: any = await AsyncStorage.getItem("@auth");
            let loginData = JSON.parse(data);
            setState({ ...state,  token: loginData?.data?.token });
        };
        loadLoaclStorageData();
    }, []);
    let token = state && state.token;
    
    // Default axios settings
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.baseURL = 'https://apiv5.akilliticaretim.com/api/v5';
    axios.defaults.headers.common['GUID'] = '24BE-DB0E-D75E-4060';

    return (
        <AuthContext.Provider value={[state,setState]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}