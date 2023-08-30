import { render } from "@testing-library/react";
import { GameCard } from "./index";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe('GameCard', () => {
    it('should render a card with the correct props', () => {
        const id = 1;
        const title = "Test Game";
        const date = "2022-01-01";
        const publisher = "Test Publisher";
        const genre = "Test Genre";
        const img = "test-image.jpg";

        const screen = render(
            <BrowserRouter>
                <GameCard id={id} title={title} date={date} publisher={publisher} genre={genre} img={img}/>);
            </BrowserRouter>
        )

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(date)).toBeInTheDocument();
        expect(screen.getByText(publisher)).toBeInTheDocument();
        expect(screen.getByText(genre)).toBeInTheDocument();
    });

    it('should handle an "Invalid Date" prop correctly', () => {
        const id = 1;
        const title = "Test Game";
        const date = "Invalid Date";
        const publisher = "Test Publisher";
        const genre = "Test Genre";
        const img = "test-image.jpg";

        const screen = render(
            <BrowserRouter>
                <GameCard id={id} title={title} date={date} publisher={publisher} genre={genre} img={img}/>
            </BrowserRouter>
        );

        expect(screen.queryByText(date)).toBeNull();
    });
});
