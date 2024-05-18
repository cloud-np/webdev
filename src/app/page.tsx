import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

const mockUrls = [
    'https://utfs.io/f/87150609-7b1b-4c74-a175-52dbc7ec98b6-tndj23.png',
    'https://utfs.io/f/88d9dc26-8912-45a1-98b5-1779939aa8d2-3thg3c.png',
    'https://utfs.io/f/1bfc3865-2ceb-4b05-afb0-d843ed01137a-6wbc3d.png',
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });

    return (
        <main className="w-full">
            <nav className="flex w-full">
                <ul className="flex justify-between">
                    <li>
                        <h2>Home</h2>
                    </li>
                    <li>
                        <button>Sign In</button>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-wrap gap-4">
                {images.map((image) => (
                    <div key={image.id} className="flex w-48 flex-col p-4">
                        <img src={image.url} alt="image" />
                        <div>{image.name}</div>
                    </div>
                ))}
            </div>
            Hello (gallery in progress)
        </main>
    );
}
