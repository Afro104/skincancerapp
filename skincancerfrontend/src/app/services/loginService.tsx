import { useLogto } from '@logto/react';

export default function LogInComponent() {
  const { signIn, signOut, isAuthenticated } = useLogto();

  return(
    <div>
        {isAuthenticated ? (
          <button onClick={() => signOut('http://localhost:3000/')}>Sign Out</button>
        ) : (
          <button onClick={() => signIn('http://localhost:3000/pages/home')}>Sign In</button>
        )}
    </div>
  )
}