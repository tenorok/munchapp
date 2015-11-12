# How to launch application

Global dependencies:

```bash
npm i appbuilder nativescript typescript -g
```

Steps for create blank skeleton of project NativeScript with TypeScript:

```bash
appbuilder create native --template TypeScript.HelloWorld APPNAME
cd APPNAME
tns init
```

Steps for run new or exists project:

```bash
tns platform add ios
tsc
tns emulate ios --device "iPhone-6"
```

For development:

```bash
tns livesync ios --emulator --watch
```
