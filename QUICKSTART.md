# 🚀 QUICK START GUIDE

## Get Your Art Bidding Website Running in 3 Steps!

### Step 1: Install MongoDB (Choose One Option)

#### Option A: Install MongoDB Locally (Recommended for Beginners)
1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Install it with default settings
3. MongoDB will start automatically

#### Option B: Use MongoDB Atlas (Cloud - No Installation)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free cluster
4. Get your connection string and update `.env` file

### Step 2: Set Up Cloudinary (For Image Uploads)
1. Go to https://cloudinary.com/
2. Sign up for a free account
3. From your dashboard, copy:
   - Cloud Name
   - API Key  
   - API Secret
4. Open `.env` file and paste these values

### Step 3: Start the Server

Open terminal in this folder and run:

```bash
# Install dependencies (first time only)
npm install

# Start the server
npm start
```

**That's it!** 🎉

Open your browser and go to: **http://localhost:8000/listings**

---

## 📝 What to Do Next

1. **Sign Up**: Create an account at http://localhost:8000/signup
2. **Log In**: Log in with your credentials
3. **Create Listing**: Add your first art piece at http://localhost:8000/listings/new
4. **Explore**: Browse all listings, add reviews, and more!

---

## ⚡ Quick Commands

```bash
# Start server (normal mode)
npm start

# Start server (development mode with auto-restart)
npm run dev

# Initialize sample data (optional)
node init/index.js
```

---

## 🆘 Having Issues?

### "Cannot connect to database"
- Make sure MongoDB is running
- Check your `.env` file has correct database URL

### "Port 8000 already in use"
- Close any other applications using port 8000
- Or change the port in `app.js` (line 97)

### "Module not found"
- Run `npm install` again

---

## 🎨 Your Website Features

✅ User Authentication (Signup/Login)
✅ Create & Manage Art Listings  
✅ Upload Images
✅ Add Reviews & Ratings
✅ Edit & Delete Your Listings
✅ Beautiful Responsive Design

**Enjoy your Art Bidding Platform!** 🎨✨
