import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { imageList } from "../assets/ImagesList";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const { logo } = imageList;

export function Navbar() {
  return (
    <Fragment>
      <Box
        boxShadow="md"
        sx={{ boxShadow: " #ebf6ff 0px 3px  5px" }}
        p="4"
        position="sticky"
        top="0"
        zIndex="1"
        bg="white"
      >
        <Flex
          align="center"
          justify="space-between"
          maxW={{ md: "3xl", lg: "1024px", xl: "6xl" }}
          m={{ md: "auto", lg: "auto" }}
        >
          <Box>
            <Link to="/">
              <Image src={logo} maxW="10rem" alt="MyHours_Logo" />
            </Link>
          </Box>
          <Show below="991px">
            <Menu>
              <MenuButton
                as={Button}
                aria-label="menu"
                background={"inherit"}
                _active={{ background: "inherit" }}
              >
                <GiHamburgerMenu size="1.3rem" color="black" />
              </MenuButton>
              <MenuList width={"100vw"}>
                <Link to="/how-it-works">
                  <MenuItem color="#3b8fc2" py="4" fontSize="lg">
                    How it works
                  </MenuItem>
                </Link>
                <MenuItem color="#3b8fc2" py="4" fontSize="lg">
                  <Link to="/use-cases">Use cases</Link>
                </MenuItem>
                <MenuItem color="#3b8fc2" py="4" fontSize="lg">
                  <Link to="/pricing">Pricing</Link>
                </MenuItem>
                <MenuItem color="#3b8fc2" py="4" fontSize="lg">
                  <Link to="/support">Support</Link>
                </MenuItem>
                <MenuItem color="#3b8fc2" py="4" fontSize="lg">
                  <Link to="/signin">Sign in</Link>
                </MenuItem>
                <MenuItem
                  color="#3b8fc2"
                  py="4"
                  fontSize="lg"
                  justifyContent={{ sm: "center" }}
                >
                  <Box
                    w={{ base: "full", sm: "2xs" }}
                    color="white"
                    bg="#3b8fc2"
                    p="3"
                    textAlign="center"
                    borderRadius="md"
                  >
                    <Link to="/signup">Get My Hours Free</Link>
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>

          <Show above="lg">
            <Flex
              gap={{ lg: "8", xl: "10" }}
              justify="space-between"
              fontWeight="400"
              fontSize="lg"
              color="#3b8fc2"
            >
              <Center color="#3b8fc2">
                <Link to="/how-it-works">
                  <Text>How it works</Text>
                </Link>
              </Center>
              <Center color="#3b8fc2">
                <Link to="/use-cases">
                  <Text>Use cases</Text>
                </Link>
              </Center>
              <Center color="#3b8fc2">
                <Link to="/pricing">
                  <Text>Pricing</Text>
                </Link>
              </Center>
              <Center color="#3b8fc2">
                <Link to="/support">
                  <Text>Support</Text>
                </Link>
              </Center>
              <Center color="#3b8fc2">
                <Link to="/signin">
                  <Text>Sign in</Text>
                </Link>
              </Center>
              <Center color="#3b8fc2">
                <Link to="/signup">
                  <Button
                    w="3xs"
                    colorScheme="blue"
                    fontSize="lg"
                    fontWeight="normal"
                  >
                    Get My Hours Free
                  </Button>
                </Link>
              </Center>
            </Flex>
          </Show>
        </Flex>
      </Box>
    </Fragment>
  );
}
