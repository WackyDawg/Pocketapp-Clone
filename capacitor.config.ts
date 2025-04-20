import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pocketapp.app',
  appName: 'Pocketapp',
  webDir: 'dist/Pocketapp/browser',
  "plugins": {
    "StatusBar": {
      "overlaysWebView": false,
      "style": "DARK",
      "backgroundColor": "#ffffffff"
    }
  },
 
  // plugins: {
  //   SplashScreen: {
  //     launchAutoHide: true,
  //     launchShowDuration: 0,
  //     showSpinner: true
  //   },
  //   CapacitorLottieSplashScreen: {
  //     Enabled: true,
  //     LottieAnimationLocation: "assets/splash/"
  //   }
  // },
};

export default config;
