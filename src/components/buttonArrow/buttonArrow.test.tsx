import '@testing-library/jest-dom'
import {render} from "@testing-library/react";
import {ButtonArrow} from "./index";

describe('ButtonArrow', () => {
    it('should render Button component', () => {
        const screen = render(<ButtonArrow/>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
