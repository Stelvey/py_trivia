// TODO: Add code to check answers to questions
let buttons = document.querySelectorAll("button");
let forms = document.querySelectorAll("form");

// Figure out the answer (multiple)
function multiple (e)
{
    if (e.target.className == "correct")
    {
        e.target.style.backgroundColor = "green";
        // Loop until we find paragraph to change
        let i = e.target.nextElementSibling;
        while (i.className != "answer")
        {
            i = i.nextElementSibling;
        }
        i.innerHTML = "Correct!";
    }
    else
    {
        e.target.style.backgroundColor = "red";
        // Same as above comment
        let i = e.target.nextElementSibling;
        while (i.className != "answer")
        {
            i = i.nextElementSibling;
        }
        i.innerHTML = "Incorrect";
    }
}

// Make every button do 'multiple' on 'click'
buttons.forEach(button => button.addEventListener("click", multiple));

// Figure out the answer (free)
function free (e)
{
    let inputbox = e.target[0];
    let answer = inputbox.id;
    let input = inputbox.value.toLowerCase();

    if (input == answer)
    {
        inputbox.style.backgroundColor = "green";
        inputbox.removeAttribute("placeholder");
        e.target.nextElementSibling.innerHTML = "Correct!";
    }
    else
    {
        inputbox.style.backgroundColor = "red";
        inputbox.removeAttribute("placeholder");
        e.target.nextElementSibling.innerHTML = "Incorrect";
    }

    // Stop from refreshing
    e.preventDefault();
}

// Make submit submitty
forms.forEach(form => form.addEventListener("submit", free));