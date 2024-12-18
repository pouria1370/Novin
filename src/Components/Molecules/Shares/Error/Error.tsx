import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default Error;
