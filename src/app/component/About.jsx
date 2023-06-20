import Image from 'next/image';

export default function About() {
  return (
    <>
        <div id='about' className='w-full mt-[200px] md:mt-[300px] my-24 whitespace-normal'>
            <h1 className='w-full text-center justify-center items-center text-4xl font-bold text-shadow-md'>
                <p className='text-[100px] md:text-[200px]  font-bold text-gray-200 text-shadow-none text-center'>ABOUT</p>
                <span className='z-10 text-4xl tracking-widest'>ABOUT</span>
            </h1>
           
           <div className='mt-20 mx-8 md:m-[100px] col-span-3 flex'>
                <div className=''>
                    <h2 className='tracking-[.25em] text-4xl text-center md:text-left '>石原翔平<span className='text-lg ml-4 text-gray-400 '>ISHIHARA SHOHEI</span></h2>
                    <div className='flex mt-8'>
                        <ul className="steps steps-vertical overflow-hidden pt-[20px]">
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step"></li>
                        </ul>
                        <div className='leading-8 text-sm '>
                            <p className='mt-[20px]'>
                                1987年5月28日生まれ。宮崎県小林市出身。<br />
                                都城工業高等専門学校電気情報工学科卒。<br />
                            </p>
                            <p className='mt-[20px]'>
                                電気通信設備事業における事業企画及び工事管理を
                                ITスキルを用いて社内業務改善を行い、
                                人員不足に貢献
                            </p>
                            <p className=' mt-[20px]' >    
                                やってきたことをまとめる
                                2021年11月　退社
                            </p>
                            <p className=' mt-[20px]' >    
                                2021年11月　退社
                                やってきたことをまとめる
                            </p>
                            <p className=' mt-[20px]'>
                                現在は個人事業主向けにWEBページ、WEBアプリ制作、オフィシャルLINE制作
                                                    趣味はキャンプ、

                            </p>
                        </div>
                        
                    </div>
                    
            </div>
                   
            </div>
        </div>
    </>
  )
}


