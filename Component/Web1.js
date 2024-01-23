"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Web1 = () => {
  return (
    <>
        <div className="web_main">
        <Link href='/'><Image className='backarrow' src="/leftarrow.png" width={30} height={20}/> </Link>
            <h1 className="web1_head">Recent <span className='span_project'>Project</span></h1>
            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/riot.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/Riot/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/cynthia.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/Cynthia-Ugwu/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/agency.png" width={307} height={200} />
                    <p className="visit">Visit Project</p>
                </div>
            </div>

            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/outdoor.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/TheGreatOutdoor/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/foody.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/Foody/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/flowy.png" width={307} height={200} />
                    <p className="visit">Visit Project</p>
                </div>
            </div>

            <div className="webpro_row1">
                <div className="wpro">
                    <Image className='wpro_img' src="/microsoft.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/Microsoft/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/squarespace.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/SquareSpace/' className="visit">Visit Project</a>
                </div>
                <div className="wpro">
                    <Image className='wpro_img' src="/coucher.png" width={307} height={200} />
                    <a href='https://nazim11062003.github.io/Coucher/' className="visit">Visit Project</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Web1
