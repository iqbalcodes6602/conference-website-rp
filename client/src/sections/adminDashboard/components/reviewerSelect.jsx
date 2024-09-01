import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed

const ReviewerSelect = ({ currentReviewer, allReviewers, submissionId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedReviewer, setSelectedReviewer] = useState(currentReviewer);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleReviewerSelect = async (reviewer) => {
        setSelectedReviewer(reviewer._id);
        setIsOpen(false);
    
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/admin/update-submission-reviewer', {
                submissionId,
                reviewerId: reviewer._id
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Call parent update function if provided
            alert('Submission updated successfully!');
        } catch (error) {
            console.error('Failed to update submission:', error);
            alert('Failed to update submission. Please try again.');
        }
    };

    const handleOutsideClick = (event) => {
        if (!event.target.closest('#dropdown-menu') && !event.target.closest('#dropdown-button')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    const searchReviewerName = (reviewerId) => {
        const reviewer = allReviewers.find(reviewer => reviewer._id === reviewerId);
        return reviewer ? reviewer.fullName : 'Not Assigned';
    }

    return (
        <div className="flex items-center justify-center">
            <div className="relative group">
                <button
                    id="dropdown-button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    onClick={toggleDropdown}
                >
                    <span className="mr-2">{searchReviewerName(selectedReviewer)}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isOpen && (
                    <div id="dropdown-menu" className="z-10 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                        <input
                            id="search-input"
                            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                            type="text"
                            placeholder="Search items"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            autoComplete="off"
                        />
                        {allReviewers
                            .filter(reviewer => reviewer.fullName.toLowerCase().includes(searchTerm))
                            .map((reviewer) => (
                                <a
                                    key={reviewer._id}
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                                    onClick={() => handleReviewerSelect(reviewer)}
                                >
                                    {reviewer.fullName}
                                </a>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewerSelect;