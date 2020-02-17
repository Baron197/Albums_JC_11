import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    state = { listAlbum: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                console.log(res.data)
                this.setState({ listAlbum: res.data })
            })
    }

    renderListAlbum = () => {
        return [1,2,3,4,5,6,7,8,9].map((item, index) => {
          return (
            <Text 
              style={{ fontSize: 30, marginVertical: 30 }} 
              key={index}
            >
              Index ke {index} : {item}
            </Text>
          )
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderListAlbum()}
            </ScrollView>
        )
    }
}

export default AlbumList;
