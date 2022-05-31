
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  TableContainer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

function Forms() {
  return (
    <>
      <Typography fontSize={22} fontWeight={700} color={"purple"}>
        Referral Patients Form
      </Typography>
      <Typography>Hayes Valley Health San Fransisco</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "lightblue",
          height: "100vh",
          gap: 2,
        }}
      >
        <Container
          component="form"
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            marginTop: "2rem",
            background: "white",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <FormControl>
                <InputLabel htmlFor="my-input">Date</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-date" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </Box>

            <FormControl>
              <InputLabel htmlFor="my-input">Phone</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-date" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </>
        </Container>
        <Button sx={{ fontWeight: "bold", fontSize: "1rem" }} color="success">
          + Add Referal
        </Button>
        <Button variant="contained" sx={{ width: "28rem" }}>
          Send referals
        </Button>
      </Box>
    </>
  );
}

export default Forms;
