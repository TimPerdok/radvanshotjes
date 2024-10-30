import type { ID, Sector } from "../forms/Sector.ts";
import * as React from "react";
export type Leaderboard = {
  [key: ID]: number;
}


export default function LeaderboardList({
  leaderboard,
  challenge,
  winner
}: {
  leaderboard: Leaderboard;
  challenge: Sector;
  winner: Sector;
}) {

  return <></>
}