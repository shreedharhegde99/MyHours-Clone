import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import {
  DemoCard,
  Footer,
  GetStartedButton,
  Questions,
  SignupCard,
} from "../component";
import { imageList } from "../assets/ImagesList";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Reviews } from "../component/Reviews";

const {
  microsoftLogo,
  homePageHeading,
  G2logo,
  capterra,
  typeFoxlogo,
  KPMGLogo,
  ImpartnerLogo,
  SemaphoreLogo,
  AuroraLogo,
  ManpowerLogo,
  homePageCards: { coOrdinate, track, create },
} = imageList;

export function Home() {
  return (
    <Fragment>
      <Box pt="24">
        <Box maxW={{ md: "3xl", lg: "5xl" }} m="auto">
          <Box>
            <Text
              fontSize={{ base: "5xl", sm: "7xl" }}
              py="6"
              px="2"
              textAlign="center"
              fontWeight="thin"
              lineHeight={{ sm: "normal" }}
            >
              <span style={{ fontWeight: "400" }}>Organize </span>
              projects,
              <span style={{ fontWeight: "400" }}> Track </span>
              time and
              <span style={{ fontWeight: "400" }}> Report </span>
              your work
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
              Coordinate projects and tasks. Track your work hours and create
              awesome-looking reports for clients.
              <span style={{ fontWeight: "bold" }}>
                All-in-one free time tracking software.
              </span>
            </Text>
          </Box>
          <Box>
            <GetStartedButton />
          </Box>
        </Box>
        <Box py="6">
          <Image
            src={homePageHeading}
            alt="launch new website"
            maxW={{ md: "3xl" }}
            m="auto"
          />
        </Box>

        <Box py="6" px={{ base: "4", md: "2" }}>
          <Text textAlign="center" fontSize="3xl">
            Trusted by more than
            <span style={{ fontWeight: "900" }}>100.000 businesses</span> in the
            world
          </Text>
        </Box>
        <HStack
          m="auto"
          justify="center"
          px="4"
          py="6"
          w={{ lg: "3xl", xl: "5xl" }}
        >
          <Box>
            <Image src={capterra} alt="capterra" />
          </Box>
          <Box>
            <Image src={G2logo} alt="G2Logo" />
          </Box>
          <Box>
            <Image src={microsoftLogo} alt="MicrodoftLogo" />
          </Box>
        </HStack>
        <HStack
          gap={{ md: "2", lg: "6", xl: "10" }}
          py="4"
          px="4"
          w={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          m="auto"
          justify="center"
        >
          <Box>
            <Image maxH={"9"} src={typeFoxlogo} alt="TypeFoxLogo" />
          </Box>
          <Box>
            <Image maxH={"9"} src={KPMGLogo} alt="KPMGLogo" />
          </Box>
          <Box>
            <Image maxH={"9"} src={ImpartnerLogo} alt="ImpartnerLogo" />
          </Box>
          <Box>
            <Image maxH={"9"} src={SemaphoreLogo} alt="SemaphoreLogo" />
          </Box>
          <Box>
            <Image maxH={"9"} src={AuroraLogo} alt="AuroraLogo" />
          </Box>
          <Box>
            <Image maxH={"9"} src={ManpowerLogo} alt="ManpowerLogo" />
          </Box>
        </HStack>
        <Box
          px={{ base: "2", md: "4", lg: "10" }}
          pt="24"
          w={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          m="auto"
        >
          <Stack
            direction={{ base: "column", sm: "row" }}
            align="center"
            py="16"
          >
            <Box w={{ lg: "lg" }}>
              <Heading color="#375d75" py="4">
                Coordinate your team, projects and tasks
              </Heading>
              <Text py="4">
                Get out of your inbox mess: create projects, assign tasks and
                write-down or attach details. Track project profitability with
                hourly rates. Set up budgets and get reminded when you’re close.
              </Text>
              <Text color="#375d75" py="4">
                “Excellent time tracker to manage your tasks! It changed the way
                I organize myself, I'm more productive since I used it!” -
                Guadalupe G., Art Director
              </Text>
            </Box>
            <Box>
              <Image src={coOrdinate} alt="co-ordinate" />
            </Box>
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align="center"
            py="16"
          >
            <Box w={{ lg: "lg" }}>
              <Heading color="#375d75" py="4">
                Track your work hours, expenses and more
              </Heading>
              <Text py="4">
                With My Hours you can track all your work. Add a detailed
                description to your time logs and expenses. We know time
                tracking is a hassle, so we’ve designed it to be super fast.
              </Text>
              <Text color="#375d75" py="4">
                A wonderful product. We no longer have to use multiple programs
                to track time, projects, PTO, etc.” - Katie L., Office
                Coordinator
              </Text>
            </Box>
            <Box>
              <Image src={track} alt="track" />
            </Box>
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align="center"
            py="16"
          >
            <Box w={{ lg: "lg" }}>
              <Heading color="#375d75" py="4">
                Create great-looking reports
              </Heading>
              <Text py="4">
                Turn your work into dazzling reports with confidence. From
                Dashboard to more advanced time analytics. No need for extra
                spreadsheet work, even though you can export your data.
              </Text>
              <Text color="#375d75" py="4">
                My Hours is a super easy to use time tracker and great for
                sending hourly reports to clients for billable work” - Erin A.
                Business owner
              </Text>
            </Box>
            <Box>
              <Image src={create} alt="create" />
            </Box>
          </Stack>
          <HStack
            color="cyan.700"
            fontSize="2xl"
            justify="center"
            px="2"
            py="10"
          >
            <Box textDecoration="underline" textAlign="center" py="4">
              See how My Hours works in detail
            </Box>
            <Box>
              <AiOutlineArrowRight size="1.5rem" />
            </Box>
          </HStack>
        </Box>

        <Box
          px="4"
          textAlign="center"
          color="#375d75"
          maxW={{ md: "3xl", lg: "5xl" }}
          m="auto"
        >
          <Box py="8">
            <Heading fontSize="4xl">
              A flexible tool for all types of organizations
            </Heading>
          </Box>
          <Stack align="center" direction={{ base: "column", sm: "row" }}>
            <Box maxW="xs" margin="auto" py="8">
              <Heading fontSize="2xl">Billing</Heading>
              <Text fontSize="lg" fontWeight="medium" py="3">
                We need to bill our clients with flexible hourly rates.
              </Text>
              <HereIsHowLink />
            </Box>
            <Box maxW="xs" margin="auto" py="8">
              <Heading fontSize="2xl">Profitability</Heading>
              <Text fontSize="lg" fontWeight="medium" py="3">
                We would like to calculate the profitability of our projects.
              </Text>
              <HereIsHowLink />
            </Box>
            <Box maxW="xs" margin="auto" py="8">
              <Heading fontSize="2xl">Time tracking</Heading>
              <Text fontSize="lg" fontWeight="medium" py="3">
                We want to track time on projects and tasks.
              </Text>
              <HereIsHowLink />
            </Box>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} align="center">
            <Box maxW="xs" margin="auto" py="8">
              <Heading fontSize="2xl">Attendance</Heading>
              <Text fontSize="lg" fontWeight="medium" py="3">
                We need to track employee attendance/absence and tasks.
              </Text>
              <HereIsHowLink />
            </Box>
            <Box maxW="xs" margin="auto" py="8">
              <Heading fontSize="2xl">Client reporting</Heading>
              <Text fontSize="lg" fontWeight="medium" py="3">
                I need to report the time spent to clients or invoice them.
              </Text>
              <HereIsHowLink />
            </Box>

            <HStack
              color="cyan.700"
              fontSize="2xl"
              justify={{ base: "center", md: "space-between" }}
              px="2"
              py="10"
              w="xs"
            >
              <Box textDecoration="underline" textAlign="center" py="4">
                Find more use cases
              </Box>
              <Box>
                <AiOutlineArrowRight size="1.5rem" />
              </Box>
            </HStack>
          </Stack>
        </Box>
        <Reviews />
        <Questions />
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "6", md: "4" }}
          py="20"
          h="max-content"
          maxW={{ lg: "5xl", xl: "7xl" }}
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

function HereIsHowLink() {
  return (
    <Fragment>
      <Text color="#3b8fc2" textDecoration="underline">
        Here's how...
      </Text>
    </Fragment>
  );
}
