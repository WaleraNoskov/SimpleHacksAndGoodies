function checkRadios(value) {
    Array.from(document.getElementsByClassName("check_input"))
        .forEach(function (item) {
            if (item.value == value)
                item.checked = true
        })

        Array.from(document.getElementsByName("characteristic"))[0].value = '-'
}

checkRadios(3) //оценка, которую надо поставить:
//1 - полностью не согласен
//2 - скорее не согласен
//3 - отчасти согласен, отчасти нет (default)
//4 - скорее согласен
//5 - полностью согласен