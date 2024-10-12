'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Define the structure of an event object
interface Event {
    id: number;
    title: string;
    description: string;
    venue: string;
    duration: string;
    type: string;
}

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]); // Use the Event type here
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();

                // Check if data is an array before setting it to avoid type issues
                if (Array.isArray(data)) {
                    setEvents(data);
                } else {
                    setError('Unexpected data format');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError('Failed to fetch events.');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <p>Loading events...</p>;
    if (error) return <p>{error}</p>;

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
