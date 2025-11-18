"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

type FormInputProps = {
    label: string;
    name: string;
    value: string;
    isRequired?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ label, name, value, isRequired = true, onChange }: FormInputProps) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">
            {label} {isRequired ? '' : '(Optional)'}
        </label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={isRequired}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

export default function BgmiForm() {
    const [formData, setFormData] = useState({
        teamName: '',
        collegeName: '',
        contact1: '',
        contact2: '',
        leaderName: '',
        leaderId: '',
        player2Name: '',
        player2Id: '',
        player3Name: '',
        player3Id: '',
        player4Name: '',
        player4Id: '',
        subName: '',
        subId: '',
    });

    // A single handler to update the state object
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formDataToSend = new FormData(form);
        
        // Add text fields to FormData
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.set(key, value);
        });

        try {
            const response = await fetch('/api/register/bgmi', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success('Registration submitted successfully!');
                setFormData({
                    teamName: '',
                    collegeName: '',
                    contact1: '',
                    contact2: '',
                    leaderName: '',
                    leaderId: '',
                    player2Name: '',
                    player2Id: '',
                    player3Name: '',
                    player3Id: '',
                    player4Name: '',
                    player4Id: '',
                    subName: '',
                    subId: '',
                });
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to submit registration');
            }
        } catch (error) {
            toast.error('Error submitting registration');
        }
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-xl"
        >
            <h2 className="font-heading text-3xl text-white uppercase mb-6 text-center">
                BGMI Registration
            </h2>

            {/* --- Payment Section --- */}
            <div className="mb-8">
                <h3 className="font-heading text-xl text-blue-300 uppercase mb-3">
                    Step 1: Payment
                </h3>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-gray-300 mb-4">
                        Pay **₹160** using the QR code below and take a screenshot.
                    </p>
                    {/* Your QR Code Image */}
                    <Image
                        src="/payment.jpg"
                        alt="Payment QR Code"
                        width={200}
                        height={200}
                        className="mx-auto rounded-md"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        After paying, upload the screenshot in Step 3.
                    </p>
                </div>
            </div>

            {/* --- Team Details Section --- */}
            <div className="mb-8">
                <h3 className="font-heading text-xl text-blue-300 uppercase mb-3">
                    Step 2: Team Details
                </h3>
                <FormInput label="Team Name" name="teamName" value={formData.teamName} onChange={handleChange} />
                <FormInput label="College Name" name="collegeName" value={formData.collegeName} onChange={handleChange} />
                <FormInput label="Contact Number 1" name="contact1" value={formData.contact1} onChange={handleChange} />
                <FormInput label="Contact Number 2" name="contact2" value={formData.contact2} onChange={handleChange} />

                {/* Team Leader */}
                <h4 className="font-heading text-lg text-gray-300 uppercase mt-6 mb-3">Team Leader</h4>
                <FormInput label="Leader's Real Name" name="leaderName" value={formData.leaderName} onChange={handleChange} />
                <FormInput label="Leader's BGMI ID" name="leaderId" value={formData.leaderId} onChange={handleChange} />

                {/* Players */}
                <h4 className="font-heading text-lg text-gray-300 uppercase mt-6 mb-3">Players</h4>
                <FormInput label="Player 2 Real Name" name="player2Name" value={formData.player2Name} onChange={handleChange} />
                <FormInput label="Player 2 BGMI ID" name="player2Id" value={formData.player2Id} onChange={handleChange} />
                <FormInput label="Player 3 Real Name" name="player3Name" value={formData.player3Name} onChange={handleChange} />
                <FormInput label="Player 3 BGMI ID" name="player3Id" value={formData.player3Id} onChange={handleChange} />
                <FormInput label="Player 4 Real Name" name="player4Name" value={formData.player4Name} onChange={handleChange} />
                <FormInput label="Player 4 BGMI ID" name="player4Id" value={formData.player4Id} onChange={handleChange} />

                {/* Substitute */}
                <h4 className="font-heading text-lg text-gray-300 uppercase mt-6 mb-3">Substitute Player</h4>
                <FormInput label="Substitute Name" name="subName" value={formData.subName} isRequired={false} onChange={handleChange} />
                <FormInput label="Substitute BGMI ID" name="subId" value={formData.subId} isRequired={false} onChange={handleChange} />
            </div>

            {/* --- Uploads Section --- */}
            <div className="mb-8">
                <h3 className="font-heading text-xl text-blue-300 uppercase mb-3">
                    Step 3: Uploads
                </h3>
                <div className="mt-4">
                    <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-300 mb-1">
                        Payment Screenshot
                    </label>
                    <input
                        type="file"
                        id="paymentProof"
                        name="paymentProof"
                        required
                        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="collegeId" className="block text-sm font-medium text-gray-300 mb-1">
                        College ID Proof (Team Leader)
                    </label>
                    <input
                        type="file"
                        id="collegeId"
                        name="collegeId"
                        required
                        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <a
                    href="https://drive.google.com/file/d/1EQR-ZqNBg4dISH6323H6b1Pc-vBe-sww/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-600 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 hover:bg-gray-700 block text-center"
                >
                    View Rulebook
                </a>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 hover:bg-blue-700"
                >
                    Submit BGMI Registration
                </button>
            </div>
            <Toaster position="top-right" />
        </form>
    );
}