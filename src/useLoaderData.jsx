import { useEffect, useState } from "react";

const useLoaderData = () => {
    const [error, setError] = useState(false);
    const [currentError, setCurrentError] = useState(null)
    const [data, setData] = useState([
        {Data : 'loading ...'}
    ]);

    const fetchData = async () => {  
        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok) {
                const result = await response.json();
                setError(false);
                setCurrentError(null);
                setData(result);
            }

        } catch (error) {
            setData([]);
            setCurrentError('Error: 404');
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        error, setError,
        currentError, setCurrentError,
        data, setData
    }
}

export default useLoaderData;