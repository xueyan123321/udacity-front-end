'use strict'

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


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined', function() {
            for(var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            } // method one
         });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
            allFeeds.forEach(function(feed) {
            	expect(feed.name).toBeDefined();
            	expect(feed.name).not.toBe(0);
            }); // method two
         });
    });


    // test suite for the menu
    describe('The menu', function() {
        // a test that ensures the menu element is hidden by default.

         it('is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden');
         });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden'); // method one
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true); // method two
          });
    });


    // test suite for initial entries
    describe('Initial Entries', function() {
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('the loadFeed function is called and completes its work', function() {
        	expect($('.feed .entry').length > 0).toBe(true);
            //expect($('.feed').find('.entry').length > 0).toBe(true);
            // done();
        });
    });


    // test suite for new feed selection
    describe('New Feed Selection', function() {
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var firstContent,
            secondContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstContent = $('.feed').text();
                loadFeed(1, function() {
                	secondContent = $('.feed').text();
                	done();
                });
            });
         });

        it('the content changes', function(done) {
            expect(firstContent).not.toBe(secondContent);
            done();
        });
    });


}());