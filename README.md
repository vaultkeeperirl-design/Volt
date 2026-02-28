# ⚡️ Volt

Volt is a fast, reliable, and Discord-like chat application built specifically for mobile devices.

![App Icon](./assets/images/icon.png)

## Features

- **Server-like Navigation:** Intuitive drawer navigation allows users to switch between different "servers" and channels quickly.
- **Real-time Chat Interface:** A sleek and familiar chat UI supporting dynamic dark/light themes.
- **Mobile First:** Designed and optimized for iOS and Android platforms using React Native and Expo.
- **Cross-Platform Consistency:** Ensures a unified experience across devices with custom UI components.

## Architecture

Volt is built upon a modern React Native stack:

- **Framework:** [Expo](https://expo.dev/) (SDK 54) for rapid development and prebuilding native code.
- **Navigation:** [React Navigation](https://reactnavigation.org/) utilizing `expo-router` for file-based routing and seamless screen transitions.
- **UI & Styling:** Core React Native components enhanced with `react-native-reanimated` and `react-native-gesture-handler` for smooth, native-feeling interactions. Theme-aware styling dynamically adjusts to user preferences (Dark/Light mode).

### Key Files & Directories

- `app/`: Contains the core screens and navigation logic using `expo-router`.
  - `_layout.tsx`: Root layout defining the Drawer navigation structure.
  - `index.tsx`: The home screen representing a server's channel list.
  - `chat.tsx`: The primary chat interface component.
- `assets/`: Houses static resources like the app icon and splash screens.
- `hooks/`: Custom React hooks, including `use-color-scheme` for theme detection.

## Getting Started

Follow these steps to run Volt locally:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- An iOS Simulator (macOS only) or Android Emulator
- The Expo Go app on your physical device (optional)

### Installation

1. Clone the repository and navigate to the root directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Expo development server:

```bash
npx expo start
```

- Press `a` to open in Android Emulator.
- Press `i` to open in iOS Simulator (macOS only).
- Scan the QR code with your phone's camera to run via Expo Go.

## Building for Production

Volt utilizes Expo Application Services (EAS) or local builds for generating production artefacts.

To build the Android APK locally using Expo Prebuild:

1. Ensure Android Studio and necessary SDKs are installed.
2. Run the prebuild command:
   ```bash
   npx expo prebuild -p android
   ```
3. Navigate to the generated android directory and assemble the release:
   ```bash
   cd android && ./gradlew assembleRelease
   ```
