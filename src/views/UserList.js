import React , {useContext}from 'react'
import { View, Alert , FlatList } from 'react-native'
import users from '../data/users'
import { ListItem, Avatar, Button} from 'react-native-elements'
import UsersContext from '../context/UserContext'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props =>{

    const ctx = useContext(UsersContext)


function confirmUserDeletion(user){
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
        {
            text: 'Sim',
            onPress(){
                console.warn('delete' + user.id)
            }
        },
        {
            text : 'Não'
        }
    ])
}
 
function getUserItem({ item: user }) {
        return (
            <ListItem
            bottomDivider
            
            >
                <Avatar
                    title={user.name}
                    Subtitle={user.email}
                    source={{ uri: user.avatarUrl }}
                />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
                onPress={() => {
                    props.navigation.navigate('UserForm', user);
                }}
                type="clear"
                icon={<Icon name="edit" size={30} color="orange" />}
            />
            <Button 
                onPress={() => {confirmUserDeletion(user)}}
                type="clear"
                icon={<Icon name="trash" size={30} color="red" />}
            />
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}