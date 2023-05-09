import Image from "next/image";
import Head from "next/head";
import blockchain from "../public/blockchain.json";
import net1 from "../public/net1.json";
import net2 from "../public/net2.json";
import Lottie from "react-lottie";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: blockchain,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: net1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: net2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const notify = () =>
  toast.success("Social links will be replaced soon...", {
    icon: "🚀",
    theme: "dark"
  });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <ToastContainer />
      <div className='z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='flex w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto lg:p-0'
            href='/'
          >
            <Image
              src='/0_LOGO.png'
              alt='0 Logo'
              className=''
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div className='flex justify-center'>
          <a
            href='#'
            // target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image
              onClick={notify}
              src='/icons/twitter.svg'
              width={40}
              height={40}
            />
          </a>
          <a
            href='#'
            // target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image
              onClick={notify}
              src='/icons/medium.svg'
              width={40}
              height={40}
            />
          </a>
          <a
            href='#'
            // target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image
              onClick={notify}
              src='/icons/discord.svg'
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>

      <div className={`${ibm.className} grid lg:grid-cols-2 max-w-6xl`}>
        <div className='py-11 px-6'>
          <h1 className='text-4xl font-semibold text-green-300 mt-0 lg:mt-24 mb-10'>
            Anonymity not pseudo
          </h1>
          <div className='flex items-center mb-2'>
            <Image src='/icons/Diamond.svg' width={25} height={25} />
            <h3 className='text-xl text-green-300 ml-3'>Block Surveillance</h3>
          </div>
          <div className='flex items-center mb-2'>
            <Image src='/icons/Diamond.svg' width={25} height={25} />
            <h3 className='text-xl text-green-300 ml-3'>
              Discover true privacy
            </h3>
          </div>
          <div className='flex items-center'>
            <Image src='/icons/Diamond.svg' width={25} height={25} />
            <h3 className='text-xl text-green-300 ml-3'>Get rewarded</h3>
          </div>
          <a
            href='#'
            className=' mt-11 ml-2 inline-block text-lg text-green-400 rounded border-2 border-green-300 py-3 px-28'
            target='_blank'
            rel='noopener noreferrer'
          >
            Docs
          </a>
        </div>
        <div className='order-first lg:order-last'>
          <Lottie options={defaultOptions} isClickToPauseDisabled />
        </div>
      </div>
      <span className='h-0.5 w-full max-w-6xl bg-green-400'></span>
      <div className={`${ibm.className} grid lg:grid-cols-2 max-w-6xl`}>
        <div>
          <Lottie options={defaultOptions2} isClickToPauseDisabled />
        </div>
        <div
          className={`${ibm.className} text-green-300 flex flex-col justify-center items-center`}
        >
          <div className=' px-8 mb-12 lg:mb-0'>
            <div className='flex flex-col mb-4'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                METADATA PRIVATE
              </h4>
              <p>
                All Metadata is hidden which guarantees that sender anonymity is
                preserved in the face of an adversary monitoring the entire
                network.
              </p>
            </div>
            <div className='flex flex-col mb-4'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                DECENTRALIZED NETWORK
              </h4>
              <p>
                0 is powered by a decentralised network of staked servers.
                Nobody can shut it down. Nobody can spy on you.
              </p>
            </div>
            <div className='flex flex-col mb-3'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                PRIVATE APPLICATIONS
              </h4>
              <p>
                Build truly private applications that utilize 0s
                metadata-private anonymous broadcast with powerful cryptographic
                security guarantees
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className='h-0.5 w-full max-w-6xl bg-green-400'></span>
      <div className={`${ibm.className} grid lg:grid-cols-2 max-w-6xl`}>
        <div
          className={`${ibm.className} text-green-300 flex flex-col justify-center items-center`}
        >
          <div className=' px-8 mb-12 lg:mb-0'>
            <div className='flex flex-col mb-4'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                SCALABLE
              </h4>
              <p>
                The network has the ability to increase throughput with the
                number of servers participating in the network
              </p>
            </div>
            <div className='flex flex-col mb-4'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                Rewards
              </h4>
              <p>Stake to power the network and get rewarded.</p>
            </div>
            {/* <div className='flex flex-col mb-3'>
              <h4 className='mb-2 text-lg font-semibold tracking-wider'>
                DECENTRALIZED NETWORK
              </h4>
              <p>
                Lokinet is powered by a decentralised network of staked nodes.
                Nobody can shut it down. Nobody can spy on you.
              </p>
            </div> */}
          </div>
        </div>
        <div className='order-first lg:order-last'>
          <Lottie options={defaultOptions1} isClickToPauseDisabled />
        </div>
      </div>
      <span className='h-0.5 w-full max-w-6xl bg-green-400'></span>
      <div className='z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex pb-6 lg:pb-0'>
        <div className='flex w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-2 lg:pointer-events-auto lg:p-0'
            href='/'
          >
            <Image
              src='/0_LOGO.png'
              alt='0 Logo'
              className=''
              width={99}
              height={24}
              priority
            />
          </a>
        </div>
        <div className='flex justify-center'>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image src='/icons/twitter.svg' width={40} height={40} />
          </a>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image src='/icons/medium.svg' width={40} height={40} />
          </a>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-3'
          >
            <Image src='/icons/discord.svg' width={40} height={40} />
          </a>
        </div>
      </div>
    </main>
  );
}
