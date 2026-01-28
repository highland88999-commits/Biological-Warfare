// media-controller.js
window.ArtemisMedia = {
    player: null,
    
    init: function() {
        // Force the YouTube API to load
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);

        // Standard YT callback
        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('music-host', {
                videoId: 'qwMz1wgXokk',
                playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'qwMz1wgXokk', 'playsinline': 1 },
                events: { 'onReady': () => console.log("Audio Engine Online") }
            });
        };
    },

    playAll: function(videoId) {
        // 1. Video
        const v = document.getElementById(videoId);
        v.src = "https://xo6u0xsindhyafqf.public.blob.vercel-storage.com/nexus_render%20%2811%29.webm";
        v.play().catch(e => console.log("Video manual play required"));
        v.style.opacity = 1;

        // 2. Music
        if (this.player && this.player.playVideo) {
            this.player.unMute();
            this.player.playVideo();
        }
    }
};

// Start the loading process immediately
ArtemisMedia.init();
