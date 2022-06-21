import { IoIosSend } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const contactSchema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	message: yup.string().required(),
})

const Contact = () => {
	const form = useRef()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(contactSchema),
	})

	const [submitted, setSubmitted] = useState(false)

	const submitForm = (data) => {
		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				process.env.PUBLIC_API_KEY
			)
			.then(
				(result) => {
					setSubmitted(true)
					reset()
				},
				(error) => {
					console.log(error.text)
				}
			)
	}
	return (
		<div className='flex items-center'>
			<div className='h-screen max-w-screen-xl px-4 py-16 mx-auto pt-32 md:p-20'>
				<div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
					<div className='lg:col-span-2'>
						<h1 className='font-bold text-6xl text-blue-500 pt-20'>
							Let&#39;s Talk
						</h1>
						<p className='max-w-xl text-lg pt-4'>
							Have any questions? Send me a message here or on LinkedIn.
							Additional contact information can be found on my resume.
						</p>
					</div>

					<div className='p-8 rounded-lg lg:p-12 lg:col-span-3'>
						<form
							ref={form}
							onSubmit={handleSubmit(submitForm)}
							className='space-y-4'
						>
							<div>
								<label className='sr-only'>Name</label>
								<input
									className='w-full p-3 text-sm rounded-lg border border-black'
									placeholder='Name'
									type='text'
									name='name'
									{...register('name')}
								/>
								<p>
									<span className='text-red-600'>{errors.name?.message}</span>
								</p>
							</div>
							<div>
								<label className='sr-only'>Email</label>
								<input
									className='w-full p-3 text-sm rounded-lg border border-black'
									placeholder='Email address'
									type='email'
									name='email'
									{...register('email')}
								/>
								<p>
									<span className='text-red-600'>{errors.email?.message}</span>
								</p>
							</div>
							<div>
								<label className='sr-only'>Message</label>
								<textarea
									className='w-full p-3 text-sm rounded-lg border border-black'
									placeholder='Message'
									type='text'
									rows='8'
									name='message'
									{...register('message')}
								></textarea>
								<p>
									<span className='text-red-600'>
										{errors.message?.message}
									</span>
								</p>
							</div>

							<div className='mt-4'>
								<button
									type='submit'
									className='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-mnBlue rounded-lg sm:w-auto space-x-2 hover:bg-carolinaBlue'
								>
									<span className='font-medium'> Send </span>
									<IoIosSend size='20px' />
								</button>
							</div>
							<div>
								{submitted ? (
									<span className='text-green-400 font-bold'>
										Message Sent! I will get back to you within 48 hours.
									</span>
								) : null}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
