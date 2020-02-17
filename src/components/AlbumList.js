import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import axios from 'axios';
import Album from './AlbumDetail';

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
        return this.state.listAlbum.map((item, index) => {
          return (
            <Album key={index} album={item} />
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
