import {useEffect, useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type OptionsType = {
    title: string,
    value: string
}

type CustomFilterProps = {
    options: OptionsType[],
    label: string,
    setValue: (newValue: string) => void
}

export default function CustomFilter({options, label, setValue}: CustomFilterProps) {
    const [valueState, setValueState] = useState("");

    useEffect(() => {
        setValue(valueState);
    }, [valueState]);

    return <FormControl sx={{maxWidth: "350px", width: "100%"}}>
        <InputLabel
            id="filter"
        >
            {label}
        </InputLabel>
        <Select
            labelId="filter"
            id="filterSelect"
            value={valueState}
            label={label}
            onChange={(event: SelectChangeEvent) => {
                setValueState(event.target.value)
            }}
        >
            {
                options.map((el) => <MenuItem
                    value={el.value}
                    key={el.value}
                >
                    {el.title}
                </MenuItem>)
            }
        </Select>
    </FormControl>;
}
