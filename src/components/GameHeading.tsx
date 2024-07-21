import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";

interface IProps {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IProps) => {
  const heading = `${gameQuery.platform?.name || ""}  ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
