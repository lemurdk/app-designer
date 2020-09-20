
/* global $, odkTables, odkCommon */
/* exported display */
"use strict";

var currentTab = 1;

function display() { 
    updateForTab(currentTab);
    $('#psbTab').on('click', function() {
        currentTab = 0;
        updateForTab(currentTab);
    });
    $('#ascTab').on('click', function() {
        currentTab = 1;
        updateForTab(currentTab);
    });

    $('#launch-button').on(
            'click',
            function() {
                if (currentTab === 0) {
                    odkTables.launchHTML(null, 'config/assets/PSB.html');
                } else if (currentTab === 1) {
                    odkTables.launchHTML(null, 'config/assets/ASC.html');
                }  else {
                    console.error('trouble, unrecognized tab');
                }
            });
}

function updateForTab(tab) {
    var fileUri;
    var tabItem;
    var descriptionDiv = $('#description');
    // Remove all the active-tab classes.
    $('.tab-item').removeClass('active');

    // Now add the current tab to active and update the description.
    if (tab === 0) {
        fileUri = odkCommon.getFileAsUrl('config/assets/img/logo_psb.jpg');
        descriptionDiv.text('Para inqueridores (entrevistadores) de Projecto de Saude de Bandim.');
        descriptionDiv.attr('class','description-text-black');
        tabItem = $('#psbTab');
    } else if (tab === 1) {
        fileUri = odkCommon.getFileAsUrl('config/assets/img/logo_republica.JPG');
        descriptionDiv.text('Para agente de saude comunitaria ou pessoais de saude que vao administrar medicamento.');
        descriptionDiv.attr('class','description-text-black');
        tabItem = $('#ascTab');
    }  else {
        console.error('unrecognized tab index: ' + tab);
    }
    $('body').css('background-image', 'url(' + fileUri + ')');
    tabItem.addClass('active');
}
