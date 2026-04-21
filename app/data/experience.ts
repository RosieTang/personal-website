import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "WrapperAI",
    period: "2024.2-2024.8",
    description:
      "A local PII redaction tool that sits between users and third-party LLMs — all 111-category BERT inference runs on-device. I owned the front-end business logic: tokenizer-to-text alignment, chunked parallel inference for long inputs, and cached filter toggling.",
    tags: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
  },
  {
    role: "XR Developer",
    company: "Google Developer Group WashU",
    period: "2024.9-2025.2",
    description:
      "Meta Quest AR app that renders dental X-ray reports as head-tracked panels, built by a six-person student team. I owned the Unity-side UI display layer on top of the team's on-device OCR pipeline.",
    tags: ["Unity", "C#", "Meta Quest", "OpenCV", "Tesseract OCR"],
  },
  // {
  //   role: "Frontend Developer",
  //   company: "IJK",
  //   period: "TBD",
  //   description:
  //     "TBD",
  //   tags: ["JavaScript", "React", "HTML", "CSS", "PHP"],
  // },
];