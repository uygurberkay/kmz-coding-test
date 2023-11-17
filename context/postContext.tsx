import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

/* Context */
const CategoriesContext = createContext()

/* Provider */
const CategoriesProvider = ({children} : any) => {
    /* Global states */
    const [loading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState([]);
    
    // Get Posts
    const getAllPosts = async () => {
        setLoading(true)    
        try {
            const {data} = await axios.get('/ad/product/categories')
            setLoading(false)
            setPosts(data?.data?.categories)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // Initial Posts
    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <CategoriesContext.Provider value={[posts, setPosts]}>
            {children}
        </CategoriesContext.Provider>    
    )
}

export {CategoriesContext, CategoriesProvider}