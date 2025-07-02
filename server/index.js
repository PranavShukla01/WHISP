const express = require("express");
const cors = require('cors')
const app = express();
const connection = require("./db/db.js");
const userRoute = require("./routes/userRoute.js");
const avatarRoute = require("./routes/avatarRoute.js");
const cookieParser = require('cookie-parser')
const createWebSocketServer = require("./wsServer.js");
const path = require("path");
require("dotenv").config();

//database connection
connection();

app.use(cors({
	origin: ["http://localhost:5173", "https://whisp-silk.vercel.app"],
	credentials: true
}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/user", userRoute);
app.use("/api/avatar", avatarRoute);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Application Running on Port ${port}`));

createWebSocketServer(server); 
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
		if (err) {
			console.error('Error sending file:', err);
		}
	});
});
