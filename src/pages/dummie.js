
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'

const inter = Inter({ weight: '800',subsets: ['latin'] })

export const getStaticProps = async () => {
  const avfallsTyperWP = await fetch('https://reklameservice.no/wp-json/wp/v2/avfallstyper?per_page=100&acf_format=standard');
  const avfallsTyper = await avfallsTyperWP.json();

  const skjermerWP = await fetch('https://reklameservice.no/wp-json/wp/v2/rir?per_page=100&acf_format=standard');
  const skjermerData = await skjermerWP.json();

  const skjerm1Data = skjermerData.find(skjerm => skjerm.id === 104679);
  const skjerm1 = skjerm1Data.acf.innhold.ID;
  const skjerm1ID = avfallsTyper.find(innhold => innhold.id === skjerm1);
  const skjerm1Innhold = skjerm1ID.acf;

  const skjerm2Data = skjermerData.find(skjerm => skjerm.id === 104681);
  const skjerm2 = skjerm2Data.acf.innhold.ID;
  const skjerm2ID = avfallsTyper.find(innhold => innhold.id === skjerm2);
  const skjerm2Innhold = skjerm2ID.acf;

  const skjerm3Data = skjermerData.find(skjerm => skjerm.id === 104682);
  const skjerm3 = skjerm3Data.acf.innhold.ID;
  const skjerm3ID = avfallsTyper.find(innhold => innhold.id === skjerm3);
  const skjerm3Innhold = skjerm3ID.acf;

  const skjerm4Data = skjermerData.find(skjerm => skjerm.id === 104683);
  const skjerm4 = skjerm4Data.acf.innhold.ID;
  const skjerm4ID = avfallsTyper.find(innhold => innhold.id === skjerm4);
  const skjerm4Innhold = skjerm4ID.acf;

  const skjerm5Data = skjermerData.find(skjerm => skjerm.id === 104694);
  const skjerm5 = skjerm5Data.acf.innhold.ID;
  const skjerm5ID = avfallsTyper.find(innhold => innhold.id === skjerm5);
  const skjerm5Innhold = skjerm5ID.acf;

  const skjerm6Data = skjermerData.find(skjerm => skjerm.id === 104695);
  const skjerm6 = skjerm6Data.acf.innhold.ID;
  const skjerm6ID = avfallsTyper.find(innhold => innhold.id === skjerm6);
  const skjerm6Innhold = skjerm6ID.acf;

  const skjerm7Data = skjermerData.find(skjerm => skjerm.id === 104696);
  const skjerm7 = skjerm7Data.acf.innhold.ID;
  const skjerm7ID = avfallsTyper.find(innhold => innhold.id === skjerm7);
  const skjerm7Innhold = skjerm7ID.acf;

  const skjerm8Data = skjermerData.find(skjerm => skjerm.id === 104697);
  const skjerm8 = skjerm8Data.acf.innhold.ID;
  const skjerm8ID = avfallsTyper.find(innhold => innhold.id === skjerm8);
  const skjerm8Innhold = skjerm8ID.acf;

  const skjerm9Data = skjermerData.find(skjerm => skjerm.id === 104698);
  const skjerm9 = skjerm9Data.acf.innhold.ID;
  const skjerm9ID = avfallsTyper.find(innhold => innhold.id === skjerm9);
  const skjerm9Innhold = skjerm9ID.acf;

  const skjerm10Data = skjermerData.find(skjerm => skjerm.id === 104699);
  const skjerm10 = skjerm10Data.acf.innhold.ID;
  const skjerm10ID = avfallsTyper.find(innhold => innhold.id === skjerm10);
  const skjerm10Innhold = skjerm10ID.acf;

  const skjerm11Data = skjermerData.find(skjerm => skjerm.id === 104700);
  const skjerm11 = skjerm11Data.acf.innhold.ID;
  const skjerm11ID = avfallsTyper.find(innhold => innhold.id === skjerm11);
  const skjerm11Innhold = skjerm11ID.acf;

  const skjerm12Data = skjermerData.find(skjerm => skjerm.id === 104701);
  const skjerm12 = skjerm12Data.acf.innhold.ID;
  const skjerm12ID = avfallsTyper.find(innhold => innhold.id === skjerm12);
  const skjerm12Innhold = skjerm12ID.acf;

  const skjerm13Data = skjermerData.find(skjerm => skjerm.id === 104702);
  const skjerm13 = skjerm13Data.acf.innhold.ID;
  const skjerm13ID = avfallsTyper.find(innhold => innhold.id === skjerm13);
  const skjerm13Innhold = skjerm13ID.acf;

  const skjerm14Data = skjermerData.find(skjerm => skjerm.id === 104703);
  const skjerm14 = skjerm14Data.acf.innhold.ID;
  const skjerm14ID = avfallsTyper.find(innhold => innhold.id === skjerm14);
  const skjerm14Innhold = skjerm14ID.acf;

  const skjerm15Data = skjermerData.find(skjerm => skjerm.id === 104704);
  const skjerm15 = skjerm15Data.acf.innhold.ID;
  const skjerm15ID = avfallsTyper.find(innhold => innhold.id === skjerm15);
  const skjerm15Innhold = skjerm15ID.acf;

  const skjerm16Data = skjermerData.find(skjerm => skjerm.id === 104705);
  const skjerm16 = skjerm16Data.acf.innhold.ID;
  const skjerm16ID = avfallsTyper.find(innhold => innhold.id === skjerm16);
  const skjerm16Innhold = skjerm16ID.acf;

  return {
    props: {
      skjerm1: skjerm1Innhold,
      skjerm2: skjerm2Innhold,
      skjerm3: skjerm3Innhold,
      skjerm4: skjerm4Innhold,
      skjerm5: skjerm5Innhold,
      skjerm6: skjerm6Innhold,
      skjerm7: skjerm7Innhold,
      skjerm8: skjerm8Innhold,
      skjerm9: skjerm9Innhold,
      skjerm10: skjerm10Innhold,
      skjerm11: skjerm11Innhold,
      skjerm12: skjerm12Innhold,
      skjerm13: skjerm13Innhold,
      skjerm14: skjerm14Innhold,
      skjerm15: skjerm15Innhold,
      skjerm16: skjerm16Innhold,
    },
    revalidate: 1,
  }
}

export default function Home( skjerm1 ) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.onLine) {
        window.location.reload(false);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
      <div className='grid grid-rows-4 grid-cols-4 grid-flow-row gap-0 bg-black text-white'>
        {Object.values(skjerm1).map(post => (
          <div className='merke grid grid-cols-3 gap-0 items-center' key={post.id}>
            <img src={post.ikon} width={128} height={128} className='col-span-1'/>
            <div className='text-3xl text-left col-span-2 px-4'>{post.tekst}</div>
          </div>
        ))}
      </div>
      </main>
    </>
  )
}
