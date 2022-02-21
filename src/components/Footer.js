import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const LogoText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Fredoka One',
    fontSize: '36px',
    textAlign: 'left',
    display: 'flex',
    color: "#fff",
    pb: 0
}));

export default function Footer() {
    return (
        <Box sx={{ 
            height: "20%",
            backgroundColor: "primary.main",
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Box 
            sx={{ 
                width: '70%',
                display: "grid",
                gridTemplateColumns: 'repeat(2, 1fr)',
            }}>
            <Box sx={{ m: 1, p: 1 }}>
                <LogoText>Weatherly</LogoText><br></br>
                <Typography sx={{ textAlign: 'left' }} variant="subtitle1">About Weatherly</Typography>
                <Typography sx={{ textAlign: 'left' }} variant="subtitle1">Terms of Use</Typography>
                <Typography sx={{ textAlign: 'left' }} variant="subtitle1">Privacy Policy</Typography>
                <Typography sx={{ textAlign: 'left', mt: 3 }} variant="subtitle2">2022 Weatherly LLC.  All rights reserved.</Typography>
            </Box>
            <Box sx={{ m: 1, p: 1 }}>
                <IconButton><TwitterIcon /></IconButton>
                <IconButton><FacebookIcon /></IconButton>
                <IconButton><PinterestIcon /></IconButton>
                <IconButton><InstagramIcon /></IconButton>   
            </Box>
        </Box>
        </Box>
    );
}