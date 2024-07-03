import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

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
