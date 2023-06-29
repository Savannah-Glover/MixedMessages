let adviceArrStart = [
    "You should ",
    "Don't forget to ",
    "Make sure you ",
    "It's important to ",
    "Never hesitate to ",
    "Try to "
];

let adviceArrEnd = [
    "drink more water.",
    "get plenty of sleep.",
    "exercise regularly.",
    "eat a balanced diet.",
    "practice mindfulness.",
    "read more books.",
    "spend time in nature.",
    "take breaks when working.",
    "maintain good posture.",
    "limit your screen time.",
    "express gratitude daily.",
    "try new things frequently.",
    "be kind to others.",
    "be patient with yourself.",
    "invest in self-care.",
    "laugh and have fun.",
    "pursue your passions.",
    "set realistic goals.",
    "be open to new experiences.",
    "practice good hygiene."
];

let inspirationArrStart = [
    "Remember, ",
    "Keep in mind, ",
    "Never forget, ",
    "Always remember, ",
    "Don't lose sight of the fact, "
];

let inspirationArrMiddle = [
    "even the longest journey begins with a single step, ",
    "the biggest hurdle to overcome is self-doubt, ",
    "great things never come from comfort zones, ",
    "you are stronger than you think, ",
    "success is not final, failure is not fatal, "
];

let inspirationArrEnd = [
    "so take that first step towards your dreams.",
    "so believe in yourself and your abilities.",
    "so venture out and embrace the challenge.",
    "so trust in your own strength and resilience.",
    "it's the courage to continue that counts."
];

let asciiArt = [
    '^_^',
    '<3',
    ':)',
    ':D',
    ':P',
    ':O',
    'B-)',
    '^-^',
    '>_<',
    'TT_TT',
    'o_o',
    'u_u',
    'v_v',
    'X_X',
    '$_$',
    '[-_-]Zzz',
    '(>_<)',
    '(O_O)',
    '(T_T)'
];
    


document.getElementById('promptDropdown').onchange = function() {
    const selection = this.value;
    console.log(selection);

    if(selection) {
        let message = '';
        switch(selection) {
            case 'inspirational':
                message += inspirationArrStart[Math.floor(Math.random() * inspirationArrStart.length)];
                message += inspirationArrMiddle[Math.floor(Math.random() * inspirationArrMiddle.length)];
                message += inspirationArrEnd[Math.floor(Math.random() * inspirationArrEnd.length)];
                break;
            case 'advice':
                message += adviceArrStart[Math.floor(Math.random() * adviceArrStart.length)];
                message += adviceArrEnd[Math.floor(Math.random() * adviceArrEnd.length)];
                break;
            case 'ASCII':
                message += asciiArt[Math.floor(Math.random() * asciiArt.length)];
            default:
                break;
        }
        let card = document.getElementById('messageCardBody');
        card.innerHTML = `<p>${message}</p>`;
    }
}