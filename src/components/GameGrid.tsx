import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { IPlatform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGenre } from "../hooks/useGenres";
import { IGameQuery } from "../App";

interface IProps {
  gameQuery: IGameQuery;
  // selectedGenre: IGenre | null;
  // selectedPlatform: IPlatform | null;
}

const GameGrid = ({
  gameQuery /*selectedGenre, selectedPlatform*/,
}: IProps) => {
  const { error, data, isLoading } = useGames( gameQuery/*selectedGenre, selectedPlatform*/);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text textColor="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
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
