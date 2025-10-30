# ✨ Ahmad Shah Rahmani - Portfolio Website

A stunning, modern portfolio website featuring glassmorphism design, smooth animations, and a responsive layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Motion](https://img.shields.io/badge/Motion-Animations-purple)

## 🎨 Features

- **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- **Dark Mode** - Toggle between light and dark themes with persistent preference
- **Smooth Animations** - Powered by Motion (formerly Framer Motion)
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **Interactive Elements** - Hover effects, scroll animations, and transitions
- **Gradient Accents** - Beautiful color gradients throughout
- **Fast Performance** - Optimized build with Vite
- **SEO Ready** - Semantic HTML and meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/yourusername.github.io.git

# Navigate to project directory
cd yourusername.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky navigation bar
│   │   ├── Hero.tsx           # Hero section with animated background
│   │   ├── About.tsx          # About me section
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Education.tsx      # Education history
│   │   ├── Projects.tsx       # Featured projects
│   │   ├── Skills.tsx         # Skills and expertise
│   │   ├── Awards.tsx         # Awards and achievements
│   │   ├── Contact.tsx        # Contact information
│   │   └── Footer.tsx         # Footer with social links
│   ├── styles/
│   │   └── globals.css        # Global styles and animations
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── public/                    # Public assets
├── index.html                 # HTML template
├── package.json              # Dependencies
└── vite.config.ts            # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- Contact information
- Work experience
- Education details
- Projects
- Skills
- Awards

### Change Colors

The portfolio uses gradient color schemes. You can modify them in each component by changing the Tailwind gradient classes:

```tsx
// Example gradient classes
from-purple-500 to-blue-500    // Purple to blue
from-green-500 to-emerald-500  // Green to emerald
from-orange-500 to-red-500     // Orange to red
```

### Modify Animations

Animations are controlled using Motion. Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions on deploying to GitHub Pages.

### Quick Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Your site will be live at `https://yourusername.github.io`

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion** - Animation library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Contact

Ahmad Shah Rahmani

- Email: ahmadshahrh@gmail.com
- Instagram: [@iam_ahmad_rh](https://www.instagram.com/iam_ahmad_rh/)
- Website: [ahmadshahr.wordpress.com](https://ahmadshahr.wordpress.com)
- Location: Moscow, Russia

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Motion](https://motion.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Ahmad Shah Rahmani**

If you found this project helpful, please consider giving it a ⭐!