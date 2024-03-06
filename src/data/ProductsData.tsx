export const fetchProducts=async()=>{
    try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 0));
        const mockProducts = [
          {
            id: 1,
            name: "Tea Pot",
            description:
              "Beautiful Mongolian Tea Pot made from ancient magical copper and zinc",
            price: "50",
            image:
              "https://cdn.orientalartauctions.com/1ebc4537-a8c2-6d94-9f0c-0242ac1a0007/85629__w_2000.jpg",
          },
          {
            id: 2,
            name: "Fishing Boots",
            description:
              "Magical Fishing Boots guaranteed head tuner and success magnet",
            size: "L",
            price: "250",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2020/03/32-ugalztai-320-1-scaled.jpg",
          },
          {
            id: 3,
            name: "Deel",
            description: "Brilliant silk Deel ",
            size: "S",
            price: "9999",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2021/01/138695842_482257773118595_8150043691993830142_n-510x765.jpg",
          },
          {
            id: 4,
            name: "Deel",
            description: "Sable Fur & Cashmere Deel ",
            size: "XL",
            price: "9999",
            image:
              "https://www.mongolianz.com/wp-content/uploads/2023/04/Mens-jacket-510x631.jpg",
          },
        ];
        return mockProducts;
      } catch (error) {
        throw new Error("Error fetching products. Please try again later.");
      }
    };