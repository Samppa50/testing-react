import {test, expect, describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  Greeting from './Greeting.jsx';

describe('does the text exist?', () => {
    test('hello world exists', () => {
        render(<Greeting/>)

        const helloWoldElement = screen.getByText('hello world');
        const niceTextElement = screen.getByText('nice to see you');
        expect(helloWoldElement).toBeInTheDocument();
        expect(niceTextElement).toBeInTheDocument();
    })
})