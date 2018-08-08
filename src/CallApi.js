import fetchJsonp from 'fetch-jsonp';
export const baseUrl = "https://apitestserver.com:5000";
export async function callApi(url) {
    const response = await fetchJsonp(baseUrl + url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            return data;
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    return response;
}