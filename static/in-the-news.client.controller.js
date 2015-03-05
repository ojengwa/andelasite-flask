'use strict';


angular.module('core').controller('InTheNewsController', ['$scope', '$state', '$timeout', '$window', '$document', '$element',
    function($scope, $state, $timeout, $window, $document, $element) {
        $scope.latestArticles = [{
                id: 1,
                summaryHeader: 'Bella Naija',
                linkBody: 'Activating Girl Power!',
                linkHref: 'http://www.bellanaija.com/2014/11/04/activating-girl-power-apply-for-the-andela-women-only-software-development-bootcamp-deadline-14-november-2014/'
            }, {
                id: 2,
                summaryHeader: 'Celebrating Progress Africa',
                linkBody: 'Andela to hold first all female bootcamp',
                linkHref: 'http://www.cp-africa.com/2014/11/05/andela-hold-first-female-bootcamp/'
            }, {
                id: 3,
                summaryHeader: 'Forcampus',
                linkBody: 'For women only',
                linkHref: 'http://forcampus.com/women-apply-andela-bootcamp/'
            }, {
                id: 4,
                summaryHeader: 'Celebrating Progress Africa',
                linkBody: 'Andela and General Assembly to partner',
                linkHref: 'http://www.cp-africa.com/2014/11/06/andela-general-assembly-partner-train-web-developers-africa/'
            }, {
                id: 5,
                summaryHeader: 'In the Capital',
                linkBody: 'Andela and GA partner to train web developers in Africa',
                linkHref: 'http://inthecapital.streetwise.co/2014/11/06/andela-partners-with-general-assembly-to-train-developers/'
            }, {
                id: 6,
                summaryHeader: 'General Assembly',
                linkBody: 'general assembly provides web development curriculum for andela institute',
                linkHref: 'https://blog.generalassemb.ly/general-assembly-and-andela-institute/#more-980197075'
            }

        ];

        $scope.notableArticles = [{
                id: 1,
                summaryHeader: 'Our CEO Jeremy Johnson discusses how to plug the youth unemployment gap using skill-based education',
                linkBody: 'The Great Skills-Based Education Land Grab',
                linkHref: 'http://gettingsmart.com/2014/09/great-skills-based-education-land-grab/'
            }, {
                id: 2,
                summaryHeader: 'Jeremy Johnson, Co-founder and CEO of Andela sits down with FinSMEs to talk all about Andela',
                linkBody: 'Andela, Interview With CEO Jeremy Johnson',
                linkHref: 'http://www.finsmes.com/2014/09/andela-interview-with-ceo-jeremy-johnson.html'
            }, {
                id: 3,
                summaryHeader: 'MaRS Discovery blogger talks about Andela Co-founder Iyinoluwa Aboyeji',
                linkBody: 'Going global fast: The story of Andela',
                linkHref: 'http://www.marsdd.com/news-and-insights/going-globally-fast-story-andela/'
            }, {
                id: 4,
                summaryHeader: 'Obie Fernandez, a director at Andela talks about and invites others to his latest adventure in Africa Software development',
                linkBody: 'Africa calling',
                linkHref: 'https://medium.com/@obie/africa-calling-6b9000223c75'
            }

        ];

        $scope.additionalLinks = [{
            id: 1,
            summaryHeader: 'EdSurge',
            linkBody: 'Andela Raises Seed Round to Train Coders in Developing Countries',
            linkHref: 'https://www.edsurge.com/n/2014-09-23-andela-raises-seed-round-to-train-coders-in-developing-countries'
        }, {
            id: 2,
            summaryHeader: 'Tech Cocktail',
            linkBody: 'Steve Case-Backed Andela Launches to Bridge Global Skills Gap in Software Development',
            linkHref: 'http://tech.co/steve-case-backed-andela-launches-bridge-global-skills-gap-software-development-2014-09'
        }, {
            id: 3,
            summaryHeader: 'PE Hub',
            linkBody: 'Startup Andela launches with seed round',
            linkHref: 'https://www.pehub.com/2014/09/startup-andela-launches-with-seed-round/'
        }, {
            id: 4,
            summaryHeader: 'FinSMEs',
            linkBody: 'andela raises seed funding',
            linkHref: 'http://www.finsmes.com/2014/09/andela-raises-seed-funding.html'
        }, {
            id: 5,
            summaryHeader: 'Dow Jones & Company',
            linkBody: 'Andela Seeded to Teach Computer Programming, Hire Developers in Developing Countries',
            linkHref: 'http://pevc.dowjones.com/article?an=DJFVW00120140923ea9najlmy&from=alert&pid=32&ReturnUrl=http%3a%2f%2fpevc.dowjones.com%2farticle%3fan%3dDJFVW00120140923ea9najlmy%26from%3dalert%26pid%3d32'
        }, {
            id: 6,
            summaryHeader: 'In The Capital',
            linkBody: '2U Co-Founder Raises Seed Round to Train Students Coding in Africa',
            linkHref: 'http://inthecapital.streetwise.co/2014/09/24/andela-raises-seed-round-to-train-students-coding-in-africa/'
        }, {
            id: 7,
            summaryHeader: 'Ventures Africa',
            linkBody: 'Nigerian Startup To Make Money By Paying You To Go To School',
            linkHref: 'http://www.ventures-africa.com/2014/09/nigerian-startup-to-make-money-by-paying-you-to-go-to-school/'
        }, {
            id: 8,
            summaryHeader: 'Education Dive',
            linkBody: 'Udacity raises $35M as it moves to expand nanodegrees',
            linkHref: 'http://www.educationdive.com/news/udacity-raises-35m-as-it-moves-to-expand-nanodegrees/313071/'
        }, {
            id: 9,
            summaryHeader: 'Microsoft NY',
            linkBody: 'Global Entrepreneurship Coming Out Of New York City',
            linkHref: 'http://microsoftnewyork.com/2014/09/24/global-entrepreneurship-coming-out-of-new-york-city/'
        }, {
            id: 10,
            summaryHeader: 'Now Digital Network',
            linkBody: 'Andela raises seed round to help eliminating the global skills gap',
            linkHref: 'http://www.nowdigitalnetwork.com/andela-formerly-known-as-fora-from-extreme-startups-raises-seed-round-to-help-eliminating-the-global-skills-gap/'
        }, {
            id: 11,
            summaryHeader: 'Education Dive',
            linkBody: '2U co-founder launches higher ed coding startup for students in Africa',
            linkHref: 'http://www.educationdive.com/news/2u-co-founder-launches-higher-ed-coding-startup-for-students-in-africa/312775/'
        }, {
            id: 12,
            summaryHeader: 'AFK Insider',
            linkBody: 'SNigerian Tech Accelerator Pays Developers To Go Back To School',
            linkHref: 'http://afkinsider.com/73577/nigerian-tech-accelerator-pays-developers-back-school/'
        }, {
            id: 13,
            summaryHeader: 'In The Capital',
            linkBody: 'Education News',
            linkHref: 'http://inthecapital.streetwise.co/2014/09/25/rise-grind-925-cirque-du-soleil-drones-andela-rain-boots/'
        }, {
            id: 14,
            summaryHeader: 'In The Capital',
            linkBody: 'Making moves',
            linkHref: 'http://inthecapital.streetwise.co/2014/09/28/get-schooled-928-education-news-you-missed-out-on-this-week/'
        }, {
            id: 15,
            summaryHeader: 'In The Capital',
            linkBody: 'Andela is Helping to Produce Skilled Developers Tech Companies Are Itching to Hire',
            linkHref: 'http://inthecapital.streetwise.co/2014/10/02/andela-is-producing-tech-talent-companies-cant-wait-to-hire/'
        }, {
            id: 16,
            summaryHeader: 'Huffington Post',
            linkBody: 'Reimagining The Workforce: The Importance Of Training Coders In Developing Countries',
            linkHref: 'http://www.huffingtonpost.com/2014/10/06/train-coders-in-developin_n_5939700.html?1412611040'
        }, {
            id: 17,
            summaryHeader: 'Bright Hub',
            linkBody: 'Are MOOCs Failing Students Who Need Them Most?',
            linkHref: 'http://www.brighthub.com/education/online-learning/articles/128730.aspx'
        }, {
            id: 18,
            summaryHeader: 'Venture Burn',
            linkBody: 'The makings of a Nigerian-women-in-tech movement?',
            linkHref: 'http://ventureburn.com/2014/10/article-bootcamp-makings-nigerian-women-tech-movements/'
        }, {
            id: 19,
            summaryHeader: 'Tech Cabal',
            linkBody: 'andela will teach young nigerian women to code in an all-female technology bootcamp',
            linkHref: 'http://techcabal.com/2014/10/15/andela-will-teach-young-nigerian-women-code-female-technology-bootcamp/'
        }, {
            id: 20,
            summaryHeader: 'Femme Lounge',
            linkBody: 'Young Nigerian Woman, Would You Like To Be A Software Developer?',
            linkHref: 'http://femmelounge.ng/young-women-of-nigeria-would-you-like-to-be-a-software-developer/'
        }, {
            id: 21,
            summaryHeader: 'EbonyLife TV',
            linkBody: 'Andela and the girl child',
            linkHref: 'https://www.facebook.com/ELReports/posts/352793514890809'
        }];

        $scope.twitterFeeds = function() {

            $scope.del();
            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + "://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                    
                }
            }(document, "script", "twitter-wjs");
            
        };


        $scope.del = function() {
            $element.bind('$destroy', function() {
                var twitterScriptEl = angular.element(document.querySelector('#twitter-wjs'));
                twitterScriptEl.remove();
            });
        };

        $scope.showMore = false;
        $scope.showLess = function() {
            $scope.showMore = false;
        };
    }
]);
