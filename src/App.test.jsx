import {test, expect, describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  App from './App.jsx';

describe('in js and in programming', () => {
    test("truth sould be the truthy", () =>{
        expect(true).toBe(true);
    });

    test('false should be false', () => {
        expect(false).toBe(false);
    });
});

describe('on the vite app page', () => {
    test('the title is visible', () => {
        //arrange
        render(<App/>)
        //act
        console.log(screen)
        //assert
        expect(screen.getByText('Vite + React')).toBeInTheDocument()
    });

    test('counter works', async () => {
        render(<App/>);
        userEvent.click(screen.getByText('count is', {exact: false}));
        expect(await screen.findByText('count is 1')).toBeInTheDocument();

    })
})