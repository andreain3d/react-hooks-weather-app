import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Tab = styled(Button)(({ theme }) => ({
    backgroundColor: '#1976D2',
    textAlign: 'left',
    display: 'inline-flex',
    color: "#fff",
    float: 'left',
    borderRadius: '20px 20px 0px 0px',
    marginRight: '1px',
    textTransform: 'none',
    border: '1px solid #1976D2'
}));

export default function MainContainer() {
    return(
        <div>
        <Box sx={{ backgroundColor: '#c4e2ff', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '60%', mt: 10 }}>
                <Tab sx={{ px: 4, pt: 2}}><Typography variant="h6"><CalendarTodayIcon sx={{ mr: 1 }} />Today</Typography></Tab>
                <Tab sx={{ px: 4, pt: 2}}><Typography variant="h6"><AccessTimeIcon sx={{ mr: 1 }} />Hourly</Typography></Tab>
                <Tab sx={{ px: 4, pt: 2}}><Typography variant="h6"><DateRangeIcon sx={{ mr: 1 }} />Seven Day</Typography></Tab>
            </Box>
        </Box>
        <Box sx={{ backgroundColor: '#c4e2ff', display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={3} sx={{ width: '60%', height: '400px', m: 10, mt: 0, borderRadius: '0px 20px 20px 20px', boxShadow: 'inset 0px 0px 0px 5px #1976D2'}}></Paper>
        </Box>
</div>
    );
}