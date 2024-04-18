import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const BannerSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      {/* Left Box */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        {/* Left Side bgImage Box */}
        <Box
          sx={{
            width: "700px",
            position: "absolute",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          delectus vitae quos! Laborum, molestiae! Voluptatibus, fugit. Aperiam
          quod laborum dicta.adipisicing elit. Similique delectus vitae quos!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      {/* right side of Banner section */}
      <Box
        sx={{
          p: 1,
          mt: 0,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: "-30px", left: "200px" }}>
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            right: "210px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={230}
            height={230}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "0px",
            bottom: "-50px",
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default BannerSection;
