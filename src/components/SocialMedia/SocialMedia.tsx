import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div>
            {/* Bottom Section: Social Media Icons */}
            <div className="w-full flex justify-center items-center space-x-6 mt-8 border-t pt-4">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-red-600 text-2xl hover:text-red-400 transition duration-200">
                    <FaFacebookF />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-red-600 text-2xl hover:text-red-400 transition duration-200">
                    <FaTwitter />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-red-600 text-2xl hover:text-red-400 transition duration-200">
                    <FaInstagram />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-red-600 text-2xl hover:text-red-400 transition duration-200">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia