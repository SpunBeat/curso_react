import { render, screen, fireEvent } from '@testing-library/react';
import ButtonLoading from './ButtonLoading';

describe('ButtonLoading', () => {

    test('renders the wrapper correctly', () => {
        render(<ButtonLoading />);
        const wrapperEvent = screen.getByTestId('wrapper');
        expect(wrapperEvent).toBeInTheDocument();
    });

    test('renders the form correctly', () => {
        const {getByPlaceholderText, getByText} = render(<ButtonLoading />);

        const userInput = getByPlaceholderText('user');
        const passwordInput = getByPlaceholderText('password');
        const submitButton = getByText('Login');

        expect(userInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('displays validation message when values are empty', () => {
        const {getByText} = render(<ButtonLoading />);
        const submitButton = getByText('Login');
        fireEvent.click(submitButton);

        const validationMessage = getByText('Valores incorrectos');
        expect(validationMessage).toBeInTheDocument();
    });

    test('displays success message when values are valid', () => {
        const {getByPlaceholderText, getByText} = render(<ButtonLoading />);

        const userInput = getByPlaceholderText('user');
        const passwordInput = getByPlaceholderText('password');
        const submitButton = getByText('Login');

        const userEvent = {
            target: {
                value: 'user123'
            }
        };

        const passwordEvent = {
            target: {
                value: 'pass123'
            }
        };

        fireEvent.change(userInput, userEvent);
        fireEvent.change(passwordInput, passwordEvent);
        fireEvent.click(submitButton);

        const validationMessage = getByText('Valores validos');
        expect(validationMessage).toBeInTheDocument();
    });

});