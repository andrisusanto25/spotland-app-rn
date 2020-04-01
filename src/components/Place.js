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
                    <Image source={{ uri: place.imgUrl }} style={styles.imageStyle} />
                </CardItem>
                <CardItem>
                    <Text style={styles.titleStyle}>{place.title}</Text>
                </CardItem>
            </TouchableOpacity>
            <CardItem>
                    <Grid style={styles.gridStyle}>
                        <Icon style={styles.iconStyle} name="thumbs-up" type="FontAwesome5" />
                        <Text style={styles.textStyle}>{place.likes}</Text>
                        <Icon style={styles.iconStyle} name="comment" type="FontAwesome5" />
                        <Text style={styles.textStyle}>{place.comments}</Text>
                    </Grid>
                    <Grid style={styles.gridStyle}>
                        <Icon style={styles.iconStyle} name="map-marker-alt" type="FontAwesome5" />
                        <Text style={styles.textStyle} numberOfLines={1}>
                        {place.pin.length < 20
                            ? `${place.pin}`
                            : `${place.pin.substring(0, 19)}...`}
                    </Text>
                    </Grid>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: null,
        flex: 1
    },
    titleStyle: {
        fontSize: 16
    },
    iconStyle: {
        fontSize: 12,
        width: 20,
        height: 20
    },
    textStyle: {
        fontSize : 13,
        alignItems : "flex-start",
        flex: 1,
        paddingBottom: 5
    },
    gridStyle : {
        justifyContent : "flex-start",
        flexDirection: "row",
        alignItems: "center"
    }
})

export default Place;