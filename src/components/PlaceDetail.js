import React, { Component } from "react";
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View, Grid } from 'native-base';

const PlaceDetail = ({navigation}) => {
    
    let place = navigation.state.params.item
    return (
        <Card>
            <CardItem cardBody style={styles.cardItemStyle}>
                <Image source={{ uri: place.imgUrl }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>

            <CardItem style={styles.cardItemStyle}>
                <Grid>
                    <Text style={styles.titleStyle}>{place.title}</Text>
                </Grid>
                <Grid style={styles.gridStyle}>
                    <Text style={styles.priceStyle}>Rp 500</Text>
                </Grid>
            </CardItem>
            <CardItem style={styles.cardItemStyle}>
                <Text style={styles.descStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: "bold"
    },
    priceStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red",
        textAlign: "right"
    },
    descStyle: {
        textAlign: "justify"
    },
    gridStyle: {
        justifyContent: "flex-end"
    },
    cardItemStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
})

export default PlaceDetail;