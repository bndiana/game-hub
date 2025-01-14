import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = (props: GameCardContainerProps) => {
  return (
    <>
      <Box width="300px" borderRadius={10} overflow="hidden">
        {props.children}
      </Box>
    </>
  );
};

export default GameCardContainer;