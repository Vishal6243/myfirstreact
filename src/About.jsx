import React from 'react';
import web from '../src/images/about-header.png';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Wellcome to About page" imgsrc={web} visit="/Contact" btname="Contact Now" />
        </>
    )
}

export default About;