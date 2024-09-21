"use client"
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import { products } from '@/dummy/data';
import CustomCarouselItem from './CustomCarouselItem';

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
            {products && products.length > 0 && products.map((product, index) => {
                return (
                    <React.Fragment key={index}>
                        <CustomCarouselItem
                            product={product}></CustomCarouselItem>
                    </React.Fragment>
                )
            }
            )}
        </Slider>
    );
};

export default CustomSideBar;
