export const meta = () => ([
    {title: 'Resume Checker | Auth'},
    { name: 'description', content: 'Smart Resume Checker That uses AI to check automatically' }
])

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

const Auth = () => {
 
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const next = params.get("next") || "/";



  //if user try to access auth page and is already authenticated, redirect to next or home
  useEffect(() => {
    if(auth.isAuthenticated){
        navigate(next, { replace: true });
    }
  }, [auth.isAuthenticated, next, navigate])
    
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1>Welcome</h1>
                    <h2>Login to continue on finding job</h2>
                </div>
                <div className="">
                    {isLoading ? (
                        <button className="auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <button className="auth-button" onClick={auth.signOut}>
                                    <p>Logout</p>
                                </button>
                            ) : (
                                <button className="auth-button" onClick={auth.signIn}>
                                    <p>Login</p>
                                </button>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth