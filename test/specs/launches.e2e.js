const LoginPage = require('../pageobjects/login.page')
const Page = require('../pageobjects/page');
const Dashboards = require('../pageobjects/dashboard.page')
const expect = require('chai').expect;
const page = new Page ();
describe('Dashboard elements could be', () => {

    before(async () => {
        await page.open()
        await LoginPage.login('default', '1q2w3e')
        await page.waitForSpecificURL('dashboard')
        await Dashboards.selectMainProject();
        await page.waitForSpecificURL('#automatedtestingglobalmentoringprogram/dashboard')
        await Dashboards.selectDefaultDashboard();
        await page.waitSeconds(3);
    });

    it('Moved from there current position', async () => {
        await Dashboards.scrollToLaunchesTable(11);
        const defaulElementPosition = await Dashboards.getLocationOfTheWidget(11);
        await Dashboards.dragAndDropWidget(11, 0);
        const newElementPosition = await Dashboards.getLocationOfTheWidget(11);
        expect(defaulElementPosition).to.not.eq(newElementPosition);
    });

    it('Resized', async () => {
        await Dashboards.scrollToLaunchesTable(11);
        const defaultElementSize = await Dashboards.getSizeOfTheWidget(11);
        await Dashboards.resizeWidget(11, 10, -20);
        const newElementSize = await Dashboards.getSizeOfTheWidget(11);
        expect(defaultElementSize).to.not.eq(newElementSize);
    });
})


