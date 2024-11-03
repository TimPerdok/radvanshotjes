import Wheel from './wheel/Wheel.tsx';
import React, { useEffect, useState } from 'react';
import { Loader } from './Loader.tsx';
import { Spinner } from './Spinner.tsx';
import { Howl } from 'howler';
import type { Sector, SectorFormValues } from "../forms/SectorFormValues.ts";
import useLocalStorage, { LocalStorageKeys } from "../hooks/useLocalStorage.ts";
import type { Leaderboard } from "./Leaderboard.tsx";
import { DEFAULT_FORM } from "./pages/Setup.tsx";
import LeaderboardList from "./Leaderboard.tsx";
import { SettingsFormValues } from "../forms/SettingsFormValues.ts";

const randomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

enum GameStep {
  CHOOSE_PLAYER = 0,
  CHOOSE_CHALLENGE = 1,
  LEADERBOARD = 2
}

const initHowl = (src: string) => {
  return new Howl({
    src: [src],
    preload: true,
    volume: 0.8
  });
}


const playerWinSound: Howl = new Audio('assets/win.mp3');
const gameWinSound: Howl = new Audio('assets/victory.mp3');
const wheelMusic: Howl = initHowl('assets/rad2.mp3');

export function Game() {
  const [{ players, challenges }] = useLocalStorage<SectorFormValues>(LocalStorageKeys.SETUP, DEFAULT_FORM);
  const [leaderboard, setLeaderboard] = useLocalStorage<Leaderboard>(LocalStorageKeys.LEADERBOARD, {});
  const [, setLastWinner] = useLocalStorage<Sector | null>(LocalStorageKeys.LAST_WINNER, null);
  const [{minInterval, maxInterval}] = useLocalStorage<SettingsFormValues>(LocalStorageKeys.SETTINGS, new SettingsFormValues());

  const [step, setStep] = useState<GameStep>(GameStep.CHOOSE_PLAYER);

  const [winner, setWinner] = useState<Sector>()
  const [challenge, setChallenge] = useState<Sector>()

  useEffect(() => {
    wheelMusic.play();
  }, [])

  const restart = () => {
    wheelMusic.play();
    setWinner(undefined);
    setChallenge(undefined);
    setStep(GameStep.CHOOSE_PLAYER);
  }

  const incrementLeaderboard = (label: string) => {
    const newLeaderboard = { ...leaderboard };
    newLeaderboard[label] = (leaderboard[label] || 0) + 1;
    setLeaderboard(newLeaderboard);
  }

  const choosePlayer = (player: Sector) => {
    playerWinSound.play()
    setLastWinner(player);
    incrementLeaderboard(player.label);
    setWinner(player);
  }

  const finishGame = (game: Sector) => {
    gameWinSound.play()
    setChallenge(game)
    setTimeout(() => {
      // 15 min = 900_000
      // 30 min = 1_800_000
      const minutesToMs = (minutes: number) => minutes * 60 * 1000;
      const timeout = minutesToMs(randomNumberBetween(minInterval, maxInterval));
      console.log("Next spin at", new Date(Date.now() + timeout));
      setTimeout(restart, timeout);
    }, 10_000)
  }

  return (
    <>
      {step === GameStep.CHOOSE_PLAYER && <Wheel finish={choosePlayer} sectors={players} />}
      {step === GameStep.CHOOSE_CHALLENGE && <Wheel finish={finishGame} sectors={challenges} />}
      {step === GameStep.LEADERBOARD && winner && challenge && <LeaderboardList
        players={players}
        leaderboard={leaderboard}
        challenge={challenge}
        winner={winner} />}
      {winner && <Loader time={10000} finish={() => setStep(GameStep.CHOOSE_CHALLENGE)}></Loader>}
      {winner && challenge && <Loader time={10000} finish={() => setStep(GameStep.LEADERBOARD)}></Loader>}
      {step === GameStep.CHOOSE_PLAYER && winner && challenge && <Spinner />}
    </>
  );
}