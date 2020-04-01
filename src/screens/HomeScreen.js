import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, View, Text, Tab, Tabs, ScrollableTab, ListItem, List, Grid } from 'native-base';
import TabDetail from '../components/TabDetail';
import PlaceDetail from '../components/PlaceDetail';
import Place from "../components/Place"
import Category from "../components/Category";

const HomeScreen = props => {
    var places = [
        {
            title: "Hill",
            likes: "921",
            comments: "78",
            imgUrl: "https://i.picsum.photos/id/688/400/400.jpg",
            pin: "Nusa Tenggara Timur"
        },
        {
            title: "Forest",
            likes: "921",
            comments: "78",
            imgUrl: "https://i.picsum.photos/id/699/400/400.jpg",
            pin: "Bandung"
        },
        {
            title: "Space",
            likes: "921",
            comments: "78",
            imgUrl: "https://i.picsum.photos/id/654/400/400.jpg",
            pin: "Jakarta"
        },
        {
            title: "Beach",
            likes: "921",
            comments: "78",
            imgUrl: "https://i.picsum.photos/id/643/400/400.jpg",
            pin: "Bali"
        }
    ];

    return (
        <Container>
            <Content>
                <Grid>
                    <Text style={styles.titleStyle}>Find awesome place</Text>
                </Grid>
                <Grid>
                    <Text style={styles.cateogryTextStyle}>Popular City</Text>
                </Grid>
                <Grid>
                    <List dataArray={places} horizontal={true} showsHorizontalScrollIndicator={false}
                        keyExtractor={place => place.title}
                        renderRow={(place) =>
                            <ListItem style={styles.listStyle}>
                                <Category nav={props} place={place} />
                            </ListItem>
                        }>
                    </List>
                </Grid>

                <Grid>
                    <Text style={styles.cateogryTextStyle}>Popular Place</Text>
                </Grid>

                <List>
                    <Place place={places[0]} nav={props} />
                    <Place place={places[1]} nav={props} />
                    <Place place={places[2]} nav={props} />
                    <Place place={places[3]} nav={props} />
                </List>
            </Content>

        </Container>
    )
};

const styles = StyleSheet.create({
    listStyle: {
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    titleStyle: {
        fontSize: 35,
        alignItems: "flex-start",
        padding: 20,
        fontWeight: "bold"
    },
    cateogryTextStyle: {
        fontSize: 18,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        padding: 10

    }
});

export default HomeScreen;
