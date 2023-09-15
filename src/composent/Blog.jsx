import { Box } from '@mui/material';
import React from 'react';
import BlogList from './BLOG/BlogList';
import BlogTitle from './BLOG/BlogTitle';

const Blog = ({theme}) => {
    return (
        <Box id="blog">
          <BlogTitle theme={theme}/>
          <Box>
            <BlogList theme={theme} title="ACHIEVES" imageTitle="service-achieve"/>
          </Box>
          
        </Box>
    );
};

export default Blog;<p>BLOG</p>