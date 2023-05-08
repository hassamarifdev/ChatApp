import "dotenv/config";
export default {
  expo: {
    name: "ChatApp",
    slug: "ChatApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyCusUNk6AVM1oy9tJXZaH9BYKpPPd-QPVI",
      authDomain: "chatapp-6ecf1.firebaseapp.com",
      projectId: "chatapp-6ecf1",
      storageBucket: "chatapp-6ecf1.appspot.com",
      messagingSenderId: "492656593755",
      appId: "1:492656593755:web:90bca908088d7bbc05e87e",
      measurementId: "G-ZM999V8EFG",
    },
  },
};
