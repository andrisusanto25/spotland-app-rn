import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, View, Text } from 'native-base';

const HomeScreen = (props) => {
    return (
        <Container>
            <Header><Text>Spotland</Text></Header>
            <Content>
                <Text>This is home </Text>
            </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
