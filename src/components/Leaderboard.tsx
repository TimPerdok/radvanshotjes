import { Card, CardContent, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { type Sector } from "../forms/SectorFormValues.ts";
import PageContainer from "./layout/PageContainer.tsx";
import { Spinner } from "./Spinner.tsx";
import { FlexColumn } from "./layout/Flex.tsx";

export type Leaderboard = {
  [name: string]: number;
}


const CTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'isWinner'
})`
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
    <PageContainer>
      <FlexColumn>
        <h1>Leaderboard</h1>
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
      </FlexColumn>
    </PageContainer>


    <Spinner ></Spinner>
  </>
}