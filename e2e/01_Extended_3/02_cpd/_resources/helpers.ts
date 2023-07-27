export const shuffleAnswers = (answers: number[]) => {
  return answers.map(answer => answer > 0 ? answer - 1 : answer + 1)
}