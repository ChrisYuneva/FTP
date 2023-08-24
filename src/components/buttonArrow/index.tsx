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
    left: '95%',
    bottom: '4%',
    '&:hover': {
        backgroundColor: '#ffffff',
    },
}));

export function ButtonArrow() {
    return (
        <ButtonArrowStyle onClick={() => window.scrollTo(0,0)}><StraightIcon></StraightIcon></ButtonArrowStyle>
    )
}