import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.6,
                    },
                },
            }}
        >
            <div className='flex max-w-screen-xl px-4 py-32 mx-auto h-screen items-center'>
                <div className='text-center mx-auto'>
                    <h1 className='text-8xl text-black font-extrabold sm:text-5xl'>
                        Brandon Morimoto
                    </h1>
                    <h1 className='text-8xl text-blue-500 font-extrabold sm:text-5xl'>
                        Software Engineer
                    </h1>
                    <p className='mt-4 sm:leading-relaxed sm:text-xl text-black'>
                        Machine Learning enthusiast, (Neo)vim user, and Powerlifter
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        <Link href='/contact'>
                            <a
                                className='inline-flex w-full px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Contact Me
                            </a>
                        </Link>
                        <Link href='/resume.pdf'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex w-full px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow sm:w-auto active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Resume
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
