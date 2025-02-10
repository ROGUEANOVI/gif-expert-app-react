import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGif';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsAsync = async() => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getGifsAsync();
    }, []);

    return {
        gifs,
        isLoading
    };
};