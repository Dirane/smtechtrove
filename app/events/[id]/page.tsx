'use client'
interface EventDetailProps {
    params: {
        id: string;
    };
}

export default async function EventDetail({ params }: EventDetailProps) {
    const { id } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`);
    const event = await response.json();

    if (!event) {
        return <p>Event not found</p>;
    }

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>Venue: {event.venue}</p>
            <p>Duration: {event.duration}</p>
            <p>Type: {event.type}</p>
        </div>
    );
}
