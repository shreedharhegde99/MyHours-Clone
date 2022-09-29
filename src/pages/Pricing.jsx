import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { Fragment } from "react";
import { pricingTable } from "../assets/Pricing";
import {
  DemoCard,
  Footer,
  Questions,
  SignupCard,
  SingleReviewCard,
  TableData,
} from "../component";
import { FAQList } from "../assets/FAQList";
const { billing, integration, organize, report, track, team } = pricingTable;

export function Pricing() {
  return (
    <Fragment>
      <Box pt="12">
        <Box textAlign="center" px="4" margin="auto">
          <Box py="4">
            <Text
              fontSize={{ base: "5xl", sm: "7xl" }}
              fontWeight="light"
              color="blackAlpha.800"
            >
              Pick your plan
            </Text>
          </Box>
          <Box color="#375d75">
            <Heading fontSize="4xl">
              Track time on projects with your team.
            </Heading>
          </Box>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          py="14"
          px="4"
          h="max-content"
          maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }}
          m="auto"
        >
          <VStack px="14" justify="space-between" align="start">
            <Box>
              <Heading py="2">Free</Heading>
              <Text fontWeight="medium" py="6" fontSize="xl" color="#212529">
                For individuals or teams just getting started with time
                tracking.
              </Text>
            </Box>
            <Box w="full">
              <HStack justify="start" textAlign="start">
                <Text fontWeight="semibold" fontSize="3xl" mt="9">
                  $
                </Text>
                <Heading fontSize="8xl" fontWeight="black">
                  0
                </Heading>
              </HStack>
            </Box>
            <Box pb={{ md: "24" }}>
              <UnorderedList spacing="3" fontSize="lg" fontWeight="light">
                <ListItem>Unlimited team members & projects</ListItem>
                <ListItem>Track time on projects & tasks</ListItem>
                <ListItem>Set billable rates</ListItem>
                <ListItem>Generate detailed reports</ListItem>
              </UnorderedList>
            </Box>
            <Box pt="10" w="full">
              <Button
                w="full"
                variant="outline"
                colorScheme="blackAlpha"
                _hover={{ color: "white", backgroundColor: "#3f8cff" }}
              >
                Select
              </Button>
            </Box>
          </VStack>
          <VStack px="14" py={{ base: "6", md: "0" }} align="start">
            <Box>
              <Heading py="2">Pro</Heading>
              <Text fontWeight="medium" py="6" fontSize="xl" color="#212529">
                For freelancers and teams actively managing their time.
              </Text>
            </Box>
            <Box pb={{ md: "8" }}>
              <HStack alignContent="start">
                <HStack>
                  <Text fontWeight="semibold" fontSize="3xl" mt="9">
                    $
                  </Text>
                  <Heading fontSize="8xl" fontWeight="black">
                    6
                  </Heading>
                </HStack>
                <Box pl="6">
                  <i>
                    <Text>- per active member, per month billed annually</Text>
                    <Text>- $ 7 billed monthlly</Text>
                  </i>
                </Box>
              </HStack>
            </Box>
            <Box>
              <UnorderedList spacing="3" fontSize="lg" fontWeight="light">
                <ListItem>Everything in free PLUS</ListItem>
                <ListItem>Priority support</ListItem>
                <ListItem>Generate client invoices</ListItem>
                <ListItem>Add & edit logs on behalf of your team</ListItem>
                <ListItem>Approval workflow with Audit log</ListItem>
                <ListItem>Extra features…</ListItem>
              </UnorderedList>
            </Box>
            <Box pt="10" w="full">
              <Button
                w="full"
                variant="solid"
                colorScheme="linkedin"
                _hover={{ color: "white", backgroundColor: "#3f8cff" }}
              >
                14day free trial
              </Button>
            </Box>
          </VStack>
        </Stack>

        <Box maxW={{ md: "3xl", lg: "4xl", xl: "7xl" }} m="auto" py="6">
          <TableData title={"Track"} data={track} />
          <TableData title={"Organize"} data={organize} />
          <TableData title={"Billing"} data={billing} />
          <TableData title={"Report"} data={report} />
          <TableData title={"Team"} data={team} />
          <TableData title={"Integrations & Apps"} data={integration} />
        </Box>

        <Box py="14">
          <Box>
            <Heading
              textAlign={{ base: "center" }}
              fontSize="4xl"
              color="#375d75"
              py="4"
            >
              Frequently Asked Questions{" "}
            </Heading>
          </Box>
          <Box
            py="8"
            px={{ base: "2", sm: "10" }}
            maxW={{ md: "2xl", lg: "4xl", xl: "6xl" }}
            m="auto"
          >
            <Accordion allowToggle>
              {FAQList.map((list) => (
                <AccordionItem key={list.question} border="none">
                  <Text>
                    <AccordionButton py="4">
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize="xl"
                        fontWeight="light"
                      >
                        {list.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel pb={4} fontSize="xl" fontWeight="light">
                    {list.ans}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>

        <SingleReviewCard />
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
