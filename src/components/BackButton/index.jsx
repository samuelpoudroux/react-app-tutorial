import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return <Button onClick={() => history.back()}>Retour</Button>;
};

export default BackButton;
