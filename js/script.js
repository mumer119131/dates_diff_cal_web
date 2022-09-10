
const START_DATE = document.getElementById('start-date')
const END_DATE = document.getElementById('end-date')
const SHOW_RESULT = document.querySelector('.display__age')
function calculateAge(){
    if(!START_DATE.value || !END_DATE.value){
        Toastify({
            text: "Enter the date",
            duration: 3000
            }).showToast();
            return
        }
    var starts = moment(START_DATE.value ,"DD-MM-YYYY")
    var ends = moment(END_DATE.value, "DD-MM-YYYY")  
    

    if(starts.isAfter(ends)){
        Toastify({
            text: "Date of birth could not be greater than marriage date",
            duration: 3000
            }).showToast();
        return
    }
    var diff = moment.preciseDiff(starts, ends, true);
    
    
    console.log(diff.years)
    if(isNaN(diff.years)){
        Toastify({
            text: "Enter a valid date",
            duration: 3000
            }).showToast();
        return

    }
    SHOW_RESULT.innerHTML = `<span>${diff.years}</span> Years <span>${diff.months}</span> Months <span>${diff.days}</span> Days`

}

window.onload = loadEndDate()

function loadEndDate(){
    var todayDate = new Date()
    var year = todayDate.getFullYear()
    var month = todayDate.getMonth()
    var date = todayDate.getDate()
    END_DATE.value = `${date}-${month+1}-${year}`
}