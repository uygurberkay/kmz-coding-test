import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView
} from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/Menus/FooterMenu';
import { CategoriesContext } from '../context/postContext';
import PostCard from '../components/PostCard';

const Home = () => {
    /* Global state */
    // const [state]: any = useContext(AuthContext);
    const [posts]: any = useContext(CategoriesContext);
    console.log(posts)
    return (
        <View style={styles.container}>
            <View style={{left: 20, flex:6}}>
                <PostCard posts={posts}/>
            </View>
            <View style={{backgroundColor: '#ffffff', flex:1}}>
                <FooterMenu/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",
    },
});

export default Home