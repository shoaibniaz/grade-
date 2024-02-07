function calculate(event) {
    event.preventDefault()
    let totalMarks = document.getElementById("value1").value;
    let obtainedMarks = document.getElementById("value2").value;
    let resultDiv = document.getElementById("resultDiv")
    let errorDiv = document.getElementById("errorDiv")

    console.log("totalMarks", totalMarks);
    console.log("obtainedMarks", obtainedMarks);

    totalMarks = Number(totalMarks)
    obtainedMarks = Number(obtainedMarks)

    let errorText = "";
    let result = "";

    if (isNaN(totalMarks) || !totalMarks) {
        errorText = " Please Enter Valid Total Marks";

    } else if (isNaN(obtainedMarks) || !obtainedMarks) {
        errorText = " Please Enter Valid Obtained Marks";

    } else if (totalMarks < 1) {
        errorText = " Please enter a positive value for Total Marks";

    } else if (totalMarks < 0) {
        errorText = " Obtained Marks cannot be greater than Total Marks";

    } else if (obtainedMarks > totalMarks) {
        errorText = `Total marks should be greater than obtained marks.`
    } else {
        result = `${obtainedMarks / totalMarks * 100}%`
    }

    console.log({
        errorText,
        result
    });
    errorDiv.innerHTML = `<h1 style="color: red;"> ${errorText} </h1>`
    resultDiv.innerHTML = `<h1 style="color: blue;"> ${result} </h1>`


}
