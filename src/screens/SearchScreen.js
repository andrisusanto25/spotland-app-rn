import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Header, Footer, FooterTab, Button, Icon, View, Text } from 'native-base';

const SearchScreen = (props) => {
    return (
        <Container>
            <Header><Text>Search</Text></Header>
            <Content>
                <Text>This is search</Text>
            </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default SearchScreen;
