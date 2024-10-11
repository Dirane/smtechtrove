'use client'

export default function Profile() {
    const user = {
        username: 'user1',
        registeredEvents: ['React Workshop', 'Next.js for Beginners'],
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {user.username}</p>
            <h2>Registered Events:</h2>
            <ul>
                {user.registeredEvents.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    );
}
