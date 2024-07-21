import { ColorModeScript, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <Image src={Logo} boxSize="60px" borderRadius="100px" margin={1} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
