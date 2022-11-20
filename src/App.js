import './App.css';
import { useState } from 'react';
import olxlogo from './images/olxlogo.png';
import Banner from './images/banner.jpg';
import { Container, Box } from '@mui/material'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { MenuItem } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Tooltip } from '@mui/material';



function App() {
  const [productList, setProductList] = useState([
    {
      title: "Iphone 13 Pro Max 256 GB",
      price: "Rs 339, 000",
      category: "mobile phone",
      image: require("./images/mobimg1.jpg"),
      location: "Walton Road, Lahore",
      duration: "1 week ago",
    },
    {
      title: "Iphone X 256gb",
      price: "Rs 75,000",
      category: "mobile phone",
      image: require("./images/mobimg2.jpg"),
      location: "Gulshan-e-Iqbal Town, Karachi",
      duration: "3 days ago",
    },
    {
      title: "240 yards west open 40 feet road block D",
      price: "Rs 26, 000, 000",
      category: "land & plots",
      image: require("./images/landimg1.jpg"),
      location: "Naya Nazimabad, Karachi",
      duration: "22 minutes ago",
    },
    {
      title: "Car Ceramic Coating (20)%off",
      price: "Rs 12,000",
      category: "vehicles",
      image: require("./images/vehimg1.jpg"),
      location: "DHA City Karachi, Karachi",
      duration: "1 week ago",
    },
    {
      title: "Classic 110cc Loader",
      price: "Rs 243, 000",
      category: "vehicles",
      image: require("./images/vehimg5.jpg"),
      location: "Liaquatabad, Karachi",
      duration: "8 hours ago",
    },
    {
      title: "iPhone 12 promax 256gb",
      price: "Rs 170,000",
      category: "mobile phone",
      image: require("./images/mobimg3.jpg"),
      location: "DHA Defence, Islamabad",
      duration: "4 days ago",
    },
    {
      title: "Category-D Plot For Sale In Asian Domino City Housing Scheme",
      price: "Rs 3,922,105",
      category: "land & plots",
      image: require("./images/landimg2.jpg"),
      location: "Asian Domino City Housing Scheme, Hyderabad",
      duration: "4 weeks ago",
    },
    {
      title: "1 Bed Apartment for sale in tallest CDA approved building of Islamabad",
      price: "Rs 14,490,000",
      category: "land & plots",
      image: require("./images/landimg4.jpg"),
      location: "Kazani 3, Islamabad",
      duration: "3 weeks ago",
    },
    {
      title: "Mercedes-Benz EQS 450+ AMG Line",
      price: "Rs 75,000,000",
      category: "vehicles",
      image: require("./images/vehimg2.jpg"),
      location: "DHA Phase 2, Karachi",
      duration: "1 day ago",
    },
    {
      title: "vivo s1 128gb 4G ram full box",
      price: "Rs 16,500",
      category: "mobile phone",
      image: require("./images/mobimg4.jpg"),
      location: "Cabinet Division Employees Cooperative Housing Society, Islamabad",
      duration: "3 minutes ago",
    },
    {
      title: "1st Floor Apartment In Block-H-L-K-M",
      price: "Rs 5,969,505",
      category: "land & plots",
      image: require("./images/landimg3.jpg"),
      location: "Sundas Castle, Hyderabad",
      duration: "4 weeks ago",
    },
    {
      title: "Honda Freed Hybrid 2022 Import",
      price: "Rs 5,750,000",
      category: "vehicles",
      image: require("./images/vehimg4.jpg"),
      location: "E-8/1, Islamabad",
      duration: "3 weeks ago",
    },
    {
      title: "iPhone 8 Plus scratch less phone",
      price: "Rs 48,000",
      category: "mobile phone",
      image: require("./images/mobimg5.jpg"),
      location: "Murree Road, Islamabad",
      duration: "13 minutes ago",
    },
    {
      title: "Flats Available For Sale In Gulzar e Hijri Scheme 33",
      price: "Rs 3,200,000",
      category: "land & plots",
      image: require("./images/landimg5.jpg"),
      location: "Scheme 33, Karachi",
      duration: "5 days ago",
    },
    {
      title: "Honda/ Civic vti oriel",
      price: "Rs 1,500,000",
      category: "vehicles",
      image: require("./images/vehimg3.jpg"),
      location: "Korang Town, Islamabad",
      duration: "4 days ago",
    }

  ]);

  const [listCategory, setListCategory] = useState([]);

  const listCategories = () => {
    let li = productList.map((e) => e.category)
    li = [...new Set([...li])]
    setListCategory([...li]);

  };
  // console.log(listCategory);



  const [selectedCategory, SetSelectedCategory] = useState([])

  let searchCategoryItem = (value) => {
    SetSelectedCategory(value);
    let filteredListItem = productList.filter((e) => e.category === value)
    setFilteredListItem([...filteredListItem])
    console.log(value)
  }


  const [filteredListItem, setFilteredListItem] = useState([]);

  let searchProduct = (val) => {
    let filteredList = productList.filter((e) => e.category ===
      selectedCategory && e.title.toLowerCase().includes(val.toLowerCase()))
    setFilteredListItem([...filteredList])
  }

  // useeffect Hook

  useEffect(() => {
    listCategories();
  }, [])








  return (
    <div className='appdiv'>
      <AppBar position="sticky" sx={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}>

        {/* top-container */}
        <Container sx={{ height: "100", px: 4, mx: 6, display: 'flex', alignItems: "center" }}>
          <Box maxWidth='sm'> <img alt="" src={olxlogo} width="35" /> </Box>

          <Box style={{ display: 'flex', justifyContent: "space-between", marginLeft: "20px", flexWrap: "wrap", width: "20%" }}>
            <Button sx={{ display: 'flex', alignItems: "center", fontSize: "12px", color: "#3B3B3B", '&:hover': { color: "#3a56ff" } }}>

              <DirectionsCarFilledOutlinedIcon sx={{ width: 20, paddingRight: 1, display: 'flex', alignItems: "center" }} />
              <Typography variant="p" sx={{ fontWeight: 700, fontSize: 12 }}>MOTORS</Typography>
            </Button>


            <Button sx={{ display: 'flex', alignItems: "center", fontSize: "12px", color: "#3B3B3B", '&:hover': { color: "#3a56ff" } }}>

              <BusinessOutlinedIcon sx={{ width: 20, paddingRight: 1, display: 'flex', alignItems: "center" }} />
              <Typography variant="p" sx={{ fontWeight: 700, fontSize: 12 }}>PROPERTY</Typography>
            </Button>
          </Box>
        </Container>
        {/* top-container End here */}


        {/* App Bar */}
        <Container sx={{ height: "60px", marginY: "20px", width: "90%" }}>
          <Box sx={{ display: "flex" }}>
            <Box maxWidth='sm' sx={{ width: "10%", display: 'inline-block' }}> <img alt="" src={olxlogo} width="80" /> </Box>

            <Box sx={{ width: "80%", display: "flex", justifyContent: "space-evenly" }}>

              <TextField
                sx={{ mx: 2, minWidth: "25%", backgroundColor: "#fff", textTransform: "capitalize" }}
                id="outlined-select"
                select label="Categories"
                variant='standard'
                onChange={(e) => searchCategoryItem(e.target.value)}
                value={selectedCategory}
              >

                <MenuItem value="" sx={{ color: "darkgrey" }}>
                  None
                </MenuItem>
                {/* {<Divider /> */}

                {listCategory.map((e, i) => (
                  <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}

              </TextField>


              <TextField
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find Cars, Mobile Phones and more..."
                // inputProps={{ 'aria-label': 'Find Cars, Mobile Phones and more...' }}
                onChange={(e) => searchProduct(e.target.value)}
              >
                <Box sx={{ backgroundColor: "#002f34", borderButtom: "1px solid black" }}>
                  <IconButton type="button" sx={{ p: '15px' }} aria-label="search">
                    <SearchIcon sx={{ color: "#ffffff" }} />
                  </IconButton>
                </Box>
              </TextField>




            </Box>
            <Box sx={{ width: "20%", display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Button variant="text" sx={{ width: "50%", padding: "10px", fontSize: "14px", fontWeight: "bold", color: "black", textDecoration: "underline" }}>Login</Button>
              <Button variant="outlined" href="#outlined-buttons" sx={{ width: "50%", padding: "10px", fontSize: "14px", fontWeight: "bold", color: "black", border: "4px solid #40e0d0", borderRadius: "50px" }}>
                <AddIcon sx={{ width: 20, display: 'flex', alignItems: "center" }} /> Sell</Button>

            </Box>


          </Box>
        </Container>
        {/* App Bar End here */}

        {/* Banner */}
        <Container >
          <img
            style={{ width: "100%", margin: "25px 0" }}
            src={Banner} alt="banner" />
        </Container>
        {/* Banner End */}


        {/* grid  */}
        <Grid container sx={{ borderBottom: "1px solid grey", display: "flex", justifyContent: "space-around" }}>
          {/* <Container sx={{ border: "1px solid green",display:"flex"}}> */}
          {filteredListItem.map((e, i) => (
            <Grid item xl={3} lg={3} md={3} sm={4} xs={4} m={6} key={i}>
              <Card
                sx={{ maxWidth: "350%", border: "1px solid #cecece",margin:"10px" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={e.image}
                    width="100%"
                    alt={e.title}
                  />
                </Box>
                <CardContent>
                  <Tooltip title={e.title}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                      <Typography
                        sx={{ height: 60, overflow: "hidden" }}
                        variant="subtitle1"
                      >
                        {e.title.slice(0, 25) + (e.title.length > 25 ? "..." : "")}
                      </Typography>

                      {/* <FavoriteBorderIcon /> */}
                    </Box>
                  </Tooltip>

                  <Typography gutterBottom variant="h6" component="div">
                    {`${e.price}`}
                  </Typography>

                  <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                    {e.location} • {e.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* </Container> */}
        </Grid>




        <Container sx={{ padding: 0 , margin:1}}>
          <Typography variant="h5" sx={{color: "black"}}>Fresh recommendations</Typography>
        </Container>

        {/* Mapping All Cards */}
        <Grid container sx={{display:"flex" ,justifyContent: "space-around" }}>

          {productList.map((e, i) => (
            <Grid item xl={3} lg={3} md={3} sm={4} xs={4} s={6}
              key={i}
            >
              <Card
                sx={{ maxWidth: 290, height: 300, border: "1px solid #cecece",margin:"10px" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {/* <img src={e.image} width="100%" height="180px" alt={e.title} /> */}
                  <CardMedia
                    component="img"
                    height="180"
                    image={e.image}
                    width="100%"
                    alt={e.title}
                  // objectFit="contain"
                  />
                </Box>
                <CardContent>
                  <Tooltip title={e.title}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                      <Typography
                        sx={{ height: 60, overflow: "hidden" }}
                        variant="subtitle1"
                      >
                        {e.title.slice(0, 25) + (e.title.length > 25 ? "..." : "")}
                      </Typography>

                    </Box>
                  </Tooltip>

                  <Typography gutterBottom variant="h6" component="div">
                    {`${e.price}`}
                  </Typography>

                  <Typography sx={{ fontSize: 12 }} color="text.secondary" mt={2}>
                    {e.location} • {e.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* All Cards Ends*/}

        </Grid>


      </AppBar>
    </div >
  );
}

export default App;
