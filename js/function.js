const _0xd32a = [
  "map",
  "\x20WAX\x20to\x20",
  "miners",
  "\x20WAX\x20from\x20",
  "owner",
  "7RRDIDX",
  "803596FXgxab",
  "\x20to\x20",
  "\x20Transfering\x20",
  "eosio",
  "get_table_rows",
  "653783TQvEAs",
  "13xtURtE",
  "items",
  "text",
  "56081rHFejW",
  "\x20\x20TLM",
  ".000Z",
  "action_traces",
  "act",
  "last_mine_tx",
  "account_str",
  "avatar",
  "processed",
  "Still\x20mining\x20-\x20tried\x20",
  "img",
  "get",
  "WaxJS",
  "\x20\x20WAX",
  "Limit",
  "match",
  "0000000000000000000000000000000000000000000000000000000000000000",
  "current_land",
  "pushName",
  "includes",
  "\x20iterations",
  "last_mine_arr",
  "postMessage",
  "305qxnEBj",
  "delay",
  "\x20WAX\x20",
  "array",
  "alcordexmain",
  "floor",
  "difficulty",
  "data",
  "71006HenQoE",
  "Transfer\x20",
  "toFixed",
  "https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=",
  "Complete\x20stake\x20",
  "Rate",
  "558657IBDBzP",
  "0.00000000\x20WAX",
  "tag",
  "some",
  "0.00000000\x20WAX@eosio.token",
  "transact",
  "alien.worlds",
  "inline_traces",
  "federation",
  "delegatebw",
  "m.federation",
  "length",
  "setland",
  "Set\x20to\x20lands:\x20",
  "ease",
  "SHA-256",
  "eosio.token",
  "set",
  "log",
  "ninja",
  "\x20WAX",
  "active",
  "443dgpaGY",
  "planet",
  "error",
  "players",
  "0000",
  "\x20changing\x20land\x20to\x20",
  "toString",
  "getAsset",
  "\x20TLM",
  "api",
  "mine",
  "rows",
  "https://wax.api.atomicassets.io",
  "padStart",
  "account",
  "Swap\x20",
  "join",
  "Failed\x20to\x20get\x20land\x20-\x20",
  "getTime",
  "rpc",
  "last_mine",
  "quantity",
  "slice",
  "Staking\x20",
  "getName",
  "Found\x20answer\x20",
  "message",
  "transfer",
  "https://server-mine-b7clrv20.an.gateway.dev/server_mine_vip?wallet=",
  "status",
  "Mining\x20with\x20ninja\x20vip\x20server",
  "substring",
  "then",
  "\x20Pushing\x20mine\x20results...",
  "substr",
  "subtle",
  "\x20WAX\x20to\x20CPU...",
  "all",
  "\x20Swaping\x20tlm\x20to\x20wax\x20...",
  "claimnfts",
  "\x20...",
  "49333kXTRsl",
];
const _0x5d351e = _0x1860;
(function (_0x1a76ab, _0x5e708b) {
  const _0x5027cc = _0x1860;
  while (!![]) {
    try {
      const _0x5d7982 =
        -parseInt(_0x5027cc(0x17c)) * -parseInt(_0x5027cc(0x1e3)) +
        parseInt(_0x5027cc(0x175)) * -parseInt(_0x5027cc(0x17f)) +
        -parseInt(_0x5027cc(0x176)) +
        parseInt(_0x5027cc(0x17b)) +
        -parseInt(_0x5027cc(0x196)) * parseInt(_0x5027cc(0x1ba)) +
        -parseInt(_0x5027cc(0x19e)) +
        parseInt(_0x5027cc(0x1a4));
      if (_0x5d7982 === _0x5e708b) break;
      else _0x1a76ab["push"](_0x1a76ab["shift"]());
    } catch (_0xfe0351) {
      _0x1a76ab["push"](_0x1a76ab["shift"]());
    }
  }
})(_0xd32a, 0x6e39d);
const wax = new waxjs[_0x5d351e(0x18b)]("https://wax.greymass.com"),
  aa_api = new atomicassets["ExplorerApi"](_0x5d351e(0x1c6), "atomicassets", {
    fetch: fetch,
  }),
  mining_account = _0x5d351e(0x1ae),
  federation_account = _0x5d351e(0x1ac),
  fromHexString = (_0x418f9d) =>
    new Uint8Array(
      _0x418f9d[_0x5d351e(0x18e)](/.{1,2}/g)[_0x5d351e(0x1e4)]((_0x503881) =>
        parseInt(_0x503881, 0x10)
      )
    ),
  toHexString = (_0x47cb31) =>
    _0x47cb31["reduce"](
      (_0x2e9d8f, _0x574015) =>
        _0x2e9d8f + _0x574015["toString"](0x10)[_0x5d351e(0x1c7)](0x2, "0"),
      ""
    ),
  nameToInt = (_0x220dc4) => {
    const _0x4f5b58 = _0x5d351e,
      _0x1faa74 = new Serialize["SerialBuffer"]({
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder(),
      });
    _0x1faa74[_0x4f5b58(0x191)](_0x220dc4);
    const _0x3f1e02 = new Int64LE(_0x1faa74[_0x4f5b58(0x199)]);
    return _0x3f1e02 + "";
  },
  nameToArray = (_0x5827e8) => {
    const _0x30e884 = _0x5d351e,
      _0x5a8405 = new Serialize["SerialBuffer"]({
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder(),
      });
    return _0x5a8405[_0x30e884(0x191)](_0x5827e8), _0x5a8405[_0x30e884(0x199)];
  },
  intToName = (_0x3bde38) => {
    const _0x54383e = _0x5d351e;
    _0x3bde38 = new Int64LE(_0x3bde38);
    const _0x44d77e = new SerialBuffer({
      textEncoder: new TextEncoder(),
      textDecoder: new TextDecoder(),
    });
    _0x44d77e["pushArray"](_0x3bde38["toArray"]());
    const _0x1d5164 = _0x44d77e[_0x54383e(0x1d2)]();
    return _0x1d5164;
  },
  getBagMiningParams = (_0x1d6401) => {
    const _0x15fb12 = _0x5d351e,
      _0x1ab814 = { delay: 0x0, difficulty: 0x0, ease: 0x0 };
    let _0x231462 = 0xffff;
    for (
      let _0x111c5a = 0x0;
      _0x111c5a < _0x1d6401[_0x15fb12(0x1af)];
      _0x111c5a++
    ) {
      _0x1d6401[_0x111c5a][_0x15fb12(0x19d)][_0x15fb12(0x197)] < _0x231462 &&
        (_0x231462 = _0x1d6401[_0x111c5a][_0x15fb12(0x19d)][_0x15fb12(0x197)]),
        (_0x1ab814[_0x15fb12(0x197)] +=
          _0x1d6401[_0x111c5a][_0x15fb12(0x19d)][_0x15fb12(0x197)]),
        (_0x1ab814[_0x15fb12(0x19c)] +=
          _0x1d6401[_0x111c5a]["data"][_0x15fb12(0x19c)]),
        (_0x1ab814["ease"] +=
          _0x1d6401[_0x111c5a]["data"][_0x15fb12(0x1b2)] / 0xa);
    }
    if (_0x1d6401[_0x15fb12(0x1af)] === 0x2)
      _0x1ab814[_0x15fb12(0x197)] -= parseInt(_0x231462 / 0x2);
    else _0x1d6401["length"] === 0x3 && (_0x1ab814["delay"] -= _0x231462);
    return _0x1ab814;
  },
  getLandMiningParams = (_0x1289ad) => {
    const _0x59008d = _0x5d351e,
      _0x2eac1d = { delay: 0x0, difficulty: 0x0, ease: 0x0 };
    return (
      (_0x2eac1d["delay"] += _0x1289ad[_0x59008d(0x19d)][_0x59008d(0x197)]),
      (_0x2eac1d["difficulty"] +=
        _0x1289ad[_0x59008d(0x19d)][_0x59008d(0x19c)]),
      (_0x2eac1d["ease"] += _0x1289ad["data"][_0x59008d(0x1b2)]),
      _0x2eac1d
    );
  },
  getLandById = async (_0x1f18fa, _0x20698c, _0x39639c, _0x43bdee) => {
    const _0x22ed0c = _0x5d351e;
    try {
      const _0x5a16a6 = await _0x39639c[_0x22ed0c(0x17a)]({
        code: _0x1f18fa,
        scope: _0x1f18fa,
        table: "landregs",
        lower_bound: _0x20698c,
        upper_bound: _0x20698c,
      });
      let _0x59e214 = "federation";
      _0x5a16a6["rows"]["length"] &&
        (_0x59e214 = _0x5a16a6["rows"][0x0][_0x22ed0c(0x174)]);
      if (!_0x59e214)
        throw new Error(
          "Land\x20owner\x20not\x20found\x20for\x20land\x20id\x20" + _0x20698c
        );
      const _0x22611c = await _0x43bdee["getAsset"](_0x20698c);
      return (
        (_0x22611c["data"][_0x22ed0c(0x1bb)] = intToName(
          _0x22611c[_0x22ed0c(0x19d)]["planet"]
        )),
        (_0x22611c["data"][_0x22ed0c(0x189)] =
          _0x22611c[_0x22ed0c(0x19d)]["img"] || ""),
        (_0x22611c[_0x22ed0c(0x174)] =
          _0x22611c[_0x22ed0c(0x174)] || _0x59e214),
        _0x22611c
      );
    } catch (_0x1f708a) {
      return null;
    }
  },
  getLand = async (_0x148d04, _0x52ef06, _0x246754, _0x43f1ff, _0x199a3a) => {
    const _0x4e0df9 = _0x5d351e;
    try {
      const _0x3d33c2 = await _0x43f1ff[_0x4e0df9(0x17a)]({
        code: _0x52ef06,
        scope: _0x52ef06,
        table: _0x4e0df9(0x1e6),
        lower_bound: _0x246754,
        upper_bound: _0x246754,
      });
      let _0x5b2d8a;
      if (_0x3d33c2[_0x4e0df9(0x1c5)][_0x4e0df9(0x1af)] === 0x0) return null;
      else _0x5b2d8a = _0x3d33c2[_0x4e0df9(0x1c5)][0x0][_0x4e0df9(0x190)];
      return await getLandById(_0x148d04, _0x5b2d8a, _0x43f1ff, _0x199a3a);
    } catch (_0x76a628) {
      return (
        console[_0x4e0df9(0x1bc)](
          _0x4e0df9(0x1cb) + _0x76a628[_0x4e0df9(0x1d4)]
        ),
        null
      );
    }
  },
  getBag = async (_0x36ea6b, _0x9f9618, _0x4c0d97, _0x1caa4f) => {
    const _0x14a1f7 = _0x5d351e,
      _0x227b3e = await _0x4c0d97["get_table_rows"]({
        code: _0x36ea6b,
        scope: _0x36ea6b,
        table: "bags",
        lower_bound: _0x9f9618,
        upper_bound: _0x9f9618,
      }),
      _0x261bce = [];
    if (_0x227b3e[_0x14a1f7(0x1c5)][_0x14a1f7(0x1af)]) {
      const _0x2ec969 = _0x227b3e[_0x14a1f7(0x1c5)][0x0][_0x14a1f7(0x17d)][
        _0x14a1f7(0x1e4)
      ]((_0x43cd88) => {
        return _0x1caa4f["getAsset"](_0x43cd88);
      });
      return await Promise[_0x14a1f7(0x1df)](_0x2ec969);
    }
    return _0x261bce;
  },
  getNextMineDelay = async (_0x71a515, _0x4eff96, _0x5c240a, _0x22ef43) => {
    const _0xe9f0f3 = _0x5d351e,
      _0x5890fe = await _0x22ef43[_0xe9f0f3(0x17a)]({
        code: _0x71a515,
        scope: _0x71a515,
        table: _0xe9f0f3(0x1e6),
        lower_bound: _0x4eff96,
        upper_bound: _0x4eff96,
      });
    let _0x4807fd = -0x1;
    const _0x2d3fbf = new Date()[_0xe9f0f3(0x1cc)]();
    if (
      _0x5890fe["rows"][_0xe9f0f3(0x1af)] &&
      _0x5890fe["rows"][0x0]["last_mine_tx"] !== _0xe9f0f3(0x18f)
    ) {
      const _0x1de2e6 = Date["parse"](
        _0x5890fe["rows"][0x0][_0xe9f0f3(0x1ce)] + _0xe9f0f3(0x181)
      );
      (_0x4807fd = _0x1de2e6 + _0x5c240a[_0xe9f0f3(0x197)] * 0x3e8 - _0x2d3fbf),
        _0x4807fd < 0x0 && (_0x4807fd = 0x0);
    }
    return _0x4807fd;
  },
  getMineDelay = async function (_0x2b318f) {
    const _0x28533d = _0x5d351e;
    try {
      const _0x1f3edd = await getBag(
          mining_account,
          _0x2b318f,
          wax[_0x28533d(0x1c3)][_0x28533d(0x1cd)],
          aa_api
        ),
        _0x5cc73a = await getLand(
          federation_account,
          mining_account,
          _0x2b318f,
          wax[_0x28533d(0x1c3)]["rpc"],
          aa_api
        ),
        _0x4895da = getBagMiningParams(_0x1f3edd),
        _0x2e37f8 = getLandMiningParams(_0x5cc73a);
      (_0x4895da["delay"] *= _0x2e37f8[_0x28533d(0x197)] / 0xa),
        (_0x4895da[_0x28533d(0x19c)] += _0x2e37f8[_0x28533d(0x19c)]);
      var _0x43b0ed = await getNextMineDelay(
        mining_account,
        _0x2b318f,
        _0x4895da,
        wax[_0x28533d(0x1c3)][_0x28533d(0x1cd)]
      );
      return _0x43b0ed;
    } catch (_0x1042ec) {
      return _0x1042ec;
    }
  },
  getBagDifficulty = async function (_0x543117) {
    const _0x5792f3 = _0x5d351e;
    try {
      const _0x1f5201 = await getBag(
          mining_account,
          _0x543117,
          wax[_0x5792f3(0x1c3)][_0x5792f3(0x1cd)],
          aa_api
        ),
        _0x18aa3c = getBagMiningParams(_0x1f5201);
      return _0x18aa3c["difficulty"];
    } catch (_0x569938) {
      return _0x569938;
    }
  },
  getLandDifficulty = async function (_0x45693a) {
    const _0x439b56 = _0x5d351e;
    try {
      const _0x18df82 = await getLand(
          federation_account,
          mining_account,
          _0x45693a,
          wax[_0x439b56(0x1c3)][_0x439b56(0x1cd)],
          aa_api
        ),
        _0x5be9f5 = getLandMiningParams(_0x18df82);
      return _0x5be9f5[_0x439b56(0x19c)];
    } catch (_0x599aa3) {
      return _0x599aa3;
    }
  },
  lastMineTx = async (_0x16bafc, _0x25da83, _0x4fd429) => {
    const _0x146dee = _0x5d351e,
      _0x2fd9f8 = await _0x4fd429["get_table_rows"]({
        code: _0x16bafc,
        scope: _0x16bafc,
        table: _0x146dee(0x1e6),
        lower_bound: _0x25da83,
        upper_bound: _0x25da83,
      });
    let _0x3b31cf =
      "0000000000000000000000000000000000000000000000000000000000000000";
    return (
      _0x2fd9f8[_0x146dee(0x1c5)][_0x146dee(0x1af)] &&
        (_0x3b31cf = _0x2fd9f8["rows"][0x0][_0x146dee(0x184)]),
      _0x3b31cf
    );
  },
  doWorkWorker = async (_0x100614) => {
    const _0x551334 = _0x5d351e;
    (_0x100614[_0x551334(0x184)] = _0x100614[_0x551334(0x184)][
      _0x551334(0x1dc)
    ](0x0, 0x10)),
      (_0x100614[_0x551334(0x194)] = fromHexString(
        _0x100614[_0x551334(0x184)]
      )),
      (_0x100614[_0x551334(0x185)] = _0x100614[_0x551334(0x1c8)]),
      (_0x100614[_0x551334(0x1c8)] = nameToArray(_0x100614[_0x551334(0x1c8)]));
    const _0x14320d = () => {
        const _0x45dabc = _0x551334,
          _0x489264 = new Uint8Array(0x8);
        for (let _0x1afa23 = 0x0; _0x1afa23 < 0x8; _0x1afa23++) {
          const _0x285ce7 = Math[_0x45dabc(0x19b)](Math["random"]() * 0xff);
          _0x489264[_0x1afa23] = _0x285ce7;
        }
        return _0x489264;
      },
      _0x1a7c05 = (_0x3c676e) => {
        const _0x5f51d5 = _0x551334;
        return [...new Uint8Array(_0x3c676e)]
          [_0x5f51d5(0x1e4)]((_0x4e6d79) =>
            _0x4e6d79[_0x5f51d5(0x1c0)](0x10)[_0x5f51d5(0x1c7)](0x2, "0")
          )
          [_0x5f51d5(0x1ca)]("");
      };
    let {
      mining_account: _0x5cc9f8,
      account: _0x5af644,
      account_str: _0x75f7de,
      difficulty: _0x2718d1,
      last_mine_tx: _0x576c7f,
      last_mine_arr: _0x31383a,
    } = _0x100614;
    _0x5af644 = _0x5af644[_0x551334(0x1d0)](0x0, 0x8);
    const _0x379f14 = _0x75f7de[_0x551334(0x1dc)](-0x4) === ".wam";
    let _0x1f041e = ![],
      _0x5e6c47 = 0x0,
      _0x1960fe = 0x0,
      _0x236443,
      _0x4aab8d,
      _0x1fc32e,
      _0x39a6fa;
    const _0x5d0f27 = new Date()[_0x551334(0x1cc)]();
    while (!_0x1f041e) {
      _0x1fc32e = _0x14320d();
      const _0xa87e76 = new Uint8Array(
        _0x5af644[_0x551334(0x1af)] +
          _0x31383a["length"] +
          _0x1fc32e[_0x551334(0x1af)]
      );
      _0xa87e76["set"](_0x5af644),
        _0xa87e76[_0x551334(0x1b5)](_0x31383a, _0x5af644[_0x551334(0x1af)]),
        _0xa87e76[_0x551334(0x1b5)](
          _0x1fc32e,
          _0x5af644["length"] + _0x31383a[_0x551334(0x1af)]
        ),
        (_0x236443 = await crypto[_0x551334(0x1dd)]["digest"](
          _0x551334(0x1b3),
          _0xa87e76[_0x551334(0x1d0)](0x0, 0x18)
        )),
        (_0x4aab8d = _0x1a7c05(_0x236443));
      _0x379f14
        ? (_0x1f041e = _0x4aab8d["substr"](0x0, 0x4) === _0x551334(0x1be))
        : (_0x1f041e = _0x4aab8d["substr"](0x0, 0x6) === "000000");
      _0x1f041e &&
        (_0x379f14
          ? (_0x39a6fa = parseInt(_0x4aab8d[_0x551334(0x1dc)](0x4, 0x1), 0x10))
          : (_0x39a6fa = parseInt(_0x4aab8d[_0x551334(0x1dc)](0x6, 0x1), 0x10)),
        (_0x1f041e &= _0x39a6fa <= _0x2718d1));
      _0x5e6c47++;
      _0x5e6c47 % 0xf4240 === 0x0 &&
        console["log"](_0x551334(0x188) + _0x5e6c47 + _0x551334(0x193));
      !_0x1f041e && (_0x236443 = null);
      if (_0x5e6c47 >= 0xf4240 * 0xa) break;
    }
    const _0x427ec4 = new Date()["getTime"](),
      _0x45b555 = _0x1a7c05(_0x1fc32e);
    console[_0x551334(0x1b6)](
      _0x551334(0x1d3) +
        _0x45b555 +
        "\x20in\x20" +
        _0x5e6c47 +
        "\x20iterations\x20taking\x20" +
        (_0x427ec4 - _0x5d0f27) / 0x3e8 +
        "s"
    );
    const _0x1241d5 = {
      account: _0x75f7de,
      rand_str: _0x45b555,
      hex_digest: _0x4aab8d,
    };
    return this[_0x551334(0x195)](_0x1241d5), _0x1241d5;
  },
  background_mine = async (_0x4e584d) => {
    return new Promise(async (_0xb3ec93, _0x1b7082) => {
      const _0x2f5777 = _0x1860,
        _0x5be8b9 = await getBagDifficulty(_0x4e584d),
        _0x5ba426 = await getLandDifficulty(_0x4e584d),
        _0xf1960 = _0x5be8b9 + _0x5ba426,
        _0x372f03 = await lastMineTx(
          mining_account,
          _0x4e584d,
          wax[_0x2f5777(0x1c3)][_0x2f5777(0x1cd)]
        );
      doWorkWorker({
        mining_account: mining_account,
        account: _0x4e584d,
        difficulty: _0xf1960,
        last_mine_tx: _0x372f03,
      })[_0x2f5777(0x1da)]((_0x4b5edd) => {
        _0xb3ec93(_0x4b5edd);
      });
    });
  };
async function claim(_0x51dfc2, _0x32781b) {
  const _0x3c0ebd = _0x5d351e;
  try {
    console[_0x3c0ebd(0x1b6)](_0x51dfc2 + _0x3c0ebd(0x1db));
    const _0x5e9653 = { miner: _0x51dfc2, nonce: _0x32781b },
      _0x291954 = [
        {
          account: mining_account,
          name: _0x3c0ebd(0x1c4),
          authorization: [{ actor: _0x51dfc2, permission: "active" }],
          data: _0x5e9653,
        },
      ];
    let _0x2f0875 = await wax[_0x3c0ebd(0x1c3)][_0x3c0ebd(0x1a9)](
      { actions: _0x291954 },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    var _0x194486 = new Map();
    if (_0x2f0875 && _0x2f0875[_0x3c0ebd(0x187)])
      return (
        _0x2f0875[_0x3c0ebd(0x187)][_0x3c0ebd(0x182)][0x0]["inline_traces"][
          "forEach"
        ]((_0x1e9379) => {
          const _0x361a63 = _0x3c0ebd;
          if (_0x1e9379["act"][_0x361a63(0x19d)]["quantity"]) {
            var _0x312055 =
              _0x1e9379[_0x361a63(0x183)]["data"][_0x361a63(0x1cf)];
            _0x312055 = _0x312055[_0x361a63(0x1d9)](
              0x0,
              _0x312055[_0x361a63(0x1af)] - 0x4
            );
            var _0x3a2c00 = parseFloat(_0x312055)["toFixed"](0x4);
            _0x194486[_0x361a63(0x1b5)](
              _0x1e9379[_0x361a63(0x183)][_0x361a63(0x19d)]["to"],
              _0x3a2c00[_0x361a63(0x1c0)]() + _0x361a63(0x1c2)
            );
          }
        }),
        console["log"](
          "Received:\x20" + parseFloat(_0x194486[_0x3c0ebd(0x18a)](_0x51dfc2))
        ),
        _0x194486["get"](_0x51dfc2)
      );
    return 0x0;
  } catch (_0x17151b) {
    throw _0x17151b;
  }
}
async function setLand(_0x437131, _0x45c32c) {
  const _0x2e534c = _0x5d351e;
  try {
    console["log"](_0x437131 + _0x2e534c(0x1bf) + _0x45c32c);
    const _0x52b20f = { account: _0x437131, land_id: _0x45c32c },
      _0x8c7ba = [
        {
          account: _0x2e534c(0x1ae),
          name: _0x2e534c(0x1b0),
          authorization: [{ actor: _0x437131, permission: _0x2e534c(0x1b9) }],
          data: _0x52b20f,
        },
      ];
    let _0x420f52 = await wax[_0x2e534c(0x1c3)]["transact"](
      { actions: _0x8c7ba },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    if (_0x420f52 && _0x420f52["processed"]) {
      let _0x200111 =
        _0x420f52["processed"][_0x2e534c(0x182)][0x0][_0x2e534c(0x183)]["data"][
          "land_id"
        ];
      return _0x2e534c(0x1b1) + _0x200111;
    }
    return 0x0;
  } catch (_0x1b90b6) {
    throw _0x1b90b6;
  }
}
async function swap(_0x12d2c9, _0x5b1f5d) {
  const _0x1322c6 = _0x5d351e;
  try {
    console[_0x1322c6(0x1b6)](_0x12d2c9 + _0x1322c6(0x1e0));
    const _0x3da635 = {
        from: _0x12d2c9,
        to: _0x1322c6(0x19a),
        quantity:
          parseFloat(_0x5b1f5d)[_0x1322c6(0x1a0)](0x4) + _0x1322c6(0x180),
        memo: _0x1322c6(0x1a8),
      },
      _0x15a32c = [
        {
          account: _0x1322c6(0x1aa),
          name: _0x1322c6(0x1d5),
          authorization: [{ actor: _0x12d2c9, permission: _0x1322c6(0x1b9) }],
          data: _0x3da635,
        },
      ];
    let _0x11f436 = await wax[_0x1322c6(0x1c3)][_0x1322c6(0x1a9)](
      { actions: _0x15a32c },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    if (_0x11f436 && _0x11f436[_0x1322c6(0x187)]) {
      let _0x4e501b =
        _0x11f436["processed"]["action_traces"][0x0][_0x1322c6(0x1ab)][0x2][
          _0x1322c6(0x183)
        ][_0x1322c6(0x19d)]["quantity"];
      return _0x1322c6(0x1c9) + _0x5b1f5d + _0x1322c6(0x177) + _0x4e501b;
    }
    return 0x0;
  } catch (_0x4cf652) {
    throw _0x4cf652;
  }
}
async function transfer(_0x5a092d, _0x5de404, _0x1450c1, _0xb5c857) {
  const _0x185e8d = _0x5d351e;
  try {
    console[_0x185e8d(0x1b6)](
      _0x5a092d +
        _0x185e8d(0x178) +
        _0x5de404 +
        _0x185e8d(0x1e5) +
        _0x1450c1 +
        _0x185e8d(0x1e2)
    );
    const _0x48ed2c = {
        from: _0x5a092d,
        to: _0x1450c1,
        quantity:
          parseFloat(_0x5de404)[_0x185e8d(0x1a0)](0x8) + _0x185e8d(0x18c),
        memo: _0xb5c857,
      },
      _0x30f7d4 = [
        {
          account: _0x185e8d(0x1b4),
          name: _0x185e8d(0x1d5),
          authorization: [{ actor: _0x5a092d, permission: _0x185e8d(0x1b9) }],
          data: _0x48ed2c,
        },
      ];
    let _0x1740c5 = await wax[_0x185e8d(0x1c3)]["transact"](
      { actions: _0x30f7d4 },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    if (_0x1740c5 && _0x1740c5[_0x185e8d(0x187)])
      return (
        _0x185e8d(0x19f) +
        _0x5de404 +
        _0x185e8d(0x1e7) +
        _0x5a092d +
        _0x185e8d(0x177) +
        _0x1450c1
      );
    return 0x0;
  } catch (_0x27977a) {
    throw _0x27977a;
  }
}
async function claimNFT(_0x807fda, _0x1b6898) {
  const _0x1b53a6 = _0x5d351e;
  try {
    console[_0x1b53a6(0x1b6)](
      "Claiming\x20NFT\x20drop\x20of\x20" + _0x807fda + _0x1b53a6(0x1e2)
    );
    const _0x5f1c0f = { miner: _0x1b6898 },
      _0x2ceaea = [
        {
          account: _0x1b53a6(0x1ae),
          name: _0x1b53a6(0x1e1),
          authorization: [{ actor: _0x807fda, permission: _0x1b53a6(0x1b9) }],
          data: _0x5f1c0f,
        },
      ];
    let _0x5a705b = await wax[_0x1b53a6(0x1c3)][_0x1b53a6(0x1a9)](
      { actions: _0x2ceaea },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    if (_0x5a705b && _0x5a705b[_0x1b53a6(0x187)])
      return "Claim\x20item\x20success\x20pls\x20check\x20your\x20bag";
    return 0x0;
  } catch (_0x4ff287) {
    throw _0x4ff287;
  }
}
async function stake(_0x52d72c, _0x559b51) {
  const _0x2adab7 = _0x5d351e;
  try {
    console[_0x2adab7(0x1b6)](_0x2adab7(0x1d1) + _0x559b51 + _0x2adab7(0x1de));
    const _0xf8adca = {
        from: _0x52d72c,
        receiver: _0x52d72c,
        stake_net_quantity: _0x2adab7(0x1a5),
        stake_cpu_quantity:
          parseFloat(_0x559b51)[_0x2adab7(0x1a0)](0x8) + _0x2adab7(0x1b8),
        transfer: ![],
      },
      _0x238150 = [
        {
          account: _0x2adab7(0x179),
          name: _0x2adab7(0x1ad),
          authorization: [{ actor: _0x52d72c, permission: _0x2adab7(0x1b9) }],
          data: _0xf8adca,
        },
      ];
    let _0x26fb06 = await wax[_0x2adab7(0x1c3)][_0x2adab7(0x1a9)](
      { actions: _0x238150 },
      { blocksBehind: 0x3, expireSeconds: 0x5a }
    );
    if (_0x26fb06 && _0x26fb06["processed"])
      return _0x2adab7(0x1a2) + _0x559b51 + _0x2adab7(0x198);
    return 0x0;
  } catch (_0x3907f4) {
    throw _0x3907f4;
  }
}
function _0x1860(_0x47d218, _0x2cc769) {
  _0x47d218 = _0x47d218 - 0x174;
  let _0xd32aff = _0xd32a[_0x47d218];
  return _0xd32aff;
}
async function self_mine(_0x24ee03) {
  const _0x4ab4cb = _0x5d351e;
  console[_0x4ab4cb(0x1b6)]("Try\x20self\x20mining");
  let _0x41db46 = await background_mine(_0x24ee03);
  try {
    return _0x41db46["rand_str"];
  } catch (_0x4314a4) {
    throw _0x4314a4;
  }
}
const ninja_server_mine = async (_0x3c28e1, _0x589282) => {
    const _0x1a5825 = _0x5d351e,
      _0x3f3bec = [_0x1a5825(0x1a3), "rate", _0x1a5825(0x18d), "limit"];
    let _0x48c15b = _0x1a5825(0x1a1) + _0x3c28e1;
    _0x589282 == !![]
      ? (console[_0x1a5825(0x1b6)](_0x1a5825(0x1d8)),
        (_0x48c15b = _0x1a5825(0x1d6) + _0x3c28e1))
      : (console[_0x1a5825(0x1b6)]("Mining\x20with\x20ninja\x20free\x20server"),
        (_0x48c15b =
          "https://server-mine-b7clrv20.an.gateway.dev/server_mine?wallet=" +
          _0x3c28e1));
    try {
      return await fetch(_0x48c15b)
        [_0x1a5825(0x1da)]((_0x41c711) => {
          const _0x7d2c8f = _0x1a5825;
          if (_0x41c711[_0x7d2c8f(0x1d7)] == 0xc8)
            return _0x41c711[_0x7d2c8f(0x17e)]();
          else {
            if (
              _0x41c711["status"] == 0x192 ||
              _0x41c711[_0x7d2c8f(0x1d7)] == 0xce ||
              _0x3f3bec[_0x7d2c8f(0x1a7)]((_0x499d0c) =>
                _0x41c711[_0x7d2c8f(0x17e)]()[_0x7d2c8f(0x192)](_0x499d0c)
              )
            )
              return _0x7d2c8f(0x1b7);
          }
        })
        [_0x1a5825(0x1da)]((_0x311960) => {
          const _0x322274 = _0x1a5825;
          return _0x311960[_0x322274(0x18e)](/\b[0-9a-f]{16}\b/gi)
            ? _0x311960
            : null;
        });
    } catch (_0x34dd71) {
      throw _0x34dd71;
    }
  },
  getPlayerData = async (_0x5b4d0b) => {
    const _0x7ecbde = _0x5d351e;
    let _0x54f795 = wax[_0x7ecbde(0x1c3)][_0x7ecbde(0x1cd)];
    const _0x354aa0 = await _0x54f795[_0x7ecbde(0x17a)]({
        code: federation_account,
        scope: federation_account,
        table: _0x7ecbde(0x1bd),
        lower_bound: _0x5b4d0b,
        upper_bound: _0x5b4d0b,
      }),
      _0x55c581 = { tag: "", avatar: "" };
    if (_0x354aa0["rows"][_0x7ecbde(0x1af)]) {
      _0x55c581[_0x7ecbde(0x1a6)] = _0x354aa0[_0x7ecbde(0x1c5)][0x0]["tag"];
      if (_0x354aa0[_0x7ecbde(0x1c5)][0x0][_0x7ecbde(0x186)] > 0x0) {
        const _0x40f82b = await aa_api[_0x7ecbde(0x1c1)](
          _0x354aa0["rows"][0x0][_0x7ecbde(0x186)]
        );
        _0x40f82b && (_0x55c581[_0x7ecbde(0x186)] = _0x40f82b);
      }
    }
    return _0x55c581;
  };
