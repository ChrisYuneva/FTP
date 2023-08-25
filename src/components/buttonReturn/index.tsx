import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import StraightIcon from "@mui/icons-material/Straight";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ButtonReturnStyle = styled(Button)(({ onClick }) => ({
    color: '#8DFD1B',
    '&:hover': {
        backgroundColor: '#1A1A1A',
    },
}));

type ButtonReturnProps = {
    onClick: void
}

export function ButtonReturn({ onClick }: ButtonReturnProps) {
    return (
        <ButtonReturnStyle startIcon={
            <ArrowRightAltIcon
                sx={{transform: "rotate(180deg)", width: "50px"}}
            />
        } onClick={() => onClick}></ButtonReturnStyle>
    )
}