import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ButtonReturnStyle = styled(Button)(() => ({
    color: '#8DFD1B',
    border: "1px solid #8DFD1B",
    '&:hover': {
        backgroundColor: "#1A1A1A",
        boxShadow: "3px 4px 10px 0px #8DFD1B",
    },
}));

type ButtonReturnProps = {
    onClick: () => void
}

export function ButtonReturn({onClick}: ButtonReturnProps) {
    return (
        <ButtonReturnStyle
            startIcon={
                <ArrowRightAltIcon
                    sx={{transform: "rotate(180deg)", width: "50px"}}
                />
            }
            onClick={onClick}>
            Return to list
        </ButtonReturnStyle>
    )
}