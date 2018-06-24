import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ListItem extends Component {
    render() {
        const textComponent = (
            <TouchableOpacity onLongPress={this.props.editMe}>
                <Text style={styles.itemText}>{this.props.val.text}</Text>
            </TouchableOpacity>
        )
        const editButton = (
            <TouchableOpacity onPress={this.props.editMe} style={styles.editItem}>
                <MaterialIcons
                name="edit"
                size={24}>
                </MaterialIcons>
            </TouchableOpacity>
        )
        const delButton = (
            <TouchableOpacity onPress={this.props.delMe} style={styles.delItem}>
                <MaterialIcons
                name="check"
                size={24}>
                </MaterialIcons>
            </TouchableOpacity>
        )
        return(
            <View key={this.props.keyval} style={styles.listItem}>
                {textComponent}
                {editButton}
                {delButton}            
            </View>
        )
    }
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        position: 'relative',
        padding: 22,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#4286f4',
        backgroundColor: '#FFF'
    },
    input: {
        height: 100,
        flex: 1,
        fontSize: 24,
        padding: 0
    },
    wrap: {
        flex: 1,
        marginHorizontal: 12
    },
    itemText: {
        borderLeftWidth: 10,
        borderLeftColor: '#4286f4'
    },
    delItem: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        bottom: 0,
        top: 0,
        right: 0,
    },
    editItem: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        bottom: 0,
        top: 0,
        right: 40,
    }
})