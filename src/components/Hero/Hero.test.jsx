import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Hero from './Hero';

const contentMock = {
    title: {
        first_time_accessing: "Lorem Ipsum",
        second_time_accessing: "Dolor Amit"
    },
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula mauris, orci vel faucibus ac tincidunt.",
    button_label: {
        first_time_accessing: "Button Label",
        second_time_accessing: "New Button Label"
    },
    button_link: "www.buttonlink.com",
    bg_image: "https://tf-frontend.netlify.app/images/v1/bgimage.png",
    shapes: {
        shape_1: "https://tf-frontend.netlify.app/images/v1/shapes-left.png",
        shape_2: "https://tf-frontend.netlify.app/images/v1/shapes-right.png"
    }
}

describe('Given a Hero component', () => {
    describe('When invoked', () => {
        beforeEach(() => {
            render(<Hero content={contentMock} />);
        });

        test('Then it should render the title and the first time info', () => {
            const title = screen.getByText(contentMock.title.first_time_accessing);
            expect(title).toBeDefined();
        });

        test('Then it should render the subtitle', () => {
            const subtitle = screen.getByText(contentMock.subtitle);
            expect(subtitle).toBeDefined();
        });

        test('Then it should render the subtitle and check the localstorage change', () => {
            const button = screen.getByText(contentMock.button_label.second_time_accessing);
            expect(button).toBeDefined();
        });

        test('Then it should have the correct background image', () => {
            const heroElement = screen.getByText(contentMock.title.second_time_accessing).closest('.hero');
            const backgroundImage = getComputedStyle(heroElement).backgroundImage;
            expect(backgroundImage).toContain(contentMock.bg_image);
          });
    })
})
