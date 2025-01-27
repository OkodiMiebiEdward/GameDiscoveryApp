import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
