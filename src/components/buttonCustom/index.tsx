import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

const ButtonReturnStyle = styled(Button)(() => ({
    color: '#8DFD1B',
    border: "1px solid #8DFD1B",
    '&:hover': {
        backgroundColor: "#1A1A1A",
        boxShadow: "3px 4px 10px 0px #8DFD1B",
    },
}));

type ButtonReturnProps = {
    children?: React.ReactNode,
    text: string,
    arrow: boolean,
    onClick: () => void
}

export function ButtonCustom({ children, text, arrow, onClick }: ButtonReturnProps) {
    return (
        <ButtonReturnStyle
            onClick={onClick}>
            {
                arrow &&
                <ArrowRightAltIcon
                    sx={{transform: "rotate(180deg)", width: "50px"}}
                />
            }
            { children }
            { text }
        </ButtonReturnStyle>
    )
}