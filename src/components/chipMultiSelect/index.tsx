import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

type OptionsType = {
    title: string,
    value: string
}

type ChipMultiSelectProps = {
    options: OptionsType[],
    label: string,
    setValue: (newValue: string) => void,
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export function ChipMultiSelect({options, label, setValue}: ChipMultiSelectProps) {
    const theme = useTheme();
    const [selectOptions, setSelectOptions] = React.useState<string[]>([]);

    function handleChange(event: SelectChangeEvent<typeof selectOptions>) {
        setValue(typeof event.target.value === 'string' ? event.target.value : event.target.value.join('.'));
        setSelectOptions(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
    }

    return <FormControl sx={{maxWidth: 350, width: "100%"}}>
        <InputLabel id="demo-multiple-chip-label">
            {label}
        </InputLabel>
        <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectOptions}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label={label}/>}
            renderValue={(selected) => (
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                    {selected.map((value) => (
                        <Chip sx={{color: 'black', backgroundColor: "#8DFD1B"}} key={value} label={value}/>
                    ))}
                </Box>
            )}
            MenuProps={MenuProps}
        >
            {options.map((option) => (
                <MenuItem
                    key={option.title}
                    value={option.value}
                    style={getStyles(option.value, selectOptions, theme)}
                >
                    {option.title}
                </MenuItem>
            ))}
        </Select>
    </FormControl>;
}