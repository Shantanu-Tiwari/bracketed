"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

type FormInputProps = {
    label: string;
    name: string;
    value: string;
    isRequired?: boolean; // The '?' makes it optional
};

export default function ValorantForm() {
    const [formData, setFormData] = useState({
        teamName: '',
        collegeName: '',
        contact1: '',
        contact2: '',
        leaderName: '',
        leaderRiotId: '', // Changed from bgmiId
        player2Name: '',
        player2RiotId: '', // Changed
        player3Name: '',
        player3RiotId: '', // Changed
        player4Name: '',
        player4RiotId: '', // Changed
        subName: '',
        subRiotId: '', // Changed
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // We'll add Supabase logic here later

        console.log('Valorant Form Data:', formData);
        toast.success('Form filled successfully!');
    };

    // Helper for text inputs
    const FormInput = ({ label, name, value, isRequired = true }: FormInputProps) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-neutral-400 mb-1">
                {label} {isRequired ? '' : '(Optional)'}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                required={isRequired}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-xl"
        >
            <h2 className="font-heading text-3xl text-white uppercase mb-6 text-center">
                Valorant Registration
            </h2>

            {/* --- Payment Section --- */}
            <div className="mb-8">
                <h3 className="font-heading text-xl text-blue-300 uppercase mb-3">
                    Step 1: Payment
                </h3>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <p className="text-gray-300 mb-4">
                        Pay **₹250** using the QR code below and take a screenshot.
                    </p>
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
                <FormInput label="Team Name" name="teamName" value={formData.teamName} />
                <FormInput label="College Name" name="collegeName" value={formData.collegeName} />
                <FormInput label="Contact Number 1" name="contact1" value={formData.contact1} />
                <FormInput label="Contact Number 2" name="contact2" value={formData.contact2} />

                {/* Team Leader */}
                <h4 className="font-heading text-lg text-neutral-400 uppercase mt-6 mb-3">Team Leader</h4>
                <FormInput label="Leader's Real Name" name="leaderName" value={formData.leaderName} />
                <FormInput label="Leader's Valorant ID (e.g., Name#Tag)" name="leaderRiotId" value={formData.leaderRiotId} />

                {/* Players */}
                <h4 className="font-heading text-lg text-neutral-400 uppercase mt-6 mb-3">Players</h4>
                <FormInput label="Player 2 Real Name" name="player2Name" value={formData.player2Name} />
                <FormInput label="Player 2 Valorant ID" name="player2RiotId" value={formData.player2RiotId} />
                <FormInput label="Player 3 Real Name" name="player3Name" value={formData.player3Name} />
                <FormInput label="Player 3 Valorant ID" name="player3RiotId" value={formData.player3RiotId} />
                <FormInput label="Player 4 Real Name" name="player4Name" value={formData.player4Name} />
                <FormInput label="Player 4 Valorant ID" name="player4RiotId" value={formData.player4RiotId} />

                {/* Substitute */}
                <h4 className="font-heading text-lg text-neutral-400 uppercase mt-6 mb-3">Substitute Player</h4>
                <FormInput label="Substitute Name" name="subName" value={formData.subName} isRequired={false} />
                <FormInput label="Substitute Valorant ID" name="subRiotId" value={formData.subRiotId} isRequired={false} />
            </div>

            {/* --- Uploads Section --- */}
            <div className="mb-8">
                <h3 className="font-heading text-xl text-blue-300 uppercase mb-3">
                    Step 3: Uploads
                </h3>
                <div className="mt-4">
                    <label htmlFor="paymentProof" className="block text-sm font-medium text-neutral-400 mb-1">
                        Payment Screenshot
                    </label>
                    <input
                        type="file"
                        id="paymentProof"
                        name="paymentProof"
                        required
                        className="w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="collegeId" className="block text-sm font-medium text-neutral-400 mb-1">
                        College ID Proof (Team Leader)
                    </label>
                    <input
                        type="file"
                        id="collegeId"
                        name="collegeId"
                        required
                        className="w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 hover:bg-blue-700"
            >
                Submit Valorant Registration
            </button>
            <Toaster position="top-right" />
        </form>
    );
}