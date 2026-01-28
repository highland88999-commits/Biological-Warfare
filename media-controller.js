/**
 * Artemis Media Controller
 * Manages Full-Screen Video and YouTube Audio Uplink
 */

let musicPlayer;

export async function loadBackground(videoElementId) {
    const video = document.getElementById(videoElementId);
    if (!video) return;

    video.src = "https://xo6u0xsindhyafqf.public.blob.vercel-storage.com/nexus_render%20%2811%29.webm";
    
    try {
        await video.play();
        video.style.opacity = "1";
    } catch (err) {
        console.warn("Video waiting for interaction.", err);
    }
}

export function initMusic(containerId) {
    window.onYouTubeIframeAPIReady = () => {
        musicPlayer = new YT.Player(containerId, {
            videoId: 'qwMz1wgXokk',
            playerVars: { 
                'controls': 0, 
                'loop': 1, 
                'playlist': 'qwMz1wgXokk', 
                'playsinline': 1 
            }
        });
    };
}

export function startAudio() {
    if (musicPlayer && musicPlayer.playVideo) {
        musicPlayer.unMute();
        musicPlayer.playVideo();
    }
}
