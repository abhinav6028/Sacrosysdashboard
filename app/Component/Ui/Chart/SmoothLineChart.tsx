import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Grid } from '@mui/material';
import { H2, H6 } from '../Typography';

export default function SmoothLineChart() {

  const option = {
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7'],
      name: 'Day',
      axisLabel: {
        textStyle: {
          color: '#FFF'
        }
      },
      splitLine: {
        show: false
      }
    },


    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#FFF'
        }
      },
      splitLine: {
        show: false
      },
      lineStyle: { color: '#d5ceeb' }

    },
    series: [
      {
        data: [20, 30, 20, 36, 60, 30, 43],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#05FF00',
          width: 4
        }
      }
    ]
  };


  return (
    <Grid container lg={10} sx={{ bgcolor: '' }}>


      <Grid container justifyContent="space-around" alignItems='center'>

        <H2 fontWeight='bold'> Day wise comparison</H2>

        <Box sx={{ display: 'flex' }}>

          <Box

            sx={{
              // bgcolor: 'red',
              py: 1, px: 2,
              borderRadius: '12px ',
              mr: 2,
              '&:hover': {
                bgcolor: '#FFF'
              },
            }}>

            <H6 fontWeight='bold' color='#FFF'
              hoverColor="Black"
              hoverFontWeight='bold'
            >Day</H6>

          </Box>

          <Box sx={{
            // bgcolor: 'red',
            py: 1, px: 2,
            borderRadius: '12px ',
            mr: 2,
            '&:hover': {
              bgcolor: '#FFF'
            },
          }}>

            <H6 fontWeight='bold' color='#FFF'
              hoverColor="Black"
              hoverFontWeight='bold'>Month</H6>

          </Box>
        </Box>

      </Grid>


      <ReactECharts
        option={option}
        style={{ height: '300px', width: '100%' }}
      />
    </Grid>

  );
};