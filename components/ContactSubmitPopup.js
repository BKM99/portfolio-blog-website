import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactSubmitPopup = () => {

    return (
        <div>
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
                            delay: 0.8,
                        },
                    },
                }}
            >
                <div className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl" role="alert">
                    <div className="items-left sm:flex">
                        <p className="mt-8 text-lg font-medium sm:mt-0">Message Sent! &#128077;</p>
                    </div>

                    <p className="mt-4 text-gray-500">
                        Thank you for your message. I will get back to you within 48 hours.
                    </p>

                    <div className="mt-6 sm:flex">
                        <Link href='/'>
                            <a
                                className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                OK
                            </a>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactSubmitPopup
