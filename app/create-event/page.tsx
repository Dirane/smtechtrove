'use client'
import { useState } from 'react';

export default function CreateEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [venue, setVenue] = useState('');
    const [duration, setDuration] = useState('');
    const [type, setType] = useState('free');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, venue, duration, type }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Event created successfully!');
                // Clear form fields after successful submission
                setTitle('');
                setDescription('');
                setVenue('');
                setDuration('');
                setType('free');
            } else {
                setMessage(result.error || 'Failed to create event.');
            }
        } catch (error) {
            console.error('Error creating event:', error);
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            <h1>Create a New Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Venue:</label>
                    <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                </div>
                <div>
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
                <button type="submit">Create Event</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
