import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends React.Component {
  render() {
    console.log('Hello guys')
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    )
  }
}

export default App;
