const msg = document.querySelector("#msg")
const btn = document.querySelector("#btn")
btn.addEventListener("click", hello)

function hello()
{
    btn.style.color = "red"
    const name = document.querySelector("#name").value
    if(name== "")
    {
        msg.innerHTML = "Hello, World!"
    }
    else
    {
    msg.innerHTML = `Hello, ${name}!`
    }
}