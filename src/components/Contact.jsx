import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Icon = ({ slug, className }) => {
    switch (slug) {
        case 'gmail':
            return (
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <rect x="2" y="4" width="20" height="16" rx="2" fill="#FFFFFF" />
                    <path
                        d="M4 6L12 11L20 6"
                        stroke="#EA4335"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M4 6H6L12 10L18 6H20V18H18V8L12 12L6 8V18H4V6Z"
                        fill="#EA4335"
                        fillOpacity="0.2"
                    />
                </svg>
            );
        case 'linkedin':
            return (
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
                    <rect x="6" y="9" width="2" height="7" fill="#FFFFFF" />
                    <circle cx="7" cy="7" r="1.2" fill="#FFFFFF" />
                    <path
                        d="M11 9H13V10.1C13.3 9.6 14 9 15.1 9C17 9 18 10.1 18 12.1V16H16V12.5C16 11.6 15.5 11.1 14.8 11.1C13.9 11.1 13.4 11.7 13.4 12.7V16H11V9Z"
                        fill="#FFFFFF"
                    />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <path
                        d="M4 19L5 15C3.8 13.5 3.3 11.6 3.6 9.7C4.1 6.3 6.9 3.7 10.3 3.4C14.9 3 18.7 6.6 18.7 11.1C18.7 15.5 15.1 19.1 10.7 19.1C9.1 19.1 7.7 18.7 6.4 17.9L4 19Z"
                        fill="#25D366"
                    />
                    <path
                        d="M10.7 6.5C8.2 6.5 6.2 8.5 6.2 11C6.2 12.1 6.6 13.1 7.3 14L7 15.5L8.5 15.1C9.3 15.7 10.2 16 11.1 16C13.6 16 15.6 14 15.6 11.5C15.6 9 13.6 7 11.1 7H10.7Z"
                        fill="#FFFFFF"
                        fillOpacity="0.9"
                    />
                </svg>
            );
        case 'github':
            return (
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                >
                    <path
                        d="M12 2C6.5 2 2 6.5 2 12C2 16.4 4.9 20.1 8.9 21.5C9.4 21.6 9.6 21.3 9.6 21V19.4C7 20 6.5 18.2 6.5 18.2C6 16.9 5.3 16.6 5.3 16.6C4.3 16 5.4 16 5.4 16C6.5 16.1 7.1 17.1 7.1 17.1C8.1 18.8 9.8 18.3 10.4 18C10.5 17.3 10.8 16.9 11.1 16.7C8.9 16.4 6.6 15.5 6.6 11.8C6.6 10.8 7 10 7.6 9.3C7.5 9.1 7.1 8.1 7.7 6.7C7.7 6.7 8.5 6.5 9.6 7.3C10.3 7.1 11.1 7 11.9 7C12.7 7 13.5 7.1 14.2 7.3C15.3 6.5 16.1 6.7 16.1 6.7C16.7 8.1 16.3 9.1 16.2 9.3C16.8 10 17.2 10.8 17.2 11.8C17.2 15.5 14.9 16.4 12.7 16.7C13.1 17 13.4 17.5 13.4 18.3V21C13.4 21.3 13.6 21.7 14.1 21.5C18.1 20.1 21 16.4 21 12C21 6.5 16.5 2 12 2Z"
                        fill="#FFFFFF"
                    />
                </svg>
            );
        default:
            return null;
    }
};

export default function Contact() {
    const contacts = [
        {
            label: 'Email',
            href: 'mailto:ahmedrefaat00ar@gmail.com',
            value: 'ahmedrefaat00ar@gmail.com',
            slug: 'gmail'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ahmedrefaat00/',
            value: 'linkedin.com/in/ahmedrefaat00',
            slug: 'linkedin'
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/201090588135',
            value: '+20 1090588135',
            slug: 'whatsapp'
        },
        {
            label: 'GitHub',
            href: 'https://github.com/AhmedRefaat00',
            value: 'github.com/AhmedRefaat00',
            slug: 'github'
        }
    ];

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get('name') || '';
        const email = data.get('email') || '';
        const message = data.get('message') || '';
        const subject = encodeURIComponent(`Portfolio contact from ${name || 'Visitor'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:ahmedrefaat00ar@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id='contact' className="relative w-full min-h-screen text-white overflow-hidden py-14 sm:py-20">


            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Get in </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Touch
                        </span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                        Feel free to reach out for collaboration, opportunities, or just to say hi.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact cards */}
                    <div className="space-y-4">
                        {contacts.map((c, idx) => (
                            <motion.a
                                key={c.label}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:bg-white/10 transition-all duration-200 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300">
                                    <Icon slug={c.slug} className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-400">{c.label}</span>
                                    <span className="text-base sm:text-lg font-semibold group-hover:text-cyan-300 transition-colors">
                                        {c.value}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Email form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5 }}
                        className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/10 backdrop-blur"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-300">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="rounded-xl  border border-white/10 px-3 py-2 focus:border-cyan-400 focus:outline-none transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-300">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="rounded-xl  border border-white/10 px-3 py-2 focus:border-cyan-400 focus:outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label className="text-sm text-gray-300">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Write your message..."
                                className="rounded-xl  border border-white/10 px-3 py-2 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-3 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all"
                        >
                            Send Email
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
