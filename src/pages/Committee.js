import React from 'react'
import Footer from "./sections/footer";
import Header from "./sections/header";

function Committee() {
  return (
    <>
      <Header />
      <section class="bg-white dark:bg-gray-900 mt-10">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Team members</h2>


          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 mr-24 pb-4 ">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Prof. K Umamaheswar Rao</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Patron</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Director, National Institute of Technology, Rourkela
                </p>

              </div>
            </div>
            
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Prof. B B Biswal</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Program Chair</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"> Vice Chancellor, Odisha University of Technology and Research, Bhubaneswar
                </p>
              </div>
            </div>


            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Prof. D R K Parhi</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Chairman</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Dept. of Mechanical Engineering, National Institute of Technology, Rourkela

                </p>
              </div>
            </div>

            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Prof. B B V L Deepak</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Convener</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Dept. of Industrial Design, National Institute of Technology, Rourkela</p>
              </div>
            </div>


            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#"> Prof. Dibya P Jena</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Coordinator</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Dept. of Industrial Design, National Institute of Technology, Rourkela</p>
              </div>
            </div>


            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Prof. Mohit Lal</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Coordinator</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Dept. of Industrial Design, National Institute of Technology, Rourkela</p>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section class="bg-white dark:bg-gray-900 ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Local Organizing Committee</h2>
          </div>
         <ul class="text-center">
          <li class="p-2">Prof. S Murugan, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. J Srinivas, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. U C Pati, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. M R khan, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. S Gopalkrishna, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. S Kar, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. S K Das, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. S Susovan, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. P S Balaji, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. K Naik, National Institute of Technology, Rourkela, India</li>
          <li class="p-2">Prof. S Heramith, National Institute of Technology, Rourkela, India</li>

         </ul>
          </div>
          </section>

          <section class="bg-white dark:bg-gray-900 ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">International Advisory Board</h2>
          </div>
         <ul class="text-center">
          <li class="p-2">Prof. P N Rao, University of Northern Iowa, U.S</li>
          <li class="p-2">Prof. Satyandra K. Gupta, University of Southern California, Los Angeles, California</li>
          <li class="p-2">Prof. Prasad KDV Yarlagadda, Queensland University of Technology, Australia</li>
          <li class="p-2">Prof. Immanuel Edinbarough, University Of Texas Rio Grande Valley, Texas, USA.</li>
          <li class="p-2">Prof. Dimitris Drikakis, University of Nicosia, UK</li>
          <li class="p-2">Dr. Harshika Singh, Politecnico di Milano, Milano Bovisa - Via La Masa, ITALY</li>
          <li class="p-2">Prof. Dražan Kozak, University of Slavonski Brod, Croatia</li>
          <li class="p-2">Prof. Elbrus CAFEROV, Istanbul Technical University, Turkey</li>
          <li class="p-2">Prof. Elena Scutelnicu, Dunărea de Jos, University of Galaţi, Romania</li>
          <li class="p-2">Prof. Carlos F. Rodriguez, Universidad de los Andes, Colombia</li>
          <li class="p-2">Dr. Anand Amrit, Dura Automotive System, Auburn Hills, Michigan, USA</li>
          <li class="p-2">Prof. Aezeden Mohamed, UNITECH university, Papua New Guinea</li>
          <li class="p-2">Prof. Mohammad T. Khasawneh, Binghamton University, New York</li>

         </ul>
          </div>
          </section>



          <section class="bg-white dark:bg-gray-900 ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">National Advisory Board</h2>
          </div>
         <ul class="text-center">
          <li class="p-2">Prof. Amarendra Kr. Das, Indian Institute of Technology, Guwahati, India</li>
          <li class="p-2">Prof. Dilip Kr. Pratihar, Indian Institute of Technology, Khargpur, India</li>
          <li class="p-2">Prof. Debkumar Chakrabarti, Indian Institute of Technology, Guwahati, India</li>
          <li class="p-2">Prof. J. Ramkumar, Indian Institute of Technology, Kanpur, India</li>
          <li class="p-2">Prof. Abhishek Singh, Indian Institute of Technology, Guwahati, India</li>
          <li class="p-2">Prof. Sarkar Sagar, Indian Institute of Technology, Delhi, India</li>
          <li class="p-2">Prof. Sharmistha Banerjee, Indian Institute of Technology, Guwahati, India</li>
          <li class="p-2">Prof. Sandip Ghosh, Indian Institute of Technology (BHU), Varanasi</li>
          <li class="p-2">Prof. Amitesh Kumar, Indian Institute of Technology (BHU), Varanasi</li>
          <li class="p-2">Prof. Soumya Gangopadhyay, Indian Institute of Technology, Bhilai</li>
          <li class="p-2">Prof. P K Mohonty, National Institute of Technology, Arunachal Pradesh, India</li>
          <li class="p-2">Prof. J C Mohanta, Malaviya National Institute of Technology, Allahabad, India</li>
          <li class="p-2">Prof. R Gujjala, National Institute of Technology, Warangal, India</li>
          <li class="p-2">Prof. H C Das, National Institute of Technology, Meghalaya, India</li>
          <li class="p-2">Prof. R N Mahapatra, National Institute of Technology, Meghalaya, India</li>
          <li class="p-2">Prof. Bunil B Ray, National Institute of Technology, Meghalaya, India</li>
          <li class="p-2">Prof. M Suresh, National Institute of Technology, Goa, India</li>
          <li class="p-2">Prof. A P Sudheer, National Institute of Technology, Calicut, India</li>
          <li class="p-2">Prof. P B Sujit, Indian Institute of Science Education and Research, Bhopal, India</li>
          <li class="p-2">Prof. P G Mamba, Indian Institute of Science Education and Research, Bhopal, India</li>
          <li class="p-2">Prof. S K Kashyap, AcSIR, CSIR-CIMFR, India</li>
          <li class="p-2">Prof. P K Jena, Veer Surendra Sai University of Technology, Burla, India</li>
          <li class="p-2">Prof. S Kundu, KIIT University, Bhubaneswar, India</li>
          <li class="p-2">Prof. Anish Pandey, KIIT University, Bhubaneswar, India</li>
          <li class="p-2">Prof. Debashis Majumder, UPES School of Design, Dehradun, India</li>
          <li class="p-2">Prof. Anirban Chowdhury, UPES School of Design, Dehradun, India</li>
          <li class="p-2">Prof. G Balamurali, Vellore Institute of Technology, India</li>
          <li class="p-2">Prof. Om Prakash Sahu, Vellore Institute of Technology, India</li>
          <li class="p-2">Prof. G Mohanta, Amrita Viswa Vidyapeetham, Chennai, India</li>
          <li class="p-2">Prof. A Rout, Christ University, Bengaluru, India</li>
          <li class="p-2">Dr. Sampat Kumar, National Institute of Technology, Rourkela</li>
          <li class="p-2">Prof. B Patle, ADT University, Pune</li>
          <li class="p-2">Prof. P C Jena, Veer Surendra Sai University of Technology, Burla, India</li>
          <li class="p-2">Prof. K Satyababu, IIITDDM Karnool, India</li>
         </ul>
          </div>
          </section>

      <Footer />
    </>
  )
}

export default Committee