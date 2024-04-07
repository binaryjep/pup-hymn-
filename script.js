document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const textContainer = document.getElementById('textContainer');
    
    const data = [
        {
            text: "Sintang Paaralan",
            type: "word",
            startTime: 12.20,
        },
        
        {
            text: "Tanglaw ka ng bayan",
            type: "word",
            startTime: 15.30,
        },
        
        {
            text: "Pandayan ng isip ng kabataan",
            type: "word",
            startTime: 18.15,
        },
        
        {
            text: "Kami ay dumating nang salat sa yaman",
            type: "word",
            startTime: 24.15,
        },
        
        {
            text: "Hanap na dunong ay iyong alay",
            type: "word",
            startTime: 29.23,
        },
        
        {
            text: "Ang layunin mong makatao",
            type: "word",
            startTime: 35.25,
        },
        
        {
            text: "Dinarangal ang Pilipino",
            type: "word",
            startTime: 41.15,
        },
        
        {
            text: "Ang iyong aral, diwa, adhikaing taglay",
            type: "word",
            startTime: 47.15,
        },
        
        {
            text: "PUP, aming gabay",
            type: "word",
            startTime: 53.18,
        },
        
        {
            text: "Paaralang dakila",
            type: "word",
            startTime: 56.18,
        },
        
        {
            text: "PUP, pinagpala",
            type: "word",
            startTime: 62.14,
        },
        
        {
            text: "Gagamitin ang karunungan",
            type: "word",
            startTime: 69,
        },
        
        {
            text: "Mula sa iyo, para sa bayan",
            type: "word",
            startTime: 74,
        },
        
        {
            text: "Ang iyong aral, diwa, adhikang taglay",
            type: "word",
            startTime: 81,
        },
        
        {
            text: "PUP, aming gabay",
            type: "word",
            startTime: 86.10,
        },
        
        {
            text: "Paaralang dakila",
            type: "word",
            startTime: 89,
        },
        
        {
            text: "PUP, pinagpala",
            type: "word",
            startTime: 95.15,
        },
    ];

    const syncData = data.map((lines) => {
        return { text: lines.text, time: lines.startTime };
    });




});
syncData.forEach((item) => {
    const spanTag = document.createElement("span")
    spanTag.innerText = item.text 
    textContainer.appendChild(spanTag)
});

