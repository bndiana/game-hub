import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = (props: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(props.game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            //creating an array of platform objs
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={props.game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {props.game.name}
          <Emoji rating={props.game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
