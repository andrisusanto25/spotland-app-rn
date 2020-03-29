import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Header, Footer, FooterTab, Button, Icon, View, Text } from 'native-base';

const AccountScreen = (props) => {
    return (
        <Container>
            <Header><Text>AccountScreen</Text></Header>
            <Content>
                <Text>This is AccountScreen</Text>
            </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default AccountScreen;
