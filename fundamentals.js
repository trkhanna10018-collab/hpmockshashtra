// Computer Fundamentals Question Bank
// answer: 0 = A, 1 = B, 2 = C, 3 = D

export const QUESTIONS = [
  {
    en: "Which statement most accurately defines a computer in terms of its fundamental operation?",
    hi: "कंप्यूटर के मूलभूत कार्य के संदर्भ में निम्नलिखित में से कौन-सा कथन कंप्यूटर को सबसे सटीक रूप से परिभाषित करता है?",
    options: [
      {
        en: "A machine that can independently understand and make decisions without predefined instructions",
        hi: "एक ऐसी मशीन जो पूर्वनिर्धारित निर्देशों के बिना स्वतंत्र रूप से समझ और निर्णय ले सकती है"
      },
      {
        en: "An electronic programmable device that accepts data as input, processes it according to a set of instructions, and produces output",
        hi: "एक इलेक्ट्रॉनिक प्रोग्रामेबल उपकरण जो डेटा को इनपुट के रूप में स्वीकार करता है, निर्देशों के अनुसार उसे प्रोसेस करता है और आउटपुट प्रदान करता है"
      },
      {
        en: "A mechanical device designed exclusively for performing arithmetic calculations",
        hi: "एक यांत्रिक उपकरण जिसे केवल अंकगणितीय गणनाएँ करने के लिए बनाया गया है"
      },
      {
        en: "A communication device that converts all forms of information directly into human language",
        hi: "एक संचार उपकरण जो सभी प्रकार की जानकारी को सीधे मानव भाषा में परिवर्तित करता है"
      }
    ],
    answer: 1,
    explanation: "Computer एक electronic programmable device है, जो data को input के रूप में स्वीकार करता है, दिए गए instructions के अनुसार उसे process करता है और output प्रदान करता है। Electronic का अर्थ electronic circuits पर आधारित होना है। Programmable का अर्थ है कि कंप्यूटर को अलग-अलग कार्य करने के लिए instructions के अलग-अलग sets दिए जा सकते हैं। Input वह data है जो कंप्यूटर को दिया जाता है। Processing का अर्थ instructions के अनुसार data पर कार्य करना है। Output processing के बाद प्राप्त result होता है।"
  },

  {
    en: "Which sequence best represents the basic Input-Process-Output (IPO) model of a computer?",
    hi: "निम्नलिखित में से कौन-सा क्रम कंप्यूटर के मूल Input-Process-Output (IPO) मॉडल को सबसे अच्छी तरह दर्शाता है?",
    options: [
      {
        en: "Input → Processing → Output",
        hi: "इनपुट → प्रोसेसिंग → आउटपुट"
      },
      {
        en: "Processing → Input → Output",
        hi: "प्रोसेसिंग → इनपुट → आउटपुट"
      },
      {
        en: "Output → Input → Processing",
        hi: "आउटपुट → इनपुट → प्रोसेसिंग"
      },
      {
        en: "Input → Output → Processing",
        hi: "इनपुट → आउटपुट → प्रोसेसिंग"
      }
    ],
    answer: 0,
    explanation: "IPO model कंप्यूटर के मूल कार्य-चक्र को दर्शाता है। Input का अर्थ कंप्यूटर को data या instructions देना है। Processing का अर्थ दिए गए data पर instructions के अनुसार कार्य करना है। Output processing के बाद प्राप्त परिणाम है। IPO का पूरा नाम Input-Process-Output है।"
  },

  {
    en: "Which characteristic most fundamentally distinguishes a general-purpose computer from a device designed to perform only a fixed set of calculations?",
    hi: "निम्नलिखित में से कौन-सी विशेषता general-purpose computer को केवल निश्चित प्रकार की गणनाएँ करने वाले device से सबसे मूल रूप से अलग करती है?",
    options: [
      {
        en: "It performs operations at high speed",
        hi: "यह कार्यों को उच्च गति से करता है"
      },
      {
        en: "It can store data and results",
        hi: "यह डेटा और परिणामों को स्टोर कर सकता है"
      },
      {
        en: "It can be programmed to perform different tasks by executing different sets of instructions",
        hi: "इसे instructions के अलग-अलग sets को execute करके विभिन्न कार्य करने के लिए program किया जा सकता है"
      },
      {
        en: "It uses electronic components for processing",
        hi: "यह processing के लिए electronic components का उपयोग करता है"
      }
    ],
    answer: 2,
    explanation: "General-purpose computer को अलग-अलग कार्यों के लिए program किया जा सकता है। Programmable का अर्थ है कि कंप्यूटर को instructions के अलग-अलग sets देकर विभिन्न कार्य करवाए जा सकते हैं। General-purpose का अर्थ है कि device केवल एक निश्चित कार्य तक सीमित न होकर अनेक प्रकार के कार्य कर सकता है। Instruction एक ऐसा आदेश या निर्देश है जो कंप्यूटर को बताता है कि उसे क्या कार्य करना है।"
  },

  {
    en: "Why is a computer generally described as a programmable data-processing machine rather than an independent thinking machine?",
    hi: "कंप्यूटर को सामान्यतः independent thinking machine के बजाय programmable data-processing machine क्यों कहा जाता है?",
    options: [
      {
        en: "Because a computer cannot store data permanently",
        hi: "क्योंकि कंप्यूटर डेटा को स्थायी रूप से स्टोर नहीं कर सकता"
      },
      {
        en: "Because a computer processes data according to instructions provided to it",
        hi: "क्योंकि कंप्यूटर उसे दिए गए instructions के अनुसार data को process करता है"
      },
      {
        en: "Because a computer can perform only mathematical calculations",
        hi: "क्योंकि कंप्यूटर केवल mathematical calculations कर सकता है"
      },
      {
        en: "Because a computer cannot produce output without a printer",
        hi: "क्योंकि कंप्यूटर printer के बिना output produce नहीं कर सकता"
      }
    ],
    answer: 1,
    explanation: "Computer अपने कार्यों को दिए गए instructions के अनुसार करता है। Programmable का अर्थ है कि कंप्यूटर को instructions या programs के माध्यम से विभिन्न कार्य करने के लिए निर्देशित किया जा सकता है। Data से तात्पर्य raw facts and figures से है, जबकि Processing का अर्थ data पर निर्धारित instructions के अनुसार कार्य करना है।"
  },

  {
    en: "Which of the following correctly represents the four main functions of a computer?",
    hi: "निम्नलिखित में से कौन-सा कंप्यूटर के चार मुख्य कार्यों को सही रूप से दर्शाता है?",
    options: [
      {
        en: "Input, Processing, Output and Storage",
        hi: "इनपुट, प्रोसेसिंग, आउटपुट और स्टोरेज"
      },
      {
        en: "Input, Calculation, Printing and Communication",
        hi: "इनपुट, कैलकुलेशन, प्रिंटिंग और कम्युनिकेशन"
      },
      {
        en: "Reading, Writing, Printing and Scanning",
        hi: "रीडिंग, राइटिंग, प्रिंटिंग और स्कैनिंग"
      },
      {
        en: "Data Entry, Typing, Processing and Networking",
        hi: "डेटा एंट्री, टाइपिंग, प्रोसेसिंग और नेटवर्किंग"
      }
    ],
    answer: 0,
    explanation: "कंप्यूटर के चार मुख्य कार्य Input, Processing, Output और Storage हैं। Input का अर्थ data या instructions को कंप्यूटर में प्रवेश कराना है। Processing का अर्थ data पर instructions के अनुसार कार्य करना है। Output processing के बाद प्राप्त result है। Storage का अर्थ data, instructions और results को भविष्य में उपयोग के लिए सुरक्षित रखना है।"
  },

  {
    en: "Which statement correctly distinguishes data from information?",
    hi: "निम्नलिखित में से कौन-सा कथन Data और Information के बीच अंतर को सही रूप से स्पष्ट करता है?",
    options: [
      {
        en: "Data is always meaningful, whereas information is always meaningless",
        hi: "Data हमेशा meaningful होता है, जबकि Information हमेशा meaningless होती है"
      },
      {
        en: "Data consists of raw facts, while information is processed and meaningful data",
        hi: "Data में raw facts होते हैं, जबकि Information processed और meaningful data होती है"
      },
      {
        en: "Data and information are exactly the same in all contexts",
        hi: "सभी contexts में Data और Information बिल्कुल समान होते हैं"
      },
      {
        en: "Information is collected first and data is produced after processing",
        hi: "पहले Information collect की जाती है और processing के बाद Data produce होता है"
      }
    ],
    answer: 1,
    explanation: "Data में raw facts and figures होते हैं, जबकि Information वह processed data है जिसका अर्थ स्पष्ट हो और जो उपयोगी हो। Raw का अर्थ बिना processing या interpretation के होता है। Data उदाहरण के रूप में 72, 85 और 68 जैसे अलग-अलग marks हो सकते हैं। जब इन marks को process करके average या अन्य meaningful result प्राप्त किया जाता है, तो वह Information कहलाती है।"
  },

  {
    en: "In a basic computer working cycle, what normally happens immediately after the computer receives input data?",
    hi: "कंप्यूटर के basic working cycle में input data प्राप्त करने के तुरंत बाद सामान्यतः क्या होता है?",
    options: [
      {
        en: "The data is automatically deleted",
        hi: "Data अपने आप delete हो जाता है"
      },
      {
        en: "The processed result is displayed",
        hi: "Processed result display किया जाता है"
      },
      {
        en: "The input data is processed according to the given instructions",
        hi: "Input data को दिए गए instructions के अनुसार process किया जाता है"
      },
      {
        en: "The computer shuts down after storing the input",
        hi: "Input को store करने के बाद computer shut down हो जाता है"
      }
    ],
    answer: 2,
    explanation: "Input प्राप्त होने के बाद computer दिए गए instructions के अनुसार उस data को process करता है। Input का अर्थ computer को data या instructions देना है। Processing का अर्थ दिए गए instructions के आधार पर data पर आवश्यक operations करना है। Instructions वे commands या directions हैं जो computer को बताते हैं कि data पर कौन-सा कार्य करना है। Processing के बाद result को output के रूप में प्राप्त किया जाता है।"
  },

  {
    en: "A student enters the marks 72, 85, 68 and 75 into a computer. The computer calculates their average and displays 75. Which option correctly identifies the stages involved?",
    hi: "एक विद्यार्थी कंप्यूटर में 72, 85, 68 और 75 अंक दर्ज करता है। कंप्यूटर उनका average निकालता है और 75 प्रदर्शित करता है। निम्नलिखित में से कौन-सा विकल्प इसमें शामिल stages को सही रूप से पहचानता है?",
    options: [
      {
        en: "72, 85, 68, 75 = Information; 75 = Data",
        hi: "72, 85, 68, 75 = Information; 75 = Data"
      },
      {
        en: "Entered marks = Input/Data; calculation = Processing; 75 = Output/Information",
        hi: "Entered marks = Input/Data; calculation = Processing; 75 = Output/Information"
      },
      {
        en: "Entered marks = Output; calculation = Storage; 75 = Input",
        hi: "Entered marks = Output; calculation = Storage; 75 = Input"
      },
      {
        en: "Entered marks = Processing; calculation = Input; 75 = Storage",
        hi: "Entered marks = Processing; calculation = Input; 75 = Storage"
      }
    ],
    answer: 1,
    explanation: "Entered marks computer को दिए गए Input/Data हैं। उनका average निकालने की प्रक्रिया Processing है और प्राप्त 75 computer का Output/Information है। Input वह data है जो computer को दिया जाता है। Processing में data पर calculations या अन्य operations किए जाते हैं। Output processing के बाद प्राप्त result होता है। Information processed data है जो meaningful और उपयोगी होता है।"
  },

  {
    en: "A computer is asked to perform the same large-scale calculation repeatedly. Which combination of characteristics most directly explains why it can continue producing consistent results without becoming tired or losing concentration?",
    hi: "कंप्यूटर को एक ही large-scale calculation बार-बार करने के लिए कहा जाता है। कौन-सी विशेषताओं का combination सबसे सीधे यह समझाता है कि वह बिना थके या concentration खोए लगातार consistent results दे सकता है?",
    options: [
      {
        en: "Versatility and reliability",
        hi: "Versatility और Reliability"
      },
      {
        en: "Diligence and accuracy",
        hi: "Diligence और Accuracy"
      },
      {
        en: "Speed and versatility",
        hi: "Speed और Versatility"
      },
      {
        en: "Reliability and storage capacity",
        hi: "Reliability और Storage Capacity"
      }
    ],
    answer: 1,
    explanation: "Diligence और Accuracy कंप्यूटर की ऐसी characteristics हैं जो उसे repetitive tasks को बिना थके लगातार करने और सही instructions तथा data मिलने पर consistent results देने में सक्षम बनाती हैं। Diligence का अर्थ बिना थके लंबे समय तक लगातार कार्य करने की क्षमता है। Accuracy का अर्थ दिए गए instructions और data के आधार पर सही result प्रदान करने की क्षमता है। Computer में human-like fatigue या concentration loss नहीं होता।"
  },

  {
    en: "A computer processes millions of records rapidly, but its results are incorrect because the instructions or input data contain errors. Which conclusion best reflects the relationship between speed and accuracy?",
    hi: "एक कंप्यूटर लाखों records को बहुत तेजी से process करता है, लेकिन उसके results incorrect हैं क्योंकि instructions या input data में errors हैं। निम्नलिखित में से कौन-सा निष्कर्ष Speed और Accuracy के बीच संबंध को सबसे अच्छी तरह दर्शाता है?",
    options: [
      {
        en: "High processing speed guarantees accurate results",
        hi: "High processing speed accurate results की guarantee देती है"
      },
      {
        en: "Accuracy depends only on the processing speed of the computer",
        hi: "Accuracy केवल computer की processing speed पर depend करती है"
      },
      {
        en: "A computer can be fast while still producing incorrect results if the input or instructions are erroneous",
        hi: "यदि input या instructions में errors हों, तो computer fast होने के बावजूद incorrect results produce कर सकता है"
      },
      {
        en: "Accuracy and speed are two names for the same characteristic",
        hi: "Accuracy और Speed एक ही characteristic के दो नाम हैं"
      }
    ],
    answer: 2,
    explanation: "Computer की high processing speed अपने आप accurate results की guarantee नहीं देती। यदि input data या instructions में errors हैं, तो computer तेज गति से भी incorrect result produce कर सकता है। Speed का अर्थ किसी कार्य को पूरा करने की तेजी है, जबकि Accuracy का अर्थ सही result देने की क्षमता है। Input data वह data है जो computer को processing के लिए दिया जाता है और Instructions वे directions हैं जिनके अनुसार computer कार्य करता है।"
  }
];
