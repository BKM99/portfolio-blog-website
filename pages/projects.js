import {FiGithub} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from 'next/image'

const projects2 = () => {
    return (
        <div className='h-screen mx-20 md:pt-32 pt-32'>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-xl text-blue-500 pb-4'>Handwritten Equation Solver</h1>
                    <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
                        <div className='relative'>
                            <div className='aspect-w-1 aspect-h-1'>
                                <Image src='/hwes-example.png' layout='fill' alt=''/>
                            </div>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p>
                                Built a web application that uses deep learning to solve handwritten math equations.
                                The web application allows a user to write an equation on a canvas that gets sent to the
                                server as a base64 encoded string. The string is processed and a result is sent back to the client.
                                Implemented the VGG16 architecture using Tensorflow and deployed the model as an API using Django and React.js.
                                Cleaned and processed the images using OpenCV and Pandas. Removed duplicate images using the MD5 hash.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                                    Python, Tensorflow, OpenCV, Pandas, NumPy, Django, React.js
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/BKM99/hand-written-equation-solver' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                <div>
                                    <HiOutlineExternalLink size='30px'/>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-xl text-blue-500 pb-4'>Malware Classification via Ensemble Learning</h1>
                    <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
                        <div className='relative'>
                            <div className='aspect-w-1 aspect-h-1'>
                                <Image src='/stacked-roc.png' layout='fill' alt=''/>
                            </div>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p>
                                Implemented a Hidden Markov Model (HMM) from scratch in Java to classify malware samples based on opcode sequences.
                                Used 3 malware families (winwebsec, zbot, zeroAccess) to train HMMs based on the log probability. Using only
                                HMMs for classification lead to an AUC of 50% - 94% depending on the malware family. But, stacking HMMs and Support
                                Vector Machines (SVM) lead to an increase in the AUC to 85% - 100% depending on the malware family.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                                    Java, Python, Scikit-Learn, Pandas, Matplotlib
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <FiGithub size='30px'/>
                                </div>
                                <div>
                                    <HiOutlineExternalLink size='30px'/>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-xl text-blue-500 pb-4'>Maze Mania</h1>
                    <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
                        <div className='relative'>
                            <div className='aspect-w-1 aspect-h-1'>
                                <Image src='/maze-mania-ingame.png' layout='fill' alt=''/>
                            </div>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p>
                                Built a maze game where a player moves a dog carrying a pizza through a series of mazes.
                                Game related features include in game notifications, reset/time traps, and increases in difficulty
                                throughout the mazes. This game was built using Java Swing and thoroughly tested using JUnit. The
                                project was structured using an MVC design pattern along with UML and CRC diagrams.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                                    Java, Java Swing, JUnit
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <FiGithub size='30px'/>
                                </div>
                                <div>
                                    <HiOutlineExternalLink size='30px'/>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-xl text-blue-500 pb-4'>Personal Portfolio and Blog</h1>
                    <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
                        <div className='relative'>
                            <div className='aspect-w-1 aspect-h-1'>
                                <Image src='/home-page-portfolio.png' layout='fill' alt=''/>
                            </div>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p>
                                Designed and built my own personal portfolio and blog. Nothing much to say about it here
                                since you are already on the website. The blog consists of things I find interesting like math,
                                machine learning, Neo(vim), summarized posts of things I have learned along the way, and much more.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-sm text-gray-500 uppercase sm:ml-3'>
                                    Nextjs, Tailwind CSS, EmailJS, Yup, framer-motion, React-Hook-Form
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <FiGithub size='30px'/>
                                </div>
                                <div>
                                    <HiOutlineExternalLink size='30px'/>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default projects2
