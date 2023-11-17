import { 
    View, 
    Text, 
    Pressable, 
    StyleSheet 
} from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const HeaderLeftMenu = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [state, setState]: any = useContext(AuthContext);

    /* Logout */
    const categoriesPopup = async () => {
        navigation.navigate('Basket')
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={categoriesPopup}>
                <Feather 
                    name='list' 
                    style={{...styles.iconStyle, color: '#df4c08'}} 
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 25,
    },
});

export default HeaderLeftMenu