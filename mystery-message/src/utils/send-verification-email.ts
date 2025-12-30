import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verification-email";
import { APIResponse } from "@/types/api-response";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<APIResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystery Messag | Verify your email",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email sent!" };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return { success: false, message: "Failed to  send verification email" };
  }
}
