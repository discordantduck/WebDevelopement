import React from "react";

import DarkSouls3 from "./images/darkSouls3.jpg";
import SlayTheSpire from "./images/slayTheSpire.jpg";
import Pathfinder from "./images/pathfinderKingmaker.jpg";

function Home()
{
    return (
    <main>
        <header>
            <h1>My Favorite Games</h1>
        </header>

        <h2>Dark Souls 3</h2>
        <img src={DarkSouls3} alt="Dark Souls 3" />
        <p>
            Dark Souls 3 is an action rpg
        </p>
        <p>
            My rating in emoji: 9 x &#128578; / 10
        </p>

        <h2>Slay the Spire</h2>
        <img src={SlayTheSpire} alt="Slay the Spire" />
        <p>
            Slay the Spire a rogue-like card battler
        </p>
        <p>
            My rating in emoji: 8 x &#128578; / 10
        </p>

        <h2>Pathfinder: Kingmaker</h2>
        <img src={Pathfinder} alt="Pathfinder Kingmaker" />
        <p>
            Pathfinder: Kingmaker is a rpg
        </p>
        <p>
            My rating in emoji:  &#10067; / 10
        </p>
    </main>
    );
}

export default Home;