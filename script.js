document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const lyricsContainer = document.getElementById('lyrics-container');
    const notes = ["♪", "♫", "♬", "♪♪", "♫♫", "♬♬", "♪♫", "♪♬"];
    const notesCount = 4; // Number of notes to include at the start
    const notesText = notes.slice(0, notesCount).join(""); // Join selected notes into a string

    const lyrics = [
        { time: 0, text: notesText },
        { time: 12.20, text: "Sintang Paaralan" },
        { time: 15.05, text: "Tanglaw ka ng bayan " },
        { time: 18.15, text: "Pandayan ng isip ng kabataan" },
        { time: 24.15, text: "Kami ay dumating nang salat sa yaman" },
        { time: 29.23, text: "Hanap na dunong ay iyong alay" },
        { time: 35.25, text: "Ang layunin mong makatao" },
        { time: 41.15, text: "Dinarangal ang Pilipino" },
        { time: 47.15, text: "Ang iyong aral, diwa, adhikang taglay" },
        { time: 53.18, text: "PUP, aming gabay" },
        { time: 56.18, text: "Paaralang dakila" },
        { time: 62.14, text: "PUP, pinagpala" },
        { time: 69, text: "Gagamitin ang karunungan" },
        { time: 74, text: "Mula sa iyo, para sa bayan" },
        { time: 81, text: "Ang iyong aral, diwa, adhikang taglay" },
        { time: 86.10, text: "PUP, aming gabay" },
        { time: 89, text: "Paaralang dakila" },
        { time: 95.15, text: "PUP, pinagpala" }
    ];

    // Create and append list items for each lyric
    lyrics.forEach((line, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = line.text;
        listItem.classList.add('lyric');
        lyricsContainer.appendChild(listItem);
    });

    // Event listener for timeupdate to sync lyrics with audio
    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        const lyricsItems = document.querySelectorAll('.lyric');

        // Remove 'active' class from all lyrics
        lyricsItems.forEach(item => {
            item.classList.remove('active');
        });

        // If the current time is before the start time of the first lyric,
        // set the first lyric as active and scroll to it
        if (currentTime < lyrics[1].time) {
            lyricsItems[0].classList.add('active');
            lyricsContainer.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Iterate through lyrics and set the active class
        for (let i = 0; i < lyrics.length; i++) {
            if (currentTime >= lyrics[i].time && (!lyrics[i + 1] || currentTime < lyrics[i + 1].time)) {
                lyricsItems[i].classList.add('active');

                // Scroll the lyrics container to show the active lyric
                const scrollOffset = lyricsItems[i].offsetTop - lyricsContainer.offsetTop - lyricsContainer.clientHeight / 2;
                lyricsContainer.scrollTo({ top: scrollOffset, behavior: 'smooth' });
                break;
            }
        }
    });
});
