function InsertElements(element_blok, massiv_cases)
{
    let element_spisok = document.getElementById("spisok-del");
    if (element_spisok == null && massiv_cases.length != 0)
    {
        element_blok.innerHTML = "<ol id='spisok-del'>";
        element_spisok = document.getElementById("spisok-del");
        for (let i = 0; i < massiv_cases.length; i++)
        {
            element_spisok.innerHTML +="<li><div class='str-list'><div class='text-case'>" + massiv_cases[i]+ 
            "</div><div class='btn_galki_krestiki'>" +
            "<button type='button' class='galki_btn'><img src='./images/galka.png' height='30' width='30'></button>" +
            "<button type='button' class='krestiki_btn'><img src='./images/krest.png' height='28' width='28'></button>" +
            "<input type='checkbox'/></div></div></li>";
        }
        element_blok.innerHTML +="</ol>"
    }
    return;
}

{
    const element_filter = document.getElementById("block-filter");
    let numb_active_cases = 0;
    let numb_completed_cases = 0;
    let numb_deleted_cases = 0;
    let numb_all_cases = 0;

    element_filter.innerHTML =
    "<div><a id=\"active\" class=\"navbar_link\" href=\"#\">Активные ("+numb_active_cases+")</a></div>" +
    "<div><a id=\"completed\" class=\"navbar_link\" href=\"#\">Завершенные ("+numb_completed_cases+")</a></div>" +
    "<div><a id=\"deleted\" class=\"navbar_link\" href=\"#\">Удаленные ("+numb_deleted_cases+")</a></div>"+
    "<div class=\"znak\"><div><a id=\"all\" class=\"navbar_link is-active\" href=\"#\">Все ("+numb_all_cases+")</a></div><div id=\"filte\">&#10606</div></div>"
    
    const navbarLinks = document.querySelectorAll(".navbar_link");

    const element_active = document.getElementById("active");
    const element_completed = document.getElementById("completed");
    const element_deleted = document.getElementById("deleted");
    const element_all = document.getElementById("all");

    let node;
    const element_blok = document.getElementById("blok");
    const element = document.getElementById("ADD_btn");
    const input_enter = document.getElementById("inp-text");
    let element_spisok;
    let massiv_active_cases = [];
    let massiv_completed_cases = [];
    let massiv_deleted_cases = [];
    
    element_active.addEventListener("click", () => { 
        input_enter.removeAttribute("readonly");
        navbarLinks.forEach(link => {
            link.classList.remove("is-active");
            if (link.id == "active") 
            {
                link.classList.add("is-active");
            }
        });
        if (numb_active_cases === 0)
        {
            element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
        }
        else
            InsertElements(element_blok,massiv_active_cases)
    });

    element_completed.addEventListener("click", () => { 
        input_enter.setAttribute("readonly","readonly");
        navbarLinks.forEach(link => {
            link.classList.remove("is-active");
            if (link.id == "completed") 
            {
                link.classList.add("is-active");
            }
        })
        if (numb_completed_cases === 0)
        {
            element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
        }
        else
            InsertElements(element_blok,massiv_completed_cases)
    });
    element_deleted.addEventListener("click", () => { 
        input_enter.setAttribute("readonly","readonly");
        navbarLinks.forEach(link => {
            link.classList.remove("is-active");
            if (link.id == "deleted") 
            {
                link.classList.add("is-active");
            }
        })
        if (numb_deleted_cases === 0)
        {
            element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
        }
        else
            InsertElements(element_blok,massiv_deleted_cases);
    });
    element_all.addEventListener("click", () => { 
        input_enter.removeAttribute("readonly");
        navbarLinks.forEach(link => {
            link.classList.remove("is-active");
            if (link.id == "all") 
            {
                link.classList.add("is-active");
            }
        })
        if (numb_active_cases === 0 && numb_completed_cases === 0 && numb_deleted_cases === 0)
        {
            element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
        }
        else
        {
            InsertElements(element_blok,massiv_active_cases);
            InsertElements(element_blok,massiv_completed_cases);
            InsertElements(element_blok,massiv_deleted_cases);
        }
    });

    element.addEventListener("click", () => {
        if (input_enter.value != "")
        {
            element_spisok = document.getElementById("spisok-del");
            if (element_spisok != null)
            {
                massiv_active_cases.push(input_enter.value);
                element_spisok.innerHTML +=
                "<li><div class='str-list'><div class='text-case'>" + input_enter.value + 
                "</div><div class='btn_galki_krestiki'>" +
                "<button type='button' class='galki_btn'><img src='./images/galka.png' height='30' width='30'></button>" +
                "<button type='button' class='krestiki_btn'><img src='./images/krest.png' height='28' width='28'></button>" +
                "<input type='checkbox'/></div></div></li>";
                numb_active_cases++;
                numb_all_cases++;
                //node = element_spisok.lastChild
               // console.log(node);
            }
            else {
                massiv_active_cases.push(input_enter.value);
                element_blok.innerHTML = "<ol id='spisok-del'><li><div class='str-list'><div class='text-case'>" + input_enter.value + 
                "</div><div class='btn_galki_krestiki'>" +
                "<button type='button' class='galki_btn'><img src='./images/galka.png' height='30' width='30'></button>" +
                "<button type='button' class='krestiki_btn'><img src='./images/krest.png' height='28' width='28'></button>" +
                "<input type='checkbox'/></div></div></li></ol>";
                numb_active_cases++;
                numb_all_cases++;
            }
            element_active.innerText ="Активные (" + numb_active_cases + ")";
            element_all.innerText ="Все (" + numb_all_cases + ")";
            input_enter.value = "";
        }
        else 
        {
            alert("Дело не может быть пустым!");
        }
        
    });

    const element_reset = document.getElementById("CLEAR_btn");
    element_reset.addEventListener("click", () => {
        massiv_active_cases.length = 0;
        massiv_completed_cases.length = 0
        massiv_deleted_cases.length = 0;
        element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
        
        numb_active_cases = 0;
        numb_completed_cases = 0;
        numb_deleted_cases = 0;
        numb_all_cases = 0;

        element_active.innerText ="Активные (" + numb_active_cases + ")";
        element_completed.innerText ="Завершенные (" + numb_completed_cases + ")";
        element_deleted.innerText ="Удаленные (" + numb_deleted_cases + ")";
        element_all.innerText ="Все (" + numb_all_cases + ")";
    });
}