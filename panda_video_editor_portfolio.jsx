import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

export default function VideoEditorPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GW Panda - Short Video Editor</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional Short Video Editing for YouTube Shorts, Instagram Reels & TikTok. 
          Fast Delivery | Viral Style Editing | Affordable Price
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="rounded-2xl px-6">Hire Me</Button>
          <Button variant="outline" className="rounded-2xl px-6">View Work</Button>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {["YouTube Shorts Editing", "Instagram Reels Editing", "Trading/Finance Videos Editing"].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600">
                  High quality cuts, smooth transitions, captions, trending music, and engagement-focused editing.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Portfolio Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Video Thumbnail {item}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>your@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+91 00000 00000</span>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={18} />
            <span>@yourusername</span>
          </div>
          <div className="flex items-center gap-2">
            <Youtube size={18} />
            <span>GW Panda</span>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} GW Panda. All Rights Reserved.
      </footer>
    </div>
  );
}
