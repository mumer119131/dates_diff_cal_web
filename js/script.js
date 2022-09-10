
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
    
    var diff = moment.preciseDiff(starts, ends, true);
    
    
    console.log(diff.years)
    if(isNaN(diff.years)){
        Toastify({
            text: "Enter a valid date",
            duration: 3000
            }).showToast();
        return

    }
    console.log(diff)
    SHOW_RESULT.innerHTML = `<span>${diff.years}</span> Years <span>${diff.months}</span> Months <span>${diff.days}</span> Days`

}
