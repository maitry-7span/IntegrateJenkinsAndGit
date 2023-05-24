const { merge } = require('mochawesome-merge');
const { create } = require('mochawesome-report-generator');
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  on('after:run', (results) => {
    const reportDir = path.join(__dirname, '..', 'mochawesome-report');
    return merge({
      files: ['./mochawesome-report/*.json'],
    }).then((report) => {
      return create(report, {
        reportDir,
        reportFilename: 'report',
        reportTitle: 'Cypress Test Results',
        reportPageTitle: 'Cypress Test Results',
        reportTitleColor: '#2e8b57',
        reportTitleFontSize: '32px',
        reportTitleFontFamily: 'Arial',
        reportTitleFontWeight: 'normal',
        reportTitleAlignment: 'center',
        reportTitleMargin: '0 0 20px 0',
        reportSummaryInclude: true,
        reportSummarySort: true,
        reportSummaryChart: true,
        reportSummaryChartType: 'doughnut',
        reportSummaryFilename: 'summary',
        reportSummaryTitle: 'Test Results Summary',
        reportSummaryDescription: 'This is a summary of the test results',
        reportSummaryWidth: 1000,
        reportInlineAssets: true,
        reportAssetsPath: './',
        reportPageFooter: '<div class="custom-footer">Custom Footer Content</div>',
      }).then((generatedReport) => {
        if (fs.existsSync(reportDir)) {
          fs.removeSync(reportDir);
        }
        fs.moveSync(generatedReport, reportDir);
      });
    });
  });
};