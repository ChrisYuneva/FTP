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
                    Memory: {minRequirements.memory}
                </li>
                <li>
                    {minRequirements.graphics}
                </li>
                <li>
                    Processor: {minRequirements.processor}
                </li>
                <li>
                    Storage: {minRequirements.storage}
                </li>
            </ul>
        </Typography>
    )
}