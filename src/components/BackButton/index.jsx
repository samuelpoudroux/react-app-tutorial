import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const { goBack } = useHistory();

  return <Button onClick={() => goBack()}>Retour</Button>;
};

export default BackButton;
