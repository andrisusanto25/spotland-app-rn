import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Grid, Icon } from 'native-base';

class AccountScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button style={styles.buttonRegisStyle} transparent>
                        <Text>Register</Text>
                    </Button>
                    <Image source={require('../../assets/door-logo.png')} style={styles.imageStyle} />
                    <Form style={styles.formStyle}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} style={styles.default} />
                        </Item>
                    </Form>

                    <Button style={styles.buttonLoginStyle} block>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    formStyle: {
        marginTop: 10
    },
    buttonLoginStyle: {
        marginTop: 20,
        width: 200,
        alignSelf: "center"
    },
    buttonRegisStyle: {
        marginTop: 20,
        width: 100
    },
    imageStyle: {
        marginTop: 100,
        alignSelf: "center",
        width: 150,
        height: 150
    }
});

export default AccountScreen;
