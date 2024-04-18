import assets from "@/assets";
import whyUsImage from "@/assets/choose-us.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.brain,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.dna,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.kidney,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];

  return (
    <Container>
      <Box>
        <Box textAlign="center">
          <Typography
            variant="h6"
            component="h1"
            color="primary"
            fontWeight={700}
          >
            Why Us?
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us?
          </Typography>
        </Box>
        <Grid container spacing={2} my={6}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                borderRadius: "10px 10px 100px 10px",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Image src={servicesData[0].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography component="p">
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                borderRadius: "10px 100px 10px 10px",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Image src={servicesData[1].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography component="p">
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                borderRadius: "10px 10px 100px 10px",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Image src={servicesData[2].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography component="p">
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "rgba(245, 245, 245, 1)",
                padding: "15px",
                borderRadius: "10px 100px 10px 10px",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              >
                <Image src={servicesData[3].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography component="p">
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image src={whyUsImage} width={400} alt="why-us-Img" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
