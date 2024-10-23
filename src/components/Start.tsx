import Wheel from './Wheel.tsx';
import React, { useEffect, useState } from 'react';
import { Loader } from './Loader.tsx';
import { Spinner } from './Spinner.tsx';
import { Howl } from 'howler';

export type Sector = {
  label: string
  color: string
}

const randomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

const playerWinSound = new Audio('assets/win.mp3');
const gameWinSound = new Audio('assets/victory.mp3');

export function Start() {
  const [winner, setWinner] = useState<Sector>()
  const [game, setGame] = useState<Sector>()
  const [state, setState] = useState(0);

  const [players, setPlayers] = useState<string[]>([
    "Gerben",
    "Tim",
    "Nick",
    "Rian",
    "Maaike",
    "Ciska",
    "Lotte",
    "Rikus",
    "Danique",
    "Sjoerd",
    "Simon",
    "Jesper",
    "Gertrude",
    "Britt",
    "Twan",
    "Robert-Jan",
    "Jesse",
    "Esther",
    "Marnix",
    "Annemarie",
    "Margo",
    "Olav",
  ].sort(() => Math.random() - 0.5))

  const [games, setGames] = useState<string[]>([
    "Shotje uitdelen",
    "Shotje nemen",
    "Shotje uitdelen",
    "Shotje nemen",
    "Shotje uitdelen",
    "Shotje nemen",
    "Creme shotje pakken"
  ].sort(() => Math.random() - 0.5))

  const restart = () => {
    setWinner(undefined);
    setGame(undefined);
  }

  const finishPlayer = (player: Sector) => {
    playerWinSound.play();
    localStorage.setItem("lastWinner", player.label);
    localStorage.setItem(player.label, (Number(localStorage.getItem(player.label)) + 1).toString());
    setWinner(player);
  }

  const finishGame = (game: Sector) => {
    gameWinSound.play();
    setGame(game)
    setTimeout(() => {
      // 15 min = 900_000
      // 30 min = 1_800_000
      let lastTimeout = randomNumberBetween(900_000, 1_200_000);
      globalThis.lasttimeout = () => lastTimeout / 1000 + " seconds";
      setTimeout(restart, lastTimeout);
    }, 10_000)
  }

  useEffect(() => {
    globalThis.addPlayer = (player: string) => {
      setPlayers([...players, player])
    }
    globalThis.removePlayer = (player: string) => {
      setPlayers(players.filter(p => p !== player))
    }
    globalThis.reset = (player: string) => {
      localStorage.clear();
    }
   
    globalThis.spin = restart;

  }, []);

  return (
    <>
      { state === 0 && <Wheel finish={finishPlayer} options={players} />}
      { state === 1 && <Wheel finish={finishGame} options={games} />}
      { state === 0 && winner && <Loader time={10000} finish={()=>setState(1)}></Loader>}
      { state === 0 && winner && game && <Spinner/>}
    </>
  );
}
