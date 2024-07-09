'use client';
import React from 'react';

const Footer = () => {
return (
    <footer className=" text-white px-5 sm:px-20 py-8 flex justify-between w-full flex-col
     md:flex-row md:gap-32 md:py-10
      ">
        <div className='flex flex-col gap-4 md:gap:5'>
            <h1 className="text-2xl font-bold font-[paladins]">Muplay</h1>
            <p className="text-sm w-3/4">muPlay is a platform for gamers, developers and eSports enthusiasts to connect, compete and create.</p>
        </div>
        <div className="flex md:gap-20 flex-col md:flex-row gap-4 md:gap:5">
            {[
                {
                    title: "ABOUT US",
                    links: [
                        { label: "Zeux", href: "#zeux" },
                        { label: "Portfolio", href: "#portfolio" },
                        { label: "Careers", href: "#careers" },
                        { label: "Contact us", href: "#contact" }
                    ]
                },
                {
                    title: "SOCIALS",
                    links: [
                        { label: "Instagram", href: "https://www.instagram.com/muplay.gg/?locale=dehttps%3A%2F%2F555ten.com%2F" },
                        { label: "LinkedIn", href: "#linkedin" },
                        { label: "Youtube", href: "#youtube" },
                        { label: "Twitter/X", href: "#twitter" }
                    ]
                },
                {
                    title: "CONTACT US",
                    contact: [
                        { label: "Mulearn" },
                        { label: "https://mulearn.org/" }
                    ]
                }
            ].map((section, index) => (
                <div key={index}>
                    <h2 className="font-bold text-lg mb-4 font-[paladins]">{section.title}</h2>
                    {//@ts-ignore
                        section.content && <p className="text-sm">{section.content}</p>}
                    {section.links && (
                        <ul className="space-y-2 text-sm">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.href} className="hover:underline">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                    {section.contact && (
                        <ul className="space-y-2 text-sm">
                            {section.contact.map((contact, contactIndex) => (
                                <li key={contactIndex}>{contact.label}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </footer>
);
}

export default Footer;
