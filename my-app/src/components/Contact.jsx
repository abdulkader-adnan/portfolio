import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', message: "Hello! I'm Abdulkader's AI assistant. How can I help you today?" }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    emailjs.init('ROTwJTsyD0dR7n1M-');
  }, []);

  const generateAIResponse = (userMessage) => {
    const messageLower = userMessage.toLowerCase();
    
    // Context-aware responses
    if (messageLower.includes('project') || messageLower.includes('work')) {
      return "I'd love to help! Abdulkader has worked on amazing projects including ML models for laptop price prediction, face recognition systems, and full-stack web applications. What specific project interests you?";
    }
    if (messageLower.includes('experience') || messageLower.includes('background')) {
      return "Abdulkader is an AI Software Engineer with expertise in Machine Learning, Python, and full-stack development. He's a student at Misr International University with a 3.66/4.0 GPA, specializing in AI and ML.";
    }
    if (messageLower.includes('contact') || messageLower.includes('email') || messageLower.includes('message')) {
      return "Perfect! I can help you send a message directly to Abdulkader. Would you like to use the contact form?";
    }
    if (messageLower.includes('skill') || messageLower.includes('technology') || messageLower.includes('tech')) {
      return "Abdulkader is skilled in Python, C++, Java, JavaScript, Machine Learning (Scikit-learn, Pandas, NumPy), Computer Vision with OpenCV, and full-stack development with Node.js and MongoDB.";
    }
    if (messageLower.includes('hire') || messageLower.includes('opportunity') || messageLower.includes('work')) {
      return "That's great to hear! Abdulkader is open to opportunities. Would you like to send him a message with the details?";
    }
    if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
      return "Hey! I'm Abdulkader's AI assistant. I can help you learn about his projects, skills, experience, or you can send him a direct message. What would you like to know?";
    }
    
    return "That's interesting! Would you like to send Abdulkader a message with more details, or would you like to know more about his work and experience?";
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    setChatHistory((prev) => [...prev, { role: 'user', message: chatMessage }]);

    setTimeout(() => {
      const aiResponse = generateAIResponse(chatMessage);
      setChatHistory((prev) => [...prev, { role: 'bot', message: aiResponse }]);
      setShowForm(true);
    }, 800);

    setChatMessage('');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send('service_bfbmjxd', 'template_dyd7wa9', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'abdulkader2307019@miuegypt.edu.eg',
      });
      setSubmitMessage('✨ Message sent successfully! Abdulkader will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setChatHistory((prev) => [...prev, { role: 'bot', message: '✨ Your message has been sent! Abdulkader will respond as soon as possible.' }]);
    } catch (error) {
      setSubmitMessage('❌ Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, purple 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Let's build something intelligent together</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chat Section */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Sparkles className="w-12 h-12 text-purple-400 animate-pulse" />
                    <div className="absolute inset-0 blur-xl bg-purple-400 opacity-50 animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Assistant</h3>
                </div>

                <div className="space-y-4 mb-6 h-64 overflow-y-auto custom-scrollbar">
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          chat.role === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                            : 'bg-black/50 border border-purple-500/30 text-gray-300'
                        }`}
                      >
                        {chat.message}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-4 flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">abdulkader2307019@miuegypt.edu.eg</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-[#0A0F1F] border border-purple-500/30 rounded-lg p-4 flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+20 1289994008 / +20 1150318798</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-[#0A0F1F] border border-green-500/30 rounded-lg p-4 flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-50'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-[#0A0F1F] border border-purple-500/30 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows="6"
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-center ${submitMessage.includes('✨') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00FFFF, #8A2BE2);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
