import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ListItem from '../components/ListItem'
import EditItem from '../components/EditItem'


class TodoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            value: "",
            items: [],
            showEdit: false
        }
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        this.handleEditItem = this.handleEditItem.bind(this)
        this.handleSaveItem = this.handleSaveItem.bind(this)
    }
    static navigationOptions = {
        tabBarLabel: 'Todo',
        tabBarIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                 name="check-circle"
                 size={26}
                 style={{ color: tintColor }} >
                </MaterialIcons>
            )
        }
    }
    componentWillMount() {
        if (AsyncStorage.getItem("items")) {
            AsyncStorage.getItem("items").then(items => {
                const savedItems = JSON.parse(items)
                this.setState({'items': savedItems})
                this.setState({loading: false})
            })
        }
    }
    handleEditItem(key) {
        this.setState({
            showEdit: !this.state.showEdit
        })
        let items = this.state.items
        this.state.items.splice(key, 1)
        this.setState({ items: this.state.items})
        AsyncStorage.setItem("items", JSON.stringify(items))
    }
    handleSaveItem() {
        if(!this.state.value) {
            alert('A todo can not be blank')
            return false
        } 
        this.setState({
            showEdit: !this.state.showEdit
        })
        this.handleAddItem()
        alert('Saved')
    }
    handleDeleteItem(key) {
        let items = this.state.items
        this.state.items.splice(key, 1)
        this.setState({ items: this.state.items})
        AsyncStorage.setItem("items", JSON.stringify(items))
    }
    handleAddItem() {
        if(!this.state.value) {
            alert('A todo can not be blank')
            return false
        } 
        const newItems = [
            ...this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
            }
        ]
        this.setState({
            items: newItems,
            value: ""
        })
        AsyncStorage.setItem("items", JSON.stringify(newItems))
    }
    render() {
        let todoItems = this.state.items.map((val, key) => {
            return <ListItem 
                    key={key} 
                    keyval={key} 
                    val={val} 
                    editMe={ () => this.handleEditItem(key)}
                    delMe={ () => this.handleDeleteItem(key)} 
                    />
        })
        
        return(
            <View style={styles.container}>
                {this.state.showEdit ? null :<Header 
                    value={this.state.value}
                    onAddItem={this.handleAddItem}
                    onChange={(value) => this.setState({ value })}
                />}
                <View>
                    {this.state.showEdit ? 
                    <EditItem 
                    value={this.state.value}
                    saveMe={this.handleSaveItem}
                    onChange={(value) => this.setState({ value })}
                    /> : null}
                </View>
                <ScrollView style={styles.content}>
                    {todoItems}
                </ScrollView>
                <Footer 
                    count={this.state.items.length}
                />
                {this.state.loading && <View style={styles.loading}>
                    <ActivityIndicator
                    animating
                    size="large"
                    />
                </View>}
            </View>
        )
    }
}

export default TodoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 30 
    },
    loading: {
        backgroundColor: "rgba(0,0,0,.2)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        flex: 1
    }
})