window.ArtemisMedia = {
    musicPlayer: null,

    // 1. Setup the YT API
    setup: function() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            this.musicPlayer = new YT.Player('music-host', {
                videoId: 'qwMz1wgXokk',
                playerVars: { 'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': 'qwMz1wgXokk', 'playsinline': 1 },
            });
        };
    },

    // 2. The Kickstart - Fired on Landing Page Click
    ignite: function(videoID) {
        const v = document.getElementById(videoID);
        v.src = "https://xo6u0xsindhyafqf.public.blob.vercel-storage.com/nexus_render%20%2811%29.webm";
        
        // Force play
        v.play().then(() => {
            v.style.opacity = "1";
        }).catch(err => console.log("Video Play Error:", err));

        // Unmute and play music
        if (this.musicPlayer && this.musicPlayer.playVideo) {
            this.musicPlayer.unMute();
            this.musicPlayer.playVideo();
        }
    }
};

// Initialize immediately on load
ArtemisMedia.setup();
