import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} margin={1} flex justifyContent={"center"}>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="nombre"
              fullWidth
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              name="phone"
              fullWidth
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              fullWidth
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              type="password"
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Repeat Password"
              variant="outlined"
              name="confirmPassword"
              fullWidth
              onChange={handleChange}
              error={errors.confirmPassword ? true : false}
              helperText={errors.confirmPassword}
              type="password"
            />
          </Grid>

          <Grid xs={6}>
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
