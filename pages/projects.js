import {FiGithub} from 'react-icons/fi'
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from 'next/image'
import Head from 'next/head'

const projects = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
            <Head>
                <title>Projects | Brandon Morimoto</title>
            </Head>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-sm md:text-xl text-blue-500 pb-4'>Hand-written Equation Solver</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-3 aspect-h-2'>
                            <Image src='/images/project-images/hwes-example.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Developed a web application that uses a convolutional neural network (VGG16) to solve math equations. Designed the UI with React and the
                                backend with Django. Built and trained the model with Tensorflow and processed the image dataset with OpenCV.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, Tensorflow, Django, React, OpenCV
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/BKM99/MazeMania' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-sm md:text-xl text-blue-500 pb-4'>Malware Classification via Ensemble Learning</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-3 aspect-h-2'>
                            <Image src='/images/project-images/stacked-roc.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Developed a web application that uses a convolutional neural network (VGG16) to solve math equations. Designed the UI with React and the
                                backend with Django. Built and trained the model with Tensorflow and processed the image dataset with OpenCV.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, Tensorflow, Django, React, OpenCV
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/BKM99/MazeMania' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-sm md:text-xl text-blue-500 pb-4'>Maze Mania</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-3 aspect-h-2'>
                            <Image src='/images/project-images/maze-mania-ingame.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Developed a web application that uses a convolutional neural network (VGG16) to solve math equations. Designed the UI with React and the
                                backend with Django. Built and trained the model with Tensorflow and processed the image dataset with OpenCV.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, Tensorflow, Django, React, OpenCV
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/BKM99/MazeMania' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-sm md:text-xl text-blue-500 pb-4'>Personal Portfolio and Blog</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-3 aspect-h-2'>
                            <Image src='/images/project-images/home-page-portfolio.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Developed a web application that uses a convolutional neural network (VGG16) to solve math equations. Designed the UI with React and the
                                backend with Django. Built and trained the model with Tensorflow and processed the image dataset with OpenCV.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, Tensorflow, Django, React, OpenCV
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/BKM99/MazeMania' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default projects
