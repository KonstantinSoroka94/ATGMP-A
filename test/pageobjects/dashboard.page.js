class Dashboards{
    /**
     * define selectors using getter methods
     */
    get sideBarProjectSelector() {
        return $('div[class="projectSelector__project-selector--FXbsR"]');
    }

    get mainProject() {
        return $$('a[href="#automatedtestingglobalmentoringprogram"]')[0];
    }

    get defaultDashboards() {
        return $$('a[href="#automatedtestingglobalmentoringprogram/dashboard/15"]')[1];
    }

    dashboardWidget(el) {
        return $$('div[class="react-grid-item widgetsGrid__widget-view--dVnmj react-draggable cssTransforms react-resizable"]')[el];
    }


    dashBoardWidgetAchor(el) {
        return $$('span[class="react-resizable-handle react-resizable-handle-se"]')[el];
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async selectMainProject() {
        await this.sideBarProjectSelector.click();
        await this.mainProject.click();
    }

    async selectDefaultDashboard() {
        await this.defaultDashboards.click();
    }

    async scrollToLaunchesTable(el) {
        await this.dashboardWidget(el).scrollIntoView();
    }

    async dragAndDropWidget(el, target) {
        await this.dashboardWidget(el).dragAndDrop(await this.dashboardWidget(target));
    }

    async resizeWidget(el, x, y) {
        await this.dashBoardWidgetAchor(el).dragAndDrop({x: x, y: y});
    }

    async getSizeOfTheWidget(item, params = '') {
        const size = await this.dashboardWidget(item).getSize(params)
        return size;
    }

    async getLocationOfTheWidget(item, params = '') {
        const location = await this.dashboardWidget(item).getLocation(params)
        return location;
    }
}

module.exports = new Dashboards();
