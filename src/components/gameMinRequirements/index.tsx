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
                    OS: {minRequirements.os}
                </li>
                <li>
                    RAM: {minRequirements.memory}
                </li>
                <li>
                    Video card: {minRequirements.graphics}
                </li>
                <li>
                    CP: {minRequirements.processor}
                </li>
                <li>
                    HDD: {minRequirements.storage}
                </li>
            </ul>
        </Typography>
    )
}