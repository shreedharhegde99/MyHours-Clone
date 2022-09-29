import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { Footer, GetStartedButton, Questions } from "../component";
import { topCards } from "../assets/HowItsWorksTopCards";
import { HowItWorksTopCards } from "../component/HowItWorksTopCards";
import {
  bottomCardsOne,
  bottomCardsTwo,
} from "../assets/HowItWorksBottomCards";
import { HowItWorksBottomCardsOne } from "../component/HowItWorksBottomCardsOne";
import { HowItWorksBottomCardsTwo } from "../component/HowItWorksBottomCardsTwo";
import { imageList } from "../assets/ImagesList";

export function HowItWorks() {
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
                How it works
              </Text>
              <Text
                color="#375d75"
                fontWeight="semibold"
                fontSize="3xl"
                textAlign="center"
              >
                & why you should switch to My Hours
              </Text>
            </Box>
            <Box px="2" py="6">
              <Text
                fontSize={{ base: "2xl", sm: "3xl" }}
                fontWeight="light"
                color="twitter.900"
                textAlign="center"
                lineHeight="1.5"
              >
                Time tracking was a pain. We fixed it and made time tracking
                worth the effort. My Hours is easy to use and gets the most out
                of your data with powerful reporting. Teams that use My Hours
                are more productive, efficient and organized.
              </Text>
            </Box>
            <Box>
              <GetStartedButton />
            </Box>
          </Box>
        </Box>

        <Box px="4" py="10">
          <AspectRatio
            ratio={16 / 9}
            maxW={{ md: "2xl", lg: "3xl", xl: "4xl" }}
            m="auto"
            boxShadow={"dark-lg"}
          >
            <iframe
              title="My Hours intro video"
              src="https://www.youtube.com/embed/VpMysclixyQ?rel=0&controls=1&autoplay=0&mute=0&start=0"
            />
          </AspectRatio>
        </Box>

        <Box py="20">
          {topCards.map((card) => (
            <HowItWorksTopCards {...card} key={card.heading} />
          ))}
        </Box>
        <Box px={{ lg: "4" }}>
          {bottomCardsOne.map((card) => (
            <HowItWorksBottomCardsOne {...card} key={card.heading} />
          ))}
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          m="auto"
          px={{ lg: "4" }}
        >
          {bottomCardsTwo.map((card) => (
            <HowItWorksBottomCardsTwo {...card} key={card.heading} />
          ))}
        </Stack>

        <Box>
          <Box
            textAlign="center"
            px="3"
            py="14"
            maxW={{ md: "2xl", lg: "4xl", xl: "5xl" }}
            m="auto"
          >
            <Image
              src={imageList.howItWorks.noSpy}
              alt="No_spy"
              maxW="8rem"
              m="auto"
            />
            <Heading textDecor="underline" py="4" fontSize="3xl">
              No, you cannot spy on your employees with My Hours
            </Heading>
            <Text py="2" fontSize="xl" fontWeight="light">
              My Hours does not record your or your employees’ screens. No
              screenshots, no apps tracked, no employee monitoring. Of course,
              you are free to view work logs that your team members have
              entered.
            </Text>
          </Box>
        </Box>
        <Box
          textAlign="center"
          py="20"
          color="#375d75"
          px="4"
          maxW={{ md: "md", lg: "2xl", xl: "4xl" }}
          m="auto"
        >
          <Heading textDecor="underline" fontSize={{ base: "4xl" }}>
            Take a look at the complete list of features in My Hours.
          </Heading>
          <Text fontSize="3xl" py="4">
            Or simply try it out:
          </Text>
          <GetStartedButton />
        </Box>
        <Questions />
        <Footer />
      </Box>
    </Fragment>
  );
}
