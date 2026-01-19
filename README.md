## UI Details

### Color Palette
- **Primary Color**: Used for main actions and highlights.
- **Secondary Color**: Used for secondary actions and less prominent elements.
- **Accent Color**: Used for hover states and interactive elements.
- **Background Color**: Applied to the main background.
- **Text Color**: Used for primary text.
- **Border Color**: Used for outlines and dividers.

### Typography
- **Font Family**: `Inter`, sans-serif.
- **Font Sizes**:
  - Small: 0.875rem
  - Medium: 1rem
  - Large: 1.25rem
- **Font Weights**:
  - Regular: 400
  - Semi-bold: 600
  - Bold: 700
- **Line Heights**: 1.5 for readability.

### Spacing
- **Spacing Scale**:
  - Small: 4px
  - Medium: 8px
  - Large: 16px
  - Extra Large: 24px
- **Grid Layout**: 12-column grid with a gutter of 16px.

### Components
#### Buttons
- **Default**:
  - Background: `var(--card)`
  - Text: `var(--text)`
  - Border: `1px solid var(--border)`
- **Hover**:
  - Background: `var(--accent)`
  - Text: `#fff`
- **Focus**:
  - Outline: `2px solid var(--accent)`

#### Cards
- **Default**:
  - Background: `var(--surface)`
  - Border: `1px solid var(--border)`
  - Shadow: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Hover**:
  - Shadow: `0 8px 12px rgba(0, 0, 0, 0.15)`
  - Transform: `translateY(-4px)`

#### Inputs
- **Default**:
  - Background: `#fff`
  - Border: `1px solid var(--border)`
- **Focus**:
  - Border: `1px solid var(--accent)`
  - Outline: `none`

### Responsiveness
- **Breakpoints**:
  - Small: 640px
  - Medium: 768px
  - Large: 1024px
  - Extra Large: 1280px
- **Adjustments**:
  - Grid layout adapts to 1, 2, or 3 columns based on screen size.
  - Typography scales down for smaller screens.

### Interactions
- **Transitions**:
  - Buttons: `background-color 0.3s, color 0.3s`
  - Cards: `box-shadow 0.3s, transform 0.3s`
- **Feedback**:
  - Hover: Visual changes for interactive elements.
  - Focus: Clear outlines for accessibility.