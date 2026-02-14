# ✅ SETUP CHECKLIST - Art Bidding Platform

Follow these steps in order to get your website running!

## 📋 Pre-Setup Checklist

### ✅ Step 1: Verify Node.js Installation
- [ ] Open Command Prompt (cmd)
- [ ] Type: `node --version`
- [ ] You should see version 22.11.0 or higher
- [ ] If not installed, download from: https://nodejs.org/

### ✅ Step 2: Choose Your Database Option

**Option A: Local MongoDB (Easier for Testing)**
- [ ] Download MongoDB Community Server: https://www.mongodb.com/try/download/community
- [ ] Install with default settings
- [ ] MongoDB Compass (GUI) will also be installed
- [ ] MongoDB service starts automatically
- [ ] Your `.env` file is already configured for local MongoDB!

**Option B: MongoDB Atlas (Cloud - No Installation)**
- [ ] Go to: https://www.mongodb.com/cloud/atlas
- [ ] Create free account
- [ ] Create a new cluster (select FREE tier)
- [ ] Click "Connect" → "Connect your application"
- [ ] Copy the connection string
- [ ] Open `.env` file and replace `ATLASDB_URL` with your connection string
- [ ] Replace `<password>` with your database password

### ✅ Step 3: Set Up Cloudinary (Image Uploads)
- [ ] Go to: https://cloudinary.com/
- [ ] Sign up for FREE account
- [ ] Go to Dashboard
- [ ] Copy these three values:
  - Cloud Name
  - API Key
  - API Secret
- [ ] Open `.env` file in this folder
- [ ] Paste the values in the appropriate places

## 🚀 Running Your Website

### Method 1: Double-Click START_SERVER.bat (Easiest!)
- [ ] Double-click `START_SERVER.bat` file
- [ ] Wait for "Server is listening on port 8000"
- [ ] Open browser and go to: http://localhost:8000/listings

### Method 2: Using Command Prompt
- [ ] Open Command Prompt in this folder
- [ ] Type: `npm start`
- [ ] Wait for "Server is listening on port 8000"
- [ ] Open browser and go to: http://localhost:8000/listings

## 🎨 Using Your Website

### First Time Setup:
1. [ ] Go to: http://localhost:8000/signup
2. [ ] Create your account (username, email, password)
3. [ ] Log in with your credentials

### Create Your First Art Listing:
1. [ ] Click "Create New Listing" or go to: http://localhost:8000/listings/new
2. [ ] Fill in the details:
   - Title (e.g., "Beautiful Landscape Painting")
   - Description
   - Image URL or upload image
   - Price
   - Location
   - Country
3. [ ] Click "Add" to create the listing

### Explore Features:
- [ ] View all listings on the home page
- [ ] Click on a listing to see details
- [ ] Add reviews and ratings
- [ ] Edit or delete your own listings
- [ ] Filter listings by category

## 🔧 Troubleshooting

### Problem: "Cannot connect to database"
**Solution:**
- [ ] Make sure MongoDB is running (check Task Manager for "mongod")
- [ ] Or check your MongoDB Atlas connection string in `.env`
- [ ] Verify the database URL in `.env` file

### Problem: "Port 8000 already in use"
**Solution:**
- [ ] Close any other applications using port 8000
- [ ] Or open `app.js` and change line 97 from `8000` to `3000`

### Problem: "Module not found" or "Cannot find module"
**Solution:**
- [ ] Open Command Prompt in project folder
- [ ] Run: `npm install`
- [ ] Wait for installation to complete
- [ ] Try starting server again

### Problem: "Cloudinary upload failed"
**Solution:**
- [ ] Check your Cloudinary credentials in `.env` file
- [ ] Make sure you copied them correctly from Cloudinary dashboard
- [ ] Verify there are no extra spaces

### Problem: Website shows blank page
**Solution:**
- [ ] Make sure you're going to: http://localhost:8000/listings (not just localhost:8000)
- [ ] Check the terminal for any error messages
- [ ] Try creating a listing first if database is empty

## 📁 Important Files

- **`.env`** - Contains your secret keys and database connection
- **`app.js`** - Main server file
- **`START_SERVER.bat`** - Quick start script
- **`package.json`** - Project dependencies

## 🎯 Quick Reference

### Important URLs:
- **Home/All Listings**: http://localhost:8000/listings
- **Sign Up**: http://localhost:8000/signup
- **Log In**: http://localhost:8000/login
- **Create New Listing**: http://localhost:8000/listings/new

### Commands:
```bash
npm start          # Start the server
npm run dev        # Start with auto-restart (needs nodemon)
node init/index.js # Load sample data
```

## ✨ You're All Set!

Once you see "Server is listening on port 8000" in your terminal:
1. Open your browser
2. Go to: http://localhost:8000/listings
3. Start creating and managing your art listings!

**Need help?** Check the README.md file for detailed documentation.

---

**Happy Coding! 🎨✨**
