This is server-side rendering example built with native Fastify routing and Vue components.

## How it works 
<img width="1058" height="595" alt="ssr" src="https://github.com/user-attachments/assets/74022616-8292-48d3-822e-30f462b8eb4f" />

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
