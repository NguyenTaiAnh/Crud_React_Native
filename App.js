import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from 'react-redux'
import store from './redux/store'
import CreateScreen from './src/screens/CreateScreen'
import UpdateScreen from './src/screens/UpdateScreen'
import DetailScreen from './src/screens/DetailScreen'
const navigator = createStackNavigator(
  {
    "Index": IndexScreen,
    "Create" : CreateScreen,
    "Update" : UpdateScreen,
    "Detail": DetailScreen

  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Crud"
    }
  }
)
const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>

  )
}