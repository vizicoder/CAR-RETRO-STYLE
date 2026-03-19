// Function mapper (used for obfuscation)
var _0x31967c = _0x57da;

function _0x57da(_0x1e8544, _0x328d79) {
    var _0x129b02 = _0x129b();
    return _0x57da = function (_0x57da84, _0x2265d5) {
        _0x57da84 = _0x57da84 - 0x192;
        var _0xa3bd7e = _0x129b02[_0x57da84];
        return _0xa3bd7e;
    }, _0x57da(_0x1e8544, _0x328d79);
}

// String array
function _0x129b() {
    var _0x221a3b = [
        '973YBpcVB',
        'stopPropagation',
        '78nGquat',
        'contextmenu',
        '1523557CxLINJ',
        'addEventListener',
        '6920244EeFZON',
        '285OiujWa',
        'preventDefault',
        '15109947zmllIT',
        'ctrlKey',
        '122345nKUiWE',
        '40004150yKuCKL',
        '19784TxvdXr',
        '38798NNRdaX'
    ];
    _0x129b = function () {
        return _0x221a3b;
    };
    return _0x129b();
}

// Self-executing function (obfuscation logic)
(function (_0x289e57, _0x149074) {
    var _0x2940cf = _0x57da,
        _0x1cc737 = _0x289e57();

    while (!![]) {
        try {
            var _0x15e75e =
                -parseInt(_0x2940cf(0x199)) / 0x1 +
                parseInt(_0x2940cf(0x194)) / 0x2 *
                (parseInt(_0x2940cf(0x19c)) / 0x3) +
                -parseInt(_0x2940cf(0x19b)) / 0x4 +
                parseInt(_0x2940cf(0x1a0)) / 0x5 *
                (-parseInt(_0x2940cf(0x197)) / 0x6) +
                parseInt(_0x2940cf(0x195)) / 0x7 *
                (parseInt(_0x2940cf(0x193)) / 0x8) +
                -parseInt(_0x2940cf(0x19e)) / 0x9 +
                parseInt(_0x2940cf(0x192)) / 0xa;

            if (_0x15e75e === _0x149074)
                break;
            else
                _0x1cc737.push(_0x1cc737.shift());

        } catch (_0x546579) {
            _0x1cc737.push(_0x1cc737.shift());
        }
    }
}(_0x129b, 0xe4a15));


//  Actual functionality

// Disable certain key actions (Ctrl or F12)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey || event.keyCode == 123) {
        event.preventDefault();
        event.stopPropagation();
    }
});

// Disable right-click
document.addEventListener('contextmenu', function (event) {
    event.stopPropagation();
}, false);