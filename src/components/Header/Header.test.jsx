import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Header from './Header';

const contentMock = {
    logo: "https://tf-frontend.netlify.app/images/v1/logo.svg",
    menu: {
        menu_item_1: "Store",
        menu_item_2: "Our Story",
        menu_item_3: "Journal"
    }
}

describe('Given a Header component', () => {
    describe('When invoked', () => {
        beforeEach(() => {
            render(<Header content={contentMock} />);
        });

        test('Then it should render the logo and menu items', () => {
            const logo = screen.getByAltText("Logo de Terra");
            expect(logo).toBeInTheDocument();
            
        });

        test('Then it should render the buttons of the NavBar', () => {
            const titleOne = screen.getByText(contentMock.menu.menu_item_1)
            const titleTwo = screen.getByText(contentMock.menu.menu_item_2)
            const titleThree = screen.getByText(contentMock.menu.menu_item_3)
            expect(titleOne).toBeDefined();
            expect(titleTwo).toBeDefined();
            expect(titleThree).toBeDefined();
        })
    })
})


