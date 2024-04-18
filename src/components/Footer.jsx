import { Typography, Box, Button } from "@mui/material";
import {
  FOOTER_AGE,
  FOOTER_ANNOUNCEMENT,
  FOOTER_EMAIL,
  FOOTER_PHONE_NUMBER,
  FOOTER_SOCIALS,
  FOOTER_TITLE,
  FOOTER_WARNINGS,
} from "../constants/constants";

function Footer() {
  return (
    <Box sx={{ display: "flex" }} pb="24px">
      <Box sx={{ width: "60%" }}>
        <Typography sx={{ fontWeight: 700, fontStyle: "italic" }} fontSize={56}>
          {FOOTER_TITLE}
        </Typography>
        <Typography mt="64px" fontSize={36}>
          {FOOTER_ANNOUNCEMENT}
        </Typography>
        <Typography fontSize={36} mt="32px">
          {FOOTER_EMAIL}
        </Typography>
        <Typography fontSize={36}>
          {FOOTER_PHONE_NUMBER}
        </Typography>
        <Typography fontSize={24} mt="24px">
          {FOOTER_WARNINGS[0]}
        </Typography>
        <Typography fontSize={24} mt="24px">
          {FOOTER_WARNINGS[1]}
        </Typography>
        <Typography fontSize={56} fontWeight={700} mt="32px">
          {FOOTER_AGE}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "40%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {FOOTER_SOCIALS.map((social) => (
            <Button
              sx={{
                height: "fit-content",
                fontFamily: "Roboto Condensed Variable",
                fontSize: "24px",
                color: "textColor.main",
                fontWeight: 400,
              }}
              startIcon={social.icon}
              disableRipple
              key={social.id}
            >
              {social.text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
