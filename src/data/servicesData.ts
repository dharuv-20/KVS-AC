import { ServiceCategory, ProblemItem, ProjectShowcase, FaqItem, ReviewItem } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'ac-types',
    slug: 'residential-ac',
    titleEn: 'AC Types & Systems',
    titleHi: 'एसी प्रकार एवं सिस्टम्स',
    descEn: 'End-to-end expertise across split, window, inverter, cassette, ductable, and VRV/VRF residential and light-commercial cooling units.',
    descHi: 'स्प्लिट, विंडो, इन्वर्टर, कैसेट, डक्टेबल और वीआरवी/वीआरएफ कूलिंग यूनिट्स में संपूर्ण विशेषज्ञता।',
    image: '/images/split-ac.jpg',
    iconName: 'Airplay',
    examplesEn: ['Split & Window AC', 'Inverter Technology', 'Cassette & Ductable Units', 'Tower & Central AC'],
    examplesHi: ['स्प्लिट एवं विंडो एसी', 'इन्वर्टर टेक्नोलॉजी', 'कैसेट व डक्टेबल यूनिट्स', 'टॉवर व सेंट्रल एसी']
  },
  {
    id: 'ac-repair',
    slug: 'ac-repair',
    titleEn: 'AC Repair Services',
    titleHi: 'एसी रिपेयर सेवाएं',
    descEn: 'Root-cause troubleshooting for cooling failures, PCB board burnouts, water leakage, strange noises, and compressor trips.',
    descHi: 'कूलिंग न होना, पीसीबी सर्किट बोर्ड की समस्या, पानी टपकना, असामान्य आवाजें और कंप्रेसर ट्रिपिंग का सटीक निदान।',
    image: '/images/hero-tech.jpg',
    iconName: 'Wrench',
    examplesEn: ['Cooling Failure Diagnosis', 'PCB Circuit Board Repair', 'Compressor & Fan Motors', 'Water & Gas Leak Fixes'],
    examplesHi: ['कूलिंग विफलता डायग्नोसिस', 'पीसीबी सर्किट बोर्ड रिपेयर', 'कंप्रेसर और फैन मोटर', 'पानी व गैस लीकेज सुधार']
  },
  {
    id: 'ac-cleaning',
    slug: 'ac-servicing-cleaning',
    titleEn: 'AC Servicing & Cleaning',
    titleHi: 'एसी सर्विसिंग एवं क्लीनिंग',
    descEn: 'High-pressure jet pump coil washing, anti-bacterial foam cleaning, filter sanitation, and drain line unclogging.',
    descHi: 'हाई-प्रेशर जेट पंप कॉइल वॉशिंग, एंटी-बैक्टीरियल फोम क्लीनिंग, फिल्टर सैनिटाइजेशन और ड्रेन लाइन सफाई।',
    image: '/images/jet-cleaning.jpg',
    iconName: 'Sparkles',
    examplesEn: ['Jet Pump Deep Cleaning', 'Indoor & Outdoor Coil Wash', 'Drain Pipe Unclogging', 'Blower & Filter Sanitation'],
    examplesHi: ['जेट पंप डीप क्लीनिंग', 'इंडोर व आउटडोर कॉइल वॉश', 'ड्रेन पाइप अनक्लॉगिंग', 'ब्लोअर व फिल्टर सैनिटेशन']
  },
  {
    id: 'ac-installation',
    slug: 'ac-installation',
    titleEn: 'AC Installation & Relocation',
    titleHi: 'एसी इंस्टालेशन एवं स्थानांतरण',
    descEn: 'Safe uninstallation, vibration-free mounting brackets, precision copper tube flaring, vacuuming, and complete shifting.',
    descHi: 'सुरक्षित अन-इंस्टालेशन, कंपन-मुक्त वॉल ब्रैकेट, सटीक कॉपर ट्यूब फ्लेयरिंग, वैक्यूमिंग और सुरक्षित शिफ्टिंग।',
    image: '/images/condenser.jpg',
    iconName: 'Move',
    examplesEn: ['New AC Split/Window Mount', 'Uninstallation & Safe Transit', 'Copper Piping Extension', 'Drain Line Laying'],
    examplesHi: ['नया स्प्लिट/विंडो माउंट', 'अन-इंस्टालेशन व शिफ्टिंग', 'कॉपर पाइपिंग एक्सटेंशन', 'ड्रेन लाइन फिटिंग']
  },
  {
    id: 'gas-refrigerant',
    slug: 'gas-refilling',
    titleEn: 'AC Gas & Refrigerant Services',
    titleHi: 'एसी गैस एवं रेफ्रिजरेंट सेवाएं',
    descEn: 'Nitrogen pressure testing to locate microscopic leaks, vacuum moisture purging, and pure R32/R410A/R22 gas charging by weight.',
    descHi: 'माइक्रोस्कोपिक लीक्स ढूंढने हेतु नाइट्रोजन प्रेशर टेस्टिंग, वैक्यूम मॉइस्चर रिमूवल और वजन के अनुसार शुद्ध गैस चार्जिंग।',
    image: '/images/hero-tech.jpg',
    iconName: 'Gauge',
    examplesEn: ['Nitrogen Leak Detection', 'System Vacuuming', 'Pure R32 / R410A / R22 Charging', 'Flare Connection Repair'],
    examplesHi: ['नाइट्रोजन लीक टेस्टिंग', 'डीप वैक्यूमिंग प्रोसेस', 'शुद्ध R32 / R410A / R22 चार्ज', 'फ्लेयर नट कनेक्शन सुधार']
  },
  {
    id: 'parts-replacement',
    slug: 'ac-repair',
    titleEn: 'AC Parts Repair & Replacement',
    titleHi: 'एसी पार्ट्स रिपेयर एवं रिप्लेसमेंट',
    descEn: 'Installation of genuine high-reliability replacement parts including run capacitors, fan motors, sensors, and contactors.',
    descHi: 'असली और विश्वसनीय रिप्लेसमेंट पार्ट्स: रन कैपेसिटर, फैन मोटर, सेंसर, रिले और कॉन्टैक्टर का सटीक प्रतिस्थापन।',
    image: '/images/why-us.jpg',
    iconName: 'Cpu',
    examplesEn: ['Heavy-Duty Capacitors', 'Inverter PCB Modules', 'Outdoor Fan Motors', 'Thermostats & Sensors'],
    examplesHi: ['हैवी-ड्यूटी कैपेसिटर', 'इन्वर्टर पीसीबी मॉड्यूल', 'आउटडोर फैन मोटर', 'थर्मोस्टैट्स व सेंसर']
  },
  {
    id: 'commercial-hvac',
    slug: 'commercial-hvac',
    titleEn: 'Commercial & Industrial HVAC',
    titleHi: 'कमर्शियल एवं इंडस्ट्रियल एचवीएसी',
    descEn: 'Heavy duty cooling for corporate offices, hospitals, manufacturing facilities, server rooms, and commercial complexes.',
    descHi: 'कॉर्पोरेट ऑफिस, अस्पताल, विनिर्माण प्लांट, सर्वर रूम और वाणिज्यिक भवनों हेतु बड़े पैमाने के कूलिंग समाधान।',
    image: '/images/commercial-vrv.jpg',
    iconName: 'Building2',
    examplesEn: ['VRV / VRF Central Systems', 'Chiller Plants & Cooling Towers', 'AHU & FCU Maintenance', 'Industrial Ductwork'],
    examplesHi: ['वीआरवी / वीआरएफ सेंट्रल सिस्टम्स', 'चिलर प्लांट व कूलिंग टावर्स', 'एएचयू व एफसीयू मेंटेनेंस', 'औद्योगिक डक्टवर्क']
  },
  {
    id: 'amc-maintenance',
    slug: 'amc-maintenance',
    titleEn: 'AMC & Preventive Maintenance',
    titleHi: 'एएमसी एवं प्रिवेंटिव मेंटेनेंस',
    descEn: 'Structured monthly, quarterly, and annual maintenance contracts to guarantee uninterrupted cooling and control operational costs.',
    descHi: 'निर्बाध कूलिंग और परिचालन लागत नियंत्रित रखने के लिए मासिक, त्रैमासिक एवं वार्षिक मेंटेनेंस अनुबंध।',
    image: '/images/ahu-plant.jpg',
    iconName: 'ShieldCheck',
    examplesEn: ['Annual Maintenance Contracts (AMC)', 'Quarterly Performance Checkups', 'Comprehensive & Non-Comp AMC', 'Emergency Breakdown Priority'],
    examplesHi: ['वार्षिक मेंटेनेंस कॉन्ट्रैक्ट (AMC)', 'त्रैमासिक परफॉर्मेंस चेकअप', 'कंप्रिहेंसिव व नॉन-कंप्रिहेंसिव', 'इमरजेंसी ब्रेकडाउन प्राथमिकता']
  }
];

export const residentialACTypes = [
  {
    id: 'split-ac',
    nameEn: 'Split AC Service',
    nameHi: 'स्प्लिट एसी सर्विस',
    descEn: 'Complete maintenance, indoor coil chemical wash, quiet outdoor unit balancing, and inverter diagnostics.',
    descHi: 'इंडोर कॉइल वॉश, आउटडोर यूनिट बैलेंसिंग और इन्वर्टर डायग्नोस्टिक्स सहित संपूर्ण रखरखाव।',
    image: '/images/split-ac.jpg',
  },
  {
    id: 'window-ac',
    nameEn: 'Window AC Service',
    nameHi: 'विंडो एसी सर्विस',
    descEn: 'Cabinet dismounting, heavy coil pressure descaling, motor lubrication, and front grill sanitation.',
    descHi: 'कैबिनेट डिस्माउंटिंग, कॉइल डीस्केलिंग, मोटर ऑयलिंग और फ्रंट ग्रिल की गहन सफाई।',
    image: '/images/condenser.jpg',
  },
  {
    id: 'inverter-ac',
    nameEn: 'Inverter AC Service',
    nameHi: 'इन्वर्टर एसी सर्विस',
    descEn: 'Variable-speed BLDC motor testing, dual inverter PCB electronic diagnostics, and thermal sensor calibration.',
    descHi: 'वेरिएबल स्पीड बीएलडीसी मोटर टेस्टिंग, डुअल इन्वर्टर पीसीबी इलेक्ट्रॉनिक्स और सेंसर कैलिब्रेशन।',
    image: '/images/hero-tech.jpg',
  },
  {
    id: 'non-inverter-ac',
    nameEn: 'Non-Inverter AC Service',
    nameHi: 'नॉन-इन्वर्टर एसी सर्विस',
    descEn: 'Fixed-speed compressor relay testing, capacitor health checks, and contactor maintenance.',
    descHi: 'फिक्स्ड-स्पीड कंप्रेसर रिले टेस्टिंग, रनिंग कैपेसिटर जांच और कॉन्टैक्टर मेंटेनेंस।',
    image: '/images/why-us.jpg',
  },
  {
    id: 'cassette-ac',
    nameEn: 'Cassette AC Service',
    nameHi: 'कैसेट एसी सर्विस',
    descEn: 'Ceiling unit filter cleaning, condensation lift pump inspection, and 4-way airflow louvre alignment.',
    descHi: 'सीलिंग यूनिट फिल्टर सफाई, कंडेनसेशन ड्रेन पंप टेस्टिंग और 4-वे एयरफ्लो संरेखण।',
    image: '/images/server-room.jpg',
  },
  {
    id: 'ductable-ac',
    nameEn: 'Ductable AC Service',
    nameHi: 'डक्टेबल एसी सर्विस',
    descEn: 'Concealed duct inspection, static pressure verification, plenum sanitizing, and damper tuning.',
    descHi: 'कंसील्ड डक्ट निरीक्षण, स्टैटिक प्रेशर जांच, प्लेनम सैनिटाइजेशन और डैम्पर ट्यूनिंग।',
    image: '/images/commercial-vrv.jpg',
  },
  {
    id: 'tower-ac',
    nameEn: 'Tower AC Service',
    nameHi: 'टॉवर एसी सर्विस',
    descEn: 'High-throw floor standing unit maintenance for living halls, banquet lounges, and commercial floors.',
    descHi: 'लिविंग हॉल और कमर्शियल स्पेस के लिए फ्लोर-स्टैंडिंग हाई-थ्रो यूनिट्स का मेंटेनेंस।',
    image: '/images/team.jpg',
  },
  {
    id: 'central-ac',
    nameEn: 'Central AC Service',
    nameHi: 'सेंट्रल एसी सर्विस',
    descEn: 'Air handler balance, chilled water coil descaling, zoning thermostat checks, and energy audits.',
    descHi: 'एयर हैंडलर बैलेंस, चिल्ड वाटर कॉइल डीस्केलिंग और थर्मोस्टैट ज़ोनिंग जांच।',
    image: '/images/ahu-plant.jpg',
  },
  {
    id: 'vrv-vrf-ac',
    nameEn: 'VRV/VRF AC Service',
    nameHi: 'वीआरवी/वीआरएफ एसी सर्विस',
    descEn: 'Multi-split branch distributor communication checks, oil return cycle testing, and electronic expansion valve testing.',
    descHi: 'मल्टी-स्प्लिट ब्रांच डिस्ट्रीब्यूटर कम्युनिकेशन, ऑयल रिटर्न साइकिल और इलेक्ट्रॉनिक एक्सपेंशन वाल्व।',
    image: '/images/industrial-chiller.jpg',
  },
  {
    id: 'package-ac',
    nameEn: 'Package AC Service',
    nameHi: 'पैकेज एसी सर्विस',
    descEn: 'Self-contained rooftop package unit maintenance, belt tensioning, and condenser fan balancing.',
    descHi: 'रूफटॉप पैकेज यूनिट मेंटेनेंस, ब्लोअर बेल्ट टेंशनिंग और कंडेनसर फैन बैलेंसिंग।',
    image: '/images/jet-cleaning.jpg',
  }
];

export const repairProblems: ProblemItem[] = [
  {
    id: 'ac-not-cooling',
    titleEn: 'AC Not Cooling Repair',
    titleHi: 'एसी ठंडा नहीं कर रहा',
    descEn: 'Blowing normal or warm air. Caused by clogged coils, low gas pressure, faulty run capacitor, or compressor lockout.',
    descHi: 'साधारण या गर्म हवा फेंकना। चोक कॉइल्स, कम गैस प्रेशर, खराब रन कैपेसिटर या कंप्रेसर लॉकआउट के कारण।',
    symptomsEn: ['Fan runs but air is warm', 'Compressor humming and stopping', 'Ice formation on indoor coil'],
    symptomsHi: ['फैन चलता है पर हवा गर्म है', 'कंप्रेसर की गुनगुनाहट और बंद होना', 'इंडोर कॉइल पर बर्फ जमना'],
    category: 'cooling',
    badgeEn: 'Most Common',
    badgeHi: 'सबसे आम समस्या'
  },
  {
    id: 'ac-not-starting',
    titleEn: 'AC Not Starting Repair',
    titleHi: 'एसी चालू नहीं हो रहा',
    descEn: 'Complete power failure. Inspection of MCB trip, primary power relay, main fuse, indoor display board, or remote receiver.',
    descHi: 'पूरी तरह बंद। एमसीबी ट्रिप, मुख्य रिले, फ्यूज, इंडोर डिस्प्ले बोर्ड या रिमोट रिसीवर की खराबी।',
    symptomsEn: ['No display lights on AC', 'Beep sound missing on power', 'MCB trips immediately when turned on'],
    symptomsHi: ['एसी पर कोई लाइट नहीं', 'ऑन करने पर बीप साउंड नहीं', 'ऑन करते ही एमसीबी गिरना'],
    category: 'electrical',
    badgeEn: 'High Priority',
    badgeHi: 'प्राथमिकता'
  },
  {
    id: 'water-leakage',
    titleEn: 'AC Water Leakage Repair',
    titleHi: 'एसी से पानी टपकना',
    descEn: 'Water dripping from the indoor unit inside the room due to choked drain tray, misaligned pipe slope, or frozen evaporator coil.',
    descHi: 'कमरे में इंडोर यूनिट से पानी टपकना। ड्रेन ट्रे में कचरा, ड्रेन पाइप का गलत ढलान या कॉइल पर बर्फ जमना।',
    symptomsEn: ['Water splashing from blower', 'Stains on bedroom wall', 'Full water collection tray'],
    symptomsHi: ['ब्लोअर से पानी की छींटें आना', 'दीवार पर पानी के दाग', 'ड्रेन ट्रे ओवरफ्लो होना'],
    category: 'leakage',
    badgeEn: 'Same Day Fix',
    badgeHi: 'त्वरित समाधान'
  },
  {
    id: 'gas-leakage',
    titleEn: 'AC Gas Leakage Repair',
    titleHi: 'एसी गैस लीकेज रिपेयर',
    descEn: 'Slow or sudden loss of cooling. Electronic nitrogen pressurization to find microscopic pinholes in copper U-bends and flare joints.',
    descHi: 'कूलिंग में अचानक गिरावट। कॉपर यू-बेंड्स और फ्लेयर जॉइंट्स में माइक्रोस्कोपिक लीक्स का नाइट्रोजन द्वारा पता लगाना।',
    symptomsEn: ['Thin ice on thin discharge pipe', 'Hissing sound near outdoor unit', 'Compressor runs continuously without cooling'],
    symptomsHi: ['पतले पाइप पर बर्फ जमना', 'आउटडोर यूनिट के पास हल्की सीटी जैसी आवाज', 'कंप्रेसर बिना कूलिंग के लगातार चलना'],
    category: 'leakage'
  },
  {
    id: 'compressor-repair',
    titleEn: 'AC Compressor Repair',
    titleHi: 'एसी कंप्रेसर रिपेयर',
    descEn: 'Testing motor winding resistance, thermal overload protector (OLP), mechanical seizure, and inverter drive transistors.',
    descHi: 'कंप्रेसर वाइंडिंग रेजिस्टेंस, थर्मल ओवरलोड प्रोटेक्टर (OLP), मैकेनिकल सीज़र और इन्वर्टर ड्राइव का परीक्षण।',
    symptomsEn: ['Outdoor fan runs but compressor silent', 'Heavy vibration on start', 'High electrical current draw'],
    symptomsHi: ['फैन चलता है पर कंप्रेसर बंद', 'स्टार्ट होते ही भारी कंपन', 'अत्यधिक बिजली खींचना'],
    category: 'mechanical'
  },
  {
    id: 'pcb-repair',
    titleEn: 'AC PCB Repair',
    titleHi: 'एसी पीसीबी सर्किट रिपेयर',
    descEn: 'Microcontroller board repair for inverter and non-inverter systems. Fixing blown capacitors, power ICs, and sensor circuits.',
    descHi: 'इन्वर्टर व नॉन-इन्वर्टर माइक्रो-कंट्रोलर बोर्ड रिपेयर। जले कैपेसिटर, पावर आईसी और सेंसर सर्किट का समाधान।',
    symptomsEn: ['Error code flashing on display', 'AC turns off after 2 minutes', 'Outdoor unit not receiving trigger signal'],
    symptomsHi: ['डिस्प्ले पर एरर कोड ब्लिंक होना', '2 मिनट चलकर एसी बंद होना', 'आउटडोर यूनिट को सिग्नल न मिलना'],
    category: 'electrical'
  },
  {
    id: 'sensor-repair',
    titleEn: 'AC Sensor Repair',
    titleHi: 'एसी सेंसर रिपेयर',
    descEn: 'Replacement of faulty room temperature thermistors and copper coil defrost sensors causing improper cycling or freezing.',
    descHi: 'खराब रूम टेम्परेचर थर्मिस्टर और कॉइल डीफ्रॉस्ट सेंसर बदलना जिससे एसी समय से पहले कट-ऑफ हो जाता है।',
    symptomsEn: ['AC cuts off too quickly', 'Room becomes freezing or remains warm', 'Sensor open/short error codes'],
    symptomsHi: ['एसी बहुत जल्दी कट-ऑफ होना', 'कमरा बहुत ठंडा या गर्म रहना', 'सेंसर एरर कोड आना'],
    category: 'electrical'
  },
  {
    id: 'fan-motor-repair',
    titleEn: 'AC Fan Motor Repair',
    titleHi: 'एसी फैन मोटर रिपेयर',
    descEn: 'Repairing seized bearings, open windings, or faulty starting capacitors in indoor blower motors and outdoor condenser fans.',
    descHi: 'इंडोर ब्लोअर और आउटडोर कंडेनसर फैन मोटर की जाम बेयरिंग, वाइंडिंग और स्टार्टिंग कैपेसिटर की मरम्मत।',
    symptomsEn: ['Outdoor unit overheating quickly', 'Blower rotating very slowly', 'Squeaking mechanical noise'],
    symptomsHi: ['आउटडोर यूनिट का तुरंत गर्म होना', 'ब्लोअर का बहुत धीमा घूमना', 'चरमराहट की आवाज आना'],
    category: 'mechanical'
  },
  {
    id: 'blower-repair',
    titleEn: 'AC Blower Repair',
    titleHi: 'एसी ब्लोअर रिपेयर',
    descEn: 'Balancing or replacing cracked cross-flow cylindrical blower wheels to eliminate rattling noises and restore strong airflow.',
    descHi: 'क्रॉस-फ्लो बेलनाकार ब्लोअर व्हील का संतुलन या बदलना ताकि खड़खड़ाहट खत्म हो और भरपूर हवा मिले।',
    symptomsEn: ['Air throwing weakly despite high fan setting', 'Severe indoor unit vibration', 'Broken blower fins'],
    symptomsHi: ['हाई स्पीड पर भी कम हवा आना', 'इंडोर यूनिट में भारी कंपन', 'ब्लोअर की पंखुड़ी टूटना'],
    category: 'mechanical'
  },
  {
    id: 'indoor-unit-repair',
    titleEn: 'AC Indoor Unit Repair',
    titleHi: 'एसी इंडोर यूनिट रिपेयर',
    descEn: 'Louvre step motor issues, IR receiver eye replacement, casing vibration dampening, and evaporator coil leak brazing.',
    descHi: 'स्विंग मोटर समस्या, रिमोट सेंसर आई रिप्लेसमेंट, केसिंग कंपन सुधार और इवेपोरेटर कॉइल ब्रेजिंग।',
    symptomsEn: ['Swing flap not moving', 'Remote commands not registered', 'Water overflowing inside casing'],
    symptomsHi: ['स्विंग फ्लैप का न हिलना', 'रिमोट के बटन काम न करना', 'केसिंग के अंदर पानी भरना'],
    category: 'cooling'
  },
  {
    id: 'outdoor-unit-repair',
    titleEn: 'AC Outdoor Unit Repair',
    titleHi: 'एसी आउटडोर यूनिट रिपेयर',
    descEn: 'Condenser coil descaling, service valve replacement, fan blade realignment, and rustproofing.',
    descHi: 'कंडेनसर कॉइल डीस्केलिंग, सर्विस वाल्व रिप्लेसमेंट, फैन ब्लेड अलाइनमेंट और रस्टप्रूफिंग।',
    symptomsEn: ['Outdoor unit shuts down after short runtime', 'Fan blade hitting shroud', 'Heavy metallic grinding sound'],
    symptomsHi: ['थोड़ी देर चलकर आउटडोर बंद होना', 'फैन ब्लेड का बॉडी से टकराना', 'तेज घिसने की आवाज'],
    category: 'mechanical'
  },
  {
    id: 'remote-problem',
    titleEn: 'AC Remote Problem Repair',
    titleHi: 'एसी रिमोट समस्या सुधार',
    descEn: 'Troubleshooting unresponsive remotes, infrared diode testing, and indoor receiver board circuit repairs.',
    descHi: 'रिमोट का काम न करना, इन्फ्रारेड डायोड की जांच और इंडोर रिसीवर बोर्ड सर्किट की मरम्मत।',
    symptomsEn: ['AC does not respond to remote buttons', 'Display mode locked', 'Blank screen on remote controller'],
    symptomsHi: ['रिमोट दबाने पर एसी का जवाब न देना', 'मोड लॉक हो जाना', 'रिमोट स्क्रीन खाली होना'],
    category: 'electrical'
  },
  {
    id: 'tripping-problem',
    titleEn: 'AC Tripping Problem Repair',
    titleHi: 'एसी एमसीबी ट्रिपिंग समस्या',
    descEn: 'Resolving electrical short circuits, compressor ground faults, or undersized MCB ratings causing power outages.',
    descHi: 'इलेक्ट्रिकल शॉर्ट सर्किट, कंप्रेसर ग्राउंड फॉल्ट या गलत रेटिंग वाले एमसीबी के बार-बार गिरने का समाधान।',
    symptomsEn: ['MCB trips the second AC is switched on', 'Compressor start triggers house power trip', 'Burning smell from isolator'],
    symptomsHi: ['एसी ऑन करते ही तुरंत एमसीबी गिरना', 'कंप्रेसर चालू होते ही मेन ट्रिप होना', 'स्विच से जलने की गंध आना'],
    category: 'electrical',
    badgeEn: 'Urgent Safety',
    badgeHi: 'सुरक्षा प्राथमिकता'
  },
  {
    id: 'noise-problem',
    titleEn: 'AC Noise Problem Repair',
    titleHi: 'एसी में असामान्य आवाज',
    descEn: 'Locating and eliminating loose fan blades, motor bearing wear, loose cabinet screws, and piping vibration harmonics.',
    descHi: 'ढीले फैन ब्लेड, मोटर बेयरिंग घिसाव, कैबिनेट स्क्रू और वाइब्रेटिंग पाइपिंग की आवाजों को पूरी तरह खत्म करना।',
    symptomsEn: ['Loud buzzing or humming noise', 'Rattling plastic panels', 'Squealing sounds on unit shutdown'],
    symptomsHi: ['तेज भिनभिनाहट या गूंज', 'प्लास्टिक पैनल की खड़खड़ाहट', 'यूनिट बंद होते समय चीखने जैसी आवाज'],
    category: 'mechanical'
  },
  {
    id: 'electrical-wiring',
    titleEn: 'AC Electrical Wiring Repair',
    titleHi: 'एसी वायरिंग एवं इलेक्ट्रिकल रिपेयर',
    descEn: 'Replacement of burnt terminal blocks, loose 3-core interconnecting cables, stabilizer repairs, and proper copper grounding.',
    descHi: 'जले टर्मिनल ब्लॉक्स, ढीली इंटरकनेक्टिंग केबल, स्टेबलाइजर रिपेयर और सुरक्षित कॉपर अर्थिंग की व्यवस्था।',
    symptomsEn: ['Sparking sounds at outdoor isolator', 'Intermittent power supply', 'Loose plug socket overheating'],
    symptomsHi: ['आउटडोर आइसोलेटर पर स्पार्किंग', 'रुक-रुक कर पावर आना', 'प्लग सॉकेट का बहुत गर्म होना'],
    category: 'electrical'
  }
];

export const servicingServices = [
  { titleEn: 'AC General Service', titleHi: 'एसी जनरल सर्विस', descEn: 'Dry filter sanitation, basic fin brushing, drain tray flush, and airflow test.', descHi: 'फिल्टर सफाई, बेसिक फिन ब्रशिंग, ड्रेन ट्रे फ्लश और एयरफ्लो टेस्ट।' },
  { titleEn: 'AC Wet Service', titleHi: 'एसी वेट सर्विस', descEn: 'Water-based pressure wash of indoor evaporator fins and outer condenser.', descHi: 'इंडोर इवेपोरेटर और आउटर कंडेनसर का वाटर-बेस्ड प्रेशर वॉश।' },
  { titleEn: 'AC Jet Pump Service', titleHi: 'एसी जेट पंप सर्विस', descEn: 'Commercial high-pressure jet pump wash using specialized waterproof catch bags.', descHi: 'वाटरप्रूफ कैच बैग लगाकर हाई-प्रेशर जेट पंप से कॉइल्स की गहरी सफाई।' },
  { titleEn: 'AC Deep Cleaning', titleHi: 'एसी डीप क्लीनिंग', descEn: 'Complete dismantling of front cabinet, blower barrel descaling, and sanitized reassembly.', descHi: 'केसिंग खोलकर ब्लोअर बैरल की डीस्केलिंग और सैनिटाइज्ड री-असेंबली।' },
  { titleEn: 'AC Filter Cleaning', titleHi: 'एसी फिल्टर क्लीनिंग', descEn: 'Micro-mesh dust extraction and anti-microbial treatment for fresh breathing air.', descHi: 'माइक्रो-मेश डस्ट निष्कासन और ताजी हवा हेतु एंटी-माइक्रोबियल ट्रीटमेंट।' },
  { titleEn: 'AC Indoor Coil Cleaning', titleHi: 'इंडोर कॉइल क्लीनिंग', descEn: 'Chemical coil cleaner spray to eliminate bacterial sludge, fungal odor, and nicotine coats.', descHi: 'फफूंद, दुर्गंध और जमी हुई मैल खत्म करने के लिए केमिकल कॉइल क्लीनर स्प्रे।' },
  { titleEn: 'AC Outdoor Coil Cleaning', titleHi: 'आउटडोर कॉइल क्लीनिंग', descEn: 'Back-to-front high-pressure rinsing to clear heavy road dust, dirt, and atmospheric debris.', descHi: 'सड़क की धूल और प्रदूषण साफ करने हेतु बैक-टू-फ्रंट हाई-प्रेशर जेट वॉश।' },
  { titleEn: 'AC Drain Pipe Cleaning', titleHi: 'ड्रेन पाइप क्लीनिंग', descEn: 'Clearing algae and fungal plugs from drain tubing to completely prevent water overflow.', descHi: 'ड्रेन पाइप से काई और कीचड़ साफ करना ताकि कमरे में पानी का टपकना बंद हो।' }
];

export const installationServices = [
  { titleEn: 'New AC Installation', titleHi: 'नया एसी इंस्टालेशन', descEn: 'End-to-end installation with spirit-level indoor mounting, core drilling, and testing.', descHi: 'स्पिरिट-लेवल इंडोर माउंटिंग, कोर ड्रिलिंग और टेस्टिंग के साथ इंस्टालेशन।' },
  { titleEn: 'Split AC Installation', titleHi: 'स्प्लिट एसी इंस्टालेशन', descEn: 'Indoor bracket mounting, outdoor heavy-gauge stand installation, and vacuuming.', descHi: 'इंडोर वॉल ब्रैकेट, आउटडोर हैवी स्टैंड फिटिंग और वैक्यूमिंग।' },
  { titleEn: 'Window AC Installation', titleHi: 'विंडो एसी इंस्टालेशन', descEn: 'Secure wooden or aluminum sub-frame fitting, thermal insulation, and bracket mounting.', descHi: 'मजबूत सब-फ्रेम फिटिंग, थर्मल इंसुलेशन और सुरक्षित ब्रैकेट माउंटिंग।' },
  { titleEn: 'Cassette AC Installation', titleHi: 'कैसेट एसी इंस्टालेशन', descEn: 'Ceiling suspension rod anchoring, precise tile matching, and drain pump piping.', descHi: 'सीलिंग सस्पेंशन रॉड एंकरिंग, सटीक ग्रिड अलाइनमेंट और ड्रेन पंप पाइपिंग।' },
  { titleEn: 'Ductable AC Installation', titleHi: 'डक्टेबल एसी इंस्टालेशन', descEn: 'Concealed indoor unit lifting, canvas duct connection, and supply plenum fitting.', descHi: 'कंसील्ड यूनिट लिफ्टिंग, कैनवास डक्ट कनेक्शन और सप्लाई प्लेनम फिटिंग।' },
  { titleEn: 'AC Uninstallation', titleHi: 'एसी अन-इंस्टालेशन', descEn: 'Safe refrigerant pump-down into the outdoor unit before pipe disconnection to save gas.', descHi: 'गैस बचाने हेतु पाइप खोलने से पहले रेफ्रिजरेंट को आउटडोर में पंप-डाउन करना।' },
  { titleEn: 'AC Shifting Service', titleHi: 'एसी शिफ्टिंग सर्विस', descEn: 'Careful removal, cushioned packing, safe transit, and prompt reinstall at new site.', descHi: 'सावधानीपूर्वक खोलना, सुरक्षित पैकिंग और नए पते पर त्वरित री-इंस्टालेशन।' },
  { titleEn: 'AC Reinstallation', titleHi: 'एसी री-इंस्टालेशन', descEn: 'Mounting pre-owned units with fresh flare joints, electrical checks, and leak testing.', descHi: 'पुराने एसी को नए फ्लेयर जॉइंट्स, लीकेज टेस्टिंग और वायरिंग के साथ लगाना।' },
  { titleEn: 'AC Copper Pipe Installation', titleHi: 'कॉपर पाइप इंस्टालेशन', descEn: '100% pure thick-gauge copper tubes with Class-O nitrile rubber insulation.', descHi: '100% शुद्ध कॉपर ट्यूब्स और क्लास-ओ नाइट्राइल रबर इंसुलेशन के साथ पाइपिंग।' },
  { titleEn: 'AC Drain Pipe Installation', titleHi: 'ड्रेन पाइप इंस्टालेशन', descEn: 'Rigid PVC or flexible UV-resistant drain line with guaranteed gravity slope.', descHi: 'उचित ढलान के साथ रिजिड पीवीसी या यूवी-रेसिस्टेंट ड्रेन लाइन बिछाना।' },
  { titleEn: 'Outdoor Unit Installation', titleHi: 'आउटडोर यूनिट इंस्टालेशन', descEn: 'Heavy duty anti-vibration rubber pads, MS powder-coated wall or floor stands.', descHi: 'एंटी-वाइब्रेशन रबर पैड्स और मजबूत पाउडर-कोटेड स्टैंड पर आउटडोर फिटिंग।' },
  { titleEn: 'Indoor Unit Installation', titleHi: 'इंडोर यूनिट इंस्टालेशन', descEn: 'Solid wall-plate anchoring with minimal drywall damage and concealed wiring.', descHi: 'मजबूत वॉल-प्लेट एंकरिंग और व्यवस्थित कंसील्ड वायरिंग फिटिंग।' }
];

export const gasRefrigerantServices = [
  { titleEn: 'AC Gas Refilling', titleHi: 'एसी गैस रीफिलिंग', descEn: 'Charging pure certified R32, R410A, or R22 refrigerant strictly by weighing scale.', descHi: 'वजन के अनुसार शुद्ध प्रमाणित R32, R410A, या R22 गैस चार्जिंग।' },
  { titleEn: 'AC Gas Leakage Testing', titleHi: 'एसी गैस लीकेज टेस्टिंग', descEn: 'High pressure dry nitrogen gas testing up to 350-400 PSI to detect microscopic leaks.', descHi: '350-400 PSI ड्राई नाइट्रोजन गैस द्वारा सूक्ष्म लीक्स की जांच।' },
  { titleEn: 'AC Refrigerant Charging', titleHi: 'रेफ्रिजरेंट चार्जिंग', descEn: 'Accurate liquid/vapor charging observing subcooling and superheat metrics.', descHi: 'सब-कूलिंग और सुपरहीट मानकों के अनुसार सटीक चार्जिंग।' },
  { titleEn: 'AC Vacuuming Service', titleHi: 'एसी वैक्यूमिंग प्रोसेस', descEn: 'Deep dual-stage vacuum pump operation down to 500 microns to extract non-condensibles.', descHi: 'नमी और हवा निकालने हेतु 500 माइक्रोन तक डीप वैक्यूमिंग।' },
  { titleEn: 'AC Cooling Problem Diagnosis', titleHi: 'कूलिंग समस्या डायग्नोसिस', descEn: 'Manifold gauge pressure analysis comparing suction, discharge, and ambient temperatures.', descHi: 'सक्शन, डिस्चार्ज और तापमान का तुलनात्मक मैनिफोल्ड गेज परीक्षण।' },
  { titleEn: 'AC Copper Pipe Repair', titleHi: 'कॉपर पाइप रिपेयर', descEn: 'Silver-phosphorus brazing of cracked or punctured copper lines with nitrogen purging.', descHi: 'सिल्वर-फास्फोरस ब्रेजिंग और नाइट्रोजन पजिंग द्वारा कॉपर पाइप मरम्मत।' },
  { titleEn: 'AC Copper Pipe Replacement', titleHi: 'कॉपर पाइप रिप्लेसमेंट', descEn: 'Replacing oxidized, kinked, or pinched copper tubing sections with brand new lines.', descHi: 'क्षतिग्रस्त या मुड़े हुए कॉपर पाइप के स्थान पर नई कॉपर लाइन लगाना।' },
  { titleEn: 'AC Flare Connection Repair', titleHi: 'फ्लेयर कनेक्शन सुधार', descEn: 'Eccentric flare tool fabrication of perfect 45-degree leak-proof copper flare faces.', descHi: '45-डिग्री सटीक लीक-प्रूफ कॉपर फ्लेयर तैयार करना।' }
];

export const partsServices = [
  { titleEn: 'AC Compressor Replacement', titleHi: 'कंप्रेसर रिप्लेसमेंट' },
  { titleEn: 'AC PCB Replacement', titleHi: 'पीसीबी बोर्ड रिप्लेसमेंट' },
  { titleEn: 'AC Capacitor Replacement', titleHi: 'कैपेसिटर रिप्लेसमेंट' },
  { titleEn: 'AC Fan Motor Replacement', titleHi: 'फैन मोटर रिप्लेसमेंट' },
  { titleEn: 'AC Blower Replacement', titleHi: 'ब्लोअर व्हील रिप्लेसमेंट' },
  { titleEn: 'AC Sensor Replacement', titleHi: 'सेंसर रिप्लेसमेंट' },
  { titleEn: 'AC Contactor Replacement', titleHi: 'कॉन्टैक्टर रिप्लेसमेंट' },
  { titleEn: 'AC Relay Replacement', titleHi: 'रिले रिप्लेसमेंट' },
  { titleEn: 'AC Thermostat Repair', titleHi: 'थर्मोस्टैट रिपेयर' },
  { titleEn: 'AC Copper Coil Repair', titleHi: 'कॉपर कॉइल रिपेयर' },
  { titleEn: 'AC Drain Pump Repair', titleHi: 'ड्रेन पंप रिपेयर' },
  { titleEn: 'AC Electrical Component Replacement', titleHi: 'इलेक्ट्रिकल पार्ट्स रिप्लेसमेंट' }
];

export const commercialHvacSolutions = [
  { titleEn: 'Central AC Installation', titleHi: 'सेंट्रल एसी इंस्टालेशन', descEn: 'Engineered central chiller and ducted systems for commercial real estate.', descHi: 'वाणिज्यिक भवनों हेतु सेंट्रल चिलर और डक्टेड सिस्टम्स।' },
  { titleEn: 'VRV/VRF AC Installation', titleHi: 'वीआरवी/वीआरएफ सिस्टम इंस्टालेशन', descEn: 'Variable refrigerant volume networks with individual zone climate controls.', descHi: 'अलग-अलग ज़ोन तापमान नियंत्रण वाले वीआरवी/वीआरएफ नेटवर्क।' },
  { titleEn: 'Chiller Plant Maintenance', titleHi: 'चिलर प्लांट मेंटेनेंस', descEn: 'Condenser tube brushing, oil analysis, and compressor overhauls for screw & scroll chillers.', descHi: 'स्क्रू एवं स्क्रॉल चिलर्स हेतु ट्यूब ब्रशिंग, ऑयल टेस्टिंग और कंप्रेसर ओवरहॉल।' },
  { titleEn: 'AHU Service', titleHi: 'एएचयू (एयर हैंडलिंग यूनिट) सर्विस', descEn: 'Belt tensioning, static pressure balancing, filter bank replacements, and cooling coil wash.', descHi: 'बेल्ट टेंशनिंग, स्टैटिक प्रेशर बैलेंसिंग, फिल्टर रिप्लेसमेंट और कॉइल वॉश।' },
  { titleEn: 'FCU Service', titleHi: 'एफसीयू (फैन कॉइल यूनिट) सर्विस', descEn: 'Motor servicing, 3-way actuator valve calibration, and condensate tray descaling.', descHi: 'मोटर सर्विसिंग, एक्चुएटर वाल्व कैलिब्रेशन और कंडेनसेट ट्रे डीस्केलिंग।' },
  { titleEn: 'Cooling Tower Maintenance', titleHi: 'कूलिंग टॉवर मेंटेनेंस', descEn: 'PVC fill pack cleaning, basin sludge extraction, distribution nozzle unclogging, and fan motor alignment.', descHi: 'पीवीसी फिल पैक सफाई, स्लज निष्कासन और फैन मोटर अलाइनमेंट।' },
  { titleEn: 'Commercial HVAC Installation', titleHi: 'कमर्शियल एचवीएसी इंस्टालेशन', descEn: 'Turnkey projects for IT offices, restaurants, shopping malls, clinics, and hotels.', descHi: 'आईटी ऑफिस, रेस्टोरेंट, मॉल, क्लिनिक और होटलों हेतु टर्नकी प्रोजेक्ट्स।' },
  { titleEn: 'HVAC Preventive Maintenance', titleHi: 'प्रिवेंटिव एचवीएसी मेंटेनेंस', descEn: 'Scheduled vibration analysis, motor megger testing, and thermodynamic efficiency logs.', descHi: 'वाइब्रेशन एनालिसिस, मोटर मेगर टेस्टिंग और थर्मोडायनामिक एफिशिएंसी लॉग।' },
  { titleEn: 'HVAC Troubleshooting', titleHi: 'एचवीएसी तकनीकी डायग्नोस्टिक्स', descEn: 'Rapid root-cause analysis for plant trips, high head pressure, and erratic delta-T temperatures.', descHi: 'प्लांट ट्रिप्स, हाई हेड प्रेशर और असामान्य डेल्टा-टी का त्वरित निदान।' },
  { titleEn: 'Industrial HVAC AMC', titleHi: 'औद्योगिक एचवीएसी एएमसी', descEn: 'Comprehensive maintenance contracts with SLA-driven technician response and preventive visits.', descHi: 'एसएलए आधारित तकनीशियन रिस्पॉन्स और नियमित प्रिवेंटिव विजिट्स सहित एएमसी अनुबंध।' }
];

export const amcServices = [
  { titleEn: 'Residential AC AMC', titleHi: 'रेजिडेंशियल एसी एएमसी', descEn: 'Regular seasonal checkups and priority breakdown calls for your home air conditioners.', descHi: 'घरेलू एयर कंडीशनर्स के लिए नियमित मौसमी जांच और ब्रेकडाउन प्राथमिकता।' },
  { titleEn: 'Office AC AMC', titleHi: 'ऑफिस एसी एएमसी', descEn: 'Keep employees comfortable and prevent downtime with scheduled weekend servicing.', descHi: 'वीकेंड सर्विसिंग के साथ कार्यस्थल पर कूलिंग व्यवधान से बचाव।' },
  { titleEn: 'Commercial AC AMC', titleHi: 'कमर्शियल एसी एएमसी', descEn: 'Tailored maintenance agreements for retail outlets, showrooms, clinics, and banks.', descHi: 'शोरूम, क्लिनिक, रिटेल और बैंकों हेतु अनुकूलित रखरखाव अनुबंध।' },
  { titleEn: 'Industrial HVAC AMC', titleHi: 'इंडस्ट्रियल एचवीएसी एएमसी', descEn: 'Heavy plant coverage for chillers, AHUs, and process cooling infrastructure.', descHi: 'चिलर, एएचयू और प्रोसेस कूलिंग इंफ्रास्ट्रक्चर का संपूर्ण कवरेज।' },
  { titleEn: 'Monthly AC Maintenance', titleHi: 'मासिक एसी मेंटेनेंस', descEn: 'Rigorous monthly operational audits for mission-critical server rooms and data centres.', descHi: 'सर्वर रूम और डेटा सेंटर हेतु अनिवार्य मासिक परिचालन ऑडिट।' },
  { titleEn: 'Quarterly AC Maintenance', titleHi: 'त्रैमासिक एसी मेंटेनेंस', descEn: 'Periodic deep cleans, electrical tightening, and gas pressure audits 4 times a year.', descHi: 'वर्ष में 4 बार डीप क्लीनिंग, वायरिंग टाइटनिंग और गैस प्रेशर ऑडिट।' },
  { titleEn: 'Half-Yearly AC Maintenance', titleHi: 'अर्धवार्षिक एसी मेंटेनेंस', descEn: 'Pre-summer commissioning and post-monsoon decommissioning service visits.', descHi: 'गर्मी से पहले कमीशनिंग और मानसून बाद डीकमीशनिंग सर्विस विजिट।' },
  { titleEn: 'Annual AC Maintenance', titleHi: 'वार्षिक एसी मेंटेनेंस', descEn: 'Comprehensive annual care package including servicing visits and breakdown support.', descHi: 'सर्विसिंग विजिट्स और ब्रेकडाउन सपोर्ट सहित व्यापक वार्षिक पैकेज।' },
  { titleEn: 'Preventive Maintenance', titleHi: 'प्रिवेंटिव मेंटेनेंस', descEn: 'Early detection of component wear to eliminate sudden expensive failures.', descHi: 'अचानक बड़े खर्च और खराबी से बचने हेतु पुर्जों के घिसाव की पूर्व पहचान।' },
  { titleEn: 'Emergency AC Repair', titleHi: 'इमरजेंसी एसी रिपेयर सपोर्ट', descEn: 'Fast-track engineering support when critical commercial cooling lines trip.', descHi: 'महत्वपूर्ण कूलिंग लाइन्स ट्रिप होने पर फास्ट-ट्रैक इंजीनियरिंग सपोर्ट।' }
];

export const projectsShowcase: ProjectShowcase[] = [
  {
    id: 'proj-1',
    titleEn: 'Residential Split AC Servicing & Restoration',
    titleHi: 'रेजिडेंशियल स्प्लिट एसी सर्विसिंग एवं रीस्टोरेशन',
    categoryEn: 'Residential Cooling',
    categoryHi: 'घरेलू कूलिंग',
    image: '/images/split-ac.jpg',
    descEn: 'High-pressure jet wash, blower balancing, and leak rectification for multiple inverter split units.',
    descHi: 'मल्टीपल इन्वर्टर स्प्लिट यूनिट्स हेतु हाई-प्रेशर जेट वॉश, ब्लोअर बैलेंसिंग और लीकेज सुधार।',
    specsEn: ['3x Inverter Split ACs', 'Pressure Jet Wash', 'Pure R32 Gas Refill', 'Zero Room Spillage'],
    specsHi: ['3x इन्वर्टर स्प्लिट एसी', 'प्रेशर जेट वॉश', 'शुद्ध R32 गैस रीफिल', 'जीरो रूम गंदगी']
  },
  {
    id: 'proj-2',
    titleEn: 'Commercial VRV/VRF Multi-Split Installation',
    titleHi: 'कमर्शियल वीआरवी/वीआरएफ मल्टी-स्प्लिट इंस्टालेशन',
    categoryEn: 'Corporate Office',
    categoryHi: 'कॉर्पोरेट ऑफिस',
    image: '/images/commercial-vrv.jpg',
    descEn: 'Design and commissioning of rooftop VRF condenser cluster paired with indoor cassette units across 3 office floors.',
    descHi: '3 ऑफिस फ्लोर्स में इनडोर कैसेट यूनिट्स के साथ रूफटॉप वीआरएफ कंडेनसर क्लस्टर का डिजाइन एवं कमीशनिंग।',
    specsEn: ['28 HP Modular VRF', 'Concealed Refnet Piping', 'Individual Zone Thermostats', 'Micro-Leak Vacuuming'],
    specsHi: ['28 HP मॉड्यूलर VRF', 'कंसील्ड रेफनेट पाइपिंग', 'इंडिविजुअल ज़ोन थर्मोस्टैट', 'माइक्रो-लीक वैक्यूमिंग']
  },
  {
    id: 'proj-3',
    titleEn: 'Industrial Water-Cooled Chiller System Maintenance',
    titleHi: 'औद्योगिक वॉटर-कूल्ड चिलर सिस्टम मेंटेनेंस',
    categoryEn: 'Manufacturing Facility',
    categoryHi: 'मैन्युफैक्चरिंग प्लांट',
    image: '/images/industrial-chiller.jpg',
    descEn: 'Comprehensive descaling of shell-and-tube heat exchangers, oil filter change, and sensor calibration.',
    descHi: 'शेल-एंड-ट्यूब हीट एक्सचेंजर्स की डीस्केलिंग, ऑयल फिल्टर रिप्लेसमेंट और सेंसर कैलिब्रेशन।',
    specsEn: ['150 TR Water Chiller', 'Condenser Tube Descaling', 'Vibration Harmonic Check', 'Delta-T Optimization'],
    specsHi: ['150 TR वॉटर चिलर', 'कंडेनसर ट्यूब डीस्केलिंग', 'वाइब्रेशन हार्मोनिक चेक', 'डेल्टा-टी ऑप्टिमाइजेशन']
  },
  {
    id: 'proj-4',
    titleEn: 'Server Room Precision Cooling & Ductwork Overhaul',
    titleHi: 'सर्वर रूम प्रिसिजन कूलिंग एवं डक्टवर्क ओवरहॉल',
    categoryEn: 'Data Infrastructure',
    categoryHi: 'डेटा इंफ्रास्ट्रक्चर',
    image: '/images/server-room.jpg',
    descEn: 'Constant temperature and humidity stabilization with redundant backup systems for enterprise IT servers.',
    descHi: 'आईटी सर्वर्स हेतु स्थिर तापमान एवं आर्द्रता नियंत्रण और बैकअप कूलिंग सिस्टम का सुदृढ़ीकरण।',
    specsEn: ['Dual Dedicated Units', 'Static Pressure Tuning', 'Automated Failover Relay', '24/7 Temperature Log'],
    specsHi: ['डुअल डेडिकेटेड यूनिट्स', 'स्टैटिक प्रेशर ट्यूनिंग', 'ऑटोमेटेड फेलओवर रिले', '24/7 टेम्परेचर लॉगिंग']
  },
  {
    id: 'proj-5',
    titleEn: 'Commercial Central AHU Preventive Overhaul',
    titleHi: 'कमर्शियल सेंट्रल एएचयू प्रिवेंटिव ओवरहॉल',
    categoryEn: 'Hospital & Healthcare',
    categoryHi: 'हॉस्पिटल एवं हेल्थकेयर',
    image: '/images/ahu-plant.jpg',
    descEn: 'HEPA filter bank replacements, high-capacity blower belt tensioning, and chemical sanitation of cooling coils.',
    descHi: 'हेपा फिल्टर रिप्लेसमेंट, हाई-कैपेसिटी ब्लोअर बेल्ट टेंशनिंग और कॉइल केमिकल सैनिटाइजेशन।',
    specsEn: ['12,000 CFM Airflow', 'HEPA Filtration Check', 'Antimicrobial Fin Wash', 'Zero Cross-Contamination'],
    specsHi: ['12,000 CFM एयरफ्लो', 'हेपा फिल्ट्रेशन चेक', 'एंटीमाइक्रोबियल फिन वॉश', 'जीरो क्रॉस-कंटैमिनेशन']
  }
];

export const faqList: FaqItem[] = [
  {
    id: 1,
    questionEn: 'What types of AC systems does KVS service?',
    questionHi: 'केवीएस किन प्रकार के एसी सिस्टम्स की सर्विस करता है?',
    answerEn: 'KVS services all major air conditioning formats: residential split and window units, inverter and non-inverter systems, commercial cassette, ductable, tower ACs, and enterprise VRV/VRF and central chiller systems.',
    answerHi: 'केवीएस सभी प्रमुख एसी सिस्टम्स की सर्विस करता है: स्प्लिट और विंडो यूनिट्स, इन्वर्टर एवं नॉन-इन्वर्टर सिस्टम्स, कैसेट, डक्टेबल, टॉवर एसी, और बड़े वीआरवी/वीआरएफ व सेंट्रल चिलर सिस्टम।'
  },
  {
    id: 2,
    questionEn: 'Do you provide residential and commercial AC services?',
    questionHi: 'क्या आप आवासीय और वाणिज्यिक दोनों तरह की एसी सेवाएं प्रदान करते हैं?',
    answerEn: 'Yes. We cater to individual residential homeowners, apartment complexes, retail showrooms, corporate offices, hotels, hospitals, and educational institutions across Delhi NCR.',
    answerHi: 'हाँ। हम दिल्ली एनसीआर में व्यक्तिगत घरों, अपार्टमेंट्स, रिटेल शोरूम्स, कॉर्पोरेट दफ्तरों, होटलों, अस्पतालों और संस्थानों सभी को सेवाएं प्रदान करते हैं।'
  },
  {
    id: 3,
    questionEn: 'Do you provide industrial HVAC maintenance?',
    questionHi: 'क्या आप औद्योगिक एचवीएसी (HVAC) मेंटेनेंस प्रदान करते हैं?',
    answerEn: 'Yes, our engineering team handles industrial HVAC installations, chiller plant servicing (water-cooled and air-cooled), Air Handling Units (AHU), Fan Coil Units (FCU), and industrial plant AMC contracts.',
    answerHi: 'हाँ, हमारी इंजीनियरिंग टीम औद्योगिक एचवीएसी इंस्टालेशन, चिलर प्लांट सर्विसिंग (वाटर-कूल्ड और एयर-कूल्ड), एएचयू (AHU), एफसीयू (FCU) और औद्योगिक प्लांट एएमसी संभालती है।'
  },
  {
    id: 4,
    questionEn: 'Do you offer AC installation and uninstallation?',
    questionHi: 'क्या आप एसी इंस्टालेशन और अन-इंस्टालेशन की सुविधा देते हैं?',
    answerEn: 'Yes. We provide complete installation, safe uninstallation with refrigerant pump-down, shifting, copper piping laying, and reinstallation for both residential and commercial units.',
    answerHi: 'हाँ। हम गैस को सुरक्षित पंप-डाउन करके अन-इंस्टालेशन, नए पते पर शिफ्टिंग, कॉपर पाइपिंग और सही वैक्यूमिंग के साथ री-इंस्टालेशन की पूरी सुविधा देते हैं।'
  },
  {
    id: 5,
    questionEn: 'Can I request AC gas leakage inspection?',
    questionHi: 'क्या मैं एसी गैस लीकेज की जांच करवा सकता हूँ?',
    answerEn: 'Absolutely. We conduct rigorous dry nitrogen pressure testing to pinpoint microscopic leaks before refilling. We follow manufacturer standards and do not blindly top-up gas on a leaking system.',
    answerHi: 'बिल्कुल। हम गैस भरने से पहले ड्राई नाइट्रोजन प्रेशर टेस्ट द्वारा सूक्ष्म लीकेज की जांच करते हैं। हम कंपनी मानकों का पालन करते हैं और लीक सिस्टम में बिना जांचे गैस नहीं भरते।'
  },
  {
    id: 6,
    questionEn: 'Do you provide annual maintenance contracts (AMC)?',
    questionHi: 'क्या आप वार्षिक रखरखाव अनुबंध (AMC) प्रदान करते हैं?',
    answerEn: 'Yes. We offer customized Annual Maintenance Contracts (AMC) for residences, commercial offices, retail facilities, and industrial factories, available in both comprehensive and non-comprehensive plans.',
    answerHi: 'हाँ। हम घरों, कमर्शियल दफ्तरों, रिटेल परिसरों और फैक्ट्रियों के लिए व्यापक (कॉम्प्रिहेंसिव) और गैर-व्यापक (नॉन-कॉम्प्रिहेंसिव) वार्षिक मेंटेनेंस अनुबंध (AMC) प्रदान करते हैं।'
  },
  {
    id: 7,
    questionEn: 'Which areas do you serve?',
    questionHi: 'आप किन-किन क्षेत्रों में अपनी सेवाएं देते हैं?',
    answerEn: 'We serve all of Gurugram (including DLF phases, Cyber City, Golf Course Road, Sohna Road, New Gurgaon, and Khandsa), Delhi, and broader Delhi NCR (Noida, Greater Noida, and Faridabad).',
    answerHi: 'हम पूरे गुरुग्राम (डीएलएफ, साइबर सिटी, गोल्फ कोर्स रोड, सोहना रोड, न्यू गुड़गांव, खांडसा), दिल्ली और समूचे दिल्ली एनसीआर (नोएडा, ग्रेटर नोएडा और फरीदाबाद) में सेवा देते हैं।'
  },
  {
    id: 8,
    questionEn: 'How can I book an AC service?',
    questionHi: 'मैं एसी सर्विस कैसे बुक कर सकता हूँ?',
    answerEn: 'You can submit the online enquiry form on our website with your details, call us directly at +91 7982890653, or send a quick WhatsApp message. Our technical team responds promptly.',
    answerHi: 'आप हमारी वेबसाइट पर दिया गया पूछताछ फॉर्म भर सकते हैं, हमें सीधे +91 7982890653 पर कॉल कर सकते हैं, या व्हाट्सएप पर संदेश भेज सकते हैं। हमारी टीम तुरंत प्रतिक्रिया देती है।'
  },
  {
    id: 9,
    questionEn: 'Can I contact your team directly?',
    questionHi: 'क्या मैं आपकी टीम से सीधे बात कर सकता हूँ?',
    answerEn: 'Yes. You can speak directly with our service desk and experienced technicians at +91 7982890653 without having to go through automated chatbots or call-centre queues.',
    answerHi: 'हाँ। आप हमारे सर्विस डेस्क और अनुभवी तकनीशियनों से +91 7982890653 पर सीधे बात कर सकते हैं, बिना किसी ऑटोमेटेड बॉट या जटिल आईवीआर के।'
  },
  {
    id: 10,
    questionEn: 'Do you provide VRV/VRF and chiller maintenance?',
    questionHi: 'क्या आप वीआरवी/वीआरएफ और चिलर मेंटेनेंस प्रदान करते हैं?',
    answerEn: 'Yes. VRV/VRF multi-splits, air-cooled chillers, water-cooled chillers, and associated air handling systems are an integral part of our commercial and industrial service operations.',
    answerHi: 'हाँ। वीआरवी/वीआरएफ मल्टी-स्प्लिट्स, एयर-कूल्ड चिलर्स, वॉटर-कूल्ड चिलर्स और एयर हैंडलिंग सिस्टम्स हमारे वाणिज्यिक और औद्योगिक सेवा प्रभाग का मुख्य हिस्सा हैं।'
  }
];

// Exact User Request: 8 Five-Star Reviews & 2 Four-Star Reviews (Indian Customers & Genuine Locations)
export const indianReviewsList: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Amit Sharma',
    location: 'DLF Phase 5, Gurugram',
    service: 'Split Inverter AC Repair & Gas Charging',
    rating: 5,
    date: '3 days ago',
    acType: 'Daikin 1.5 Ton Inverter Split',
    verified: true,
    reviewEn: 'Outstanding technical service! My Daikin inverter AC was blowing warm air during peak summer. The KVS technician arrived within 2 hours, diagnosed a small flare leak with nitrogen testing, fixed the brazing, and refilled pure R32 gas. Cooling is ice cold now.',
    reviewHi: 'शानदार तकनीकी सेवा! भीषण गर्मी में मेरा डायकिन एसी गर्म हवा दे रहा था। केवीएस तकनीशियन ने नाइट्रोजन टेस्ट से फ्लेयर लीक पकड़ा, ब्रेजिंग की और शुद्ध R32 गैस भरी। कमरे में अब बेहतरीन कूलिंग है।'
  },
  {
    id: 'rev-2',
    name: 'Rajesh Malhotra',
    location: 'Greater Kailash 1, South Delhi',
    service: 'Pressure Jet Pump Deep Cleaning',
    rating: 5,
    date: '1 week ago',
    acType: 'Voltas 2 Ton Split AC',
    verified: true,
    reviewEn: 'The jet pump servicing with the waterproof catch jacket was remarkable. Not a single drop of water leaked on my bedroom wallpaper. The amount of dust flushed out of the indoor coil was eye-opening. Electricity bill has dropped visibly.',
    reviewHi: 'वाटरप्रूफ जैकेट के साथ जेट पंप सर्विसिंग बहुत ही कमाल की थी। बेडरूम की दीवार पर एक बूंद पानी नहीं गिरा। कॉइल से जमी हुई मैल पूरी तरह साफ हो गई। बिजली बिल में भी कमी आई है।'
  },
  {
    id: 'rev-3',
    name: 'Priya Nair',
    location: 'Cyber City, DLF Phase 2, Gurugram',
    service: 'Office Cassette AC Servicing & Filter Descaling',
    rating: 5,
    date: '2 weeks ago',
    acType: 'Blue Star 3 Ton Cassette Units',
    verified: true,
    reviewEn: 'Managed our office floor cooling maintenance seamlessly over the weekend. All 6 cassette units were descaled and drain lines checked. Highly professional and polite staff with their own proper tools.',
    reviewHi: 'हमारे ऑफिस में वीकेंड पर बिना काम रोके सभी 6 कैसेट यूनिट्स की सर्विसिंग की। ड्रेन लाइन और फिल्टर बहुत अच्छे से साफ किए। प्रशिक्षित और समयनिष्ठ टीम।'
  },
  {
    id: 'rev-4',
    name: 'Vikramaditya Choudhary',
    location: 'Sohna Road, Sector 49, Gurugram',
    service: 'New Split AC Installation & Pure Copper Piping',
    rating: 5,
    date: '2 weeks ago',
    acType: 'LG Dual Inverter Split AC',
    verified: true,
    reviewEn: 'Proper spirit-level indoor bracket mounting and heavy-duty outdoor stand. They did vacuuming with a two-stage pump for 25 minutes before opening the refrigerant valves. Zero vibration or rattles on the balcony.',
    reviewHi: 'स्पिरिट लेवल से इंडोर माउंटिंग और बालकनी में मजबूत स्टैंड लगाया। रेफ्रिजरेंट वाल्व खोलने से पहले 25 मिनट वैक्यूमिंग की। कोई कंपन या आवाज नहीं है।'
  },
  {
    id: 'rev-5',
    name: 'Rohit Verma',
    location: 'Sector 12, Dwarka, Delhi',
    service: 'Dual Inverter PCB Board Repair',
    rating: 5,
    date: '3 weeks ago',
    acType: 'Hitachi Inverter Split AC',
    verified: true,
    reviewEn: 'Another technician told me to replace the entire outdoor PCB for ₹8,500. KVS engineer inspected it, replaced only the blown capacitor and communication IC at an honest, reasonable cost. Working like brand new.',
    reviewHi: 'दूसरे मैकेनिक ने पूरा पीसीबी बदलने के लिए ₹8,500 मांगे थे। केवीएस इंजीनियर ने फॉल्ट ढूंढकर केवल खराब कैपेसिटर बदला और बहुत कम खर्च में एसी ठीक कर दिया।'
  },
  {
    id: 'rev-6',
    name: 'Sanjay Gupta',
    location: 'Golf Course Extension Road, Gurugram',
    service: 'Annual Maintenance Contract (AMC)',
    rating: 5,
    date: '1 month ago',
    acType: 'Entire Villa (5 Split ACs + 1 Ductable)',
    verified: true,
    reviewEn: 'Took their residential AMC for our 5-bedroom villa. The seasonal service visits are thorough. Technicians check amperage, coil delta-T, and clean filters meticulously without having to follow up.',
    reviewHi: 'विला के सभी एसी के लिए इनका एएमसी लिया है। तकनीशियन समय पर आते हैं, करंट और गैस प्रेशर चेक करते हैं। बहुत ही जिम्मेदार और प्रोफेशनल सर्विस।'
  },
  {
    id: 'rev-7',
    name: 'Neha Singhal',
    location: 'Sector 56, Gurugram',
    service: 'Indoor Water Dripping & Drain Pipe Correction',
    rating: 5,
    date: '1 month ago',
    acType: 'O General 1.5 Ton Split AC',
    verified: true,
    reviewEn: 'Water was splashing out of the blower into our living room. They dismantled the front casing, unclogged the slimy fungus from the drain tray, and corrected the pipe slope through the wall. Problem solved permanently.',
    reviewHi: 'ब्लोअर से कमरे में पानी की छींटें आ रही थीं। उन्होंने केसिंग खोलकर ड्रेन ट्रे की काई साफ की और पाइप का ढलान सही किया। समस्या पूरी तरह ठीक हो गई।'
  },
  {
    id: 'rev-8',
    name: 'Arvind Patel',
    location: 'Udyog Vihar Phase 4, Gurugram',
    service: 'Factory VRV System & Chiller Overhaul',
    rating: 5,
    date: '2 months ago',
    acType: 'Industrial Modular VRF (24 HP)',
    verified: true,
    reviewEn: 'KVS Copper Veins handles our factory clean-room cooling. Their technical depth on screw chillers, VRF branch piping, and oil return cycles is superior to commercial aggregators. Highly recommended for industrial facilities.',
    reviewHi: 'हमारी फैक्ट्री के क्लीन रूम कूलिंग को केवीएस टीम संभालती है। चिलर्स और वीआरएफ सिस्टम्स में इनका तकनीकी ज्ञान सामान्य मैकेनिकों से कहीं आगे है।'
  },
  {
    id: 'rev-9',
    name: 'Manish Tiwari',
    location: 'Sector 62, Noida',
    service: 'AC Gas Leakage Testing & R32 Top-up',
    rating: 4,
    date: '2 months ago',
    acType: 'Carrier 1.5 Ton Split AC',
    verified: true,
    reviewEn: 'Very good technical diagnosis. Found the flare pinhole leak that two previous technicians missed. The only small delay was that they arrived 35 minutes after the scheduled slot due to Delhi traffic, but the repair was top class.',
    reviewHi: 'बहुत अच्छी तकनीकी जांच। पुराना लीक ढूंढ निकाला जो पहले कोई नहीं पकड़ पाया। ट्रैफिक के कारण तकनीशियन आधा घंटा देर से आए लेकिन रिपेयरिंग कार्य उत्तम था।'
  },
  {
    id: 'rev-10',
    name: 'Deepak Bansal',
    location: 'Khandsa Road, Laxmi Garden, Gurugram',
    service: 'Window AC Deep Descaling & Motor Oiling',
    rating: 4,
    date: '3 months ago',
    acType: 'Lloyd 1.5 Ton Window AC',
    verified: true,
    reviewEn: 'Prompt local service since their workshop is right on Khandsa Marg. They took the window unit down, cleaned the condenser fins completely, and lubricated the fan motor. Runs much quieter now.',
    reviewHi: 'खांडसा मार्ग पर वर्कशॉप होने से तुरंत सेवा मिली। विंडो एसी खोलकर कॉइल्स साफ की और मोटर में ऑयलिंग की। अब बिना आवाज के शानदार कूलिंग कर रहा है।'
  }
];
