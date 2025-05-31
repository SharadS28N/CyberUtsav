# CyberUtsav 2.0 Website

A modern, responsive website for CyberUtsav 2.0 - The Ultimate 24-Hour Hackathon Experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd cyberutsav-website
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects (already included in netlify.toml)

### Other Static Hosts
1. Run `npm run build`
2. Upload the `out` folder to your hosting provider

## 🛠️ Built With

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - UI components
- **Lucide React** - Icons

## 📁 Project Structure

\`\`\`
├── app/                 # Next.js app directory
├── components/          # React components
├── public/             # Static assets
├── lib/                # Utility functions
└── styles/             # Global styles
\`\`\`

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `vercel.json` - Vercel deployment settings
- `netlify.toml` - Netlify deployment settings
- `tailwind.config.ts` - Tailwind CSS configuration

## 📝 Environment Variables

No environment variables required for basic deployment.

## 🎨 Customization

1. **Logo**: Replace `/public/logo.png` with your logo
2. **Colors**: Update colors in `tailwind.config.ts`
3. **Content**: Edit component files in `/components`
4. **Sponsors**: Update sponsor data in `components/sponsors.tsx`

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 18+
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Image Issues
- All images use `unoptimized` flag for static export compatibility
- Place images in `/public` directory

### Deployment Issues
- Check build logs for specific errors
- Ensure all dependencies are in package.json
- Verify configuration files are correct

## 📞 Support

For issues or questions, contact: contact@cyberutsav.xyz

## 📄 License

This project is licensed under the MIT License.
