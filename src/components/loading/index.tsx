import {Backdrop, CircularProgress} from "@mui/material";

type LoadingProps = {
    isLoading: boolean;
}

export function Loading({ isLoading }: LoadingProps) {
    return <Backdrop
        sx={{ color: '#8DFD1B', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isLoading}
    >
        <CircularProgress color="inherit" size={'100px'} />
    </Backdrop>;
}