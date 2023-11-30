import { Box, Center, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
    color='black' 
    backgroundColor='antiquewhite'
    cursor='pointer'
    borderRadius={10}
    >
      <Image src={imageSrc} borderRadius={10}/>

      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md'>{title}</Heading>
        </HStack>
        <Text fontSize='lg'>{description}
        </Text>
        <HStack>
          <p>See more</p>
        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
        

      </VStack>
    </VStack>
    /*<>
      { <HStack>
        <Box bg='white'>
        <VStack>
        <img src={imageSrc}/>
        </VStack>
        <VStack p="5" color='black'>
        <Heading as='h4' size='md'>{title}</Heading>
        <Text textAlign='left'  >Hekko</Text>
        </VStack>
        </Box>
      </HStack> }
      <Box textAlign="left" bg="white">
        <Image src={imageSrc}/>
        <div style={{padding: 25}}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py='2'>{description}</Text>
        <Text color='black'fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </div>
      </Box>
    </>*/
  );
};

export default Card;
