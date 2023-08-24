import {useNavigate} from "react-router-dom";

import {Button, Card, Grid, Typography} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export function GamePage() {
    const navigate = useNavigate();

    return (
        <Grid container>
            <Grid item xs={10}>
                <Button
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "fit-content",
                        marginBottom: "16px",
                    }}
                    startIcon={
                        <ArrowRightAltIcon
                            sx={{ transform: "rotate(180deg)", width: "50px" }}
                        />
                    }
                    onClick={() => navigate(-1)}
                >
                    Return to list
                </Button>
                <Card>
                    <Typography variant="h4"></Typography>
                </Card>
            </Grid>
        </Grid>
    )
}