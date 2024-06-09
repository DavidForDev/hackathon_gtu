import gql from "graphql-tag";

export default gql`
  type CourseProgress {
    id: ID
    user_id: ID
    missiondone: Boolean
    course_id: ID
    quizdone: Boolean
    score: Int
  }

  type Course {
    id: ID
    title: String
    description: String
    keywords: JSON
  }

  type Mission {
    id: ID
    title: String
    task: String
    answer: String
    score: Int
    course_id: Int
  }

  type Quizz {
    id: ID
    course_id: Int
    question: String
    answers: JSON
    score: Int
  }

  input LevelUpInput {
    user_id: ID
    missiondone: Boolean
    course_id: ID
    quizDone: Boolean
    score: Int
  }

  input InputCourseProg {
    user_id: Int
    course_id: Int
  }

  type Query {
    getMissions(course_id: String): [Mission]
    getQuizz(course_id: String): [Quizz]
    getCourses: [Course]
    getCourseProg(inputCourseProg: InputCourseProg): Response
  }

  type Mutation {
    levelUp(levelUpInput: LevelUpInput): Response
  }
`;
