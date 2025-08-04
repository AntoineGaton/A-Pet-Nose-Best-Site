# A Pet Nose Best - Professional Pet Care Website

A modern, responsive website for A Pet Nose Best, a premium pet care service company specializing in dog walking, pet boarding, grooming, and training services in South Florida.

## 🐾 About A Pet Nose Best

A Pet Nose Best is a professional pet care service founded by Bianca Santiago, offering comprehensive pet care solutions with a focus on personalized attention and exceptional service quality. Our team of experienced pet care professionals ensures your furry family members receive the love and care they deserve.

## 🌟 Services Offered

- **Dog Walking** - Professional walking services tailored to your pet's needs
- **Pet Boarding** - Safe and comfortable boarding in a home-like environment
- **Pet Grooming** - Complete grooming services to keep your pets looking their best
- **Pet Training** - Professional training programs for behavioral improvement
- **Pet Sitting** - In-home pet sitting services for your peace of mind

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5.3 (with Bootstrap 4 compatibility)
- **Icons**: Font Awesome 5.15
- **Animations**: CSS transitions and hover effects
- **Responsive Design**: Mobile-first approach
- **Architecture**: Component-based modular design
- **External Integrations**:
  - Picktime booking system
  - Social media platforms (Instagram, TikTok, Facebook)
  - Google Reviews (Elfsight widget)
  - Instagram feed (LightWidget)

## 📁 Project Structure

```
A-Pet-Nose-Best-Site/
├── index.html              # Main homepage (monolithic)
├── components/             # Modular HTML components
│   ├── head.html          # Meta tags, stylesheets, structured data
│   ├── navigation.html    # Header and navigation bar
│   ├── hero-carousel.html # Main slider/carousel section
│   ├── about-section.html # About us content and images
│   ├── team-section.html  # Team members and Jeff's bio modal
│   ├── services-section.html # Services grid and featured images
│   ├── why-choose-us.html # Features and benefits section
│   ├── reviews-section.html # Google reviews widget
│   ├── instagram-section.html # Instagram feed integration
│   ├── footer.html        # Footer content and copyright
│   ├── scripts.html       # JavaScript libraries and custom scripts
│   ├── contact-head.html  # Contact page meta tags and structured data
│   ├── contact-navigation.html # Contact page navigation with info bar
│   ├── contact-section.html # Contact form and Google Maps
│   └── contact-scripts.html # Contact page scripts (Maps, EmailJS)
├── css/
│   ├── style.css          # Custom styles
│   └── style.min.css      # Minified styles
├── js/
│   └── main.min.js        # Custom JavaScript
├── img/
│   ├── bianca.jpg         # Team member photos
│   ├── jeff.jpg           # Team member photos
│   ├── jeff_bio.jpg       # Jeff's bio modal photo
│   └── [other images]     # Service and gallery images
├── lib/                   # Third-party libraries
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## 🎨 Features

### Responsive Design
- Mobile-first responsive layout
- Bootstrap grid system for consistent layouts
- Optimized for all device sizes

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on team cards
- Modal popups for team member bios
- Interactive contact forms
- Social media integration

### Team Section
- Professional team member cards
- Hover effects revealing social media links
- Detailed bio modals with personal stories
- Contact information integration

### Booking Integration
- Direct integration with Picktime booking system
- Service-specific booking links
- Contact form for inquiries

## 🏗️ Component-Based Architecture

The website uses a modular component-based architecture for improved maintainability and development workflow. This approach provides:

### Benefits
- **Maintainability** - Edit individual sections independently
- **Reusability** - Components can be reused across different pages
- **Collaboration** - Multiple developers can work on different components
- **Debugging** - Easier to isolate and fix issues in specific sections
- **Version Control** - Cleaner diffs and reduced merge conflicts

### Component Details

#### Core Components (Homepage)
1. **head.html** - Meta tags, stylesheets, structured data, SEO optimization
2. **navigation.html** - Responsive header with logo, menu, and CTA button
3. **hero-carousel.html** - Bootstrap carousel with service highlights
4. **about-section.html** - Company information and feature highlights
5. **team-section.html** - Team member cards with interactive bio modal
6. **services-section.html** - Service grid with booking integration
7. **why-choose-us.html** - Benefits and competitive advantages
8. **reviews-section.html** - Google Reviews widget integration
9. **instagram-section.html** - Live Instagram feed display
10. **footer.html** - Contact information and social media links
11. **scripts.html** - JavaScript libraries and custom functionality

#### Contact Page Components
12. **contact-head.html** - Contact page specific meta tags and structured data
13. **contact-navigation.html** - Contact page navigation with contact info bar
14. **contact-section.html** - Contact form and Google Maps integration
15. **contact-scripts.html** - Contact page specific scripts (Maps API, EmailJS)

### Component Usage
- **Current Implementation**: Monolithic `index.html` file
- **Modular Components**: Available in `/components/` directory
- **Future Implementation**: Can be integrated using build tools or server-side includes

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AntoineGaton/A-Pet-Nose-Best-Site.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd A-Pet-Nose-Best-Site
   ```

3. **Open in a web browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server for better development experience

## 📱 Contact Information

- **Email**: apetnosebest@gmail.com
- **Phone**: +1 (954) 408-3625
- **Instagram**: [@apetnosebest](https://www.instagram.com/apetnosebest)
- **TikTok**: [@apetnosebest](https://www.tiktok.com/@apetnosebest)
- **Facebook**: [A Pet Nose Best](https://www.facebook.com/profile.php?id=61556928568108)

## 👥 Team

- **Bianca Santiago** - Founder & Walker
- **Jeff** - Pet Walker (Recently relocated from South Dakota with extensive animal care experience)

## 🔧 Development

### Prerequisites
- Modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, and JavaScript
- Local web server (for component development)

### Local Development
The website is built with vanilla HTML, CSS, and JavaScript, making it easy to develop locally without complex build processes.

### Component Development
For working with the modular components:

1. **Edit Individual Components**
   - Navigate to `/components/` directory
   - Edit specific component files
   - Changes are isolated and won't affect other sections

2. **Testing Components**
   - Test each component individually
   - Verify responsive behavior across devices
   - Check cross-browser compatibility
   - Validate HTML markup

3. **Integration Options**
   - **Build Tools**: Use Webpack, Gulp, or Parcel for production builds
   - **Server-Side**: Implement PHP includes or similar server-side technology
   - **Static Generation**: Use static site generators like Jekyll or Hugo

### Maintenance Benefits

#### Easy Updates
- **Navigation Changes**: Edit only `navigation.html`
- **Footer Updates**: Modify only `footer.html`
- **Team Information**: Update only `team-section.html`
- **Service Changes**: Edit only `services-section.html`

#### Content Management
- Non-technical users can edit specific components
- Reduced risk of breaking other sections
- Version control friendly with cleaner diffs
- Individual component caching possibilities

## 📄 License

This project is proprietary and belongs to A Pet Nose Best. All rights reserved.

## 🎯 Best Practices

### Component Guidelines
1. **Keep components focused** - Each should have a single responsibility
2. **Make them reusable** - Avoid hard-coded values when possible
3. **Maintain consistency** - Use consistent naming and structure
4. **Document changes** - Update documentation when adding new components

### File Organization
- Use descriptive filenames
- Group related components
- Keep components small and focused
- Maintain consistent indentation

## 🔮 Future Enhancements

### Planned Improvements
1. **Template Variables** - Add dynamic content support
2. **Component Library** - Create reusable UI components
3. **Build Process** - Implement automated compilation
4. **Testing Suite** - Add automated component testing
5. **Performance Optimization** - Implement lazy loading and caching

### Advanced Features
- Component versioning system
- A/B testing capabilities
- Dynamic content loading
- Multi-language support
- Theme switching functionality

## 🤝 Contributing

This is a private business website. For any updates or changes, please contact the development team.

### Development Workflow
1. Create feature branch from main
2. Make changes to relevant components
3. Test thoroughly across devices and browsers
4. Submit pull request with detailed description
5. Code review and approval process
6. Merge to main and deploy

## 📞 Support

For questions about the website, component system, or modifications needed, contact:
- **Development Team**: Antoine Gaton
- **Business Owner**: Bianca Santiago (apetnosebest@gmail.com)

---

*Made with ❤️ for our furry friends by A Pet Nose Best*
*Component architecture designed for maintainability and developer experience*
