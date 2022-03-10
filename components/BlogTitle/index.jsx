import { Translate } from "@mui/icons-material"
import { Box } from "@mui/material"

export default function BlogTitle() {
  return <Box component='h1' sx={{
    fontSize: '22px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }}>元実業団選手の技術備忘録</Box>
}