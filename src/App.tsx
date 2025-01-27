import { useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { IGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { IPlatform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={3} marginY={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid
            // selectedPlatform={gameQuery.platform}
            // selectedGenre={gameQuery.genre}

            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
