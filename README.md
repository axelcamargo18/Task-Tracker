# Task-Tracker

## Errors 
1.) First error was getting the css file to work with my server.js

```js
    // First google searched my error and came accross a stackoverflow solutions and it worked
    // The Error:
    // Refused to apply style from 'http://localhost:4000/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
    // Then imported and installed the following:
    import path from "path";
    import { fileURLToPath } from "url";

    const __dirname = path.dirname(__filename);

    const app = express();

    app.use(express.static(__dirname + "/"));
```
```js
Still working on implementing the fs node module to read/write 