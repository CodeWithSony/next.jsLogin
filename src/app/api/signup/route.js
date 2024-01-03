import User from "@/models/User";
// import connect from '../../../db';
import connect from "../../../../db";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    "This email is already registered", { status: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 },);
  }
};
