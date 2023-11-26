import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { H2, H3, H6 } from '../Typography';

export default function SmoothLineChart() {


  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19],
      },
    ],
    options: {
      chart: {
        color: '#FFF',
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
          },
        },
      },
      title: {
        text: '',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#FFF',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 20, 10, 10],
        },
      },
      yaxis: {
        min: 0,
        max: 30,
      },
    },
  });

  return (
    <Grid container id="chart" sx={{
      justifyContent: 'center', overflow: 'hidden',
    }}>

      <Grid container justifyContent="space-around" alignItems='center'>

        <H2> Day wise comparison</H2>

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


      <Grid sx={{
        height: 300, width: 400,
        py: { xs: 1, sm: 1, md: 2, lg: 3 }
      }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="100%"
          width="100%"
        />

      </Grid>

    </Grid>
  );
};