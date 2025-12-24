export interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}