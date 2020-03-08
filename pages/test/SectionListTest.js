import React, { Component } from 'react';
import {SectionList, Text, StyleSheet, FlatList} from 'react-native';

const sections2 = [
    {
        id: 0,
        title: 'Basic Components',
        data: [
            {id: 0, text: 'View'},
            {id: 1, text: 'Text'},
            {id: 2, text: 'Image'},
        ]
    },
    {
        id: 1,
        title: 'List Components',
        data: [
            {id: 3, text: 'ScrollView'},
            {id: 4, text: 'ListView'},
        ]
    }
]

const extractKey = ({id}) => id

export default class App extends Component {

    renderItem = ({item}) => {
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }

    renderSectionHeader = ({section}) => {
        return (
            <Text style={styles.header}>
                {section.title}
            </Text>
        )
    }

    //数据处理中心
    // style={styles.container}
    // data={rows}
    // renderItem={this.renderItem}
    // keyExtractor={extractKey}
    render() {
        return (
            <SectionList
                style={styles.container}
                sections={sections2}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        color: 'white',
        fontWeight: 'bold',
    },
})
