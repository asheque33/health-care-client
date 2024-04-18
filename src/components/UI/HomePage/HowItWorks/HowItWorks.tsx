import { Box, Container, Grid, Typography } from "@mui/material";
import femaleDoctorImg from "@/assets/how-it-works-img.png";
import Image from "next/image";
import searchIcon from "@/assets/icons/search-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box textAlign="start">
        <Typography variant="h6" color="primary">
          How it works?
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          4 Easy Steps To Get Your Solution
        </Typography>
        <Typography component="p" width="45%">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus
          suscipit quasi atque ea fugit pariatur quos.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Image src={femaleDoctorImg} alt="how it works" width={500} />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Image src={searchIcon} alt="search-icon" />
                <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                  Search Doctor
                </Typography>
                <Typography
                  component="p"
                  fontSize={14}
                  fontWeight={400}
                  sx={{ mt: 1 }}
                >
                  Dolor sit amet consectetur. Scelerisque in eu mauris volutpat
                  Ornare .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Image src={doctorIcon} alt="search-icon" />
                <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                  Check Doctor Profile
                </Typography>
                <Typography
                  component="p"
                  fontSize={14}
                  fontWeight={400}
                  sx={{ mt: 1 }}
                >
                  Dolor sit amet consectetur. Scelerisque in eu mauris volutpat
                  Ornare .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Image src={appointmentIcon} alt="search-icon" />
                <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                  Schedule Appointment
                </Typography>
                <Typography
                  component="p"
                  fontSize={14}
                  fontWeight={400}
                  sx={{ mt: 1 }}
                >
                  Dolor sit amet consectetur. Scelerisque in eu mauris volutpat
                  Ornare .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Image src={charityIcon} alt="search-icon" />
                <Typography variant="h6" component="h2" fontWeight={500} mt={3}>
                  Get Your Solution
                </Typography>
                <Typography
                  component="p"
                  fontSize={14}
                  fontWeight={400}
                  sx={{ mt: 1 }}
                >
                  Dolor sit amet consectetur. Scelerisque in eu mauris volutpat
                  Ornare .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
