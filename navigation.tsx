import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/authContext'
import { CategoriesProvider } from './context/postContext';
import ScreenMenu from './components/Menus/ScreenMenu'

const RootNavigation = () => {
    return (
        <AuthProvider>
            <CategoriesProvider>
                <ScreenMenu/>
                <StatusBar style='auto'/>
            </CategoriesProvider>
        </AuthProvider>
    )
}

export default RootNavigation