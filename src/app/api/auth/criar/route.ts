import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const client = await clientPromise
    const db = client.db("NuvemDB")
    const collection = db.collection("nuvem-apis")

    const { fullName, email, password } = await req.json()

    const emailExists = await collection.findOne({ email })

    if (emailExists) NextResponse.json({
      message: "Email já existe! Tente novamente ou acesse a sua conta!",
      error: true,
      status: 406
    })

    const saltOrRounds = 5
    const hashedPassword = await bcrypt.hash(password, saltOrRounds)

    const user = {
        name: fullName,
        email,
        password: hashedPassword,
        data: {
          exportations: [{}],
          accounts: [],
          columns: {}
        },
        changeLog: []
    }

    console.log(user);

    await collection.insertOne(user)

    return NextResponse.json({
      message: "Sucess",
      error: false,
      status: 201,
      fullName
    })

  } catch (e) {
    return NextResponse.json({
      error: true,
      message: `Error: ${e}`,
      status: 500
    })
  }
}
