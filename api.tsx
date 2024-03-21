"use server";
import axios from "axios";

export default async function handler(req: any, res: any) {
  // const apiKey = "f731cd34fda14e92c63f2bfcf692e392"; // Replace with your actual API key
  // const city = "paris"; // City to fetch weather for (can be made dynamic based on request parameters)
  // const units = "metric"; // Measurement units

  // try {
  //   const response = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`,
  //   );

  //   res.status(200).json(response.data); // Return the weather data in JSON format
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Error fetching weather data" }); // Handle errors gracefully
  // }

  res.status(200).json({ message: "Hello, Next.js!" });
}
