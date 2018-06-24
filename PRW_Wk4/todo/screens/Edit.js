import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Edit',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                 name="edit"
                 size={26}
                 style={{ color: tintColor }} >
                </MaterialIcons>
            )
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Edit Page</Text>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})