This is example of server-side rendering with minimal dependencies.

## How it works 
<img width="1058" height="595" alt="ssr" src="https://github.com/user-attachments/assets/3a3008d2-1e50-40ed-8bb4-db2cbc0901fc" />

## Prerequisites
- Node.js

## Code setup
Install dependencies
```bash
npm ci
```
Build bundles
```bash
npm run build
```

## Live example
Run application server
```bash
node ./server/app-server.js
```
Run static server (in new terminal tab)
```bash
node ./server/static-server.js
```
Open in a browser
```bash
http://localhost:3000
```
Home page should looks like this:
<img width="1058" height="592" alt="page" src="https://github.com/user-attachments/assets/3f80131a-99b9-4d2c-bd46-4315f230c6d0" />

## Development
Run application server
```bash
node ./server/app-server.js
```
Run development server (in new terminal tab)
```bash
npm run dev
```
