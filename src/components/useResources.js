import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {

    const [resourceData, setResourceData] = useState( [] );

    //eq: useEffect( () =>  {userFunction(resource) }, [])
    useEffect( () => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResourceData(response.data);
        })(resource)
    }, [resource]);

    return resourceData;
}

export default useResources;