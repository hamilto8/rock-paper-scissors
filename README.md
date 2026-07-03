# ⚡ Rock, Paper, Scissors | Ultimate Edition PRO

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Powered by Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![WCAG AA Compliant](https://img.shields.io/badge/WCAG-AA_Compliant-00ff88.svg?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

**Rock, Paper, Scissors | Ultimate Edition PRO** is a state-of-the-art web reimagining of the classic hand game. Engineered with sleek cyberpunk glassmorphism, dynamic animations, responsive layouts, native HTML5 dialogs, mobile haptic feedback, and pro-level keyboard controls, this project demonstrates modern frontend web development standards without relying on heavy external frameworks.

---

## 🌟 Key Features & Industry Best Practices

- **⚡ Cyberpunk Glassmorphism UI**: Frosted glass containers (`backdrop-filter`), floating glowing cyber-orbs, and a neon color palette (`color-scheme: dark`) that adapts cleanly across mobile, tablet, and desktop screens.
- **🏛️ Native HTML5 `<dialog>` Modal**: Utilizes the native `<dialog>` element with `.showModal()` for built-in accessibility, modal backdrop trapping (`::backdrop`), and automated keyboard navigation (`Escape` closing).
- **♿ Full Accessibility & Vestibular Support**: Built with semantic HTML5 elements, descriptive ARIA labels (`aria-live="polite"`, `role="progressbar"`), focus-visible indicators, and **prefers-reduced-motion** CSS media query support to disable heavy animations for vestibular-sensitive users.
- **📱 Mobile Haptic Feedback**: Integrates the Web Vibration API (`navigator.vibrate`) for subtle physical touch feedback during victories, defeats, and draws on supported touch devices.
- **🏆 Championship Series Format**: Play in a best-of-5 tournament structure. Live round indicators track progress, winning streaks, and visual clash outcomes.
- **⌨️ Pro Keyboard Shortcuts**: Complete keyboard accessibility for lightning-fast gameplay without touching the mouse.
- **🔊 Interactive Audio System**: Integrated sound effects with error-safe playback stream resetting and an accessible mute/unmute toggle.
- **🛡️ Cryptographic AI Moves**: Uses `window.crypto.getRandomValues` for true cryptographic randomness when generating Cyber AI moves.
- **🔍 SEO & Open Graph Ready**: Includes full meta tags for social media link previews (Facebook Open Graph, Twitter Cards), favicon definitions, and viewport formatting.

---

## 🎮 How to Play

1. **Start the Battle**: Choose your weapon by clicking on one of the weapon cards (**ROCK**, **PAPER**, or **SCISSORS**) or using your keyboard.
2. **Win Conditions**:
   - 🪨 **Rock** crushes ✂️ **Scissors**
   - 📄 **Paper** envelops 🪨 **Rock**
   - ✂️ **Scissors** slices 📄 **Paper**
3. **Championship Victory**: The first combatant (Player or Cyber AI) to reach **3 wins** takes the championship!
4. **Rematch**: Use the reset button or rematch modal dialog to clear the arena for a new championship series.

### ⌨️ Keyboard Shortcuts

| Shortcut Key | Action |
| :--- | :--- |
| <kbd>1</kbd> or <kbd>R</kbd> | Play **Rock** |
| <kbd>2</kbd> or <kbd>P</kbd> | Play **Paper** |
| <kbd>3</kbd> or <kbd>S</kbd> | Play **Scissors** |
| <kbd>M</kbd> | Toggle Sound On / Muted |
| <kbd>Esc</kbd> | Reset Match / Close Dialog |

---

## 🚀 Getting Started

No build tools, package managers, or compilers are required. This project uses 100% native web standards.

### 1. Clone the Repository
```bash
git clone https://github.com/hamilto8/rock-paper-scissors.git
cd rock-paper-scissors
```

### 2. Launch in Browser
Simply open the `index.html` file directly in any modern web browser (Chrome, Firefox, Safari, Edge):
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

*Alternatively, serve it using a local development server such as VS Code's **Live Server** extension or Node's `serve` package:*
```bash
npx serve .
```

---

## 🏗️ Project Architecture & Standards

```text
rock-paper-scissors/
├── .editorconfig    # Cross-editor formatting rules (utf-8, lf, indent spacing)
├── .gitignore       # Git exclusion patterns for OS, IDE, and log files
├── LICENSE          # Formal MIT License
├── index.html       # Semantic HTML5 structure, SEO tags, & native <dialog>
├── index.css        # Cyberpunk glassmorphism design system & a11y reduced motion
├── index.js         # Core ES6+ OOP state machine & Web APIs (Crypto, Vibration)
├── images/          # Weapon animations and icons
│   ├── rock.gif
│   ├── paper.gif
│   ├── scissors.gif
│   └── rock.ico
├── sound/           # Clean audio assets
│   ├── success.mp3
│   ├── failure.mp3
│   └── tie.mp3
└── README.md        # Comprehensive project documentation
```

### Engineering Standards Applied
- **Git & Configuration**: Complete with standard `.gitignore`, `.editorconfig`, and MIT `LICENSE`.
- **CSS Architecture**: Employs CSS Custom Properties (`--variables`), CSS Grid, Flexbox, `color-scheme: dark`, and hardware-accelerated animations (`transform`, `opacity`).
- **JavaScript OOP**: Encapsulated within a modular `RockPaperScissorsGame` class with safe DOM ready checking (`document.readyState`), zero global scope pollution, and zero event listener leaks.

---

## 👨‍💻 Author

**Michael Hamilton**
- Project: [Rock, Paper, Scissors Ultimate Edition PRO](https://github.com/hamilto8/rock-paper-scissors)
- Built with ❤️ and Modern Web Standards
