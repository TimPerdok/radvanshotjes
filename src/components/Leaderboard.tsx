import { Card, CardContent, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { SectorForm, type ID, type Sector } from "../forms/Sector.ts";
import * as React from "react";
import DefaultForm from "./form/DefaultForm.tsx";
import FullScreen from "./layout/FullScreen.tsx";
import PageContainer from "./layout/PageContainer.tsx";
import SetupForm from "./pages/SectorsForm.tsx";
import { Spinner } from "./Spinner.tsx";

export type Leaderboard = {
  [name: string]: number;
}

const CTableRow = styled(TableRow)`
  background-color: ${({ isWinner }: { isWinner: boolean }) => isWinner ? 'green' : 'transparent'};
`


export default function LeaderboardList({
  leaderboard,
  players,
  challenge,
  winner
}: {
  leaderboard: Leaderboard;
  challenge: Sector;
  winner: Sector;
  players: Sector[]
}) {

  const mergedLeaderboard = {
    ...leaderboard,
    ...Object.fromEntries(players
      .filter((player) => !leaderboard[player.label])
      .map((player) => [player.label, 0])),
  }


  return <>
    <FullScreen>
      <h1>Leaderboard</h1>
      <PageContainer>
        <Card>
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Naam</TableCell>
                    <TableCell>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    Object.entries(mergedLeaderboard)
                      .sort(([, score1], [, score2]) => score2 - score1)
                      .map(([name, score]) => (
                        <CTableRow isWinner={winner.label === name} key={name} >
                          <TableCell >{name}</TableCell>
                          <TableCell >{score}</TableCell>
                        </CTableRow>
                      ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </PageContainer>
      <Spinner />
    </FullScreen>
  </>
}