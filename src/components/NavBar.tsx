import { ColorModeScript, HStack, Image } from "@chakra-ui/react";
import Edward from "../assets/Edward.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={Edward} boxSize="60px" borderRadius="100px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
