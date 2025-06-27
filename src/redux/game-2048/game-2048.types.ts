export type GetGame2048HighScoreParams = {
  boardSize: number;
  difficulty: string;
};

export type CompleteGame2048Params = {
  boardSize: number;
  difficulty: string;
  score: number;
  completedInSeconds: number;
};
