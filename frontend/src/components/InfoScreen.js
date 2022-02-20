import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const InfoScreen = () => {
  const theme = useTheme();

  const bulletPoint = (headerText, bodyText) => {
    return (
      <Box display="flex" flexDirection="column" width="40%">
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
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="spaceBetween"
        alignItems="center"
        justifyContent="center"
      >
        {bulletPoint(
          "TWO PART NFTS",
          "Minting gives you 2 NFTs. One you can redeem for physical jewelry, while the other is a metaverse accessory and your ticket into the exclusive G3M Discord for women in tech."
        )}

        {bulletPoint(
          "RARE",
          "There are only 4200 pieces to be minted for each drop. Get yours before they're gone."
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
            in tech. Currently, donations go to <a href='https://girlswhocode.com'>Girls Who Code.</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoScreen;
