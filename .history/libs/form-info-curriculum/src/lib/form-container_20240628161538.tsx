import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import {
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  UseStepsProps,
  VStack,
  useSteps,
} from '@chakra-ui/react';
import { WarningIcon, DeleteIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { ChangeEvent, useState } from 'react';
import { FormCareerSummary } from './formCareerSummary/form-career-summary';
import FormWorkEducation from './formWorkAndEducation/form-work-education';
import FormContactInfo from './formContactInfo/form-contact-info';

import StepsCurriculum from '../lib/stepsForms/stepsCurriculum';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface StepContentProps {
  activeStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StepContent = ({
  activeStep,
  formData,
  setFormData,
}: StepContentProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  switch (activeStep) {
    case 0:
      return <FormContactInfo />;
    case 1:
      return <FormCareerSummary pitch={''} highlights={[]} competencies={[]} />;
    case 2:
      return <FormWorkEducation />;
    default:
      return <> Formulario finalizado </>;
  }
};

export function FormContainer() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <ChakraProvider>
      <VStack spacing={4}>
        <StepsCurriculum
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Flex p={8} width="100%" alignItems="start">
          <Box width="50%" pr={4}>
            <StepContent
              activeStep={activeStep}
              formData={formData}
              setFormData={setFormData}
            />
            {activeStep > 0 && (
              <Button ml={4} onClick={() => setActiveStep(activeStep - 1)}>
                Previous
              </Button>
            )}
            {'  '}
            {activeStep === 4 - 1 ? (
              <Button onClick={() => alert('Form submitted!')}>Finish</Button>
            ) : (
              <Button onClick={() => setActiveStep(activeStep + 1)}>
                Next
              </Button>
            )}
          </Box>
          <Box width="50%" pl={4}>
            prew
          </Box>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default FormContainer;
