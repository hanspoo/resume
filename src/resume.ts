const skills = [
  { skill: "React", level: "Expert" },
  { skill: "Nodejs", level: "Expert" },
  { skill: "Typescript & Javascript", level: "Expert" },
  { skill: "Java 8", level: "Expert" },
  { skill: "PostgreSQL", level: "Expert" },
  { skill: "Perl", level: "Expert" },
  { skill: "Kafka", level: "Intermediate" },
  { skill: "Linux", level: "Expert" },
  { skill: "docker", level: "Intermediate" },
  { skill: "Test driven development", level: "Intermediate" },
  { skill: "SMTP", level: "Intermediate" },
  { skill: "DNS", level: "Intermediate" },
];

const experiences = [
  {
    location: "Remote",
    since: "Mar 2021",
    to: "Present",
    position: "FULL STACK DEVELOPER",
    company: "FALABELLA",
    description: `Full stack dev, internal solutions, software, middleware,
                               some apps, all with nodejs, graphql, rest, typescript, and
                               nx. Kafka connect management and administration. Develop
                               grafana and prometheus based solutions. Some giltlab
                               pipelines.`,
  },
  {
    position: "CTO and All",
    company: "WELINUX SPA",
    since: "Jun 2006",
    to: "Present",

    description: `At Welinux we have gone through several tech stacks,
    its early years with Perl, Linux and PostgreSQL, 
    then Java an jQuery, 
    to the current React and Node with typescript, to which we
                               added integration with Kafka to achieve real-time systems.

                               In  IDEs, for java Eclipse of course, sometimes INtellij,
                               and for the rest VSCode and vim, for node and react actually
                               working with nx and vite, always Ubuntu LTS. 
                               
                               As sysadmin, I've always done everything:
                               from purchasing the machines, installing operating system,
                               configure firewalls, servers with DNS and SMTP, Backups
                               and Monitoring; all the necessary to keep the client'
                               platform running. We've moved from running on metal to
                               docker and kubernetes. Making our own images of course. Finally some
                               monitoring with prometheus and grafana`,
  },
  {
    position: "CTO",
    company: "SENCE",
    since: "Jan 1998",
    to: "Jan 2000",
    description: `Starting 1997 i was hired by a company that was developing
    the website of this governmment agency, they don't know how to give programming 
    qualities to the web pages: they were stuck in the search engine; so i was hired
     to solve this, at those days i found Perl 5 CGI and we begun to build with it. I was 
     hired directly by SENCE as CTO at January 1998, we built many many things, 
     for the intranet we used Visual Basic (i was an Imperial Trooper at that time) and for the Internet Perl, 
     the database server was Oracle running under Solaris.`,
  },
];

const educations = [
  {
    location: "Santiago, Chile",
    since: "1991",
    to: "1994",
    career: "ENGINEER IN INFORMATION TECHNOLOGY",
    institution: "CAMPVS Professional Institute",
  },
  {
    location: "Santiago, Chile",
    since: "1988",
    to: "1990",
    career: "PROGRAMMER",
    institution: "CAMPVS Professional Institute",
  },
];

const resume = {
  name: "Hans Poo",
  grade: "Engineering in computing and informatics",
  email: "hans@welinux.cl",
  address: "Camino Internacional 4200, Pucón",
  phone: "+56993199305",
  birthDate: " Oct 20, 1967",
  nationality: "Chileno",
  linkedin: "https://www.linkedin.com/in/hans-poo-4aa0b31b/",
  objective: `All this years i’ve done my best to be a complete IT professional, gain 
  expertise in all the aspects required in the field: developer, sysadmin, database admin, team leader, security expert, ux designer and more; 
  for this i’ve follow two roads: practice and books. 
  Linux advocate since 2000, and member of the free software movement in Chile, i have gave technical talks in free software conferences for many years. 
  This last three years i’ve met kafka and it has some way opened a new paradigm to build software. 
  This github project shows many things i'm doing now:
  
  https://github.com / hanspoo/b2b-starter`,
  skills,
  idioms: [
    {
      language: "English",
      level: "Intermediate",
      studies: "Instituto Chileno Norteamericano, Listening and Speaking",
    },
  ],
  experiences,
  educations,
};

export { resume };
