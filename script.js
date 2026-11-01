const videos = [
    {
        title: "Building a Fullstack YouTube Clone from Scratch in 2025",
        channel: "Momin Hessen",
        views: "125K views",
        time: "2 days ago",
        duration: "14:20",
        bg: "linear-gradient(135deg, #1f4068, #162447)"
    },
    {
        title: "Advanced CSS Grid & Flexbox Masterclass (Phone First Design)",
        channel: "Momin Hessen",
        views: "48K views",
        time: "1 week ago",
        duration: "22:15",
        bg: "linear-gradient(135deg, #e43a15, #e65245)"
    },
    {
        title: "Why Modern Web Development is Changing Faster Than Ever",
        channel: "Tech Insights",
        views: "89K views",
        time: "3 days ago",
        duration: "08:45",
        bg: "linear-gradient(135deg, #134e5e, #71b280)"
    },
    {
        title: "JavaScript Performance Tips You Need to Know",
        channel: "Momin Hessen",
        views: "210K views",
        time: "2 weeks ago",
        duration: "19:50",
        bg: "linear-gradient(135deg, #f7971e, #ffd200)"
    },
    {
        title: "Designing Clean User Interfaces for Mobile Browsers",
        channel: "UI/UX Daily",
        views: "34K views",
        time: "5 days ago",
        duration: "11:05",
        bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
    },
    {
        title: "Live Coding: Building a Complete App in 1 Hour",
        channel: "Momin Hessen",
        views: "95K views",
        time: "Streamed live",
        duration: "1:02:10",
        bg: "linear-gradient(135deg, #2b5876, #4e4376)"
    },
    {
        title: "Understanding Async/Await in Modern JavaScript",
        channel: "Code Mastery",
        views: "67K views",
        time: "4 days ago",
        duration: "15:30",
        bg: "linear-gradient(135deg, #3a6073, #16222a)"
    },
    {
        title: "My Developer Setup & Productivity Workflow 2025",
        channel: "Momin Hessen",
        views: "180K views",
        time: "1 month ago",
        duration: "12:40",
        bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
    }
];

function renderVideos(items) {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = items.map(video => `
        <div class="video-card">
            <div class="thumbnail" style="background: ${video.bg}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-details">
                <div class="channel-avatar">${video.channel.charAt(0)}</div>
                <div class="video-meta">
                    <h3 class="video-title">${video.title}</h3>
                    <span class="channel-name">${video.channel}</span>
                    <span class="video-stats">${video.views} • ${video.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderVideos(videos);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = videos.filter(v => 
            v.title.toLowerCase().includes(query) || 
            v.channel.toLowerCase().includes(query)
        );
        renderVideos(filtered);
    });

    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const category = chip.textContent;
            if (category === 'All') {
                renderVideos(videos);
            } else {
                const filtered = videos.filter(v => v.title.toLowerCase().includes(category.toLowerCase()) || v.channel.toLowerCase().includes('momin'));
                renderVideos(filtered);
            }
        });
    });
});
