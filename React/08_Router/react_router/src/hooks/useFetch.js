import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [id, setId] = useState(0);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }

        if(method === "DELETE"){
            setConfig({
                method: method
            });

            setMethod(method);
            setId(data.id);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);
            } catch (error) {
                setError("Não foi possível obter os produtos");
            }

            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const fetchPost = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            }

            if(method === "DELETE"){
                let deleteUrl = `${url}/${id}`;
                const res = await fetch(deleteUrl, config);

                const json = await res.json();

                setCallFetch(json);
            }
        }

        fetchPost();
    }, [url, config, method, id]);

    return {data, httpConfig, loading, error};
}