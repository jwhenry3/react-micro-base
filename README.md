# Home
### Getting Started

- `npm i` Get those dependencies
- `ENTRY=auth npm run build` Compile the auth micro-app
- `ENTRY=dashboard npm run build` Compile the dashboard micro-app
- `npm run build` Compile the root app
- `serve -s dist` 

### Build Process
The build process will compile the specified entry (or the root app) and will copy the necessary files
from build into the dist folder where they would be served. After the build is complete, use the serve
library to serve the static files from the dist folder as recommended.

### Development Flow
You can use storybook to build out any UIs you want, and then expose them as micro apps using the `exposeMicroClient`
function. Currently the micro-apps use a namespacing of `@jwhenry/[name]-client` to make sure that scripts and styles are
properly referenced when injecting them into the dom. Once the micro-app has been defined, you will just
run `ENTRY=name npm run build` to compile it and put it where it needs to go. There currently is not watcher, so to
rapidly prototype, it would be recommended to use a tool like Storybook.
