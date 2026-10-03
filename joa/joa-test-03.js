const questions = [
// Question 1
{
  en: "What is MS Word?", 
  hi: "MS Word क्या है?",

  options: [
    {
      en: "A spreadsheet application used for numerical calculations",
      hi: "एक spreadsheet application जिसका उपयोग numerical calculations के लिए किया जाता है"
    },
    {
      en: "A word processing application used to create and edit documents",
      hi: "एक word processing application जिसका उपयोग documents create और edit करने के लिए किया जाता है"
    },
    {
      en: "A database management system used to store records",
      hi: "एक database management system जिसका उपयोग records store करने के लिए किया जाता है"
    },
    {
      en: "A presentation application used to create slides",
      hi: "एक presentation application जिसका उपयोग slides create करने के लिए किया जाता है"
    }
  ],

  answer: "B",

  explanation: "MS Word एक word processing application है, जिसका उपयोग documents को create, edit और format करने के लिए किया जाता है।"
},

// Question 2
{
  en: "What is meant by Word Processing?",
  hi: "Word Processing का क्या अर्थ है?",

  options: [
    {
      en: "The process of creating, editing, formatting, storing, and printing text documents",
      hi: "Text documents को create, edit, format, store और print करने की प्रक्रिया"
    },
    {
      en: "The process of calculating numerical data using formulas",
      hi: "Formulas का उपयोग करके numerical data calculate करने की प्रक्रिया"
    },
    {
      en: "The process of designing computer hardware",
      hi: "Computer hardware design करने की प्रक्रिया"
    },
    {
      en: "The process of creating and managing databases",
      hi: "Databases create और manage करने की प्रक्रिया"
    }
  ],

  answer: "A",

  explanation: "Word Processing में text documents को create, edit, format, store और print करना शामिल होता है।"
},

// Question 3
{
  en: "What is the primary purpose of MS Word?",
  hi: "MS Word का primary purpose क्या है?",

  options: [
    {
      en: "To perform complex mathematical calculations",
      hi: "Complex mathematical calculations perform करना"
    },
    {
      en: "To manage computer networks",
      hi: "Computer networks manage करना"
    },
    {
      en: "To create, edit, format, and manage text-based documents",
      hi: "Text-based documents को create, edit, format और manage करना"
    },
    {
      en: "To develop computer operating systems",
      hi: "Computer operating systems develop करना"
    }
  ],

  answer: "C",

  explanation: "MS Word का मुख्य उद्देश्य text-based documents को create, edit, format और manage करना है।"
},

// Question 4
{
  en: "Which of the following is a basic function of a word processor?",
  hi: "निम्नलिखित में से word processor का basic function कौन-सा है?",

  options: [
    {
      en: "Managing computer hardware components",
      hi: "Computer hardware components को manage करना"
    },
    {
      en: "Creating, editing, and formatting documents",
      hi: "Documents को create, edit और format करना"
    },
    {
      en: "Controlling network traffic",
      hi: "Network traffic को control करना"
    },
    {
      en: "Compiling programming languages",
      hi: "Programming languages को compile करना"
    }
  ],

  answer: "B",

  explanation: "Word processor का basic function documents को create, edit और format करना है।"
},

// Question 5
{
  en: "Which of the following is a common way to store a document created in MS Word?",
  hi: "MS Word में बनाए गए document को store करने का common तरीका निम्नलिखित में से कौन-सा है?",

  options: [
    {
      en: "Saving it as a Word document file",
      hi: "उसे Word document file के रूप में save करना"
    },
    {
      en: "Saving it only as a printer setting",
      hi: "उसे केवल printer setting के रूप में save करना"
    },
    {
      en: "Saving it only in computer memory",
      hi: "उसे केवल computer memory में save करना"
    },
    {
      en: "Saving it as a keyboard shortcut",
      hi: "उसे keyboard shortcut के रूप में save करना"
    }
  ],

  answer: "A",

  explanation: "MS Word document को सामान्यतः Word document file के रूप में save किया जाता है, जैसे .docx file।"
},
// Question 6
{
  en: "Which feature of MS Word allows a user to produce a physical copy of a document?",
  hi: "MS Word का कौन-सा feature user को document की physical copy तैयार करने की सुविधा देता है?",

  options: [
    {
      en: "Save",
      hi: "Save"
    },
    {
      en: "Print",
      hi: "Print"
    },
    {
      en: "Undo",
      hi: "Undo"
    },
    {
      en: "Find",
      hi: "Find"
    }
  ],

  answer: "B",

  explanation: "Print feature document की electronic copy को physical paper copy में produce करने के लिए उपयोग होता है।"
},

// Question 7
{
  en: "Which statement correctly distinguishes word processing from plain text editing?",
  hi: "कौन-सा statement word processing और plain text editing के बीच सही अंतर बताता है?",

  options: [
    {
      en: "Word processors cannot edit text, while plain text editors can",
      hi: "Word processors text edit नहीं कर सकते, जबकि plain text editors कर सकते हैं"
    },
    {
      en: "Plain text editors support more formatting features than word processors",
      hi: "Plain text editors word processors की तुलना में अधिक formatting features support करते हैं"
    },
    {
      en: "Word processors provide formatting and document-layout features that plain text editors generally do not",
      hi: "Word processors ऐसे formatting और document-layout features provide करते हैं जो plain text editors में generally उपलब्ध नहीं होते"
    },
    {
      en: "Both always provide exactly the same formatting and layout features",
      hi: "दोनों हमेशा exactly समान formatting और layout features provide करते हैं"
    }
  ],

  answer: "C",

  explanation: "Word processors में text formatting और document layout के कई features होते हैं, जो plain text editors में generally नहीं होते।"
},

// Question 8
{
  en: "Which of the following is a common use of MS Word?",
  hi: "निम्नलिखित में से MS Word का common use कौन-सा है?",

  options: [
    {
      en: "Creating and formatting letters, reports, and other documents",
      hi: "Letters, reports और अन्य documents को create और format करना"
    },
    {
      en: "Managing computer network routing tables",
      hi: "Computer network routing tables को manage करना"
    },
    {
      en: "Designing electronic circuits",
      hi: "Electronic circuits को design करना"
    },
    {
      en: "Performing operating system kernel operations",
      hi: "Operating system kernel operations perform करना"
    }
  ],

  answer: "A",

  explanation: "MS Word का common use letters, reports और अन्य text-based documents को create और format करना है।"
},

// Question 9
{
  en: "Which part of the MS Word window displays the name of the current document and the application?",
  hi: "MS Word window का कौन-सा part current document और application का name display करता है?",

  options: [
    {
      en: "Title Bar",
      hi: "Title Bar"
    },
    {
      en: "Ribbon",
      hi: "Ribbon"
    },
    {
      en: "Document Area",
      hi: "Document Area"
    },
    {
      en: "Ruler",
      hi: "Ruler"
    }
  ],

  answer: "A",

  explanation: "Title Bar में सामान्यतः current document का name और application का name display होता है।"
},

// Question 10
{
  en: "What is the primary purpose of the Ribbon in MS Word?",
  hi: "MS Word में Ribbon का primary purpose क्या है?",

  options: [
    {
      en: "To display the document's file path only",
      hi: "केवल document का file path display करना"
    },
    {
      en: "To provide access to commands and tools organized into tabs and groups",
      hi: "Tabs और groups में organized commands और tools तक access provide करना"
    },
    {
      en: "To show the position of the insertion point",
      hi: "Insertion point की position दिखाना"
    },
    {
      en: "To store the document automatically",
      hi: "Document को automatically store करना"
    }
  ],

  answer: "B",

  explanation: "Ribbon में MS Word के commands और tools अलग-अलग tabs और groups में organized होते हैं।"
},
// Question 11
{
  en: "In MS Word, what is the insertion point?",
  hi: "MS Word में insertion point क्या होता है?",

  options: [
    {
      en: "The horizontal ruler used for setting margins",
      hi: "Margins set करने के लिए उपयोग किया जाने वाला horizontal ruler"
    },
    {
      en: "The location where newly typed text will be inserted",
      hi: "वह location जहाँ newly typed text insert होगा"
    },
    {
      en: "The button used to open the File tab",
      hi: "File tab खोलने के लिए उपयोग किया जाने वाला button"
    },
    {
      en: "The area containing Ribbon commands",
      hi: "Ribbon commands वाला area"
    }
  ],

  answer: "B",

  explanation: "Insertion point वह location है जहाँ keyboard से type किया गया नया text insert होता है।"
},

// Question 12
{
  en: "Which statement correctly describes the relationship between Ribbon Tabs, Groups, and Commands in MS Word?",
  hi: "MS Word में Ribbon Tabs, Groups और Commands के बीच relationship को कौन-सा statement सही रूप से describe करता है?",

  options: [
    {
      en: "Commands contain tabs, and tabs contain groups",
      hi: "Commands में tabs होते हैं और tabs में groups होते हैं"
    },
    {
      en: "Groups contain tabs, and tabs contain commands",
      hi: "Groups में tabs होते हैं और tabs में commands होते हैं"
    },
    {
      en: "Tabs contain groups, and groups contain related commands",
      hi: "Tabs में groups होते हैं और groups में related commands होते हैं"
    },
    {
      en: "Tabs and groups are both located inside the document area",
      hi: "Tabs और groups दोनों document area के अंदर स्थित होते हैं"
    }
  ],

  answer: "C",

  explanation: "Ribbon में Tabs के अंदर Groups होते हैं और प्रत्येक Group में related commands organized होते हैं।"
},

// Question 13
{
  en: "What is the primary purpose of the Scroll Bar in MS Word?",
  hi: "MS Word में Scroll Bar का primary purpose क्या है?",

  options: [
    {
      en: "To change the font size of selected text",
      hi: "Selected text का font size change करना"
    },
    {
      en: "To move the document view vertically or horizontally",
      hi: "Document view को vertically या horizontally move करना"
    },
    {
      en: "To insert a new page into the document",
      hi: "Document में नया page insert करना"
    },
    {
      en: "To open the Navigation Pane",
      hi: "Navigation Pane खोलना"
    }
  ],

  answer: "B",

  explanation: "Scroll Bar का उपयोग document की view को ऊपर-नीचे या left-right move करने के लिए किया जाता है।"
},

// Question 14
{
  en: "Which MS Word interface component can be used to search for text and navigate through headings or pages in a document?",
  hi: "MS Word का कौन-सा interface component document में text search करने और headings या pages के माध्यम से navigate करने के लिए उपयोग किया जा सकता है?",

  options: [
    {
      en: "Status Bar",
      hi: "Status Bar"
    },
    {
      en: "Zoom Slider",
      hi: "Zoom Slider"
    },
    {
      en: "Navigation Pane",
      hi: "Navigation Pane"
    },
    {
      en: "View Buttons",
      hi: "View Buttons"
    }
  ],

  answer: "C",

  explanation: "Navigation Pane से document में text search किया जा सकता है और headings तथा pages के माध्यम से आसानी से navigate किया जा सकता है।"
},

// Question 15
{
  en: "Which window control is used to reduce an open MS Word window to the taskbar without closing the application?",
  hi: "कौन-सा window control open MS Word window को application close किए बिना taskbar पर reduce करने के लिए उपयोग किया जाता है?",

  options: [
    {
      en: "Close",
      hi: "Close"
    },
    {
      en: "Restore",
      hi: "Restore"
    },
    {
      en: "Maximize",
      hi: "Maximize"
    },
    {
      en: "Minimize",
      hi: "Minimize"
    }
  ],

  answer: "D",

  explanation: "Minimize button window को taskbar पर भेजता है, लेकिन application बंद नहीं होती।"
},
// Question 16
{
  en: "Which MS Word interface component displays information such as the current page number and word count?",
  hi: "MS Word का कौन-सा interface component current page number और word count जैसी information display करता है?",

  options: [
    {
      en: "Status Bar",
      hi: "Status Bar"
    },
    {
      en: "Scroll Bar",
      hi: "Scroll Bar"
    },
    {
      en: "Ribbon",
      hi: "Ribbon"
    },
    {
      en: "Title Bar",
      hi: "Title Bar"
    }
  ],

  answer: "A",

  explanation: "Status Bar document की useful information जैसे page number और word count display करता है।"
},

// Question 17
{
  en: "What is the Ribbon in MS Word?",
  hi: "MS Word में Ribbon क्या है?",

  options: [
    {
      en: "A bar that contains tabs, groups, and commands for performing various tasks",
      hi: "एक bar जिसमें विभिन्न tasks perform करने के लिए tabs, groups और commands होते हैं"
    },
    {
      en: "A panel that displays only the document's word count",
      hi: "एक panel जो केवल document का word count display करता है"
    },
    {
      en: "A window control used to close the application",
      hi: "Application को close करने के लिए उपयोग किया जाने वाला window control"
    },
    {
      en: "A section used only for displaying page margins",
      hi: "केवल page margins display करने के लिए उपयोग किया जाने वाला section"
    }
  ],

  answer: "A",

  explanation: "Ribbon में tabs, groups और commands होते हैं, जिनका उपयोग MS Word में विभिन्न tasks perform करने के लिए किया जाता है।"
},

// Question 18
{
  en: "Which tab in MS Word primarily contains commands for inserting tables, pictures, shapes, and other objects into a document?",
  hi: "MS Word का कौन-सा tab document में tables, pictures, shapes और अन्य objects insert करने के commands primarily contain करता है?",

  options: [
    {
      en: "Home",
      hi: "Home"
    },
    {
      en: "Insert",
      hi: "Insert"
    },
    {
      en: "Review",
      hi: "Review"
    },
    {
      en: "View",
      hi: "View"
    }
  ],

  answer: "B",

  explanation: "Insert tab में tables, pictures, shapes और अन्य objects को document में add करने के commands मिलते हैं।"
},

// Question 19
{
  en: "What are Contextual Tabs in MS Word?",
  hi: "MS Word में Contextual Tabs क्या होते हैं?",

  options: [
    {
      en: "Tabs that appear only when certain objects or elements are selected",
      hi: "ऐसे tabs जो केवल certain objects या elements select करने पर दिखाई देते हैं"
    },
    {
      en: "Tabs that permanently replace the Home tab",
      hi: "ऐसे tabs जो permanently Home tab को replace कर देते हैं"
    },
    {
      en: "Tabs used only for printing documents",
      hi: "ऐसे tabs जो केवल documents print करने के लिए उपयोग होते हैं"
    },
    {
      en: "Tabs that contain only spelling and grammar commands",
      hi: "ऐसे tabs जिनमें केवल spelling और grammar commands होते हैं"
    }
  ],

  answer: "A",

  explanation: "Contextual Tabs किसी specific object या element को select करने पर appear होते हैं और उसी object से related commands provide करते हैं।"
},

// Question 20
{
  en: "Which MS Word feature allows you to change the magnification level of a document on the screen?",
  hi: "MS Word का कौन-सा feature screen पर document के magnification level को change करने की सुविधा देता है?",

  options: [
    {
      en: "Zoom Slider",
      hi: "Zoom Slider"
    },
    {
      en: "Status Bar",
      hi: "Status Bar"
    },
    {
      en: "Scroll Bar",
      hi: "Scroll Bar"
    },
    {
      en: "Navigation Pane",
      hi: "Navigation Pane"
    }
  ],

  answer: "A",

  explanation: "Zoom Slider का उपयोग document को screen पर अधिक बड़ा या छोटा दिखाने के लिए किया जाता है।"
},

// Question 21
{
  en: "Which contextual tab in MS Word appears when a table is selected and provides commands for applying styles and formatting to the table?",
  hi: "MS Word में table select करने पर कौन-सा contextual tab दिखाई देता है और table पर styles तथा formatting apply करने के commands provide करता है?",

  options: [
    {
      en: "Picture Format",
      hi: "Picture Format"
    },
    {
      en: "Table Design",
      hi: "Table Design"
    },
    {
      en: "Review",
      hi: "Review"
    },
    {
      en: "References",
      hi: "References"
    }
  ],

  answer: "B",

  explanation: "Table select करने पर Table Design contextual tab में table styles और formatting से related commands मिलते हैं।"
},

// Question 22
{
  en: "When a picture is selected in MS Word, which contextual tab provides commands specifically related to picture formatting?",
  hi: "MS Word में picture select करने पर कौन-सा contextual tab picture formatting से related commands provide करता है?",

  options: [
    {
      en: "Table Layout",
      hi: "Table Layout"
    },
    {
      en: "Shape Format",
      hi: "Shape Format"
    },
    {
      en: "Picture Format",
      hi: "Picture Format"
    },
    {
      en: "Mailings",
      hi: "Mailings"
    }
  ],

  answer: "C",

  explanation: "Picture select करने पर Picture Format contextual tab में picture formatting से related commands मिलते हैं।"
},

// Question 23
{
  en: "Which statement correctly describes the basic relationship among a Ribbon Tab, Group, and Command in MS Word?",
  hi: "MS Word में Ribbon Tab, Group और Command के बीच basic relationship को कौन-सा statement सही रूप से describe करता है?",

  options: [
    {
      en: "A Command contains several Tabs, while a Tab contains Groups",
      hi: "एक Command में कई Tabs होते हैं, जबकि एक Tab में Groups होते हैं"
    },
    {
      en: "A Group contains several Tabs, while a Command contains Groups",
      hi: "एक Group में कई Tabs होते हैं, जबकि एक Command में Groups होते हैं"
    },
    {
      en: "A Tab contains related Groups, and each Group contains related Commands",
      hi: "एक Tab में related Groups होते हैं और प्रत्येक Group में related Commands होते हैं"
    },
    {
      en: "A Tab and a Group are commands that perform the same function",
      hi: "Tab और Group ऐसे commands हैं जो एक ही function perform करते हैं"
    }
  ],

  answer: "C",

  explanation: "Ribbon में Tabs के अंदर related Groups होते हैं और Groups के अंदर related Commands organized होते हैं।"
},

// Question 24
{
  en: "Which statement about customizing the Ribbon in MS Word is correct?",
  hi: "MS Word में Ribbon को customize करने के बारे में कौन-सा statement सही है?",

  options: [
    {
      en: "Users can customize the Ribbon by adding or removing tabs and groups, while built-in commands can be organized through available customization options",
      hi: "Users Ribbon में tabs और groups add या remove कर सकते हैं तथा available customization options के द्वारा built-in commands को organize कर सकते हैं"
    },
    {
      en: "Users can customize only the document area and cannot modify the Ribbon",
      hi: "Users केवल document area को customize कर सकते हैं और Ribbon को modify नहीं कर सकते"
    },
    {
      en: "Ribbon customization permanently changes the commands for every MS Word installation",
      hi: "Ribbon customization हर MS Word installation के commands को permanently change कर देता है"
    },
    {
      en: "Ribbon customization is possible only by editing the document's text",
      hi: "Ribbon customization केवल document के text को edit करके ही possible है"
    }
  ],

  answer: "A",

  explanation: "MS Word में Ribbon को Customize Ribbon options के माध्यम से tabs, groups और commands के available customization features के अनुसार modify किया जा सकता है।"
},

// Question 25
{
  en: "What is the primary purpose of Backstage View in MS Word?",
  hi: "MS Word में Backstage View का primary purpose क्या है?",

  options: [
    {
      en: "To provide access to file-related operations such as opening, saving, printing, sharing, and viewing document information",
      hi: "Opening, saving, printing, sharing और document information देखने जैसे file-related operations तक access provide करना"
    },
    {
      en: "To provide commands for changing paragraph alignment only",
      hi: "केवल paragraph alignment change करने के commands provide करना"
    },
    {
      en: "To display only the document's insertion point",
      hi: "केवल document का insertion point display करना"
    },
    {
      en: "To manage only the font properties of selected text",
      hi: "केवल selected text की font properties manage करना"
    }
  ],

  answer: "A",

  explanation: "Backstage View में document की file-related activities जैसे Save, Open, Print, Share और document information उपलब्ध होती हैं।"
},

// Question 26
{
  en: "Which option should be used when you want to create a new document in MS Word?",
  hi: "जब आप MS Word में नया document create करना चाहते हैं, तो किस option का उपयोग करना चाहिए?",

  options: [
    {
      en: "Open",
      hi: "Open"
    },
    {
      en: "New",
      hi: "New"
    },
    {
      en: "Info",
      hi: "Info"
    },
    {
      en: "Share",
      hi: "Share"
    }
  ],

  answer: "B",

  explanation: "New option का उपयोग MS Word में नया document create करने के लिए किया जाता है।"
},

// Question 27
{
  en: "A user wants to save an existing document with a different file name or in a different location without replacing the original file. Which command should be used?",
  hi: "यदि user existing document को original file को replace किए बिना किसी different file name या different location पर save करना चाहता है, तो किस command का उपयोग करना चाहिए?",

  options: [
    {
      en: "Save",
      hi: "Save"
    },
    {
      en: "Open",
      hi: "Open"
    },
    {
      en: "Save As",
      hi: "Save As"
    },
    {
      en: "Print",
      hi: "Print"
    }
  ],

  answer: "C",

  explanation: "Save As का उपयोग document की अलग copy को नए file name या location पर save करने के लिए किया जाता है।"
},

// Question 28
{
  en: "Which option in the File/Backstage area is primarily used to send a document to a printer and configure printing-related settings?",
  hi: "File/Backstage area में document को printer पर भेजने और printing-related settings configure करने के लिए primarily किस option का उपयोग किया जाता है?",

  options: [
    {
      en: "Info",
      hi: "Info"
    },
    {
      en: "Share",
      hi: "Share"
    },
    {
      en: "New",
      hi: "New"
    },
    {
      en: "Print",
      hi: "Print"
    }
  ],

  answer: "D",

  explanation: "Print option से document को print करने के साथ printer, copies, pages और अन्य printing settings configure की जाती हैं।"
},

// Question 29
{
  en: "In MS Word, which option is generally used to create a PDF or other supported format from the current document?",
  hi: "MS Word में current document से PDF या किसी अन्य supported format की file create करने के लिए generally किस option का उपयोग किया जाता है?",

  options: [
    {
      en: "Account",
      hi: "Account"
    },
    {
      en: "Export",
      hi: "Export"
    },
    {
      en: "Close",
      hi: "Close"
    },
    {
      en: "Options",
      hi: "Options"
    }
  ],

  answer: "B",

  explanation: "Export option का उपयोग document को PDF जैसे अन्य supported formats में convert या export करने के लिए किया जा सकता है।"
},

// Question 30
{
  en: "Which option in the File/Backstage area provides access to settings for customizing MS Word's behavior and preferences?",
  hi: "File/Backstage area में MS Word के behavior और preferences को customize करने वाली settings तक access किस option से मिलता है?",

  options: [
    {
      en: "Options",
      hi: "Options"
    },
    {
      en: "Account",
      hi: "Account"
    },
    {
      en: "Document Properties",
      hi: "Document Properties"
    },
    {
      en: "Export",
      hi: "Export"
    }
  ],

  answer: "A",

  explanation: "Options में MS Word के विभिन्न settings और preferences को customize करने के लिए कई configuration options मिलते हैं।"
},

// Question 31
{
  en: "What is the basic purpose of file permissions in MS Word?",
  hi: "MS Word में file permissions का basic purpose क्या है?",

  options: [
    {
      en: "To change the page orientation of a document",
      hi: "Document का page orientation change करना"
    },
    {
      en: "To control who can access, modify, or otherwise work with a document",
      hi: "यह control करना कि कौन document को access, modify या उसके साथ अन्य कार्य कर सकता है"
    },
    {
      en: "To increase the number of pages in a document",
      hi: "Document में pages की संख्या बढ़ाना"
    },
    {
      en: "To change the font style of a document",
      hi: "Document की font style change करना"
    }
  ],

  answer: "B",

  explanation: "File permissions यह control करने में मदद करती हैं कि कौन document को access, edit या modify कर सकता है।"
},

// Question 32
{
  en: "Which statement correctly distinguishes Backstage View from the document editing area in MS Word?",
  hi: "MS Word में Backstage View और document editing area के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Backstage View is used mainly for file management and application-related tasks, while the document editing area is used to create and edit document content",
      hi: "Backstage View मुख्यतः file management और application-related tasks के लिए होता है, जबकि document editing area में document content create और edit किया जाता है"
    },
    {
      en: "Backstage View is used only for typing text, while the document editing area is used only for printing",
      hi: "Backstage View केवल text typing के लिए होता है, जबकि document editing area केवल printing के लिए होता है"
    },
    {
      en: "Both provide exactly the same set of functions",
      hi: "दोनों exactly same functions provide करते हैं"
    },
    {
      en: "The document editing area is used only to manage file permissions, while Backstage View is used to type text",
      hi: "Document editing area केवल file permissions manage करने के लिए होता है, जबकि Backstage View में text type किया जाता है"
    }
  ],

  answer: "A",

  explanation: "Backstage View में file और application-related tasks होते हैं, जबकि editing area में document का actual content create और edit किया जाता है।"
},

// Question 33
{
  en: "Which option in MS Word is used to start a new document without using a pre-designed template?",
  hi: "MS Word में pre-designed template का उपयोग किए बिना नया document शुरू करने के लिए किस option का उपयोग किया जाता है?",

  options: [
    {
      en: "Blank Document",
      hi: "Blank Document"
    },
    {
      en: "Open",
      hi: "Open"
    },
    {
      en: "Save As",
      hi: "Save As"
    },
    {
      en: "Export",
      hi: "Export"
    }
  ],

  answer: "A",

  explanation: "Blank Document एक खाली document खोलता है, जिसमें user अपना content और formatting स्वयं create कर सकता है।"
},

// Question 34
{
  en: "What is the main purpose of a template in MS Word?",
  hi: "MS Word में template का main purpose क्या है?",

  options: [
    {
      en: "To permanently disable document formatting",
      hi: "Document formatting को permanently disable करना"
    },
    {
      en: "To provide a pre-designed structure and formatting that can be used as the basis for a document",
      hi: "एक pre-designed structure और formatting provide करना, जिसे document के आधार के रूप में use किया जा सके"
    },
    {
      en: "To convert a document into an image",
      hi: "Document को image में convert करना"
    },
    {
      en: "To manage printer hardware",
      hi: "Printer hardware को manage करना"
    }
  ],

  answer: "B",

  explanation: "Template में पहले से designed structure और formatting होती है, जिससे document creation आसान और faster हो जाता है।"
},

// Question 35
{
  en: "A user wants to create a professional-looking document using a pre-designed online layout. Which approach is most appropriate?",
  hi: "एक user pre-designed online layout का उपयोग करके professional-looking document बनाना चाहता है। इसके लिए कौन-सा approach सबसे appropriate है?",

  options: [
    {
      en: "Open a blank document and manually remove all formatting",
      hi: "Blank document खोलकर manually सभी formatting remove करना"
    },
    {
      en: "Use an available online template and create the document based on it",
      hi: "Available online template का उपयोग करके उसके आधार पर document create करना"
    },
    {
      en: "Use the Close command before entering any text",
      hi: "कोई text enter करने से पहले Close command का उपयोग करना"
    },
    {
      en: "Use the Print command to download a template",
      hi: "Template download करने के लिए Print command का उपयोग करना"
    }
  ],

  answer: "B",

  explanation: "Online template में pre-designed layout और formatting होती है, जिससे professional-looking document जल्दी create किया जा सकता है।"
},
// Question 36
{
  en: "What is the key difference between creating a blank document and creating a document from a template?",
  hi: "Blank document create करने और template से document create करने के बीच key difference क्या है?",

  options: [
    {
      en: "A blank document starts with a basic empty document, whereas a template provides predefined design or structure",
      hi: "Blank document एक basic empty document से शुरू होता है, जबकि template predefined design या structure provide करता है"
    },
    {
      en: "A blank document cannot be edited, whereas a template can be edited",
      hi: "Blank document को edit नहीं किया जा सकता, जबकि template को edit किया जा सकता है"
    },
    {
      en: "A template can only be printed, whereas a blank document can only be saved",
      hi: "Template को केवल print किया जा सकता है, जबकि blank document को केवल save किया जा सकता है"
    },
    {
      en: "Both always start with exactly the same predefined content and formatting",
      hi: "दोनों हमेशा exactly same predefined content और formatting के साथ शुरू होते हैं"
    }
  ],

  answer: "A",

  explanation: "Blank document basic empty document से शुरू होता है, जबकि template पहले से defined design या structure provide करता है।"
},

// Question 37
{
  en: "Which command is commonly used in MS Word to open a document that has already been saved?",
  hi: "MS Word में पहले से saved document को open करने के लिए commonly किस command का उपयोग किया जाता है?",

  options: [
    {
      en: "New",
      hi: "New"
    },
    {
      en: "Open",
      hi: "Open"
    },
    {
      en: "Export",
      hi: "Export"
    },
    {
      en: "Close",
      hi: "Close"
    }
  ],

  answer: "B",

  explanation: "Open command का उपयोग पहले से saved document को MS Word में खोलने के लिए किया जाता है।"
},

// Question 38
{
  en: "A user needs to work on two Word documents at the same time. What is the appropriate approach?",
  hi: "एक user को एक ही समय में दो Word documents पर work करना है। इसके लिए appropriate approach क्या है?",

  options: [
    {
      en: "Create or open both documents so that they are available in separate document windows",
      hi: "दोनों documents create या open करें ताकि वे separate document windows में available रहें"
    },
    {
      en: "Merge both documents before opening either one",
      hi: "किसी भी document को open करने से पहले दोनों documents को merge करना"
    },
    {
      en: "Close the first document before creating the second one",
      hi: "दूसरा document create करने से पहले पहला document close करना"
    },
    {
      en: "Save both documents using the same file name",
      hi: "दोनों documents को same file name से save करना"
    }
  ],

  answer: "A",

  explanation: "दोनों Word documents को open रखकर user उन्हें अलग-अलग document windows में access और work कर सकता है।"
},

// Question 39
{
  en: "Which statement correctly distinguishes a template from a blank document in MS Word?",
  hi: "MS Word में template और blank document के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "A blank document provides predefined content, while a template always starts completely empty",
      hi: "Blank document predefined content provide करता है, जबकि template हमेशा completely empty से start होता है"
    },
    {
      en: "Both are identical and differ only in file name",
      hi: "दोनों identical हैं और केवल file name में differ करते हैं"
    },
    {
      en: "A template provides predefined design or structure, while a blank document starts with a basic empty document",
      hi: "Template predefined design या structure provide करता है, जबकि blank document basic empty document से start होता है"
    },
    {
      en: "A blank document cannot be formatted, while a template can be formatted",
      hi: "Blank document को format नहीं किया जा सकता, जबकि template को format किया जा सकता है"
    }
  ],

  answer: "C",

  explanation: "Template predefined design या structure देता है, जबकि blank document basic empty document से शुरू होता है।"
},

// Question 40
{
  en: "Which sequence best represents a basic document creation workflow in MS Word?",
  hi: "MS Word में basic document creation workflow को कौन-सा sequence सबसे सही रूप से represent करता है?",

  options: [
    {
      en: "Print → Close → Create → Edit → Save",
      hi: "Print → Close → Create → Edit → Save"
    },
    {
      en: "Create/Open document → Enter and edit content → Format as required → Save",
      hi: "Create/Open document → Content enter और edit करें → आवश्यकता के अनुसार format करें → Save करें"
    },
    {
      en: "Save → Print → Create → Open → Edit",
      hi: "Save → Print → Create → Open → Edit"
    },
    {
      en: "Close → Export → Print → Enter content → Save",
      hi: "Close → Export → Print → Content enter करें → Save करें"
    }
  ],

  answer: "B",

  explanation: "Basic workflow में पहले document create/open किया जाता है, फिर content enter/edit और format करके document save किया जाता है।"
},
// Question 41
{
  en: "In MS Word, which option is most appropriate when you want to locate and open a document that is not listed under Recent Documents?",
  hi: "MS Word में जब कोई document Recent Documents में listed नहीं है, तो उसे locate और open करने के लिए कौन-सा option सबसे appropriate है?",

  options: [
    {
      en: "Browse",
      hi: "Browse"
    },
    {
      en: "Close",
      hi: "Close"
    },
    {
      en: "Save",
      hi: "Save"
    },
    {
      en: "Exit",
      hi: "Exit"
    }
  ],

  answer: "A",

  explanation: "Browse option से computer में stored document की location पर जाकर उसे locate और open किया जा सकता है।"
},

// Question 42
{
  en: "What does a file path primarily indicate in MS Word?",
  hi: "MS Word में file path primarily क्या indicate करता है?",

  options: [
    {
      en: "The formatting style applied to a document",
      hi: "Document पर applied formatting style"
    },
    {
      en: "The location where a file is stored",
      hi: "वह location जहाँ file stored है"
    },
    {
      en: "The number of pages in a document",
      hi: "Document में pages की संख्या"
    },
    {
      en: "The name of the current Ribbon tab",
      hi: "Current Ribbon tab का name"
    }
  ],

  answer: "B",

  explanation: "File path computer में उस location को indicate करता है जहाँ कोई file stored होती है।"
},

// Question 43
{
  en: "What is the main difference between Save and Save As in MS Word?",
  hi: "MS Word में Save और Save As के बीच main difference क्या है?",

  options: [
    {
      en: "Save closes the document, while Save As opens it",
      hi: "Save document को close करता है, जबकि Save As उसे open करता है"
    },
    {
      en: "Save prints the document, while Save As shares it",
      hi: "Save document को print करता है, जबकि Save As उसे share करता है"
    },
    {
      en: "Save updates the current file, while Save As allows the document to be saved with a different name, location, or supported format",
      hi: "Save current file को update करता है, जबकि Save As document को different name, location या supported format में save करने की सुविधा देता है"
    },
    {
      en: "Save creates a new blank document, while Save As opens a recent document",
      hi: "Save नया blank document create करता है, जबकि Save As recent document open करता है"
    }
  ],

  answer: "C",

  explanation: "Save current file में changes update करता है, जबकि Save As से document को अलग name, location या supported format में save किया जा सकता है।"
},

// Question 44
{
  en: "When you attempt to close a document after making unsaved changes, what does MS Word generally do?",
  hi: "Unsaved changes करने के बाद जब आप document close करने का प्रयास करते हैं, तो MS Word generally क्या करता है?",

  options: [
    {
      en: "Automatically deletes the document",
      hi: "Document को automatically delete कर देता है"
    },
    {
      en: "Prompts whether you want to save the changes",
      hi: "पूछता है कि क्या आप changes save करना चाहते हैं"
    },
    {
      en: "Automatically converts the document to PDF",
      hi: "Document को automatically PDF में convert कर देता है"
    },
    {
      en: "Prevents the document from being closed permanently",
      hi: "Document को permanently close होने से रोक देता है"
    }
  ],

  answer: "B",

  explanation: "Unsaved changes होने पर Word generally user को changes save करने के लिए prompt करता है।"
},

// Question 45
{
  en: "A user has made changes to a Word document but has not saved them. What may happen when the user attempts to close the document?",
  hi: "एक user ने Word document में changes किए हैं लेकिन उन्हें save नहीं किया। Document close करने पर क्या हो सकता है?",

  options: [
    {
      en: "Word automatically prints the document",
      hi: "Word document को automatically print कर देता है"
    },
    {
      en: "Word prompts the user to save or discard the changes",
      hi: "Word user को changes save या discard करने के लिए prompt करता है"
    },
    {
      en: "Word permanently deletes the document",
      hi: "Word document को permanently delete कर देता है"
    },
    {
      en: "Word automatically renames the document",
      hi: "Word document का name automatically change कर देता है"
    }
  ],

  answer: "B",

  explanation: "Unsaved changes होने पर Word generally user को changes save करने या discard करने का option देता है।"
},
// Question 46
{
  en: "What is a common characteristic of a read-only document in MS Word?",
  hi: "MS Word में read-only document की common characteristic क्या है?",

  options: [
    {
      en: "It cannot be viewed until it is printed",
      hi: "इसे print किए बिना view नहीं किया जा सकता"
    },
    {
      en: "It can be viewed, but changes cannot normally be saved back to that file without changing its writable status or creating another copy",
      hi: "इसे view किया जा सकता है, लेकिन writable status change किए बिना या दूसरी copy create किए बिना changes को उसी file में normally save नहीं किया जा सकता"
    },
    {
      en: "It can only be opened through the Ribbon",
      hi: "इसे केवल Ribbon के माध्यम से open किया जा सकता है"
    },
    {
      en: "It is automatically converted to a template",
      hi: "इसे automatically template में convert कर दिया जाता है"
    }
  ],

  answer: "B",

  explanation: "Read-only file को view किया जा सकता है, लेकिन original file में changes save करने के लिए writable access या दूसरी copy की आवश्यकता हो सकती है।"
},

// Question 47
{
  en: "A user double-clicks a .docx file in File Explorer. What will normally happen if MS Word is installed and associated with the file type?",
  hi: "यदि MS Word installed है और .docx file type के साथ associated है, तो File Explorer में .docx file पर double-click करने पर normally क्या होगा?",

  options: [
    {
      en: "The file is opened in MS Word",
      hi: "File MS Word में open हो जाएगी"
    },
    {
      en: "The file is automatically deleted",
      hi: "File automatically delete हो जाएगी"
    },
    {
      en: "The file is converted to plain text",
      hi: "File plain text में convert हो जाएगी"
    },
    {
      en: "The file is sent directly to the printer",
      hi: "File directly printer पर भेज दी जाएगी"
    }
  ],

  answer: "A",

  explanation: ".docx file MS Word से associated होने पर double-click करने से document normally MS Word में open होता है।"
},

// Question 48
{
  en: "Which statement correctly distinguishes closing a document from exiting MS Word?",
  hi: "Document close करने और MS Word exit करने के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Closing a document terminates the entire MS Word application",
      hi: "Document close करने से पूरा MS Word application terminate हो जाता है"
    },
    {
      en: "Exiting Word closes only the currently active document",
      hi: "Word exit करने से केवल currently active document close होता है"
    },
    {
      en: "Closing a document removes the document from the current Word session, while exiting Word closes the MS Word application",
      hi: "Document close करने से document current Word session से close होता है, जबकि Word exit करने से MS Word application close हो जाता है"
    },
    {
      en: "There is no difference between the two operations",
      hi: "दोनों operations में कोई difference नहीं है"
    }
  ],

  answer: "C",

  explanation: "Close से current document बंद होता है, जबकि Exit से पूरा MS Word application बंद होता है।"
},

// Question 49
{
  en: "Which file format is the default document format used by modern versions of MS Word?",
  hi: "Modern versions of MS Word में default document format कौन-सा है?",

  options: [
    {
      en: ".DOCX",
      hi: ".DOCX"
    },
    {
      en: ".TXT",
      hi: ".TXT"
    },
    {
      en: ".RTF",
      hi: ".RTF"
    },
    {
      en: ".ODT",
      hi: ".ODT"
    }
  ],

  answer: "A",

  explanation: "Modern MS Word versions में standard default document format .DOCX है।"
},

// Question 50
{
  en: "Which file extension is associated with the legacy Word document format used by older versions of Microsoft Word?",
  hi: "Microsoft Word के older versions में used legacy Word document format से कौन-सा file extension associated है?",

  options: [
    {
      en: ".PDF",
      hi: ".PDF"
    },
    {
      en: ".DOC",
      hi: ".DOC"
    },
    {
      en: ".DOCX",
      hi: ".DOCX"
    },
    {
      en: ".TXT",
      hi: ".TXT"
    }
  ],

  answer: "B",

  explanation: ".DOC पुराने Microsoft Word versions का legacy document format था, जबकि modern Word में .DOCX standard format है।"
},
// Question 51
{
  en: "Which format is primarily designed to preserve a document's layout for consistent viewing and printing across different systems?",
  hi: "कौन-सा format अलग-अलग systems पर document के layout को consistent viewing और printing के लिए preserve करने के लिए primarily designed है?",

  options: [
    {
      en: ".RTF",
      hi: ".RTF"
    },
    {
      en: ".TXT",
      hi: ".TXT"
    },
    {
      en: ".PDF",
      hi: ".PDF"
    },
    {
      en: ".DOC",
      hi: ".DOC"
    }
  ],

  answer: "C",

  explanation: "PDF document के layout और formatting को preserve करता है, जिससे अलग-अलग systems पर viewing और printing consistent रहती है।"
},

// Question 52
{
  en: "Which statement correctly describes a plain text (.TXT) file compared with a Word document (.DOCX)?",
  hi: "Word document (.DOCX) की तुलना में plain text (.TXT) file को कौन-सा statement सही रूप से describe करता है?",

  options: [
    {
      en: "TXT files normally preserve advanced Word formatting such as styles, tables, and page layouts",
      hi: "TXT files normally styles, tables और page layouts जैसी advanced Word formatting preserve करती हैं"
    },
    {
      en: "TXT files generally contain plain text without the rich formatting and document-layout features supported by DOCX",
      hi: "TXT files में generally plain text होता है और DOCX द्वारा supported rich formatting तथा document-layout features नहीं होते"
    },
    {
      en: "TXT files can only be opened by MS Word",
      hi: "TXT files केवल MS Word में ही open की जा सकती हैं"
    },
    {
      en: "TXT files are the legacy format of Microsoft Word",
      hi: "TXT files Microsoft Word का legacy format हैं"
    }
  ],

  answer: "B",

  explanation: "TXT format mainly plain text store करता है, जबकि DOCX rich formatting और advanced document-layout features support करता है।"
},

// Question 53
{
  en: "Which MS Word file format is commonly used when a document needs to retain editable text and formatting for further editing in Word?",
  hi: "जब किसी document को Word में आगे editing के लिए editable text और formatting के साथ रखना हो, तो कौन-सा MS Word file format commonly used होता है?",

  options: [
    {
      en: ".TXT",
      hi: ".TXT"
    },
    {
      en: ".DOCX",
      hi: ".DOCX"
    },
    {
      en: ".PDF",
      hi: ".PDF"
    },
    {
      en: ".CSV",
      hi: ".CSV"
    }
  ],

  answer: "B",

  explanation: ".DOCX MS Word का standard editable document format है, जिसमें text और formatting को आगे edit किया जा सकता है।"
},

// Question 54
{
  en: "Which file format is primarily used for storing text without rich formatting such as fonts, colors, and paragraph styles?",
  hi: "Fonts, colors और paragraph styles जैसी rich formatting के बिना text store करने के लिए primarily किस file format का उपयोग किया जाता है?",

  options: [
    {
      en: "TXT",
      hi: "TXT"
    },
    {
      en: "DOCX",
      hi: "DOCX"
    },
    {
      en: "PDF",
      hi: "PDF"
    },
    {
      en: "RTF",
      hi: "RTF"
    }
  ],

  answer: "A",

  explanation: "TXT format plain text के लिए होता है और इसमें rich formatting जैसे fonts, colors और paragraph styles normally store नहीं होते।"
},

// Question 55
{
  en: "A user wants to save a Word document in a different file format, such as PDF or another supported format. Which MS Word feature is most directly used for this purpose?",
  hi: "एक user Word document को PDF या किसी अन्य supported format में save करना चाहता है। इसके लिए MS Word का कौन-सा feature most directly used होता है?",

  options: [
    {
      en: "Save As or Export",
      hi: "Save As या Export"
    },
    {
      en: "Undo",
      hi: "Undo"
    },
    {
      en: "Word Count",
      hi: "Word Count"
    },
    {
      en: "Track Changes",
      hi: "Track Changes"
    }
  ],

  answer: "A",

  explanation: "Save As या Export के माध्यम से document को PDF और अन्य supported formats में save या export किया जा सकता है।"
},

// Question 56
{
  en: "Which statement about changing a document's file format is correct?",
  hi: "Document का file format change करने के बारे में कौन-सा statement सही है?",

  options: [
    {
      en: "Changing the extension alone always converts the internal file format correctly",
      hi: "केवल extension change करने से हमेशा internal file format correctly convert हो जाता है"
    },
    {
      en: "A document can be converted to another supported format using appropriate Save As or Export options",
      hi: "Appropriate Save As या Export options का उपयोग करके document को किसी अन्य supported format में convert किया जा सकता है"
    },
    {
      en: "File formats cannot be changed after a document is created",
      hi: "Document create होने के बाद file format change नहीं किया जा सकता"
    },
    {
      en: "Format conversion always preserves every feature of the original document without any possible compatibility differences",
      hi: "Format conversion हमेशा original document की हर feature को बिना किसी compatibility difference के preserve करता है"
    }
  ],

  answer: "B",

  explanation: "Save As या Export options से document को supported formats में convert किया जा सकता है।"
},

// Question 57
{
  en: "In MS Word, where is newly typed text normally inserted?",
  hi: "MS Word में newly typed text normally कहाँ insert होता है?",

  options: [
    {
      en: "At the position of the insertion point",
      hi: "Insertion point की position पर"
    },
    {
      en: "At the beginning of the document",
      hi: "Document की शुरुआत में"
    },
    {
      en: "At the end of the document",
      hi: "Document के अंत में"
    },
    {
      en: "At the position of the mouse pointer only",
      hi: "केवल mouse pointer की position पर"
    }
  ],

  answer: "A",

  explanation: "Keyboard से type किया गया नया text normally insertion point की current position पर insert होता है।"
},

// Question 58
{
  en: "Which key is normally used to create a new paragraph while entering text in MS Word?",
  hi: "MS Word में text enter करते समय नया paragraph create करने के लिए normally किस key का उपयोग किया जाता है?",

  options: [
    {
      en: "Spacebar",
      hi: "Spacebar"
    },
    {
      en: "Enter",
      hi: "Enter"
    },
    {
      en: "Tab",
      hi: "Tab"
    },
    {
      en: "Shift",
      hi: "Shift"
    }
  ],

  answer: "B",

  explanation: "Enter key press करने से MS Word में सामान्यतः नया paragraph शुरू होता है।"
},

// Question 59
{
  en: "What is the primary function of the Spacebar while entering text in MS Word?",
  hi: "MS Word में text enter करते समय Spacebar का primary function क्या है?",

  options: [
    {
      en: "To move the insertion point to the next paragraph",
      hi: "Insertion point को next paragraph पर move करना"
    },
    {
      en: "To insert a space between characters or words",
      hi: "Characters या words के बीच space insert करना"
    },
    {
      en: "To delete the character before the insertion point",
      hi: "Insertion point से पहले वाले character को delete करना"
    },
    {
      en: "To open the Navigation Pane",
      hi: "Navigation Pane open करना"
    }
  ],

  answer: "B",

  explanation: "Spacebar का primary function characters या words के बीच blank space insert करना है।"
},

// Question 60
{
  en: "Which key is commonly used to insert a tab space or move the insertion point to the next tab stop?",
  hi: "Tab space insert करने या insertion point को next tab stop पर move करने के लिए commonly किस key का उपयोग किया जाता है?",

  options: [
    {
      en: "Enter",
      hi: "Enter"
    },
    {
      en: "Backspace",
      hi: "Backspace"
    },
    {
      en: "Tab",
      hi: "Tab"
    },
    {
      en: "Delete",
      hi: "Delete"
    }
  ],

  answer: "C",

  explanation: "Tab key insertion point को next tab stop पर ले जाती है और tab character/spacing insert कर सकती है।"
},
// Question 61
{
  en: "Which action replaces existing text with new text in a selected portion of a Word document?",
  hi: "Word document के selected portion में existing text को new text से replace करने के लिए कौन-सा action किया जाता है?",

  options: [
    {
      en: "Selecting the existing text and typing the new text",
      hi: "Existing text को select करके new text type करना"
    },
    {
      en: "Pressing Spacebar without selecting anything",
      hi: "कुछ भी select किए बिना Spacebar press करना"
    },
    {
      en: "Pressing Enter at the end of the document",
      hi: "Document के end में Enter press करना"
    },
    {
      en: "Moving the insertion point without typing",
      hi: "बिना typing किए insertion point को move करना"
    }
  ],

  answer: "A",

  explanation: "Existing text को select करके नया text type करने पर selected text replace हो जाता है।"
},

// Question 62
{
  en: "Which statement correctly distinguishes a character, word, sentence, and paragraph in a Word document?",
  hi: "Word document में character, word, sentence और paragraph के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "A character is a single text symbol, a word is a group of characters, a sentence is a grammatical unit, and a paragraph is a group of sentences or related text",
      hi: "Character एक single text symbol है, word characters का group है, sentence एक grammatical unit है और paragraph sentences या related text का group है"
    },
    {
      en: "A character always contains several words, while a paragraph contains only one character",
      hi: "Character में हमेशा कई words होते हैं, जबकि paragraph में केवल एक character होता है"
    },
    {
      en: "A word is always longer than a paragraph",
      hi: "Word हमेशा paragraph से longer होता है"
    },
    {
      en: "A sentence and a paragraph are always identical",
      hi: "Sentence और paragraph हमेशा identical होते हैं"
    }
  ],

  answer: "A",

  explanation: "Character text की basic unit है; words characters से बनते हैं, sentences grammatical units होते हैं और paragraphs related sentences या text को group करते हैं।"
},

// Question 63
{
  en: "A user wants to remove a character located immediately to the left of the insertion point. Which key is normally used?",
  hi: "यदि user insertion point के immediately left वाले character को remove करना चाहता है, तो normally किस key का उपयोग किया जाता है?",

  options: [
    {
      en: "Delete",
      hi: "Delete"
    },
    {
      en: "Enter",
      hi: "Enter"
    },
    {
      en: "Backspace",
      hi: "Backspace"
    },
    {
      en: "Tab",
      hi: "Tab"
    }
  ],

  answer: "C",

  explanation: "Backspace key insertion point के left side वाले character को delete करती है।"
},

// Question 64
{
  en: "Which action is most appropriate for modifying a specific portion of text in an MS Word document?",
  hi: "MS Word document में text के किसी specific portion को modify करने के लिए कौन-सा action सबसे appropriate है?",

  options: [
    {
      en: "Select the required text and then apply the desired editing or formatting operation",
      hi: "Required text को select करके desired editing या formatting operation apply करना"
    },
    {
      en: "Close the document and reopen it without selecting the text",
      hi: "Text select किए बिना document close करके फिर से open करना"
    },
    {
      en: "Press Enter repeatedly before making any changes",
      hi: "Changes करने से पहले repeatedly Enter press करना"
    },
    {
      en: "Change the file extension before selecting the text",
      hi: "Text select करने से पहले file extension change करना"
    }
  ],

  answer: "A",

  explanation: "Specific text को modify करने के लिए पहले required portion select करके desired editing या formatting operation apply किया जाता है।"
},

// Question 65
{
  en: "In MS Word, which mouse action is commonly used to select a single word?",
  hi: "MS Word में single word select करने के लिए commonly कौन-सा mouse action use किया जाता है?",

  options: [
    {
      en: "Single-click the word",
      hi: "Word पर single-click करना"
    },
    {
      en: "Double-click the word",
      hi: "Word पर double-click करना"
    },
    {
      en: "Triple-click the word",
      hi: "Word पर triple-click करना"
    },
    {
      en: "Right-click the word",
      hi: "Word पर right-click करना"
    }
  ],

  answer: "B",

  explanation: "MS Word में किसी word पर double-click करने से सामान्यतः वह पूरा word select हो जाता है।"
},

// Question 66
{
  en: "Which keyboard shortcut selects the entire document in MS Word?",
  hi: "MS Word में पूरे document को select करने के लिए कौन-सा keyboard shortcut use किया जाता है?",

  options: [
    {
      en: "Ctrl + A",
      hi: "Ctrl + A"
    },
    {
      en: "Ctrl + W",
      hi: "Ctrl + W"
    },
    {
      en: "Ctrl + S",
      hi: "Ctrl + S"
    },
    {
      en: "Ctrl + E",
      hi: "Ctrl + E"
    }
  ],

  answer: "A",

  explanation: "Ctrl + A पूरे document के content को select करने के लिए use किया जाता है।"
},

// Question 67
{
  en: "What is the basic purpose of holding the Shift key while pressing an Arrow key in MS Word?",
  hi: "MS Word में Arrow key press करते समय Shift key hold करने का basic purpose क्या है?",

  options: [
    {
      en: "To delete the entire document",
      hi: "पूरे document को delete करना"
    },
    {
      en: "To extend or reduce the current text selection",
      hi: "Current text selection को extend या reduce करना"
    },
    {
      en: "To open the Save As dialog box",
      hi: "Save As dialog box open करना"
    },
    {
      en: "To change the document's file format",
      hi: "Document का file format change करना"
    }
  ],

  answer: "B",

  explanation: "Shift + Arrow selection को direction के अनुसार extend या reduce करने में मदद करता है।"
},

// Question 68
{
  en: "Which mouse action provides basic awareness of selecting a paragraph in MS Word?",
  hi: "MS Word में paragraph को select करने के लिए commonly कौन-सा mouse action use किया जाता है?",

  options: [
    {
      en: "Double-click within the paragraph",
      hi: "Paragraph के अंदर double-click करना"
    },
    {
      en: "Single-click within the paragraph",
      hi: "Paragraph के अंदर single-click करना"
    },
    {
      en: "Triple-click within the paragraph",
      hi: "Paragraph के अंदर triple-click करना"
    },
    {
      en: "Right-click within the paragraph",
      hi: "Paragraph के अंदर right-click करना"
    }
  ],

  answer: "C",

  explanation: "MS Word में paragraph के अंदर triple-click करने से सामान्यतः पूरा paragraph select हो जाता है।"
},

// Question 69
{
  en: "Which of the following is an appropriate way to select a specific portion of text using the mouse?",
  hi: "Mouse का उपयोग करके text के specific portion को select करने का appropriate तरीका कौन-सा है?",

  options: [
    {
      en: "Drag the pointer across the required text",
      hi: "Required text के across pointer को drag करना"
    },
    {
      en: "Press Ctrl + S while the pointer is over the text",
      hi: "Pointer को text पर रखकर Ctrl + S press करना"
    },
    {
      en: "Click the title bar repeatedly",
      hi: "Title bar पर repeatedly click करना"
    },
    {
      en: "Press Enter without moving the pointer",
      hi: "Pointer move किए बिना Enter press करना"
    }
  ],

  answer: "A",

  explanation: "Mouse से pointer को required text के across drag करने पर उस text portion को select किया जा सकता है।"
},

// Question 70
{
  en: "After text has been selected in MS Word, which operation can normally be performed directly on the selected text?",
  hi: "MS Word में text select करने के बाद selected text पर normally कौन-सा operation directly perform किया जा सकता है?",

  options: [
    {
      en: "Delete or replace the selected text",
      hi: "Selected text को delete या replace करना"
    },
    {
      en: "Change the computer's operating system",
      hi: "Computer का operating system change करना"
    },
    {
      en: "Rename the MS Word application",
      hi: "MS Word application का नाम बदलना"
    },
    {
      en: "Change the monitor resolution",
      hi: "Monitor resolution change करना"
    }
  ],

  answer: "A",

  explanation: "Selected text को directly delete किया जा सकता है या नया text type करके replace किया जा सकता है।"
},

// Question 71
{
  en: "A user has selected several words and wants to extend the selection further using the keyboard. Which key can be combined with an Arrow key for this purpose?",
  hi: "एक user ने कई words select किए हैं और keyboard का उपयोग करके selection को आगे extend करना चाहता है। इसके लिए Arrow key के साथ किस key को combine किया जा सकता है?",

  options: [
    {
      en: "Alt",
      hi: "Alt"
    },
    {
      en: "Ctrl",
      hi: "Ctrl"
    },
    {
      en: "Shift",
      hi: "Shift"
    },
    {
      en: "Esc",
      hi: "Esc"
    }
  ],

  answer: "C",

  explanation: "Shift key को Arrow key के साथ press करने पर text selection को आगे extend किया जा सकता है।"
},

// Question 72
{
  en: "Which statement correctly describes text selection in MS Word?",
  hi: "MS Word में text selection को कौन-सा statement सही रूप से describe करता है?",

  options: [
    {
      en: "Selected text can be modified, copied, moved, deleted, or formatted without affecting unselected text",
      hi: "Selected text को modify, copy, move, delete या format किया जा सकता है, जबकि unselected text प्रभावित नहीं होता"
    },
    {
      en: "Selected text can only be printed and cannot be edited",
      hi: "Selected text को केवल print किया जा सकता है और edit नहीं किया जा सकता"
    },
    {
      en: "Text selection is possible only with a mouse",
      hi: "Text selection केवल mouse से ही possible है"
    },
    {
      en: "Selecting text automatically deletes it",
      hi: "Text select करने से वह automatically delete हो जाता है"
    }
  ],

  answer: "A",

  explanation: "Selected text पर editing, copying, moving, deleting और formatting जैसी operations apply की जा सकती हैं।"
},

// Question 73
{
  en: "Which keyboard shortcut is used to cut selected text in MS Word?",
  hi: "MS Word में selected text को cut करने के लिए कौन-सा keyboard shortcut use किया जाता है?",

  options: [
    {
      en: "Ctrl + C",
      hi: "Ctrl + C"
    },
    {
      en: "Ctrl + V",
      hi: "Ctrl + V"
    },
    {
      en: "Ctrl + X",
      hi: "Ctrl + X"
    },
    {
      en: "Ctrl + Z",
      hi: "Ctrl + Z"
    }
  ],

  answer: "C",

  explanation: "Ctrl + X selected text को cut करता है और उसे Clipboard पर place करता है।"
},

// Question 74
{
  en: "What happens when selected text is copied using Ctrl + C?",
  hi: "जब selected text को Ctrl + C से copy किया जाता है, तो क्या होता है?",

  options: [
    {
      en: "The selected text is removed from the document",
      hi: "Selected text document से remove हो जाता है"
    },
    {
      en: "A copy of the selected text is placed on the Clipboard while the original remains in the document",
      hi: "Selected text की एक copy Clipboard पर place होती है, जबकि original document में बना रहता है"
    },
    {
      en: "The selected text is permanently deleted",
      hi: "Selected text permanently delete हो जाता है"
    },
    {
      en: "The selected text is converted into plain text",
      hi: "Selected text plain text में convert हो जाता है"
    }
  ],

  answer: "B",

  explanation: "Ctrl + C selected content की copy Clipboard में रखता है और original text document में रहता है।"
},

// Question 75
{
  en: "Which keyboard shortcut is used to paste content from the Clipboard into an MS Word document?",
  hi: "Clipboard से content को MS Word document में paste करने के लिए कौन-सा keyboard shortcut use किया जाता है?",

  options: [
    {
      en: "Ctrl + P",
      hi: "Ctrl + P"
    },
    {
      en: "Ctrl + X",
      hi: "Ctrl + X"
    },
    {
      en: "Ctrl + C",
      hi: "Ctrl + C"
    },
    {
      en: "Ctrl + V",
      hi: "Ctrl + V"
    }
  ],

  answer: "D",

  explanation: "Ctrl + V Clipboard में मौजूद copied या cut content को document में paste करता है।"
},
// Question 76
{
  en: "Which Paste option attempts to retain the formatting of the copied content when it is pasted into another location?",
  hi: "Copied content को किसी दूसरी location पर paste करते समय उसकी formatting retain करने के लिए कौन-सा Paste option use किया जाता है?",

  options: [
    {
      en: "Keep Source Formatting",
      hi: "Keep Source Formatting"
    },
    {
      en: "Merge Formatting",
      hi: "Merge Formatting"
    },
    {
      en: "Keep Text Only",
      hi: "Keep Text Only"
    },
    {
      en: "Paste Special",
      hi: "Paste Special"
    }
  ],

  answer: "A",

  explanation: "Keep Source Formatting copied content की original formatting को retain करने का प्रयास करता है।"
},

// Question 77
{
  en: "Which Paste option removes most source formatting and inserts the content as plain text?",
  hi: "कौन-सा Paste option अधिकांश source formatting को remove करके content को plain text के रूप में insert करता है?",

  options: [
    {
      en: "Keep Source Formatting",
      hi: "Keep Source Formatting"
    },
    {
      en: "Merge Formatting",
      hi: "Merge Formatting"
    },
    {
      en: "Keep Text Only",
      hi: "Keep Text Only"
    },
    {
      en: "Original Formatting",
      hi: "Original Formatting"
    }
  ],

  answer: "C",

  explanation: "Keep Text Only source formatting को हटाकर content को केवल text के रूप में paste करता है।"
},

// Question 78
{
  en: "A user wants to move a paragraph from one location to another within the same document. Which sequence is most appropriate?",
  hi: "एक user paragraph को उसी document में एक location से दूसरी location पर move करना चाहता है। कौन-सा sequence सबसे appropriate है?",

  options: [
    {
      en: "Copy the paragraph → delete the original → close the document",
      hi: "Paragraph copy करें → original delete करें → document close करें"
    },
    {
      en: "Select the paragraph → Cut → place the insertion point at the destination → Paste",
      hi: "Paragraph select करें → Cut करें → destination पर insertion point रखें → Paste करें"
    },
    {
      en: "Select the paragraph → Copy → replace the file extension",
      hi: "Paragraph select करें → Copy करें → file extension replace करें"
    },
    {
      en: "Select the paragraph → Print → Paste",
      hi: "Paragraph select करें → Print करें → Paste करें"
    }
  ],

  answer: "B",

  explanation: "Cut और Paste का उपयोग करके paragraph को original location से हटाकर desired destination पर move किया जा सकता है।"
},

// Question 79
{
  en: "What is the basic purpose of Paste Special in MS Word?",
  hi: "MS Word में Paste Special का basic purpose क्या है?",

  options: [
    {
      en: "To provide additional options for controlling how copied or cut content is inserted",
      hi: "Copied या cut content को किस तरह insert किया जाए, इसे control करने के लिए additional options provide करना"
    },
    {
      en: "To permanently delete the Clipboard",
      hi: "Clipboard को permanently delete करना"
    },
    {
      en: "To close the current document",
      hi: "Current document को close करना"
    },
    {
      en: "To change the page orientation automatically",
      hi: "Page orientation को automatically change करना"
    }
  ],

  answer: "A",

  explanation: "Paste Special copied या cut content को different formats या available paste options के अनुसार insert करने की सुविधा देता है।"
},

// Question 80
{
  en: "Which statement correctly distinguishes Cut from Copy in MS Word?",
  hi: "MS Word में Cut और Copy के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Cut creates another copy while leaving the original unchanged; Copy removes the original",
      hi: "Cut original को unchanged रखते हुए दूसरी copy बनाता है; Copy original को remove करता है"
    },
    {
      en: "Cut and Copy both remove the original content",
      hi: "Cut और Copy दोनों original content को remove करते हैं"
    },
    {
      en: "Cut removes the selected content from its original location for later pasting, whereas Copy leaves the original content in place",
      hi: "Cut selected content को original location से remove करके later pasting के लिए रखता है, जबकि Copy original content को अपनी जगह पर रखता है"
    },
    {
      en: "Cut can be used only with images, whereas Copy can be used only with text",
      hi: "Cut केवल images के साथ use किया जा सकता है, जबकि Copy केवल text के साथ use किया जा सकता है"
    }
  ],

  answer: "C",

  explanation: "Cut content को original location से remove करता है, जबकि Copy original content को वहीं रखते हुए उसकी copy Clipboard में रखता है।"
},
// Question 81
{
  en: "Which keyboard shortcut is used to undo the most recent action in MS Word?",
  hi: "MS Word में most recent action को undo करने के लिए कौन-सा keyboard shortcut use किया जाता है?",

  options: [
    {
      en: "Ctrl + Y",
      hi: "Ctrl + Y"
    },
    {
      en: "Ctrl + Z",
      hi: "Ctrl + Z"
    },
    {
      en: "Ctrl + R",
      hi: "Ctrl + R"
    },
    {
      en: "Ctrl + U",
      hi: "Ctrl + U"
    }
  ],

  answer: "B",

  explanation: "Ctrl + Z का उपयोग MS Word में most recent action को undo करने के लिए किया जाता है।"
},

// Question 82
{
  en: "What does the Redo command generally do in MS Word?",
  hi: "MS Word में Redo command generally क्या करता है?",

  options: [
    {
      en: "Reverses an action that has just been performed",
      hi: "अभी performed action को reverse करता है"
    },
    {
      en: "Repeats the last typed word automatically",
      hi: "Last typed word को automatically repeat करता है"
    },
    {
      en: "Restores an action that was previously undone",
      hi: "Previously undone action को restore करता है"
    },
    {
      en: "Deletes the current selection",
      hi: "Current selection को delete करता है"
    }
  ],

  answer: "C",

  explanation: "Redo previously undone action को फिर से apply या restore करता है।"
},

// Question 83
{
  en: "A user performs three editing actions and then clicks the Undo button three times. What is the expected result?",
  hi: "एक user तीन editing actions perform करता है और फिर Undo button को तीन बार click करता है। Expected result क्या होगा?",

  options: [
    {
      en: "Only the most recent action is undone",
      hi: "केवल most recent action undo होगा"
    },
    {
      en: "The document is automatically closed",
      hi: "Document automatically close हो जाएगा"
    },
    {
      en: "The three actions are undone in reverse order",
      hi: "तीनों actions reverse order में undo होंगे"
    },
    {
      en: "All future actions are disabled",
      hi: "सभी future actions disable हो जाएंगे"
    }
  ],

  answer: "C",

  explanation: "Undo actions को एक-एक करके reverse order में undo करता है, इसलिए तीन Undo से तीनों actions reverse order में undo होंगे।"
},

// Question 84
{
  en: "Which keyboard shortcut is commonly used for Redo in MS Word?",
  hi: "MS Word में Redo के लिए commonly कौन-सा keyboard shortcut use किया जाता है?",

  options: [
    {
      en: "Ctrl + Y",
      hi: "Ctrl + Y"
    },
    {
      en: "Ctrl + Z",
      hi: "Ctrl + Z"
    },
    {
      en: "Ctrl + X",
      hi: "Ctrl + X"
    },
    {
      en: "Ctrl + C",
      hi: "Ctrl + C"
    }
  ],

  answer: "A",

  explanation: "Ctrl + Y MS Word में Redo या कुछ actions को repeat करने के लिए commonly used shortcut है।"
},

// Question 85
{
  en: "What is the basic purpose of the Undo history in MS Word?",
  hi: "MS Word में Undo history का basic purpose क्या है?",

  options: [
    {
      en: "To record previous actions so that multiple actions can be undone",
      hi: "Previous actions को record करना ताकि multiple actions को undo किया जा सके"
    },
    {
      en: "To store deleted documents permanently",
      hi: "Deleted documents को permanently store करना"
    },
    {
      en: "To display the document's printing history",
      hi: "Document की printing history display करना"
    },
    {
      en: "To record only keyboard shortcuts",
      hi: "केवल keyboard shortcuts record करना"
    }
  ],

  answer: "A",

  explanation: "Undo history previous actions को track करती है, जिससे जरूरत के अनुसार multiple actions को undo किया जा सकता है।"
},

// Question 86
{
  en: "A user accidentally undoes an action and then wants to restore that action. Which operation should be used?",
  hi: "एक user गलती से किसी action को undo कर देता है और फिर उस action को restore करना चाहता है। किस operation का उपयोग करना चाहिए?",

  options: [
    {
      en: "Repeat",
      hi: "Repeat"
    },
    {
      en: "Redo",
      hi: "Redo"
    },
    {
      en: "Cut",
      hi: "Cut"
    },
    {
      en: "Paste",
      hi: "Paste"
    }
  ],

  answer: "B",

  explanation: "Redo का उपयोग previously undone action को फिर से restore या apply करने के लिए किया जाता है।"
},

// Question 87
{
  en: "Which statement correctly distinguishes Undo from Repeat Last Action?",
  hi: "Undo और Repeat Last Action के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Undo reverses a previous action, whereas Repeat performs the last applicable action again",
      hi: "Undo previous action को reverse करता है, जबकि Repeat last applicable action को फिर से perform करता है"
    },
    {
      en: "Undo and Repeat always perform exactly the same operation",
      hi: "Undo और Repeat हमेशा exactly same operation perform करते हैं"
    },
    {
      en: "Undo repeats an action, whereas Repeat reverses it",
      hi: "Undo action को repeat करता है, जबकि Repeat उसे reverse करता है"
    },
    {
      en: "Both commands permanently delete the last action",
      hi: "दोनों commands last action को permanently delete करते हैं"
    }
  ],

  answer: "A",

  explanation: "Undo किसी previous action को reverse करता है, जबकि Repeat किसी applicable action को दोबारा perform करता है।"
},

// Question 88
{
  en: "Where can Undo, Redo, and other frequently used commands commonly be accessed in MS Word?",
  hi: "MS Word में Undo, Redo और अन्य frequently used commands को commonly कहाँ access किया जा सकता है?",

  options: [
    {
      en: "Status Bar",
      hi: "Status Bar"
    },
    {
      en: "Quick Access Toolbar",
      hi: "Quick Access Toolbar"
    },
    {
      en: "Ruler",
      hi: "Ruler"
    },
    {
      en: "Navigation Pane",
      hi: "Navigation Pane"
    }
  ],

  answer: "B",

  explanation: "Quick Access Toolbar में Undo, Redo और अन्य frequently used commands commonly available होते हैं।"
},

// Question 89
{
  en: "In MS Word, what does the Font Size setting primarily control?",
  hi: "MS Word में Font Size setting primarily क्या control करती है?",

  options: [
    {
      en: "The spacing between paragraphs",
      hi: "Paragraphs के बीच spacing"
    },
    {
      en: "The height of characters in the selected text",
      hi: "Selected text के characters की height"
    },
    {
      en: "The color of the page background",
      hi: "Page background का color"
    },
    {
      en: "The alignment of the paragraph",
      hi: "Paragraph का alignment"
    }
  ],

  answer: "B",

  explanation: "Font Size selected text के characters के displayed size को control करता है।"
},

// Question 90
{
  en: "Which formatting option makes selected text appear darker and heavier than normal?",
  hi: "कौन-सा formatting option selected text को normal text की तुलना में darker और heavier दिखाता है?",

  options: [
    {
      en: "Italic",
      hi: "Italic"
    },
    {
      en: "Underline",
      hi: "Underline"
    },
    {
      en: "Bold",
      hi: "Bold"
    },
    {
      en: "Strikethrough",
      hi: "Strikethrough"
    }
  ],

  answer: "C",

  explanation: "Bold formatting selected text को darker और heavier appearance देती है।"
},
// Question 91
{
  en: "Which MS Word feature is used to change selected text from lowercase to UPPERCASE, Sentence case, or other available case formats?",
  hi: "Selected text को lowercase से UPPERCASE, Sentence case या अन्य available case formats में बदलने के लिए MS Word का कौन-सा feature use किया जाता है?",

  options: [
    {
      en: "Change Case",
      hi: "Change Case"
    },
    {
      en: "Clear Formatting",
      hi: "Clear Formatting"
    },
    {
      en: "Text Effects",
      hi: "Text Effects"
    },
    {
      en: "Font Color",
      hi: "Font Color"
    }
  ],

  answer: "A",

  explanation: "Change Case feature selected text को UPPERCASE, lowercase, Sentence case आदि formats में बदलने की सुविधा देता है।"
},

// Question 92
{
  en: "A user wants to apply bold, italic, and underline simultaneously to the same selected text. What should the user do?",
  hi: "एक user same selected text पर bold, italic और underline simultaneously apply करना चाहता है। उसे क्या करना चाहिए?",

  options: [
    {
      en: "Apply each required formatting option to the selected text",
      hi: "Selected text पर प्रत्येक required formatting option apply करना"
    },
    {
      en: "Use Clear Formatting and then save the document",
      hi: "Clear Formatting use करके document save करना"
    },
    {
      en: "Change the font family only",
      hi: "केवल font family change करना"
    },
    {
      en: "Use the Text Highlight option three times",
      hi: "Text Highlight option को तीन बार use करना"
    }
  ],

  answer: "A",

  explanation: "Selected text पर Bold, Italic और Underline options को individually apply करके तीनों formatting एक साथ दी जा सकती हैं।"
},

// Question 93
{
  en: "Which option in MS Word is used to remove applied character formatting while generally leaving the text itself unchanged?",
  hi: "MS Word में applied character formatting को remove करने के लिए, जबकि text को generally unchanged रखते हुए, किस option का उपयोग किया जाता है?",

  options: [
    {
      en: "Strikethrough",
      hi: "Strikethrough"
    },
    {
      en: "Clear Formatting",
      hi: "Clear Formatting"
    },
    {
      en: "Change Case",
      hi: "Change Case"
    },
    {
      en: "Text Highlight",
      hi: "Text Highlight"
    }
  ],

  answer: "B",

  explanation: "Clear Formatting applied character formatting को remove करता है और text content को generally unchanged रखता है।"
},

// Question 94
{
  en: "What is the primary purpose of Text Highlight Color in MS Word?",
  hi: "MS Word में Text Highlight Color का primary purpose क्या है?",

  options: [
    {
      en: "To change the font family",
      hi: "Font family change करना"
    },
    {
      en: "To place a colored highlight behind selected text",
      hi: "Selected text के पीछे colored highlight लगाना"
    },
    {
      en: "To increase the font size",
      hi: "Font size increase करना"
    },
    {
      en: "To convert text into a hyperlink",
      hi: "Text को hyperlink में convert करना"
    }
  ],

  answer: "B",

  explanation: "Text Highlight Color selected text के पीछे colored background highlight apply करता है।"
},

// Question 95
{
  en: "Which statement correctly distinguishes Strikethrough from Double Strikethrough?",
  hi: "Strikethrough और Double Strikethrough के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Strikethrough applies one line through text, while Double Strikethrough applies two lines through text",
      hi: "Strikethrough text के through one line apply करता है, जबकि Double Strikethrough two lines apply करता है"
    },
    {
      en: "Strikethrough changes text to italic, while Double Strikethrough makes it bold",
      hi: "Strikethrough text को italic करता है, जबकि Double Strikethrough उसे bold करता है"
    },
    {
      en: "Strikethrough changes the font color, while Double Strikethrough changes the font size",
      hi: "Strikethrough font color change करता है, जबकि Double Strikethrough font size change करता है"
    },
    {
      en: "Both options produce exactly the same visual effect",
      hi: "दोनों options exactly same visual effect produce करते हैं"
    }
  ],

  answer: "A",

  explanation: "Strikethrough में text के through single line होती है, जबकि Double Strikethrough में double line होती है।"
},

// Question 96
{
  en: "Which of the following is a character-formatting property in MS Word?",
  hi: "निम्नलिखित में से कौन-सी MS Word में character-formatting property है?",

  options: [
    {
      en: "Paragraph indentation",
      hi: "Paragraph indentation"
    },
    {
      en: "Line spacing",
      hi: "Line spacing"
    },
    {
      en: "Font family",
      hi: "Font family"
    },
    {
      en: "Page orientation",
      hi: "Page orientation"
    }
  ],

  answer: "C",

  explanation: "Font family character formatting का हिस्सा है, जबकि indentation, line spacing और page orientation अन्य formatting categories से related हैं।"
},

// Question 97
{
  en: "Which character formatting option places selected text slightly above the normal text line, as commonly used for exponents?",
  hi: "कौन-सा character formatting option selected text को normal text line से थोड़ा ऊपर place करता है, जैसा कि exponents में commonly use होता है?",

  options: [
    {
      en: "Subscript",
      hi: "Subscript"
    },
    {
      en: "Small Caps",
      hi: "Small Caps"
    },
    {
      en: "Superscript",
      hi: "Superscript"
    },
    {
      en: "Expanded Text",
      hi: "Expanded Text"
    }
  ],

  answer: "C",

  explanation: "Superscript text को normal text line से ऊपर उठाता है और इसका use exponents जैसे x² में commonly होता है।"
},

// Question 98
{
  en: "What is the effect of applying Subscript formatting to selected text in MS Word?",
  hi: "MS Word में selected text पर Subscript formatting apply करने का effect क्या होता है?",

  options: [
    {
      en: "It places the text slightly below the normal text line",
      hi: "यह text को normal text line से थोड़ा नीचे place करता है"
    },
    {
      en: "It increases the spacing between characters",
      hi: "यह characters के बीच spacing increase करता है"
    },
    {
      en: "It converts all letters to uppercase",
      hi: "यह सभी letters को uppercase में convert करता है"
    },
    {
      en: "It hides the selected text",
      hi: "यह selected text को hide करता है"
    }
  ],

  answer: "A",

  explanation: "Subscript selected text को normal text line से थोड़ा नीचे position करता है, जैसे H₂O में ₂।"
},

// Question 99
{
  en: "Which option in the Advanced Font settings is used to increase the horizontal spacing between characters?",
  hi: "Advanced Font settings में characters के बीच horizontal spacing increase करने के लिए किस option का उपयोग किया जाता है?",

  options: [
    {
      en: "Condensed",
      hi: "Condensed"
    },
    {
      en: "Expanded",
      hi: "Expanded"
    },
    {
      en: "Small Caps",
      hi: "Small Caps"
    },
    {
      en: "Superscript",
      hi: "Superscript"
    }
  ],

  answer: "B",

  explanation: "Expanded character spacing को horizontally increase करता है, जिससे characters के बीच अधिक space दिखाई देता है।"
},

// Question 100
{
  en: "Which statement correctly distinguishes character formatting from paragraph formatting in MS Word?",
  hi: "MS Word में character formatting और paragraph formatting के बीच difference को कौन-सा statement सही रूप से बताता है?",

  options: [
    {
      en: "Character formatting affects properties such as font, size, and style, while paragraph formatting affects properties such as alignment, indentation, and spacing",
      hi: "Character formatting font, size और style जैसी properties को affect करता है, जबकि paragraph formatting alignment, indentation और spacing जैसी properties को affect करता है"
    },
    {
      en: "Character formatting affects only page margins, while paragraph formatting affects only font color",
      hi: "Character formatting केवल page margins को affect करता है, जबकि paragraph formatting केवल font color को affect करता है"
    },
    {
      en: "Both terms refer exclusively to page layout settings",
      hi: "दोनों terms exclusively page layout settings को refer करते हैं"
    },
    {
      en: "Paragraph formatting can be applied only to individual characters",
      hi: "Paragraph formatting केवल individual characters पर apply किया जा सकता है"
    }
  ],

  answer: "A",

  explanation: "Character formatting text की appearance से related होती है, जबकि paragraph formatting alignment, indentation और spacing जैसी paragraph-level properties को control करती है।"
},

// Question 101
{
  en: "Which formatting option displays lowercase letters in a smaller uppercase style while keeping the text's lowercase characters visually distinct?",
  hi: "कौन-सा formatting option lowercase letters को smaller uppercase style में display करता है, जबकि text के lowercase characters visually distinct रहते हैं?",

  options: [
    {
      en: "All Caps",
      hi: "All Caps"
    },
    {
      en: "Small Caps",
      hi: "Small Caps"
    },
    {
      en: "Superscript",
      hi: "Superscript"
    },
    {
      en: "Hidden Text",
      hi: "Hidden Text"
    }
  ],

  answer: "B",

  explanation: "Small Caps lowercase letters को छोटे uppercase-style characters के रूप में display करता है, जबकि capital letters अपेक्षाकृत बड़े रहते हैं।"
},

// Question 102
{
  en: "What does the All Caps option generally do to selected text in MS Word?",
  hi: "MS Word में All Caps option selected text के साथ generally क्या करता है?",

  options: [
    {
      en: "Converts the displayed letters to uppercase",
      hi: "Displayed letters को uppercase में convert करता है"
    },
    {
      en: "Places the text below the baseline",
      hi: "Text को baseline से नीचे place करता है"
    },
    {
      en: "Increases character spacing only",
      hi: "केवल character spacing increase करता है"
    },
    {
      en: "Hides the selected text",
      hi: "Selected text को hide करता है"
    }
  ],

  answer: "A",

  explanation: "All Caps selected text के displayed letters को uppercase में दिखाता है।"
},

// Question 103
{
  en: "Which statement about Hidden Text in MS Word is correct?",
  hi: "MS Word में Hidden Text के बारे में कौन-सा statement सही है?",

  options: [
    {
      en: "It changes the selected text into a hyperlink",
      hi: "यह selected text को hyperlink में change करता है"
    },
    {
      en: "It marks selected text so that it can be hidden from normal document display, subject to display settings",
      hi: "यह selected text को इस प्रकार mark करता है कि display settings के अनुसार उसे normal document display से hide किया जा सके"
    },
    {
      en: "It permanently deletes the selected text",
      hi: "यह selected text को permanently delete करता है"
    },
    {
      en: "It converts the selected text into an image",
      hi: "यह selected text को image में convert करता है"
    }
  ],

  answer: "B",

  explanation: "Hidden formatting text को hidden के रूप में mark करती है; उसका visible होना Word की display settings पर depend करता है।"
},

// Question 104
{
  en: "Which setting is used to control whether the selected text is displayed with a line through it?",
  hi: "Selected text को उसके through एक line के साथ display करने के लिए कौन-सी setting use की जाती है?",

  options: [
    {
      en: "Highlight",
      hi: "Highlight"
    },
    {
      en: "Font Color",
      hi: "Font Color"
    },
    {
      en: "Strikethrough",
      hi: "Strikethrough"
    },
    {
      en: "Character Spacing",
      hi: "Character Spacing"
    }
  ],

  answer: "C",

  explanation: "Strikethrough selected text के बीच से एक line display करता है।"
},

// Question 105
{
  en: "Which Change Case option in MS Word converts selected text so that the first letter of a sentence is capitalized and the remaining letters are changed to lowercase?",
  hi: "MS Word में कौन-सा Change Case option selected text में sentence के first letter को capitalized और remaining letters को lowercase करता है?",

  options: [
    {
      en: "lowercase",
      hi: "lowercase"
    },
    {
      en: "Sentence case",
      hi: "Sentence case"
    },
    {
      en: "UPPERCASE",
      hi: "UPPERCASE"
    },
    {
      en: "tOGGLE cASE",
      hi: "tOGGLE cASE"
    }
  ],

  answer: "B",

  explanation: "Sentence case में sentence का पहला letter capital होता है और बाकी letters lowercase में होते हैं।"
},
// Question 106
{
  en: "Which Change Case option converts all selected letters to lowercase?",
  hi: "कौन-सा Change Case option सभी selected letters को lowercase में convert करता है?",

  options: [
    {
      en: "lowercase",
      hi: "lowercase"
    },
    {
      en: "Sentence case",
      hi: "Sentence case"
    },
    {
      en: "Capitalize Each Word",
      hi: "Capitalize Each Word"
    },
    {
      en: "UPPERCASE",
      hi: "UPPERCASE"
    }
  ],

  answer: "A",

  explanation: "lowercase option selected text के सभी letters को lowercase में convert करता है।"
},

// Question 107
{
  en: "A user has typed a paragraph in lowercase and wants to convert all its letters to uppercase without retyping it. Which option should be used?",
  hi: "एक user ने paragraph lowercase में type किया है और बिना retype किए सभी letters को uppercase में convert करना चाहता है। किस option का उपयोग करना चाहिए?",

  options: [
    {
      en: "Sentence case",
      hi: "Sentence case"
    },
    {
      en: "Capitalize Each Word",
      hi: "Capitalize Each Word"
    },
    {
      en: "UPPERCASE",
      hi: "UPPERCASE"
    },
    {
      en: "tOGGLE cASE",
      hi: "tOGGLE cASE"
    }
  ],

  answer: "C",

  explanation: "UPPERCASE option selected text के सभी letters को uppercase में convert करता है।"
},

// Question 108
{
  en: "Which Change Case option changes text such as \"mICROSOFT wORD\" to \"Microsoft Word\"?",
  hi: "कौन-सा Change Case option \"mICROSOFT wORD\" जैसे text को \"Microsoft Word\" में बदलता है?",

  options: [
    {
      en: "Sentence case",
      hi: "Sentence case"
    },
    {
      en: "lowercase",
      hi: "lowercase"
    },
    {
      en: "UPPERCASE",
      hi: "UPPERCASE"
    },
    {
      en: "Capitalize Each Word",
      hi: "Capitalize Each Word"
    }
  ],

  answer: "D",

  explanation: "Capitalize Each Word प्रत्येक word के first letter को uppercase करता है और बाकी letters को lowercase करता है।"
},

// Question 109
{
  en: "What does the tOGGLE cASE option generally do in MS Word?",
  hi: "MS Word में tOGGLE cASE option generally क्या करता है?",

  options: [
    {
      en: "Capitalizes only the first letter of each sentence",
      hi: "केवल प्रत्येक sentence के first letter को capitalize करता है"
    },
    {
      en: "Changes uppercase letters to lowercase and lowercase letters to uppercase",
      hi: "Uppercase letters को lowercase और lowercase letters को uppercase में बदलता है"
    },
    {
      en: "Converts all letters to uppercase",
      hi: "सभी letters को uppercase में convert करता है"
    },
    {
      en: "Converts all letters to lowercase",
      hi: "सभी letters को lowercase में convert करता है"
    }
  ],

  answer: "B",

  explanation: "tOGGLE cASE existing uppercase letters को lowercase और lowercase letters को uppercase में बदलता है।"
},

// Question 110
{
  en: "A user wants to apply a case conversion to only one sentence within a paragraph. What should the user do first?",
  hi: "एक user paragraph के अंदर केवल एक sentence पर case conversion apply करना चाहता है। उसे सबसे पहले क्या करना चाहिए?",

  options: [
    {
      en: "Select the required sentence and then apply the appropriate Change Case option",
      hi: "Required sentence को select करके appropriate Change Case option apply करना"
    },
    {
      en: "Close the document and reopen it",
      hi: "Document को close करके फिर से open करना"
    },
    {
      en: "Change the file format before applying Change Case",
      hi: "Change Case apply करने से पहले file format change करना"
    },
    {
      en: "Select the entire document automatically",
      hi: "पूरे document को automatically select करना"
    }
  ],

  answer: "A",

  explanation: "केवल एक sentence पर case conversion लगाने के लिए पहले उसी sentence को select करना चाहिए।"
},

// Question 111
{
  en: "What is a practical advantage of using the Change Case command instead of manually retyping text?",
  hi: "Manually text retype करने के बजाय Change Case command use करने का practical advantage क्या है?",

  options: [
    {
      en: "It can change the letter case of selected existing text without requiring the text to be retyped",
      hi: "यह selected existing text का letter case change कर सकता है, बिना text को retype किए"
    },
    {
      en: "It permanently deletes the original text before conversion",
      hi: "यह conversion से पहले original text को permanently delete कर देता है"
    },
    {
      en: "It changes the document's file format automatically",
      hi: "यह document का file format automatically change करता है"
    },
    {
      en: "It can only be used on newly typed text",
      hi: "इसे केवल newly typed text पर ही use किया जा सकता है"
    }
  ],

  answer: "A",

  explanation: "Change Case existing selected text का case बदलता है, इसलिए उसे manually retype करने की जरूरत नहीं होती।"
},

// Question 112
{
  en: "Which statement correctly describes Change Case in MS Word?",
  hi: "MS Word में Change Case को कौन-सा statement सही रूप से describe करता है?",

  options: [
    {
      en: "It changes the case of selected text while retaining the text itself, making it useful for correcting or standardizing capitalization",
      hi: "यह selected text का case change करता है और text को retain रखता है, जिससे capitalization को correct या standardize करना आसान होता है"
    },
    {
      en: "It changes only the font size of selected text",
      hi: "यह केवल selected text का font size change करता है"
    },
    {
      en: "It changes paragraph alignment instead of letter case",
      hi: "यह letter case के बजाय paragraph alignment change करता है"
    },
    {
      en: "It can be used only before any text is entered",
      hi: "इसे केवल text enter करने से पहले ही use किया जा सकता है"
    }
  ],

  answer: "A",

  explanation: "Change Case selected text की capitalization बदलता है और text content को retain रखता है।"
},

// Question 113
{
  en: "Which paragraph alignment makes the left and right edges of a paragraph appear evenly aligned by adjusting the spacing between words?",
  hi: "कौन-सा paragraph alignment words के बीच spacing adjust करके paragraph के left और right edges को evenly aligned दिखाता है?",

  options: [
    {
      en: "Left",
      hi: "Left"
    },
    {
      en: "Center",
      hi: "Center"
    },
    {
      en: "Right",
      hi: "Right"
    },
    {
      en: "Justify",
      hi: "Justify"
    }
  ],

  answer: "D",

  explanation: "Justify alignment words के बीच spacing adjust करके paragraph के left और right edges को aligned करता है।"
},

// Question 114
{
  en: "In MS Word, what does paragraph indentation control?",
  hi: "MS Word में paragraph indentation क्या control करता है?",

  options: [
    {
      en: "The position of a paragraph's text relative to the page margins",
      hi: "Page margins के relative paragraph text की position"
    },
    {
      en: "The font size of the paragraph",
      hi: "Paragraph का font size"
    },
    {
      en: "The color of the paragraph",
      hi: "Paragraph का color"
    },
    {
      en: "The spacing between individual characters",
      hi: "Individual characters के बीच spacing"
    }
  ],

  answer: "A",

  explanation: "Indentation paragraph text की position को page margins के relative control करता है।"
},

// Question 115
{
  en: "Which setting controls the amount of vertical space between lines within the same paragraph?",
  hi: "Same paragraph के अंदर lines के बीच vertical space की मात्रा को कौन-सी setting control करती है?",

  options: [
    {
      en: "Spacing Before",
      hi: "Spacing Before"
    },
    {
      en: "Line Spacing",
      hi: "Line Spacing"
    },
    {
      en: "Spacing After",
      hi: "Spacing After"
    },
    {
      en: "Character Spacing",
      hi: "Character Spacing"
    }
  ],

  answer: "B",

  explanation: "Line Spacing paragraph की lines के बीच vertical space को control करती है।"
},
// Question 116
{
  en: "What is the purpose of the Spacing Before and Spacing After settings in paragraph formatting?",
  hi: "Paragraph formatting में Spacing Before और Spacing After settings का क्या उद्देश्य है?",

  options: [
    {
      en: "To control the vertical space before and after a paragraph",
      hi: "Paragraph के पहले और बाद की vertical space को नियंत्रित करना"
    },
    {
      en: "To change the horizontal position of individual characters",
      hi: "Individual characters की horizontal position बदलना"
    },
    {
      en: "To change the document's page size",
      hi: "Document का page size बदलना"
    },
    {
      en: "To control the width of the page margins",
      hi: "Page margins की width को नियंत्रित करना"
    }
  ],

  answer: "A",

  explanation: "Spacing Before और After paragraph के ऊपर और नीचे vertical space control करते हैं, जिससे paragraphs के बीच उचित दूरी रखी जाती है।"
},

// Question 117
{
  en: "A user wants to present a list of items using symbols such as dots rather than sequential numbers. Which feature should be used?",
  hi: "एक user sequential numbers के बजाय dots जैसे symbols का उपयोग करके items की list प्रस्तुत करना चाहता है। उसे कौन-सा feature उपयोग करना चाहिए?",

  options: [
    {
      en: "Numbering",
      hi: "Numbering"
    },
    {
      en: "Borders",
      hi: "Borders"
    },
    {
      en: "Bullets",
      hi: "Bullets"
    },
    {
      en: "Shading",
      hi: "Shading"
    }
  ],

  answer: "C",

  explanation: "Bullets का उपयोग items की unordered list बनाने के लिए किया जाता है, जिसमें dots या अन्य symbols दिखाए जा सकते हैं।"
},

// Question 118
{
  en: "Which option in the Paragraph settings is used to prevent a paragraph from being separated from the paragraph that follows it?",
  hi: "Paragraph settings में कौन-सा option किसी paragraph को उसके बाद आने वाले paragraph से अलग होने से रोकने के लिए उपयोग किया जाता है?",

  options: [
    {
      en: "Keep Lines Together",
      hi: "Keep Lines Together"
    },
    {
      en: "Keep with Next",
      hi: "Keep with Next"
    },
    {
      en: "Widow/Orphan Control",
      hi: "Widow/Orphan Control"
    },
    {
      en: "Line Spacing",
      hi: "Line Spacing"
    }
  ],

  answer: "B",

  explanation: "Keep with Next current paragraph को अगले paragraph के साथ रखने की कोशिश करता है, ताकि दोनों अलग-अलग pages पर न जाएँ।"
},

// Question 119
{
  en: "What is the basic purpose of Widow/Orphan Control in MS Word?",
  hi: "MS Word में Widow/Orphan Control का basic purpose क्या है?",

  options: [
    {
      en: "To prevent isolated lines of a paragraph from appearing alone at the top or bottom of a page",
      hi: "Paragraph की isolated lines को page के top या bottom पर अकेले दिखाई देने से रोकना"
    },
    {
      en: "To keep two paragraphs permanently on the same page",
      hi: "दो paragraphs को हमेशा एक ही page पर रखना"
    },
    {
      en: "To add a border around every paragraph",
      hi: "हर paragraph के चारों ओर border लगाना"
    },
    {
      en: "To remove extra spaces between words",
      hi: "Words के बीच extra spaces को हटाना"
    }
  ],

  answer: "A",

  explanation: "Widow/Orphan Control paragraph की अकेली line को page के top या bottom पर अलग दिखाई देने से रोकता है, जिससे document layout बेहतर रहता है।"
},

// Question 120
{
  en: "Which statement correctly describes paragraph formatting in MS Word?",
  hi: "MS Word में paragraph formatting को कौन-सा statement सही तरीके से describe करता है?",

  options: [
    {
      en: "It primarily changes individual character properties such as font and font size",
      hi: "यह primarily individual character properties जैसे font और font size को बदलता है"
    },
    {
      en: "It primarily controls properties such as alignment, indentation, spacing, bullets, borders, and shading of paragraphs",
      hi: "यह primarily paragraphs की alignment, indentation, spacing, bullets, borders और shading जैसी properties को control करता है"
    },
    {
      en: "It can only be applied to headings",
      hi: "इसे केवल headings पर ही apply किया जा सकता है"
    },
    {
      en: "It changes the file format of the document",
      hi: "यह document का file format बदलता है"
    }
  ],

  answer: "B",

  explanation: "Paragraph formatting में alignment, indentation, spacing, bullets, borders और shading जैसी paragraph-level properties control की जाती हैं।"
}

];

export { questions };
