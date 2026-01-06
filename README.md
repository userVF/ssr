This is example of server-side rendering with minimal dependencies.

## How it works 
<img width="1058" height="595" alt="ssr" src="https://github.com/user-attachments/assets/31d03703-72fa-45ca-bb08-a54418e64344" />

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
