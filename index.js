// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

// We have to write it like this because it is a module that we are providing/custom
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component
const App = () => (
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
