import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const InfoScreen = () => {
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
        padding: `${theme.spacing(5)} 20% 0 20%`,
        display: "flex",
        background: "black",
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

        <Box display="flex" flexDirection="column" width="33%">
          <Typography sx={{ margin: theme.spacing(2), fontWeight: "600" }}>
            FOR A GOOD CAUSE
          </Typography>
          <Typography
            sx={{
              margin: theme.spacing(2),
              height: "14rem",
            }}
          >
            We donate 13.37% of all profits to a non-profit empowering diversity
            in tech. Currently, donations go to Girls Who Code.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoScreen;
