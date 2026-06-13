/**
 * Vanguard & Voyage - Main Interactive Engine Blueprint
 */

document.addEventListener("DOMContentLoaded", () => {
    initGlobalNavigation();
    initWhatsAppFloat();
    applyLuxury3DTilt();
    initLuxuryThemeSwitcher(); // Triggers Sand & Cream Palette logic
    initConciergeQuizEngine(); // Triggers Multi-step Quiz Framework logic
});

/**
 * Global Navigation System (Drawer Controls)
 */
function initGlobalNavigation() {
    document.addEventListener("click", (e) => {
        const navDrawer = document.getElementById("navDrawer");
        if (!navDrawer) return;

        if (e.target.closest("#menuBtn")) {
            navDrawer.classList.remove("opacity-0", "pointer-events-none", "scale-95", "-translate-y-4");
            navDrawer.classList.add("scale-100", "translate-y-0");
        } else if (e.target.closest("#closeBtn") || e.target.classList.contains("nav-link-item") || (!e.target.closest("#navDrawer") && !e.target.closest("#menuBtn"))) {
            navDrawer.classList.add("opacity-0", "pointer-events-none", "scale-95", "-translate-y-4");
            navDrawer.classList.remove("scale-100", "translate-y-0");
        }
    });
}

/**
 * 3D Holographic Perspective Parallax Cards
 */
function applyLuxury3DTilt() {
    if (window.innerWidth < 768) return; 
    const cards = document.querySelectorAll(".tilt-3d");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const tiltX = (yc - y) / 14;
            const tiltY = (x - xc) / 14;
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

/**
 * 🍦 LUXURY THEME CONTROLLER SWITCH (SAND & CREAM AS FIRST IMPRESSION DEFAULT)
 */
function initLuxuryThemeSwitcher() {
    const switcherBtn = document.getElementById("themeSwitcherBtn");
    if (!switcherBtn) return;

    // 🎯 INITIALIZATION CORE: Check what state is in storage
    const savedTheme = localStorage.getItem("luxuryTheme");

    // If no theme has been saved yet (First time user opens the site), FORCE Sand & Cream!
    if (!savedTheme) {
        localStorage.setItem("luxuryTheme", "sand");
        document.body.classList.add("luxury-sand-theme");
        switcherBtn.innerHTML = `<i class="fa-solid fa-moon text-xs"></i>`;
    } 
    // If user explicitly chose 'sand' in previous sessions
    else if (savedTheme === "sand") {
        document.body.classList.add("luxury-sand-theme");
        switcherBtn.innerHTML = `<i class="fa-solid fa-moon text-xs"></i>`;
    } 
    // If user explicitly chose 'dark' in previous sessions
    else {
        document.body.classList.remove("luxury-sand-theme");
        switcherBtn.innerHTML = `<i class="fa-solid fa-palette text-xs"></i>`;
    }

    // ⚡ INTERACTION METRICS: Toggle states smoothly on click
    switcherBtn.addEventListener("click", () => {
        document.body.classList.toggle("luxury-sand-theme");
        
        if (document.body.classList.contains("luxury-sand-theme")) {
            localStorage.setItem("luxuryTheme", "sand");
            switcherBtn.innerHTML = `<i class="fa-solid fa-moon text-xs"></i>`;
        } else {
            localStorage.setItem("luxuryTheme", "dark");
            switcherBtn.innerHTML = `<i class="fa-solid fa-palette text-xs"></i>`;
        }
    });
}

/**
 * 💎 INTERACTIVE CONCIERGE QUIZ AUTOMATION GRID
 */
let quizDataAnswers = {};

function initConciergeQuizEngine() {
    const quizForm = document.getElementById("luxuryQuizForm");
    if (!quizForm) return;

    window.moveQuizStep = function(stepChange) {
        const currentStepEl = document.querySelector(".quiz-step-active");
        if (!currentStepEl) return;
        
        const currentStepNum = parseInt(currentStepEl.dataset.step);
        const nextStepNum = currentStepNum + stepChange;
        
        // Validation check for Step 1-3 before letting move forward
        if (stepChange > 0 && currentStepNum < 4 && !quizDataAnswers[getCategoryKeyByStep(currentStepNum)]) {
            alert("Please select a lifestyle parameters coordinate parameter matrix to proceed.");
            return;
        }

        const targetStepEl = document.querySelector(`.quiz-step[data-step="${nextStepNum}"]`);

        if (targetStepEl) {
            currentStepEl.classList.remove("quiz-step-active");
            targetStepEl.classList.add("quiz-step-active");
            
            // Dynamic Progress Line Calculations
            const progressLine = document.getElementById("quizProgressLine");
            if (progressLine) {
                progressLine.style.width = `${(nextStepNum / 4) * 100}%`;
            }
        }
    };

    window.selectQuizOption = function(btn, category, value) {
        const stepContainer = btn.closest(".quiz-step");
        stepContainer.querySelectorAll("button").forEach(b => {
            b.classList.remove("border-white", "border-black", "bg-white/10", "bg-black/5");
        });
        
        const isSandTheme = document.body.classList.contains("luxury-sand-theme");
        btn.classList.add(isSandTheme ? "border-black" : "border-white", isSandTheme ? "bg-black/5" : "bg-white/10");

        // Save selected criteria structure maps
        quizDataAnswers[category] = value;
    };

    window.submitLuxuryQuiz = function(event) {
        event.preventDefault();
        const clientName = document.getElementById("quizClientName").value.trim();
        const clientContact = document.getElementById("quizClientContact").value.trim();

        if(!clientName || !clientContact) {
            alert("Verification fields are empty. Input proper coordinates.");
            return;
        }

        let whatsappMessage = `*VANGUARD %26 VOYAGE CONCIERGE BLUEPRINT SYSTEM*\n\n`;
        whatsappMessage += `*Guest Identity:* ${clientName}\n`;
        whatsappMessage += `*Contact Terminal:* ${clientContact}\n`;
        whatsappMessage += `*Aura Mindstate Parameter:* ${quizDataAnswers['mindstate'] || 'Standard'}\n`;
        whatsappMessage += `*Landscape Coordinate Vista:* ${quizDataAnswers['vista'] || 'Standard'}\n`;
        whatsappMessage += `*Budget Matrix Allocation:* ${quizDataAnswers['budget'] || 'Bespoke'}\n`;

        const finalUrl = `https://wa.me/916367405386?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(finalUrl, '_blank');
    };

    function getCategoryKeyByStep(step) {
        if (step === 1) return 'mindstate';
        if (step === 2) return 'vista';
        if (step === 3) return 'budget';
        return '';
    }
}

/**
 * Uniform Floating WhatsApp Link Handler
 */
function initWhatsAppFloat() {
    const waFloatBtn = document.getElementById("whatsappFloat");
    if (!waFloatBtn) return;
    let customText = `Hello Vanguard & Voyage! I am exploring your elite architectural platform. Please route me to an executive concierge consultant desk.`;
    waFloatBtn.href = `https://wa.me/916367405386?text=${encodeURIComponent(customText)}`;
}

/**
 * Universal Form Submissions Utilities (Dynamic Cross-over Channels)
 */
function sendInquiryViaWhatsApp(event, blueprintTitle) {
    event.preventDefault();
    const form = event.target;
    let message = `*VANGUARD %26 VOYAGE INQUIRY SYSTEM*\n\n*Blueprint Type:* ${blueprintTitle}\n\n`;
    
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        message += `*${key}:* ${value}\n`;
    }
    
    const waUrl = `https://wa.me/916367405386?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// 🌌 CENTRALIZED CONTINUOUS AUDIO ATMOSPHERE ENGINE (WITH MEMORY SEGMENT INTERPRETATION)
document.addEventListener("DOMContentLoaded", () => {
    // 🎼 Curating a premium, ultra-soft cinematic lounge ambient track loop
    const ambientAudioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; 
    
    // Creating or fetching global single instance hardware node mapping
    window.vvAtmosphereAudio = window.vvAtmosphereAudio || new Audio(ambientAudioUrl);
    window.vvAtmosphereAudio.loop = true;
    window.vvAtmosphereAudio.volume = 0.15; // Soft 15% whisper volume parameter

    const soundBtn = document.getElementById("audioAtmosphereBtn");
    const soundIcon = document.getElementById("audioAtmosphereIcon");

    // ⚡ SYNC MATRIX: Interrogating global status ledger and updating screen layouts
    const synchronizeAudioUIState = () => {
        if (!soundIcon) return;
        if (window.vvAtmosphereAudio.paused) {
            if (document.body.classList.contains("luxury-sand-theme")) {
                soundIcon.className = "fa-solid fa-volume-xmark text-xs text-neutral-600";
            } else {
                soundIcon.className = "fa-solid fa-volume-xmark text-xs text-neutral-400";
            }
        } else {
            soundIcon.className = "fa-solid fa-volume-high text-xs text-emerald-400 animate-pulse";
        }
    };

    // ⏳ RESUME LOGIC ENGINE: Checking if client had activated aura tracking on previous route bounds
    const currentAuraStateMatrix = localStorage.getItem("vvAudioAuraState");
    const preservedTimelinePlayback = localStorage.getItem("vvAudioAuraTime");

    if (preservedTimelinePlayback) {
        window.vvAtmosphereAudio.currentTime = parseFloat(preservedTimelinePlayback);
    }

    if (currentAuraStateMatrix === "active") {
        // Attempting a secure playback transmission loop bounds
        window.vvAtmosphereAudio.play()
            .then(() => {
                synchronizeAudioUIState();
            })
            .catch(err => {
                // Browsers security shield block: Requires at least one click parameter interaction to resume stream audio
                console.log("// Matrix Log: Auto-resume deferred. Awaiting primary document click layer tap.", err);
                // Creating an automated one-time tap listener to clear policy hurdles instantly
                const clearPolicyBarrierTap = () => {
                    window.vvAtmosphereAudio.play().then(() => {
                        synchronizeAudioUIState();
                        document.removeEventListener("click", clearPolicyBarrierTap);
                    });
                };
                document.addEventListener("click", clearPolicyBarrierTap);
            });
    }

    if (soundBtn && soundIcon) {
        // Core interaction handling configurations
        soundBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Shielding button boundary tracks from closing vault triggers
            if (window.vvAtmosphereAudio.paused) {
                window.vvAtmosphereAudio.play()
                    .then(() => {
                        localStorage.setItem("vvAudioAuraState", "active");
                        synchronizeAudioUIState();
                    });
            } else {
                window.vvAtmosphereAudio.pause();
                localStorage.setItem("vvAudioAuraState", "disabled");
                synchronizeAudioUIState();
            }
        });
    }

    // 🔄 METRICS INTERVAL STREAM: Constantly mapping media timestamps inside background runtime vectors
    setInterval(() => {
        if (window.vvAtmosphereAudio && !window.vvAtmosphereAudio.paused) {
            localStorage.setItem("vvAudioAuraTime", window.vvAtmosphereAudio.currentTime);
        }
    }, 500); // Maps current time ticks securely every 500 milliseconds

    // 🍦 SAND THEME ADAPTIVE COLORS GRAPHICS CONTROLLER
    const applyDynamicSoundBtnThemeColors = () => {
        const isSandThemeActive = document.body.classList.contains("luxury-sand-theme");
        const targetBtn = document.getElementById("audioAtmosphereBtn");
        if (targetBtn) {
            targetBtn.style.borderColor = isSandThemeActive ? "rgba(28, 26, 23, 0.2)" : "rgba(255, 255, 255, 0.1)";
            synchronizeAudioUIState();
        }
    };

    const themeToggleTrigger = document.getElementById("themeSwitcherBtn");
    if (themeToggleTrigger) {
        themeToggleTrigger.addEventListener("click", () => {
            setTimeout(applyDynamicSoundBtnThemeColors, 50);
        });
    }
    setTimeout(applyDynamicSoundBtnThemeColors, 100);
});

// 🛩️ FUTURISTIC BESPOKE SOVEREIGN MOUSE CURSOR RUNTIME MATRIX (STABILIZED CORE ENGINE)
document.addEventListener("DOMContentLoaded", () => {
    // Prevent deployment on mobile/touch viewports instantly
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Creating structural overlay cursor elements nodes directly into document bounds
    const customDot = document.createElement("div");
    const customHalo = document.createElement("div");

    customDot.className = "vv-custom-dot";
    customHalo.className = "vv-custom-halo";

    document.body.appendChild(customDot);
    document.body.appendChild(customHalo);

    // Initial safe trigger positioning vector to prevent complete invisibility parameters
    window.addEventListener("mousemove", (e) => {
        // Direct absolute inline styling variables bypassing engine latencies completely
        customDot.style.left = `${e.clientX}px`;
        customDot.style.top = `${e.clientY}px`;
        customHalo.style.left = `${e.clientX}px`;
        customHalo.style.top = `${e.clientY}px`;
    });

    // 🔬 RE-ENGINEERED INTERACTION OBSERVER HOOKING
    const attachPointerHoverListeners = () => {
        const structuralTargets = document.querySelectorAll("a, button, select, input, textarea, [role='button'], .cursor-pointer, .glass-card");
        
        structuralTargets.forEach(element => {
            element.removeEventListener("mouseenter", addPointerHoverState);
            element.removeEventListener("mouseleave", removePointerHoverState);
            
            element.addEventListener("mouseenter", addPointerHoverState);
            element.addEventListener("mouseleave", removePointerHoverState);
        });
    };

    const addPointerHoverState = () => document.body.classList.add("vv-pointer-hovering");
    const removePointerHoverState = () => document.body.classList.remove("vv-pointer-hovering");

    attachPointerHoverListeners();

    // Constant structural DOM mutations scanner tracking async dynamic elements insertions
    const cursorObserver = new MutationObserver(() => attachPointerHoverListeners());
    cursorObserver.observe(document.body, { childList: true, subtree: true });
});

// 🔒 SOVEREIGN IDENTITY SECRET EASTER VAULT DOOR LOGIC (WITH SINGLE TAP CLOSE ENGAGEMENT)
document.addEventListener("DOMContentLoaded", () => {
    // 🏛️ Creating structural nodes directly for the secret layout configuration
    let vaultModal = document.getElementById("vvSecretVaultModal");
    
    if (!vaultModal) {
        vaultModal = document.createElement("div");
        vaultModal.id = "vvSecretVaultModal";
        vaultModal.className = "vv-secret-modal";
        document.body.appendChild(vaultModal);
    }
    
    vaultModal.innerHTML = `
        <div class="max-w-md w-full border border-neutral-900 bg-[#070707] rounded-[2.5rem] p-8 md:p-10 space-y-6 relative text-center shadow-2xl transition-transform duration-500 scale-95" id="vvVaultCard" style="border-color: rgba(255,255,255,0.05);">
            
            <div class="space-y-2 pt-4 pointer-events-none">
                <div class="flex items-center justify-center space-x-2 text-emerald-500 text-[10px] tracking-[0.3em] uppercase font-bold animate-pulse">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Sovereign Link Verified</span>
                </div>
                <h2 class="text-3xl font-luxury font-bold text-white tracking-wide">CONFIDENTIAL MATRIX</h2>
            </div>
            
            <div class="w-full h-px bg-neutral-900 pointer-events-none" style="background-color: rgba(255,255,255,0.05);"></div>
            
            <div class="space-y-4 text-justify text-xs text-neutral-400 font-light leading-relaxed tracking-wide pointer-events-none">
                <p class="font-mono text-center text-neutral-200 text-sm font-bold bg-neutral-950 py-3 rounded-xl border border-neutral-900/60" style="border-color: rgba(255,255,255,0.03);">
                    Identity Ingress: Sameer Vyas
                </p>
                <p class="italic text-center text-[11px] text-neutral-500 leading-normal">
                    "Welcome back. Your architectural staging networks, priority aviation flight slots allocation charts, and zero trace configurations are fully operational."
                </p>
            </div>
            
            <div class="w-full h-px bg-neutral-900 pointer-events-none" style="background-color: rgba(255,255,255,0.05);"></div>
            
            <div class="text-[8px] uppercase tracking-[0.25em] text-neutral-600 font-bold block pointer-events-none">
                Single Tap Anywhere On Screen To Dismiss Vault // Est. 2026
            </div>
        </div>
    `;

    // Dynamic Sand theme override listeners inside the inner shadow card
    const syncVaultCardThemeAccent = () => {
        const isSand = document.body.classList.contains("luxury-sand-theme");
        const card = document.getElementById("vvVaultCard");
        if (card) {
            if (isSand) {
                card.style.backgroundColor = "#ebdcd0";
                card.style.borderColor = "rgba(28, 26, 23, 0.15)";
                card.querySelector("h2").style.color = "#1c1a17";
                card.querySelector(".font-mono").style.backgroundColor = "rgba(28, 26, 23, 0.05)";
                card.querySelector(".font-mono").style.borderColor = "rgba(28, 26, 23, 0.1)";
                card.querySelector(".font-mono").style.color = "#1c1a17";
            } else {
                card.style.backgroundColor = "#070707";
                card.style.borderColor = "rgba(255, 255, 255, 0.05)";
                card.querySelector("h2").style.color = "#ffffff";
                card.querySelector(".font-mono").style.backgroundColor = "#000000";
                card.querySelector(".font-mono").style.borderColor = "rgba(255,255,255,0.03)";
                card.querySelector(".font-mono").style.color = "#ffffff";
            }
        }
    };

    // Triggering dynamic vault openings hooks
    const openSecretVault = () => {
        syncVaultCardThemeAccent();
        vaultModal.classList.add("vv-vault-active");
        setTimeout(() => {
            const card = document.getElementById("vvVaultCard");
            if(card) card.classList.remove("scale-95");
        }, 10);
    };

    const closeSecretVault = () => {
        const card = document.getElementById("vvVaultCard");
        if(card) card.classList.add("scale-95");
        setTimeout(() => {
            vaultModal.classList.remove("vv-vault-active");
        }, 150);
    };

    // Hooking up event bounds: Target footer left brand statement string
    setTimeout(() => {
        const footerBrands = document.querySelectorAll("footer div");
        footerBrands.forEach(node => {
            if (node.textContent.includes("VANGUARD & VOYAGE") && node.children.length === 0) {
                node.style.userSelect = "none"; 
                node.addEventListener("dblclick", openSecretVault);
            }
        });
    }, 1000);

    // ⚡ SINGLE TAP ANYWHERE ON SCREEN DISMISS ENGINE
    // Triggering dismiss instantly when clicking anywhere inside the active modal layer
    vaultModal.addEventListener("click", () => {
        closeSecretVault();
    });

    // Theme toggle mapping listener configurations
    const themeBtn = document.getElementById("themeSwitcherBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            setTimeout(syncVaultCardThemeAccent, 60);
        });
    }
});

// 🕯️ CINEMATIC ULTRA-LUXURY SMOOTH PAGE LOADER MATRIX CONTEXT
(() => {
    // Array matching sophisticated dynamic loading matrix strings
    const structuralQuotesRegistry = [
        "Sovereign Alignment in Progress...",
        "Asymmetric Blueprints Loading...",
        "Curating Bespoke Space Parameters...",
        "Decrypting Elite Vault Vectors...",
        "Synchronizing Aviation Trajectory..."
    ];

    // Pick a random vector quote from the grid matrix list bounds
    const chosenQuoteString = structuralQuotesRegistry[Math.floor(Math.random() * structuralQuotesRegistry.length)];

    // Injecting the loader screen immediately inside hardware dom stack layers
    const globalLoaderElement = document.createElement("div");
    globalLoaderElement.id = "vvGlobalLoaderScreen";
    globalLoaderElement.className = "vv-global-loader";

    globalLoaderElement.innerHTML = `
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="vv-loader-spinner"></div>
            <div id="vvLoaderQuoteNode" class="font-luxury text-[10px] uppercase tracking-[0.4em] text-center font-bold transition-colors duration-300" style="color: rgba(255,255,255,0.45);">
                ${chosenQuoteString}
            </div>
        </div>
    `;

    document.documentElement.appendChild(globalLoaderElement);

    // Syncing loader quote font colors instantly if luxury Sand style is active indices
    const synchronizeLoaderTextAccent = () => {
        const quoteNode = document.getElementById("vvLoaderQuoteNode");
        if (quoteNode) {
            if (document.body.classList.contains("luxury-sand-theme") || localStorage.getItem("luxuryTheme") === "sand") {
                globalLoaderElement.style.backgroundColor = "#ebdcd0";
                quoteNode.style.color = "rgba(28, 26, 23, 0.5)";
            } else {
                globalLoaderElement.style.backgroundColor = "#050505";
                quoteNode.style.color = "rgba(255, 255, 255, 0.45)";
            }
        }
    };

    // Run dynamic theme color sync immediately before full window layout paints
    synchronizeLoaderTextAccent();

    window.addEventListener("load", () => {
        // Double check theme state targets once document body node tree renders completely
        synchronizeLoaderTextAccent();

        // ⏱️ Fine-tuned delay framework keeping the loader visible for a smooth cinematic flash window
        setTimeout(() => {
            globalLoaderElement.style.opacity = "0";
            globalLoaderElement.style.transform = "scale(1.02)";
            
            // Purge layout nodes completely after animation fade sequence concludes safely
            setTimeout(() => {
                if (globalLoaderElement.parentNode) {
                    globalLoaderElement.parentNode.removeChild(globalLoaderElement);
                }
            }, 500);
        }, 600); // 600ms hold time prevents jarring quick blinks, adding immense premium depth
    });
})();