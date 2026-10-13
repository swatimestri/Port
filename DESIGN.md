# Obsidian Signal — Design System Specification
**Project:** Swati R. Mestri Developer Portfolio Redesign  
**Derived From:** Google Stitch MCP Design Theme (`Obsidian Signal`)  
**Creative Direction:** Darkroom Telemetry & Cinematic Editorial Technology

---

## 1. Palette & Chromatic Signal Hierarchy

| Token | Hex / Value | Purpose |
| :--- | :--- | :--- |
| **Canvas Void** | `#050816` | Deep abyssal midnight navy background across all viewports |
| **Surface Layer 1 (Cards)** | `rgba(12, 20, 37, 0.75)` | Translucent frosted glass card base with `backdrop-filter: blur(16px)` |
| **Surface Layer 2 (Raised)** | `rgba(18, 28, 52, 0.85)` | Elevated hover states, active tabs, and modal cards |
| **Primary Signal** | `#38BDF8` | Electric Cyan: primary interactive triggers, active links, glow centers |
| **Secondary Signal** | `#818CF8` | Hyper Violet / Ice Blue: secondary gradient stops, accent borders |
| **Text Primary** | `#F4F6FC` | Crisp warm white for titles and headings |
| **Text Secondary** | `#A4AEC0` | Neutral slate for readable body copy |
| **Text Muted** | `#64748B` | Monospaced diagnostics, labels, and timestamps |
| **Subtle Border** | `rgba(145, 174, 215, 0.16)` | Sub-pixel structural hairline borders |
| **Vibrant Border** | `rgba(56, 189, 248, 0.40)` | Interactive focus and card hover illumination |

---

## 2. Typography Hierarchy

- **Headings & Display:** `Space Grotesk` / `Manrope` (`font-heading`, letter-spacing: `-0.03em`, line-height: `1.15`)
- **Body & Longform:** `Inter` (`font-body`, letter-spacing: `-0.01em`, line-height: `1.7`)
- **Technical Diagnostics & Code:** `JetBrains Mono` (`font-mono`, uppercase tracking: `0.18em`)

---

## 3. Atmospheric Visual Architecture

1. **Sub-pixel Structural Grid:** Subtle technological vector grid (`rgba(56, 189, 248, 0.05)`) with an elliptical radial alpha mask that grounds the hero in digital precision.
2. **Atmospheric Cones:** Layered radial blooms in Electric Cyan (`rgba(56, 189, 248, 0.22)`) and Deep Violet (`rgba(129, 140, 248, 0.15)`).
3. **Drifting Star Dust:** HTML5 canvas rendering ultra-fine luminous particles with delicate twinkle.
4. **Specular Hairline Highlights:** Card borders with gradient illumination indicating light source from top-center.

---

## 4. Component Rules

- **Buttons:**
  - *Primary (`Let's Connect ↗`):* Gradient from `#38BDF8` to `#818CF8`, text `#050816`, bold tracking, glow bloom `0 0 24px rgba(56, 189, 248, 0.4)`.
  - *Secondary (`Explore Projects ↓`):* Translucent dark surface with hairline border `rgba(145, 174, 215, 0.2)`, text `#F4F6FC`, hover border `#38BDF8`.
- **Cards:** Border-radius `1.25rem` (`20px`), background `rgba(12, 20, 37, 0.75)`, border `1px solid rgba(145, 174, 215, 0.16)`.
- **Navigation:** Compact sticky bar, `backdrop-blur-xl`, with logo monogram and direct action buttons.
