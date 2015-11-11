# How to launch application

Steps for create blank skeleton of project NativeScript with TypeScript:

```bash
npm i appbuilder nativescript typescript -g
appbuilder create native --template TypeScript.HelloWorld APPNAME
cd APPNAME
tns init
```

Steps for run new or exists project:

```bash
tns platform add ios
tsc
tns run ios --emulator
```

For development:

```bash
tns livesync ios --emulator --watch
```
