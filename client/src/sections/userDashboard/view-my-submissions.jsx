import React, { useEffect, useState } from 'react'
import OptionsHeader from '../../components/options-header';
import PageWrapper from '../../components/page-wrapper';

function ViewMySubmissions() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the list of files from the server with Authorization header
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/files', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error fetching files: ${response.statusText}`);
                }

                const data = await response.json();
                setFiles(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    const handleFileClick = (filename) => {
        // Open the file in a new tab with Authorization header
        const token = localStorage.getItem('token');
        const url = `http://localhost:5000/api/users/files/${filename}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error opening file');
                }
                return response.blob();
            })
            .then(blob => {
                const newUrl = window.URL.createObjectURL(blob);
                window.open(newUrl, '_blank');
            })
            .catch(error => {
                setError(error.message);
                console.error('Error opening file:', error);
            });
    };

    return (
        <>
            <PageWrapper>
                <OptionsHeader href='/user/dashboard' title='View My Submissions' />
                <div>
                    <h1>Uploaded Files</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                                <button onClick={() => handleFileClick(file.filename)}>
                                    {file.filename}
                                </button>
                                <div>
                                    <p><strong>Name:</strong> {file.name || 'N/A'}</p>
                                    <p><strong>Email:</strong> {file.email || 'N/A'}</p>
                                    <div>
                                        <strong>Members:</strong>
                                        {file.members && file.members.length > 0 ? (
                                            <ul>
                                                {file.members.map((member, memberIndex) => (
                                                    <li key={memberIndex}>
                                                        <p><strong>Member Name:</strong> {member.name}</p>
                                                        <p><strong>Member Email:</strong> {member.email}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No members</p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </PageWrapper>
        </>
    )
}



export default ViewMySubmissions