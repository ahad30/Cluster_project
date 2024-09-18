/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const BusinessTab = () => {
  return (
    <div className="space-y-4 px-5 lg:px-10 w-full lg:max-w-7xl mx-auto">
    <h2 className="lg:text-3xl text-xs  font-semibold mb-14 text-center uppercase">about product</h2>
    <Tabs>
      <div className="lg:flex gap-5">
        <div className="lg:border-r-2 lg:border-r-blue-gray-100 lg:h-[550px] lg:me-5">
          <TabList className="flex flex-col gap-y-2 lg:me-4 text-center lg:text-start list-none">
            <Tab
              className="py-2 px-4 border-2 border-gray-300  cursor-pointer outline-none lg:w-[250px]"
              selectedClassName="bg-green-500 text-white "
            >
              Advantages
            </Tab>
            <Tab
              className="py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none"
              selectedClassName="bg-green-500 text-white"
            >
              Characteristics
            </Tab>
            <Tab
              className="py-2 px-4 border-2 border-gray-300 cursor-pointer outline-none"
              selectedClassName="bg-green-500 text-white"
            >
              System requirements
            </Tab>
          </TabList>
        </div>

        <div className="mt-5 lg:mt-0">
          <TabPanel>
         <div className="space-y-4 lg:w-[800px]">
         <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Reliable protection of computer in the network
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
              Cluster Antivirus for Business is a modern solution created to form reliable cyber protection of corporate clients. A distinctive feature of this product is the format of total protection of organization against all types of cyber threats with possibility of centralized management of antivirus software.<br/><br />


 

Work computers of the network (client side) of organizations will be protected by product of “Internet Security” class with daily updates of virus signatures.<br/><br />

 

Features of Cluster Antivirus for Business allow to set complete protection of PCs in the organization against all types of cyber threats, including Trojans, network worms, virus threats, exploits, backdoors and many others.
              </p>
            </details>
            
            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"

            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Single Center for updates
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
                Cluster Antivirus for Business is a comprehensive product for cyber defense. Antivirus’ structure is designed to facilitate its management and thin customization.<br/><br/>
  
  Update of antivirus databases on computers of an organization is centralized and does not require every separate PC to be connected to the Internet. All updates for PCs inside the corporate network will be received from the server side of the antivirus, which must have access to all PCs.<br/><br/>
  
  This algorithm helps solve several important system tasks that arise when using other corporate antiviruses:<br/><br/>
  
  <ul>
    <li>Reduced work time with 1 PC in the scale of total time of service</li>
    <li>Increased security of distribution of updates by means of a reliable and centralized computer of the administrator</li>
    <li>Minimizing the interference of employees in the work of antivirus software</li>
    <li>Minimizing the time expenses on setting and updating of antivirus</li>
  </ul>
              </div>
            </details>

            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
            
            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Quick informing of the administrator about the online dangers
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
              Centralized management of corporate version of Cluster Antivirus for Business allows to keep-in-touch the system of cyber security of the company 24/7/365.<br/><br/>

 

Management of the entire system of antivirus protection via a single main computer allows most effectively and efficiently to respond to emerging threats or possible hacker attacks.
<br/><br/>
 

IT administrator has the ability to monitor the status of system protection online. All events associated with the detection of virus threats to PCs of the network will be recorded by antivirus and reflected in the administration panel as messages.
<br/><br/>
 

Thus, an expert on cyber security in the company will be able to promptly respond to emerging threats and to minimize the consequences by means of own professional actions.
              </p>
            </details>

            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
           
            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Enhanced possibilities of protection’s administration
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
              The system administrator has access to features that will make managing a system of virus protection easy and convenient:<br/><br/>
  
  <ul>
    <li>Automated (remote) and local (manual) installation of antivirus protection on computers.</li>
    <li>Managing client side via the Internet (using the IP address of the server).</li>
    <li>Control of the defense of network’s computers: launching scans, viewing current events and history, queuing of tasks, performing actions over the found threats, setting the software and system firewall rules, individual settings of client-side antivirus from the administration panel.</li>
    <li>Creating groups that will allow performing group management of computers in the network.</li>
    <li>Securing settings by password.</li>
    <li>Reception of reports.</li>
  </ul>
              </div>
            </details>
            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
              
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Autonomy of client side
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
              With all unquestionable pros of a centralized control system of cybersecurity built on the basis of Cluster Antivirus for Business, the program also has the ability to control local antivirus software on work PCs. Wherever necessary, the IT security expert of the company may input changes in the antivirus program on the client side directly on the required PC.<br/><br/>

This is possible with the administrator password. The user of the client side of the antivirus has the opportunity to perform actions at his own discretion:<br/><br/>

<ul>
  <li>Run the scan, perform actions on threats;</li>
  <li>Update the virus databases and program modules;</li>
  <li>Change settings of file monitor "Guardian", firewall, WEB-filter, and USB-defense.</li>
</ul><br/>

Such manipulations allow for additional checks of the system of cyber protection at a local PC. In some cases, this extremely handy feature allows for fine-tuning a single personal computer to follow unique needs and objectives.

              </div>
            </details>
            
            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"

            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                The possibility of on-line and off-line product activation
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <div className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
              Commercial license can be activated in two ways:<br/><br/>
  
  <ul>
    <li>Using the activation code made of 32 characters via the Internet. This code is issued to the user automatically and is used for the standard priority product activation. It can be used again after changes in the local network, reinstallation of Cluster Antivirus for Business, and so on.</li>
    <li>Via a license key that does not require an Internet connection at the time of activation. This license key is issued to the user upon request and is used as an emergency, backup method. Using this way, it is recommended to connect to the Internet as soon as possible, as it is necessary for the correct functioning of the product (virus database updates, software modules updates, etc.)!</li>
  </ul>
              </div>
            </details>

         </div>
          </TabPanel>

          <TabPanel>
          <div className="space-y-4 lg:w-[700px]">


            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
            
            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Main components
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
            <b>  Admin panel</b> – central management of all client sides and settings of Antivirus server.

 

Allows to adjust the setting and monitoring of the system of anti-virus protection of entire system of cyber security of the company and local PCs. This component is a coordinating hub of corporate informational security system, based on Cluster Antivirus for Business.<br/><br/>

 

<b>Antivirus server</b> – a program that brings together all client sides and allows to manage them through the Admin Panel; distributes updates. Update of antivirus databases on computers of organization is centralized and does not require a separate PC to be connected to the Internet. All updates on PCs from the network will be received from the server side of anti-virus <br/><br/>

 

<b>The client part</b> – programs that are installed on each of the protected PCs directly, performing the functions of anti-virus protection and others. As a result, work computer of the network of organization will be protected by the product of “Internet Security” class with daily virus databases updates, ensuring complete users protection from all types of cyber threats.
              </p>
            </details>

            <details
              className="group border-s-4 border-green-500 bg-gray-50 px-3 py-3 [&_summary::-webkit-details-marker]:hidden"
           
            >
              <summary className="flex w-full cursor-pointer items-center justify-between 
              gap-1.5">
                <h2 className="text-xs lg:text-lg font-medium text-gray-900">
                Protection modules
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="text-justify text-xs mt-3 lg:mt-0 lg:text-sm text-gray-700">
  <strong>Antivirus</strong> – can detect and neutralize malicious software on the user’s PC. Items falling under the examination: the files on hard disk, USB drives, operative memory, e-mails.<br/><br/>

  <strong>This module is the basis of the entire system of security</strong> that is based on Cluster Antivirus for Business. A unique feature of this module is the availability of a modern, updated daily virus signature database. It should be noted that these data do not overload any server or local PC, since the base is optimized and modernized. Thus, work with it does not affect the speed of the central computer and, especially, local workstation, and does not lead to hanging down or slowing of the PC.<br/><br/>

  <strong>The firewall</strong> – controls the access of installed programs to the network and sets up advanced options. Two modes are available: automatic and interactive (with the possibility of independent processing of each application).<br/><br/>

  <strong>The presence of a firewall in a modern version of corporate antivirus</strong> is a critical necessity. This module can significantly reduce the possibility of infection by malware while surfing the Internet. In addition, the firewall blocks the action of malware that might get on the workstation in case of unauthorized attempts to upload information from the Internet to receive other harmful components, fraudulent, or new spyware.<br/><br/>

  <strong>Web Filter</strong> – controls access of the PC to the set online resources: a centralized list of undesirable sites.<br/><br/>

  <strong>The module allows creating your own “black lists”</strong> of undesirable Internet resources containing questionable or frankly objectionable material. Web Filter can also be used as an important part of an anti-phishing security system built on databases of known spyware sites or suspicious resources that may be involved in fraudulent activity.<br/><br/>

  <strong>USB-protection</strong> – checks flash drives for viruses, analyzes the likelihood of infection of the carrier, and offers a scan on demand.<br/><br/>

  <strong>Checking USB drives still remains an important aspect</strong> of total cyber security because they are possible carriers of malware. The USB-protection module integrated into Cluster Antivirus for Business scans USB devices connected to the computer for the presence of malware and prevents them from entering the secured PC.
</p>

            </details>



         </div>
          </TabPanel>

          <TabPanel>
          <h2 class="text-xs lg:text-lg font-semibold text-gray-800 mb-4">
  Minimum system requirements of Cluster Antivirus:
</h2>
<ul class="list-disc list-inside space-y-2 text-gray-700">
  <li><span class="font-semibold">Processor Speed</span> – 1 GHz and higher;</li>
  <li><span class="font-semibold">RAM</span> – 1GB and more;</li>
  <li><span class="font-semibold">Hard disk space</span> – 1500 MB;</li>
  <li>
    <span class="font-semibold">Operating System</span> – Windows XP (SP3), Windows 7 (x32, x64) (+SP1), Windows 8, 8.1 (x32, x64), Windows 10 (x32, x64), Windows 11 (x32, x64);
  </li>
  <li>
    <span class="font-semibold">Screen resolution</span> – 1024 x 768 or higher (for correct display of texts in the antivirus, the font size should not exceed 100% (the parameter is specified in the operating system settings in the display settings section).
  </li>
</ul>
<p class="mt-4 text-gray-700 italic">
  * One PC means one operating system (OS)
</p>
<p class="mt-2 text-gray-700">
  <span class="font-semibold">Program Version:</span> 3.0.2368.0
</p>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  </div>
  )
}

export default BusinessTab
