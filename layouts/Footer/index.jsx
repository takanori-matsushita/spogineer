import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{
      textAlign: 'center',
      background: '#e0e0e0',
      py: 2,
    }}>
      &copy;2022 ― <Typography component="span" sx={{
        fontWeight: 'bold',
      }}>Spogineer</Typography>
    </Box>
  );
}
