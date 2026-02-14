# ✈️ WANDERLUST - PREMIUM TRAVEL BOOKING PLATFORM

## 📊 Project Overview

**Project Name:** Wanderlust (formerly Art Bidding)  
**Type:** Full-Stack Travel Booking Web Application  
**Purpose:** A premium platform for discovering and booking unique stays and experiences worldwide.  
**Tech Stack:** MERN-like (MongoDB, Express, Node.js, EJS) with Premium UI/UX.

---

## 🏗️ Architecture

### Backend Framework
- **Express.js** - Web application framework
- **Node.js** - Runtime environment

### Database
- **MongoDB** with **Mongoose** - NoSQL database for Listings, Users, and Reviews.
- **MongoDB Atlas** support for cloud hosting.

### Authentication
- **Passport.js** - Robust authentication.
- **Passport-Local** - Secure login/signup.

### Storage
- **Cloudinary** - Optimization and storage for high-quality travel photography.

### UI/UX Design (New!)
- **Premium Glassmorphism Theme**: Custom CSS variables, backdrop filters, and smooth animations.
- **Responsive Grid**: Optimized for Mobile, Tablet, and Desktop.
- **Interactive Elements**: Hover effects, dynamic filters, and seamless navigation.

---

## 📁 Project Structure

```
WANDERLUST/
│
├── 📄 app.js                    # Main application entry point
├── 📄 package.json              # Dependencies
├── 📄 .env                      # Environment variables
├── 📁 models/                   # Database models
│   ├── listing.js               # Destination/Property model
│   ├── review.js                # Review model
│   └── user.js                  # User model
│
├── 📁 routes/                   # Express routes
│   ├── listing.js               # Core booking routes
│   ├── review.js                # Review routes
│   └── user.js                  # Auth routes
│
├── 📁 views/                    # EJS templates
│   ├── layouts/                 # Master layouts
│   ├── includes/                # Components (Navbar, Footer, Flash)
│   ├── listings/                # Destination pages
│   └── users/                   # Auth pages
│
└── 📁 public/                   # Static assets
    ├── css/                     # Premium Styles
    └── js/                      # Client-side logic
```

---

## 🌟 Key Features

### 1. 🌍 Discover Destinations
Browse stunning locations with our premium grid view. Filter by category:
- **Trending** 🔥
- **Iconic Cities** 🏙️
- **Castles** 🏰
- **Amazing Pools** 🏊
- **Camping** ⛺
- **Arctic** ❄️

### 2. 🏨 Host a Journey
Users can list their own properties ("Airbnbs") or experiences.
- Upload high-res photos via Cloudinary.
- Manage pricing, location, and description.

### 3. ⭐ Verified Reviews
Read real reviews from other travelers.
- 5-Star rating system.
- Comment filtering.

### 4. 🔒 Secure Booking Flow (Demo)
- "Book this Journey" feature (Simulation).
- Secure login required to book or review.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Ensure `.env` has:
   - `ATLASDB_URL`
   - `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`
   - `SECRET`

3. **Run the Server**:
   ```bash
   node app.js
   ```
   Visit `http://localhost:8000`

---

## 🎨 Design System

We use a custom design system focusing on:
- **Typography**: 'Plus Jakarta Sans' for modern readability and 'Playfair Display' for elegant headings.
- **Colors**:
  - Primary: `#ff385c` (Passion Red)
  - Secondary: `#008489` (Teal)
  - Background: Crisp White & Light Gray
- **Components**: Glass-morphic cards, pill-shaped buttons, and intuitive toggle switches.

---

## ✅ Latest Updates (Conversion Status)

- [x] **Rebranding**: Complete shift from "Art Bidding" to "Wanderlust Travel".
- [x] **UI Overhaul**: Implemented new `style.css` with premium aesthetics.
- [x] **Bug Fixes**: Resolved CDNs (Bootstrap 5.3.3) and Toggle Switch logic.
- [x] **Responsiveness**: Enhanced grid layouts for all devices.
- [x] **Booking Feature**: Added booking interaction points.

**Ready to Explore the World! ✈️**
