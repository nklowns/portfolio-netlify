# Known Issues and Workarounds

## Storybook Compatibility with Yarn PnP

### Issue
Storybook has known compatibility issues with Yarn Berry's Plug'n'Play (PnP) mode. This affects both Storybook 7 and 8.

### Error
```
TypeError: Cannot convert undefined or null to object
at Function.keys (<anonymous>)
at matchFromAbsolutePaths (esbuild-register)
```

### Solutions

#### Option 1: Use nodeLinker "node-modules" (Recommended)
Add to `.yarnrc.yml`:
```yaml
nodeLinker: node-modules
```

Then reinstall:
```bash
rm -rf node_modules .yarn/cache .pnp.*
yarn install
```

#### Option 2: Install Storybook's PnP dependencies
Follow: https://github.com/storybookjs/storybook/blob/next/code/lib/cli/README.md#yarn-2-and-3

#### Option 3: Use npm or pnpm instead of Yarn

### Temporary Status
- ✅ Vite build works perfectly
- ✅ Vue 3 application runs fine
- ⚠️ Storybook requires nodeLinker configuration change

### References
- https://github.com/storybookjs/storybook/issues/14940
- https://yarnpkg.com/configuration/yarnrc#nodeLinker
