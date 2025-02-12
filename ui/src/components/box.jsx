/* eslint-disable no-unused-vars */
import React from 'react';

const Box = ({ Rec ,Box1 }) => {
    return (



/*    <div className="w-[600px] h-[477px] p-4 border border-gray-300 rounded-lg shadow-teal-500 bg-white">
            <div className="">
                <div className="flex justify-between items-center gap-4">
                   
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                            <img src="data:image/svg+xml,%3csvg%20width='28'%20height='29'%20viewBox='0%200%2028%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%201000005989'%3e%3cpath%20id='Polygon%205'%20d='M7.79245%204.66091L13.9994%201.07735L20.2063%204.66091V11.828L13.9994%2015.4116L7.79245%2011.828V4.66091Z'%20stroke='%23E37E03'/%3e%3cpath%20id='Polygon%206'%20d='M14.9846%2017.172L21.1915%2013.5884L27.3984%2017.172V24.3391L21.1915%2027.9227L14.9846%2024.3391V17.172Z'%20stroke='%23E37E03'/%3e%3cpath%20id='Polygon%207'%20d='M0.601772%2017.172L6.80869%2013.5884L13.0156%2017.172V24.3391L6.80869%2027.9227L0.601772%2024.3391V17.172Z'%20stroke='%23E37E03'/%3e%3c/g%3e%3c/svg%3e" />

                        </span>
                        <span className="text-xl font-semibold text-[6.622px]">MyNetwork</span>
                    </div>

                    <div className="relative flex items-center w-[310px] border border-gray-300 rounded-md p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M6.87978 6.45929L5.18714 4.76664C5.4498 4.42707 5.59189 4.0119 5.59189 3.57521C5.59189 3.05249 5.38789 2.56236 5.01898 2.19281C4.65008 1.82326 4.15865 1.6199 3.63658 1.6199C3.11451 1.6199 2.62308 1.82391 2.25418 2.19281C1.88463 2.56171 1.68127 3.05249 1.68127 3.57521C1.68127 4.09728 1.88528 4.58871 2.25418 4.95761C2.62308 5.32717 3.11386 5.53052 3.63658 5.53052C4.07327 5.53052 4.48779 5.38843 4.82736 5.12642L6.52001 6.81841C6.52497 6.82338 6.53086 6.82732 6.53735 6.83001C6.54384 6.8327 6.55079 6.83408 6.55781 6.83408C6.56483 6.83408 6.57178 6.8327 6.57827 6.83001C6.58476 6.82732 6.59065 6.82338 6.59561 6.81841L6.87978 6.53489C6.88475 6.52993 6.88869 6.52404 6.89138 6.51755C6.89407 6.51107 6.89545 6.50411 6.89545 6.49709C6.89545 6.49007 6.89407 6.48312 6.89138 6.47663C6.88869 6.47015 6.88475 6.46425 6.87978 6.45929V6.45929ZM4.66898 4.60761C4.39263 4.88331 4.02634 5.03517 3.63658 5.03517C3.24682 5.03517 2.88053 4.88331 2.60418 4.60761C2.32848 4.33126 2.17662 3.96497 2.17662 3.57521C2.17662 3.18545 2.32848 2.81851 2.60418 2.54281C2.88053 2.26711 3.24682 2.11525 3.63658 2.11525C4.02634 2.11525 4.39329 2.26646 4.66898 2.54281C4.94468 2.81916 5.09654 3.18545 5.09654 3.57521C5.09654 3.96497 4.94468 4.33191 4.66898 4.60761Z" fill="#667A91" />
                        </svg>
                        <textarea
                            className="w-[310.64px] h-[7.685px] text-[5.84px] pl-2 outline-none resize-none "
                            placeholder="Search"
                        ></textarea>
                    </div>



                    <div className="flex items-center gap-4 text-[5.84px]">
                        <div>Nature</div>
                        <div>Conference</div>
                        <div>Newsletters</div>


                        <div className='p-1 bg-gray-100  border-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 9" fill="none">
                                <mask id="mask0_6726_236" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="9">
                                    <rect x="0.774658" y="0.0557251" width="8.34264" height="8.34264" fill="#667A91" />
                                </mask>
                                <g mask="url(#mask0_6726_236)">
                                    <path
                                        d="M2.59964 6.62013C2.52577 6.62013 2.46387 6.59516 2.41393 6.54522C2.36393 6.49522 2.33893 6.43326 2.33893 6.35934C2.33893 6.28547 2.36393 6.22357 2.41393 6.17363C2.46387 6.12374 2.52577 6.0988 2.59964 6.0988H2.96732V3.50502C2.96732 3.03755 3.11161 2.62421 3.40018 2.26501C3.6887 1.90581 4.05913 1.67607 4.51149 1.57579V1.35923C4.51149 1.23855 4.5537 1.13594 4.63811 1.05142C4.72252 0.966948 4.82501 0.924713 4.94557 0.924713C5.06619 0.924713 5.16882 0.966948 5.25347 1.05142C5.33817 1.13594 5.38052 1.23855 5.38052 1.35923V1.57579C5.83287 1.67607 6.20331 1.90581 6.49183 2.26501C6.7804 2.62421 6.92469 3.03755 6.92469 3.50502V6.0988H7.29237C7.36624 6.0988 7.42814 6.12377 7.47808 6.17371C7.52808 6.22371 7.55308 6.28567 7.55308 6.3596C7.55308 6.43347 7.52808 6.49537 7.47808 6.54531C7.42814 6.59519 7.36624 6.62013 7.29237 6.62013H2.59964ZM4.9454 7.59614C4.77246 7.59614 4.62461 7.53461 4.50185 7.41155C4.37902 7.2885 4.31761 7.14056 4.31761 6.96774H5.5744C5.5744 7.14114 5.51281 7.28922 5.38964 7.41199C5.26647 7.53475 5.11839 7.59614 4.9454 7.59614ZM3.48874 6.0988H6.40327V3.50502C6.40327 3.10261 6.26101 2.75914 5.97649 2.47462C5.69192 2.19004 5.34842 2.04775 4.946 2.04775C4.54359 2.04775 4.20009 2.19004 3.91551 2.47462C3.631 2.75914 3.48874 3.10261 3.48874 3.50502V6.0988Z"
                                        fill="#667A91"
                                    />
                                </g>
                            </svg>
                        </div>


                        <div>
                            <img
                                src={Rec}
                                height={13.348}
                                width={13.348}
                                alt="icon"
                                onError={(e) => console.log("Image failed to load", e)}
                            ></img>

                        </div>

                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
    <div className="text-[10.01px] font-semibold leading-[15.851px] flex items-center gap-1">
        MyNetwrk
        <div className="w-4 h-4 flex items-center justify-center bg-[#0CC0B1] rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M4 1V7M1 4H7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>

<div className='text-[5.84px] leading-[9.177px]'>Filters :  <span className='text-[#667A91] ml-2 border p-1 rounded-md'>Duplicate Resolution</span> <span className='text-[#667A91] ml-2 border p-1 rounded-md'>Spam Filtering</span></div>

</div>


<div className="flex items-center gap-2 leading-[9.177] text-[5.87px]">
    Categories:
    <span className="flex items-center gap-[3px]">
        <span className="w-2 h-2 bg-blue-800 rounded-sm"></span> Professional
    </span>
    <span className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-600 rounded-sm"></span> Personal
    </span>
    <span className="flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-500 rounded-sm"></span> VIP Clients
    </span>
    <span className="flex items-center gap-2">
        <span className="w-2 h-2 bg-red-600 rounded-sm"></span> Event Contact
    </span>
    <span className="flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-700 rounded-sm"></span> New
    </span>
</div>


*/

 <div>
 <img  src={Box1}></img>

        </div>
    );
};

export default Box;
