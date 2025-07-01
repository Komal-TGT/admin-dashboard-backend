🧩 Admin Dashboard – Backend (Phase 2)
This project is part of the Admin Panel Microservice.  
In Phase 2, the focus is on setting up the database structure using  MongoDB  and Mongoose. It also includes a simple Express server to connect and test the DB.

 ✅ Features Implemented in Phase 2
 📦 MongoDB Collections Setup
Using Mongoose schemas for the following collections:
Admin Users (`username`, `passwordHash`, `role`)
Clients (`clientId`, `name`, `email`, `phone`, `plan`, `status`)
Receipts(`receiptId`, `clientId`, `transactionData`, `timestamp`, `qrCodeUrl`)
Transaction Logs (`type`, `message`, `route`, `timestamp`)
Analytics (`date`, `receiptCount`, `errorCount`, `topClients`)

These schemas were tested using a `test.js` script by inserting sample documents.
🛠️ Tech Stack
 Technology 						 Role 
 Node.js   						 JavaScript runtime 
Express.js						 Backend server framework 
MongoDB    						 NoSQL database 
Mongoose   						ODM for MongoDB 
dotenv     						Manage environment variables 

 🚀 Getting Started
 1. Clone the Project
git clone https://github.com/Komal-TGT/admin-dashboard-backend.git
cd admin-dashboard-backend

2. Install Dependencies
npm install

3. Create a .env File
Create a file named .env in the root with:
MONGO_URI=mongodb://localhost:27017/admin_dashboard
PORT=5000

5. Start the Server
node server.js
You should see:
Server started on port 5000
✅ MongoDB connected

Then go to:
📍 http://localhost:5000/
✅ It should show: API is running...

🧪 Testing the Database
To test the MongoDB connection and schema:
Create a file called test.js
Import your models and insert sample documents
Run it using:
node test.js
🧷 .gitignore Setup
The project includes a .gitignore file that excludes:
node_modules/
.env
logs, OS files, and build artifacts

📁 Project Structure
admin-dashboard-backend/
│
├── config/ # MongoDB connection setup
│ └── db.js
│
├── models/ # All Mongoose schemas
│ ├── AdminUser.js
│ ├── Client.js
│ ├── Receipt.js
│ ├── TransactionLog.js
│ └── Analytics.js
│
├── .gitignore
├── server.js # App entry point
├── test.js # Sample test script for inserting data
└── README.md

🧠 Notes
This project represents only Phase 2: Database Design
Phase 3 will include authentication, protected routes, and full APIs
Frontend (React/Next.js Admin Panel) is handled in a separate repo

👨‍💻 Author
Made  by  KOMAL RANI
🔗 GitHub: github.com/Komal-TGT
