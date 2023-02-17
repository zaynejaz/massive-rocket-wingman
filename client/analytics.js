const swk = import.meta.env.VITE_SEGMENT_WRITE_KEY;

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="BU0dcEtWgTIzSQdVWJudA8vzAz30QH6Z";;analytics.SNIPPET_VERSION="4.15.3";
analytics.load(swk);
analytics.page('Wingman User');
}}();


// ------------------TRACK CALLS------------------
const form = document.querySelector('form')

let btn = document.getElementById("btnSearch");
btn.addEventListener("click", getText);

let textSearch;

function getText() {
    let textarea = document.getElementById('txtSearch');
    textSearch = textarea.value;
    
    fetch('http://ip-api.com/json/?fields=61439')
    .then(res => res.json())
    .then(res => {
        let city = res.city;
        let country = res.country;
        let countryCode = res.countryCode;
        let zipCode = res.zip;
        let latitude = res.lat;
        let longitude = res.lon;
        let region = res.region;
        let regionName = res.regionName;

        analytics.track('Wingman Search', {}, {
            userSearch:{
                prompt: textSearch
            },
            location: {
                city: city,
                country: country,
                countryCode: countryCode,
                latitude: latitude,
                longitude: longitude,
                region: region,
                regionName: regionName,
                zipCode: zipCode,
            }
        });
    });
}

// Send in user text with enter button
let input = document.getElementById("txtSearch");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        getText(); // Call getText() function
    }
});


