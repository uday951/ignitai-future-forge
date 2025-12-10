# 🚀 Quick Start - Premium UI

## ⚡ Get Started in 3 Steps

### 1️⃣ Install & Run
```bash
npm install
npm run dev
```

### 2️⃣ View Your Premium Website
Open: `http://localhost:5173`

### 3️⃣ Build for Production
```bash
npm run build
```

---

## 🎨 Quick Component Usage

### Button
```tsx
import PremiumButton from '@/components/premium/PremiumButton';

<PremiumButton variant="primary" size="lg">
  Click Me
</PremiumButton>
```

### Card
```tsx
import PremiumCard from '@/components/premium/PremiumCard';

<PremiumCard>
  <h3>Title</h3>
  <p>Content</p>
</PremiumCard>
```

### Curved Section
```tsx
import CurvedSection from '@/components/premium/CurvedSection';

<CurvedSection curveTop curveBottom>
  Content
</CurvedSection>
```

---

## 🎯 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Index.tsx` | Main page with all sections |
| `src/components/premium/` | Reusable premium components |
| `tailwind.config.ts` | Design system colors |
| `src/index.css` | Global styles |

---

## 🎨 Color Palette

```css
/* Light Mode */
Background: #F7F7F9
Card: #FFFFFF
Text: #0F0F0F
Accent: #6B4EFF

/* Dark Mode */
Background: #0F0F0F
Card: #1A1A1A
Text: #FFFFFF
Accent: #8B5CFF
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

---

## ✨ Animations

```tsx
className="animate-fade-in"     // Fade in
className="animate-slide-up"    // Slide up
className="animate-scale-in"    // Scale in

// With delay
style={{ animationDelay: '0.2s' }}
```

---

## 🔧 Common Tasks

### Change Primary Color
**File**: `tailwind.config.ts`
```typescript
purple: {
  500: '#YOUR_COLOR',
}
```

### Add Spline 3D
```tsx
<spline-viewer 
  url="https://prod.spline.design/YOUR_ID/scene.splinecode"
  className="w-full h-full"
/>
```

### Create New Section
```tsx
<section className="py-32 bg-premium-50 dark:bg-premium-900">
  <div className="max-w-7xl mx-auto px-4">
    {/* Your content */}
  </div>
</section>
```

---

## 📚 Full Documentation

- **Complete Guide**: `PREMIUM_REDESIGN.md`
- **Summary**: `REDESIGN_SUMMARY.md`
- **This File**: `QUICK_START.md`

---

## ✅ Everything Works!

- ✅ All backend APIs
- ✅ Form submissions
- ✅ Database connections
- ✅ File uploads
- ✅ Authentication

**No backend changes needed!**

---

## 🎉 You're Ready!

Your premium website is fully functional and production-ready.

**Start developing**: `npm run dev`
