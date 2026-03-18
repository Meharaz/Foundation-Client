import React, { useEffect, useState } from 'react';
import { FaPaperPlane, FaInfoCircle } from 'react-icons/fa';
import { useLocation } from 'react-router';

const RequestService = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('serviceName') || "";

  const [formData, setFormData] = useState({
    serviceType: initialService,
    userName: '',
    phone: '',
    address: '',
    details: ''
  });

  return (
    <section className="py-20 bg-emerald-950 min-h-screen px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[45px] p-8 md:p-12 shadow-2xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-emerald-950">Service Request Form</h2>
            <p className="text-gray-500 mt-2">Please provide accurate details for quick processing.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-bold text-gray-700">Requested Service</label>
                <input 
                  type="text" 
                  value={formData.serviceType} 
                  readOnly 
                  className="input input-bordered bg-gray-50 font-semibold text-emerald-700 rounded-2xl" 
                />
              </div>

              <div className="form-control">
                <label className="label font-bold text-gray-700">Full Name</label>
                <input type="text" placeholder="Your Name" className="input input-bordered rounded-2xl focus:outline-emerald-500" required />
              </div>

              <div className="form-control">
                <label className="label font-bold text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+880" className="input input-bordered rounded-2xl focus:outline-emerald-500" required />
              </div>

              <div className="form-control">
                <label className="label font-bold text-gray-700">District/Area</label>
                <input type="text" placeholder="e.g. Chittagong" className="input input-bordered rounded-2xl focus:outline-emerald-500" required />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-gray-700">Detailed Address & Reason</label>
              <textarea 
                className="textarea textarea-bordered h-32 rounded-2xl focus:outline-emerald-500" 
                placeholder="Briefly describe your situation or provide specific address details..."
              ></textarea>
            </div>

            <div className="bg-amber-50 p-4 rounded-2xl flex items-start gap-3 border border-amber-100">
              <FaInfoCircle className="text-amber-600 mt-1" />
              <p className="text-xs text-amber-800">
                By submitting this form, you agree that our team will contact you via the provided phone number to verify and coordinate the service.
              </p>
            </div>

            <button className="btn btn-lg bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full w-full shadow-lg">
              Submit Request <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestService;