// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin } from 'lucide-react'; 

// Data for Contact Details
const contactDetails = [
    {
        icon: Mail,
        title: "Email Us",
        value: "info@turkanalytica.com",
        link: "mailto:info@turkanalytica.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+254 701 039 083", // ✅ UPDATED PHONE NUMBER
        link: "tel:+254701039083"
    },
    {
        icon: MapPin,
        title: "Our Headquarters", // ✅ RENAMED AND UPDATED LOCATION
        value: "Lodwar Town, Kenya", 
        link: "#map-section" 
    },
];

// Placeholder component for the contact form input
const FormInput = ({ id, label, type = 'text', required = false, rows = 1 }: { id: string; label: string; type?: string; required?: boolean; rows?: number }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {rows > 1 ? (
            <textarea
                id={id}
                name={id}
                rows={rows}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-ta-teal focus:border-ta-teal transition duration-150"
            />
        ) : (
            <input
                type={type}
                id={id}
                name={id}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-ta-teal focus:border-ta-teal transition duration-150"
            />
        )}
    </div>
);


export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('Sending...');

        // In a real application, you would handle the API submission here
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus('Thank you! Your message has been sent.');
            // Optionally reset form here: e.target.reset();
        }, 2000);
    };

    return (
        <div className="pt-20"> 

            {/* 1. Hero / Title Section (EXCITING LIGHT DESIGN) */}
            <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    
                    {/* Stylized Icon to add visual excitement */}
                    <div className="mx-auto w-20 h-20 bg-ta-teal/10 rounded-full flex items-center justify-center mb-6">
                        <Phone size={40} className="text-ta-teal transform -rotate-12" /> 
                    </div>
                    
                    <h1 className="text-sm font-heading font-semibold text-ta-teal uppercase tracking-widest mb-2">
                        Let&apos;s Collaborate
                    </h1>
                    <h2 className="text-5xl font-heading font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
                        Your Success Story Starts Here.
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Reach out to our team in Lodwar for a tailored discussion on your technology needs.
                    </p>
                </div>
            </section>

            {/* 2. Contact Form & Details Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Contact Details (Left Column) */}
                        <div className="lg:col-span-1 space-y-8 p-6 bg-white rounded-xl shadow-xl h-full border-t-4 border-ta-teal">
                            <h3 className="text-3xl font-heading font-extrabold text-gray-900 border-b pb-4 mb-4">
                                Our Information
                            </h3>
                            
                            {contactDetails.map((item, index) => (
                                <Link 
                                    key={index}
                                    href={item.link} 
                                    className="flex items-start space-x-4 group"
                                >
                                    <div className="p-3 rounded-full bg-ta-teal text-white flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-900">{item.title}</p>
                                        <p className="text-gray-600 group-hover:text-ta-green transition-colors">{item.value}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {/* Contact Form (Right Column) */}
                        <div className="lg:col-span-2 p-8 bg-white rounded-xl shadow-xl">
                            <h3 className="text-3xl font-heading font-extrabold text-gray-900 mb-6">
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                    <FormInput id="name" label="Full Name" required />
                                    <FormInput id="email" label="Email Address" type="email" required />
                                </div>
                                <FormInput id="company" label="Company Name" />
                                <FormInput id="service" label="Interested Service" />
                                <FormInput id="message" label="Your Message" rows={4} required />
                                
                                <Button 
                                    type="submit" 
                                    variant="primary" 
                                    size="lg" 
                                    disabled={isSubmitting}
                                    className="w-full mt-4"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                                
                                {formStatus && (
                                    <p className={`mt-4 text-center font-semibold ${formStatus.includes('Thank you') ? 'text-ta-green' : 'text-gray-600'}`}>
                                        {formStatus}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Map Location Placeholder (Lodwar Integration) */}
            <section id="map-section" className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-heading font-extrabold text-gray-900 text-center mb-6">
                        Find Our Lodwar Headquarters
                    </h3>
                    {/* STANDARD GOOGLE MAPS IFRAME FOR LODWAR */}
                    <div className="w-full h-96 rounded-xl shadow-2xl overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.832269389568!2d35.59016147774059!3d3.1197621008269783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x175c57b32c668b81%3A0x7d6f5f9a6e11832d!2sLodwar!5e0!3m2!1sen!2ske!4v1701584310577!5m2!1sen!2ske" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lodwar Town, Kenya Location Map"
                        />
                    </div>
                </div>
            </section>
            
        </div>
    );
}