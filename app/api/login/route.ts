import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Read existing users from db.json
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const { users } = dbData;

    // Find user by username and password
    const user = users.find(
        (user: any) => user.username === username && user.password === password
    );
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Return a success message in place of JWT
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
}