import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = (props: CriticScoreProps) => {
  const color =
    props.score > 75 ? "green" : props.score > 60 ? "yellow" : "red";

  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={2}
        borderRadius="5px"
        colorScheme={color}
      >
        {props.score}
      </Badge>
    </>
  );
};

export default CriticScore;
