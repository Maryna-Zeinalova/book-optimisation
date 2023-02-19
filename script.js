const mainCharacter = "Frodo";
const secondaryCharacters = {
    human: "Aragorn",
    dwarf: "Gimli",
    elf: "Legolas",
    witchers: ["Gendalf", "Saruman"],
    hobbits: [ "Sam", "Pippin"]
};
const ringsNumber = 1;

document.body.innerHTML = `
<h1>The Lord of the Rings (chatGPT version)</h1>
<p>The sun was setting behind the mountains as <span class="emphasise">${mainCharacter}</span> and his companions trudged up the steep path towards the Mines of Moria. The group had left the idyllic shire weeks ago, and they were starting to feel the weariness of their journey. <span class="emphasise">${secondaryCharacters.witchers[0]}</span> led the way, his staff glowing dimly in the fading light. The hobbits, <span class="emphasise">${secondaryCharacters.hobbits[0]}</span> and <span class="emphasise">${secondaryCharacters.hobbits[1]}</span>, were chatting nervously to each other, while <span class="emphasise">${secondaryCharacters.human}</span>, <span class="emphasise">${secondaryCharacters.dwarf}</span>, and <span class="emphasise">${secondaryCharacters.elf}</span> kept a watchful eye on their surroundings.</p>
<p>As they approached the entrance to the Mines, a sense of unease settled over the group. The dwarven city had long been abandoned, and the entrance was dark and foreboding. The company hesitated for a moment, but <span class="emphasise">${secondaryCharacters.witchers[0]}</span> urged them forward, muttering something about the watchful eyes of <span class="emphasise">${secondaryCharacters.witchers[1]}</span> the Dark Lord.</p>
<p>As they made their way through the dark, twisting tunnels of Moria, the group encountered a host of dangerous creatures. Goblins and orcs lurked in the shadows, their glowing eyes peering out at the travelers. They were attacked by a swarm of giant spiders, and narrowly escaped being crushed by a massive troll.</p>
<p>Despite the dangers, the company pressed on. They were on a mission to destroy the <span class="emphasise">${ringsNumber}</span> Ring, a powerful artifact that had fallen into the hands of the dark lord Sauron. The fate of Middle-earth rested on their success, and they would not be deterred by any obstacle.</p>
<p>Finally, after what seemed like an eternity, the group emerged from the Mines and into the light of day. They breathed a collective sigh of relief, but they knew that their journey was far from over. They had only just begun their quest to save Middle-earth, and they would face many more trials and tribulations before they reached their destination. But for now, they took a moment to rest and gather their strength before continuing on their way.</p>`;
