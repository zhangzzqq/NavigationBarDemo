import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class Welcome extends React.Component{
    render(){
        return <Text> hello,{this.props.name}</Text>
    }
}

function App(){
    return (

        <View>
            <Welcome name="Sara"/>
            <Welcome nmae="Peng"/>
        </View>


    );
}

export  default App;
