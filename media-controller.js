/**
 * Artemis Media Controller
 * Manages Full-Screen Video and YouTube Audio Uplink
 */

let musicPlayer;

// 1. Load Background Video from Vercel Blob
export async function loadBackground(videoElementId) {
    const video = document.getElementById(videoElementId);
    if (!video) return;

    video.src = "https://xo6u0xsindhyafqf.public.blob.vercel-storage.com/nexus_render%20%2811%29.webm";
    
    try {
        await video.play();
        video.style.opacity = "1";
        console.log("Nexus Render: Active");
    } catch (err) {
        console.warn("Video blocked. Awaiting user interaction.", err);
    }
}

// 2. Initialize YouTube Music
export function initMusic(containerId) {
    // Standard YouTube Iframe API handshake
    window.onYouTubeIframeAPIReady = () => {
        musicPlayer = new YT.Player(containerId, {
            videoId: 'qwMz1wgXokk',
            playerVars: { 
                'controls': 0, 
                'loop': 1, 
                'playlist': 'qwMz1wgXokk', 
                'playsinline': 1 
            },
            events: {
                'onReady': (event) => {
                    console.log("Audio Engine: Ready");
                }
            }
        });
    };
}

// 3. Play Music
export function startAudio() {
    if (musicPlayer && musicPlayer.playVideo) {
        musicPlayer.unMute();
        musicPlayer.playVideo();
    }
}
