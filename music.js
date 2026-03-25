// music.js
// Добавляй треки как обычные строки (как слова в словаре).
const musicPlaylist = [
    "https://www.dropbox.com/scl/fi/d9oxw4c1gh9jvf3g4ol7g/Mii-Editor-Mii-Maker-Wii-U-Music.mp3?rlkey=02gozi20og6da5zi979e8gh9t&st=zria9uzy&dl=1",
    "https://www.tonyciccarone.com/uploads/1/3/4/6/134633856/frutiger_aero_music_sample.mp3"
];

// Можно вызывать из консоли: addMusicTrack("https://site.com/track.mp3")
function addMusicTrack(url) {
    if (typeof url !== "string") return;
    const normalized = url.trim();
    if (!normalized) return;
    musicPlaylist.push(normalized);
}
