import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function UsersPage() {
  const data = await prisma.mahasiswa.findMany(); 
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Daftar Data dari SQLite</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id} className="mb-2 border-b pb-2">
            Nama: {item.nama} 
          </li>
        ))}
      </ul>
    </div>
  );
}