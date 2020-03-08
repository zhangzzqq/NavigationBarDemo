import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
    { id: 0, text2: 'View' },
    { id: 1, text2: 'Text' },
    { id: 2, text2: 'Image' },
    { id: 3, text2: 'ScrollView' },
    { id: 9, text2: 'ListView' },
]

const extractKey = ({ id }) => id

export default class App extends Component {

    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.text2}
            </Text>
        )
    }

    //数据处理中心
    render() {
        return (
            <FlatList
                style={styles.container}
                data={rows}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10000
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
})
