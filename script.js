// Sample prompt data
const prompts = [
    {
        id: 17,
        title: "Urban Street Style Portrait",
        prompt: "A cinematic urban portrait of me, keeping my real face unchanged. I am sitting casually on the ground, leaning back against the side of a vintage black car. My right arm rests on my bent right knee, hand relaxed and slightly curled, while my left arm is extended downward with my left hand resting naturally near my foot. My left leg is bent with the knee raised, while my right leg is stretched out, with the sole of my sneaker visible to the camera. My posture is laid-back, confident, and effortlessly stylish. I am wearing a fitted black button-up shirt with long sleeves, the fabric matte and sleek, giving a minimalistic but refined look. My black trousers match the shirt, creating a monochrome outfit. On my feet, I am wearing light-colored Nike sneakers with visible swoosh logos, adding a sporty contrast to the dark outfit. On my wrist, I wear a metallic watch that catches the warm light. I also wear small, dark sunglasses that enhance the cool, confident attitude. The background shows the vintage car in detail, its dark glossy surface reflecting the golden tones of the sunset. The urban surroundings, including the asphalt and distant skyline, are softly lit by the warm evening light. The atmosphere is moody yet cinematic, with the setting sun casting long shadows and a golden glow. The camera is set slightly below eye-level, angled upward to emphasize presence and attitude, framed from full body but focusing on my relaxed seated pose. The focal length resembles a portrait lens around 50-85mm, keeping natural proportions while softly blurring the distant background. Style: cinematic, golden hour portrait, urban fashion photography, moody and stylish, editorial streetwear vibe same face.",
        category: "creative"
    },
    {
        id: 16,
        title: "Automotive Editorial Shoot",
        prompt: "A cinematic automotive photoshoot of me, keeping my real face unchanged. The scene is composed of three perspectives: 1. Interior close-up: I am seated inside the car, shown in the side mirror reflection. My face is serious and focused, my gaze directed forward with determination. The angle captures only part of my profile, framed cleanly within the mirror, emphasizing intensity and precision. 2. I am standing confidently next to a sleek black Ford Mustang. My posture is relaxed but strong: both arms are crossed over my chest in a confident manner, while my left leg is straight and my right leg bent slightly at the knee, with the foot leaning casually against the car. My gaze is directed slightly off-camera, with a calm and assertive expression. I am wearing a fitted black polo shirt with subtle detailing, slim grey jeans with a clean cut, and brown leather boots. My outfit is minimal yet stylish, emphasizing a modern masculine vibe. 3. Rear car shot: The camera captures the back of the Mustang, showcasing the 'CHRIS CREATES' license plate and muscular lines of the car. The photo emphasizes the glossy texture of the vehicle and its aggressive, cinematic presence. The setting is an urban environment with modern architecture and concrete walls, giving a gritty, cinematic atmosphere. The lighting is natural but slightly diffused, highlighting both me and the polished surface of the car.",
        category: "creative"
    },
    {
        id: 15,
        title: "Minimalist Black & White Profile",
        prompt: "A cinematic black and white portrait of me, keeping my real face unchanged. I am standing in profile, leaning with my back against a smooth wall, my posture relaxed yet elegant. My head is tilted slightly backward, chin raised, and my eyes are closed, giving the impression of calmness and introspection. I am wearing a crisp, fitted white button-down shirt with the sleeves casually rolled up to the elbows, the fabric slightly stretched across my chest and arms, emphasizing a tailored silhouette. The shirt is tucked neatly into a pair of dark, well-fitted trousers, secured with a slim black belt. No additional accessories, keeping the look timeless and minimalistic. The lighting is dramatic and high-contrast, with soft highlights defining my facial structure, shirt creases, and the glass. The background is plain and dark, ensuring the focus remains entirely on my pose, expression, and the play of light and shadow. Style: timeless, black and white photography, cinematic, moody, fashion editorial, professional model portrait.",
        category: "creative"
    },
    {
        id: 14,
        title: "Dark & Moody Editorial",
        prompt: "A cinematic portrait of me, my real face unchanged, standing in a side profile pose with my upper body slightly turned towards the camera. My head is gently tilted downward, and my gaze is directed to the ground, creating a thoughtful silhouette. My right arm rests naturally along my body, relaxed without tension, while my shoulders are slightly angled back, emphasizing the athletic shape of my torso. I am wearing a tight-fitting, plain black short-sleeve t-shirt with a matte texture that highlights muscle definition under dramatic lighting. No accessories, minimalistic and modern style. The background is a dark gradient with warm amber-orange rim light illuminating the edge of my face, ear, and shoulder, while the rest of my body fades into deep shadow. The lighting creates a strong chiaroscuro effect, emphasizing contours and contrast. The camera captures me at eye-level, from the waist up, in a portrait focal length of around 85mm, creating natural proportions with slight compression and a shallow depth of field. The mood is dramatic, cinematic, and intimate, with high contrast between the soft highlights and the dark shadows.",
        category: "creative"
    },
    {
        id: 13,
        title: "Classic Black & White Portrait",
        prompt: "A cinematic black and white portrait of me, keeping my real face unchanged. I am sitting in a relaxed, dominant pose on a dark leather armchair. My legs are spread apart naturally, emphasizing confidence and presence. My left arm rests heavily on the armrest, holding a glass tumbler filled with liquid, slightly tilted in a casual yet commanding gesture. My right arm is draped across the backrest, relaxed and open, showing ease and self-assurance. I am wearing a white button-down shirt with the top buttons undone, exposing part of my chest. The shirt is slightly wrinkled, contributing to a rugged, masculine style. Black suspenders hang firmly over my shoulders, contrasting against the white shirt and adding a classic, vintage touch. My trousers are black, slim-fitted, completing the monochrome outfit. My head is tilted slightly downward, and my gaze is directed toward the ground, giving a brooding, introspective mood. My expression is calm yet intense, embodying quiet strength and masculinity. The background is minimalistic, plain, and softly lit, keeping the focus entirely on me and the dramatic atmosphere. The black and white tones create high contrast, emphasizing textures-the shine of the leather chair, the crispness of the shirt, the smoothness of the glass, and the shadows on my body.",
        category: "creative"
    },
    {
        id: 12,
        title: "Luxury Watch Editorial",
        prompt: "Ultra realistic black and white portrait of a man a same face (a light face) and white shirt, cinematic dramatic lighting, close-up half body shot, intense facial expression, direct eye contact with camera, right hand raised near face showing, luxury watch visible on wrist, sharp shadows, rim light around hair, minimal background completely black, highly detailed, photorealistic, magazine editorial style.",
        category: "creative"
    },
    {
        id: 11,
        title: "Casual Biker Portrait",
        prompt: "A young man dressed in all-black streetwear - black leather jacket, hoodie, jeans, and sneakers casually leans against a matte black Royal Enfield motorcycle parked by a rustic wooden wall. His hands rest in his jacket pockets as he looks down thoughtfully, exuding a cool, moody biker aesthetic. The scene has a cinematic tone with natural daylight highlighting the textures of the wood and metal.",
        category: "creative"
    },
    {
        id: 10,
        title: "Mediterranean Villa Portrait",
        prompt: "A cinematic close-up fashion portrait of a man leaning against an old doorway inside a Mediterranean villa. He wears a crisp white button-up shirt with the top buttons undone, sleeves rolled up casually, and high-waisted pleated tan trousers with a slim brown leather belt. His pose is relaxed, with arms crossed, exuding effortless confidence. Style & Atmosphere: Aesthetic: timeless Mediterranean elegance, reminiscent of a 1970s Italian film still. Background: textured, sunlit plaster walls with subtle architectural details and vintage tiled flooring, softly blurred to emphasize the subject. Lighting: dramatic golden-hour sunlight streaming through the doorway, casting warm highlights and long, cinematic shadows across his face and clothes. Color palette: warm earth tones - tans, creams, browns, golden highlights, and soft contrasts. Film look: subtle grain, slight fade, analog photography texture for a nostalgic feel. Framing: medium close-up to 3/4 body shot, keeping the face, shirt details, and trousers in sharp focus, while maintaining the dramatic light-play in the scene. Mood: cinematic, refined, and timeless - like a still from an art-house film.",
        category: "creative"
    },
    {
        id: 9,
        title: "Figurine Product Shot",
        prompt: "Using the nano-banana model, create a 1/7 scale commercialized figurine of the characters in the picture, in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine has a round transparent acrylic base, with no text on the base. The content on the computer screen is the brush modeling process of this figurine. Nackaging box printed with the original artstork, The packaging features two-dimensional flat illustrations. Please turn this photo into afigure. Behind it, there should be a Model packaging box with the character from this photo printed on it. In front of thebox.on a round plastic baseplace the fiqure version of thephoto I gave you. I'd like the PVC material to be clearly represented. It would be even better if the background is indoors.",
        category: "creative"
    },
    {
        id: 8,
        title: "Polaroid Photo Edit",
        prompt: "Take a picture with a Polaroid camera. The photo should look like a normal photo, without any clear subjects or props. The photo should have a slight blur effect and a consistent light source, such as a flash from a dark room, spread throughout the photo. Do not change the faces. Replace the background behind the two people with a white curtain. With the guy being close to me like a couple.",
        category: "creative"
    },
    {
        id: 7,
        title: "Modern Elevator Portrait",
        prompt: "Edit the photo to be standing casually in a modern style elevator with reflective metal walls. He is wearing an all black outfit: a suit jacket and black trousers, wearing sunglasses and holding a cup of take-away coffee. Elegant and edgy style with a mysterious feel. The dim lighting from the neon lights on the ceiling creates subtle shadows.",
        category: "creative"
    },
    {
        id: 6,
        title: "Social Media Post Generator",
        prompt: "Create 5 engaging social media post ideas for [business/niche] that will increase engagement. Each post should include a catchy headline, 1-2 sentences of engaging copy, and relevant hashtags. The tone should be [friendly/professional/casual].",
        category: "business"
    },
    {
        id: 5,
        title: "Python Data Analysis",
        prompt: "Write a Python script using pandas to analyze a dataset containing [describe data]. The script should include data cleaning, basic statistics, and visualization using matplotlib or seaborn. Add comments explaining each step.",
        category: "coding"
    },
    {
        id: 4,
        title: "Productivity System",
        prompt: "Create a daily productivity system using the Pomodoro technique. Include specific time blocks for focused work, short breaks, and longer breaks. The schedule should be for an 8-hour workday and account for [specific tasks or types of work].",
        category: "productivity"
    },
    {
        id: 3,
        title: "Business Email Draft",
        prompt: "Compose a professional email to [Client Name] following up on our recent meeting about [Topic]. The tone should be friendly yet professional. Include the key points we discussed and the proposed next steps. Keep it concise (3-4 paragraphs max).",
        category: "business"
    },
    {
        id: 2,
        title: "Code Debugger",
        prompt: "I'm getting this error in my JavaScript code: [paste error]. Can you help me understand what's causing it and how to fix it? The code is intended to [briefly describe what the code should do].",
        category: "coding"
    },
    {
        id: 1,
        title: "Creative Writing Assistant",
        prompt: "Write a short story about a time traveler who accidentally changes a major historical event. The story should be between 500-700 words and include vivid descriptions of the setting and characters.",
        category: "creative"
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
