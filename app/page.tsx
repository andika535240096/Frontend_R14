import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.title}>
          Front End Programming
          <br />
          <span style={styles.subtitle}>Worksheet 4: Deployment with Vercel</span>
        </h1>

        <p style={styles.description}>
          Silakan pilih menu navigasi di bawah ini:
        </p>

        <div style={styles.grid}>
          {/* Link ke Halaman About */}
          <Link href="/about" style={styles.card}>
            <h2>Halaman About &rarr;</h2>
            <p>Halaman statis sederhana sesuai latihan awal.</p>
          </Link>

          {/* Link ke Halaman Database (Sesuaikan href dengan nama folder anda, misal /users atau /mahasiswa) */}
          <Link href="/mahasiswa" style={styles.card}>
            <h2>Data Mahasiswa (SQLite) &rarr;</h2>
            <p>Menampilkan data dari database lokal menggunakan Prisma & Singleton Pattern.</p>
          </Link>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Dibuat untuk Latihan Front End Programming - Semester Ganjil 2025/2026</p>
      </footer>
    </div>
  );
}

// Style Sederhana (Pengganti CSS/Tailwind)
const styles = {
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    backgroundColor: "#f0f0f0", // Warna background abu muda
    color: "#333",
  },
  main: {
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: "3rem",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    color: "#0070f3", // Warna biru khas Next.js
  },
  description: {
    textAlign: "center" as const,
    lineHeight: 1.5,
    fontSize: "1.2rem",
    margin: "2rem 0",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    maxWidth: "800px",
    marginTop: "1rem",
  },
  card: {
    margin: "1rem",
    padding: "1.5rem",
    textAlign: "left" as const,
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, borderColor 0.15s ease",
    width: "45%",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  footer: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
};