import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = StyleSheet.create({
    thumbnailStyle: { 
        height: 50, 
        width: 50 
    },
    headerContentStyle : {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        marginHorizontal: 10
    },
    imageStyle: {
        height: 350,
        flex: 1
    }
})

export default ({ album }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>
                        {album.title}
                    </Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: album.image }} />
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => Linking.openURL(album.url)}
                >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}