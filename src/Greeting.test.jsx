import {test, expect, describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import  Greeting from './Greeting.jsx';

describe('does the text exist?', () => {
    test('hello world exists', () => {
        render(<Greeting/>)

        const helloWoldElement = screen.getByText('Hello World');
        expect(helloWoldElement).toBeInTheDocument();
    })
})