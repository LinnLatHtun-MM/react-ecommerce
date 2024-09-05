"use client"
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import { Box } from '@mui/material'
import React from 'react'

function page({ params }) {
    console.log(params.detail);

    return (
        <Box>
            <CustomBreadcrumbs params={params.detail}></CustomBreadcrumbs>
        </Box>
    )
}

export default page
