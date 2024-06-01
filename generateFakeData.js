import { faker } from "@faker-js/faker";

const properties = [];
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
  properties.push({
    id: i,
    projectName: faker.company.catchPhrase(),
    shortTitle: faker.lorem.words(3),
    price: Math.floor(Math.random() * 1000000) + 100000,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    area: faker.helpers.arrayElement(districts),
    description: faker.lorem.paragraph(3),
    img: [
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
    ],
    roomType: faker.helpers.arrayElement(["sale", "rent"]),
  });
}

import fs from "fs";
fs.writeFileSync("properties.json", JSON.stringify(properties, null, 2));

console.log("Generated 100 fake properties and saved to properties.json");
