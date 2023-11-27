"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Grid, Typography } from '@mui/material'
import CustomTextField from './Component/Ui/TextField'
import CustomButton from './Component/Ui/Button'
import { useRouter } from 'next/navigation'
import { H6 } from './Component/Ui/Typography'

export default function Home() {

  // admin/dashboard

  const router = useRouter()


  return (
    <Grid container sx={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}>

      <Grid container xs={11} sm={11} md={11.5} lg={11.5} sx={{
        bgcolor: '',
        // mt: { md: 10, lg: 15 }
      }}>



        <Grid container md={6} lg={6} sx={{
          bgcolor: '', justifyContent: 'center', alignItems: 'center',
          display: { xs: 'none', sm: 'none', md: 'flex' }
        }}>

          <Grid
            md={10} lg={9}
            component='img'
            src='Assets/Login/loginImg.png'
          />

        </Grid>








        <Grid container sm={12} md={6} lg={6} sx={{
          bgcolor: '',
          mt: { xs: "10", sm: "12", md: 0 },
          justifyContent: 'center',
          alignItems: { xs: 'center', sm: 'center' },
          height: { xs: '80vh', sm: '90vh', md: '', lg: '' }
        }}>

          <Grid container sx={{
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '',
            height: 'fit-content'

          }}>

            <Grid container sx={{
              justifyContent: { xs: 'center', sm: '', md: '', lg: '' }
            }}>
              <Typography sx={{
                color: '#F8F8F8', textAlign: 'center',
                fontSize: { xs: 13, sm: 18, md: 13, lg: 18 },
                width: { sm: "80%", md: '80%', lg: '85%' },
                textShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
                lineHeight: { md: 1.2, lg: 1.4 },
                my: { sm: 2, md: 0 }
              }}>
                "Welcome to the future of restaurant reporting! We're serving up a fresh approach to streamline your restaurant management, making data deliciously easy to digest."
              </Typography>


              <Grid xs={10} sm={8.5} md={10} lg={6} container bgcolor="" sx={{
                mb: { lg: 6 },
                mt: { xs: 4, sm: 7, md: 3, lg: 7 },
                bgcolor: '#2F2F2F',
                borderRadius: { xs: "15px", sm: "17px", md: '20px' },
                justifyContent: 'center', alignItems: 'center'
              }}>

                <Grid container sx={{ bgcolor: "", justifyContent: 'center' }}>


                  <CustomTextField
                    placeHolder="Email"
                    mt={3.5} />

                  <CustomTextField
                    placeHolder="Password"
                    mt={2.5} />

                  <CustomButton onClick={() => router.push('admin/dashboard')}>Login</CustomButton>

                </Grid>

                <H6 my={2} width="70%" fontWeight={400}>
                  By continuing. you agree to (name)’s Terms of
                  service and Privacy policy
                </H6>

              </Grid>

            </Grid>

          </Grid>









        </Grid>

      </Grid>
















    </Grid >
  )
}
