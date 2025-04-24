# expo-rnd-screen-scroll

Different scroll solutions for handling features such as auto-scroll, auto-select-input, lazy-loading-dropdowns, fixed-submit-buttons, and keyboard hovering.

## Getting Started

### Install Prerequisites

- PowerShell (built-in command line with windows)
- Node.js (minimum version v22.14.0)
- Git
- Java (version 17.0.12)
- Android Studio
  - settings > Languages & Frameworks > Android SDK
    - SDK Platforms
      - Name: Android 14.0("UpsideDownCake") | Api Level: 34
    - SDK Tools
      - Android SDK Build-Tools 36
      - NDK (Side by side)
      - Android SDK Command-line Tools (latest)
      - CMake
      - Android Emulator
      - Android Emulator hypervisor driver (installer)
      - Android SDK Platform-Tools
      - Intel x86 Emulator Accelerator (HAXM installer) - Deprecated
  - Device Manager -> Add Device
    - Phone > Pixel 2
    - Release Name: Oreo | API: 27
- VS Code
- Update Environment Variables
  - User
    - ANDROID_HOME | C:\Users\username\AppData\Local\Android\Sdk
    - JAVA_HOME | C:\Program Files\Android\Android Studio\jbr
    - Path
      - C:\Users\username\AppData\Local\Microsoft\WindowsApps
      - C:\Program Files\Azure Data Studio\bin
      - C:\Program Files\Java\jdk-17\bin
      - C:\Users\jpage\AppData\Local\Programs\Microsoft VS Code\bin
      - C:\Users\jpage\AppData\Roaming\npm
  - system variables
    - Path
      - C:\Program Files\Common Files\Oracle\Java\javapath
      - C:\Program Files\Git\cmd
      - C:\Program Files\nodejs\
      - C:\Program Files (x86)\Common Files\Oracle\Java\java8path
      - C:\Program Files (x86)\Common Files\Oracle\Java\javapath
      - C:\Users\jpage\AppData\Local\Android\Sdk
      - C:\Users\jpage\AppData\Local\Android\Sdk\platform-tools

### Project Setup

Open PowerShell, and change directory for where you want to clone the project. Next, run the following commands:

- `git clone https://github.com/jamespageced/expo-rnd-screen-scroll.git`
- `cd expo-rnd-screen-scroll`
- `npm install`
- `npm run dev-android`

Happy Coding!
