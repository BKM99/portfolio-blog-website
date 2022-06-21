import { motion } from 'framer-motion'

const Skills = () => {
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
                        delay: 2.0,
                    },
                },
            }}
            >
            <div className='w-full pb-32'>
                <div className='mx-auto flex flex-col justify-center'>
                    <p className='underline font-bold text-blue-500 pb-4'>Skills</p>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div>
                            <ul>
                                <span className='text-blue-500'>Backend</span>
                                <div className='text-2xl'>
                                    <li>Django</li>
                                    <li>Python</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>Cassandra</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Frontend</span>
                                <div className='text-2xl'>
                                    <li>ReactJS</li>
                                    <li>NextJS</li>
                                    <li>HTML/CSS</li>
                                    <li>Tailwind CSS</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Data Science</span>
                                <div className='text-2xl'>
                                    <li>Tensorflow</li>
                                    <li>Scikit-Learn</li>
                                    <li>Pandas</li>
                                    <li>NumPy</li>
                                    <li>Matplotlib</li>
                                    <li>Pytorch</li>
                                    <li>RStudio</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Other</span>
                                <div className='text-2xl'>
                                    <li>Java</li>
                                    <li>Rust</li>
                                    <li>Golang</li>
                                    <li>Docker</li>
                                    <li>Linux/Unix</li>
                                    <li>Git/GitHub</li>
                                    <li>AWS EC2</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
