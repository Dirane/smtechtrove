// app/events/[id]/page.tsx

interface EventDetailProps {
    params: {
        id: string;
    };
}

export default function EventDetail({ params }: EventDetailProps) {
    const { id } = params;

    return (
        <div>
            <h1>Event Details</h1>
            <p>Event ID: {id}</p>
            {/* Event details will be fetched using this ID in a later phase */}
        </div>
    );
}
