/* feedreader.js
 *
 * This file contains all of the tests that will run on our application.
 */
$(function() {

    //Let's check the actual RSS feeds. The RSS Feeds are contained
    //in the allFeeds array.
    describe('RSS Feeds', function() {
        //Ensure that the allFeeds variable is defined  is an array
        //and is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect($.isArray(allFeeds)).toBe(true);
            expect(allFeeds.length).not.toBe(0);
        });

        //Loop through each feed to ensure that the URL is defined,
        //a string, valid and is not empty.
        it("has all URLs defined", function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(typeof allFeeds[i].url).toBe('string');
                expect(allFeeds[i].url).toMatch(/^http(s?)\:\/\//);
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        //Loop through each feed to ensure that the name is defined,
        //is a string and is not empty.
        it('has all names defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(typeof allFeeds[i].name).toBe('string');
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    //Let's check the functionality of the menu. It should be hidden
    //by default, slide in when the menu button is clicked and slide
    //out when the menu button is clicked again.
    describe('The menu', function() {
        var menu;
        //Find the menu element when this suite runs.
        beforeAll(function() {
            menu = document.getElementsByClassName("menu")[0];
        });

        //Ensure the menu is hidden by default.
        it('is hidden by default', function() {
            expect(isMenuVisible(menu)).toBe(false);
        });

        //The menu is shifted off screen by default, and then shifted on
        //screen when it becomes visible. I need to check the actual size
        //and location to check the visibility.
        var isMenuVisible = function(mnu) {
            var rect = mnu.getBoundingClientRect();
            return rect.left + rect.width > 0;
        };

        //Ensure that when the user clicks the menu icon while the menu is hidden
        //the menu appears.
        it('is visible after clicking menu icon', function(done) {
            expect(isMenuVisible(menu)).toBe(false);
            //When the user clicks the icon, this is the code that is called.
            $('body').toggleClass('menu-hidden');

            //The menu slides into place over 200 milliseconds so we can't
            //check the instant we toggle the menu.
            setTimeout(function() {
                expect(isMenuVisible(menu)).toBe(true);
                $('body').toggleClass('menu-hidden');
            }, 225); //the time out is .2 seconds, or 200 ms. So lets wait 225 for good measure.

            //The menu slides into place over 200 milliseconds so we can't
            //check the instant we toggle the menu.
            setTimeout(function() {
                expect(isMenuVisible(menu)).toBe(false);
                done();
            }, 555); //the time out is .2 seconds, or 200 ms. So lets wait at
            //least another 200ms for good measure.
        });

        //Check to make sure all of the feeds are present and there aren't analyze
        //extras.
        it('contains all feeds', function() {
            var menuElementCount = $('.feed-list li').length;
            expect(menuElementCount).toBe(allFeeds.length);
        });
    });

    //Here we're going to test that the loadFeed function does what it's supposed to.
    //loadfeed pulls data from the feed api, which is an asynhronous process.
    describe('Initial Entries', function() {
        var feed;

        //Let's grab the feed element before any the tests are run.
        beforeAll(function() {
            feed = $('.feed');
        });

        //Before each test is run, call the "loadFeed" function and pass in a
        //function parameter that will tell the test when it is done.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        //When the before each is done, this will be called. Ensure that the
        //length of the entries element is greater than 0.
        it('are loaded', function() {
            var entries = $('.entry');
            expect(entries.length).toBeDefined();
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    //Test that when the loadFeed function is called, the content changes.
    //loadFeed is asynchronous.
    describe('New Feed Selection', function() {
        var titleElement;
        var prevEntries;
        var feedElement;

        //let's grab the header title element for later use.
        beforeAll(function() {
            titleElement = $('.header-title');
            feedElement = $('.feed');
        });

        //Before each test we need ot record what the previous entries
        //Lets reset the selected feed to the first element in the list.
        //Once the first element in the list is done, let's change the
        //feed.
        beforeEach(function(done) {
            loadFeed(0, function() {
                prevEntries = $('.feed').html(); //get the html at the start
                loadFeed(1, function() {
                    done();
                });
            });
        });


        it('displays new content after load', function() {
            //Does the title change?
            expect(titleElement.html()).toBe(allFeeds[1].name);
            //Do the entries change?
            expect(prevEntries).not.toBe(feedElement.html());
        });
    });
}());
