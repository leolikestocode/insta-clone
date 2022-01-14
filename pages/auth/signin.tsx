import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

import { Provider } from "../../types/next-auth";

function signInPage({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="Instagram"
        />
        <div className="mt-20">
          {Object.values(providers).map((provider: Provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signInPage;
