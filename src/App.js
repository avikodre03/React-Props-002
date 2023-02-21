import './App.css';
import MoviesCard from "./Components/MoviesCard";

function App() {
  return (
    <div className="App">

      <MoviesCard
        profile="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
        bg="https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg"
        name="Bright"
        year="2017"
        director="David Aye"
        time="117 min"
        details="Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. "
        movieType=" Action, Adventure, Drama"
      />
      <MoviesCard
        profile="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
        bg="https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png"
        name="Tomb Raider"
        year="2018"
        time="125 min"
        director="Roar Uthaug"
        details="Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
        movieType=" Action,Fantasy" />

      <MoviesCard
        profile="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"
        bg="https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg"
        name="Black Panther"
        year="2018"
        time="134 min"
        director="Ryan Coogler"
        details=" T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake. "
        movieType=" Action, Adventure, Sci-Fi" />

    </div>
  );
}

export default App;
