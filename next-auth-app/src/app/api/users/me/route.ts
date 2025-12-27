import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/dataFromToken";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  // Extract data from token
  const userId = await getDataFromToken(request);
  const user = User.findOne({ _id: userId }).select("-password");

  // Check is there is no one
  return NextResponse.json({
    message: "User found",
    data: user,
  });
}
