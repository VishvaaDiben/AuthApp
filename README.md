# 📱 User Authentication App (React Native + Expo)

A simple **React Native authentication flow** built with **Expo** and **React Navigation**.  
Features include **Signup, Login, Logout, Persistent Sessions** (via AsyncStorage),  
**real-time form validation**, and reusable **form components**.

---

## 🚀 Features
- ✅ Signup, Login, and Logout flow
- ✅ AsyncStorage persistence (keeps users logged in)
- ✅ Form validation (email, password, required fields)
- ✅ Reusable `Input` and `PasswordInput` components
- ✅ Password visibility toggle (eye icon)
- ✅ Real-time validation while typing
- ✅ Disabled button until form is valid
- ✅ Styled error messages under each input
- ✅ Friendly UI with modern colors and spacing

---

## 📂 Project Structure
UserAuthApp/
│── App.js
│── package.json
│── README.md
│
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Input.js
│ │ └── PasswordInput.js
│ │
│ ├── context/ # Global AuthContext (login/signup/logout)
│ │ └── AuthContext.js
│ │
│ ├── navigation/ # App navigation stack
│ │ └── AppNavigator.js
│ │
│ ├── screens/ # Screens (Login, Signup, Home)
│ │ ├── LoginScreen.js
│ │ ├── SignupScreen.js
│ │ └── HomeScreen.js
│ │
│ ├── utils/ # Validation helpers
│ │ └── validators.js
│ │
│ └── constants/ # App theme/colors
│ └── styles.js


---

## ⚙️ Setup & Installation

1. **Clone this repo**
   ```bash
   git clone https://github.com/your-username/UserAuthApp.git
   cd UserAuthApp

2. **Install dependencies**
```bash
npm install

3. **Start Expo**
```bash
npx expo start

4.**Open the app in:**
Expo Go (iOS/Android) → Scan QR code
Android Emulator / iOS Simulator

## Tech Stack
## Authentication Flow
## Screenshots
## License
MIT License — free to use for personal & commercial projects.

