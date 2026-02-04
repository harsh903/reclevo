'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        serviceType: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
          Full Name <span className="text-[#0C5E41]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors text-[#1a1a1a]"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
          Email Address <span className="text-[#0C5E41]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors text-[#1a1a1a]"
          placeholder="Enter your email address"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors text-[#1a1a1a]"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-[#1a1a1a] mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors text-[#1a1a1a]"
            placeholder="Enter organization name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-[#1a1a1a] mb-2">
          Service Interest
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors text-[#1a1a1a]"
        >
          <option value="">Select a service</option>
          <option value="smart-waste-management">Smart Waste Management</option>
          <option value="asset-management">Asset Management</option>
          <option value="route-optimization">Route Optimization</option>
          <option value="compliance-reporting">Compliance Reporting</option>
          <option value="government-solutions">Government Solutions</option>
          <option value="business-solutions">Business Solutions</option>
          <option value="consultation">General Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
          Message <span className="text-[#0C5E41]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#0C5E41] focus:border-[#0C5E41] transition-colors resize-none text-[#1a1a1a]"
          placeholder="Tell us about your waste management challenges..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-[#e8f5f0] border border-[#0C5E41]/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#0C5E41] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-[#0C5E41]">
                Message sent successfully!
              </h3>
              <p className="text-sm text-[#4a4a4a] mt-1">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Error sending message
              </h3>
              <p className="text-sm text-red-700 mt-1">
                Please try again or contact us directly.
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0C5E41] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#0a4f36] focus:ring-4 focus:ring-[#0C5E41]/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
