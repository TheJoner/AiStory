document.addEventListener('DOMContentLoaded', () => {
    const charactersData = [
        { name: "Paul", description: "Paul, un giovane avvocato di successo", img: "p3.jpg" },
        { name: "Seo-Yeon", description: "Seo-Yeon, la moglie di Paul", img: "p5.jpg" },
        { name: "Asteroid", description: "Il gatto di Paul e Seo-Yeon", img: "p6.jpg" },
        { name: "Jakub", description: "Jakub, un massiccio body builder polacco dal carattere irascibile ma dal cuore leale", img: "p1.jpg" },
        { name: "Belindo", description: "Belindo, un dragonborn, chill guy, tranquillo e generoso", img: "p2.jpg" },
        { name: "Cornall", description: "Cornall è un wolfborn, una guida esperta", img: "p7.jpg" },
        { name: "Tartaruga Lavica", description: "Il nemico di questa storia", img: "p4.jpg" }



        // Add more characters here
    ];

    const charactersContainer = document.querySelector('.characters');

    // Add character cards
    charactersData.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.innerHTML = `
            <img src="images/${character.img}" alt="${character.name}">
            <div class="text">
                <h2>${character.name}</h2>
                <p>${character.description}</p>
            </div>
        `;
        charactersContainer.appendChild(characterElement);
    });

    // Add animation on scroll
    const characters = document.querySelectorAll('.character');

    const onScroll = () => {
        characters.forEach(character => {
            const rect = character.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                character.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger animation for elements already in view
});
