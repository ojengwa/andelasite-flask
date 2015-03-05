'use strict';

angular.module('core').controller('AboutController', ['$scope', '$sce',
    function($scope, $sce) {
        $scope.hover_state = true;
        $scope.teamMembers = [{
                id: 1,
                name: 'Jeremy Johnson',
                position: 'Co-Founder and CEO',
                image: 'jeremy.jpg',
                bio: '<p>Prior to founding Andela, Jeremy co-founded 2U and served in a succession of roles (Chief Technology Officer, Chief Marketing Officer, and Chief Strategy Officer) between 2008 and 2014 as the company grew to over 700 people. One of the fastest growing education technology startups in history, 2U went public on March 28th, 2014, and continues to transform higher online programs.</p><br><p>Jeremy is recognized broadly for his work at 2U as an education innovator as well as a champion of youth entrepreneurship. His speaking appearances include the White House, Congress, and conferences and college campuses around the world as well as major media outlets like NBC, ABC, FOX, and CNBC. Jeremy was named “30 Under 30” by Inc. Magazine in 2012 and Forbes in 2013 and 2014.</p><br><p>Outside of Andela, Jeremy serves on the board of the Young Entrepreneur Council and the education non-profit PENCIL and co-authored a book, Education & Skills 2.0: New Targets & Innovative Approaches, for the World Economic Forum.</p>'
            }, {
                id: 2,
                name: 'Christina Sass',
                position: 'Co-Founder and COO',
                image: 'christina.jpg',
                bio: '<p>Christina Sass began building education programs in her home state of Georgia and has since started schools and youth programs in the U.S., China, The Palestinian Territories, Kenya, and Nigeria.</p><br><p>While directing the Program Department at The Clinton Global Initiative, she worked closely with President Clinton and his office to design and execute the annual CGI agenda. This involved driving Commitments to Action with corporations, NGOs, governments and philanthropies with a particular focus on scalable education solutions and empowerment of girls and women in developing countries. She then served as an advisor to the President and CEO of The MasterCard Foundation on fostering collaboration among partners. The MasterCard Foundation is a global foundation with over $9 billion in assets working to advance youth learning and financial inclusion for youth in Africa.</p><br><p>In co-founding Andela, Christina has finally found a scalable way for bright but disadvantaged young people to receive training and employment without any debt and without leaving their home countries. She believes this model has the power to both close global labor gaps and launch lifelong careers for thousands of young people.</p></br><p>Christina has a Bachelor’s degree in Ancient Philosophy from the University of Georgia (Go Dawgs) and a Master’s degree in International Law and Diplomacy from The Fletcher School at Tufts University.</p></br>'
            }, {
                id: 3,
                name: 'Iyinoluwa “E” Aboyeji',
                position: 'Co-Founder and Director, Recruitment',
                image: 'e.jpg',
                bio: '<p>Iyinoluwa is a Nigerian serial entrepreneur with several years of experience running social ventures in education technology and publishing. When he was 18, he worked as an intern for the World Youth Alliance in the United Nations Headquarters. He went on to run one of Canada’s largest student-owned publishing houses, Imprint Publications as President of the Board. Iyinoluwa helped found and run Bookneto Inc, a social e-learning platform for university professors to teach online courses. Bookneto Inc. was acquired in 2013.</p><br><p>Iyinoluwa holds a Bachelor’s Degree in Legal Studies from the University of Waterloo in Waterloo, Ontario, Canada. Iyinoluwa is a recipient of several awards and honors including the John C Holland Award for Youth Leadership (awarded by JC Holland Foundation in 2010), Nigeria’s top 20 under 20 (awarded by Ynaija! in 2011) and World Economic Forum Global Shaper in 2012.</p><br>'
            }, {
                id: 4,
                name: 'Ian Carnevale',
                position: 'Co-Founder and Director, Business Systems',
                image: 'ian.jpg',
                bio: '<p>Ian has spent the past six years building education technology companies. Prior to Andela, he co-founded two startups, LearnVille and Fora, which was accepted into Canada’s top accelerator, Extreme Startups. At Fora, Ian connected over 800 students across Africa to online courses. Ian is currently a mentor for Techstars, one of the top startup accelerators in the world, where he brings his immense experience leading technical and business teams and building digital products, including three Learning Management Systems.</p><br><p>Ian has a background in Computer Science and Digital Enterprise Management from the University of Toronto as well as Visual Design from Sheridan College. His passion for user experience coupled with his desire to help people succeed drives his vision of shaping the world through education.</p>'
            }, {
                id: 5,
                name: 'Obie Fernandez',
                position: 'CTO',
                image: 'obie.jpg',
                bio: '<p>Obie brings a depth of skill and experience to the Andela team in the areas of software craftsmanship, people and business development. He is known all over the tech world as one of the top evangelists for Ruby on Rails and the books in his Addison Wesley Professional Ruby Series are some of the "bibles" of Ruby development. Obie has over 20 years of professional experience delivering high-quality software and still slings code everyday, most recently diving head first into the "FAN" stack, which he says promises 10x productivity over Rails by combining Firebase + Angular + Node.js.</p><p>Prior to joining the Andela team, Obie has founded a variety of product-driven and consulting startups, most famously his agency Hashrocket, which he sold in 2010. During his tenure at ThoughtWorks during the 2000s, Obie was a thought leader in Agile project development, and delivered some of the first production Ruby applications for Fortune 100 companies all over the world.</p>'
            }, {
                id: 6,
                name: 'Adam Frankel',
                position: 'Vice President of External Affairs',
                image: 'adam.jpg',
                bio: '<p>As VP of External Affairs, Adam oversees business development, communications, and partnerships for Andela. He joins Andela from Microsoft, where he worked in corporate strategy. Previously, he was founding Executive Director of Digital Promise, a bipartisan nonprofit chartered by Congress to spur digital innovation in education. In that capacity, Adam built a national coalition of school district leaders committed to innovation and forged partnerships with foundations and companies from the Gates Foundation and Carnegie Corporation to Apple and Intel.</p><br><p>Before Digital Promise, Adam was Special Assistant to the President and Senior Speechwriter for President Barack Obama. He was a speechwriter for Barack Obama for four and a half years, starting as the second speechwriter on the 2008 presidential campaign. Adam also assisted President Kennedy’s advisor Theodore C. Sorensen on his 2008 New York Times-bestselling memoir Counselor: A Life at the Edge of History.</p></br><p>Adam is a graduate of Princeton University and the London School of Economics, where he was a Fulbright Scholar. He is a member of the John F. Kennedy Library Foundation’s Board of Directors and its Profile in Courage Award Committee, and a Term Member of the Council on Foreign Relations. His media appearances include CNN and Bloomberg TV and his writing has appeared in The New Yorker. Adam was born and raised in New York.</p></br>'
            }, {
                id: 7,
                name: 'Nadayar Enegesi',
                position: 'Director of Engineering and Training',
                image: 'nad.jpg',
                bio: '<p>Nadayar was previously Co-Founder/CTO at Fora. Nadayar is an avid builder of technology with a passion for getting things done well. He has industry experience building enterprise software for the likes of OpenText, PTC, Bnotions and has worked closely with major tech leaders in Toronto.</p><br><p>When he’s not aggressively spewing away top-notch code on his computer, Nadayar can be found on the soccer field where he refuses to give up on his dream of becoming a sports star. Nadayar has a Computer Science and Business degree from the University of Waterloo.</p>'
            }, {
                id: 8,
                name: 'Brice Nkengsa',
                position: 'Engineering Manager',
                image: 'brice.jpg',
                bio: '<p>Brice is a rock star engineer with a strong belief that technology can make the world a better place. From a very early age, he found a passion in programming and logical problem solving and has since developed into a full-stack engineer. He acquired invaluable industry experience building software products for Advanced Micro Devices (AMD), BlackBerry, and Pivotal Labs. At Fora, he led the development of an online learning management system that included both a web and mobile application. Fora graduated from Extreme Startups, Canada’s premier startup accelerator where Brice had the chance to work closely with tech leaders from the Toronto startup scene.</p><br><p>Brice holds a Software Engineering degree from the University of Waterloo and a precious iron ring.</p>'
            }, {
                id: 9,
                name: 'Mia Lui',
                position: 'Director, Operational Planning',
                image: 'mia.jpg',
                bio: '<p>Mia has several years of experience in event production, strategic planning, logistics execution, and operations management. At the Clinton Global Initiative, she managed these critical components for bringing together the programmed agenda and panel sessions at both domestic and internationally based conferences.</p><br><p>Having developed sessions on various issue areas, she has a deep appreciation for constructing holistic systems and integrating this approach into design and planning initiatives. She has covered topics ranging from urban security for girls and women to youth entrepreneurship, social media and cause marketing, organizational capacity, fundraising, and monitoring and evaluation.</p><br><p>Mia studied Psychology at the University of Michigan and graduated from the City College of New York with a Master’s Degree in International Relations.</p>'
            }, {
                id: 10,
                name: 'Evan Johnson',
                position: 'Director, Partner Relations',
                image: 'evan1.jpg',
                bio: '<p>Evan joined the Andela team as the Director of Partner Relations.  He most recently completed a joint MBA/ Master of Public Policy degree program at the University of Chicago, where he focused his studies on entrepreneurship and education. </p><br><p>Before his return to school, Evan served for four years as an intelligence officer in the US Marine Corps, and was stationed in Japan and Afghanistan. </p><br><p> In between time in the military and graduate school, Evan taught English in Ecuador and China and worked on technology projects at the MIT Media Lab. He went to Harvard for undergrad, where he was a history major with a specialty in international relations.</p>'
            }, {
                id: 11,
                name: 'Judith Okonkwo (Lagos)',
                position: 'Director, Professional Development',
                image: 'judith.jpg',
                bio: "<p>Judith is a Business Psychologist and OD practitioner. She is particularly passionate about co-creating results with clients and advocates the use of diversity conscious and inclusive methods in practice. She has extensive experience in workshop design and delivery, the use of technology to facilitate collaboration, and coaching at all levels.</p><br><p>As an internal consultant, Judith most recently worked to embed evidence-based management in the organization development practice of a FTSE 100 company, and provided organization-wide OD expertise. This included work with individual members of the leadership team as well as directorate leadership team interventions. She has expertise in a variety of applied psychology/ behavioral science methods for the workplace including psychometrics, particularly the use of Jungian preferences for development, emotional intelligence and biases. She is the creator of the Oriki Coaching Method, an acclaimed technique creatively utilizing aspirations for development.</p></br><p>She holds degrees in Psychology and Business Psychology, is a Fellow of the RSA, a Principal Member of the Association for Business Psychologists and an Associate Fellow of the British Psychological Society. She has over 15 years’ international experience as an academic, internal practitioner and consultant in a number of sectors including finance, defense and aviation.  She is a co-founder of Tomorrow by Design a facilitation practice that inspires solutions via Afrocentric interpretations of group genius methodology; and advises the Board of The Food Shelter. </p><br><p>Judith is also currently doing doctoral work on leadership, her research explores non- western archetypes seeking to expand the body of knowledge with a more inclusive view. Having grown up as a diplomat's child, Judith considers herself a global citizen and when work permits aims to see as much of the world as she can.</p>"
            },  {
                id: 13,
                name: 'Chidiebere Nnadi',
                position: 'Trainer (Lagos)',
                image: 'chidi.jpg',
                bio: '<p>Chidiebere Nnadi is an experienced software developer with many years of experience developing software in an advertising agency and as a freelancer. He is passionate about technology and design. He previously worked as Sr. UX Developer at a Nigerian startup (Marble Computers, now SimerNG) and also as Application Developer at Wild Fusion (an African digital agency) where he developed solutions and worked with some of the biggest brands in Nigeria. Chidiebere has a Bachelor of Engineering Degree in Electrical and Electronics Engineering from Covenant University in Nigeria.</p>'
            }, {
                id: 14,
                name: 'Godson Ukpere',
                position: 'Trainer (Lagos)',
                image: 'godson.jpg',
                bio: '<p>Godson is an application developer with experience in web, desktop and mobile application development. He works with various development platforms / frameworks, including .NET Technologies, Unity 3D, PHP, and Java, and has developed mobile apps in the Blackberry and Android app stores.</p><br><p>Godson co-founded Paidtrends, a crowd-sourced advertising platform, currently employed by a number of digital agencies across Nigeria. Godson also co-founded replay.com.ng, a Nigerian-based entertainment application, allowing its users to create and listen to playlists from a database of over 13,000 songs, locally. He also worked as a Technical Development Consultant for Alpha and Jam, and Syracuse Digital Nigeria, deploying, maintaining, and managing the technical deliverables for various digital campaigns.</p><br><p>Godson holds a Bachelor’s Degree in Electrical and Electronics Engineering, 1st class Honors from Covenant University in Nigeria. With two Associate/Assistant Professors in Botswana and Nigeria, Godson coauthored “Face Recognition Using Line Edge Mapping Approach” for the American Journal of Electrical and Electronic Engineering.  Godson is dedicated to learning new technologies to expand his skills.</p>'
            }, {
                id: 15,
                name: 'Oluwagbenga Osowe',
                position: 'Operations Analyst (Lagos)',
                image: 'gbenga.jpg',
                bio: '<p>Gbenga is a lover of the education ecosystem and has spent the past 7 years teaching in classrooms and writing for e-learning platforms. He earned a certificate as a Virtual Instructor from University of California, Irvine via Coursera and prior to joining Andela, he worked as a quantitative aptitude instructor for GMAT, GRE, SAT and SHL examinations in Lagos and other parts of Nigeria.</p><br><p>He believes that improving the quality of relevant education available to young people is key to solving the problems of Nigeria and other African countries.</p><br><p>Gbenga has a Bachelor’s degree in Material Science and Engineering from Obafemi Awolowo University in Ile Ife, Osun state Nigeria and spends his spare time as a performance poet.</p>'
            }, {
                id: 16,
                name: 'Mohini Ufeli',
                position: 'Documentarian (Lagos)',
                image: 'mohini.jpg',
                bio: '<p>Mohini is a photographer with a passion for exploring emotions through her work. Her role as Documentarian allows her harness different media to convey the essence of Andela.</p><br><p>She has worked as an Experiential Learning Journalist at Mount Holyoke College and as a photojournalist at Sahara Reporters. In her spare time, she plays rugby and the guitar.</p><br><p>Mohini holds a Bachelor’s Degree in English, with a minor in Journalism, Media and Public Discourse from Mount Holyoke College, Massachusetts.</p>'

            }, {
                id: 17,
                name: 'Mustapha Abokede',
                position: 'Director of Operations (Lagos)',
                image: 'mustapha.jpg',
                bio: '<p>Mustapha is a passionate Operations and Business manager whose belief in “business for good” leads him to constantly challenge assumptions at the intersection between business and society. A varied career has seen Mustapha build up knowledge, experience and expertise across a range of sectors including consulting, social enterprise and renewable energy. He was also Nigeria’s first Acumen Global Fellow.</p><br><p>Prior to joining Andela, Mustapha has worked at KPMG and d.light design. He most recently spent time developing and implementing strategies to scale distribution channels across West Africa at d.light design, a company that makes low-cost solar lights that provide cleaner, safer, and cheaper energy to underserved populations.</p><br><p>Mustapha describes himself as a Change Maker and a practical realist. He holds a B.Eng. in Petroleum Engineering from the Federal University of Technology Owerri in Nigeria. In his spare time he maintains multiple blogs, reads traditional African literature and ponders the globe planning his next trip to a corner of the world his travels have not yet taken him.</p>'

            }
        ];

        $scope.selectedMember = null;
        $scope.selectMember = function(member) {
            $scope.selectedMember = member;
        };

        $scope.trustHml = function() {
            if ($scope.selectedMember) {
                return $sce.trustAsHtml($scope.selectedMember.bio);
            }
        };

    }
]);
