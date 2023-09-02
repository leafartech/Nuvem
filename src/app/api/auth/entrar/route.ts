import clientPromise from "../../../../../lib/mongodb";
import { compareSync } from "bcrypt"
import { NextResponse } from "next/server"

interface reqBody {
  name?: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db("NuvemDB");
  const collection = db.collection("nuvem-apis");
  const { email, name, password }: reqBody = await req.json();

  const userExists = await collection.findOne({ email });

  if (!userExists) return NextResponse.json({
    error: true,
    message: "Credenciais Inválidas!",
    status: 406
  })

  if (name !== userExists.name) return NextResponse.json({
    error: true,
    message: "Credenciais Inválidas!",
    status: 406
  })

  const isPasswordCorrect = await compareSync(
    password,
    userExists.password
  )

  if (!isPasswordCorrect) return NextResponse.json({ error: true, message: "Credenciais Inválidas!", status: 406 })
  
  return NextResponse.json({
    error: false,
    message: "Sucesso",
    status: 201
  })
}