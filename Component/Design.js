"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Design = () => {
  return (
    <>
        <div className="design_main">
        <Link href='/'><Image src="/leftarrow.png" width={30} height={20}/> </Link>
        <h1 className="web1_head">Recent <span className='span_project'>Project</span></h1>
            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/halloween.png" width={307} height={200} />
                    <p className="visit">Visit Project</p>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/nike.png" width={307} height={200} />
                    <p className="visit">Visit Project</p>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/reyna.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/KeWU5TggQifUYRQzwkQE49/Untitled?type=design&node-id=0%3A1&mode=design&t=lV56VxkqirJEtBCb-1' className="visit">Visit Project</a>
                </div>
            </div>

            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/draft.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/mSXmFIc3Obl6LykZLTavcL/Untitled?type=design&node-id=0%3A1&mode=design&t=VckAoIV789SJ2BTT-1' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/soda.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/Rdcdr7qcrjCICJwvKsLfJ5/Untitled?type=design&node-id=2%3A62&mode=design&t=7P5Men1KpTer1kQN-1' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/money.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/xnOsbi7jWfPLw4hG0Vzzb3/Untitled?type=design&node-id=2%3A161&mode=design&t=iqIZEviGczC4NFvY-1' className="visit">Visit Project</a>
                </div>
            </div>

            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/ethoven.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/yXnA4HD00AoWeE4v6iWnj0/Untitled?type=design&node-id=0%3A1&mode=design&t=D4yelVneOKyQa8fs-1' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/beat.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/qfbLkohYrvRh6cEpPdVE19/Untitled?type=design&node-id=0%3A1&mode=design&t=JQdCwNzucPSwiA8b-1' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/Bugatti.png" width={307} height={200} />
                    <a href='https://www.figma.com/file/kh3Ht2Dfi29tQj6TaIRNc7/Untitled?type=design&node-id=5%3A76&mode=design&t=KhL3btj2k59U8tUP-1' className="visit">Visit Project</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Design
