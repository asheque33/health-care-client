import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();

  return (
    <Box
      sx={{
        py: 30,
        my: 10,
        backgroundColor: "rgba(20,20,20,.1)",
        clipPath: "polygon(0 0, 100% 25%,100% 100%,0 75%)",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} mt={2}>
          Access to expert physicians,surgeons and advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top quality surgeons facilities are given here.
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card
                sx={{
                  mt: 4,
                }}
              >
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    alt="doctorPhoto"
                    width={600}
                    height={300}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification} , {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "space-between", px: 2, mb: 1 }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="outlined" sx={{ mt: "30px" }}>
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
