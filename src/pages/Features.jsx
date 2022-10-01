import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import {
  DemoCard,
  Footer,
  GetStartedButton,
  Questions,
  SignupCard,
} from "../component";
import { featureCards, moreFeatures, appsList } from "../assets/Features";
import { FeatureCards } from "../component";
import { BsChevronRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

export function Features() {
  return (
    <Fragment>
      <Box pt="24">
        <Box>
          <Box maxW={{ md: "3xl", lg: "5xl" }} m="auto">
            <Box textAlign="center">
              <Text
                fontSize={{ base: "4xl", sm: "7xl" }}
                py="6"
                px="2"
                fontWeight="light"
                lineHeight={{ sm: "normal" }}
              >
                All features
              </Text>
              <Text
                color="#375d75"
                fontWeight="semibold"
                fontSize="4xl"
                textAlign="center"
              >
                in My Hours
              </Text>
            </Box>
          </Box>
          <Box>
            <GetStartedButton />
          </Box>
        </Box>

        <Box>
          {featureCards.map((details) => (
            <FeatureCards {...details} key={details.heading} />
          ))}
        </Box>
        <Box py="20">
          <Box>
            <Heading fontSize="5xl" textAlign="center" py="10">
              More Features
            </Heading>
          </Box>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
            px="2"
            gap={{ base: "4" }}
            maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }}
            m={{ md: "auto" }}
          >
            {moreFeatures.map(({ title, details }) => {
              return (
                <GridItem px={{ base: "2", sm: "4" }} key={title}>
                  <Heading fontSize="1.8rem" py="2">
                    {title}
                  </Heading>
                  <Text fontSize="xl" fontWeight="light">
                    {details}
                  </Text>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }} m="auto" px="4" py="16">
          <Box>
            <Heading fontSize="5xl" py="2">
              Wherever you are
            </Heading>
            <Text fontSize="xl" fontWeight="light" py="2">
              My Hours works in your web browser, mobile apps and more...
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={{ base: "20", md: "4", lg: "16", xl: "20" }}
            placeItems="center"
            py="4"
          >
            {appsList.map(({ image, title, btnText }) => {
              return (
                <GridItem key={title} textAlign="center">
                  <VStack gap="2">
                    <Box>
                      <Image src={image} alt={title} m="auto" />
                    </Box>
                    <Box>
                      <Heading fontSize="xl"> {title} </Heading>
                    </Box>
                    <Button
                      variant="unstyled"
                      fontWeight="light"
                      fontSize="sm"
                      colorScheme="gray"
                      border={title === "Desktop" ? "" : "1px"}
                      borderColor="GrayText"
                      w="28"
                      borderRadius="full"
                      rightIcon={
                        btnText === "Sign up" ? (
                          <BsChevronRight />
                        ) : btnText === "Coming soon..." ? (
                          ""
                        ) : (
                          <FiDownload />
                        )
                      }
                    >
                      {btnText}
                    </Button>
                  </VStack>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Questions />
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "6", md: "4" }}
          py="20"
          h="max-content"
          maxW={{ lg: "5xl", xl: "6xl" }}
          m="auto"
        >
          <SignupCard />
          <DemoCard />
        </Stack>
        <Footer />
      </Box>
    </Fragment>
  );
}
