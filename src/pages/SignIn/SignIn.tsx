import { usePageTitle } from "@/hooks";
import { userFormSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ISignInSubmitData } from "./SignIn.interface";

export const SignIn = () => {
  usePageTitle("Sign In");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInSubmitData>({
    resolver: yupResolver(userFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ISignInSubmitData) => {
    console.table(data);

    reset();
  };

  return (
    <section>
      <header>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", mt: "40px", mb: "20px", fontWeight: 700 }}
        >
          Sign In
        </Typography>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <TextField
            {...register("email")}
            size="small"
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            error={errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password")}
            size="small"
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            error={errors.password?.message ? true : false}
            helperText={errors.password?.message}
          />
        </Box>
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ width: "100%", mt: "20px" }}
        >
          Sign In
        </LoadingButton>
      </form>
    </section>
  );
};
