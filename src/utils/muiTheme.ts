import {createTheme} from "@mui/material";

const mainColor = '#8DFD1B';

// css-1pcou3v-MuiFormLabel-root-MuiInputLabel-root.Mui-focused

export const THEME = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: mainColor
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: mainColor,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: mainColor,
                    },
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: mainColor,
                        },
                    },
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: mainColor,
                        }
                    },
                    '&.MuiSvgIcon-root-MuiSelect-icon': {
                        color: mainColor
                    }
                }
            }
        }
    }
})