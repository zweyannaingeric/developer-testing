export type PROPERTYDATATYPE = {
  id: number;
  projectName: string;
  shortTitle: string;
  price: number;
  bedrooms: number;
  area: string[]; // Assuming area is an array of strings
  description: string;
  img: string[]; // Assuming img is an array of strings
  roomType: "RENT" | "SALE"; // Correct enum usage
};