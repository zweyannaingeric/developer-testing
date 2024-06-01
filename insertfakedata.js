import { faker } from "@faker-js/faker"; // Import Faker.js
import { connect } from "./lib/db.js";

async function insertFakeData() {
  try {
    const connection = await connect(); // Connect to MySQL
    // Generate fake data and insert into MySQL
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

    const districtIds = [];
    for (const district of districts) {
      const [result] = await connection.query(
        `INSERT INTO area (districtName) VALUES (?)`,
        [district]
      );
      districtIds.push(result.insertId);
    }

    for (let i = 0; i < 30; i++) {
      const images = [];
      for (let j = 0; j < 5; j++) {
        images.push(faker.image.image());
      }
      const property = {
        projectName: faker.company.catchPhrase(),
        shortTitle: faker.lorem.words(3),
        price: Math.floor(Math.random() * 1000000) + 100000,
        bedrooms: Math.floor(Math.random() * 5) + 1,
        description: faker.lorem.paragraph(3),
        // img: faker.image.image(),
        img: JSON.stringify(images),
        roomType: faker.helpers.arrayElement(["sale", "rent"]),
        areaId: faker.helpers.arrayElement(districtIds),
      };

      // Example query to insert fake data into MySQL
      await connection.query(`INSERT INTO property SET ?`, property);
    }
    await connection.end(); // Close MySQL connection
    console.log("Fake data inserted successfully.");
  } catch (error) {
    console.error("Error inserting fake data:", error);
  }
}

// Call the function to insert fake data
insertFakeData();
