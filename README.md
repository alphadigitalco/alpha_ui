# Alpha UI

`@Alpha.Digital` UI Component Kit

### How To Integrate

For base styles:

```
import "@alpha-digital/alpha-ui/dist/styles.css";
```

All components it's a named export:

```
import { Component } from "@alpha-digital/alpha-ui";
```

### Testing Lib Before Publish

To test library before publish on any registry:

```
$ npm run build
$ npm pack
```

Copy the generated tarball for the project root folder install on target the lib

```
$ npm install tarball.tgz
```
