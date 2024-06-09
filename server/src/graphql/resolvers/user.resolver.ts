import { hash, compare } from "bcrypt";

export interface CreateUserTypes {
  userRegistration: { userName: string; email: string; password: string };
}

export interface SignInTypes {
  userLogin: {
    email: string;
    password: string;
  };
}

export interface Response {
  data?: object;
  message?: string;
  status?: boolean;
}

// ------------- Custom Hooks ------------- //
import ResponseData from "../../hooks/useRespone";
import useToken from "../../hooks/useToken";

// ------------- DB ------------- //
import DB from "../../database";

export default {
  Query: {
    signIn: async (_: any, args: SignInTypes): Promise<Response> => {
      const { email, password } = args.userLogin;

      try {
        // === Check empty values
        if (!email || !password) {
          return ResponseData({}, "please fill al fields", false);
        }

        // === Check user
        const { rowCount, rows } = await DB.query(
          "SELECT * FROM users where email = $1",
          [email]
        );
        if (rowCount !== 1) {
          return ResponseData({}, "such user does not exist yet!", false);
        }

        // === if exist, then compare passwords
        const user = rows[0];
        const checkPassword = await compare(password, user.password);

        if (!checkPassword) {
          return ResponseData(
            {},
            "user password or email is not correct!",
            false
          );
        }

        // === make user token
        const userToken = useToken(user.user_id, user.email, user.username);

        // === if everything okay, we return response
        // we don't need user password anymore, so for securty we make it null
        return ResponseData(
          { ...user, password: null, token: userToken },
          "success",
          true
        );
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (_: any, args: CreateUserTypes): Promise<Response> => {
      const { userName, email, password } = args.userRegistration;

      try {
        // === Check empty values
        if (!userName || !email || !password) {
          return ResponseData({}, "please fill all fields!", false);
        }

        // === Check Same User
        const { rowCount, rows } = await DB.query(
          "SELECT email FROM users WHERE email = $1",
          [email]
        );

        if (rowCount === 1) {
          return ResponseData({}, "such user arleady exist!", false);
        }

        // === Check password Requirements
        if (password.length <= 8) {
          return ResponseData(
            {},
            "password length should be more than 8 symbol",
            false
          );
        }

        // === hash passwrd and insert into user table
        const hashedPassword = await hash(password, 10);
        const result = await DB.query(
          "INSERT INTO users (username, email, password) values($1, $2, $3) RETURNING user_id, email, username",
          [userName, email, hashedPassword]
        );

        // === make user Token for cookies and some data
        const user = result.rows[0];

        const { user_id, email: userEmail, username } = user;
        const userToken = useToken(user_id, userEmail, username);
        const fullFormat = { ...user, token: userToken };

        return ResponseData(fullFormat, "success", true);
      } catch (error) {
        throw error;
      }
    },
  },
};
