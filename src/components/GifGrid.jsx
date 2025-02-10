import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {gifs, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <hr />

            {isLoading && <h2>Loading...</h2>}
            
            
            <div className="card-grid">
                {
                    gifs.map((gif) => (
                        <GifGridItem key={ gif.id } { ...gif } />
                    ))
                }   
            </div>
        </>
    );
};
