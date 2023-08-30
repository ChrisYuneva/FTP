import { Divider, ListItem, Typography } from "@mui/material";
import { formatDate } from "../../utils/formatDate";
import React from "react";

type GameDescriptionProps = {
    title: string,
    value: string,
    isDate?: boolean
}

export function GameDescription({ title, value, isDate }: GameDescriptionProps) {
    return (
        <>
            <ListItem sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{color: "#8DFD1B"}}>
                    {title}
                </Typography>
                <Typography sx={{ color: "#white", marginLeft: "8px" }}>
                    {
                        isDate ? formatDate(value) : value
                    }
                </Typography>
            </ListItem>
            <Divider component="li" sx={{ borderColor: "white", width: "100%" }} variant="fullWidth"/>
        </>
    )
}