export interface Plant {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    price: 24,
    category: "Low Light",
    image: "https://picsum.photos/300/300?random=101",
    description: "Perfect for beginners, thrives in low light and requires minimal watering.",
    stock: 15
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 18,
    category: "Pet-Friendly",
    image: "https://picsum.photos/300/300?random=102",
    description: "Safe for pets and produces baby plants that can be propagated easily.",
    stock: 22
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 32,
    category: "Air Purifier",
    image: "https://picsum.photos/300/300?random=103",
    description: "Elegant white flowers and excellent air purifying qualities.",
    stock: 8
  },
  {
    id: 4,
    name: "Pothos",
    price: 16,
    category: "Low Light",
    image: "https://picsum.photos/300/300?random=104",
    description: "Trailing vine perfect for hanging baskets or shelves.",
    stock: 30
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 28,
    category: "Pet-Friendly",
    image: "https://picsum.photos/300/300?random=105",
    description: "Lush, feathery fronds that add tropical appeal to any space.",
    stock: 12
  },
  {
    id: 6,
    name: "Rubber Tree",
    price: 45,
    category: "Air Purifier",
    image: "https://picsum.photos/300/300?random=106",
    description: "Bold, glossy leaves that make a stunning statement piece.",
    stock: 6
  },
  {
    id: 7,
    name: "ZZ Plant",
    price: 35,
    category: "Low Light",
    image: "https://picsum.photos/300/300?random=107",
    description: "Extremely drought tolerant with shiny, architectural foliage.",
    stock: 18
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 68,
    category: "Statement Plant",
    image: "https://picsum.photos/300/300?random=108",
    description: "Large, violin-shaped leaves create dramatic indoor presence.",
    stock: 4
  },
  {
    id: 9,
    name: "Aloe Vera",
    price: 22,
    category: "Succulent",
    image: "https://picsum.photos/300/300?random=109",
    description: "Medicinal succulent with healing gel and minimal care needs.",
    stock: 25
  },
  {
    id: 10,
    name: "Bamboo Palm",
    price: 42,
    category: "Pet-Friendly",
    image: "https://picsum.photos/300/300?random=110",
    description: "Graceful palm that's safe for pets and adds tropical vibes.",
    stock: 9
  },
  {
    id: 11,
    name: "Dracaena",
    price: 38,
    category: "Air Purifier",
    image: "https://picsum.photos/300/300?random=111",
    description: "Colorful striped leaves and excellent air cleaning properties.",
    stock: 14
  },
  {
    id: 12,
    name: "Monstera Deliciosa",
    price: 55,
    category: "Statement Plant",
    image: "https://picsum.photos/300/300?random=112",
    description: "Iconic split leaves that develop beautiful fenestrations as they mature.",
    stock: 7
  }
];

export const getCategories = (plants: Plant[]): string[] => {
  const categories = plants.map(plant => plant.category);
  return [...new Set(categories)].sort();
};
