/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("has all URLs defined", function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has all names defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var menu;

        beforeAll(function() {
            menu = document.getElementsByClassName("menu")[0];
        });

        it('is hidden by default', function() {
            expect(isMenuVisible()).toBe(false);
        });

        //The menu is shifted off screen by default, and then shifted on
        //screen when it becomes visible. I need to check the actual size
        //and location.
        isMenuVisible = function() {
            var rect = menu.getBoundingClientRect();
            return rect.left + rect.width > 0;
        };

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('is visible after clicking menu icon', function(done) {
            expect(isMenuVisible()).toBe(false);
            $('body').toggleClass('menu-hidden');

            setTimeout(function() {
                expect(isMenuVisible()).toBe(true);
                $('body').toggleClass('menu-hidden');
            }, 225); //the time out is .2 seconds, or 200 ms. So lets wait 225 for good measure.

            setTimeout(function() {
                expect(isMenuVisible()).toBe(false);
                done();
            }, 455); //the time out is .2 seconds, or 200 ms. So lets wait 225 for good measure.
        });

        //Check to make sure all of the feeds are present and there aren't analyze
        //extras.
        it('contains all feeds', function() {
            var menuElementCount = $('.feed-list li').length;
            expect(menuElementCount).toBe(allFeeds.length);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var feed;

        beforeEach(function(done) {
            feed = $('.feed');
            loadFeed(0, function() {
                done();
            });
        });

        it('are loaded', function(done) {
            var entries = $('.entry');
            expect(entries.length).toBeDefined();
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var title;
        var prevEntries;

        beforeEach(function(done) {
            title = $('.header-title');
            prevEntries = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });


        it('displays new content after load', function(done) {
            //Does the title change?
            expect(title.html()).toBe(allFeeds[1].name);
            //Do the entries change?
            expect(prevEntries).not.toBe($('.feed').html());
            done();
        });
    });
}());
