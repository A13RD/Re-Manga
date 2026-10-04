import { Role, MangaCondition } from '@prisma/client';
import { prisma } from '../database/prismaClient';

async function main() {
  console.log('Iniciando seed de base de datos...');

  // 1. Crear un usuario administrador inicial
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@remanga.com' },
    update: {},
    create: {
      name: 'Admin Re-Manga',
      email: 'admin@remanga.com',
      passwordHash: 'dummy_hash_to_be_replaced', // Se reemplazará con bcrypt después
      role: Role.ADMIN,
    },
  });

  console.log(`Usuario administrador creado con ID: ${adminUser.id}`);

  // 2. Datos de los mangas iniciales
  const mangasData = [
    {
      title: 'Berserk',
      volume: 1,
      author: 'Kentaro Miura',
      genre: 'Seinen, Fantasía Oscura',
      description: 'Guts, un guerrero mercenario, viaja por el mundo en busca de venganza.',
      image: '/images/berserk_1.jpg',
      price: 15.99,
      condition: MangaCondition.LIKE_NEW,
      stock: 5,
      sellerId: adminUser.id,
    },
    {
      title: 'Vagabond',
      volume: 1,
      author: 'Takehiko Inoue',
      genre: 'Seinen, Histórico, Artes Marciales',
      description: 'La historia de Miyamoto Musashi, el espadachín más grande de Japón.',
      image: '/images/vagabond_1.jpg',
      price: 14.50,
      condition: MangaCondition.GOOD,
      stock: 3,
      sellerId: adminUser.id,
    },
    {
      title: 'Jujutsu Kaisen',
      volume: 1,
      author: 'Gege Akutami',
      genre: 'Shonen, Acción, Sobrenatural',
      description: 'Yuji Itadori se une a un club de ocultismo y termina comiéndose un dedo maldito.',
      image: '/images/jjk_1.jpg',
      price: 10.00,
      condition: MangaCondition.NEW,
      stock: 10,
      sellerId: adminUser.id,
    },
    {
      title: 'Bleach',
      volume: 1,
      author: 'Tite Kubo',
      genre: 'Shonen, Acción, Sobrenatural',
      description: 'Ichigo Kurosaki obtiene los poderes de un Shinigami.',
      image: '/images/bleach_1.jpg',
      price: 9.00,
      condition: MangaCondition.FAIR,
      stock: 2,
      sellerId: adminUser.id,
    },
    {
      title: 'Naruto',
      volume: 1,
      author: 'Masashi Kishimoto',
      genre: 'Shonen, Acción, Aventura',
      description: 'Un joven ninja busca reconocimiento y sueña con convertirse en el líder de su aldea.',
      image: '/images/naruto_1.jpg',
      price: 8.50,
      condition: MangaCondition.POOR,
      stock: 1,
      sellerId: adminUser.id,
    },
    {
      title: 'One Punch Man',
      volume: 1,
      author: 'ONE, Yusuke Murata',
      genre: 'Seinen, Acción, Comedia',
      description: 'Saitama es un héroe que derrota a cualquier oponente con un solo golpe.',
      image: '/images/opm_1.jpg',
      price: 12.00,
      condition: MangaCondition.LIKE_NEW,
      stock: 6,
      sellerId: adminUser.id,
    },
    {
      title: 'One Piece',
      volume: 1,
      author: 'Eiichiro Oda',
      genre: 'Shonen, Aventura, Fantasía',
      description: 'Monkey D. Luffy y su tripulación buscan el tesoro más grande del mundo.',
      image: '/images/one_piece_1.jpg',
      price: 11.50,
      condition: MangaCondition.GOOD,
      stock: 8,
      sellerId: adminUser.id,
    },
    {
      title: 'Hunter x Hunter',
      volume: 1,
      author: 'Yoshihiro Togashi',
      genre: 'Shonen, Acción, Aventura',
      description: 'Gon Freecss decide convertirse en Cazador para encontrar a su padre.',
      image: '/images/hxh_1.jpg',
      price: 13.00,
      condition: MangaCondition.NEW,
      stock: 4,
      sellerId: adminUser.id,
    },
    {
      title: 'Tokyo Ghoul',
      volume: 1,
      author: 'Sui Ishida',
      genre: 'Seinen, Horror, Acción',
      description: 'Ken Kaneki se convierte en medio ghoul tras un encuentro casi fatal.',
      image: '/images/tokyo_ghoul_1.jpg',
      price: 10.50,
      condition: MangaCondition.GOOD,
      stock: 7,
      sellerId: adminUser.id,
    },
    {
      title: 'Fullmetal Alchemist',
      volume: 1,
      author: 'Hiromu Arakawa',
      genre: 'Shonen, Aventura, Fantasía',
      description: 'Dos hermanos buscan la piedra filosofal para restaurar sus cuerpos.',
      image: '/images/fma_1.jpg',
      price: 14.00,
      condition: MangaCondition.NEW,
      stock: 5,
      sellerId: adminUser.id,
    },
    {
      title: 'Blue Lock',
      volume: 1,
      author: 'Muneyuki Kaneshiro, Yusuke Nomura',
      genre: 'Shonen, Deportes',
      description: 'Un controvertido proyecto para crear al mejor delantero del mundo.',
      image: '/images/blue_lock_1.jpg',
      price: 11.00,
      condition: MangaCondition.NEW,
      stock: 12,
      sellerId: adminUser.id,
    },
    {
      title: 'Oyasumi Punpun',
      volume: 1,
      author: 'Inio Asano',
      genre: 'Seinen, Drama, Psicológico',
      description: 'La vida cotidiana y las luchas internas del joven Punpun Punyama.',
      image: '/images/punpun_1.jpg',
      price: 16.00,
      condition: MangaCondition.LIKE_NEW,
      stock: 2,
      sellerId: adminUser.id,
    },
    {
      title: 'Akira',
      volume: 1,
      author: 'Katsuhiro Otomo',
      genre: 'Seinen, Ciencia Ficción, Cyberpunk',
      description: 'En un futuro post-apocalíptico, unos jóvenes se ven envueltos en un proyecto militar secreto.',
      image: '/images/akira_1.jpg',
      price: 25.00,
      condition: MangaCondition.GOOD,
      stock: 1,
      sellerId: adminUser.id,
    },
    {
      title: 'Neon Genesis Evangelion',
      volume: 1,
      author: 'Yoshiyuki Sadamoto',
      genre: 'Seinen, Ciencia Ficción, Mecha',
      description: 'Adolescentes pilotan gigantes biológicos para defender la Tierra de los Ángeles.',
      image: '/images/evangelion_1.jpg',
      price: 18.00,
      condition: MangaCondition.LIKE_NEW,
      stock: 3,
      sellerId: adminUser.id,
    },
    {
      title: 'Dragon Ball',
      volume: 1,
      author: 'Akira Toriyama',
      genre: 'Shonen, Aventura, Artes Marciales',
      description: 'Goku y Bulma inician su viaje para encontrar las Esferas del Dragón.',
      image: '/images/dragon_ball_1.jpg',
      price: 9.50,
      condition: MangaCondition.FAIR,
      stock: 4,
      sellerId: adminUser.id,
    }
  ];

  for (const manga of mangasData) {
    const createdManga = await prisma.manga.create({
      data: manga,
    });
    console.log(`Manga insertado: ${createdManga.title} - Vol. ${createdManga.volume}`);
  }

  console.log('Seed completado satisfactoriamente.');
}

main()
  .catch((e) => {
    console.error('Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
