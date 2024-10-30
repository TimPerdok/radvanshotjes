import Wheel from './Wheel.tsx';
import React, { useEffect, useState } from 'react';
import { Loader } from './Loader.tsx';
import { Spinner } from './Spinner.tsx';
import { Howl } from 'howler';
import type { Sector, SectorForm } from "../forms/Sector.ts";
import useLocalStorage, { LocalStorageKeys } from "../hooks/useLocalStorage.ts";
import type { Leaderboard } from "./Leaderboard.tsx";
import { DEFAULT_FORM } from "./pages/Setup.tsx";
import LeaderboardList from "./Leaderboard.tsx";

const randomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

enum GameStep {
  CHOOSE_PLAYER = 0,
  CHOOSE_CHALLENGE = 1,
  LEADERBOARD = 2
}


const playerWinSound = new Audio('assets/win.mp3');
const gameWinSound = new Audio('assets/victory.mp3');

export function Game() {
  const [{ players, challenges }] = useLocalStorage<SectorForm>(LocalStorageKeys.SETUP, DEFAULT_FORM);
  const [leaderboard, setLeaderboard] = useLocalStorage<Leaderboard>(LocalStorageKeys.LEADERBOARD, []);
  const [lastWinner, setLastWinner] = useLocalStorage<Sector | null>(LocalStorageKeys.LAST_WINNER, null);
  
  const [step, setStep] = useState<GameStep>(GameStep.CHOOSE_PLAYER);

  const [winner, setWinner] = useState<Sector>()
  const [challenge, setChallenge] = useState<Sector>()

  const restart = () => {
    setWinner(undefined);
    setChallenge(undefined);
    setStep(GameStep.CHOOSE_PLAYER);
  }

  const incrementLeaderboard = (id: number) => {
    const newLeaderboard = { ...leaderboard };
    newLeaderboard[id] = (leaderboard[id] || 0) + 1;
    setLeaderboard(newLeaderboard);
  }

  const choosePlayer = (player: Sector) => {
    playerWinSound.play();
    setLastWinner(player);
    incrementLeaderboard(player.id);
    setWinner(player);
  }

  const finishGame = (game: Sector) => {
    gameWinSound.play();
    setChallenge(game)
    setTimeout(() => {
      // 15 min = 900_000
      // 30 min = 1_800_000
      setTimeout(restart, randomNumberBetween(900_000, 1_200_000));
    }, 10_000)
  }

  return (
    <>
      {step === GameStep.CHOOSE_PLAYER && <Wheel finish={choosePlayer} sectors={players} />}
      {step === GameStep.CHOOSE_CHALLENGE && <Wheel finish={finishGame} sectors={challenges} />}
      {step === GameStep.LEADERBOARD && challenge && <LeaderboardList leaderboard={leaderboard} challenge={challenge} winner={winner} />}

      {step === GameStep.CHOOSE_PLAYER && winner && <Loader time={10000} finish={() => setStep(1)}></Loader>}
      {step === GameStep.CHOOSE_PLAYER && winner && challenge && <Spinner />}
    </>
  );
}
