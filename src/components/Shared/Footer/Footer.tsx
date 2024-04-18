import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import linkedInIcon from "@/assets/landing_page/linkedin.png";
import fbIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";

const FooterPage = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={3} justifyContent="center">
          <Typography color="#ffffff" component={Link} href="/">
            Consultation
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Health Plans
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Medicine
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Diagonstics
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={3} py={2} justifyContent="center">
          <Typography component={Link} href="https://www.linkedin.com/">
            <Image src={linkedInIcon} alt="lIn" width={25} height={25} />
          </Typography>
          <Typography component={Link} href="https://www.facebook.com/">
            <Image src={fbIcon} alt="fb" width={25} height={25} />
          </Typography>
          <Typography component={Link} href="https://www.instagram.com/">
            <Image src={instagramIcon} alt="Instagram" width={25} height={25} />
          </Typography>
          <Typography component={Link} href="https://www.twitter.com/">
            <Image src={twitterIcon} alt="twitter" width={25} height={25} />
          </Typography>
        </Stack>
        <div className="border-b-[1px] border-dashed" />
        <Stack direction="row" gap={3} py={3} justifyContent="space-between">
          <Typography component="p" color="white">
            &copy; 2024 AR Health Care.All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            color="white"
            fontWeight={600}
          >
            A
            <Box component="span" color="primary.main">
              R
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy!Terms and Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterPage;
