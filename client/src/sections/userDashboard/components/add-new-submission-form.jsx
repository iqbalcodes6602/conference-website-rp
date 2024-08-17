import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

function AddNewSubmissionForm() {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Fetch the list of files from the server
        fetch('http://localhost:5000/api/users/files')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error('Error fetching files:', error));
    }, []);

    const handleFileClick = (filename) => {
        // Open the file in a new tab
        window.open(`http://localhost:5000/api/users/files/${filename}`, '_blank');
    };


    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:5000/api/users/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        
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

        <>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
            <div>
                <h1>Uploaded Files</h1>
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <button onClick={() => handleFileClick(file)}>{file}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default AddNewSubmissionForm