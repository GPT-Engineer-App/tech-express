import { Box, Container, VStack, Text, Image, Flex, Heading, SimpleGrid, Link, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <Flex gap={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Products</Link>
            <Link href="#" color="white">Categories</Link>
            <Link href="#" color="white">Contact</Link>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.xl" display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center">
          <Box flex="1" mb={{ base: 4, md: 0 }}>
            <Heading as="h2" size="xl" mb={4}>Welcome to ElectroShop</Heading>
            <Text fontSize="lg">Your one-stop shop for the latest and greatest in electronics.</Text>
          </Box>
          <Box flex="1">
            <Image src="https://via.placeholder.com/600x400" alt="Featured Products" borderRadius="md" />
          </Box>
        </Container>
      </Box>

      {/* Product Categories */}
      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Product Categories</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="gray.200" p={6} borderRadius="md" textAlign="center">
              <Image src="https://via.placeholder.com/150" alt="Category 1" mb={4} />
              <Text fontSize="lg">Laptops</Text>
            </Box>
            <Box bg="gray.200" p={6} borderRadius="md" textAlign="center">
              <Image src="https://via.placeholder.com/150" alt="Category 2" mb={4} />
              <Text fontSize="lg">Smartphones</Text>
            </Box>
            <Box bg="gray.200" p={6} borderRadius="md" textAlign="center">
              <Image src="https://via.placeholder.com/150" alt="Category 3" mb={4} />
              <Text fontSize="lg">Accessories</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: +123 456 7890</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Follow Us</Heading>
              <Flex gap={4}>
                <Link href="#"><FaFacebook size="24px" /></Link>
                <Link href="#"><FaTwitter size="24px" /></Link>
                <Link href="#"><FaInstagram size="24px" /></Link>
              </Flex>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>About Us</Heading>
              <Text>ElectroShop is your go-to destination for the latest electronics. We offer a wide range of products to suit all your tech needs.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;