import React, {useContext} from 'react';
import useResources from './useResources';
import { UserContext } from '../context/UserContext';

const UserList = () => {

    const {state, dispatch} = useContext(UserContext);
    const users = useResources('users');

    return (
        <div>
            <ul>
                {users.map(user => 
                    <li key={user.id} onClick={() => 
                        dispatch({type: 'UPDATE_SELECTED_USER', userId: user.id})}>
                    {user.username}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;