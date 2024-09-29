import { Link } from 'react-router-dom';

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação,estamos trabalhando para corrigir isso o
        mais rápido possível.
      </p>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-400">
          início
        </Link>
      </p>
    </div>
  );
}
