import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [cateogries, setCateogries] = useState([]);

    const onAddCategory = (newCategory) => {
        if (cateogries.includes(newCategory)) return;

        setCateogries([newCategory, ...cateogries]);
    }

    return (
        <>
            <h1>Gifs Expert</h1>

            <AddCategory onAddCategory={ onAddCategory } />

            {
                cateogries.map(category => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
        </>
    );
};
