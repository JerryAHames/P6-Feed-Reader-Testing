# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

1. Take the Javascript Testing [course](https://www.udacity.com/course/ud549).
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
5. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js* and review the [Jasmine documentation](http://jasmine.github.io/).
6. Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the allFeeds variable to a passing state.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named "The menu".
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named "Initial Entries".
14. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
15. Write a test suite named "New Feed Selection".
16. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
17. When complete - all of your tests should pass.

# Feed Reader Testing

## How to Run
* Click on the index.html file
* Alternatively visit the <a href="http://jerryahames.github.io/P6-Feed-Reader-Testing/">github io</a> page

## Additional tests
* There are a few different feeds listed in the allFeeds array. Each one is added to the menu. I have added a test that verifies that each item is added to the menu. The menu should have the same number of elements as the allFeeds array, no more and no less.
* For task #13, above, there are 2 different bits of information that change when the feed returns. I've updated the test to check both the title and the entries.

## References
<a href="http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport">Is element visible?</a>
<a href="http://jasmine.github.io/2.2/introduction.html">Jasmine</a>
