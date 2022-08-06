import React from "react";
import PetImage from "../PetImg.png"
import { styled } from "@mui/material/styles";
import { Typography,Box} from "@mui/material";
import './About.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import MyImg1 from '../img1.jpg';
import MyImg2 from '../img2.png';
import MyImg3 from '../img3.png';
import MyImg4 from '../img4.png';

const AboutUsView = styled("div")(({ theme }) => ({
   // margin:'2rem',
  [theme.breakpoints.up("sm")]: {}
}));
const BoxBanner = styled("div")(({ theme })  => ({
  height:'75vh', width:'100%',
  [theme.breakpoints.down("sm")]: {
   height:'auto',
  margin: "0px 0px",
}
}));
const BoxPara = styled("div")(({ theme })  => ({
  position:'absolute', marginTop:'-27%', marginLeft:'35%', width:'35%', height:'45%',
  backgroundColor: 'white',opacity: 0.94,
  [theme.breakpoints.down("sm")]: { 
  }
}));
const TypographyView = styled("p")(({ theme })  => ({
  fontFamily:'Work Sans',  marginTop:'4px', textAlign: 'initial',  color: '#4C4C4C', fontSize: '20px',
  backgroundColor: 'white',opacity: 0.94,
  [theme.breakpoints.down("sm")]: { 
  }
}));
function About({ setScroll, isScroll }) {
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
    <div className="About">
    <BoxBanner className="about_container" sx={{display:{xs:'block',sm:'block',md:'block'}}}>
       <img className="about_image" src={PetImage}  alt='first'/>
       <BoxPara>
            <Box sx={{position: 'relative', textAlign: 'center'}}>
                <Typography sx={{marginTop:'1rem', fontFamily:'Work Sans',color:'#013773',fontSize:'24px', fontWeight:'bold'}}>VETIC</Typography>
                <Typography sx={{fontFamily:'Work Sans',fontSize:'16px', color:'#013773', fontWeight:'bold'}}>(Vay-tik)</Typography>
                <Typography sx={{fontFamily:'Work Sans',fontSize:'18px',  color:'#013773', marginTop: '20px', fontWeight:'bold'}}>Derived from knowledge of veterinary science</Typography>
                <Typography sx={{fontFamily:'Work Sans', fontSize:'18px',  color:'#013773', fontWeight:'bold'}}>India’s first digital pet clinic chain providing trusted</Typography>
                <Typography sx={{fontFamily:'Work Sans', fontSize:'14px', marginTop: '1rem', color:'#013773', fontWeight:'bold'}}>Vet Care for your pet every time.</Typography>
            </Box>
        </BoxPara>
    </BoxBanner>
  
  <AboutUsView>
   <Box sx={{margin:'1.4rem'}}>
       <Box sx={{display:'flex',gap:'2rem', justifyContent:'space-between', flexDirection:{xs:'column'} ,}}>
         <Typography variant="h4" sx={{fontFamily:'Work Sans', fontWeight: 'bold', marginTop:'1rem', color:'rgba(1,55,115,1)'}}>Our <span style={{color:"rgb(2,192,216)"}}>Vision</span></Typography>
         <TypographyView>Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide exceptional pet care through a chain of first modern digital clinics.</TypographyView>
       </Box>
       <Box sx={{display:'flex',gap:'2rem', justifyContent:'space-between', flexDirection:{xs:'column'} ,marginTop:'3rem'}}>
         <Typography variant="h4" sx={{fontFamily:'Work Sans', fontWeight: 'bold', marginTop:'1rem', color:'rgba(1,55,115,1)'}}>Inspiration For <span style={{color:"rgb(2,192,216)"}}>Vetic</span></Typography>
         <TypographyView>In modern times where technology has helped human health grow by leaps and bound, Veterinary care is still following decade old treatments and practices. There is a clear lack of necessary medical infrastructure with very low adoption of technology. <br/>After witnessing this lack first hand with his pet Simba, our founder felt an urgent need to solve for providing trusted veterinary care and that's how Vetic was born.</TypographyView>
         </Box>
   </Box>
      <div className="Prob_div">
      <Typography variant="h4" sx={{fontFamily:'Work Sans',color:'rgb(27,55,107)'}}>Problems we want to <b>Solve</b> </Typography>
      <hr/>
      </div>
      <div className="card_box">
      {problems.map((prob) => Prob(prob))}
      </div>
      </AboutUsView>
    </div>
  );
}

function Prob({img, title, desc}){
   return(
      <div>
         <Box
         style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%', zIndex: 10}}
         component="img"
          src={img}
          alt="green iguana">
        </Box>
      <Card style={{ maxWidth: 345, height: '100%', border: '1px solid #00000029', borderRadius: '0px', marginTop:'-6rem'}}>
      <CardActionArea>
        <CardContent sx={{marginTop:'6rem'}}>
          <Typography style={{fontSize: '13px', fontWeight: 'bold', textAlign: 'center'}} gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='center'>
            {desc}
         </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
   );
};
export default About;



{/* <Grid container spacing={2}>
<Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center'}}>
<Box style={{display: 'flex', 
   margin: '30px 20px', 
   justifyContent: 'center',
   alignItem:'center', 
   flexDirection:'row',
   gap:'1.4rem'}}>
<Box>
<Typography variant="h4" 
           sx={{fontFamily:'Work Sans', 
           fontWeight: 'bold', 
           marginTop:'1rem',
           color:'rgba(1,55,115,1)'}}>Our<span style={{color:"rgb(2,192,216)"}}>Vision</span></Typography>
</Box>
<Box>
<TypographyView>Create a platform that provides best in class knowledge to fill the information gap for pet parents and provide exceptional pet care through a chain of first modern digital clinics.</TypographyView> 
</Box>
</Box>
<Box style={{display: 'flex', 
   margin: '30px 20px', 
   justifyContent: 'center',
   alignItem:'center', 
   flexDirection:'row',
   gap:'1.4rem'}}>
<Box>
<Typography variant="h4" 
           sx={{fontFamily:'Work Sans', 
           fontWeight: 'bold', 
           marginTop:'1rem',
           color:'rgba(1,55,115,1)'}}>Inspiration For <span style={{color:"rgb(2,192,216)"}}>Vetic</span></Typography>
</Box>
<Box>
<TypographyView>In modern times where technology has helped human health grow by leaps and bound, Veterinary care is still following decade old treatments and practices. There is a clear lack of necessary medical infrastructure with very low adoption of technology. After witnessing this lack first hand with his pet Simba, our founder felt an urgent need to solve for providing trusted veterinary care and that's how Vetic was born.</TypographyView> 
</Box>
</Box>
</Grid>
</Grid> */}