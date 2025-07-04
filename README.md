# WHISP Chat App

Welcome to the Chat App! This repository contains the code for both the client and server components of a simple chat application.

## Flow of website

![flow](https://i.imgur.com/trbch64.png)

## Getting Started

Follow the instructions below to set up and run the Chat App locally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tanpreetjolly/WHISP-chat-app.git
    ```

2. Navigate to the project root:

    ```bash
    cd WHISP-chat-app
    ```

3. Install dependencies for the client:

    ```bash
    cd frontend
    npm install
    ```

4. Install dependencies for the server:

    ```bash
    cd ../server
    npm install
    ```

### Running the App

1. Start the frontend (frontend):

    ```bash
    cd frontend
    npm run dev
    ```

   This will launch the client application, and you can access it in your web browser at [http://localhost:5173](http://localhost:5173).

2. Start the server (backend):

    ```bash
    cd server
    npm run start
    ```

   The server will be running at [https://whisp-yq5j.onrender.com](https://whisp-yq5j.onrender.com).


## Sample Environment File 

Create a `.env` file in the `server` folder with the following content:

```env
DB=""
JWTPRIVATEKEY = 
SALT = 
PORT = 4000
BASE_URL = "http://localhost:5173"
EMAIL_PORT=587
SECURE= true
NODE_ENV=development
```


