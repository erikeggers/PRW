import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Footer extends Component {
    render() {
        return (
            <View style={styles.count}>
                <Text>You have {this.props.count} tasks</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    count: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})
export default Footer