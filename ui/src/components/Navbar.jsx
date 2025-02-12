/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Box from './box.jsx'
const Navbar = ({ Logo,Rec,Box1 }) => {
    return (

        <div className="bg-white">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold"><img src="data:image/svg+xml,%3csvg%20width='28'%20height='29'%20viewBox='0%200%2028%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%201000005989'%3e%3cpath%20id='Polygon%205'%20d='M7.79245%204.66091L13.9994%201.07735L20.2063%204.66091V11.828L13.9994%2015.4116L7.79245%2011.828V4.66091Z'%20stroke='%23E37E03'/%3e%3cpath%20id='Polygon%206'%20d='M14.9846%2017.172L21.1915%2013.5884L27.3984%2017.172V24.3391L21.1915%2027.9227L14.9846%2024.3391V17.172Z'%20stroke='%23E37E03'/%3e%3cpath%20id='Polygon%207'%20d='M0.601772%2017.172L6.80869%2013.5884L13.0156%2017.172V24.3391L6.80869%2027.9227L0.601772%2024.3391V17.172Z'%20stroke='%23E37E03'/%3e%3c/g%3e%3c/svg%3e"></img></span>
                    <span className="text-xl font-semibold">My Network</span>
                </div>
                <button className="flex items-center gap-2 w-auto bg-white text-gray-900 border-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                    Signup
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        className="fill-current"
                    >
                        <mask
                            id="mask0_6726_195"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="21"
                        >
                            <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_6726_195)">
                            <path
                                d="M13.8558 11.125H4.375C4.19764 11.125 4.04917 11.0651 3.92958 10.9454C3.80986 10.8258 3.75 10.6774 3.75 10.5C3.75 10.3226 3.80986 10.1742 3.92958 10.0546C4.04917 9.93487 4.19764 9.87501 4.375 9.87501H13.8558L9.54812 5.5673C9.42424 5.44341 9.36306 5.29841 9.36458 5.1323C9.36625 4.96619 9.43167 4.81848 9.56083 4.68917C9.69014 4.56848 9.83653 4.50598 10 4.50167C10.1635 4.49737 10.3099 4.55987 10.4392 4.68917L15.7227 9.97271C15.8008 10.0508 15.8558 10.1331 15.8877 10.2196C15.9198 10.3061 15.9358 10.3996 15.9358 10.5C15.9358 10.6004 15.9198 10.6939 15.8877 10.7804C15.8558 10.867 15.8008 10.9492 15.7227 11.0273L10.4392 16.3108C10.3237 16.4263 10.1808 16.4853 10.0104 16.4879C9.84 16.4906 9.69014 16.4315 9.56083 16.3108C9.43167 16.1815 9.36708 16.0331 9.36708 15.8654C9.36708 15.6976 9.43167 15.5491 9.56083 15.4198L13.8558 11.125Z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </button>

            </div>



            <div className=' h-[637px] flex  justify-around flex-wrap md:flex-nowrap '>

                <div className='w-[522px] h-[368px] flex-shrink-0  mt-20 pt-10'>
                    <div className='leading-[66px] font-jakarta text-left p-6 text-[58px] font-[800] text-[#22272F]'>Revolutionizing <span className='text-[#0CC0B1]'>Networking</span> </div>
                    <div className='leading-[32px] italic text-[#0CC0B1] font-semibold text-left ml-5 text-[24px] mb-5' > “Never drop the ball again” </div>
                    <p className='text-left ml-5 leading-[24px]'>Simplify the way you manage, nurture, and organize your connections with cutting-edge features designed to save your  time and enhance your relationships.</p>
                    <button className="non-italic flex items-center gap-[10px] m-5 font-jakarta text-[15px] leading-[24px] font-semibold bg-[#0CC0B1] text-white px-4 py-3 rounded-xl h-[56px]">
                        Get on the Wait list
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            className="fill-current"
                        >
                            <mask
                                id="mask0_6726_195"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="20"
                                height="21"
                            >
                                <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_6726_195)">
                                <path
                                    d="M13.8558 11.125H4.375C4.19764 11.125 4.04917 11.0651 3.92958 10.9454C3.80986 10.8258 3.75 10.6774 3.75 10.5C3.75 10.3226 3.80986 10.1742 3.92958 10.0546C4.04917 9.93487 4.19764 9.87501 4.375 9.87501H13.8558L9.54812 5.5673C9.42424 5.44341 9.36306 5.29841 9.36458 5.1323C9.36625 4.96619 9.43167 4.81848 9.56083 4.68917C9.69014 4.56848 9.83653 4.50598 10 4.50167C10.1635 4.49737 10.3099 4.55987 10.4392 4.68917L15.7227 9.97271C15.8008 10.0508 15.8558 10.1331 15.8877 10.2196C15.9198 10.3061 15.9358 10.3996 15.9358 10.5C15.9358 10.6004 15.9198 10.6939 15.8877 10.7804C15.8558 10.867 15.8008 10.9492 15.7227 11.0273L10.4392 16.3108C10.3237 16.4263 10.1808 16.4853 10.0104 16.4879C9.84 16.4906 9.69014 16.4315 9.56083 16.3108C9.43167 16.1815 9.36708 16.0331 9.36708 15.8654C9.36708 15.6976 9.43167 15.5491 9.56083 15.4198L13.8558 11.125Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </button>

                </div>

                <div className='md:w-[500px] md:h-[200px] w-[600px] h-[477px] mt-16 pt-7 ml-1 mb-5'>
 

  <Box Rec={Rec} Box1={Box1} />
</div>


            </div>

        </div>
    );
};

export default Navbar;
