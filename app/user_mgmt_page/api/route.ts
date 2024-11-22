const express = require('express');
const router = express.Router();
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../database/database');

// Either creates a new profile or updates an existing profile if one already exists with a matching email
const manageProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, name, address, city, zipcode, state, skills, availability } = req.body;

    try {
        // Check if a profile with this email already exists
        const existingProfile = await db.findProfileByEmail(email);

        if (!existingProfile) {
            // Create a new profile
            await db.createProfile({
                email,
                name,
                address,
                city,
                zipcode,
                state,
                skills,
                availability,
            });

            res.status(200).json({ message: 'New profile created successfully', profile: email });
        } else {
            // Update the existing profile
            existingProfile.name = name;
            existingProfile.address = address;
            existingProfile.city = city;
            existingProfile.zipcode = zipcode;
            existingProfile.state = state;
            existingProfile.skills = skills;
            existingProfile.availability = availability;

            await db.updateProfile(existingProfile);

            res.status(201).json({ message: 'Existing profile updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error Creating/Updating Profile', error });
    }
};

// Define the route
router.post('/manage', manageProfile);

module.exports = router;
