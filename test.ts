import prisma from '@/lib/prisma'

async function test() {
  await prisma.$connect()
  console.log('Connecté à la DB ✅')
  await prisma.$disconnect()
}

test()