const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const User = require("./models/User");
const Book = require("./models/Book");

// Load env vars
dotenv.config({ path: path.join(__dirname, ".env") });

const usersData = [
  {
    name: "Aryan Sharma",
    email: "aryan@example.com",
    password: "password123",
    bio: "Engineering student parsing through heavy calculus.",
    location: "Mumbai",
    rating: 4.8,
    completedDeals: 12,
    verified: true,
    badge: "Top Seller",
  },
  {
    name: "Priya Raj",
    email: "priya@example.com",
    password: "password123",
    bio: "Medical aspirant, recently cleared NEET.",
    location: "Delhi",
    rating: 5.0,
    completedDeals: 5,
    verified: true,
    badge: "Verified",
  },
  {
    name: "Vikram Singh",
    email: "vikram@example.com",
    password: "password123",
    bio: "Just graduated high school, offloading CBSE books.",
    location: "Bangalore",
    rating: 4.2,
    completedDeals: 8,
    verified: false,
    badge: null,
  },
  {
    name: "Sneha Gupta",
    email: "sneha@example.com",
    password: "password123",
    bio: "Voracious reader, occasionally selling old textbooks.",
    location: "Pune",
    rating: 4.9,
    completedDeals: 20,
    verified: true,
    badge: "Top Seller",
  },
  {
    name: "Karan Patel",
    email: "karan@example.com",
    password: "password123",
    bio: "Looking for affordable resources. Also selling few.",
    location: "Ahmedabad",
    rating: 3.8,
    completedDeals: 2,
    verified: false,
    badge: null,
  }
];

const booksDataTemplate = [
  {
    title: "Concepts of Physics Vol 1 by H.C. Verma",
    author: "H.C. Verma",
    price: 350,
    mrp: 500,
    images: ["https://covers.openlibrary.org/b/isbn/9788177091878-L.jpg"],
    condition: "Like New",
    demand: "high",
    category: "JEE",
    classLevel: "11",
    description: "Mint condition H.C. Verma. Rarely used, extremely required for JEE Physics.",
    location: "Mumbai",
    distance: 5,
    views: 120,
    requests: 15,
  },
  {
    title: "NCERT Biology Class 12",
    author: "NCERT",
    price: 100,
    mrp: 190,
    images: ["https://books.google.com/books/content?id=KBrzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Good",
    demand: "high",
    category: "NEET",
    classLevel: "12",
    description: "Has some highlighted text but completely readable and perfectly fine for quick revision.",
    location: "Delhi",
    distance: 3,
    views: 200,
    requests: 25,
  },
  {
    title: "R.D. Sharma Mathematics Class 10",
    author: "R.D. Sharma",
    price: 300,
    mrp: 650,
    images: ["https://books.google.com/books/content?id=NMYpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Poor",
    demand: "medium",
    category: "CBSE Boards",
    classLevel: "10",
    description: "Cover is slightly torn, missing a few blank pages at the end, but all content pages are intact.",
    location: "Bangalore",
    distance: 12,
    views: 45,
    requests: 2,
  },
  {
    title: "Introduction to Algorithms, 3rd Edition",
    author: "Thomas H. Cormen",
    price: 1500,
    mrp: 2900,
    images: ["https://books.google.com/books/content?id=aefUBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Good",
    demand: "high",
    category: "University",
    classLevel: "B.Tech",
    description: "Standard algorithms textbook for computer science undergrads. Good condition.",
    location: "Pune",
    distance: 8,
    views: 310,
    requests: 40,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 120,
    mrp: 250,
    images: ["https://books.google.com/books/content?id=x8xtwgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Like New",
    demand: "low",
    category: "Others",
    classLevel: "",
    description: "Just a good read. Not a textbook.",
    location: "Ahmedabad",
    distance: 2,
    views: 15,
    requests: 0,
  },
  {
    title: "Oswaal CBSE Question Bank Class 12 Physics",
    author: "Oswaal Editorial Board",
    price: 250,
    mrp: 499,
    images: ["https://books.google.com/books/content?id=0BX1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Good",
    demand: "medium",
    category: "CBSE Boards",
    classLevel: "12",
    description: "Excellent for final preparations and sample papers.",
    location: "Mumbai",
    distance: 6,
    views: 80,
    requests: 5,
  },
  {
    title: "Complete JEE Main & Advanced Bundle",
    author: "Various",
    price: 1200,
    mrp: 2500,
    images: ["https://books.google.com/books/content?id=sCO-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Good",
    demand: "high",
    category: "Bundles",
    classLevel: "11 & 12",
    description: "Bundle includes H.C Verma, D.C Pandey, and various mathematics guides.",
    location: "Delhi",
    distance: 4,
    views: 450,
    requests: 50,
    isBundle: true,
    bundleBooks: [
      { title: "D.C. Pandey Physics", subject: "Physics", mrp: 600 },
      { title: "Cengage Mathematics", subject: "Math", mrp: 1200 },
      { title: "M.S. Chouhan Organic Chemistry", subject: "Chemistry", mrp: 700 }
    ]
  },
  {
    title: "Allen Career Institute Modules - Biology",
    author: "Allen",
    price: 800,
    mrp: 2000,
    images: ["https://books.google.com/books/content?id=3ecDAAAAMBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Like New",
    demand: "high",
    category: "NEET",
    classLevel: "11 & 12",
    description: "Unused modules for NEET biology. Comprehensive theory and exercises.",
    location: "Bangalore",
    distance: 10,
    views: 600,
    requests: 80,
  },
  {
    title: "S. Chand Physics Class 9",
    author: "Lakhmir Singh, Manjit Kaur",
    price: 200,
    mrp: 450,
    images: ["https://books.google.com/books/content?id=MmktDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Poor",
    demand: "low",
    category: "CBSE Boards",
    classLevel: "9",
    description: "Heavily used, covers are taped, but content is fine.",
    location: "Pune",
    distance: 15,
    views: 30,
    requests: 1,
  },
  {
    title: "Higher Engineering Mathematics",
    author: "B.S. Grewal",
    price: 500,
    mrp: 1100,
    images: ["https://books.google.com/books/content?id=W-E_swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"],
    condition: "Good",
    demand: "medium",
    category: "University",
    classLevel: "B.Tech",
    description: "Standard book for all branches. Slightly old edition but valid.",
    location: "Ahmedabad",
    distance: 7,
    views: 110,
    requests: 12,
  }
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error("MONGO_URI is missing from .env");
    }

    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB...");

    // Find our previous demo users and books
    console.log("Clearing existing data...");
    await Book.deleteMany({});
    await User.deleteMany({});

    console.log("Creating dummy users...");
    const createdUsers = [];
    for (const u of usersData) {
      const newUser = new User(u);
      // Let save hook hash the password
      await newUser.save();
      createdUsers.push(newUser);
    }
    console.log(`Created ${createdUsers.length} users.`);

    console.log("Creating dummy books...");
    let booksCount = 0;
    for (let i = 0; i < booksDataTemplate.length; i++) {
        const bookData = booksDataTemplate[i];
        
        // Randomly assign a user as a seller
        const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        bookData.seller = randomUser._id;
        
        // Also ensure location matches seller roughly
        bookData.location = randomUser.location;
        
        const newBook = new Book(bookData);
        await newBook.save();

        // Ensure user booksListed counter increases
        await User.findByIdAndUpdate(randomUser._id, { $inc: { booksListed: 1 } });

        booksCount++;
    }

    // Add another set of books to make it look full!
    for (let i = 0; i < booksDataTemplate.length; i++) {
        const bookData = { ...booksDataTemplate[i] };
        
        // Randomize slight titles and prices
        bookData.title = bookData.title + " (Extra Copy)";
        bookData.price = Math.max(50, bookData.price - 20);
        
        const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        bookData.seller = randomUser._id;
        bookData.location = randomUser.location;
        
        const newBook = new Book(bookData);
        await newBook.save();

        await User.findByIdAndUpdate(randomUser._id, { $inc: { booksListed: 1 } });
        booksCount++;
    }

    console.log(`Created ${booksCount} books.`);
    console.log("Database seeded successfully!");

    mongoose.connection.close();
    process.exit(0);

  } catch (err) {
    console.error("Error seeding DB:", err);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedDB();
