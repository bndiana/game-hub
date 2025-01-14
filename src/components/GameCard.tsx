import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = (props: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={getCroppedImageUrl(props.game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            //creating an array of platform objs
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={props.game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
