import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useMediaQuery } from '@mui/material';
const SingleBarChart = ({size}) => {
    const isSmallScreen = useMediaQuery('(max-width: 523px)');
    const data = [
        { id: 'Value', value:size }
    ];

    return (
        <div style={{ width:`${isSmallScreen?size*2:size*3.5}px`, height: '15px',marginLeft:'10px', marginBottom:'10px' }} >
            <ResponsiveBar
                data={data}
                keys={['value']}
                indexBy="id"
              
                layout="horizontal"
                colors={['#36A54680']}
                borderRadius={'10px'}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                enableGridX={false}
                enableGridY={false}
                axisBottom={null}
                axisLeft={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                borderWidth={1}
            />
        </div>
    );
};

export default SingleBarChart;
