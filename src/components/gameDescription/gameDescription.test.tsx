import {render} from "@testing-library/react";
import {GameDescription} from './index';
import '@testing-library/jest-dom';

const title = "Title";
const value = "Value";

describe('GameDescription', () => {
    it('should render with provided title and value', () => {
        const screen = render(<GameDescription title={title} value={value} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(value)).toBeInTheDocument();
    });

    it('should render with default styles', () => {
        const screen = render(<GameDescription title={title} value={value} />);

        expect(screen.getByText(title)).toHaveStyle({ color: "#8DFD1B" });
        expect(screen.getByText(value)).toHaveStyle({ color: "#white", marginLeft: "8px" });
    });

});
