var uiu_kiki = {

    chunk: function (array, size = 1) {
        var res = [],
            start = 0;
        var index = 0;
        if (array.length == 0 && size <= 0 && !Number.isNaN(size)) {
            return []
        }
        while (start < array.length) {
            var tempArr = array.slice(start, (index += size));
            res.push(tempArr);
            start = index;
        }
        return res
    },

    compact: function () { },

    fill: function () { },

}
