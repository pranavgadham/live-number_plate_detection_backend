# Live Number Plate Detection Backend

## Overview
The backend for the Live Number Plate Detection application provides a data management layer for storing and retrieving number plate detection results. Built with Node.js, Express, and MongoDB, it offers RESTful APIs to handle detection data securely and efficiently, supporting applications in traffic monitoring and security surveillance. This server does not perform the detection itself but manages the storage and retrieval of results generated elsewhere.

## Features
- **RESTful APIs**: For storing detection results, retrieving data, and checking server health.
- **MongoDB Integration**: Persistent storage of detection metadata, including plate numbers, timestamps, and confidence scores.
- **Error Handling**: Consistent and meaningful error responses.
- **Scalability**: Asynchronous processing for high-throughput requests.

## Technology Stack
- **Runtime**: Node.js (v16.x or higher)
- **Framework**: Express.js (v4.x)
- **Database**: MongoDB (v5.x or higher)
- **Key Dependencies**:
  - `express`
  - `mongoose`
  - `dotenv`
  - `cors`
  - `multer`
- **Development Tools**:
  - `nodemon`

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pranavgadham/live-number_plate_detection_backend.git
   cd live-number_plate_detection_backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/number_plate_db
   ```

4. **Start MongoDB**:
   Ensure MongoDB is running locally or accessible via the URI.

5. **Run the Backend**:
   - Development:
     ```bash
     npm run dev
     ```
   - Production:
     ```bash
     npm start
     ```

## Configuration
- **Environment Variables**:
  - `PORT`: Server port
  - `MONGODB_URI`: MongoDB connection string
- **Database Schema**:
  Detection results are stored using Mongoose schemas, defined in `models/`.

## API Endpoints

| Method | Endpoint               | Description                         | Parameters                     |
|--------|------------------------|-------------------------------------|--------------------------------|
| GET    | `/api/health`          | Server health check                 | None                           |
| POST   | `/api/detections`      | Store new detection result          | JSON body with detection data  |
| GET    | `/api/detections`      | Retrieve list of detections         | `limit`, `page` (query)        |
| GET    | `/api/detections/:id`  | Retrieve specific detection by ID   | `id` (path)                    |
