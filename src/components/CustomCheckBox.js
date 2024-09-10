// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Checkbox from '@mui/material/Checkbox';

// const BpIcon = styled('span')(({ theme }) => ({
//     borderRadius: 3,
//     width: 30,
//     height: 30,
//     boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     backgroundColor: '#f5f8fa',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '.Mui-focusVisible &': {
//         outline: '2px auto rgba(19,124,189,.6)',
//         outlineOffset: 2,
//     },
//     'input:hover ~ &': {
//         backgroundColor: '#ebf1f5',
//         ...theme.applyStyles('dark', {
//             backgroundColor: '#30404d',
//         }),
//     },
//     'input:disabled ~ &': {
//         boxShadow: 'none',
//         background: 'rgba(206,217,224,.5)',
//         ...theme.applyStyles('dark', {
//             background: 'rgba(57,75,89,.5)',
//         }),
//     },
//     ...theme.applyStyles('dark', {
//         // boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
//         // backgroundColor: '#394b59',
//         // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
//     }),
// }));

// const BpCheckedIcon = styled(BpIcon)({
//     backgroundColor: '#137cbd',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&::before': {
//         display: 'block',
//         width: 30,
//         height: 30,
//         backgroundImage:
//             "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//             " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//             "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//         content: '""',
//     },
//     'input:hover ~ &': {
//         backgroundColor: '#106ba3',
//     },
// });

// // Inspired by blueprintjs
// function BpCheckbox(props) {
//     return (
//         <Checkbox
//             sx={{ '&:hover': { bgcolor: 'transparent' } }}
//             disableRipple
//             // color="red"
//             checkedIcon={<BpCheckedIcon />}
//             icon={<BpIcon />}
//             inputProps={{ 'aria-label': 'Checkbox demo' }}
//             {...props}
//         />
//     );
// }

// export default function CustomCheckbox() {
//     return (
//         <div>
//             <BpCheckbox sx={{ backgroundColor: "black" }} />
//             <BpCheckbox defaultChecked color="success" />
//             <BpCheckbox />
//         </div>
//     );
// }


import * as React from 'react';

import { grey, yellow, green, red, white } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Typography from '@mui/material/Typography';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckbox() {

    const [checkedColor, setCheckedColor] = useState('');

    const handleCheckboxChange = (color) => (event) => {
        if (event.target.checked) {
            setCheckedColor(color);
        } else if (checkedColor === color) {
            setCheckedColor('');
        }
    };

    return (
        <div>

            {/* Display message based on the checked color */}
            {checkedColor && (
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {checkedColor}
                </Typography>
            )}

            <Checkbox
                {...label}
                checked={checkedColor === 'Black'}
                sx={{
                    color: grey[800],
                    '&.Mui-checked': {
                        color: grey[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 },
                }}
                onChange={handleCheckboxChange('Black')}

            />

            <Checkbox
                {...label}
                checked={checkedColor === 'Green'}
                sx={{
                    color: green[800],
                    '&.Mui-checked': {
                        color: green[600],
                    },

                    '& .MuiSvgIcon-root': { fontSize: 30 },
                    mr: 1
                }}
                onChange={handleCheckboxChange('Green')}

            />

            <Checkbox
                {...label}
                checked={checkedColor === 'Red'}
                sx={{
                    color: red[800],
                    '&.Mui-checked': {
                        color: red[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 }, mr: 1// Bigger size
                }}

                onChange={handleCheckboxChange('Red')}
            />

            <Checkbox
                {...label}
                checked={checkedColor === 'White'}
                sx={{
                    color: grey[100],
                    '&.Mui-checked': {
                        color: grey[100],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 }, mr: 1 // Bigger size
                }}

                onChange={handleCheckboxChange('White')}

            />
            <Checkbox
                {...label}
                checked={checkedColor === 'Yellow'}

                sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[600],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 30 }, p: 1// Bigger size
                }}

                onChange={handleCheckboxChange('Yellow')}
            />



        </div>
    );
}
