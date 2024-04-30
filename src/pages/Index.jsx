import { Box, Flex, Heading, Text, Image, VStack, SimpleGrid } from '@chakra-ui/react';
import { FaAward, FaCameraRetro } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={4} color="brand.700">Thomas Jefferson</Heading>
        <Text fontSize="lg" mb={10}>A brief overview of Thomas Jefferson's life and achievements.</Text>
      </Flex>
      <VStack spacing={8}>
        <Box bg="gray.100" p={5} borderRadius="lg" shadow="md">
          <Heading size="md" mb={2}><FaAward /> Achievements</Heading>
          <Text>
            Thomas Jefferson was the third President of the United States, the principal author of the Declaration of Independence, and one of the most influential Founding Fathers for his promotion of the ideals of republicanism in the United States.
          </Text>
        </Box>
        <Box bg="gray.100" p={5} borderRadius="lg" shadow="md">
          <Heading size="md" mb={2}>Biography</Heading>
          <Text>
            Born on April 13, 1743, in Shadwell, Virginia, Thomas Jefferson was a leading figure in America's early development. During the American Revolutionary War (1775-83), Jefferson served in the Virginia legislature and the Continental Congress and was governor of Virginia.
          </Text>
        </Box>
        <Box bg="gray.100" p={5} borderRadius="lg" shadow="md">
          <Heading size="md" mb={2}><FaCameraRetro /> Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="https://via.placeholder.com/150" alt="Placeholder Image" borderRadius="md" />
            <Image src="https://via.placeholder.com/150" alt="Placeholder Image" borderRadius="md" />
            <Image src="https://via.placeholder.com/150" alt="Placeholder Image" borderRadius="md" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;