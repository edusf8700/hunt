import React, { Component } from 'react';

import api from '../services/api';

import { View, Text } from 'react-native';


export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    };

    state = {
        docs: [],

    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {

        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({docs});

    };


    render() {
        return (
            <View>
                <Text>
                {this.state.docs.map(product => (
                    <Text>{product.title}</Text>
                ))}
                </Text>
            </View>
        );
    }
}