# ⚡ Rock, Paper, Scissors | Ultimate Edition PRO

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Powered by Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Rock, Paper, Scissors | Ultimate Edition PRO** is a state-of-the-art web reimagining of the classic hand game. Engineered with sleek cyberpunk glassmorphism, dynamic animations, responsive layouts, and pro-level keyboard controls, this project demonstrates modern frontend web development standards without relying on heavy external frameworks.

---

## 🌟 Key Features

- **⚡ Cyberpunk Glassmorphism UI**: Frosted glass containers (`backdrop-filter`), floating glowing cyber-orbs, and a neon color palette that adapts cleanly across mobile, tablet, and desktop screens.
- **🏆 Championship Series Format**: Play in a best-of-5 tournament structure. Live round indicators track progress, winning streaks, and visual clash outcomes.
- **⌨️ Pro Keyboard Shortcuts**: Complete keyboard accessibility for lightning-fast gameplay without touching the mouse.
- **🔊 Interactive Audio System**: Integrated sound effects for victories, defeats, and draws with an accessible mute/unmute toggle.
- **🛡️ Flawless Game Logic**: Strict win/loss evaluation algorithms and bug-free state management built on clean ES6 Object-Oriented principles.
- **♿ Accessibility & SEO Ready**: Built with semantic HTML5 elements, ARIA attributes, keyboard focus indicators, and screen-reader friendly labels.

---

## 🎮 How to Play

1. **Start the Battle**: Choose your weapon by clicking on one of the weapon cards (**ROCK**, **PAPER**, or **SCISSORS**) or using your keyboard.
2. **Win Conditions**:
   - 🪨 **Rock** crushes ✂️ **Scissors**
   - 📄 **Paper** envelops 🪨 **Rock**
   - ✂️ **Scissors** slices 📄 **Paper**
3. **Championship Victory**: The first combatant (Player or Cyber AI) to reach **3 wins** takes the championship!
4. **Rematch**: Use the reset button or rematch modal to clear the arena for a new championship series.

### ⌨️ Keyboard Shortcuts

| Shortcut Key | Action |
| :--- | :--- |
| <kbd>1</kbd> or <kbd>R</kbd> | Play **Rock** |
| <kbd>2</kbd> or <kbd>P</kbd> | Play **Paper** |
| <kbd>3</kbd> or <kbd>S</kbd> | Play **Scissors** |
| <kbd>M</kbd> | Toggle Sound On / Muted |
| <kbd>Esc</kbd> | Reset Match / Clear Arena |

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

## 🏗️ Project Architecture

```text
rock-paper-scissors/
├── index.html       # Semantic HTML5 structure & UI layout
├── index.css        # Cyberpunk glassmorphism design system & responsive styling
├── index.js         # Core ES6+ OOP state machine & game controller
├── images/          # Weapon animations and icons
│   ├── rock.gif
│   ├── paper.gif
│   ├── scissors.gif
│   └── rock.ico
├── sound/           # Clean audio assets
│   ├── success.mp3
│   ├── failure.mp3
│   └── tie.mp3
└── README.md        # Project documentation
```

### Code Quality & Best Practices
- **CSS Architecture**: Employs CSS Custom Properties (`--variables`), CSS Grid, Flexbox, and hardware-accelerated animations (`transform`, `opacity`).
- **JavaScript OOP**: Encapsulated within a modular `RockPaperScissorsGame` class to prevent global scope pollution, event listener stacking, and memory leaks.
- **Audio Handling**: Protects against rapid-click DOM audio rejection errors by resetting audio playback streams dynamically.

---

## 👨‍💻 Author

**Michael Hamilton**
- Project: [Rock, Paper, Scissors Ultimate Edition PRO](https://github.com/hamilto8/rock-paper-scissors)
- Built with ❤️ and Modern Web Standards
