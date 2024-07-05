import { ContainerSeccions, Layout, StoreProvider, TheResume } from '@free-resume/resumecomps';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  VStack,
  useSteps,
} from '@chakra-ui/react';
import { FormContainer } from 'form-info-curriculum';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <StoreProvider>
      <Layout>
        <TheResume />

        <ChakraProvider>
      <VStack spacing={4}>
        <FormContainer/>
          <Box width="50%" pl={4}>
            <ContainerSeccions />
          </Box>
        </Flex>
      </VStack>
    </ChakraProvider>

      </Layout>
    </StoreProvider>
  );
}
