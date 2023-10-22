"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";


const Nav = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }

    setUpProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link
        href="/"
        className="flex gap-2 flex-center"
        passHref
        prefetch
      >
        <Image
          src="/assets/images/logo.svg"
          alt="Promptshare Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptBuddy</p>
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user
          ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn" passHref prefetch>Create</Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              <Link href="/profile" passHref prefetch>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full cursor-pointer"
                  alt="profile"
                />
              </Link>
            </div>
          )
          : (
            <>
              {providers && Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
            </>
          )}
      </div>

      {/* Mobile Navigation */}

      <div className="sm:hidden flex relative">
        {session?.user
          ? (
            <div>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
                onClick={() => setToggleDropdown(prev => !prev)}
              />
              {toggleDropdown
                && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                    passHref
                    prefetch
                    >
                      Profile
                    </Link>
                    <Link
                      href="/create-prompt"
                      className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                    passHref
                    prefetch
                    >
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
            </div>
          )
          : (
            <>
              {providers && Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
            </>
          )}
      </div>

    </nav>
  )
}

export default Nav;