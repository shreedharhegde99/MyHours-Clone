import {
  Text,
  Box,
  VStack,
  FormControl,
  Center,
  FormHelperText,
  Input,
  FormLabel,
  Image,
  Flex,
  Button,
  Heading,
  Select,
  useRadioGroup,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { imageList } from "../assets/ImagesList";
import { countryList } from "../assets/CountryList";
import { RadioCard } from "../component/CustomRadioButton";
import { Navigate } from "react-router-dom";

export function Signup() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });
  const [country, setCountry] = useState("IN");
  const [show, setShow] = useState(false);
  const [created, setCreated] = useState(false);
  const nameError = details.name === "";
  const emailError = details.email === "";
  const passwordError = details.password === "";
  const options = ["1-5", "6-20", "21-100", "101-300", "300"];
  const nameRef = useRef();
  const toast = useToast();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "companysize",
    defaultValue: "1-5",
    onChange: console.log,
  });

  const group = getRootProps();

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  if (created) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <Box>
        <Center w="full" h="calc(100vh - 72px)">
          {!show ? (
            <VStack
              m="auto"
              w={{ base: "90%", sm: "lg" }}
              boxShadow="2xl"
              py="10"
              borderRadius="lg"
              align="start"
              px="12"
              gap="1"
            >
              <Box>
                <Image src={imageList.logo} alt="MyHours" maxW="48" />
              </Box>
              <Box>
                <Heading fontWeight="light" fontSize="3xl" py="4">
                  Welcome to My Hours
                </Heading>
              </Box>
              <FormControl>
                <VStack gap="4" align="start" py="4">
                  <Box w="full">
                    <FormLabel fontSize="xs">FULL NAME</FormLabel>
                    <FormHelperText py="2">
                      So we know what to call you in the app
                    </FormHelperText>
                    <Input
                      color="gray.500"
                      name="name"
                      onChange={handleChange}
                      value={details.name}
                      ref={nameRef}
                    />
                  </Box>
                  <Box w="full">
                    <FormLabel fontSize="xs">EMAIL</FormLabel>
                    <FormHelperText py="2">
                      You will use this email to login
                    </FormHelperText>
                    <Input
                      color="gray.500"
                      name="email"
                      onChange={handleChange}
                      value={details.email}
                    />
                  </Box>
                  <Box w="full">
                    <FormLabel fontSize="xs">PASSWORD</FormLabel>

                    <Input
                      color="gray.500"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={details.password}
                    />
                  </Box>
                  <Box>
                    <Text>By signing up you agree to the Terms of Use</Text>
                  </Box>
                  <Flex justify="center" w="full" align="center">
                    <Box>
                      <Button
                        size="md"
                        fontWeight="medium"
                        variant="solid"
                        colorScheme="linkedin"
                        disabled={nameError || emailError || passwordError}
                        onClick={() => setShow(true)}
                      >
                        Next
                      </Button>
                    </Box>
                  </Flex>
                </VStack>
              </FormControl>
            </VStack>
          ) : (
            <VStack
              m="auto"
              w={{ base: "90%", sm: "lg" }}
              boxShadow="2xl"
              py="10"
              borderRadius="lg"
              align="start"
              px={{ base: "4", md: "12" }}
              gap="1"
            >
              <Box>
                <Image src={imageList.logo} alt="MyHours" maxW="48" />
              </Box>
              <Box>
                <Heading fontWeight="light" fontSize="3xl" py="4">
                  Details about your company
                </Heading>
              </Box>
              <FormControl>
                <VStack gap="4" align="start" py="4">
                  <Box w="full">
                    <FormLabel fontWeight="semibold" fontSize="xs">
                      COMPANY NAME
                    </FormLabel>

                    <Input
                      color="gray.500"
                      name="companyName"
                      onChange={handleChange}
                      value={details.companyName}
                    />
                  </Box>
                  <Box w="full">
                    <FormLabel fontWeight="semibold" fontSize="xs">
                      COUNTRY
                    </FormLabel>
                    <FormHelperText py="2">
                      We will adapt your experience to the specifics of your
                      region
                    </FormHelperText>
                    <Select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      {countryList.map(({ value, country }) => (
                        <option key={country} value={value}>
                          {country}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Box w="full">
                    <FormLabel fontWeight="semibold" fontSize="xs">
                      COMPANY SIZE
                    </FormLabel>
                    <FormHelperText py="2">
                      So we can adapt to your needs better
                    </FormHelperText>
                    <HStack {...group} width="full">
                      {options.map((value) => {
                        const radio = getRadioProps({ value });
                        return (
                          <RadioCard key={value} {...radio}>
                            {value}
                          </RadioCard>
                        );
                      })}
                    </HStack>
                  </Box>
                  <Box w="full">
                    <FormLabel fontWeight="semibold" fontSize="xs">
                      MOBILE NUMBER (OPTIONAL)
                    </FormLabel>

                    <Input color="gray.500" />
                  </Box>

                  <VStack justify="center" w="full" align="center">
                    <Box>
                      <Button
                        size="md"
                        fontWeight="medium"
                        variant="solid"
                        colorScheme="linkedin"
                        disabled={details.companyName === ""}
                        onClick={() => {
                          toast({
                            title: "Account created.",
                            description: "We've created your account for you.",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          });
                          setTimeout(() => setCreated(true), 2000);
                        }}
                      >
                        Create New Company
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => setShow(false)}
                        variant="unstyled"
                        color="blue.400"
                        fontSize="sm"
                      >
                        Back
                      </Button>
                    </Box>
                  </VStack>
                </VStack>
              </FormControl>
            </VStack>
          )}
        </Center>
      </Box>
    </Fragment>
  );
}
