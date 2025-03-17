import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandReactNative, TbBrandTailwind } from "react-icons/tb";
import { SiPython, SiUml, SiFigma, SiSqlite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaTable } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

export const SKILLS_TAB = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Frontend", value: "frontend" },
  { id: 3, label: "Backend", value: "backend" },
  { id: 4, label: "Tools", value: "tools" },
  { id: 5, label: "Skills", value: "skills" },
];
export const SKILLS = [
  { id: 1, icon: FaHtml5, skill: "HTML", progress: 70, type: "frontend" },
  { id: 2, icon: FaCss3Alt, skill: "CSS", progress: 70, type: "frontend" },
  {
    id: 3,
    icon: FaReact,
    skill: "React JS",
    progress: 60,
    type: "frontend",
  },
  {
    id: 4,
    icon: TbBrandReactNative,
    skill: "React Native",
    progress: 75,
    type: "frontend",
  },
  {
    id: 5,
    icon: TbBrandTailwind,
    skill: "Tailwind CSS",
    progress: 80,
    type: "frontend",
  },
  { id: 6, icon: SiPython, skill: "Python", progress: 50, type: "backend" },
  { id: 7, icon: TbBrandCSharp, skill: "C#", progress: 70, type: "backend" },
  { id: 8, icon: FaTable, skill: "MERISE", progress: 95, type: "skills" },
  { id: 9, icon: SiUml, skill: "UML", progress: 70, type: "skills" },
  { id: 10, icon: SiFigma, skill: "Figma", progress: 65, type: "tools" },
  {
    id: 11,
    icon: DiVisualstudio,
    skill: "Visual Studio",
    progress: 85,
    type: "tools",
  },
  {
    id: 12,
    icon: BiLogoVisualStudio,
    skill: "VS Code",
    progress: 85,
    type: "tools",
  },
  { id: 13, icon: SiSqlite, skill: "SQL Server", progress: 65, type: "tools" },
];

export const PROJECTS = [
  {
    id: 1,
    img: project1,
    description: " Lorem ",
    langage: ["React", "Vite", "Tailwind CSS", "SQL"],
  },
  {
    id: 2,
    img: project2,
    description: " Lorem ",
    langage: ["C#", "WindowsForms", "SQL"],
  },
  {
    id: 3,
    img: project3,
    description: " Lorem ",
    langage: ["React", "Vite", "Tailwind CSS", "SQL"],
  },
];
