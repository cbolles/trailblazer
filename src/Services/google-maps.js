/* eslint-disable no-undef */

var geocoder = new window.google.maps.Geocoder();

/**
 * Creates a promise for converting a geocode to an address
 */
export function toGeocode(address) { 
    return new Promise(function(resolve, reject) {
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status === 'OK') {
                console.log(results[0].geometry.location.viewport.Ua.i);
                resolve(results[0].geometry.location);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
                reject(new Error('Geocode was not successful: ' + status));
            }
        });
    });
}
