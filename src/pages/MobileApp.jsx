import {
  Box,
  Text,
  Heading,
  Image,
  Stack,
  Center,
  Grid,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { imageList } from "../assets/ImagesList";
import { cardDetails, benefits } from "../assets/MobileAppCards";
import {
  DemoCard,
  Footer,
  MobileAppBottomCards,
  MobileAppTopCards,
  Questions,
  SignupCard,
  SingleReviewCard,
} from "../component";

const { playStore, appleStore } = imageList.mobileApp;
export function MobileApp() {
  return (
    <Fragment>
      <Box pt="12">
        <Box>
          <Box
            maxW={{ md: "3xl", lg: "6xl" }}
            m="auto"
            px="5"
            textAlign="center"
          >
            <Box>
              <Text
                fontSize={{ base: "5xl", sm: "7xl" }}
                py="6"
                fontWeight="thin"
              >
                Track, report and organize projects on your phone
              </Text>
              <Text color="#375d75" fontWeight="semibold" fontSize="4xl">
                Free iOS and Android mobile time tracking apps
              </Text>
            </Box>
            <Box py="6">
              <Text
                fontSize="3xl"
                fontWeight="400"
                lineHeight="1.5"
                color="#375d75"
              >
                Unlimited users, projects and tasks.
              </Text>
            </Box>
          </Box>
        </Box>
        <Stack
          justify="center"
          align="center"
          py="6"
          direction={{ base: "column", sm: "row" }}
          gap="10"
        >
          <Box>
            <Image src={playStore} maxH="20" w="56" alt="PlayStore" />
          </Box>
          <Box>
            <Image
              src={appleStore}
              maxH="20"
              w="56"
              alt="AppleStore"
              borderRadius="2xl"
            />
          </Box>
        </Stack>

        <Center py="10">
          <Text textDecor="underline"> I haven't signed up yet</Text>
        </Center>

        <Stack
          px="4"
          py="10"
          gap={{ md: "28" }}
          maxW={{ md: "3xl", lg: "4xl", xl: "6xl" }}
          m="auto"
          pb="20"
        >
          {cardDetails.map((detail) => (
            <MobileAppTopCards {...detail} key={detail.title} />
          ))}
        </Stack>

        <Box bg="linear-gradient(to right,#fff,#2cb1f0)" py="6" px="4">
          <Heading py="4" textAlign="center" fontSize="4xl" fontWeight="medium">
            Download My Hours Mobile App
          </Heading>
          <Stack
            justify="center"
            align="center"
            py="6"
            direction={{ base: "column", sm: "row" }}
            gap="10"
          >
            <Box>
              <Image src={playStore} maxH="20" w="56" alt="PlayStore" />
            </Box>
            <Box>
              <Image
                src={appleStore}
                maxH="20"
                w="56"
                alt="AppleStore"
                borderRadius="2xl"
              />
            </Box>
          </Stack>
        </Box>
        <Box
          py={{ base: "12", sm: "20" }}
          px="2"
          maxW={{ md: "2xl", lg: "3xl", xl: "6xl" }}
          m="auto"
        >
          <Box textAlign="center">
            <Heading fontSize="5xl" fontWeight="medium">
              You are better off using My Hours
            </Heading>
            <Text color="#375d75" fontSize="3xl">
              The Benefits of using our Mobile Time Tracking App
            </Text>
          </Box>
          <Grid
            maxW={{ base: "2xs", md: "2xl", lg: "4xl" }}
            m="auto"
            columnGap={{ base: "20", md: "40", lg: "60" }}
            rowGap="20"
            py="4"
            templateColumns={{
              md: "1fr 1fr",
              lg: "0.5fr 0.5fr",
              xl: "325px 325px",
            }}
            px={{ md: "4" }}
            alignItems="center"
            justifyContent="center"
          >
            {benefits.map((detail) => (
              <MobileAppBottomCards {...detail} key={detail.title} />
            ))}
          </Grid>
        </Box>
        <SingleReviewCard />
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
