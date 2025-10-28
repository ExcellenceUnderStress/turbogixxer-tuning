# TurboGixxer Tuning Color System

This document describes the modernized color palette for the TurboGixxer Tuning website, designed to convey precision, performance, and reliability through muted metallic tones and cool blues.

## Core Brand Palette

These are the primary brand colors that define the TurboGixxer identity:

| Role | Color | Hex | CSS Variable | Use |
|------|-------|-----|--------------|-----|
| Primary | ![#1C6C8C](https://via.placeholder.com/15/1C6C8C/000000?text=+) | `#1C6C8C` | `--primary` | Buttons, CTAs, accents |
| Secondary | ![#11768C](https://via.placeholder.com/15/11768C/000000?text=+) | `#11768C` | `--secondary` | Hover states, dividers |
| Neutral Light | ![#C5D3D9](https://via.placeholder.com/15/C5D3D9/000000?text=+) | `#C5D3D9` | `--neutral-light` | Backgrounds, cards |
| Neutral Dark | ![#0D0D0D](https://via.placeholder.com/15/0D0D0D/000000?text=+) | `#0D0D0D` | `--neutral-dark` | Text, headers |
| Accent | ![#80ADBF](https://via.placeholder.com/15/80ADBF/000000?text=+) | `#80ADBF` | `--accent` | Icons, borders, subtle highlights |

## Extended System Colors

Additional colors for comprehensive UI depth:

| Role | Hex | CSS Variable | Use |
|------|-----|--------------|-----|
| Background | `#F7F9FA` | `--background` | Global background |
| Card Background | `#FFFFFF` | `--card-background` | Panels, modals |
| Text Primary | `#111111` | `--text-primary` | Headings |
| Text Secondary | `#4B5563` | `--text-secondary` | Body copy |
| Success | `#1DA1A3` | `--success` | Confirmations, "active" states |
| Warning | `#F6B73C` | `--warning` | Alerts, pending status |
| Error | `#D64545` | `--error` | Validation, delete actions |

## Gradients

Modern gradient combinations for enhanced visual depth:

### Primary UI Gradient
```css
background: var(--gradient-primary);
/* linear-gradient(135deg, #1C6C8C, #11768C) */
```
**Use:** Hero sections, feature highlights, primary CTAs

### Metallic Detail Gradient
```css
background: var(--gradient-metallic);
/* linear-gradient(90deg, #E5E7EB, #C5D3D9, #9CA3AF) */
```
**Use:** Dividers, card borders, subtle backgrounds

### Dark Mode Accent
```css
background: var(--gradient-dark-accent);
/* linear-gradient(135deg, #0D0D0D, #1C6C8C) */
```
**Use:** Dark mode headers, premium sections

## Optional High-Contrast Accents

For special emphasis (use sparingly):

| Color | Hex | CSS Variable | Use |
|-------|-----|--------------|-----|
| Vivid Orange | `#FF6F3C` | `--accent-vivid-orange` | Highlight buttons, notifications |
| Neon Cyan | `#00E0D0` | `--accent-neon-cyan` | Dashboard accents, data visualization |

## Usage Examples

### CSS Variables
```css
/* Use CSS variables directly */
.button {
  background-color: var(--primary);
  color: white;
}

.button:hover {
  background-color: var(--secondary);
}
```

### Tailwind CSS Classes
```tsx
// Core brand colors
<button className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white">
  Book Now
</button>

// Utility classes
<div className="card">
  <h2 className="text-[var(--text-primary)]">Title</h2>
  <p className="text-[var(--text-secondary)]">Body text</p>
</div>

// Status colors
<span className="text-success">Active</span>
<span className="text-warning">Pending</span>
<span className="text-error">Error</span>

// Gradients
<div className="gradient-primary p-8 text-white">
  Hero Section
</div>
```

### Utility Classes Available

The following utility classes are predefined in `globals.css`:

#### Buttons
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

#### Cards
- `.card` - Card container with background and border

#### Gradients
- `.gradient-primary` - Primary UI gradient
- `.gradient-metallic` - Metallic detail gradient
- `.gradient-dark-accent` - Dark mode accent gradient

#### Status Colors
- `.text-success`, `.bg-success`
- `.text-warning`, `.bg-warning`
- `.text-error`, `.bg-error`

## Dark Mode

The color system includes automatic dark mode support. Colors will adjust when the user's system preference is set to dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --card-background: #111111;
    --text-primary: #ededed;
    --text-secondary: #C5D3D9;
    --neutral-light: #1a1a1a;
  }
}
```

## Design Philosophy

The color palette embodies:
- **Muted metallic tones** - Professional, premium feel
- **Soft cool blues** - Precision and technical excellence
- **High contrast** - Excellent readability and accessibility
- **Modern gradients** - Contemporary design aesthetic

This creates a visual identity that communicates precision, performance, and reliability - perfect for a professional tuning service.

## Implementation Notes

- All colors are defined as CSS variables in `app/globals.css`
- Tailwind CSS v4 uses the `@theme inline` directive for color integration
- Colors are accessible throughout the application via CSS variables
- Gradients are pre-defined for consistent application
- Dark mode support is built-in and automatic

## Color Accessibility

When using these colors, ensure proper contrast ratios:
- **Text on Primary** (`#1C6C8C`): Use white text
- **Text on Secondary** (`#11768C`): Use white text
- **Text on Neutral Light** (`#C5D3D9`): Use dark text
- **Text on Backgrounds**: `--text-primary` for headings, `--text-secondary` for body

Always test color combinations for WCAG AA compliance (4.5:1 for normal text, 3:1 for large text).
