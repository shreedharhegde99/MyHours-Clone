import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { imageList } from "../assets/ImagesList";

export function Signin() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [entered, setEntered] = useState(false);
  const emailError = details.email === "";
  const passwordError = details.password === "";
  const emailRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  console.log(details);
  return (
    <Fragment>
      <Box>
        <Center w="full" h="calc(100vh - 72px)">
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
            <Box m="auto">
              <Image src={imageList.logo} alt="MyHours" maxW="48" />
            </Box>
            <Box>
              <Heading fontWeight="light" fontSize="3xl">
                Sign in
              </Heading>
            </Box>
            <FormControl>
              <VStack
                borderBottom="1px solid"
                borderColor="gray.400"
                gap="4"
                align="start"
                py="4"
              >
                <Box w="full">
                  <FormLabel fontSize="xs" color="gray.500">
                    EMAIL
                  </FormLabel>
                  <Input
                    placeholder="Email"
                    color="gray.500"
                    name="email"
                    isInvalid={entered && emailError}
                    onChange={handleChange}
                    value={details.email}
                    onFocus={() => setEntered(true)}
                    ref={emailRef}
                  />
                </Box>
                <Box w="full">
                  <FormLabel fontSize="xs" color="gray.500">
                    PASSWORD
                  </FormLabel>
                  <Input
                    placeholder="Password"
                    type="password"
                    color="gray.500"
                    name="password"
                    isInvalid={entered && passwordError}
                    onChange={handleChange}
                    value={details.password}
                    onFocus={() => setEntered(true)}
                  />
                </Box>
                <Flex justify="space-between" w="full" align="center">
                  <Box>
                    <Button
                      size="md"
                      fontWeight="medium"
                      variant="solid"
                      colorScheme="linkedin"
                      disabled={emailError || passwordError}
                    >
                      Sign in
                    </Button>
                  </Box>
                  <Box color="#00a0dc">
                    <Text>Reset Password</Text>
                  </Box>
                </Flex>
              </VStack>
            </FormControl>
            <Box>
              <Text color="#00a0dc">
                <Link to="/signup"> New to My Hours? Sign up</Link>
              </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    </Fragment>
  );
}
