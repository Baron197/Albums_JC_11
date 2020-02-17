import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends React.Component {
  render() {
    const { 
      mainViewStyle, 
      headerViewStyle,
      bodyViewStyle,
      footerViewStyle
    } = styles;

    return (
      <View style={mainViewStyle}>
        <View style={headerViewStyle}>
        </View>
        <View style={bodyViewStyle} />
        <View style={footerViewStyle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainViewStyle: { 
    backgroundColor: 'black', 
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    margin: 20
  },
  headerViewStyle: { 
    backgroundColor: '#b4c1cf', 
    // flex: 1,
    height: 50,
    width: 50
  },
  bodyViewStyle: { 
    backgroundColor: 'gray', 
    // flex: 5,
    height: 50,
    width: 50,
    borderRadius: 50
  },
  footerViewStyle: { 
    backgroundColor: 'teal', 
    // flex: 1,
    height: 50,
    width: 50
  }
})

export default App;