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

for (let i = 0; i < 1000; i++) {
  properties.push({
    name: faker.company.catchPhrase(),
    shortName: faker.lorem.words(3),
    price: Math.floor(Math.random() * 1000000) + 100000,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    description: faker.lorem.paragraph(3),
    areaId : Math.floor(Math.random() * 30) + 1 ,
    img: [
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
    ],
    roomType: faker.helpers.arrayElement(["SALE", "RENT"]),
  });
}

import fs from "fs";
fs.writeFileSync("property.ts", JSON.stringify(properties, null, 2));

console.log("Generated 100 fake properties and saved to properties.json");
