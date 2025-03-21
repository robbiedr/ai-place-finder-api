# AI Place Finder API

## 📌 Overview

AI Place Finder API is a lightweight, AI-powered recommendation service built using **Bun** and **Elysia.js**. It provides top places for coffee shops, restaurants, desserts, and activities based on user input, leveraging OpenAI for intelligent recommendations.

## 🚀 Tech Stack

- **Runtime:** Bun
- **Framework:** Elysia.js
- **AI Integration:** OpenAI API
- **Documentation:** Swagger

## 🛠 Setup and Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/yourusername/ai-place-finder-api.git
cd ai-place-finder-api
```

### 2️⃣ Install dependencies

```sh
bun install
```

### 3️⃣ Set up environment variables

Create a `.env` file and add:

```
OPENAI_API_KEY=your-openai-api-key
```

### 4️⃣ Start the server

```sh
bun run start
```

## 📖 API Documentation

Once running, access the Swagger UI at:

```
http://localhost:3000/swagger
```

## 📌 API Endpoint

### **POST /recommendations**

**Request Body:**

```json
{
  "location": "Boracay",
  "category": "coffee"
}
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "name": "Cafe Bora",
      "recommendedOrders": ["Iced Latte", "Banana Muffin"],
      "reasonsToVisit": ["Cozy ambiance", "Good WiFi"],
      "address": "Station 2, Boracay",
      "contact": "+63 912 345 6789"
    }
  ]
}
```

## 🔥 Future Enhancements

- Database integration for personalized recommendations
- Caching responses using Redis
- Web interface for user interactions

---

💡 **Contributions are welcome!** Feel free to fork, improve, and submit PRs. 🚀
