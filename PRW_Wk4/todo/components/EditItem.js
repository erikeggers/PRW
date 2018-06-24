import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class EditItem extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.saveMe}
                    placeholder="Edit your item"
                    blurOnSubmit={false}
                    returnKeyType="done"
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.props.saveMe}>
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
        alignItems: "center"
    },
    input: {
       flex: 1,
       marginLeft: 16,
       height: 60
    } 
})
export default EditItem

/*
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native'

class EditItem extends Component {
    render() {
        return(
            <View key={this.props.id}>
                <TextInput value={this.props.value}/>
                <TouchableOpacity onPress={this.props.saveMe}>
                    <Text>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default EditItem
*/
