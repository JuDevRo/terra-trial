import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import Material from './Material';

const contentMock = {
    title: "Lorem Ipsum Dolor Sit Amet",
    posts: {
        post_1: {
            date: "23-02-22",
            type: "Type A",
            title: "This is the title of the journal post.",
            image: "https://tf-frontend.netlify.app/images/v1/post_1.png"
        },
        post_2: {
            date: "22-02-22",
            type: "Type A",
            title: "This is the title of the journal post lorem.",
            image: "https://tf-frontend.netlify.app/images/v1/post_2.png"
        },
        post_3: {
            date: "21-02-22",
            type: "Type B",
            title: "This is the title of the journal post lorem ipsum dolor sit.",
            image: "https://tf-frontend.netlify.app/images/v1/post_3.png"
        },
        post_4: {
            date: "20-02-22",
            type: "Type A",
            title: "This is the title of the journal post lorem ipsum dolor sit amet.",
            image: "https://tf-frontend.netlify.app/images/v1/post_4.png"
        }
    },
    button_label: "Our Blog",
    button_link: "www.ourblog.com"
}


describe('Given a Material component', () => {
    describe('When invoked', () => {
        beforeEach(() => {
            render(<Material content={contentMock} />);
        });

        test('Then it should render the title of the Material component', () => {
            const title = screen.getByText('Lorem Ipsum Dolor Sit Amet')
            expect(title).toBeDefined();
        })

        test('Then it should render the type of the post in the component', () => {
            const typeFirst = screen.getAllByText('Type A')
            const typeSecond = screen.getAllByText('Type B')
            expect(typeFirst).toBeDefined();
            expect(typeSecond).toBeDefined();
        })

        test('Then it should have correct background image for post 1', () => {
            const post1Element = screen.getByText('This is the title of the journal post.').closest('.material__post');
            const style = window.getComputedStyle(post1Element.querySelector('.material__image'));
            expect(style.backgroundImage).toBe(`url(${contentMock.posts.post_1.image})`);
        });
    
        test('Then it should have correct background image for post 2', () => {
            const post2Element = screen.getByText('This is the title of the journal post lorem.').closest('.material__post');
            const style = window.getComputedStyle(post2Element.querySelector('.material__image'));
            expect(style.backgroundImage).toBe(`url(${contentMock.posts.post_2.image})`);
        });

        test('Then it should have correct background image for post 3', () => {
            const post3Element = screen.getByText('This is the title of the journal post lorem ipsum dolor sit.').closest('.material__post');
            const style = window.getComputedStyle(post3Element.querySelector('.material__image'));
            expect(style.backgroundImage).toBe(`url(${contentMock.posts.post_3.image})`);
        });

        test('Then it should have correct background image for post 4', () => {
            const post4Element = screen.getByText('This is the title of the journal post lorem ipsum dolor sit amet.').closest('.material__post');
            const style = window.getComputedStyle(post4Element.querySelector('.material__image'));
            expect(style.backgroundImage).toBe(`url(${contentMock.posts.post_4.image})`);
        });

        test('Then it should render the date of the posts in the component', () => {
            const dateOne = screen.getAllByText(contentMock.posts.post_1.date)
            const dateTwo = screen.getAllByText(contentMock.posts.post_2.date)
            const dateThree = screen.getAllByText(contentMock.posts.post_3.date)
            const dateFour = screen.getAllByText(contentMock.posts.post_4.date)
            expect(dateOne).toBeDefined();
            expect(dateTwo).toBeDefined();
            expect(dateThree).toBeDefined();
            expect(dateFour).toBeDefined();
        })

        test('Then it should render the titles of the posts in the component', () => {
            const titleOne = screen.getAllByText(contentMock.posts.post_1.title)
            const titleTwo = screen.getAllByText(contentMock.posts.post_2.title)
            const titleThree = screen.getAllByText(contentMock.posts.post_3.title)
            const titleFour = screen.getAllByText(contentMock.posts.post_4.title)
            expect(titleOne).toBeDefined();
            expect(titleTwo).toBeDefined();
            expect(titleThree).toBeDefined();
            expect(titleFour).toBeDefined();
        })

        test('Then it should render the button behind the posts in the component', () => {
            const button = screen.getAllByText(contentMock.button_label)
            expect(button).toBeDefined();
        })
    })
})


