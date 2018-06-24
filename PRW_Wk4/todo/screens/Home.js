import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                 name="home"
                 size={26}
                 style={{ color: tintColor }} >
                </MaterialIcons>
            )
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <MaterialIcons
                    name="check-circle"
                    size={200}>
                </MaterialIcons>
                <Text style={styles.introText}>Welcome to Todo App. Click on the Todo tab to get started.</Text>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introText: {
        width: 200,
        textAlign: 'center'
    }
})