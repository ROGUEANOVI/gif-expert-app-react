import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test <GifGrid />', () => { 
   
    const category = 'Naruto';
    
    test('should show the loading and the category', () => { 
       
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid  category={ category } />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show the gifs when the images are loaded from the useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        });

        render(<GifGrid  category={ category } />);

        expect(screen.getAllByText(category));
        expect(screen.getAllByRole('img')).toHaveLength(2);
    });
});