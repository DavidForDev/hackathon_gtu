import { sign } from "jsonwebtoken";

const useToken = (id: number, email: string, username: string) => {
  try {
    if (!id || !email || !username) {
      return {
        token: "",
      };
    }

    const userObj = {
      id,
      email,
      username,
    };

    const token = sign(userObj, "shhhh", { algorithm: "HS256" });

    return {
      token: token,
    };
  } catch (error) {
    throw error;
  }
};

export default useToken;
