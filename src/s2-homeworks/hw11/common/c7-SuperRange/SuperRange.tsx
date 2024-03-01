import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 160,
                color: '#0c2',
                '& .MuiSlider-thumb': {
                    // position: 'relative',
                    // '&::before': {
                    //     content: "''",
                    //     position: 'absolute',
                    //     top: '50%',
                    //     left: '50%',
                    //     transform: 'translate(-50%, -50%)',
                    //     width: '8px',
                    //     height: '8px',
                    //     borderRadius: '50%',
                    //     backgroundColor: 'blue',
                    // },
                    // '& .MuiSlider-thumb:last-child': {
                    //     transform: 'translate(50%, -50%)',
                    // },

                    border: '1px solid #0c2',
                    color: 'white',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b'
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
