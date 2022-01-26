var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("calc-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        if (!this.classList.contains('disabled')) {
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        }
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
};


$(function() {
    // setup master volume
    $(".width-calc").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 10000,
        step: 100,
        animate: true,
        value: 1000,
        slide: function(event, ui) {
            $('.slider-width-Value').val(ui.value);
            $('.width-calc-new-t').val($('.slider-width-Value').val());
            setLabelPositionWidth();
            newCalc();
        }
    });
    $(".action-calc").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 3,
        step: 1,
        animate: true
    });
	
	$( "#slider-height-Value" ).change(function() {newCalc();});
	$( "#slider-width-Value" ).change(function() {newCalc();});
	

    var thumbWidth = $($('.width-calc').children('.ui-slider-handle'));
    setLabelPositionWidth();


    function setLabelPositionWidth() {
        var labelWidth = $('.slider-width-Value');
        labelWidth.css('top', 'calc(100% + 8px)');
        labelWidth.css('left', thumbWidth.css('left'));
    }

    // setup graphic EQ
    $(".height-calc > span").slider({
        range: "min",
        min: 0,
        max: 6000,
        value: $('.height-calc>span').val(),
        step: 100,
        animate: true,
        orientation: "vertical",
        value: 1000,
        slide: function(event, ui) {
            $('.slider-height-Value').val(ui.value);
            $('.height-calc-new-t').val($('.slider-height-Value').val());
            setLabelPositionHeight();
            newCalc();
        }
    });
    var thumbHeight = $($('.height-calc>span').children('.ui-slider-handle'));
    setLabelPositionHeight();

    function setLabelPositionHeight() {
        var labelHeight = $('.slider-height-Value');
        labelHeight.css('right', 'calc(100% + 10px)');
        labelHeight.css('bottom', thumbHeight.css('bottom'));
    }
});

// New calc
var doorsCosts = [
    { id: 0, title: "Без двери", from: 0, to: 0 },
    { id: 1, title: "С распашной дверью", from: 20000, to: 20000 },
    { id: 2, title: "С раздвижной дверью", from: 30000, to: 30000 }
];

/*
var peregorodkaCosts = [
    { id: "0", title: "", from: 0, to: 0 },
    { id: "1", title: "Каркасная перегородка", from: 3000, to: 7000, canHasDoor: true },
    { id: "2", title: "Цельностеклянная перегородка", from: 5000, to: 12000, canHasDoor: true },
    //{ id: "3", title: "Лофт перегородка", from: 2790, to: 4030, canHasDoor: true },
    //{ id: "4", title: "Противопожарная перегородка", from: 22500, to: 32500, canHasDoor: true },
    //{ id: "5", title: "Перегородка гармошка", from: 17550, to: 25350, canHasDoor: true },
    //{ id: "6", title: "Раздвижные стены", from: 19890, to: 28730, canHasDoor: true },
    //{ id: "7", title: "Перегородки с гнутым стеклом", from: 3330, to: 4810, canHasDoor: true },
    //{ id: "8", title: "Smart перегородки", from: 54000, to: 78000, canHasDoor: true },
    //{ id: "9", title: "Дверь раздвижная 1 створчатая", from: 33660, to: 48620 },
    //{ id: "10", title: "Дверь раздвижная 2 створчатая", from: 61200, to: 88400 },
    //{ id: "11", title: "Дверь противопожарная 1 створчатая", from: 61200, to: 88400 },
    //{ id: "12", title: "Дверь противопожарная 2 створчатая", from: 122400, to: 176800 },
    //{ id: "13", title: "Дверь теплая 1 створчатая", from: 72000, to: 104000 },
    //{ id: "14", title: "Дверь теплая 2 створчатая", from: 94500, to: 136500 },
    //{ id: "15", title: "Дверь холодная(входная) 1 створчатая", from: 30600, to: 44200 },
    //{ id: "16", title: "Дверь холодная(входная) 2 створчатая", from: 70200, to: 101400 },
    //{ id: "17", title: "Дверь Smart 1 створчатая", from: 96300, to: 139100 },
    //{ id: "18", title: "Дверь Smart 2 створчатая", from: 180000, to: 260000 },
    //{ id: "19", title: "Дверь автоматическая 1 створчатая", from: 142200, to: 205400 },
    //{ id: "20", title: "Дверь автоматическая 2 створчатая", from: 152100, to: 219700 },
    //{ id: "21", title: "Дверь телескопик 2 полотна", from: 70200, to: 101400 },
    //{ id: "22", title: "Дверь телескопик 3 полотна", from: 90270, to: 130390 },
    //{ id: "23", title: "Дверь книжка 2 полотна", from: 32490, to: 46930 },
    //{ id: "24", title: "Дверь книжка 3 полотна", from: 48690, to: 70330 },
    //{ id: "25", title: "Входная группа", from: 5130, to: 7410 },
    //{ id: "26", title: "Козырек", from: 22320, to: 32240 },
    //{ id: "27", title: "Шахта лифта", from: 8928, to: 12896 },
    //{ id: "28", title: "Крыша", from: 11970, to: 17290 },
    //{ id: "29", title: "Пол", from: 15300, to: 22100 },
    //{ id: "30", title: "Зенитный фонарь непротивопожарный", from: 22500, to: 32500 },
    //{ id: "31", title: "Зенитный фонарь противопожарный", from: 45000, to: 65000 },
    //{ id: "32", title: "Ограждение", from: 8640, to: 12480 },
    //{ id: "33", title: "Фасадное остекление", from: 13770, to: 19890 },
	{ id: "3", title: "Сантехнические перегородки", from: 1500, to: 3000 },
	{ id: "4", title: "Мобильные перегородки", from: 3000, to: 6000 },
	{ id: "5", title: "Перегородки под Лофт", from: 5000, to: 12000 },
];
*/

function findById(id) {
    return function(item) {
        return item.id && String(item.id) === String(id);
    }
}

function toPrice(num) {
    return Math.round(num)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function newCalc() {
    var $h = parseInt($('#slider-height-Value').val() || $('#slider-height-Value').attr('placeholder'), 10) || 0;
    var $w = parseInt($('#slider-width-Value').val() || $('#slider-width-Value').attr('placeholder'), 10) || 0;
    var S = ($h * $w) / 1000000;
    var peregorodkaType = $('.type-peregorodka .type-p').val() || '0';
    var peregorodkaCostIndex = peregorodkaCosts.findIndex(findById(peregorodkaType));
    if (peregorodkaCostIndex === -1) {
        peregorodkaCostIndex = 0;
    }


    var peregorodkaCostFrom = peregorodkaCosts[peregorodkaCostIndex].from * S;
    var peregorodkaCostTo = peregorodkaCosts[peregorodkaCostIndex].to * S;
    var doorsType = $('.type-dver .type-d').val() || '0';
    var doorsCount = parseInt($('.quantity input').val(), 10) || 0;
    var doorsCostIndex = doorsCosts.findIndex(findById(doorsType));
    if (doorsCostIndex === -1 || !peregorodkaCosts[peregorodkaCostIndex].canHasDoor) {
        doorsCostIndex = 0;
    }
    var doorsCostFrom = doorsCosts[doorsCostIndex].from * doorsCount;
    var doorsCostTo = doorsCosts[doorsCostIndex].to * doorsCount;
    $('.peregorodka-img').css('display', 'none');
    $('.peregorodka-img-' + peregorodkaCostIndex).css('display', 'block');

    var priceFrom = toPrice(peregorodkaCostFrom + doorsCostFrom);
    var priceTo = toPrice(peregorodkaCostTo + doorsCostTo);
    if (peregorodkaCosts[peregorodkaCostIndex].canHasDoor) {
        $('.type-dver .select-selected').removeClass('disabled');
    } else {
        $('.type-dver .select-selected').addClass('disabled');
    }
    if (!peregorodkaCosts[peregorodkaCostIndex].canHasDoor || !Number(doorsType)) {
        $('.quantity input').attr('disabled', true);
        $('.quantity input').val(0);
    } else {
        $('.quantity input').attr('disabled', false);
    }
    $('#total-price-ot').html(priceFrom);
    $('#total-price-do').html(priceTo);
    $('.calc-input.square input').val(S);
    $('.input-count').val($('.value-total').html());
    $('.input-peregorodka-calc').val($('.type-peregorodka .select-selected').html());
    $('.input-door-calc').val($('.type-dver .select-selected').html());
    $('.input-door-count').val($('.quantity input').val());
    $('.input-width-calc').val($('#slider-width-Value').val());
    $('.input-height-calc').val($('#slider-height-Value').val());
    $('.type-calc-new-t').val($('.type-peregorodka .select-selected').html());
}

window.onload = function () {
	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
	
	document.addEventListener("click", closeAllSelect);

	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	
	jQuery('.quantity').each(function() {
    
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			if (input.attr('disabled')) return;
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			if (input.attr('disabled')) return;
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
	
	
	
	
	$('.calc.new-c').on('change click', newCalc);
	newCalc();
};