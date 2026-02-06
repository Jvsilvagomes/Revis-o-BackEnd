import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.song.deleteMany();

    await prisma.song.createMany({
        data: [
            {
                title: 'Bohemian',
                artist: 'Queen',
                album: 'A night at the Opera',
                likes: 1500
            },
            {
                title: 'Imagine',
                artist: 'John Lennon',
                album: 'Imagine',
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
