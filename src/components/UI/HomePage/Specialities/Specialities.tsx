import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Specialities = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <Box sx={{ margin: "80px 0", textAlign: "center" }}>
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialities.
          </Typography>
          <Typography variant="h6" component="p">
            Find experienced Doctors across all specialities.{" "}
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {data.data.map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 5px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 5px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                src={speciality.icon}
                width={100}
                height={100}
                alt="image"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={1}>
                  {speciality.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button variant="outlined" sx={{ mt: "30px" }}>
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialities;
