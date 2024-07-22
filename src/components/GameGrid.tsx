import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGameQuery } from "../App";

interface IProps {
  gameQuery: IGameQuery;
  // selectedGenre: IGenre | null;
  // selectedPlatform: IPlatform | null;
}

const GameGrid = ({
  gameQuery /*selectedGenre, selectedPlatform*/,
}: IProps) => {
  const { error, data, isLoading } = useGames(
    gameQuery /*selectedGenre, selectedPlatform*/
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text textColor="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
