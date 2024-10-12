import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export async function POST(request: Request) {
    try {
        const { title, description, venue, duration, type } = await request.json();

        // Read existing events from db.json
        const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const { events } = dbData;

        // Create a new event object
        const newEvent = {
            id: events.length + 1,
            title,
            description,
            venue,
            duration,
            type,
            rsvp: [], // Start with an empty RSVP list
        };

        // Add the new event to the events array
        events.push(newEvent);

        // Write the updated events back to db.json
        fs.writeFileSync(dbPath, JSON.stringify({ ...dbData, events }));

        return NextResponse.json({ message: 'Event created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error in creating event:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        // Read existing events from db.json
        const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const { events } = dbData;

        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        console.error('Error fetching events:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
