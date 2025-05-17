document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const logo = document.querySelector('.logo');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                document.documentElement.style.setProperty('--background-color', '#1a1a1a');
                document.documentElement.style.setProperty('--text-color', '#f0f8ff');
                document.documentElement.style.setProperty('--secondary-text-color', '#ccc');
                document.documentElement.style.setProperty('--shadow-color', '#ffffff33');
                document.documentElement.style.setProperty('--sh', '#ffffff33');
                // Invert logo in dark mode
                if (logo) {
                    logo.style.filter = 'invert(0)';
                }

                darkModeToggle.textContent = '☀️';
            } else {
                document.documentElement.style.setProperty('--background-color', '#f0f8ff');
                document.documentElement.style.setProperty('--text-color', '#333');
                document.documentElement.style.setProperty('--secondary-text-color', '#666');
                document.documentElement.style.setProperty('--shadow-color', '#00000033');
                // Invert logo in dark mode
                if (logo) {
                    logo.style.filter = 'invert(1)';
                }
                darkModeToggle.textContent = '🌙';
            }
        });
    } else {
        console.error("Dark mode toggle button not found.");
    }
});

document.getElementById('downArrow').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Project data
const projects = [
    {
        image: "./assets/img/whisper_kannada.svg",
        title: "Whisper Kannada",
        description: "Fine-tuned OpenAI Whisper Small for Kannada ASR on ~300 hours of data using IAST Romanization via Aksharamukha for faster, more accurate inference.",
        githubLink: "https://github.com/COIL-D",
        demoLink: "https://huggingface.co/coild"
    },
    {
        image: "./assets/img/dhravani.svg",
        title: "Dhravani",
        description: "Web-based application developed for creating speech corpora for Automatic Speech Recognition (ASR) Models.",
        githubLink: "https://github.com/COIL-D",
        demoLink: "https://coild-dhravani.hf.space"
    },
    {
        image: "./assets/img/type2script.svg",
        title: "Type2Script",
        description: "This browser extension allows you to transliterate English (Roman script) text into various languages directly in any editable field on web pages.",
        githubLink: "https://github.com/COIL-D/Type2Script",
        demoLink: "https://github.com/COIL-D/Type2Script/releases/"
    },
    {
        image: "./assets/img/linksync.svg",
        title: "Linksync",
        description: "LinkSync is your digital assistant for effortless link management, offering intuitive organization and powerful search features.",
        githubLink: "https://github.com/Ranjan-Shettigar/LinkSync",
        demoLink: "https://linksync.free.nf/"
    },
    {
        image: "./assets/img/trackit.svg",
        title: "Trackit",
        description: "A financial management tool for tracking expenses, budgeting, analyzing finances. ",
        githubLink: "https://github.com/Ranjan-Shettigar/trackit",
        demoLink: "https://trackitpay.vercel.app/"
    },
    {
        image: "./assets/img/taskminder.svg",
        title: "Taskminder",
        description: "A task reminder application helps individuals or teams manage tasks, appointments, deadlines, and commitments efficiently and effectively.",
        githubLink: "https://github.com/Ranjan-Shettigar/TaskMinder",
        demoLink: "https://github.com/Ranjan-Shettigar/TaskMinder/raw/main/TaskMinder.apk"
    },
    {
        image: "./assets/img/skin_vision.svg",
        title: "Skin Vision",
        description: "The system identifies and classifies skin cancer images into five categories using transfer and ensemble learning.",
        githubLink: "https://github.com/Ranjan-Shettigar/skin_cancer",
        demoLink: "https://skin-vision.streamlit.app/"
    },
    {
        image: "./assets/img/advaita.png",
        title: "Advaita 2024",
        description: "This project is a PHP-based system for managing a college fest, including database connectivity and payment integration.",
        githubLink: "https://github.com/Ranjan-Shettigar/Advaita",
        demoLink: "https://advaita.rf.gd/"
    },
    {
        image: "./assets/img/club_coffee.png",
        title: "Club Coffee",
        description: "Club Coffee website, a visually appealing and responsive website designed to showcase a coffee brand and its products.",
        githubLink: "https://github.com/Ranjan-Shettigar/club-coffee",
        demoLink: "https://Ranjan-Shettigar.github.io/club-coffee/"
    },
    {
        image: "./assets/img/quanta.webp",
        title: "Quanta",
        description: "Quanta uses Google's GenerativeAI for natural language processing, with a Flask backend enabling seamless web interface interactions.",
        githubLink: "https://github.com/Ranjan-Shettigar/Quanta",
        demoLink: "https://quanta-6qsp.onrender.com/"
    },
    {
        image: "./assets/img/job_alert.svg",
        title: "Job Alert",
        description: "website built using PHP, MySQL, HTML, CSS, and JavaScript. It includes an admin page for inserting job details into the database. ",
        githubLink: "https://github.com/Ranjan-Shettigar/JobAleart",
        demoLink: "https://github.com/Ranjan-Shettigar/JobAleart"
    },
    {
        image: "./assets/img/iot.svg",
        title: "IOT-Biometric Attendance System",
        description: "The IoT-based biometric attendance system uses fingerprint scanning to track attendance, ensuring accuracy and real-time data access via the cloud",
        githubLink: "404.html",
        demoLink: ".404.html"
    }

];

// Function to create a card
function createCard(project) {
    return `
    <div class="card">
        <div class="card-image">
            <img src="${project.image}" alt="${project.title}" class="original-image">
            <img src="${project.image}" alt="${project.title}" class="blurred-image">
        </div>
        <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-text-content">
                <p class="card-text">${project.description}</p>
            </div>
            <div class="card-buttons">
                <a href="${project.githubLink}" class="btn btn-github" target="_blank">GitHub</a>
                <a href="${project.demoLink}" class="btn btn-demo" target="_blank">DEMO</a>
            </div>
        </div>
    </div>
    `;
}


// Function to render all cards
function renderCards() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(project => createCard(project)).join('');
}

// Render cards when the page loads
window.onload = renderCards;


