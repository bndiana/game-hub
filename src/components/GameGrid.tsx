import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = (props: GameGridProps) => {
  const { data, error, isLoading } = useGames(
    // props.selectedGenre,
    // props.selectedPlatform
    props.gameQuery
  );
  // const skeletons = Array(data.length);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log(skeletons.length);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
      padding={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
