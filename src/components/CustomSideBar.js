"use client"
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import { Box, Divider, Icon } from "@mui/material";
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';


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
                    overflow: "hidden",
                    "&:hover .icon-bar": {
                        opacity: 1,
                        transform: 'translateY(0)'
                    },
                    "&:hover .divider": {
                        width: '200px',
                        // borderColor: "red",
                        borderStyle: 'solid'
                    },
                }}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
            >
                <Box className="icon-box" sx={{
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <Image
                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/40.jpg"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                        style={{ objectFit: "cover", margin: "0 auto" }}
                    />

                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        width: '100%',
                        opacity: 0,
                        transition: '0.5s',
                        transform: 'translateY(100%)',
                        // background: 'red'
                    }} className='icon-bar'>
                        <IconButton aria-label="delete">
                            <Icon>favorite</Icon>
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <Icon>shuffle</Icon>
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <Icon>visibility</Icon>
                        </IconButton>
                    </Box>



                </Box>

                <Typography variant="h4" gutterBottom>
                    Strawberry
                </Typography>
                <Typography variant="h5" gutterBottom>
                    654.33
                </Typography>
                {/* <Box>  margin 0 auto => to the middle*/}
                <Divider sx={{ width: '50px', margin: '0 auto' }} className='divider'></Divider>
                {/* </Box> */}

                <Typography variant="h5" gutterBottom>
                    Add to Cart
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
