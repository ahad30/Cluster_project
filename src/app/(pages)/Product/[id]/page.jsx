"use client";
import React, { useMemo, useState } from "react";
import product1Image from "../../../../../public/Products/Elements/Product-1.png";
import product2Image from "../../../../../public/Products/Elements/Security-1.png";
import product3Image from "../../../../../public/Products/Elements/Product-3.png";
import Image from "next/image";
import P1Icon1 from "../../../../../public/Products/Elements/Product-2/P1Icon1.png";
import P1Icon2 from "../../../../../public/Products/Elements/Product-2/P1Icon2.png";
import P1Icon3 from "../../../../../public/Products/Elements/Product-2/P1Icon3.png";

import P2Icon1 from "../../../../../public/Products/Elements/Product-2/P2Icon1.png";
import P2Icon2 from "../../../../../public/Products/Elements/Product-2/P2Icon2.png";
import P2Icon3 from "../../../../../public/Products/Elements/Product-2/P2Icon3.png";
import P2Icon4 from "../../../../../public/Products/Elements/Product-2/P2Icon4.png";
import P2Icon5 from "../../../../../public/Products/Elements/Product-2/P2Icon5.png";
import P2Icon6 from "../../../../../public/Products/Elements/Product-2/P2Icon6.png";
import P2Icon7 from "../../../../../public/Products/Elements/Product-2/P2Icon7.png";
import P2Icon8 from "../../../../../public/Products/Elements/Product-2/P2Icon8.png";
import P2Icon9 from "../../../../../public/Products/Elements/Product-2/P2Icon9.png";
import P3Icon1 from "../../../../../public/Products/Elements/Product-2/P3Icon1.png";
import P3Icon2 from "../../../../../public/Products/Elements/Product-2/P3Icon2.png";

import ProductDetailsTab from "../ProductDetailsTab";
import { FaCartShopping } from "react-icons/fa6";
import IconList from "../IconList";

const ProductDetails = ({ params }) => {
  
  const products = [
    //  Prouct 1
    {
      id: 1,
      image: product1Image,
      title: "Cluster Antivirus",
      description: "Advanced Security for small and medium companies.",
      price: "490",
      icons: [
        {
          icon: P2Icon1,
          title: "Anti-virus",
          descriptionIcon: P2Icon1,
          descriptionTitle: "Anti-virus",
          descriptionText: "Includes full features of the antivirus.",
        },
        {
          icon: P1Icon1,
          title: "Mail-filter",
          descriptionIcon: P1Icon1,
          descriptionTitle: "Mail-filter",
          descriptionText: "Scans email for threats.",
        },
        {
          icon: P1Icon2,
          title: "USB-protection",
          descriptionIcon: P1Icon2,
          descriptionTitle: "USB-protection",
          descriptionText:
            "Makes penetration of virus threats via removable drives impossible.",
        },
        {
          icon: P2Icon7,
          title: "User-friendly interface",
          descriptionIcon: P2Icon7,
          descriptionTitle: "User-friendly interface",
          descriptionText: "Has a simple and friendly user interface.",
        },
        {
          icon: P2Icon8,
          title: "Operative support",
          descriptionIcon: P2Icon8,
          descriptionTitle: "Operative support",
          descriptionText:
            "Provides round-the-clock telephone support for users.",
        },
        {
          icon: P1Icon3,
          title: "Better price",
          descriptionIcon: P1Icon3,
          descriptionTitle: "Better price",
          descriptionText: "Buy only 25 USD per year.",
        },
      ],
      description: [
        {
          title: "Reliable protection against viruses",
          childDescription: `The antivirus protects your PC from viruses, spyware, Trojans, and other malicious programs.<br/><br/>
      
      The core of data protection against all types of malware is built on an up-to-date virus database containing over 15 million malware signatures, along with an advanced proactive protection.<br/><br/>
      
      This module forms the backbone of the entire security system, based on the Cluster! Internet Security product. A unique feature of this module is its modern virus signature database, which is updated daily. Notably, this data does not overload either the server or the local PC, as the database is optimized and modernized. As a result, it does not affect the computer's performance or cause it to hang or slow down.`,
        },

        {
          title: "Low System Resource Consumption",
          childDescription: `The antivirus utilities will not overload your PC, as they consume no more than 512 MB of RAM.<br/><br/>

This level of resource consumption is acceptable not only for modern personal computers but also for those manufactured 3-5 years ago. While Cluster Anti-Virus is running, it does not block or slow down even the most basic computers.`,
        },
        {
          title: "Complete and Free Technical Support",
          childDescription: `
        The main rule of Cluser is "Anti-virus protection is, above all, high-quality service". The basis of a successful tech support is in-depth knowledge of the products, the desire to "listen" to user, to present information on the level at which it is clear to them. The secret of success is in the desire, the ability will also come.<br/><br/>

The desire to understand the user and to help him or her is one of the tenets of the successful technical support.<br/><br/>

Recommendations of highly qualified specialist, described by "cool" slang, may be "empty words" for the client. While the help provided in simple terms, are a recipe for the solution of user's problems and the key to professionalism in the eyes of the user.`,
        },
        {
          title: "Daily Antivirus Database Updates for Full PC Protection",
          childDescription: `Antivirus Lab of Cluster releases daily antivirus database updates, which contain the protection from thousands of new threats.<br/><br/>

To make user sure that the attacker would not steal important data or other valuable information from PC, the team of developers constantly analyzes the threats and offers new solutions for the detection of the maximum number of viruses. Currently, anti-virus database of Cluster Antivirus has more than 15 million records.`,
        },
        {
          title: "Behavioral Analyzer (HIPS)",
          childDescription: `The new line of Cluster antivirus products features innovative proactive technologies, including the cutting-edge Behavioral Analyzer (HIPS).<br/><br/>

This advanced technology is one of the most sophisticated solutions in the global antivirus industry. It works by scanning and analyzing programs to detect potential malicious behavior. If HIPS notices that a program may perform actions harmful to your PC, it blocks the program even before it can launch, ensuring your system remains secure.`,
        },
        {
          title: "Function of Self-Defense",
          childDescription: `The new line of antiviruses by Cluster has a function of self-defense.<br/><br/>

It eliminates the possibility of disabling the protection of your PC as a result of the forced stop using the "Task Manager". This feature is implemented as a response to modern Trojans that are able to get administrative rights on the infected PC and block the work of installed programs, including non-modern antiviruses.`,
        },
        {
          title:
            "Using heuristic analysis technology - detection of new and unknown threats",
          childDescription: `Blocking of dangerous sites Heuristic Analyzer scans files with similar characteristics.<br/><br/>

When a certain number of similar data found in the file, it decides that the program is similar to malicious one.<br/><br/>

Thus, Cluster AntiVirus can detect malware that has not yet been added to the antivirus database.<br/><br/>

Cluster Antivirus has a built-in heuristic analyzer and helps to protect the system from even those threats that have not yet appeared, but may appear in the future.`,
        },
        {
          title: "Guard (Patrol)",
          childDescription: `Guard (Patrol) is a real-time file monitoring system designed to detect viruses and other malicious programs as they attempt to infiltrate your computer.<br/><br/>

By continuously scanning files, Guard (Patrol) ensures that any potential threats are identified and neutralized before they can cause harm, providing an additional layer of security to your system.`,
        },
        {
          title: "USB Protection",
          childDescription: `Security module of USB-drives controls the connection of any drive to the USB-ports. Preliminary analysis with following informing of user reliably protects the computer from automatically downloaded objects on disks. So now Cluster will protect you from the automatic start from the flash drive of a virus or worm, even if it is a completely new, unknown virus.<br/><br/>

When connecting a new USB-drive, Cluster detects it, performs a brief analysis and informs the user about the evaluated level of security of the disc. In the case of detection of the viruses or any suspicious objects on the flash drive, antivirus immediately prompts the user to remove them.`,
        },

        {
          title: "Mail Filter",
          childDescription: `Cluster Mail Filter scans all incoming and outgoing emails for malicious content, preventing potential threats from infiltrating your system via email.`,
        },

        {
          title: "Three Types of Scanning",
          childDescription: `<div>
  <h3>Three types of scans can now be run in parallel streams:</h3>
  <ul>
    <li><strong>Fast:</strong> To check the critical areas of the system.</li>
    <li><strong>Full:</strong> To scan all existing files on the computer.</li>
    <li><strong>Selective:</strong> To scan files according to the user's desire.</li>
  </ul>
</div>
`,
        },

        {
          title: "Scan Scheduler",
          childDescription: `You do not need to remind yourself every day that you need to check your computer for malware.<br/><br/>

CLuster Antivirus contains a function of Scheduler - the scannig of the PC, which can be configured in the most convenient way for you. The user can configure automatic scan one-time, daily, hourly, weekly or monthly.`,
        },
      ],
    },

    //  Prouct 2

    {
      id: 2,
      image: product2Image,
      title: "Cluster! Internet Security",
      description: "Solution which is ideal for active internet users",
      icons: [
        {
          icon: P2Icon1,
          title: "Anti-virus",
          descriptionIcon: P2Icon1,
          descriptionTitle: "Anti-virus",
          descriptionText: "Includes full features of the antivirus.",
        },
        {
          icon: P2Icon2,
          title: "Anti-phishing",
          descriptionIcon: P2Icon2,
          descriptionTitle: "Anti-phishing",
          descriptionText:
            "Blocks websites designed to steal personal user data.",
        },
        {
          icon: P2Icon3,
          title: "Anti-spam",
          descriptionIcon: P2Icon3,
          descriptionTitle: "Anti-spam",
          descriptionText:
            "Blocks penetration of spam messages on the user's PC.",
        },
        {
          icon: P2Icon4,
          title: "Firewall",
          descriptionIcon: P2Icon4,
          descriptionTitle: "Firewall",
          descriptionText:
            "Sets the rules of incoming and outgoing connections for programs installed on your PC.",
        },
        {
          icon: P2Icon5,
          title: "PC Optimizer",
          descriptionIcon: P2Icon5,
          descriptionTitle: "PC Optimizer",
          descriptionText:
            "Allows identifying junk system files and freeing more disk space.",
        },
        {
          icon: P2Icon6,
          title: "Virtual Keyboard",
          descriptionIcon: P2Icon6,
          descriptionTitle: "Virtual Keyboard",
          descriptionText: "Saves the password from being stolen by hackers.",
        },
        {
          icon: P2Icon7,
          title: "User-friendly interface",
          descriptionIcon: P2Icon7,
          descriptionTitle: "User-friendly interface",
          descriptionText: "Has a simple and friendly user interface.",
        },
        {
          icon: P2Icon8,
          title: "Real-time support",
          descriptionIcon: P2Icon8,
          descriptionTitle: "Real-time support",
          descriptionText:
            "Provides round-the-clock telephone support for users.",
        },
        {
          icon: P2Icon9,
          title: "High performance",
          descriptionIcon: P2Icon9,
          descriptionTitle: "High performance",
          descriptionText: "Consumes low system resources.",
        },
      ],
      price: "1099",
      description: [
        {
          title: "Reliable protection against viruses",
          childDescription:
           `Antivirus protects your PC from viruses, spyware, Trojans and other malicious programs.<br/><br/>

The basis of data protection against all types of malicious software is built on the use of the actual virus database, containing over 15 million malware's signatures and advanced module of proactive protection.<br/><br/>

This module is the core of the entire security system, which is based on the basis of Cluster Internet Security product. A unique feature of this module is modern virus signature database that is updated every day. It should be noted that such data do not overload neither server nor local PC, as the database is optimized and modernized. Thus, work with it does not affect the computer's performance and does not lead to hanging or slowing down of PC.`,
        },
        {
          title: "The complexity of Internet protection",
          childDescription:
            'It is performed by means of a powerful firewall and WEB-filter, capable of up-to-date data check that come on the user\'s PC and to block sites with detected threats.<br/><br/>The presence of a firewall in the modern version of antivirus is a critical necessity. This module allows to significantly reduce the possibility of infection by malware via the Internet surfing. In addition, the firewall blocks the actions of malware that might get on the PC as unauthorized attempt to upload information from the Internet, reception of additional malicious components, new fraudulent or spyware capabilities.<br/><br/>The module allows to create your own "black lists" of undesirable Internet resources containing dubious or frankly objectionable materials. Web filter can also be used as an important part of anti-phishing security system based on databases of known spyware sites or suspicious sites that could potentially be involved in fraudulent activity.',
        },
        {
          title: "Low level of PC download",
          childDescription:
            "Utilities will not overload your PC, because anti-virus consumes no more than 512 MB of PC's RAM.<br/><br/>It should be noted that such level of consumption is acceptable not only for modern personal computers, but also for those, which were manufactured 3-5 years ago. During Cluster Internet Security work, it does not block nor slow down the most unpretentious computers.",
        },
        {
          title: "Complete and free technical support",
          childDescription:
            'The main rule of Cluster is "Anti-virus protection is, above all, high-quality service".<br/><br/>The basis of a successful tech support is in-depth knowledge of the products, the desire to "listen" to user, to present information on the level at which it is clear to them. The secret of success is in the desire, the ability will also come.<br/><br/>The desire to understand the user and to help him or her is one of the tenets of the successful technical support. Recommendations of highly qualified specialist, described by "cool" slang, may be "empty words" for the client. While the help provided in simple terms, are a recipe for the solution of user\'s problems and the key to professionalism in the eyes of the user.',
        },
        {
          title: "Additional modules of the product",
          childDescription:
            '<strong>Optimizer</strong> is a tool that speeds up your PC. The software module allows to find unnecessary files and programs that overload operating system, and to remove them. The principle of its work is based on check of certain computer memory locations where temporary files are stored. To such categories optimizer attributes browsers\' cache, search history, which they store, OS updates, "service" files and so on.<br/><br/>After scanning, the tool displays a list of all files, which are offered to be removed, and - most importantly, - their size alone, and the total amount of memory that will be released. The decision about removal takes user directly.<br/><br/><strong>File Shredder</strong>  is a special program that allows to safely remove the most unwanted sensitive files without the possibility of their recovery.<br/><br/>The way of operation of programs-shredders is that the file that is planned to be removed, is subjected to multi wipe-off. In fact, it is filled with meaningless information garbage (random numbers, characters, symbols etc.), which completely distorts its contents, without the restoration possibility. After this, it is removed from the hard drive. Even if such file would ever be found by hackers and they would try to restore it, they would not receive any benefit from such actions.',
        },
        {
          title: "A complete set of antivirus functionality",
          childDescription:
            "<p>Cluster Internet Security performs all the functions of antivirus protection, and contains:<ul><li>System File Checker in real time, which is designed to detect viruses and other malicious programs that try to penetrate the PC;</span></li><li>Mail-filter - Mail filter checks all incoming and outgoing email messages for malicious objects, thus avoiding possible threats of infiltration in the system by means of e-mail.</span></li><li>The heuristic analyzer that identifies new viruses, the detection entries for which are absent in the antivirus database;</span></li><li>Three types of scanning:​</span></span></li>\n</ul><p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fast.</strong> To check the critical areas of the system;</span></p><p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Full.</strong> To scan all existing files on the computer;</span></p><p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Selective.</strong> To scan files according to the user's desire.</span></p><p>&nbsp;</p><ul><li>Daily updates of antivirus databases for full protection of your PC.</span></li>\n</ul>",
        },

        {
          title: "Program-level firewall",
          childDescription:
            "<ul><li>The automatic operative mode.</span></li>\n</ul><p>For users who do not have certain knowledge and skills to work with a firewall and its settings, has been implemented the automatic operative mode. In this mode, for applications that require for their work access to the network, automatically created rules that allow only outgoing traffic. This allows to optimally configure the security of the system, without any action from the user.</span><br />&nbsp;</p><ul><li>Interactive mode is for experienced users.</span></li>\n</ul><p>In that case, if the user knows how to create firewall rules correctly, the product has an interactive mode. In this mode, user has 4 options:<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Block all </strong>- completely blocks incoming and outgoing traffic for all applications;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Allow all</strong> - allows all incoming and outgoing traffic;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Allow only outgoing</strong> - allows the application to have only outgoing traffic;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Create a separate rule</strong> - allows to fully customize individual access parameters:<br />&nbsp;<br />&nbsp;&nbsp; - to enable or disable a specific address (single address, range of addresses, the IP-addresses’ mask);<br />&nbsp;<br />&nbsp;&nbsp; - to open or close specific ports (or to apply the rule to all ports for the application, to select the direction of traffic for these settings, to specify the protocol).</span><br />&nbsp;</p><ul><li>&nbsp;Control of applications’ access to the network.</span></li>\n</ul><p>The firewall keeps track of all applications that attempt to access the network - both incoming and outgoing traffic;</span><br />&nbsp;</p><ul><li>&nbsp;Protection against external attacks.</span></li>\n</ul><p>By default, the firewall allows applications only outgoing traffic. This allows to protect the system from attempts to access to it from the outside, since any incoming requests will be blocked.</span><br />&nbsp;</p><ul><li>&nbsp;Built-in set of rules.</span></li>\n</ul><p>The program has a built-in database containing all the necessary rules to allow or to block (defined by the user) standard system services and protocols (NetBios, DHCP, DNS etc.) for work with the network. With their help, user can allow or block network activity on such protocols, leaving aside the intricacies of their work.</span><br />&nbsp;</p><ul><li>&nbsp;The ability to set general settings for all applications in the system.</span></li>\n</ul><p>Cluster Internet Security is able to set general settings for all applications. For example, the user requires that all applications had access to a particular server. To do this, in the settings must be a rule that will allow access to a specific IP-address and to a specific port. And no longer will be necessary to create separate rules for access to this server for each application.",
        },

        {
          title: "Inspector security (Behavioral analyzer)",
          childDescription:
            "<p>Products of new line have received innovative proactive technologies. One of the most important modules of all rage of antiviruses by Cluster is the presence of so-called behavioral analyzer (HIPS).<br />&nbsp;<br />This unique technology is the most advanced solution, which is implemented in the world's anti-virus industry. The essence of its work is scanning and analysis of programs, to determine likelihood of malicious behavior. If HIPS eoul notive that some program performs actions that could potentially harm your PC, it will be blocked even before its launch.</span></p>",
        },
        {
          title: "Function of self-defense",
          childDescription:
            '<p>The new line of antiviruses by Cluster has a function of self-defense.<br />&nbsp;<br />It eliminates the possibility of disabling the protection of your PC as a result of the forced stop using the "Task Manager". This feature is implemented as a response to modern Trojans that are able to get administrative rights on the infected PC and block the work of installed programs, including non-modern antiviruses.</span></p>',
        },
        {
          title: "WEB-filter (protection of HTTP-traffic)",
          childDescription:
            "<ul><li>Blocking of dangerous sites.</span></li>\n</ul><p>Cluster Internet Security has the ability to block access to potentially dangerous sites, stopping them from loading when viewed in a browser. In this case, the user sees a message;</span><br />&nbsp;</p><ul><li>Block of potentially dangerous content from suspicious sites.</span></li>\n</ul><p>Some sites are added to the base of Cluster Internet Security as suspicious, or sites that have malicious content. If a site is in the list, you will be able to visit it, to view the pages, images, but you will not be able to download from this resource programs, files, documents and other files that may harm your computer.</span><br />&nbsp;</p><ul><li>Create your own list of blocked sites.</span></li>\n</ul><p>In the WEB-filter, there is a possibility, in addition to the built-in database of blocked sites, to create your own list of sites that the user, for whatever reason, considers undesirable. To this personal base subjected the same rules that apply to the built-in base.</span></p>",
        },
        {
          title: "USB - protection",
          childDescription:
            "Security module of USB-drives controls the connection of any drive to the USB-ports. Preliminary analysis with following informing of user reliably protects the computer from automatically downloaded objects on disks. So now Cluster will protect you from the automatic start from the flash drive of a virus or worm, even if it is a completely new, unknown virus.<br><br>When connecting a new USB-drive, Cluster detects it, performs a brief analysis and informs the user about the evaluated level of security of the disc. In the case of detection of the viruses or any suspicious objects on the flash drive, antivirus immediately prompts the user to remove them.",
        },

        {
          title: "Mail Filter",
          childDescription:
            "<p>Mail filter checks all incoming and outgoing email messages for malicious objects, thus avoiding possible threats of infiltration in the system by means of e-mail.</p>",
        },
        {
          title: "Anti-Spam",
          childDescription:
            '<p>The modules are built on the principle of proactive technologies. They allow to set up a "black list" of e-mail addresses and websites that have been seen in spam mailings and phishing activity.<br><br>For example, Anti-Spam allows to make flexible adjustment of blocked messages. You can set the filter by sender, recipient, title, or subject. This will significantly reduce the probability of receiving unwanted emails. </p>',
        },
        {
          title: "Anti-fishing",
          childDescription:
            "Anti-fishing allows to avoid sites that have phishing activity, steal user data and are used by cybercriminals for illegal enrichment.",
        },
        {
          title: "PC Optimization",
          childDescription:
            'Optimizer is a tool that speeds up your PC. The software module allows to find unnecessary files and programs that overload operating system, and to remove them.<br><br>The principle of its work is based on check of certain computer memory locations where temporary files are stored. To such categories optimizer attributes browsers\' cache, search history, which they store, OS updates, "service" files and so on.<br><br>After scanning, the tool displays a list of all files, which are offered to be removed, and - most importantly, - their size alone, and the total amount of memory that will be released. The decision about removal takes user directly.',
        },
        {
          title: "File Shredder",
          childDescription:
            "It is a special program that allows to safely remove the most unwanted sensitive files without the possibility of their recovery.<br><br>The way of operation of programs-shredders is that the file that is planned to be removed, is subjected to multi wipe-off. In fact, it is filled with meaningless information garbage (random numbers, characters, symbols etc.), which completely distorts its contents, without the restoration possibility. After this, it is removed from the hard drive. Even if such file would ever be found by hackers and they would try to restore it, they would not receive any benefit from such actions.",
        },
      ],
    },
    //  Prouct 3

    {
      id: 3,
      image: product3Image,
      title: "Cluster! Total Security",
      description:
        "Product which will provide you the highest level of protection",
      price: "1450",
      icons: [
        {
          icon: P2Icon4,
          title: "Firewall",
          descriptionIcon: P2Icon4,
          descriptionTitle: "Firewall",
          descriptionText:
            "Sets the rules of incoming and outgoing connections for programs installed on your PC.",
        },
        {
          icon: P2Icon2,
          title: "Anti-phishing",
          descriptionIcon: P2Icon2,
          descriptionTitle: "Anti-phishing",
          descriptionText:
            "Blocks websites designed to steal personal user data.",
        },
        {
          icon: P2Icon3,
          title: "Anti-spam",
          descriptionIcon: P2Icon3,
          descriptionTitle: "Anti-spam",
          descriptionText:
            "Blocks penetration of spam messages on the user's PC.",
        },
        {
          icon: P3Icon1,
          title: "Parental control",
          descriptionIcon: P3Icon1,
          descriptionTitle: "Parental control",
          descriptionText:
            "Provides parents an effective tool for monitoring of child's activity on the PC.",
        },
        {
          icon: P2Icon5,
          title: "Optimizer PC",
          descriptionIcon: P2Icon5,
          descriptionTitle: "Optimizer PC",
          descriptionText:
            "Allows to identify junk system files and to free more disk space.",
        },
        {
          icon: P2Icon6,
          title: "Process Manager",
          descriptionIcon: P2Icon6,
          descriptionTitle: "Process Manager",
          descriptionText:
            "Allows you to control and manage running applications and processes.",
        },
        {
          icon: P2Icon8,
          title: "Startup Manager",
          descriptionIcon: P2Icon8,
          descriptionTitle: "Startup Manager",
          descriptionText:
            "Utility of workload optimization has been designed to increase the speed of your PC.",
        },
        {
          icon: P3Icon2,
          title: "Privacy protection",
          descriptionIcon: P3Icon2,
          descriptionTitle: "Privacy protection",
          descriptionText:
            "Program that allows to remove traces of the user's work on PC.",
        },
        {
          icon: P2Icon8,
          title: "Operative support 24/7",
          descriptionIcon: P2Icon8,
          descriptionTitle: "Operative support 24/7",
          descriptionText: "Round-the-clock telephone support for users.",
        },
      ],

      description: [{
        title: "Reliable protection against viruses",
        childDescription:
          "Antivirus protects your PC from viruses, spyware, Trojans and other malicious programs.<br/><br/>The basis of data protection against all types of malicious software is built on the use of the actual virus database, containing over 15 million malware's signatures and advanced module of proactive protection.<br/><br/>This module is the core of the entire security system, which is based on the basis of Cluster Internet Security product. A unique feature of this module is modern virus signature database that is updated every day. It should be noted that such data do not overload neither server nor local PC, as the database is optimized and modernized. Thus, work with it does not affect the computer's performance and does not lead to hanging or slowing down of PC.",
      },
   {
        title: "The complexity of Internet protection",
        childDescription:
          'It is performed by means of a powerful firewall and WEB-filter, capable of up-to-date data check that come on the user\'s PC and to block sites with detected threats.<br/><br/>The presence of a firewall in the modern version of antivirus is a critical necessity. This module allows to significantly reduce the possibility of infection by malware via the Internet surfing. In addition, the firewall blocks the actions of malware that might get on the PC as unauthorized attempt to upload information from the Internet, reception of additional malicious components, new fraudulent or spyware capabilities.<br/><br/>The module allows to create your own "black lists" of undesirable Internet resources containing dubious or frankly objectionable materials. Web filter can also be used as an important part of anti-phishing security system based on databases of known spyware sites or suspicious sites that could potentially be involved in fraudulent activity.',
      },
   {
        title: "Low level of PC download",
        childDescription:
          "Utilities will not overload your PC, because anti-virus consumes no more than 512 MB of PC's RAM.<br/><br/>It should be noted that such level of consumption is acceptable not only for modern personal computers, but also for those, which were manufactured 3-5 years ago. During Cluster Internet Security work, it does not block nor slow down the most unpretentious computers.",
      },
   {
        title: "Complete and free technical support",
        childDescription:
          'The main rule of Cluster is "Anti-virus protection is, above all, high-quality service".<br/><br/>The basis of a successful tech support is in-depth knowledge of the products, the desire to "listen" to user, to present information on the level at which it is clear to them. The secret of success is in the desire, the ability will also come.<br/><br/>The desire to understand the user and to help him or her is one of the tenets of the successful technical support. Recommendations of highly qualified specialist, described by "cool" slang, may be "empty words" for the client. While the help provided in simple terms, are a recipe for the solution of user\'s problems and the key to professionalism in the eyes of the user.',
      },
   {
        title: "Additional modules of the product",
        childDescription:
         `<div>
  <strong>Optimizer:</strong> Optimizer is a tool that speeds up your PC. The software module allows finding unnecessary files and programs that overload the operating system and removing them. The principle of its work is based on checking certain computer memory locations where temporary files are stored. Such categories include browser caches search history, OS updates "service" files, and so on.<br><br>
  
  After scanning, the tool displays a list of all files offered for removal and, most importantly, their size and the total amount of memory that will be released. The decision about removal is made directly by the user.<br><br>
  
  <strong>Parental Control:</strong> Parental Control is a module that allows parents to control the websites visited by young PC users that they find undesirable.<br><br>
  
  It is important to understand that the essence of "Parental Control" is to create a safe informational space for the child. Modern parental control programs are complex filters that prevent minors from visiting certain sites, the content of which, according to their parents, is undesirable for viewing.<br><br>
  
  <strong>Process Manager:</strong> The Process Manager acts as a built-in controller of applications and processes, allowing you to control and manage running applications and processes.<br><br>
  
  Process Manager provides the user with information on currently running applications and services and data on resource consumption. The utility allows forcibly terminating undesirable processes if they hang or excessively use memory, which could adversely affect PC performance.<br><br>
  
  <strong>Startup Manager:</strong> The Startup Manager utility optimizes workload by allowing you to analyze the applications that are loaded at startup and optimize boot time by disabling applications and some system functions that are not used.<br><br>
  
  The utility is designed to increase the speed of your PC.<br><br>
  
  "Startup Manager" allows you to search for programs and services of the operating system that are not used by the user but are still automatically loaded and consume computer resources and to disable their automatic loading.<br><br>
  
  <strong>Privacy Protection:</strong> Privacy Protection is a program that allows the removal of traces of the user's work on the PC. The module searches for configuration and temporary files created during the operation of standard software packages and performs their clean-up.<br><br>
  
  <strong>File Shredder:</strong> File Shredder is a special program that allows the safe removal of unwanted sensitive files without the possibility of their recovery.<br><br>
  
  The way these programs operate is that the file planned for removal is subjected to multiple wipe-offs. It is filled with meaningless information (random numbers, characters, symbols, etc.), which completely distorts its contents without the possibility of restoration. After this, it is removed from the hard drive. Even if such a file were ever found by hackers and they tried to restore it, they would not benefit from such actions.
</div>
`,
      },
   {
        title: "A complete set of antivirus functionality",
        childDescription:
          '<p><span style="font-size:14px">Cluster Internet Security performs all the functions of antivirus protection, and contains:</span><br />&nbsp;</p><ul><li><span style="font-size:14px">System File Checker in real time, which is designed to detect viruses and other malicious programs that try to penetrate the PC;</span></li><li><span style="font-size:14px">Mail-filter - Mail filter checks all incoming and outgoing email messages for malicious objects, thus avoiding possible threats of infiltration in the system by means of e-mail.</span></li><li><span style="font-size:14px">The heuristic analyzer that identifies new viruses, the detection entries for which are absent in the antivirus database;</span></li><li><span style="font-size:14px">Three types of scanning:<span style="font-size:14px">​</span></span></li>\n</ul><p><span style="font-size:14px"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Fast.</strong> To check the critical areas of the system;</span></p><p><span style="font-size:14px"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Full.</strong> To scan all existing files on the computer;</span></p><p><span style="font-size:14px"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Selective.</strong> To scan files according to the user\'s desire.</span></p><p>&nbsp;</p><ul><li><span style="font-size:14px">Daily updates of antivirus databases for full protection of your PC.</span></li>\n</ul>',
      },
   {
        title: "Program-level firewall",
        childDescription:
          '<ul><li><span style="font-size:14px">The automatic operative mode.</span></li>\n</ul><p><span style="font-size:14px">For users who do not have certain knowledge and skills to work with a firewall and its settings, has been implemented the automatic operative mode. In this mode, for applications that require for their work access to the network, automatically created rules that allow only outgoing traffic. This allows to optimally configure the security of the system, without any action from the user.</span><br />&nbsp;</p><ul><li><span style="font-size:14px">Interactive mode is for experienced users.</span></li>\n</ul><p><span style="font-size:14px">In that case, if the user knows how to create firewall rules correctly, the product has an interactive mode. In this mode, user has 4 options:<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Block all </strong>- completely blocks incoming and outgoing traffic for all applications;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Allow all</strong> - allows all incoming and outgoing traffic;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Allow only outgoing</strong> - allows the application to have only outgoing traffic;<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; <strong>Create a separate rule</strong> - allows to fully customize individual access parameters:<br />&nbsp;<br />&nbsp;&nbsp; - to enable or disable a specific address (single address, range of addresses, the IP-addresses’ mask);<br />&nbsp;<br />&nbsp;&nbsp; - to open or close specific ports (or to apply the rule to all ports for the application, to select the direction of traffic for these settings, to specify the protocol).</span><br />&nbsp;</p><ul><li><span style="font-size:14px">&nbsp;Control of applications’ access to the network.</span></li>\n</ul><p><span style="font-size:14px">The firewall keeps track of all applications that attempt to access the network - both incoming and outgoing traffic;</span><br />&nbsp;</p><ul><li><span style="font-size:14px">&nbsp;Protection against external attacks.</span></li>\n</ul><p><span style="font-size:14px">By default, the firewall allows applications only outgoing traffic. This allows to protect the system from attempts to access to it from the outside, since any incoming requests will be blocked.</span><br />&nbsp;</p><ul><li><span style="font-size:14px">&nbsp;Built-in set of rules.</span></li>\n</ul><p><span style="font-size:14px">The program has a built-in database containing all the necessary rules to allow or to block (defined by the user) standard system services and protocols (NetBios, DHCP, DNS etc.) for work with the network. With their help, user can allow or block network activity on such protocols, leaving aside the intricacies of their work.</span><br />&nbsp;</p><ul><li><span style="font-size:14px">&nbsp;The ability to set general settings for all applications in the system.</span></li>\n</ul><p><span style="font-size:14px">Cluster Internet Security is able to set general settings for all applications. For example, the user requires that all applications had access to a particular server. To do this, in the settings must be a rule that will allow access to a specific IP-address and to a specific port. And no longer will be necessary to create separate rules for access to this server for each application.</span></p>',
      },
   {
        title: "Inspector security (Behavioral analyzer)",
        childDescription:
          '<p><span style="font-size:14px">Products of new line have received innovative proactive technologies. One of the most important modules of all rage of antiviruses by Cluster is the presence of so-called behavioral analyzer (HIPS).<br />&nbsp;<br />This unique technology is the most advanced solution, which is implemented in the world\'s anti-virus industry. The essence of its work is scanning and analysis of programs, to determine likelihood of malicious behavior. If HIPS eoul notive that some program performs actions that could potentially harm your PC, it will be blocked even before its launch.</span></p>',
      },
   {
        title: "Function of self-defense",
        childDescription:
          '<p><span style="font-size:14px">The new line of antiviruses by Cluster has a function of self-defense.<br />&nbsp;<br />It eliminates the possibility of disabling the protection of your PC as a result of the forced stop using the "Task Manager". This feature is implemented as a response to modern Trojans that are able to get administrative rights on the infected PC and block the work of installed programs, including non-modern antiviruses.</span></p>',
      },
     {
        title: "WEB-filter (protection of HTTP-traffic)",
        childDescription:
          '<ul><li><span style="font-size:14px">Blocking of dangerous sites.</span></li>\n</ul><p><span style="font-size:14px">Cluster Internet Security has the ability to block access to potentially dangerous sites, stopping them from loading when viewed in a browser. In this case, the user sees a message;</span><br />&nbsp;</p><ul><li><span style="font-size:14px">Block of potentially dangerous content from suspicious sites.</span></li>\n</ul><p><span style="font-size:14px">Some sites are added to the base of Cluster Internet Security as suspicious, or sites that have malicious content. If a site is in the list, you will be able to visit it, to view the pages, images, but you will not be able to download from this resource programs, files, documents and other files that may harm your computer.</span><br />&nbsp;</p><ul><li><span style="font-size:14px">Create your own list of blocked sites.</span></li>\n</ul><p><span style="font-size:14px">In the WEB-filter, there is a possibility, in addition to the built-in database of blocked sites, to create your own list of sites that the user, for whatever reason, considers undesirable. To this personal base subjected the same rules that apply to the built-in base.</span></p>',
      },
     {
        title: "USB - protection",
        childDescription:
          'Security module of USB-drives controls the connection of any drive to the USB-ports. Preliminary analysis with following informing of user reliably protects the computer from automatically downloaded objects on disks. So now Cluster will protect you from the automatic start from the flash drive of a virus or worm, even if it is a completely new, unknown virus.<br/><br/>When connecting a new USB-drive, Cluster detects it, performs a brief analysis and informs the user about the evaluated level of security of the disc. In the case of detection of the viruses or any suspicious objects on the flash drive, antivirus immediately prompts the user to remove them.',
      },
     {
        title: "Mail Filter",
        childDescription:
          'Mail filter checks all incoming and outgoing email messages for malicious objects, thus avoiding possible threats of infiltration in the system by means of e-mail.',
      },
     {
        title: "Anti-spam",
        childDescription:
          'The modules are built on the principle of proactive technologies. They allow to set up a "black list" of e-mail addresses and websites that have been seen in spam mailings and phishing activity.<br/><br/>For example, Anti-Spam allows to make flexible adjustment of blocked messages. You can set the filter by sender, recipient, title, or subject. This will significantly reduce the probability of receiving unwanted emails. ',
      },
     {
        title: "Anti-fishing",
        childDescription:
          'Anti-Phishing allows to avoid sites that have phishing activity, steal user data and are used by cybercriminals for illegal enrichment.',
      },
     {
        title: "Parental control",
        childDescription:
          '<p><span style="font-size:14px">The module, which allows you to control visits to websites of young PC users that their parents find undesirable.</span><br>&nbsp;</p><p><span style="font-size:14px">It is important to understand that the essence of “Parental Control” is to create a safe informational space for the child. Modern programs of parental control are complex filters that prevent minors from visiting certain sites, the content of which, according to their parents, is undesirable for viewing.</span><br>&nbsp;</p><p><span style="font-size:14px">These resources include the following sites, related to:</span></p><p>&nbsp;</p><ul><li><span style="font-size:14px">Social networks;</span></li><li><span style="font-size:14px">Pornography;</span></li><li><span style="font-size:14px">Games and Chats;</span></li><li><span style="font-size:14px">Violence and Alcohol;</span></li><li><span style="font-size:14px">Dating sites;</span></li><li><span style="font-size:14px">Torrents;</span></li><li><span style="font-size:14px">Online shopping;</span></li><li><span style="font-size:14px">Gambling.</span></li>\n</ul><p><br><span style="font-size:14px">Actions of parental control are based on a list of network resources, access to which is defined as prohibited.</span></p><p>&nbsp;</p><p><span style="font-size:14px">Functions of “Parental Control” that Cluster Total Security includes predefined lists of thousands of pornographic sites, over 2,000 online gambling sites, and over 1,000 resources where violence and alcohol content is placed.</span></p><p>&nbsp;</p><p><span style="font-size:14px">In addition, this database can be changed and supplemented manually with administrative rights, allowing you to customize the functionality of the module to make it more flexible and to meet all necessary requirements.</span></p><p>&nbsp;</p>',
      },
     {
        title: "Process manager",
        childDescription:
          '<p><span style="font-size:14px">It acts as a built-in controller of applications and processes, allowing you to control and manage running applications and processes.</span></p><p>&nbsp;</p><p><span style="font-size:14px">Process manager provides the user with information on current working applications and services as well as data on resource consumption. The utility allows you to forcibly terminate undesirable processes if they hang or excessively use memory, which could adversely affect the performance of the PC.</span></p><p>&nbsp;</p><p><span style="font-size:14px">Process manager can regulate the work of:</span></p><p><br><span style="font-size:14px">• Applications,<br>• Processes.</span></p>',
      },
     {
        title: "Startup Manager",
        childDescription:
          '<p><span style="font-size:14px">The utility of workload optimization is a program that allows you to analyze the applications that are loaded at startup and optimize boot time by disabling applications and some system functions that are not used.</span></p><p>&nbsp;</p><p><span style="font-size:14px">The utility of workload optimization has been designed to increase the speed of your PC.</span></p><p>&nbsp;</p><p><span style="font-size:14px">“Startup Manager” allows you to search for programs and services of the operating system that are not used by the user but are still automatically loaded and consume computer resources, and to disable their automatic upload.</span></p>',
      },
     {
        title: "Privacy Protection",
        childDescription:
          `<div>
Privacy Protection: Privacy protection program is a program that allows removing traces of the user's work on a PC.<br><br>
  
  The module searches for configuration and temporary files that were created during the operation of standard software packages and performs their clean-up. This module allows deleting the following data:<br><br>
  
  <ul>
    <li>Lists of documentsopened by the user</li>
    <li>Temporary files</li>
    <li>Saved passwords</li>
    <li>List of popular programs</li>
    <li>History of a browser</li>
  </ul>
</div>
`,
      },
     {
        title: "PC Optimization",
        childDescription:
          `<div>
  Optimizer is a tool that speeds up your PC. The software module allows finding unnecessary files and programs that overload the operating system, and to remove them.<br><br>
  
  The principle of its work is based on checking certain computer memory locations where temporary files are stored. To such categories, Optimizer attributes browsers' cache, search history, OS updates, "service" files, and so on.<br><br>
  
  After scanning, the tool displays a list of all files that are offered to be removed and, most importantly, their size and the total amount of memory that will be released. The decision about removal is made directly by the user.
</div>
`,
      },
     {
        title: "File Shredder",
        childDescription:
        `<div>
  It is a special program that allows safely removing the most unwanted sensitive files without the possibility of their recovery.<br><br>
  
  The way these programs operate is that the file planned for removal is subjected to multiple wipe-offs. In fact, it is filled with meaningless information garbage (random numbers, characters, symbols, etc.), which completely distorts its contents without the possibility of restoration. After this, it is removed from the hard drive. Even if such a file were ever found by hackers and they tried to restore it, they would not benefit from such actions.
</div>
`,
      }
    ] 
    },
  
  ];

  const product = products.find((product) => product?.id == params.id);
  

  return (
    <>
      <section
        className="bg-primary mb-10 bg-no-repeat bg-cover 
       h-[950px] lg:h-[500px] bg-center"
      >
        <div className=" py-10 max-w-7xl mx-auto">
          <div className="lg:px-[50px] grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
            <div className="">
              <h1 className="font-zcool text-white text-center lg:text-start text-[20px] lg:text-[35px]">
                {product?.title}
              </h1>
              <h1 className=" text-white text-sm text-center lg:text-start lg:text-[20px]  font-semibold mb-5 mt-3 lg:mt-5">
                Maximum protection against cyber threats!
              </h1>
              <p className="text-white mb-5 text-center lg:text-start text-sm lg:text-base">
                Proactive technology of protection will defend your PC from
                malicious software and scams.
              </p>
              <p className="text-white  text-center lg:text-start text-sm lg:text-base">
                {" "}
                If you are looking for reliable and simple antivirus, this
                product will be ideal for you.
              </p>
              <p className="text-white mt-5  text-center lg:text-start text-sm lg:text-base">
                15 days trial period available{" "}
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="border text-primary bg-white px-5 py-1 mt-4 hover:bg-green-500   rounded-md font-semibold hover:text-white transition-all duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaCartShopping className="" />
                    <p className="">ONLY {product.price} USD</p>
                  </div>
                </button>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="border  px-12 text-white py-1 mt-4 hover:bg-green-500   rounded-md font-semibold  transition-all duration-300">
                  <p className="uppercase">Try Trial</p>
                </button>
              </div>
            </div>

            <div className="mt-3 lg:mt-0">
              <IconList product={product?.icons} />
            </div>

            <div>
              <Image
                src={product?.image}
                alt=""
                className={`w-[500px] lg:w-[600px] object-cover lg:h-[400px]`}
              />
            </div>
          </div>
        </div>
      </section>

      <ProductDetailsTab product={product} />
    </>
  );
};

export default ProductDetails;
