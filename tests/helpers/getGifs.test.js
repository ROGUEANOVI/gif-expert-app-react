import { getGifs } from '../../src/helpers/getGif';
describe('Test getGifs function', () => { 
    test('should return an array of gifs', async () => {
        
        const cateogry = 'Naruto';

        const gifs = await getGifs(cateogry);

        expect(gifs.length).toBeGreaterThan(0);
        
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
 });