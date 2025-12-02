# Complete Design System Reference Template
## Attijariwafa Bank HR Onboarding Platform

> **Use this file as a reference template for new Lovable projects. Copy the relevant sections to your project's `index.css` and `tailwind.config.ts` files.**

---

## 📌 Brand Assets

### Logo
```html
<img 
  src="https://upload.wikimedia.org/wikipedia/ar/b/bb/Attijariwafa_bank_logo.png" 
  alt="Attijariwafa Bank Logo" 
  className="h-20 w-auto object-contain mx-auto"
/>
```

---

## 🎨 Color Palette

### Light Mode Colors (HSL Values)

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| `--background` | `45 30% 98%` | #FDFCFA | Main background |
| `--foreground` | `220 20% 20%` | #2A3140 | Primary text |
| `--primary` | `28 85% 45%` | #D56A12 | Brand orange - buttons, links |
| `--primary-foreground` | `0 0% 100%` | #FFFFFF | Text on primary |
| `--primary-hover` | `28 85% 38%` | #B45A0F | Primary hover state |
| `--secondary` | `45 25% 92%` | #EDE8DF | Secondary surfaces |
| `--secondary-foreground` | `220 20% 25%` | #353D4D | Text on secondary |
| `--accent` | `45 30% 95%` | #F5F2EC | Accent backgrounds |
| `--accent-foreground` | `220 20% 20%` | #2A3140 | Text on accent |
| `--muted` | `45 20% 90%` | #E8E4DC | Muted backgrounds |
| `--muted-foreground` | `220 10% 50%` | #787D87 | Muted text |
| `--card` | `0 0% 100%` | #FFFFFF | Card backgrounds |
| `--card-foreground` | `220 20% 20%` | #2A3140 | Card text |
| `--border` | `45 15% 85%` | #DDD8CE | Borders |
| `--input` | `45 15% 85%` | #DDD8CE | Input borders |
| `--ring` | `28 85% 45%` | #D56A12 | Focus rings |
| `--success` | `145 65% 35%` | #1F9251 | Success states |
| `--success-foreground` | `0 0% 100%` | #FFFFFF | Text on success |
| `--warning` | `38 95% 50%` | #F9A307 | Warning states |
| `--warning-foreground` | `220 20% 15%` | #21272F | Text on warning |
| `--info` | `210 70% 50%` | #2680D9 | Info states |
| `--info-foreground` | `0 0% 100%` | #FFFFFF | Text on info |
| `--destructive` | `0 70% 50%` | #D92626 | Error/destructive |
| `--destructive-foreground` | `0 0% 100%` | #FFFFFF | Text on destructive |

### Dark Mode Colors (HSL Values)

| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| `--background` | `220 20% 12%` | #181C23 | Main background |
| `--foreground` | `45 20% 95%` | #F5F3EF | Primary text |
| `--primary` | `28 85% 50%` | #EB7A17 | Brand orange |
| `--primary-foreground` | `220 20% 10%` | #15181E | Text on primary |
| `--primary-hover` | `28 85% 55%` | #EE8A33 | Primary hover state |
| `--secondary` | `220 15% 20%` | #2A2F38 | Secondary surfaces |
| `--secondary-foreground` | `45 20% 90%` | #EBE7DF | Text on secondary |
| `--accent` | `220 15% 18%` | #262A32 | Accent backgrounds |
| `--accent-foreground` | `45 20% 95%` | #F5F3EF | Text on accent |
| `--muted` | `220 15% 25%` | #353B47 | Muted backgrounds |
| `--muted-foreground` | `45 10% 60%` | #9E9A91 | Muted text |
| `--card` | `220 15% 15%` | #1F232A | Card backgrounds |
| `--card-foreground` | `45 20% 95%` | #F5F3EF | Card text |
| `--border` | `220 15% 25%` | #353B47 | Borders |
| `--input` | `220 15% 25%` | #353B47 | Input borders |
| `--ring` | `28 85% 50%` | #EB7A17 | Focus rings |
| `--success` | `145 65% 40%` | #24A75D | Success states |
| `--warning` | `38 95% 55%` | #FAB21F | Warning states |
| `--info` | `210 70% 55%` | #3D8EDD | Info states |
| `--destructive` | `0 70% 55%` | #DD3D3D | Error/destructive |

### Sidebar Colors (Light Mode)

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--sidebar-background` | `45 30% 97%` | Sidebar bg |
| `--sidebar-foreground` | `220 20% 25%` | Sidebar text |
| `--sidebar-primary` | `28 85% 45%` | Sidebar primary |
| `--sidebar-primary-foreground` | `0 0% 100%` | Sidebar primary text |
| `--sidebar-accent` | `45 25% 92%` | Sidebar accent |
| `--sidebar-accent-foreground` | `220 20% 20%` | Sidebar accent text |
| `--sidebar-border` | `45 15% 88%` | Sidebar borders |
| `--sidebar-ring` | `28 85% 45%` | Sidebar focus |

### Sidebar Colors (Dark Mode)

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--sidebar-background` | `220 20% 10%` | Sidebar bg |
| `--sidebar-foreground` | `45 20% 90%` | Sidebar text |
| `--sidebar-primary` | `28 85% 50%` | Sidebar primary |
| `--sidebar-primary-foreground` | `220 20% 10%` | Sidebar primary text |
| `--sidebar-accent` | `220 15% 15%` | Sidebar accent |
| `--sidebar-accent-foreground` | `45 20% 95%` | Sidebar accent text |
| `--sidebar-border` | `220 15% 20%` | Sidebar borders |
| `--sidebar-ring` | `28 85% 50%` | Sidebar focus |

---

## 🌈 Gradients

### CSS Variables
```css
--gradient-primary: linear-gradient(135deg, hsl(28 85% 45%) 0%, hsl(38 90% 50%) 100%);
--gradient-warm: linear-gradient(135deg, hsl(45 30% 98%) 0%, hsl(45 25% 92%) 100%);
--gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(45 30% 98%) 100%);
```

### Dark Mode Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(28 85% 50%) 0%, hsl(38 90% 55%) 100%);
--gradient-warm: linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 15% 18%) 100%);
--gradient-card: linear-gradient(180deg, hsl(220 15% 15%) 0%, hsl(220 20% 12%) 100%);
```

### Tailwind Usage
```jsx
<div className="bg-gradient-primary">Primary gradient</div>
<div className="bg-gradient-warm">Warm gradient</div>
<div className="bg-gradient-card">Card gradient</div>
```

---

## 🔲 Shadows

### CSS Variables
```css
/* Light Mode */
--shadow-card: 0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.04);
--shadow-hover: 0 8px 24px -4px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06);
--shadow-focus: 0 0 0 3px hsla(28, 85%, 45%, 0.2);

/* Dark Mode */
--shadow-card: 0 2px 8px -2px rgba(0, 0, 0, 0.3), 0 4px 16px -4px rgba(0, 0, 0, 0.2);
--shadow-hover: 0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3);
--shadow-focus: 0 0 0 3px hsla(28, 85%, 50%, 0.3);
```

### Tailwind Usage
```jsx
<div className="shadow-card">Card shadow</div>
<div className="shadow-hover">Hover shadow</div>
<div className="shadow-focus">Focus shadow</div>
```

---

## 📐 Border Radius

### CSS Variable
```css
--radius: 0.75rem;
```

### Tailwind Classes
| Class | Value |
|-------|-------|
| `rounded-lg` | `var(--radius)` = 0.75rem |
| `rounded-md` | `calc(var(--radius) - 2px)` = 0.625rem |
| `rounded-sm` | `calc(var(--radius) - 4px)` = 0.5rem |
| `rounded-full` | 50% (circle) |
| `rounded-2xl` | 1rem |

---

## 🔘 Button Variants

### Available Variants
```jsx
<Button variant="default">Primary Button</Button>
<Button variant="gradient">Gradient Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="link">Link Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="warning">Warning Button</Button>
```

### Button Sizes
```jsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon Only</Button>
```

### Button CSS (for button.tsx)
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-hover",
        gradient: "bg-gradient-primary text-primary-foreground hover:shadow-hover shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

---

## 📝 Typography Patterns

### Headings
```jsx
<h1 className="text-3xl font-bold text-foreground">Main Heading</h1>
<h2 className="text-2xl font-semibold text-foreground">Section Heading</h2>
<h3 className="text-xl font-semibold text-foreground">Card Title</h3>
<h4 className="text-lg font-medium text-foreground">Subsection</h4>
```

### Body Text
```jsx
<p className="text-base text-foreground">Regular paragraph text</p>
<p className="text-sm text-muted-foreground">Secondary/helper text</p>
<p className="text-xs text-muted-foreground">Small caption text</p>
```

### Labels
```jsx
<Label className="text-base font-medium text-foreground">Form Label</Label>
<span className="text-sm font-medium text-muted-foreground">Meta Label</span>
```

---

## 🃏 Card Patterns

### Standard Card
```jsx
<Card className="bg-card shadow-card">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Gradient Card with Icon
```jsx
<Card className="group cursor-pointer bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
  <CardContent className="p-8 text-center space-y-6">
    <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <IconComponent className="w-10 h-10 text-white" />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-foreground">Title</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">Description</p>
    </div>
    <Button variant="gradient" size="lg" className="w-full mt-6">
      Get Started
    </Button>
  </CardContent>
</Card>
```

---

## 📱 Mobile Layout Patterns

### Full-Screen Mobile Container
```jsx
<div className="min-h-screen bg-gradient-warm flex flex-col pt-safe-area-top">
  {/* Content */}
</div>
```

### Mobile Header with Logo
```jsx
<div className="text-center px-6 pt-8 pb-6">
  <img 
    src="LOGO_URL" 
    alt="Logo" 
    className="h-16 w-auto object-contain mx-auto mb-4"
  />
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
  <p className="text-muted-foreground mt-2">Subtitle</p>
</div>
```

### Scrollable Content Area
```jsx
<div className="flex-1 px-6 pb-6 overflow-y-auto">
  {/* Scrollable content */}
</div>
```

### Mobile Input Styling
```jsx
<Input 
  className="h-14 text-lg rounded-xl border-border focus:border-primary"
/>
```

### Mobile Button
```jsx
<Button className="w-full h-14 text-lg font-semibold">
  Button Text
</Button>
```

---

## 🖥️ Desktop Layout Patterns

### Centered Card Container
```jsx
<div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
  <Card className="w-full max-w-md shadow-card">
    <CardContent className="p-8">
      {/* Content */}
    </CardContent>
  </Card>
</div>
```

### Container Constraints
```jsx
<div className="container mx-auto px-4 max-w-6xl">
  {/* Content */}
</div>
```

---

## ✨ Animation & Transitions

### Standard Transition
```jsx
<div className="transition-all duration-300">Smooth transitions</div>
```

### Hover Scale Effect
```jsx
<div className="hover:scale-105 transition-transform duration-300">
  Scales on hover
</div>
```

### Group Hover
```jsx
<div className="group">
  <div className="group-hover:scale-110 transition-transform duration-300">
    Scales when parent is hovered
  </div>
</div>
```

### Accordion Animation (tailwind.config.ts)
```typescript
keyframes: {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' }
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' }
  }
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out'
}
```

---

## ➗ Divider Pattern

### OR Divider
```jsx
<div className="relative flex items-center justify-center my-4">
  <div className="border-t border-border flex-1"></div>
  <span className="px-4 text-sm text-muted-foreground">OR</span>
  <div className="border-t border-border flex-1"></div>
</div>
```

---

## 📦 Required Dependencies

```json
{
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-label": "^2.1.0",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-tabs": "^1.1.0",
  "@radix-ui/react-accordion": "^1.2.0",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-select": "^2.1.1",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-progress": "^1.1.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.2",
  "tailwindcss-animate": "^1.0.7",
  "lucide-react": "^0.462.0",
  "react-router-dom": "^6.26.2"
}
```

---

## 📋 Complete index.css Template

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Banking-inspired warm professional palette */
    --background: 45 30% 98%;
    --foreground: 220 20% 20%;
    
    --card: 0 0% 100%;
    --card-foreground: 220 20% 20%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 20%;
    
    --primary: 28 85% 45%;
    --primary-foreground: 0 0% 100%;
    --primary-hover: 28 85% 38%;
    
    --secondary: 45 25% 92%;
    --secondary-foreground: 220 20% 25%;
    
    --muted: 45 20% 90%;
    --muted-foreground: 220 10% 50%;
    
    --accent: 45 30% 95%;
    --accent-foreground: 220 20% 20%;
    
    --destructive: 0 70% 50%;
    --destructive-foreground: 0 0% 100%;
    
    --success: 145 65% 35%;
    --success-foreground: 0 0% 100%;
    
    --warning: 38 95% 50%;
    --warning-foreground: 220 20% 15%;
    
    --info: 210 70% 50%;
    --info-foreground: 0 0% 100%;
    
    --border: 45 15% 85%;
    --input: 45 15% 85%;
    --ring: 28 85% 45%;
    
    --radius: 0.75rem;
    
    /* Professional gradients */
    --gradient-primary: linear-gradient(135deg, hsl(28 85% 45%) 0%, hsl(38 90% 50%) 100%);
    --gradient-warm: linear-gradient(135deg, hsl(45 30% 98%) 0%, hsl(45 25% 92%) 100%);
    --gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(45 30% 98%) 100%);
    
    /* Banking-themed shadows */
    --shadow-card: 0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.04);
    --shadow-hover: 0 8px 24px -4px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06);
    --shadow-focus: 0 0 0 3px hsla(28, 85%, 45%, 0.2);

    /* Sidebar */
    --sidebar-background: 45 30% 97%;
    --sidebar-foreground: 220 20% 25%;
    --sidebar-primary: 28 85% 45%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 45 25% 92%;
    --sidebar-accent-foreground: 220 20% 20%;
    --sidebar-border: 45 15% 88%;
    --sidebar-ring: 28 85% 45%;
  }

  .dark {
    --background: 220 20% 12%;
    --foreground: 45 20% 95%;
    
    --card: 220 15% 15%;
    --card-foreground: 45 20% 95%;
    
    --popover: 220 15% 15%;
    --popover-foreground: 45 20% 95%;
    
    --primary: 28 85% 50%;
    --primary-foreground: 220 20% 10%;
    --primary-hover: 28 85% 55%;
    
    --secondary: 220 15% 20%;
    --secondary-foreground: 45 20% 90%;
    
    --muted: 220 15% 25%;
    --muted-foreground: 45 10% 60%;
    
    --accent: 220 15% 18%;
    --accent-foreground: 45 20% 95%;
    
    --destructive: 0 70% 55%;
    --destructive-foreground: 0 0% 100%;
    
    --success: 145 65% 40%;
    --success-foreground: 0 0% 100%;
    
    --warning: 38 95% 55%;
    --warning-foreground: 220 20% 10%;
    
    --info: 210 70% 55%;
    --info-foreground: 0 0% 100%;
    
    --border: 220 15% 25%;
    --input: 220 15% 25%;
    --ring: 28 85% 50%;
    
    /* Dark mode gradients */
    --gradient-primary: linear-gradient(135deg, hsl(28 85% 50%) 0%, hsl(38 90% 55%) 100%);
    --gradient-warm: linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 15% 18%) 100%);
    --gradient-card: linear-gradient(180deg, hsl(220 15% 15%) 0%, hsl(220 20% 12%) 100%);
    
    /* Dark mode shadows */
    --shadow-card: 0 2px 8px -2px rgba(0, 0, 0, 0.3), 0 4px 16px -4px rgba(0, 0, 0, 0.2);
    --shadow-hover: 0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 4px 8px -2px rgba(0, 0, 0, 0.3);
    --shadow-focus: 0 0 0 3px hsla(28, 85%, 50%, 0.3);

    /* Sidebar dark */
    --sidebar-background: 220 20% 10%;
    --sidebar-foreground: 45 20% 90%;
    --sidebar-primary: 28 85% 50%;
    --sidebar-primary-foreground: 220 20% 10%;
    --sidebar-accent: 220 15% 15%;
    --sidebar-accent-foreground: 45 20% 95%;
    --sidebar-border: 220 15% 20%;
    --sidebar-ring: 28 85% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## 📋 Complete tailwind.config.ts Template

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-warm': 'var(--gradient-warm)',
        'gradient-card': 'var(--gradient-card)'
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'hover': 'var(--shadow-hover)',
        'focus': 'var(--shadow-focus)'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 🚀 How to Use This Template

1. **Create a new Lovable project**
2. **Copy the `index.css` template** to your project's `src/index.css`
3. **Copy the `tailwind.config.ts` template** to your project root
4. **Install required dependencies** using the Lovable chat
5. **Reference this document** for component patterns and styling guidelines
6. **Customize colors** by adjusting HSL values to match your brand

---

*Generated from Attijariwafa Bank HR Onboarding Platform*
*Last Updated: December 2024*
