import {
  Card,
  CardContent,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { SectorFormValues, SectorID, type Sector } from "../forms/SectorFormValues.ts";
import PageContainer from "./layout/PageContainer.tsx";
import { Spinner } from "./Spinner.tsx";
import { FlexColumn } from "./layout/Flex.tsx";
import useLocalStorage, { LocalStorageKeys } from "../hooks/useLocalStorage.ts";
import { DEFAULT_FORM } from "./pages/setup/Setup.tsx";

type LeaderboardEntry = {
  [challengeId: SectorID]: number;
}

export type Leaderboard = {
  [playerId: SectorID]: LeaderboardEntry;
};

const LeaderboardTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "isWinner",
})`
  background-color: ${({ isWinner }: { isWinner: boolean }) =>
    isWinner ? "green" : "transparent"};
`;

export default function LeaderboardList({
  challenge,
  winner,
}: {
  challenge?: Sector;
  winner?: Sector;
}) {

  const [leaderboard, setLeaderboard] = useLocalStorage<Leaderboard>(
    LocalStorageKeys.LEADERBOARD,
    {},
  );
  const [{ players, challenges }] = useLocalStorage<SectorFormValues>(
    LocalStorageKeys.SETUP,
    DEFAULT_FORM,
  );

  // const leaderboardEntries = Object.entries(leaderboard)
  //   .sort(([, a], [, b]) => {
  //     const getFullScore = (entry: LeaderboardEntry) => Object.values(entry).reduce((acc, val) => acc + val, 0)
  //     return getFullScore(b) - getFullScore(a);
  //   });

  const leaderboardEntries: [string, LeaderboardEntry][] = players.map(({ id }) => {
    return [id, leaderboard[id] ?? {} as LeaderboardEntry] as [string, LeaderboardEntry];
  }).sort(([, a], [, b]) => {
    const getFullScore = (entry: LeaderboardEntry) => Object.values(entry).reduce((acc, val) => acc + val, 0)
    return getFullScore(b) - getFullScore(a);
  });

  return (
    <>
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
                      {
                        challenges.map((challenge) => (
                          <TableCell key={challenge.label}>
                            {challenge.label}
                          </TableCell>
                        ))
                      }
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      leaderboardEntries.map(([playerId, playerEntry]) => {
                        const player = players.find((player) => player.id === playerId)
                        console.log(players, playerId);

                        if (!player) return null;
                        return (
                          <LeaderboardTableRow key={player.id} isWinner={winner?.id === player.id}>
                            <TableCell>{player.label}</TableCell>
                            <TableCell>
                              {Object.values(playerEntry).reduce((acc, val) => acc + val, 0)}
                            </TableCell>
                            {
                              challenges
                                .map((challenge) => (
                                  <TableCell key={challenge.id}>
                                    {playerEntry[challenge.id] || 0}
                                  </TableCell>
                                ))
                            }
                          </LeaderboardTableRow>
                        );
                      })
                    }
                    <TableRow>
                      <TableCell colSpan={1}>
                        Totaal: 
                      </TableCell>
                      <TableCell>
                        {leaderboardEntries.reduce((acc, [playerId, playerEntry]) => {
                          return acc + Object.values(playerEntry).reduce((acc, val) => acc + val, 0);
                        }, 0)}
                      </TableCell>
                      {
                        challenges.map((challenge) => {
                          const total = leaderboardEntries.reduce((acc, [playerId, playerEntry]) => {
                            return acc + (playerEntry[challenge.id] || 0);
                          }, 0);
                          return (
                            <TableCell key={challenge.id}>
                              {total}
                            </TableCell>
                          );
                        })
                      }
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </FlexColumn>
      </PageContainer>
      {
        winner && <Spinner></Spinner>
      }
    </>
  );
}
