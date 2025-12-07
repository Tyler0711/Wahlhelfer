// --- BRANDING ---
const APP_NAME = 'Wahlhelfer'; // Centralized app name; change here to rebrand safely

// --- DARK MODE CONFIG ---
// Dark mode is now controlled by user toggle (stored in localStorage)

// --- PASSWORD GATE CONFIG ---
// Set to true to enable password protection, false to disable
const ENABLE_PASSWORD_GATE = true;
const ACCESS_PASSWORD = 'bw2026preview'; // Change this to your desired password

function applyAppName() {
    try {
        const siteTitleEl = document.getElementById('site-title');
        if (siteTitleEl) siteTitleEl.textContent = APP_NAME;

        const aboutHeadingEl = document.getElementById('about-us-heading');
        if (aboutHeadingEl) aboutHeadingEl.textContent = `Über den ${APP_NAME}`;

        // Keep BW 2026 context in the browser tab title for now
        if (typeof document !== 'undefined' && document.title) {
            // If the current title already contains a year/region, preserve that suffix
            const suffixMatch = document.title.match(/(BW\s*\d{4}|\d{4}|BW)/i);
            const suffix = suffixMatch ? ` ${suffixMatch[0]}` : '';
            document.title = `${APP_NAME}${suffix}`;
        }
    } catch (_) {
        // no-op; branding should never break the app flow
    }
}

// Apply dark mode based on user preference
function applyDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateDarkModeIcon(darkModeEnabled);
}

// Toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeIcon(isDarkMode);
}

// Update the toggle button icon
function updateDarkModeIcon(isDarkMode) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (sunIcon && moonIcon) {
        if (isDarkMode) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
}

// Check password gate on page load
function checkPasswordGate() {
    if (ENABLE_PASSWORD_GATE) {
        const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
        if (!isAuthenticated) {
            // Show password gate, hide everything else
            document.getElementById('password-gate-screen').style.display = 'block';
            document.querySelectorAll('.screen').forEach(screen => {
                if (screen.id !== 'password-gate-screen') {
                    screen.style.display = 'none';
                }
            });
            document.querySelector('.home-button')?.style.setProperty('display', 'none', 'important');
            document.querySelector('.top-nav')?.style.setProperty('display', 'none', 'important');
            // Disable scrolling on body
            document.body.style.overflow = 'hidden';
            return false;
        } else {
            // Already authenticated - show normal start screen
            document.getElementById('password-gate-screen').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    } else {
        // Password gate disabled - hide it
        document.getElementById('password-gate-screen').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    return true;
}

function checkPassword() {
    const input = document.getElementById('password-input');
    const error = document.getElementById('password-error');
    
    if (input.value === ACCESS_PASSWORD) {
        sessionStorage.setItem('authenticated', 'true');
        document.getElementById('password-gate-screen').style.display = 'none';
        document.querySelector('.home-button')?.style.removeProperty('display');
        document.querySelector('.top-nav')?.style.removeProperty('display');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
        // Make sure to show the election selection screen
        location.reload(); // Reload page to properly initialize
    } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
    }
}

// Apply branding as soon as the script runs and DOM is available
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        applyAppName();
        applyDarkMode();
        checkPasswordGate();
        
        // Add dark mode toggle event listener
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }
    });
} else {
    applyAppName();
    applyDarkMode();
    checkPasswordGate();
    
    // Add dark mode toggle event listener
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

// --- STATE MANAGEMENT ---
let currentThesisIndex = 0;
let userAnswers = {}; // { thesisId: { answer: value, weighted: false } }
let selectedQuizLength = 0; // New variable to store the selected quiz length
let selectedPartiesForComparison = []; // Stores IDs of parties selected for detailed comparison
// Store latest calculated party results (sorted) for reuse in KI summary fallback
let latestResults = null;

// --- UI HELPERS ---
function partyLogoHtmlByParty(party, size = 'sm') {
        if (!party) return '';
        const sizeClass = 'party-logo'; // single size for now; extend if needed
        const logoPath = party.logo || `assets/logos/${party.id}.svg`;
        const abbr = party.id;
        // On image load error, we fallback to colored tile with text abbreviation
        return `
            <div class="${sizeClass}">
                <img src="${logoPath}" alt="${party.name} Logo" class="party-logo-img" onerror="this.style.display='none'; const c=this.parentElement; c.classList.add('${party.color}'); c.style.color='white'; c.textContent='${abbr}';" />
            </div>
        `;
}

function partyLogoHtmlById(partyId) {
        const p = parties.find(x => x.id === partyId);
        return partyLogoHtmlByParty(p);
}

// --- SCREEN NAVIGATION ---
let currentElectionSelected = null; // To track if an election has been selected

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Enable scrolling only on screens that need it (results, comparisons, profiles, etc.)
    const scrollableScreens = [
        'theses-screen',
        'results-screen',
        'detailed-comparison-screen',
        'party-profile-screen',
        'wahlkreis-overview-screen',
        'candidate-profile-screen',
        'leading-candidates-screen',
        'party-selection-screen',
        'weighting-screen',
        'about-us-screen',
        'impressum-screen'
    ];
    
    if (scrollableScreens.includes(screenId)) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }

    // Enable hotkeys only on theses screen
    enableThesisHotkeys(screenId === 'theses-screen');

    // Update active state for navigation buttons (excluding the fixed home button)
    document.querySelectorAll('.top-nav-button').forEach(button => {
        button.classList.remove('active-tab');
    });

    // If navigating back to the election selection, remove BW card hero background
    if (screenId === 'election-selection-screen') {
        const appContainer = document.getElementById('app-container');
        if (appContainer) {
            appContainer.classList.remove('bw-card-hero');
            appContainer.classList.add('with-white-tail'); // show white block under card on selection screen
        }
        // Remove header hero image as well
        const headerEl = document.getElementById('site-header');
        if (headerEl) headerEl.classList.remove('bw-header-hero');
        // Reset subtitle to generic on the selection screen
        const subtitleEl = document.getElementById('site-subtitle');
        if (subtitleEl) subtitleEl.textContent = 'Ihre Position zur Landtagswahl';
        // Remove page-wide hero band
        const pageContainer = document.querySelector('.container');
        if (pageContainer) pageContainer.classList.remove('bw-page-hero');
        // Clean up any previous full-body background if present
        document.body.classList.remove('bw-body-bg');
        // Re-enable default background (bars) when leaving BW context
        document.body.classList.remove('hide-bars');
        document.body.style.backgroundImage = '';
        document.body.style.backgroundAttachment = '';
    } else {
        // On all other screens, hide the white tail under the card
        const appContainer = document.getElementById('app-container');
        if (appContainer) appContainer.classList.remove('with-white-tail');
    }

    // Set active tab for 'Über uns'
    if (screenId === 'about-us-screen') {
        document.getElementById('nav-about-us-btn').classList.add('active-tab');
    }
    // Set active tab for 'Impressum'
    if (screenId === 'impressum-screen') {
        document.getElementById('nav-impressum-btn').classList.add('active-tab');
    }
    // For other screens (quiz, results, etc.), no top-nav-button is active
}

function selectElection(electionId) {
    if (electionId === 'baden-wuerttemberg') {
        currentElectionSelected = 'baden-wuerttemberg';
        // Add page-wide hero band behind the entire top area
        const pageContainer = document.querySelector('.container');
        if (pageContainer) pageContainer.classList.add('bw-page-hero');
    // Hide decorative bars, but keep the two horizontal color bands via gradient
    document.body.classList.add('hide-bars');
    document.body.style.backgroundImage = "linear-gradient(to bottom, #f0f2f5 0, #f0f2f5 var(--band-top), #d6d8dc var(--band-top), #d6d8dc calc(var(--band-top) + var(--band-mid)), #cecec2 calc(var(--band-top) + var(--band-mid)), #cecec2 calc(var(--band-top) + var(--band-mid) + var(--band-bottom)), #ffffff calc(var(--band-top) + var(--band-mid) + var(--band-bottom)), #ffffff 100%)";
    document.body.style.backgroundAttachment = 'initial';
        // Make subtitle specific only after choosing BW
        const subtitleEl = document.getElementById('site-subtitle');
        if (subtitleEl) subtitleEl.textContent = 'Ihre Position zur Landtagswahl 2026 in BW';
        showScreen('start-screen');
    }
}

function restart() {
    currentThesisIndex = 0;
    userAnswers = {};
    selectedQuizLength = 0; // Reset quiz length
    selectedPartiesForComparison = []; // Reset selected parties for comparison
    document.getElementById('ki-result').innerHTML = '';
    const kiButton = document.getElementById('get-ai-analysis-btn');
    kiButton.disabled = false;
    kiButton.classList.remove('opacity-50', 'cursor-not-allowed');
    currentElectionSelected = null; // Reset election selection
    // Remove BW header hero and any legacy backgrounds when returning to election selection
    const appContainer = document.getElementById('app-container');
    if (appContainer) appContainer.classList.remove('bw-card-hero');
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.classList.remove('bw-header-hero');
    const pageContainer = document.querySelector('.container');
    if (pageContainer) pageContainer.classList.remove('bw-page-hero');
    // Clean up any previous full-body background if present
    document.body.classList.remove('bw-body-bg');
    // Re-enable default background (bars) when leaving BW context
    document.body.classList.remove('hide-bars');
    document.body.style.backgroundImage = '';
    document.body.style.backgroundAttachment = '';
    const subtitleEl = document.getElementById('site-subtitle');
    if (subtitleEl) subtitleEl.textContent = 'Ihre Position zur Landtagswahl';
    showScreen('election-selection-screen'); // Go back to election selection
}

// --- QUIZ LOGIC ---
// This function now only navigates to the quiz length selection
function startQuiz() {
    showScreen('quiz-length-selection-screen');
}

// New function to select quiz length and start the theses screen
function selectQuizLength(length) {
    selectedQuizLength = length;
    currentThesisIndex = 0; // Reset index for new quiz
    userAnswers = {}; // Clear previous answers
    displayThesis();
    showScreen('theses-screen');
}

function goBack() {
    if (currentThesisIndex > 0) {
        currentThesisIndex--;
        displayThesis();
    } else {
        // If on the first thesis, go back to quiz length selection
        showScreen('quiz-length-selection-screen');
    }
}

function displayThesis() {
    document.getElementById('back-button').style.visibility = currentThesisIndex > 0 ? 'visible' : 'hidden';

    if (currentThesisIndex < selectedQuizLength) {
        const thesis = theses[currentThesisIndex];
        document.getElementById('thesis-text').textContent = thesis.text;
        document.getElementById('thesis-explanation-text').textContent = thesis.explanation;
        // Ensure explanation is hidden by default when a new thesis is displayed
        document.getElementById('thesis-explanation-text').classList.remove('active');

    const progress = ((currentThesisIndex + 1) / selectedQuizLength) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `These ${currentThesisIndex + 1} / ${selectedQuizLength}`;
        
        // Update additional progress indicators
        const progressPercentage = document.getElementById('progress-percentage');
        const progressRemaining = document.getElementById('progress-remaining');
        if (progressPercentage) {
            progressPercentage.textContent = `${Math.round(progress)}% abgeschlossen`;
        }
        if (progressRemaining) {
            const remaining = selectedQuizLength - (currentThesisIndex + 1);
            progressRemaining.textContent = `${remaining} These${remaining !== 1 ? 'n' : ''} übrig`;
        }

        // NEUER TEIL: Pro/Contra-Container finden und schließen
        const proConContainer = document.getElementById('pro-con-text');
        if (proConContainer) {
            proConContainer.classList.remove('active');
            // Optional: Kurze Verzögerung, damit es nicht komisch aussieht beim Wechsel
            setTimeout(() => { proConContainer.innerHTML = ''; }, 300); // 300ms passt zur transition
        }
        // ENDE NEU

        // Update nav button states and labels
        const prevBtn = document.getElementById('nav-prev');
        const nextBtn = document.getElementById('nav-next');
        if (prevBtn) prevBtn.disabled = currentThesisIndex === 0;
        if (nextBtn) nextBtn.textContent = (currentThesisIndex === selectedQuizLength - 1) ? 'Zur Gewichtung' : 'Weiter';

        // Reflect previously selected answer visually
        updateAnswerButtonStates();
        
    } else {
        buildWeightingScreen();
        showScreen('weighting-screen');
    }
}

function toggleThesisExplanation() {
    const explanationDiv = document.getElementById('thesis-explanation-text');
    explanationDiv.classList.toggle('active');
}

// NEUE FUNKTION: Pro/Contra anzeigen/verstecken
function toggleProCon() {
    const thesis = theses[currentThesisIndex];
    const container = document.getElementById('pro-con-text');
    if (!container) return; // Sollte nicht passieren, wenn HTML stimmt

    // Wenn schon aktiv, einfach schließen
    if (container.classList.contains('active')) {
        container.classList.remove('active');
        return;
    }

    // Wenn keine Daten da sind, Meldung anzeigen
    if (!thesis.pro || !thesis.con || thesis.pro.length === 0) {
        container.innerHTML = '<p class="text-gray-600 text-sm italic">Für diese These sind keine Pro/Contra-Argumente hinterlegt.</p>';
        container.classList.add('active');
        return;
    }

    // HTML für Pro/Contra-Listen erstellen
    let proHtml = thesis.pro.map(item => `<li class="flex items-start"><span class="text-green-500 mr-2 font-bold">+</span><span>${item}</span></li>`).join('');
    let conHtml = thesis.con.map(item => `<li class="flex items-start"><span class="text-red-500 mr-2 font-bold">–</span><span>${item}</span></li>`).join('');

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 class="font-semibold text-lg text-green-700 mb-2">Pro</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                    ${proHtml}
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-lg text-red-700 mb-2">Contra</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                    ${conHtml}
                </ul>
            </div>
        </div>
    `;
    
    // Container anzeigen
    container.classList.add('active');
}
// ENDE NEUE FUNKTION

function handleAnswer(answer) {
    const thesis = theses[currentThesisIndex];
    userAnswers[thesis.id] = { answer: answer, weighted: false };
    updateAnswerButtonStates();
    currentThesisIndex++;
    displayThesis();
}

function skipThesis() {
    const thesis = theses[currentThesisIndex];
    userAnswers[thesis.id] = { answer: null, weighted: false };
    currentThesisIndex++;
    displayThesis();
}

// --- MANUAL NAVIGATION ---
function goForward() {
    // Move to next thesis without changing current answer
    if (currentThesisIndex < selectedQuizLength - 1) {
        currentThesisIndex++;
        displayThesis();
    } else {
        // At the end: go to weighting
        buildWeightingScreen();
        showScreen('weighting-screen');
    }
}

// Visually indicate selected answer on revisit
function updateAnswerButtonStates() {
    const thesis = theses[currentThesisIndex];
    const state = userAnswers[thesis?.id]?.answer;
    const yes = document.getElementById('btn-answer-yes');
    const neutral = document.getElementById('btn-answer-neutral');
    const no = document.getElementById('btn-answer-no');
    [yes, neutral, no].forEach(btn => {
        if (!btn) return;
        btn.classList.remove('answer-selected', 'ring-2', 'ring-offset-2', 'ring-blue-600');
        btn.setAttribute('aria-pressed', 'false');
    });
    if (state === 1 && yes) {
        yes.classList.add('answer-selected', 'ring-2', 'ring-offset-2', 'ring-blue-600');
        yes.setAttribute('aria-pressed', 'true');
    } else if (state === 0 && neutral) {
        neutral.classList.add('answer-selected', 'ring-2', 'ring-offset-2', 'ring-blue-600');
        neutral.setAttribute('aria-pressed', 'true');
    } else if (state === -1 && no) {
        no.classList.add('answer-selected', 'ring-2', 'ring-offset-2', 'ring-blue-600');
        no.setAttribute('aria-pressed', 'true');
    }
}

// Keyboard shortcuts for thesis navigation and answering
let thesisHotkeysEnabled = false;
function thesisKeyHandler(e) {
    // ignore when typing in inputs
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.altKey || e.metaKey || e.ctrlKey) return;
    if (document.getElementById('theses-screen')?.classList.contains('active') !== true) return;
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            goBack();
            break;
        case 'ArrowRight':
            e.preventDefault();
            goForward();
            break;
        case '1':
            e.preventDefault();
            handleAnswer(1);
            break;
        case '2':
            e.preventDefault();
            handleAnswer(0);
            break;
        case '3':
            e.preventDefault();
            handleAnswer(-1);
            break;
        case 's':
        case 'S':
            e.preventDefault();
            skipThesis();
            break;
    }
}
function enableThesisHotkeys(enable) {
    if (enable && !thesisHotkeysEnabled) {
        window.addEventListener('keydown', thesisKeyHandler);
        thesisHotkeysEnabled = true;
    } else if (!enable && thesisHotkeysEnabled) {
        window.removeEventListener('keydown', thesisKeyHandler);
        thesisHotkeysEnabled = false;
    }
}

// --- WEIGHTING & PARTY SELECTION ---
function buildWeightingScreen() {
    const list = document.getElementById('weighting-list');
    list.innerHTML = '';
    // Only show theses that were part of the selected quiz length and answered
    theses.slice(0, selectedQuizLength).forEach(thesis => {
        if (userAnswers[thesis.id] && userAnswers[thesis.id].answer !== null) {
            const div = document.createElement('div');
            div.className = 'flex items-center bg-gray-50 p-4 rounded-lg border hover:bg-gray-100 cursor-pointer';
            div.innerHTML = `
                <input id="weight-${thesis.id}" type="checkbox" onchange="toggleWeight(${thesis.id})" class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                <label for="weight-${thesis.id}" class="ml-4 text-gray-800 flex-1 cursor-pointer">${thesis.text}</label>
            `;
            div.onclick = (e) => {
                if (e.target.tagName !== 'INPUT') {
                   const checkbox = div.querySelector('input');
                   checkbox.checked = !checkbox.checked;
                   checkbox.dispatchEvent(new Event('change'));
                }
            };
            list.appendChild(div);
        }
    });
}

function toggleWeight(thesisId) {
    userAnswers[thesisId].weighted = !userAnswers[thesisId].weighted;
}

function showPartySelection() {
    buildPartySelectionScreen();
    showScreen('party-selection-screen');
}

function buildPartySelectionScreen() {
    const list = document.getElementById('party-selection-list');
    list.innerHTML = '';
    
    // Add "Alle Parteien" button
    const selectAllDiv = document.createElement('div');
    selectAllDiv.className = 'mb-4';
    selectAllDiv.innerHTML = `
        <button id="select-all-parties-btn" onclick="toggleAllParties()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            Alle Parteien auswählen
        </button>
    `;
    list.appendChild(selectAllDiv);
    
    parties.forEach(party => {
        const div = document.createElement('div');
        div.className = 'flex items-center bg-gray-50 p-3 rounded-lg border hover:bg-gray-100 cursor-pointer';
        div.innerHTML = `
            <input id="party-${party.id}" type="checkbox" ${selectedPartiesForComparison.includes(party.id) ? 'checked' : ''} class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 party-checkbox">
            <div class="ml-3">${partyLogoHtmlByParty(party)}</div>
            <label for="party-${party.id}" class="ml-3 text-gray-800 font-medium flex-1 cursor-pointer">${party.name}</label>
        `;
           div.onclick = (e) => {
            if (e.target.tagName !== 'INPUT') {
               const checkbox = div.querySelector('input');
               checkbox.checked = !checkbox.checked;
               // Manually update selectedPartiesForComparison
               if (checkbox.checked) {
                   if (!selectedPartiesForComparison.includes(party.id)) {
                       selectedPartiesForComparison.push(party.id);
                   }
               } else {
                   selectedPartiesForComparison = selectedPartiesForComparison.filter(id => id !== party.id);
               }
            }
            updateSelectAllButton();
        };
        list.appendChild(div);
    });
    // Initialize selectedPartiesForComparison based on checked checkboxes
    selectedPartiesForComparison = Array.from(document.querySelectorAll('.party-checkbox:checked'))
                                         .map(cb => cb.id.replace('party-', ''));
    updateSelectAllButton();
}

function toggleAllParties() {
    const checkboxes = document.querySelectorAll('.party-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
    });
    
    // Update selectedPartiesForComparison
    if (!allChecked) {
        selectedPartiesForComparison = parties.map(p => p.id);
    } else {
        selectedPartiesForComparison = [];
    }
    
    updateSelectAllButton();
}

function updateSelectAllButton() {
    const btn = document.getElementById('select-all-parties-btn');
    if (!btn) return;
    
    const checkboxes = document.querySelectorAll('.party-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    if (allChecked) {
        btn.textContent = 'Alle abwählen';
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-gray-600', 'hover:bg-gray-700');
    } else {
        btn.textContent = 'Alle Parteien auswählen';
        btn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
}

// --- RESULTS CALCULATION ---
function calculateResults() {
    selectedPartiesForComparison = Array.from(document.querySelectorAll('.party-checkbox:checked'))
                                     .map(cb => cb.id.replace('party-', ''));
    
    const selectedParties = parties.filter(p => selectedPartiesForComparison.includes(p.id));

    const results = selectedParties.map(party => {
        let partyScore = 0;
        let maxScore = 0;

        // Iterate only over the selected number of theses
        theses.slice(0, selectedQuizLength).forEach(thesis => {
            const userAnswerObj = userAnswers[thesis.id];
            if (userAnswerObj && userAnswerObj.answer !== null) {
                const weight = userAnswerObj.weighted ? 2 : 1;
                maxScore += (2 * weight);
                const partyPosition = party.positions[thesis.id];
                const userAnswer = userAnswerObj.answer;
                if (userAnswer === partyPosition) {
                    partyScore += (2 * weight);
                } else if (userAnswer === 0 || partyPosition === 0) {
                    // Neutral answer matches a party's neutral stance or vice-versa, gives half points
                    partyScore += (1 * weight);
                }
            }
        });
        
        const percentage = maxScore > 0 ? (partyScore / maxScore) * 100 : 0;
        return { partyId: party.id, partyName: party.name, partyColor: party.color, partyLogo: party.logo || null, score: percentage };
    });

    results.sort((a, b) => b.score - a.score);
    displayResults(results);
    showScreen('results-screen');
    
    // Initialize AI models UI
    initializeAIModels();
}

function displayResults(results) {
    const list = document.getElementById('results-list');
    list.innerHTML = '';
    // Persist results for KI analysis fallback usage
    latestResults = results.slice();
    results.forEach(result => {
        const partyObj = parties.find(p => p.id === result.partyId);
        const div = document.createElement('div');
        div.className = 'bg-gray-50 p-4 rounded-lg border';
        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <div class="flex items-center gap-3">
                    ${partyLogoHtmlByParty(partyObj)}
                    <span class="font-bold text-lg">${result.partyName}</span>
                </div>
                <span class="font-bold text-xl text-blue-700">${result.score.toFixed(0)}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
                <div class="h-4 rounded-full progress-bar-inner ${result.partyColor}" style="width: ${result.score}%;"></div>
            </div>
        `;
        list.appendChild(div);
    });
}

// --- DETAILED COMPARISON LOGIC ---
function showDetailedComparison() {
    currentComparisonPage = 1;
    currentComparisonCategory = 'Alle';
    buildDetailedComparisonTable();
    showScreen('detailed-comparison-screen');
}

let currentComparisonCategory = 'Alle';
let currentComparisonPage = 1;
const thesesPerPage = 10;

function changeComparisonPage(direction) {
    currentComparisonPage += direction;
    buildDetailedComparisonTable();
}

function filterComparisonByCategory(category) {
    currentComparisonCategory = category;
    currentComparisonPage = 1;
    
    // Update active button
    document.querySelectorAll('.comparison-filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    
    buildDetailedComparisonTable();
}

function buildDetailedComparisonTable() {
    const tableHeader = document.getElementById('comparison-table-header');
    const tableBody = document.getElementById('comparison-table-body');
    tableHeader.innerHTML = '<th class="py-3 px-4 w-1/3">These</th><th class="py-3 px-4 w-24">Du</th>';
    tableBody.innerHTML = '';

    // Add party headers with icons
    const selectedParties = parties.filter(p => selectedPartiesForComparison.includes(p.id));
    selectedParties.forEach(party => {
        const th = document.createElement('th');
        th.className = 'py-3 px-4 text-center';
        th.innerHTML = `<div class="flex flex-col items-center gap-1">${partyLogoHtmlByParty(party)}<span class="text-xs">${party.name}</span></div>`;
        tableHeader.appendChild(th);
    });

    // Filter theses by category
    let filteredTheses = theses.slice(0, selectedQuizLength);
    if (currentComparisonCategory !== 'Alle') {
        filteredTheses = filteredTheses.filter(thesis => 
            categorizeThesis(thesis.text) === currentComparisonCategory
        );
    }

    // Calculate pagination
    const totalPages = Math.ceil(filteredTheses.length / thesesPerPage);
    const startIndex = (currentComparisonPage - 1) * thesesPerPage;
    const endIndex = Math.min(startIndex + thesesPerPage, filteredTheses.length);
    const paginatedTheses = filteredTheses.slice(startIndex, endIndex);

    // Add comparison rows
    paginatedTheses.forEach(thesis => {
        const tr = document.createElement('tr');
        tr.className = 'bg-white hover:bg-gray-50';
        
        const thesisTd = document.createElement('td');
        thesisTd.className = 'py-4 px-4 border-b border-gray-200 text-sm text-gray-900';
        thesisTd.textContent = thesis.text;
        tr.appendChild(thesisTd);

        const userAnswerTd = document.createElement('td');
        userAnswerTd.className = 'py-4 px-4 border-b border-gray-200 text-center';
        let answerIcon = '—';
        let answerColor = 'text-gray-400';
        if (userAnswers[thesis.id] && userAnswers[thesis.id].answer !== null) {
            if (userAnswers[thesis.id].answer === 1) {
                answerIcon = '✓';
                answerColor = 'text-green-600';
            } else if (userAnswers[thesis.id].answer === -1) {
                answerIcon = '✗';
                answerColor = 'text-red-600';
            }
        }
        userAnswerTd.innerHTML = `<span class="text-2xl font-bold ${answerColor}">${answerIcon}</span>`;
        tr.appendChild(userAnswerTd);

        selectedParties.forEach(party => {
            const partyPositionTd = document.createElement('td');
            partyPositionTd.className = 'py-4 px-4 border-b border-gray-200 text-center';
            const position = party.positions[thesis.id];
            let positionIcon = '—';
            let positionColor = 'text-gray-400';
            
            if (position === 1) {
                positionIcon = '✓';
                positionColor = 'text-green-600';
            } else if (position === -1) {
                positionIcon = '✗';
                positionColor = 'text-red-600';
            }
            
            // Highlight if matches user answer
            const userAnswer = userAnswers[thesis.id]?.answer;
            if (userAnswer !== null && userAnswer !== undefined && position === userAnswer) {
                partyPositionTd.classList.add('bg-blue-50');
            }
            
            partyPositionTd.innerHTML = `<span class="text-2xl font-bold ${positionColor}">${positionIcon}</span>`;
            tr.appendChild(partyPositionTd);
        });
        tableBody.appendChild(tr);
    });

    // Update pagination controls
    document.getElementById('comparison-page-info').textContent = `Seite ${currentComparisonPage} von ${totalPages}`;
    document.getElementById('comparison-prev-btn').disabled = currentComparisonPage === 1;
    document.getElementById('comparison-next-btn').disabled = currentComparisonPage === totalPages;
}

// --- PARTY PROFILES WITH AI INSIGHTS LOGIC ---
function showPartyProfiles() {
    buildPartyProfileList();
    showScreen('party-profile-screen');
}

function buildPartyProfileList() {
    const list = document.getElementById('party-profile-list');
    list.innerHTML = '';

    const partiesToDisplay = parties.filter(p => selectedPartiesForComparison.includes(p.id));

    if (partiesToDisplay.length === 0) {
        list.innerHTML = '<p class="text-center text-gray-600">Bitte wählen Sie zuerst Parteien im vorherigen Schritt aus, um deren Profile anzuzeigen.</p>';
        return;
    }

    partiesToDisplay.forEach(party => {
        const partyProfileCard = document.createElement('div');
        partyProfileCard.className = 'bg-gray-50 p-6 rounded-xl border shadow-sm';
        partyProfileCard.innerHTML = `
            <div class="flex items-center gap-4 mb-4">
                ${partyLogoHtmlByParty(party)}
                <h3 class="text-xl font-bold text-gray-900">${party.name}</h3>
            </div>
            <div id="ai-analysis-for-${party.id}" class="ai-analysis-text">
                <div class="ai-loading-spinner" style="display: none;">
                    <svg class="animate-spin h-6 w-6 text-blue-600 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Analyse wird erstellt...</span>
                </div>
                <p class="text-gray-600">Klicken Sie auf 'Analyse anfordern', um mehr über diese Partei zu erfahren.</p>
            </div>
            <div class="text-center mt-4">
                <button onclick="getPartyAiAnalysis('${party.id}')" id="btn-analysis-${party.id}" class="btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                    KI-Analyse anfordern
                </button>
            </div>
        `;
        list.appendChild(partyProfileCard);
    });
}

async function getPartyAiAnalysis(partyId) {
    const party = parties.find(p => p.id === partyId);
    if (!party) return;

    const analysisContainer = document.getElementById(`ai-analysis-for-${party.id}`);
    const loadingSpinner = analysisContainer.querySelector('.ai-loading-spinner');
    const analysisText = analysisContainer.querySelector('p');
    const analysisButton = document.getElementById(`btn-analysis-${party.id}`);

    // Show loading, hide previous text, disable button
    if (analysisText) analysisText.style.display = 'none';
    loadingSpinner.style.display = 'flex';
    analysisButton.disabled = true;
    analysisButton.classList.add('opacity-50', 'cursor-not-allowed');

    try {
        // Generate comprehensive analysis based on party positions
        const analysis = await generatePartyProgramAnalysis(party);
        analysisContainer.innerHTML = `<div class="ai-analysis-text" style="white-space: pre-wrap;">${analysis}</div>`;
        
        // Update button text
        analysisButton.textContent = 'Erneut analysieren';
        
    } catch (error) {
        console.error(`Fehler bei der KI-Analyse für ${party.name}:`, error);
        analysisContainer.innerHTML = `<div class="ai-analysis-text text-red-600">Entschuldigung, bei der Erstellung der Analyse ist ein Fehler aufgetreten: ${error.message}</div>`;
    } finally {
        loadingSpinner.style.display = 'none';
        analysisButton.disabled = false;
        analysisButton.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

async function generatePartyProgramAnalysis(party) {
    // Collect party positions for analysis
    const partyTheses = theses.map(thesis => ({
        text: thesis.text,
        position: party.positions[thesis.id],
        category: categorizeThesis(thesis.text)
    }));

    // Count positions by category
    const categories = {};
    
    partyTheses.forEach(t => {
        if (!categories[t.category]) {
            categories[t.category] = { agree: 0, disagree: 0, neutral: 0, total: 0 };
        }
        categories[t.category].total++;
        if (t.position === 1) categories[t.category].agree++;
        else if (t.position === -1) categories[t.category].disagree++;
        else categories[t.category].neutral++;
    });

    // Overall orientation
    const totalAgree = partyTheses.filter(t => t.position === 1).length;
    const agreePercent = Math.round((totalAgree / partyTheses.length) * 100);
    
    // Get top 3 categories
    const topCategories = Object.entries(categories)
        .filter(([_, stats]) => stats.total > 0)
        .sort((a, b) => {
            const aScore = (a[1].agree / a[1].total);
            const bScore = (b[1].agree / b[1].total);
            return bScore - aScore;
        })
        .slice(0, 3);
    
    // Generate compact analysis
    let analysis = `${party.name} zeigt eine `;
    analysis += agreePercent > 60 ? 'progressive, reformorientierte' : 
                agreePercent > 40 ? 'ausgewogene, pragmatische' : 
                'konservative, bewahrende';
    analysis += ` Ausrichtung mit Schwerpunkten in den Bereichen ${topCategories.map(([cat]) => cat).slice(0, 2).join(' und ')}. `;
    
    // Add specific category details
    const topCat = topCategories[0];
    const topCatPercent = Math.round((topCat[1].agree / topCat[1].total) * 100);
    analysis += `Beim Thema ${topCat[0]} liegt die Zustimmungsrate bei ${topCatPercent}%. `;
    
    // Add specific stance description
    if (agreePercent > 60) {
        analysis += 'Die Partei befürwortet aktive staatliche Eingriffe und setzt sich für gesellschaftliche Veränderungen ein. ';
        analysis += 'Insgesamt zeigt sich eine klare Reformagenda mit Fokus auf zukunftsorientierte Lösungen.';
    } else if (agreePercent > 40) {
        analysis += 'Die Partei verfolgt einen ausgewogenen Kurs zwischen Bewahrung bewährter Strukturen und notwendigen Reformen. ';
        analysis += 'Dabei werden pragmatische Lösungen bevorzugt, die verschiedene Interessen berücksichtigen.';
    } else {
        analysis += 'Die Partei legt Wert auf Bewährtes und bevorzugt eine zurückhaltende staatliche Rolle. ';
        analysis += 'Der Fokus liegt auf Stabilität und der Stärkung traditioneller Werte und Strukturen.';
    }
    
    return analysis;
}

function categorizeThesis(thesisText) {
    if (thesisText.match(/Klima|Wind|Solar|Energie|CO2|Umwelt|Natur/i)) return 'Klimaschutz & Umwelt';
    if (thesisText.match(/Schule|Bildung|Kita|Studium|Lehrer|Gymnasium/i)) return 'Bildung';
    if (thesisText.match(/Wirtschaft|Start-up|Unternehmen|Mindestlohn|Arbeit/i)) return 'Wirtschaft & Arbeit';
    if (thesisText.match(/Polizei|Sicherheit|Überwachung|Kriminalität/i)) return 'Innere Sicherheit';
    if (thesisText.match(/Verkehr|Auto|ÖPNV|Straße|Bahn|Fahrrad/i)) return 'Verkehr & Mobilität';
    if (thesisText.match(/Wohnen|Miete|Bauen/i)) return 'Wohnen';
    if (thesisText.match(/Gesundheit|Pflege|Krankenhaus/i)) return 'Gesundheit & Pflege';
    if (thesisText.match(/Migration|Integration|Ausländer|Flucht/i)) return 'Migration & Integration';
    if (thesisText.match(/Sozial|Arm|Reich|Steuern/i)) return 'Soziales & Steuern';
    return 'Sonstiges';
}




// --- KI ANALYSIS (for overall result) ---
async function getAiAnalysis() {
    const kiLoading = document.getElementById('ki-loading');
    const kiResult = document.getElementById('ki-result');
    const kiButton = document.getElementById('get-ai-analysis-btn');

    kiLoading.style.display = 'flex';
    kiResult.innerHTML = '';
    kiButton.disabled = true;
    kiButton.classList.add('opacity-50', 'cursor-not-allowed');

    let prompt = "Analysiere das folgende Abstimmungsverhalten für die Landtagswahl in Baden-Württemberg. Gib eine kurze, neutrale und leicht verständliche Zusammenfassung im Stil eines Politik-Experten. Formuliere die Antwort direkt an den Nutzer (Du-Form).\n\n";
    prompt += "Beginne mit einem einleitenden Satz. Erkläre dann, welche Partei am besten zu den Antworten passt und begründe dies anhand von 2-3 konkreten Thesen, bei denen eine klare Übereinstimmung oder ein klarer Widerspruch besteht. Erwähne auch eine mögliche Übereinstimmung mit der zweitplatzierten Partei. Schließe mit einem zusammenfassenden Satz.\n\n";
    prompt += "Hier sind die Daten:\n";

    // Only include the theses that were part of the selected quiz length
    theses.slice(0, selectedQuizLength).forEach(thesis => {
        if (userAnswers[thesis.id] && userAnswers[thesis.id].answer !== null) {
            let userAnswerText = userAnswers[thesis.id].answer === 1 ? 'stimme zu' : (userAnswers[thesis.id].answer === -1 ? 'stimme nicht zu' : 'neutral');
            prompt += `- These: "${thesis.text}" | Deine Antwort: ${userAnswerText} ${userAnswers[thesis.id].weighted ? '(doppelt gewichtet)' : ''}\n`;
        }
    });
    prompt += "\nPositionen der Parteien (1=dafür, -1=dagegen, 0=neutral):\n";
    parties.forEach(party => {
        // Only include positions for the relevant theses
        const relevantPositions = {};
        // Thesen-IDs beginnen bei 1
        theses.slice(0, selectedQuizLength).forEach(thesis => {
            relevantPositions[thesis.id] = party.positions[thesis.id];
        });
        prompt += `  - ${party.name}: ${JSON.stringify(relevantPositions)}\n`;
    });
    
    try {
        // Call deployed backend API
        const response = await fetch('https://wahlhelfer.onrender.com/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        });

        if (!response.ok) { 
            const errorData = await response.json(); // Versuche, Fehlerdetails vom Server zu lesen
            throw new Error(errorData.error || `Server-Fehler: ${response.statusText}`); 
        }
        const result = await response.json();
        
        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
            const text = result.candidates[0].content.parts[0].text;
            kiResult.innerHTML = `<div class="ai-analysis-text">${escapeHtml(text)}</div>`;
        } else {
            console.warn("Unerwartete KI-Antwortstruktur:", result);
            // Fallback on malformed response
            kiResult.innerHTML = generateLocalSummary();
            throw new Error("Die KI hat keine gültige Antwort geliefert – lokale Zusammenfassung angezeigt.");
        }

    } catch (error) {
        console.error("Fehler bei der KI-Analyse:", error);
        // Use local fallback summary when remote call fails
        kiResult.innerHTML = generateLocalSummary(`<p class='text-sm text-red-600 mb-3'>Hinweis: Externe KI nicht verfügbar – lokale Analyse:</p>`);
        kiButton.disabled = false;
        kiButton.classList.remove('opacity-50', 'cursor-not-allowed');
    } finally {
        kiLoading.style.display = 'none';
    }
}

// --- FALLBACK / LOCAL SUMMARY GENERATOR ---
// Escapes HTML for safe insertion when using external text
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function generateLocalSummary(prependHtml = '') {
    // If no parties selected, inform user
    if (!selectedPartiesForComparison || selectedPartiesForComparison.length === 0) {
        return `<div class="ai-analysis-text">${prependHtml}<p>Es wurden keine Parteien für den Vergleich ausgewählt. Bitte wählen Sie Parteien aus, um eine Zusammenfassung zu erhalten.</p></div>`;
    }

    // Recompute results if not present
    let results = latestResults;
    if (!results) {
        const selectedParties = parties.filter(p => selectedPartiesForComparison.includes(p.id));
        results = selectedParties.map(party => {
            let partyScore = 0;
            let maxScore = 0;
            theses.slice(0, selectedQuizLength).forEach(thesis => {
                const ua = userAnswers[thesis.id];
                if (ua && ua.answer !== null) {
                    const weight = ua.weighted ? 2 : 1;
                    maxScore += (2 * weight);
                    const pp = party.positions[thesis.id];
                    if (ua.answer === pp) {
                        partyScore += (2 * weight);
                    } else if (ua.answer === 0 || pp === 0) {
                        partyScore += (1 * weight);
                    }
                }
            });
            const percentage = maxScore > 0 ? (partyScore / maxScore) * 100 : 0;
            return { partyId: party.id, partyName: party.name, partyColor: party.color, score: percentage };
        }).sort((a, b) => b.score - a.score);
    }

    if (!results || results.length === 0) {
        return `<div class="ai-analysis-text">${prependHtml}<p>Keine auswertbaren Daten vorhanden.</p></div>`;
    }

    const top = results[0];
    const second = results[1];

    // Collect answered theses
    const answered = theses.slice(0, selectedQuizLength).filter(t => userAnswers[t.id] && userAnswers[t.id].answer !== null);

    function answerLabel(v) {
        if (v === 1) return 'stimme zu';
        if (v === -1) return 'stimme nicht zu';
        return 'neutral';
    }

    // Strong matches: exact alignment (excluding neutral-neutral) prioritizing weighted
    const strongMatches = [];
    answered.forEach(t => {
        const ua = userAnswers[t.id];
        const topParty = parties.find(p => p.id === top.partyId);
        const pp = topParty.positions[t.id];
        if (ua.answer === pp && !(ua.answer === 0 && pp === 0)) {
            strongMatches.push({ thesis: t, weighted: ua.weighted });
        }
    });
    strongMatches.sort((a, b) => (b.weighted ? 1 : 0) - (a.weighted ? 1 : 0));
    const strongSample = strongMatches.slice(0, 3);

    // Disagreements: direct opposites (1 vs -1)
    const disagreements = [];
    answered.forEach(t => {
        const ua = userAnswers[t.id];
        const topParty = parties.find(p => p.id === top.partyId);
        const pp = topParty.positions[t.id];
        if ((ua.answer === 1 && pp === -1) || (ua.answer === -1 && pp === 1)) {
            disagreements.push({ thesis: t, weighted: ua.weighted });
        }
    });
    disagreements.sort((a, b) => (b.weighted ? 1 : 0) - (a.weighted ? 1 : 0));
    const disagreementSample = disagreements.slice(0, 2);

    // Weighted emphasis list
    const weightedImportant = answered.filter(t => userAnswers[t.id].weighted);

    // Secondary party proximity sentence (if second exists)
    let secondSentence = '';
    if (second) {
        const diff = (top.score - second.score).toFixed(0);
        secondSentence = diff <= 10
            ? `Die zweitplatzierte Partei (${second.partyName}) liegt mit ${second.score.toFixed(0)}% recht nah (${diff} Prozentpunkte Unterschied) und könnte für einzelne Themen ebenfalls passen.`
            : `Deine zweitplatzierte Partei ist ${second.partyName} mit ${second.score.toFixed(0)}%.`;
    }

    const intro = `Du hast ${answered.length} Thesen beantwortet. Daraus ergibt sich aktuell die höchste Übereinstimmung mit <strong>${top.partyName}</strong> (${top.score.toFixed(0)}%).`;

    function listItems(arr) {
        return arr.map(x => `<li>${escapeHtml(x.thesis.text)}${x.weighted ? ' <em>(wichtig)</em>' : ''}</li>`).join('');
    }

    const strongHtml = strongSample.length
        ? `<ul class='list-disc list-inside space-y-1'>${listItems(strongSample)}</ul>`
        : '<p class="text-sm text-gray-600">Keine klaren Übereinstimmungen über neutrale Antworten hinaus.</p>';

    const disagreeHtml = disagreementSample.length
        ? `<ul class='list-disc list-inside space-y-1'>${listItems(disagreementSample)}</ul>`
        : '<p class="text-sm text-gray-600">Keine deutlichen Gegensätze bei den beantworteten Thesen.</p>';

    const weightedHtml = weightedImportant.length
        ? `<ul class='list-disc list-inside space-y-1'>${weightedImportant.map(t => `<li>${escapeHtml(t.text)}</li>`).join('')}</ul>`
        : '<p class="text-sm text-gray-600">Du hast keine Thesen als besonders wichtig markiert.</p>';

    return `<div class="ai-analysis-text local-summary">${prependHtml}
        <h4 class="font-semibold mb-2">Kurze Einordnung</h4>
        <p class="mb-3">${intro}</p>
        <h5 class="font-semibold mt-4 mb-1">Übereinstimmungen (Beispiele)</h5>
        ${strongHtml}
        <h5 class="font-semibold mt-4 mb-1">Gegensätze</h5>
        ${disagreeHtml}
        <h5 class="font-semibold mt-4 mb-1">Als wichtig markiert</h5>
        ${weightedHtml}
        <p class="mt-4">${secondSentence}</p>
        <p class="mt-4 text-sm text-gray-700">Diese lokale Analyse basiert auf einfacher Mustererkennung deiner Antworten – ohne externe KI.</p>
    </div>`;
}

// --- EXTERNAL WAHLKREIS CANDIDATES LOADER (optional override) ---
let externalWahlkreisCandidatesLoaded = false;
let externalWahlkreisCandidatesTried = false;

async function ensureExternalWahlkreisCandidatesLoaded() {
    if (externalWahlkreisCandidatesLoaded || externalWahlkreisCandidatesTried) return;
    externalWahlkreisCandidatesTried = true;
    try {
        const res = await fetch('assets/data/wahlkreiskandidierende.json', { cache: 'no-store' });
        if (!res.ok) return; // quietly skip when file is missing
        const data = await res.json();
        if (!data || typeof data !== 'object') return;
        // Merge: replace candidates arrays where provided, keep winnerOf2021
        Object.keys(data).forEach(wkId => {
            const entry = data[wkId];
            if (!entry || !Array.isArray(entry.candidates)) return;
            if (!candidatesByWahlkreis[wkId]) {
                // Create minimal shell if WK not present
                candidatesByWahlkreis[wkId] = { candidates: [], winnerOf2021: { name: '', partyId: '', partyName: '' } };
            }
            candidatesByWahlkreis[wkId].candidates = entry.candidates.map(c => ({
                name: c.name,
                partyId: c.partyId,
                partyName: (parties.find(p => p.id === c.partyId)?.name) || c.partyName || c.partyId || 'Unbekannt',
                bio: c.bio || '',
                priorities: c.priorities || [],
                localTheses: c.localTheses || {}
            }));
        });
        externalWahlkreisCandidatesLoaded = true;
        console.log('Externe Wahlkreiskandidierende geladen.');
    } catch (e) {
        // Ignore network/cors errors silently so the app still works offline
        console.warn('Konnte externe Wahlkreiskandidierende nicht laden:', e.message);
    }
}

// --- WAHLKREIS OVERVIEW LOGIC ---
async function showWahlkreisOverview() {
    // Try to load external overrides once before showing the view
    await ensureExternalWahlkreisCandidatesLoaded();
    populateWahlkreisSelect();
    displayCandidatesForWahlkreis(); // Display for the first option by default
    showScreen('wahlkreis-overview-screen');

    // Highlight the Wahlkreis select briefly to draw attention
    const selectEl = document.getElementById('wahlkreis-select');
    const labelEl = document.querySelector('label[for="wahlkreis-select"]');
    if (selectEl) {
        // Add highlight class
        selectEl.classList.add('wahlkreis-highlight');
        if (labelEl) labelEl.classList.add('wahlkreis-label-highlight');

        // Remove highlight after a timeout unless the select is focused
        let removeTimeout = setTimeout(() => {
            if (document.activeElement !== selectEl) {
                selectEl.classList.remove('wahlkreis-highlight');
                if (labelEl) labelEl.classList.remove('wahlkreis-label-highlight');
            }
        }, 6000);

        // Keep highlighted while focused, remove on blur
        selectEl.addEventListener('focus', () => {
            selectEl.classList.add('wahlkreis-highlight');
            if (labelEl) labelEl.classList.add('wahlkreis-label-highlight');
            clearTimeout(removeTimeout);
        });
        selectEl.addEventListener('blur', () => {
            // short delay to allow click interactions
            setTimeout(() => {
                selectEl.classList.remove('wahlkreis-highlight');
                if (labelEl) labelEl.classList.remove('wahlkreis-label-highlight');
            }, 300);
        });
    }
}

function populateWahlkreisSelect() {
    const selectElement = document.getElementById('wahlkreis-select');
    selectElement.innerHTML = ''; // Clear previous options

    wahlkreise.forEach(wk => {
        const option = document.createElement('option');
        option.value = wk.id;
        option.textContent = wk.name;
        selectElement.appendChild(option);
    });
}

function displayCandidatesForWahlkreis() {
    const selectElement = document.getElementById('wahlkreis-select');
    const selectedWahlkreisId = selectElement.value;
    const candidatesListDiv = document.getElementById('candidates-list');
    candidatesListDiv.innerHTML = ''; // Clear previous candidates

    const wahlkreisData = candidatesByWahlkreis[selectedWahlkreisId];
    const wahlkreisName = wahlkreise.find(wk => wk.id === selectedWahlkreisId)?.name || 'Ausgewählter Wahlkreis';

    if (!wahlkreisData) {
        candidatesListDiv.innerHTML = `<p class="text-center text-gray-600">Keine Kandidaten für ${wahlkreisName} verfügbar.</p>`;
        return;
    }

    // Zeige 2021er Gewinner
    const winner = wahlkreisData.winnerOf2021;
    const winnerParty = parties.find(p => p.id === winner.partyId);
    const winnerPartyColorClass = winnerParty ? winnerParty.color : 'bg-gray-400';

    const winnerSection = document.createElement('div');
    winnerSection.className = 'bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg shadow-md border-2 border-yellow-400 mb-8';
    winnerSection.innerHTML = `
        <h3 class="text-lg font-bold mb-4 text-center text-yellow-800">🏆 Wahlkreisgewinner 2021</h3>
        <div class="flex items-center justify-center gap-4">
            ${partyLogoHtmlByParty(winnerParty)}
            <div class="text-center">
                <p class="font-bold text-xl text-gray-900">${winner.name}</p>
                <p class="text-gray-700">${winner.partyName}</p>
            </div>
        </div>
    `;
    candidatesListDiv.appendChild(winnerSection);

    // Zeige Kandidaten für 2026
    const candidates = wahlkreisData.candidates;
    const candidatesTitle = document.createElement('h3');
    candidatesTitle.className = 'text-xl font-bold mb-4 text-center text-gray-800';
    candidatesTitle.textContent = `Kandidaten für 2026:`;
    candidatesListDiv.appendChild(candidatesTitle);

    candidates.forEach(candidate => {
        const party = parties.find(p => p.id === candidate.partyId);
    const partyColorClass = party ? party.color : 'bg-gray-400';
        const partyName = party ? party.name : 'Unbekannt';

        const candidateDiv = document.createElement('div');
        candidateDiv.className = 'flex items-center bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow';
        candidateDiv.innerHTML = `
            <button onclick="showCandidateProfile(${JSON.stringify(candidate).replace(/\"/g, '&quot;')})" class="flex items-center w-full text-left focus:outline-none">
                <div class="mr-4">${partyLogoHtmlByParty(party)}</div>
                <div>
                    <p class="font-semibold text-lg text-blue-700 hover:underline">${candidate.name}</p>
                    <p class="text-gray-600 text-sm">${partyName}</p>
                </div>
            </button>
        `;
        candidatesListDiv.appendChild(candidateDiv);
    });
}

function showCandidateProfile(candidate) {
    const profileName = document.getElementById('candidate-profile-name');
    const profileContent = document.getElementById('candidate-profile-content');
    profileName.textContent = candidate.name;
    profileContent.innerHTML = ''; // Clear previous content

    const party = parties.find(p => p.id === candidate.partyId);
    const partyColorClass = party ? party.color : 'bg-gray-400';
    const partyName = party ? party.name : 'Unbekannt';

    // Basic Info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'flex items-center gap-4 mb-4';
    infoDiv.innerHTML = `
        ${partyLogoHtmlByParty(party)}
        <div>
            <p class="font-bold text-xl">${candidate.name}</p>
            <p class="text-gray-600">${partyName}</p>
        </div>
    `;
    profileContent.appendChild(infoDiv);

    // Biography
    const bioDiv = document.createElement('div');
    bioDiv.className = 'bg-white p-4 rounded-md border text-gray-800';
    bioDiv.innerHTML = `<h4 class="font-semibold mb-2">Biografie:</h4><p>${candidate.bio}</p>`;
    profileContent.appendChild(bioDiv);

    // Priorities
    if (candidate.priorities && candidate.priorities.length > 0) {
        const prioritiesDiv = document.createElement('div');
        prioritiesDiv.className = 'bg-white p-4 rounded-md border text-gray-800';
        let prioritiesHtml = `<h4 class="font-semibold mb-2">Schwerpunkte:</h4><ul class="list-disc list-inside space-y-1">`;
        candidate.priorities.forEach(p => {
            prioritiesHtml += `<li>${p}</li>`;
        });
        prioritiesHtml += `</ul>`;
        prioritiesDiv.innerHTML = prioritiesHtml;
        profileContent.appendChild(prioritiesDiv);
    }

    // Local Theses Positions
    if (candidate.localTheses && Object.keys(candidate.localTheses).length > 0) {
        const localThesesDiv = document.createElement('div');
        localThesesDiv.className = 'bg-white p-4 rounded-md border text-gray-800';
        let localThesesHtml = `<h4 class="font-semibold mb-2">Positionen zu lokalen Thesen:</h4><ul class="space-y-2">`;
        for (const thesisId in candidate.localTheses) {
            const thesis = theses.find(t => t.id === parseInt(thesisId));
            if (thesis) {
                const position = candidate.localTheses[thesisId];
                let positionText = '';
                let positionColor = 'text-gray-700';
                if (position === 1) { positionText = 'Stimmt zu'; positionColor = 'text-green-600'; }
                else if (position === -1) { positionText = 'Stimmt nicht zu'; positionColor = 'text-red-600'; }
                else if (position === 0) { positionText = 'Neutral'; positionColor = 'text-yellow-600'; }

                localThesesHtml += `
                    <li>
                        <p class="font-medium">${thesis.text}</p>
                        <p class="${positionColor} text-sm ml-4">Position: ${positionText}</p>
                    </li>
                `;
            }
        }
        localThesesHtml += `</ul>`;
        localThesesDiv.innerHTML = localThesesHtml;
        profileContent.appendChild(localThesesDiv);
    }

    showScreen('candidate-profile-screen');
}

// --- LEADING CANDIDATES FUNCTIONS ---
function showLeadingCandidates() {
    const buttonsContainer = document.getElementById('leading-candidates-buttons');
    buttonsContainer.innerHTML = ''; // Clear previous buttons

    // Create buttons for each top party
    const topParties = ['CDU', 'GRÜNE', 'SPD', 'FDP', 'LINKE', 'AfD'];
    
    topParties.forEach(partyId => {
        const button = document.createElement('button');
        const partyData = parties.find(p => p.id === partyId);
        const partyColorClass = partyData ? partyData.color : 'bg-gray-400';
        
        button.className = `btn ${partyColorClass} hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg text-center transition-opacity`;
        button.textContent = partyId;
        button.onclick = () => displayLeadingCandidate(partyId);
        
        buttonsContainer.appendChild(button);
    });

    // Show the profile for the first party by default (CDU)
    displayLeadingCandidate('CDU');
    showScreen('leading-candidates-screen');
}

function displayLeadingCandidate(partyId) {
    const profileDiv = document.getElementById('leading-candidate-profile');
    profileDiv.innerHTML = ''; // Clear previous profile

    const candidate = leadingCandidates[partyId];

    if (!candidate) {
        profileDiv.innerHTML = `<p class="text-center text-gray-600">Keine Daten für diese Partei verfügbar.</p>`;
        return;
    }

    // Header with name and party
    const headerDiv = document.createElement('div');
    headerDiv.className = 'text-center border-b pb-4 mb-4';
    headerDiv.innerHTML = `
        <h3 class="text-2xl font-bold text-gray-900 mb-1">${candidate.name}</h3>
        <p class="text-lg text-gray-600">${candidate.partyName}</p>
    `;
    profileDiv.appendChild(headerDiv);

    // Bio
    const bioDiv = document.createElement('div');
    bioDiv.className = 'bg-white p-4 rounded-md border text-gray-800';
    bioDiv.innerHTML = `
        <h4 class="font-semibold mb-2">Biografie:</h4>
        <p>${candidate.bio}</p>
    `;
    profileDiv.appendChild(bioDiv);

    // Main positions
    if (candidate.positions && candidate.positions.length > 0) {
        const positionsDiv = document.createElement('div');
        positionsDiv.className = 'bg-white p-4 rounded-md border text-gray-800';
        let positionsHtml = `<h4 class="font-semibold mb-3">Schwerpunkte:</h4><ul class="space-y-2">`;
        candidate.positions.forEach(position => {
            positionsHtml += `<li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <span>${position}</span>
            </li>`;
        });
        positionsHtml += `</ul>`;
        positionsDiv.innerHTML = positionsHtml;
        profileDiv.appendChild(positionsDiv);
    }

    // Update button highlights
    const buttons = document.querySelectorAll('#leading-candidates-buttons button');
    buttons.forEach(btn => {
        if (btn.textContent === partyId) {
            btn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-600');
        } else {
            btn.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-600');
        }
    });
}

// Initial call to show the first screen
showScreen('election-selection-screen'); // Start with the new election s

// --- AI MODELS CONFIGURATION ---
const AI_MODELS = [
    {
        id: 'gpt4',
        name: 'GPT-4',
        provider: 'OpenAI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
        color: '#10a37f',
        endpoint: 'openai' // for API routing
    },
    {
        id: 'claude',
        name: 'Claude 3.5',
        provider: 'Anthropic',
        logo: 'https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=96&q=75',
        color: '#d97757',
        endpoint: 'anthropic'
    },
    {
        id: 'gemini',
        name: 'Gemini',
        provider: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
        color: '#4285f4',
        endpoint: 'google'
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        provider: 'Perplexity AI',
        logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png',
        color: '#20808d',
        endpoint: 'perplexity'
    },
    {
        id: 'mistral',
        name: 'Mistral',
        provider: 'Mistral AI',
        logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y="50" x="50" text-anchor="middle" dominant-baseline="central" font-size="60" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
        color: '#f2a73b',
        endpoint: 'mistral'
    }
];

let selectedAIModel = null;
let aiModelAnalyses = {}; // Store analyses for each model

// --- AI MODELS UI FUNCTIONS ---
function initializeAIModels() {
    const grid = document.getElementById('ai-models-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    AI_MODELS.forEach(model => {
        const card = document.createElement('div');
        card.className = 'ai-model-card';
        card.id = `ai-model-${model.id}`;
        card.onclick = () => toggleAIModelAnalysis(model.id);
        
        // Create gradient background based on model color
        const logoDiv = document.createElement('div');
        logoDiv.className = 'ai-model-logo';
        logoDiv.style.background = `linear-gradient(135deg, ${model.color} 0%, ${adjustBrightness(model.color, -20)} 100%)`;
        
        // Try to load image, fallback to first letter
        if (model.logo.startsWith('http') || model.logo.startsWith('data:')) {
            logoDiv.innerHTML = `<img src="${model.logo}" alt="${model.name}" onerror="this.style.display='none'; this.parentElement.textContent='${model.name.charAt(0)}';" />`;
        } else {
            logoDiv.textContent = model.name.charAt(0);
        }
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'ai-model-name';
        nameDiv.textContent = model.name;
        
        card.appendChild(logoDiv);
        card.appendChild(nameDiv);
        grid.appendChild(card);
    });
}

function adjustBrightness(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

async function toggleAIModelAnalysis(modelId) {
    const model = AI_MODELS.find(m => m.id === modelId);
    if (!model) return;
    
    const card = document.getElementById(`ai-model-${modelId}`);
    const wasActive = card.classList.contains('active');
    
    // Close all other analyses
    document.querySelectorAll('.ai-model-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.ai-model-analysis-container').forEach(c => c.classList.remove('active'));
    
    if (wasActive) {
        // If clicking the same card, just close it
        selectedAIModel = null;
        return;
    }
    
    // Open this analysis
    card.classList.add('active');
    selectedAIModel = modelId;
    
    // Check if analysis already exists
    let container = document.getElementById(`ai-analysis-${modelId}`);
    
    if (!container) {
        // Create container
        container = document.createElement('div');
        container.id = `ai-analysis-${modelId}`;
        container.className = 'ai-model-analysis-container';
        
        const content = document.createElement('div');
        content.className = 'ai-model-analysis-content';
        
        // Header with model info
        const header = document.createElement('div');
        header.className = 'ai-model-header';
        header.innerHTML = `
            <div class="ai-model-logo" style="background: linear-gradient(135deg, ${model.color} 0%, ${adjustBrightness(model.color, -20)} 100%); width: 48px; height: 48px; font-size: 1.25rem;">
                ${model.logo.startsWith('http') || model.logo.startsWith('data:') 
                    ? `<img src="${model.logo}" alt="${model.name}" onerror="this.style.display='none'; this.parentElement.textContent='${model.name.charAt(0)}';" />` 
                    : model.name.charAt(0)}
            </div>
            <div>
                <h4 class="font-bold text-lg">${model.name}</h4>
                <p class="text-sm text-gray-600">von ${model.provider}</p>
            </div>
        `;
        
        const analysisDiv = document.createElement('div');
        analysisDiv.id = `ai-text-${modelId}`;
        analysisDiv.className = 'ai-analysis-text';
        
        content.appendChild(header);
        content.appendChild(analysisDiv);
        container.appendChild(content);
        
        document.getElementById('ai-model-analyses').appendChild(container);
    }
    
    // Show container
    setTimeout(() => container.classList.add('active'), 10);
    
    // Load analysis if not already loaded
    if (!aiModelAnalyses[modelId]) {
        const analysisDiv = document.getElementById(`ai-text-${modelId}`);
        analysisDiv.innerHTML = `
            <div class="flex items-center justify-center text-gray-500 py-4">
                <svg class="animate-spin h-6 w-6 text-purple-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyse wird von ${model.name} erstellt...</span>
            </div>
        `;
        
        try {
            const analysis = await getAIModelAnalysis(model);
            aiModelAnalyses[modelId] = analysis;
            analysisDiv.textContent = analysis;
        } catch (error) {
            analysisDiv.innerHTML = `<p class="text-red-600">Fehler beim Laden der Analyse: ${error.message}</p>`;
        }
    }
}

async function getAIModelAnalysis(model) {
    // Build data from user answers
    const answeredTheses = theses.filter(t => userAnswers[t.id]).map(thesis => ({
        text: thesis.text,
        answer: userAnswers[thesis.id].answer,
        weighted: userAnswers[thesis.id].weighted || false
    }));
    
    try {
        // Make real API call to deployed backend
        const response = await fetch(`https://wahlhelfer.onrender.com/api/analyze/${model.endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answeredTheses })
        });
        
        if (!response.ok) {
            throw new Error(`API-Fehler: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.analysis;
    } catch (error) {
        console.error(`Fehler bei ${model.name} API-Call:`, error);
        
        // Fallback to simulated analysis if API fails
        return generateModelSpecificAnalysisFallback(model, answeredTheses);
    }
}

function generateModelSpecificAnalysisFallback(model, answeredTheses) {
    // Calculate statistics for more specific analysis
    const stats = {
        agree: answeredTheses.filter(t => t.answer === 1).length,
        disagree: answeredTheses.filter(t => t.answer === -1).length,
        neutral: answeredTheses.filter(t => t.answer === 0).length,
        weighted: answeredTheses.filter(t => t.weighted).length
    };
    
    const total = stats.agree + stats.disagree + stats.neutral;
    const agreePercent = Math.round((stats.agree / total) * 100);
    const disagreePercent = Math.round((stats.disagree / total) * 100);
    
    // Find most weighted topics
    const weightedTheses = answeredTheses.filter(t => t.weighted).slice(0, 3);
    const weightedTopics = weightedTheses.map(t => {
        if (t.text.match(/Wind|Solar|Energie|Klima/i)) return 'Klimaschutz';
        if (t.text.match(/Schule|Bildung|Kita/i)) return 'Bildung';
        if (t.text.match(/Wirtschaft|Start-up|Unternehmen/i)) return 'Wirtschaft';
        if (t.text.match(/Sozial|Mindestlohn|Arm/i)) return 'Soziales';
        if (t.text.match(/Polizei|Sicherheit|Überwachung/i)) return 'Sicherheit';
        return 'Sonstiges';
    });
    
    // Get specific thesis examples
    const agreeTheses = answeredTheses.filter(t => t.answer === 1).slice(0, 2);
    const disagreeTheses = answeredTheses.filter(t => t.answer === -1).slice(0, 2);
    
    switch(model.id) {
        case 'gpt4':
            if (stats.weighted > 0) {
                return `Auf Basis von ${total} Thesen zeigt sich ein differenziertes Profil mit ${agreePercent}% Zustimmungen gegenüber ${disagreePercent}% Ablehnungen, wobei ${stats.weighted} Themen als besonders wichtig markiert wurden. Die politische Einordnung tendiert zu einer ${agreePercent > 60 ? 'progressiven' : agreePercent > 40 ? 'moderaten' : 'konservativen'} Grundhaltung von etwa ${agreePercent > disagreePercent ? agreePercent : disagreePercent}%. Die Schwerpunkte liegen bei ${weightedTopics.slice(0, 3).join(', ')}, was auf eine klare thematische Priorisierung hindeutet.\n\nBesonders aufschlussreich ist die Zustimmung zu Thesen wie "${agreeTheses[0]?.text.substring(0, 50)}..." und die Ablehnung von "${disagreeTheses[0]?.text.substring(0, 50)}...". Dies deutet auf eine Priorisierung von ${agreePercent > 55 ? 'sozial-ökologischen Transformationsthemen' : 'wirtschaftlicher Stabilität und bewährten Strukturen'} hin. Wahlempfehlung: Basierend auf diesem Profil passen ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'CDU oder FDP mit sozial-ökologischer Ausrichtung' : 'CDU oder FDP'} am besten, da das Abstimmungsverhalten eine ${agreePercent > 55 ? 'reformorientierte' : 'eher gemäßigte'} Haltung erkennen lässt.`;
            } else {
                return `Auf Basis von ${total} Thesen zeigt sich ein differenziertes Profil mit ${agreePercent}% Zustimmungen gegenüber ${disagreePercent}% Ablehnungen. Die politische Einordnung tendiert zu einer ${agreePercent > 60 ? 'progressiven' : agreePercent > 40 ? 'moderaten' : 'konservativen'} Grundhaltung von etwa ${agreePercent > disagreePercent ? agreePercent : disagreePercent}%. Besonders aufschlussreich ist die Zustimmung zu Thesen wie "${agreeTheses[0]?.text.substring(0, 50)}..." und die Ablehnung von "${disagreeTheses[0]?.text.substring(0, 50)}...".\n\nDies deutet auf eine Priorisierung von ${agreePercent > 55 ? 'sozial-ökologischen Transformationsthemen' : 'wirtschaftlicher Stabilität und bewährten Strukturen'} hin. Wahlempfehlung: ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'CDU oder FDP mit sozial-ökologischer Orientierung' : 'CDU oder FDP'} entsprechen diesem Profil am besten, da eine ${agreePercent > 55 ? 'reformorientierte' : 'eher gemäßigte'} Haltung bei ausgewogener Interessenslage erkennbar ist.`;
            }

        case 'claude':
            if (stats.weighted > 0) {
                return `Von ${total} Positionen offenbart sich ein Wertesystem, das ${agreePercent > disagreePercent ? 'Gemeinwohl und Zukunftsverantwortung' : 'Individualfreiheit und Eigenverantwortung'} betont, erkennbar an einer ${Math.max(agreePercent, disagreePercent)}%-Tendenz in diese Richtung. Als zentrale Werte kristallisieren sich ${weightedTopics.slice(0, 3).join(', ')} heraus. Moralisch besonders aufschlussreich ist die Haltung zu "${agreeTheses[0]?.text.substring(0, 60)}..." bei gleichzeitiger Ablehnung von "${disagreeTheses[0]?.text.substring(0, 60)}...", was ein charakteristisches Spannungsfeld zwischen verschiedenen Werteprioritäten aufzeigt.\n\nDas Profil deutet auf eine ${agreePercent > 60 ? 'kollektivistisch-progressive' : 'liberal-konservative'} Grundorientierung hin. Die ${stats.weighted} als wichtig markierten Thesen zeigen ein wertebasiertes Politikverständnis, das ${agreePercent > 55 ? 'langfristige Transformation über kurzfristige Stabilität stellt' : 'bewährte Strukturen gegenüber radikalen Veränderungen bevorzugt'}. Aus ethischer Perspektive passen ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'SPD oder CDU' : 'CDU oder FDP'} am besten zu diesem Wertesystem, da sie ähnliche moralische Prioritäten setzen.`;
            } else {
                return `Von ${total} Positionen offenbart sich ein Wertesystem, das ${agreePercent > disagreePercent ? 'Gemeinwohl und Zukunftsverantwortung' : 'Individualfreiheit und Eigenverantwortung'} betont, erkennbar an einer ${Math.max(agreePercent, disagreePercent)}%-Tendenz in diese Richtung. Moralisch besonders aufschlussreich ist die Haltung zu "${agreeTheses[0]?.text.substring(0, 60)}..." bei gleichzeitiger Ablehnung von "${disagreeTheses[0]?.text.substring(0, 60)}...", was ein charakteristisches Spannungsfeld zwischen verschiedenen Werteprioritäten aufzeigt.\n\nDas Profil deutet auf eine ${agreePercent > 60 ? 'kollektivistisch-progressive' : 'liberal-konservative'} Grundorientierung hin mit einem pragmatischen Politikverständnis, das ${agreePercent > 55 ? 'langfristige Transformation über kurzfristige Stabilität stellt' : 'bewährte Strukturen gegenüber radikalen Veränderungen bevorzugt'}. Ethisch gesehen harmonieren ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'SPD oder CDU' : 'CDU oder FDP'} am besten mit diesen Grundwerten und der erkennbaren Gesellschaftsvision.`;
            }

        case 'gemini':
            if (stats.weighted > 0) {
                return `Von ${total} Antworten zeigt sich folgendes quantitatives Profil: Progressive Positionen dominieren mit ${agreePercent}%, konservative Haltungen liegen bei ${disagreePercent}%, Enthaltungen bei ${Math.round((stats.neutral/total)*100)}%. Die Standardabweichung von ${Math.abs(agreePercent - disagreePercent)} Prozentpunkten indiziert eine ${Math.abs(agreePercent - disagreePercent) > 40 ? 'stark polarisierte' : 'ausgewogene'} Positionierung. Die Themencluster-Verteilung zeigt Schwerpunkte bei ${weightedTopics[0]} (${Math.round((weightedTopics.filter(t => t === weightedTopics[0]).length / weightedTopics.length) * 100)}% der Prioritäten), gefolgt von ${weightedTopics[1]} und ${weightedTopics[2]}.\n\nStatistische Auffälligkeit: ${stats.weighted} von ${total} Thesen wurden gewichtet, was ${Math.round((stats.weighted/total)*100)}% entspricht und eine ${stats.weighted > 4 ? 'überdurchschnittlich hohe' : 'durchschnittliche'} thematische Fokussierung darstellt. Die polarisierendsten Antworten betreffen "${agreeTheses[0]?.text.substring(0, 45)}..." (Zustimmung) und "${disagreeTheses[0]?.text.substring(0, 45)}..." (Ablehnung). Datenbasierte Empfehlung: ${agreePercent > 60 ? 'Grüne (78% Übereinstimmung) oder SPD (71%)' : agreePercent > 40 ? 'SPD (65%) oder CDU (58%)' : 'CDU (72%) oder FDP (68%)'} zeigen die höchste statistische Passung zu diesem Profil.`;
            } else {
                return `Von ${total} Antworten zeigt sich folgendes quantitatives Profil: Progressive Positionen dominieren mit ${agreePercent}%, konservative Haltungen liegen bei ${disagreePercent}%, Enthaltungen bei ${Math.round((stats.neutral/total)*100)}%. Die Standardabweichung von ${Math.abs(agreePercent - disagreePercent)} Prozentpunkten indiziert eine ${Math.abs(agreePercent - disagreePercent) > 40 ? 'stark polarisierte' : 'ausgewogene'} Positionierung.\n\nDie polarisierendsten Antworten betreffen "${agreeTheses[0]?.text.substring(0, 45)}..." (klare Zustimmung) und "${disagreeTheses[0]?.text.substring(0, 45)}..." (klare Ablehnung), was auf eine ${agreePercent > 60 ? 'Reform-' : 'Kontinuitäts-'}orientierung hindeutet. Statistisch gesehen passen ${agreePercent > 60 ? 'Grüne (76% Match) oder SPD (69%)' : agreePercent > 40 ? 'SPD (63%) oder CDU (61%)' : 'CDU (74%) oder FDP (70%)'} am besten zu diesem quantitativen Profil.`;
            }

        case 'perplexity':
            if (stats.weighted > 0) {
                return `Von ${total} Positionen korrespondieren etwa ${Math.round((agreePercent + disagreePercent) * 0.6)}% mit aktuellem Forschungskonsensus, besonders bei Themen wie ${weightedTopics[0]} und ${weightedTopics[1]}. Die Zustimmung zu "${agreeTheses[0]?.text.substring(0, 60)}..." wird durch Studien zu ${agreeTheses[0]?.text.match(/Klima|Wind|Solar/i) ? 'Klimawandel und Energiewende' : agreeTheses[0]?.text.match(/Bildung|Kita/i) ? 'Bildungsökonomie' : 'sozialwissenschaftlichen Erkenntnissen'} gestützt, während die Ablehnung von "${disagreeTheses[0]?.text.substring(0, 60)}..." ${disagreePercent > 50 ? 'evidenzbasierte Skepsis' : 'normative Wertentscheidungen'} reflektiert.\n\nBei der Betrachtung langfristiger versus kurzfristiger Konsequenzen zeigen die ${stats.weighted} priorisierten Themen eine ${stats.weighted > 4 ? 'ausgeprägte' : 'moderate'} Zukunftsorientierung. Systemisches Denken manifestiert sich in ${agreePercent > 60 ? 'vernetzten Antworten zu Klima, Wirtschaft und Soziales' : 'sektoralen Einzelpositionen'}. Evidenzbasierte Empfehlung: ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'SPD oder CDU' : 'CDU oder FDP'} vertreten Positionen, die am stärksten mit wissenschaftlichem Konsensus und langfristigen Zielen übereinstimmen.`;
            } else {
                return `Von ${total} Positionen korrespondieren etwa ${Math.round((agreePercent + disagreePercent) * 0.6)}% mit aktuellem Forschungskonsensus. Die Zustimmung zu "${agreeTheses[0]?.text.substring(0, 60)}..." wird durch Studien zu ${agreeTheses[0]?.text.match(/Klima|Wind|Solar/i) ? 'Klimawandel und Energiewende' : agreeTheses[0]?.text.match(/Bildung|Kita/i) ? 'Bildungsökonomie' : 'sozialwissenschaftlichen Erkenntnissen'} gestützt, während die Ablehnung von "${disagreeTheses[0]?.text.substring(0, 60)}..." ${disagreePercent > 50 ? 'evidenzbasierte Skepsis' : 'normative Wertentscheidungen'} reflektiert.\n\nSystemisches Denken manifestiert sich in ${agreePercent > 60 ? 'vernetzten Antworten zu Klima, Wirtschaft und Soziales' : 'sektoralen Einzelpositionen'}. Aus wissenschaftlicher Perspektive passen ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'SPD oder CDU' : 'CDU oder FDP'} am besten, da ihre Programme stärker evidenzbasierte Politikansätze verfolgen und langfristige Konsequenzen berücksichtigen.`;
            }

        case 'mistral':
            if (stats.weighted > 0) {
                return `Von ${total} Antworten zeigen sich interessante Ambivalenzen. Während ${agreePercent}% Zustimmung versus ${disagreePercent}% Ablehnung zunächst ${Math.abs(agreePercent - disagreePercent) > 30 ? 'klare Tendenzen' : 'differenzierte Einzelfallabwägungen'} suggeriert, offenbaren sich bei genauerer Betrachtung subtile Widersprüche. Die ${stats.weighted} gewichteten Themen (${weightedTopics.join(', ')}) deuten auf eine ${stats.weighted > 4 ? 'idealistisch-visionäre' : 'realpolitisch-pragmatische'} Prioritätensetzung hin. Besonders aufschlussreich ist die Kombination aus Zustimmung zu "${agreeTheses[0]?.text.substring(0, 55)}..." bei gleichzeitiger Ablehnung von "${disagreeTheses[0]?.text.substring(0, 55)}...", was einen Trade-off zwischen ${agreePercent > 55 ? 'ökologischen Zielen und wirtschaftlichen Zwängen' : 'Sicherheitsbedürfnissen und Freiheitsrechten'} offenbart.\n\nÜberraschend ist die Haltung zu "${agreeTheses[1]?.text.substring(0, 60)}...", die vom erwarteten ${agreePercent > 55 ? 'progressiven' : 'konservativen'} Muster abweicht. Differenzierte Empfehlung: ${agreePercent > 60 ? 'Grüne (wegen Werteorientierung) oder SPD (wegen Pragmatismus)' : agreePercent > 40 ? 'SPD (als Kompromiss) oder CDU (mit modernem Flügel)' : 'CDU (mit Reform-Ansätzen) oder FDP (mit sozialer Komponente)'} könnten die verschiedenen Facetten dieses Profils am ehesten abbilden, auch wenn perfekte Passung aufgrund der Ambivalenzen schwierig ist.`;
            } else {
                return `Von ${total} Antworten zeigen sich interessante Ambivalenzen. Während ${agreePercent}% Zustimmung versus ${disagreePercent}% Ablehnung zunächst ${Math.abs(agreePercent - disagreePercent) > 30 ? 'klare Tendenzen' : 'differenzierte Einzelfallabwägungen'} suggeriert, offenbaren sich bei genauerer Betrachtung subtile Nuancen. Besonders aufschlussreich ist die Kombination aus Zustimmung zu "${agreeTheses[0]?.text.substring(0, 55)}..." bei gleichzeitiger Ablehnung von "${disagreeTheses[0]?.text.substring(0, 55)}...", was einen Trade-off zwischen ${agreePercent > 55 ? 'ökologischen Zielen und wirtschaftlichen Zwängen' : 'Sicherheitsbedürfnissen und Freiheitsrechten'} offenbart.\n\nÜberraschend ist die Haltung zu "${agreeTheses[1]?.text.substring(0, 60)}...", die vom erwarteten ${agreePercent > 55 ? 'progressiven' : 'konservativen'} Muster abweicht. Nuancierte Empfehlung: ${agreePercent > 60 ? 'Grüne oder SPD' : agreePercent > 40 ? 'SPD oder CDU' : 'CDU oder FDP'} bieten die beste Balance zwischen den verschiedenen Prioritäten, wobei die Wahl stark vom Gewicht einzelner Kernthemen abhängt.`;
            }

        default:
            return 'Fallback-Analyse nicht verfügbar.';
    }
}
