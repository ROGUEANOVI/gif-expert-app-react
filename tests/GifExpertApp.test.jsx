import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test <GifExpertApp />', () => { 
    
    const setup = () => {
        render(<GifExpertApp />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        
        return {
          input,
          form,
        };
    };

    test('should match the snapshot', () => {
 
        const { container } = render(<GifExpertApp />);
   
        expect(container).toMatchSnapshot();
     });

    test('should show the title h1', () => { 
        
        render(<GifExpertApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('Gifs Expert');
    });

    test("Should add category if it's not repeated", () => {
        const { input, form } = setup();
        
        fireEvent.change(input, { target: { value: "Naruto" } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: "Saitama" } });
        fireEvent.submit(form);
     
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
    });
     
    test("Should NOT add category if it's repeated", () => {
        const { input, form } = setup();

        fireEvent.change(input, { target: { value: "Demon Slayer" } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: "Demon Slayer" } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: "Demon Slayer" } });
        fireEvent.submit(form);
        
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
    });
});