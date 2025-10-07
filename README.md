# Ion Think

## Project Structure

```
app/
├── components/           # Reusable components
│   ├── ui/              # Base UI components (Button, Card, Input, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── dropdown-menu.tsx
│   ├── Header.tsx       # Site header with navigation
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AboutSection.tsx # About/company values section
│   ├── ServicesSection.tsx # Services grid
│   ├── ContactSection.tsx  # Contact form and info
│   ├── Footer.tsx       # Site footer
│   ├── AtomAnimation.tsx    # Animated atom graphic
│   ├── ConstellationEffect.tsx # Canvas constellation background
│   └── FloatingButtons.tsx  # WhatsApp and scroll-to-top buttons
├── contexts/            # React context providers
│   ├── ThemeContext.tsx     # Dark/Light theme management
│   └── LanguageContext.tsx  # Multi-language support (PT-BR, EN, ES, DE, JP)
├── globals.css          # Global styles with custom animations
├── layout.tsx           # Root layout with providers
└── page.tsx             # Main homepage

### UI Components (app/components/ui/)

These are the base components that can be reused throughout the app:

- **Button** - Customizable button with variants (default, outline, ghost) and sizes
- **Card** - Container component for grouped content
- **Input** - Form input with consistent styling
- **Textarea** - Multi-line text input
- **Label** - Form label component
- **DropdownMenu** - Accessible dropdown menu system

Example usage:
```tsx
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

<Button variant="outline" size="lg">
  Click Me
</Button>

<Card>
  <CardContent className="p-6">
    Content here
  </CardContent>
</Card>
```

### Section Components (app/components/)

Reusable page sections:

- **Header** - Use anywhere you need navigation
- **Footer** - Use at the bottom of any page
- **FloatingButtons** - WhatsApp and scroll buttons

### Visual Components

- **AtomAnimation** - Animated atom graphic
- **ConstellationEffect** - Animated canvas background

## Context Providers

### ThemeContext

Manages dark/light theme:

```tsx
import { useTheme } from '@/app/contexts/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

### LanguageContext

Manages translations:

```tsx
import { useLanguage } from '@/app/contexts/LanguageContext';

const { t, language, changeLanguage } = useLanguage();

// Use translations
<h1>{t('hero.title1')}</h1>

// Change language
<button onClick={() => changeLanguage('en')}>English</button>
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

### Colors

The project uses a slate/gray color scheme. To change:
- Edit `app/globals.css` CSS variables under `:root` and `.dark`
- Update Tailwind classes in components (e.g., `bg-slate-800` → `bg-blue-800`)

### Adding New Languages

1. Open `app/contexts/LanguageContext.tsx`
2. Add your language code to the `translations` object
3. Add the language to the `languages` array in the provider

### Creating New Pages

1. Create a new route folder in `app/`
2. Add your page components
3. Reuse existing components from `app/components/`
4. Wrap with providers if needed (in root layout)

Example new page:
```tsx
// app/about/page.tsx
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { isDark } = useTheme();
  
  return (
    <div className={isDark ? 'bg-slate-900' : 'bg-white'}>
      <Header />
      {/* Your content */}
      <Footer />
    </div>
  );
}
```