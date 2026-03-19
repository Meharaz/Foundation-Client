import React, { useContext, useState } from 'react';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { FaHeart, FaHandsHelping, FaTimes, FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Contexts/AuthContext/AuthContext';

const RegistrationForms = () => {
  const { createUser } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'Regular Donor', color: 'emerald', icon: <FaHeart />, border: 'border-emerald-500', bg: 'bg-emerald-600' },
    { id: 'Lifetime Member', color: 'blue', icon: <HiOutlineBadgeCheck />, border: 'border-blue-400', bg: 'bg-blue-500' },
    { id: 'Volunteer', color: 'amber', icon: <FaHandsHelping />, border: 'border-amber-400', bg: 'bg-amber-500' },
    { id: 'Blood Donor', color: 'purple', icon: <BiSolidDonateBlood />, border: 'border-purple-400', bg: 'bg-purple-600' },
  ];

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const address = form.address.value;

    try {
      // 1. Create User in Firebase Auth
      const result = await createUser(email, password);
      const user = result.user;

      // 2. Prepare data for MongoDB
      const userData = {
        uid: user.uid,
        name,
        email,
        phone,
        address,
        role: selectedRole,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // 3. Send to Node.js Backend
      const response = await fetch('http://localhost:5000/registrations', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData)
      });

      // Handle cases where server returns HTML instead of JSON (404/500)
      if (!response.ok) {
        throw new Error("Server responded with an error. Check if backend is running.");
      }

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: `Welcome! Registered as ${selectedRole}.`,
          icon: 'success',
          confirmButtonColor: '#059669'
        });
        setSelectedRole(null);
        form.reset();
      }
    } catch (error) {
      console.error("Registration Error:", error);
      Swal.fire('Registration Failed', error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-emerald-950 mb-4 uppercase">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">"Man For Mankind"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`${idx === 0 ? 'md:col-span-3' : ''} group cursor-pointer rounded-[40px] border-2 border-dashed ${role.border} p-2 transition-all hover:scale-[1.02] shadow-sm`}
            >
              <div className={`${role.bg} rounded-[35px] ${idx === 0 ? 'py-12' : 'h-72'} flex flex-col items-center justify-center text-white p-6 shadow-xl`}>
                <span className="text-6xl mb-4">{role.icon}</span>
                <span className="text-2xl font-bold text-center leading-tight">{role.id}</span>
                <p className="text-sm mt-2 opacity-80 font-medium tracking-wide">Click to Register</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden relative">
            <button onClick={() => setSelectedRole(null)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-all">
              <FaTimes size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-emerald-900">Register as</h3>
                <p className="text-emerald-600 font-bold uppercase tracking-widest">{selectedRole}</p>
              </div>

              <form onSubmit={handleRegistration} className="space-y-4">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-400" />
                  <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full pl-12 rounded-2xl focus:border-emerald-500" required />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                  <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full pl-12 rounded-2xl focus:border-emerald-500" required />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-4 top-4 text-gray-400" />
                  <input name="password" type="password" placeholder="Create Password" className="input input-bordered w-full pl-12 rounded-2xl focus:border-emerald-500" required />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-4 text-gray-400" />
                  <input name="phone" type="tel" placeholder="Phone Number" className="input input-bordered w-full pl-12 rounded-2xl focus:border-emerald-500" required />
                </div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
                  <input name="address" type="text" placeholder="Your Address" className="input input-bordered w-full pl-12 rounded-2xl focus:border-emerald-500" required />
                </div>

                <button disabled={loading} className="btn w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl border-none h-14 text-lg font-bold mt-4 shadow-lg transition-all">
                  {loading ? <span className="loading loading-spinner"></span> : "Complete Registration"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegistrationForms;