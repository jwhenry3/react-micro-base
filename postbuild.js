const {execSync} = require('child_process');
if (process.env.ENTRY) {
  execSync(`rm -rf dist/apps/${process.env.ENTRY}/* && mkdir -p dist/apps/${process.env.ENTRY} && cp build/main.* dist/apps/${process.env.ENTRY}/`, {stdio: 'inherit'});
} else {
  execSync(`rm -rf dist/static && mkdir -p dist && cp -r build/* dist/`, {stdio: 'inherit'});
}
