{
    const element_blok = document.getElementById("blok");
    const element = document.getElementById("ADD_btn");

    element.addEventListener("click", () => {
        const input_enter = document.getElementById("inp-text");
        const element_spisok = document.getElementById("spisok-del");
        if (element_spisok != null)
        {
            element_spisok.innerHTML +="<li><div class='str-list'><div class='text-case'>" + input_enter.value + 
            "</div><div class='btn_galki_krestiki'>" +
            "<button type='button' class='galki_btn'><img src='galka.png' height='30' width='30'></button>" +
            "<button type='button' class='krestiki_btn'><img src='krest.png' height='28' width='28'></button>" +
            "<input type='checkbox'/></div></div></li>";
        }
        else {
            element_blok.innerHTML = "<ol id='spisok-del'><li><div class='str-list'><div class='text-case'>" + input_enter.value + 
            "</div><div class='btn_galki_krestiki'>" +
            "<button type='button' class='galki_btn'><img src='galka.png' height='30' width='30'></button>" +
            "<button type='button' class='krestiki_btn'><img src='krest.png' height='28' width='28'></button>" +
            "<input type='checkbox'/></div></div></li></ol>";
        }
        input_enter.value = "";
    });

    const element_reset = document.getElementById("CLEAR_btn");
    element_reset.addEventListener("click", () => {
        element_blok.innerHTML = "<div class='centr-text'>Не найдено ни одного дела</div>";
    });
}
