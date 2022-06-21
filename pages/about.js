import { motion } from 'framer-motion'
import Skills from '../components/Skills'

const About = () => {
    return (
        <div className='h-screen lg:pl-20 lg:pr-32'>
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
                            Mathematics. During my undergraduate studies, I geared much of my
                            coursework to learning the fundamentals of programming, the math
                            that powers machine learning, and project management. I enjoy
                            using programming and math to build exciting projects.
                            Check out some of work <a href='./projects' className='underline text-blue-500'> here</a>.
                        </p>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            Outside of programming, I love powerlifting and bodybuilding. I
                            started going to the gym during the summer of my second year at
                            university. That was about 3 years ago since then I’ve seen and
                            felt major changes to my physique and mental health. Going to the
                            gym has taught me about dedication and patience. These are some of
                            the values that I take with me whenever I start a new project or
                            try to learn something new.
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
