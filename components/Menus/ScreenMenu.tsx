import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/authContext';

/* Screens and Components */
import Home from '../../screens/Home';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import LanguageSelector from '../LanguageSelector';
import HeaderMenu from './HeaderRightMenu';
import HeaderLeftMenu from './HeaderLeftMenu';
import Post from '../../screens/Post';
import About from '../../screens/About';
import Account from '../../screens/Account';
import MyPosts from '../../screens/MyPosts';
import HeaderImage from '../HeaderImage';
import HeaderRightMenu from './HeaderRightMenu';

const ScreenMenu = () => {
    /* Global state */
    const [state]: any = useContext(AuthContext);
    console.log('STATE ==> ',state?.data?.token)
    /* Auth condition */
    const authenticatedUser =state?.data?.token

    const Stack = createNativeStackNavigator()

    return (
        <>
            <Stack.Navigator initialRouteName={'Login'}>
                {authenticatedUser ? (
                <>
                    <Stack.Screen 
                        name="Home" 
                        component={Home}
                        options={{
                            title: '',
                            headerBackground: () => (<HeaderImage/>),                            // headerTitle(props) {
                            headerRight: () => <HeaderRightMenu/>,
                            headerLeft: () => <HeaderLeftMenu/>,
                        }}/>
                    <Stack.Screen 
                        name="Search" 
                        component={Post} 
                        options={{
                            title: '',
                            headerBackground: () => (<HeaderImage/>),                            // headerTitle(props) {
                            headerRight: () => <HeaderRightMenu/>,
                            headerLeft: () => <HeaderLeftMenu/>,
                        }}/>
                    <Stack.Screen 
                        name="Basket" 
                        component={About} 
                        options={{
                            title: '',
                            headerBackground: () => (<HeaderImage/>),                            // headerTitle(props) {
                            headerRight: () => <HeaderRightMenu/>,
                            headerLeft: () => <HeaderLeftMenu/>,
                        }}/>
                    <Stack.Screen 
                        name="Discount" 
                        component={MyPosts} 
                        options={{
                            title: '',
                            headerBackground: () => (<HeaderImage/>),                            // headerTitle(props) {
                            headerRight: () => <HeaderRightMenu/>,
                            headerLeft: () => <HeaderLeftMenu/>,
                        }}/>
                    <Stack.Screen 
                        name="Account" 
                        component={Account} 
                        options={{
                            title: '',
                            headerBackground: () => (<HeaderImage/>),                            // headerTitle(props) {
                            headerRight: () => <HeaderRightMenu/>,
                            headerLeft: () => <HeaderLeftMenu/>,
                        }}/>
                    {/* <Stack.Screen 
                        name="Language" 
                        component={LanguageSelector} 
                        options={{
                            headerBackTitle: 'Back',
                            headerRight: () => <HeaderMenu/>
                        }}/> */}
                </>
                ): (
                <>
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{headerShown: false}}/>
                    <Stack.Screen 
                        name="Register" 
                        component={Register} 
                        options={{headerShown: false}}/>
                </>
                )}
            </Stack.Navigator>
        </>
    );
}

export default ScreenMenu