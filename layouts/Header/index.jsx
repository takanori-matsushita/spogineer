import { AppBar, Toolbar, Box } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Logo from "../../components/Logo"
import BlogTitle from "../../components/BlogTitle"
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <AppBar sx={{
      background: lightBlue[900]
    }}>
      <Toolbar sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
          <Logo />
          <BlogTitle />
          {/* <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Switch color="default" />
            <SearchIcon fontSize="large" />
          </Box> */}
      </Toolbar>
    </AppBar>
  );
}
