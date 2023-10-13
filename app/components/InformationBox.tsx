import React from 'react'

const InformationBox = () => {
  return (
           <div className='z-20 border-white border-2 p-0 mt-10 flex flex-col'>
            <div className='flex border-b-2 border-white py-2 px-4 m-0'>
                <h1 className='uppercase font-black text-2xl'>Salut !</h1>
            </div>
            <div className='flex flex-col gap-2 p-4 m-0 text-lg'>
                <h2>C'est super que tu sois venu ici !</h2>
                <p>Mais mon portfolio est en maintenance, je te prepare un truc assez special !</p>
                <p>Je suis actuellement Junior Blockhain Developper chez <span>
                    <a className='text-purple-800 hover:animate-bounce cursor-pointer' target="blank" href='https://staky.io/'>
                        Staky.Io
                    </a>
                    </span>!
                </p>
                <p>N'hesite pas a aller voir mon LinkedIN et mon Github !!</p>
                <p>A bientot !</p>
            </div>
           </div>
        );
    };

export default InformationBox