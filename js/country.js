var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');
const url = 'https://restcountries.eu/rest/v2/alpha/' + param;


function renderData(data) {
    const title = $('title')
    title.text(data.name)

    const image = $('.image')
    const flag = $(document.createElement('img'))
    flag.attr('src', data.flag)
    image.append(flag)

    const info = $('.info')

    const country = $(document.createElement('p'))
    country.text(data.name)

    const region = $(document.createElement('p'))
    region.text('Region: ' + data.region)

    const subregion = $(document.createElement('p'))
    subregion.text('Subregion: ' + data.subregion)
   
    const code = $(document.createElement('p'))
    code.text('Alpha3Code: ' + data.alpha3Code)

    const capital = $(document.createElement('p'))
    capital.text('Capital: ' + data.capital)

    const population = $(document.createElement('p'))
    population.text('Population: ' + data.population)

    const borders = $(document.createElement('p'))
    borders.text('Borders: ')

    for(let i = 0; i < data.borders.length; i++) {
        const link = $(document.createElement('a'))
        link.attr('href', 'country.html?code=' + data.borders[i])
        link.text(data.borders[i] + ', ')
        borders.append(link)
    }

    info.append(country, region, subregion, code, capital, population, borders)
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadData() {
    $.ajax({
        url: url,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

$(document).ready(function() {
    jqueryLoadData();
});
