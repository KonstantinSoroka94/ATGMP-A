/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open() {
        return browser.url('http://localhost:8080/')
    }

    waitSeconds(time) {
        return browser.pause(time * 1000)
    }

    waitForSpecificURL(rout) {
        return browser.waitUntil(() => {
            return browser.getUrl().then((pageUrl) => {
              return pageUrl.indexOf(rout) > -1
            });
          }, 5000)
    }
}
