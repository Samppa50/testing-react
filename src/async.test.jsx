import { describe, test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Async from "./async";

vi.stubGlobal('fetch', vi.fn());

describe('async work?', () => {
    test('should render post if request succeeds', async() => {
        const mockPosts = [
            {id: 'pt1', title: 'first post'},
            {id: 'pt2', title: 'second post'},
        ]

        fetch.mockResolvedValueOnce({
            json: async() => mockPosts
        });

        render(<Async/>);
        /*
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
        */

        for(const post of mockPosts) {
           await waitFor(() => expect(screen.getByText(post.title)).toBeInTheDocument());
        }

    });
});