import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { GameMinRequirements } from "./index";

describe('GameMinRequirements', () => {
    it('should render the minimum system requirements with correct data', () => {
        const minRequirements = {
            os: 'Windows 10',
            memory: '8GB',
            graphics: 'NVIDIA GeForce GTX 1060',
            processor: 'Intel Core i5-8400',
            storage: '50GB'
        };

        const screen = render(<GameMinRequirements minRequirements={minRequirements}/>);

        expect(screen.getByText('Minimum system requirements:')).toBeInTheDocument();
        expect(screen.getByText('Windows 10')).toBeInTheDocument();
        expect(screen.getByText('8GB')).toBeInTheDocument();
        expect(screen.getByText('NVIDIA GeForce GTX 1060')).toBeInTheDocument();
        expect(screen.getByText('Intel Core i5-8400')).toBeInTheDocument();
        expect(screen.getByText('50GB')).toBeInTheDocument();
    });
});
