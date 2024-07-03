import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import {
  Button,
  Flex,
  Heading,
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
  useSteps,
} from '@chakra-ui/react';
import { WarningIcon, DeleteIcon, CheckCircleIcon } from '@chakra-ui/icons';

const steps = [
  { title: 'Contact', description: 'Personal information' },
  { title: 'Carreer', description: 'Carreer information' },
  {
    title: 'Work and Education',
    description: 'Information about where you work and studied',
  },
  { title: 'Final rewiew', description: 'Check the data' },
];

function StepsCurriculum({ activeStep, setActiveStep }: UseStepsProps) {
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
}

export function FormContainer() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return <StepsCurriculum stepProps={{ activeStep, setActiveStep }} />;
}
export default FormContainer;
