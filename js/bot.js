var _0x1b35 = [
  "RUNNING",
  "memo",
  "before\x20new\x20login",
  "soon",
  "1579853mGbmVO",
  "wait",
  "toal_get",
  "textContent",
  "stake_btn",
  "value",
  "Invalid",
  "https://wax.atomichub.io/profile/",
  "user",
  "href",
  "mining",
  "last_mine",
  "WTF\x20is\x20this\x20error????\x20restart\x20in\x205\x20min",
  "account:",
  "STOPPING",
  "floor",
  "1609474YQAmOY",
  "self",
  "getting\x20cooldown",
  "getSeconds",
  "trying\x20to\x20mine",
  "cpu",
  "claim_nft_acc",
  "status",
  "Normal\x20error\x20wait:\x20",
  "login",
  "Error:\x20Claimed\x20NFT.",
  "toLocaleString",
  "restart",
  "includes",
  "\x20min",
  "charging",
  "sec\x20AWCooldown:\x20",
  "Unknow\x20error\x20wait:\x20",
  "send_btn",
  "wax_bloks",
  "\x20TLM",
  "79EwqwoV",
  "className",
  "restarting",
  "Failed",
  "getElementById",
  "checked",
  "16624OAEnVL",
  "break",
  "179051xJBmNb",
  "message",
  "random",
  "sec",
  "some",
  "1728563ocrnbp",
  "getTime",
  "declined",
  "isInteger",
  "0m\x200s",
  "Click\x20to\x20Start",
  "onclick",
  "location",
  "\x20Add\x20random\x20time:\x20",
  "run_btn",
  "Error:\x20Cannot\x20transfer.",
  "reload",
  "toFixed",
  "Nothing\x20to\x20be\x20mine\x20wait\x20:\x20",
  "Complete:\x20",
  "ninja",
  "-------------------",
  "\x20at\x20",
  "expired",
  "send_wax",
  "land_btn",
  "ninja_vip",
  "error:\x20",
  "replace",
  "user_account",
  "log",
  "getMinutes",
  "Total\x20cooldown:\x20",
  "before\x20mine",
  "atomic_hub",
  "Ninja\x20server\x20reach\x20rate\x20limit",
  "next_mine",
  "nothing",
  "innerHTML",
  "to_acc",
  "countdown",
  "querySelector",
  "\x20||\x20answer:",
  "set_land",
  "1144112cWrfcB",
  "claim_btn",
  "input[name=\x22mining_with\x22]:checked",
  "getHours",
  "3506789lBRJcy",
  "claiming",
  "disabled",
  "========\x20STOPPING\x20========",
  "btn\x20btn-danger",
  "Error\x20with\x20ninja-sever\x20mining:\x20:\x20",
];
var _0xa1f22a = _0x3f9e;
(function (_0x11f608, _0xcaf3b5) {
  var _0x2114df = _0x3f9e;
  while (!![]) {
    try {
      var _0x4a7f79 =
        parseInt(_0x2114df(0xce)) +
        -parseInt(_0x2114df(0x9a)) * -parseInt(_0x2114df(0xa0)) +
        parseInt(_0x2114df(0xa7)) +
        -parseInt(_0x2114df(0x75)) +
        parseInt(_0x2114df(0x85)) +
        parseInt(_0x2114df(0xa2)) +
        -parseInt(_0x2114df(0xd2));
      if (_0x4a7f79 === _0xcaf3b5) break;
      else _0x11f608["push"](_0x11f608["shift"]());
    } catch (_0x4da6bf) {
      _0x11f608["push"](_0x11f608["shift"]());
    }
  }
})(_0x1b35, 0xd8c2e);
var isWork = ![],
  errorDelay = 0x1 * (0x3c * 0x3e8),
  cpuDelay = 0x1 * (0x3c * 0x3e8),
  mineCountdownTime = 0x2 * (0x3c * 0x3e8),
  loginCountdownTime = 0x1 * (0x3c * 0x3e8),
  mineCountdownFinishTime = new Date()[_0xa1f22a(0xa8)](),
  loginCountdownFinishTime = new Date()[_0xa1f22a(0xa8)](),
  interval,
  isMining = ![],
  totalget = 0x0,
  minedCount = 0x0;
let userAccount = "";
function updateStatus(_0x5d1a32) {
  var _0x2a4c91 = _0xa1f22a;
  (document[_0x2a4c91(0x9e)](_0x2a4c91(0x8c))[_0x2a4c91(0x78)] = _0x5d1a32),
    (document["title"] = _0x5d1a32 + ":\x20" + userAccount);
}
function updateNextMine(_0x4b1bfe) {
  var _0x95373a = _0xa1f22a;
  const _0x28fd13 = new Date()[_0x95373a(0xa8)](),
    _0x1737d8 = new Date(_0x28fd13 + _0x4b1bfe);
  document[_0x95373a(0x9e)](_0x95373a(0xc6))[_0x95373a(0x78)] =
    _0x1737d8[_0x95373a(0x90)]();
}
function clearTimer() {
  var _0x49513c = _0xa1f22a;
  clearInterval(interval),
    (document[_0x49513c(0x9e)](_0x49513c(0xca))[_0x49513c(0xc8)] =
      _0x49513c(0xab));
}
function sleep(_0x105445) {
  return new Promise((_0x31e87b) => setTimeout(_0x31e87b, _0x105445));
}
function updateAccount(_0x57f042) {
  var _0xfd53b3 = _0xa1f22a;
  (document[_0xfd53b3(0x9e)](_0xfd53b3(0xbf))[_0xfd53b3(0x78)] = _0x57f042),
    (document[_0xfd53b3(0x9e)](_0xfd53b3(0x98))[_0xfd53b3(0x7e)] =
      "https://wax.bloks.io/account/" + _0x57f042),
    (document["getElementById"](_0xfd53b3(0xc4))[_0xfd53b3(0x7e)] =
      _0xfd53b3(0x7c) + _0x57f042);
}
async function chargingCountdownfunction() {
  var _0x1766b7 = _0xa1f22a,
    _0xb52cee = new Date()[_0x1766b7(0xa8)](),
    _0x46ae93 = mineCountdownFinishTime - _0xb52cee,
    _0x576f7e = Math[_0x1766b7(0x84)](
      (_0x46ae93 % (0x3e8 * 0x3c * 0x3c)) / (0x3e8 * 0x3c)
    ),
    _0x3b7839 = Math[_0x1766b7(0x84)]((_0x46ae93 % (0x3e8 * 0x3c)) / 0x3e8);
  (document["getElementById"](_0x1766b7(0xca))["innerHTML"] =
    _0x576f7e + "m\x20" + _0x3b7839 + "s\x20" + _0x1766b7(0xc3)),
    _0x46ae93 < 0x0 &&
      (clearTimer(),
      (document[_0x1766b7(0x9e)](_0x1766b7(0xca))[_0x1766b7(0xc8)] =
        _0x1766b7(0x89)),
      await miner(document["querySelector"](_0x1766b7(0xd0))[_0x1766b7(0x7a)]));
}
async function miningCountdownfunction() {
  var _0x2f9fdd = _0xa1f22a,
    _0x3b6c35 = new Date()[_0x2f9fdd(0xa8)](),
    _0x4c169a = mineCountdownFinishTime - _0x3b6c35,
    _0x3996da = Math[_0x2f9fdd(0x84)](
      (_0x4c169a % (0x3e8 * 0x3c * 0x3c)) / (0x3e8 * 0x3c)
    ),
    _0x4e6513 = Math[_0x2f9fdd(0x84)]((_0x4c169a % (0x3e8 * 0x3c)) / 0x3e8);
  (document[_0x2f9fdd(0x9e)]("countdown")[_0x2f9fdd(0xc8)] =
    _0x3996da + "m\x20" + _0x4e6513 + "s\x20" + "before\x20new\x20mine"),
    _0x4c169a < 0x0 &&
      (clearTimer(),
      restart(),
      (document["getElementById"](_0x2f9fdd(0xca))["innerHTML"] =
        _0x2f9fdd(0x9c)));
}
async function loginCountdownfunction() {
  var _0x156d8a = _0xa1f22a,
    _0x4b61bb = new Date()["getTime"](),
    _0x3ad707 = loginCountdownFinishTime - _0x4b61bb,
    _0x110d31 = Math["floor"](
      (_0x3ad707 % (0x3e8 * 0x3c * 0x3c)) / (0x3e8 * 0x3c)
    ),
    _0x493d81 = Math[_0x156d8a(0x84)]((_0x3ad707 % (0x3e8 * 0x3c)) / 0x3e8);
  (document[_0x156d8a(0x9e)]("countdown")["innerHTML"] =
    _0x110d31 + "m\x20" + _0x493d81 + "s\x20" + _0x156d8a(0xda)),
    _0x3ad707 < 0x0 &&
      (clearTimer(), window[_0x156d8a(0xae)][_0x156d8a(0xb2)]());
}
async function login() {
  var _0x31a141 = _0xa1f22a;
  try {
    (document["getElementById"]("swap_btn")[_0x31a141(0xad)] =
      async function () {
        var _0x1fdb51 = _0x31a141;
        let _0x16fb01 = await swap(
          userAccount,
          document[_0x1fdb51(0x9e)]("swap_tlm")[_0x1fdb51(0x7a)]
        );
        _0x16fb01 != 0x0 && _0x16fb01 != null
          ? console["log"](_0x1fdb51(0xb5) + _0x16fb01)
          : console[_0x1fdb51(0xc0)]("Error:\x20Cannot\x20swap\x20TLM.");
      }),
      (document[_0x31a141(0x9e)](_0x31a141(0xbb))[_0x31a141(0xad)] =
        async function () {
          var _0x1c7d57 = _0x31a141;
          let _0x5bffe3 = null;
          try {
            _0x5bffe3 = await setLand(
              userAccount,
              document[_0x1c7d57(0x9e)](_0x1c7d57(0xcd))[_0x1c7d57(0x7a)]
            );
          } catch (_0x1c71f2) {
            console["log"](_0x1c71f2);
          }
          _0x5bffe3 != 0x0 && _0x5bffe3 != null
            ? console["log"](_0x1c7d57(0xb5) + _0x5bffe3)
            : console[_0x1c7d57(0xc0)]("Error:\x20Cannot\x20set\x20land.");
        }),
      (document["getElementById"](_0x31a141(0x97))[_0x31a141(0xad)] =
        async function () {
          var _0x136b6e = _0x31a141;
          let _0x3e95d3 = await transfer(
            userAccount,
            document[_0x136b6e(0x9e)](_0x136b6e(0xba))[_0x136b6e(0x7a)],
            document[_0x136b6e(0x9e)](_0x136b6e(0xc9))[_0x136b6e(0x7a)],
            document["getElementById"](_0x136b6e(0xd9))[_0x136b6e(0x7a)]
          );
          _0x3e95d3 != 0x0 && _0x3e95d3 != null
            ? console[_0x136b6e(0xc0)](_0x136b6e(0xb5) + _0x3e95d3)
            : console["log"](_0x136b6e(0xb1));
        }),
      (document["getElementById"](_0x31a141(0xcf))[_0x31a141(0xad)] =
        async function () {
          var _0x2ed957 = _0x31a141;
          let _0x2dd405 = await claimNFT(
            userAccount,
            document[_0x2ed957(0x9e)](_0x2ed957(0x8b))[_0x2ed957(0x7a)]
          );
          _0x2dd405 != 0x0 && _0x2dd405 != null
            ? console[_0x2ed957(0xc0)]("Complete:\x20" + _0x2dd405)
            : console[_0x2ed957(0xc0)](_0x2ed957(0x8f));
        }),
      (document["getElementById"](_0x31a141(0x79))["onclick"] =
        async function () {
          var _0x593f5f = _0x31a141;
          let _0x50038d = await stake(
            userAccount,
            document[_0x593f5f(0x9e)]("stake")[_0x593f5f(0x7a)]
          );
          _0x50038d != 0x0 && _0x50038d != null
            ? console["log"]("Complete:\x20" + _0x50038d)
            : console[_0x593f5f(0xc0)]("Error:\x20Cannot\x20stake.");
        }),
      (document[_0x31a141(0x9e)](_0x31a141(0xb0))[_0x31a141(0xad)] =
        async function () {
          onclickRun();
        }),
      (document[_0x31a141(0x9e)](_0x31a141(0xb0))[_0x31a141(0xd4)] = !![]),
      clearTimer(),
      (loginCountdownFinishTime =
        new Date()[_0x31a141(0xa8)]() + loginCountdownTime),
      (interval = setInterval(loginCountdownfunction, 0x3e8)),
      (userAccount = await wax[_0x31a141(0x8e)]()),
      updateAccount(userAccount),
      userAccount != null &&
        (clearTimer(),
        (document["getElementById"](_0x31a141(0xca))["innerHTML"] =
          _0x31a141(0xab)),
        onclickRun(),
        (document["getElementById"](_0x31a141(0xb0))["disabled"] = ![]));
  } catch (_0x1a0b17) {
    console[_0x31a141(0xc0)]("Error:" + _0x1a0b17),
      updateState(_0x31a141(0x81)),
      updateNextMine(0x5 * 0x3c * 0x3e8),
      (isWork = ![]),
      clearTimer(),
      (document["getElementById"]("countdown")[_0x31a141(0xc8)] =
        _0x31a141(0xab)),
      await sleep(0x5 * 0x3c * 0x3e8),
      window["location"][_0x31a141(0xb2)]();
  }
}
function get_cpu_usage(_0x1045e3) {}
function _0x3f9e(_0x37ca61, _0x3547be) {
  _0x37ca61 = _0x37ca61 - 0x74;
  var _0x1b3561 = _0x1b35[_0x37ca61];
  return _0x1b3561;
}
function get_current_tlm(_0x3a8ffd) {}
async function run() {
  var _0x33af6c = _0xa1f22a;
  isWork = !![];
  while (isWork) {
    if (!isMining) {
      clearTimer(),
        console[_0x33af6c(0xc0)](_0x33af6c(0x87)),
        (isMining = !![]);
      let _0x56b47a = await getMineDelay(userAccount),
        _0x65b6e3 =
          Math[_0x33af6c(0x84)](Math[_0x33af6c(0xa4)]() * 0x5208) + 0xfa0,
        _0x2db58e = 0x0;
      Number[_0x33af6c(0xaa)](_0x56b47a)
        ? (_0x2db58e = _0x56b47a + _0x65b6e3)
        : (_0x2db58e = _0x65b6e3),
        console[_0x33af6c(0xc0)](
          _0x33af6c(0xc2) +
            _0x2db58e / 0x3e8 +
            _0x33af6c(0x95) +
            _0x56b47a / 0x3e8 +
            _0x33af6c(0xaf) +
            _0x65b6e3 / 0x3e8 +
            _0x33af6c(0xa5)
        ),
        updateStatus(_0x33af6c(0x94)),
        updateNextMine(_0x2db58e),
        (mineCountdownFinishTime = new Date()[_0x33af6c(0xa8)]() + _0x2db58e),
        (interval = setInterval(chargingCountdownfunction, 0x3e8));
    }
    await sleep(0x3e8);
  }
}
async function miner(_0x3760e6) {
  var _0x358879 = _0xa1f22a;
  updateStatus("waiting\x20to\x20mine..."),
    updateStatus(_0x358879(0x7f)),
    (mineCountdownFinishTime =
      new Date()[_0x358879(0xa8)]() + mineCountdownTime),
    (interval = setInterval(miningCountdownfunction, 0x3e8));
  let _0x8df22 = null;
  if (_0x3760e6 == "ninja" || _0x3760e6 == _0x358879(0xbc))
    try {
      _0x3760e6 == _0x358879(0xbc)
        ? (_0x8df22 = await ninja_server_mine(userAccount, !![]))
        : (_0x8df22 = await ninja_server_mine(userAccount, ![]));
      if (_0x8df22 == _0x358879(0xb6)) {
        document[_0x358879(0x9e)]("self")[_0x358879(0x9f)] = !![];
        throw _0x358879(0xc5);
      }
    } catch (_0x158729) {
      console[_0x358879(0xc0)](_0x358879(0xd7) + _0x158729);
      try {
        _0x8df22 = await self_mine(userAccount);
      } catch (_0x3b9a50) {
        console[_0x358879(0xc0)](
          "Error\x20with\x20self\x20mining:\x20" + _0x3b9a50
        ),
          (_0x8df22 = null);
      }
    }
  else {
    if (_0x3760e6 == "self")
      try {
        _0x8df22 = await self_mine(userAccount);
      } catch (_0xd8f60) {
        console[_0x358879(0xc0)](
          "Error\x20with\x20self\x20mining:\x20" + _0xd8f60
        ),
          (_0x8df22 = null);
      }
  }
  if (_0x8df22 != null) {
    updateStatus(_0x358879(0xd3));
    let _0x24c5a2 = null;
    try {
      console[_0x358879(0xc0)](
        _0x358879(0x82) + userAccount + _0x358879(0xcc) + _0x8df22
      ),
        (_0x24c5a2 = await claim(userAccount, _0x8df22)),
        (totalget += parseFloat(
          _0x24c5a2[_0x358879(0xbe)](_0x358879(0x99), "")
        )),
        (minedCount += 0x1);
      let _0x4fec19 = new Date();
      (document[_0x358879(0x9e)](_0x358879(0x80))["textContent"] =
        _0x24c5a2 +
        _0x358879(0xb8) +
        _0x4fec19[_0x358879(0xd1)]() +
        ":" +
        _0x4fec19[_0x358879(0xc1)]() +
        ":" +
        _0x4fec19[_0x358879(0x88)]()),
        (document["getElementById"](_0x358879(0x77))[_0x358879(0x78)] =
          totalget[_0x358879(0xb3)](0x4) +
          "\x20TLM\x20with\x20" +
          minedCount +
          "\x20Times"),
        clearTimer();
    } catch (_0x5b63b5) {
      updateStatus(_0x5b63b5);
      const _0xf169e8 = handleError(_0x5b63b5);
      console[_0x358879(0xc0)](_0x358879(0xbd) + _0x5b63b5);
      if (_0xf169e8 == _0x358879(0x91))
        updateStatus(_0x358879(0x8d) + 0x2 + _0x358879(0x93)),
          updateNextMine(0x78 * 0x3e8),
          clearTimer(),
          (mineCountdownFinishTime =
            new Date()[_0x358879(0xa8)]() + 0x78 * 0x3e8),
          (interval = setInterval(miningCountdownfunction, 0x3e8));
      else {
        if (_0xf169e8 == _0x358879(0x7f))
          updateStatus(
            "Error\x20while\x20find\x20answer:\x20" + 0x2 + _0x358879(0x93)
          ),
            document[_0x358879(0xcb)](
              "input[name=\x22mining_with\x22]:checked"
            )[_0x358879(0x7a)] == "ninja" &&
              (document[_0x358879(0x9e)](_0x358879(0x86))[_0x358879(0x9f)] =
                !![]),
            updateNextMine(0x78 * 0x3e8),
            clearTimer(),
            (mineCountdownFinishTime = new Date()["getTime"]() + 0x78 * 0x3e8),
            (interval = setInterval(miningCountdownfunction, 0x3e8));
        else {
          if (_0xf169e8 == _0x358879(0x8a))
            updateStatus(
              "Cpu\x20full\x20wait:\x20" +
                cpuDelay / (0x3c * 0x3e8) +
                _0x358879(0x93)
            ),
              updateNextMine(cpuDelay),
              clearTimer(),
              (mineCountdownFinishTime =
                new Date()[_0x358879(0xa8)]() + cpuDelay),
              (interval = setInterval(miningCountdownfunction, 0x3e8));
          else {
            if (_0xf169e8 == _0x358879(0x76))
              updateStatus(
                _0x358879(0x96) + errorDelay / (0x3c * 0x3e8) + _0x358879(0x93)
              ),
                updateNextMine(errorDelay),
                clearTimer(),
                (mineCountdownFinishTime =
                  new Date()[_0x358879(0xa8)]() + errorDelay),
                (interval = setInterval(miningCountdownfunction, 0x3e8));
            else
              _0xf169e8 == _0x358879(0xa1)
                ? (updateStatus(_0x358879(0xb4) + 0x3c + _0x358879(0x93)),
                  updateNextMine(0x3c * 0x3c * 0x3e8),
                  clearTimer(),
                  (mineCountdownFinishTime =
                    new Date()[_0x358879(0xa8)]() + 0x3c * 0x3c * 0x3e8),
                  (interval = setInterval(miningCountdownfunction, 0x3e8)))
                : (updateStatus(
                    _0x358879(0x96) +
                      errorDelay / (0x3c * 0x3e8) +
                      _0x358879(0x93)
                  ),
                  updateNextMine(errorDelay),
                  clearTimer(),
                  (mineCountdownFinishTime =
                    new Date()["getTime"]() + errorDelay),
                  (interval = setInterval(miningCountdownfunction, 0x3e8)));
          }
        }
      }
    }
    _0x24c5a2 != null &&
      (updateStatus("mining\x20success\x20sleeping"),
      await sleep(0x2710),
      (isMining = ![])),
      console["log"](_0x358879(0xb7));
  }
}
function handleError(_0x4be25a) {
  var _0x93088b = _0xa1f22a;
  const _0x51422a = [
      _0x93088b(0xa9),
      _0x93088b(0xb9),
      _0x93088b(0x74),
      _0x93088b(0x7d),
      _0x93088b(0x9d),
    ],
    _0x53900e = [_0x93088b(0x7b), "limit"];
  if (_0x4be25a[_0x93088b(0xa3)]["includes"]("CPU\x20time")) return "cpu";
  else {
    if (
      _0x53900e[_0x93088b(0xa6)]((_0x5acb00) =>
        _0x4be25a["message"]["includes"](_0x5acb00)
      )
    )
      return "mining";
    else {
      if (
        _0x51422a["some"]((_0x5bdb46) =>
          _0x4be25a["message"][_0x93088b(0x92)](_0x5bdb46)
        )
      )
        return _0x93088b(0x91);
      else
        return _0x4be25a[_0x93088b(0xa3)]["includes"](_0x93088b(0xc7))
          ? "break"
          : _0x93088b(0x76);
    }
  }
}
function stop() {
  clearTimer(), (isMining = ![]), (isWork = ![]);
}
function onclickRun() {
  var _0x1eb673 = _0xa1f22a;
  isWork
    ? (stop(),
      updateStatus(_0x1eb673(0x83)),
      console[_0x1eb673(0xc0)](_0x1eb673(0xd5)),
      (document["getElementById"](_0x1eb673(0xb0))[_0x1eb673(0x78)] =
        _0x1eb673(0xac)),
      (document["getElementById"](_0x1eb673(0xb0))[_0x1eb673(0x9b)] =
        "btn\x20btn-success"))
    : ((isWork = !![]),
      updateStatus(_0x1eb673(0xd8)),
      console[_0x1eb673(0xc0)]("========\x20RUNNING\x20========"),
      run(),
      (document[_0x1eb673(0x9e)](_0x1eb673(0xb0))[_0x1eb673(0x78)] =
        "Click\x20to\x20STOP"),
      (document[_0x1eb673(0x9e)](_0x1eb673(0xb0))[_0x1eb673(0x9b)] =
        _0x1eb673(0xd6)));
}
function restart() {
  stop(), run();
}
