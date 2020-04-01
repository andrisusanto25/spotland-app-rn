import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Item, Icon, Input, Button, Text, Content } from "native-base";

class SearchScreen extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <Text>{search}</Text>
                </Content>
            </Container>

        );
    }
}

export default SearchScreen;
