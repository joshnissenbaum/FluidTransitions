import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { FluidNavigator, Transition } from './../lib/';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 80,
	},
	screen: {
		flex: 1,
		flexDirection: 'row',
		padding: 20,
    },
    circle: {
		width: 40,
		height: 40,
        borderRadius: 40,
        margin: 10,
		backgroundColor: '#EF4444'
	},
});

const Screen = (props) => (
	<View style={styles.container}>
        <Transition appear='scale'>
		    <Text>Screen</Text>
        </Transition>
		<View style={styles.screen}>
            <Transition appear='top'>
				<View style={styles.circle}/>
            </Transition>
            <Transition appear='top'>
                <View style={styles.circle}/>
            </Transition>
            <Transition appear='top'>
                <View style={styles.circle}/>
            </Transition>
		</View>
        <Transition appear='bottom'>
		    <Button title='Nothing' onPress={()=>{}}/>
        </Transition>
	</View>
);

const Navigator = FluidNavigator({
	screen: { screen: Screen },
});

export default () => (
	<Navigator />
);