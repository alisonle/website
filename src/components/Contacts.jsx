import React, { useState } from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage("")

        const formData = new FormData(e.target)

        try {
            const forminit = new window.Forminit()
            const FORM_ID = 'b717w5wtm95'

            const { data, error } = await forminit.submit(FORM_ID, formData)

            if (error) {
                setMessage(error.message)
                setIsSubmitting(false)
                return
            }

            setMessage("Message sent successfully!")
            e.target.reset()
        } catch (err) {
            setMessage("Failed to send message. Please try again.")
        }

        setIsSubmitting(false)
    }

    return (
        <section id="contact" className="w-full flex justify-center py-12">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl p-6 md:p-8 rounded-lg"
                id="form"
            >
                <p className="text-gray-100 font-bold text-xl mb-2">
                    Send a Message :)
                </p>
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name ..."
                    name="fi-sender-fullName"
                    required
                    className="mb-2 w-full rounded-md border border-pink-600 py-2 pl-2 pr-4"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email ..."
                    name="fi-sender-email"
                    required
                    className="mb-2 w-full rounded-md border border-pink-600 py-2 pl-2 pr-4"
                />
                <textarea
                    name="fi-text-message"
                    id="textarea"
                    cols="30"
                    rows="4"
                    placeholder="Your Message ..."
                    required
                    className="mb-2 w-full rounded-md border border-pink-600 py-2 pl-2 pr-4"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-white font-semibold text-lg bg-pink-400 hover:bg-pink-700
                                        rounded-md transition duration-300"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {message && (
                    <p className={`mt-4 text-center font-semibold ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}
            </form>
        </section>
    )
}

export default Contacts