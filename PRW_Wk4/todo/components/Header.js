import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    placeholder="What do you need to get done?"
                    blurOnSubmit={false}
                    returnKeyType="done"
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.props.onAddItem}>
                    <MaterialIcons
                        name="add"
                        size={26}>
                    </MaterialIcons>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
       flex: 1,
       marginLeft: 16,
       height: 60,
    } 
})
export default Header