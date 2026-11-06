let studentData = [
  {
    Name: "John",
    age: 20,
    mark: 35,
  },
  {
    Name: "Babu",
    age: 22,
    mark: 25,
  },
];

const resultGenerator = (
  studentName: string,
  studentAge: number,
  studentMark: number,
) => {
  if (studentMark >= 35) {
    console.log(
      `Congratulation ${studentName}! At the age of ${studentAge}, you passed the EXAM.`,
    );
  } else {
    console.log(
      `Sorry ${studentName}! At the age of ${studentAge}, you failed the EXAM.`,
    );
  }
};

studentData.map(({ Name, age, mark }) => resultGenerator(Name, age, mark));
