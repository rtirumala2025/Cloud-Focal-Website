# Cloud Focal Website

A modern, professional React.js website for Cloud Focal, a technology staffing and IT consulting company. Built with React, Tailwind CSS, and Framer Motion for smooth animations and interactions.

## 🚀 Features

- **Modern Design**: Clean, professional design with modern UI/UX principles
- **Responsive**: Mobile-first approach with responsive design across all devices
- **Performance Optimized**: Fast loading times with optimized components and lazy loading
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Animations**: Smooth animations and transitions using Framer Motion
- **Theme Support**: Light/dark mode support with theme context
- **Form Validation**: Comprehensive form validation with error handling
- **State Management**: Context API for global state management

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Yup validation
- **SEO**: React Helmet
- **Icons**: Heroicons (SVG)
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── assets/
│   ├── data/           # JSON data files
│   ├── images/         # Image assets
│   └── index.css       # Global styles
├── components/
│   ├── common/         # Reusable components
│   └── ui/            # UI components
├── context/           # React Context providers
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── sections/          # Section components
├── services/          # API and utility services
└── App.jsx           # Main App component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/cloudfocal-website.git
cd cloudfocal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Building for Production

```bash
npm run build
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero section, services overview, and testimonials
- **About** (`/about`) - Company information, leadership team, and values
- **Services** (`/services`) - Overview of all services
- **Technology Staffing** (`/services/technology-staffing`) - Detailed staffing services
- **IT Consulting** (`/services/it-consulting`) - Consulting services details
- **Integration Services** (`/services/integration-services`) - System integration services
- **Industries** (`/industries`) - Industry-specific solutions
- **Case Studies** (`/case-studies`) - Success stories and client testimonials
- **Careers** (`/careers`) - Job listings and company culture
- **Resources** (`/resources`) - Blog, whitepapers, and downloads
- **Contact** (`/contact`) - Contact form and company information

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Gray (#64748b) - Supporting text and elements
- **Accent**: Light Blue (#0ea5e9) - Highlights and CTAs
- **Success**: Green (#22c55e) - Success states
- **Warning**: Yellow (#f59e0b) - Warning states
- **Error**: Red (#ef4444) - Error states

### Typography
- **Headings**: Poppins (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium, Semi-bold)

### Spacing
- Consistent spacing scale using Tailwind's spacing utilities
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. Custom colors, fonts, and animations are defined here.

### Environment Variables
Create a `.env` file in the root directory for environment-specific configuration:

```env
REACT_APP_API_URL=your-api-url
REACT_APP_GA_TRACKING_ID=your-google-analytics-id
```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with mobile hamburger menu
- Flexible grid layouts that adapt to screen size
- Optimized images and content for different devices
- Touch-friendly interactions for mobile devices

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🚀 Performance

- Lazy loading for images and components
- Optimized bundle size
- Efficient re-renders with React.memo
- Code splitting with React.lazy
- Service worker for caching (if needed)

## 📊 SEO

- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Canonical URLs
- Robots.txt configuration

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📦 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the React app
3. Deploy with default settings

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload build folder to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@cloudfocal.com
- Phone: +1 (555) 123-4567
- Website: https://cloudfocal.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Icon library
- [React Hook Form](https://react-hook-form.com/) - Form library

---

Built with ❤️ by the Cloud Focal team
# Cloud-Focal-Website
