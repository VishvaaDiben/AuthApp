# User Authentication App (React Native + Expo)

A simple **React Native authentication flow** built with **Expo** and **React Navigation**.  
Features include **Signup, Login, Logout, Persistent Sessions** (via AsyncStorage),  
**real-time form validation**, and reusable **form components**.

---

## Features
-  Signup, Login, and Logout flow
-  AsyncStorage persistence (keeps users logged in)
-  Form validation (email, password, required fields)
-  Reusable `Input` and `PasswordInput` components
-  Password visibility toggle (eye icon)
-  Real-time validation while typing
-  Disabled button until form is valid
-  Styled error messages under each input
-  Friendly UI with modern colors and spacing

---

## Project Structure
<img width="679" height="525" alt="image" src="https://github.com/user-attachments/assets/04002f5e-554e-4f55-92dc-7cb1bbdc297f" />



---

## Setup & Installation

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

4. **Open the app in:**
   Expo Go (iOS/Android) → Scan QR code
   Android Emulator / iOS Simulator

---

## Tech Stack
Expo — React Native framework

React Navigation — navigation stack

AsyncStorage — local persistence

Expo Vector Icons — icons (eye toggle)

---
## Authentication Flow
Signup
- Enter Name, Email, Password
- User is stored in AsyncStorage
- Logs in automatically

Login
- Validate credentials
- Show error if email not registered or password incorrect
- Persist session in AsyncStorage

Home Screen
- Display welcome message with name/email
- Logout clears session
  
---
## Screenshots
<img width="300" height="720" alt="image" src="https://github.com/user-attachments/assets/76a44abc-1515-4b29-8b99-26a4514810b2" />
<img width="300" height="720" alt="image" src="https://github.com/user-attachments/assets/80dedf28-6441-41aa-945d-f76c1ad91de1" />
<img width="300" height="720" alt="image" src="https://github.com/user-attachments/assets/daa5763e-7dc7-49d8-be75-543e9a18b6f2" />

---
## License
MIT License — free to use for personal & commercial projects.

