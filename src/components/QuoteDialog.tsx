"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Mail, MessageSquare, AlertCircle } from "lucide-react";

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteDialog({ isOpen, onClose }: QuoteDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "Textile",
    interest: "Desktop/Laptop Computers",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setError("Please fill in all required fields (Name, Phone, Requirements).");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `*Inquiry from Digital Network Website*
----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Business Type:* ${formData.businessType}
*Interested In:* ${formData.interest}
*Message:* ${formData.message}`;

    return `https://wa.me/919894740202?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = () => {
    const subject = `Inquiry: ${formData.interest} - ${formData.name}`;
    const body = `Hi Surya,

I would like to request a quote / service details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Business Type: ${formData.businessType}
Interested In: ${formData.interest}

Requirements:
${formData.message}

---
Sent from digitnt.com`;

    return `mailto:9894740202.surya@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      businessType: "Textile",
      interest: "Desktop/Laptop Computers",
      message: "",
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-slate-900 border-slate-800 text-white rounded-2xl p-6">
        {!submitted ? (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold tracking-tight text-white">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-sm">
                Fill in the details below, and we will get back to you with pricing or setup consultations immediately.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business Sector
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Textile">Textile / Apparel</option>
                    <option value="Export">Export House</option>
                    <option value="Finance">Finance Segment</option>
                    <option value="Education">Educational Institution</option>
                    <option value="Coach">Coach Builder</option>
                    <option value="Other">Other Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Service Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Desktop/Laptop Computers">Computers & Laptops</option>
                    <option value="Printers & Toner supplies">Printers & Toners</option>
                    <option value="Networking products / Firewalls">Networking & Firewalls</option>
                    <option value="Domain / Gsuite Setup">Domain & Gsuite Email</option>
                    <option value="Repair / Spares Service">Repair & Maintenance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Detailed Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement (e.g. Need 10 Dell desktops for export office setup, or G Suite email management configuration)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl border-0 shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all flex items-center justify-center cursor-pointer outline-none"
              >
                Submit Inquiry
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Inquiry Generated!</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                Thank you, {formData.name}. We have compiled your requirements. Please choose one of the direct channels below to submit it to Surya instantly:
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send via WhatsApp Chat</span>
              </a>

              <a
                href={getEmailLink()}
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl border border-slate-700 transition-all"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Send via Email</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-400 underline transition-colors"
            >
              Start New Inquiry
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
