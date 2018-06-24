import { createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Text, View, Button } from 'react-native'

import Home from './screens/Home'
import Todo from './screens/Todo'

const App = createBottomTabNavigator (
  {
    Home: {
      path: '/',
      screen: Home,
    },
    Tasks: {
      path: '/todo',
      screen: Todo,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4286f4',
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})