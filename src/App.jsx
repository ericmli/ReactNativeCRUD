import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './context/UserContext';

const Stack = createStackNavigator()

export default function App () {
  return (
    <UsersProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={ScreenOptions}
      >
        <Stack.Screen
          name='UserList'
          component={UserList}
          options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button 
                  onPress={() => navigation.navigate("UserForm")}
                  type="clear"
                  icon={<Icon name="add"  size={25} color="white" />}
                />
              )
            }
          }}
        />
        
        <Stack.Screen
          name='UserForm'
          component={UserForm}
          options={{
            title : "Formulário de Usuários"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </UsersProvider>
  );
}

const ScreenOptions = {
  headerStyle : {
    backgroundColor : "#252525",

  },
  headerTintColor: "#FFF",
  headerTitleStyle : {
    fontWeight : "bold"
  }
}