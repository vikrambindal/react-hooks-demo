import React, { useReducer } from 'react';

const initialState = {userId: 1};

const userReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_USER':
            return {...state, userId: action.userId};
        default:
            console.log('Default state');
            return state;
    }
}

const UserContext = React.createContext(initialState);

const UserContextProvider = (props) => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}} >
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider};