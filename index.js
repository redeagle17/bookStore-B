import express from "express";
const app = express();
import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();
import bookRoutes from "./routes/Book.routes.js";
import userRoutes from "./routes/User.routes.js";
import cors from "cors";
app.use(cors(
    {
        origin: ["https://book-store-frontend-mu-ivory.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})

.catch((error) => {
    console.log(`Error in running the server: ${error.message}`);
    process.exit(1)
});

// Routes
app.use(express.json());
app.use("/book_store/books", bookRoutes);
app.use("/book_store/users", userRoutes);