import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, View, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import TabDetail from '../components/TabDetail';
import PlaceDetail from '../components/PlaceDetail';
import Place from "../components/Place"
import { createStackNavigator } from "react-navigation-stack";

const navOptionHandler = (navigation) =>  ({
    header : null
})

const HomeStack = createStackNavigator({
    TabDetail: {
        screen: TabDetail,
        navigationOptions : navOptionHandler
    },
    Place: {
        screen: Place,
        navigationOptions : navOptionHandler
    },
    PlaceDetail: {
        screen: PlaceDetail,
        navigationOptions : navOptionHandler
    }
});

const HomeScreen = (props) => {
    return (
        <Container>
            <Header><Text>Spotland</Text></Header>
            <Tabs renderTabBar={() => <ScrollableTab />}>
                <Tab heading="Experience">
                    <TabDetail nav={props}/>
                </Tab>
                <Tab heading="Adventure">
                    <TabDetail nav={props}/>
                </Tab>
                <Tab heading="Activities">
                    <TabDetail nav={props}/>
                </Tab>
            </Tabs>
        </Container>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
