import React, { Component } from "react";
import { Image, StyleSheet } from 'react-native';
import { Container, Text, View, List, ListItem, Content } from "native-base";
import Place from "./Place";


const TabDetail = props => {

    var place = [
        {
            title : "Pink Beach",
            likes : "921",
            comments :"78",
            imgUrl: "https://i.picsum.photos/id/626/400/400.jpg",
            pin : "Nusa Tenggara Timur"
        },
        {
            title : "Pink Beach",
            likes : "921",
            comments : "78",
            imgUrl: "https://i.picsum.photos/id/699/400/400.jpg",
            pin : "Jakarta"
        },
        {
            title : "Pink Beach",
            likes : "921",
            comments : "78",
            imgUrl:"https://i.picsum.photos/id/612/400/400.jpg",
            pin : "Jakarta"
        },
        {
            title : "Pink Beach",
            likes : "921",
            comments : "78",
            imgUrl: "https://i.picsum.photos/id/643/400/400.jpg",
            pin : "Jakarta"
        }
    ];

    return (
        <Container>
            <Content>
                <List>
                    <Place place={place[0]} nav={props.nav}/>
                    <Place place={place[1]} nav={props.nav}/>
                    <Place place={place[2]} nav={props.nav}/>
                    <Place place={place[3]} nav={props.nav}/>
                </List>
            </Content>
        </Container>

    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 200
    }
})

export default TabDetail;