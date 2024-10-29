import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Home from './Home';
import { vi, describe, beforeEach, test, expect } from 'vitest';

vi.mock('axios');

const mockData = {
    navbar: {
        logo: "https://tf-frontend.netlify.app/images/v1/logo.svg",
        menu: {
            menu_item_1: "Store",
            menu_item_2: "Our Story",
            menu_item_3: "Journal"
        }
    }
}

describe('Given a Home component', () => {
    describe('When invoked', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: mockData });
        });

        test('Then it should renders Header title when data is fetched', async () => {
            render(<Home />);
            await waitFor(() => {
              expect(screen.getByText(mockData.navbar.menu.menu_item_1)).toBeInTheDocument();
            });
        });

        test('Then it should render nothing if no data is fetched', async () => {
            axios.get.mockResolvedValue({ data: {} });
            render(<Home />);
            await waitFor(() => {
              expect(screen.queryByText(mockData.navbar.menu.menu_item_1)).not.toBeInTheDocument();
            });
        });
    });
})