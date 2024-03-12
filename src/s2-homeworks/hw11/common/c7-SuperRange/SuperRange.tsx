import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 160,
                color: '#0c2',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b'
                },
                '& .MuiSlider-thumb:hover': {
                    boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                },
                '& .MuiSlider-thumb': {
                    border: '2px solid #0c2',
                    color: 'white',

                    // green point
                    // position: 'relative',
                    // '&::before': {
                    //     content: '""',
                    //     position: 'absolute',
                    //     top: '50%',
                    //     left: '50%',
                    //     transform: 'translate(-50%, -50%)',
                    //     width: 6,
                    //     height: 6,
                    //     borderRadius: '50%',
                    //     backgroundColor: '#0c2',
                    // },
                },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

