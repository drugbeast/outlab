import { Typography } from "@mui/material";
import {
  HOME_WARNING_BLOCK_TEXT,
  HOME_WARNING_BLOCK_TITLE,
} from "../../constants/constants";

function WarningBlock() {
  return (
    <>
      <Typography
        fontSize={56}
        color="accentColor.main"
        fontWeight={700}
        fontStyle="italic"
        textAlign="center"
      >
        {HOME_WARNING_BLOCK_TITLE}
      </Typography>
      <Typography
        sx={{ marginTop: "16px" }}
        fontSize={36}
        color="accentColor.main"
        fontWeight={400}
        textAlign="center"
      >
        {HOME_WARNING_BLOCK_TEXT}
      </Typography>
    </>
  );
}

export default WarningBlock;
