import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

function AddNewSubmissionForm() {
    const [file, setFile] = useState(null);
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

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/api/users/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error(`Error uploading file: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);

            // Refresh the list of files after successful upload
            const updatedResponse = await fetch('http://localhost:5000/api/users/files', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!updatedResponse.ok) {
                throw new Error(`Error fetching files after upload: ${updatedResponse.statusText}`);
            }

            const updatedFiles = await updatedResponse.json();
            setFiles(updatedFiles);

        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
            {error && <p>Error: {error}</p>}
            <div>
                <h1>Uploaded Files</h1>
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <button onClick={() => handleFileClick(file.filename)}>
                                {file.filename}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AddNewSubmissionForm




// <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     <aside className="">
//         <div className="sticky top-[100px] bg-gray-100 p-8 rounded">
//             <h2 className="font-bold text-2xl">Instructions</h2>
//             <ul className="list-disc mt-4 list-inside">
//                 <li>
//                     All users must provide a valid email address and password to create
//                     an account.
//                 </li>
//                 <li>
//                     Users must not use offensive, vulgar, or otherwise inappropriate
//                     language in their username or profile information
//                 </li>
//                 <li>Users must not create multiple accounts for the same person.</li>
//             </ul>
//         </div>
//     </aside>
//     <form>
//         <div className="mb-5">
//             <label
//                 htmlFor="name"
//                 className="mb-3 block text-base font-medium text-black"
//             >
//                 Full Name
//             </label>
//             <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Full Name"
//                 className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//             />
//         </div>
//         <div className="mb-5">
//             <label
//                 htmlFor="phone"
//                 className="mb-3 block text-base font-medium text-black"
//             >
//                 Phone Number
//             </label>
//             <input
//                 type="text"
//                 name="phone"
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//             />
//         </div>
//         <div className="mb-5">
//             <label
//                 htmlFor="email"
//                 className="mb-3 block text-base font-medium text-black"
//             >
//                 Email Address
//             </label>
//             <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//             />
//         </div>
//         <div className="-mx-3 flex flex-wrap">
//             <div className="w-full px-3 sm:w-1/2">
//                 <div className="mb-5">
//                     <label
//                         htmlFor="date"
//                         className="mb-3 block text-base font-medium text-black"
//                     >
//                         Date
//                     </label>
//                     <input
//                         type="date"
//                         name="date"
//                         id="date"
//                         className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                     />
//                 </div>
//             </div>
//             <div className="w-full px-3 sm:w-1/2">
//                 <div className="mb-5">
//                     <label
//                         htmlFor="time"
//                         className="mb-3 block text-base font-medium text-black"
//                     >
//                         Time
//                     </label>
//                     <input
//                         type="time"
//                         name="time"
//                         id="time"
//                         className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                     />
//                 </div>
//             </div>
//         </div>
//         <div className="mb-5 pt-3">
//             <label className="mb-5 block text-base font-semibold text-black sm:text-xl">
//                 Address Details
//             </label>
//             <div className="-mx-3 flex flex-wrap">
//                 <div className="w-full px-3 sm:w-1/2">
//                     <div className="mb-5">
//                         <input
//                             type="text"
//                             name="area"
//                             id="area"
//                             placeholder="Enter area"
//                             className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-full px-3 sm:w-1/2">
//                     <div className="mb-5">
//                         <input
//                             type="text"
//                             name="city"
//                             id="city"
//                             placeholder="Enter city"
//                             className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-full px-3 sm:w-1/2">
//                     <div className="mb-5">
//                         <input
//                             type="text"
//                             name="state"
//                             id="state"
//                             placeholder="Enter state"
//                             className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-full px-3 sm:w-1/2">
//                     <div className="mb-5">
//                         <input
//                             type="text"
//                             name="post-code"
//                             id="post-code"
//                             placeholder="Post Code"
//                             className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div>
//             <Button className="hover:shadow-form w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
//                 Book Appointment
//             </Button>
//         </div>
//     </form>


// </div>