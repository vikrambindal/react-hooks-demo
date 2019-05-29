import React, { useState } from 'react'

import ResourceList from './ResourceList';
import UserList from './UserList';
import {UserContextProvider} from '../context/UserContext';

const App = () => {

    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserContextProvider>
                <div style={{width: '20%', float:'left', height:'100%', background:'gray', margin:'5px'}}>
                    <UserList />
                </div>        
                <div style={{width: '70%', float:'left', height:'100%', background:'gray', margin:'5px'}}>
                    <div>
                        <button onClick={() => setResource('posts')}>Post</button>
                        <button onClick={() => setResource('todos')}>Todo</button>
                        <button onClick={() => setResource('albums')}>Albums</button>
                    </div>
                    <ResourceList resource = {resource} />
                </div>
            </UserContextProvider>
        </div>
    )
}

export default App;