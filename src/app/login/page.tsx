"use client";
import { storeUserInfo } from "@/Services/actions/auth.services";
import { loggedInUser } from "@/Services/actions/loginUser";
import assets from "@/assets";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export type TLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<TLogin>();
  const onSubmit: SubmitHandler<TLogin> = async (values) => {
    try {
      const res = await loggedInUser(values);
      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            textAlign: "center",
            padding: 4,
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h2" fontWeight={600}>
                Patient Login Here!
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container sx={{ my: 2 }} spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      size="small"
                      required
                      {...register("email")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" fullWidth size="small">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        required
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography component="p" sx={{ textAlign: "end" }}>
                      Forgot Password?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained" type="submit">
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Box>
                <Typography variant="body2">
                  Don&lsquo;t have an account?{" "}
                  <span className="text-blue-400">
                    <Link href="/register">Register</Link>
                  </span>
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
