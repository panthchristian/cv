// import React from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'

export default function contact() {
    return (
        <>
            <Nav />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="h-[25rem] lg:w-2/3 md:w-1/2 sm:w-full bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                        <iframe class="inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736499.148433491!2d72.27657120898787!3d18.771954772859896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1657361232357!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-4 w-full md:py-8 mt-8 md:mt-0">
                        <div class="bg-white flex flex-wrap py-6 pl-0.5 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com">
                                    <a class="text-indigo-500 leading-relaxed" target="_blank">example@email.com</a>
                                </Link>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <Link href="tel:123-456-7890">
                                    <p class="leading-relaxed cursor-pointer">123-456-7890</p>
                                </Link>
                            </div>
                        </div>
                        <div class="bg-white flex flex-wrap py-6 mt-4 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md w-64">Hours of Operation</h2>
                                <p class="leading-relaxed w-64">Mon - Fri : 9 A.M. to 6 P.M.</p>
                                <p class="leading-relaxed w-64">Sat : 9 A.M. to 2 P.M.</p>
                                <p class="leading-relaxed">Sun : Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

