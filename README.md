# Create a new mobile app
cd mobile <p>
expo init <p>

# Run a mobile app (Terminal)
cd mobile <p>
cd [new app subfolder i.e. my-app] i.e. cd my-app <p>
expo start <p>
a <p>

# Run a mobile app (Visual Studio)
Open VS Code: mobile\\[new app subfolder i.e. my-app] <p>
View > Terminal <p>
expo start <p>
a <p>

# Any Issues (Android Studio) - Part I
Open Android Studio <p>
File > Settings > Appearance > Android Sdk > Sdk Tools tab (2nd tab) > make sure correct options are selected <p>
  OR <p>
Welcome Android Studio Screen > Settings > SDK <p>
  
AVD icon in toolbar > delete phone image > create new one <p>
  OR <p>
Welcome Android Studio Screen > Settings > AVD

# Any Issues (VS Code: Terminal) - Part 2
Delete and Create new Phone image (maybe use Q Android OS)
Ctrl-C <p>
Task Manager > kill adb.exe process  <p>
Close VS Code + Open VS Code <p>
expo start <p>
Connection: Tunnel <p>  
Shift+A and choose a different emulator <p>
  - if it says Expo installing that's a great sign it's working! <p>

    
