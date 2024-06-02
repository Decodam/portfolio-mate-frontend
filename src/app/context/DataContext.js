import React, { createContext, useContext, useState } from 'react';

// Define the initial data structure
const initialData = {
    meta: null,
    about: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        city: '',
        country: '',
        descriptions: [],
        skills: []
    },
    education: [],
    experience: [],
    socialLinks: [{ title: "Resume", link: "" }],
    projects: [],
};

// Create the DataContext
const DataContext = createContext();

// Create a custom hook to consume the data
export const useData = () => useContext(DataContext);

// Create a DataProvider component to wrap your app
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(initialData);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
