
import HeroSection from '@/components/share/HeroSection';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';




const Contact = () => {
  return (
    <div className='container'>
           {/* hero section  */}
           <HeroSection imageUrlLg={'/src/assets/login.jpg'} title={"Contact"}/>
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-10 py-12 mx-auto">
        <div>
            <p className="font-medium text-rose-500 dark:text-blue-400">Contact us</p>

            <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-blue-950  dark:text-white">Get in touch</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                    <span className="inline-block p-3 text-rose-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-rose-500 dark:text-blue-400">pedalux@gmail.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-rose-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come to our office HQ.</p>
                    <p className="mt-2 text-sm text-rose-500 dark:text-blue-400">House – 55 (Level-3), Road-06, Block-C
Banani, Dhaka-1213, Bangladesh</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-rose-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Sat – Thu |
                    10:00 am – 8:00 pm</p>
                    <p className="mt-2 text-sm text-rose-500 dark:text-blue-400">+1 (555) 000-0000</p>
                </div>


                  {/* social media  */}
	<div className="flex justify-center mt-8 space-x-3">
					<a rel="noopener noreferrer" href="https://www.facebook.com/buildtech3" target='_blank' title="Facebook" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6 fill-current text-blue-600">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="" title="Linkedin" className="flex items-center p-1">
           <FaLinkedin className='text-2xl text-blue-800'/>
					</a>
					<a rel="noopener noreferrer" href="" title="YouTube" className="flex items-center p-1">
			  <FaYoutube className='text-3xl text-red-500'/>
					</a>
  </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe width="100%" height="100%" frameBorder="0" title="map"
src="https://maps.google.com/maps?q=House%2055%20Road-06%20Block-C%20Banani%20Dhaka-1213%20Bangladesh&output=embed">
</iframe>
            </div>
        </div>
    </div>
</section>
  {/* form 
 <ContactForm/> */}
 
    </div>
  );
};

export default Contact;