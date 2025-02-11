import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Test <GifGridItem />', () => { 
    
    const title = 'test';
    const url = 'https://localhost/test.jpg';

    test('should match snapshot', () => {
        
        const { container } = render(<GifGridItem title={ title } url={ url } />);
        
        expect(container).toMatchSnapshot();
    });

    test('should image with url and alt', () => {

        render(<GifGridItem title='test' url={ url } />);
        
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should display the title', () => {

        render(<GifGridItem title={ title } url={ url } />);
        
        expect(screen.getByText(title)).toBeTruthy();
    });
});