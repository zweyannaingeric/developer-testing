// generateAreaData.js
import { faker } from "@faker-js/faker";
import fs from "fs";

const districtNames = [
  "Watthana",
  "Phasi Charoen",
  "Bang Rak",
  "Sathon",
  "Bang Sue",
  "Dusit",
  "Huai Khwang",
  "Khlong Toei",
  "Lat Phrao",
  "Bang Kapi",
  "Wang Thonglang",
  "Sathon Nuea",
  "Sathon Tai",
  "Yannawa",
  "Samphanthawong",
  "Pathum Wan",
  "Pra Nakhon",
  "Bang Kho Laem",
  "Bang Khunthian",
  "Om Noi",
  "Don Mueang",
  "Chatuchak",
  "Bang Khen",
  "Lak Si",
  "Sai Mai",
  "Phaya Thai",
  "Ratchathewi",
  "Watthana",
  "Bang Po",
  "Thung Khru",
];

const districts = districtNames.map((name, index) => ({
  district: name
}));

fs.writeFileSync("area.ts", JSON.stringify(districts, null, 2));
