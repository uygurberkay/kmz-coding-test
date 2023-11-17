import React from 'react';
import { View, Image, Platform} from 'react-native';

const HeaderImage = () => {
    return (
        <View style={{
            flexDirection:'row',
            alignItems:'center', 
            paddingLeft: 80,
            paddingTop: Platform.select({
                ios: 10,
                android: 30,
            }), 
        }}>
            <Image 
                source={{ uri: 'https://files.sikayetvar.com/lg/cmp/99/99803.png?1614957818' }} 
                style={{ width: 120, height: 60 }} />
        </View>
    );
};

export default HeaderImage;
