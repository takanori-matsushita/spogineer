import { Typography } from "@mui/material"

export default function BlogTitle() {
  return (
    <Typography variant='h1' sx={{
    fontSize: '22px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    }}>
      元実業団選手の技術備忘録
    </Typography>
  )
}