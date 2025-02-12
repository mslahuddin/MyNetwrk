/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import React from 'react'

const Body = ({ Box2, Box3, Img1, Img2, Img3,Box4 ,Icon1 ,Icon2 ,Icon3,Icon4,Icon5 ,Icon6,Icon7 }) => {


    const cards = [
        {
            pic: Img1,
            title: "Smart Reminders",
            description: "Set custom preferences for staying in touch with your network. Choose frequency, days of the week, and priority contacts to ensure consistent engagement.",
        },
        {
            pic: Img2,
            title: "AI-Powered Communication",
            description: 'Let AI craft personalized message prompts based on your conversation history and context, making it effortless to maintain meaningful connections.',
        },
        {
            pic: Img3,
            title: "Automated Engagement",
            description: "Leverage AI to scan your calendar for upcoming events and automatically identify relevant contacts to ping and see if they will also be attending the event. Leave no relationship building stones unturned!",
        },
    ];




    return (
        <div>
            <div className='sm:mt-[28rem] max650:mt-[28rem] md:mt-[0rem] text-[#22272F] text-[48px] font-semibold text-center font-jakarta leading-[58px]'>
                AI-Enhanced Relationship Management
            </div>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='w-[580px] mt-10 p-3  ml-4 flex border border-gray-200 rounded-lg p-[2.75rem] '>
                    <div>
                        <img src={Icon1} height={"64px"} width={"64px"}/>

                        <div className='mb-4 mt-5 text-[24px] font-semibold font-jakarta text-left'>No More Data Entry - A Complete Solution</div>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li className='font-medium text-left text-[#516278]'>Connect your email, contacts, and social media, let AI populate name, title, business, contact info, and conversation</li>
                            <li className='font-medium text-left text-[#516278]'>Scan Business Cards and<span className='text-[#0CC0B1]'> AI will auto-create intro emails </span> ready for your review and "send" </li>
                        </ul>
                    </div>
                </div>



                {/*-------------------------------------*/}


                <div className='w-[580px] mt-10   ml-4 flex border border-gray-200 rounded-lg p-[2.75rem] '>
                    <div>
                    <img src={Icon2} height={"64px"} width={"64px"}/>

                        <div className='mb-4 mt-5 text-[24px] font-semibold font-jakarta text-left'>Smart Conversation Tracking</div>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li className='font-medium text-left text-[#516278]'>AI summarizes emails, action items, and <span className='text-[#0CC0B1]'> meeting notes inside each contact profile </span></li>
                            <li className='font-medium text-left text-[#516278]'>See where you left off in just one click AI will auto-create intro emails ready for your review and "send" </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='flex flex-wrap md:flex-nowrap'>
                {/*-------------------------------------*/}
                {/*-------------------------------------*/}
                {/*-------------------------------------*/}

                <div className='w-[580px] mt-10 p-3  ml-4 flex border border-gray-200 rounded-lg p-[2.75rem] '>
                    <div>
                    <img src={Icon3} height={"64px"} width={"64px"}/>


                        <div className='mb-4 mt-5 text-[24px] font-semibold font-jakarta text-left'>Location-Aware Networking</div>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li className='font-medium text-left text-[#516278]'>See your complete network displayed as pins on a map</li>
                            <li className='font-medium text-left text-[#516278]'><span className='text-[#0CC0B1]'>Conference Check-in feature </span> allows you to see who from your network is there! meeting notes inside each contact profile </li>
                            <li className='font-medium text-left text-[#516278]'>Never miss connecting with nearby contacts while you're on the go</li>
                        </ul>
                    </div>
                </div>





                {/*-------------------------------------*/}

                <div className="w-[580px] mt-10 p-3 ml-4 flex border border-gray-200 rounded-lg p-[2.75rem]">
                    <div>
                    <img src={Icon4} height={"64px"} width={"64px"}/>

                        <div className="mb-4 mt-5 text-[24px] font-semibold font-jakarta text-left">Relationship Nurturing</div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="font-medium text-left text-[#516278]">
                                Keep connections strong with our custom "nurture" feature.
                            </li>
                            <li className="font-medium text-left text-[#516278]">
                                <span className="text-[#0CC0B1]">You decide how often and how to engage</span> with clients/partners (by tier or
                                other tag), and let AI schedule and draft your outreach. Allows you to see who from your network is there! Meeting
                                notes inside each contact profile.
                            </li>
                        </ul>
                    </div>
                </div>


            </div>


            <div className='flex mt-5 p-2  space-between gap-10 flex-wrap md:flex-nowrap'>
                <div>
                    <img className='w-[600px]' src={Box2}></img>
                </div>

                <div className=''>
                    <div className='w-[440px] text-[48px] font-semibold leading-[58px] text-[#22272F] text-left p-2'>
                        Detailed Contact Profiles
                        <div className='flex items-center gap-2 text-[20px] font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'>
                            <img src={Icon5} height={"48px"} width={"48px"}/>
                            Effortless Rich Profiles
                        </div>
                        <p className='text-[16px] font-normal leading-[24px] text-[#516278] mt-1'>
                            Comprehensive contact information including name, picture, title, company, current time, region, custom notes (like where you met), and an AI summary
                        </p>
                    </div>



                    {/*---------------------------*/}

                    <div className='flex items-center gap-2 w-[440px] text-[20px]   font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'>              
                    <img src={Icon6} height={"48px"} width={"48px"}/>

                        AI Summaries</div>
                    <p className=' w-[440px] text-[16px] font-normal  leading-[24px] text-[#516278] mt-1 text-left'>Intelligent conversation summaries and context for each contact along with proposed action items</p>




                    {/*---------------------------*/}

                    <div className='flex items-center gap-2 w-[440px] text-[20px]   font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'>              
                      <img src={Icon7} height={"48px"} width={"48px"}/>
                    Custom Tags</div>
                    <p className='w-[440px] text-[16px] font-normal  leading-[24px] text-[#516278] mt-1 text-left'>Organize contacts with custom tags and categories (i.e. tier 1 client, hot lead, industry, product of interest, Purchaser, decision maker, NGO, donor, etc)</p>



                </div>
            </div>





            <div className="font-jakarta text-[48px] font-semibold  text-left  md:text-center leading-[58px] mt-10 p-4 mb-10">

                <span>Streamlined Contact Clean-up</span>
            </div>

            <div className="flex justify-around flex-wrap text-left  md:text-center md:flex-nowrap ">
                <div className="w-[550px] mb-6">
                    <div className="flex items-center space-x-3 ">
                        {/*I made svg's of it as in figma svg of it was not there*/}
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#F8B15B" />
                            <text x="50%" y="50%" font-family="Arial" font-size="18" fill="white" font-weight="bold" text-anchor="middle" alignment-baseline="middle">1</text>
                        </svg>
                        <span className="font-jakarta text-[20px] text-[#0CC0B1] font-semibold">
                            Smart Duplicate Merging
                        </span>
                    </div>
                    <p className="text-[16px] font-medium leading-[24px] text-[#516278] mt-2">
                        Our software identifies and combines duplicate contacts into single entries
                    </p>
                </div>

                <div className="w-[550px] mb-6">
                    <div className="flex items-center space-x-3">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#F8B15B" />
                            <text x="50%" y="50%" font-family="Arial" font-size="18" fill="white" font-weight="bold" text-anchor="middle" alignment-baseline="middle">2</text>
                        </svg>
                        <span className="font-jakarta text-[20px] text-[#0CC0B1] font-semibold">
                            Quick Swipe Clean-up
                        </span>
                    </div>
                    <p className="text-[16px] font-medium leading-[24px] text-[#516278] mt-2">
                        Tinder-like swiping interface for efficient "keep contact" or "delete" decisions - a fun spring cleaning option for your contacts
                    </p>
                </div>


                <div className="w-[550px]">
                    <div className="flex items-center space-x-3">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#F8B15B" />
                            <text x="50%" y="50%" font-family="Arial" font-size="18" fill="white" font-weight="bold" text-anchor="middle" alignment-baseline="middle">3</text>
                        </svg>
                        <span className="font-jakarta text-[20px] text-[#0CC0B1] font-semibold">
                            Spam Contact Filtering
                        </span>
                    </div>
                    <p className="text-[16px] font-medium leading-[24px] text-[#516278] mt-2">
                        Advanced algorithms detect and remove spam contacts to maintain a clean network
                    </p>
                </div>
            </div>









            <div className='flex mt-5 p-2  space-between gap-10 flex-wrap md:flex-nowrap'>
                <div>
                    <img className='w-[600px]' src={Box2}></img>
                </div>

                <div className=''>
                    <div className='w-[440px] text-[48px] font-semibold leading-[58px] text-[#22272F] text-left p-2'>
                        Advanced Search and Categorization
                        <div className='flex items-center gap-2 text-[20px] font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#F8B15B" />
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="11" width="29" height="29">
                                    <rect x="9.79" y="11" width="28" height="28" fill="white" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M23.79 25C22.2775 25 20.9827 24.4614 19.9057 23.3843C18.8286 22.3072 18.29 21.0124 18.29 19.5C18.29 17.9876 18.8286 16.6928 19.9057 15.6157C20.9827 14.5386 22.2775 14 23.79 14C25.3025 14 26.5973 14.5386 27.6744 15.6157C28.7515 16.6928 29.29 17.9876 29.29 19.5C29.29 21.0124 28.7515 22.3072 27.6744 23.3843C26.5973 24.4614 25.3025 25 23.79 25ZM12.79 33.25V32.15C12.79 31.3708 12.9906 30.6547 13.3916 30.0015C13.7926 29.3484 14.3255 28.85 14.99 28.5062C16.4109 27.7958 17.8546 27.263 19.3213 26.9078C20.788 26.5526 22.2775 26.375 23.79 26.375C25.3025 26.375 26.7921 26.5526 28.2588 26.9078C29.7255 27.263 31.1692 27.7958 32.59 28.5062C33.2546 28.85 33.7874 29.3484 34.1885 30.0015C34.5895 30.6547 34.79 31.3708 34.79 32.15V33.25C34.79 34.0062 34.5208 34.6536 33.9822 35.1922C33.4437 35.7307 32.7963 36 32.04 36H15.54C14.7838 36 14.1364 35.7307 13.5979 35.1922C13.0593 34.6536 12.79 34.0062 12.79 33.25ZM15.54 33.25H32.04V32.15C32.04 31.8979 31.977 31.6687 31.851 31.4625C31.7249 31.2562 31.5588 31.0958 31.3525 30.9812C30.115 30.3625 28.8661 29.8984 27.6057 29.5891C26.3452 29.2797 25.0734 29.125 23.79 29.125C22.5067 29.125 21.2348 29.2797 19.9744 29.5891C18.714 29.8984 17.465 30.3625 16.2275 30.9812C16.0213 31.0958 15.8551 31.2562 15.7291 31.4625C15.6031 31.6687 15.54 31.8979 15.54 32.15V33.25ZM23.79 22.25C24.5463 22.25 25.1937 21.9807 25.7322 21.4422C26.2708 20.9036 26.54 20.2562 26.54 19.5C26.54 18.7437 26.2708 18.0963 25.7322 17.5578C25.1937 17.0193 24.5463 16.75 23.79 16.75C23.0338 16.75 22.3864 17.0193 21.8479 17.5578C21.3093 18.0963 21.04 18.7437 21.04 19.5C21.04 20.2562 21.3093 20.9036 21.8479 21.4422C22.3864 21.9807 23.0338 22.25 23.79 22.25Z" fill="white" />
                                </g>
                            </svg>
                            Robust Keyword Search
                        </div>
                        <p className='text-[16px] font-normal leading-[24px] text-[#516278] mt-1'>
                            Quickly find contacts using powerful keyword search (i.e. name, title, region, conversation, or tag)
                        </p>
                    </div>



                    {/*---------------------------*/}

                    <div className='flex items-center gap-2 w-[440px] text-[20px]   font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="24" fill="#F8B15B" />
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="11" width="29" height="29">
                            <rect x="9.79" y="11" width="28" height="28" fill="white" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M23.79 25C22.2775 25 20.9827 24.4614 19.9057 23.3843C18.8286 22.3072 18.29 21.0124 18.29 19.5C18.29 17.9876 18.8286 16.6928 19.9057 15.6157C20.9827 14.5386 22.2775 14 23.79 14C25.3025 14 26.5973 14.5386 27.6744 15.6157C28.7515 16.6928 29.29 17.9876 29.29 19.5C29.29 21.0124 28.7515 22.3072 27.6744 23.3843C26.5973 24.4614 25.3025 25 23.79 25ZM12.79 33.25V32.15C12.79 31.3708 12.9906 30.6547 13.3916 30.0015C13.7926 29.3484 14.3255 28.85 14.99 28.5062C16.4109 27.7958 17.8546 27.263 19.3213 26.9078C20.788 26.5526 22.2775 26.375 23.79 26.375C25.3025 26.375 26.7921 26.5526 28.2588 26.9078C29.7255 27.263 31.1692 27.7958 32.59 28.5062C33.2546 28.85 33.7874 29.3484 34.1885 30.0015C34.5895 30.6547 34.79 31.3708 34.79 32.15V33.25C34.79 34.0062 34.5208 34.6536 33.9822 35.1922C33.4437 35.7307 32.7963 36 32.04 36H15.54C14.7838 36 14.1364 35.7307 13.5979 35.1922C13.0593 34.6536 12.79 34.0062 12.79 33.25ZM15.54 33.25H32.04V32.15C32.04 31.8979 31.977 31.6687 31.851 31.4625C31.7249 31.2562 31.5588 31.0958 31.3525 30.9812C30.115 30.3625 28.8661 29.8984 27.6057 29.5891C26.3452 29.2797 25.0734 29.125 23.79 29.125C22.5067 29.125 21.2348 29.2797 19.9744 29.5891C18.714 29.8984 17.465 30.3625 16.2275 30.9812C16.0213 31.0958 15.8551 31.2562 15.7291 31.4625C15.6031 31.6687 15.54 31.8979 15.54 32.15V33.25ZM23.79 22.25C24.5463 22.25 25.1937 21.9807 25.7322 21.4422C26.2708 20.9036 26.54 20.2562 26.54 19.5C26.54 18.7437 26.2708 18.0963 25.7322 17.5578C25.1937 17.0193 24.5463 16.75 23.79 16.75C23.0338 16.75 22.3864 17.0193 21.8479 17.5578C21.3093 18.0963 21.04 18.7437 21.04 19.5C21.04 20.2562 21.3093 20.9036 21.8479 21.4422C22.3864 21.9807 23.0338 22.25 23.79 22.25Z" fill="white" />
                        </g>
                    </svg>

                        Custom Categories
                    </div>
                    <p className=' w-[440px] text-[16px] font-normal  leading-[24px] text-[#516278] mt-1 text-left'>Create categories to further organize your network   (i.e. lead, industry, position title, etc).</p>




                    {/*---------------------------*/}

                    <div className='flex items-center gap-2 w-[440px] text-[20px]   font-semibold font-jakarta text-left text-[#0CC0B1] leading-[28px] mt-3'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="24" fill="#F8B15B" />
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="11" width="29" height="29">
                            <rect x="9.79" y="11" width="28" height="28" fill="white" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M23.79 25C22.2775 25 20.9827 24.4614 19.9057 23.3843C18.8286 22.3072 18.29 21.0124 18.29 19.5C18.29 17.9876 18.8286 16.6928 19.9057 15.6157C20.9827 14.5386 22.2775 14 23.79 14C25.3025 14 26.5973 14.5386 27.6744 15.6157C28.7515 16.6928 29.29 17.9876 29.29 19.5C29.29 21.0124 28.7515 22.3072 27.6744 23.3843C26.5973 24.4614 25.3025 25 23.79 25ZM12.79 33.25V32.15C12.79 31.3708 12.9906 30.6547 13.3916 30.0015C13.7926 29.3484 14.3255 28.85 14.99 28.5062C16.4109 27.7958 17.8546 27.263 19.3213 26.9078C20.788 26.5526 22.2775 26.375 23.79 26.375C25.3025 26.375 26.7921 26.5526 28.2588 26.9078C29.7255 27.263 31.1692 27.7958 32.59 28.5062C33.2546 28.85 33.7874 29.3484 34.1885 30.0015C34.5895 30.6547 34.79 31.3708 34.79 32.15V33.25C34.79 34.0062 34.5208 34.6536 33.9822 35.1922C33.4437 35.7307 32.7963 36 32.04 36H15.54C14.7838 36 14.1364 35.7307 13.5979 35.1922C13.0593 34.6536 12.79 34.0062 12.79 33.25ZM15.54 33.25H32.04V32.15C32.04 31.8979 31.977 31.6687 31.851 31.4625C31.7249 31.2562 31.5588 31.0958 31.3525 30.9812C30.115 30.3625 28.8661 29.8984 27.6057 29.5891C26.3452 29.2797 25.0734 29.125 23.79 29.125C22.5067 29.125 21.2348 29.2797 19.9744 29.5891C18.714 29.8984 17.465 30.3625 16.2275 30.9812C16.0213 31.0958 15.8551 31.2562 15.7291 31.4625C15.6031 31.6687 15.54 31.8979 15.54 32.15V33.25ZM23.79 22.25C24.5463 22.25 25.1937 21.9807 25.7322 21.4422C26.2708 20.9036 26.54 20.2562 26.54 19.5C26.54 18.7437 26.2708 18.0963 25.7322 17.5578C25.1937 17.0193 24.5463 16.75 23.79 16.75C23.0338 16.75 22.3864 17.0193 21.8479 17.5578C21.3093 18.0963 21.04 18.7437 21.04 19.5C21.04 20.2562 21.3093 20.9036 21.8479 21.4422C22.3864 21.9807 23.0338 22.25 23.79 22.25Z" fill="white" />
                        </g>
                    </svg>Color Coding</div>
                    <p className='w-[440px] text-[16px] font-normal  leading-[24px] text-[#516278] mt-1 text-left'>Assign colors to categories for easy visual identification on the map.</p>



                </div>
            </div>


            <div className='ml-5 flex mt-5 p-2  space-between gap-10 flex-wrap md:flex-nowrap'>


                <div className='text-[48px] font-semibold w-[500px] text-left'>Interactive Reading List
                    <p className='text-[16px] text-[#516278] font-medium mb-5'>Your newsletters are turned into a beautiful interactive reading list ready for your whenever you have time to catch up</p>
                    <button className=" text-left non-italic flex items-center gap-[10px] m-5 font-jakarta text-[15px] leading-[24px] font-semibold bg-[#0CC0B1] text-white px-4 py-3 rounded-xl h-[56px]">
                        Join the Wait list
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

                <div>
                    <img className='w-[600px]' src={Box2}></img>
                </div>
            </div>



            <div className="mt-10  flex flex-wrap justify-center gap-6 p-8 bg-[#EFFEFA] ">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-[300px] flex flex-col items-center space-y-4">

                        <img src={card.pic} alt={card.title} className="w-40 h-440 object-contain" />


                        {/* Title */}
                        <h3 className="font-jakarta text-[20px] text-[#0CC0B1] font-semibold text-center">
                            {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[16px] font-medium leading-[24px] text-[#516278] text-center text-[#22272F]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>




            <div className='text-center font-jakarta font-semibold text-[48px] mt-10 ml-16 mr-16'>
                Never Miss Connecting at Conferences
                <p className='text-[16px] font-medium leading-[24px]'>Isn't it just the worst when you hear that you were in the same space as your out-of-state clients/colleagues and didn't realize it until you've returned home and see it on their LinkedIn?! Never again with our conference integration.</p>
                <img src={Box4}></img>
            </div>


        </div>
    )
}

export default Body;
