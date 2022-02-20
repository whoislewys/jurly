import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  const theme = useTheme();

  const bulletPoint = (headerText, bodyText) => {
    return (
      <Box display="flex" flexDirection="column" width="30%">
        <Typography sx={{ margin: theme.spacing(2), fontWeight: "600" }}>
          {headerText}
        </Typography>
        <Typography
          sx={{
            margin: theme.spacing(2),
            height: "14rem",
          }}
        >
          {bodyText}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        padding: `${theme.spacing(5)} 10% 0 10%`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Typography variant="h4">Welcome to G3M</Typography> */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="spaceBetween"
        alignItems="center"
        justifyContent="center"
      >
        {bulletPoint(
          "UNIQUE DESIGNS",
          "We use 3D printing to bring you 100% unique & meaningful designs that traditional jewelers just can't create."
        )}

        {bulletPoint(
          "HIGH QUALITY MATERIALS",
          "Each piece is Gold Vermeil finished so you can wear your buttery yellow, shimmering white, or elegant rose gold piece over and over again."
        )}
      </Box>
    </Box>
  );
};

export default Home;
