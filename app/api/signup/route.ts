import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { error } from "console";

const dbPath = path.join(process.cwd(), 'db.json');

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Read existing users from db.json
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const { users } = dbData;

    // Check if the username alread exists
    if (users.find((user: any) => user.username === username)) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Add the new user to the users array
    const newUser = {
        id: users.length + 1,
        username,
        password,
    };
    users.push(newUser);

    // Write the updated data back to the db.json
    fs.writeFileSync(dbPath, JSON.stringify({ users }));

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}