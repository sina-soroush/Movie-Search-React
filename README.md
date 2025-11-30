# 🎬 Movie Search React App

A stunning, modern movie search application built with React and the IMDB API. Features an Aurora Borealis animated background, glassmorphism effects, 3D flipping movie cards, and instant search functionality.

![Movie Search App](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🔗 Preview

You can view the live version of this project here:

👉 weather-display-react.netlify.app [(https://moviesearchreact-app.netlify.app/)](https://movie-search-react-red.vercel.app/)


<img width="1920" height="914" alt="Movie-Search-App" src="https://github.com/user-attachments/assets/aefd325a-a76d-4eac-9739-b2bdd412860a" />


## ✨ Features

- 🌌 **Aurora Borealis Background** - Mesmerizing animated gradient background
- 🔍 **Instant Search** - Real-time movie search with debouncing (500ms delay)
- 🎴 **3D Flip Cards** - Interactive parallax flipping cards on hover
- 💎 **Glassmorphism Design** - Frosted glass effect on hero content section
- 🎨 **Custom Typography** - Beautiful Giroud font for title
- 📱 **Fully Responsive** - Optimized for desktop (4 cards) and mobile (2 cards)
- ⚡ **Lightning Fast** - Powered by Vite for optimal performance
- 🎯 **Default Movies** - Loads 4 iconic movies on page load (Gladiator, Godfather, LOTR, Snatch)
- 💫 **Animated Underline** - Elegant search input with static underline
- 🎭 **Movie Details** - Flip cards to see title, year, type, and actors

## 📁 Project Structure

```
Movie-Search-React/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with search and movie grid
│   │   ├── Hero.css           # Hero section styles with aurora background
│   │   ├── MovieCard.jsx      # 3D flipping movie card component
│   │   └── MovieCard.css      # Movie card styles with flip animation
│   ├── fonts/
│   │   ├── GiroudfreeRegular-WyMrO.otf  # Custom title font
│   │   └── TheGodfather-rgRK.ttf        # Alternative font
│   ├── App.jsx                # Main App component with API logic
│   ├── App.css                # App layout styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── .gitignore                 # Git ignore file
├── index.html                 # HTML template with liquid glass loader
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sina-soroush/Movie-Search-React.git
   cd Movie-Search-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173/`
   - The app will display 4 default movies (Gladiator, Godfather, Lord of the Rings, Snatch)
   - Start typing to search for any movie!

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 How It Works

### Hero Section
- **Aurora Borealis Background**: Multiple layered radial gradients with smooth animations creating northern lights effect
- **Glassmorphism Container**: Frosted glass effect with backdrop blur and light reflections
- **Custom Font**: Giroud font applied to the main title with gradient text effect
- **Instant Search**: Type in the search bar and results appear after 500ms (debounced)
- **Search Button**: Click to trigger immediate search

### Movie Cards (3D Flip Animation)
- **Front Side**: Displays movie poster with subtle gradient overlay
- **Back Side**: Shows movie details (title, year, type, actors) with brown gradient background
- **Hover Effect**: Card flips 180° with smooth 3D transform animation
- **Touch Support**: Tap to flip on mobile devices
- **Grid Layout**: 4 cards per row on desktop, 2 per row on mobile

### API Integration
- Uses IMDB API (https://imdb.iamidiotareyoutoo.com/search)
- No API key required - completely free
- Fetches movie data including poster, title, year, actors, and type
- Results sorted by latest year and limited to 4 movies per search
- Default movies loaded on page load

## 🛠️ Technologies Used

- **React 18.2.0** - Modern UI library with hooks
- **Vite 5.0.8** - Next-generation frontend build tool
- **IMDB API** - Free movie database (no API key required)
- **CSS3** - Advanced styling with:
  - Glassmorphism effects
  - 3D transforms and animations
  - Aurora borealis gradient animations
  - Custom fonts (@font-face)
  - Responsive grid layouts
- **ES6+** - Modern JavaScript with async/await

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Laptops and desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎯 Key Components

### `App.jsx`
Main application component handling:
- State management for search, movies, loading, and errors
- API integration with IMDB database
- Debounced search functionality (500ms delay)
- Default movie loading (Gladiator, Godfather, LOTR, Snatch)
- Sorting and limiting results to 4 movies

### `Hero.jsx`
Hero section component featuring:
- Aurora borealis animated background
- Glassmorphism content container
- Search form with instant search
- Movie grid display
- Loading and error states
- Responsive layout

### `MovieCard.jsx`
3D flipping card component with:
- Front side: Movie poster with gradient overlay
- Back side: Movie details (title, year, type, actors)
- Smooth 180° flip animation on hover
- Touch support for mobile devices
- Brown gradient background on back side

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (default: http://localhost:5173) |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Customization

### Change Aurora Background Colors

Edit `src/components/Hero.css` and modify the aurora gradient colors:

```css
.hero-background::before {
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(96, 165, 250, 0.4) 0%, transparent 50%),
    /* Add or modify gradient colors here */
}
```

### Change Movie Card Back Color

Edit `src/components/MovieCard.css`:

```css
.card-back {
  background: linear-gradient(197deg, #3E2723, #5D4037); /* Brown gradient */
}
```

### Change Default Movies

Edit `src/App.jsx` and modify the titles array:

```javascript
const titles = ['Gladiator', 'Godfather', 'Lord of the Rings', 'Snatch']
```

### Change Title Font

Replace the font file in `src/fonts/` and update `src/components/Hero.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('../fonts/YourFont.otf') format('opentype');
}
```

## 🐛 Troubleshooting

### Movies not loading on page load
- Check your internet connection
- Open browser console (F12) to see any API errors
- The API may be temporarily unavailable - try again in a few moments

### Search not working
- Ensure you're typing at least one character
- Wait 500ms after typing (debounce delay)
- Check browser console for errors

### Cards not flipping
- Ensure you're hovering over the card (desktop)
- On mobile, tap directly on the card
- Check if CSS 3D transforms are supported in your browser

### Font not loading
- Verify font files exist in `src/fonts/` directory
- Check browser console for 404 errors
- Ensure @font-face path is correct in Hero.css

## 🚀 Future Enhancements

- [ ] Add movie detail modal with full information
- [ ] Implement pagination for search results
- [ ] Add filters (genre, year, rating)
- [ ] Include trailers and reviews
- [ ] Save favorite movies to local storage
- [ ] Add dark/light theme toggle
- [ ] Implement advanced search options
- [ ] Add loading skeleton screens

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [IMDB API](https://imdb.iamidiotareyoutoo.com/) for providing free movie database access
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [React](https://react.dev/) for the powerful UI library
- Font: Giroud Free by [designer name]
- Inspired by modern glassmorphism and 3D card designs

## 👨‍💻 Author

**Sina Soroush**
- GitHub: [@sina-soroush](https://github.com/sina-soroush)
- Repository: [Movie-Search-React](https://github.com/sina-soroush/Movie-Search-React)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Happy Movie Searching! 🎬🍿**
