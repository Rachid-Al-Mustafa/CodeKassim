import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Logo = () => {
    return (
        <div>
            <Link to="/" className="text-2xl font-bold text-red-600">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-red-500"
                >
                    Souk Online
                </motion.div>
            </Link>
        </div>
    )
}

export default Logo