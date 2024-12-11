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
import useLocalStorage, { LocalStorageKeys } from "../hooks/useLocalStorage.ts";
import { FlexColumn } from "./layout/Flex.tsx";
import PageContainer from "./layout/PageContainer.tsx";
import { DEFAULT_FORM } from "./pages/setup/Setup.tsx";
import { Spinner } from "./Spinner.tsx";

type LeaderboardEntry = {
  [challengeId: SectorID]: number;
}

export type Leaderboard = {
  [playerId: SectorID]: LeaderboardEntry;
};

import { TableRowProps } from "@mui/material/TableRow";

interface LeaderboardTableRowProps extends TableRowProps {
  iswinner: boolean;
}

const LeaderboardTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'iswinner',
})<LeaderboardTableRowProps>`
  background-color: ${({ iswinner, theme }) =>
    iswinner ? theme.palette.primary.light : "transparent"};
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

                        if (!player) return null;
                        return (
                          <LeaderboardTableRow key={player.id} iswinner={winner?.id === player.id}>
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
