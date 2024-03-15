import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: '0 30px',
                boxSizing: 'border-box',
                width: '147px',
                borderRadius: '10px',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b'
                },
                '& .MuiSlider-thumb': {
                    color: '#00CC22',
                    border: '6px solid #00CC22',
                },
                '& .MuiSlider-thumb:before': {
                    border: '5px solid white',
                },
                '& .MuiSlider-track': {
                    color: '#00CC22',
                },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

