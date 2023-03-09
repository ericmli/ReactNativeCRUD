import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const UsersContext = createContext({})

export const UsersProvider = props => {

    function recuder(state, action){
        console.warn(action)
    }

    useReducer()

    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
} 

export default UsersContext

