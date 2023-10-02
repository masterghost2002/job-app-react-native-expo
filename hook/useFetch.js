import { useState, useEffect, useCallback } from "react";
import axios from "axios";
const useFetch = ({endpoint, query}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': '5ef0107ff5msh8247d75368796a0p1e51e9jsn668b2f57e126',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = useCallback(async ()=>{
        setIsLoading(true);
        try {
            const res = await axios.request(options);
            setData(res.data.data);
        } catch (error) {
            setError(error);
            alert('There is an error')
        }finally{
            setIsLoading(false);
        }
    }, [query, endpoint]);

    const refetch = ()=>{
        fetchData();
    }
    useEffect(()=>{
        fetchData();
    }, []);
    return {data, isLoading, error, refetch};
};
export default useFetch;