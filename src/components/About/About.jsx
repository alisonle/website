import React from 'react';
import Left from './Left';
import Right from './Right';

const About = () => {
    return (
            <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='order-2 md:order-1'>
                        <Left />
                    </div>
                    <div className='order-1 md:order-2'>
                        <Right />
                    </div>
                </div>
            </div>
    );
};

export default About;