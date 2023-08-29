import { Typography } from "@mui/material";
import React from "react";
import { MinSystemRequirements } from "../../api/types/gameType";

type GameMinRequirementsProps = {
    minRequirements: MinSystemRequirements
}

export function GameMinRequirements({ minRequirements }: GameMinRequirementsProps) {
    return(
        <Typography component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#8DFD1B"}}>
            Minimum system requirements:
            <ul style={{color: "white"}}>
                <li>
                    {minRequirements.os}
                </li>
                <li>
                    {minRequirements.memory}
                </li>
                <li>
                    {minRequirements.graphics}
                </li>
                <li>
                    {minRequirements.processor}
                </li>
                <li>
                    {minRequirements.storage}
                </li>
            </ul>
        </Typography>
    )
}