# mobile

# Create a new mobile app
cd mobile
expo init

# Run a mobile app (Terminal)
cd mobile
cd <new app subfolder i.e. my-app> i.e. cd my-app
expo start
a

# Run a mobile app (Visual Studio)
Open VS Code: mobile\<new app subfolder i.e. my-app>
View > Terminal
expo start
a

#Any Issues (Android Studio) - Part I
Open Android Studio
Settings
Appearance > Android Sdk > Sdk Tools tab (2nd tab) > make sure correct options are selected
AVD > delete phone image > create new one

#Any Issues (VS Code: Terminal) - Part 2
Ctrl-C
Task Manager > kill adb.exe process
expo start
Shift+A and choose a different emulator
  - it might say expo installing
