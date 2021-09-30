import React from "react";
import { useParams } from "react-router-dom";
import { formatHomeTitle } from "./services";

const HomeTitle = () => {
  const { homeTitle } = useParams();
  return (
    <div>
      <h1>
        Bienvenu sur l'accueil de{" "}
        {formatHomeTitle(homeTitle) || "notre application"}
      </h1>
    </div>
  );
};

export default HomeTitle;
