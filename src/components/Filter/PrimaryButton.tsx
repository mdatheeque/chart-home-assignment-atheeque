import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PrimaryButton(props: any) {
  const { reportTrigger, enablebtn } = props;
  return (
    <>
      <Button
        disabled={enablebtn ? false : true}
        onClick={reportTrigger}
        style={{ width: "230px", marginTop: "auto" }}
        variant="contained"
      >
        Run Report
      </Button>
    </>
  );
}
