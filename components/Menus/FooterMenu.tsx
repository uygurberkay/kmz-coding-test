import { 
    Text, 
    Pressable, 
    StyleSheet,
    View,
} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';

const FooterMenu = () => {
    const { t } = useTranslation()
    const navigation = useNavigation<NavigationProp<any>>();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <FontAwesome5 
                    name='home' 
                    style={{...styles.iconStyle, paddingTop: 18}}
                    color={route.name === 'Home' ? 'yellow': 'white'}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Search')}>
                <FontAwesome5 
                    name='search' 
                    style={{...styles.iconStyle, paddingTop: 18}} 
                    color={route.name === 'Search' ? 'yellow': 'white'}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Basket')}>
                <Text>48.50 TL</Text>
                <FontAwesome5 
                    name='shopping-basket' 
                    style={styles.iconStyle}
                    color={route.name === 'Basket' ? 'orange': 'white'}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Discount')}>
                <Ionicons
                    name='pricetags-outline' 
                    style={{...styles.iconStyle, paddingTop: 18}}
                    color={route.name === 'Discount' ? 'yellow': 'white'}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Account')}>
                <FontAwesome5 
                    name='user-circle' 
                    style={{...styles.iconStyle, paddingTop: 18}}
                    color={route.name === 'Account' ? 'yellow': 'white'}/>
            </Pressable>
            {/* <Pressable onPress={() => navigation.navigate('Language')}>
                <FontAwesome5 
                    name='language' 
                    style={styles.iconStyle}
                    color={route.name === 'Language' ? 'yellow': 'white'}/>
                <Text>{t('Language')}</Text>
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 30,
        justifyContent: 'space-between',
        backgroundColor: '#df4c08',
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 30,
    },
});
export default FooterMenu