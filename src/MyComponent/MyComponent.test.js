import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {

    let propData = {
        loading: true,
    };

    test('should loading state as true', () => {
        render(<MyComponent {...propData} />);
        const loadingElement = screen.getByText('Loading');
        expect(loadingElement).toBeInTheDocument();
        expect(loadingElement).toHaveClass('loading');
    });

    test('should loading state as false', () => {
        propData.loading = false;
        render(<MyComponent {...propData} />);
        const loadedElement = screen.getByText('Loaded');
        expect(loadedElement).toBeInTheDocument();
        expect(loadedElement).toHaveClass('loaded');
        expect(loadedElement).not.toHaveClass('loading');
    });
});