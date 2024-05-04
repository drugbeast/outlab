import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { MEDIUM_MEDIA_QUERY } from "../../constants/constants";
import { DevicesContext, LinesContext } from "../Layout";

BurgerAccordion.propTypes = {
  content: PropTypes.array,
  text: PropTypes.string,
  setOpen: PropTypes.func,
  path: PropTypes.string,
  contentType: PropTypes.string,
};

function BurgerAccordion(props) {
  const { content, text, setOpen, path, contentType } = props;
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const { setLine } = useContext(LinesContext);
  const { setSeries } = useContext(DevicesContext);

  return (
    <Accordion
      sx={{
        backgroundColor: "bgColor.main",
        color: "whiteColor.main",
        width: "230px",
      }}
    >
      <AccordionSummary
        sx={{
          "& div": {
            fontFamily: "Roboto Condensed Variable",
            fontSize: Medium ? "20px" : "24px",
            fontWeight: 500,
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            margin: 0,
          },
          minHeight: "fit-content",
        }}
      >
        {text} <MenuIcon sx={{ color: "whiteColor.main" }} />
      </AccordionSummary>
      {content.map((brand) => (
        <>
          <Accordion
            sx={{
              backgroundColor: "bgColor.main",
              color: "whiteColor.main",
            }}
          >
            <AccordionSummary
              sx={{
                "& div": {
                  fontFamily: "Roboto Condensed Variable",
                  fontSize: Medium ? "20px" : "24px",
                  fontWeight: 500,
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  margin: 0,
                },
                minHeight: "fit-content",
              }}
            >
              {brand.brand} <MenuIcon sx={{ color: "whiteColor.main" }} />
            </AccordionSummary>
            {brand.id == "vliq-lines" && (
              <>
                <Accordion
                  sx={{
                    backgroundColor: "bgColor.main",
                    color: "whiteColor.main",
                  }}
                >
                  <AccordionSummary
                    sx={{
                      "& div": {
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Medium ? "20px" : "24px",
                        fontWeight: 500,
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        margin: 0,
                      },
                      minHeight: "fit-content",
                    }}
                  >
                    30 МЛ <MenuIcon sx={{ color: "whiteColor.main" }} />
                  </AccordionSummary>
                  {brand.items.thirtyML.map((item) => (
                    <Link
                      sx={{ cursor: "pointer", color: "whiteColor.main" }}
                      to={path}
                      component={RouterLink}
                      underline="none"
                      key={item.id}
                      onClick={() => {
                        contentType == "lines"
                          ? setLine(item.name)
                          : contentType == "devices"
                          ? setSeries(item.name)
                          : null;
                        setOpen(false);
                      }}
                    >
                      <AccordionDetails
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Medium ? "18px" : "22px",
                          fontWeight: 500,
                          textAlign: "center",
                          textDecoration: "underline",
                        }}
                      >
                        {item.name}
                      </AccordionDetails>
                    </Link>
                  ))}
                </Accordion>
                <Accordion
                  sx={{
                    backgroundColor: "bgColor.main",
                    color: "whiteColor.main",
                  }}
                >
                  <AccordionSummary
                    sx={{
                      "& div": {
                        fontFamily: "Roboto Condensed Variable",
                        fontSize: Medium ? "20px" : "24px",
                        fontWeight: 500,
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        margin: 0,
                      },
                      minHeight: "fit-content",
                    }}
                  >
                    120 МЛ <MenuIcon sx={{ color: "whiteColor.main" }} />
                  </AccordionSummary>
                  {brand.items.oneHundredAndTwentyML.map((item) => (
                    <Link
                      sx={{ cursor: "pointer", color: "whiteColor.main" }}
                      to={path}
                      component={RouterLink}
                      underline="none"
                      key={item.id}
                      onClick={() => {
                        contentType == "lines"
                          ? setLine(item.name)
                          : contentType == "devices"
                          ? setSeries(item.name)
                          : null;
                        setOpen(false);
                      }}
                    >
                      <AccordionDetails
                        sx={{
                          fontFamily: "Roboto Condensed Variable",
                          fontSize: Medium ? "18px" : "22px",
                          fontWeight: 500,
                          textAlign: "center",
                          textDecoration: "underline",
                        }}
                        key={item.id}
                      >
                        {item.name}
                      </AccordionDetails>
                    </Link>
                  ))}
                </Accordion>
              </>
            )}

            {brand.id != "vliq-lines" &&
              brand.items.map((item) => (
                <Link
                  sx={{ cursor: "pointer", color: "whiteColor.main" }}
                  to={path}
                  component={RouterLink}
                  underline="none"
                  key={item.id}
                  onClick={() => {
                    contentType == "lines"
                      ? setLine(item.name)
                      : contentType == "devices"
                      ? setSeries(item.name)
                      : null;
                    setOpen(false);
                  }}
                >
                  <AccordionDetails
                    sx={{
                      fontFamily: "Roboto Condensed Variable",
                      fontSize: Medium ? "18px" : "22px",
                      fontWeight: 500,
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    {item.name}
                  </AccordionDetails>
                </Link>
              ))}

            {!brand.items.length && brand.id != "vliq-lines" && (
              <AccordionDetails
                sx={{
                  fontFamily: "Roboto Condensed Variable",
                  fontSize: Medium ? "18px" : "22px",
                  fontWeight: 500,
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                НИЧЕГО НЕТ!
              </AccordionDetails>
            )}
          </Accordion>
        </>
      ))}
    </Accordion>
  );
}

export default BurgerAccordion;
