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
 * 🍦 LUXURY THEME CONTROLLER SWITCH (SAND & CREAM PERSISTENCE MODE)
 */
function initLuxuryThemeSwitcher() {
    const switcherBtn = document.getElementById("themeSwitcherBtn");
    if (!switcherBtn) return;

    // LocalStorage checking logic on runtime initialize
    if (localStorage.getItem("luxuryTheme") === "sand") {
        document.body.classList.add("luxury-sand-theme");
        switcherBtn.innerHTML = `<i class="fa-solid fa-moon text-xs"></i>`;
    }

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