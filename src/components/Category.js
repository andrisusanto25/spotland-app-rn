import React, { Component } from "react";
import { Image, StyleSheet, useNavigation } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View, Grid } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

const Category = props => {
    let nav = props.nav.navigation
    let place = props.place
    return (
        <Card style={styles.cardStyle}>
            <TouchableOpacity onPress = {() => nav.navigate('PlaceDetail', {item: place})}>
                <CardItem cardBody>
                    <Image source={{ uri: place.imgUrl }} style={styles.imageStyle} />
                </CardItem>
                <CardItem style={styles.cardItemStyle}>
                    <Text style={styles.titleStyle}>{place.title}</Text>
                </CardItem>
            </TouchableOpacity>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: null,
        flex: 1,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18
    },
    titleStyle: {
        fontSize: 15,
        textAlign: "center"
    },
    iconStyle: {
        color: "black",
        fontSize: 12,
        width: 20,
        height: 20
    },
    textStyle: {
        fontSize : 13,
        alignItems : "flex-start",
        height: 20,
        flex: 1
    },
    gridStyle : {
        justifyContent : "flex-start",
        flexDirection: "row"
    },
    cardStyle : {
        height : 250,
        width: 150,
        borderRadius: 18
    },
    cardItemStyle : {
        alignSelf: "center"
    }
})

export default Category;