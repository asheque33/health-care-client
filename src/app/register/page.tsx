"use client";
import { storeUserInfo } from "@/Services/actions/auth.services";
import { loggedInUser } from "@/Services/actions/loginUser";
import { registerPatient } from "@/Services/actions/registerPatient";
import assets from "@/assets";
import { modifiedIntoFormData } from "@/utils/modifiedIntoFormData";
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

type TPatientRegister = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};
type TPatientRegisterForm = {
  password: string;
  patient: TPatientRegister;
};

const RegisterPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<TPatientRegisterForm>();

  const onSubmit: SubmitHandler<TPatientRegisterForm> = async (values: any) => {
    const data = modifiedIntoFormData(values);
    try {
      const res = await registerPatient(data);
      if (res?.success) {
        toast.success(res.message);
        const result = await loggedInUser({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          // toast.success(result.message);
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
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
                Patient Register Here!
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container sx={{ my: 2 }} spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...register("patient.name")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...register("patient.email")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      // sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                      size="small"
                      fullWidth
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
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
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="number"
                      label="Contact Number"
                      type="tel"
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...register("patient.contactNumber")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="address"
                      label="Address"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      {...register("patient.address")}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" sx={{ mb: 1 }} fullWidth>
                  Register
                </Button>
              </form>
              <Typography component="p">
                Do You Already Have An Account?{" "}
                <span className="text-blue-400">
                  <Link href="/login">Login</Link>
                </span>{" "}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
