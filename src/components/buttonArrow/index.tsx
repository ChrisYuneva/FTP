import { Button, styled } from "@mui/material";
import StraightIcon from '@mui/icons-material/Straight';

const ButtonArrowStyle = styled(Button)(() => ({
    color: '#8DFD1B',
    minWidth: '50px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #8DFD1B',
    position: 'fixed',
    right: '2%',
    bottom: '2%',
    '&:hover': {
        backgroundColor: '#1A1A1A',
        boxShadow: "3px 4px 10px 0px #8DFD1B"
    },
}));

export function ButtonArrow() {
    return (
        <ButtonArrowStyle onClick={() => window.scrollTo(0,0)}><StraightIcon></StraightIcon></ButtonArrowStyle>
    )
}