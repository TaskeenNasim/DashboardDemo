import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PublicIcon from "@mui/icons-material/Public";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChart from "./BarChart";
import DoughChart from "./DoughChart";
import balance from "../Images/balance.png";
import earning from "../Images/earning.png";
import order from "../Images/order.png";
import sales from "../Images/sales.png";
import Grid from "@mui/material/Grid";

import abstract from "../images/abstract.jpg";
import sarphens from "../images/sarphens.jpg";
const drawerWidth = 240;
const iconMapping = {
  Dashboard: <DashboardIcon />,
  Product: <StoreIcon />,
  Customers: <PeopleIcon />,
  Income: <MonetizationOnIcon />,
  Promote: <PublicIcon />,
  Help: <HelpIcon />,
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Hello Sharukh <WavingHandIcon style={{ height: "21px" }} />
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List style={{ paddingTop: "10px" }}>
          <ListItem>
            <DashboardIcon style={{ marginTop: "10px" }} />
            <h3
              style={{
                paddingLeft: "27px",
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
            >
              Dashboard
            </h3>
          </ListItem>
        </List>
        <Toolbar />
        <List>
          {[
            "Dashboard",
            "Product",
            "Customers",
            "Income",
            "Promote",
            "Help",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{iconMapping[text]}</ListItemIcon>
                <ListItemText primary={text} />
                <KeyboardArrowRightTwoToneIcon />
              </ListItemButton>
            </ListItem>
          ))}
          <List
            style={{
              marginTop: "90px",
              paddingLeft: "0px",
            }}
          >
            <ListItem style={{ backgroundColor: "#F1F0E8" }}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Evano" secondary="Project Manager" />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
            >
              <img
                src={earning}
                alt="Image 1"
                style={{
                  width: "70px",
                  height: "70px",
                  marginTop: "10%",
                  marginLeft: "10%",
                }}
              />
              <div style={{ paddingLeft: "55px" }}>
                <p>Earning</p>
                <h5 style={{ fontSize: "15px" }}>$198k</h5>
                <p>
                  <span style={{ color: "green" }}>37.8% </span>this month
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
            >
              <img
                src={order}
                alt="Image 2"
                style={{
                  width: "70px",
                  height: "70px",
                  marginTop: "10%",
                  marginLeft: "10%",
                }}
              />
              <div style={{ paddingLeft: "55px" }}>
                <p>Orders</p>
                <h5 style={{ fontSize: "15px" }}>$2.4k</h5>
                <p>
                  <span style={{ color: "red" }}>2%</span> this month
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
            >
              <img
                src={balance}
                alt="Image 3"
                style={{
                  width: "70px",
                  height: "70px",
                  marginTop: "10%",
                  marginLeft: "10%",
                }}
              />
              <div style={{ paddingLeft: "55px" }}>
                <p>Balance</p>
                <h5 style={{ fontSize: "15px" }}>$2.4k</h5>
                <p>
                  <span style={{ color: "red" }}>2% </span>this month
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
            >
              <img
                src={sales}
                alt="Image 4"
                style={{
                  width: "80px",
                  height: "70px",
                  marginTop: "10%",
                  marginLeft: "10%",
                }}
              />
              <div style={{ paddingLeft: "55px" }}>
                <p>Total Sales</p>
                <h5 style={{ fontSize: "15px" }}>$89k</h5>
                <p>
                  <span style={{ color: "green" }}>11%</span> this week
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          style={{ paddingTop: "38px", paddingLeft: "10px", gap: "0px" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              backgroundColor: "#F5F5F5",
              height: "270px",
              borderRadius: "10px",
            }}
          >
            <Grid container direction="column">
              <Grid item>
                {/* Quantity button in the top right corner */}
                <button
                  style={{
                    backgroundColor: "#F4CE14",
                    color: "black",
                    borderRadius: "5px",
                    marginLeft: "auto",
                    marginTop: "0px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Quantity
                  <KeyboardArrowDownIcon />
                </button>
              </Grid>

              <Grid item style={{ marginTop: "0" }}>
                {/* Overview in the top left corner */}
                <div
                  style={{
                    fontSize: "20px",
                    paddingLeft: "10px",
                    marginTop: "0px",
                  }}
                >
                  Overview
                </div>
              </Grid>

              <Grid item>
                {/* Monthly Earning just below Overview */}
                <div
                  style={{
                    fontSize: "12px",
                    paddingLeft: "10px",
                  }}
                >
                  Monthly Earning
                </div>
              </Grid>
            </Grid>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <BarChart width={340} height={210} barWidth={40} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              backgroundColor: "#F5F5F5",
              height: "270px",
              width: "150px",
              borderRadius: "10px",
              marginLeft: "8%",
            }}
          >
            <div
              style={{
                fontSize: "21px",
                maxWidth: "110px",
                paddingLeft: "3.5%",
              }}
            >
              Customers
            </div>
            <div
              style={{
                fontSize: "12px",
                paddingBottom: "24px",

                maxWidth: "180px",
                paddingLeft: "4%",
              }}
            >
              Customers that buy products
            </div>
            <div style={{ marginLeft: "3%", marginTop: "12px" }}>
              <DoughChart width={250} height={150} />
            </div>
          </Grid>
        </Grid>

        <div
          style={{
            backgroundColor: "#F5F5F5",
            paddingTop: "10px",
            marginTop: "28px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "10px",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: "5px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "5px",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Last 30 Days
              <KeyboardArrowDownIcon />
            </button>
          </div>

          <Grid
            container
            spacing={2}
            style={{ paddingTop: "0px", paddingLeft: "25px" }}
          ></Grid>

          <Grid
            container
            spacing={2}
            style={{ paddingTop: "0px", paddingLeft: "25px" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <h4 style={{ fontSize: "18px" }}>Product cell</h4>
              <h5>Product Name</h5>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "170px",
                  maxHeight: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxHeight: "80px",
                  }}
                >
                  <img
                    src={abstract}
                    alt="Product"
                    style={{
                      width: "40px",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginLeft: "8px" }}>
                  <h5
                    style={{
                      fontSize: "13px",
                      margin: "5px 0",
                      maxHeight: "fitcontent",
                    }}
                  >
                    Abstract 3D
                  </h5>
                  <p style={{ fontSize: "12px" }}>Small</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "170px",
                  maxHeight: "80px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={sarphens}
                    alt="Second Product"
                    style={{
                      width: "40px",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginLeft: "8px" }}>
                  <h5 style={{ margin: "5px 0" }}>Second Product</h5>
                  <p style={{ fontSize: "12px" }}>Large</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div
                style={{
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <h5 style={{ paddingTop: "50px" }}>Stock</h5>
                <p style={{ paddingTop: "20px" }}>32 in stock</p>
                <p style={{ paddingTop: "35px" }}>32 in stock</p>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div
                style={{
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <h5 style={{ paddingTop: "50px" }}>Price</h5>
                <h4 style={{ paddingTop: "20px" }}>$ 45.99</h4>
                <h4 style={{ paddingTop: "35px" }}>$ 45.99</h4>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div
                style={{
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <h5 style={{ paddingTop: "50px" }}>Total Sales</h5>
                <p style={{ paddingTop: "20px" }}>20</p>
                <p style={{ paddingTop: "35px" }}>20</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
}

export default Navbar;
