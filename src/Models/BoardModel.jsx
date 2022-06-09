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
          position: letter + int,
          color: "black",
          checkerColor: (i < 3 && "black") || (i > 4 && "white"),
        });
      } else {
        row.push({
          x: j,
          y: i,
          position: letter + int,
          color: "white",
        });
      }
    }
    board.push(row);
  }

  return [
    [
      {
        x: 0,
        y: 0,
        position: "A8",
        color: "white",
      },
      {
        x: 1,
        y: 0,
        position: "B8",
        color: "black",
        checkerColor: false,
      },
      {
        x: 2,
        y: 0,
        position: "C8",
        color: "white",
      },
      {
        x: 3,
        y: 0,
        position: "D8",
        color: "black",
        checkerColor: false,
      },
      {
        x: 4,
        y: 0,
        position: "E8",
        color: "white",
      },
      {
        x: 5,
        y: 0,
        position: "F8",
        color: "black",
        checkerColor: false,
      },
      {
        x: 6,
        y: 0,
        position: "G8",
        color: "white",
      },
      {
        x: 7,
        y: 0,
        position: "H8",
        color: "black",
        checkerColor: false,
      },
    ],
    [
      {
        x: 0,
        y: 1,
        position: "A7",
        color: "black",
        checkerColor: false,
      },
      {
        x: 1,
        y: 1,
        position: "B7",
        color: "white",
      },
      {
        x: 2,
        y: 1,
        position: "C7",
        color: "black",
        checkerColor: "black",
      },
      {
        x: 3,
        y: 1,
        position: "D7",
        color: "white",
      },
      {
        x: 4,
        y: 1,
        position: "E7",
        color: "black",
        checkerColor: "black",
      },
      {
        x: 5,
        y: 1,
        position: "F7",
        color: "white",
      },
      {
        x: 6,
        y: 1,
        position: "G7",
        color: "black",
        checkerColor: "white",
      },
      {
        x: 7,
        y: 1,
        position: "H7",
        color: "white",
      },
    ],
    [
      {
        x: 0,
        y: 2,
        position: "A6",
        color: "white",
      },
      {
        x: 1,
        y: 2,
        position: "B6",
        color: "black",
        checkerColor: false,
      },
      {
        x: 2,
        y: 2,
        position: "C6",
        color: "white",
      },
      {
        x: 3,
        y: 2,
        position: "D6",
        color: "black",
        checkerColor: false,
      },
      {
        x: 4,
        y: 2,
        position: "E6",
        color: "white",
      },
      {
        x: 5,
        y: 2,
        position: "F6",
        color: "black",
        checkerColor: false,
      },
      {
        x: 6,
        y: 2,
        position: "G6",
        color: "white",
      },
      {
        x: 7,
        y: 2,
        position: "H6",
        color: "black",
        checkerColor: false,
      },
    ],
    [
      {
        x: 0,
        y: 3,
        position: "A5",
        color: "black",
        checkerColor: false,
      },
      {
        x: 1,
        y: 3,
        position: "B5",
        color: "white",
      },
      {
        x: 2,
        y: 3,
        position: "C5",
        color: "black",
        checkerColor: "black",
      },
      {
        x: 3,
        y: 3,
        position: "D5",
        color: "white",
      },
      {
        x: 4,
        y: 3,
        position: "E5",
        color: "black",
        checkerColor: false,
      },
      {
        x: 5,
        y: 3,
        position: "F5",
        color: "white",
      },
      {
        x: 6,
        y: 3,
        position: "G5",
        color: "black",
        checkerColor: false,
      },
      {
        x: 7,
        y: 3,
        position: "H5",
        color: "white",
      },
    ],
    [
      {
        x: 0,
        y: 4,
        position: "A4",
        color: "white",
      },
      {
        x: 1,
        y: 4,
        position: "B4",
        color: "black",
        checkerColor: false,
      },
      {
        x: 2,
        y: 4,
        position: "C4",
        color: "white",
      },
      {
        x: 3,
        y: 4,
        position: "D4",
        color: "black",
        checkerColor: false,
      },
      {
        x: 4,
        y: 4,
        position: "E4",
        color: "white",
      },
      {
        x: 5,
        y: 4,
        position: "F4",
        color: "black",
        checkerColor: false,
      },
      {
        x: 6,
        y: 4,
        position: "G4",
        color: "white",
      },
      {
        x: 7,
        y: 4,
        position: "H4",
        color: "black",
        checkerColor: false,
      },
    ],
    [
      {
        x: 0,
        y: 5,
        position: "A3",
        color: "black",
        checkerColor: "white",
      },
      {
        x: 1,
        y: 5,
        position: "B3",
        color: "white",
      },
      {
        x: 2,
        y: 5,
        position: "C3",
        color: "black",
        checkerColor: "white",
      },
      {
        x: 3,
        y: 5,
        position: "D3",
        color: "white",
      },
      {
        x: 4,
        y: 5,
        position: "E3",
        color: "black",
        checkerColor: "white",
      },
      {
        x: 5,
        y: 5,
        position: "F3",
        color: "white",
      },
      {
        x: 6,
        y: 5,
        position: "G3",
        color: "black",
        checkerColor: "white",
      },
      {
        x: 7,
        y: 5,
        position: "H3",
        color: "white",
      },
    ],
    [
      {
        x: 0,
        y: 6,
        position: "A2",
        color: "white",
      },
      {
        x: 1,
        y: 6,
        position: "B2",
        color: "black",
        checkerColor: false,
      },
      {
        x: 2,
        y: 6,
        position: "C2",
        color: "white",
      },
      {
        x: 3,
        y: 6,
        position: "D2",
        color: "black",
        checkerColor: "black",
      },
      {
        x: 4,
        y: 6,
        position: "E2",
        color: "white",
      },
      {
        x: 5,
        y: 6,
        position: "F2",
        color: "black",
        checkerColor: false,
      },
      {
        x: 6,
        y: 6,
        position: "G2",
        color: "white",
      },
      {
        x: 7,
        y: 6,
        position: "H2",
        color: "black",
        checkerColor: false,
      },
    ],
    [
      {
        x: 0,
        y: 7,
        position: "A1",
        color: "black",
        checkerColor: false,
      },
      {
        x: 1,
        y: 7,
        position: "B1",
        color: "white",
      },
      {
        x: 2,
        y: 7,
        position: "C1",
        color: "black",
        checkerColor: false,
      },
      {
        x: 3,
        y: 7,
        position: "D1",
        color: "white",
      },
      {
        x: 4,
        y: 7,
        position: "E1",
        color: "black",
        checkerColor: false,
      },
      {
        x: 5,
        y: 7,
        position: "F1",
        color: "white",
      },
      {
        x: 6,
        y: 7,
        position: "G1",
        color: "black",
        checkerColor: false,
      },
      {
        x: 7,
        y: 7,
        position: "H1",
        color: "white",
      },
    ],
  ];
};
