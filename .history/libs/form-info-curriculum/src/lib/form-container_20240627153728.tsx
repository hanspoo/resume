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

const steps = [
  { title: 'Contact', description: 'Personal information' },
  { title: 'Carreer', description: 'Carreer information' },
  {
    title: 'Work and Education',
    description: 'Work and studied',
  },
  { title: 'Final rewiew', description: 'Check the data' },
];

interface StepsCurriculumProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const StepsCurriculum = ({
  activeStep,
  setActiveStep,
}: StepsCurriculumProps) => {
  return (
    <Stepper size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

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
    count: steps.length,
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
        <StepContent
          activeStep={activeStep}
          formData={formData}
          setFormData={setFormData}
        />
        <Box>
          {activeStep > 0 && (
            <Button ml={4} onClick={() => setActiveStep(activeStep - 1)}>
              Previous
            </Button>
          )}
          {'  '}
          {activeStep === steps.length - 1 ? (
            <Button onClick={() => alert('Form submitted!')}>Finish</Button>
          ) : (
            <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
          )}
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

const resultForm = () => {
  return (
    <ChakraProvider>
      <Flex p={8}>
        <Box width="50%" pr={4}>
          <Heading as="h2" size="lg" mb={6}>
            Form
          </Heading>
          <FormContainer />
        </Box>
        <Box width="50%" pl={4}>
          Preview dsadasdsddsa
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
export default resultForm;
