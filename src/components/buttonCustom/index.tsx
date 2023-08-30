import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

const ButtonCustomStyle = styled(Button)(() => ({
    color: '#8DFD1B',
    border: "1px solid #8DFD1B",
    '&:hover': {
        backgroundColor: "#1A1A1A",
        boxShadow: "3px 4px 10px 0px #8DFD1B",
    },
}));

const ButtonActiveStyle = styled(Button)(() => ({
    color: '#8DFD1B',
    border: "1px solid #8DFD1B",
    backgroundColor: "#1A1A1A",
    '&:hover': {
        backgroundColor: "#1A1A1A",
        boxShadow: "3px 4px 10px 0px #8DFD1B",
    },
}));

type ButtonReturnProps = {
    children?: React.ReactNode,
    text: string,
    arrow: boolean,
    active: boolean,
    onClick: () => void
}

export function ButtonCustom({children, text, arrow, active, onClick}: ButtonReturnProps) {
    return <>
        {
            !active
                ? <ButtonCustomStyle
                    onClick={onClick}>
                    {
                        arrow &&
                        <ArrowRightAltIcon
                            sx={{transform: "rotate(180deg)", width: "50px"}}
                        />
                    }
                    {children}
                    {text}
                </ButtonCustomStyle>
                : <ButtonActiveStyle
                    onClick={onClick}>
                    {
                        arrow &&
                        <ArrowRightAltIcon
                            sx={{transform: "rotate(180deg)", width: "50px"}}
                        />
                    }
                    {children}
                    {text}
                </ButtonActiveStyle>
        }
    </>
}