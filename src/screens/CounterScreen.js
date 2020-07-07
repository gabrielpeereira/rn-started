import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'change_increase':
            return { ...state, count: state.count + 1 }
        case 'change_decrease':
            return { ...state, count: state.count - 1 }
        default:
    }
}

const CouterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return(
        <View>
            <Button title="change_increase" 
              onPress={() => dispatch({ type: 'change_increase' })}
             />
            <Button title="Decrease" 
            onPress={() => dispatch({ type: 'change_decrease' })}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default CouterScreen;