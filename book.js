document.addEventListener('DOMContentLoaded', () => {
    const pagesData = [
        { text: "Era una giornata qualunque nella vita di Paul, un giovane avvocato di successo. Il sole illuminava le strade ordinate del quartiere residenziale dove viveva insieme a sua moglie, Seo-Yeon, e al loro curioso gatto Asteroid. Paul si sentiva sereno: un’altra settimana di lavoro era finita, e quella sera aveva in programma di rivedere Jakub, un vecchio amico con cui condivideva ricordi di un’adolescenza piena di avventure e litigi. Jakub, un massiccio body builder polacco dal carattere irascibile ma dal cuore leale, era stato sempre una presenza costante, anche se il tempo e la distanza avevano un po' allentato il loro legame. “Paul, sei pronto? Jakub arriverà tra poco,” disse Seo-Yeon mentre preparava un tè nella cucina. Lei, sempre attenta e dolce, amava vedere Paul rilassarsi in compagnia dei suoi vecchi amici. “Sì, certo. Gli ho promesso una serata tranquilla, anche se con lui è difficile prevedere cosa succederà,” rispose Paul sorridendo mentre accarezzava Asteroid, che sembrava condividere il suo entusiasmo", img: "page1.webp" },
        { text: "Più tardi, Paul e Jakub si ritrovarono nel piccolo pub all’angolo, uno di quei posti accoglienti dove il tempo sembrava fermarsi. Tra una birra e una risata, parlarono delle loro vite, dei successi di Paul e delle gare di Jakub, ma anche delle difficoltà che avevano affrontato, come il recente divorzio di Jakub da Julia, una ferita ancora aperta. “Sai, Paul, a volte mi chiedo se la vita abbia ancora qualcosa di sorprendente da offrire. Tutto sembra così... monotono,” confessò Jakub con uno sguardo che tradiva un’inquietudine profonda. “Forse basta guardare le cose da una prospettiva diversa,” rispose Paul con un tono filosofico. Ma prima che la conversazione potesse approfondirsi, un tuono fragoroso scosse il locale.", img: "page2.webp" },
        { text: "Fuori, il cielo si era improvvisamente oscurato. Una tempesta feroce si stava abbattendo sulla città, con venti così potenti da far tremare le finestre. Paul e Jakub decisero di tornare a casa in fretta, ma non fecero in tempo. La pioggia torrenziale e il vento ululante li avvolsero mentre cercavano riparo. Poi, un lampo accecante illuminò la notte, seguito da un uragano improvviso che sembrava sfidare le leggi della natura.", img: "page3.webp" },
        { text: "Quando Paul riaprì gli occhi, si trovò disteso su un terreno morbido e sconosciuto. Un cielo azzurro irreale e un'aria incredibilmente fresca lo circondavano. Jakub era poco distante, ancora privo di sensi.", img: "page4.webp" },
        { text: "“Dove siamo?” mormorò Paul, guardandosi intorno. Tutto sembrava diverso: alberi giganteschi, prati scintillanti e figure indistinte che si muovevano in lontananza. Un movimento catturò la sua attenzione. Un gruppo di animali, ma non erano animali normali: camminavano su due zampe, indossavano abiti e sembravano parlare tra loro. Paul si passò una mano tra i capelli, cercando di convincersi che non stesse sognando. “Jakub, svegliati! Devi vedere questo...” disse con urgenza, scuotendo l’amico. E così, in quel mondo strano e meraviglioso, iniziò il loro viaggio, senza sapere cosa li aspettasse o come sarebbero mai tornati a casa. Dopo aver vagato per qualche ora in quel paesaggio surreale, Paul e Jakub si imbatterono in una costruzione curiosa: un’antica taverna con un'insegna che recitava 'Dragon’s Emporium'. Dalla porta usciva una luce calda e invitante, e una figura imponente si stagliò contro la soglia. Era un dragonborn dal portamento fiero e dalle squame lucenti.", img: "page5.webp" },
        { text: "“Benvenuti, viandanti! Mi chiamo Belindo, e questa è la mia taverna. Siete stanchi e confusi, immagino. Venite, qui troverete ristoro e un letto per la notte,” disse con una voce profonda ma gentile. Paul e Jakub, seppur titubanti, accettarono l’invito. All’interno, la taverna era un luogo affascinante, pieno di oggetti bizzarri e clienti che sembravano usciti da un sogno. Dopo una cena sostanziosa e una notte di riposo, i due amici si risvegliarono con una nuova speranza. “Se cercate una via d’uscita da questo mondo, dovreste parlare con Cornall,” disse Belindo al mattino. “È un wolfborn, una guida esperta. Conosce ogni angolo di queste terre e potrebbe aiutarvi a tornare a casa.” Con queste parole, Paul e Jakub si misero in cammino, guidati dalle indicazioni di Belindo. Cornall li aspettava ai margini di una foresta densa e misteriosa. La sua figura snella e i suoi occhi attenti tradivano una forza e un’esperienza notevoli.", img: "page6.webp" },
        { text: "“Siete pronti per il viaggio? Non sarà facile, ma troveremo un modo per riportarvi al vostro mondo,” disse Cornall, con un tono che ispirava fiducia. La settimana che seguì fu un susseguirsi di sfide e pericoli. Attraversarono foreste impenetrabili, dove l’oscurità sembrava vivere di vita propria, e combatterono contro creature che sembravano uscite dai loro incubi. Ogni passo era un test per la loro forza e determinazione. Cornall si dimostrò una guida indispensabile, ma anche lui non era immune alla fatica e ai pericoli del cammino. Arrivarono infine a un altopiano roccioso dove il calore del terreno si faceva sempre più opprimente. Davanti a loro si stagliava una grotta circondata da flussi di lava incandescente. Cornall si fermò e indicò l’entrata. “Questo è uno dei passaggi più difficili. All’interno si dice viva il Guardiano del Fuoco, una tartaruga di lava che protegge il sentiero verso le Montagne di Cristallo. Se vogliamo proseguire, dobbiamo affrontarla.”", img: "page8.webp" },
        { text: "Il giorno seguente, la battaglia ebbe inizio. Entrarono nella grotta, dove il calore era quasi insopportabile. Il Guardiano del Fuoco si rivelò in tutta la sua maestosità: una gigantesca tartaruga ricoperta di lava incandescente, con occhi ardenti che sembravano scrutare nel profondo delle loro anime. Ogni suo movimento scuoteva la terra, e con un ruggito lanciò un fiotto di lava verso i tre compagni. Cornall guidò il gruppo con astuzia, dando ordini precisi per evitare gli attacchi. Paul e Jakub facevano del loro meglio per colpire i punti deboli della creatura, ma la battaglia era estenuante. Dopo un lungo scontro, un attacco improvviso del Guardiano colpì Cornall in pieno petto, scaraventandolo contro la parete rocciosa.", img: "page9.webp" },
        { text: "“Cornall!” gridò Paul, accorrendo verso di lui. Ma Cornall, con un filo di voce, li spronò a continuare. “Non fermatevi... dovete vincere...” Con un ultimo sforzo, Paul e Jakub riuscirono a colpire il Guardiano nei suoi punti più vulnerabili, e con un urlo assordante, la tartaruga di lava crollò, spegnendosi in una nube di fumo e cenere. Dopo la battaglia, i due si avvicinarono a Cornall, che era visibilmente debole. Il wolfborn li guardò con un sorriso stanco. “Avete fatto bene... il vostro viaggio deve continuare.” Poche ore dopo, Cornall esalò il suo ultimo respiro, lasciandoli con un profondo senso di perdita. Il peso della loro missione si fece ancora più grave, ma sapevano di dover andare avanti, portando con sé il sacrificio del loro compagno.", img: "page10.webp" },
        { text: "Dopo aver seppellito Cornall ai margini del sentiero, Paul e Jakub si misero a discutere animatamente sul da farsi. Paul, con il cuore pesante, insisteva nel voler continuare il viaggio verso le Montagne di Cristallo. “Devo tornare da mia moglie,” disse con fermezza. “Lei è il mio mondo, e non posso arrendermi adesso.” Jakub, invece, sembrava dubbioso. “Paul, hai visto questo mondo? È così diverso da quello da cui veniamo. Forse... forse qui possiamo essere liberi da tutto. Non ci sono le stesse regole, gli stessi giudizi. Io... io penso che potrei trovare una nuova vita qui.” La tensione tra i due crebbe. Dopo un litigio verbale, degenerarono in una breve scazzottata, entrambi troppo stanchi e frustrati per controllarsi. Ma alla fine, si fermarono, respirando affannosamente. “Non possiamo continuare a litigare,” disse Paul, guardando l’amico negli occhi. “Se vuoi restare, è una tua scelta. Ma io devo andare avanti.”", img: "page11.webp" },
        { text: "Jakub annuì lentamente, riflettendo sulle parole di Paul. “Va bene. Ti rispetto per questo. Ma non cambierò idea. Rimarrò qui. Questo mondo... ha qualcosa che il nostro non ha. È più vivo, più vero.” Si abbracciarono brevemente, in silenzio, consapevoli che le loro strade stavano per dividersi. ", img: "page12.webp" },
        { text: "Jakub tornò verso il villaggio più vicino, mentre Paul riprese il cammino solitario verso le Montagne di Cristallo, con il peso del sacrificio di Cornall e l’addio di Jakub che gravava su di lui.", img: "page13.webp" },
        { text: "Jakub trovò il suo posto nel nuovo mondo, aiutando la comunità del villaggio e aiutando Belindo, costruendo una vita che lo faceva sentire finalmente in pace. Sebbene sentisse la mancanza di Paul, era sereno con la sua scelta, convinto che questo mondo fosse dove apparteneva davvero.", img: "page14.webp" },
        { text: "Di Paul non si seppe più nulla. Alcuni narravano di un viandante solitario avvistato nei pressi delle Montagne di Cristallo, altri dicevano che fosse riuscito a passare il portale e tornare a casa. Ma il suo destino rimase avvolto nel mistero, lasciando la sua storia a metà, come un’eco tra i mondi.", img: "page15.webp" }
        
    ]; // Sostituisci con i tuoi nomi di file esatti

    const book = document.querySelector('.book');
    let currentPage = 0;

    // Creazione delle pagine
    pagesData.forEach((pageData, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        if (index === 0) {
            page.classList.add('active');
        }
        page.innerHTML = `
            <div class="text">
                <h2>Pagina ${index + 1}</h2>
                <p>${pageData.text}</p>
            </div>
            <img src="images/${pageData.img}" alt="Page ${index + 1}">
        `;
        book.appendChild(page);
    });

    const pages = document.querySelectorAll('.page');

    // Bottoni di navigazione
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    const updateButtons = () => {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
    };

    const changePage = (forward) => {
        pages[currentPage].classList.remove('active');
        if (forward) {
            currentPage++;
        } else {
            currentPage--;
        }
        pages[currentPage].classList.add('active');
        updateButtons();
    };

    prevButton.addEventListener('click', () => changePage(false));
    nextButton.addEventListener('click', () => changePage(true));

    updateButtons();
});
