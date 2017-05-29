/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/
myApp.controllers = {
    //////////////////////////
    // splash Page Controller //
    //////////////////////////
    splashPage: function (page) {
        var currentPage = "";
        document.addEventListener("deviceready", scan, false);

        function onDeviceReady() {
            document.addEventListener("backbutton", function () {
                var currentPage = "";
                $("ons-page").each(function () {
                    if ($(this).css("display") == "block") currentPage = $(this).attr("id")
                });
                if (currentPage == "splashPage" || currentPage == "loginpage") {
                    navigator.home.home()
                }
                else {
                    document.querySelector('#myNavigator').popPage();
                }
            }, false);
        }

        var splashTimeCompleted = false;
        setTimeout(function () {
            splashTimeCompleted = true;
            if (isLoggedIn()) {
                scan()
            }
            else {
                scan()
            }
        }, splashTime);
        initOperatingSystem();
        document.addEventListener('deviceready', function () {
        });

        function initOperatingSystem() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                $("body").addClass("platform-windows");
                return "Windows Phone";
            }
            if (/android/i.test(userAgent)) {
                $("body").addClass("platform-android");
                return "Android";
            }
            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                $("body").addClass("platform-ios");
                return "iOS";
            }
            return "unknown";
        }
    }, //////////////////////////
    // login Page Controller //
    //////////////////////////
    loginPage: function (page) {
    },
    //////////////////////////
    // forgotPassword Page Controller //
    //////////////////////////
    forgotPasswordPage: function (page) {
    },
    //////////////////////////
    // syncronizeAll Page Controller //
    //////////////////////////
    syncronizeAll: function (page) {
    },
    /////////////////////////////////
    // syncronizeAll Page Controller //
    ///////////////////////////////////
    updateApp: function (page) {
    },
    //////////////////////////
    // sync Page Controller //
    //////////////////////////
    syncPage: function (page) {
    },
    /////////////////////////////
    // history Page Controller //
    ////////////////////////////
    historyPage: function (page) {
    },
    //////////////////////////
    // homeNews Page Controller //
    //////////////////////////
    homeNewsPage: function (page) {
    },
    //////////////////////////
    // schedule Page Controller //
    //////////////////////////
    schedulePage: function (page) {
    },
    //////////////////////////
    // overDue Page Controller //
    //////////////////////////
    overDuePage: function (page) {
    },
    //////////////////////////
    // scheduleDetailsPage Page Controller //
    //////////////////////////
    scheduleDetailsPage: function (page) {
    },
    //////////////////////////
    // schedulecandidatePage Page Controller //
    //////////////////////////
    scheduleCandidatesPage: function (page) {
    },
    //////////////////////////
    // scheduleCandidatesMarksUpdatePage Page Controller //
    //////////////////////////
    scheduleCandidatesMarksUpdatePage: function (page) {
    },
    //////////////////////////
    // Tabbar Page Controller //
    //////////////////////////
    homeTabPage: function (page) {
    }, ////////////////////////
    // Menu Page Controller //
    ////////////////////////
    menuPage: function (page) {
    }, ////////////////////////
    // Assessor profile Controller //
    ////////////////////////
    assessorProfilePage: function (page) {
    },
    ////////////////////////
    // Assessor profile edit Controller //
    ////////////////////////
    assessorProfilePageEdit: function (page) {
    },
    ////////////////////////
    // Assessor-agency profiles List Controller //
    ////////////////////////
    agencyProfilesListPage: function (page) {
    },
    ////////////////////////
    // Assessor-agency profile Controller //
    ////////////////////////
    agencyProfilePage: function (page) {
    },
    ////////////////////////
    // certificate Page Controller //
    ////////////////////////
    cerficateresult: function (page) {
        console.log(page.data);
        var data = page.data;
        $('#name').html(data.Salutation + data.CandidateName);
        $("#Sector").html(data.SectorName);
        $("#CandidateName").html(data.CandidateName);
        $("#Qpnumber").html(data.JobRoleCode);
        $("#jobrole").html(data.JobRole);
        $("#NSQFlevel").html(data.NSQF);
        $("#Grade").html(data.Grade);
        $("#DateOfIssuance").html(data.DateOfIssuance);

        $('#back').click(function () {
            document.querySelector('#myNavigator').popPage();
            scan()
        });

        $(".ion-ios-close-empty").click(function () {
            document.querySelector('#myNavigator').popPage();
            scan()
        });

        $(document).ready(function () {
            $('select').material_select();
        });
    }, ////////////////////////////
    // New Task Page Controller //
    ////////////////////////////
    newTaskPage: function (page) {
    }, ////////////////////////////////
    // Details Task Page Controller //
    ///////////////////////////////
    detailsTaskPage: function (page) {

    }, ////////////////////////////////
    // Form List Task Page Controller //
    ///////////////////////////////
    formsListPage: function (page) {
    }, ////////////////////////////////
    // Form Page Controller //
    ///////////////////////////////
    formPage: function (page) {

    }, ////////////////////////////////
    // select Train Page Controller //
    ///////////////////////////////
    selectTrainPage: function (page) {

    }
};