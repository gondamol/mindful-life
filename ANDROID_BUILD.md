# 📱 Building for Android

This guide explains how to convert the Mindful Life PWA into a native Android app.

## Options for Android Deployment

### Option 1: PWA Installation (Recommended for Quick Launch)
The app is already installable as a PWA on Android devices through Chrome/Edge:

1. **Visit the website** on an Android device
2. **Tap the menu** (three dots) in Chrome
3. **Select "Add to Home Screen"** or "Install App"
4. The app will be installed with offline support

**Advantages:**
- ✅ No app store approval needed
- ✅ Instant deployment
- ✅ Updates automatically
- ✅ Smaller download size
- ✅ Works on all browsers

### Option 2: Capacitor (Native Android App)

Convert the Next.js app to a native Android app using Capacitor.

#### Setup Instructions

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android

# 2. Initialize Capacitor
npx cap init "Mindful Life" "com.mindfullife.app" --web-dir=out

# 3. Add Android platform
npx cap add android

# 4. Build the Next.js app for static export
npm run build
```

#### Configure Next.js for Static Export

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ... rest of config
};
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "build": "next build",
    "export": "next build && next export",
    "sync": "npm run export && npx cap sync",
    "android": "npx cap open android"
  }
}
```

#### Build and Run

```bash
# Build and sync
npm run sync

# Open in Android Studio
npm run android

# Or run directly
npx cap run android
```

#### Add Native Features

**Push Notifications:**
```bash
npm install @capacitor/push-notifications

# In capacitor.config.ts
plugins: {
  PushNotifications: {
    presentationOptions: ["badge", "sound", "alert"]
  }
}
```

**App Icon & Splash Screen:**
```bash
npm install @capacitor/assets

# Place icons in resources/
npx capacitor-assets generate
```

### Option 3: TWA (Trusted Web Activity)

Use Android Studio to create a TWA that wraps your PWA.

#### Prerequisites
- Android Studio
- Domain with HTTPS
- Digital Asset Links verification

#### Steps

1. **Create new project** in Android Studio
2. **Select "Trusted Web Activity"** template
3. **Configure** `build.gradle`:

```gradle
dependencies {
    implementation 'com.google.androidbrowserhelper:androidbrowserhelper:2.5.0'
}
```

4. **Update** `strings.xml`:

```xml
<string name="app_name">Mindful Life</string>
<string name="asset_statements">
  [{
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "web",
      "site": "https://mindfullife.app"
    }
  }]
</string>
<string name="host">mindfullife.app</string>
<string name="start_url">/</string>
```

5. **Build APK** and upload to Google Play Store

### Option 4: Bubblewrap (CLI for TWA)

```bash
# Install Bubblewrap
npm install -g @bubblewrap/cli

# Initialize
bubblewrap init --manifest https://yourdomain.com/manifest.json

# Build
bubblewrap build

# Result: app-release-signed.apk
```

## App Store Deployment

### Google Play Store Requirements

1. **Developer Account** ($25 one-time fee)
2. **App Signing Key**
3. **Privacy Policy URL**
4. **Screenshots** (phone, tablet)
5. **Feature Graphic** (1024 x 500)
6. **App Icon** (512 x 512)

### Prepare Assets

Icons are in `/public/icons/`:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

Screenshots needed:
- Phone: 16:9 ratio (1080 x 1920)
- Tablet: 16:10 ratio (1920 x 1200)
- Minimum 2, maximum 8 per device type

### Build Release APK

```bash
# For Capacitor
cd android
./gradlew assembleRelease

# APK location:
# android/app/build/outputs/apk/release/app-release.apk
```

### Sign the APK

```bash
# Generate keystore
keytool -genkey -v -keystore mindful-life.keystore -alias mindfullife -keyalg RSA -keysize 2048 -validity 10000

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore mindful-life.keystore app-release-unsigned.apk mindfullife

# Verify
jarsigner -verify -verbose -certs app-release-unsigned.apk

# Align
zipalign -v 4 app-release-unsigned.apk mindful-life.apk
```

## Native Features Integration

### Screen Time Tracking (Android)

```typescript
// Use Capacitor plugin
import { App } from '@capacitor/app';
import { ScreenOrientation } from '@capacitor/screen-orientation';

// Track app usage
App.addListener('appStateChange', ({ isActive }) => {
  if (isActive) {
    // App opened
    trackAppOpen();
  }
});
```

### Push Notifications

```typescript
import { PushNotifications } from '@capacitor/push-notifications';

// Request permissions
await PushNotifications.requestPermissions();

// Register
await PushNotifications.register();

// Listen for notifications
PushNotifications.addListener('pushNotificationReceived',
  (notification) => {
    console.log('Push received:', notification);
  }
);
```

### App Shortcuts

Add to `AndroidManifest.xml`:

```xml
<meta-data
    android:name="android.app.shortcuts"
    android:resource="@xml/shortcuts" />
```

Create `res/xml/shortcuts.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<shortcuts xmlns:android="http://schemas.android.com/apk/res/android">
    <shortcut
        android:shortcutId="calculate"
        android:enabled="true"
        android:icon="@drawable/ic_calculator"
        android:shortcutShortLabel="@string/calculate_time"
        android:shortcutLongLabel="@string/calculate_screen_time"
        android:disabledMessage="@string/shortcut_disabled">
        <intent
            android:action="android.intent.action.VIEW"
            android:targetPackage="com.mindfullife.app"
            android:targetClass="com.mindfullife.app.MainActivity"
            android:data="mindfullife://assess" />
    </shortcut>
</shortcuts>
```

## Testing

### Test on Real Device

```bash
# Enable USB debugging on device
# Connect via USB
adb devices

# Install and run
npx cap run android -l --external
```

### Test PWA Install

1. Visit on Android Chrome
2. Look for "Add to Home Screen" prompt
3. Install and test offline functionality

## Performance Optimization

### Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

Target scores:
- ✅ Performance: 90+
- ✅ PWA: 100
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

### Bundle Size

```bash
npm run build
# Check .next/build-manifest.json

# Analyze
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## Recommended Approach

For your use case, **start with PWA** (already configured):

1. ✅ Deploy to Vercel/Netlify
2. ✅ Users install via browser
3. ✅ Collect feedback
4. ⏭️ Later: Build native app with Capacitor if needed

**Benefits:**
- Faster to market
- No app store approval delays
- Easier updates
- Cross-platform (Android + iOS)
- Same codebase

**When to go native:**
- Need deeper OS integration
- Want app store visibility
- Require background tasks
- Need native performance

## Resources

- [Capacitor Docs](https://capacitorjs.com/docs)
- [TWA Guide](https://developer.chrome.com/docs/android/trusted-web-activity/)
- [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap)
- [PWA Best Practices](https://web.dev/pwa-checklist/)

---

**Current Status:** ✅ PWA fully configured and ready to install on Android devices
