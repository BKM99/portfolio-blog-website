import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import Head from 'next/head'

const About = () => {
    return (
        <div className='h-screen lg:pl-20 lg:pr-32'>
            <Head>
                <title>About | Brandon Morimoto</title>
            </Head>
            <div className='flex justify-between md:mx-20 md:pt-32 pt-28'>
                <div className='flex flex-col md:ml-20 mx-10 mt-10'>
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
                                    delay: 0.4,
                                },
                            },
                        }}
                        >
                        <h1 className='text-3xl font-bold sm:text-4xl'>
                            Hello, I&#39;m <span className='text-blue-500'>Brandon</span>
                        </h1>
                    </motion.div>

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
                                    delay: 1,
                                },
                            },
                        }}
                        >
                        <h2 className='font-bold text-3xl text-left mb-5'>
                            I&#39;m a <span className='text-blue-500'>Software Engineer</span>{' '}
                            with a passion for{' '}
                            <span className='text-blue-500'> Machine Learning</span>.
                        </h2>
                    </motion.div>

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
                                    delay: 1.6,
                                },
                            },
                        }}
                        >
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            I graduated from San Jose State University (SJSU) with a B.S in
                            Management Information Systems and minors in Computer Science and
                            Mathematics. Most of my experience is in full stack web development and machine learning.
                            Check out some of my work <a href='./projects' className='underline text-blue-500'> here</a>.
                        </p>

                        <p className='text-left font-normal mb-5 flex-wrap'>

                        </p>

                        <p className='text-left font-normal mb-5 flex-wrap'>
                            In my freetime, I love to learn new technologies and keep up-to-date with artificial intelligence. Outside of
                            programming, I love to go to the gym to push myself through powerlifting and bodybuilding. I&#39;ve been going
                            to the gym for around 3.5 years now. The gym has taught me a great deal about dedication and patience.
                        </p>
                    </motion.div>
                    <div className='text-bold text-3xl mt-10'>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
