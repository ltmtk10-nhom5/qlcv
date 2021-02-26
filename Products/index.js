import React, { PureComponent } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

function Products() {
    return (
        <View style={styles.waper}>
            <Text>Products</Text>
            <Image
				source={require('../src/imgs/3110.jpg')}
				style={styles.image}
			></Image>
        </View>

    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
		width: 300,
		resizeMode: 'contain',
    }
})

export default Products