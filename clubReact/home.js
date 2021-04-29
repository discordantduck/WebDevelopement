import React from "react";
import DarkSouls3 from "./images/darkSouls3.jpg";
import SlayTheSpire from "./images/slayTheSpire.jpg";
import Pathfinder from "./images/pathfinderKingmaker.jpg";

function Home()
{
    const home =
    <body>
        <main>
            <header>
                <h1>The Go Home Club</h1>
            </header>

            <h2>Dark Souls 3 (2016)</h2>
            <img src={DarkSouls3} alt="Dark Souls 3" />
            <p>
                Dark Souls 3 is an action RPG
            </p>
            <p>
                Rating: 9 x &#128578; / 10
            </p>

            <h2>Slay the Spire (2019)</h2>
            <img src={SlayTheSpire} alt="Slay the Spire" />
            <p>
                Slay the Spire is a roguelike card battler
            </p>
            <p>
                Rating: 8 x &#128578; / 10
            </p>

            <h2>Pathfinder: Kingmaker (2018)</h2>
            <img src={Pathfinder} alt="Pathfinder Kingmaker" />
            <p>
                Pathfinder: Kingmaker is a rpg
            </p>
            <p>
                Rating:  &#10067; / 10
            </p>
        </main>
    </body>

    return home;
}

export default Home;