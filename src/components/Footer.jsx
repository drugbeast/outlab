import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import {
  FOOTER_AGE,
  FOOTER_ANNOUNCEMENT,
  FOOTER_EMAIL,
  FOOTER_PHONE_NUMBER,
  FOOTER_SOCIALS,
  FOOTER_TELEGRAM_LINK,
  FOOTER_TITLE,
  FOOTER_WARNINGS,
  LARGE_MEDIA_QUERY,
  MEDIUM_MEDIA_QUERY,
  SMALL_MEDIA_QUERY,
} from "../constants/constants";

function Footer() {
  const Large = useMediaQuery(LARGE_MEDIA_QUERY);
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const Small = useMediaQuery(SMALL_MEDIA_QUERY);
  return (
    <Box>
      <Container maxWidth={false} sx={{ maxWidth: "1888px" }}>
        <Box sx={{ display: "flex" }} pb="24px">
          <Box sx={{ width: Small ? "100%" : "60%" }}>
            <Typography
              sx={{ fontWeight: 700, fontStyle: "italic" }}
              fontSize={Large ? 48 : Medium || Small ? 40 : 56}
            >
              {FOOTER_TITLE}
            </Typography>
            {Small && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: Small ? "0px" : "8px",
                  paddingTop: Small ? "16px" : "0px",
                }}
              >
                {FOOTER_SOCIALS.map((social) => (
                  <Button
                    sx={{
                      height: "fit-content",
                      width: "fit-content",
                      fontFamily: "Roboto Condensed Variable",
                      fontSize:
                        Small || Medium ? "20px" : Large ? "22px" : "24px",
                      color: "whiteColor.main",
                      fontWeight: 400,
                    }}
                    startIcon={social.icon}
                    disableRipple
                    key={social.id}
                    href={FOOTER_TELEGRAM_LINK}
                  >
                    {social.text}
                  </Button>
                ))}
              </Box>
            )}
            <Typography
              mt={Small ? "32px" : "64px"}
              fontSize={Large ? 32 : Medium ? 24 : Small ? 26 : 36}
            >
              {FOOTER_ANNOUNCEMENT}
            </Typography>
            <Typography fontSize={Large ? 32 : Medium ? 24 : Small ? 26 : 36} mt="32px">
              {FOOTER_EMAIL}
            </Typography>
            <Typography fontSize={Large ? 32 : Medium ? 24 : Small ? 26 : 36}>
              {FOOTER_PHONE_NUMBER}
            </Typography>
            <Typography fontSize={Medium || Small ? 18 : Large ? 22 : 24} mt="24px">
              {FOOTER_WARNINGS[0]}
            </Typography>
            <Typography fontSize={Medium || Small ? 18 : Large ? 22 : 24} mt="24px">
              {FOOTER_WARNINGS[1]}
            </Typography>
            <Typography
              fontSize={Small || Medium ? 40 : Large ? 48 : 56}
              fontWeight={700}
              mt="32px"
            >
              {FOOTER_AGE}
            </Typography>
          </Box>
          {!Small && (
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", width: "40%" }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {FOOTER_SOCIALS.map((social) => (
                  <Button
                    sx={{
                      height: "fit-content",
                      fontFamily: "Roboto Condensed Variable",
                      fontSize: Medium ? "18px" : Large ? "22px" : "24px",
                      color: "whiteColor.main",
                      fontWeight: 400,
                    }}
                    startIcon={social.icon}
                    disableRipple
                    key={social.id}
                    href={FOOTER_TELEGRAM_LINK}
                  >
                    {social.text}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
