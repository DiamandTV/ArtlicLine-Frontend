import { BlurCard } from '../cards/BlurCard'
import Logo from '../../assets/images/NoBG.png'

export function StartView({children}:{children:React.ReactNode}){
        return (   
        <div className="bg-slate-900 w-screen h-full min-h-screen flex flex-col items-center justify-center px-8 py-8"> 
            <div className='w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80'>
                <img src={Logo} alt="" />
            </div>
            <BlurCard className='max-w-3xl transition-all duration-300 bg-slate-300'>
                <div className='w-full'>
                    {children}
                </div>
            </BlurCard>
        </div>
        )
}