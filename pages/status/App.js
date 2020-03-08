import React, {Component} from 'react';
import {View} from 'react-native';

import List from './List';
import Input from './Input';
import Title123 from './Title';

export default class App extends Component {

    state = {
        todos2: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
        1:2,

    };

    onAddTodo = (text) => {
        const {todos2} = this.state;

        this.setState({
            todos2: [text, ...todos2],});
    };

    onRemoveTodo = (index) => {
        const {todos2} = this.state;
        console.log(this.state);
        console.log(todos2);
        console.log(todos2.filter((todo, i) => i !== index));
        this.setState({
            todos2: todos2.filter((todo, i) => i !== index),
        });
    };

    render() {
        const {todos2} = this.state;

        return (
            <View>
                <Title123>
                    To-Do List
                </Title123>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos2}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        );
    }
}
