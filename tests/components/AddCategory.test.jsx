import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Test <AddCategory />', () => { 
    
    const inputValue = 'Naruto';

    test('should change the value of the input', () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory  onAddCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: inputValue }});
        expect(input.value).toBe(inputValue);
    });

    test('should onAddCategory if the input has a value', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory  onAddCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });


    test('should not call onAddCategory if the input is empty', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory  onAddCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
