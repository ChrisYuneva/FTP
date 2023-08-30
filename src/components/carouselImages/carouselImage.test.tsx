import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { CarouselImages } from "./index";

describe('CarouselImages', () => {
    it('should render correctly with images', () => {
        const img = [
            {id: 1, image: 'image1.jpg'},
            {id: 2, image: 'image2.jpg'},
            {id: 3, image: 'image3.jpg'}
        ];

        const screen = render(<CarouselImages img={img}/>);

        expect(screen.getByText('Screenshots:')).toBeInTheDocument();
        expect(screen.getByAltText('Primary image')).toBeInTheDocument();
        expect(screen.getAllByRole('img')).toHaveLength(4);
    });

    it('should change primary image when clicking on a picture', () => {
        const img = [
            {id: 1, image: 'image1.jpg'},
            {id: 2, image: 'image2.jpg'},
            {id: 3, image: 'image3.jpg'}
        ];

        const screen = render(<CarouselImages img={img}/>);

        fireEvent.click(screen.getByAltText('Image id: 2'));

        expect(screen.getByAltText('Primary image')).toHaveAttribute('src', 'http://localhost/image2.jpg');
    });

    it('should render correctly with no images', () => {
        const screen = render(<CarouselImages img={[]}/>);

        expect(screen.queryByText('Screenshots:')).not.toBeInTheDocument();
        expect(screen.queryByAltText('Primary image')).not.toBeInTheDocument();
        expect(screen.queryAllByRole('img')).toHaveLength(0);
    });
});
