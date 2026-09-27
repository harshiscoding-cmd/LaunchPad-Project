# Design System: LaunchPad

> **Stitch Project:** LaunchPad  
> **Resource ID:** `projects/6492692640678875780`  
> **Project Type:** `PROJECT_DESIGN`  
> **Origin:** `STITCH`  
> **Version:** 1.0.0  
> **Generated:** September 2026

---

## 1. Visual Theme & Philosophy

**LaunchPad** embodies a high-velocity, futuristic cockpit aesthetic tailored for builders, creators, and engineers. The visual identity merges:
- **Atmospheric Depth:** Deep space obsidian backgrounds (`#0B0F19`) layered with subtle cosmic gradients and glassmorphism.
- **Electric Accentuation:** High-energy indigo and electric cyan to evoke propulsion, speed, and precision.
- **Crisp Geometry:** Modern rounded geometry (12px standard) paired with fine border highlights and glow effects.

---

## 2. Color Palette

### 2.1 Core Brand Colors

| Token Name | Hex Code | HSL | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#6366F1` | `hsl(239, 84%, 67%)` | Primary brand color, hero CTAs, active indicators |
| `--color-primary-hover` | `#4F46E5` | `hsl(243, 75%, 59%)` | Interactive hover state for primary elements |
| `--color-primary-glow` | `rgba(99, 102, 241, 0.35)` | - | Ambient glow and focus rings |
| `--color-secondary` | `#06B6D4` | `hsl(189, 94%, 43%)` | Propulsion cyan, secondary badges, telemetry metrics |
| `--color-secondary-hover` | `#0891B2` | `hsl(192, 91%, 36%)` | Hover state for cyan accents |
| `--color-accent` | `#F43F5E` | `hsl(348, 89%, 60%)` | Ignition red/rose, key highlights, urgency alerts |

### 2.2 Neutral & Surface Hierarchy (Dark Mode First)

| Token Name | Hex Code | HSL | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#070A11` | `hsl(222, 47%, 5%)` | Deep cosmic base canvas background |
| `--bg-surface-1` | `#0D1322` | `hsl(222, 44%, 9%)` | Primary card and panel surface |
| `--bg-surface-2` | `#151E33` | `hsl(222, 41%, 14%)` | Hovered cards, modal dialogs, elevated containers |
| `--bg-surface-glass` | `rgba(13, 19, 34, 0.75)` | - | Glassmorphic floating navigation & overlays |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)`| - | Default card borders, dividers, subtle separators |
| `--border-accent` | `rgba(99, 102, 241, 0.4)` | - | Active selection borders, highlighted cards |

### 2.3 Semantic & Status Colors

| State | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Success** | `#10B981` | Successful launches, healthy server states, validations |
| **Warning** | `#F59E0B` | Deployments in progress, threshold notices |
| **Error** | `#EF4444` | Build failures, critical crashes, system halts |
| **Info** | `#3B82F6` | Status notifications, informational tooltips |

---

## 3. Typography System

### 3.1 Font Families

* **Headline Font:** [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans), sans-serif  
  *Vibe: Confident, geometric, futuristic, bold.*
* **Body Font:** [`Inter`](https://fonts.google.com/specimen/Inter), -apple-system, BlinkMacSystemFont, sans-serif  
  *Vibe: Ultra-readable, clean, neutral.*
* **Monospace / Telemetry Font:** [`JetBrains Mono`](https://fonts.google.com/specimen/JetBrains+Mono), monospace  
  *Vibe: High precision, code snippets, timestamps, metrics.*

### 3.2 Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (Hero)** | `3.5rem` (56px) | 800 (ExtraBold) | 1.1 | `-0.03em` | Main hero marketing headers |
| **Heading 1** | `2.5rem` (40px) | 700 (Bold) | 1.2 | `-0.02em` | Page titles, major section headers |
| **Heading 2** | `1.75rem` (28px) | 700 (Bold) | 1.25 | `-0.015em` | Dashboard widget headers, modal titles |
| **Heading 3** | `1.25rem` (20px) | 600 (SemiBold) | 1.3 | `-0.01em` | Card titles, group headings |
| **Body Large** | `1.125rem` (18px) | 400 / 500 | 1.5 | `0` | Featured introductions, lead text |
| **Body Standard** | `0.9375rem` (15px) | 400 / 500 | 1.6 | `0` | Primary application text, descriptions |
| **Body Small** | `0.8125rem` (13px) | 400 / 500 | 1.5 | `0.01em` | Helper text, secondary metadata |
| **Code / Label** | `0.75rem` (12px) | 600 / 700 | 1.4 | `0.05em` | Badges, tags, IDs, telemetry data |

---

## 4. Shape, Elevation & Glassmorphism

### 4.1 Radii (Corner Roundness)
* **Small (`--radius-sm`):** `6px` — Chips, badges, inline tags.
* **Medium (`--radius-md`):** `10px` — Buttons, input fields, dropdown menus.
* **Large (`--radius-lg`):** `16px` — Dashboard cards, metric panels, modals.
* **Pill (`--radius-full`):** `9999px` — Avatars, pill buttons, notification counts.

### 4.2 Shadows & Ambient Lighting
* **Card Elevation:** `0 10px 30px -10px rgba(0, 0, 0, 0.6)`
* **Primary Glow:** `0 0 25px -5px rgba(99, 102, 241, 0.45)`
* **Secondary Glow:** `0 0 25px -5px rgba(6, 182, 212, 0.45)`
* **Glass Backdrop:** `backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);`

---

## 5. UI Component Specifications

### 5.1 Buttons

```css
/* Primary Action Button */
.btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  filter: brightness(1.08);
}

/* Secondary Ghost Button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}
```

### 5.2 Cards & Containers

```css
.card {
  background: var(--bg-surface-1);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.card:hover {
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-2px);
}
```

---

## 6. Ready-to-Use CSS Variables

Include this snippet in your main stylesheet (e.g., `index.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

:root {
  /* Brand Tokens */
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-primary-glow: rgba(99, 102, 241, 0.35);
  --color-secondary: #06b6d4;
  --color-secondary-hover: #0891b2;
  --color-accent: #f43f5e;

  /* Surfaces & Backgrounds */
  --bg-canvas: #070a11;
  --bg-surface-1: #0d1322;
  --bg-surface-2: #151e33;
  --bg-surface-glass: rgba(13, 19, 34, 0.75);

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(99, 102, 241, 0.4);

  /* Typography */
  --font-headline: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Text Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  /* Shapes & Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```
