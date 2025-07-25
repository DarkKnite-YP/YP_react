import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },

  {
    id: "portfolio",
    title: "Achievement",
  },
  {
    id: "experience",
    title: "Qualification",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Minor in A.I",
    company_name: "I.I.T Ropar",
    date: "2024 - 2025",
    details: [
      "Minor in A.I from <span style='color: white;'>IIT Ropar</span>. <br>Cerificate: Minor in A.I <br>University: Indian Institute of Technology Ropar. Specialization: Artificial Intelligence. Duration: 1 years<br>Type: Minor degree(15 credit)",
      ],
  },
  {
    title: "B.E Computer Science & Engg.",
    company_name: "GTU",
    date: "2021 - 2025",
    details: [
      "Passout with <span style='color: white;'>CGPA: 8.23</span>.<br>Degree: Bachelor of Engineering (B.E) Specialization: Artificial Intelligence(A.I) University: Gujarat Technological University (GTU)<br>Duration: 4 years<br>Type: Undergraduate degree",
    ],
  },
  {
    title: "HSC",
    company_name: "S.V.V",
    date: "2020 - 2021",
    details: [
      "Class 12 passout with <span style='color: white;'>82%</span>.<br>Cerificate: Higher Schooling Certi (HSC) Specialization: Informatics Practice(I.P) Board: C.B.S.E<br>Duration: 1 years<br>Stream: PCM",
      ],
  },
  {
    title: "SSC",
    company_name: "S.V.V",
    date: "2018 - 2019",
    details: [
      "Class 10 passout with <span style='color: white;'>84.2%</span>. Cerificate: Secondary Schooling Certi (SSC)<br>Board: C.B.S.E<br>Duration: 1 years",
      ],
  },
];

const portfolio = [
  {
    name: "Real-time object recognition",
    description:
      "Dynamic AI Developer with hands-on experience in building digital object recognition tools using OpenCV and Python. Along with Hand written digit recognition(HDR).",
    image: oscs,
  },
  {
    name: "GATE 2025 Qualified",
    description:
      "GATE (Graduate Aptitude Test in Engineering) 2025 qualified in DA (Data science & Artificial inteligence) with AIR 7217.",
    image: devnotes,
  },
  {
    name: "Intern as AI/ML developer at ErrorX",
    description:
      "Proven ability to deliver solutions through a 6-month internship at Errorx IT Solution. Strong analytical and problem-solving skills.",
    image: algorithms,
  },
];

export { experiences, portfolio };

