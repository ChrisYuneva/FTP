import { createTheme } from "@mui/material";

const mainColor = '#8DFD1B';

export const THEME = createTheme({
    palette: {
        primary: {
            main: mainColor
        }
    },
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
                        color: mainColor
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
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: mainColor
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    color: mainColor,
                    backgroundColor: "#1A1A1A",
                    borderRadius: '3px'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ":hover": {
                        backgroundColor: "#3d3d3d"
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&::-webkit-scrollbar-track": {
                        "-webkit-box-shadow": "inset 0 0 6px #787878",
                        borderRadius: "10px"
                    },
                    "&::-webkit-scrollbar": {
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#1A1A1A"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#8DFD1B",
                        borderRadius: "10px"
                    }
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: '#fff',
                }
            }
        }
    }
})