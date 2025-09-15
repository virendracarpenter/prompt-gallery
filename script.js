// Sample prompt data
const prompts = [
    {
        id: 7,
        title: "Modern Elevator Portrait",
        prompt: "Edit the photo to be standing casually in a modern style elevator with reflective metal walls. He is wearing an all black outfit: a suit jacket and black trousers, wearing sunglasses and holding a cup of take-away coffee. Elegant and edgy style with a mysterious feel. The dim lighting from the neon lights on the ceiling creates subtle shadows.",
        category: "creative"
    },
    {
        id: 1,
        title: "Creative Writing Assistant",
        prompt: "Write a short story about a time traveler who accidentally changes a major historical event. The story should be between 500-700 words and include vivid descriptions of the setting and characters.",
        category: "creative"
    },
    {
        id: 2,
        title: "Code Debugger",
        prompt: "I'm getting this error in my JavaScript code: [paste error]. Can you help me understand what's causing it and how to fix it? The code is intended to [briefly describe what the code should do].",
        category: "coding"
    },
    {
        id: 3,
        title: "Business Email Draft",
        prompt: "Compose a professional email to [Client Name] following up on our recent meeting about [Topic]. The tone should be friendly yet professional. Include the key points we discussed and the proposed next steps. Keep it concise (3-4 paragraphs max).",
        category: "business"
    },
    {
        id: 4,
        title: "Productivity System",
        prompt: "Create a daily productivity system using the Pomodoro technique. Include specific time blocks for focused work, short breaks, and longer breaks. The schedule should be for an 8-hour workday and account for [specific tasks or types of work].",
        category: "productivity"
    },
    {
        id: 5,
        title: "Python Data Analysis",
        prompt: "Write a Python script using pandas to analyze a dataset containing [describe data]. The script should include data cleaning, basic statistics, and visualization using matplotlib or seaborn. Add comments explaining each step.",
        category: "coding"
    },
    {
        id: 6,
        title: "Social Media Post Generator",
        prompt: "Create 5 engaging social media post ideas for [business/niche] that will increase engagement. Each post should include a catchy headline, 1-2 sentences of engaging copy, and relevant hashtags. The tone should be [friendly/professional/casual].",
        category: "business"
    }
];

// DOM Elements
const promptsContainer = document.getElementById('promptsContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.querySelectorAll('#categoryFilters .btn');
const toastEl = document.getElementById('toast');
const toast = new bootstrap.Toast(toastEl, { delay: 2000 });

// Initialize the app
function init() {
    displayPrompts(prompts);
    setupEventListeners();
}

// Display prompts in the UI
function displayPrompts(promptsToShow) {
    promptsContainer.innerHTML = '';
    
    if (promptsToShow.length === 0) {
        promptsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                <h4>No prompts found</h4>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    promptsToShow.forEach(prompt => {
        const promptCard = createPromptCard(prompt);
        promptsContainer.appendChild(promptCard);
    });}

// Create a prompt card element
function createPromptCard(prompt) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    
    col.innerHTML = `
        <div class="prompt-card" data-category="${prompt.category}">
            <div class="card-header">
                <span>${prompt.title}</span>
                <span class="badge bg-light text-dark">${prompt.category}</span>
            </div>
            <div class="card-body">
                <div class="prompt-text">${formatPromptText(prompt.prompt)}</div>
                <button class="copy-btn" data-prompt="${escapeHtml(prompt.prompt)}">
                    <i class="far fa-copy"></i> Copy Prompt
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Format prompt text with line breaks and paragraphs
function formatPromptText(text) {
    return text.replace(/\n/g, '<br><br>');
}

// Escape HTML to prevent XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        filterPrompts();
    });
    
    // Category filter buttons
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelector('#categoryFilters .btn.active').classList.remove('active');
            btn.classList.add('active');
            
            // Filter prompts
            filterPrompts();
        });
    });
    
    // Copy to clipboard functionality (using event delegation)
    promptsContainer.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.copy-btn');
        if (!copyBtn) return;
        
        const promptText = copyBtn.getAttribute('data-prompt');
        copyToClipboard(promptText, copyBtn);
    });
}

// Filter prompts based on search and category
function filterPrompts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('#categoryFilters .btn.active').dataset.category;
    
    const filteredPrompts = prompts.filter(prompt => {
        const matchesSearch = prompt.title.toLowerCase().includes(searchTerm) || 
                            prompt.prompt.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || prompt.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayPrompts(filteredPrompts);
}

// Copy text to clipboard
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Show success feedback
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        // Show toast notification
        toast.show();
        
        // Reset button after delay
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text to clipboard. Please try again.');
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
