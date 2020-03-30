import React, { Component } from "react";
import { Image, StyleSheet, useNavigation } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View, Grid } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

const Place = props => {
    let nav = props.nav.navigation
    let place = props.place
    return (
        <Card>
            <TouchableOpacity onPress = {() => nav.navigate('PlaceDetail', {item: place})}>
                <CardItem cardBody>
                    <Image source={{ uri: props.place.imgUrl }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Text style={styles.titleStyle}>{props.place.title}</Text>
                </CardItem>
            </TouchableOpacity>
            <CardItem>
                    <Grid style={styles.gridStyle}>
                        <Icon style={styles.iconStyle} name="thumbs-up" type="FontAwesome5" />
                        <Text style={styles.textStyle}>{props.place.likes}</Text>
                        <Icon style={styles.iconStyle} name="comment" type="FontAwesome5" />
                        <Text style={styles.textStyle}>{props.place.comments}</Text>
                    </Grid>
                    <Grid style={styles.gridStyle}>
                        <Icon style={styles.iconStyle} name="map-marker-alt" type="FontAwesome5" />
                        <Text style={styles.textStyle}> {props.place.pin}</Text>
                    </Grid>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 200
    },
    titleStyle: {
        fontSize: 20
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
    }
})

export default Place;