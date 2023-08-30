import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { ButtonCustom } from './index';

describe('ButtonCustom', () => {
    it('should render button with text and arrow icon', () => {
        const onClickMock = jest.fn();

        const screen = render(
            <ButtonCustom text="Test Button" arrow={true} active={false} onClick={onClickMock}/>
        );

        expect(screen.getByText("Test Button")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Test Button"));

        expect(onClickMock).toHaveBeenCalled();
    });

    it('should have default style when active is false', () => {
        const screen = render(
            <ButtonCustom text="Test Button" arrow={true} active={false} onClick={() => {
            }}/>
        );

        expect(screen.getByText("Test Button")).toHaveStyle({
            color: '#8DFD1B',
            border: "1px solid #8DFD1B"
        });
    });

});
