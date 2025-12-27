import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { TokenPayload } from "@/types/token";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(
      token!,
      process.env.TOKEN_SECRET!
    ) as TokenPayload;
    return decodedToken.id;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Token verification failed"
    );
  }
};
