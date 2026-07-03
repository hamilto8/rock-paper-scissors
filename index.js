/**
 * ============================================================================
 * ROCK, PAPER, SCISSORS | ULTIMATE EDITION PRO
 * Core Application Logic & State Management
 * Built with modern ES6+ standards, accessible event handling, and clean OOP.
 * ============================================================================
 */

"use strict";

class RockPaperScissorsGame {
    constructor() {
        // Game Configuration
        this.maxRounds = 5;
        this.winTarget = 3; // First to 3 wins takes the championship

        // Game State
        this.playerScore = 0;
        this.computerScore = 0;
        this.currentRound = 1;
        this.isGameOver = false;
        this.isSoundEnabled = true;

        // DOM Elements - Navigation & Controls
        this.soundToggleBtn = document.getElementById('sound-toggle');
        this.soundIcon = document.getElementById('sound-icon');
        this.soundLabel = document.getElementById('sound-label');
        this.resetBtn = document.getElementById('reset-btn');
        this.weaponCards = document.querySelectorAll('.weapon-card');

        // DOM Elements - Scoreboard & Status
        this.playerScoreEl = document.getElementById('player_score');
        this.computerScoreEl = document.getElementById('computer_score');
        this.roundDisplayEl = document.getElementById('count_view');
        this.matchBadgeEl = document.getElementById('match-badge');
        this.statusMessageEl = document.getElementById('attack');
        this.lightIndicators = document.querySelectorAll('.light-indicator');

        // DOM Elements - Battle Display
        this.playerPreviewEl = document.querySelector('#player-preview .preview-circle');
        this.computerPreviewEl = document.querySelector('#computer-preview .preview-circle');

        // DOM Elements - Native Dialog Modal
        this.modalEl = document.getElementById('game-over-modal');
        this.modalIconEl = document.getElementById('modal-icon');
        this.modalTitleEl = document.getElementById('modal-title');
        this.modalSubtitleEl = document.getElementById('modal-subtitle');
        this.modalScoreEl = document.getElementById('modal-score');
        this.modalRoundsEl = document.getElementById('modal-rounds');
        this.rematchBtn = document.getElementById('rematch-btn');

        // Audio Elements
        this.audioSuccess = document.getElementById('success');
        this.audioFailure = document.getElementById('failure');
        this.audioTie = document.getElementById('tie');

        // Initialize App
        this.init();
    }

    /**
     * Bind event listeners and initialize UI state
     */
    init() {
        // Bind weapon card clicks
        this.weaponCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const choice = e.currentTarget.dataset.choice;
                if (choice) this.playRound(choice);
            });
        });

        // Bind reset & rematch buttons
        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', () => this.resetGame());
        }
        if (this.rematchBtn) {
            this.rematchBtn.addEventListener('click', () => this.resetGame());
        }

        // Bind sound toggle
        if (this.soundToggleBtn) {
            this.soundToggleBtn.addEventListener('click', () => this.toggleSound());
        }

        // Bind keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Initial UI Render
        this.renderUI();
        console.log("⚡ RPS Arena PRO initialized successfully.");
    }

    /**
     * Handle keyboard shortcuts for pro gameplay
     * @param {KeyboardEvent} e - The keyboard event object
     */
    handleKeyPress(e) {
        // Ignore if typing in form fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const key = e.key.toLowerCase();
        if (key === '1' || key === 'r') {
            this.triggerWeaponClick('rock');
        } else if (key === '2' || key === 'p') {
            this.triggerWeaponClick('paper');
        } else if (key === '3' || key === 's') {
            this.triggerWeaponClick('scissors');
        } else if (key === 'm') {
            this.toggleSound();
        } else if (key === 'escape') {
            // If modal is open, native dialog closes on Escape; let's also reset match if requested
            if (!this.modalEl.open) {
                this.resetGame();
            }
        }
    }

    /**
     * Trigger click on weapon card by choice name
     * @param {string} choice - 'rock', 'paper', or 'scissors'
     */
    triggerWeaponClick(choice) {
        const card = document.querySelector(`.weapon-card[data-choice="${choice}"]`);
        if (card && !this.isGameOver) {
            card.click();
            card.focus();
        }
    }

    /**
     * Toggle audio sound effects
     */
    toggleSound() {
        this.isSoundEnabled = !this.isSoundEnabled;
        if (this.isSoundEnabled) {
            this.soundIcon.textContent = '🔊';
            this.soundLabel.textContent = 'Sound On';
            this.soundToggleBtn.setAttribute('aria-label', 'Mute Sound');
        } else {
            this.soundIcon.textContent = '🔇';
            this.soundLabel.textContent = 'Muted';
            this.soundToggleBtn.setAttribute('aria-label', 'Unmute Sound');
        }
    }

    /**
     * Safely play an audio element without promise rejection errors
     * @param {HTMLAudioElement} audioEl - The audio element to play
     */
    playAudio(audioEl) {
        if (!this.isSoundEnabled || !audioEl) return;
        try {
            audioEl.currentTime = 0;
            audioEl.play().catch(err => {
                console.warn("Audio playback prevented by browser auto-play policy:", err);
            });
        } catch (err) {
            console.warn("Audio play error:", err);
        }
    }

    /**
     * Trigger subtle vibration on supported mobile/touch devices
     * @param {number} duration - Milliseconds to vibrate
     */
    triggerHaptic(duration = 40) {
        if (typeof navigator !== 'undefined' && navigator.vibrate && this.isSoundEnabled) {
            try {
                navigator.vibrate(duration);
            } catch (e) {
                // Ignore vibration errors on unsupported environments
            }
        }
    }

    /**
     * Generate AI move using crypto random for true randomness
     * @returns {string} - 'rock', 'paper', or 'scissors'
     */
    getComputerMove() {
        const moves = ['rock', 'paper', 'scissors'];
        if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
            const randomBuffer = new Uint32Array(1);
            window.crypto.getRandomValues(randomBuffer);
            return moves[randomBuffer[0] % moves.length];
        }
        return moves[Math.floor(Math.random() * moves.length)];
    }

    /**
     * Execute a single round of battle
     * @param {string} playerChoice - 'rock', 'paper', or 'scissors'
     */
    playRound(playerChoice) {
        if (this.isGameOver) {
            this.showStatus("The match has concluded! Press Reset or Rematch to play again.", "status-tie");
            return;
        }

        const computerChoice = this.getComputerMove();
        const roundResult = this.evaluateWinner(playerChoice, computerChoice);

        // Update Scores & Light Indicators
        this.updateRoundStats(roundResult);

        // Render visual clash
        this.renderBattleStage(playerChoice, computerChoice, roundResult);

        // Check Championship Match End Conditions
        this.checkMatchConclusion();
    }

    /**
     * Evaluate the winner of the round
     * @param {string} player - Player choice
     * @param {string} computer - Computer choice
     * @returns {'win' | 'loss' | 'tie'}
     */
    evaluateWinner(player, computer) {
        if (player === computer) {
            return 'tie';
        }

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winConditions[player] === computer) {
            return 'win';
        } else {
            return 'loss';
        }
    }

    /**
     * Update scores, indicators, and sound based on round outcome
     * @param {'win' | 'loss' | 'tie'} result - The result of the round
     */
    updateRoundStats(result) {
        const currentLight = document.querySelector(`.light-indicator[data-round="${this.currentRound}"]`);

        if (result === 'win') {
            this.playerScore++;
            this.playAudio(this.audioSuccess);
            this.triggerHaptic(50);
            if (currentLight) currentLight.classList.add('win-player');
        } else if (result === 'loss') {
            this.computerScore++;
            this.playAudio(this.audioFailure);
            this.triggerHaptic([30, 30, 60]);
            if (currentLight) currentLight.classList.add('win-computer');
        } else if (result === 'tie') {
            this.playAudio(this.audioTie);
            this.triggerHaptic(20);
            if (currentLight) currentLight.classList.add('win-tie');
        }

        // Animate score counters
        this.animateScoreChange(this.playerScoreEl, this.playerScore);
        this.animateScoreChange(this.computerScoreEl, this.computerScore);
    }

    /**
     * Trigger scale bounce on score increment
     * @param {HTMLElement} el - The score element
     * @param {number} newScore - The updated score value
     */
    animateScoreChange(el, newScore) {
        if (el && parseInt(el.textContent, 10) !== newScore) {
            el.textContent = String(newScore);
            el.style.transform = 'scale(1.4)';
            el.style.color = 'var(--neon-yellow)';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
                el.style.color = '';
            }, 300);
        }
    }

    /**
     * Render the center battle stage choices and message
     * @param {string} playerChoice - Player weapon
     * @param {string} computerChoice - Computer weapon
     * @param {'win' | 'loss' | 'tie'} result - Round result
     */
    renderBattleStage(playerChoice, computerChoice, result) {
        // Render weapon GIFs inside preview circles with descriptive alt text
        this.playerPreviewEl.innerHTML = `<img src="./images/${playerChoice}.gif" alt="Player chose ${playerChoice}">`;
        this.computerPreviewEl.innerHTML = `<img src="./images/${computerChoice}.gif" alt="Computer chose ${computerChoice}">`;

        // Trigger CSS animation classes
        this.playerPreviewEl.classList.remove('clash-player');
        this.computerPreviewEl.classList.remove('clash-computer');
        void this.playerPreviewEl.offsetWidth; // Force reflow
        void this.computerPreviewEl.offsetWidth;
        this.playerPreviewEl.classList.add('clash-player');
        this.computerPreviewEl.classList.add('clash-computer');

        // Set status message
        const choiceNames = {
            rock: 'ROCK 🪨',
            paper: 'PAPER 📄',
            scissors: 'SCISSORS ✂️'
        };

        const pName = choiceNames[playerChoice];
        const cName = choiceNames[computerChoice];

        if (result === 'win') {
            this.showStatus(`⚡ ${pName} crushes ${cName}! POINT PLAYER!`, 'status-win');
            this.matchBadgeEl.textContent = "PLAYER TAKES ROUND";
            this.matchBadgeEl.style.color = "var(--neon-green)";
            this.matchBadgeEl.style.borderColor = "var(--neon-green)";
        } else if (result === 'loss') {
            this.showStatus(`💀 ${cName} beats ${pName}! POINT CYBER AI!`, 'status-loss');
            this.matchBadgeEl.textContent = "AI TAKES ROUND";
            this.matchBadgeEl.style.color = "var(--neon-red)";
            this.matchBadgeEl.style.borderColor = "var(--neon-red)";
        } else {
            this.showStatus(`🤝 Both weapons clashed with ${pName}! IT'S A DRAW!`, 'status-tie');
            this.matchBadgeEl.textContent = "ROUND DRAW";
            this.matchBadgeEl.style.color = "var(--neon-yellow)";
            this.matchBadgeEl.style.borderColor = "var(--neon-yellow)";
        }
    }

    /**
     * Display status message with CSS class styling
     * @param {string} msg - Message text
     * @param {string} [className] - Optional color class
     */
    showStatus(msg, className = "") {
        if (this.statusMessageEl) {
            this.statusMessageEl.textContent = msg;
            this.statusMessageEl.className = `status-message ${className}`;
        }
    }

    /**
     * Check if match should conclude (First to 3 wins or 5 rounds finished)
     */
    checkMatchConclusion() {
        if (this.playerScore >= this.winTarget || this.computerScore >= this.winTarget || this.currentRound >= this.maxRounds) {
            this.isGameOver = true;
            setTimeout(() => this.showGameOverModal(), 800);
        } else {
            this.currentRound++;
            if (this.roundDisplayEl) {
                this.roundDisplayEl.textContent = `ROUND ${this.currentRound} OF ${this.maxRounds}`;
            }
        }
    }

    /**
     * Show Championship conclusion modal using native HTML5 <dialog>
     */
    showGameOverModal() {
        if (!this.modalEl) return;

        this.modalScoreEl.textContent = `${this.playerScore} - ${this.computerScore}`;
        this.modalRoundsEl.textContent = String(this.currentRound);

        if (this.playerScore > this.computerScore) {
            this.modalIconEl.textContent = '🏆';
            this.modalTitleEl.textContent = 'VICTORY!';
            this.modalTitleEl.style.color = 'var(--neon-cyan)';
            this.modalSubtitleEl.textContent = 'You dominated the Cyber AI and claimed the Championship!';
            this.playAudio(this.audioSuccess);
        } else if (this.computerScore > this.playerScore) {
            this.modalIconEl.textContent = '💀';
            this.modalTitleEl.textContent = 'DEFEAT!';
            this.modalTitleEl.style.color = 'var(--neon-red)';
            this.modalSubtitleEl.textContent = 'The Cyber AI outsmarted your weapon tactics!';
            this.playAudio(this.audioFailure);
        } else {
            this.modalIconEl.textContent = '🤝';
            this.modalTitleEl.textContent = 'DRAW!';
            this.modalTitleEl.style.color = 'var(--neon-yellow)';
            this.modalSubtitleEl.textContent = 'An evenly matched battle! No undisputed champion emerged.';
            this.playAudio(this.audioTie);
        }

        // Show native modal dialog
        if (typeof this.modalEl.showModal === 'function') {
            if (!this.modalEl.open) {
                this.modalEl.showModal();
            }
        } else {
            // Fallback for older environments without native dialog
            this.modalEl.setAttribute('open', 'true');
        }

        // Focus rematch button for keyboard accessibility
        if (this.rematchBtn) {
            this.rematchBtn.focus();
        }
    }

    /**
     * Reset game to initial state
     */
    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.currentRound = 1;
        this.isGameOver = false;

        // Close native modal dialog
        if (this.modalEl && typeof this.modalEl.close === 'function') {
            if (this.modalEl.open) {
                this.modalEl.close();
            }
        } else if (this.modalEl) {
            this.modalEl.removeAttribute('open');
        }

        // Reset UI Elements
        if (this.playerScoreEl) this.playerScoreEl.textContent = '0';
        if (this.computerScoreEl) this.computerScoreEl.textContent = '0';
        if (this.roundDisplayEl) this.roundDisplayEl.textContent = `ROUND 1 OF ${this.maxRounds}`;
        if (this.matchBadgeEl) {
            this.matchBadgeEl.textContent = "BATTLE READY";
            this.matchBadgeEl.style.color = "";
            this.matchBadgeEl.style.borderColor = "";
        }

        this.showStatus("Press any weapon to begin the clash!", "");

        // Reset Previews
        if (this.playerPreviewEl) {
            this.playerPreviewEl.innerHTML = '❓';
            this.playerPreviewEl.classList.remove('clash-player');
        }
        if (this.computerPreviewEl) {
            this.computerPreviewEl.innerHTML = '❓';
            this.computerPreviewEl.classList.remove('clash-computer');
        }

        // Reset Lights
        this.lightIndicators.forEach(light => {
            light.className = 'light-indicator';
        });

        console.log("🔄 Arena reset. Ready for new match.");
    }

    /**
     * Initial UI rendering
     */
    renderUI() {
        if (this.roundDisplayEl) this.roundDisplayEl.textContent = `ROUND 1 OF ${this.maxRounds}`;
        if (this.playerScoreEl) this.playerScoreEl.textContent = '0';
        if (this.computerScoreEl) this.computerScoreEl.textContent = '0';
        this.showStatus("Press any weapon to begin the clash!", "");
    }
}

// Robust initialization ensuring compatibility with async/defer or DOMContentLoaded
if (typeof document !== 'undefined') {
    const initGame = () => {
        window.rpsGame = new RockPaperScissorsGame();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGame);
    } else {
        initGame();
    }
}