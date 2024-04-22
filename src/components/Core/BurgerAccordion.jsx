import MenuIcon from "@mui/icons-material/Menu";
import { Accordion, AccordionDetails, AccordionSummary, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { MEDIUM_MEDIA_QUERY } from "../../constants/constants";
import { LinesContext } from "../Layout";


BurgerAccordion.propTypes = {
  content: PropTypes.array,
  text: PropTypes.string,
  setOpen: PropTypes.func,
  path: PropTypes.string
};

function BurgerAccordion(props) {
  const { content, text, setOpen, path } = props;
  const Medium = useMediaQuery(MEDIUM_MEDIA_QUERY);
  const { setLine } = useContext(LinesContext);

  return (
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
            gap: "8px",
            margin: 0,
          },
          minHeight: "fit-content",
        }}
      >
        {text} <MenuIcon sx={{ color: "whiteColor.main" }} />
      </AccordionSummary>
      {content.map((item) => (
        <Link
          sx={{ cursor: "pointer", color: "whiteColor.main" }}
          to={path}
          component={RouterLink}
          underline="none"
          key={item.id}
          onClick={() => {
            setLine(item.name);
            setOpen(false)
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
  );
}

export default BurgerAccordion;
