import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import headerImg from "../../assets/header.png";
import "./Nav.css";
import Search from "./search/search";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import Load from "../userLoader/userLoader";


const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Colleges ",
    link: "/collages",
  },
  {
    title: "Admission ",
    link: "/admission",
  },
  {
    title: "My College ",
    link: "/mycollage",
  },
];

const Nav = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <img src={headerImg} className='h-5 mr-2' alt='' />
            <Typography
              variant='h6'
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#white",
                textDecoration: "none",
              }}
            >
             <Link to="/"> BookMyCollege</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ title, link }, index) => (
                  <Link to={link} key={index}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            
            <Typography
              variant='h6'
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#white",
                textDecoration: "none",
              }}
            >
             <Link to="/"> BookMyCollege</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ title, link }, index) => (
                <Link to={link} key={index}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Box>

            <Search />

            {loading ? (
              <>
                <Load />
              </>
            ) : (
              <>
                {user ? (
                  <>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title={user?.displayName}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Travis Howard" src={user?.photoURL} />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem>Profile</MenuItem>

                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                      </Menu>
                    </Box>
                  </>
                ) : (
                  <>
                    <Link to='/login'>
                      <PrimaryButton text='Login' />
                    </Link>
                  </>
                )}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;
