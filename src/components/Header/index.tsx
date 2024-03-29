import { Flex, Image, Heading, useDisclosure, Center } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";

import Logo from "../../assets/logo-min.svg";
import { theme } from "../../styles/theme";
import { Menu } from "./Menu";

export function Header() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex borderBottom="1px" borderColor="gray.50" px="8" py="2">
      <Flex align="center">
        <Image src={Logo} />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center ml="auto" onClick={onToggle} as="button" fontSize="2rem">
        <FaTh color={theme.colors.gray["300"]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
