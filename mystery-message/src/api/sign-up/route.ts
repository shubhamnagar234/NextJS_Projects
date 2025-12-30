import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/utils/send-verification-email";

export async function POST(request: Request) {
    await dbConnect();
  try {
    const { username, email, password } = await request.json();

  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
      { status: 500 }
    );
  }
}


