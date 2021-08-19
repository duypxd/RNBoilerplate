## APP_STRUCTURE

### Android Build for Testing APK

- Beta

```
cd android && ./gradlew assembleBetaRelease
```

- Producation

```
cd android && ./gradlew assembleRelease
```

### Android Build for deploying to Google Play

- Beta/UAT

```
cd android && ./gradlew bundleBetaRelease
```

- Producation

```
cd android && ./gradlew bundleRelease
```

### iOS Build Staging, Beta, Production

- UAT / Beta scheme.
- Prod Scheme

### Updating Firebase Google_Service.json, GoogleServiceInfo.plist

- iOS:

```
Replace with same name in ROOT/ios/Firebase/SCHEME
```

- Android

```
Replace with same name in ROOT/android/app/src/BUILD_FLAVOR
```
