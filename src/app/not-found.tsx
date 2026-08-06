import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Landing não encontrada</h1>
      <p>Confira o slug do prospect ou registre a configuração antes de acessar a rota.</p>
      <Link href="/">Abrir landing principal</Link>
    </main>
  );
}
