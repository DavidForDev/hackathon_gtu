export interface LevelUpTypes {
  levelUpInput: {
    user_id: string;
    missiondone: boolean;
    course_id: string;
    quizDone: boolean;
    score: number;
  };
}

export interface GetQuizzTypes {
  course_id: string;
}

// ------------- Custom Hooks ------------- //
import ResponseData from "../../hooks/useRespone";
import useToken from "../../hooks/useToken";

// ------------- DB ------------- //
import DB from "../../database";

export interface GetMissionsTypes {
  course_id: string;
}

export interface GetCourseProgTypes {
  inputCourseProg: {
    user_id: number;
    course_id: number;
  };
}

export default {
  Query: {
    getMissions: async (_: any, args: GetMissionsTypes) => {
      const { course_id } = args;

      try {
        if (!course_id) {
          return ResponseData({}, "we don't have course", false);
        }

        const { rows } = await DB.query(
          `SELECT * FROM missions where course_id = $1`,
          [course_id]
        );

        return rows;
      } catch (error) {
        throw error;
      }
    },
    getQuizz: async (_: any, args: GetQuizzTypes) => {
      const { course_id } = args;

      try {
        if (!course_id) {
          return ResponseData({}, "we don't have course", false);
        }

        const { rows } = await DB.query(
          `SELECT * FROM quizz WHERE course_id = $1`,
          [course_id]
        );

        return rows;
      } catch (error) {
        throw error;
      }
    },
    getCourses: async () => {
      try {
        const { rows } = await DB.query("SELECT * FROM course");

        return rows;
      } catch (error) {
        throw error;
      }
    },
    getCourseProg: async (_: any, args: GetCourseProgTypes) => {
      const { course_id, user_id } = args.inputCourseProg;

      console.log(course_id, user_id);

      try {
        if (!course_id || !user_id) {
          throw new Error("something wrong with ids");
        }

        const { rows } = await DB.query(
          "SELECT missiondone, quizdone FROM course_prog WHERE user_id = $1 and course_id = $2",
          [user_id, course_id]
        );

        return ResponseData(rows[0], "success", true);
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    levelUp: async (_: any, args: LevelUpTypes) => {
      const { user_id, missiondone, quizDone, course_id, score } =
        args.levelUpInput;

      try {
        if (!user_id || !course_id) {
          return ResponseData({}, "something wrong with ids", false);
        }

        // check if such user_id  and mission_id arleady exist
        const { rowCount } = await DB.query(
          "SELECT * from course_prog where user_id = $1 and missiondone = $2 and course_id = $3",
          [user_id, missiondone, course_id]
        );

        // === if such mission doesn't have specific user then we should create and level up!
        if (rowCount !== 1) {
          const result = await DB.query(
            `
                      INSERT INTO
                      course_prog(user_id, missiondone, course_id, score, quizdone)
                      values($1, $2, $3, $4, $5) RETURNING *`,
            [user_id, missiondone, course_id, score, quizDone]
          );

          const missionObj = result.rows[0];
          return ResponseData(missionObj, "success", true);
        }

        // === if such user arleady exist then we should add scores;
        const { rows } = await DB.query(
          `UPDATE course_prog SET score = score + $1, quizdone = COALESCE($2, quizdone)`,
          [score, quizDone]
        );

        return ResponseData(rows[0], "success", true);
      } catch (error) {
        throw error;
      }
    },
  },
};
