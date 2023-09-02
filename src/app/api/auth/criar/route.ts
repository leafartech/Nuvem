import clientPromise from "../../../../../lib/mongodb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface reqBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("NuvemDB");
    const collection = db.collection("nuvem-apis");
    const { email, name, password }: reqBody = await req.json();

    const emailExists = await collection.findOne({ email });

    if (name.replace(/\s+/g, "").length < 3) 
    return  NextResponse.json({
      message: "Nome inválido!",
      error: true,
      status: 406,
    });

    if (emailExists)
      return NextResponse.json({
        message: "Email já existe! Tente novamente ou acesse a sua conta!",
        error: true,
        status: 406,
      });

    if (password.includes(" ")) return NextResponse.json({
      message: "A senha não deve conter espaços!",
      error: true,
      status: 406
    })

    if (password.length <= 5) return NextResponse.json({
      message: "A senha deve conter mais de 5 caracteres!",
      error: true,
      status: 406
    })

    const saltOrRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const user = {
      name,
      email,
      password: hashedPassword,
      data: {
        exportations: [{}],
        accounts: [],
        columns: {},
      },
      changeLog: [],
    };

    await collection.insertOne(user);

    return NextResponse.json({
      status: 201,
      error: false,
      message: "Sucesso"
    });
    
  } catch (e) {
    return NextResponse.json({
      error: true,
      message: `Error: ${e}`,
      status: 500,
    });
  }
}
