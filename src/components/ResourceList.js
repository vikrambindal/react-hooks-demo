import React, { useContext } from 'react';

import useResources from './useResources';
import {UserContext} from '../context/UserContext';

const ResourceList = ( { resource }) => {
    
    const {state} = useContext(UserContext);
    const resourceData = useResources(`users/${state.userId}/${resource}`);

    return (
        <div>
            <h1>{resource} for User : {state.userId}</h1>
            <ul>
                { resourceData.map(data => <li key={data.id}>{data.title}</li>) }
            </ul>
        </div>
    )
}

export default ResourceList;