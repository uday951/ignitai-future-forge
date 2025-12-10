# 🧩 Component Guide - Premium UI

## 📚 Complete Component Reference

All premium components with usage examples and props.

---

## 🎨 Premium Components

### 1. PremiumButton

**Location**: `src/components/premium/PremiumButton.tsx`

#### Props
```typescript
interface PremiumButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  // ...all button HTML attributes
}
```

#### Usage Examples

**Primary Button**
```tsx
import PremiumButton from '@/components/premium/PremiumButton';

<PremiumButton variant="primary" size="lg">
  Get Started
</PremiumButton>
```

**Secondary Button**
```tsx
<PremiumButton variant="secondary" size="md">
  Learn More
</PremiumButton>
```

**Ghost Button**
```tsx
<PremiumButton variant="ghost" size="sm">
  Cancel
</PremiumButton>
```

**With Icon**
```tsx
import { ArrowRight } from 'lucide-react';

<PremiumButton>
  Continue
  <ArrowRight className="w-5 h-5" />
</PremiumButton>
```

#### Variants

| Variant | Style | Use Case |
|---------|-------|----------|
| `primary` | Purple gradient | Main actions |
| `secondary` | White/bordered | Secondary actions |
| `ghost` | Transparent | Tertiary actions |

#### Sizes

| Size | Padding | Text Size | Use Case |
|------|---------|-----------|----------|
| `sm` | px-4 py-2 | text-sm | Compact spaces |
| `md` | px-6 py-3 | text-base | Standard |
| `lg` | px-8 py-4 | text-lg | Hero sections |

---

### 2. PremiumCard

**Location**: `src/components/premium/PremiumCard.tsx`

#### Props
```typescript
interface PremiumCardProps {
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
  // ...all div HTML attributes
}
```

#### Usage Examples

**Basic Card**
```tsx
import PremiumCard from '@/components/premium/PremiumCard';

<PremiumCard>
  <h3 className="text-2xl font-bold mb-4">Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Content</p>
</PremiumCard>
```

**Card Without Hover**
```tsx
<PremiumCard hover={false}>
  Static content
</PremiumCard>
```

**Card with Custom Styling**
```tsx
<PremiumCard className="bg-gradient-to-br from-purple-50 to-blue-50">
  Gradient background
</PremiumCard>
```

#### Features
- ✅ Rounded 3xl corners
- ✅ Soft shadows
- ✅ Hover elevation (optional)
- ✅ Dark mode support
- ✅ Responsive padding

---

### 3. CurvedSection

**Location**: `src/components/premium/CurvedSection.tsx`

#### Props
```typescript
interface CurvedSectionProps {
  curveTop?: boolean;
  curveBottom?: boolean;
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
  // ...all section HTML attributes
}
```

#### Usage Examples

**Section with Top Curve**
```tsx
import CurvedSection from '@/components/premium/CurvedSection';

<CurvedSection curveTop>
  <div className="max-w-7xl mx-auto px-4">
    Content
  </div>
</CurvedSection>
```

**Section with Both Curves**
```tsx
<CurvedSection curveTop curveBottom bgColor="bg-premium-50 dark:bg-premium-900">
  Content
</CurvedSection>
```

**Custom Background**
```tsx
<CurvedSection 
  curveBottom 
  bgColor="bg-gradient-to-br from-purple-50 to-blue-50"
>
  Content
</CurvedSection>
```

#### Features
- ✅ SVG curved dividers
- ✅ Top and/or bottom curves
- ✅ Customizable background
- ✅ Smooth transitions
- ✅ Dark mode support

---

## 📦 Premium Sections

### 1. PremiumHero

**Location**: `src/components/PremiumHero.tsx`

#### Features
- Spline 3D background
- Gradient orbs
- Premium badge
- Large heading with gradient
- CTA buttons
- Stats grid
- Curved bottom divider

#### Usage
```tsx
import PremiumHero from '@/components/PremiumHero';

<PremiumHero />
```

#### Customization
```tsx
// Edit the Spline URL
<spline-viewer 
  url="YOUR_SPLINE_URL"
  className="w-full h-full"
/>

// Edit stats
const stats = [
  { value: '20+', label: 'Students' },
  // ...
];
```

---

### 2. PremiumAbout

**Location**: `src/components/PremiumAbout.tsx`

#### Features
- 4-column feature grid
- Icon-based cards
- Stats showcase
- Smooth animations
- Hover effects

#### Usage
```tsx
import PremiumAbout from '@/components/PremiumAbout';

<PremiumAbout />
```

#### Customization
```tsx
// Edit features
const features = [
  { 
    icon: Users, 
    title: 'Expert Mentors', 
    desc: 'Description' 
  },
  // ...
];
```

---

### 3. PremiumCourses

**Location**: `src/components/PremiumCourses.tsx`

#### Features
- Course cards with pricing
- Tech stack badges
- AI Quiz integration
- Stats showcase
- Enrollment links

#### Usage
```tsx
import PremiumCourses from '@/components/PremiumCourses';

<PremiumCourses />
```

#### Customization
```tsx
// Edit courses
const courses = [
  {
    id: "frontend",
    name: "Frontend Development",
    originalPrice: 1599,
    offerPrice: 699,
    features: [...],
    techStack: [...]
  },
  // ...
];
```

---

### 4. PremiumServices

**Location**: `src/components/PremiumServices.tsx`

#### Features
- 5 service cards
- Curved section dividers
- Feature lists
- Gradient icon backgrounds
- Hover effects

#### Usage
```tsx
import PremiumServices from '@/components/PremiumServices';

<PremiumServices />
```

#### Customization
```tsx
// Edit services
const services = [
  {
    icon: BookOpen,
    title: 'AI + Full Stack Training',
    desc: 'Description',
    features: [...]
  },
  // ...
];
```

---

### 5. PremiumProjects

**Location**: `src/components/PremiumProjects.tsx`

#### Features
- Large project showcase
- Tech stack display
- Live demo & code links
- Builder attribution
- Curved dividers

#### Usage
```tsx
import PremiumProjects from '@/components/PremiumProjects';

<PremiumProjects />
```

#### Customization
```tsx
// Edit project
const project = {
  title: "Project Name",
  description: "Description",
  tech: [...],
  live: "URL",
  code: "URL"
};
```

---

### 6. PremiumTestimonials

**Location**: `src/components/PremiumTestimonials.tsx`

#### Features
- Elegant carousel
- Star ratings
- LinkedIn integration
- Navigation controls
- Stats integration
- API integration

#### Usage
```tsx
import PremiumTestimonials from '@/components/PremiumTestimonials';

<PremiumTestimonials />
```

#### API Integration
Fetches from: `${VITE_API_URL}/api/feedback`

---

### 7. PremiumFooter

**Location**: `src/components/PremiumFooter.tsx`

#### Features
- Clean contact form
- Rounded inputs
- Icon-based contact info
- Social links
- Minimal bottom bar
- API integration

#### Usage
```tsx
import PremiumFooter from '@/components/PremiumFooter';

<PremiumFooter />
```

#### API Integration
Posts to: `${VITE_API_URL}/api/contact`

---

## 🎨 Common Patterns

### Section Layout
```tsx
<section className="py-32 bg-premium-50 dark:bg-premium-900">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
          Section Title
        </span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">
        Description
      </p>
    </div>
    
    {/* Content */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, i) => (
    <PremiumCard key={i}>
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
        <item.icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
    </PremiumCard>
  ))}
</div>
```

### Gradient Text
```tsx
<h2 className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-200 bg-clip-text text-transparent">
  Gradient Text
</h2>
```

### Icon Background
```tsx
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
  <Icon className="w-7 h-7 text-white" />
</div>
```

---

## 🎯 Best Practices

### Spacing
```tsx
// Section spacing
className="py-32"

// Container
className="max-w-7xl mx-auto px-4"

// Grid gaps
className="gap-8"

// Margin bottom
className="mb-20"
```

### Typography
```tsx
// Large heading
className="text-4xl md:text-6xl font-bold"

// Subheading
className="text-xl text-gray-600 dark:text-gray-400"

// Body text
className="text-gray-600 dark:text-gray-400 leading-relaxed"
```

### Colors
```tsx
// Background
className="bg-premium-50 dark:bg-premium-900"

// Card background
className="bg-white dark:bg-premium-950"

// Text
className="text-gray-900 dark:text-white"

// Muted text
className="text-gray-600 dark:text-gray-400"

// Accent
className="text-purple-600 dark:text-purple-400"
```

### Animations
```tsx
// Fade in
className="animate-fade-in"

// Slide up
className="animate-slide-up"

// Scale in
className="animate-scale-in"

// With delay
style={{ animationDelay: '0.2s' }}
```

---

## 📱 Responsive Patterns

### Grid Responsive
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

### Text Responsive
```tsx
className="text-4xl md:text-6xl"
```

### Spacing Responsive
```tsx
className="py-20 md:py-32"
```

### Flex Responsive
```tsx
className="flex flex-col md:flex-row gap-4"
```

---

## 🎨 Color Reference

### Backgrounds
```css
bg-premium-50      /* Light mode background */
bg-premium-900     /* Dark mode background */
bg-premium-950     /* Dark mode card */
bg-white           /* Light mode card */
```

### Text
```css
text-gray-900      /* Light mode heading */
text-white         /* Dark mode heading */
text-gray-600      /* Light mode body */
text-gray-400      /* Dark mode body */
```

### Accents
```css
text-purple-600    /* Light mode accent */
text-purple-400    /* Dark mode accent */
bg-purple-500      /* Accent background */
```

---

## 🚀 Quick Reference

### Import Components
```tsx
import PremiumButton from '@/components/premium/PremiumButton';
import PremiumCard from '@/components/premium/PremiumCard';
import CurvedSection from '@/components/premium/CurvedSection';
```

### Basic Usage
```tsx
<PremiumCard>
  <h3>Title</h3>
  <p>Content</p>
  <PremiumButton>Action</PremiumButton>
</PremiumCard>
```

### With Animation
```tsx
<PremiumCard className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
  Content
</PremiumCard>
```

---

**All components are production-ready and fully documented!** 🎉
