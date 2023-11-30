import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Alberto!";
const bio1 = "An aspiring frontend developer";
const bio2 = "learning React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="3xl"
        name="Alberto Rosell"
        src="https://i.pravatar.cc/150?img=7"
      />
      <Heading>{greeting}</Heading>
      <p>{bio1}</p>
      <p>{bio2}</p>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
