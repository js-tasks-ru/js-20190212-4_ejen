"use strict";

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let pos_start = 0;

    let str_num;
    let n_min;
    let n_max;

    for (var i = 0; i <= str.length - 1; i++) {
        if (isNaN(str.charAt(i)) == false || str.charAt(i) == ",") {
            if (str.charAt(i) == " " || str.charAt(i) == ",") {
                str_num = parseFloat(str.substring(pos_start, i));
                if (isNaN(str_num) == false) {
                    n_min = n_min || str_num;
                    n_min = Math.min(n_min, str_num);

                    n_max = n_max || str_num;
                    n_max = Math.max(n_max, str_num);
                }

                pos_start = i + 1;
            }
        }
    }

    str_num = parseFloat(str.substring(pos_start));
    if (isNaN(str_num) == false) {
        n_min = n_min || str_num;
        n_min = Math.min(n_min, str_num);

        n_max = n_max || str_num;
        n_max = Math.max(n_max, str_num);
    }

    return { min: n_min, max: n_max };
}
