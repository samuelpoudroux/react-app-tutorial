import React from "react";
import { useParams } from "react-router-dom";
import { formatHomeTitle } from "./services";

const HomeTitle = () => {
  const { homeTitle } = useParams();
  return (
    <div>
      <h1>
        Bienvenue sur l'accueil de{" "}
        {formatHomeTitle(homeTitle) || "notre application de build REACT-JS"}
      </h1>
    </div>
  );
};

export default HomeTitle;
