# Installation

1. Git, Node.js, pnpm, Docker
2. VS Code or a fork like Cursor
3. git clone and cd into repo in VS Code
4. Install recommended extensions (should automatically be prompted, but also in .vscode/extensions.json)
5. ```bash
   pnpm install
   ```
6. Populate `.env` following `.env.example` (request environment variables from Anthony)
7. ```bash
   ./start-database.sh
   ```
   Requires Docker
8. ```bash
   pnpm dev
   ```
