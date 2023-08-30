import { Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Doesnt Exist."
            : "An Unexpetected Error Occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
