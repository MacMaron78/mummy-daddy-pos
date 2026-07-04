# Setup Guide - Mummy and Daddy POS

## Quick Start

### Prerequisites
- Node.js 16+
- npm 8+
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/MacMaron78/mummy-daddy-pos.git
cd mummy-daddy-pos

# Install dependencies for web app
cd packages/web
npm install

# Install dependencies for server
cd ../server
npm install
```

### Running the Application

#### Start Web App (Laptop/Browser)
```bash
cd packages/web
npm run dev
# Open http://localhost:5173 in your browser
```

#### Start Server (Background API)
```bash
cd packages/server
npm run dev
# Server runs on http://localhost:5000
```

### Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Change these after first login!**

## Project Structure

```
mummy-daddy-pos/
├── packages/
│   ├── shared/       # Shared business logic
│   ├── web/          # React web app + PWA
│   ├── desktop/      # Electron desktop app (coming soon)
│   ├── mobile/       # React Native mobile app (coming soon)
│   └── server/       # Node.js backend
├── .github/          # CI/CD workflows
└── docs/             # Documentation
```

## Features Available

✅ **Dashboard** - Sales overview and analytics
✅ **Authentication** - Secure login system
✅ **Responsive Design** - Works on desktop and mobile browsers
✅ **Offline Ready** - PWA support
✅ **Currency** - Uganda Shillings (UGX)

## Development Tips

### Add New Feature

1. Create component in `packages/web/src/components/`
2. Add route in `packages/web/src/App.tsx`
3. Create API endpoint in `packages/server/src/routes/`
4. Test locally

### Build for Production

```bash
cd packages/web
npm run build
# Creates optimized build in dist/
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or change port in vite.config.ts
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Setup complete
2. 📝 Create products
3. 💼 Add customers
4. 📊 Create sales
5. 📈 View reports

## Support

For issues or questions, create an issue on GitHub.
