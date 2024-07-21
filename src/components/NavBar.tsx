import { ColorModeScript, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface IProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: IProps) => {
  return (
    <>
      <HStack>
        <Image src={Logo} boxSize="60px" borderRadius="100px" margin={1} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
