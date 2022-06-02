export const BoardModel = () => {
  const board = [];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const ints = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();
  for (let i = 0; i < ints.length; i++) {
    const row = [];
    const int = ints[i];
    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];
      if ((i + j) % 2 !== 0) {
        row.push({
          x: j,
          y: i,
          position: letter+int,
          color: 'black',
        });
      } else {
        row.push({
          x: j,
          y: i,
          position: letter+int,
          color: "white",
        });
      }
    }
    board.push(row);
  }

  return board;
};
