import styles from './form-info-curriculum.module.css';
import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const ResumeForm = () => {
  const [resume, setResume] = useState({
    name: '',
    grade: '',
    email: '',
    address: '',
    phone: '',
    birthDate: '',
    nationality: '',
    linkedin: '',
    objective: '',
    skills: [],
    idioms: [],
    experiences: [],
    educations: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(resume);
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input name="name" value={resume.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="grade">
            <FormLabel>Grade</FormLabel>
            <Input name="grade" value={resume.grade} onChange={handleChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={resume.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input
              name="address"
              value={resume.address}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input name="phone" value={resume.phone} onChange={handleChange} />
          </FormControl>
          <FormControl id="birthDate">
            <FormLabel>Birth Date</FormLabel>
            <Input
              name="birthDate"
              type="date"
              value={resume.birthDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="nationality">
            <FormLabel>Nationality</FormLabel>
            <Input
              name="nationality"
              value={resume.nationality}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="linkedin">
            <FormLabel>LinkedIn</FormLabel>
            <Input
              name="linkedin"
              value={resume.linkedin}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="objective">
            <FormLabel>Objective</FormLabel>
            <Textarea
              name="objective"
              value={resume.objective}
              onChange={handleChange}
            />
          </FormControl>
          <SkillsForm
            skills={resume.skills}
            setSkills={(skills) => setResume((prev) => ({ ...prev, skills }))}
          />
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

const SkillsForm = ({ skills, setSkills }) => {
  const [skill, setSkill] = useState({ skill: '', level: '' });

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setSkill((prev) => ({ ...prev, [name]: value }));
  };

  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill({ skill: '', level: '' });
  };

  return (
    <VStack spacing={4}>
      <FormControl id="skill">
        <FormLabel>Skill</FormLabel>
        <Input name="skill" value={skill.skill} onChange={handleSkillChange} />
      </FormControl>
      <FormControl id="level">
        <FormLabel>Level</FormLabel>
        <Input name="level" value={skill.level} onChange={handleSkillChange} />
      </FormControl>
      <Button onClick={addSkill} colorScheme="teal">
        Add Skill
      </Button>
    </VStack>
  );
};

export interface FormInfoCurriculumProps {}

export function FormInfoCurriculum(props: FormInfoCurriculumProps) {
  return (
    <div className={styles['container']}>
      <ResumeForm />
    </div>
  );
}

export default FormInfoCurriculum;
