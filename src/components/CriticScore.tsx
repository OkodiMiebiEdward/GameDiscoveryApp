import { Badge } from "@chakra-ui/react";
import React from "react";

interface IProp {
  score: number;
}

const CriticScore = ({ score }: IProp) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
