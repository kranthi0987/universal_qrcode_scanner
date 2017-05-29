// Page init event
document.addEventListener('deviceready', deviceready, false);
function deviceready() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            console.log("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
            document.querySelector('#myNavigator').pushPage('html/resultpage.html');
            document.getElementById('resultbox').value = result.text;
            document.getElementById('typeof').value = result.format;
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
    // Set AdMobAds options:
    admob.setOptions({
        publisherId: "ca-app-pub-2740693036645282/1488795057",  // Required
        interstitialAdId: "ca-app-pub-2740693036645282/1150717854",
        autoShowBanner: true,
        autoShowInterstitial: true,
        adSize: admob.AD_SIZE.SMART_BANNER,
        bannerAtTop: false,
        overlap: false,
        offsetStatusBar: false,
        isTesting: false

    });

    // Start showing banners (atomatic when autoShowBanner is set to true)
    admob.createBannerView(
        {
            publisherId: "ca-app-pub-2740693036645282/1488795057"
        }
    );

    // Request interstitial (will present automatically when autoShowInterstitial is set to true)
    admob.requestInterstitialAd(
        {
            publisherId: "ca-app-pub-2740693036645282/1488795057",
            interstitialAdId: "ca-app-pub-2740693036645282/1150717854",
            autoShowInterstitial: true
        }
    );
    registerAdEvents();


}

function registerAdEvents() {
    document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
    document.addEventListener(admob.events.onAdFailedToLoad, function (e) {
    });
    document.addEventListener(admob.events.onAdOpened, function (e) {
    });
    document.addEventListener(admob.events.onAdClosed, function (e) {
    });
    document.addEventListener(admob.events.onAdLeftApplication, function (e) {
    });
    document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {
    });
}
function onAdLoaded(e) {
    if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
        admob.showInterstitialAd();
        showNextInterstitial = setTimeout(function () {
            admob.requestInterstitialAd();
        }, 5 * 60 * 1000); // 5 minutes
    }
}

function CopyToClipboard(text) {
    window.plugins.toast.showWithOptions(
        {
            message: "text copied",
            duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
            position: "bottom",
            addPixelsY: -40  // added a negative value to move it up a bit (default 0)
        },
        function (a) {
            console.log('toast success: ' + a)
        },
        function (b) {
            alert('toast error: ' + b)
        }
    );
    console.log("CopyToClipboard called");
    Copied = text.createTextRange();
    Copied.execCommand("Copy");


}
