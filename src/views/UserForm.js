import React, { useState } from "react";
import { Text, View , TextInput, StyleSheet} from "react-native";
import { Button } from "react-native-elements";

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {});
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style = {style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name} />

            <Text>Email</Text>
            <TextInput
                style = {style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o Nome"
                value={user.email} />

            <Text>URL</Text>
            <TextInput
                style = {style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o Nome"
                value={user.avatarUrl} />

                <Button
                    title='Salvar'
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
        </View>
    );
}

const style = StyleSheet.create({
    
    form: {
        padding: 12,

    },

    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5
    }
})