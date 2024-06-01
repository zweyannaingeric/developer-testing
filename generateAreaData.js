import { faker } from "@faker-js/faker";
const districts = [
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

for (let i = 0; i < 10000; i++) {
  districts.push({
    id: i,
    area: faker.helpers.arrayElement(districts),
  });
}

import fs from "fs";
fs.writeFileSync("districts.json", JSON.stringify(districts, null, 2));

console.log("Generated 100 fake properties and saved to properties.json");
