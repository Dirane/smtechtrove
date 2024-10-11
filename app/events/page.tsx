'use client'

import Link from 'next/link';

export default function Events() {
    const events = [
        { id: 1, title: 'React Workshop' },
        { id: 2, title: 'Next.js for Beginners' },
        { id: 3, title: 'Advanced Node.js' },
    ];

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <Link href={`/events/${event.id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
