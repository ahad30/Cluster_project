import { Spin } from 'antd';
import React from 'react';

const Loading = () => {
    return (
        <div className='lg:max-w-5xl mx-auto'>
           <div className='flex flex-col items-center'>
           <Spin/>
           </div>
        </div>
    );
}

export default Loading;
