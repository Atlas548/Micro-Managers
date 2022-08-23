////////////////// Main Page ////////////////////

var timeDisplayEL = document.getElementById('time-display');
var noww = moment();
var currentTimeMain = noww.format('hh:mm:ssA');
timeDisplayEL.textContent = currentTimeMain

const dateDisplayEl = document.getElementById('date-display');
var currentDateMain = noww.format('dddd, MMMM Do YYYY');
dateDisplayEl.textContent = currentDateMain

setInterval(() => {
    var noww = moment();
    var currentTimeMain = noww.format('hh:mm:ssA');
    timeDisplayEL.textContent = currentTimeMain;
    var currentDateMain = noww.format('dddd, MMMM Do YYYY');
    dateDisplayEl.textContent = currentDateMain;
}, 1000);

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
    $('#gif').attr("style", "display:none;")
    $('#myDiv').attr("style", "display:block;")
    $('.main-body').removeClass('background-blue');
}


//////////////////// Date Picker ////////////////////
  $(function () {
    $('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      });
    });


////////////////// Location(cities) ////////////////////
// var cityAlabama = ['Alexander City', 'Andalusia', 'Anniston', 'Athens', 'Atmore', 'Auburn', 'Bessemer', 'Birmingham', 'Chickasaw', 'Clanton', 'Cullman', 'Decatur', 'Demopolis', 'Dothan', 'Enterprise', 'Eufaula', 'Florence', 'Fort Payne', 'Gadsden', 'Greenville', 'Guntersville', 'Huntsville', 'Jasper', 'Marion', 'Mobile', 'Montgomery', 'Opelika', 'Ozark', 'Phenix City', 'Prichard', 'Scottsboro', 'Selma', 'Sheffield', 'Sylacauga', 'Talladega', 'Troy', 'Tuscaloosa', 'Tuscumbia', 'Tuskegee']
// var cityAlaska = ['Anchorage', 'Cordova', 'Fairbanks', 'Haines', 'Homer', 'Juneau', 'Ketchikan', 'Kodiak', 'Kotzebue', 'Nome', 'Palmer', 'Seward', 'Sitka', 'Skagway', 'Valdez'];
// var cityArizona = ['Ajo', 'Avondale', 'Bisbee', 'Casa Grande', 'Chandler', 'Clifton', 'Douglas', 'Flagstaff', 'Florence', 'Gila Bend', 'Glendale', 'Globe', 'Kingman', 'Lake Havasu City', 'Mesa', 'Nogales', 'Oraibi', 'Phoenix', 'Prescott', 'Scottsdale', 'Sierra Vista', 'Tempe', 'Tombstone', 'Tucson', 'Walpi', 'Window Rock', 'Winslow', 'Yuma'];
// var cityArkansas = ['Arkadelphia', 'Arkansas Post', 'Batesville', 'Benton', 'Blytheville', 'Camden', 'Conway', 'Crossett', 'El Dorado', 'Fayetteville', 'Forrest City', 'Fort Smith', 'Harrison', 'Helena', 'Hope', 'Hot Springs', 'Jacksonville', 'Jonesboro', 'Little Rock', 'Magnolia', 'Morrilton', 'Newport', 'North Little Rock', 'Osceola', 'Pine Bluff', 'Rogers', 'Searcy', 'Stuttgart', 'Van Buren', 'West Memphis'];
// var cityCalifornia = ['Alameda', 'Alhambra', 'Anaheim', 'Antioch', 'Arcadia', 'Bakersfield', 'Barstow', 'Belmont', 'Berkeley', 'Beverly Hills', 'Brea', 'Buena Park', 'Burbank', 'Calexico', 'Calistoga', 'Carlsbad', 'Carmel', 'Chico', 'Chula Vista', 'Claremont', 'Compton', 'Concord', 'Corona', 'Coronado', 'Costa Mesa', 'Culver City', 'Daly City', 'Davis', 'Downey', 'El Centro', 'El Cerrito', 'El Monte', 'Escondido', 'Eureka', 'Fairfield', 'Fontana', 'Fremont', 'Fresno', 'Fullerton', 'Garden Grove', 'Glendale', 'Hayward', 'Hollywood', 'Huntington Beach', 'Indio', 'Inglewood', 'Irvine', 'La Habra', 'Laguna Beach', 'Lancaster', 'Livermore', 'Lodi', 'Lompoc', 'Long Beach', 'Los Angeles', 'Malibu', 'Martinez', 'Marysville', 'Menlo Park', 'Merced', 'Modesto', 'Monterey', 'Mountain View', 'Napa', 'Needles', 'Newport Beach', 'Norwalk', 'Novato', 'Oakland', 'Oceanside', 'Ojai', 'Ontario', 'Orange', 'Oroville', 'Oxnard', 'Pacific Grove', 'Palm Springs', 'Palmdale', 'Palo Alto', 'Pasadena', 'Petaluma', 'Pomona', 'Port Hueneme', 'Rancho Cucamonga', 'Red Bluff', 'Redding', 'Redlands', 'Redondo Beach', 'Redwood City', 'Richmond', 'Riverside', 'Roseville', 'Sacramento', 'Salinas', 'San Bernardino', 'San Clemente', 'San Diego', 'San Fernando', 'San Francisco', 'San Gabriel', 'San Jose', 'San Juan Capistrano', 'San Leandro', 'San Luis Obispo', 'San Marino', 'San Mateo', 'San Pedro', 'San Rafael', 'San Simeon', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Cruz', 'Santa Monica', 'Santa Rosa', 'Sausalito', 'Simi Valley', 'Sonoma', 'South San Francisco', 'Stockton', 'Sunnyvale', 'Susanville', 'Thousand Oaks', 'Torrance', 'Turlock', 'Ukiah', 'Vallejo', 'Ventura', 'Victorville', 'Visalia', 'Walnut Creek', 'Watts', 'West Covina', 'Whittier', 'Woodland', 'Yorba Linda', 'Yuba City'];
// var cityColorado = ['Alamosa', 'Aspen', 'Aurora', 'Boulder', 'Breckenridge', 'Brighton', 'Canon City', 'Central City', 'Climax', 'Colorado Springs', 'Cortez', 'Cripple Creek', 'Denver', 'Durango', 'Englewood', 'Estes Park', 'Fort Collins', 'Fort Morgan', 'Georgetown', 'Glenwood Springs', 'Golden', 'Grand Junction', 'Greeley', 'Gunnison', 'La Junta', 'Leadville', 'Littleton', 'Longmont', 'Loveland', 'Montrose', 'Ouray', 'Pagosa Springs', 'Pueblo', 'Silverton', 'Steamboat Springs', 'Sterling', 'Telluride', 'Trinidad', 'Vail', 'Walsenburg', 'Westminster'];
// var cityConnecticut = ['Ansonia', 'Berlin', 'Bloomfield', 'Branford', 'Bridgeport', 'Bristol', 'Coventry', 'Danbury', 'Darien', 'Derby', 'East Hartford', 'East Haven', 'Enfield', 'Fairfield', 'Farmington', 'Greenwich', 'Grotono', 'Guilford', 'Hamden', 'Hartford', 'Lebanon', 'Litchfield', 'Manchester', 'Mansfield', 'Meriden', 'Middletown', 'Milford', 'Mystic', 'Naugatuck', 'New Britain', 'New Haven', 'New London', 'North Haven', 'Norwalk', 'Norwich', 'Old Saybrook', 'Orange', 'Seymour', 'Shelton', 'Simsbury', 'Southington', 'Stamford', 'Stonington', 'Stratford', 'Torrington', 'Wallingford', 'Waterbury', 'Waterford', 'Watertown', 'West Hartford', 'West Haven', 'Westport', 'Wethersfield', 'Willimantic', 'Windham', 'Windsor', 'Windsor Locks', 'Winsted'];
// var cityDelaware = ['Dover', 'Lewes', 'Milford', 'New Castle', 'Newark', 'Smyrna', 'Wilmington'];
// var cityFlorida = ['Apalachicola', 'Bartow', 'Belle Glade', 'Boca Raton', 'Bradenton', 'Cape Coral', 'Clearwater', 'Cocoa Beach', 'Cocoa-Rockledge', 'Coral Gables', 'Daytona Beach', 'De Land', 'Deerfield Beach', 'Delray Beach', 'Fernandina Beach', 'Fort Lauderdale', 'Fort Myers', 'Fort Pierce', 'Fort Walton Beach', 'Gainesville', 'Hallandale Beach', 'Hialeah', 'Hollywood', 'Homestead', 'Jacksonville', 'Key West', 'Lake City', 'Lake Wales', 'Lakeland', 'Largo', 'Melbourne', 'Miami', 'Miami Beach', 'Naples', 'New Smyrna Beach', 'Ocala', 'Orlando', 'Ormond Beach', 'Palatka', 'Palm Bay', 'Palm Beach', 'Panama City', 'Pensacola', 'Pompano Beach', 'Saint Augustine', 'Saint Petersburg', 'Sanford', 'Sarasota', 'Sebring', 'Tallahassee', 'Tampa', 'Tarpon Springs', 'Titusville', 'Venice', 'West Palm Beach', 'White Springs', 'Winter Haven', 'Winter Park'];
// var cityGeorgia = ['Albany', 'Americus', 'Andersonville', 'Athens', 'Atlanta', 'Augusta', 'Bainbridge', 'Blairsville', 'Brunswick', 'Calhoun', 'Carrollton', 'Columbus', 'Dahlonega', 'Dalton', 'Darien', 'Decatur', 'Douglas', 'East Point', 'Fitzgerald', 'Fort Valley', 'Gainesville', 'La Grange', 'Macon', 'Marietta', 'Milledgeville', 'Plains', 'Rome', 'Savannah', 'Toccoa', 'Valdosta', 'Warm Springs', 'Warner Robins', 'Washington', 'Waycross'];
// var cityHawaii = ['Hanalei', 'Hilo', 'Honaunau', 'Honolulu', 'Kahului', 'Kaneohe', 'Kapaa', 'Kawaihae', 'Lahaina', 'Laie', 'Wahiawa', 'Wailuku', 'Waimea'];
// var cityIdaho = ['Blackfoot', 'Boise', 'Bonners Ferry', 'Caldwell', "Coeur d'Alene", 'Idaho City', 'Idaho Falls', 'Kellogg', 'Lewiston', 'Moscow', 'Nampa', 'Pocatello', 'Priest River', 'Rexburg', 'Sun Valley', 'Twin Falls'];
// var cityIllinois = ['Alton', 'Arlington Heights', 'Arthur', 'Aurora', 'Belleville', 'Belvidere', 'Bloomington', 'Brookfield', 'Cahokia', 'Cairo', 'Calumet City', 'Canton', 'Carbondale', 'Carlinville', 'Carthage', 'Centralia', 'Champaign', 'Charleston', 'Chester', 'Chicago', 'Chicago Heights', 'Cicero', 'Collinsville', 'Danville', 'Decatur', 'DeKalb', 'Des Plaines', 'Dixon', 'East Moline', 'East Saint Louis', 'Effingham', 'Elgin', 'Elmhurst', 'Evanston', 'Freeport', 'Galena', 'Galesburg', 'Glen Ellyn', 'Glenview', 'Granite City', 'Harrisburg', 'Herrin', 'Highland Park', 'Jacksonville', 'Joliet', 'Kankakee', 'Kaskaskia', 'Kewanee', 'La Salle', 'Lake Forest', 'Libertyville', 'Lincoln', 'Lisle', 'Lombard', 'Macomb', 'Mattoon', 'Moline', 'Monmouth', 'Mount Vernon', 'Mundelein', 'Naperville', 'Nauvoo', 'Normal', 'North Chicago', 'Oak Park', 'Oregoon', 'Ottawa', 'Palatine', 'Park Forest', 'Park Ridge', 'Pekin', 'Peoria', 'Petersburg', 'Pontiac', 'Quincy', 'Rantoul', 'River Forest', 'Rock Island', 'Rockford', 'Salem', 'Shawneetown', 'Skokie', 'South Holland', 'Springfield', 'Streator', 'Summit', 'Urbana', 'Vandalia', 'Virden', 'Waukegan', 'Wheaton', 'Wilmette', 'Winnetka', 'Wood River', 'Zion'];


////////////////// Weather ////////////////////
var userLoco = document.querySelector('#location');
var temp = document.querySelector('#today-temp');
var weatherStats = document.querySelector('#today-status');
var feelsLike = document.querySelector('#feels-like');
var tempLow = document.querySelector('#today-lowest');
var tempHigh = document.querySelector('#today-highest');
var weatherDescriptionInputEl = document.querySelector('#weather-description');
var weatherIconInputEl = document.querySelector('#weather-icon');

document.addEventListener("DOMContentLoaded", function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                console.log(lat, lon);
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&metric&appid=2dec71e39f0495733603e3c8490344e7&units=imperial`)
                .then(Response => Response.json())
                .then(data => {
                    console.log(data);
                    renderItem(data, position);
                })})
    }
})
// http://openweathermap.org/img/wn/04d@4x.png
function renderItem(data) {
    var tempValue = data['main']['temp'];
    var locationValue = data['name'];
    var lowTemp = data['main']['temp_min'];
    var highTemp = data['main']['temp_max'];
    var weatherStatus = data['weather']['0']['main'];
    var weatherDescription = data['weather']['0']['description'];
    var weatherIcon = data['weather']['0']['icon'];
    var tempFeels = data['main']['feels_like'];
    // userLoco.textContent = `Location: ${locationValue}`;
    userLoco.textContent = `${locationValue}`;
    temp.textContent = `Current Temp: ${tempValue} °F`;
    feelsLike.textContent = `Feels like: ${tempFeels} °F`;
    tempLow.textContent = `Today's Low: ${lowTemp} °F`;
    tempHigh.textContent = `Today's High: ${highTemp} °F`;
    // weatherStats.textContent = `Current Weather: ${weatherStatus} `;
    weatherStats.textContent = `${weatherStatus} `;
    weatherDescriptionInputEl.textContent = `Detail: ${weatherDescription} `;
    weatherIconInputEl.src = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
}

 


//////////////////// Schedule ////////////////////
//////////////////// Using Moment JS ////////////////////
var today = moment();
var currentDate = today.format("YYYY-MM-DD");
$(document).ready(function() {
    $('#today-date').text(today.format("dddd, MMMM D, YYYY"));
})
// $('#select-date-box').attr('value', today.format("MM/DD/YYYY"))
var currentDayOfWeek = today.format("dddd");
var daySunday = $('#week-sunday');
var dayMonday = $('#week-monday');
var dayTuesday = $('#week-tuesday');
var dayWednesday = $('#week-wednesday');
var dayThursday = $('#week-thursday');
var dayFriday = $('#week-friday');
var daySaturday = $('#week-saturday');

findDayOfWeek();
function findDayOfWeek() {
    if (currentDayOfWeek == "Sunday") {
        console.log("Sunday");
        daySunday.addClass('darkgrey');
        daySunday.text(today.format("D"))
        dayMonday.text(today.add(1, 'd').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Monday") {
        console.log("Monday");
        dayMonday.addClass('darkgrey');
        daySunday.text(today.subtract(1, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Tuesday") {
        console.log("Tuesday");
        dayTuesday.addClass('darkgrey');
        daySunday.text(today.subtract(2, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Wednesday") {
        console.log("Wednesday");
        dayWednesday.addClass('darkgrey');
        daySunday.text(today.subtract(3, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Thursday") {
        console.log("Thursday");
        dayThursday.addClass('darkgrey');
        daySunday.text(today.subtract(4, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Friday") {
        console.log("Friday");
        dayFriday.addClass('darkgrey');
        daySunday.text(today.subtract(5, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Saturday") {
        console.log("Saturday");
        daySaturday.addClass('darkgrey');
        daySunday.text(today.subtract(6, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else {
        console.log("getting error");
    }
}
var selectedDateInputEl = $('#select-date-box');
var selectedDateFormEl = $('#select-date-form');
console.log(selectedDateInputEl.val());

function handleSelectDate () {
    var selectedDate = selectedDateInputEl.val();
    $('#today-date').text(moment(selectedDate).format("dddd, MMMM D, YYYY"));
    currentDate = selectedDate;
    renderLocalStorage();
    renderTask();

}
$('#button-select-date').click(function() {
    handleSelectDate();
    
})
// selectedDateFormEl.on('select', '.button-select', handleSelectDate());

//////////////////// Schedules ////////////////////

// $('#week-sunday').text(moment().format("D"));

// whole container of the schedule box
var scheduleContainerEl = $('#schedule-container');
// variable declared for input details
var scheduleDateInputEl = $('#dates-schedule');
var editDateInputEl = $('#dates-schedule-edit');
var graceDateInputEl = $('#dates-scheduleG')

var startingTimeInputEl = $('#starting-time');
var graceStartingTimeInputEl = $('#starting-timeG');
var editStartingTimeInputEl = $('#starting-time-edit');

var endingTimeInputEl = $('#ending-time');
var graceEndingTimeInputEl = $('#ending-timeG');
var editEndingTimeInputEl = $('#ending-time-edit');

var descriptionScheduleInputEl = $('#description-schedule');
var graceDescriptionScheduleInputEl = $('#description-scheduleG');
var editDescriptionInputEl = $('#description-schedule-edit');

var submitBtnEl = $('#button-submit');
var graceSubmitBtnEl = $('#button-submitG');

var scheduleFormEl = $('#project-form');
var graceScheduleFormEl = $('#project-formG');
var editFormEl = $('#project-form-edit');

var scheduleListForAppend = [];


function renderLocalStorage() {
    scheduleContainerEl.empty();
    console.log(scheduleListForAppend);
    if (typeof scheduleListForAppend.length == "undefined") {
        for (var i = 0; i < 1; i++) {
            // console.log(scheduleListForAppend.startingTime);
    console.log("undefined: i will become 1");
            var dateParsed = scheduleListForAppend.dates;
            var startTimeParsed = scheduleListForAppend.startingTime;
            var endTimeParsed = scheduleListForAppend.endingTime;
            var schedulesParsed = scheduleListForAppend.schedules;
            
            // printSchedule(dateParsed, startTimeParsed, endTimeParsed, schedulesParsed);
            var scheduleRowEl = $('<div>');
            var timeBoxEl = $('<div>');
                var startTimeEl = $('<h6>');
                var lineBetween = $('<hr>');
                var endTimeEl = $('<h6>');
            var descriptionBoxEl = $('<div>');
                var descSchedule = $('<h5>');
            var editBtn = $('<button>');
            var cancelBtn = $('<button>');
            // console.log(dueDate);
            
    
        scheduleRowEl.addClass('row-test');
            timeBoxEl.addClass('time-container');
                startTimeEl.addClass('starting-time');
                endTimeEl.addClass('ending-time');
            descriptionBoxEl.addClass('description-container');
            editBtn.addClass('button-edit');
            cancelBtn.addClass('button-cancel');
    
                startTimeEl.text(startTimeParsed);
                endTimeEl.text(endTimeParsed);
                descSchedule.text(schedulesParsed);
                editBtn.text("edit");
                cancelBtn.text("cancel");
    
        scheduleRowEl.attr('data-dates', dateParsed);
        scheduleRowEl.attr('data-index', i);
        editBtn.attr('data-open', 'exampleModall-edit')
            // console.log("printing?");
            
            timeBoxEl.append(startTimeEl);
            timeBoxEl.append(lineBetween);
            timeBoxEl.append(endTimeEl);
    
            descriptionBoxEl.append(descSchedule);
    
        scheduleRowEl.append(timeBoxEl);
        scheduleRowEl.append(descriptionBoxEl);
        scheduleRowEl.append(editBtn);
        scheduleRowEl.append(cancelBtn);
    
        scheduleContainerEl.append(scheduleRowEl);
        }
    } else {
        for (var i = 0; i < scheduleListForAppend.length; i++) {
            scheduleListForAppend.sort((a, b) => a.timeStamp - b.timeStamp);
            
            if (scheduleListForAppend[i].dates !== currentDate) {
                console.log("skip!");
                console.log(scheduleListForAppend[i].dates)
            } else {
                
                var dateParsed = scheduleListForAppend[i].dates
                var startTimeParsed = scheduleListForAppend[i].startingTime;
                var endTimeParsed = scheduleListForAppend[i].endingTime;
                var schedulesParsed = scheduleListForAppend[i].schedules;
                
                // printSchedule(dateParsed, startTimeParsed, endTimeParsed, schedulesParsed);
                var scheduleRowEl = $('<div>');
                var timeBoxEl = $('<div>');
                    var startTimeEl = $('<h6>');
                    var lineBetween = $('<hr>');
                    var endTimeEl = $('<h6>');
                var descriptionBoxEl = $('<div>');
                    var descSchedule = $('<h5>');
                var editBtn = $('<button>');
                var cancelBtn = $('<button>');
                
                
        
            scheduleRowEl.addClass('row-test');
                timeBoxEl.addClass('time-container');
                    startTimeEl.addClass('starting-time');
                    endTimeEl.addClass('ending-time');
                descriptionBoxEl.addClass('description-container');
                editBtn.addClass('button-edit');
                cancelBtn.addClass('button-cancel');
        
                    startTimeEl.text(startTimeParsed);
                    endTimeEl.text(endTimeParsed);
                    descSchedule.text(schedulesParsed);
                    editBtn.text("edit");
                    cancelBtn.text("cancel");
        
            scheduleRowEl.attr('data-dates', dateParsed);
            scheduleRowEl.attr('data-index', i);
                editBtn.attr('data-open', 'exampleModall-edit')
                
                
                timeBoxEl.append(startTimeEl);
                timeBoxEl.append(lineBetween);
                timeBoxEl.append(endTimeEl);
        
                descriptionBoxEl.append(descSchedule);
        
            scheduleRowEl.append(timeBoxEl);
            scheduleRowEl.append(descriptionBoxEl);
            scheduleRowEl.append(editBtn);
            scheduleRowEl.append(cancelBtn);
        
            scheduleContainerEl.append(scheduleRowEl);
            }


}};
}
function init() {
    var storedSchedulesInit = JSON.parse(localStorage.getItem("scheduleList"));

    if (storedSchedulesInit !== null) {
        var storedSchedules = storedSchedulesInit;
        scheduleListForAppend = storedSchedules;
    }


    renderLocalStorage();
}
function saveToLocalStorage() {
   
    localStorage.setItem("scheduleList", JSON.stringify(scheduleListForAppend));

}
function handleScheduleFormSubmit(event) {
    event.preventDefault();
    var scheduleDate = scheduleDateInputEl.val();
    var scheduleStartTime = startingTimeInputEl.val();
    var scheduleEndTime = endingTimeInputEl.val();
    var scheduleDescription = descriptionScheduleInputEl.val();
    var timeStamp24 = moment(scheduleDate + scheduleStartTime, "YYYY-MM-DD h:mmA").format("X");
    console.log(timeStamp24)
    // return when description is empty
    if (scheduleDescription === "") {
        return;
    } else if (scheduleDate === "") {
        return;
    }

    var scheduleItem = {
        dates: scheduleDate,
        startingTime: scheduleStartTime,
        endingTime: scheduleEndTime,
        schedules: scheduleDescription,
        timeStamp: timeStamp24
    };

    if (scheduleListForAppend.length === 0) {
        scheduleListForAppend = scheduleItem;
        console.log("empty")
    } else if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend]
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    } else {
        console.log("third time?")
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    }

    
    // endingTime: scheduleEndTime, schedules: scheduleDescription});
    scheduleFormEl[0].reset();
    // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
    saveToLocalStorage();
    renderLocalStorage();
    
    

}

function handleDeleteSchedule(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
    var index = btnClicked.parent('div').attr('data-index');
    scheduleListForAppend.splice(index, 1);

    saveToLocalStorage();
    renderLocalStorage();
}

function handleEditSchedule(event) {
    var editDate = $('#dates-schedule-edit');
    var editStartTime = $('#starting-time-edit');
    var editEndingTime = $('#ending-time-edit');
    var editDescription = $('#description-schedule-edit')

    var btnClicked = $(event.target);
    var clickedIndex = btnClicked.parent('div').attr('data-index');
    
    if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend];
        var clickedDate = scheduleListForAppend[clickedIndex].dates;
        var clickedStartTime = scheduleListForAppend[clickedIndex].startingTime;
        var clickedEndTime = scheduleListForAppend[clickedIndex].endingTime;
        var clickedDescription = scheduleListForAppend[clickedIndex].schedules;
    } 

    var clickedDate = scheduleListForAppend[clickedIndex].dates;
        var clickedStartTime = scheduleListForAppend[clickedIndex].startingTime;
        var clickedEndTime = scheduleListForAppend[clickedIndex].endingTime;
        var clickedDescription = scheduleListForAppend[clickedIndex].schedules;
    
    var selectedStartTime = editStartTime.find(`:contains(${clickedStartTime})`);
    var selectedEndTime = editEndingTime.find(`:contains(${clickedEndTime})`);


    editDate.attr('value', clickedDate);
    selectedStartTime.attr('selected', '');
    selectedEndTime.attr('selected', '');
    editDescription.attr('placeholder', clickedDescription);
    
    editFormEl.on('submit', handleScheduleFormEdit);

    function handleScheduleFormEdit(event) {
        // event.preventDefault();
    
        var scheduleDate = editDateInputEl.val();
        var scheduleStartTime = editStartingTimeInputEl.val();
        var scheduleEndTime = editEndingTimeInputEl.val();
        var scheduleDescription = editDescriptionInputEl.val();
        var timeStamp24 = moment(scheduleDate + scheduleStartTime, "YYYY-MM-DD h:mmA").format("X");
        console.log(scheduleDate + " " + scheduleStartTime)
        // return when description is empty
        if (scheduleDescription === "") {
            return;
        }
    
        var scheduleItem = {
            dates: scheduleDate,
            startingTime: scheduleStartTime,
            endingTime: scheduleEndTime,
            schedules: scheduleDescription,
            timeStamp: timeStamp24
        };
    
        if (scheduleListForAppend.length === 0) {
            scheduleListForAppend = scheduleItem;
            console.log("empty")
        } else if (typeof scheduleListForAppend.length == "undefined") {
            scheduleListForAppend = [scheduleListForAppend]
            scheduleListForAppend.push(scheduleItem);
            console.log(scheduleListForAppend);
        } else {
            console.log("third time?")
            scheduleListForAppend.push(scheduleItem);
            console.log(scheduleListForAppend);
        }
    
    scheduleListForAppend.splice(clickedIndex, 1);
        
        // endingTime: scheduleEndTime, schedules: scheduleDescription});
        scheduleFormEl[0].reset();
        // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
        saveToLocalStorage();
        renderLocalStorage();
    }
}

scheduleFormEl.on('submit', handleScheduleFormSubmit);
graceScheduleFormEl.on('submit', graceHandleScheduleFormSubmit);

scheduleContainerEl.on('click', '.button-cancel', handleDeleteSchedule);
scheduleContainerEl.on('click', '.button-edit', handleEditSchedule);
init();

////////////////////////////// GRACE SCHEDULE //////////////////////////////
function graceHandleScheduleFormSubmit(event) {
    event.preventDefault();
console.log("testing submit button")

    var scheduleDate = graceDateInputEl.val();
        // scheduleDate = moment(scheduleDate, 'MM-DD-YYYY').format('YYYY-MM-DD');
    var scheduleStartTime = graceStartingTimeInputEl.val();
    var scheduleEndTime = graceEndingTimeInputEl.val();
    var scheduleDescription = graceDescriptionScheduleInputEl.val();
    var timeStamp24 = moment(scheduleDate + scheduleStartTime, "MM-DD-YYYY h:mmA").format("X");
    console.log(scheduleDate + " " + scheduleStartTime)
    // return when description is empty
    if (scheduleDescription === "") {
        return;
    }

    var scheduleItem = {
        dates: scheduleDate,
        startingTime: scheduleStartTime,
        endingTime: scheduleEndTime,
        schedules: scheduleDescription,
        timeStamp: timeStamp24
    };

    if (scheduleListForAppend.length === 0) {
        scheduleListForAppend = scheduleItem;
        console.log("empty")
    } else if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend]
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    } else {
        console.log("third time?")
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    }

    
    // endingTime: scheduleEndTime, schedules: scheduleDescription});
    graceScheduleFormEl[0].reset();
    // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
    saveToLocalStorage();
    renderLocalStorage();
    
    

}

///////////////////////   TASK ////////////////////////////////////////
var taskContainerEl = $('#task-container');

var taskDateInputEl = $('#dates-task');
var graceTaskDateInputEl = $('#dates-taskGT');

var taskStatusInputEl = $('#task-status');
var graceTaskStatusInputEl = $('#task-statusGT');

var taskDueDateInputEl = $('#due-time');
var graceDueDateInputEl = $('#due-timeGT');

var taskDescrInputEl = $('#description-task');
var graceDecriptionTaskInputEl = $('#description-taskGT');

var taskSubmitBtnEl = $('#button-submit-task');
var graceTaskSubmitBtnEl = $('#button-submitGT');

var taskFormEl = $('#task-form');
var graceTaskFormEl = $('#task-formGT');

var taskListMain = [];
function taskTimer() {
    console.log("taskTimer function");
    $('.task-row').each(function(index)  {
        console.log(index+ ": " + $(this).text() );
        var timeLeftPerIndex = $(this).text();
        var taskTimerInterval = setInterval(function () {
            if (timeLeftPerIndex > 0) {
            var d = Math.floor(timeLeftPerIndex / (3600*24));
            var h = Math.floor(timeLeftPerIndex % (3600*24) / 3600);
            var m = Math.floor(timeLeftPerIndex % 3600 / 60);
            var s = Math.floor(timeLeftPerIndex % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";
            $('#task-container').children().eq(index).children('.time-left').text(timeLeftText);
            timeLeftPerIndex--;
            } else {
                clearInterval(taskTimerInterval);
            }
        }, 1000)
        
    })
}
function renderTask() {
    taskContainerEl.empty();
    var currentTime = moment().format("X");
    
    if (typeof taskListMain.length == "undefined") {
        for (var i = 0; i < 1; i++) {
            var taskDateParsed = taskListMain.dates;
            
            var taskDueDateParsed = taskListMain.dueDate;
            var taskDescriptionParsed = taskListMain.description;
            var taskStatusParsed = taskListMain.status;
            var taskTimeStamp = taskListMain.timestamp;
            var timeLeftFromNow = taskTimeStamp - currentTime;
            console.log(timeLeftFromNow);
            var d = Math.floor(timeLeftFromNow / (3600*24));
            var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            var m = Math.floor(timeLeftFromNow % 3600 / 60);
            var s = Math.floor(timeLeftFromNow % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";

            console.log(timeLeftText);

            var taskRowEl = $('<div>');
            
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');

                var timeLeftHidden = $('<div>');

if (taskListMain.status == "Routine") {
            taskStatusEl.addClass("green-routine");
            
}   else if (taskListMain.status == "Priority") {
            taskStatusEl.addClass("yellow-priority");
            
}   else if (taskListMain.status == "Urgent") {
            taskStatusEl.addClass("red-urgent")
            
} else {
    console.log("adding status error!!");
}

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');
            timeLeftHidden.addClass('task-row hide');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(timeLeftText);
            checkBtn.text("Check");
            timeLeftHidden.text(timeLeftFromNow);

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);
            taskRowEl.append(timeLeftHidden);

            taskContainerEl.append(taskRowEl);
        }
    } else {
        for (var i=0; i < taskListMain.length; i++) {
            taskListMain.sort((a, b) => a.timeStamp - b.timeStamp);
            
            if (taskListMain[i].dates !== currentDate) {
                console.log("skip!");
            } else {
                
                var taskDateParsed = taskListMain[i].dates;
            
            var taskDueDateParsed = taskListMain[i].dueDate;
            var taskDescriptionParsed = taskListMain[i].description;
            var taskStatusParsed = taskListMain[i].status
            var taskTimeStamp = taskListMain[i].timeStamp;
            var timeLeftFromNow = taskTimeStamp - currentTime;
            
            /////
            var d = Math.floor(timeLeftFromNow / (3600*24));
            var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            var m = Math.floor(timeLeftFromNow % 3600 / 60);
            var s = Math.floor(timeLeftFromNow % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";

            console.log(timeLeftText);
            console.log("important time point")
            console.log(taskListMain)
            /////

            var taskRowEl = $('<div>');
            
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');
                var timeLeftHidden = $('<div>');


          if (taskListMain[i].status == "Routine") {
                    taskStatusEl.addClass("green-routine");
                    
        }   else if (taskListMain[i].status == "Priority") {
                    taskStatusEl.addClass("yellow-priority");
                    
        }   else if (taskListMain[i].status == "Urgent") {
                    taskStatusEl.addClass("red-urgent")
                    
        } else {
            console.log("adding status error!!");
        }
            timeLeftHidden.addClass('task-row hide')

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(timeLeftText);
            checkBtn.text("Check");
            timeLeftHidden.text(timeLeftFromNow);

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);
            taskRowEl.append(timeLeftHidden);

            taskContainerEl.append(taskRowEl);
            console.log(timeLeftFromNow);
            taskTimer();
            // var timeleftInterval = setInterval(function () {
            //     if (timeLeftFromNow > 0) {
            // var d = Math.floor(timeLeftFromNow / (3600*24));
            // var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            // var m = Math.floor(timeLeftFromNow % 3600 / 60);
            // var s = Math.floor(timeLeftFromNow % 60);
            
            // var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            // var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            // var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";
            //         taskTimeLeft.text(timeLeftText);
            //         timeLeftFromNow--;
            //     } else {
            //         //clear the row
            //         // and alert modal
            //         clearInterval(timeleftInterval);
            //     }
                
            // }, 1000);
            }
        }
    }
}

function initTask() {
    var storedTaskInit = JSON.parse(localStorage.getItem("taskList"));

    if (storedTaskInit !== null) {
        var storedTask = storedTaskInit;
        taskListMain = storedTask; 
    }
    renderTask();
}

function saveTaskToStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskListMain));
}

function handleTaskFormSubmit(event) {
    event.preventDefault();

    var taskDate = taskDateInputEl.val();
    var taskDueDate = taskDueDateInputEl.val();
    var taskDescription = taskDescrInputEl.val();
    var taskStatus = taskStatusInputEl.val();
    var timeStamp24 = moment(taskDate + taskDueDate, "YYYY-MM-DD h:mmA").format("X");
    console.log(taskDate + " " + taskDueDate)

    if (taskDescription === "") {
        return;
    } else if (taskDate === "") {
        return;
    }

    var taskItem = {
        dates: taskDate,
        status: taskStatus,
        description: taskDescription,
        dueDate: taskDueDate,
        timeStamp: timeStamp24
    }; 

    if (taskListMain.length === 0) {
        taskListMain = taskItem;
        console.log("empty")
    } else if (typeof taskListMain.length == "undefined") {
        taskListMain = [taskListMain]
        taskListMain.push(taskItem);
        console.log(taskListMain)
    } else {
        console.log("third task?")
        taskListMain.push(taskItem);
        console.log(taskListMain);
    }

    taskFormEl[0].reset();

    saveTaskToStorage();
    renderTask();

}

function handleDeleteTask(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
    var index = btnClicked.parent('div').attr('data-index');
    taskListMain.splice(index, 1);

    saveTaskToStorage();
    renderTask();
}

taskFormEl.on('submit', handleTaskFormSubmit);
graceTaskFormEl.on('submit', graceHandleTaskFormSubmit);

taskContainerEl.on('click', '.button-check', handleDeleteTask);
initTask();

///////////////////////  GRACE TASK ////////////////////////////////////////
function graceHandleTaskFormSubmit(event) {
    //stop form from submitting -  not reload
    event.preventDefault();
console.log("testing task submit button")

var taskDate = graceTaskDateInputEl.val();
var taskDueDate = graceDueDateInputEl.val();
var taskDescription = graceDecriptionTaskInputEl.val();
var taskStatus = graceTaskStatusInputEl.val();
var timeStamp24 = moment(taskDate + taskDueDate, "MM-DD-YYYY h:mmA").format("X");
console.log(taskDate + " " + taskDueDate)

if (taskDescription === "") {
    return;
} else if (taskDate === "") {
    return;
}
console.log("below is the testing for grace' task code");
console.log(taskDate);
var newtaskDate = moment(taskDate, "MM-DD-YYYY").format("YYYY-MM-DD");

var taskItem = {
    dates: newtaskDate,
    status: taskStatus,
    description: taskDescription,
    dueDate: taskDueDate,
    timeStamp: timeStamp24
};

if (taskListMain.length === 0) {
    taskListMain = taskItem;
    console.log("empty")
} else if (typeof taskListMain.length == "undefined") {
    taskListMain = [taskListMain]
    taskListMain.push(taskItem);
    console.log(taskListMain)
} else {
    console.log("third task?")
    taskListMain.push(taskItem);
    console.log(taskListMain);
}

graceTaskFormEl[0].reset();

saveTaskToStorage();
renderTask();
}

////////////////////////////// Timer ///////////////////////////////////////
// function timerSelectHandle() {
//     console.log("button is working");
//     // var timerMinuteInputEl = $('#timer-box');
//     // var minutesInput = timerMinuteInputEl.val();
//     // console.log(minutesInput);
//     // if (minutesInput < 60) {
//     //     this.stop();
//     //     this.secondsRemaining = minutesInput * 60;
//     //     this.updateTimerInterface();
//     // }
// }
// var timerFormEl = $('#select-timer-form');
// timerFormEl.on('Select', timerSelectHandle());

class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer-section-minutes"),
        seconds: root.querySelector(".timer-section-seconds"),
        control: root.querySelector(".timer-btn-control"),
        reset: root.querySelector(".timer-btn-reset")
      };
  
      this.secondsRemaining = 0;
      this.interval = null;
      
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        const minutesInput = prompt("Enter number of minutes:");
        
        
        
        if (minutesInput < 60) {
          this.stop();
          this.secondsRemaining = minutesInput * 60;
          this.updateTimerInterface();
        }
      });

    
    }
  
    start() {
        if (this.secondsRemaining === 0) return;
    
        this.interval = setInterval(() => {
          this.secondsRemaining--;
          this.updateTimerInterface();
    
          if (this.secondsRemaining === 0) {
            this.stop();
          }
        }, 1000);
    
        this.UpdateTimerControls();
      }
    
      stop() {
        clearInterval(this.interval);
    
        this.interval = null;
    
        this.UpdateTimerControls();
      }

      UpdateTimerControls() {
        if (this.interval === null) {
          this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
          this.el.control.classList.add("timer-btn-start");
          this.el.control.classList.remove("timer-btn-stop");
        } else {
          this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
          this.el.control.classList.add("timer-btn-stop");
          this.el.control.classList.remove("timer-btn-start");
        }
      }
    
    updateTimerInterface() {
      const minutes = Math.floor(this.secondsRemaining / 60);
      const seconds = this.secondsRemaining % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  


  
    static getHTML() {
      return `
              <span class="timer-part timer-section-minutes">00</span>
              <span class="timer-part">:</span>
              <span class="timer-part timer-section-seconds">00</span>
              <button type="button" class="timer-btn timer-btn-control timer-btn-start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer-btn timer-btn-reset">
                  <span class="material-icons">timer</span>
              </button>
          `;
    }
  }
  
  new Timer(
    document.querySelector(".timer")
);

