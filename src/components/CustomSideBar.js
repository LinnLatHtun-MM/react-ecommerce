// "use client"
// import React, { useState } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../style.css"
// import { Box } from "@mui/material";
// import Image from 'next/image'
// import Typography from '@mui/material/Typography';
// import CustomImgaeDrawer from '@/components/CustomImgaeDrawer';

// const CustomSideBar = (props) => {

//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [hoverIndex, setHoverIndex] = useState(null);

//     const handleMouseEnter = (index) => {
//         setHoverIndex(index);
//         setDrawerOpen(true);
//     };

//     const handleMouseLeave = () => {
//         setHoverIndex(null);
//         setDrawerOpen(false);
//     };
//     const settings = props.settings;

//     return (
//         <Slider {...settings}>

//             <Box sx={{
//                 textAlign: "center",
//                 // "&:hover .overlayButtons": {
//                 //     opacity: 1,
//                 // }
//             }}
//                 onMouseEnter={() => handleMouseEnter(0)}
//                 onMouseLeave={handleMouseLeave}
//             >

//                 <Image
//                     src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=800"
//                     width={250}
//                     height={250}
//                     alt="Picture of the author"
//                     style={{ objectFit: "cover", margin: "0 auto" }}
//                 />

//                 <Typography variant="h4" gutterBottom>
//                     Strawberry
//                 </Typography>

//                 <Typography variant="h5" gutterBottom>
//                     654.33
//                 </Typography>
//                 <CustomImgaeDrawer></CustomImgaeDrawer>

//             </Box >
//             <div>
//                 <h3>3</h3>
//             </div>
//             <div>
//                 <h3>4</h3>
//             </div>
//             <div>
//                 <h3>5</h3>
//             </div>
//             <div>
//                 <h3>6</h3>
//             </div>

//         </Slider >
//     );
// }

// export default CustomSideBar

"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import { Box } from "@mui/material";
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import CustomImgaeDrawer from '@/components/CustomImgaeDrawer';

const CustomSideBar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        setDrawerOpen(true);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
        setDrawerOpen(false);
    };

    const settings = props.settings;

    return (
        <Slider {...settings}>
            <Box
                sx={{
                    textAlign: "center",
                    position: "relative",
                    "&:hover .drawer": {
                        display: "block",
                    },
                    overflow: "hidden"
                }}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/40.jpg"
                    width={250}
                    height={250}
                    alt="Picture of the author"
                    style={{ objectFit: "cover", margin: "0 auto" }}
                />
                <Typography variant="h4" gutterBottom>
                    Strawberry
                </Typography>
                <Typography variant="h5" gutterBottom>
                    654.33
                </Typography>
            </Box>

            {/* Other slides */}
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
};

export default CustomSideBar;
