// js/data.js

const travelPackages = [
    {
        id: "himachal-pocket",
        title: "Himachal Pocket Curation",
        location: "Himachal",
        duration: "8 Days / 7 Nights",
        price: "12999",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        description: "Experience the majestic beauty of Himachal Pradesh with this complete elite group tour from Delhi covering scenic routes.",
        highlights: ["Solang Valley Tandem Paragliding", "Luxury Riverside Wooden Cottage Stays", "Bonfire & Live Acoustic Music", "Scenic Trek to Jogini Waterfalls"],
        itinerary: [
            { day: "Day 1", title: "Delhi to Shimla Overlook", details: "Departure from Delhi around 9:00 AM. Enroute premium buffet lunch. Reach Shimla by evening luxury resort. Check-in, dinner & overnight stay." },
            { day: "Day 2", title: "Kufri Valley & Mall Road Chronicle", details: "Explore Kufri mountain trails, Green Valley, Fagu Valley, and evening walk at majestic Mall Road & Jakhoo Temple tracks." },
            { day: "Day 3", title: "Manali Sanctuary & Hot Springs", details: "Proceed to Manali. Visit Vashisht hot water springs, deep pine woods forest walk, and legendary Hadimba Temple sites." },
            { day: "Day 4", title: "Solang Snow Ridge Adventure", details: "Full day dedicated to custom paragliding, snow skiing, ATV rides at Solang Valley. Optional Rohtang Pass luxury permits arrangement." },
            { day: "Day 5", title: "Kullu Rafting & Kangra Transit", details: "High-octane 12KM white water rafting session in Beas river, traditional Beas side lunch, and drive down to historical Kangra." },
            { day: "Day 6", title: "Khajjiar Mini-Switzerland Marvel", details: "Explore spectacular meadows of Khajjiar under deep pine forest tracks. Luxury resort check-in at pristine Dalhousie setups." },
            { day: "Day 7", title: "Amritsar Golden Heritage Touch", details: "Drive down to Amritsar. Witness high-energy Wagah Border ceremony, followed by a majestic night visit to the glowing Golden Temple." },
            { day: "Day 8", title: "Delhi Return Journey", details: "Morning luxury buffet, local market shopping for souvenirs, and private transit back to Delhi with golden elite memories." }
        ]
    },
    {
        id: "south-adventure",
        title: "Sukoon De Kerala",
        location: "Kerala",
        duration: "6 Days / 5 Nights",
        price: "15299",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        description: "Discover absolute tranquility across the infinite backwaters, majestic tea estates, and elite private coastal properties of tropical Kerala.",
        highlights: ["Private Alappuzha Houseboat Premium Cruise", "Munnar Infinite Tea Valleys Tour", "Bespoke Kathakali Cultural Front-Row Passes"],
        itinerary: [
            { day: "Day 1", title: "Cochin Arrival & Munnar Luxury Hills Escapade", details: "Receive custom private reception at Cochin airport. Private drive passing Cheeyappara waterfalls straight into Munnar luxury ridge resort." },
            { day: "Day 2", title: "Munnar Tea Estates & Eravikulam Sanctuary Explorer", details: "Morning safari through Eravikulam National Park to witness rare mountain species. Premium aromatic tea estate walking, followed by gourmet dining." },
            { day: "Day 3", title: "Thekkady Spice Plantation Route & Wilderness Boating", details: "Transit to Thekkady wild valleys. Private botanical exploration across organic pepper & cardamom plantations. Evening luxury boating at Periyar lake." },
            { day: "Day 4", title: "Alappuzha Pristine Backwaters Premium Houseboat Check-in", details: "Board an elite ultra-luxury private wooden houseboat. Cruise seamlessly across emerald canals with dedicated personal chefs serving traditional cuisines." },
            { day: "Day 5", title: "Kovalam Beach Bay Luxury Rest & Sunset Curation", details: "Drive down to Kovalam shores. Check-in at an elite infinity-pool sea resort. Afternoon Ayurvedic premium therapy session, evening beach sunset walk." },
            { day: "Day 6", title: "Trivandrum Royal Palace Artifacts Inspection & Airport Drop", details: "Explore majestic architectures of Padmanabhaswamy Temple vaults, premium royal heritage museum tour, followed by luxury private terminal drop." }
        ]
    },
    {
        id: "rishikesh-adventure",
        title: "Rishikesh Alpine Adventure",
        location: "Utrakhand",
        duration: "5 Days / 4 Nights",
        price: "30000",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80",
        description: "A premium high-octane adventure experience featuring wild river rafting, absolute luxury glamping setups, and mountain wellness sessions.",
        highlights: ["16KM Wild Grade-III River Rafting", "Premium Wilderness Riverside Glamping", "Bespoke Evening Ganga Aarti VIP Deck Entry"],
        itinerary: [
            { day: "Day 1", title: "Rishikesh Foothills Luxury Camp Allocation", details: "Private luxury transport arrival. Check-in at high-end glass-walled luxury glamping domes by the river streams. Evening introductory acoustic layout." },
            { day: "Day 2", title: "Grade-III Rapid Rafting & Cliff Jumping Curation", details: "High-octane custom 16KM white water rafting from Shivpuri. Complete top-tier professional safety systems, dynamic cliff jumping sessions, back-to-camp hot buffet." },
            { day: "Day 3", title: "Neer Garh Secret Waterfall Trek & Wellness Meditation", details: "Guided private morning trek to deep Neer Garh mountain waterfalls pool. Afternoon structural meditation and elite crystal healing sessions by global experts." },
            { day: "Day 4", title: "Bungee Jump Expedition & VIP Aarti Deck Allocation", details: "Visit India's highest custom bungee jumping platform at Mohan Chatti (jump optional). Evening private premium access cards to Paramarth Niketan Ganga Aarti." },
            { day: "Day 5", title: "Beatles Ashram Historic Walk & Departure Transit", details: "Explore curated architecture at the legendary Beatles Ashram ruins. Custom breakfast spreading, and luxury direct highway transit back to airport." }
        ]
    },
    {
        id: "rajasthan-royal",
        title: "Regal Rajasthan Chronicle",
        location: "Rajasthan",
        duration: "7 Days / 6 Nights",
        price: "42000",
        // js/data.js ke andar Regal Rajasthan Chronicle wale object me ye naya line paste kar do:
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        description: "Live like royalty across private heritage palace sanctuaries, golden desert dune camps, and historic lakeside estates.",
        highlights: ["VIP Private Palace Guided Access", "Thar Desert Luxury Glamping & Dunes Dining", "Exclusive Udaipur Sunset Yacht Charter"],
        itinerary: [
            { day: "Day 1", title: "Jaipur Imperial Welcome & Heritage Suites Allocation", details: "Arrival reception with traditional royal fanfare. Check-in at elite heritage palace suites. Evening private curated orientation walk around Johari Bazaar." },
            { day: "Day 2", title: "Fortress Grandeur & Private Antiquities Gallery Tour", details: "Fast-track VIP access to Amber Fort. Private viewing of royal collection vaults at City Palace, followed by fine dining at an exclusive inner courtyard restaurant." },
            { day: "Day 3", title: "Jodhpur Blue City Transit & Mehrangarh Crest Overlook", details: "Drive down to Jodhpur. Check-in at a luxury palace hotel. Guided sunset walk along the battlements of Mehrangarh Fort with private historical briefers." },
            { day: "Day 4", title: "Thar Desert Deep Exploration & Luxury Camps Placement", details: "Transit to Jaisalmer golden ridges. Board private premium 4x4 vehicles for deep desert dune safaris. Premium luxury tent check-in, live folk performance, and gourmet starlit dinner." },
            { day: "Day 5", title: "White City Udaipur Ingress & Lake Pichola Sanctuary", details: "Scenic luxury transit to Venice of the East—Udaipur. Allocation of premium lake-facing suites. Rest and independent exploration of lakeside walkways." },
            { day: "Day 6", title: "Private Yacht Lake Cruise & Jagmandir Palatial Gala", details: "Exclusive morning exploration of Saheliyon-ki-Bari. Late afternoon boarding of a private luxury yacht charter on Lake Pichola. Champagne sunset over Taj Lake Palace." },
            { day: "Day 7", title: "Royal Departure Operational Routing", details: "Morning imperial breakfast, private collector art shopping gallery visits, and private premium transit drop off to Udaipur airport terminal gates." }
        ]
    },
    {
        id: "goa-cruise",
        title: "Goa Opulent Coastal Cruise",
        location: "Goa",
        duration: "4 Days / 3 Nights",
        price: "34999",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "Experience the ultimate beach side grandeur with private yacht access, vintage villa stays, and unlisted high-profile party tracks.",
        highlights: ["Private Catamaran Sunset Sailing", "Michelin-starred Seafood Curation", "Luxury Portuguese Heritage Villa Stays"],
        itinerary: [
            { day: "Day 1", title: "Terminal Reception & Heritage Villa Ingress", details: "Premium reception at Mopa airport. Direct chauffeured transit to an exclusive 17th-century restored Portuguese villa. Private pool-side chef dinner." },
            { day: "Day 2", title: "Private Yacht Sailing & Champagne Sunset", details: "Board an elite 45-foot luxury private catamaran from Mandovi river docks. Cruise into the open Arabian sea with bespoke catering, music, and twilight cocktails." },
            { day: "Day 3", title: "Secluded South Goa Beach Mapping & Spa Curation", details: "Chauffeured transit to hidden private white-sand bays in South Goa. Afternoon dedicated to open-air premium massage therapies and sunset bonfire dining." },
            { day: "Day 4", title: "Vintage Fontainhas Walk & Departure", details: "Guided architectural walking across the colorful Latin quarter of Fontainhas. Premium souvenir distribution and flight routing transit drop." }
        ]
    },
    {
        id: "andaman-escapes",
        title: "Andaman Private Island Escape",
        location: "Andaman",
        duration: "6 Days / 5 Nights",
        price: "58000",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        description: "An elite oceanic journey covering bioluminescent night kayaking, isolated private island beaches, and five-star tropical villas.",
        highlights: ["Bioluminescent Midnight Kayaking", "Private Scuba Diving with Personal Master", "Five-Star Beachfront Glass Pavilion Villa"],
        itinerary: [
            { day: "Day 1", title: "Port Blair Touchdown & Cellular Luxury Overview", details: "VIP reception at Port Blair terminal. Check-in at a cliffside luxury sea-view suite. Fast-track entry to the historical light and sound showcase." },
            { day: "Day 2", title: "Private Cruise Transit to Havelock Island Sanctuary", details: "Board a premium high-speed private catamaran cruise to Havelock Island. Allocation of an ultra-luxurious beachfront pool villa." },
            { day: "Day 3", title: "Exclusive Marine Diving Session at Radhanagar Crest", details: "Private deep-sea scuba dive guided by a personal PADI master. Afternoon leisure at the legendary Radhanagar beach, followed by candle-lit coast dining." },
            { day: "Day 4", title: "Bioluminescence Midnight Sea Kayaking", details: "Daytime exploration of hidden mangrove lagoons. Midnight excursion to witness the mesmerizing glowing blue ocean waves under star grids." },
            { day: "Day 5", title: "Neil Island Scenic Exploration & Sunset Curation", details: "Bespoke cruise shift to Neil Island. Private tracking of natural coral rock bridges and a premium sunset champagne lounge setup on Lakshmanpur shores." },
            { day: "Day 6", title: "Port Blair Return Route & Departure Flight", details: "Morning private cruise back to Port Blair baseline station, custom local shopping, and final terminal drop gates." }
        ]
    }
];

const masterpieces = [
    { title: "Manali & Solang Valley Elite Expedition", type: "travel", date: "December 2025", location: "Manali, HP", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80" },
    { title: "Kasol & Kheerganga Alpine Curation", type: "travel", date: "September 2025", location: "Kasol, HP", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" },
    { title: "Spiritual McLeodganj High-End Escape", type: "travel", date: "October 2025", location: "McLeodganj, HP", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=crop&w=800&q=80" },
    { title: "Royal Palace Wedding Orchestration", type: "events", date: "November 2025", location: "Orchha, MP", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
    { title: "Global Executive Tech Summit", type: "events", date: "January 2026", location: "New Delhi", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
    { title: "Bespoke Beachside Milestone Gala", type: "events", date: "March 2026", location: "Goa Shores", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80" }
];

const blogs = [
    { 
        id: "char-dham-guide", 
        title: "The Ultimate Guide to the Char Dham Yatra: What You Need to Know", 
        category: "TRAVEL PACKAGES", 
        date: "April 22, 2026", 
        snippet: "Planning a Char Dham Yatra can seem overwhelming. Here is a simple, logical breakdown of how to prepare for this spiritual mountain trip...", 
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        fullContent: "The majestic Char Dham Yatra across Yamunotri, Gangotri, Kedarnath, and Badrinath stands as the absolute zenith of spiritual travel in the Indian Himalayas. Executing this pilgrimage with high-end parameters requires intense architectural mapping, custom oxygen reserves, and premier route synchronization.\n\nOur customized approach replaces standard exhausting coach journeys with dynamic private twin-engine helicopter scheduling across base lines, high-altitude premium suites connectivity, and instant fast-track VIP entrance card provisions.\n\nAcclimatization remains a high priority vector for senior travelers, which is why our medical-supported framework integrates personal diagnostic screenings and luxury organic farm retreats to handle thin alpine atmospheres effortlessly. The psychological readiness for the terrain is matched with material opulence, including private kitchen units cooking high-nutrition specialized satvik cuisines on command."
    },
    { 
        id: "destination-weddings", 
        title: "Why Destination Weddings Are Actually Less Stressful Than Local Ones", 
        category: "EVENT MANAGEMENT", 
        date: "April 25, 2026", 
        snippet: "Think destination weddings are too complicated? It's actually the opposite. Here is why planning a custom curated wedding brings peace...", 
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        fullContent: "Bespoke destination weddings completely eliminate local fragmented logistics by centralizing the guest experience inside a singular premium property landscape. Whether transforming an ancient imperial fortress in Rajasthan or orchestrating sunset oceanfront vows in South Goa, our end-to-end management minimizes traditional planning anxiety.\n\nBy unifying hospitality routing, multi-cuisine gourmet menu designing, and international experiential staging under a single management team, the hosts can detach entirely from operational parameters.\n\nEvery single arriving guest is allocated a private digital concierge profile to coordinate luxury transport, terminal receptions, and custom stay requests flawlessly. The visual impact of an isolated venue creates an immediate psychological barrier against uninvited distributions, locking down the celebration environment into an absolute luxury cocoon."
    },
    { 
        id: "corporate-retreats-trends", 
        title: "The New Era of High-Profile Executive Corporate Retreats", 
        category: "EVENT PRODUCTION", 
        date: "May 12, 2026", 
        snippet: "Standard boardroom meetups are obsolete. Discover how modern corporations build high-impact cultural alignment through immersive retreats...", 
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        fullContent: "Modern corporate leadership demands strategy sessions that pull executives out of standard uninspired corporate structures. Today's elite summits are high-octane experiential events set inside high-altitude wilderness domes or secluded luxury beach estates.\n\nWe design tech-integrated glass conference pavilions overlooking scenic horizons, matched with private mindfulness training modules, tactical wilderness survival tracking exercises, and front-row culinary theatrical dining.\n\nThese high-end structural interactions build authentic trust and visionary alignments that normal uninspired glass skyscraper office spaces can never spark. The return on investment manifests in pristine collaborative clarity, setting global corporate trends."
    },
    { 
        id: "private-island-trends", 
        title: "Securing Seclusion: The Rising Trend of Private Island Takeovers", 
        category: "LUXURY TRAVEL", 
        date: "May 18, 2026", 
        snippet: "Privacy is the ultimate metric of high luxury. Explore why multi-national family entities choose isolated island buyouts over standard properties...", 
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        fullContent: "The definition of elite security has shifted from armed convoys to absolute geographic insulation. High-net-worth families are moving aggressively toward private tropical island custom acquisitions for personal milestones.\n\nBy managing complete grid allocations on remote coordinates like Havelock or Lakshadweep fringes, we implement a flawless security shield. Every single villa asset is connected to custom sub-surface diving facilities, private helicopter pads, and internal zero-carbon power frameworks.\n\nThis operational freedom guarantees that conversations, milestone galas, and multi-generational family interactions occur inside a highly protected visual and architectural sanctuary entirely detached from global observations."
    },
    { 
        id: "sustainable-grandeur", 
        title: "Conscious Grandeur: How Luxury Events are Redefining Green Metrics", 
        category: "ECO LUXURY", 
        date: "May 20, 2026", 
        snippet: "Sustainability and high opulence are no longer contradictions. Learn how carbon-neutral events operate at scale...", 
        // js/data.js ke andar "Conscious Grandeur" waale blog object me bas ye line update karni hai:
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
        fullContent: "The global elite no longer view luxury simply as raw consumption; responsibility is now embedded inside prestige metrics. Constructing a zero-waste monumental structure requires intense material mapping and regional crafting synergy.\n\nOur design systems replace toxic plastic compositions with upcycled woods, locally sourced stone foundations, and intelligent low-voltage LED matrix configurations. Carbon footprints from intercontinental private aviation routes are balanced down through dedicated investments into massive community afforestation grids.\n\nExecuting an event that leaves zero environmental trace while maintaining five-star luxury standards represents the absolute zenith of modern conceptual orchestration."
    }
];

const guestLedger = [
    { name: "Rajesh Sharma", profile: "Spiritual Executive Profile", letter: "Vanguard & Voyage transformed our intense spiritual tracking journey across Kedarnath and Badrinath peaks into a seamless, profoundly celestial blueprint layout. From precision twin-engine heli scheduling adjustments mid-air to setting up medical SUV support frames during heavy landslides, their parameters are flawlessly calculated. Absolute recommended framework for elite travelers." },
    { name: "Ananya Sen", profile: "Corporate Managing Director", letter: "Orchestrating our annual strategic alignment tech retreat with V&V was a textbook masterclass in luxury coordination. The glass-pavilion strategy deck they engineered overlooking the Manali mountain peaks completely changed our team dynamic metrics. End-to-end concierge routing via personal WhatsApp templates kept our global stakeholders completely synchronized." },
    { name: "Vikramaditya Birla", profile: "Industrial Entity Chairman", letter: "The security, privacy, and flawless timing metrics displayed during our private island buyout in Andaman were remarkable. No data leaks, no logistics delays, absolute high-end five-star operational brilliance." },
    { name: "Meera Kapoor", profile: "Milestone Wedding Host", letter: "Transforming a 17th-century Rajasthani fort for my daughter's vows seemed impossible, but V&V managed it like a seasoned military operation. The ambient lighting matrix and culinary theater were pure art." },
    { name: "Dr. Arvinder Singh", profile: "Global Health Consultant", letter: "The medical support, oxygen-equipped fleets, and rapid-response emergency tracking cards given during our high-altitude pilgrimage gave our family absolute peace of mind. True luxury is safety." },
    { name: "Kabir Malhotra", profile: "Venture Capital Partner", letter: "Bespoke paragliding setups and riverside premium live acoustic curations in Himachal were phenomenal. They don't sell tour packages; they manufacture golden state-of-mind experiences." },
    { name: "Siddharth Roy", profile: "Tech Startup Founder", letter: "The private catamaran cruise booking in Goa was pristine. Michelin-starred culinary layouts served directly on open sea decks. Absolute luxury definition executed flawlessly." },
    { name: "Pooja Hegde", profile: "Boutique Fashion Curator", letter: "The Portuguese villa coordination in Fontainhas was aesthetically immaculate. Spacing, color curation, and local artisan connections reflect deep high-end brand expertise." },
    { name: "Rohan Murthy", profile: "Enterprise Software Architect", letter: "As a structural engineer, I closely inspected their glass strategy pavilions. The stability, finish, and low-voltage electrical integrations are elite production marvels." },
    { name: "Nisha Javeri", profile: "High-Net-Worth Individual", letter: "The invite-only Sovereign membership is worth every single penny. The unlisted secret resort pathways they unlock are unmatched globally. Flawless concierge asset management." },
    { name: "Aditya Goenka", profile: "Real Estate Developer", letter: "We handed them complete operational rights for our luxury project launch gala. High-impact media presence, pristine hospitality, and perfect timeline control. Exceptional job." },
    { name: "Zara Sheikh", profile: "International Media Executive", letter: "Their conscious eco-luxury framework is brilliant. Realizing that our grand celebration had a net-zero footprint because of their community forest investments is deeply rewarding." }
];