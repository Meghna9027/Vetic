import React from "react";
import PetImage from "../../src/PetImage.webp"
// import PetImg from '../../src/PetImg.png';
// import PetImgMobile from "./../../hm2.jpg"
import { styled } from "@mui/material/styles";
// import Headings from "../component/headings";
// import Footer from "../homePage/footer";
// import "../consultancy/App.css";
import Grid from '@mui/material/Grid';
import { Typography,Box} from "@mui/material";
import './About.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import MyImg1 from '../img1.jpg';
import MyImg2 from '../img2.png';
import MyImg3 from '../img3.png';
import MyImg4 from '../img4.png';

const AboutUsView = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {marginBottom: 44, marginTop: 10}
}));
// const HeadingView = styled("div")(({ theme }) => ({
//     [theme.breakpoints.down("sm")]: { marginLeft: 20, marginRight: 20, fontWeight: 400, marginTop:'1rem'},
//   }));
const BoxBanner = styled("div")(({ theme })  => ({
  height:'75vh', width:'100%',
  [theme.breakpoints.down("sm")]: { margin: "0px 0px", marginBottom: 44, marginTop: 89,}
}));
// const BoxBannerMobile = styled("div")(({ theme }) => ({
//   height:'auto', width:'auto',
//   [theme.breakpoints.up("sm")]: { margin: "0px 54px", marginBottom: 44, marginTop: 89,},
// }));

function About({ setScroll, isScroll }) {
   const data = [
      {
         heading: 'Our Vision',
         text: 'Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide exceptional pet care through a chain of digital first modern clinics.'
      },
      {
         heading: 'Inspiration For Vetic',
         text: 'In modern times where technology has helped grow the human health by leaps and bound, veterinary care is still following decade old treatments and practices. There is a clear lack of necessary medical infrastructure with very low adoption of technology. Having witnessed this first hand with his pet Simba, our founder felt an urgent need to solve for providing trusted veterinary care and so was Vetic born.'
      }
   ]
   const problems = [
      {
         img: MyImg1,
         title: 'Fix The Knowledge Gap',
         desc: 'We want to be a thought leader in providing the right information to Pet parents especially first time parents who lack awareness on how to take the best care of their loved ones.'
      },
      {
         img: MyImg2,
         title: 'Make Appointments Convenient',
         desc: 'Our easy to book tech interface for direct bookings along with tele-bookings removes the wait time and makes your visits hassle free.'
      },
      {
         img: MyImg3,
         title: 'Standardized Clinical Infrastructure',
         desc: 'We want to build modern chain of digital first clinics catering to yours and your pet’s needs along with providing state of the art medical and diagnostic equipment.'
      },
      {
         img: MyImg4,
         title: 'Care Tailored for Your Pet',
         desc: 'Every pet has different growth curve and nutritional requirements. Our compassionate vets ensure they assess and offer customized plans based on your pet’s needs.'
      }
   ]
  return (
    <>
   
    <BoxBanner style={{position: 'relative'}} sx={{display:{xs:'none',sm:'block',md:'block'}}}>
       <img src={PetImage}  alt='first' style={{height:'100%',width:'100%',objectFit:'cover',}}/>
       <Box style={{
        position: 'absolute',
        marginTop: '-27%',
        marginLeft: '35%',
        width:'35%',
        height: '45%',
        backgroundColor: 'white',
        opacity: 0.94,
         }}>
            <Box sx={{position: 'relative', textAlign: 'center'}}>
                <Typography sx={{marginTop:'1rem', fontFamily:'Work Sans',color:'#013773',fontSize:'24px', fontWeight:'bold'}}>VETIC</Typography>
                <Typography sx={{fontFamily:'Work Sans',fontSize:'16px', color:'#013773', fontWeight:'bold'}}>(Vay-tik)</Typography>
                <Typography sx={{fontFamily:'Work Sans',fontSize:'18px',  color:'#013773', marginTop: '20px', fontWeight:'bold'}}>Derived from knowledge of veterinary science</Typography>
                <Typography sx={{fontFamily:'Work Sans', fontSize:'18px',  color:'#013773', fontWeight:'bold'}}>India’s first digital pet clinic chain providing trusted</Typography>
                <Typography sx={{fontFamily:'Work Sans', fontSize:'14px', marginTop: '1rem', color:'#013773', fontWeight:'bold'}}>Vet Care for your pet every time.</Typography>
               </Box>
             </Box>
    </BoxBanner>

    {/* <BoxBannerMobile sx={{display:{xs:'block',sm:'none',md:'none'}}}>
       <img src={PetImgMobile}  alt='first' style={{height:'100%',width:'100%',objectFit:'cover',marginTop:'4rem'}}/>
    </BoxBannerMobile> */}
      {data.map((points) => Points(points))}
      <div style={{height: '300px', backgroundColor: 'rgb(243,243,243)', padding: '20px 50px', position: 'relative'}}>
      <Typography variant="h4" sx={{fontFamily:'Work Sans',color:'rgb(27,55,107)'}}>Problems we want to <b>Solve</b> </Typography>
      <hr style={{width: '25%', marginTop: '50px', marginLeft: '0px', backgroundColor: 'rgb(27,55,107)'}} />
      </div>
      <div style={{display: 'flex', gap: '20px', margin: '-12% 5%', marginBottom: '30px', position: 'relative'}}>
      {problems.map((prob) => Prob(prob))}
      </div>
    </>
  );
}
function Points({heading, text}){
   return(
      <AboutUsView> 
      <Grid container spacing={2}>
      <Grid item xs={12}>
   <Box style={{display: 'flex', 
         margin: '30px 0px', 
         justifyContent: 'center',
         alignItem:'center', 
         flexDirection:'row',
         gap:'1.4rem'}}>
    <Box >
     <Typography variant="h4" sx={{fontFamily:'Work Sans', 
                                    fontWeight: 'bold', 
                                    marginTop:'1rem',
                                    color:'rgba(1,55,115,1)'}}>{heading}</Typography>
     </Box>
     <Typography variant="body2" sx={{fontFamily:'Work Sans', 
                                       marginTop:'4px',
                                       marginLeft:'6rem', 
                                       textAlign: 'initial', 
                                       color: '#4C4C4C', 
                                       width:'40%',
                                       fontSize: '20px' }}>{text}</Typography> 
    </Box>
     </Grid>
</Grid>
</AboutUsView>
   )
}
function Prob({img, title, desc}){
   return(
      <div>
      <Card sx={{ maxWidth: 345, height: '100%', border: '1px solid #00000029', borderRadius: '0px'}}>
      <CardActionArea>
        <CardMedia
        style={{width: '100px', marginLeft: '80px'}}
         component="img"
          src={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{fontSize: '14px', fontWeight: 'bold'}} gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   )
}

export default About;