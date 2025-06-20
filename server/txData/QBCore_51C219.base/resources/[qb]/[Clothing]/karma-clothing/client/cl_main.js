var xj = {
  warning: 1,
  log: 2,
  error: 3,
  debug: 4,
};
var __logLevel =
  typeof GetConvar === "function"
    ? GetConvar(GetCurrentResourceName() + "_logLevel", "")
    : "";
var _sv_loglevel =
  typeof GetConvar === "function"
    ? GetConvar("sv_loglevel", "warning")
    : "warning";
_sv_loglevel =
  (__logLevel == null ? undefined : __logLevel.length) > 0
    ? __logLevel
    : _sv_loglevel;
(() => {
  if (!xj[_sv_loglevel]) {
    throw new Error("Invalid log level: " + _sv_loglevel);
  }
})();
function wait(_0x964567) {
  return new Promise((_0x21be9d) => {
    setTimeout(_0x21be9d, _0x964567);
  });
}

var PedPlayerHas
var DebugLogs = false; // If you want to check the debug logs, set this to true of the new update (skins)

function DebugLog(text){
  if (DebugLogs)
  console.log(text)
}

var PlayerIdentifiers= {
  citizenid: 0,
  license: 0
}

onNet("karma-clothing:LoadIdentifiersPlayer", function (identrec) {
  PlayerIdentifiers = identrec
});

async function LoadModelGhost(_0x5896a9) {

  if (/[a-zA-Z]/.test(_0x5896a9)) {
    _0x5896a9 = GetHashKey(_0x5896a9);
  } else {
    _0x5896a9 = parseInt(_0x5896a9);
  }

  RequestModel(_0x5896a9);

  if (HasModelLoaded(_0x5896a9)) {
    return true;
  }

  const _0x3ee27d = await WaitForCondition(
    () => HasModelLoaded(_0x5896a9),
    30000
  );
  return !_0x3ee27d;
}

var LoadModel2 = async _0x1be097 => {
  const _0x43cff6 = typeof _0x1be097 === "number" ? _0x1be097 : parseInt(_0x1be097);
  if (HasModelLoaded(_0x43cff6)) {
    return true;
  }

  let _0x3ee27d;
  _0x3ee27d = LoadModelGhost(_0x1be097);
  if (_0x3ee27d)  {
    return _0x3ee27d;
  }

  RequestModel(_0x43cff6);
  _0x3ee27d = await WaitForCondition(() => HasModelLoaded(_0x43cff6), 30000);
  return !_0x3ee27d;
};

var Aj = () => xj[_sv_loglevel] >= xj.warning;
var Bj = () => xj[_sv_loglevel] >= xj.log;
var Cj = () => xj[_sv_loglevel] >= xj.error;
var Dj = () => _sv_loglevel === "debug";
var Ej = {
  warning: (_0x5a64d8, ..._0x4acee0) => {
    if (!Aj()) {
      return;
    }
    console.log("^3[WARNING] ^7" + _0x5a64d8, ..._0x4acee0, "^0");
  },
  log: (_0x51ce30, ..._0x2bac25) => {
    if (!Bj()) {
      return;
    }
    console.log("^5[karma-clothing] ^7" + _0x51ce30, ..._0x2bac25, "^0");
  },
  debug: (_0x4947a8, ..._0x251a40) => {
    if (!Dj()) {
      return;
    }
    console.log("^2[D] " + _0x4947a8, ..._0x251a40, "^0");
  },
  error: (_0x4579d6, ..._0x5eaf40) => {
    if (!Cj()) {
      return;
    }
    console.log("^1[ERROR] " + _0x4579d6, ..._0x5eaf40, "^0");
  },
};
var Fj = {};
var Gj = {
  MathUtils: () => pointToUtilz,
};
var GhostClamp = (_0x367b0a, _0x73b0c7, _0x449038) => {
  return Math.min(Math.max(_0x367b0a, _0x73b0c7), _0x449038);
};
var ChostGetMapRange = (_0x12e977, _0x4ee517, _0x2d529f) => {
  return (
    _0x4ee517[0] +
    ((_0x2d529f - _0x12e977[0]) * (_0x4ee517[1] - _0x4ee517[0])) /
      (_0x12e977[1] - _0x12e977[0])
  );
};
var GhostGetDistance = (
  [_0x397a09, _0x5bd6e9, _0x295615],
  [_0x4fd844, _0x316f3d, _0x51d566]
) => {
  const [_0x3052e6, _0x1a7ab5, _0x239b7b] = [
    _0x397a09 - _0x4fd844,
    _0x5bd6e9 - _0x316f3d,
    _0x295615 - _0x51d566,
  ];
  return Math.sqrt(
    _0x3052e6 * _0x3052e6 + _0x1a7ab5 * _0x1a7ab5 + _0x239b7b * _0x239b7b
  );
};
var GhostGetRandomNum = (_0x99c054, _0x24bba2) => {
  if (_0x24bba2) {
    return Math.floor(Math.random() * (_0x24bba2 - _0x99c054 + 1) + _0x99c054);
  } else {
    return Math.floor(Math.random() * _0x99c054);
  }
};
var GhostParseVector3 = (_0x56d70a, _0x80b13d, _0x550741) => {
  if (_0x56d70a instanceof Kj) {
    return _0x56d70a;
  } else if (_0x56d70a instanceof Array) {
    return new Kj(_0x56d70a);
  } else if (typeof _0x56d70a === "object") {
    return new Kj(_0x56d70a);
  }
  if (
    typeof _0x56d70a !== "number" ||
    typeof _0x80b13d !== "number" ||
    typeof _0x550741 !== "number"
  ) {
    throw new Error("Invalid vector coordinates");
  }
  return new Kj(_0x56d70a, _0x80b13d, _0x550741);
};
var SomeMoreUtilz = {
  getMapRange: ChostGetMapRange,
  getDistance: GhostGetDistance,
  getRandomNumber: GhostGetRandomNum,
  parseVector3: GhostParseVector3,
};
var pointToUtilz = SomeMoreUtilz;
function _cache(_0x5e30f3, _0xc93aff) {
  const _0x41636a = "_";
  const _0x2840e8 = _cacheableMap((_0x19698a, _0x250671, ..._0x3fb5d4) => {
    return _0x5e30f3(_0x19698a, ..._0x3fb5d4);
  }, _0xc93aff);
  return {
    get: function (..._0x1f2ab0) {
      return _0x2840e8.get(_0x41636a, ..._0x1f2ab0);
    },
    reset: function () {
      _0x2840e8.reset(_0x41636a);
    },
  };
}
function _cacheableMap(_0xc7992a, _0x4a4a60) {
  const _0x23eea5 = _0x4a4a60.timeToLive || 60000;
  const _0x5c0c2b = {};
  async function _0x3a2b2a(_0xcf7bcd, ..._0x423d69) {
    let _0x4913e9 = _0x5c0c2b[_0xcf7bcd];
    if (!_0x4913e9) {
      _0x4913e9 = {
        value: null,
        lastUpdated: 0,
      };
      _0x5c0c2b[_0xcf7bcd] = _0x4913e9;
    }
    const _0x1f698b = Date.now();
    if (
      _0x4913e9.lastUpdated === 0 ||
      _0x1f698b - _0x4913e9.lastUpdated > _0x23eea5
    ) {
      const [_0x3c64dd, _0x2b19ac] = await _0xc7992a(
        _0x4913e9,
        _0xcf7bcd,
        ..._0x423d69
      );
      if (_0x3c64dd) {
        _0x4913e9.lastUpdated = _0x1f698b;
        _0x4913e9.value = _0x2b19ac;
      }
      return _0x2b19ac;
    }
    return await new Promise((_0x32db5a) =>
      setTimeout(() => _0x32db5a(_0x4913e9.value), 0)
    );
  }
  return {
    get: async function (_0x45836f, ..._0x455884) {
      return await _0x3a2b2a(_0x45836f, ..._0x455884);
    },
    reset: function (_0x372801) {
      const _0x61ca32 = _0x5c0c2b[_0x372801];
      if (_0x61ca32) {
        _0x61ca32.lastUpdated = 0;
      }
    },
  };
}
function _getStringHash(_0x49187e) {
  return B(_0x49187e, B.URL);
}
function _waitForCondition(_0xd7bed4, _0x3b57a8) {
  return new Promise((_0x41aadb, _0x442e43) => {
    const _0x5f5bf7 = Date.now();
    const _0x3256f7 = setInterval(() => {
      const _0x3be402 = Date.now() - _0x5f5bf7 > _0x3b57a8;
      if (_0xd7bed4() || _0x3be402) {
        clearInterval(_0x3256f7);
        return _0x41aadb(_0x3be402);
      }
    }, 1);
  });
}
function _Wait(_0x1cb247) {
  return new Promise((_0x4220bc) => setTimeout(() => _0x4220bc(), _0x1cb247));
}
function _waitForNextFrame() {
  return _Wait(0);
}
var DevUtilz = {
  cache: _cache,
  cacheableMap: _cacheableMap,
  waitForCondition: _waitForCondition,
  getStringHash: _getStringHash,
  wait: _Wait,
  waitForNextFrame: _waitForNextFrame,
  ...Fj,
};
var KarmaDevelopmentUtil = DevUtilz;
var _j;
var ak;
class Cache {
  constructor(_0x5c81d7 = 5) {
    this._ttl = _0x5c81d7;
    this._cache = new Map();
  }
  setTTL(_0x3b94be) {
    this._ttl = _0x3b94be;
  }
  set(_0x15d0ad, _0x388390, _0x58a931 = null) {
    this._cache.set(_0x15d0ad, {
      value: _0x388390,
      expiration:
        Date.now() + (_0x58a931 !== null ? _0x58a931 : this._ttl) * 1000,
    });
    return this;
  }
  get(_0x3373ba, _0x105197 = false) {
    const _0x35660e = this._cache.get(_0x3373ba);
    const _0x1d7ec8 = _0x35660e
      ? _0x105197
        ? true
        : _0x35660e.expiration > Date.now()
      : false;
    if (!_0x35660e || !_0x1d7ec8) {
      if (_0x35660e) {
        this._cache.delete(_0x3373ba);
      }
      return;
    }
    return _0x35660e.value;
  }
  has(_0x1758f4, _0x3a0fcb = false) {
    const _0x543086 = this._cache.get(_0x1758f4);
    const _0x1c1fe4 = _0x543086
      ? _0x3a0fcb
        ? true
        : _0x543086.expiration > Date.now()
      : false;
    if (_0x543086 && !_0x1c1fe4) {
      this._cache.delete(_0x1758f4);
    }
    return _0x1c1fe4;
  }
  delete(_0x3c7827) {
    return this._cache.delete(_0x3c7827);
  }
  clear() {
    this._cache.clear();
  }
  values(_0x28deac = false) {
    const _0x461f1e = [];
    const _0x377f78 = Date.now();
    for (const _0x353468 of this._cache.values()) {
      if (_0x28deac || _0x353468.expiration > _0x377f78) {
        _0x461f1e.push(_0x353468.value);
      }
    }
    return _0x461f1e;
  }
  keys(_0x5395b8 = false) {
    const _0x1ed91e = [];
    const _0x5ed8af = Date.now();
    for (const [_0x3b4a91, _0x233ba0] of this._cache.entries()) {
      if (_0x5395b8 || _0x233ba0.expiration > _0x5ed8af) {
        _0x1ed91e.push(_0x3b4a91);
      }
    }
    return _0x1ed91e;
  }
  entries(_0x474b80 = false) {
    const _0x55563a = [];
    const _0x244258 = Date.now();
    for (const [_0x5de948, _0x41442b] of this._cache.entries()) {
      if (_0x474b80 || _0x41442b.expiration > _0x244258) {
        _0x55563a.push([_0x5de948, _0x41442b.value]);
      }
    }
    return _0x55563a;
  }
}
_j = new WeakMap();
ak = new WeakMap();
var ck = ((_0x148225) => {
  _0x148225[(_0x148225.hat = 0)] = "hat";
  _0x148225[(_0x148225.mask = 1)] = "mask";
  _0x148225[(_0x148225.glasses = 2)] = "glasses";
  _0x148225[(_0x148225.armor = 3)] = "armor";
  _0x148225[(_0x148225.shoes = 4)] = "shoes";
  _0x148225[(_0x148225.idcard = 5)] = "idcard";
  _0x148225[(_0x148225.mobilephone = 6)] = "mobilephone";
  _0x148225[(_0x148225.keyring = 7)] = "keyring";
  _0x148225[(_0x148225.bankcard = 8)] = "bankcard";
  _0x148225[(_0x148225.backpack = 9)] = "backpack";
  return _0x148225;
})(ck || {});
var dk = {};
var ek = (_0x493261, _0xa2a263) =>
  "__cfx_export_" + _0x493261 + "_" + _0xa2a263;
var fk = new Proxy(
  (_0xc25e9b, _0x45ce8a) => {
    const _0x173ff4 = (_0x2992d4, ..._0x5917a5) => {
      const _0x4357ca = _0x45ce8a(..._0x5917a5);
      if (_0x4357ca instanceof Promise) {
        _0x4357ca.then((_0x5f56c8) => _0x2992d4(_0x5f56c8));
      } else {
        _0x2992d4(_0x4357ca);
      }
    };
    const _0xebdaa2 = GetCurrentResourceName();
    if (_0xebdaa2 == undefined) {
      throw new Error(
        "Failed to get resource name, are you sure you are using this in a fivem resource?"
      );
    }
    on(ek(_0xebdaa2, _0xc25e9b), (_0x4d8606) => {
      _0x4d8606(_0x173ff4);
    });
  },
  {
    apply: (_0x422b35, _0xb0954e, _0x1b4a33) => {
      _0x422b35(..._0x1b4a33);
    },
    get: (_0x3c2891, _0x2143af) => {
      if (dk[_0x2143af] == undefined) {
        dk[_0x2143af] = {};
      }
      return new Proxy(
        {},
        {
          get: (_0x5d2fcf, _0x5e2d91) => {
            const _0x486b3e = _0x5e2d91 + "_async";
            return (..._0x104459) => {
              return new Promise(async (_0x3c50e4, _0xa97abe) => {
                const _0x250456 = await KarmaDevelopmentUtil.waitForCondition(
                  () => GetResourceState(_0x2143af) === "started",
                  60000
                );
                if (_0x250456) {
                  return _0xa97abe("Resource " + _0x2143af + " is not running");
                }
                if (dk[_0x2143af][_0x486b3e] === undefined) {
                  emit(ek(_0x2143af, _0x5e2d91), (_0x2f5252) => {
                    dk[_0x2143af][_0x486b3e] = _0x2f5252;
                  });
                  const _0x4a2ed7 = await KarmaDevelopmentUtil.waitForCondition(
                    () => dk[_0x2143af][_0x486b3e] !== undefined,
                    1000
                  );
                  if (_0x4a2ed7) {
                    return _0xa97abe(
                      "Failed to get export " +
                        _0x5e2d91 +
                        " from resource " +
                        _0x2143af
                    );
                  }
                }
                try {
                  dk[_0x2143af][_0x486b3e](_0x3c50e4, ..._0x104459);
                } catch (_0x445c9e) {
                  _0xa97abe(_0x445c9e);
                }
              });
            };
          },
        }
      );
    },
  }
);
var gk = new Proxy(
  (_0x59b02d, _0x24253d) => {
    const _0x36f1b7 = GetCurrentResourceName();
    if (_0x36f1b7 == undefined) {
      throw new Error(
        "Failed to get resource name, are you sure you are using this in a fivem resource?"
      );
    } else if (typeof _0x24253d !== "function") {
      throw new Error("Callback is not a function");
    } else if (typeof _0x59b02d !== "string") {
      throw new Error("Export name must be a string");
    }
    on(ek(_0x36f1b7, _0x59b02d), (_0xa77ac2) => {
      _0xa77ac2(_0x24253d);
    });
  },
  {
    apply: (_0x5249b1, _0x370f8a, _0x9c6327) => {
      _0x5249b1(..._0x9c6327);
    },
    get: (_0x414164, _0x29651f) => {
      if (dk[_0x29651f] == undefined) {
        dk[_0x29651f] = {};
      }
      return new Proxy(
        {},
        {
          get: (_0xa38e10, _0x152785) => {
            const _0x4024d9 = _0x152785 + "_sync";
            if (dk[_0x29651f][_0x4024d9] === undefined) {
              emit(ek(_0x29651f, _0x152785), (_0xf231c7) => {
                dk[_0x29651f][_0x4024d9] = _0xf231c7;
              });
              if (dk[_0x29651f][_0x4024d9] === undefined) {
                if (GetResourceState(_0x29651f) !== "started") {
                  throw new Error("Resource " + _0x29651f + " is not running");
                } else {
                  throw new Error(
                    "No such export " + _0x152785 + " in resource " + _0x29651f
                  );
                }
              }
            }
            return (..._0x9d16b7) => {
              try {
                return dk[_0x29651f][_0x4024d9](..._0x9d16b7);
              } catch (_0x2d4a3f) {
                throw new Error(
                  "An error occurred while calling export " +
                    _0x152785 +
                    " of resource " +
                    _0x29651f +
                    " - see above for details"
                );
              }
            };
          },
        }
      );
    },
  }
);
on("onResourceStop", (_0x249e44) => (dk[_0x249e44] = undefined));
var hk = {
  Async: fk,
  Sync: gk,
};
var ik = hk;
var Wk = (_0x14d926 = 128) => {
  return Vk.lib.WordArray.random(_0x14d926 / 8).toString();
};
var Xk = (_0x5b1647, _0x1d4d2c) => {
  if (typeof _0x5b1647 !== "string" || typeof _0x1d4d2c !== "string") {
    return "";
  }
  return Vk.AES.encrypt(_0x5b1647, _0x1d4d2c).toString();
};
var Yk = (_0xb0e13, _0x4c7804) => {
  if (typeof _0xb0e13 !== "string" || typeof _0x4c7804 !== "string") {
    return "";
  }
  return Vk.AES.decrypt(_0xb0e13, _0x4c7804).toString(Vk.enc.Utf8);
};
var Zk = (_0x189e38) => {
  if (typeof _0x189e38 !== "string") {
    return "";
  }
  return Vk.enc.Base64.stringify(Vk.enc.Utf8.parse(_0x189e38));
};
var $k = (_0x3a4028, _0x1dff07) => {
  return Zk((0, Vk.HmacMD5)(_0x3a4028, _0x1dff07).toString());
};
var _k = {};
var al = (_0x2a69ef, _0x27c291 = Wk()) => {
  if (_k[_0x2a69ef] === undefined) {
    _k[_0x2a69ef] = $k(_0x2a69ef, _0x27c291);
  }
  return _k[_0x2a69ef];
};
var bl = (_0x5e125d, _0x368896 = Wk()) => {
  try {
    return Xk(JSON.stringify(_0x5e125d), _0x368896);
  } catch (_0x59913c) {
    Ej.error("Failed to encode payload");
  }
};
var cl = (_0x4d2a74, _0x174a70 = Wk()) => {
  try {
    return JSON.parse(Yk(_0x4d2a74, _0x174a70));
  } catch (_0x3be5b3) {
    Ej.error("Failed to decode payload");
  }
};
var Cl = {
  HasItem: async (_0x305be2, _0x587a89) => {
    return await exports.inventory.HasItem(_0x305be2, _0x587a89);
  },
  GetItemStacks: async (_0x8e840, _0x2755d0) => {
    return await exports.inventory.GetItemStacks(_0x8e840, _0x2755d0);
  },
  GetAllItemStacks: async (_0x5a3dc9) => {
    return await exports.inventory.GetAllItemStacks(_0x5a3dc9);
  },
  GetItemList: async () => {
    return await exports.inventory.GetItemList();
  },
  GetPlayerInventories: async () => {
    return await exports.inventory.GetPlayerInventories();
  },
  GetWeaponsList: () => {
    return exports.inventory.GetWeaponsList();
  },
  GetWeapon: (_0x34d1da) => {
    return exports.inventory.GetWeapon(_0x34d1da);
  },
  OpenInventory: (_0x47b8bd, _0x1a7d87) => {
    exports.inventory.OpenInventory(_0x47b8bd, _0x1a7d87);
  },
  UseBodySlot: (_0x4c0f29) => {
    return ik.Async.inventory.UseBodySlot(_0x4c0f29);
  },
  SetBodySlotDisabled: (_0x52a10d, _0x2fc75b, _0x55fa0d) => {
    exports.inventory.SetBodySlotDisabled(_0x52a10d, _0x2fc75b, _0x55fa0d);
  },
  IsBodySlotDisabled: (_0x2b054d, _0x4c049f) => {
    return exports.inventory.IsBodySlotDisabled(_0x2b054d, _0x4c049f);
  },
};
var Dl = {};
var El = {
  Thread: () => Fl,
};
var Fl = class {
  constructor(_0x9a3a71, _0x2299c6, _0x133f23 = "interval") {
    this.callback = _0x9a3a71;
    this.delay = _0x2299c6;
    this.mode = _0x133f23;
    this.scheduled = {};
    this.tick = 0;
    this.data = {};
    this.active = false;
    this.aborted = false;
    this.hooks = new Map([
      ["active", []],
      ["preStop", []],
      ["preStart", []],
      ["afterStop", []],
      ["afterStart", []],
      ["stopAborted", []],
      ["startAborted", []],
    ]);
  }
  get isActive() {
    return this.active;
  }
  async start() {
    if (this.active) {
      return;
    }
    this.aborted = false;
    this.scheduled = {};
    const _0x28a8dc = this.hooks.get("preStart") ?? [];
    try {
      for (const _0x2fc53c of _0x28a8dc) {
        if (!this.aborted) {
          await _0x2fc53c.call(this);
        }
      }
    } catch (_0x154d04) {
      this.aborted = true;
      console.log("Error while calling pre-start hook", _0x154d04.message);
    }
    if (this.aborted) {
      try {
        const _0x375a21 = this.hooks.get("startAborted") ?? [];
        for (const _0x3e7fdd of _0x375a21) {
          await _0x3e7fdd.call(this);
        }
      } catch (_0x44a74f) {
        console.log(
          "Error while calling start-aborted hook",
          _0x44a74f.message
        );
      }
      return;
    }
    this.active = true;
    const _0x218ee8 = this.hooks.get("active") ?? [];
    switch (this.mode) {
      case "tick": {
        this.threadId = setTick(async () => {
          this.tick += 1;
          try {
            await this.callback.call(this);
            for (const _0x2715c2 of _0x218ee8) {
              await _0x2715c2.call(this);
            }
          } catch (_0x4c7004) {
            console.log("Error while calling active hook", _0x4c7004.message);
          }
          if (this.delay > 0) {
            await new Promise((_0x48d64f) => setTimeout(_0x48d64f, this.delay));
          }
        });
        break;
      }
      case "interval": {
        this.threadId = setInterval(async () => {
          this.tick += 1;
          try {
            await this.callback.call(this);
            for (const _0x2b8bae of _0x218ee8) {
              await _0x2b8bae.call(this);
            }
          } catch (_0x4abb8c) {
            console.log("Error while calling active hook", _0x4abb8c.message);
          }
        }, this.delay);
        break;
      }
      case "timeout": {
        const _0x2f40fe = () => {
          if (this.active) {
            this.threadId = setTimeout(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x55276c of _0x218ee8) {
                  await _0x55276c.call(this);
                }
              } catch (_0x32f55e) {
                console.log(
                  "Error while calling active hook",
                  _0x32f55e.message
                );
              }
              return _0x2f40fe();
            }, this.delay);
          }
        };
        _0x2f40fe();
        break;
      }
    }
    const _0x2b5397 = this.hooks.get("afterStart") ?? [];
    try {
      for (const _0x54cf92 of _0x2b5397) {
        await _0x54cf92.call(this);
      }
    } catch (_0x3dce20) {
      console.log("Error while calling after-start hook", _0x3dce20.message);
    }
  }
  async stop() {
    if (!this.active) {
      return;
    }
    const _0x53cce8 = this.hooks.get("preStop") ?? [];
    try {
      for (const _0x357ce2 of _0x53cce8) {
        if (!this.aborted) {
          await _0x357ce2.call(this);
        }
      }
    } catch (_0x103ebc) {
      this.aborted = true;
      console.log("Error while calling pre-stop hook", _0x103ebc.message);
    }
    this.active = false;
    switch (this.mode) {
      case "tick": {
        clearTick(this.threadId);
        break;
      }
      case "interval": {
        clearInterval(this.threadId);
        break;
      }
      case "timeout": {
        clearTimeout(this.threadId);
        break;
      }
    }
    if (this.aborted) {
      try {
        const _0x240cfd = this.hooks.get("stopAborted") ?? [];
        for (const _0x11547b of _0x240cfd) {
          await _0x11547b.call(this);
        }
      } catch (_0x2549eb) {
        console.log("Error while calling stop-aborted hook", _0x2549eb.message);
      }
      return;
    }
    const _0x4a81e7 = this.hooks.get("afterStop") ?? [];
    try {
      for (const _0x5cba61 of _0x4a81e7) {
        await _0x5cba61.call(this);
      }
    } catch (_0x54852f) {
      console.log("Error while calling after-stop hook", _0x54852f.message);
    }
  }
  abort() {
    this.aborted = true;
  }
  addHook(_0x365ed7, _0x134f3a) {
    var _0x3712b6;
    if ((_0x3712b6 = this.hooks.get(_0x365ed7)) == null) {
      undefined;
    } else {
      _0x3712b6.push(_0x134f3a);
    }
  }
  setNextTick(_0x51abea, _0x3d3d34) {
    this.scheduled[_0x51abea] = this.tick + _0x3d3d34;
  }
  canTick(_0x5c9da3) {
    return (
      this.scheduled[_0x5c9da3] === undefined ||
      this.tick >= this.scheduled[_0x5c9da3]
    );
  }
};
var Gl = {};
var Hl = {
  GetEntityStateValue: () => Kl,
  GetPlayerStateValue: () => Nl,
  RegisterStatebagChangeHandler: () => Pl,
  SetEntityStateValue: () => Ll,
  SetPlayerStateValue: () => Ol,
};
var Il = new Cache(5000);
function Jl(_0x185ce0) {
  let _0x331cf8 = Il.get("ent-" + _0x185ce0 + "}");
  if (_0x331cf8) {
    return _0x331cf8;
  }
  _0x331cf8 = Entity(_0x185ce0);
  Il.set("ent-" + _0x185ce0 + "}", _0x331cf8);
  return _0x331cf8;
}
function Kl(_0x38b560, _0x411d12) {
  const _0x3352ba = Jl(_0x38b560);
  return _0x3352ba.state[_0x411d12];
}
function Ll(_0x538f1d, _0x3deec9, _0x5868f1, _0x2f6230 = false) {
  const _0x120ffd = Jl(_0x538f1d);
  _0x120ffd.state.set(_0x3deec9, _0x5868f1, _0x2f6230);
}
function Ml(_0xab8b8f) {
  let _0x49c5b2 = Il.get("ply-" + _0xab8b8f + "}");
  if (_0x49c5b2) {
    return _0x49c5b2;
  }
  _0x49c5b2 = Player(_0xab8b8f);
  Il.set("ply-" + _0xab8b8f + "}", _0x49c5b2);
  return _0x49c5b2;
}
function Nl(_0x161ee3, _0x48f371) {
  const _0x34f818 = Ml(_0x161ee3);
  return _0x34f818.state[_0x48f371];
}
function Ol(_0x5b305d, _0x3cd927, _0x3b68ea, _0x1675e5 = false) {
  const _0x321720 = Ml(_0x5b305d);
  _0x321720.state.set(_0x3cd927, _0x3b68ea, _0x1675e5);
}
function Pl(_0xe38d4c, _0x28289f, _0xfdc126, _0x4cb1a1) {
  return AddStateBagChangeHandler(
    _0xe38d4c,
    null,
    async function (_0x274230, _0x596987, _0x141421, _0x5edc8e, _0x335587) {
      if (_0xfdc126 && !_0x335587) {
        return;
      }
      const _0x28c606 = _0x274230.startsWith("player");
      const _0x53b0ee = parseInt(_0x274230.substring(7));
      const _0x383b70 = _0x28c606
        ? GetPlayerFromStateBagName(_0x274230)
        : GetEntityFromStateBagName(_0x274230);
      if (!_0x383b70) {
        return;
      }
      const _0x5b44eb = _0x28c606
        ? NetworkGetPlayerIndexFromPed(_0x383b70) === PlayerId()
        : NetworkGetEntityOwner(_0x383b70) === PlayerId();
      if (_0x28289f && !_0x5b44eb) {
        return;
      }
      _0x4cb1a1(_0x53b0ee, _0x383b70, _0x141421);
    }
  );
}
var Ql = {};
var Rl = {
  GetFuelLevel: () => Zl,
  GetIdentifier: () => Wl,
  GetMetadata: () => Vl,
  HasKey: () => Ul,
  IsVinScratched: () => Xl,
  SwapSeat: () => Yl,
  TurnOffEngine: () => Tl,
  TurnOnEngine: () => Sl,
};
function Sl(_0x259b55) {
  exports["np-vehicles"].TurnOnEngine(_0x259b55);
}
function Tl(_0x508da3) {
  exports["np-vehicles"].TurnOffEngine(_0x508da3);
}
function Ul(_0x275698) {
  return exports["np-vehicles"].HasVehicleKey(_0x275698);
}
function Vl(_0x12c89c, _0x587d87) {
  const _0x4a293c = Kl(_0x12c89c, "data");
  if (_0x587d87) {
    if (_0x4a293c == null) {
      return undefined;
    } else {
      return _0x4a293c[_0x587d87];
    }
  } else {
    return _0x4a293c;
  }
}
function Wl(_0x4d3a0c) {
  return Kl(_0x4d3a0c, "vin");
}
function Xl(_0x5227b9) {
  return Kl(_0x5227b9, "vinScratched");
}
function Yl(_0x35940e, _0x2cb1a4) {
  exports["np-vehicles"].SwapVehicleSeat(_0x35940e, _0x2cb1a4);
}
function Zl(_0x161035) {
  return Vl(_0x161035, "fuel") ?? 0;
}
var _l = async (_0x53de63) => {
  if (HasAnimDictLoaded(_0x53de63)) {
    return true;
  }
  RequestAnimDict(_0x53de63);
  const _0x3408f4 = await KarmaDevelopmentUtil.waitForCondition(
    () => HasAnimDictLoaded(_0x53de63),
    3000
  );
  return !_0x3408f4;
};
var am = async (_0x2833fe) => {
  if (HasClipSetLoaded(_0x2833fe)) {
    return true;
  }
  RequestClipSet(_0x2833fe);
  const _0x323629 = await KarmaDevelopmentUtil.waitForCondition(
    () => HasClipSetLoaded(_0x2833fe),
    3000
  );
  return !_0x323629;
};
var bm = async (_0x390193) => {
  if (HasStreamedTextureDictLoaded(_0x390193)) {
    return true;
  }
  RequestStreamedTextureDict(_0x390193, true);
  const _0x19b966 = await KarmaDevelopmentUtil.waitForCondition(
    () => HasStreamedTextureDictLoaded(_0x390193),
    3000
  );
  return !_0x19b966;
};
var cm = async (_0x26e939, _0x12bae0, _0x5d5017) => {
  const _0x4a936d =
    typeof _0x26e939 === "number" ? _0x26e939 : GetHashKey(_0x26e939);
  if (HasWeaponAssetLoaded(_0x4a936d)) {
    return true;
  }
  RequestWeaponAsset(_0x4a936d, _0x12bae0, _0x5d5017);
  const _0xd3840b = await KarmaDevelopmentUtil.waitForCondition(
    () => HasWeaponAssetLoaded(_0x4a936d),
    3000
  );
  return !_0xd3840b;
};
var dm = async (_0x4f07c0) => {
  if (HasNamedPtfxAssetLoaded(_0x4f07c0)) {
    return true;
  }
  RequestNamedPtfxAsset(_0x4f07c0);
  const _0x3f4ceb = await KarmaDevelopmentUtil.waitForCondition(
    () => HasNamedPtfxAssetLoaded(_0x4f07c0),
    3000
  );
  return !_0x3f4ceb;
};
var FiveMUtil = {
  loadModel: LoadModel2,
  loadTexture: bm,
  loadAnim: _l,
  loadClipSet: am,
  loadWeaponAsset: cm,
  loadNamedPtfxAsset: dm,
};
var FiveMUtil = FiveMUtil;
var gm = (_0x5afe1b, ..._0x5c1ab4) => {
  switch (_0x5afe1b) {
    case "coord": {
      const [_0x230eeb, _0x5643ab, _0x53605a] = _0x5c1ab4;
      return AddBlipForCoord(_0x230eeb, _0x5643ab, _0x53605a);
    }
    case "area": {
      const [_0x3659fd, _0x4a08e2, _0x4c5ca8, _0x4af839, _0x5a98c3] = _0x5c1ab4;
      return AddBlipForArea(
        _0x3659fd,
        _0x4a08e2,
        _0x4c5ca8,
        _0x4af839,
        _0x5a98c3
      );
    }
    case "radius": {
      const [_0x30875a, _0x1de7d2, _0x372839, _0x5cef60] = _0x5c1ab4;
      return AddBlipForRadius(_0x30875a, _0x1de7d2, _0x372839, _0x5cef60);
    }
    case "pickup": {
      const [_0x189530] = _0x5c1ab4;
      return AddBlipForPickup(_0x189530);
    }
    case "entity": {
      const [_0x143efc] = _0x5c1ab4;
      return AddBlipForEntity(_0x143efc);
    }
    default: {
      console.error(new Error("Invalid Blip Type"));
      return 0;
    }
  }
};
var hm = (
  _0x7de782,
  _0x355ca4,
  _0x5d2069,
  _0x39b1ca,
  _0x33caa0,
  _0x53b623,
  _0x223767,
  _0x48f643
) => {
  if (typeof _0x5d2069 === "number") {
    SetBlipSprite(_0x7de782, _0x5d2069);
  }
  if (typeof _0x39b1ca === "number") {
    SetBlipColour(_0x7de782, _0x39b1ca);
  }
  if (typeof _0x33caa0 === "number") {
    SetBlipAlpha(_0x7de782, _0x33caa0);
  }
  if (typeof _0x53b623 === "number") {
    SetBlipScale(_0x7de782, _0x53b623);
  }
  if (typeof _0x223767 === "boolean") {
    SetBlipRoute(_0x7de782, _0x223767);
  }
  if (typeof _0x48f643 === "boolean") {
    SetBlipAsShortRange(_0x7de782, _0x48f643);
  }
  if (typeof _0x355ca4 === "string") {
    BeginTextCommandSetBlipName("STRING");
    AddTextComponentString(_0x355ca4);
    EndTextCommandSetBlipName(_0x7de782);
  }
};
var im = {
  createBlip: gm,
  applyBlipSettings: hm,
};
var jm = im;
var km = new Set();
var lm = new Map();
var mm = new Set();
var currentResourceName = GetCurrentResourceName();
on("karma-polyzone:enter", (_0x314a7a, _0x207281) => {
  km.add(_0x314a7a);
  if (_0x207281 == null ? undefined : _0x207281.id) {
    km.add(_0x314a7a + "-" + _0x207281.id);
  }
  if (mm.has(_0x314a7a)) {
    emitNet(_0x314a7a + ":enter", _0x207281);
  }
  const _0x3ec838 = lm.get(_0x314a7a + "-enter");
  if (_0x3ec838 === undefined) {
    return;
  }
  for (const _0x7abeca of _0x3ec838) {
    try {
      _0x7abeca(_0x207281);
    } catch (_0x185d34) {
      console.log(_0x185d34);
    }
  }
});
on("karma-polyzone:exit", (_0x2a0066, _0x447549) => {
  km.delete(_0x2a0066);
  if (_0x447549 == null ? undefined : _0x447549.id) {
    km.delete(_0x2a0066 + "-" + _0x447549.id);
  }
  if (mm.has(_0x2a0066)) {
    emitNet(_0x2a0066 + ":exit", _0x447549);
  }
  const _0x215060 = lm.get(_0x2a0066 + "-exit");
  if (_0x215060 === undefined) {
    return;
  }
  for (const _0x43d9dc of _0x215060) {
    try {
      _0x43d9dc(_0x447549);
    } catch (_0x15d381) {
      console.log(_0x15d381);
    }
  }
});
var om = (_0xe3fce5, _0x65603e) => {
  return km.has(_0x65603e ? _0xe3fce5 + "-" + _0x65603e : _0xe3fce5);
};
var pm = (_0x41ebc8, _0x4862fd) => {
  const _0x1ebbd7 = _0x41ebc8 + "-enter";
  const _0x3a3810 = lm.get(_0x1ebbd7) ?? [];
  if (!lm.has(_0x1ebbd7)) {
    lm.set(_0x1ebbd7, _0x3a3810);
  }
  _0x3a3810.push(_0x4862fd);
};
var qm = (_0x7afa6c, _0x1c7e85) => {
  const _0x1adbb6 = _0x7afa6c + "-exit";
  const _0x5f3729 = lm.get(_0x1adbb6) ?? [];
  if (!lm.has(_0x1adbb6)) {
    lm.set(_0x1adbb6, _0x5f3729);
  }
  _0x5f3729.push(_0x1c7e85);
};
var rm = (_0x1889bc, _0x1e6943, _0x4229fc, _0x10125b, _0x57242f = {}) => {
  var _0xe31675 = {
    ..._0x10125b,
  };
  _0xe31675.data = _0x57242f;
  _0xe31675.id = _0x1889bc;
  const _0x3ae6c4 = _0xe31675;
  _0x3ae6c4.data.id = _0x1889bc;
  exports["karma-polyzone"].AddPolyZone(_0x1e6943, _0x4229fc, _0x3ae6c4);
};
var sm = (
  _0x2200c8,
  _0x3e631e,
  _0x4cf22d,
  _0x20ac8d,
  _0x1faef3,
  _0x30ab9d,
  _0x1a9824 = {}
) => {
  var _0x13ef99 = {
    ..._0x30ab9d,
  };
  _0x13ef99.data = _0x1a9824;
  _0x13ef99.id = _0x2200c8;
  const _0x531b6b = _0x13ef99;
  _0x531b6b.data.id = _0x2200c8;
  exports["karma-polyzone"].AddBoxZone(
    _0x3e631e,
    _0x4cf22d,
    _0x20ac8d,
    _0x1faef3,
    _0x531b6b
  );
};
var tm = (
  _0x3fe68d,
  _0xeb66bf,
  _0x2d45bf,
  _0x23bb9c,
  _0x2c41b8,
  _0x1c56f7,
  _0x3df4d8 = {}
) => {
  var _0xaba25a = {
    ..._0x1c56f7,
  };
  _0xaba25a.data = _0x3df4d8;
  _0xaba25a.id = _0x3fe68d;
  const _0x3683dc = _0xaba25a;
  _0x3683dc.data.id = _0x3fe68d;
  exports["karma-polytarget"].AddBoxZone(
    _0xeb66bf,
    _0x2d45bf,
    _0x23bb9c,
    _0x2c41b8,
    _0x3683dc
  );
};
var um = (
  _0x1b999d,
  _0x4c59e6,
  _0x11c226,
  _0x3bb25d,
  _0x38d672,
  _0x21979c = {}
) => {
  var _0x577929 = {
    ..._0x38d672,
  };
  _0x577929.data = _0x21979c;
  _0x577929.id = _0x1b999d;
  const _0x3f84bb = _0x577929;
  _0x3f84bb.data.id = _0x1b999d;
  exports["karma-polyzone"].AddCircleZone(
    _0x4c59e6,
    _0x11c226,
    _0x3bb25d,
    _0x3f84bb
  );
};
var vm = (
  _0x5eb710,
  _0xcdcbe2,
  _0x4d9259,
  _0x40bd0f,
  _0x5198c2,
  _0x5ed337 = {}
) => {
  var _0x436819 = {
    ..._0x5198c2,
  };
  _0x436819.data = _0x5ed337;
  _0x436819.id = _0x5eb710;
  const _0x48086c = _0x436819;
  _0x48086c.data.id = _0x5eb710;
  exports["karma-polytarget"].AddCircleZone(
    _0xcdcbe2,
    _0x4d9259,
    _0x40bd0f,
    _0x48086c
  );
};
var wm = (_0x18c379, _0x3fa04c, _0x279f82, _0x20eaad, _0x5c23e7 = {}) => {
  var _0x5ec007 = {
    ..._0x20eaad,
  };
  _0x5ec007.data = _0x5c23e7;
  const _0x3deffc = _0x5ec007;
  _0x3deffc.data.id = _0x18c379;
  exports["karma-polyzone"].AddEntityZone(_0x3fa04c, _0x279f82, _0x3deffc);
};
var xm = (_0x2c1d82) => {
  switch (_0x2c1d82.type) {
    case "circle": {
      const {
        type: _0x462ed3,
        id: _0x4a75da,
        zone: _0x1ebf3b,
        vectors: _0x33a2c5,
        radius: _0x326058,
        data: _0x43a13b,
        ..._0xaeca2a
      } = _0x2c1d82;
      um(_0x4a75da, _0x1ebf3b, _0x33a2c5, _0x326058, _0xaeca2a, _0x43a13b);
      mm.add(_0x1ebf3b);
      break;
    }
    case "box": {
      const {
        type: _0x4e609d,
        id: _0x5aae70,
        zone: _0x35fd48,
        vectors: _0x245a2b,
        length: _0x1ffd44,
        width: _0xe0b335,
        data: _0xe2696f,
        ..._0x149696
      } = _0x2c1d82;
      sm(
        _0x5aae70,
        _0x35fd48,
        _0x245a2b,
        _0x1ffd44,
        _0xe0b335,
        _0x149696,
        _0xe2696f
      );
      mm.add(_0x35fd48);
      break;
    }
    case "poly": {
      const {
        type: _0x44dfc6,
        id: _0x1fe01f,
        zone: _0x3770f7,
        vectors: _0x1d710a,
        data: _0x3c4c8a,
        ..._0x23ab59
      } = _0x2c1d82;
      rm(_0x1fe01f, _0x3770f7, _0x1d710a, _0x23ab59, _0x3c4c8a);
      mm.add(_0x3770f7);
      break;
    }
  }
};
var ym = (_0x502449, _0x5dc67e) => {
  exports["karma-polyzone"].RemoveZone(_0x502449, _0x5dc67e);
  km.delete(_0x502449 + "-" + _0x5dc67e);
  mm.delete(_0x502449);
};
var Zones = {
  isActive: om,
  onEnter: pm,
  onExit: qm,
  addPolyZone: rm,
  addBoxZone: sm,
  addBoxTarget: tm,
  addCircleZone: um,
  addCircleTarget: vm,
  addEntityZone: wm,
  removeZone: ym,
};
var Bm = (_0x56a4b7, _0x163a42, _0x34dfad) => {
  exports["np-interact"].AddPeekEntryByModel(_0x56a4b7, _0x163a42, _0x34dfad);
};
var Cm = (_0x4dcb73, _0x1cfb2a, _0x3087a7) => {
  exports["np-interact"].AddPeekEntryByPolyTarget(
    _0x4dcb73,
    _0x1cfb2a,
    _0x3087a7
  );
};
var Dm = (_0x24d4e2, _0x49fa35, _0x385151) => {
  exports["np-interact"].AddPeekEntryByFlag(_0x24d4e2, _0x49fa35, _0x385151);
};
var Em = (_0xc5ddf9, _0xc55873, _0x3cdfdd) => {
  exports["np-interact"].AddPeekEntryByEntityType(
    _0xc5ddf9,
    _0xc55873,
    _0x3cdfdd
  );
};
var Fm = (_0x2953a7, _0x3e43bc, _0xf00083, _0x41a1c0) => {
  var _0x406458 = {
    id: _0x2953a7,
    coords: [_0x3e43bc.x, _0x3e43bc.y, _0x3e43bc.z],
    options: _0xf00083,
    context: _0x41a1c0,
  };
  const _0x5bc84c = _0x406458;
  exports.interactions.AddInteraction(_0x5bc84c);
};
var Gm = (_0x153d5d, _0x1d9c35, _0x192799, _0x47a66f) => {
  var _0x77dab4 = {
    id: _0x153d5d,
    options: _0x192799,
    context: _0x47a66f,
  };
  const _0x2bcd2b = _0x77dab4;
  exports.interactions.AddInteractionByModel(_0x1d9c35, _0x2bcd2b);
};
var Hm = (_0x23127c, _0x4298af, _0x4887d9) => {
  var _0x37fca2 = {
    id: _0x23127c,
    options: _0x4298af,
    context: _0x4887d9,
  };
  const _0x4313f2 = _0x37fca2;
  _0x4313f2.context.isPlayer = true;
  exports.interactions.AddPedInteraction(_0x4313f2);
};
var Im = (_0x2ec8d3, _0x3bf34b, _0x21a9e5) => {
  var _0x2e5b7e = {
    id: _0x2ec8d3,
    options: _0x3bf34b,
    context: _0x21a9e5,
  };
  const _0x1eef5f = _0x2e5b7e;
  exports.interactions.AddPedInteraction(_0x1eef5f);
};
var Jm = (_0x32f3a1, _0x3bdd82, _0x17fb1b) => {
  var _0x438424 = {
    id: _0x32f3a1,
    options: _0x3bdd82,
    context: _0x17fb1b,
  };
  const _0x2d9d5a = _0x438424;
  exports.interactions.AddVehicleInteraction(_0x2d9d5a);
};
var Km = (_0x1adb5c) => {
  exports.interactions.RemoveInteraction(_0x1adb5c);
};
var Lm = (_0x30717d) => {
  exports.interactions.RemovePedInteraction(_0x30717d);
};
var Mm = (
  _0x1bd4f0,
  _0x11d719,
  _0x55096b = false,
  _0x55bc09 = null,
  _0x2f92fd = true,
  _0x46803f = null
) => {
  return new Promise((_0x1fc29f) => {
    exports["np-taskbar"].taskBar(
      _0x1bd4f0,
      _0x11d719,
      _0x55096b,
      _0x2f92fd,
      _0x46803f,
      false,
      _0x1fc29f,
      _0x55bc09 == null ? undefined : _0x55bc09.distance,
      _0x55bc09 == null ? undefined : _0x55bc09.entity
    );
  });
};
var Nm = (_0x53ee1a, _0x35a123, _0x242452, _0x13c0cb) => {
  return new Promise((_0x1f6894) => {
    exports["np-phone"].DoPhoneConfirmation(
      _0x53ee1a,
      _0x35a123,
      _0x242452,
      _0x1f6894,
      _0x13c0cb
    );
  });
};
var Om = (
  _0x5321dd,
  _0x38a644,
  _0x40f2d8 = true,
  _0x29ca1d = "home-screen"
) => {
  var _0x45a837 = {
    action: "notification",
    target_app: _0x29ca1d,
    title: _0x5321dd,
    body: _0x38a644,
    show_even_if_app_active: _0x40f2d8,
  };
  var _0x3c57c9 = {
    source: "np-nui",
    app: "phone",
    data: _0x45a837,
  };
  exports["np-ui"].SendUIMessage(_0x3c57c9);
};
var Pm = (
  _0x523837,
  _0x22218f,
  _0x352b70,
  _0x574b8b,
  _0x28e669,
  _0x185bc6,
  _0x3d0171 = 0,
  _0x52114a = true
) => {
  SetTextColour(_0x574b8b[0], _0x574b8b[1], _0x574b8b[2], _0x574b8b[3]);
  if (_0x52114a) {
    SetTextOutline();
  }
  SetTextScale(0, _0x28e669);
  SetTextFont(_0x185bc6 ?? 0);
  SetTextJustification(_0x3d0171);
  if (_0x3d0171 === 2) {
    SetTextWrap(0, 0.575);
  }
  SetTextEntry("STRING");
  AddTextComponentString(_0x352b70 ?? "Dummy text");
  EndTextCommandDisplayText(_0x523837, _0x22218f);
};
var Qm = (
  _0x346c3e,
  _0x880701,
  _0x346dda,
  _0x4718e3,
  _0x3c6c1e = 4,
  _0x112220 = true,
  _0x4b9d9f
) => {
  SetDrawOrigin(_0x346c3e.x, _0x346c3e.y, _0x346c3e.z, 0);
  const _0x18aaf1 = Math.max(
    pointToUtilz.getMapRange([0, 10], [0.4, 0.25], _0x880701),
    0.1
  );
  Pm(0, 0, _0x346dda, _0x4718e3, _0x18aaf1, _0x3c6c1e, 0, _0x112220);
  if (_0x4b9d9f) {
    DrawRect(
      0.002,
      _0x4b9d9f.height / 2,
      _0x4b9d9f.width,
      _0x4b9d9f.height,
      _0x4b9d9f.color[0],
      _0x4b9d9f.color[1],
      _0x4b9d9f.color[2],
      _0x4b9d9f.color[3]
    );
  }
  ClearDrawOrigin();
};
var Interface = {
  addPeekEntryByModel: Bm,
  addPeekEntryByTarget: Cm,
  addPeekEntryByFlag: Dm,
  addPeekEntryByType: Em,
  addInteraction: Fm,
  addInteractionByModel: Gm,
  addPlayerInteraction: Hm,
  addPedInteraction: Im,
  addVehicleInteraction: Jm,
  removeInteraction: Km,
  removePlayerInteraction: Lm,
  removePedInteraction: Lm,
  taskBar: Mm,
  phoneConfirmation: Nm,
  phoneNotification: Om,
  drawText: Pm,
  drawText3D: Qm,
};
var Um = async (_0x1bed33) => {
  return exports["np-heists"].BankMinigame(_0x1bed33);
};
var Vm = async (_0x455f82) => {
  return exports["np-heists"].DDRMinigame(_0x455f82);
};
var Wm = async (_0x56b28f) => {
  return exports.skillchecks.DirectionMinigame(_0x56b28f);
};
var Xm = async () => {
  return exports.skillchecks.DrillingMinigame();
};
var Ym = async (_0x31376d) => {
  return exports.skillchecks.FlipMinigame(_0x31376d);
};
var Zm = async (_0x4d5091) => {
  return exports.skillchecks.FloodMinigame(_0x4d5091);
};
var $m = async (_0x3a34e6) => {
  return exports.skillchecks.TaskBarMinigame(
    _0x3a34e6.difficulty,
    _0x3a34e6.gap,
    _0x3a34e6.iterations,
    _0x3a34e6.useReverse
  );
};
var _m = async (_0x35912e) => {
  return exports["np-heists"].MazeMinigame(_0x35912e);
};
var an = async (_0x3dc531) => {
  return exports.skillchecks.CrackSafe(_0x3dc531.locks);
};
var bn = async (_0x173aa6) => {
  return exports.skillchecks.SameMinigame(_0x173aa6);
};
var cn = async (_0x2afa84) => {
  return exports["np-heists"].ThermiteMinigame(_0x2afa84);
};
var dn = async (_0x4e98dd) => {
  return exports.skillchecks.UntangleMinigame(_0x4e98dd);
};
var en = async (_0x1dedf5) => {
  return exports["np-heists"].VarMinigame(_0x1dedf5);
};
var fn = async (_0x43b4d1) => {
  return exports.skillchecks.WordsMinigame(_0x43b4d1);
};
var gn = async (_0x382b7d) => {
  return exports.skillchecks.AlphabetMinigame(_0x382b7d);
};
var hn = async (_0x5a0e56) => {
  return exports.skillchecks.LockpickMinigame(_0x5a0e56);
};
var jn = {
  BankMinigame: Um,
  DDRMinigame: Vm,
  DirectionMinigame: Wm,
  DrillingMinigame: Xm,
  FlipMinigame: Ym,
  FloodMinigame: Zm,
  TaskBarMinigame: $m,
  MazeMinigame: _m,
  CrackSafe: an,
  SameMinigame: bn,
  ThermiteMinigame: cn,
  UntangleMinigame: dn,
  VarMinigame: en,
  WordsMinigame: fn,
  AlphabetMinigame: gn,
  LockpickMinigame: hn,
};
var kn = jn;
var ln = {
  async hasPermission(_0x48532a, _0x59fce2 = {}) {
    return await exports.permissions.hasPermission(_0x48532a, _0x59fce2);
  },
  async getUserPermissions() {
    return await exports.permissions.getUserPermissions();
  },
  async getCharPermissions(_0x1da2f0) {
    return await exports.permissions.getCharPermissions();
  },
  async getTotalPermissions() {
    return await exports.permissions.getTotalPermissions();
  },
};
function yn(
  _0xbf34b5,
  _0x4443e8,
  _0x16ffe0,
  _0x29d917,
  _0x1cd5e3,
  _0x2799a8,
  _0x3b9158
) {
  try {
    var _0x46f4ee = _0xbf34b5[_0x2799a8](_0x3b9158);
    var _0x514625 = _0x46f4ee.value;
  } catch (_0x4bbfd1) {
    _0x16ffe0(_0x4bbfd1);
    return;
  }
  if (_0x46f4ee.done) {
    _0x4443e8(_0x514625);
  } else {
    Promise.resolve(_0x514625).then(_0x29d917, _0x1cd5e3);
  }
}
function zn(_0x10a8f6) {
  return function () {
    var _0x187894 = this;
    var _0x293ec4 = arguments;
    return new Promise(function (_0x307886, _0x1296b2) {
      var _0x4052fd = _0x10a8f6.apply(_0x187894, _0x293ec4);
      function _0x2df584(_0x8ea5df) {
        yn(
          _0x4052fd,
          _0x307886,
          _0x1296b2,
          _0x2df584,
          _0x125347,
          "next",
          _0x8ea5df
        );
      }
      function _0x125347(_0x5838ed) {
        yn(
          _0x4052fd,
          _0x307886,
          _0x1296b2,
          _0x2df584,
          _0x125347,
          "throw",
          _0x5838ed
        );
      }
      _0x2df584(undefined);
    });
  };
}
function An(_0x1c8066, _0x3c129d) {
  var _0x1e6f95;
  var _0x2d40cb;
  var _0x3b856f;
  var _0x17959c;
  var _0x22ccfd = {
    label: 0,
    sent: function () {
      if (_0x3b856f[0] & 1) {
        throw _0x3b856f[1];
      }
      return _0x3b856f[1];
    },
    trys: [],
    ops: [],
  };
  _0x17959c = {
    next: _0x4d6fe3(0),
    throw: _0x4d6fe3(1),
    return: _0x4d6fe3(2),
  };
  if (typeof Symbol === "function") {
    _0x17959c[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x17959c;
  function _0x4d6fe3(_0x4dee52) {
    return function (_0x31595f) {
      return _0x5bc2de([_0x4dee52, _0x31595f]);
    };
  }
  function _0x5bc2de(_0x42bf36) {
    if (_0x1e6f95) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x22ccfd) {
      try {
        _0x1e6f95 = 1;
        if (
          _0x2d40cb &&
          (_0x3b856f =
            _0x42bf36[0] & 2
              ? _0x2d40cb.return
              : _0x42bf36[0]
              ? _0x2d40cb.throw ||
                ((_0x3b856f = _0x2d40cb.return) && _0x3b856f.call(_0x2d40cb), 0)
              : _0x2d40cb.next) &&
          !(_0x3b856f = _0x3b856f.call(_0x2d40cb, _0x42bf36[1])).done
        ) {
          return _0x3b856f;
        }
        _0x2d40cb = 0;
        if (_0x3b856f) {
          _0x42bf36 = [_0x42bf36[0] & 2, _0x3b856f.value];
        }
        switch (_0x42bf36[0]) {
          case 0:
          case 1:
            _0x3b856f = _0x42bf36;
            break;
          case 4:
            _0x22ccfd.label++;
            var _0x7624d7 = {
              value: _0x42bf36[1],
              done: false,
            };
            return _0x7624d7;
          case 5:
            _0x22ccfd.label++;
            _0x2d40cb = _0x42bf36[1];
            _0x42bf36 = [0];
            continue;
          case 7:
            _0x42bf36 = _0x22ccfd.ops.pop();
            _0x22ccfd.trys.pop();
            continue;
          default:
            if (
              !((_0x3b856f = _0x22ccfd.trys),
              (_0x3b856f =
                _0x3b856f.length > 0 && _0x3b856f[_0x3b856f.length - 1])) &&
              (_0x42bf36[0] === 6 || _0x42bf36[0] === 2)
            ) {
              _0x22ccfd = 0;
              continue;
            }
            if (
              _0x42bf36[0] === 3 &&
              (!_0x3b856f ||
                (_0x42bf36[1] > _0x3b856f[0] && _0x42bf36[1] < _0x3b856f[3]))
            ) {
              _0x22ccfd.label = _0x42bf36[1];
              break;
            }
            if (_0x42bf36[0] === 6 && _0x22ccfd.label < _0x3b856f[1]) {
              _0x22ccfd.label = _0x3b856f[1];
              _0x3b856f = _0x42bf36;
              break;
            }
            if (_0x3b856f && _0x22ccfd.label < _0x3b856f[2]) {
              _0x22ccfd.label = _0x3b856f[2];
              _0x22ccfd.ops.push(_0x42bf36);
              break;
            }
            if (_0x3b856f[2]) {
              _0x22ccfd.ops.pop();
            }
            _0x22ccfd.trys.pop();
            continue;
        }
        _0x42bf36 = _0x3c129d.call(_0x1c8066, _0x22ccfd);
      } catch (_0x24c537) {
        _0x42bf36 = [6, _0x24c537];
        _0x2d40cb = 0;
      } finally {
        _0x1e6f95 = _0x3b856f = 0;
      }
    }
    if (_0x42bf36[0] & 5) {
      throw _0x42bf36[1];
    }
    var _0x2ca110 = {
      value: _0x42bf36[0] ? _0x42bf36[1] : undefined,
      done: true,
    };
    return _0x2ca110;
  }
}
var NPXConfig;
var NewMap = new Map();
var curResourceName = GetCurrentResourceName();
function LoadNPXConfigFunc() {
  return LoadNPXConfig.apply(this, arguments);
}
function LoadNPXConfig() {
  LoadNPXConfig = zn(function () {
    return An(this, function (_0x3a802c) {
      switch (_0x3a802c.label) {
        case 0:
          let _0x44d066 = false;
          if (_0x44d066) {
            return [3, 2];
          }
          return [
            4,
            new Promise(function (_0x83feb6) {
              return setTimeout(_0x83feb6, 100);
            }),
          ];
        case 1:
          _0x3a802c.sent();
          return [3, 0];
        case 2:
          NPXConfig = exports.config.GetModuleConfig("main");
          return [2];
      }
    });
  });
  return LoadNPXConfig.apply(this, arguments);
}
on("np-config:configLoaded", function (_0x4376f4, _0x566392) {
  if (_0x4376f4 === "main") {
    NPXConfig = _0x566392;
  } else if (NewMap.has(_0x4376f4)) {
    NewMap.set(_0x4376f4, _0x566392);
  }
});
function getConfigValue(_0x3757f5) {
  return NPXConfig[_0x3757f5];
}
function getModuleConfig(_0x3fa040, _0x429bd6) {
  if (!NewMap.has(_0x3fa040)) {
    var _0x1e376f = exports.config.GetModuleConfig(_0x3fa040);
    if (_0x1e376f === undefined) {
      return undefined;
    }
    NewMap.set(_0x3fa040, _0x1e376f);
  }
  var _0x1b6195 = NewMap.get(_0x3fa040);
  if (_0x429bd6) {
    return _0x1b6195?.[_0x429bd6];
  } else {
    return _0x1b6195;
  }
}
function getCurrentResourceConfig(_0x468cb7) {
  switch (_0x468cb7) {
    case "pricing":
      return Config.prices;
    case "maxOutfits":
      return Config.maxoutfits;
    case "models":
      return Config.PedModels;
    default:
      break;
  }
}
var Flagg = false;
var Kn;
(function (_0x2d125b) {
  _0x2d125b[(_0x2d125b.HEAD = 0)] = "HEAD";
  _0x2d125b[(_0x2d125b.BERD = 1)] = "BERD";
  _0x2d125b[(_0x2d125b.HAIR = 2)] = "HAIR";
  _0x2d125b[(_0x2d125b.UPPR = 3)] = "UPPR";
  _0x2d125b[(_0x2d125b.LOWR = 4)] = "LOWR";
  _0x2d125b[(_0x2d125b.HAND = 5)] = "HAND";
  _0x2d125b[(_0x2d125b.FEET = 6)] = "FEET";
  _0x2d125b[(_0x2d125b.TEEF = 7)] = "TEEF";
  _0x2d125b[(_0x2d125b.ACCS = 8)] = "ACCS";
  _0x2d125b[(_0x2d125b.TASK = 9)] = "TASK";
  _0x2d125b[(_0x2d125b.DECL = 10)] = "DECL";
  _0x2d125b[(_0x2d125b.JBIB = 11)] = "JBIB";
})((Kn ||= {}));
var Ln;
(function (_0xc68a8f) {
  _0xc68a8f[(_0xc68a8f.HEAD = 0)] = "HEAD";
  _0xc68a8f[(_0xc68a8f.EYES = 1)] = "EYES";
  _0xc68a8f[(_0xc68a8f.EARS = 2)] = "EARS";
  _0xc68a8f[(_0xc68a8f.LWRIST = 6)] = "LWRIST";
  _0xc68a8f[(_0xc68a8f.RWIRST = 7)] = "RWIRST";
})((Ln ||= {}));
var ClothsTable1;
(function (_0x180158) {
  _0x180158[(_0x180158.Face = 0)] = "Face";
  _0x180158[(_0x180158.Mask = 1)] = "Mask";
  _0x180158[(_0x180158.Hair = 2)] = "Hair";
  _0x180158[(_0x180158.Torso = 3)] = "Torso";
  _0x180158[(_0x180158.Leg = 4)] = "Leg";
  _0x180158[(_0x180158.Parachute = 5)] = "Parachute";
  _0x180158[(_0x180158.Shoes = 6)] = "Shoes";
  _0x180158[(_0x180158.Accessory = 7)] = "Accessory";
  _0x180158[(_0x180158.Undershirt = 8)] = "Undershirt";
  _0x180158[(_0x180158.Kevlar = 9)] = "Kevlar";
  _0x180158[(_0x180158.Badge = 10)] = "Badge";
  _0x180158[(_0x180158.Jacket = 11)] = "Jacket";
})((ClothsTable1 ||= {}));
var ClothingType;
(function (_0x5c0da0) {
  _0x5c0da0[(_0x5c0da0.Hat = 0)] = "Hat";
  _0x5c0da0[(_0x5c0da0.Glasses = 1)] = "Glasses";
  _0x5c0da0[(_0x5c0da0.Ears = 2)] = "Ears";
  _0x5c0da0[(_0x5c0da0.Watch = 6)] = "Watch";
  _0x5c0da0[(_0x5c0da0.Bracelet = 7)] = "Bracelet";
})((ClothingType ||= {}));
var FacialBarberStuff;
(function (_0x267104) {
  _0x267104[(_0x267104.Blemishes = 0)] = "Blemishes";
  _0x267104[(_0x267104.FacialHair = 1)] = "FacialHair";
  _0x267104[(_0x267104.Eyebrows = 2)] = "Eyebrows";
  _0x267104[(_0x267104.Ageing = 3)] = "Ageing";
  _0x267104[(_0x267104.Makeup = 4)] = "Makeup";
  _0x267104[(_0x267104.Blush = 5)] = "Blush";
  _0x267104[(_0x267104.Complexion = 6)] = "Complexion";
  _0x267104[(_0x267104.SunDamage = 7)] = "SunDamage";
  _0x267104[(_0x267104.Lipstick = 8)] = "Lipstick";
  _0x267104[(_0x267104.MolesFreckles = 9)] = "MolesFreckles";
  _0x267104[(_0x267104.ChestHair = 10)] = "ChestHair";
  _0x267104[(_0x267104.BodyBlemishes = 11)] = "BodyBlemishes";
  _0x267104[(_0x267104.AddBodyBlemishes = 12)] = "AddBodyBlemishes";
})((FacialBarberStuff ||= {}));
var Pn;
(function (_0x289cef) {
  _0x289cef[(_0x289cef.nose_width = 0)] = "nose_width";
  _0x289cef[(_0x289cef.nose_peak = 1)] = "nose_peak";
  _0x289cef[(_0x289cef.nose_length = 2)] = "nose_length";
  _0x289cef[(_0x289cef.nose_bone_curveness = 3)] = "nose_bone_curveness";
  _0x289cef[(_0x289cef.nose_tip = 4)] = "nose_tip";
  _0x289cef[(_0x289cef.nose_bone_twist = 5)] = "nose_bone_twist";
  _0x289cef[(_0x289cef.eyebrow_up_down = 6)] = "eyebrow_up_down";
  _0x289cef[(_0x289cef.eyebrow_in_out = 7)] = "eyebrow_in_out";
  _0x289cef[(_0x289cef.cheek_bones = 8)] = "cheek_bones";
  _0x289cef[(_0x289cef.cheek_sideways_bone_size = 9)] =
    "cheek_sideways_bone_size";
  _0x289cef[(_0x289cef.cheek_bones_width = 10)] = "cheek_bones_width";
  _0x289cef[(_0x289cef.eye_opening = 11)] = "eye_opening";
  _0x289cef[(_0x289cef.lip_thickness = 12)] = "lip_thickness";
  _0x289cef[(_0x289cef.jaw_bone_width = 13)] = "jaw_bone_width";
  _0x289cef[(_0x289cef.jaw_bone_shape = 14)] = "jaw_bone_shape";
  _0x289cef[(_0x289cef.chin_bone = 15)] = "chin_bone";
  _0x289cef[(_0x289cef.chin_bone_length = 16)] = "chin_bone_length";
  _0x289cef[(_0x289cef.chin_bone_shape = 17)] = "chin_bone_shape";
  _0x289cef[(_0x289cef.chin_hole = 18)] = "chin_hole";
  _0x289cef[(_0x289cef.neck_thickness = 19)] = "neck_thickness";
})((Pn ||= {}));
var Qn;
(function (_0x24d3b2) {
  _0x24d3b2[(_0x24d3b2.Face = 46)] = "Face";
  _0x24d3b2[(_0x24d3b2.Mask = 195)] = "Mask";
  _0x24d3b2[(_0x24d3b2.Hair = 76)] = "Hair";
  _0x24d3b2[(_0x24d3b2.Torso = 196)] = "Torso";
  _0x24d3b2[(_0x24d3b2.Leg = 138)] = "Leg";
  _0x24d3b2[(_0x24d3b2.Parachute = 100)] = "Parachute";
  _0x24d3b2[(_0x24d3b2.Shoes = 102)] = "Shoes";
  _0x24d3b2[(_0x24d3b2.Accessory = 152)] = "Accessory";
  _0x24d3b2[(_0x24d3b2.Undershirt = 184)] = "Undershirt";
  _0x24d3b2[(_0x24d3b2.Kevlar = 56)] = "Kevlar";
  _0x24d3b2[(_0x24d3b2.Badge = 120)] = "Badge";
  _0x24d3b2[(_0x24d3b2.Jacket = 382)] = "Jacket";
  _0x24d3b2[(_0x24d3b2.Hat = 156)] = "Hat";
  _0x24d3b2[(_0x24d3b2.Glasses = 34)] = "Glasses";
  _0x24d3b2[(_0x24d3b2.Ears = 41)] = "Ears";
  _0x24d3b2[(_0x24d3b2.Watch = 41)] = "Watch";
  _0x24d3b2[(_0x24d3b2.Bracelet = 9)] = "Bracelet";
})((Qn ||= {}));
var Rn;
(function (_0x1589f0) {
  _0x1589f0[(_0x1589f0.Face = 46)] = "Face";
  _0x1589f0[(_0x1589f0.Mask = 196)] = "Mask";
  _0x1589f0[(_0x1589f0.Hair = 80)] = "Hair";
  _0x1589f0[(_0x1589f0.Torso = 241)] = "Torso";
  _0x1589f0[(_0x1589f0.Leg = 145)] = "Leg";
  _0x1589f0[(_0x1589f0.Parachute = 100)] = "Parachute";
  _0x1589f0[(_0x1589f0.Shoes = 106)] = "Shoes";
  _0x1589f0[(_0x1589f0.Accessory = 121)] = "Accessory";
  _0x1589f0[(_0x1589f0.Undershirt = 222)] = "Undershirt";
  _0x1589f0[(_0x1589f0.Kevlar = 56)] = "Kevlar";
  _0x1589f0[(_0x1589f0.Badge = 128)] = "Badge";
  _0x1589f0[(_0x1589f0.Jacket = 400)] = "Jacket";
  _0x1589f0[(_0x1589f0.Hat = 155)] = "Hat";
  _0x1589f0[(_0x1589f0.Glasses = 36)] = "Glasses";
  _0x1589f0[(_0x1589f0.Ears = 22)] = "Ears";
  _0x1589f0[(_0x1589f0.Watch = 30)] = "Watch";
  _0x1589f0[(_0x1589f0.Bracelet = 16)] = "Bracelet";
})((Rn ||= {}));
var Sn;
(function (_0x2d2da1) {
  _0x2d2da1[(_0x2d2da1.Face = 46)] = "Face";
  _0x2d2da1[(_0x2d2da1.Mask = 209)] = "Mask";
  _0x2d2da1[(_0x2d2da1.Hair = 79)] = "Hair";
  _0x2d2da1[(_0x2d2da1.Torso = 198)] = "Torso";
  _0x2d2da1[(_0x2d2da1.Leg = 148)] = "Leg";
  _0x2d2da1[(_0x2d2da1.Parachute = 111)] = "Parachute";
  _0x2d2da1[(_0x2d2da1.Shoes = 109)] = "Shoes";
  _0x2d2da1[(_0x2d2da1.Accessory = 154)] = "Accessory";
  _0x2d2da1[(_0x2d2da1.Undershirt = 191)] = "Undershirt";
  _0x2d2da1[(_0x2d2da1.Kevlar = 57)] = "Kevlar";
  _0x2d2da1[(_0x2d2da1.Badge = 134)] = "Badge";
  _0x2d2da1[(_0x2d2da1.Jacket = 413)] = "Jacket";
  _0x2d2da1[(_0x2d2da1.Hat = 173)] = "Hat";
  _0x2d2da1[(_0x2d2da1.Glasses = 42)] = "Glasses";
  _0x2d2da1[(_0x2d2da1.Ears = 42)] = "Ears";
  _0x2d2da1[(_0x2d2da1.Watch = 45)] = "Watch";
  _0x2d2da1[(_0x2d2da1.Bracelet = 10)] = "Bracelet";
})((Sn ||= {}));
var Tn;
(function (_0x143784) {
  _0x143784[(_0x143784.Face = 46)] = "Face";
  _0x143784[(_0x143784.Mask = 210)] = "Mask";
  _0x143784[(_0x143784.Hair = 83)] = "Hair";
  _0x143784[(_0x143784.Torso = 243)] = "Torso";
  _0x143784[(_0x143784.Leg = 156)] = "Leg";
  _0x143784[(_0x143784.Parachute = 111)] = "Parachute";
  _0x143784[(_0x143784.Shoes = 113)] = "Shoes";
  _0x143784[(_0x143784.Accessory = 123)] = "Accessory";
  _0x143784[(_0x143784.Undershirt = 236)] = "Undershirt";
  _0x143784[(_0x143784.Kevlar = 57)] = "Kevlar";
  _0x143784[(_0x143784.Badge = 144)] = "Badge";
  _0x143784[(_0x143784.Jacket = 440)] = "Jacket";
  _0x143784[(_0x143784.Hat = 172)] = "Hat";
  _0x143784[(_0x143784.Glasses = 44)] = "Glasses";
  _0x143784[(_0x143784.Ears = 23)] = "Ears";
  _0x143784[(_0x143784.Watch = 34)] = "Watch";
  _0x143784[(_0x143784.Bracelet = 17)] = "Bracelet";
})((Tn ||= {}));
var Un;
(function (_0x3bd7b3) {
  _0x3bd7b3[(_0x3bd7b3.Face = 46)] = "Face";
  _0x3bd7b3[(_0x3bd7b3.Mask = 209)] = "Mask";
  _0x3bd7b3[(_0x3bd7b3.Hair = 79)] = "Hair";
  _0x3bd7b3[(_0x3bd7b3.Torso = 198)] = "Torso";
  _0x3bd7b3[(_0x3bd7b3.Leg = 148)] = "Leg";
  _0x3bd7b3[(_0x3bd7b3.Parachute = 111)] = "Parachute";
  _0x3bd7b3[(_0x3bd7b3.Shoes = 109)] = "Shoes";
  _0x3bd7b3[(_0x3bd7b3.Accessory = 154)] = "Accessory";
  _0x3bd7b3[(_0x3bd7b3.Undershirt = 191)] = "Undershirt";
  _0x3bd7b3[(_0x3bd7b3.Kevlar = 57)] = "Kevlar";
  _0x3bd7b3[(_0x3bd7b3.Badge = 134)] = "Badge";
  _0x3bd7b3[(_0x3bd7b3.Jacket = 413)] = "Jacket";
  _0x3bd7b3[(_0x3bd7b3.Hat = 173)] = "Hat";
  _0x3bd7b3[(_0x3bd7b3.Glasses = 42)] = "Glasses";
  _0x3bd7b3[(_0x3bd7b3.Ears = 42)] = "Ears";
  _0x3bd7b3[(_0x3bd7b3.Watch = 45)] = "Watch";
  _0x3bd7b3[(_0x3bd7b3.Bracelet = 10)] = "Bracelet";
})((Un ||= {}));
var Vn;
(function (_0x282967) {
  _0x282967[(_0x282967.Face = 46)] = "Face";
  _0x282967[(_0x282967.Mask = 210)] = "Mask";
  _0x282967[(_0x282967.Hair = 83)] = "Hair";
  _0x282967[(_0x282967.Torso = 243)] = "Torso";
  _0x282967[(_0x282967.Leg = 156)] = "Leg";
  _0x282967[(_0x282967.Parachute = 111)] = "Parachute";
  _0x282967[(_0x282967.Shoes = 113)] = "Shoes";
  _0x282967[(_0x282967.Accessory = 123)] = "Accessory";
  _0x282967[(_0x282967.Undershirt = 236)] = "Undershirt";
  _0x282967[(_0x282967.Kevlar = 57)] = "Kevlar";
  _0x282967[(_0x282967.Badge = 144)] = "Badge";
  _0x282967[(_0x282967.Jacket = 440)] = "Jacket";
  _0x282967[(_0x282967.Hat = 172)] = "Hat";
  _0x282967[(_0x282967.Glasses = 44)] = "Glasses";
  _0x282967[(_0x282967.Ears = 23)] = "Ears";
  _0x282967[(_0x282967.Watch = 34)] = "Watch";
  _0x282967[(_0x282967.Bracelet = 17)] = "Bracelet";
})((Vn ||= {}));
var existingTattoos;
(function (_0x5e1fda) {
  _0x5e1fda[(_0x5e1fda.male = 1885233650)] = "male";
  _0x5e1fda[(_0x5e1fda.female = -1667301416)] = "female";
})((existingTattoos ||= {}));
var Xn;
(function (_0x4f8863) {
  _0x4f8863[(_0x4f8863.TATTOO = 0)] = "TATTOO";
  _0x4f8863[(_0x4f8863.FADE = 1)] = "FADE";
  _0x4f8863[(_0x4f8863.BADGE = 2)] = "BADGE";
  _0x4f8863[(_0x4f8863.MEDAL = 3)] = "MEDAL";
})((Xn ||= {}));
var Yn;
(function (_0x40c725) {
  _0x40c725[(_0x40c725.ZONE_TORSO = 0)] = "ZONE_TORSO";
  _0x40c725[(_0x40c725.ZONE_HEAD = 1)] = "ZONE_HEAD";
  _0x40c725[(_0x40c725.ZONE_LEFT_ARM = 2)] = "ZONE_LEFT_ARM";
  _0x40c725[(_0x40c725.ZONE_RIGHT_ARM = 3)] = "ZONE_RIGHT_ARM";
  _0x40c725[(_0x40c725.ZONE_LEFT_LEG = 4)] = "ZONE_LEFT_LEG";
  _0x40c725[(_0x40c725.ZONE_RIGHT_LEG = 5)] = "ZONE_RIGHT_LEG";
  _0x40c725[(_0x40c725.ZONE_MEDALS = 6)] = "ZONE_MEDALS";
})((Yn ||= {}));
var Zn;
(function (_0x50e508) {
  _0x50e508[(_0x50e508.ARM_LEFT_1 = 1115682042)] = "ARM_LEFT_1";
  _0x50e508[(_0x50e508.ARM_LEFT_2 = 867587943)] = "ARM_LEFT_2";
  _0x50e508[(_0x50e508.ARM_LEFT_BICEP = -2071970448)] = "ARM_LEFT_BICEP";
  _0x50e508[(_0x50e508.ARM_LEFT_ELBOW = -80377674)] = "ARM_LEFT_ELBOW";
  _0x50e508[(_0x50e508.ARM_LEFT_FULL_SLEEVE = -1775023605)] =
    "ARM_LEFT_FULL_SLEEVE";
  _0x50e508[(_0x50e508.ARM_LEFT_LOWER_INNER = -1546663824)] =
    "ARM_LEFT_LOWER_INNER";
  _0x50e508[(_0x50e508.ARM_LEFT_LOWER_OUTER = -2119253768)] =
    "ARM_LEFT_LOWER_OUTER";
  _0x50e508[(_0x50e508.ARM_LEFT_LOWER_SLEEVE = -1684314297)] =
    "ARM_LEFT_LOWER_SLEEVE";
  _0x50e508[(_0x50e508.ARM_LEFT_SHORT_SLEEVE = 917950949)] =
    "ARM_LEFT_SHORT_SLEEVE";
  _0x50e508[(_0x50e508.ARM_LEFT_SHOULDER = -686545645)] = "ARM_LEFT_SHOULDER";
  _0x50e508[(_0x50e508.ARM_LEFT_SLEEVE = -1727932006)] = "ARM_LEFT_SLEEVE";
  _0x50e508[(_0x50e508.ARM_LEFT_UPPER_SIDE = -311742370)] =
    "ARM_LEFT_UPPER_SIDE";
  _0x50e508[(_0x50e508.ARM_LEFT_UPPER_SLEEVE = 1372660034)] =
    "ARM_LEFT_UPPER_SLEEVE";
  _0x50e508[(_0x50e508.ARM_LEFT_WRIST = 1639951086)] = "ARM_LEFT_WRIST";
  _0x50e508[(_0x50e508.ARM_RIGHT = -544464214)] = "ARM_RIGHT";
  _0x50e508[(_0x50e508.ARM_RIGHT_ELBOW = -1073830579)] = "ARM_RIGHT_ELBOW";
  _0x50e508[(_0x50e508.ARM_RIGHT_FULL_SLEEVE = -1055976551)] =
    "ARM_RIGHT_FULL_SLEEVE";
  _0x50e508[(_0x50e508.ARM_RIGHT_LOWER = 633556653)] = "ARM_RIGHT_LOWER";
  _0x50e508[(_0x50e508.ARM_RIGHT_LOWER_INNER = 123428314)] =
    "ARM_RIGHT_LOWER_INNER";
  _0x50e508[(_0x50e508.ARM_RIGHT_LOWER_OUTER = 1944550961)] =
    "ARM_RIGHT_LOWER_OUTER";
  _0x50e508[(_0x50e508.ARM_RIGHT_LOWER_SLEEVE = 796226384)] =
    "ARM_RIGHT_LOWER_SLEEVE";
  _0x50e508[(_0x50e508.ARM_RIGHT_SHORT_SLEEVE = 1963750528)] =
    "ARM_RIGHT_SHORT_SLEEVE";
  _0x50e508[(_0x50e508.ARM_RIGHT_SHOULDER = 1089807219)] = "ARM_RIGHT_SHOULDER";
  _0x50e508[(_0x50e508.ARM_RIGHT_SLEEVE = 42711490)] = "ARM_RIGHT_SLEEVE";
  _0x50e508[(_0x50e508.ARM_RIGHT_TRICEP = -227805513)] = "ARM_RIGHT_TRICEP";
  _0x50e508[(_0x50e508.ARM_RIGHT_UPPER_SIDE = -1716562576)] =
    "ARM_RIGHT_UPPER_SIDE";
  _0x50e508[(_0x50e508.ARM_RIGHT_UPPER_SLEEVE = -1309595991)] =
    "ARM_RIGHT_UPPER_SLEEVE";
  _0x50e508[(_0x50e508.ARM_RIGHT_WRIST = 2136911405)] = "ARM_RIGHT_WRIST";
  _0x50e508[(_0x50e508.BACK_1 = 1484379715)] = "BACK_1";
  _0x50e508[(_0x50e508.BACK_2 = 1723822798)] = "BACK_2";
  _0x50e508[(_0x50e508.BACK_3 = 918852313)] = "BACK_3";
  _0x50e508[(_0x50e508.BACK_4 = 1292025685)] = "BACK_4";
  _0x50e508[(_0x50e508.BACK_FULL = 711089605)] = "BACK_FULL";
  _0x50e508[(_0x50e508.BACK_FULL_ARMS_FULL_BACK = 1206993109)] =
    "BACK_FULL_ARMS_FULL_BACK";
  _0x50e508[(_0x50e508.BACK_FULL_SHORT = 32564956)] = "BACK_FULL_SHORT";
  _0x50e508[(_0x50e508.BACK_LEFT = -1379110068)] = "BACK_LEFT";
  _0x50e508[(_0x50e508.BACK_LOWER = 1618133209)] = "BACK_LOWER";
  _0x50e508[(_0x50e508.BACK_UPPER = 1928884106)] = "BACK_UPPER";
  _0x50e508[(_0x50e508.BACK_UPPER_LEFT = 1565386395)] = "BACK_UPPER_LEFT";
  _0x50e508[(_0x50e508.BACK_UPPER_RIGHT = 2107621060)] = "BACK_UPPER_RIGHT";
  _0x50e508[(_0x50e508.CHEST_FULL = -793495770)] = "CHEST_FULL";
  _0x50e508[(_0x50e508.CHEST_LEFT = -763917073)] = "CHEST_LEFT";
  _0x50e508[(_0x50e508.CHEST_LEFT_UPPER = 521226680)] = "CHEST_LEFT_UPPER";
  _0x50e508[(_0x50e508.CHEST_MID = -1409061796)] = "CHEST_MID";
  _0x50e508[(_0x50e508.CHEST_RIGHT = -2066166276)] = "CHEST_RIGHT";
  _0x50e508[(_0x50e508.CHEST_STOM = 849089063)] = "CHEST_STOM";
  _0x50e508[(_0x50e508.CHEST_STOM_FULL = 1192230427)] = "CHEST_STOM_FULL";
  _0x50e508[(_0x50e508.Face = -1538681432)] = "Face";
  _0x50e508[(_0x50e508.FACE = -1538681432)] = "FACE";
  _0x50e508[(_0x50e508.hairOverlay = 2140335355)] = "hairOverlay";
  _0x50e508[(_0x50e508.HAND_LEFT = 1071134407)] = "HAND_LEFT";
  _0x50e508[(_0x50e508.HAND_RIGHT = 1455567330)] = "HAND_RIGHT";
  _0x50e508[(_0x50e508.HEAD_LEFT = -737856380)] = "HEAD_LEFT";
  _0x50e508[(_0x50e508.HEAD_RIGHT = 1261643197)] = "HEAD_RIGHT";
  _0x50e508[(_0x50e508.LEG_LEFT = -270504353)] = "LEG_LEFT";
  _0x50e508[(_0x50e508.LEG_LEFT_CALF = 134497037)] = "LEG_LEFT_CALF";
  _0x50e508[(_0x50e508.LEG_LEFT_FULL_SLEEVE = 1039283199)] =
    "LEG_LEFT_FULL_SLEEVE";
  _0x50e508[(_0x50e508.LEG_LEFT_LOWER_BACK = 1034503747)] =
    "LEG_LEFT_LOWER_BACK";
  _0x50e508[(_0x50e508.LEG_LEFT_LOWER_FRONT = -1560441083)] =
    "LEG_LEFT_LOWER_FRONT";
  _0x50e508[(_0x50e508.LEG_LEFT_LOWER_SLEEVE = -1399656601)] =
    "LEG_LEFT_LOWER_SLEEVE";
  _0x50e508[(_0x50e508.LEG_LEFT_UPPER_BACK = 1725561361)] =
    "LEG_LEFT_UPPER_BACK";
  _0x50e508[(_0x50e508.LEG_LEFT_UPPER_FRONT = -382139768)] =
    "LEG_LEFT_UPPER_FRONT";
  _0x50e508[(_0x50e508.LEG_LEFT_UPPER_OUTER = -266913369)] =
    "LEG_LEFT_UPPER_OUTER";
  _0x50e508[(_0x50e508.LEG_LEFT_UPPER_SLEEVE = -1917346117)] =
    "LEG_LEFT_UPPER_SLEEVE";
  _0x50e508[(_0x50e508.LEG_LEG = 1679091791)] = "LEG_LEG";
  _0x50e508[(_0x50e508.LEG_RIGHT = 769887067)] = "LEG_RIGHT";
  _0x50e508[(_0x50e508.LEG_RIGHT_CALF = -292219126)] = "LEG_RIGHT_CALF";
  _0x50e508[(_0x50e508.LEG_RIGHT_FULL_FRONT = -1178847967)] =
    "LEG_RIGHT_FULL_FRONT";
  _0x50e508[(_0x50e508.LEG_RIGHT_FULL_SLEEVE = -624267373)] =
    "LEG_RIGHT_FULL_SLEEVE";
  _0x50e508[(_0x50e508.LEG_RIGHT_LOWER_BACK = 2060550302)] =
    "LEG_RIGHT_LOWER_BACK";
  _0x50e508[(_0x50e508.LEG_RIGHT_LOWER_OUTER = -1202647020)] =
    "LEG_RIGHT_LOWER_OUTER";
  _0x50e508[(_0x50e508.LEG_RIGHT_LOWER_SLEEVE = -405262373)] =
    "LEG_RIGHT_LOWER_SLEEVE";
  _0x50e508[(_0x50e508.LEG_RIGHT_UPPER_FRONT = 1469472731)] =
    "LEG_RIGHT_UPPER_FRONT";
  _0x50e508[(_0x50e508.LEG_RIGHT_UPPER_OUTER = -1670727628)] =
    "LEG_RIGHT_UPPER_OUTER";
  _0x50e508[(_0x50e508.LEG_RIGHT_UPPER_SLEEVE = 730193962)] =
    "LEG_RIGHT_UPPER_SLEEVE";
  _0x50e508[(_0x50e508.NECK_BACK = 1012782925)] = "NECK_BACK";
  _0x50e508[(_0x50e508.NECK_FRONT = 436139458)] = "NECK_FRONT";
  _0x50e508[(_0x50e508.NECK_LEFT = 1176640647)] = "NECK_LEFT";
  _0x50e508[(_0x50e508.NECK_LEFT_BACK = -484264198)] = "NECK_LEFT_BACK";
  _0x50e508[(_0x50e508.NECK_LEFT_FULL = -277214012)] = "NECK_LEFT_FULL";
  _0x50e508[(_0x50e508.NECK_RIGHT = -1655348266)] = "NECK_RIGHT";
  _0x50e508[(_0x50e508.NECK_RIGHT_2 = 2119905678)] = "NECK_RIGHT_2";
  _0x50e508[(_0x50e508.NECK_RIGHT_FULL = 1708200656)] = "NECK_RIGHT_FULL";
  _0x50e508[(_0x50e508.rank = -518474626)] = "rank";
  _0x50e508[(_0x50e508.SIDE_RIGHT = -454273031)] = "SIDE_RIGHT";
  _0x50e508[(_0x50e508.STOMACH_FULL = 129912816)] = "STOMACH_FULL";
  _0x50e508[(_0x50e508.STOMACH_LEFT = -1469750959)] = "STOMACH_LEFT";
  _0x50e508[(_0x50e508.STOMACH_MID = 1361645381)] = "STOMACH_MID";
  _0x50e508[(_0x50e508.STOMACH_RIGHT = -388268096)] = "STOMACH_RIGHT";
  _0x50e508[(_0x50e508.TORSO_SIDE_RIGHT = 1548327796)] = "TORSO_SIDE_RIGHT";
  _0x50e508[(_0x50e508.torsoDecal = 277073536)] = "torsoDecal";
})((Zn ||= {}));
function delay(_0x190e00) {
  return new Promise((_0xe12dda) => {
    setTimeout(_0xe12dda, _0x190e00);
  });
}
function ko(_0x326d5a, _0x179481) {
  var _0x29833f = true;
  var _0x266462 = false;
  var _0x52c572 = undefined;
  try {
    for (
      var _0x3c3e9d = Object.entries(_0x326d5a)[Symbol.iterator](), _0x24ff23;
      !(_0x29833f = (_0x24ff23 = _0x3c3e9d.next()).done);
      _0x29833f = true
    ) {
      var _0x2e2a3e = fo(_0x24ff23.value, 2);
      var _0x22ac2a = _0x2e2a3e[0];
      var _0x48cea7 = _0x2e2a3e[1];
      var _0x2a0e45 = true;
      var _0x578952 = false;
      var _0x584263 = undefined;
      try {
        for (
          var _0x50a4b7 = Object.entries(_0x48cea7)[Symbol.iterator](),
            _0x17ba1b;
          !(_0x2a0e45 = (_0x17ba1b = _0x50a4b7.next()).done);
          _0x2a0e45 = true
        ) {
          var _0x2dd412 = fo(_0x17ba1b.value, 2);
          var _0x6debad = _0x2dd412[0];
          var _0x36a9ac = _0x2dd412[1];
          var _0x506ebc = true;
          var _0x2ea0cc = false;
          var _0x245775 = undefined;
          try {
            for (
              var _0x5fe56b = _0x36a9ac[Symbol.iterator](), _0xbb552f;
              !(_0x506ebc = (_0xbb552f = _0x5fe56b.next()).done);
              _0x506ebc = true
            ) {
              var _0x1c614b = _0xbb552f.value;
              _0x179481(_0x1c614b, _0x22ac2a, _0x6debad);
            }
          } catch (_0x34686b) {
            _0x2ea0cc = true;
            _0x245775 = _0x34686b;
          } finally {
            try {
              if (!_0x506ebc && _0x5fe56b.return != null) {
                _0x5fe56b.return();
              }
            } finally {
              if (_0x2ea0cc) {
                throw _0x245775;
              }
            }
          }
        }
      } catch (_0xc41a7c) {
        _0x578952 = true;
        _0x584263 = _0xc41a7c;
      } finally {
        try {
          if (!_0x2a0e45 && _0x50a4b7.return != null) {
            _0x50a4b7.return();
          }
        } finally {
          if (_0x578952) {
            throw _0x584263;
          }
        }
      }
    }
  } catch (_0x5ec7dc) {
    _0x266462 = true;
    _0x52c572 = _0x5ec7dc;
  } finally {
    try {
      if (!_0x29833f && _0x3c3e9d.return != null) {
        _0x3c3e9d.return();
      }
    } finally {
      if (_0x266462) {
        throw _0x52c572;
      }
    }
  }
}
function iterateTattoosAndCallback(_0x58c93c, _0x2fdb59) {
  _0x58c93c.tattoos.forEach(function (_0x16cef4) {
    _0x2fdb59(_0x16cef4);
  });
}
function checkIfTattooIsUnique(_0xd904a4) {
  var _0x1cf216 =
    typeof _0xd904a4 === "string" ? GetHashKey(_0xd904a4) : _0xd904a4;
  if (existingTattoos[_0x1cf216]) {
    return false;
  }
  return true;
}
function getTattooGender(_0x12a6d0) {
  var _0x59480e =
    typeof _0x12a6d0 === "string" ? GetHashKey(_0x12a6d0) : _0x12a6d0;
  if (existingTattoos[_0x59480e]) {
    return existingTattoos[_0x59480e];
  }
  return "male";
}
let KARMADEVELOPMENTS_DATA;
var AllClothingItemsAvail = {
  clothing: {
    male: {
      1805577: "Gray Sports Coat",
      9591114: "Black Vest",
      11517899: "Yellow Tie",
      14369200: "Red Check Shirt",
      20209453: "Blue Striped V Neck",
      20587512: "Pink Work Boots",
      25041478: "Gray Skull",
      26226804: "Buzzcut Light Brown",
      28345148: "Brown Pig",
      46033775: "Navy Work Boots",
      47199156: "Tan Track Jacket",
      53577457: "Faux Hawk Light Brown",
      61327987: "Woodland Camo Cargo",
      61925844: "Black Cargo Pants",
      71415558: "Ranch Brown Jeans",
      75511985: "Slicked Red",
      76185134: "White V Neck",
      84774122: "Ash Untucked",
      85716640: "Brown Stripe Sweatpants",
      86459936: "Faded Classic Blue Regular Fit",
      93280275: "Green Track Jacket",
      95366771: "Red Monster",
      101450709: "Maroon Running",
      101479919: "Gray Pants",
      101930410: "Gray Skinny Tie",
      102569511: "Eris Lime Sneakers",
      106492687: "Gold Striped Tie",
      109614714: "None",
      113944368: "Gray Striped Leather Jacket",
      118140672: "LC Salamanders Sweatband",
      118321224: "Ranch Navy Jeans",
      122763321: "Hipster Shaved Red",
      123113066: "Orange V Neck",
      127444597: "Money Polo Shirt",
      143444124: "Side Parting Spiked Blond",
      170513087: "Purple Tie",
      197066948: "Navy Sweatband",
      218995852: "Orange Bowtie",
      240518526: "Gray Tank",
      243284995: "Camo Skate Shoes",
      247474770: "Red Sports Coat",
      248239588: "Orange Track Pants",
      252533914: "Black Chinos",
      256978644: "Yellow Accent Athletic Shoes",
      257774698: "Faded Blue Fitted",
      266191167: "Tan Work Boots",
      267800064: "Lavender Track Jacket",
      267817878: "Gray Tank",
      270046721: "Mustard Untucked",
      270123206: "LC Penetrators Sweatband",
      275802724: "White Skinny Tie",
      278405942: "Coffee Oxfords",
      286342539: "Crew T-Shirt",
      288927141: "White Cargo",
      295121446: "Brown Boots",
      298864142: "Burgundy Athletic Shoes",
      303168585: "Gray Vest",
      309192703: "Desert Camo Cargo",
      310006647: "Ranch Chocolate Jeans",
      314940479: "Blue Tucked",
      322643537: "Bloody Pig",
      324295242: "White Carnival",
      326119629: "Prolaps Orange Sneakers",
      340555149: "Blue Track Jacket",
      343693362: "Navy Chinos",
      345227197: "Short Brushed Auburn",
      351816411: "Sweatband 14",
      354484839: "Pink Vest",
      369666902: "Metal Polo Shirt",
      375884230: "Dreads Auburn",
      384677373: "Green Scarf",
      391098640: "Yellow Bowtie",
      392063630: "Mustard Regular Fit",
      398996083: "Small Crew Emblem",
      402724340: "Red Work Boots",
      423958692: "Purple Hoodie",
      453411217: "Gray Two-Tone Tee",
      460092760: "Tan Chinos",
      461290854: "Ponytail Blond",
      474062067: "Slate Stripe Sweatpants",
      477651806: "Black Athletic Shoes",
      478638427: "Yellow Track Pants",
      478716387: "White Tank",
      482793616: "Charcoal Skate Shoes",
      504199574: "Cream Oxfords",
      507207612: "Red Striped Skinny Tie",
      508560931: "Green Skinny Tie",
      509472244: "Gray Chinos",
      513129913: "Faux Hawk Dark Brown",
      516830060: "Ash Untucked",
      516928701: "Purple Stripe Sweatpants",
      517816457: "Steel Untucked",
      532739844: "Side Parting Spiked Auburn",
      534103090: "Black Hoodie",
      544122309: "Prolaps Green Sneakers",
      553128934: "Chocolate Work Pants",
      564094146: "Camo Work Boots",
      564510064: "Purple Track Jacket",
      566807934: "Prolaps Red Sneakers",
      567270115: "Ice Polo Shirt",
      569377011: "All Black Oxfords",
      587565148: "Tan Hoodie",
      589574030: "LS Panic Sweatband",
      590767959: "Sky Blue Sweatband",
      596681752: "Dreads Blond",
      600286283: "Signs V Neck",
      603619172: "Dust Devils Hockey",
      604744317: "Olive Cargo Pants",
      610588609: "Camo Boots",
      613075786: "All Black Skate Shoes",
      616584372: "Tan Cargo",
      632607186: "Ponytail Black",
      639737397: "Blue Work Pants",
      643367845: "White Flip-Flops",
      645107449: "LS Pounders Top",
      645418037: "White Striped Polo Shirt",
      647141917: "Two-Tone Track Jacket",
      650869785: "Ranch Topaz Jeans",
      651869567: "Forest Check Shirt",
      659686189: "Tan Two-Tone Shoes",
      667799593: "Faux Hawk Blond",
      670462721: "Green Monster",
      670525060: "Short Brushed Dark Brown",
      707149072: "Slate Hoodie",
      714423180: "Red Hoodie",
      721304172: "Lavender Sweatpants",
      728580043: "Blue Tucked",
      732893110: "Green Stripe Track Pants",
      739262273: "Gray Jacket",
      747458616: "Yellow Stripe Sweatpants",
      748422987: "Brown Track Jacket",
      752836173: "Green Hoodie",
      753577991: "None",
      765431804: "Gray Shoes",
      771586813: "Navy Skate Shoes",
      774116302: "Side Parting Spiked Black",
      775499368: "Gray Work Pants",
      780162280: "Chopped Green",
      782783757: "Black Running",
      804415953: "Eris Leopard Sneakers",
      807846522: "Ranch Faded Jeans",
      810322475: "Hipster Shaved Light Brown",
      811875105: "No Crew Emblem",
      819070185: "Tan Plaid Skinny Tie",
      823780610: "Black Untucked",
      845863817: "Burgundy Tucked",
      847376439: "Olive Cargo",
      850443038: "Gray Sports Coat",
      853075942: "Two-Tone Skate Shoes",
      856849768: "Pro Lite Polo Shirt",
      867523898: "Moss Untucked",
      878918328: "Tan Work Pants",
      888739968: "Ranch Gray Jeans",
      900355096: "Brown Hoodie",
      919753925: "Slate Jacket",
      926927675: "Orange V Neck",
      928902806: "Pink Pig",
      932732666: "Tan Check Shirt",
      936852646: "Red Track Jacket",
      938028625: "Gray Chinos",
      943532242: "Red Track Pants",
      954604374: "Cornrows Light Brown",
      955045947: "Green Hoodie",
      960270715: "Blue Skate Shoes",
      960945022: "Black Tucked",
      967026640: "Three-Way Shoes",
      973488388: "Black Track Jacket",
      973894822: "Faux Hawk Auburn",
      979872378: "Deep Blue Fitted",
      981727630: "Gray Hoodie",
      984597019: "Long Hair Purple Fade",
      986544139: "Green Bowtie",
      1000416720: "Light Blue Ranch",
      1015676322: "Red Hoodie",
      1039191942: "Vibe Polo Shirt",
      1043699675: "Pikeys T-Shirt",
      1044103707: "Tan Ape",
      1044413501: "Brown V Neck",
      1056137210: "Gray Vest",
      1062830403: "Navy Bowtie",
      1064185880: "Tan Chinos",
      1078760055: "Orange Kicks",
      1084479224: "Red Sports Coat",
      1101016274: "Hipster Shaved Black",
      1101742549: "Gray Plaid Chinos",
      1109161953: "Black Tank",
      1113848471: "Red Untucked",
      1142956313: "Stone Boards",
      1151089881: "Green Carnival",
      1165299576: "Purple Hoodie",
      1166542136: "Navy Track Jacket",
      1174073943: "Orange Hoodie",
      1174536651: "White Untucked",
      1184268873: "G&B V Neck",
      1185215133: "Purple Shoes",
      1188165268: "Silver Tucked",
      1191049050: "Blue Sports Coat",
      1191472257: "Stone Bowtie",
      1198149925: "Camo Hoodie",
      1199829879: "Splatter Sweatpants",
      1205172440: "Red Tank",
      1205703151: "Tan Skate Shoes",
      1210477891: "Dreads Light Brown",
      1213094431: "Red Skinny Tie",
      1221632152: "Tan Boots",
      1222760308: "Burgundy Chelsea Boots",
      1226939766: "Gray Cargo",
      1227323456: "Brown Work Boots",
      1230549359: "Shorter Cut Dark Brown",
      1232760752: "Brown V Neck",
      1246935651: "Orange Sports Shoes",
      1251010327: "Black Work Pants",
      1257360950: "LS Pounders Top",
      1257687670: "Green Shoes",
      1260437451: "Cornrows Dark Brown",
      1261754764: "Orange Cargo",
      1263669448: "Green Track Jacket",
      1271556921: "Blue Polo Shirt",
      1272875420: "None",
      1273971056: "Hipster Shaved Blond",
      1274166057: "Gold Striped Skinny Tie",
      1274398329: "Slate Jeans",
      1278942020: "Sky Untucked",
      1286705029: "All White Canvas Shoes",
      1293261954: "White Running",
      1303838081: "Black Vest",
      1303890723: "Slicked Auburn",
      1308189078: "Brown Ape",
      1319026793: "White Monster",
      1325314011: "Yellow Kicks",
      1329369580: "Large Crew Emblem",
      1331437172: "Blue Striped V Neck",
      1335804426: "Biker Dark Brown",
      1340097918: "Red Sports Shoes",
      1340315182: "Gray Chelsea Boots",
      1343731570: "Sunshine Polo Shirt",
      1365487050: "White Scarf",
      1371026762: "Green Kicks",
      1372382710: "Brown Hoodie",
      1379199514: "Ochre Chelsea Boots",
      1380090629: "Brown Bowtie",
      1404477845: "Blue Track Jacket",
      1412435848: "Blue Jacket",
      1422176241: "Ponytail Dark Brown",
      1422683113: "Lavender Hoodie",
      1425845385: "Red Bowtie",
      1443355954: "Gray Kicks",
      1443802705: "All Gray Skate Shoes",
      1447481298: "Stone Skinny Tie",
      1448481388: "Lurid Check Shirt",
      1452676721: "Yellow Sweatband",
      1454184099: "Green Sweatband",
      1455842578: "Side Parting Spiked Blue",
      1465137627: "Red Cargo",
      1467297431: "Blue Boots",
      1470141480: "Prolaps Red Accent Sneakers",
      1470626002: "Navy Skinny Tie",
      1470903601: "Yellow Accent Sports Shoes",
      1471930522: "Classic White Kicks",
      1488225553: "Royale Polo Shirt",
      1491347172: "Green V Neck",
      1497012052: "Eris Blue Accent Sneakers",
      1503092123: "Sky Blue Athletic Shoes",
      1507716691: "Brown Suede Jacket",
      1511809734: "Ranch Black Jeans",
      1516163117: "Stank T-Shirt",
      1519265992: "White Tank",
      1520190511: "Orange Boots",
      1522521543: "Black Diamond Earrings",
      1532062559: "Blue-Gray Shoes",
      1536754507: "Gray Banded Leather Jacket",
      1552791767: "Signs V Neck",
      1555581774: "Slate Kicks",
      1556132773: "Red Track Jacket",
      1563520747: "Red Shoes",
      1568425515: "Brown Cargo",
      1577191213: "Brown Suede Jacket",
      1578312211: "Copper Work Boots",
      1585364939: "Navy Untucked",
      1590020700: "Black Sports Coat",
      1595662716: "Two-Tone Plaid Skinny Tie",
      1598720848: "Long Hair Blond",
      1602209127: "Ponytail Light Brown",
      1611629377: "Green Cargo",
      1620698865: "Green Sports Shoes",
      1656332028: "Orange Check Shirt",
      1659866947: "Gray Two-Tone Sports",
      1665429749: "Three-Way Athletic Shoes",
      1670772447: "Slicked Blond",
      1679976146: "Checked Skate Shoes",
      1690940124: "Gray Sweatband",
      1691058425: "Red Hockey",
      1697892884: "Beige Boots",
      1698168396: "Black Carnival",
      1706799415: "Forest Check Shirt",
      1708798107: "Eris Three-Way Sneakers",
      1717406861: "Caesar Black",
      1730909195: "Wine Chelsea Boots",
      1731212095: "Eris Sky Blue Sneakers",
      1731535378: "Salmon Polo Shirt",
      1731835024: "White Hoodie",
      1740367552: "Black Skull",
      1749960382: "Navy Canvas Shoes",
      1752807992: "Purple Sweatband",
      1752893092: "Black Fitted",
      1753023029: "Charcoal Chinos",
      1757053595: "Red Kicks",
      1766120569: "Eris Black Sneakers",
      1775345446: "Sky Blue Tee",
      1777199902: "Red Polo Shirt",
      1780737144: "Gray Two-Tone Athletic Shoes",
      1790024815: "Blue Stripe Track Pants",
      1798330516: "Red Skate Shoes",
      1799874669: "Elite Leopard Kicks",
      1806192055: "Teal Wingtip Chelsea Boots",
      1806295686: "Purple Cargo",
      1810192986: "Black Bowtie",
      1816375824: "Lemon Check Shirt",
      1816995217: "Gray Track Jacket",
      1821930656: "Charcoal T-Shirt",
      1835244227: "Yellow Check Shirt",
      1835428291: "Red Boots",
      1846877834: "Slate Hoodie",
      1852742483: "Navy Tie",
      1867229213: "Purple Skinny Tie",
      1878264177: "Cornrows Black",
      1878843997: "Purple Bowtie",
      1883334378: "Ponytail Auburn",
      1895451319: "Gray Splatter Hoodie",
      1898547216: "Blue Two-Tone Sports Shoes",
      1901826666: "Slicked Black",
      1905340381: "Long Hair Black",
      1906533846: "Blue Bowtie",
      1922215343: "Brown Regular Fit",
      1923819586: "Eris T-Shirt",
      1926881239: "Yellow Track Jacket",
      1935974176: "Gray Track Pants",
      1954751718: "Navy Regular Fit",
      1956677630: "Shorter Cut Blond",
      1959522198: "Sport Work Pants",
      1997284730: "White Hockey",
      2016696749: "Red Striped Sweatband",
      2018947130: "Close Shave",
      2029591638: "Blue Accent Athletic Shoes",
      2034776476: "Game Track Pants",
      2036951201: "Butter Untucked",
      2037019912: "Olive Skate Shoes",
      2038700205: "Ash Sports Shoes",
      2046690777: "Elite Snakeskin Kicks",
      2047390691: "Caesar Blond",
      2055677492: "Black Kicks",
      2061124207: "Long Hair Light Brown",
      2063163142: "Burgundy Tucked",
      2065626602: "Coffee Boots",
      2066953829: "Cobra Slip-Ons",
      2070771935: "Beige Oxfords",
      2074992821: "Luxury Sports Coat",
      2083148997: "Forest Untucked",
      2087125972: "Gray Scarf",
      2088132051: "Prolaps Cyan Sneakers",
      2089532473: "Blue Cargo",
      2090179567: "Biker Auburn",
      2092457551: "Prolaps Red Sneakers",
      2095039049: "Worn Light Blue Regular Fit",
      2096151617: "Gray Splatter Hoodie",
      2101623038: "Red Tie",
      2106644897: "Orange Plaid Bowtie",
      2108626179: "Red Leather Jacket",
      2110337106: "Coffee Shoes",
      2112775457: "Pink Sweatband",
      2117177569: "Multi-Logo T-Shirt",
      2123961294: "Short Brushed Black",
      2126079541: "Camo Hoodie",
      2131256244: "Tan Check Shirt",
      2131711911: "Ash Check Shirt",
      2132227364: "Gray Flip-Flops",
      2133933662: "Ash Check Shirt",
      2142178904: "Gray Striped Boots",
      "-869913515": "Crew T-Shirt",
      "-668711855": "Yeti T-Shirt",
      "-1163281833": "Eris T-Shirt",
      "-354326069": "Charcoal T-Shirt",
      "-1264353968": "Stank T-Shirt",
      "-2029313504": "Ranch T-Shirt",
      "-486745482": "Pikeys T-Shirt",
      "-1804026513": "Sweatbox T-Shirt",
      "-223225219": "Ash V Neck",
      "-1885367210": "Swallow V Neck",
      "-1649397637": "Harsh Souls V Neck",
      "-1135972945": "Broker V Neck",
      "-1443641086": "Hip-Hop Royalty V Neck",
      "-303718553": "Pinstripe Vest",
      "-1104748965": "Pink Vest",
      "-1830380649": "Steel Untucked",
      "-1487033549": "Azure Untucked",
      "-1004765694": "Black Untucked",
      "-344240961": "Sky Untucked",
      "-1599621351": "Navy Untucked",
      "-728788463": "White Tucked",
      "-834789593": "Green Plaid Tucked",
      "-1961857111": "Blue Check Shirt",
      "-2019530551": "Yellow Check Shirt",
      "-1633606911": "Mint Check Shirt",
      "-1211902650": "Gray Check Shirt",
      "-1052907462": "Patriot Check Shirt",
      "-1245428456": "Fruity Check Shirt",
      "-1003167243": "Aqua Check Shirt",
      "-1182806901": "Charcoal Check Shirt",
      "-1462686930": "Teal Check Shirt",
      "-1629939906": "Red Check Shirt",
      "-2100420213": "Brown Track Jacket",
      "-1355253153": "Tan Track Jacket",
      "-819840466": "Lavender Track Jacket",
      "-1112336560": "Bounce Track Jacket",
      "-336202795": "Game Track Jacket",
      "-634728385": "Fireball Track Jacket",
      "-502689528": "Navy Track Jacket",
      "-1685814273": "Orange Track Jacket",
      "-1196048799": "Yellow Track Jacket",
      "-1091089692": "Purple Track Jacket",
      "-452812873": "Black Sports Coat",
      "-76018008": "Blue Sports Coat",
      "-1641327608": "Luxury Sports Coat",
      "-344473566": "Black Tank",
      "-605158333": "Silver Stripe Leather Jacket",
      "-365780788": "Blue Stripe Leather Jacket",
      "-312498470": "Red Leather Jacket",
      "-1087288706": "White Leather Jacket",
      "-789910031": "Blue Leather Jacket",
      "-1566207641": "Lonewolf Leather Jacket",
      "-1989058821": "Gray Striped Leather Jacket",
      "-1216416890": "White Hoodie",
      "-786454841": "Sky Blue Hoodie",
      "-1093795292": "Navy Hoodie",
      "-617858328": "Orange Hoodie",
      "-1051195584": "Yellow Hoodie",
      "-565702883": "Red Accent Tee",
      "-1091324275": "Sky Blue Tee",
      "-1767512590": "Slate Tee",
      "-2082193297": "Gray Two-Tone Tee",
      "-2076058581": "White Striped Polo Shirt",
      "-1370279859": "Metal Polo Shirt",
      "-63205445": "Hunter Polo Shirt",
      "-1682044125": "Night Polo Shirt",
      "-838537296": "Cupcake Polo Shirt",
      "-1332071955": "None",
      "-564216679": "Black Pig",
      "-1828438700": "Silver Skull",
      "-2127652439": "Bone Skull",
      "-184281949": "Pogo",
      "-1403351006": "Black Bloody Hockey",
      "-487093356": "Green Ape",
      "-189124839": "Pink Ape",
      "-384105000": "Blue Carnival",
      "-2132237060": "Black Monster",
      "-880402182": "Eris Ash Sneakers",
      "-1981613908": "Eris Two-Tone Sneakers",
      "-2004781599": "Prolaps Yellow Sneakers",
      "-1044387747": "Eris Tan Sneakers",
      "-1858485900": "Black Skate Shoes",
      "-231668891": "Gray Skate Shoes",
      "-487103246": "Slate Skate Shoes",
      "-707442002": "Pink Skate Shoes",
      "-946295243": "Brown Skate Shoes",
      "-378727721": "Viper Slip-Ons",
      "-1307696102": "Gray Slip-Ons",
      "-848242490": "Beige Slip-Ons",
      "-867762559": "Urban Work Boots",
      "-657566935": "White Work Boots",
      "-352061548": "Blue Work Boots",
      "-210761628": "Beige Work Boots",
      "-1733191849": "Teal Work Boots",
      "-1492962310": "Pixel Work Boots",
      "-200290798": "Money Work Boots",
      "-845479639": "Black Work Boots",
      "-564092236": "Ash Work Boots",
      "-1402771516": "Charcoal Boots",
      "-1160575837": "Black Boots",
      "-1040546912": "Three-Way Boots",
      "-675172562": "Sepia Boots",
      "-2001170147": "Two-Tone Boots",
      "-855037681": "Olive Boots",
      "-550515364": "Navy Boots",
      "-345727877": "All Black Chelsea Boots",
      "-156060905": "Brown Chelsea Boots",
      "-696114323": "Black Wingtip Chelsea Boots",
      "-1266688151": "Acid Chelsea Boots",
      "-1564394516": "Hawthorn Chelsea Boots",
      "-1107234197": "Copper Wingtip Chelsea Boots",
      "-772314719": "Black Chelsea Boots",
      "-1549234940": "Tan Chelsea Boots",
      "-1384013642": "Brown Wingtip Chelsea Boots",
      "-12532685": "Aqua Chelsea Boots",
      "-1787465570": "White Chelsea Boots",
      "-536742495": "Yellow Running Shoes",
      "-1593950193": "Silver Running Shoes",
      "-2002139629": "Luxury Boat Shoes",
      "-850657307": "Plaid Shoes",
      "-1702225310": "Patriot Shoes",
      "-1612241636": "Charcoal Two-Tone Shoes",
      "-297975353": "Baby Blue Shoes",
      "-2013465272": "Umber Shoes",
      "-806136667": "Black Shoes",
      "-1574635255": "Silver Shoes",
      "-1106677197": "All Black Canvas Shoes",
      "-1355557752": "Red Canvas Shoes",
      "-1847764304": "Black Flip-Flops",
      "-893760407": "Olive Flip-Flops",
      "-1159204228": "Charcoal White Socks",
      "-1323704608": "Indigo White Socks",
      "-1966687438": "All-White Sports Shoes",
      "-77628267": "Blue Sports Shoes",
      "-1861769241": "Yellow Sports Shoes",
      "-2099082339": "Urban Camo Sports Shoes",
      "-1265602824": "Deep Forest Sports",
      "-1513729692": "Purple Sports Shoes",
      "-1891285969": "Black Sports Shoes",
      "-2081411683": "Olive Sports Shoes",
      "-1486621564": "Classic Trio Sports",
      "-1767484663": "Two-Tone Sports Shoes",
      "-1183834793": "All-White Athletic Shoes",
      "-288913411": "Gray Athletic Shoes",
      "-389586495": "Red Athletic Shoes",
      "-692765283": "Purple Athletic Shoes",
      "-950100240": "Green Athletic Shoes",
      "-1255015785": "Leopard Athletic Shoes",
      "-1249634965": "Blue Athletic Shoes",
      "-469306768": "Yellow Athletic Shoes",
      "-1066194103": "Orange Athletic Shoes",
      "-1628115185": "Lime Accent Kicks",
      "-1926542468": "Purple Kicks",
      "-771697370": "Citrus Kicks",
      "-1080676271": "Blue Kicks",
      "-192767443": "Orange Accent Kicks",
      "-466290290": "Burgundy Kicks",
      "-1869132160": "Buzzcut Dark Brown",
      "-203254503": "Buzzcut Auburn",
      "-419071141": "Buzzcut Blond",
      "-680338378": "Buzzcut Black",
      "-38366717": "Short Brushed Light Brown",
      "-262572211": "Short Brushed Blond",
      "-1849481085": "Spikey Dark Brown",
      "-2075554416": "Spikey Light Brown",
      "-298557084": "Spikey Auburn",
      "-487634214": "Spikey Blond",
      "-621757731": "Spikey Black",
      "-861594042": "Spikey Blue",
      "-1351541069": "Caesar Dark Brown",
      "-434828278": "Caesar Light Brown",
      "-723555953": "Caesar Auburn",
      "-857140565": "Chopped Dark Brown",
      "-397915799": "Chopped Light Brown",
      "-164010677": "Chopped Auburn",
      "-2054552594": "Chopped Blond",
      "-1582023614": "Chopped Black",
      "-1158589741": "Dreads Dark Brown",
      "-238370675": "Dreads Black",
      "-1379555255": "Long Hair Dark Brown",
      "-1928075550": "Long Hair Auburn",
      "-678416465": "Faux Hawk Black",
      "-982611092": "Faux Hawk Purple",
      "-1970684252": "Hipster Shaved Dark Brown",
      "-1509460577": "Hipster Shaved Auburn",
      "-93508515": "Side Parting Spiked Dark Brown",
      "-449838621": "Side Parting Spiked Light Brown",
      "-1856650904": "Shorter Cut Light Brown",
      "-1512117638": "Shorter Cut Auburn",
      "-2109594815": "Shorter Cut Black",
      "-1777841467": "Shorter Cut Green",
      "-1907605668": "Biker Light Brown",
      "-1463028645": "Biker Blond",
      "-1275196721": "Biker Black",
      "-515611301": "Biker Purple Fade",
      "-1052210949": "Ponytail Purple",
      "-1953578842": "Cornrows Auburn",
      "-2094747694": "Cornrows Blond",
      "-1639617471": "Slicked Dark Brown",
      "-1342697566": "Slicked Light Brown",
      "-20014842": "Yeti T-Shirt",
      "-1770698663": "Ranch T-Shirt",
      "-1449922922": "Multi-Logo T-Shirt",
      "-821282366": "Sweatbox T-Shirt",
      "-2040071459": "White V Neck",
      "-1809443237": "Ash V Neck",
      "-1345335890": "Swallow V Neck",
      "-1114478285": "Harsh Souls V Neck",
      "-883063611": "Broker V Neck",
      "-623434824": "Hip-Hop Royalty V Neck",
      "-268939782": "Green V Neck",
      "-38868633": "G&B V Neck",
      "-1696426033": "Slate Jacket",
      "-794983612": "Gray Jacket",
      "-547413817": "Blue Jacket",
      "-1841148622": "Pinstripe Vest",
      "-2083124615": "White Untucked",
      "-390441707": "Forest Untucked",
      "-622642841": "Azure Untucked",
      "-139070917": "Red Untucked",
      "-907012432": "Moss Untucked",
      "-413314678": "Mustard Untucked",
      "-1331534795": "Butter Untucked",
      "-602296604": "White Tucked",
      "-378320489": "Silver Tucked",
      "-399211016": "Green Plaid Tucked",
      "-1901489147": "Black Tucked",
      "-764029202": "Blue Check Shirt",
      "-575853783": "Mint Check Shirt",
      "-294728532": "Gray Check Shirt",
      "-1205247966": "Patriot Check Shirt",
      "-889977417": "Lurid Check Shirt",
      "-1828624898": "Lemon Check Shirt",
      "-1534097126": "Orange Check Shirt",
      "-1208537111": "Fruity Check Shirt",
      "-935702417": "Aqua Check Shirt",
      "-614795600": "Charcoal Check Shirt",
      "-310043900": "Teal Check Shirt",
      "-1601291453": "Two-Tone Track Jacket",
      "-1880974868": "Gray Track Jacket",
      "-475597474": "Bounce Track Jacket",
      "-242183883": "Game Track Jacket",
      "-942391879": "Fireball Track Jacket",
      "-1054245767": "Black Track Jacket",
      "-2142537030": "Orange Track Jacket",
      "-1095569140": "Red Tank",
      "-807421589": "Silver Stripe Leather Jacket",
      "-516924404": "Blue Stripe Leather Jacket",
      "-1995691075": "White Leather Jacket",
      "-1707422182": "Blue Leather Jacket",
      "-1517230906": "Lonewolf Leather Jacket",
      "-107377458": "Gray Banded Leather Jacket",
      "-511989414": "Gray Hoodie",
      "-213856446": "Tan Hoodie",
      "-719809806": "Lavender Hoodie",
      "-207270483": "Black Hoodie",
      "-53518335": "Sky Blue Hoodie",
      "-1892743998": "Navy Hoodie",
      "-664496340": "Yellow Hoodie",
      "-1568778666": "Red Accent Tee",
      "-1782647040": "Slate Tee",
      "-1767360528": "Pro Lite Polo Shirt",
      "-464301243": "Ice Polo Shirt",
      "-98533665": "Money Polo Shirt",
      "-942826950": "Hunter Polo Shirt",
      "-845961786": "Red Polo Shirt",
      "-1471128784": "Sunshine Polo Shirt",
      "-61376524": "Night Polo Shirt",
      "-813425070": "Cupcake Polo Shirt",
      "-1286281740": "Blue Polo Shirt",
      "-1589231145": "Vibe Polo Shirt",
      "-1761333933": "Salmon Polo Shirt",
      "-2036298612": "Royale Polo Shirt",
      "-960312988": "Worn Black Regular Fit",
      "-696093299": "Black Regular Fit",
      "-957393305": "Teal Regular Fit",
      "-1255361822": "White Regular Fit",
      "-1417044068": "Crimson Regular Fit",
      "-610929910": "Faded Light Blue Regular Fit",
      "-1376839747": "Tan Regular Fit",
      "-526156519": "Faded Dark Blue Regular Fit",
      "-1293344347": "Gray Regular Fit",
      "-372994213": "Dark Blue Regular Fit",
      "-68111437": "Stone Regular Fit",
      "-1298511993": "Ranch Purple Jeans",
      "-53716026": "Ranch Blue Jeans",
      "-426660015": "Widow Jeans",
      "-667577703": "Ranch Tan Jeans",
      "-570987918": "Ranch Silver Jeans",
      "-1512506826": "Ranch Patriot Jeans",
      "-1400043614": "Ranch Olive Jeans",
      "-1340356081": "Black Pants",
      "-1823928214": "Blue Pants",
      "-747157014": "Black Baggy Pants",
      "-450564795": "Gray Baggy Pants",
      "-908216649": "Blue Baggy Pants",
      "-555928200": "Charcoal Running",
      "-2000577359": "Off-White Cargo",
      "-1840158780": "Winter Camo Cargo",
      "-682116640": "Black Cargo",
      "-1533225877": "Urban Camo Cargo",
      "-1177244673": "White Stripe Track Pants",
      "-1312576878": "Brown Stripe Track Pants",
      "-1070741658": "Tan Track Pants",
      "-831560727": "Lavender Track Pants",
      "-2029628136": "Fireball Track Pants",
      "-585731454": "Black Track Pants",
      "-1763613159": "Blue Track Pants",
      "-2037922458": "Navy Track Pants",
      "-1309631441": "Purple Track Pants",
      "-1926705153": "Gray Fitted",
      "-1580287299": "White Stripe Sweatpants",
      "-1821368832": "Gray Stripe Sweatpants",
      "-757200347": "Tan Stripe Sweatpants",
      "-2117605378": "Camo Sweatpants",
      "-1113230742": "Black Stripe Sweatpants",
      "-1344022809": "Blue Stripe Sweatpants",
      "-175644118": "Navy Stripe Sweatpants",
      "-406436185": "Red Stripe Sweatpants",
      "-1592411833": "Green Stripe Sweatpants",
      "-1823007286": "Orange Stripe Sweatpants",
      "-1479972750": "Foam Boards",
      "-1920453648": "Seal Boards",
      "-1182505766": "Squared Boards",
      "-744280765": "Teal Work Pants",
      "-1981343284": "Berry Work Pants",
      "-1146684085": "Khaki Work Pants",
      "-445296409": "Sky Blue Work Pants",
      "-1759824844": "Navy Work Pants",
      "-379116347": "White Work Pants",
      "-148062128": "Olive Work Pants",
      "-885299090": "Forest Work Pants",
      "-641104502": "Resort Work Pants",
      "-1346522765": "Ash Work Pants",
      "-1899657848": "Sky Blue Chinos",
      "-185873346": "Khaki Cargo Pants",
      "-1930652533": "Urban Cargo Pants",
      "-1700122618": "Fire Cargo Pants",
      "-372453822": "Tundra Cargo Pants",
      "-132945201": "Black Camo Cargo Pants",
      "-2036496411": "Woodland Camo Cargo Pants",
      "-1829298024": "Ice Cargo Pants",
      "-14294862": "Purple Cargo Pants",
      "-327304350": "Navy Cargo Pants",
      "-1094197257": "Orange Cargo Pants",
      "-855212940": "Brown Cargo Pants",
      "-1698949152": "Taupe Cargo Pants",
      "-715715295": "Hawthorn Cargo Pants",
      "-550756149": "Earth Cargo Pants",
      "-1769157861": "No Tie",
      "-1480962951": "Silver Chain",
      "-653840622": "Gold Chain",
      "-1004206770": "Bronze Chain",
      "-1514665499": "White Tie",
      "-1219908344": "Gray Tie",
      "-616620776": "Brown Tie",
      "-30776594": "Stone Tie",
      "-1317516917": "Two-Tone Plaid Tie",
      "-1564365794": "Tan Plaid Tie",
      "-1735026806": "Red Striped Tie",
      "-1052589830": "Black Tie",
      "-758029289": "Blue Tie",
      "-1979755916": "Green Tie",
      "-1665533975": "Orange Tie",
      "-1950442996": "White Bowtie",
      "-1640481025": "Gray Bowtie",
      "-1898021828": "Blue Plaid Bowtie",
      "-1420020425": "Earth Bowtie",
      "-1610211701": "Red Plaid Bowtie",
      "-2079478889": "Brown Skinny Tie",
      "-203771591": "Black Skinny Tie",
      "-453504140": "Blue Skinny Tie",
      "-1935646010": "Orange Skinny Tie",
      "-2112795224": "Yellow Skinny Tie",
      "-637229925": "None",
      "-1701100584": "Silver Chain",
      "-1351520892": "Gold Chain",
      "-1121384205": "Bronze Chain",
      "-907430887": "Silver Diamond Earrings",
      "-667135810": "Gold Diamond Earrings",
      "-1685348253": "Black Sweatband",
      "-1303196175": "Red Sweatband",
      "-379882590": "Blue Sweatband",
      "-1145628582": "Sweatband 15",
      "-1143013407": "White Scarf",
      "-1075181577": "Gray Scarf",
      "-776918139": "Black Scarf",
      "-526988976": "Navy Scarf",
      "-227644161": "Red Scarf",
      "-1373771967": "Black Scarf",
      "-416917167": "Navy Scarf",
      "-1721811516": "Red Scarf",
      "-968714358": "Green Scarf",
      "-340145303": "None",
      "-1807249673": "None",
      "-81800198": "Brown Digital Flight Cap",
      "-143021512": "Tan Flight Cap",
      "-1522694719": "Aqua Camo Flight Cap",
      "-2114843225": "Back Crew Emblem",
      "-312478764": "Brown Closed Flight",
      "-1608361638": "Black Closed Flight",
      "-1864058145": "Gray Closed Flight",
      "-1531288950": "Teal Closed Flight",
      "-1251212323": "Navy Closed Flight",
      "-67341064": "Green Open Flight",
      "-298231438": "Brown Open Flight",
      "-2063034275": "Dark Bigness SN Hockey",
      "-1757791040": "Blue Bigness SN Hockey",
      "-1832879890": "Fall Hockey",
      "-1540663646": "Light Bigness SN Hockey",
      "-1278609953": "Purple Bigness SN Hockey",
      "-1108342229": "Dark Camo Hockey",
      "-801788234": "Light Camo Hockey",
      "-652164980": "Purple Camo Hockey",
      "-328505567": "Woodland Camo Hockey",
      "-2054907547": "Abstract Hockey",
      "-1751761528": "Geometric Hockey",
      "-1635360030": "Purple Flash Retro Runners",
      "-396527985": "Midnight Retro Runners",
      "-214116786": "Pink Flash Retro Runners",
      "-1658312138": "White & Orange Retro Runners",
      "-1957034342": "Vibrant Retro Runners",
      "-1028328113": "Ash Retro Runners",
      "-1327607390": "Sage Retro Runners",
      "-468862976": "All Gray Retro Runners",
      "-758934164": "Blue Retro Runners",
      "-620274717": "Sunset Retro Runners",
      "-785870586": "Grayscale Retro Runners",
      "-76651119": "Blue Flash Retro Runners",
      "-182167299": "White Retro Runners",
      "-247180987": "Graphite Retro Runners",
      "-470468953": "Mocha Retro Runners",
      "-934267275": "Green Retro Runners",
      "-1157489703": "Cream & Pink Retro Runners",
      "-292577959": "All Gray Retro Runners",
      "-905194414": "Red Retro Runners",
      "-533010047": "Sunset Retro Runners",
      "-777462076": "Grayscale Retro Runners",
      "-2131772077": "Blue Flash Retro Runners",
      "-1824693778": "Graphite Retro Runners",
      "-2004923278": "Mocha Retro Runners",
      "-2071645677": "Green Retro Runners",
      "-1145626502": "Cream & Pink Retro Runners",
      "-838220513": "Black & Red Retro Runners",
      "-157503442": "White & Orange Bigness Jersey",
      "-46533491": "Pink & Black Bigness Jersey",
      "-946304689": "Red & Black Bigness Jersey",
      "-698177821": "Teal Bigness Jersey",
      "-1379936866": "Yellow Bigness Jersey",
      "-1547105660": "White & Purple Bigness Jersey",
      "-1243435337": "Blue Bigness Jersey",
      "-1760988923": "Purple Bigness Jersey",
      "-313221734": "White & Gold Bigness Jersey",
      "-941872478": "Red Prolaps Closed",
      "-1961235818": "Purple & White SN Closed",
      "-993206789": "Green Ornate SN Closed",
      "-762676874": "Orange Ornate SN Closed",
      "-26570817": "Black SN Leather Closed",
      "-1064692733": "Color Geo SN Leather Closed",
      "-755025683": "Gold Geo SN Leather Closed",
      "-563654723": "Color Geo PRB Leather Closed",
      "-145178272": "Orange Dotted Leather Closed",
      "-1065495637": "Blue Dotted Leather Closed",
      "-233523496": "Moss Leopard Leather Closed",
      "-1526588236": "Pale Leopard Leather Closed",
      "-695074861": "Magenta Leopard Leather Closed",
      "-2022743609": "Spotted Bigness Leather Closed",
      "-1249438332": "Brown SN Leather Open",
      "-482479887": "Black SN Leather Open",
      "-653992833": "Multi-Color SN Leather Open",
      "-1593971578": "Color Geo SN Leather Open",
      "-1957707478": "Gold Geo SN Leather Open",
      "-1712034615": "Blue Dotted Leather Open",
      "-15288560": "Pale Leopard Leather Open",
      "-264005270": "Magenta Leopard Leather Open",
      "-1389587639": "Zebra Bigness Leather Open",
      "-1015948224": "Green Didier Sachs Closed Field",
      "-1985124168": "Gray Didier Sachs Closed Field",
      "-614493984": "Gray Didier Sachs Open Field",
      "-383865762": "Red Didier Sachs Open Field",
      "-1861978582": "Black & Neon Puffer",
      "-2135698039": "Dark Painted Puffer",
      "-218490942": "Urban Gradient Puffer",
      "-453182524": "Cool Gradient Puffer",
      "-716219287": "Green Gradient Puffer",
      "-1462959259": "Dusk Gradient Puffer",
      "-605591151": "Moss Leopard Puffer",
      "-844247778": "Pale Leopard Puffer",
      "-1027426488": "Cyan Leopard Puffer",
      "-1266705726": "Magenta Leopard Puffer",
      "-150817111": "White Manor Zigzag T-Shirt",
      "-1044047058": "Teal Blagueurs LS T-Shirt",
      "-1147203842": "Salmon Santo Capra T-Shirt",
      "-898519901": "Blue Santo Capra T-Shirt",
      "-666613688": "Yellow Santo Capra T-Shirt",
      "-273451226": "Pink Santo Capra T-Shirt",
      "-1374116654": "White Manor T-Shirt",
      "-833735836": "Blue Striped Santo Capra T-Shirt",
      "-1677721439": "Lilac Manor T-Shirt",
      "-1520987288": "White Striped Manor T-Shirt",
      "-1073100596": "Green Globe Blagueurs T-Shirt",
      "-775132079": "Purple Globe Blagueurs T-Shirt",
      "-1124319348": "Beige Striped Blagueurs Track",
      "-1427203215": "Pink Striped Blagueurs Track",
      "-118365971": "Yellow Ornate SC Track",
      "-1271179351": "Pink Ornate SC Track",
      "-1105935939": "Mint Striped Blagueurs Track",
      "-1128317162": "Mint Blagueurs Track",
      "-1424909381": "Sand & Purple Güffy Track",
      "-2097982173": "Pink Cardigan",
      "-1483084705": "Green Cardigan",
      "-169166116": "Red Cardigan",
      "-397664353": "White & Gray Cardigan",
      "-1391646430": "Light Brown Cardigan",
      "-1620013591": "Midnight Purple Cardigan",
      "-928325539": "Blue & Cyan Cardigan",
      "-1075978258": "Azure Pattern Sweater",
      "-2002226812": "Sunrise Pattern Sweater",
      "-1956198704": "Blue Motif Sweater",
      "-1684281542": "Red Motif Sweater",
      "-1344532546": "Green Botanical Sweater",
      "-1056558574": "Purple Botanical Sweater",
      "-750725497": "White Botanical Sweater",
      "-457967251": "Pink Botanical Sweater",
      "-1268442920": "Red Floral Sweater",
      "-975914057": "Blue Floral Sweater",
      "-1703996143": "Tutti Frutti Pattern Sweater",
      "-422479268": "Black Floral Sweater",
      "-1181769767": "White Floral Sweater",
      "-255901264": "Nightfall Pattern Sweater",
      "-817660231": "Tropical Pattern Sweater",
      "-512449765": "Navy Perseus Brand Sweater",
      "-966731920": "Burgundy Garland Shortsleeve",
      "-727747603": "Black Garland Shortsleeve",
      "-1351090307": "Blue Leaves Shortsleeve",
      "-1111057382": "Gray Leaves Shortsleeve",
      "-930827882": "Red Leaves Shortsleeve",
      "-633580283": "Teal Leaves Shortsleeve",
      "-1300724346": "Navy Posies Shortsleeve",
      "-875382726": "Blue Posies Shortsleeve",
      "-569025345": "Lilac Floral Shortsleeve",
      "-381390051": "Floral Shortsleeve",
      "-1898780587": "Yellow Savanna Shortsleeve",
      "-1291157170": "Urban Gradient Shortsleeve",
      "-447126037": "Cool Gradient Shortsleeve",
      "-73252378": "Pink Savanna Shortsleeve",
      "-1474290961": "Peach Botanical Shortsleeve",
      "-1370413231": "Pink Botanical Shortsleeve",
      "-194301052": "Green Botanical Shortsleeve",
      "-1443478219": "Purple Big Cat Open",
      "-1213538146": "Orange Big Cat Open",
      "-517074584": "Red Prolaps Open",
      "-847836102": "Blue Big Cat Open",
      "-215525478": "Golden Big Cat Open",
      "-2051477020": "Gray Sports Blagueurs Hoodie",
      "-71213585": "White College Blagueurs Hoodie",
      "-379537106": "Sprayed Green Güffy Hoodie",
      "-133507446": "Spotted Dark Güffy Hoodie",
      "-621929391": "Blue Leaves Güffy Hoodie",
      "-455135181": "Multicolor Leaves Güffy Hoodie",
      "-671715482": "Gray Sports Blagueurs Hoodie",
      "-499350542": "Black Sports Blagueurs Hoodie",
      "-939792134": "Baby Blue SN Hoodie",
      "-1222588604": "Yellow SN Hoodie",
      "-1998761675": "Graffiti Black Güffy Hoodie",
      "-1692469832": "Sprayed Green Güffy Hoodie",
      "-1819504926": "Chocolate Fashion Biker",
      "-270743671": "Two-Tone Fashion Biker",
      "-568450036": "Ox Blood Fashion Biker",
      "-933201783": "Red Fashion Biker",
      "-1231071993": "Ochre Fashion Biker",
      "-1528516206": "Tan Fashion Biker",
      "-1787764617": "White Botanical Muscle Pants",
      "-405629840": "Geometric Muscle Pants",
      "-1921392708": "Spotted Muscle Pants",
      "-1946497653": "Peach Botanical Muscle Pants",
      "-1565066497": "Green Motif Muscle Pants",
      "-798599587": "Fall Muscle Pants",
      "-1393979548": "Purple Camo Muscle Pants",
      "-650614783": "White Camo Muscle Pants",
      "-1170328404": "Crewneck T-Shirt",
      "-2052273286": "White Manor Zigzag T-Shirt",
      "-1275532035": "Blagueurs LS T-Shirt",
      "-1582151568": "Blagueres Stripes T-Shirt",
      "-801954443": "Red & Black Santo Capra T-Shirt",
      "-1749258343": "White Manor T-Shirt",
      "-250404275": "Green Globe Blagueurs T-Shirt",
      "-825467456": "Blagueurs Brand T-Shirt",
      "-985748514": "White Manor Zigzag T-Shirt",
      "-1036944067": "Blagueurs LS T-Shirt",
      "-377555874": "White Manor T-Shirt",
      "-126250405": "Lilac Manor T-Shirt",
      "-1938343344": "Black Striped Manor T-Shirt",
      "-1881063132": "White Striped Manor T-Shirt",
      "-1517065080": "Green Globe Blagueurs T-Shirt",
      "-1279981365": "Purple Globe Blagueurs T-Shirt",
      "-1767270427": "Crewneck T-Shirt",
      "-436492741": "Blagueurs LS T-Shirt",
      "-1992528678": "Pink Santo Capra T-Shirt",
      "-759136287": "Red & Black Santo Capra T-Shirt",
      "-353484683": "White Striped Manor T-Shirt",
      "-804615506": "Purple Globe Blagueurs T-Shirt",
      "-939853169": "Blagueurs Brand T-Shirt",
      "-1240548401": "Crewneck T-Shirt",
      "-1479008414": "White Manor Zigzag T-Shirt",
      "-367237660": "Blagueurs LS T-Shirt",
      "-1150613374": "Blagueres Stripes T-Shirt",
      "-850809793": "Blagueurs Sports T-Shirt",
      "-1589423057": "Teal Blagueurs LS T-Shirt",
      "-1291520078": "B & W Blagueuers LS T-Shirt",
      "-2068473068": "Salmon Santo Capra T-Shirt",
      "-1767883031": "Blue Santo Capra T-Shirt",
      "-1503601054": "Yellow Santo Capra T-Shirt",
      "-1325993074": "Pink Santo Capra T-Shirt",
      "-560132885": "White Manor T-Shirt",
      "-923344481": "Lilac Manor T-Shirt",
      "-316429832": "Black Striped Manor T-Shirt",
      "-1293300087": "Blagueurs LS T-Shirt",
      "-188788173": "Blagueres Stripes T-Shirt",
      "-1044026304": "Salmon Santo Capra T-Shirt",
      "-1050221045": "Blue Striped Santo Capra T-Shirt",
      "-1591457936": "White Striped Manor T-Shirt",
      "-2077127285": "Purple Globe Blagueurs T-Shirt",
      "-1294177568": "Blagueurs Brand T-Shirt",
      "-462810296": "White Cuffed Shirt",
      "-155666459": "Silver Cuffed Shirt",
      "-769656510": "Off-White Cuffed Shirt",
      "-632059467": "Mint Cuffed Shirt",
      "-333566646": "Blue Striped Cuffed Shirt",
      "-169852722": "Pink Striped Cuffed Shirt",
      "-911087570": "Ocean Stripe Cuffed Shirt",
      "-867704060": "Charcoal Cuffed Shirt",
      "-1632237599": "Pale Blue Cuffed Shirt",
      "-1391024990": "Barely Blue Cuffed Shirt",
      "-1717895765": "Blue Woven Cuffed Shirt",
      "-1066480814": "Fuchsia Cuffed Shirt",
      "-1891018679": "Silver Cuffed Shirt",
      "-1851794728": "Mint Cuffed Shirt",
      "-1583940380": "Charcoal Cuffed Shirt",
      "-693410036": "Pale Blue Cuffed Shirt",
      "-2129413154": "Barely Blue Cuffed Shirt",
      "-1280171750": "Pink Check Cuffed Shirt",
      "-971192849": "Blue Woven Cuffed Shirt",
      "-1451291468": "Pale Olive Cuffed Shirt",
      "-50613332": "Fuchsia Cuffed Shirt",
      "-209094413": "Teal Fitted Suit Vest",
      "-448340882": "Red Fitted Suit Vest",
      "-231011245": "Black Fitted Suit Vest",
      "-1509559318": "Brown Fitted Suit Vest",
      "-1330731318": "Gray Fitted Suit Vest",
      "-2098476219": "Teal Fitted Suit Vest",
      "-851386386": "Red Fitted Suit Vest",
      "-622761460": "Gray Fitted Suit Vest",
      "-862139005": "Navy Fitted Suit Vest",
      "-1082805451": "Teal Fitted Suit Vest",
      "-1321593154": "Red Fitted Suit Vest",
      "-401210251": "White Fitted Suit Vest",
      "-30536119": "White Smooth Fitted Open",
      "-238422655": "Brown Smooth Fitted Open",
      "-477112051": "Polar Smooth Fitted Open",
      "-699795168": "Red Smooth Fitted",
      "-1472258805": "White Smooth Fitted",
      "-1308807033": "Brown Smooth Fitted",
      "-2081860512": "Polar Smooth Fitted",
      "-858067722": "Black Sharp Fitted Open",
      "-1769963454": "Gray Sharp Fitted Open",
      "-1786544568": "Red Sharp Fitted Open",
      "-251251595": "Gray Sharp Fitted",
      "-1145255453": "Navy Sharp Fitted",
      "-530541782": "Red Sharp Fitted",
      "-1442011517": "White Sharp Fitted",
      "-1811842447": "Brown Sharp Fitted",
      "-944250407": "Polar Sharp Fitted",
      "-328075323": "Black Skinny Suit Pants",
      "-46511459": "Black Regular Suit Pants",
      "-391437953": "Gray Regular Suit Pants",
      "-1899991633": "Navy Regular Suit Pants",
      "-1283573978": "Red Regular Suit Pants",
      "-1582460027": "White Regular Suit Pants",
      "-1893758670": "White Tie",
      "-1596052305": "Gray Tie",
      "-642943834": "Stone Tie",
      "-388295935": "Smoky Plaid Tie",
      "-454445919": "Navy Tie",
      "-2104856604": "Green Tie",
      "-335266079": "White Skinny Tie",
      "-1379548555": "Gray Skinny Tie",
      "-1644577318": "Brown Skinny Tie",
      "-1402159165": "Black Skinny Tie",
      "-1097178082": "Navy Skinny Tie",
      "-179482237": "Red Skinny Tie",
      "-750514831": "Green Skinny Tie",
      "-1724573356": "Orange Skinny Tie",
      "-156668318": "Stone Tie",
      "-802905767": "Tan Plaid Tie",
      "-505527092": "Gold Striped Tie",
      "-1144129332": "Gent Striped Tie",
      "-392978047": "Black Tie",
      "-33764269": "Blue Tie",
      "-1939019463": "Purple Tie",
      "-925989020": "White Skinny Tie",
      "-1664165762": "Stone Skinny Tie",
      "-1962101510": "Smoky Plaid Skinny Tie",
      "-1270511757": "Tan Plaid Skinny Tie",
      "-1571626106": "Gold Striped Skinny Tie",
      "-698332248": "Gent Skinny Tie",
      "-1013547784": "Orange Skinny Tie",
      "-1670762848": "Purple Skinny Tie",
      "-194996551": "Nasty Watermelon",
      "-823314047": "Creepy Butler",
      "-1038016535": "Dead Butler",
      "-264569828": "Rotten Butler",
      "-622756947": "Blue Hypnotic Alien",
      "-2008590682": "Green Hypnotic Alien",
      "-1777798615": "Red Hypnotic Alien",
      "-494465473": "Gray Haggard Witch",
      "-1286690297": "Red Bearded Lucifer",
      "-1556608550": "Orange Bearded Lucifer",
      "-923118242": "Black Bearded Lucifer",
      "-940968875": "White Skull Burst",
      "-1112612897": "Red Skull Burst",
      "-1025464096": "Pale Lycanthrope",
      "-1859500684": "Dark Lycanthrope",
      "-1616649625": "Gray Lycanthrope",
      "-1628310892": "Green Toxic Insect",
      "-250243350": "Purple Toxic Insect",
      "-1109166661": "Rotten Sewer Creature",
      "-1358342137": "Scabby Sewer Creature",
      "-2055319474": "Red Classic Lucifer",
      "-1657241662": "Orange Classic Lucifer",
      "-1846956391": "Classic Sack Slasher",
      "-674383264": "Bloody Sack Slasher",
      "-979659268": "Black Sack Slasher",
      "-572920362": "Black Combat Mask",
      "-220784684": "Tan Combat Mask",
      "-1340764638": "Black Skeletal",
      "-1095554211": "Gray Skeletal",
      "-2012430831": "Green Skeletal",
      "-156446322": "Black Combat Top",
      "-330187560": "Gray Combat Top",
      "-577757355": "Charcoal Combat Top",
      "-1046485131": "Tan Combat Top",
      "-1344191496": "Forest Combat Top",
      "-1142189829": "Gray Combat Sweater",
      "-845073306": "Charcoal Combat Sweater",
      "-1367555334": "Black Combat Pants",
      "-1816326761": "Forest Combat Pants",
      "-1646092872": "Gray Tact Gloves",
      "-1909064097": "Charcoal Tact Gloves",
      "-1892482999": "Tan Tact Gloves",
      "-2116295269": "Forest Tact Gloves",
      "-77210386": "Black Wool Gloves",
      "-301317645": "Gray Wool Gloves",
      "-604496433": "Charcoal Wool Gloves",
      "-374228670": "Tan Wool Gloves",
      "-1663903562": "Green Turtle Mask",
      "-1425738470": "Brown Turtle Mask",
      "-1948371777": "White Mouse Mask",
      "-603629878": "Blue T Tech Mask",
      "-1827715881": "Pink T Tech Mask",
      "-1597448118": "Green Grin Tech Mask",
      "-2137350162": "Orange Grin Tech Mask",
      "-1907541165": "Blue Grin Tech Mask",
      "-1121632239": "Black & Pink Tech Mask",
      "-1811091999": "Blue Dot Tech Mask",
      "-1138967040": "Orange T Tech Mask",
      "-789686708": "Stone Hyena Mask",
      "-1775017773": "Smoke Hyena Mask",
      "-1959217130": "Cream Sports Track Top",
      "-1299561316": "Intense Prolaps Sports Track Top",
      "-1060773613": "Tricolor Prolaps Sports Track Top",
      "-687338089": "Blue DS Sports Track Top",
      "-412438948": "Red DS Sports Track Top",
      "-2143035380": "Yellow DS Sports Track Top",
      "-1746989190": "Dark Stone Sports Track Top",
      "-1516918041": "Snow Sports Track Top",
      "-1725770778": "Purple Heat Sports Track Top",
      "-1435666821": "Orange Heat Sports Track Top",
      "-1897939104": "White Heat Sports Track Top",
      "-811581208": "Cyan Heat Sports Track Top",
      "-513874843": "Orange Prolaps Sports Track Top",
      "-1272608269": "Yellow Prolaps Sports Track Top",
      "-225062314": "Black 22 Bomber",
      "-685696147": "Yellow Detail Bomber",
      "-386285794": "Black Trickster Bomber",
      "-1192239349": "Yellow Trickster Bomber",
      "-1217663296": "Black Detail Bomber Zipped",
      "-1523365297": "Yellow Detail Bomber Zipped",
      "-1814485093": "Black Trickster Bomber Zipped",
      "-2124447064": "Yellow Trickster Bomber Zipped",
      "-1003912124": "Black Bigness Bomber Open",
      "-690706022": "Yellow Bigness Bomber Open",
      "-1451012360": "Black Detail Bomber Open",
      "-1162186394": "Yellow Detail Bomber Open",
      "-1915250783": "Black Trickster Bomber Open",
      "-1623868835": "Yellow Trickster Bomber Open",
      "-815100851": "Get Metal Tee",
      "-470043632": "Axe of Fury Tee",
      "-1678203893": "Qub3d Qub3s Tee",
      "-12234131": "Cyan Leopard Open",
      "-169132103": "Black and Neon Güffy Open",
      "-475423946": "White Painted Güffy Open",
      "-2122262810": "Blue Geometric Open",
      "-1357729267": "Pink Geometric Open",
      "-1817117882": "Splat Open",
      "-217236743": "Black Dotted Open",
      "-456483212": "Baby Blue Dotted Open",
      "-1451216036": "Green Leaves Open",
      "-1689610511": "Moss Leopard Open",
      "-315959295": "Red Leaves Open",
      "-1048897962": "Blue Savanna Open",
      "-1672754188": "Pink Savanna Open",
      "-1390449253": "Black Savanna Open",
      "-2001492796": "Pink Botanical Open",
      "-775623751": "Cream Office Unbuttoned",
      "-1043074113": "Shell Office Unbuttoned",
      "-754936296": "Dotty Office Unbuttoned",
      "-1666766490": "Pattern Office Unbuttoned",
      "-1363489395": "Blue Stripes Office Unbuttoned",
      "-2032839209": "Navy Office Unbuttoned",
      "-1709867945": "Ivory Office Unbuttoned",
      "-182561216": "Light Blue Office",
      "-1587335461": "Pattern Office",
      "-1894217146": "Blue Stripes Office",
      "-2098302478": "White Stripes Office",
      "-665019183": "Blue Check Office",
      "-36406719": "Ivory Office",
      "-890301321": "Ash Office",
      "-1530083277": "Gray Office",
      "-1434498239": "Purple Bigness Polo Shirt",
      "-1141510610": "White Bigness Polo Shirt",
      "-913427137": "Purple Bigness Sports Tee",
      "-1289426525": "White Champs Sports Tee",
      "-62325782": "White Camo Sports Tee",
      "-302973436": "Purple Broker Sports Tee",
      "-2070795448": "Purple Champs Sports Tee",
      "-1757130580": "Camo Bigness Sports Tee",
      "-1526240206": "White Bigness Sports Tee",
      "-1268053207": "White Baseball Sports Tee",
      "-962023516": "White Broker Sports Tee",
      "-586195855": "White Basketball Sports Tee",
      "-1730104748": "Yellow Sports Long Sleeve",
      "-1429711325": "Purple Sports Long Sleeve",
      "-1896309116": "Panic Sports Long Sleeve",
      "-2105997963": "Purple White Sports Long Sleeve",
      "-1423988420": "Green Service Shirt Tucked",
      "-1712748848": "Beige Service Shirt Tucked",
      "-236407099": "Moss Service Shirt Tucked",
      "-533589160": "Blue Service Shirt Tucked",
      "-1384131404": "Khaki Short Service Shirt Tucked",
      "-1207244342": "Green Short Service Shirt Tucked",
      "-179674032": "Beige Short Service Shirt Tucked",
      "-1610958414": "Black Short Service Shirt Tucked",
      "-1308205623": "Gray Short Service Shirt Tucked",
      "-1149996891": "White Short Service Shirt Tucked",
      "-839412309": "Moss Short Service Shirt Tucked",
      "-666129837": "Blue Short Service Shirt Tucked",
      "-2111289725": "Red Popped Leather Jacket",
      "-1879711202": "Black Popped Leather Jacket",
      "-1495461908": "Tan Popped Leather Jacket",
      "-1322310512": "Gray Popped Leather Jacket",
      "-957231083": "White Popped Leather Jacket",
      "-265308782": "Blue Cross Check Relaxed",
      "-1256871606": "Red Bold Check Relaxed",
      "-1024998162": "Black Bold Check Relaxed",
      "-1945446607": "White Bold Check Relaxed",
      "-1717538212": "Black Double Shirt Relaxed",
      "-87143729": "Green Cross Check Relaxed",
      "-270657274": "Ivory Double Shirt Relaxed",
      "-549488695": "Blush Double Shirt Relaxed",
      "-261769786": "Blue Stripe Check Relaxed",
      "-114931897": "Mustard Stripe Check Relaxed",
      "-1418023951": "Green Bold Check Relaxed",
      "-1316048406": "Black Double Shirt Open",
      "-1003399377": "Gray Double Shirt Open",
      "-706577775": "White Double Shirt Open",
      "-477817278": "Off White Double Shirt Open",
      "-236145903": "Blush Double Shirt Open",
      "-155037035": "White Double Shirt",
      "-617047166": "Tan Double Shirt",
      "-317833427": "Khaki Double Shirt",
      "-1371979388": "Off White Double Shirt",
      "-1072437959": "Blush Double Shirt",
      "-629974886": "Gray Heat Sports Track Pants",
      "-1715590700": "Cyan Sports Track Pants",
      "-1427846111": "Black Sports Track Pants",
      "-28216583": "Crimson Sports Track Pants",
      "-1886251652": "Navy Sports Track Pants",
      "-496649438": "Blue DS Sports Track Pants",
      "-190816361": "Red DS Sports Track Pants",
      "-1206261789": "Lemon Sports Track Pants",
      "-134278223": "Purple Heat Sports Track Pants",
      "-1416529189": "Orange Heat Sports Track Pants",
      "-923257424": "White Heat Sports Track Pants",
      "-1773776827": "Cyan Heat Sports Track Pants",
      "-1835301412": "Navy Large Cargos",
      "-2142052021": "Black Large Cargos",
      "-56090101": "Navy Large Cargos",
      "-1540230904": "Black Large Cargos",
      "-1696407958": "Khaki Large Cargos",
      "-570989418": "Stone Large Cargos",
      "-875904963": "Ash Large Cargos",
      "-1986315301": "Blue Large Cargos",
      "-958706838": "Black Armored",
      "-656216199": "Gray Armored",
      "-352971873": "Ash Armored",
      "-79776720": "White Armored",
      "-1577942679": "Smoke Armored",
      "-1274993274": "White & Green Armored",
      "-881178956": "Black Armored",
      "-1229251274": "Gray Armored",
      "-269611109": "Ash Armored",
      "-651697649": "White Armored",
      "-39671036": "Brown Armored",
      "-737126484": "Smoke Armored",
      "-1134090150": "White & Green Armored",
      "-792102059": "Black Armored",
      "-1024598114": "Gray Armored",
      "-1825275860": "Ash Armored",
      "-58633532": "Red & Gray Armored",
      "-288966833": "Brown Armored",
      "-530539901": "Smoke Armored",
      "-1885621263": "White Armored",
      "-1276609398": "Brown Armored",
      "-1574184687": "Smoke Armored",
      "-1237122749": "White & Green Armored",
      "-1149371373": "Black Armored",
      "-1447339890": "Gray Armored",
      "-1859573910": "Ash Armored",
      "-185372931": "Red & Gray Armored",
      "-500381328": "Brown Armored",
      "-975007520": "Smoke Armored",
      "-475804574": "White & Green Armored",
      "-1824364314": "Gray Armored",
      "-1624964949": "Ash Armored",
      "-1326799818": "White Armored",
      "-1011365424": "Red & Gray Armored",
      "-712610451": "Brown Armored",
      "-364472579": "Smoke Armored",
      "-193352861": "White & Green Armored",
      "-1280672624": "Black Armored",
      "-1530274097": "Gray Armored",
      "-1725184141": "Red & Gray Armored",
      "-472159671": "Black Armored",
      "-895731765": "Gray Armored",
      "-2120964675": "Brown Armored",
      "-62578662": "Black Armored",
      "-1827943003": "Ash Armored",
      "-1595381410": "White Armored",
      "-1214048557": "Brown Armored",
      "-982994338": "Smoke Armored",
      "-605298844": "White & Green Armored",
      "-1957636585": "Black Armored",
      "-489814768": "White Armored",
      "-784834075": "Red & Gray Armored",
      "-962376517": "Brown Armored",
      "-1209749698": "Smoke Armored",
      "-834299469": "Gray Armored",
      "-73862055": "Ash Armored",
      "-1904298392": "Black Armored",
      "-365990456": "Gray Armored",
      "-744669020": "Ash Armored",
      "-984177641": "White Armored",
      "-1052271623": "Red & Gray Armored",
      "-903074374": "White & Green Armored",
      "-106188732": "Black Armored",
      "-672371514": "Gray Armored",
      "-311355441": "White Armored",
      "-1899013491": "Red & Gray Armored",
      "-1659799791": "Brown Armored",
      "-1542650616": "Smoke Armored",
      "-1303666299": "White & Green Armored",
      "-1208373599": "Abominable Snowman",
      "-53584549": "Smashed Mrs Claus",
      "-183485084": "Rebel Bad Elf",
      "-1082666448": "Gangsta Bad Elf",
      "-795380625": "Badass Bad Elf",
      "-2137188661": "Bruised Bad Santa",
      "-344134515": "Grumpy Bad Santa",
      "-650688510": "Filthy Bad Santa",
      "-1697704339": "Green Festive Luchador",
      "-1643500314": "Dark Pudding",
      "-2133724558": "Light Pudding",
      "-1334028824": "White LS Beast",
      "-731087405": "LS Visor Beast",
      "-1245626243": "Brown Visor Beast",
      "-56402821": "Patriot Sweatband Beast",
      "-1147915719": "Brown Festive Beast",
      "-1379297628": "Blond Festive Beast",
      "-586582749": "Silver Festive Beast",
      "-850378710": "Snowflake Pajamas",
      "-2098091154": "Snowman Pajamas",
      "-1331493168": "Red Tree Pajamas",
      "-564272571": "Festive Tree Pajamas",
      "-1735076172": "Green Tree Pajamas",
      "-566366372": "Black Check Pajamas",
      "-866104415": "Candy Cane Pajamas",
      "-105273769": "Stocking Pajamas",
      "-403504438": "Green Barfs Pajamas",
      "-2134002551": "Penguin Pajamas",
      "-636627220": "Cerveza Barracho V Neck",
      "-145419902": "Pink V Neck",
      "-656754674": "Gray Flip-Flops",
      "-340894283": "Green Flip-Flops",
      "-392800371": "Purple Flip-Flops",
      "-253728735": "Lilac Flip-Flops",
      "-871719306": "Blue Two-Tone Flip-Flops",
      "-700599588": "Red Flip-Flops",
      "-1983429828": "Shaggy Curls Dark Brown",
      "-457639650": "Surfer Dude Dark Brown",
      "-94952354": "Surfer Dude Light Brown",
      "-1545668757": "Surfer Dude Black",
      "-1672183828": "Cerveza Barracho V Neck",
      "-1046918539": "Los Santos V Neck",
      "-1479403801": "Pink V Neck",
      "-44268217": "Red Checked Boards",
      "-1219513062": "Lime Boards",
      "-1590178565": "Green Boards",
      "-365568266": "Gray Plaid Boards",
      "-138446327": "Aqua Floral Boards",
      "-2034722819": "Pink Boards",
      "-145679239": "Gray Chinos",
      "-763407658": "Brown Plaid Chinos",
      "-1155840382": "Tropics Running",
      "-1698011990": "Aqua Plaid Running",
      "-1443101939": "White Plaid Running",
      "-1924511318": "Brown Floral Running",
      "-475531676": "Blue Banded Running",
      "-237137197": "Fruity Floral Running",
      "-1947868017": "Silver Chain",
      "-1318015068": "Bronze Chain",
      "-809285820": "Bronze Chain",
      "-271192748": "Light Gray Suit Vest",
      "-1064563007": "Olive Suit Vest",
      "-1886868289": "Cream Suit Vest",
      "-145212507": "Light Gray Suit Vest",
      "-1370740338": "Olive Suit Vest",
      "-1615373667": "Silver Suit Vest",
      "-1374062751": "White Suit Vest",
      "-1610117883": "Purple Suit Vest",
      "-1982373727": "Lobster Suit Vest",
      "-872755950": "Navy Tucked",
      "-1368878610": "Green Tucked",
      "-2029993185": "Lemon Tucked",
      "-1724160108": "Pink Tucked",
      "-1888693269": "Patriot Plaid Tucked",
      "-1591117980": "Purple Check Tucked",
      "-455061071": "White Cuffed Shirt",
      "-768922553": "Silver Cuffed Shirt",
      "-151502134": "Mint Cuffed Shirt",
      "-250038517": "Blue Striped Cuffed Shirt",
      "-477193225": "Pink Striped Cuffed Shirt",
      "-1990976870": "Charcoal Cuffed Shirt",
      "-157879010": "Pale Blue Cuffed Shirt",
      "-1103231891": "Blue Woven Cuffed Shirt",
      "-783649692": "Blue Check Shirt",
      "-1516536717": "Mint Check Shirt",
      "-1470397961": "Gray Check Shirt",
      "-593565059": "Forest Check Shirt",
      "-286945526": "Tan Check Shirt",
      "-2017140386": "Fruity Check Shirt",
      "-1235599732": "Aqua Check Shirt",
      "-1065332020": "Red Check Shirt",
      "-1392082519": "Gray Check Shirt",
      "-88859389": "Patriot Check Shirt",
      "-513152401": "Forest Check Shirt",
      "-206550874": "Ash Check Shirt",
      "-445797343": "Lemon Check Shirt",
      "-173716332": "Orange Check Shirt",
      "-538304226": "Fruity Check Shirt",
      "-592242000": "Aqua Check Shirt",
      "-831095241": "Charcoal Check Shirt",
      "-1092100326": "Teal Check Shirt",
      "-1465994616": "Red Check Shirt",
      "-1276193136": "Fashion Hockey",
      "-1559153451": "Vile Zombie Hockey",
      "-415819903": "Hound Hockey",
      "-117163237": "Wolf Hockey",
      "-1649310601": "Dust Devils Hockey",
      "-1351047163": "Striped Rampage Hockey",
      "-2110217579": "Skull Hockey",
      "-189404974": "Metal Warrior",
      "-26969045": "Neon Warrior",
      "-575063339": "Deadeye Warrior",
      "-274735454": "Stone Warrior",
      "-1321442852": "Lightning Warrior",
      "-1023802025": "Wooden Warrior",
      "-1582757911": "Chocolate Oxfords",
      "-815013010": "Chestnut Oxfords",
      "-1528525848": "Gray Oxfords",
      "-683675490": "Navy Oxfords",
      "-986853646": "Tan Oxfords",
      "-1368612536": "Ash Oxfords",
      "-1599339065": "Gray Two-Tone Oxfords",
      "-890021291": "Topaz Oxfords",
      "-141806714": "Lime Oxfords",
      "-506066918": "Yellow Oxfords",
      "-1523434025": "Black Slip-Ons",
      "-1989474743": "Red Slip-Ons",
      "-130950950": "Tan Slip-Ons",
      "-1889007800": "Black & White Slip-Ons",
      "-2136836936": "Brown Slip-Ons",
      "-1625493211": "Short Side Part Dark Brown",
      "-1112723899": "Short Side Part Light Brown",
      "-1432451032": "Short Side Part Auburn",
      "-647502406": "Short Side Part Blond",
      "-925481833": "Short Side Part Black",
      "-1168328595": "High Slicked Sides Dark Brown",
      "-1421993424": "High Slicked Sides Light Brown",
      "-576454917": "High Slicked Sides Auburn",
      "-438399124": "High Slicked Sides Blond",
      "-114454818": "Light Gray Jacket",
      "-759643659": "Purple Jacket",
      "-469605240": "Lobster Jacket",
      "-1885750320": "Ash Jacket",
      "-1819024311": "Yellow Check Vest",
      "-2100542778": "Silver Vest",
      "-1775867526": "Baby Blue Vest",
      "-1331552587": "Pale Brown Vest",
      "-866672413": "Navy Tucked",
      "-583449946": "Green Tucked",
      "-254645800": "Ash Tucked",
      "-1149632880": "Purple Check Tucked",
      "-192707261": "Blue Double Breasted",
      "-1383756359": "Blue Tailored Jacket",
      "-114885052": "Light Gray Regular",
      "-402498565": "Olive Regular",
      "-416151213": "Gray Plaid Regular",
      "-1935629011": "Purple Regular",
      "-237211741": "Subtle Blue Regular",
      "-543110356": "Brown Regular",
      "-745032934": "Vintage Woven Regular",
      "-1034743663": "Cream Regular",
      "-485240607": "Silver Plaid Baggy",
      "-119931795": "Gray Plaid Baggy",
      "-953149158": "White Baggy",
      "-1684337233": "Purple Baggy",
      "-1529470939": "Lobster Baggy",
      "-1878462": "Subtle Blue Baggy",
      "-2074714330": "Cream Baggy",
      "-1155380035": "Ash Baggy",
      "-979017277": "Navy Plaid Baggy",
      "-821098486": "Gold Striped Tie",
      "-604167706": "Gent Striped Tie",
      "-909078407": "Green Tie",
      "-1482601445": "Orange Tie",
      "-286958942": "Yellow Tie",
      "-48007394": "Purple Tie",
      "-854803715": "Stone Bowtie",
      "-1261991309": "Ocean Bowtie",
      "-1499664858": "Sandy Bowtie",
      "-521279091": "Navy Bowtie",
      "-1691427312": "Red Bowtie",
      "-2049395868": "Green Bowtie",
      "-768979962": "Purple Bowtie",
      "-1132453710": "Brown Bowtie",
      "-160448318": "Blue Skinny Tie",
      "-1912785984": "Tan Plaid Skinny Tie",
      "-1599055578": "Gold Striped Skinny Tie",
      "-1300562757": "Gent Skinny Tie",
      "-1607265206": "Red Skinny Tie",
      "-780208415": "Green Skinny Tie",
      "-1138373585": "Orange Skinny Tie",
      "-302862392": "Yellow Skinny Tie",
      "-2054398215": "Stone Skinny Tie",
      "-1286784386": "Smoky Plaid Skinny Tie",
      "-1951499772": "White Tie",
      "-1438501077": "Black Tie",
      "-1720740474": "Blue Tie",
      "-1295529930": "Navy Tie",
      "-2074449044": "Green Tie",
      "-1614273977": "Yellow Tie",
      "-1862171462": "Purple Tie",
      "-374599328": "Gent Skinny Tie",
      "-603430494": "Navy Skinny Tie",
      "-1470563768": "Red Skinny Tie",
      "-1417248597": "Purple Skinny Tie",
      "-1117328457": "Brown Bear",
      "-888535299": "Grey Bear",
      "-568686548": "Golden Bison",
      "-1671002283": "Black Bull",
      "-1902280196": "Pink Vulture",
      "-115943475": "Black Vulture",
      "-1062841468": "Black Wolf",
      "-1175339092": "Mullet Dark Brown",
      "-1473504223": "Mullet Light Brown",
      "-694880014": "Mullet Auburn",
      "-1030041346": "Mullet Blonde",
      "-1955773863": "Vertical Flag Vest",
      "-1431921320": "Star Tailcoat",
      "-226185961": "Red Tailcoat",
      "-806149045": "Freedom T-Shirt",
      "-451719537": "American Flag T-Shirt",
      "-1157788845": "Stripy Vest Shirt",
      "-1305325922": "Blue Vertical Vest Shirt",
      "-1968210019": "Blue American Vest Shirt",
      "-473747009": "Blue Star Vest Shirt",
      "-1768914967": "Blue Vertical Vest Shirt",
      "-1136866487": "Blue Star Vest Shirt",
      "-829788188": "Stripy Star Vest Shirt",
      "-670596386": "White Star Vest Shirt",
      "-761663767": "Freedom T-Shirt",
      "-1070577130": "American Flag T-Shirt",
      "-797585268": "Freedom T-Shirt",
      "-1796974218": "American Flag T-Shirt",
      "-560520769": "USA Bow Tie",
      "-1117364386": "White Star Bow Tie",
      "-1595906481": "Blue Tip Oxfords",
      "-1651318884": "Purple Tip Oxfords",
      "-1421509887": "Gray Tip Oxfords",
      "-806927292": "Brown Tip Oxfords",
      "-556998129": "Hazard Tip Oxfords",
      "-1265463909": "All Red Tip Oxfords",
      "-1016124588": "Charcoal Tip Oxfords",
      "-27166014": "Blue Check Double Suit",
      "-273228435": "Red Pinstripe Double Suit",
      "-485413449": "Beige Check Double Suit",
      "-254359230": "Royal Check Double Suit",
      "-2118057713": "Dusk Check Double Suit",
      "-1809078812": "Purple Check Double Suit",
      "-1522415600": "Gray Check Double Suit",
      "-1212584705": "Sky Check Double Suit",
      "-886664231": "Chocolate Check Double Suit",
      "-646500230": "Mustard Pinstripe Double Suit",
      "-290891042": "Crimson Check Double Suit",
      "-2009854621": "Red Pinstripe Suit Vest",
      "-1978842126": "Royal Check Suit Vest",
      "-1795610899": "Dusk Check Suit Vest",
      "-46041296": "Sky Check Suit Vest",
      "-353316209": "Chocolate Check Suit Vest",
      "-1513855091": "Red Pinstripe Suit Pants",
      "-795755217": "Dusk Check Suit Pants",
      "-1095100032": "Purple Check Suit Pants",
      "-788873731": "Gray Check Suit Pants",
      "-1096345258": "Sky Check Suit Pants",
      "-331516798": "Chocolate Check Suit Pants",
      "-634204051": "Mustard Pinstripe Suit Pants",
      "-191298247": "Classic Check Suit Pants",
      "-2129094253": "Blue Dot Boxer Shorts",
      "-421370587": "Red Plaid Boxer Shorts",
      "-675363106": "Lilac Plaid Boxer Shorts",
      "-448105673": "Red Leopard Boxer Shorts",
      "-611098679": "White Heart Boxer Shorts",
      "-1111088081": "Black Heart Boxer Shorts",
      "-1406369540": "Red Heart Boxer Shorts",
      "-1912159043": "Purple Stripe Boxer Shorts",
      "-73319856": "Black Full Bowtie",
      "-1220114963": "Dual Driving Loafers",
      "-295791635": "Gray Trench Coat",
      "-1269764262": "Green Overcoat",
      "-2063352717": "Gold Geo Print Sweater",
      "-2113938364": "Brown P Wing Sweater",
      "-1874167591": "Classic SN Print Sweater",
      "-1774680851": "Color Diamond Sweater",
      "-1544937392": "Gold Diamond Sweater",
      "-1259355557": "Color SN Print Sweater",
      "-928126505": "Color Geo Sweater",
      "-2002697298": "Black Geo Print Sweater",
      "-1107743139": "Silver Geo Print Sweater",
      "-2040381644": "Classic P Print Sweater",
      "-887791250": "Platinum Loose Link Chain",
      "-1880701298": "Green Plaid Woolen Scarf",
      "-1557140192": "Tan Plaid Woolen Scarf",
      "-2015915942": "Gold Loose Link Chain",
      "-475188865": "Gold Belcher Chain",
      "-715221790": "Platinum Belcher Chain",
      "-680819117": "Gold Pretzel Chain",
      "-688337176": "Gold Curb Chain",
      "-845441081": "Platinum Heavy Curb Chain",
      "-88383759": "Platinum Heavy Square Chain",
      "-321517695": "Gold Square Chain",
      "-793751212": "Gold Popcorn Chain",
      "-1654396232": "Platinum Popcorn Chain",
      "-923727681": "Gold Pretzel Chain",
      "-356293222": "Gold Rope Chain",
      "-49968610": "Platinum Rope Chain",
      "-1121804084": "Gold Curb Chain",
      "-1430553602": "Platinum Curb Chain",
      "-459309944": "Gold Heavy Curb Chain",
      "-1360391906": "Platinum Heavy Curb Chain",
      "-1909421908": "Gold Heavy Square Chain",
      "-1537493758": "Platinum Heavy Square Chain",
      "-2068038313": "Gold Square Chain",
      "-219133312": "Gold Popcorn Chain",
      "-1774939902": "Platinum Popcorn Chain",
      "-1118763938": "Gold Rope Chain",
      "-1329127411": "White Studded Sneakers",
      "-1174695379": "Golden Hi Tops",
      "-871296553": "Dark Gray Leather Fur Jacket",
      "-23055941": "Ochre Leather Fur Jacket",
      "-349369643": "White Leather Fur Jacket",
      "-1749490706": "Fall Leather Fur Jacket",
      "-1988475023": "Hunter Leather Fur Jacket",
      "-1266541180": "All Black Leather Fur Jacket",
      "-325512701": "Gold Shiny T-Shirt",
      "-730964362": "Beige Wool Coat",
      "-2116208319": "Gray Wool Coat",
      "-1734973773": "Black Wool Coat",
      "-1488207052": "Pegasus T-Shirt",
      "-979806899": "Gold SN Print T-Shirt",
      "-440134238": "Brown Geo T-Shirt",
      "-466371325": "Brown Print T-Shirt",
      "-748610722": "Pink Full Print T-Shirt",
      "-1648169122": "Classic SN Bomber",
      "-232417242": "Black SN Bomber",
      "-1454307714": "Color SN Bomber",
      "-680009013": "Brown Diamond Bomber",
      "-255736724": "Red Link Zipped Bomber",
      "-322101592": "Black SN Zipped Bomber",
      "-279174202": "Color SN Zipped Bomber",
      "-734925454": "Bright Neon Zipped Bomber",
      "-1235177008": "Black Print Zipped Bomber",
      "-2068689304": "Black Dix Zipped Bomber",
      "-523943118": "Pegasus T-Shirt",
      "-1954179180": "Gold SN Print T-Shirt",
      "-1547253738": "Brown SN Print T-Shirt",
      "-1869635156": "Pink SN PRB T-Shirt",
      "-1396254182": "Brown Geo PRB T-Shirt",
      "-1087078667": "Fake Sessanta Nove T-Shirt",
      "-918383855": "Color Geo PRB T-Shirt",
      "-648596678": "Color Geo T-Shirt",
      "-371076017": "Brown Geo T-Shirt",
      "-1655915458": "Pink Full Print T-Shirt",
      "-2133623661": "Andromeda T-Shirt",
      "-1227298659": "Shield & Sword T-Shirt",
      "-1469232186": "Full Shield T-Shirt",
      "-594103280": "Brown Full Print T-Shirt",
      "-832170065": "Brown Print T-Shirt",
      "-1129841280": "Gold SN Necklace",
      "-1524543921": "Platinum SN Necklace",
      "-1135148661": "Gold Skull Necklace",
      "-1327710253": "Gold Zorse Necklace",
      "-1095869578": "Platinum Zorse Necklace",
      "-469120694": "Gold LC Necklace",
      "-164074073": "Platinum LC Necklace",
      "-1098854545": "Gold Le Chien Necklace",
      "-2084513308": "Platinum Le Chien Necklace",
      "-415222822": "Platinum Balaclava Necklace",
      "-1508012427": "Gold Zorse Necklace",
      "-79644486": "Platinum Zorse Necklace",
      "-1309474302": "Platinum LC Necklace",
      "-1761656989": "Gold Dix Necklace",
      "-1523590204": "Platinum Dix Necklace",
      "-1984302329": "Gold Le Chien Necklace",
      "-1022564948": "Platinum Le Chien Necklace",
      "-1812488092": "Gold SN Necklace",
      "-944475698": "Red Suede Loafers",
      "-713687136": "Gray Canvas Slip-ons",
      "-1623223500": "Black Canvas Slip-ons",
      "-102479744": "White Canvas Slip-ons",
      "-694058501": "Blue Canvas Slip-ons",
      "-396941978": "Stripy Canvas Slip-ons",
      "-107067508": "Brown Canvas Slip-ons",
      "-581726473": "Tropical Canvas Slip-ons",
      "-351983014": "Green Canvas Slip-ons",
      "-115810438": "Red Ankle Boots",
      "-870473493": "Zig Zag Cornrows",
      "-41599036": "Snail Cornrows",
      "-40571845": "Hightop",
      "-2048526526": "Chianski Hippy Hoodie",
      "-1124866727": "Dense Hippy Hoodie",
      "-1326680387": "Black Stripe Hippy Hoodie",
      "-1574545103": "Rasta Hippy Hoodie",
      "-1247838169": "Trickster Hippy Hoodie",
      "-404921182": "Fruntalot Hippy Hoodie",
      "-634762948": "Yeti Hippy Hoodie",
      "-1940771447": "Sweatbox Hippy Hoodie",
      "-1480534047": "Black Utility Bomber",
      "-1250462898": "Beige Utility Bomber",
      "-1366259534": "Red Top Utility Bomber",
      "-308345130": "Steel Utility Bomber",
      "-2141452008": "Teal Utility Bomber",
      "-1775749968": "Gray Utility Bomber",
      "-587447721": "Urban Utility Bomber",
      "-223515207": "Viper Utility Bomber",
      "-816339186": "Forest Utility Bomber",
      "-107983022": "Navy Work Shirt",
      "-609850580": "Red Bold Check",
      "-1376284721": "Black Bold Check",
      "-1621426259": "Green Cross Check",
      "-1406101160": "Purple Cross Check",
      "-1177045850": "Tan Cross Check",
      "-2065872210": "Gray Stripe Check",
      "-1827248352": "Mustard Stripe Check",
      "-1621357798": "Blue Cross Open Check",
      "-1732608541": "Brown Cross Open Check",
      "-1897779885": "Black Bold Open Check",
      "-1658074650": "Mustard Bold Open Check",
      "-1283590518": "Purple Bold Open Check",
      "-960586513": "White Bold Open Check",
      "-2114432929": "Green Cross Open Check",
      "-1930140085": "Tan Cross Open Check",
      "-1014050947": "Tan Work Shorts",
      "-776246314": "Blue Work Shorts",
      "-1017172525": "Gold Rim Necklace",
      "-731451623": "Front and Back Crew Emblem",
      "-131721541": "Fresh Runners",
      "-9414030": "Black Hi Top Sneakers",
      "-718404114": "White Hi Top Sneakers",
      "-458676004": "Earth Hi Top Sneakers",
      "-792002272": "Neon Hi Top Sneakers",
      "-1052745205": "Crimson Hi Top Sneakers",
      "-1283602810": "Sunrise Hi Top Sneakers",
      "-1646945482": "Sting Hi Top Sneakers",
      "-904399950": "Court Hi Top Sneakers",
      "-487546509": "Dual Hi Top Sneakers",
      "-1233860484": "Ice Hi Top Sneakers",
      "-869207052": "Trio Hi Top Sneakers",
      "-1578721440": "Pink Hi Top Sneakers",
      "-1347536145": "Hazard Hi Top Sneakers",
      "-1852080434": "Camo Hi Top Sneakers",
      "-763800270": "Classic Cornrows",
      "-1199098448": "Lightning Cornrows",
      "-1367601731": "Whipped Cornrows",
      "-726295394": "White Baggy T-Shirt",
      "-495437789": "Black Baggy T-Shirt",
      "-1323117191": "Gray Baggy T-Shirt",
      "-1874303648": "White Football Shirt",
      "-2105652788": "Gray Football Shirt",
      "-38338655": "Gray Loose Polo",
      "-343647428": "Yellow Sleeve Loose Polo",
      "-695033712": "Green Stripe Loose Polo",
      "-1471298553": "Trio Loose Polo",
      "-82810485": "Caramel Loose Polo",
      "-856781496": "Purple Loose Polo",
      "-834887507": "Brown Stripe Loose Polo",
      "-147295620": "Green Loose Polo",
      "-448573806": "Pink Loose Polo",
      "-659868318": "Blue Stripe Loose Polo",
      "-960392817": "Hot Pink Loose Polo",
      "-1370562390": "Light Gray Loose Polo",
      "-1392060954": "Broker Baseball Shirt",
      "-1481297607": "Corkers Windshirt",
      "-1724148666": "LS Windshirt",
      "-990319680": "SA Windshirt",
      "-1230876909": "Squeezers Windshirt",
      "-5523304": "Navy Windbreaker Jacket",
      "-1052141082": "Gray Sport Hoodie",
      "-159028416": "Red Double P Varsity",
      "-387657729": "Yellow Magnetics Varsity",
      "-2074343697": "Black Hinterland Varsity",
      "-1116735210": "Black Broker Print Varsity",
      "-1843944858": "Gray Broker Print Varsity",
      "-1155436260": "Red Double P Open Varsity",
      "-1561019080": "Blue Double P Open Varsity",
      "-1867769689": "Blue LS Open Varsity",
      "-952989370": "Gray Broker Print Open Varsity",
      "-646697527": "Black Broker Open Varsity",
      "-492945379": "White Trickster Open Varsity",
      "-184884010": "Black Trickster Open Varsity",
      "-1876485328": "Brown WSBL Open Varsity",
      "-468286206": "White Sweater",
      "-2015951985": "Yellow Jogging Shorts",
      "-1718573310": "Green Jogging Shorts",
      "-509364437": "Brown Jogging Shorts",
      "-1656384900": "Black Loose Jeans",
      "-154154471": "Platinum Magnetics Necklace",
      "-705512617": "Gold Magnetics Necklace",
      "-404398276": "Platinum Magnetics Necklace",
      "-1990517646": "Green Flight Jacket",
      "-1753290329": "Green Flight Pants",
      "-293244159": "Brown Digital Zombie",
      "-893732803": "Aqua Camo Zombie",
      "-1662591858": "Splinter Zombie",
      "-1847802230": "Moss Zombie",
      "-1535120432": "Sand Zombie",
      "-1149235977": "Green Digital Zombie",
      "-975818196": "Black Putrefied Zombie",
      "-669198663": "Slate Putrefied Zombie",
      "-1129111578": "Green Putrefied Zombie",
      "-175566459": "Moss Camo Putrefied Zombie",
      "-1977832919": "Moss Digital Zombie",
      "-1612261955": "Gray Woodland Zombie",
      "-177372294": "Splinter Tactical Ski",
      "-51440995": "Peach Camo Tactical Ski",
      "-1520049272": "Light Woodland Tactical Ski",
      "-1997722985": "Sand Tactical Ski",
      "-54318405": "Moss Digital Tactical Ski",
      "-361363935": "Gray Woodland Tactical Ski",
      "-1148642677": "Weathered Oni",
      "-1986245180": "Plum Oni",
      "-1291837301": "Black and Yellow Oni",
      "-1530756080": "Orange Oni",
      "-524944394": "Gold Stone Possessed Oni",
      "-765501623": "Stone Possessed Oni",
      "-1293868975": "Gray and Orange Oni",
      "-1525185346": "White Possessed Oni",
      "-503093377": "Sandstone Oni",
      "-911553336": "Gray and Gold Oni",
      "-680957883": "Stone Oni",
      "-282486843": "Sea Green Oni",
      "-51694776": "Purple Oni",
      "-1741466656": "White Painted Oni",
      "-898320286": "Gold Painted Oni",
      "-229734371": "Red Painted Oni",
      "-823213738": "Black Possessed Oni",
      "-6151484": "Brown Oni",
      "-578395861": "Blue Digital Snake Skull",
      "-1958888293": "Brown Digital Snake Skull",
      "-896619492": "Flecktarn Snake Skull",
      "-1169552493": "Light Woodland Snake Skull",
      "-581742175": "Moss Snake Skull",
      "-1156510435": "Sand Snake Skull",
      "-1460380928": "Red Snake Skull",
      "-1412210498": "White Snake Skull",
      "-110323465": "Gray Woodland Snake Skull",
      "-268976706": "Brown Digital Vent",
      "-1785455695": "Contrast Camo Vent",
      "-1492861294": "Cobble Vent",
      "-1329671674": "Peach Camo Vent",
      "-1030720087": "Brushstroke Vent",
      "-2052490276": "Sand Vent",
      "-1114973979": "Green Digital Vent",
      "-931303734": "Gray Digital Vent",
      "-1770616131": "Peach Digital Vent",
      "-1532975343": "Fall Vent",
      "-2121572129": "Crosshatch Vent",
      "-451098570": "Clean Skull",
      "-223943862": "Weathered Skull",
      "-1840507790": "Tan Leather Skull",
      "-1509278738": "Chocolate Leather Skull",
      "-2140049215": "Possessed Skull",
      "-1696391648": "Orange Swirl-Eyed Skull",
      "-1451050145": "Leather Solar-Eyed Skull",
      "-138848309": "Terracotta Skull",
      "-1159138357": "Moss Skull",
      "-2001105043": "Sand Skull",
      "-1755566926": "Inked Skull",
      "-974151005": "Back Crew Emblem",
      "-1695552802": "Back Crew Emblem",
      "-283541267": "Back Crew Emblem",
      "-2099340970": "Back Crew Emblem",
      "-695364761": "White Hawk & Little Hoodie",
      "-2098369500": "White Vom Feuer Hoodie",
      "-1172743557": "Black Vom Feuer Hoodie",
      "-1883175477": "White Coil Hoodie",
      "-869990766": "Black Ammu-Nation Hoodie",
      "-542628448": "White Ammu-Nation Hoodie",
      "-1649259892": "Blue Digital Cross Trainers",
      "-1410046192": "Brown Digital Cross Trainers",
      "-881882496": "Aqua Camo Cross Trainers",
      "-81565209": "Splinter Cross Trainers",
      "-1649791238": "Flecktarn Cross Trainers",
      "-2026044896": "Light Woodland Cross Trainers",
      "-1917736309": "Gray Digital Cross Trainers",
      "-380287992": "Venom Tech Boots",
      "-467650146": "Desert Tech Boots",
      "-1444597148": "Black Tech Boots",
      "-1072406846": "Beige Tech Boots",
      "-832373921": "Brown Tech Boots",
      "-727250969": "Moss Tech Boots",
      "-2056656530": "Chocolate Tech Boots",
      "-1916802751": "Sage Tactical Boots",
      "-1537206651": "Blue Tactical Boots",
      "-707888799": "Khaki Tactical Boots",
      "-940909158": "Charcoal Tactical Boots",
      "-650117048": "Walnut Tactical Boots",
      "-53131406": "Olive Tactical Boots",
      "-260133783": "Sage Tactical Boots",
      "-1999282920": "Charcoal Tactical Boots",
      "-995273541": "Silver Tactical Boots",
      "-325991567": "Aqua Camo Sleeveless",
      "-1564987421": "Splinter Sleeveless",
      "-2030962601": "Light Woodland Sleeveless",
      "-2113142869": "Green Digital Sleeveless",
      "-733993962": "Moss Digital Sleeveless",
      "-979204389": "Gray Woodland Sleeveless",
      "-6670911": "Contrast Camo Sleeveless",
      "-1741986075": "Light Woodland Sleeveless",
      "-1846125957": "Moss Sleeveless",
      "-2092647144": "Sand Sleeveless",
      "-1744981228": "Gray Woodland Sleeveless",
      "-1342603755": "Blue Digital Denim Cut",
      "-1105323426": "Brown Digital Denim Cut",
      "-1250081277": "Aqua Camo Denim Cut",
      "-1354352235": "Splinter Denim Cut",
      "-1624565409": "Contrast Camo Denim Cut",
      "-39692716": "Peach Camo Denim Cut",
      "-367087795": "Flecktarn Denim Cut",
      "-1615274604": "Gray Digital Denim Cut",
      "-425399445": "Peach Digital Denim Cut",
      "-213646167": "Fall Denim Cut",
      "-903204234": "Dark Woodland Denim Cut",
      "-659533950": "Crosshatch Denim Cut",
      "-1383577809": "Urban Collared Parka",
      "-121053781": "Forest Collared Parka",
      "-934693495": "Dotwork Collared Parka",
      "-196768384": "Blue Camo Collared Parka",
      "-905478103": "Peach Collared Parka",
      "-1795390215": "Urban Closed Parka",
      "-1028759460": "Forest Closed Parka",
      "-1957233093": "Tan Camo Closed Parka",
      "-1892874677": "Blue Camo Closed Parka",
      "-39099570": "Urban Patched Closed Parka",
      "-1278226544": "Forest Patched Closed Parka",
      "-112603758": "Peach Closed Parka",
      "-1489786521": "Red Closed Parka",
      "-1032691740": "Teal Closed Parka",
      "-2044414645": "Blue Digital Sleeveless Shirt",
      "-400522": "Aqua Camo Sleeveless Shirt",
      "-713781652": "Splinter Sleeveless Shirt",
      "-382749214": "Contrast Camo Sleeveless Shirt",
      "-1226780347": "Cobble Sleeveless Shirt",
      "-66888775": "Moss Sleeveless Shirt",
      "-763310590": "Green Digital Sleeveless Shirt",
      "-34185673": "Blue Sleeveless Shirt",
      "-1061016955": "Gray Digital Sleeveless Shirt",
      "-564132083": "Blue Digital Combat Shirt",
      "-1957860173": "Splinter Combat Shirt",
      "-205931118": "Peach Camo Combat Shirt",
      "-678263548": "Flecktarn Combat Shirt",
      "-430234987": "Sand Combat Shirt",
      "-1138176627": "Slate Combat Shirt",
      "-1808532064": "White Combat Shirt",
      "-2094703741": "Blue Combat Shirt",
      "-1846284746": "Dark Woodland Combat Shirt",
      "-1941249312": "Moss Digital Combat Shirt",
      "-647594726": "Gray Woodland Combat Shirt",
      "-333196836": "Blue Digital Service Shirt",
      "-1714064132": "Aqua Camo Service Shirt",
      "-1477504721": "Splinter Service Shirt",
      "-153047263": "Contrast Camo Service Shirt",
      "-765663734": "Peach Camo Service Shirt",
      "-516914239": "Brushstroke Service Shirt",
      "-485423238": "Moss Service Shirt",
      "-253451487": "Sand Service Shirt",
      "-408613502": "Black Service Shirt",
      "-639766044": "Slate Service Shirt",
      "-1366189236": "Khaki Service Shirt",
      "-1596456999": "Blue Service Shirt",
      "-1705103794": "Fall Service Shirt",
      "-1537129900": "Dark Woodland Service Shirt",
      "-512246656": "Gray Woodland Service Shirt",
      "-1723012873": "Blue Digital Service Short",
      "-313053049": "Splinter Service Short",
      "-1507909096": "Peach Camo Service Short",
      "-1735555339": "Brushstroke Service Short",
      "-545549104": "Flecktarn Service Short",
      "-915674947": "Moss Service Short",
      "-1155707872": "Sand Service Short",
      "-991403246": "White Service Short",
      "-1221212243": "Brown Service Short",
      "-279767802": "Dark Woodland Service Short",
      "-97572162": "Crosshatch Service Short",
      "-239398778": "Brown Sleeveless Puffer",
      "-134442090": "Ice Sleeveless Puffer",
      "-1975044063": "Orange Sleeveless Puffer",
      "-917424588": "Cyan Sleeveless Puffer",
      "-1728621183": "Blue Sleeveless Puffer",
      "-449275979": "Black Collared Puffer",
      "-1592637938": "Brown Collared Puffer",
      "-182732909": "Red Collared Puffer",
      "-1501357473": "Orange Collared Puffer",
      "-657457416": "Yellow Collared Puffer",
      "-1252607994": "Green Collared Puffer",
      "-1963269297": "Blue Collared Puffer",
      "-788416840": "Blue Digital T-Shirt",
      "-1094708683": "Brown Digital T-Shirt",
      "-391771452": "Cobble T-Shirt",
      "-1393913026": "Peach Camo T-Shirt",
      "-798074299": "Flecktarn T-Shirt",
      "-1071695449": "Light Woodland T-Shirt",
      "-604933801": "Moss T-Shirt",
      "-849226696": "Sand T-Shirt",
      "-1505664712": "Dark Woodland T-Shirt",
      "-1660465468": "Crosshatch T-Shirt",
      "-520943921": "Blue Digital Collared Parka",
      "-270687068": "Brown Digital Collared Parka",
      "-356863481": "Splinter Collared Parka",
      "-1127426516": "Contrast Camo Collared Parka",
      "-516251897": "Peach Camo Collared Parka",
      "-208387142": "Flecktarn Collared Parka",
      "-2074128971": "Fall Collared Parka",
      "-1844385512": "Blue Woodland Collared Parka",
      "-852041885": "Gray Woodland Collared Parka",
      "-166383301": "Contrast Camo Closed Parka",
      "-1838028286": "Peach Camo Closed Parka",
      "-2127771784": "Purple Camo Closed Parka",
      "-1178879851": "Light Woodland Closed Parka",
      "-700288606": "Sand Closed Parka",
      "-47843607": "Crosshatch Closed Parka",
      "-357346812": "Moss Digital Closed Parka",
      "-1569373815": "Gray Woodland Closed Parka",
      "-1437086425": "Aqua Camo Closed Parka",
      "-1803181693": "Splinter Closed Parka",
      "-216277330": "Cobble Closed Parka",
      "-1206753124": "Light Woodland Closed Parka",
      "-2132411840": "Sand Closed Parka",
      "-1850359264": "Peach Digital Closed Parka",
      "-2081937787": "Fall Closed Parka",
      "-1238791409": "Blue Woodland Closed Parka",
      "-1496126374": "Crosshatch Closed Parka",
      "-1817104539": "Blue Digital Open Parka",
      "-1515367587": "Brown Digital Open Parka",
      "-1555691226": "Aqua Camo Open Parka",
      "-1997220732": "Splinter Open Parka",
      "-974041476": "Contrast Camo Open Parka",
      "-711725631": "Cobble Open Parka",
      "-375646767": "Peach Camo Open Parka",
      "-145116852": "Purple Camo Open Parka",
      "-1232669424": "Green Digital Open Parka",
      "-1845221176": "Blue Digital Defender Vest",
      "-1760873774": "Brown Digital Defender Vest",
      "-416978008": "Contrast Camo Defender Vest",
      "-856803526": "Cobble Defender Vest",
      "-666579481": "Brushstroke Defender Vest",
      "-1646798606": "Flecktarn Defender Vest",
      "-1355908193": "Light Woodland Defender Vest",
      "-1132751303": "Moss Defender Vest",
      "-894881132": "Sand Defender Vest",
      "-1924260008": "Green Digital Defender Vest",
      "-1338415826": "Gray Digital Defender Vest",
      "-1636646495": "Peach Digital Defender Vest",
      "-322221733": "Aqua Camo Sports Biker",
      "-612030773": "Cobble Sports Biker",
      "-916815242": "Peach Camo Sports Biker",
      "-306164927": "Flecktarn Sports Biker",
      "-1870688063": "Light Woodland Sports Biker",
      "-1254204866": "Sand Sports Biker",
      "-1945364420": "Green Digital Sports Biker",
      "-1640055647": "Gray Digital Sports Biker",
      "-1769853648": "Moss Digital Sports Biker",
      "-2067232323": "Gray Woodland Sports Biker",
      "-242229096": "Blue Digital Denim Biker",
      "-480820185": "Brown Digital Denim Biker",
      "-1559678208": "Light Woodland Denim Biker",
      "-1788831825": "Moss Denim Biker",
      "-962135493": "Sand Denim Biker",
      "-1621509079": "Gray Woodland Denim Biker",
      "-136004638": "Blue Digital Cargo",
      "-935928697": "Brown Digital Cargo",
      "-1328653999": "Cobble Cargo",
      "-278243700": "Light Woodland Cargo",
      "-46337487": "Moss Cargo",
      "-1940483998": "Sand Cargo",
      "-1688829241": "Green Digital Cargo",
      "-1382013094": "Gray Digital Cargo",
      "-1569025773": "Peach Digital Cargo",
      "-1261947474": "Fall Cargo",
      "-2046896104": "Dark Woodland Cargo",
      "-1741325179": "Crosshatch Cargo",
      "-380194573": "Brushstroke Cargo",
      "-79080232": "Flecktarn Cargo",
      "-1281473149": "Light Woodland Cargo",
      "-589391869": "Moss Cargo",
      "-1844903335": "Sand Cargo",
      "-1425076209": "Peach Digital Cargo",
      "-279013203": "Gray Woodland Cargo",
      "-704259671": "Blue Digital Cargo Shorts",
      "-1952424626": "Contrast Camo Cargo Shorts",
      "-1718879963": "Cobble Cargo Shorts",
      "-773789234": "Peach Camo Cargo Shorts",
      "-1233833225": "Flecktarn Cargo Shorts",
      "-995537057": "Light Woodland Cargo Shorts",
      "-1595996225": "Moss Cargo Shorts",
      "-1373658560": "Sand Cargo Shorts",
      "-1651185476": "Fall Cargo Shorts",
      "-428180846": "Gray Woodland Cargo Shorts",
      "-1961658024": "Aqua Camo Overalls",
      "-1242411243": "Splinter Overalls",
      "-673738009": "Contrast Camo Overalls",
      "-1833891693": "Cobble Overalls",
      "-998577114": "Peach Camo Overalls",
      "-39952780": "Moss Overalls",
      "-392449265": "Black Overalls",
      "-1612602988": "Slate Overalls",
      "-864814408": "White Overalls",
      "-183055355": "Light Brown Overalls",
      "-284532513": "Fall Overalls",
      "-1035565224": "Dark Woodland Overalls",
      "-295608435": "Moss Digital Overalls",
      "-533576953": "Gray Woodland Overalls",
      "-1664108157": "Indigo Denim Overalls",
      "-1366401792": "Faded Indigo Denim Overalls",
      "-1049656638": "Dark Denim Overalls",
      "-751491507": "Faded Dark Denim Overalls",
      "-500513736": "Light Denim Overalls",
      "-135532614": "Faded Light Denim Overalls",
      "-1680742445": "Splinter T-Shirt",
      "-1987099826": "Contrast Camo T-Shirt",
      "-10899747": "Peach Camo T-Shirt",
      "-960119358": "Light Woodland T-Shirt",
      "-1265886897": "Moss T-Shirt",
      "-308409498": "Sand T-Shirt",
      "-2094172801": "Crosshatch T-Shirt",
      "-1864822566": "Moss Digital T-Shirt",
      "-1565215599": "Gray Woodland T-Shirt",
      "-2039205014": "Brown Digital T-Shirt",
      "-2080783221": "Aqua Camo T-Shirt",
      "-1633224219": "Splinter T-Shirt",
      "-1133202060": "Contrast Camo T-Shirt",
      "-1926048015": "Cobble T-Shirt",
      "-557680113": "Peach Camo T-Shirt",
      "-1315463238": "Brushstroke T-Shirt",
      "-213114078": "Flecktarn T-Shirt",
      "-1006746489": "Light Woodland T-Shirt",
      "-395244180": "Sand T-Shirt",
      "-1668456548": "Green Digital T-Shirt",
      "-128510154": "Gray Woodland T-Shirt",
      "-1741223462": "Splinter T-Shirt",
      "-1117170626": "Contrast Camo T-Shirt",
      "-645821330": "Brushstroke T-Shirt",
      "-351719555": "Flecktarn T-Shirt",
      "-1940000220": "Moss T-Shirt",
      "-522705043": "Peach Digital T-Shirt",
      "-752677885": "Fall T-Shirt",
      "-475091682": "Dark Woodland T-Shirt",
      "-713125698": "Crosshatch T-Shirt",
      "-101557851": "Gray Woodland T-Shirt",
      "-1529425423": "Aqua Camo T-Shirt",
      "-1768344202": "Splinter T-Shirt",
      "-279189766": "Cobble T-Shirt",
      "-670910392": "Peach Camo T-Shirt",
      "-876470329": "Brushstroke T-Shirt",
      "-1963932542": "Green Digital T-Shirt",
      "-1731305411": "Gray Digital T-Shirt",
      "-1558645546": "Peach Digital T-Shirt",
      "-1327067019": "Fall T-Shirt",
      "-948388455": "Dark Woodland T-Shirt",
      "-714909330": "Crosshatch T-Shirt",
      "-605264256": "Moss Digital T-Shirt",
      "-334199088": "Gray Woodland T-Shirt",
      "-1600777169": "Brown Digital T-Shirt",
      "-1705097701": "Aqua Camo T-Shirt",
      "-2080269982": "Contrast Camo T-Shirt",
      "-445850605": "Cobble T-Shirt",
      "-689488120": "Peach Camo T-Shirt",
      "-47772793": "Brushstroke T-Shirt",
      "-360978895": "Flecktarn T-Shirt",
      "-749373011": "Green Digital T-Shirt",
      "-1928237786": "Gray Digital T-Shirt",
      "-644512199": "Fall T-Shirt",
      "-970137764": "Crosshatch T-Shirt",
      "-427483112": "Moss Digital T-Shirt",
      "-1646497592": "Knuckleduster Pocket Tee",
      "-249035763": "Knuckleduster Pocket Tee",
      "-1265405818": "Blue Digital Armored",
      "-528168856": "Brown Digital Armored",
      "-1449456017": "Splinter Armored",
      "-873245921": "Contrast Camo Armored",
      "-1601307563": "Brushstroke Armored",
      "-2099789591": "Flecktarn Armored",
      "-213376680": "Moss Armored",
      "-768070705": "Green Digital Armored",
      "-311107000": "Peach Digital Armored",
      "-825154359": "Fall Armored",
      "-1056437961": "Dark Woodland Armored",
      "-79364688": "Crosshatch Armored",
      "-578764248": "Moss Digital Armored",
      "-739286283": "Aqua Camo Tactical",
      "-987183768": "Splinter Tactical",
      "-1085818470": "Peach Camo Tactical",
      "-1325523705": "Brushstroke Tactical",
      "-154031955": "Sand Tactical",
      "-2115047201": "Gray Digital Tactical",
      "-1145445260": "Peach Digital Tactical",
      "-1907848814": "Fall Tactical",
      "-400769731": "Dark Woodland Tactical",
      "-1441119947": "Crosshatch Tactical",
      "-679732228": "Gray Woodland Tactical",
      "-7883191": "Brown Digital Armored",
      "-1606250957": "Contrast Camo Armored",
      "-741608123": "Cobble Armored",
      "-1039248950": "Peach Camo Armored",
      "-145703858": "Brushstroke Armored",
      "-1843596824": "Flecktarn Armored",
      "-2024612780": "Light Woodland Armored",
      "-1254049757": "Moss Armored",
      "-855119951": "Sand Armored",
      "-1204443278": "Green Digital Armored",
      "-1448310176": "Gray Digital Armored",
      "-1001242657": "Peach Digital Armored",
      "-1534328749": "Fall Armored",
      "-542837116": "Dark Woodland Armored",
      "-773203186": "Crosshatch Armored",
      "-1993029211": "Moss Digital Armored",
      "-1084055749": "Aqua Camo Armored",
      "-223869499": "Cobble Armored",
      "-2078562130": "Sand Armored",
      "-1854673975": "Green Digital Armored",
      "-438791007": "Fall Armored",
      "-205246344": "Moss Digital Armored",
      "-1327322446": "Gray Woodland Armored",
      "-1186892705": "Aqua Camo Armored",
      "-1233686857": "Splinter Armored",
      "-998962510": "Contrast Camo Armored",
      "-1678689877": "Cobble Armored",
      "-1447340737": "Peach Camo Armored",
      "-282238942": "Brushstroke Armored",
      "-735139291": "Light Woodland Armored",
      "-487798879": "Moss Armored",
      "-210237172": "Green Digital Armored",
      "-745486010": "Peach Digital Armored",
      "-515185478": "Fall Armored",
      "-1359347687": "Dark Woodland Armored",
      "-1694836709": "Crosshatch Armored",
      "-1431832715": "Moss Digital Armored",
      "-971593942": "Blue Digital Armored",
      "-670261890": "Aqua Camo Armored",
      "-226602399": "Contrast Camo Armored",
      "-207486432": "Green Digital Armored",
      "-818169524": "Gray Digital Armored",
      "-1604691062": "Gray Woodland Armored",
      "-2088077681": "Cobble Armored",
      "-1648055553": "Peach Camo Armored",
      "-1359327894": "Brushstroke Armored",
      "-1187683872": "Flecktarn Armored",
      "-899152827": "Light Woodland Armored",
      "-458606391": "Moss Armored",
      "-168567972": "Sand Armored",
      "-501005851": "Green Digital Armored",
      "-527647048": "Peach Digital Armored",
      "-835511803": "Fall Armored",
      "-1186467793": "Dark Woodland Armored",
      "-1427025022": "Crosshatch Armored",
      "-1140787811": "Moss Digital Armored",
      "-1444261520": "Gray Woodland Armored",
      "-2010509666": "Aqua Camo Tactical",
      "-619203460": "Flecktarn Tactical",
      "-864741577": "Light Woodland Tactical",
      "-223747168": "Moss Tactical",
      "-403648978": "Sand Tactical",
      "-837426192": "Green Digital Tactical",
      "-1807454130": "Dark Woodland Tactical",
      "-171658419": "Crosshatch Tactical",
      "-466218960": "Moss Digital Tactical",
      "-181565105": "Blue Digital Tactical",
      "-1234717466": "Aqua Camo Tactical",
      "-1539633011": "Splinter Tactical",
      "-1811091411": "Brushstroke Tactical",
      "-7092423": "Light Woodland Tactical",
      "-319479300": "Moss Tactical",
      "-1792915146": "Crosshatch Tactical",
      "-2082986334": "Moss Digital Tactical",
      "-898157601": "Gray Woodland Tactical",
      "-1222067972": "Brown Digital Tactical",
      "-1119634628": "Aqua Camo Tactical",
      "-1564113344": "Splinter Tactical",
      "-1753256012": "Contrast Camo Tactical",
      "-2057516177": "Cobble Tactical",
      "-503577540": "Flecktarn Tactical",
      "-870459264": "Light Woodland Tactical",
      "-1114096779": "Moss Tactical",
      "-1344626694": "Sand Tactical",
      "-1464656879": "Green Digital Tactical",
      "-232902934": "Fall Tactical",
      "-607387066": "Dark Woodland Tactical",
      "-2132521868": "Crosshatch Tactical",
      "-1272292232": "Contrast Camo Tactical",
      "-977666153": "Cobble Tactical",
      "-973799407": "Peach Camo Tactical",
      "-670718926": "Brushstroke Tactical",
      "-26223147": "Dark Woodland Tactical",
      "-534339261": "Crosshatch Tactical",
      "-761592276": "Moss Digital Tactical",
      "-965153304": "Gray Woodland Tactical",
      "-859896259": "Brown Digital Tactical",
      "-300131866": "Aqua Camo Tactical",
      "-398312125": "Green Digital Tactical",
      "-1306865419": "Gray Digital Tactical",
      "-1009486744": "Peach Digital Tactical",
      "-354270589": "Crosshatch Tactical",
      "-55581154": "Moss Digital Tactical",
      "-1659896370": "Blue Digital Armored",
      "-1077787854": "Brown Digital Armored",
      "-1800703384": "Splinter Armored",
      "-649135174": "Flecktarn Armored",
      "-958605610": "Light Woodland Armored",
      "-1575711418": "Moss Armored",
      "-260758377": "Green Digital Armored",
      "-1553233275": "Gray Digital Armored",
      "-718705152": "Peach Digital Armored",
      "-1868660317": "Blue Digital Tactical",
      "-1527010723": "Brown Digital Tactical",
      "-1095807491": "Aqua Camo Tactical",
      "-341235732": "Splinter Tactical",
      "-656702895": "Contrast Camo Tactical",
      "-2055742581": "Sand Tactical",
      "-2118786094": "Gray Digital Tactical",
      "-142319190": "Blue Digital Tactical",
      "-1766743811": "Brushstroke Tactical",
      "-1028458241": "Flecktarn Tactical",
      "-1262133980": "Light Woodland Tactical",
      "-552881744": "Moss Tactical",
      "-818212337": "Sand Tactical",
      "-413286023": "Gray Digital Tactical",
      "-1600441359": "Gray Woodland Tactical",
      "-802903636": "Blue Digital Tactical",
      "-1041822415": "Brown Digital Tactical",
      "-1864883936": "Aqua Camo Tactical",
      "-1550596457": "Splinter Tactical",
      "-1133184935": "Contrast Camo Tactical",
      "-823026350": "Cobble Tactical",
      "-658525970": "Peach Camo Tactical",
      "-360885143": "Brushstroke Tactical",
      "-398438413": "Flecktarn Tactical",
      "-243047815": "Light Woodland Tactical",
      "-1287524377": "Crosshatch Tactical",
      "-1710613996": "Blue Digital Tactical",
      "-867041629": "Brown Digital Tactical",
      "-244309944": "Splinter Tactical",
      "-473987865": "Contrast Camo Tactical",
      "-694850941": "Cobble Tactical",
      "-1035451927": "Peach Camo Tactical",
      "-1399155046": "Brushstroke Tactical",
      "-955593862": "Flecktarn Tactical",
      "-1857691663": "Light Woodland Tactical",
      "-1153748005": "Moss Tactical",
      "-825097309": "Peach Digital Tactical",
      "-2073039140": "Dark Woodland Tactical",
      "-921215772": "Aqua Camo Tactical",
      "-474181242": "Flecktarn Tactical",
      "-251745270": "Light Woodland Tactical",
      "-1152852857": "Green Digital Tactical",
      "-2077725105": "Peach Digital Tactical",
      "-555670597": "Gray Woodland Tactical",
      "-768009060": "Blue Digital Tactical",
      "-1969549983": "Brown Digital Tactical",
      "-2046802346": "Contrast Camo Tactical",
      "-1442869676": "Cobble Tactical",
      "-1262378024": "Peach Camo Tactical",
      "-831891671": "Brushstroke Tactical",
      "-685152089": "Flecktarn Tactical",
      "-321317878": "Moss Tactical",
      "-1059832847": "Sand Tactical",
      "-121804380": "Green Digital Tactical",
      "-1359555048": "Gray Digital Tactical",
      "-1657720179": "Peach Digital Tactical",
      "-1353085777": "Splinter Tactical",
      "-493423831": "Contrast Camo Tactical",
      "-1931098172": "Cobble Tactical",
      "-1103484304": "Peach Camo Tactical",
      "-275968767": "Light Woodland Tactical",
      "-821826486": "Peach Digital Tactical",
      "-1119795003": "Fall Tactical",
      "-640810526": "Crosshatch Tactical",
      "-1732214844": "Moss Digital Tactical",
      "-2059675461": "Gray Woodland Tactical",
      "-878058152": "Blue Digital Tactical",
      "-630029587": "Brown Digital Tactical",
      "-404371066": "Aqua Camo Tactical",
      "-672913021": "Splinter Tactical",
      "-837020173": "Contrast Camo Tactical",
      "-2132444285": "Light Woodland Tactical",
      "-12399479": "Peach Digital Tactical",
      "-2080123379": "Crosshatch Tactical",
      "-166932227": "Aqua Camo Armored",
      "-1464486296": "Splinter Armored",
      "-466735808": "Contrast Camo Armored",
      "-2013268767": "Moss Armored",
      "-285047506": "Green Digital Armored",
      "-1702437832": "Crosshatch Armored",
      "-1437041701": "Moss Digital Armored",
      "-217671269": "Cobble Armored",
      "-577474893": "Brushstroke Armored",
      "-937278513": "Flecktarn Armored",
      "-1042303158": "Light Woodland Armored",
      "-1432057644": "Moss Armored",
      "-1487961566": "Sand Armored",
      "-26923292": "Gray Digital Armored",
      "-505055823": "Peach Digital Armored",
      "-275836616": "Dark Woodland Armored",
      "-1270539663": "Crosshatch Armored",
      "-1500610812": "Moss Digital Armored",
      "-791555190": "Gray Woodland Armored",
      "-2145603758": "Brown Digital Armored",
      "-1353103715": "Cobble Armored",
      "-1040421917": "Peach Camo Armored",
      "-391235258": "Light Woodland Armored",
      "-83632655": "Moss Armored",
      "-1927544285": "Sand Armored",
      "-50386659": "Dark Woodland Armored",
      "-730966020": "Moss Digital Armored",
      "-512167407": "Gray Woodland Armored",
      "-442736883": "Brown Digital Armored",
      "-1442828558": "Splinter Armored",
      "-1754822207": "Contrast Camo Armored",
      "-995498939": "Cobble Armored",
      "-1265351654": "Peach Camo Armored",
      "-1905231917": "Light Woodland Armored",
      "-1225915983": "Green Digital Armored",
      "-952393140": "Gray Digital Armored",
      "-1720531269": "Peach Digital Armored",
      "-1412895897": "Fall Armored",
      "-1814905989": "Crosshatch Armored",
      "-1501536929": "Blue Digital Armored",
      "-1823525123": "Brown Digital Armored",
      "-1919475738": "Aqua Camo Armored",
      "-448966859": "Splinter Armored",
      "-1830081902": "Contrast Camo Armored",
      "-1062631922": "Cobble Armored",
      "-194712188": "Peach Camo Armored",
      "-634341092": "Flecktarn Armored",
      "-223647239": "Sand Armored",
      "-1546037243": "Dark Woodland Armored",
      "-1752187022": "Crosshatch Armored",
      "-2125098242": "Moss Digital Armored",
      "-380633727": "Cobble Armored",
      "-694331364": "Peach Camo Armored",
      "-2083409270": "Brushstroke Armored",
      "-1103550636": "Sand Armored",
      "-340652766": "Green Digital Armored",
      "-176676690": "Gray Digital Armored",
      "-2039725420": "Gray Woodland Armored",
      "-249199502": "Splinter Armored",
      "-562077914": "Contrast Camo Armored",
      "-323355749": "Cobble Armored",
      "-565420332": "Peach Camo Armored",
      "-335087031": "Brushstroke Armored",
      "-1163683965": "Flecktarn Armored",
      "-950456082": "Light Woodland Armored",
      "-1783444086": "Moss Armored",
      "-1560188889": "Sand Armored",
      "-2016478785": "Green Digital Armored",
      "-1659722666": "Peach Digital Armored",
      "-1903032491": "Fall Armored",
      "-1067422991": "Dark Woodland Armored",
      "-1307652530": "Crosshatch Armored",
      "-1599396038": "Black Combat Mask",
      "-485023222": "Tan Tiger Silk Bomber",
      "-235771209": "Purple Solar Silk Bomber",
      "-2086203870": "Blue Warrior Silk Bomber",
      "-1501735986": "Ice Warrior Silk Bomber",
      "-1209010509": "Brown Dragon Silk Bomber",
      "-298949003": "Chocolate JC Jacket",
      "-1051980539": "Burgundy JC Jacket",
      "-847253406": "Viper Motocross",
      "-1547658012": "Candy Motocross",
      "-1891692": "Cherry Motocross",
      "-2113100067": "Boost Motocross",
      "-917228181": "Pumped Motocross",
      "-1459902630": "Atomic Motocross",
      "-1495563178": "Xtreme Motocross",
      "-1256841013": "Spotty Motocross",
      "-883471027": "Rays Motocross",
      "-645338704": "Power Motocross",
      "-1924116160": "Turbo Motocross",
      "-1564509154": "Slalom Motocross",
      "-66504167": "Red Satin Jacket",
      "-943533683": "Black Satin Jacket",
      "-612208821": "Howitzer Satin Jacket",
      "-1915825179": "Imponte Racing Satin Jacket",
      "-1604912907": "Nagasaki Satin Jacket",
      "-396586248": "Orange Satin Jacket",
      "-157569162": "Viper Satin Jacket",
      "-248745708": "Banshee Racing Jacket",
      "-477506097": "Pigalle Racing Jacket",
      "-2028659485": "Dinka Racing Jacket",
      "-1458139604": "Chocolate JC Logo Jacket",
      "-263054174": "Tan JC Logo Jacket",
      "-1522497944": "Burgundy JC Logo Jacket",
      "-613642464": "Barfs Muscle Pants",
      "-35040231": "Neon Camo Muscle Pants",
      "-375313527": "Space Ranger Muscle Pants",
      "-1568203434": "Sprunk Muscle Pants",
      "-1114304491": "Star Muscle Pants",
      "-281480356": "Lazer Force Muscle Pants",
      "-512469037": "Impotent Rage Muscle Pants",
      "-1337345508": "Racesuit Gloves",
      "-1118034209": "Racesuit Gloves",
      "-1421704532": "Racesuit Gloves",
      "-2066488527": "Racesuit Gloves",
      "-1108552334": "Racesuit Gloves",
      "-936777236": "Racesuit Gloves",
      "-1674079736": "Racesuit Gloves",
      "-1364314379": "Racesuit Gloves",
      "-907343093": "Motocross Gloves",
      "-1741805992": "Motocross Gloves",
      "-427670785": "Motocross Gloves",
      "-1129058461": "Motocross Gloves",
      "-1964635192": "Motocross Gloves",
      "-2115077361": "Motocross Gloves",
      "-1902827580": "Gray Striped T-Shirt",
      "-966945933": "Love Fist V Neck",
      "-196387738": "Grey T-Shirt",
      "-1316142576": "Green T-Shirt",
      "-1337966730": "Yellow T-Shirt",
      "-720041697": "Lilac T-Shirt",
      "-1011161493": "Grey T-Shirt",
      "-1402782490": "Blue Banded Tank",
      "-1700488855": "Lavender Tank",
      "-876708964": "Hot Pink Tank",
      "-1176545314": "Camo Tank",
      "-449171821": "Gray Splatter Tank",
      "-948768874": "Pikeys Tee",
      "-1254798565": "Yellow Tee",
      "-1540380400": "Flower Fractal Tee",
      "-1930997538": "Purple Plaid Untucked",
      "-1547514948": "Love Fist V Neck",
      "-1087176036": "Blue Striped V Neck",
      "-138622515": "Denim Shirt & Braces",
      "-198293482": "Tabby Cat",
      "-932698717": "Brown Fox",
      "-465002528": "White Owl",
      "-274623600": "Sky Blue Canvas Shoes",
      "-126507708": "Orange Canvas Shoes",
      "-1068714765": "Gray Two-Tone Canvas Shoes",
      "-1416000627": "Checked Canvas Shoes",
      "-750888230": "Plaid Canvas Shoes",
      "-451249063": "Yellow Soled Wingtips",
      "-1260610594": "Navy Wingtips",
      "-1316186810": "Orange Soled Wingtips",
      "-1078972019": "Burgundy Wingtips",
      "-721003463": "Blue Soled Wingtips",
      "-482019146": "Woodland Camo Wingtips",
      "-407436898": "Gentleman Wingtips",
      "-1903246936": "Long Slicked Dark Brown",
      "-1605475033": "Long Slicked Blond",
      "-1619297862": "Hipster Youth Blond",
      "-1878926649": "Hipster Youth Auburn",
      "-485850917": "Hipster Youth Light Brown",
      "-506901606": "Gray Striped T-Shirt",
      "-1365575820": "Denim Shirt & Braces",
      "-2067716512": "Yellow T-Shirt",
      "-2118748741": "Woodland Camo Sports Coat",
      "-576311911": "Sky Blue Sports Coat",
      "-1471757605": "Pink Sports Coat",
      "-1174116778": "Leopard Sports Coat",
      "-1530119194": "Lobster Sports Coat",
      "-1882888536": "Lavender Tank",
      "-958475046": "Gray Splatter Tank",
      "-1937756215": "Chestnut Leather Jacket",
      "-1396608949": "Brown Leather Jacket",
      "-948882907": "Charcoal Two-Tone Tee",
      "-1764798238": "Camo Tee",
      "-1458178705": "Pikeys Tee",
      "-195130369": "Yellow Tee",
      "-454742533": "Red Two-Tone Polo Shirt",
      "-770013082": "Navy Two-Tone Polo Shirt",
      "-426321106": "Dark Olive Fitted",
      "-655540261": "Green Fitted",
      "-954754000": "Blue Splatter Fitted",
      "-1722269518": "Red Splatter Fitted",
      "-228330808": "Leopard Fitted",
      "-624403420": "Yellow Chinos",
      "-326369365": "Blue Chinos",
      "-1158587243": "Lilac Chinos",
      "-1212836353": "Orange Chinos",
      "-982240900": "White Chinos",
      "-288455620": "Dark Teal Chinos",
      "-213511101": "Leopard Slim Fit",
      "-131817988": "Cream Slim Fit",
      "-1306202352": "Olive Slim Fit",
      "-1602073653": "Brown Slim Fit",
      "-488386415": "Light Gray Slim Fit",
      "-2130375471": "Vintage Woven Slim Fit",
      "-1881470876": "White Scarf",
      "-1567248935": "Gray Scarf",
      "-713124950": "Green Scarf",
      "-684938057": "White Scarf",
      "-933949688": "Gray Scarf",
      "-1228968995": "Black Scarf",
      "-1410116027": "Navy Scarf",
      "-1171852632": "Red Scarf",
      "-1346511402": "Green Scarf",
      "-1984028188": "Chemical Mask",
      "-1138470677": "Crime Scene Tape",
      "-651031802": "Hazard Tape",
      "-344739959": "Red Arrow Tape",
      "-878039873": "Light Gray Duct Tape",
      "-1328187626": "White Duct Tape",
      "-1282673470": "Up-n-Atom Paper Bag",
      "-936108522": "Manic Paper Bag",
      "-829567064": "Skull Paper Bag",
      "-130604290": "Dog Paper Bag",
      "-380009149": "Pink Paper Bag",
      "-671236695": "Sad Paper Bag",
      "-1797925843": "The Bird Paper Bag",
      "-672409000": "Love Paper Bag",
      "-1976713507": "Blackout Paper Bag",
      "-1866059977": "Shy Paper Bag",
      "-932067705": "Skull Face Bandana",
      "-1720489849": "Forest Face Bandana",
      "-1153553376": "Paisley Face Bandana",
      "-1327753380": "Yellow Face Bandana",
      "-571992369": "Black Tight Ski",
      "-502784249": "Gray Tight Ski",
      "-489414497": "White Tight Ski",
      "-38742440": "Green Tight Ski",
      "-949818947": "Charcoal Tight Ski",
      "-1723396730": "Forest Tight Ski",
      "-1258109699": "Blue Tight Ski",
      "-2104500208": "Yellow Tight Ski",
      "-815223021": "Urban Hooded Ski",
      "-1180269681": "Skull Hooded Ski",
      "-1508754657": "Black T-Shirt Mask",
      "-1832119149": "White T-Shirt Mask",
      "-73891813": "LSPD T-Shirt Mask",
      "-542069157": "Stripy T-Shirt Mask",
      "-831648810": "Love Fist T-Shirt Mask",
      "-490793533": "Khaki Toggle Ski",
      "-486726551": "Blue Loose Balaclava",
      "-1032068249": "Skull Loose Balaclava",
      "-728660078": "Khaki Loose Balaclava",
      "-850691818": "Bloody Loose Balaclava",
      "-544072285": "Woodland Loose Balaclava",
      "-1811183977": "Red Loose Balaclava",
      "-1111303675": "Outback Loose Balaclava",
      "-551441667": "Black Knit Balaclava",
      "-1935014381": "Army Green Knit Balaclava",
      "-798405153": "Princess Balaclava",
      "-30594710": "Didier Sachs Balaclava",
      "-337378088": "Perseus Band Balaclava",
      "-1687395354": "Sessanta Nove Balaclava",
      "-1733992872": "White Knit Balaclava",
      "-960546165": "Blue Knit Balaclava",
      "-1274735337": "Red Knit Balaclava",
      "-1149508682": "Copper Knit Balaclava",
      "-1512687509": "Brown Knit Balaclava",
      "-228961962": "Flying Bravo FB Balaclava",
      "-719617754": "Bandit Knit Balaclava",
      "-412736069": "Nature Knit Balaclava",
      "-747569723": "Orange Camo Knit Balaclava",
      "-1043690630": "Pink Infected",
      "-160762694": "Brown Infected",
      "-369027206": "White Mummy",
      "-119556809": "Green Mummy",
      "-1781972293": "Pale Frank",
      "-2026134112": "Gray Frank",
      "-884946138": "Princess Robot Bubblegum",
      "-277410169": "Black Tactical Boots",
      "-510186377": "Black Scruffy Boots",
      "-208824011": "Black Rolled Shirt",
      "-1967471176": "Full Black Leather Jacket",
      "-1000349099": "Black Hooded Jacket",
      "-1701048618": "Dark Gray Hooded Jacket",
      "-1536351624": "Red Hooded Jacket",
      "-802784790": "Navy Hooded Jacket",
      "-1678970076": "Red Hooded Jacket",
      "-1850220870": "Navy Hooded Jacket",
      "-1687446353": "Gray Baggy Hoodie",
      "-1404289268": "Black Tailcoat",
      "-623805034": "Gray Scruffy Jacket",
      "-578911504": "Beige Scruffy Jacket",
      "-273668269": "Black Scruffy Jacket",
      "-305423315": "Gray Rolled Jacket",
      "-125980271": "Beige Rolled Jacket",
      "-114412858": "Blue Rolled Jacket",
      "-2136395587": "Beige Stealth Jacket",
      "-444589921": "Black Heist Pants",
      "-1405370292": "Black Battle Pants",
      "-907200733": "Gray Scruffy Suit Pants",
      "-219704607": "Stealth Utility Vest",
      "-1319425641": "White Untucked",
      "-1019622060": "Steel Untucked",
      "-1793274004": "Earth Plaid Untucked",
      "-1549112185": "Fruity Plaid Untucked",
      "-1408327934": "Red Untucked",
      "-1395416948": "Moss Untucked",
      "-1739646902": "White Untucked",
      "-1357494824": "Steel Untucked",
      "-209845914": "Red Check Untucked",
      "-2008549324": "Red Untucked",
      "-687139395": "Butter Untucked",
      "-261168160": "Charcoal Loose Tie",
      "-502970611": "Khaki Hatch Loose Tie",
      "-2091509917": "Orange Loose Tie",
      "-1660073263": "Blue Diamond Loose Tie",
      "-604423435": "White Stripy Loose Tie",
      "-836591800": "Green Loose Tie",
      "-1806423064": "Teal Loose Tie",
      "-1638197670": "Blue Diamond Straight Tie",
      "-1474287132": "Tan Stripy Straight Tie",
      "-1176384153": "Pink Straight Tie",
      "-1012145925": "Green Diamond Straight Tie",
      "-2094603632": "Green Straight Tie",
      "-1527896546": "Fuchsia Straight Tie",
      "-1065296573": "Tan Straight Tie",
      "-824280578": "Blue Stripy Straight Tie",
      "-1178546225": "Teal Straight Tie",
      "-1614788529": "Green Diamond Slack Tie",
      "-1845646134": "Blue Hatch Slack Tie",
      "-2130090296": "Fuchsia Slack Tie",
      "-1132503629": "Gray Diamond Slack Tie",
      "-1744202552": "Blue Stripy Slack Tie",
      "-975409043": "Teal Slack Tie",
      "-414534788": "Black Driving Gloves",
      "-1965098334": "Brown Driving Gloves",
      "-168696119": "Brown Driving Gloves",
      "-259688953": "Black Driving Gloves",
      "-1092382012": "Brown Driving Gloves",
      "-581361692": "Brown Leather Gloves",
      "-1996495396": "Brown Leather Gloves",
      "-743369876": "Black Leather Gloves",
      "-918159718": "Brown Leather Gloves",
      "-1420954963": "Black Leather Gloves",
      "-1452974489": "Brown Leather Gloves",
      "-1341952738": "Brown Leather Gloves",
      "-1773462635": "Brown Leather Gloves",
      "-736534114": "Black Leather Gloves",
      "-1299767686": "Brown Leather Gloves",
      "-775417853": "Black Woolen Gloves",
      "-393855617": "Gray Woolen Gloves",
      "-887620680": "Gray Woolen Gloves",
      "-2039335276": "Black Woolen Gloves",
      "-2076303403": "Black Woolen Gloves",
      "-1919929735": "Gray Woolen Gloves",
      "-2118725149": "Black Woolen Gloves",
      "-1803192448": "Gray Woolen Gloves",
      "-1788181069": "Gray Woolen Gloves",
      "-1131137757": "Black Woolen Gloves",
      "-428683507": "Gray Woolen Gloves",
      "-1673886961": "Black Woolen Gloves",
      "-1327700085": "Gray Fingerless Gloves",
      "-849747283": "Black Fingerless Gloves",
      "-1145061511": "Gray Fingerless Gloves",
      "-1280288284": "Black Fingerless Gloves",
      "-2108558724": "Brown Driving Gloves",
      "-713453992": "Black Fingerless Gloves",
      "-1137668925": "Refuse Collector Gloves",
      "-1000105499": "Refuse Collector Gloves",
      "-277171126": "Brown Driving Gloves",
      "-233124949": "Refuse Collector Gloves",
      "-1794803798": "Refuse Collector Gloves",
      "-868636293": "White Cotton Gloves",
      "-245327436": "White Cotton Gloves",
      "-981246739": "White Cotton Gloves",
      "-1675687168": "White Cotton Gloves",
      "-2147200029": "White Cotton Gloves",
      "-252997160": "White Cotton Gloves",
      "-957185436": "White Cotton Gloves",
      "-81887956": "White Cotton Gloves",
      "-481241218": "Blue Surgical Gloves",
      "-245861491": "White Surgical Gloves",
      "-2092735770": "Blue Surgical Gloves",
      "-1665814217": "Blue Surgical Gloves",
      "-1905343664": "White Surgical Gloves",
      "-381889304": "Blue Surgical Gloves",
      "-1838714866": "Blue Surgical Gloves",
      "-2059807309": "White Surgical Gloves",
      "-2044888090": "Blue Surgical Gloves",
      "-1739218858": "White Surgical Gloves",
      "-86904022": "Blue Surgical Gloves",
      "-853796929": "White Surgical Gloves",
      "-2008618302": "White Surgical Gloves",
      "-240960885": "Blue Surgical Gloves",
      "-1513577773": "White Surgical Gloves",
      "-1858518769": "Black Driving Gloves",
      "-651079450": "Brown Driving Gloves",
      "-428623875": "Sienna Cowboy Boots",
      "-675964287": "Cream Cowboy Boots",
      "-86515515": "Brown Cowboy Boots",
      "-324975528": "Black Cowboy Boots",
      "-1966210185": "All Black Cowboy Boots",
      "-534663655": "Sienna Cowboy Boots",
      "-1370961300": "Cream Cowboy Boots",
      "-773746279": "Black Cowboy Boots",
      "-1135588860": "Black Silk Pajamas",
      "-501115482": "SN Silk Pajamas",
      "-274648923": "Perseus Silk Pajamas",
      "-1798008670": "Red Shiny Open Jacket",
      "-1500302305": "Blue Shiny Open Jacket",
      "-463228985": "Black Shiny Open Jacket",
      "-605293415": "Red Shiny Jacket",
      "-1393289558": "Blue Shiny Jacket",
      "-1162694105": "Black Shiny Jacket",
      "-1738379897": "Green Shiny Jacket",
      "-272483817": "Floral Loose Shirt",
      "-1614524187": "White Silk Jacket",
      "-1324975026": "Red Smoking Jacket",
      "-98693504": "Black Smoking Jacket",
      "-797590616": "Cherry Smoking Jacket",
      "-1037230313": "Noir Smoking Jacket",
      "-180257876": "White Sweater Vest",
      "-484096606": "San Andreas Polo",
      "-681300448": "Flying Bravo Polo",
      "-504937326": "Demon Tracksuit Top",
      "-719246586": "Charcoal Tracksuit Top",
      "-254090631": "Teal Tracksuit Top",
      "-1476508609": "Red Print Silk Robe",
      "-2075296546": "Navy Print Silk Robe",
      "-525912604": "Brown Print Silk Robe",
      "-1179874352": "Gray Cashmere Coat",
      "-360939083": "Flying Bravo Tucked Polo",
      "-1008640532": "Denim Tucked Shirt",
      "-739443197": "Black Tucked Shirt",
      "-1198403230": "Blue Flying Bravo Hoodie",
      "-1565801673": "White Continental Closed Jacket",
      "-126980421": "Navy Continental Closed Jacket",
      "-971077092": "Blue Continental Closed Jacket",
      "-1509471686": "Lilac Continental Closed Jacket",
      "-1054605197": "Yellow Continental Closed Jacket",
      "-92983136": "Blossom Swim Shorts",
      "-428692179": "Black Tracksuit Pants",
      "-786201969": "Charcoal Tracksuit Pants",
      "-1039866806": "Navy Tracksuit Pants",
      "-1395344918": "Teal Tracksuit Pants",
      "-389042530": "Tan Utility Pants",
      "-1218262075": "Khaki Utility Pants",
      "-1091214220": "White Continental Pants",
      "-1245556194": "Yellow Continental Pants",
      "-1435769399": "Navy Continental Slim Pants",
      "-1210220372": "Blue Continental Slim Pants",
      "-1896730922": "Lilac Continental Slim Pants",
      "-1675048637": "Yellow Continental Slim Pants",
      "-1832200307": "Gold Print Pants",
      "-563287732": "Gold Print Fitted Pants",
      "-304906738": "White Sweater Shirt",
      "-510948971": "Tan Utility Vest",
      "-1923624712": "Tan Pocket Utility Vest",
      "-1626246037": "Khaki Pocket Utility Vest",
      "-918722424": "Tan Desert Scarf",
      "-678623961": "Black Desert Scarf",
      "-1254273277": "Black Bead Necklace",
      "-85891186": "Hot Pink Cowboy Boots",
      "-166862945": "Pink Cowboy Boots",
      "-321631372": "White Cowboy Boots",
      "-561860911": "Red Cowboy Boots",
      "-801074611": "Wine Cowboy Boots",
      "-1045957352": "Crimson Cowboy Boots",
      "-1755668354": "Green Cowboy Boots",
      "-1988295485": "Purple Cowboy Boots",
      "-1759535092": "Orange Cowboy Boots",
      "-1990065007": "Navy Cowboy Boots",
      "-40207437": "Blue Cowboy Boots",
      "-2059831200": "Pink Cowboy Boots",
      "-923725215": "Red Cowboy Boots",
      "-1264391739": "Wine Cowboy Boots",
      "-309470310": "Crimson Cowboy Boots",
      "-542031903": "Green Cowboy Boots",
      "-1609908075": "Navy Cowboy Boots",
      "-1116032859": "Red Turtleneck",
      "-327938409": "Navy Turtleneck",
      "-514099098": "Green Turtleneck",
      "-1024882390": "Black Long Suit",
      "-373696822": "Black Pinstripe Long Suit",
      "-1524347488": "Blue Pinstripe Long Suit",
      "-757192429": "Pale Brown Long Suit",
      "-298394892": "Green Tracksuit Top",
      "-1213538962": "Tan Tracksuit Top",
      "-974882335": "Earth Tracksuit Top",
      "-754674651": "Royal Blue Tracksuit Top",
      "-515297106": "White Tracksuit Top",
      "-1124210676": "Light Blue Tracksuit Top",
      "-1330032765": "Fruity Tracksuit Top",
      "-629562617": "Lilac Tracksuit Top",
      "-868743548": "Gray Tracksuit Top",
      "-1258414180": "Black Cashmere Coat",
      "-1957209874": "Pastel Blue Pajamas",
      "-1097973925": "Pastel Yellow Pajamas",
      "-1788930428": "Red Swirl Pajamas",
      "-743632093": "Navy Pinstripe Pajamas",
      "-495275842": "Bold Pinstripe Pajamas",
      "-331791301": "Orange Pinstripe Pajamas",
      "-1506017664": "Pastel Blue Smoking Jacket",
      "-1788650289": "Pastel Yellow Smoking Jacket",
      "-2109354009": "Bold Pinstripe Smoking Jacket",
      "-1956716007": "Orange Pinstripe Smoking Jacket",
      "-1482653363": "Pastel Pink Smoking Jacket",
      "-619321289": "Pastel Green Smoking Jacket",
      "-850965350": "Vibrant Check Smoking Jacket",
      "-220981325": "Red Swirl Motif Smoking Jacket",
      "-235465179": "Blue Swirl Smoking Jacket",
      "-762074110": "Navy Liberty Tucked Polo",
      "-1814675403": "Black Liberty Hoodie",
      "-1965642186": "Red Liberty Hoodie",
      "-291342892": "White Flying Bravo Hoodie",
      "-2010481940": "Vibrant Loose Shirt",
      "-1324856153": "Aztec Loose Shirt",
      "-1164293470": "Khaki Quilted Jacket",
      "-2115708628": "Green Quilted Jacket",
      "-1492282120": "Chocolate Leather Field Jacket",
      "-1187268268": "Black Leather Field Jacket",
      "-881238577": "Brown Leather Field Jacket",
      "-1117098433": "Blue Tracksuit Pants",
      "-2014313653": "Burgundy Tracksuit Pants",
      "-87943034": "White Tracksuit Pants",
      "-787475058": "Tan Tracksuit Pants",
      "-1417098628": "Royal Blue Tracksuit Pants",
      "-2067596047": "Red Tracksuit Pants",
      "-1747410148": "Orange Tracksuit Pants",
      "-1055402433": "Blue Sweater Shirt",
      "-1739324244": "Black Sweater Shirt",
      "-971775957": "Check Sweater Shirt",
      "-2132418571": "Gray Turtleneck",
      "-1904575714": "Red Turtleneck",
      "-751041368": "Brown Turtleneck",
      "-521428985": "Black Turtleneck",
      "-1211281981": "Navy Turtleneck",
      "-979113616": "Beige Turtleneck",
      "-381210462": "Purple Turtleneck",
      "-620456931": "Green Turtleneck",
      "-78447682": "Gray Turtleneck",
      "-2131753206": "Red Turtleneck",
      "-1849284426": "Brown Turtleneck",
      "-1401758193": "Black Turtleneck",
      "-1356078207": "Navy Turtleneck",
      "-638830335": "Beige Turtleneck",
      "-169152258": "Green Turtleneck",
      "-72638395": "Pearl Bead Necklace",
      "-1281213073": "Buzzcut",
      "-1854764275": "Spikey",
      "-1904997581": "Dreads",
      "-905050483": "Surfer Dude Dark Brown",
      "-1520333437": "Long Slicked Dark Brown",
      "-777013793": "Palm Cornrows",
      "-1191834506": "Lightning Cornrows",
      "-1913084063": "Snail Cornrows",
      "-31208692": "Side Parting",
      "-168331163": "Undercut Swept Back",
      "-463220799": "Undercut Swept Side",
      "-832371349": "Layered Mod",
      "-1513740851": "Biker",
      "-199384089": "Ponytail",
      "-618065583": "Cornrows",
      "-1674154183": "Slicked",
      "-1864723524": "Short Brushed",
      "-177004334": "White & Blue Optics Headset",
      "-1059326003": "Yellow Optics Headset",
      "-1280909981": "Pink Optics Headset",
      "-1537196330": "Orange Optics Headset",
      "-137173574": "Purple Optics Headset",
      "-376387274": "Gray & Red Optics Headset",
      "-1500538907": "Light Brown Death Bird",
      "-35318912": "Black & Yellow Death Bird",
      "-963848225": "Black Death Bird",
      "-1889670786": "Green Camo Death Bird",
      "-227823720": "Red Feather Death Bird",
      "-990763216": "Green Stalker",
      "-1094706484": "Brown Stalker",
      "-122155337": "Purple Stalker",
      "-712456103": "Black Stalker",
      "-2114267933": "Red Raider",
      "-1367429654": "Bright Orange Raider",
      "-1882296182": "Blue Raider",
      "-856560944": "Gray Raider",
      "-1081913357": "Green Raider",
      "-161333836": "Brown Camo Raider",
      "-1949429643": "Beige Marauder",
      "-39488478": "Black Marauder",
      "-1763840023": "Eight-ball Marauder",
      "-2030776297": "Black Arrow Marauder",
      "-147058042": "Paco the Taco Mask",
      "-488448067": "Black & Pink Light Ups",
      "-1284276001": "Black & Red Light Ups",
      "-1479546480": "Pink & Green Light Ups",
      "-1673801112": "Ash & Pink Light Ups",
      "-1905379635": "Red Light Ups",
      "-23849189": "Green Print Light Ups",
      "-1567532057": "Red Camo Light Ups",
      "-1882442147": "Pink Camo Light Ups",
      "-976687684": "Flaming Skull Boots",
      "-1143121439": "Red Flaming Skull Boots",
      "-161175803": "Tan Skull Harness Boots",
      "-61358841": "Dark Brown Raider Boots",
      "-737514367": "Gray Raider Boots",
      "-1580562430": "Red Raider Boots",
      "-1178093572": "Brown & White Raider Boots",
      "-46019229": "Brown Plated Boots",
      "-1843895582": "Red Plated Boots",
      "-665850028": "Blue Plated Boots",
      "-274910694": "Light Green Plated Boots",
      "-2108762249": "Yellow Plated Boots",
      "-1334987852": "Steel Plated Boots",
      "-1816320008": "Red Plated Boots",
      "-1585462403": "Blue Plated Boots",
      "-1971104647": "Steel Plated Boots",
      "-79920851": "Pink Rocket Splash Tee",
      "-1473389807": "Pink Two Moons Tee",
      "-1914853775": "Red Freedom Isn't Free Tee",
      "-567460713": "Black Space Rangers Tee",
      "-873031638": "White Space Rangers Tee",
      "-1163823744": "Yellow Space Rangers Tee",
      "-1469591283": "Green Space Rangers Tee",
      "-1295292976": "Black Space Ranger Logo Tee",
      "-1601060515": "Green Space Ranger Logo Tee",
      "-1892180311": "White Phases Tee",
      "-1555320024": "Black Burger Shot Hockey Shirt",
      "-262386253": "Black Phat Chips Hockey Shirt",
      "-874085176": "Dark Green Sprunk Hockey Shirt",
      "-634642093": "Green Sprunk Hockey Shirt",
      "-1190863099": "Sprunk Classic Hockey Shirt",
      "-1645991843": "Dark Red Burger Shot Hockey Shirt",
      "-1286220992": "Black Cluckin' Bell Hockey Shirt",
      "-1003522829": "Wigwam Hockey Shirt",
      "-658530793": "Redwood Hockey Shirt",
      "-394248808": "Bean Machine Hockey Shirt",
      "-313833682": "Red eCola Hockey Shirt",
      "-1870692419": "Burger Shot Festive Sweater",
      "-2105879938": "Ice Cold Sprunk Festive Sweater",
      "-1545001328": "Blue Bleeder Festive Sweater",
      "-1634198546": "Blue Cluckin' Festive Sweater",
      "-2000584036": "Green Mercenary Vest",
      "-1703598589": "Black Mercenary Vest",
      "-1388885113": "White Mercenary Vest",
      "-1084592179": "Blue Mercenary Vest",
      "-525749649": "Red Mercenary Vest",
      "-222931320": "Yellow Mercenary Vest",
      "-1542764589": "Green & Yellow Raider Top",
      "-1915610271": "Branded Raider Top",
      "-459716370": "Brown & White Raider Top",
      "-707286165": "Moss Raider Top",
      "-1062567663": "Black Raider Top",
      "-1290541596": "White Raider Top",
      "-1118423272": "Red & Black Leather Feather Top",
      "-1483469932": "Black Leather Feather Top",
      "-1599898189": "Yellow Leather Feather Top",
      "-1962782095": "Green Leather Feather Top",
      "-540428329": "Taco Bomb Hoodie",
      "-1564262725": "Pizza Hoodie",
      "-1521204259": "Fries Hoodie",
      "-933918341": "Cluckin' Bell Logo Hoodie",
      "-912618631": "Cluckin' Bell Logo Bomb Hoodie",
      "-2106000077": "Corn Dog Hoodie",
      "-1104415588": "Lucky Plucker Hoodie",
      "-39135100": "Taco Bomb Hoodie",
      "-95660021": "Cluckin' Bell Logo Hoodie",
      "-366299192": "Lemons Hoodie",
      "-672591035": "Tacos Hoodie",
      "-518414494": "Patriot Beer Hoodie",
      "-1310244618": "Lucky Plucker Hoodie",
      "-1015946229": "Logger Light Hoodie",
      "-280234835": "Burger Shot Logo Sweater",
      "-1736909929": "Red MeTV Sweater",
      "-1665014743": "Orange MeTV Sweater",
      "-742108627": "Magenta Heat Sweater",
      "-366641425": "Degenatron Sweater",
      "-1200448630": "Black Pisswasser Sweater",
      "-1696773163": "Burger Shot Sweater",
      "-1548422981": "Lucky Plucker Sweater",
      "-1783016252": "Lucky Plucker Logo Bomb Sweater",
      "-1935495328": "White Sprunk Sweater",
      "-1475320261": "Wigwam Sweater",
      "-129431893": "Cluckin' Bell Logo Bomb Sweater",
      "-1358021879": "Black Chain Pants",
      "-1590517934": "Gray Chain Pants",
      "-961289239": "Beige Forest Chain Pants",
      "-1963167002": "White Chain Pants",
      "-49916164": "Dark Woodland Chain Paints",
      "-201810": "Black Chain Shorts",
      "-1925577174": "Gray Chain Shorts",
      "-1392881824": "Tan Forest Chain Shorts",
      "-1687707003": "White Chain Shorts",
      "-120365725": "Brown Chain Shorts",
      "-1783228630": "Tan Chain Shorts",
      "-1543720009": "Beige Chain Shorts",
      "-621960808": "Dark Woodland Chain Shorts",
      "-1335261451": "Black Leather Stitch Pants",
      "-1106042296": "Black & Red Leather Stitch Pants",
      "-1337948505": "White Leather Stitch Pants",
      "-1106632134": "Dark Red Leather Stitch Pants",
      "-386369514": "Red Leather Stitch Pants",
      "-2037697731": "Moss Leather Stitch Pants",
      "-1823847237": "Gray Leather Stitch Pants",
      "-1576211904": "Brown Leather Stitch Pants",
      "-2015373304": "Black Raider Pants",
      "-1754981917": "Red Raider Pants",
      "-1147248043": "Blue Raider Pants",
      "-1044034602": "Green Camo Raider Pants",
      "-679577784": "White Camo Raider Pants",
      "-1653701847": "Crosshatch Raider Pants",
      "-1308316587": "Yellow Raider Pants",
      "-53076122": "Blue Rocket Splash Tee",
      "-266336770": "Pink Rocket Splash Tee",
      "-1048926028": "Purple Two Moons Tee",
      "-1194027160": "Blue Two Moons Tee",
      "-417893395": "Pink Two Moons Tee",
      "-614966161": "Blue Freedom Isn't Free Tee",
      "-1961542678": "Green Freedom Isn't Free Tee",
      "-16112734": "Red Freedom Isn't Free Tee",
      "-316079504": "White Space Rangers Tee",
      "-17783297": "Yellow Space Rangers Tee",
      "-38034551": "Black Space Ranger Logo Tee",
      "-1568936693": "Yellow Phases Tee",
      "-1573705755": "Blue Rocket Splash Tee",
      "-977670414": "Black Spacesuit Alien Tee",
      "-1862630028": "Pink Spacesuit Alien Tee",
      "-1939702716": "Pink Two Moons Tee",
      "-269761711": "Green Freedom Isn't Free Tee",
      "-1104233107": "Yellow Phases Tee",
      "-1210353363": "Blue Rocket Splash Tee",
      "-2053040967": "Pink Rocket Splash Tee",
      "-1822838742": "Black Spacesuit Alien Tee",
      "-849632207": "Pink Spacesuit Alien Tee",
      "-609861434": "Purple Two Moons Tee",
      "-1088485448": "Pink Two Moons Tee",
      "-2034239118": "Green Space Ranger Logo Tee",
      "-1411071049": "Yellow Phases Tee",
      "-1020957509": "Blue Rocket Splash Tee",
      "-451760087": "Pink Rocket Splash Tee",
      "-677341883": "Black Spacesuit Alien Tee",
      "-200520164": "Purple Two Moons Tee",
      "-1641176456": "Blue Two Moons Tee",
      "-1873082669": "Pink Two Moons Tee",
      "-923207666": "Green Freedom Isn't Free Tee",
      "-1185063732": "White Space Rangers Tee",
      "-1539493236": "Black Space Ranger Logo Tee",
      "-206286471": "Green Space Ranger Logo Tee",
      "-1710809568": "White Phases Tee",
      "-1466057907": "Yellow Phases Tee",
      "-829505598": "Pink Rocket Splash Tee",
      "-1673471193": "Black Spacesuit Alien Tee",
      "-363006114": "Pink Spacesuit Alien Tee",
      "-1196747781": "Purple Two Moons Tee",
      "-159674477": "Blue Two Moons Tee",
      "-595840048": "Black Space Rangers Tee",
      "-116232964": "White Space Rangers Tee",
      "-1759550238": "Epsilon Medallion",
      "-331213498": "Amphibian Sea Beast",
      "-1917167552": "Alien Sea Beast",
      "-1668778532": "Reptilian Sea Beast",
      "-947270690": "Infernal Sea Beast",
      "-44528092": "Zebra Bigness Face",
      "-756827845": "Bold Abstract Bigness Face",
      "-1523819063": "Pale Abstract Bigness Face",
      "-377887129": "Gray Abstract Bigness Face",
      "-1011377437": "Gray Leopard Bigness Face",
      "-113778999": "Magenta Bigness Face",
      "-870808437": "Yellow Bigness Face",
      "-638640072": "Fall Bigness Face",
      "-1329672740": "Gray Bigness Face",
      "-1098225293": "Camo Bigness Face",
      "-1793911163": "Gray Camo Bigness Face",
      "-1559776658": "Geo Camo Bigness Face",
      "-949382973": "Striped Dino",
      "-709448355": "Gray Dino",
      "-422228070": "Tropical Dino",
      "-249863130": "Earth Dino",
      "-539830908": "Red Oni",
      "-784156576": "Blue Oni",
      "-25095464": "Gold Oni",
      "-1817341343": "Red Clown",
      "-1852568018": "Blue Clown",
      "-408143263": "Green Clown",
      "-638411026": "Orange Clown",
      "-83369704": "Scavenger Clown",
      "-314227309": "Neon Clown",
      "-1880292656": "Silverback Crazed Ape",
      "-392350673": "Orangutan Crazed Ape",
      "-1162356635": "Gray Crazed Ape",
      "-2043023510": "Albino Crazed Ape",
      "-1678720507": "Black Horse",
      "-1983275593": "Gray Horse",
      "-96938122": "Silver Ornate Skull",
      "-1104282163": "Back Crew Emblem",
      "-1522587762": "Peach Plain Hi Tops",
      "-1694330095": "Purple Plain Hi Tops",
      "-792193982": "Black Plain Hi Tops",
      "-1386530878": "Blue Plain Hi Tops",
      "-444159976": "Bronze Plain Hi Tops",
      "-1210463041": "Pearl Plain Hi Tops",
      "-732789328": "Silver Plain Hi Tops",
      "-222313846": "Cherry Plain Hi Tops",
      "-1122070446": "Slate Longline Hoodie",
      "-1428258867": "Grayscale Longline Hoodie",
      "-1728390138": "Chocolate Longline Hoodie",
      "-860967054": "Gray Longine Hoodie",
      "-697187596": "Red Longline Hoodie",
      "-2122901248": "Dark Red Longline Hoodie",
      "-1160967253": "Blush Longline Hoodie",
      "-939907579": "Tan Longline Hoodie",
      "-1420170043": "Lime Longline Hoodie",
      "-1976547216": "Gray Exsorbeo Glow Sweater",
      "-1669927683": "Black Exsorbeo Glow Sweater",
      "-533184770": "Red Love Fist Glow Sweater",
      "-189863957": "Red Trees Glow Sweater",
      "-2118633600": "Snowman Glow Sweater",
      "-886912380": "Tan Reindeer Glow Sweater",
      "-580554999": "Red Reindeer Glow Sweater",
      "-1376186319": "Naughty! Glow Sweater",
      "-1070156628": "Naughty! Knit Glow Sweater",
      "-1839081213": "Holidays Tree Glow Sweater",
      "-529759430": "Black Exsorbeo Festive Sweater",
      "-917328743": "Gray Reindeer Glow Sweater",
      "-683194238": "Noel Glow Sweater",
      "-400692689": "Gray Trees Glow Sweater",
      "-1027072076": "Red Pattern Glow Sweater",
      "-796542161": "Green Pattern Glow Sweater",
      "-19149799": "Saucy Reindeer Wool Sweater",
      "-192563347": "Gray Reindeer Wool Sweater",
      "-490794016": "Noel Wool Sweater",
      "-670433662": "Gray Trees Wool Sweater",
      "-938451313": "Festive Wool Sweater",
      "-1243301320": "Red Pattern Wool Sweater",
      "-1952619094": "Green Pattern Wool Sweater",
      "-778790247": "Red Camo Bigness Hoodie",
      "-515687946": "Blacklight Camo Bigness Hoodie",
      "-2120418649": "Black Bigness Brand Hoodie",
      "-1196267311": "White Squash Hoodie",
      "-1397992459": "Purple Camo Bigness Hoodie",
      "-1030389817": "Off-White Manor Hoodie",
      "-1878353230": "Beige Manor Hoodie",
      "-2144240900": "White Manor Hoodie",
      "-1274534222": "Primary Squash Hoodie",
      "-1042824623": "Dark Blue Güffy Hoodie",
      "-661262387": "Moss Güffy Hoodie",
      "-429094022": "White Güffy Hoodie",
      "-597461156": "Magenta Güffy Hoodie",
      "-12567275": "Bold Abstract Bigness Hoodie",
      "-441697972": "Woodland Camo Bigness Hoodie",
      "-216706122": "Off-White Bigness Hoodie",
      "-739240596": "Blacklight Camo Bigness Hoodie",
      "-575985438": "Black Bigness Brand Hoodie",
      "-1335079327": "Orange Sand Castle Hoodie",
      "-1171103251": "Gray Güffy Hoodie",
      "-1931966662": "Patchwork Güffy Hoodie",
      "-2056718245": "Red Squash Hoodie",
      "-1959329017": "Chocolate Blagueurs Hoodie",
      "-141239339": "Purple Camo Bigness Hoodie",
      "-768306923": "Beige Manor Hoodie",
      "-488689046": "Black Manor Hoodie",
      "-1255450881": "White Manor Hoodie",
      "-565010343": "Lime Blagueurs Hoodie",
      "-1344257267": "Primary Squash Hoodie",
      "-82683432": "Dark Blue Güffy Hoodie",
      "-782563734": "Moss Güffy Hoodie",
      "-1395311369": "White Güffy Hoodie",
      "-1067523062": "Bold Abstract Bigness Hoodie",
      "-2003277415": "Black Longline Hoodie",
      "-2006030019": "White Longline Hoodie",
      "-703822724": "Tan Longline Hoodie",
      "-556562801": "Charcoal Sleeveless Hoodie",
      "-98779871": "Gray Sleeveless Hoodie",
      "-1530006920": "Red Closed Parka",
      "-60087895": "Teal Closed Parka",
      "-298875598": "Tangerine Closed Parka",
      "-291142006": "Dotwork Closed Parka",
      "-947569499": "Peach Open Parka",
      "-1849503455": "Red Open Parka",
      "-135955511": "Blue Camo Open Parka",
      "-1540917782": "Brown Open Parka",
      "-334985865": "Teal Open Parka",
      "-104718102": "Tangerine Open Parka",
      "-887143463": "Gray Camo Open Parka",
      "-714091190": "Red Sand Castle Sweater",
      "-1290883159": "Orange Squash Sweater",
      "-1512401599": "Blue Squash Sweater",
      "-102089377": "Bold Güffy Sweater",
      "-386884756": "Bright Güffy Sweater",
      "-1880299162": "Sprayed G Güffy Sweater",
      "-533861690": "Aqua Sand Castle Sweater",
      "-665880246": "CMYK Manor Sweater",
      "-1082898540": "Diamond Manor Sweater",
      "-1397513709": "Cyan Manor Sweater",
      "-1677655890": "Magenta Manor Sweater",
      "-2086686293": "Aqua Camo Sand Castle Sweater",
      "-107799140": "Fruit Squash Sweater",
      "-1311371753": "Squash Logo Sweater",
      "-1128455195": "Splat Squash Sweater",
      "-2114236208": "Red Zebra Bigness Puffer",
      "-1279904699": "Black Güffy Puffer",
      "-1501488677": "Red Güffy Puffer",
      "-666698402": "Dark Red Güffy Puffer",
      "-1573678804": "Dark Blue Güffy Puffer",
      "-1418221104": "Multicolor Leaves Güffy Puffer",
      "-1732934580": "Green Leaves Güffy Puffer",
      "-955948821": "Black Sprayed Güffy Puffer",
      "-971350251": "Blue Sprayed Güffy Puffer",
      "-1081907920": "Gray Leopard Bigness Puffer",
      "-1932001318": "Cyan Leopard Bigness Puffer",
      "-384724820": "Red Wool Coat",
      "-2100149201": "Dark Red Wool Coat",
      "-1983433820": "White Güffy T-Shirt",
      "-1088250278": "Neon Manor T-Shirt",
      "-1637465332": "Black Güffy Logo T-Shirt",
      "-1867208791": "Black and Neon Güffy T-Shirt",
      "-387393580": "Gray Manor T-Shirt",
      "-627131584": "Illusion Manor T-Shirt",
      "-880403185": "Geometric Bigness T-Shirt",
      "-1384842497": "White Leaves Güffy T-Shirt",
      "-526950077": "Black Blagueurs T-Shirt",
      "-824295983": "Off-White Blagueurs T-Shirt",
      "-210499852": "OJ Squash T-Shirt",
      "-145649989": "Leopard G Güffy T-Shirt",
      "-419210091": "Glow Santa Sweater",
      "-669401406": "Glow Elf Sweater",
      "-1016097426": "Glow Pudding Sweater",
      "-1524420385": "Chocolate Low Crotch Pants",
      "-1133944981": "Camo Low Crotch Pants",
      "-918161116": "Black Low Crotch Pants",
      "-2076414190": "Diamond Low Crotch Pants",
      "-2084788847": "Black Leather Low Crotch Pants",
      "-492466755": "Chocolate Low Crotch Shorts",
      "-262198992": "Camo Low Crotch Shorts",
      "-1976935224": "Blue Camo Low Crotch Shorts",
      "-1717437513": "Light Gray Low Crotch Shorts",
      "-1912128728": "Classic Low Crotch",
      "-1702603742": "Charcoal Low Crotch",
      "-55535395": "Black Faded Low Crotch",
      "-433977498": "Red Leather Low Crotch Jeans",
      "-210525687": "White Leather Low Crotch Jeans",
      "-169498486": "Blue Digital Robo",
      "-625720981": "Peach Camo Robo",
      "-1210713169": "Moss Striped Robo",
      "-2012013526": "Orange Striped Robo",
      "-1538194078": "Fall Robo",
      "-1256216833": "Dark Woodland Robo",
      "-949171303": "Crosshatch Robo",
      "-651006172": "Gray Woodland Robo",
      "-1714130911": "Aqua Camo Robo",
      "-1944464212": "Splinter Robo",
      "-74642754": "Red Manor Face Bandana",
      "-522496681": "Skulls Manor Face Bandana",
      "-283315750": "White Broker Face Bandana",
      "-144244118": "Black Broker Face Bandana",
      "-239896833": "Off-White Broker Face Bandana",
      "-605795487": "Stars & Stripes Face Bandana",
      "-1999456769": "Painted Face Bandana",
      "-1685890208": "Contrast Camo Face Bandana",
      "-1340033095": "Red Blagueurs Face Bandana",
      "-926717698": "Bold Abstract Face Bandana",
      "-422927092": "Red Bigness Face Bandana",
      "-231565651": "Light Woodland Mandible",
      "-1918218758": "Orange Striped Mandible",
      "-1108529537": "Yellow Mandible",
      "-713498570": "Zebra Mandible",
      "-949992443": "White Mandible",
      "-2026717785": "Aqua Camo Mandible",
      "-154631644": "Stars & Stripes Tight Ski",
      "-798608032": "White Skull Tight Ski",
      "-464495216": "SA Republic Tight Ski",
      "-2037538296": "Black Stars & Stripes Tight Ski",
      "-1916506318": "Lime Xero Tight Ski",
      "-2097391194": "Red Stripe Tight Ski",
      "-1287439821": "Gray Bigness Tight Ski",
      "-1634856759": "Orange & Red Tight Ski",
      "-791677620": "Vibrant Tight Ski",
      "-1145976048": "Blue Bigness Tight Ski",
      "-302338139": "Mustard Tight Ski",
      "-1900878100": "Teal Loose",
      "-1992595971": "Dark Woodland Loose",
      "-807767242": "Orange Pattern Loose",
      "-1517871472": "Red Pattern Loose",
      "-1913163951": "Blue Pattern Loose",
      "-1599662916": "Purple Pattern Loose",
      "-1691546884": "Weapon Pattern Loose",
      "-658736398": "Brown Digital Loose",
      "-1271418391": "Dark Red Pattern Loose",
      "-906896035": "Peach Digital Loose",
      "-1498131634": "Dark Woodland Wrapped",
      "-1267831102": "Weapon Pattern Wrapped",
      "-2129098729": "Blue Pattern Wrapped",
      "-1864652899": "Gray Woodland Wrapped",
      "-1617083096": "Dark Pattern Wrapped",
      "-1378033241": "Splinter Wrapped",
      "-330768770": "Orange Pattern Wrapped",
      "-124586222": "Peach Camo Wrapped",
      "-958655579": "Brushstroke Wrapped",
      "-2001798123": "Green Wrapped",
      "-1249251311": "Flecktarn Wrapped",
      "-2025647228": "Purple Pattern Wrapped",
      "-498127020": "Yellow Wrapped",
      "-870776088": "Turquoise Wrapped",
      "-1461732230": "Jolly Roger Wrapped",
      "-1826778890": "Peach Digital Wrapped",
      "-52370313": "Fall Wrapped",
      "-1435291290": "Brown Snood",
      "-2138251886": "Teal Snood",
      "-1964556108": "Gray Woodland Snood",
      "-1667570661": "Yellow Pattern Snood",
      "-2113982748": "Red Pattern Snood",
      "-474942906": "Weapon Pattern Snood",
      "-1285680735": "Peach Camo Snood",
      "-986991300": "Brushstroke Snood",
      "-109457570": "Yellow Snood",
      "-1979486097": "Fall Snood",
      "-415176855": "Bright Stripe Knit",
      "-1616357327": "Dark Red Knit",
      "-1396690638": "Bright Green Knit",
      "-1611753585": "Aqua Camo Knit",
      "-125122362": "Black & Red Knit",
      "-439508148": "Green Stripe Knit",
      "-727187199": "Tiger Knit",
      "-1847477084": "Green & Beige Knit",
      "-1368427073": "Gray Digital Knit",
      "-1211561842": "Brown Digital Knit",
      "-957733168": "Red Stripe Knit",
      "-725826955": "Skull Knit",
      "-232194739": "Wine Stripe Knit",
      "-609562830": "Camo Bigness T-Shirt",
      "-313003380": "Black Bigness T-Shirt",
      "-1844528133": "Gray Bigness T-Shirt",
      "-1572381588": "Primary T-Shirt",
      "-1281425641": "Stars & Stripes T-Shirt",
      "-1233738757": "Pink Tie Dye T-Shirt",
      "-997375960": "Orange Pattern T-Shirt",
      "-507741562": "Green Pattern T-Shirt",
      "-2045885761": "Ash Scruffy",
      "-1807151309": "Bright Green Scruffy",
      "-23600169": "Beige Stripe Scruffy",
      "-1318729364": "Rasta Stripe Scruffy",
      "-1574688023": "Triplet Stripe Scruffy",
      "-1966932969": "Skate Scruffy",
      "-1631378409": "Pink Scruffy",
      "-1718654527": "Charcoal Scruffy",
      "-180006374": "Gray Digital Scruffy",
      "-410995055": "Gray Woodland Scruffy",
      "-752526096": "Hessian Scruffy",
      "-497222817": "Dark Red Scruffy",
      "-756764831": "Back Crew Emblem",
      "-1833856724": "Classic Moc Toe Boots",
      "-437930093": "Chocolate Moc Toe Boots",
      "-428055570": "Classic Moc Toe Boots",
      "-757023561": "Charcoal Moc Toe Boots",
      "-725303169": "Chocolate Moc Toe Boots",
      "-1646406986": "Russet Moc Toe Boots",
      "-1234616863": "Green Closed Field",
      "-1541433010": "Sand Closed Field",
      "-24326621": "Blue Closed Field",
      "-322032986": "Black Closed Field",
      "-620296424": "Charcoal Closed Field",
      "-1392261539": "Green Open Field",
      "-1144691744": "Sand Open Field",
      "-1261578771": "Brown Open Field",
      "-1030786704": "Blue Open Field",
      "-1741415238": "Black Open Field",
      "-1497187881": "Charcoal Open Field",
      "-164917618": "Black & Neon Güffy Shortsleeve",
      "-1242362382": "Splat Shortsleeve",
      "-1012291233": "Blue Plaid Shortsleeve",
      "-1836955847": "Blue Gingham Shortsleeve",
      "-1596988460": "Red Patterned Shortsleeve",
      "-595761334": "Blue Dotted Shortsleeve",
      "-892156939": "Black Dotted Shortsleeve",
      "-2019399540": "Ash Shortsleeve",
      "-365580883": "White Shortsleeve",
      "-138786634": "Skate Güffy Shortsleeve",
      "-735739507": "Multicolor Leaves Shortsleeve",
      "-1132080562": "Green Leaves Shortsleeve",
      "-758055196": "Moss Leopard Shortsleeve",
      "-1676062910": "LC Beavers Light",
      "-1977082685": "Superstroika Dark",
      "-203886553": "Superstroika Light",
      "-1465849775": "LS Jardineros Light",
      "-233112760": "LS Jardineros Dark",
      "-724451146": "Liberty Cocks Dark",
      "-1920355801": "Liberty Cocks Light",
      "-2142038086": "Red Mist XI Dark",
      "-1903638278": "Superstroika Dark Tucked",
      "-625689667": "LS Benders Light Tucked",
      "-924903406": "LS Jardineros Light Tucked",
      "-149326714": "LS Jardineros Dark Tucked",
      "-443756179": "Liberty Cocks Dark Tucked",
      "-1817498197": "Liberty Cocks Light Tucked",
      "-2110289212": "Red Mist XI Dark Tucked",
      "-1333926064": "Red Mist XI Light Tucked",
      "-1440591040": "Brown Digital Rolled Tee",
      "-321697434": "Peach Camo Rolled Tee",
      "-379796875": "Flecktarn Rolled Tee",
      "-1132333057": "Green Digital Rolled Tee",
      "-2032857946": "Peach Digital Rolled Tee",
      "-287482699": "Fall Rolled Tee",
      "-244882999": "Dark Woodland Rolled Tee",
      "-844490161": "Crosshatch Rolled Tee",
      "-578766340": "Moss Digital Rolled Tee",
      "-89852916": "Gray Woodland Rolled Tee",
      "-1640626347": "Teal Leather Fur Jacket",
      "-1344591201": "Saffron Leather Fur Jacket",
      "-1144962453": "Peach Leather Fur Jacket",
      "-880942620": "All Red Leather Fur Jacket",
      "-188085664": "Liberty Cocks Dark",
      "-2080634867": "Superstroika Dark Tucked",
      "-1109263400": "Superstroika Light Tucked",
      "-1173528719": "LS Benders Light Tucked",
      "-1009552643": "LS Jardineros Light Tucked",
      "-16193181": "Liberty Cocks Light Tucked",
      "-792064794": "Red Mist XI Dark Tucked",
      "-1817341262": "Red Mist XI Light Tucked",
      "-1757523906": "Aqua Camo Rolled Tee",
      "-1221160802": "Splinter Rolled Tee",
      "-987779984": "Contrast Camo Rolled Tee",
      "-625354844": "Cobble Rolled Tee",
      "-395545847": "Peach Camo Rolled Tee",
      "-1818441365": "Light Woodland Rolled Tee",
      "-1509823536": "Crosshatch Rolled Tee",
      "-1235186507": "Moss Digital Rolled Tee",
      "-2096290329": "Gray Woodland Rolled Tee",
      "-276246982": "Blue Digital Rolled Tee",
      "-768044134": "Brown Digital Rolled Tee",
      "-641040652": "Aqua Camo Rolled Tee",
      "-954345061": "Splinter Rolled Tee",
      "-1872565214": "Peach Camo Rolled Tee",
      "-1056247489": "Green Digital Rolled Tee",
      "-1291758292": "Gray Digital Rolled Tee",
      "-1496367928": "Peach Digital Rolled Tee",
      "-1991966284": "Fall Rolled Tee",
      "-1711312726": "Blue Digital Rolled Tee",
      "-987937051": "Brown Digital Rolled Tee",
      "-1628417850": "Aqua Camo Rolled Tee",
      "-608515494": "Splinter Rolled Tee",
      "-344888889": "Contrast Camo Rolled Tee",
      "-15658742": "Peach Camo Rolled Tee",
      "-220978606": "Green Digital Rolled Tee",
      "-1332175396": "Gray Digital Rolled Tee",
      "-566593249": "Peach Digital Rolled Tee",
      "-378531958": "Crosshatch Rolled Tee",
      "-1102276462": "Gray Striped Rolled Tee",
      "-323226256": "Beige Rolled Tee",
      "-624275059": "Khaki Rolled Tee",
      "-324752091": "Gray Striped Rolled Tee",
      "-1118056816": "Beige Rolled Tee",
      "-41696295": "Brown Digital Rolled Tee",
      "-1939801121": "Brushstroke Rolled Tee",
      "-339926964": "Green Digital Rolled Tee",
      "-571964253": "Gray Digital Rolled Tee",
      "-1882691484": "Moss Digital Rolled Tee",
      "-925316751": "Blue Digital Rolled Tee",
      "-584060385": "Brown Digital Rolled Tee",
      "-1152611116": "Peach Camo Rolled Tee",
      "-921687973": "Brushstroke Rolled Tee",
      "-675658321": "Flecktarn Rolled Tee",
      "-438771220": "Light Woodland Rolled Tee",
      "-239559888": "Gray Digital Rolled Tee",
      "-1891346883": "Crosshatch Rolled Tee",
      "-1653280098": "Moss Digital Rolled Tee",
      "-782442229": "Impotent Rage Eye Mask",
      "-1813983067": "Jack of Clubs",
      "-2052508618": "Jack of Diamonds",
      "-877088846": "Ace of Hearts",
      "-636466079": "Ace of Clubs",
      "-1805724079": "Grapes Mask",
      "-1807810433": "Pineapple Mask",
      "-1291416335": "Blue Joker",
      "-531241061": "Purple Joker",
      "-510321379": "King of Hearts",
      "-1236253036": "King of Diamonds",
      "-1465570498": "King of Spades",
      "-82603684": "Queen of Hearts",
      "-798082030": "Queen of Diamonds",
      "-1411418165": "Street Crimes Boxart Tee",
      "-1729244696": "Street Crimes Action Tee",
      "-1343019819": "Invade and Persuade Logo Tee",
      "-39239616": "Mission I Tee",
      "-386722092": "Mission IV Tee",
      "-1956029514": "Mission III Tee",
      "-1728874806": "Invade and Persuade Boxart Tee",
      "-999010869": "Invade and Persuade Suck Tee",
      "-2034717314": "Street Crimes Bikers Tee",
      "-180188536": "Street Crimes Punks Tee",
      "-474257542": "Street Crimes Yokels Tee",
      "-772684825": "Street Crimes Logo Tee",
      "-1934880671": "Blue FB Manor Slipper Loafers",
      "-1643531492": "Green FB Manor Slipper Loafers",
      "-205562230": "Red FB Manor Slipper Loafers",
      "-1285436935": "Blue Retro Sneakers",
      "-1055398555": "Brown Retro Sneakers",
      "-1588890113": "Ash Retro Sneakers",
      "-678686131": "Violet Retro Sneakers",
      "-66004138": "Two Tone Retro Sneakers",
      "-1913880809": "Mauve Fade Retro Sneakers",
      "-1934073971": "Orange Fade Retro Sneakers",
      "-1682375282": "Grayscale Retro Sneakers",
      "-1827352370": "Green Retro Sneakers",
      "-493916218": "Violet Retro Sneakers",
      "-1336046749": "Red Retro Sneakers",
      "-875019688": "Mono Retro Sneakers",
      "-1178263994": "Purple Fade Retro Sneakers",
      "-1107987242": "Impotent Rage",
      "-2068692744": "Purple Fade SN Parka",
      "-887022264": "Yellow Vines Parka",
      "-646399497": "Purple Vines Parka",
      "-424225677": "Pink Vines Parka",
      "-187600728": "Tan Le Chien Parka",
      "-1380031873": "Forest Camo Blagueurs Parka",
      "-163711815": "Orange Camo Blagueurs Parka",
      "-411347148": "Fall Blagueurs Parka",
      "-712723641": "Gray Blagueurs Parka",
      "-1010462775": "Ruby Blagueurs Parka",
      "-1386880282": "Lilac Blagueurs Parka",
      "-787031616": "Peach Fade SN Parka",
      "-1026015933": "Blue SN Parka",
      "-1343809683": "Purple Baroque Parka",
      "-759014109": "Green Vines Parka",
      "-1203478642": "Purple Fade SN Parka",
      "-972162271": "Green Fade SN Parka",
      "-703620316": "Grayscale SN Parka",
      "-1382848284": "Fall Blagueurs Parka",
      "-1885197054": "Ruby Blagueurs Parka",
      "-473647474": "Peach Fade SN Parka",
      "-241479109": "Blue SN Parka",
      "-22877142": "Purple Baroque Parka",
      "-589072027": "Purple Fade SN Parka",
      "-9136202": "Tan Le Chien Parka",
      "-402691904": "Black Le Chien Parka",
      "-2020333589": "Cubic Le Chien Parka",
      "-1786854464": "Yellow Camo Blagueurs Parka",
      "-1301414498": "Forest Camo Blagueurs Parka",
      "-2067062463": "Orange Camo Blagueurs Parka",
      "-476881204": "Gray Blagueurs Parka",
      "-849268120": "Ruby Blagueurs Parka",
      "-1078552813": "Green Blagueurs Parka",
      "-2129477179": "Black Baroque Parka",
      "-1433135941": "Green Vines Parka",
      "-1566903395": "Black Le Chien Parka",
      "-1269721334": "Red Le Chien Parka",
      "-2045822330": "Cubic Le Chien Parka",
      "-1808804153": "Yellow Camo Blagueurs Parka",
      "-634854728": "Forest Camo Blagueurs Parka",
      "-332495169": "Green Camo Blagueurs Parka",
      "-1718486150": "Grayscale SN Parka",
      "-203941486": "Orange Camo Blagueurs Parka",
      "-427524361": "Fall Blagueurs Parka",
      "-1949278217": "Peach Fade SN Parka",
      "-802330460": "White Baroque Parka",
      "-1041773543": "Purple Baroque Parka",
      "-1400331941": "White SC Broker Parka",
      "-1623324986": "Green Vines Parka",
      "-1065604179": "SC Broker Leather Fur",
      "-836024565": "Snake Leather Fur",
      "-588192618": "Slate Perseus Leather Fur",
      "-1268509839": "Wild Leather Fur",
      "-923059041": "Gray Spotted Leather Fur",
      "-232976666": "Floral Leather Fur",
      "-3233207": "Garland Leather Fur",
      "-334032595": "Black The Diamond Hoodie",
      "-2051528290": "SC Broker Hoodie",
      "-1829354470": "Broker Ornate Hoodie",
      "-1073177026": "SC Broker Logo Hoodie",
      "-834454861": "Blagueurs Gray Box Hoodie",
      "-595831003": "Orange SN Bigness Hoodie",
      "-356650072": "Purple SN Bigness Hoodie",
      "-617524085": "Blue SN Bigness Hoodie",
      "-383324042": "Squash Squares Hoodie",
      "-121040958": "Squash 19 Hoodie",
      "-2117950837": "Yeti Heat Hoodie",
      "-1626088147": "Gray Yeti LS 19 Hoodie",
      "-1385793070": "Colors Yeti LS 19 Hoodie",
      "-1604395073": "Woodland Yeti LS 19 Hoodie",
      "-56708548": "Red The Diamond Hoodie",
      "-1242848041": "Orange The Diamond Hoodie",
      "-1456698535": "Blue The Diamond Hoodie",
      "-980171573": "Black The Diamond Hoodie",
      "-1519541377": "Broker Ornate Hoodie",
      "-1699836415": "SC Broker Logo Hoodie",
      "-291588640": "Orange SN Bigness Hoodie",
      "-946935871": "Squash Squares Hoodie",
      "-1250999422": "Squash 19 Hoodie",
      "-685086728": "Ash The Diamond Hoodie",
      "-1099836941": "Adorned Hoodie",
      "-668596901": "Yeti Heat Hoodie",
      "-147111035": "Colors Yeti LS 19 Hoodie",
      "-1265517005": "Woodland Yeti LS 19 Hoodie",
      "-2126332886": "Gray The Diamond Hoodie",
      "-1954819940": "Red The Diamond Hoodie",
      "-1339196758": "Broker Detail Sweater",
      "-669443390": "Gray Color Sweater",
      "-1502103684": "Teal Color Sweater",
      "-28928285": "Gray Blagueurs Waves Sweater",
      "-1255111496": "Black Blagueurs Waves Sweater",
      "-1827527493": "White Bigness Jersey",
      "-1597259730": "Black Bigness Jersey",
      "-273975876": "Le Chien Jersey",
      "-1744261460": "White Bigness Logo Jersey",
      "-1516287527": "Black Bigness Logo Jersey",
      "-863529047": "Black SN Jersey",
      "-640863692": "Black Blagueurs Jersey",
      "-257794082": "White FB Manor Jersey",
      "-26412173": "Mustard FB Manor Jersey",
      "-1049742085": "Turquoise Güffy Spray Puffer",
      "-1900097635": "Pink Fade Güffy Spray Puffer",
      "-1662293002": "Leopard Güffy Spray Puffer",
      "-1149583266": "Ornate High Roller Jacket",
      "-1366219125": "Brown SN High Roller Jacket",
      "-1915750722": "Crimson High Roller Jacket",
      "-329370667": "Blue Floral High Roller Jacket",
      "-568354984": "Yellow Floral High Roller Jacket",
      "-4892029": "Patterned High Roller Jacket",
      "-1461904605": "Tartan High Roller Jacket",
      "-2009404244": "Cash High Roller Jacket",
      "-1053996101": "Green High Roller Jacket",
      "-1337546258": "Black SN High Roller Jacket",
      "-1579807475": "Check High Roller Jacket",
      "-1924111358": "Swirl High Roller Jacket",
      "-1996137620": "Salmon High Roller Jacket",
      "-1468556782": "White Fame or Shame Robe",
      "-159093535": "Black The Diamond Silk Robe",
      "-742480042": "Black Fame or Shame Robe",
      "-443823376": "Red Stars Fame or Shame Robe",
      "-1394550373": "Red Fame or Shame Robe",
      "-237262317": "Black Perseus Fitted",
      "-1605368067": "Teal Perseus Fitted",
      "-1027403653": "Blue Flying Bravo Fitted",
      "-1493935906": "Gray Opulent Fitted",
      "-1406246062": "Black Vinewood Fitted",
      "-920281804": "Pink Vinewood Fitted",
      "-840325444": "Gray Vinewood Fitted",
      "-2077519039": "Mocha Posies Fitted",
      "-618478502": "Pink Posies Fitted",
      "-2028692417": "Blue Patterned Fitted",
      "-1776469424": "Orange Patterned Fitted",
      "-1529391164": "Pink Patterned Fitted",
      "-714575571": "Blue P Fitted",
      "-878027343": "White P Fitted",
      "-786306916": "Black P Fitted",
      "-932915422": "Black E Fitted",
      "-898136543": "Black Perseus Fitted",
      "-1205673644": "Teal Perseus Fitted",
      "-501459123": "Blue Opulent Fitted",
      "-287969088": "Black Opulent Fitted",
      "-1831716678": "Teal Posies Fitted",
      "-1325044496": "Pink Posies Fitted",
      "-1833553838": "Gray Patterned Fitted",
      "-1494460206": "Pink Patterned Fitted",
      "-196027985": "Black P Fitted",
      "-573942508": "Invade and Persuade Jets Tee",
      "-1885554510": "Invade and Persuade Enemies Tee",
      "-1826457429": "Black Street Crimes Icons Tee",
      "-2125259745": "Invade and Persuade Gold Tee",
      "-1166602646": "Invade and Persuade Oil Tee",
      "-337776329": "Street Crimes Color Gangs Tee",
      "-568896086": "Invade and Persuade Green Tee",
      "-1717839977": "Weave High Roller Jacket",
      "-1747430388": "Blue Floral High Roller Jacket",
      "-1509035913": "Yellow Floral High Roller Jacket",
      "-1939325652": "Patterned High Roller Jacket",
      "-295954610": "Red Cards High Roller Jacket",
      "-38259194": "Black Cards High Roller Jacket",
      "-1272765731": "Blue Cards High Roller Jacket",
      "-1922581777": "Knit High Roller Jacket",
      "-456922714": "Swirl High Roller Jacket",
      "-160264957": "Salmon High Roller Jacket",
      "-1133661971": "Black Pocket Jacket",
      "-2062138817": "White Pocket Jacket",
      "-818915726": "Chocolate Pocket Jacket",
      "-494502626": "Latte Pocket Jacket",
      "-740433983": "Navy Pocket Jacket",
      "-1045480604": "Blue Pocket Jacket",
      "-533723601": "Slate Pocket Jacket",
      "-2040474994": "Gray Pocket Jacket",
      "-1784450797": "Ash Pocket Jacket",
      "-891987078": "Navy Pocket Jacket",
      "-2128951306": "Blue Pocket Jacket",
      "-1905433957": "Burgundy Pocket Jacket",
      "-1888163480": "Cyan Bigness Waterproof",
      "-44998609": "Black Waterproof",
      "-208974685": "Purple Waterproof",
      "-805993096": "Lime Waterproof",
      "-1505775087": "Black Güffy Waterproof",
      "-1660575843": "Purple Güffy Waterproof",
      "-123545898": "Red FB Waterproof",
      "-2045520218": "Magenta Bigness Waterproof",
      "-880116310": "Green FB Waterproof",
      "-2111903020": "Apricot Bigness Waterproof",
      "-485544781": "Mauve Bigness Waterproof",
      "-287627225": "Neon Waterproof",
      "-449899313": "Gray Camo Waterproof",
      "-359710438": "Black Bigness Waterproof",
      "-52501063": "Cyan Bigness Waterproof",
      "-585706173": "Licquorice Waterproof",
      "-347377236": "Blue Bigness Waterproof",
      "-2137482168": "Black Waterproof",
      "-1893582501": "Purple Waterproof",
      "-2132960042": "Yellow Waterproof",
      "-1901643671": "Lime Waterproof",
      "-1773516881": "Black Güffy Waterproof",
      "-1542659276": "Purple Güffy Waterproof",
      "-952272269": "Magenta Bigness Waterproof",
      "-958981644": "Green FB Waterproof",
      "-124912287": "Blue FB Waterproof",
      "-1423220071": "Leopard Bigness Waterproof",
      "-1661942236": "Green Bigness Waterproof",
      "-1860850066": "Apricot Bigness Waterproof",
      "-1722966380": "Red Bigness Waterproof",
      "-685860291": "Mustard Bigness Waterproof",
      "-383041962": "Woodland Camo Waterproof",
      "-261042975": "Contrast Camo Waterproof",
      "-1273964407": "White Bigness Bomber",
      "-405571985": "Purple SC Broker Bomber",
      "-696003632": "Teal SC Broker Bomber",
      "-1000690138": "White Broker Ornate Bomber",
      "-1278931717": "Red Broker Ornate Bomber",
      "-519673987": "Purple Broker Ornate Bomber",
      "-647407549": "Teal Broker Ornate Bomber",
      "-1951449904": "Red Floral Bomber",
      "-1479740149": "White Color Bomber",
      "-900135655": "Black Broker Coin Bomber",
      "-1290105242": "Teal Color Bomber",
      "-975457304": "Blue Color Bomber",
      "-621748718": "Bigness Rage Bomber",
      "-1869278830": "White Broker Coin Bomber",
      "-1496039920": "Red Broker Coin Bomber",
      "-20025853": "Purple Broker Coin Bomber",
      "-607606792": "Black SC Broker Bomber",
      "-301872022": "White SC Broker Bomber",
      "-1722452567": "Blue Ancient Large Shirt",
      "-1737198629": "Craps Large Shirt",
      "-2025205370": "Dice Large Shirt",
      "-1528558406": "Black Chips Large Shirt",
      "-771332354": "Red Chips Large Shirt",
      "-1069038719": "Yellow Chips Large Shirt",
      "-42779177": "Blue Sunset Large Shirt",
      "-338847092": "Green Sunset Large Shirt",
      "-1103732400": "Yellow Sci-Fi Large Shirt",
      "-1955245779": "Blue Prairie Large Shirt",
      "-459570308": "Pink Prairie Large Shirt",
      "-1333410321": "White Blagueurs Large Shirt",
      "-174370791": "Pink Floral Large Shirt",
      "-1429947795": "Orange Floral Large Shirt",
      "-1657462962": "Blue Floral Large Shirt",
      "-407618552": "Brown SN High Roller Pants",
      "-703489853": "Tartan High Roller Pants",
      "-1002080985": "Knit High Roller Pants",
      "-1299852888": "Green High Roller Pants",
      "-54729191": "Camo High Roller Pants",
      "-343719002": "Weave High Roller Pants",
      "-607480390": "Black Painted Knee Shorts",
      "-2082049580": "Black Baroque Knee Shorts",
      "-850459484": "Snake Knee Shorts",
      "-596466965": "White SC Broker Knee Shorts",
      "-1187390334": "Broker Knee Shorts",
      "-623744332": "Teal SC Broker Wide Pants",
      "-928758184": "Blue Lazerforce Wide Pants",
      "-275475408": "White SC Broker Wide Pants",
      "-1942729343": "Yellow Sci-Fi Wide Pants",
      "-1443952650": "Gray Blagueurs Wide Pants",
      "-678108351": "Gray Patterned Wide Pants",
      "-1624509844": "Pink Patterned Wide Pants",
      "-1933718128": "Black SC Broker Wide Pants",
      "-105117383": "Black P Wide Pants",
      "-807225977": "Black E Wide Pants",
      "-692403401": "Purple Lazerforce Wide Pants",
      "-1052075945": "Red Broker Wide Pants",
      "-906558263": "Mono High Roller Waistcoat",
      "-1145313197": "Blue High Roller Waistcoat",
      "-1376170802": "Opulent High Roller Waistcoat",
      "-1919193524": "Tartan High Roller Waistcoat",
      "-1956320777": "Black High Roller Waistcoat",
      "-1064315828": "Camo High Roller Waistcoat",
      "-417141611": "Sharp High Roller Waistcoat",
      "-700691768": "Brown SN High Roller Waistcoat",
      "-1415649393": "Mono High Roller Waistcoat",
      "-1700248158": "Blue High Roller Waistcoat",
      "-2081286090": "Opulent High Roller Waistcoat",
      "-862439552": "Tartan High Roller Waistcoat",
      "-1182887603": "Knit High Roller Waistcoat",
      "-1356759925": "Green High Roller Waistcoat",
      "-2076170551": "Black High Roller Waistcoat",
      "-2075580705": "Red High Roller Waistcoat",
      "-1998666042": "Blue High Roller Waistcoat",
      "-1690768518": "Opulent High Roller Waistcoat",
      "-619329118": "Sand High Roller Waistcoat",
      "-1111453960": "White High Roller Waistcoat",
      "-1726167631": "Camo High Roller Waistcoat",
      "-402226161": "Mono High Roller Waistcoat",
      "-974274582": "Opulent High Roller Waistcoat",
      "-821636584": "Smooth High Roller Waistcoat",
      "-401289734": "Red High Roller Waistcoat",
      "-128422271": "White High Roller Waistcoat",
      "-1013316347": "Camo High Roller Waistcoat",
      "-1009151473": "Black High Roller Shirt",
      "-205509072": "Crisp High Roller Shirt",
      "-1365084165": "White Loose Bow Tie",
      "-1898463456": "Yellow Pattern Loose Bow Tie",
      "-1639293435": "Brown Pattern Loose Bow Tie",
      "-1399391586": "Pink Pattern Loose Bow Tie",
      "-1850425824": "Blue Loose Bow Tie",
      "-545334861": "Navy Loose Bow Tie",
      "-1775745269": "Orange Loose Bow Tie",
      "-1533615128": "Yellow Loose Bow Tie",
      "-42856237": "Ox Blood Dome Filter",
      "-969496443": "Black Dome Filter",
      "-1267170039": "Tan Dome Filter",
      "-494575326": "Ox Blood Dome Vent",
      "-1206658423": "Steel Horse Black Hoodie",
      "-1070634300": "Steel Horse White Hoodie",
      "-1234544838": "Western Black Hoodie",
      "-1666538565": "Western White Hoodie",
      "-1864332249": "Nagasaki White Hoodie",
      "-655582146": "Nagasaki White and Red Hoodie",
      "-476860020": "Principe Hoodie Black",
      "-383523786": "Back Crew Emblem",
      "-385065428": "Back Crew Emblem",
      "-1610190583": "Back Crew Emblem",
      "-177186441": "Back Crew Emblem",
      "-726614354": "Large Crew Emblem",
      "-1221717900": "Back Crew Emblem",
      "-1159581374": "Back Crew Emblem",
      "-475093127": "Back Crew Emblem",
      "-1740798770": "Back Crew Emblem",
      "-463543059": "Back Crew Emblem",
      "-749808938": "Back Crew Emblem",
      "-1934565215": "Back Crew Emblem",
      "-1078586047": "Chocolate Laceup Boots",
      "-837504514": "Worn Black Laceup Boots",
      "-175897697": "Worn Ox Blood Laceup Boots",
      "-1322766694": "Tan Harness Boots",
      "-525091936": "Worn Ox Blood Slack Boots",
      "-763748563": "Worn Chocolate Slack Boots",
      "-1318219093": "Worn Ox Blood Slack Boots",
      "-1020053962": "Worn Chocolate Slack Boots",
      "-1819210774": "Loose Swept Back",
      "-2062317282": "Undercut Swept Back",
      "-1288081108": "Undercut Swept Side",
      "-1028559844": "Spiked Mohawk",
      "-2063578436": "Mod",
      "-1051333649": "Black Leather Cut",
      "-470699738": "Chocolate Leather Cut",
      "-97002062": "Ox Blood Leather Cut",
      "-605202692": "Black Defender Vest",
      "-371789105": "Worn Black Defender Vest",
      "-1916974104": "Dark Red Puffer Jacket",
      "-183404184": "Purple Puffer Jacket",
      "-607631658": "Beige Puffer Jacket",
      "-254611225": "Orange Puffer Jacket",
      "-500935798": "Cyan Puffer Jacket",
      "-61789934": "Gray Puffer Jacket",
      "-289894943": "Hot Pink Puffer Jacket",
      "-94087327": "Chocolate Leather Hoodie",
      "-1024949434": "Indigo Denim Biker",
      "-180459535": "Washed Denim Biker",
      "-265986625": "Charcoal Denim Biker",
      "-1014164314": "Washed Denim Cut",
      "-246157261": "Charcoal Denim Cut",
      "-1031586195": "Vintage Patched Denim Biker",
      "-141023082": "Indigo Patched Denim Biker",
      "-347731402": "Indigo Patched Denim Cut",
      "-455408903": "Worn Black Patched Classic",
      "-202792682": "Ox Blood Patched Classic",
      "-1128858013": "Worn Black Patched Cut",
      "-410692609": "Ox Blood Patched Cut",
      "-1723648132": "Chocolate Patched Cut",
      "-134740490": "Digital Sports Cut",
      "-1453430592": "Blue Sports Cut",
      "-1663053885": "Red Sports Cut",
      "-1901546667": "Green Sports Cut",
      "-2140465446": "Yellow Sports Cut",
      "-1803097812": "Red Boating Blazer",
      "-1503228693": "Navy Boating Blazer",
      "-2101164636": "Black Boating Blazer",
      "-582059334": "White Boating Blazer",
      "-1576708045": "Urban Closed Parka",
      "-1280115826": "Forest Closed Parka",
      "-139230314": "Urban Patched Closed Parka",
      "-1537038855": "Urban Patched Open Parka",
      "-288377830": "Brown Flat Front Cut",
      "-1192077305": "Worn Black Biker Cut",
      "-768079210": "Black Biker Cut",
      "-1959621923": "Fitted Leather Jacket",
      "-1535172905": "Stitched Leather Baseball Shirt",
      "-1304905142": "Black Leather Baseball Shirt",
      "-563024607": "Viper Sports Biker",
      "-256831071": "Camo Sports Biker",
      "-1047091910": "Black Blouson Jacket",
      "-1269069116": "Ox Blood Blouson Jacket",
      "-1682253449": "Chocolate Blouson Jacket",
      "-845562572": "Worn Black Blouson Jacket",
      "-1457589185": "Worn Chocolate Blouson Jacket",
      "-849877054": "Black Plain",
      "-1818561463": "Ox Blood Plain",
      "-2115415834": "Chocolate Plain",
      "-150484188": "Ox Blood Plain",
      "-1144761186": "Chocolate Plain",
      "-361614855": "Worn Black Plain",
      "-1609065147": "Worn Ox Blood Plain",
      "-834897522": "Worn Chocolate Plain",
      "-1338379714": "Black Padded",
      "-1569433933": "Ox Blood Padded",
      "-873944681": "Chocolate Padded",
      "-1112928998": "Worn Black Padded",
      "-534077361": "Black Padded",
      "-823591444": "Ox Blood Padded",
      "-1139582911": "Chocolate Padded",
      "-217594327": "Worn Black Padded",
      "-526835380": "Worn Ox Blood Padded",
      "-601670314": "Black Ribbed",
      "-95240707": "Indigo Roadworn",
      "-795612528": "Black Roadworn",
      "-1071423629": "Crew T-Shirt",
      "-833094692": "Yeti T-Shirt",
      "-1930057300": "Gray Striped T-Shirt",
      "-946364657": "Freedom T-Shirt",
      "-632306561": "American Flag T-Shirt",
      "-318117389": "Pegasus T-Shirt",
      "-1836153782": "Charcoal T-Shirt",
      "-258479233": "Medusa Art T-Shirt",
      "-1026748438": "Angelica T-Shirt",
      "-873848284": "Classic Perseus T-Shirt",
      "-1293815792": "Full Shield T-Shirt",
      "-1598414687": "Stank T-Shirt",
      "-646180324": "Multi-Logo T-Shirt",
      "-142717408": "Sweatbox T-Shirt",
      "-1412389149": "Color Geo T-Shirt",
      "-1710357666": "Brown Geo T-Shirt",
      "-1879249080": "Beige T-Shirt",
      "-1886097855": "Pink Full Print T-Shirt",
      "-674693383": "Fake Sessanta Nove T-Shirt",
      "-972072058": "Color Geo PRB T-Shirt",
      "-315559737": "Navy with Navy Shirt",
      "-462823623": "Navy with Red Shirt",
      "-1991137010": "Cyan with White Shirt",
      "-1201895649": "Black with White Shirt",
      "-59535536": "Black with Navy Shirt",
      "-1305509787": "White with Navy Shirt",
      "-527901417": "White with Red Shirt",
      "-1142452040": "Red with White Shirt",
      "-384275687": "Red with Navy Shirt",
      "-615133292": "Red with Red Shirt",
      "-267486967": "Navy with White Shirt",
      "-498344572": "Navy with Black Shirt",
      "-1980021781": "Navy with Red Turtle",
      "-1683429562": "Cyan with White Turtle",
      "-1619988826": "Black with Red Turtle",
      "-1554111465": "Cream with Navy Turtle",
      "-574553451": "White with White Turtle",
      "-1060910949": "White with Red Turtle",
      "-2099191011": "Red with White Turtle",
      "-327174567": "Red with Navy Turtle",
      "-1176383202": "Red with Red Turtle",
      "-788791470": "Navy with White Turtle",
      "-1638721023": "Navy with Black Turtle",
      "-1382822784": "Crew T-Shirt",
      "-1731353868": "Yeti T-Shirt",
      "-1830599880": "American Flag T-Shirt",
      "-988338273": "Pegasus T-Shirt",
      "-1960638561": "Charcoal T-Shirt",
      "-7235333": "Angelica T-Shirt",
      "-92608943": "Ranch T-Shirt",
      "-162931217": "Pikeys T-Shirt",
      "-537087659": "Multi-Logo T-Shirt",
      "-875558467": "Brown Full Print T-Shirt",
      "-648862525": "Brown Print T-Shirt",
      "-1991539848": "Color Geo T-Shirt",
      "-1014532113": "Brown Geo T-Shirt",
      "-1261413759": "Beige T-Shirt",
      "-1792828624": "Khaki T-Shirt",
      "-1564985458": "Gold SN Print T-Shirt",
      "-1454802604": "Red Love T-Shirt",
      "-238272479": "Charcoal T-Shirt",
      "-1688510760": "Full Shield T-Shirt",
      "-536372072": "Ranch T-Shirt",
      "-247578875": "Pikeys T-Shirt",
      "-1160588753": "Multi-Logo T-Shirt",
      "-854821214": "Sweatbox T-Shirt",
      "-1458295118": "Eris T-Shirt",
      "-2069536240": "Brown Print T-Shirt",
      "-1240913121": "Brown Geo T-Shirt",
      "-1471967340": "Beige T-Shirt",
      "-1766724495": "Khaki T-Shirt",
      "-399038154": "Pink SN PRB T-Shirt",
      "-160610910": "Brown Geo PRB T-Shirt",
      "-1566368249": "Color Geo PRB T-Shirt",
      "-374729298": "Navy Blazer Shirt",
      "-265838438": "Brown Driving Gloves",
      "-1037151933": "Brown Leather Gloves",
      "-1129482474": "Black Woolen Gloves",
      "-2040198522": "Gray Woolen Gloves",
      "-43777": "White Cotton Gloves",
      "-543743869": "Blue Surgical Gloves",
      "-757299442": "White Surgical Gloves",
      "-1926802042": "Black Woolen Gloves",
      "-1879434956": "Black Fingerless Gloves",
      "-38734688": "Gray Fingerless Gloves",
      "-582200001": "Refuse Collector Gloves",
      "-1835438866": "Black Driving Gloves",
      "-587136588": "Brown Driving Gloves",
      "-504887899": "Black Leather Gloves",
      "-273571528": "Brown Leather Gloves",
      "-2062205969": "Black Woolen Gloves",
      "-1362817198": "Gray Woolen Gloves",
      "-739019619": "White Cotton Gloves",
      "-1563690106": "Hideous Krampus",
      "-1802084581": "Fearsome Krampus",
      "-325677286": "Odious Krampus",
      "-569322829": "White Night Vision",
      "-95810800": "Brown Digital Night Vision",
      "-107214532": "Contrast Camo Night Vision",
      "-1181251135": "Gray Night Vision",
      "-514502369": "White Camo Night Vision",
      "-667205909": "Skull Night Vision",
      "-166788397": "Aqua Camo Night Vision",
      "-1577691658": "Manic Luminous",
      "-1943262622": "Manic Electric",
      "-564549342": "Pleased Luminous",
      "-331692828": "Peaceful Electric",
      "-1941493100": "Amused Electric",
      "-42398466": "Pleased Neon",
      "-460549680": "Black Mono Ballistic",
      "-1503932001": "Cranial Ballistic",
      "-2072670765": "Flecktarn Ballistic",
      "-268475163": "Blue & Black Ballistic",
      "-849403995": "Yellow & Black Ballistic",
      "-1810813686": "Orange & Black Ballistic",
      "-505722723": "White & Black Ballistic",
      "-2112615884": "Red Stripe Ballistic",
      "-173805230": "Black Stripe Ballistic",
      "-1629502517": "Off White & Red Ballistic",
      "-1876351394": "Red Ballistic",
      "-1239503512": "Black Spec Ops",
      "-665914936": "Carbon Spec Ops",
      "-2138525469": "LSPD Spec Ops",
      "-2090383366": "Splinter Spec Ops",
      "-4119749": "Festive Gingerbread Hockey",
      "-236025962": "Merry Gingerbread Hockey",
      "-480417164": "Jovial Gingerbread Hockey",
      "-711995687": "Mirthful Gingerbread Hockey",
      "-162003192": "Gray Woodland False Face",
      "-1646602741": "Aqua Camo False Face",
      "-1241971356": "Green Pattern False Face",
      "-1464800329": "Headline False Face",
      "-529638611": "Cobble Woodland False Face",
      "-1720038074": "Rising Sun False Face",
      "-1547869748": "Opera False Face",
      "-874565105": "Stars & Stripes False Face",
      "-1186075733": "Skull Gas Mask",
      "-1497577847": "White Industrial Gas Mask",
      "-1576026833": "Yellow Industrial Gas Mask",
      "-1375561616": "Splinter Gas Mask",
      "-2082454484": "Gray Splinter Gas Mask",
      "-1830100415": "Gray Striped Gas Mask",
      "-846506107": "Peach Camo Gas Mask",
      "-621284770": "Woodland Digital Gas Mask",
      "-1483190517": "Gray Woodland Respirator",
      "-1177128057": "Cobble Respirator",
      "-2094365136": "Contrast Camo Respirator",
      "-1801213662": "Viper Respirator",
      "-1070735391": "Tiger Striped Respirator",
      "-1435519899": "Moss Striped Respirator",
      "-591062769": "Green Digital Respirator",
      "-821396070": "Brushstroke Respirator",
      "-713430305": "Back Crew Emblem",
      "-1769373731": "Back Crew Emblem",
      "-290927641": "Back Crew Emblem",
      "-171436836": "Back Crew Emblem",
      "-482978803": "Mono Rubberized",
      "-1196516851": "Orange Rubberized",
      "-890683774": "Red Rubberized",
      "-717008074": "Moss Rubberized",
      "-886817036": "Dark Blue Rubberized",
      "-16111685": "White & Red Rubberized",
      "-980863818": "Chocolate Rubberized",
      "-1077310156": "Grayscale Rubberized",
      "-196217284": "Khaki Rubberized",
      "-1687632781": "Tan Rubberized",
      "-912154396": "Rust Rubberized",
      "-1469161854": "Woodland Rubberized",
      "-692700399": "Aqua Camo Rubberized",
      "-492238735": "Earth Tones Rubberized",
      "-181437332": "Pink Camo Rubberized",
      "-198935982": "Blue & Brown Rubberized",
      "-428679441": "Navy & Brown Rubberized",
      "-796937463": "Houndstooth Rubberized",
      "-1027270764": "Blue Rubberized",
      "-1428461627": "Orange Rubberized",
      "-1655354183": "Red Rubberized",
      "-2021121761": "Moss Rubberized",
      "-1090567906": "Gray & Red Rubberized",
      "-1166701447": "Fall Rubberized",
      "-801785863": "Splinter Rubberized",
      "-1452021158": "White & Red Rubberized",
      "-1893943892": "Chocolate Rubberized",
      "-255515479": "Grayscale Rubberized",
      "-1418487289": "Khaki Rubberized",
      "-576291220": "Tan Rubberized",
      "-2011180208": "Rust Rubberized",
      "-1172588713": "Woodland Rubberized",
      "-1703643143": "Cyan Camo Rubberized",
      "-189720468": "Mono Trail",
      "-174646832": "Black & Sand Trail",
      "-1145930530": "Woodland Trail",
      "-1511304880": "Slate Trail",
      "-1103003140": "Moss Trail",
      "-260544919": "Khaki Trail",
      "-357147931": "Gray Trail",
      "-1662828736": "Charcoal Trail",
      "-69327266": "Black & Blue Trail",
      "-1994751913": "Light Blue Trail",
      "-1607635198": "Fall Trail",
      "-1368388729": "Black & Brown Trail",
      "-790605721": "Brown Trail",
      "-417694501": "Black & Light Brown Trail",
      "-1984458834": "Mono Trail",
      "-1216976085": "Black & Sand Trail",
      "-910451680": "Woodland Trail",
      "-429304453": "Tan Trail",
      "-729304648": "Moss Trail",
      "-1865143726": "Khaki Trail",
      "-150145342": "Gray Trail",
      "-1410342775": "Charcoal Trail",
      "-1551315013": "Red Trail",
      "-1357584681": "Orange Trail",
      "-1663221144": "Blue Trail",
      "-578964244": "Navy Trail",
      "-348893095": "Earth Tones Trail",
      "-1711689678": "Buff Trail",
      "-554878468": "Gray & Yellow Trail",
      "-869854096": "Fall Trail",
      "-2107965223": "Black & Brown Trail",
      "-1281563812": "Brown Trail",
      "-1935777514": "Khaki Tactical Blouson",
      "-587217048": "Mustard Tactical Blouson",
      "-1569583939": "Grayscale Tactical Blouson",
      "-676350760": "Splinter Tactical Blouson",
      "-558382360": "Blue Tactical Blouson",
      "-939141148": "Light Blue Tactical Blouson",
      "-1265946385": "Black Tactical Blouson",
      "-25606982": "Earth Tones Tactical Blouson",
      "-340058306": "Pink Camo Tactical Blouson",
      "-113642450": "Humbug Ugly Sweater",
      "-387230831": "North Pole Ugly Sweater",
      "-569557547": "Believe Ugly Sweater",
      "-875980466": "Reindeer Ugly Sweater",
      "-1510945379": "Naughty Elf Ugly Sweater",
      "-1353009314": "Splinter Tactical Sleeveless",
      "-738492249": "Dark Blue Tactical Sleeveless",
      "-427022904": "Earth Tones Tactical Sleeveless",
      "-1074439245": "Dazzle Tactical Sleeveless",
      "-777519336": "Sand Wool Tactical Sleeveless",
      "-1552899414": "Slate Wool Tactical Sleeveless",
      "-185154115": "Gray & Brown Tactical Sleeveless",
      "-1212062141": "Red Piping Tactical Sleeveless",
      "-1553023586": "Chocolate Tactical Sleeveless",
      "-1508654360": "White Camo Tactical Sleeveless",
      "-2007733407": "Light Blue Tactical Midlength",
      "-1071359228": "Black & Red Tactical Midlength",
      "-1930234774": "Dark Blue Tactical Midlength",
      "-1461343097": "Ash Tactical Midlength",
      "-147076814": "Chocolate Tactical Midlength",
      "-674728845": "Olive & Brown Tactical Midlength",
      "-197670786": "Fall Tactical Midlength",
      "-502356948": "Splinter Tactical Midlength",
      "-1472089961": "Gray Wool Tactical Midlength",
      "-1719004376": "White Camo Tactical Midlength",
      "-807632948": "Charcoal Tactical Midlength",
      "-1118971217": "Brown & Blue Tactical Midlength",
      "-1502506554": "Woodland Tactical Midlength",
      "-908240739": "Light Brown Tactical Midlength",
      "-1903107579": "Black & Gray Tactical Midlength",
      "-2132588886": "Cyan Camo Tactical Midlength",
      "-114517882": "Ultralight Strike Vest",
      "-1700454249": "Light Strike Vest",
      "-1322899173": "Mid Strike Vest",
      "-1485010039": "Extreme Strike Vest",
      "-652152354": "Peach Plate Carrier",
      "-292152120": "Brown Digital Plate Carrier",
      "-1213911321": "Fall Plate Carrier",
      "-986199540": "White Camo Plate Carrier",
      "-1964083593": "Ice Plate Carrier",
      "-1505383131": "Navy Plate Carrier",
      "-1805383330": "Chamois Plate Carrier",
      "-1500598861": "Sand Plate Carrier",
      "-1345863643": "Tan Plate Carrier",
      "-1040620408": "Salmon Plate Carrier",
      "-541908997": "Moss Plate Carrier",
      "-37139692": "Baby Smile",
      "-40793755": "Fig",
      "-1653895156": "Geo Fox",
      "-504066740": "Geo Black & White Cat",
      "-683603089": "Geo Pig",
      "-322582844": "Red Leather Half Face",
      "-791867693": "Dark Pink Leather Half Face",
      "-21632348": "Green Leather Half Face",
      "-1036881506": "Peach Leather Half Face",
      "-529486310": "Purple Leather Half Face",
      "-1512851231": "Light Pink Leather Half Face",
      "-1810721441": "Terracotta Leather Half Face",
      "-1748397931": "Gray & White Leather Half Face",
      "-1674926429": "Dusty Blue Leather Half Face",
      "-982386383": "Gray Leather Half Face",
      "-1944254840": "White Leather Half Face",
      "-507927432": "Worn Green Leather Half Face",
      "-210810909": "Black Swirl Leather Half Face",
      "-837550803": "Red Swirl Leather Half Face",
      "-807796551": "Yellow Swirl Leather Half Face",
      "-2058724786": "Yellow Visor Respirator",
      "-1677621316": "Green Visor Respirator",
      "-92654641": "Geo White Dog",
      "-956085022": "Geo Gray Dog",
      "-1757712641": "Cerberus",
      "-528838012": "Smoke Leather with NVG",
      "-230869495": "Red Leather with NVG",
      "-986850325": "Cyan Leather with NVG",
      "-689209498": "Dark Pink Leather with NVG",
      "-660241694": "Green Leather with NVG",
      "-370399889": "Peach Leather with NVG",
      "-1151940539": "Purple Leather with NVG",
      "-845124392": "Light Pink Leather with NVG",
      "-1516069667": "Terracotta Leather with NVG",
      "-153604509": "Gray Leather with NVG",
      "-884123826": "White Leather with NVG",
      "-475297782": "Stone Leather with NVG",
      "-92417295": "Worn Red Leather with NVG",
      "-1322500017": "Red Swirl Leather with NVG",
      "-476961510": "Yellow Swirl Leather with NVG",
      "-708376188": "Pale Leather with NVG",
      "-342455449": "Laugh",
      "-45142312": "Grimace",
      "-834318191": "Blow Kiss",
      "-512035076": "Gasp",
      "-1279157366": "Wink",
      "-1713546967": "Piggly",
      "-754535920": "Ape",
      "-1699390373": "Gray Neck Gaiter",
      "-853954620": "Black Skull Neck Gaiter",
      "-1158345861": "Blood Cross Neck Gaiter",
      "-273255171": "Brown Skull Neck Gaiter",
      "-567356946": "Green Camo Neck Gaiter",
      "-783763430": "Green Neon Camo Neck Gaiter",
      "-410458982": "Purple Neon Camo Neck Gaiter",
      "-658553081": "Cobble Neck Gaiter",
      "-1997162276": "Light Gray Neck Gaiter",
      "-48262861": "Purple Snakeskin Neck Gaiter",
      "-410388981": "Teal Neck Gaiter",
      "-1849767178": "Smiley Neck Gaiter",
      "-1555534327": "Gray Digital Neck Gaiter",
      "-1074288785": "Stars & Stripes Neck Gaiter",
      "-1273833127": "Back Crew Emblem",
      "-1685950868": "Back Crew Emblem",
      "-1529083479": "Dog With Cone Slip-Ons",
      "-839601327": "Black Armored Shirt",
      "-1763156073": "Blue Camo Armored Shirt",
      "-1057180717": "Green Camo Armored Shirt",
      "-1317333808": "Contrast Camo Armored Shirt",
      "-617715658": "Green Digital Armored Shirt",
      "-839397943": "Desert Camo Armored Shirt",
      "-139321027": "Woodland Armored Shirt",
      "-328791385": "Forest Camo Armored Shirt",
      "-513280879": "Blue Digital Armored Shirt",
      "-692658385": "Cobble Armored Shirt",
      "-1066690497": "Dark Gray Armored Shirt",
      "-284035701": "Beige Armored Shirt",
      "-583511592": "Cream Armored Shirt",
      "-1685139838": "Forest Green Armored Shirt",
      "-396433045": "Pixtro Tee",
      "-837372709": "Akedo Tee",
      "-1612813534": "T-Shirt",
      "-1891186177": "T-Shirt",
      "-642228511": "T-Shirt",
      "-2023081402": "T-Shirt",
      "-1697324773": "Love Professor His Tee",
      "-2082955168": "Pixel Pete's Tee",
      "-1628113513": "Love Professor Friendzoned Tee",
      "-1090120006": "T-Shirt",
      "-374837444": "Ho-Ho-Ho Sweater",
      "-1997797895": "Black Low Level Armor",
      "-476526155": "Yung Ancestor Tour Jacket",
      "-690794131": "Yung Ancestor Hoodie",
      "-2034025655": "Yung Ancestor Hoodie",
      "-164260615": "Black Uniform Closed",
      "-1290400081": "Beige Uniform Closed",
      "-1126686157": "Sage Uniform Closed",
      "-629580415": "Gray Uniform Closed",
      "-473468899": "Dark Green Uniform Closed",
      "-1396398968": "Black Uniform Open",
      "-1669659659": "Green Uniform Open",
      "-296409188": "Sage Uniform Open",
      "-602438879": "White Uniform Open",
      "-1704558656": "Gray Uniform Open",
      "-2028611297": "Dark Green Uniform Open",
      "-1446101053": "Cream Short Uniform Closed",
      "-1741087575": "Sage Short Uniform Closed",
      "-1262627406": "Light Gray Short Uniform Closed",
      "-917766450": "Gray Short Uniform Closed",
      "-1320579976": "Black Short Uniform Open",
      "-1765714064": "White Short Uniform Open",
      "-1559236595": "Light Gray Short Uniform Open",
      "-2020329194": "Dark Green Short Uniform Open",
      "-151147493": "White Dress Shirt",
      "-1558741309": "Yellow Dog With Cone Tee",
      "-1042527986": "Thog Bod Tee",
      "-174739348": "Badlands Revenge II Eagle Tee",
      "-405334801": "Badlands Revenge II Romance Tee",
      "-1360747765": "Badlands Revenge II Gunshot Tee",
      "-1606285882": "Badlands Revenge II Help Me Tee",
      "-1856251060": "Space Monkey 3 Tee",
      "-669550940": "Race And Chase Finish Tee",
      "-2121122887": "Space Monkey Pixel Tee",
      "-637473643": "Space Monkey Space Crafts Tee",
      "-935114470": "Radioactive Space Monkey Tee",
      "-664278681": "Wizard's Ruin Loot Tee",
      "-1098271317": "Thog Mighty Sword Tee",
      "-1386802362": "Thog Tee",
      "-1181961738": "Blue Knee Pad Cargos",
      "-283173606": "Black Knee Pad Cargos",
      "-705527078": "Blue Camo Knee Pad Cargos",
      "-1951896001": "Cobble Knee Pad Cargos",
      "-586647315": "Dark Gray Knee Pad Cargos",
      "-230546592": "Cream Knee Pad Cargos",
      "-466421389": "Dark Gray Guarded Cargos",
      "-163340908": "Black Guarded Cargos",
      "-1745327901": "Contrast Camo Guarded Cargos",
      "-59592230": "Desert Camo Guarded Cargos",
      "-289270151": "Blue Digital Guarded Cargos",
      "-1505819280": "Cobble Guarded Cargos",
      "-1267359267": "Beige Camo Guarded Cargos",
      "-125394406": "Charcoal Guarded Cargos",
      "-1537672216": "Navy Chinos",
      "-563453026": "Gray & Brown Armor",
      "-602185984": "Beige Armor",
      "-698928346": "Violet Armor",
      "-1378524665": "Light Green Armor",
      "-45637272": "Dark Green Armor",
      "-75063834": "Sage Green Armor",
      "-669231342": "Contrast Camo Armor",
      "-966872169": "Blue Camo Armor",
      "-369526068": "Green Camo Armor",
      "-1064453055": "Black Pocket Vest",
      "-1227507775": "White Dress Shirt",
      "-1267268201": "Dog With Cone Chain",
      "-970054678": "Stocking",
      "-760197493": "Gingerbread",
      "-342056693": "Elf Sweater",
      "-581303162": "Pudding Sweater",
      "-2122606244": "Winter Pajama Top",
      "-666679570": "Festive Pajama Top",
      "-217343240": "Red Long Johns",
      "-1348534935": "Stripy Scarf",
      "-1117546254": "Joy Scarf",
      "-706888526": "Joy Scarf",
      "-450929867": "Snowflake Scarf",
      "-1437473381": "Storm Scarf",
      "-489902746": "Snowman T-Shirt",
      "-787543573": "Reindeer T-Shirt",
      "-1019421691": "Santa Mask 1",
      "-2000951552": "Santa Mask 3",
      "-1423103566": "Reindeer Mask",
      "-1378044123": "Elf Shoes",
      "-311629812": "Santa T-Shirt",
      "-600914544": "Elf T-Shirt",
      "-343136822": "Santa Jacket",
      "-1999249301": "Elf Jacket",
      "-941400586": "Santa Pants",
      "-475768361": "Christmas Tie",
      "-1582539669": "Black Band Vest Shirt",
      "-1854555138": "Pink Band Vest Shirt",
      "-1528012053": "Lemon Band Vest Shirt",
      "-556963337": "Red Love T-Shirt",
      "-1809384134": "Red Love T-Shirt",
      "-958462439": "Red Mysterious",
      "-636759544": "Silver Masquerade",
      "-1540364719": "Black & Gold Masquerade",
      "-1651002297": "White Toe Oxfords",
      "-80443531": "Spats",
      "-1995669446": "Brown Pinstripe Double Suit",
      "-1198378836": "White Love T-Shirt",
      "-1526730777": "Charcoal Pinstripe Suit Pants",
      "-825605253": "Brown Pinstripe Suit Pants",
      "-439764935": "Love Heart Boxer Shorts",
      "-1567431877": "Red Vest Tie",
      "-816694087": "Pink Vest Tie",
    },
    female: {
      325968: "Wavy Bob Brown",
      10342749: "Haze Sequin",
      16436307: "Long Bob Auburn",
      18169535: "Gray Knee High",
      18348930: "Wavy Bob Auburn",
      20795150: "Wheat Combat Boots",
      25939319: "Vintage Stars Denim Jacket",
      36804069: "Explorer Ankle Boots",
      39561186: "Yellow Top",
      39912178: "Red T-Shirt",
      42408538: "Shaved Bangs Auburn",
      46369932: "Wheat Round Toed",
      58004101: "LS Racerback",
      63918886: "Blue Bustier",
      64418612: "Cobra Strappy",
      69407336: "Pigtails Brown",
      92263183: "Navy Cropped",
      94672130: "Braided Mohawk Black",
      118633565: "Tan Cargos",
      127723479: "White Stripe Cropped Tank",
      134936042: "Red Sandals",
      138456003: "Blue Bustier",
      156510196: "Shaved Bangs Black",
      163360928: "Leopard T-Shirt",
      171383035: "Black Suit",
      171608309: "Orange Denim Shorts",
      184443536: "Chocolate Combat Boots",
      189260013: "Long Bob Blonde",
      194403874: "Striped Sandals",
      194961031: "Floral Denim Jacket",
      195067425: "Pink Backside",
      199318964: "Gray Platforms",
      203996814: "Teal Cargos",
      206097449: "Green Canvas",
      211124271: "Navy Backside",
      216562685: "Pink Polo Shirt",
      217397512: "Black Bikini",
      232735866: "Ash Winter Boots",
      237150300: "Woodland Camo Cargos",
      239291021: "Black Carnival",
      249988009: "Ochre Sandals",
      255026524: "White Sandals",
      257752741: "Red Mini",
      259415757: "Ash Backside",
      260067360: "Gray Flip-Flops",
      269330208: "Pink Two-Tone Round Toed",
      272368300: "Gray Polo Shirt",
      272957573: "Triangle Mini",
      276151818: "Brown Regular Fit",
      276409004: "Braided Mohawk Auburn",
      296447414: "Distressed Denim Jacket",
      299115733: "Peachy Chics Track Jacket",
      306853398: "Cobra Ankle Boots",
      310998324: "Aztec Sequin",
      319098131: "Slate Blazer",
      323148746: "Red Plaid Bustier",
      323797527: "Camo Bustier",
      331401892: "Sky Blue Top",
      338260066: "Baby Blue Cropped",
      345323649: "Mint T-Shirt",
      355256192: "Ash T-Shirt",
      357552344: "Khaki Cargos",
      365765170: "Red Spotted Camisole",
      377518216: "Black & White Bustier",
      377837755: "Black Pencil",
      379581033: "Tan Cropped",
      379834482: "Tribe Top",
      381768576: "Ash Rollups",
      403994138: "Off-White Platforms",
      406316468: "Floral Bustier",
      414445100: "White Monster",
      422708330: "Copper Combat Boots",
      426203403: "Navy Cargos",
      431636239: "Los Santos 01 Racerback",
      447703286: "Red Canvas",
      452225873: "Black Bustier",
      456774546: "Patched Regular Fit",
      457947940: "Charcoal Suit",
      458197715: "Bob Purple Fade",
      461494786: "Cobra Patent Heels",
      465993430: "Eagle Denim Jacket",
      473273957: "Gray Polo Shirt",
      485991854: "Blue Striped Top",
      502342078: "Khol Sandals",
      507564493: "Shaved Bangs Chestnut",
      510470236: "White Strappy",
      511286494: "Gray Mini",
      516812690: "Pink Pig",
      525338282: "Ash T-Shirt",
      528041463: "Red Round Toed",
      545654525: "Navy Platforms",
      545822815: "Khaki Chinos",
      547247500: "Navy Faded Skinny",
      554362168: "Black Tie-Dye Top",
      558763555: "Denim Bustier",
      565638285: "White Flip-Flops",
      574251172: "White Bustier",
      574836287: "Braided Mohawk Blonde",
      586122703: "Pink Accent Backside",
      592532033: "LC Penetrators Racerback",
      606771318: "Black Floral Sequin",
      609044923: "Pink Track Jacket",
      629615369: "Patterned Mini",
      629982526: "Close Shave",
      644865078: "Pink T-Shirt",
      663719062: "Slate Blazer",
      669555824: "Olive Combat Boots",
      671447238: "Charcoal Winter Boots",
      677508864: "Charcoal Cargos",
      685212998: "Red Plaid Canvas",
      695500417: "Tan Striped Hoodie",
      702116049: "Navy Regular Fit",
      712858607: "Charcoal Round Toed",
      726906166: "Faux Hawk Auburn",
      733938458: "Pounders Hoodie",
      746715467: "Light Pink Winter Boots",
      747065254: "Neon Camisole",
      747298842: "Leopard Round Toed",
      755852243: "Braided Mohawk Chestnut",
      765483376: "Yellow T-Shirt",
      768544998: "White Bustier",
      778779293: "Black Bikini",
      779219251: "Green Skinny",
      780256268: "Gold Blazer",
      796530885: "White Shorts",
      798239675: "Coffee Combat Boots",
      812520884: "Orange Bikini",
      812559116: "Two-Tone High Tops",
      816890188: "Black Mini",
      827318032: "Loose Tied Auburn",
      839622342: "Red Sequin",
      850476208: "White Chinos",
      856918570: "Pogo",
      860518422: "Jungle Ankle Boots",
      873659761: "Shaved Bangs Blonde",
      883468609: "Tribe Backside",
      892769164: "Light Blue Regular Fit",
      914859113: "LC Penetrators Racerback",
      924000701: "Lilac Canvas",
      944109516: "Gray Two-Tone Round Toed",
      946494611: "Black & White Top",
      956387473: "Faux Hawk Blonde",
      970564989: "Bloody Pig",
      989819950: "Blue T-Shirt",
      1009712978: "Gold Accent Round Toed",
      1010815315: "Pearl Deco Earrings",
      1033071509: "Red Hockey",
      1034522534: "Black Skinny",
      1036047457: "B&W Deco Earrings",
      1042499533: "Camo Bustier",
      1044696610: "Onyx Pendant",
      1049087765: "Tan Combat Boots",
      1059632025: "Pink Bustier",
      1061901796: "Lobster Chinos",
      1068336741: "Pixie Auburn",
      1079851881: "Aqua Sequin",
      1120544219: "Floral Winter Boots",
      1121755871: "Two-Tone Striped T-Shirt",
      1121809636: "Top Knot Chestnut",
      1137455287: "Bleached Regular Fit",
      1138517923: "Blue Distressed Denim Mini",
      1153610304: "Sheepskin Winter Boots",
      1164943807: "Black Sports",
      1176614591: "Red Two-Tone Tank",
      1177483292: "Leopard Top",
      1181895892: "Wild Backside",
      1188517308: "Baby Blue T-Shirt",
      1189349912: "Loose Tied Chestnut",
      1192763313: "Cheetah Ankle Boots",
      1197437337: "Stripe Track Jacket",
      1213883103: "White Hoodie",
      1217061550: "Pearl Pendant",
      1226217921: "Braids Auburn",
      1229328571: "Cyan T-Shirt",
      1254481896: "Long Bob Black",
      1255363183: "Purple Racerback",
      1264855835: "Navy Blue Skinny",
      1268830482: "Sky Blue Shorts",
      1291086830: "Brown Two-Tone Combat Boots",
      1294824250: "Blue Striped Deco Earrings",
      1297240080: "Olive Bustier",
      1306282412: "Purple Track Jacket",
      1308041976: "Pixie Black",
      1314711417: "Country Plaid Shirt",
      1316979640: "Gold Necklace",
      1340174434: "Red Punk Skinny",
      1343471726: "Brocade Winter Boots",
      1346049187: "French Twist Blonde",
      1346322826: "Gray Bikini",
      1351072508: "Snakeskin Cropped Tank",
      1353126007: "Top Knot Blonde",
      1367654200: "Pink Bustier",
      1374949133: "Gray Runners",
      1377999939: "Light Blue Shirt",
      1381537027: "Black Bloody Hockey",
      1383396630: "Blue Sequin",
      1394259697: "White Cropped Biker",
      1401747638: "Jade Pendant",
      1404276706: "Short Auburn",
      1410211585: "Pink Safari Canvas",
      1413384295: "Navy Mini",
      1418834005: "Pixie Brown",
      1435950788: "Purple Canvas",
      1446738197: "Purple Combat Boots",
      1457485853: "Red Denim Jacket",
      1459508919: "Black Winter Boots",
      1462060330: "White Sports",
      1464279735: "French Twist Black",
      1466839794: "Chocolate Cargos",
      1479962716: "Off-White Backside",
      1485451075: "Pink T-Shirt",
      1485994290: "Two-Tone T-Shirt",
      1499217113: "Pigtails Chestnut",
      1501267720: "Blue Hoodie",
      1502092945: "Black Strappy",
      1502944943: "Purple Strappy",
      1508364048: "Black & White Bustier",
      1517105450: "Loose Tied Black",
      1519104555: "Blue-Gray Shorts",
      1535398958: "Baby Blue T-Shirt",
      1536619899: "Gray Racerback",
      1541534322: "White Sequin",
      1549969113: "Red Strappy",
      1550443631: "Skeleton Hoodie",
      1562444368: "White Cropped",
      1565966913: "Braids Black",
      1602090051: "Vivid Blue Bustier",
      1619667343: "Short Black",
      1620946016: "Baby Blue Accent Runners",
      1623384927: "Light Blue Chinos",
      1636049234: "Faux Hawk Pink",
      1643385991: "White Floral Skinny",
      1650524564: "Layered Bob Chestnut",
      1655804777: "Blue Winter Boots",
      1658403295: "French Twist Auburn",
      1667116479: "Black Backside",
      1672864428: "Leopard Bustier",
      1680873616: "Green Sequin",
      1689361155: "Carnelian Pendant",
      1690140242: "Aqua Bikini",
      1691356640: "Gray Skull",
      1700561878: "Black Spotted Camisole",
      1704533861: "Bob Blonde",
      1708782992: "Pastel Plaid Pleated",
      1710843917: "White Denim Jacket",
      1714093599: "Brown Pig",
      1716718339: "Purple Racerback",
      1720905068: "Leopard Winter Boots",
      1724632006: "Tan T-Shirt",
      1726800428: "Indigo Skinny",
      1734195776: "Two-Tone Blue Strappy",
      1759074492: "Pixie Chestnut",
      1759537312: "Off-White Sports",
      1761562190: "Loose Tied Green",
      1765202985: "Braided Mohawk Pink",
      1767680518: "Gray Chinos",
      1774439318: "Woodland Camo Knee High",
      1796516410: "Black Hoodie",
      1804172626: "Urban Camo Cargos",
      1815573083: "White Stripe Cropped Tank",
      1822515362: "Green Round Toed",
      1829052214: "Faded Blue Cropped",
      1840439281: "Navy Suit",
      1841138030: "Sky Blue Track Jacket",
      1848527749: "Top Knot Auburn",
      1850636738: "Two-Tone T-Shirt",
      1851332937: "Tan Knee High",
      1863755323: "Faded Light Blue Cropped",
      1864730469: "Distressed Black Regular Fit",
      1865014585: "Charcoal Shirt",
      1873709373: "Black Plaid Pleated",
      1875488153: "Tan Winter Boots",
      1881977337: "Aquamarine Pendant",
      1883189891: "Teal Blue Combat Boots",
      1897472143: "Sky Blue Racerback",
      1897580856: "Gray Backside",
      1899303019: "Green Carnival",
      1903335023: "Desert Camo Canvas",
      1936346280: "Pollen Ankle Boots",
      1942770365: "Purple Accent Runners",
      1944383877: "Braided Mohawk Brown",
      1944894476: "Bob Brown",
      1950019495: "Pixie Blue",
      1950356052: "White Pleated",
      1957200690: "Cyan Floral Flip-Flops",
      1958269057: "White Blazer",
      1962915006: "Green Plaid Shirt",
      1966464202: "Silver Hoop Earrings",
      1977965596: "White Hockey",
      1979892562: "Navy Chinos",
      1981165676: "Bone Skull",
      1982126026: "Brown Strappy",
      1989836205: "Squeezers Sweatband",
      1993496095: "Short Brown",
      1994860486: "Gold Bangles",
      1996190976: "Pixie Blonde",
      2015030601: "Olive Shorts",
      2025449560: "Peach Canvas",
      2033184431: "Loose Tied Blonde",
      2037859102: "Gray Sequin",
      2047947002: "Sky Blue Racerback",
      2052125787: "Diamonds Polo Shirt",
      2053508796: "Ash Cropped Tank",
      2056553598: "Salamanders T-Shirt",
      2066401516: "Black Tux",
      2068608481: "Ponytail Auburn",
      2078391535: "Burgundy Cropped",
      2078653439: "Black Skull",
      2079418123: "Top Knot Black",
      2100511880: "Red Accent High Tops",
      2103593827: "Tiger Skinny",
      2104979227: "French Twist Chestnut",
      2106804524: "Burgundy Winter Boots",
      2107267474: "Light Blue Pleated",
      2109636610: "Rainbow Leather Straps",
      2126536623: "Purple Accent Polo Shirt",
      2126570628: "Light Blue Backside",
      2135948498: "Mint T-Shirt",
      2140845790: "LS Racerback",
      "-381431628": "Crew T-Shirt",
      "-188454983": "Salamanders T-Shirt",
      "-12040549": "Gray T-Shirt",
      "-312302896": "Leopard T-Shirt",
      "-972237787": "Two-Tone Striped T-Shirt",
      "-435533243": "The Feud T-Shirt",
      "-533996428": "Jetwash Denim Jacket",
      "-293165203": "Two-Tone Denim Jacket",
      "-639238616": "Eagle Denim Jacket",
      "-1345738256": "Graffiti Denim Jacket",
      "-897425567": "Floral Denim Jacket",
      "-1907338167": "Los Santos 01 Racerback",
      "-556714953": "Black Spotted Camisole",
      "-269517809": "Black Bustier",
      "-1022483891": "Pink Rose Bustier",
      "-312760769": "Pink Tribal Bustier",
      "-1408064598": "Leopard Bustier",
      "-1803795158": "Olive Bustier",
      "-681260302": "Gray Bustier",
      "-383750551": "Floral Bustier",
      "-1128065617": "Red Plaid Bustier",
      "-831244015": "Studded Bustier",
      "-182417807": "Vivid Blue Bustier",
      "-1466341224": "Aqua Bikini",
      "-307367232": "Orange Bikini",
      "-1290845217": "Gray Bikini",
      "-334183968": "Eris Top",
      "-1148399481": "Red Two-Tone Tank",
      "-1355204640": "Two-Tone Tank",
      "-2007520609": "Off-White Cropped Tank",
      "-1947300885": "Black Tux",
      "-1034576214": "Gray Cropped Biker",
      "-654622416": "None",
      "-206759599": "Black Pig",
      "-2098378214": "Silver Skull",
      "-1466383998": "Dust Devils Hockey",
      "-1846558525": "Tan Ape",
      "-1003379386": "Brown Ape",
      "-1252718707": "Green Ape",
      "-408196039": "Pink Ape",
      "-224095408": "White Carnival",
      "-8672002": "Blue Carnival",
      "-1980772186": "Green Monster",
      "-1086375100": "Red Monster",
      "-414512293": "Black Monster",
      "-174640864": "Charcoal Platforms",
      "-748548671": "White Two-Tone Backside",
      "-226744631": "Fluorescent Accent Backside",
      "-1892580027": "Burgundy Backside",
      "-1295102850": "Baby Blue Backside",
      "-1591367379": "Olive Backside",
      "-666298509": "Passion Backside",
      "-1362245437": "Two-Tone Runners",
      "-1522789223": "Purple High Tops",
      "-1292783612": "Elite Shock High Tops",
      "-303963387": "Blue Round Toed",
      "-526137207": "Two-Tone Striped Round Toed",
      "-779212194": "Purple Round Toed",
      "-1801572197": "Yellow Round Toed",
      "-879092166": "Blush Round Toed",
      "-651642537": "Gooseberry Round Toed",
      "-402794751": "Lemon Spotted Round Toed",
      "-162303060": "Two-Tone Round Toed",
      "-2083884267": "Tan Strappy",
      "-765554005": "Sky Blue Strappy",
      "-1261152325": "Baby Blue Strappy",
      "-1021709242": "Pink Strappy",
      "-1740202336": "Olive Strappy",
      "-1500169411": "Two-Tone Pink Strappy",
      "-1155702334": "Yellow Strappy",
      "-2082770117": "Navy Strappy",
      "-194948023": "Zebra Strappy",
      "-1623874491": "Beige Sandals",
      "-1434575905": "Desert Sandals",
      "-783029878": "Indigo Sandals",
      "-1096694746": "Sparkle Sandals",
      "-401500391": "Cream Sandals",
      "-1854437175": "Turquoise Sandals",
      "-993235086": "Hornet Sandals",
      "-1233562932": "Gray Sandals",
      "-707456641": "Pink Sandals",
      "-103425664": "Tan Sandals",
      "-1417167643": "Blue Sandals",
      "-1739260233": "Dark Teal Winter Boots",
      "-1724841881": "Hot Pink Winter Boots",
      "-1955699486": "Baby Blue Winter Boots",
      "-228291195": "Gray Winter Boots",
      "-55467489": "Off-White Winter Boots",
      "-3820765": "Black Canvas",
      "-730243961": "White Canvas",
      "-948664880": "Woodland Camo Canvas",
      "-1040745770": "Blue Canvas",
      "-1638747251": "Barfs Canvas",
      "-1396748186": "Blue Plaid Canvas",
      "-236185744": "Navy Canvas",
      "-2144586782": "Yellow Canvas",
      "-75231771": "Blue Sports",
      "-478617383": "Orange Flip-Flops",
      "-134638874": "Black Patent Heels",
      "-305627516": "Kitty Patent Heels",
      "-603268343": "Beige Patent Heels",
      "-1130478131": "Deluxe Midnight Combat",
      "-657883613": "Gray Two-Tone Combat Boots",
      "-1099477202": "Sand Combat Boots",
      "-264457544": "Ochre Combat Boots",
      "-1559096651": "Deluxe Vixen Combat",
      "-1253853416": "White Combat Boots",
      "-588216715": "Battle Combat Boots",
      "-1920586604": "Black Ankle Boots",
      "-1747631822": "Gray Ankle Boots",
      "-1179920122": "Rouge Ankle Boots",
      "-873038437": "Purple Ankle Boots",
      "-1787227999": "Zigzag Ankle Boots",
      "-1480674004": "Pop Ankle Boots",
      "-2128025563": "Electric Ankle Boots",
      "-1422661649": "Brown Ankle Boots",
      "-748013477": "Two-Tone Ankle Boots",
      "-460072274": "Charcoal Ankle Boots",
      "-149061695": "Cream Ankle Boots",
      "-1183502464": "Licorice Knee High",
      "-1297031825": "White Knee High",
      "-1810078513": "Copper Knee High",
      "-630547118": "Short Chestnut",
      "-1114152028": "Short Blonde",
      "-156183082": "Short Purple",
      "-1888949979": "Long Bob Chestnut",
      "-126174381": "Long Bob Brown",
      "-895393891": "Long Bob Purple Fade",
      "-2054486171": "Loose Tied Brown",
      "-416717929": "Shaved Bangs Brown",
      "-1244233486": "Shaved Bangs Blue Fade",
      "-1994325650": "Top Knot Brown",
      "-1785879441": "Wavy Bob Chestnut",
      "-2039544270": "Wavy Bob Blonde",
      "-2043804252": "Wavy Bob Black",
      "-493896090": "Wavy Bob Red Fade",
      "-1818172397": "Layered Bob Blonde",
      "-2064759122": "Layered Bob Auburn",
      "-1198150148": "Layered Bob Black",
      "-1452798047": "Layered Bob Brown",
      "-894938591": "Layered Bob Green",
      "-1493936116": "Pigtails Blonde",
      "-1242991114": "Pigtails Auburn",
      "-2089316077": "Pigtails Black",
      "-294134730": "Ponytail Chestnut",
      "-96406584": "Ponytail Blonde",
      "-1801541499": "Ponytail Black",
      "-1514386752": "Ponytail Brown",
      "-1214517633": "Ponytail Blue",
      "-1531326202": "Braids Chestnut",
      "-1160184508": "Braids Blonde",
      "-578600296": "Braids Brown",
      "-16494011": "Bob Chestnut",
      "-1815086126": "Bob Auburn",
      "-963288728": "Bob Black",
      "-136982981": "Faux Hawk Chestnut",
      "-1646192117": "Faux Hawk Black",
      "-1334853848": "Faux Hawk Brown",
      "-1460451822": "French Twist Brown",
      "-1942083631": "Crew T-Shirt",
      "-612969451": "Gray T-Shirt",
      "-1232470936": "The Feud T-Shirt",
      "-1531750213": "Yellow T-Shirt",
      "-757353201": "Red T-Shirt",
      "-1047784848": "Cyan T-Shirt",
      "-100007061": "Blue T-Shirt",
      "-265752663": "Tan T-Shirt",
      "-1655897587": "Distressed Denim Jacket",
      "-726929206": "Red Denim Jacket",
      "-1204910088": "Jetwash Denim Jacket",
      "-1932611271": "White Denim Jacket",
      "-892412656": "Two-Tone Denim Jacket",
      "-793679699": "Vintage Stars Denim Jacket",
      "-1202505743": "Graffiti Denim Jacket",
      "-315357083": "Stripe Track Jacket",
      "-1541879468": "Black Track Jacket",
      "-626280839": "Olive Track Jacket",
      "-1611371045": "White Track Jacket",
      "-1600848383": "Gray Racerback",
      "-510690258": "Neon Camisole",
      "-492437913": "Red Spotted Camisole",
      "-4377373": "Pink Rose Bustier",
      "-1196520228": "Denim Bustier",
      "-1022320224": "Pink Tribal Bustier",
      "-436797133": "Gray Bustier",
      "-999965167": "Studded Bustier",
      "-45556546": "Bright Pink Polo Shirt",
      "-179213738": "Aqua Polo Shirt",
      "-1008400510": "Yellow Polo Shirt",
      "-1382130955": "Black Striped Polo Shirt",
      "-1630814896": "White Striped Polo Shirt",
      "-1994747410": "Circles Polo Shirt",
      "-627173527": "Black Polo Shirt",
      "-365119834": "Red Polo Shirt",
      "-1209347581": "Sky Blue Polo Shirt",
      "-1009849909": "Orange Polo Shirt",
      "-1852275361": "Navy Polo Shirt",
      "-1957562158": "Green Polo Shirt",
      "-803935476": "Aqua Bikini",
      "-1570500693": "Orange Bikini",
      "-1202057261": "Gray Bikini",
      "-1918204142": "Eris Top",
      "-1201021808": "Peachy Chics Top",
      "-261356549": "Gray Spotted Top",
      "-189166434": "Purple Top",
      "-244134235": "Backside Skateboards Top",
      "-1700650751": "Prop 208 Top",
      "-707913892": "Suburban Top",
      "-13276630": "Blue Banded Top",
      "-374653162": "Salmon Striped Top",
      "-276810997": "White Hoodie",
      "-1120022897": "Gray Hoodie",
      "-1326641804": "Aqua Striped Hoodie",
      "-1087919639": "Peachy Chics Red Hoodie",
      "-2015992899": "Brown Hoodie",
      "-1889908433": "Two-Tone Tank",
      "-1410977733": "Off-White Cropped Tank",
      "-1650420816": "Ash Cropped Tank",
      "-1989612735": "Snakeskin Cropped Tank",
      "-2109286556": "Two-Tone Gray Tux",
      "-1827604232": "Navy Tux",
      "-1349340681": "All Black Tux",
      "-1586353681": "Contrast Blazer",
      "-133540189": "Gray Cropped Biker",
      "-1438336231": "Ash Cropped Biker",
      "-1666048012": "Black Cropped Biker",
      "-533088145": "Charcoal Shirt",
      "-822897181": "White Shirt",
      "-734039248": "Red Check Shirt",
      "-964831315": "Two-Tone Shirt",
      "-1899567028": "Western Shirt",
      "-407287950": "Sky Blue Shirt",
      "-763880208": "Olive Shirt",
      "-1956639043": "Peach Shirt",
      "-117151224": "Pink Plaid Shirt",
      "-1359751708": "Blue Plaid Shirt",
      "-1666043551": "Red Plaid Shirt",
      "-1058735674": "Navy Fade Shirt",
      "-1455578347": "Blue Faded Skinny",
      "-1626894679": "Mint Skinny",
      "-1884295170": "Yellow Skinny",
      "-399743835": "Leopard Skinny",
      "-645478566": "Polka Dot Skinny",
      "-2069029464": "Purple Acid Skinny",
      "-1376358342": "Black Floral Skinny",
      "-890852838": "Red Skinny",
      "-443288520": "Faded Dark Blue Regular Fit",
      "-1237248613": "Navy Blue Regular Fit",
      "-1877787325": "Faded Dark Teal Regular Fit",
      "-20243787": "White Regular Fit",
      "-474160003": "Purple Regular Fit",
      "-940099321": "Faded Light Blue Regular Fit",
      "-857390365": "Faded Blue Regular Fit",
      "-561846754": "Dark Blue Regular Fit",
      "-2135446903": "Slate Regular Fit",
      "-1851634594": "Blue Regular Fit",
      "-2065906791": "Baby Blue Shorts",
      "-787527588": "Olive Cargos",
      "-1019892567": "Black Cargos",
      "-1976330116": "Desert Camo Cargos",
      "-1141736455": "Gray Cargos",
      "-1448519833": "Purple Cargos",
      "-749917522": "White Cargos",
      "-1289483130": "Brown Cargos",
      "-105440857": "Pink Camo Cargos",
      "-504566344": "Red Plaid Pleated",
      "-1891107603": "Blue Stripe Pleated",
      "-1420511994": "Yellow Pleated",
      "-1608540516": "Tan Banded Pleated",
      "-937464165": "Light Pink Pleated",
      "-1243362780": "Purple Pleated",
      "-2132857954": "Red Branded Pleated",
      "-1959968710": "Woodland Camo Pleated",
      "-889864258": "Blue Plaid Pleated",
      "-658220197": "Pink Pleated",
      "-429427039": "Black Pleated",
      "-267974164": "Gray Pleated",
      "-861759913": "White Shorts",
      "-86478142": "Black Shorts",
      "-2056279062": "Black Bikini",
      "-935643531": "Charcoal Rollups",
      "-1168631121": "Black Rollups",
      "-1091709653": "Black Chinos",
      "-802981994": "Taupe Chinos",
      "-886753170": "Baby Blue Chinos",
      "-1653416770": "Burgundy Chinos",
      "-1432029406": "Off-White Chinos",
      "-1909309891": "Light Gray Chinos",
      "-729527576": "Prison Chinos",
      "-2009700423": "Two-Tone Chinos",
      "-658863944": "Beige Chinos",
      "-378983915": "Bubblegum Chinos",
      "-625541774": "Slate Cropped",
      "-924034595": "Distressed Navy Cropped",
      "-1113046917": "Acid Cropped",
      "-1687880715": "Vintage Cropped",
      "-1260966183": "Distressed Blue Cropped",
      "-891101742": "Aqua Cropped",
      "-1202440011": "Orange Cropped",
      "-1510075383": "Blue Cropped",
      "-212488517": "Black Cropped",
      "-2063466878": "Purple Denim Shorts",
      "-1720320300": "Pink Denim Shorts",
      "-921354788": "Gray Pencil",
      "-1242622064": "Navy Pencil",
      "-745528979": "Charcoal Banded Mini",
      "-918876989": "Aloha Mini",
      "-150673322": "Mocha Mini",
      "-1669156013": "Red Plaid Mini",
      "-1856004851": "Navy Two-Tone Mini",
      "-337037378": "Two-Tone Striped Mini",
      "-643591373": "Floral Mini",
      "-48342488": "Black Distressed Denim Mini",
      "-1658647947": "Black Sequin",
      "-1352290566": "Silver Sequin",
      "-2037332017": "Desert Sequin",
      "-143971962": "Black & Gold Sequin",
      "-382366437": "Stripe Sequin",
      "-1948325907": "Gold Sequin",
      "-284971479": "Deco Sequin",
      "-944066168": "None",
      "-359485950": "Gold Deco Earrings",
      "-123319767": "Silver Deco Earrings",
      "-633664173": "Copper Deco Earrings",
      "-1530414095": "Gold Hoop Earrings",
      "-1489551152": "Pink Hoop Earrings",
      "-1190730641": "Copper Hoop Earrings",
      "-1351528128": "Purple Hoop Earrings",
      "-1143117288": "White Hoop Earrings",
      "-742705167": "Harsh Souls Sweatband",
      "-1140717441": "Prolaps Sweatband",
      "-1362334188": "LC Sweatband",
      "-1720302744": "Aqua Striped Sweatband",
      "-2075780856": "Pink Check Sweatband",
      "-2070101199": "Zebra Bangles",
      "-1878186849": "White Leather Straps",
      "-2123475844": "Amethyst Pendant",
      "-649946816": "Silver Necklace",
      "-1387240230": "Black Tassel Scarf",
      "-1344144041": "Brown Digital Flight Cap",
      "-1886306400": "Tan Flight Cap",
      "-466870566": "Green Closed Flight",
      "-210125451": "Brown Closed Flight",
      "-148388643": "White Closed Flight",
      "-465887484": "Navy Closed Flight",
      "-225920097": "Dark Red Closed Flight",
      "-388005634": "White Open Flight",
      "-74176925": "Teal Open Flight",
      "-296154131": "Navy Open Flight",
      "-785788529": "Dark Red Open Flight",
      "-1844382364": "Harlequin Bigness SN Hockey",
      "-1661198347": "Light Bigness SN Hockey",
      "-1438729606": "Purple Bigness SN Hockey",
      "-173190850": "Dark Camo Hockey",
      "-2124617545": "Purple Camo Hockey",
      "-864682264": "Geometric Hockey",
      "-1581626221": "Orange Flash Retro Runners",
      "-649446506": "Vibrant Retro Runners",
      "-352198907": "Ash Retro Runners",
      "-306912149": "Sage Retro Runners",
      "-1421324625": "Grayscale Retro Runners",
      "-1727157702": "Blue Flash Retro Runners",
      "-589024818": "White Retro Runners",
      "-291318453": "Graphite Retro Runners",
      "-1844667360": "Mono Retro Runners",
      "-384806606": "Green Retro Runners",
      "-615860825": "Cream & Pink Retro Runners",
      "-865396760": "Black & Red Retro Runners",
      "-1093862228": "Gray & Orange Retro Runners",
      "-1495705594": "Purple Flash Retro Runners",
      "-1174143397": "Midnight Retro Runners",
      "-2075880739": "Sunset Retro Runners",
      "-92015144": "White Retro Runners",
      "-338569100": "Graphite Retro Runners",
      "-569426705": "Mocha Retro Runners",
      "-1051720847": "Mono Retro Runners",
      "-2120855562": "Pink & Black Bigness Jersey",
      "-1545694074": "Cyan & Black Bigness Jersey",
      "-701171406": "Lime & Black Bigness Jersey",
      "-928752111": "Red & Black Bigness Jersey",
      "-354573689": "Teal Bigness Jersey",
      "-584710376": "Dark Bigness Jersey",
      "-1917913340": "White & Red Bigness Jersey",
      "-330812363": "Black & Cyan Bigness Jersey",
      "-1560632933": "Purple Bigness Jersey",
      "-213138884": "Cyan & Blue Bigness Jersey",
      "-1616106959": "Purple Big Cat Closed",
      "-1193354090": "Orange Big Cat Closed",
      "-1075596872": "Blue Prolaps Closed",
      "-1343254064": "Red Prolaps Closed",
      "-1136991410": "Blue Big Cat Closed",
      "-656302941": "Purple & White SN Closed",
      "-1844605192": "Green Ornate SN Closed",
      "-182823660": "Orange Ornate SN Closed",
      "-621240111": "Gray Prolaps Closed",
      "-433024622": "Brown SN Leather Closed",
      "-134335187": "Black SN Leather Closed",
      "-2104997297": "Gold Geo PRB Leather Closed",
      "-1804669412": "Color Geo PRB Leather Closed",
      "-1053401076": "Moss Leopard Leather Closed",
      "-1216852848": "Pale Leopard Leather Closed",
      "-2135400695": "Magenta Leopard Leather Closed",
      "-1359594612": "Cyan Leopard Leather Closed",
      "-1354030139": "Lilac Dotted Leather Open",
      "-1451419607": "Green Dotted Leather Open",
      "-1563924078": "Brown SN Leather Open",
      "-1861794288": "Black SN Leather Open",
      "-2025672057": "Multi-Color SN Leather Open",
      "-1913438220": "Color Geo SN Leather Open",
      "-1368129291": "Gold Geo PRB Leather Open",
      "-600548235": "Color Geo PRB Leather Open",
      "-674794307": "Orange Dotted Leather Open",
      "-971779754": "Blue Dotted Leather Open",
      "-1121599582": "Moss Leopard Leather Open",
      "-1495624948": "Pale Leopard Leather Open",
      "-660506983": "Magenta Leopard Leather Open",
      "-1810633345": "Spotted Bigness Leather Open",
      "-1712025508": "Green Didier Sachs Closed Field",
      "-401593198": "Black Didier Sachs Closed Field",
      "-1235662555": "Gray Didier Sachs Closed Field",
      "-655323565": "Ochre Didier Sachs Closed Field",
      "-241085817": "Green Didier Sachs Open Field",
      "-1193713416": "Black Didier Sachs Open Field",
      "-898169805": "Gray Didier Sachs Open Field",
      "-1621316097": "Red Didier Sachs Open Field",
      "-1457929863": "Ochre Didier Sachs Open Field",
      "-2081332912": "Vivid Gradient Puffer",
      "-675061552": "Orange & Neon Puffer",
      "-904739473": "Blue Painted Puffer",
      "-13029445": "Black & Neon Puffer",
      "-311718880": "Dark Painted Puffer",
      "-305230638": "White Brand Puffer",
      "-1085777923": "Green Gradient Puffer",
      "-861343042": "Dusk Gradient Puffer",
      "-1668345205": "Moss Leopard Puffer",
      "-1303626235": "Pale Leopard Puffer",
      "-408606546": "Cyan Leopard Puffer",
      "-1061405355": "Wild Bikini",
      "-903196623": "Blue Zebra Bikini",
      "-572065878": "Zebra Bikini",
      "-2093694393": "White Snakeskin Bikini",
      "-1787599164": "Green Snakeskin Bikini",
      "-2037941839": "Salmon Santo Capra T-Shirt",
      "-1702026824": "Yellow Santo Capra T-Shirt",
      "-1106974553": "Red & Black Santo Capra T-Shirt",
      "-448909567": "Blue Striped Santo Capra T-Shirt",
      "-2026051870": "Lilac Manor T-Shirt",
      "-868224785": "White Striped Manor T-Shirt",
      "-1136635664": "Green Globe Blagueurs T-Shirt",
      "-1451021450": "Purple Globe Blagueurs T-Shirt",
      "-1688039627": "Blagueurs Brand T-Shirt",
      "-1219310320": "Crewneck T-Shirt",
      "-1398884440": "White Manor Zigzag T-Shirt",
      "-903004331": "Blagueurs LS T-Shirt",
      "-472255826": "Blagueurs Sports T-Shirt",
      "-1247472059": "Teal Blagueurs LS T-Shirt",
      "-753774305": "Salmon Santo Capra T-Shirt",
      "-2133382026": "Yellow Santo Capra T-Shirt",
      "-1963114302": "Pink Santo Capra T-Shirt",
      "-1653414483": "Red & Black Santo Capra T-Shirt",
      "-1704651979": "White Manor T-Shirt",
      "-52930490": "Lilac Manor T-Shirt",
      "-282149645": "Mint Manor T-Shirt",
      "-644771399": "Black Striped Manor T-Shirt",
      "-876415460": "White Striped Manor T-Shirt",
      "-1350256759": "Wild Camisole",
      "-1144958974": "Blue Stripes Camisole",
      "-761823826": "Zebra Stripes Camisole",
      "-422304217": "Brown Spotted Camisole",
      "-90485323": "Turquoise Botanical Camisole",
      "-1725986113": "Neon Painted Camisole",
      "-1331470522": "Beige Striped Blagueurs Track",
      "-443528929": "Pink Striped Blagueurs Track",
      "-153582028": "Red Santo Capra Track",
      "-1435210315": "Dark Chevron SC Track",
      "-5203920": "Pink Ornate SC Track",
      "-214801309": "Mint Striped Blagueurs Track",
      "-1675938250": "Yellow Striped Blagueurs Track",
      "-1061748883": "Blue Striped Blagueurs Track",
      "-1905517864": "Mint Blagueurs Track",
      "-1865320903": "Leopard Loose Tank",
      "-1319274179": "Yellow Santo Capra Loose Tank",
      "-1915637210": "Moss Leopard Loose Tank",
      "-1534009436": "Pale Leopard Loose Tank",
      "-1914391984": "Magenta Leopard Loose Tank",
      "-1192156534": "Green Cardigan",
      "-1314300684": "White & Gray Cardigan",
      "-1141149288": "Blue Cardigan",
      "-342961986": "Midnight Purple Cardigan",
      "-46566381": "Blue & Cyan Cardigan",
      "-1227780707": "Azure Pattern Sweater",
      "-931024643": "Sunrise Pattern Sweater",
      "-1251156040": "Purple Motif Sweater",
      "-887846165": "Blue Motif Sweater",
      "-699817643": "Red Motif Sweater",
      "-325595663": "Green Botanical Sweater",
      "-99063566": "Purple Botanical Sweater",
      "-927267244": "Red Floral Sweater",
      "-679435297": "Blue Floral Sweater",
      "-2125193540": "Burgundy Garland Shortsleeve",
      "-879774926": "Black Garland Shortsleeve",
      "-2066579140": "Blue Leaves Shortsleeve",
      "-152902305": "Gray Leaves Shortsleeve",
      "-1374825550": "Blue Posies Shortsleeve",
      "-1647716441": "Yellow Savanna Shortsleeve",
      "-1693537132": "Urban Gradient Shortsleeve",
      "-1999042519": "Cool Gradient Shortsleeve",
      "-41478372": "Pink Botanical Shortsleeve",
      "-1562803802": "Blue Prolaps Open",
      "-626414944": "Golden Big Cat Open",
      "-879686545": "Purple & White SN Open",
      "-165191269": "Green Ornate SN Open",
      "-907015887": "Orange Ornate SN Open",
      "-156081483": "Orange & Black SN Open",
      "-445857750": "Black Bigness Open",
      "-1741249089": "Gray Prolaps Open",
      "-871887777": "Black Sports Blagueurs Hoodie",
      "-327085851": "Baby Blue SN Hoodie",
      "-26364738": "Yellow SN Hoodie",
      "-604737588": "Pink SN Hoodie",
      "-623728140": "White College Blagueurs Hoodie",
      "-384842126": "Sprayed Green Güffy Hoodie",
      "-148938095": "Spotted Dark Güffy Hoodie",
      "-968851244": "Neon Leaves Güffy Hoodie",
      "-609506390": "Blue Leaves Güffy Hoodie",
      "-2019784592": "Moss Spotted Güffy Hoodie",
      "-151558364": "Purple Spotted Güffy Hoodie",
      "-1129614707": "Baby Blue SN Hoodie",
      "-1703137745": "Yellow SN Hoodie",
      "-2077595176": "White College Blagueurs Hoodie",
      "-1801450813": "Gray College Blagueurs Hoodie",
      "-1619648401": "Graffiti Black Güffy Hoodie",
      "-1320500200": "Sprayed Green Güffy Hoodie",
      "-1025939659": "Spotted Dark Güffy Hoodie",
      "-343426927": "Neon Leaves Güffy Hoodie",
      "-25600396": "Blue Leaves Güffy Hoodie",
      "-1516663655": "Dark Padded Leather Jacket",
      "-1879285409": "Snow Padded Leather Jacket",
      "-1955540291": "Green Padded Leather Jacket",
      "-225926929": "Ice Padded Leather Jacket",
      "-361721669": "Orange Padded Leather Jacket",
      "-74172287": "Gray Padded Leather Jacket",
      "-312959990": "Yellow Padded Leather Jacket",
      "-162357374": "Spotted Muscle Pants",
      "-1893632438": "Peach Botanical Muscle Pants",
      "-1512201278": "Green Motif Muscle Pants",
      "-1212659849": "Fall Muscle Pants",
      "-936417179": "Orange Fall Muscle Pants",
      "-556722776": "White Camo Muscle Pants",
      "-259049180": "Dark Camo Muscle Pants",
      "-496766384": "Rust Leather Zippers",
      "-659956004": "Gray Leather Zippers",
      "-1012484906": "Yellow Leather Zippers",
      "-1319038901": "White Leather Zippers",
      "-1705352642": "Bright Red Leather Zippers",
      "-1864609982": "Green Leather Zippers",
      "-1041190542": "Caramel Leather Zippers",
      "-1204904466": "Blue Leather Zippers",
      "-824035476": "Mustard Shorts",
      "-1092774045": "Navy Shorts",
      "-986654055": "Tropical Pattern Shorts",
      "-664207095": "Green Leaves Shorts",
      "-689256563": "Criss Cross Shorts",
      "-1020256232": "Neon Painted Shorts",
      "-1179054806": "Navy Painted Shorts",
      "-1656867677": "Gold Floral Sequin",
      "-349679498": "Pink & Gold Gradient Sequin",
      "-1042743848": "Blue & Gray Gradient Sequin",
      "-1410700853": "Crewneck T-Shirt",
      "-1656697736": "White Manor Zigzag T-Shirt",
      "-1029177502": "B & W Blagueuers LS T-Shirt",
      "-1680068145": "Pink Santo Capra T-Shirt",
      "-1919642304": "Red & Black Santo Capra T-Shirt",
      "-101087768": "White Manor T-Shirt",
      "-626213861": "Blue Striped Santo Capra T-Shirt",
      "-332109218": "Lilac Manor T-Shirt",
      "-586757117": "Mint Manor T-Shirt",
      "-816402269": "Black Striped Manor T-Shirt",
      "-100915652": "White Manor Zigzag T-Shirt",
      "-1355478145": "Blagueurs LS T-Shirt",
      "-1074811660": "Blagueres Stripes T-Shirt",
      "-1849667438": "Blagueurs Sports T-Shirt",
      "-1551502307": "Teal Blagueurs LS T-Shirt",
      "-2047297277": "Salmon Santo Capra T-Shirt",
      "-400719233": "White Manor T-Shirt",
      "-1420721564": "Blue Striped Santo Capra T-Shirt",
      "-1952593539": "Black Striped Manor T-Shirt",
      "-1057606611": "White Striped Manor T-Shirt",
      "-1347972720": "Green Globe Blagueurs T-Shirt",
      "-445973226": "Purple Globe Blagueurs T-Shirt",
      "-103569751": "Crewneck T-Shirt",
      "-314274421": "White Manor Zigzag T-Shirt",
      "-1423062098": "B & W Blagueuers LS T-Shirt",
      "-236332759": "Yellow Santo Capra T-Shirt",
      "-126294457": "Pink Santo Capra T-Shirt",
      "-1921413050": "Red & Black Santo Capra T-Shirt",
      "-1714318222": "Blue Striped Santo Capra T-Shirt",
      "-1732385653": "White Striped Manor T-Shirt",
      "-1970091979": "Green Globe Blagueurs T-Shirt",
      "-2051981710": "Purple Globe Blagueurs T-Shirt",
      "-1882932590": "Blagueres Stripes T-Shirt",
      "-578660844": "Blagueurs Sports T-Shirt",
      "-1186787946": "Teal Blagueurs LS T-Shirt",
      "-956389107": "B & W Blagueuers LS T-Shirt",
      "-1797471038": "Blue Santo Capra T-Shirt",
      "-1566351281": "Yellow Santo Capra T-Shirt",
      "-2135483273": "Pink Santo Capra T-Shirt",
      "-1545312635": "Blue Striped Santo Capra T-Shirt",
      "-438301301": "Lilac Manor T-Shirt",
      "-206788316": "Mint Manor T-Shirt",
      "-935636414": "Black Striped Manor T-Shirt",
      "-686854166": "White Striped Manor T-Shirt",
      "-1395090563": "Green Globe Blagueurs T-Shirt",
      "-1184648045": "Purple Globe Blagueurs T-Shirt",
      "-1501515125": "Zebra Loose Tank",
      "-1673683451": "Pink Santo Capra Loose Tank",
      "-132065846": "Yellow Santo Capra Loose Tank",
      "-1261875424": "Snakeskin Loose Tank",
      "-1871280517": "Pale Leopard Loose Tank",
      "-1093049536": "Magenta Leopard Loose Tank",
      "-189885721": "Blue Stripes Camisole",
      "-1055320328": "Neon Leaves Camisole",
      "-2774731": "Brown Spotted Camisole",
      "-1418919831": "Turquoise Botanical Camisole",
      "-386729100": "Neon Painted Camisole",
      "-1115118432": "Blue Leaves Camisole",
      "-365167102": "Multicolor Leaves Camisole",
      "-2084653597": "Blue Santo Capra T-Shirt",
      "-1527842761": "Red & Black Santo Capra T-Shirt",
      "-1527443": "Blue Striped Santo Capra T-Shirt",
      "-1992141183": "Lilac Manor T-Shirt",
      "-1681818753": "Mint Manor T-Shirt",
      "-1563031128": "Black Striped Manor T-Shirt",
      "-1222757832": "White Striped Manor T-Shirt",
      "-33898512": "Green Globe Blagueurs T-Shirt",
      "-835559328": "Purple Globe Blagueurs T-Shirt",
      "-470411417": "Crewneck T-Shirt",
      "-1425660536": "White Manor Zigzag T-Shirt",
      "-1259870728": "Blagueurs LS T-Shirt",
      "-2042459986": "Blagueres Stripes T-Shirt",
      "-1745015773": "Blagueurs Sports T-Shirt",
      "-344632558": "B & W Blagueuers LS T-Shirt",
      "-47516035": "Salmon Santo Capra T-Shirt",
      "-815752471": "Blue Santo Capra T-Shirt",
      "-948412820": "White Manor T-Shirt",
      "-2000363262": "Lilac Manor T-Shirt",
      "-1695906479": "Mint Manor T-Shirt",
      "-1966054127": "Purple Globe Blagueurs T-Shirt",
      "-868174381": "Crewneck T-Shirt",
      "-1710108298": "White Manor Zigzag T-Shirt",
      "-1225130921": "Blagueurs LS T-Shirt",
      "-1088287517": "Blagueres Stripes T-Shirt",
      "-1453072025": "Blagueurs Sports T-Shirt",
      "-226626662": "Teal Blagueurs LS T-Shirt",
      "-859527128": "B & W Blagueuers LS T-Shirt",
      "-1314094905": "White Manor T-Shirt",
      "-887044672": "Blue Striped Santo Capra T-Shirt",
      "-939086469": "Lilac Manor T-Shirt",
      "-551134278": "Mint Manor T-Shirt",
      "-480549852": "Black Striped Manor T-Shirt",
      "-92138895": "White Striped Manor T-Shirt",
      "-417366580": "White Manor Zigzag T-Shirt",
      "-1957769704": "Blagueres Stripes T-Shirt",
      "-1776426058": "B & W Blagueuers LS T-Shirt",
      "-1113673029": "Salmon Santo Capra T-Shirt",
      "-1286824425": "Blue Santo Capra T-Shirt",
      "-824748756": "Pink Santo Capra T-Shirt",
      "-158849907": "Red & Black Santo Capra T-Shirt",
      "-186246823": "White Manor T-Shirt",
      "-2145764645": "Blue Striped Santo Capra T-Shirt",
      "-2122254310": "Crewneck T-Shirt",
      "-1870527170": "Blagueurs LS T-Shirt",
      "-1103109959": "Blagueres Stripes T-Shirt",
      "-108669120": "B & W Blagueuers LS T-Shirt",
      "-1479494697": "Salmon Santo Capra T-Shirt",
      "-1795584471": "Blue Santo Capra T-Shirt",
      "-327500502": "Red & Black Santo Capra T-Shirt",
      "-233645760": "White Manor T-Shirt",
      "-132787404": "Blue Striped Santo Capra T-Shirt",
      "-1603521036": "Lilac Manor T-Shirt",
      "-1902669237": "Mint Manor T-Shirt",
      "-650926206": "Green Globe Blagueurs T-Shirt",
      "-743334786": "Purple Globe Blagueurs T-Shirt",
      "-1217371064": "Blagueurs Brand T-Shirt",
      "-477548096": "Teal Blagueurs LS T-Shirt",
      "-240005615": "Salmon Santo Capra T-Shirt",
      "-496994": "Blue Santo Capra T-Shirt",
      "-1962704678": "Yellow Santo Capra T-Shirt",
      "-1667292143": "Pink Santo Capra T-Shirt",
      "-1348908539": "Red & Black Santo Capra T-Shirt",
      "-987058478": "Black Striped Manor T-Shirt",
      "-149679460": "White Striped Manor T-Shirt",
      "-454005167": "Purple Globe Blagueurs T-Shirt",
      "-1289450822": "Blagueurs Brand T-Shirt",
      "-242566817": "Crewneck T-Shirt",
      "-517138224": "White Manor Zigzag T-Shirt",
      "-1935112111": "Teal Blagueurs LS T-Shirt",
      "-389136229": "Pink Santo Capra T-Shirt",
      "-90446794": "Red & Black Santo Capra T-Shirt",
      "-219431859": "White Manor T-Shirt",
      "-46083849": "Lilac Manor T-Shirt",
      "-1677095330": "Black Striped Manor T-Shirt",
      "-1413206573": "White Striped Manor T-Shirt",
      "-1251262175": "Green Globe Blagueurs T-Shirt",
      "-953097044": "Purple Globe Blagueurs T-Shirt",
      "-206225972": "Blagueurs Brand T-Shirt",
      "-1733410740": "Crewneck T-Shirt",
      "-1426004751": "White Manor Zigzag T-Shirt",
      "-1518083424": "Blagueres Stripes T-Shirt",
      "-403478650": "Yellow Santo Capra T-Shirt",
      "-686438965": "Pink Santo Capra T-Shirt",
      "-1008492697": "Red & Black Santo Capra T-Shirt",
      "-276760681": "Evil Pumpkin",
      "-1058563483": "Rotten Pumpkin",
      "-753320248": "Nasty Watermelon",
      "-701441924": "Dead Butler",
      "-1532529354": "Rotten Butler",
      "-137805210": "Blue Hypnotic Alien",
      "-1976867020": "Red Hypnotic Alien",
      "-1338074765": "Yellow Haggard Witch",
      "-1569620519": "White Haggard Witch",
      "-1719406454": "Red Bearded Lucifer",
      "-1676346362": "White Scalded Psycho",
      "-1546019100": "Red Flayed Demon",
      "-145963571": "Gray Flayed Demon",
      "-1437766026": "White Skull Burst",
      "-8808018": "Pale Lycanthrope",
      "-344661230": "Red Toxic Insect",
      "-1148976335": "Purple Toxic Insect",
      "-958982678": "Dirty Sewer Creature",
      "-669632408": "Rotten Sewer Creature",
      "-379259419": "Red Classic Lucifer",
      "-1222438558": "Orange Classic Lucifer",
      "-2048003518": "Black Combat Mask",
      "-1364343871": "Forest Combat Mask",
      "-378858087": "Black Skeletal",
      "-80494897": "Please Stop Me Hockey",
      "-285001146": "Black Combat Top",
      "-579004614": "Gray Combat Top",
      "-1331505755": "Black Combat Pants",
      "-1580156927": "Gray Combat Pants",
      "-1808851778": "Charcoal Combat Pants",
      "-68359032": "Tan Combat Pants",
      "-1590806772": "Forest Combat Pants",
      "-1438684756": "Black Tact Gloves",
      "-1737996802": "Gray Tact Gloves",
      "-575909755": "Charcoal Tact Gloves",
      "-90256116": "Gray Wool Gloves",
      "-1327122021": "Charcoal Wool Gloves",
      "-1642556415": "Tan Wool Gloves",
      "-769983483": "Green Wool Gloves",
      "-1539706255": "Wasted Mrs Claus",
      "-1771088164": "Smashed Mrs Claus",
      "-1089653708": "Rebel Bad Elf",
      "-1290855368": "Gangsta Bad Elf",
      "-1386375369": "White Mrs Claus",
      "-1173606252": "Black Mrs Claus",
      "-914665614": "Latino Mrs Claus",
      "-1062779259": "Grumpy Bad Santa",
      "-1786220472": "Filthy Bad Santa",
      "-989456742": "Green Festive Luchador",
      "-221253075": "Dark Green Festive Luchador",
      "-1427774890": "Black Festive Luchador",
      "-1601909356": "White Festive Luchador",
      "-1774438141": "Red Festive Luchador",
      "-572384004": "Dark Pudding",
      "-538631934": "Light Pudding",
      "-538230264": "Black LS Beast",
      "-1271321631": "LS Visor Beast",
      "-2043850806": "Brown Visor Beast",
      "-1967871389": "Classic Festive Beast",
      "-1090232119": "Green Check Pajamas",
      "-292603126": "Snowflake Pajamas",
      "-552690679": "Snowman Pajamas",
      "-245382997": "Red Tree Pajamas",
      "-1506301372": "Green Tree Pajamas",
      "-1711042084": "Festive Striped Pajamas",
      "-1133356123": "Black Check Pajamas",
      "-1551324718": "Candy Cane Pajamas",
      "-1862564680": "Stocking Pajamas",
      "-1295529880": "Green Barfs Pajamas",
      "-512809538": "Red Barfs Pajamas",
      "-1471270027": "Holly Pajamas",
      "-990352183": "Penguin Pajamas",
      "-46441130": "Reindeer Pajamas",
      "-1037820496": "Black Love T-Shirt",
      "-79097863": "Red Love T-Shirt",
      "-1172927021": "Teal Lace Bustier",
      "-1119484812": "Black Mysterious",
      "-177102699": "Bronze Masquerade",
      "-1471866428": "Cupid",
      "-375526080": "Flapper Bob Chestnut",
      "-1210578507": "Flapper Bob Blonde",
      "-1907902827": "Flapper Bob Auburn",
      "-604122624": "Flapper Bob Black",
      "-11855710": "Flapper Bob Brown",
      "-733678419": "Purple Flapper Dress",
      "-541258851": "Black Flapper Dress",
      "-234868701": "Gray & White Flapper Dress",
      "-80625018": "Lilac Flapper Dress",
      "-2012994587": "Red Lace Bustier",
      "-1540105148": "Gray Lace Bustier",
      "-1871858528": "Teal Lace Bustier",
      "-1881959031": "Black Love T-Shirt",
      "-1046152917": "Red Love T-Shirt",
      "-739668639": "White Lace Panties",
      "-1126047902": "Red Lace Panties",
      "-954797108": "Black Lace Panties",
      "-1858238438": "Gray Lace Panties",
      "-1551291215": "Teal Lace Panties",
      "-1132989389": "White Stockings",
      "-1766348621": "Red Stockings",
      "-128785217": "Nude Rounded Heels",
      "-913832150": "Purple Rounded Heels",
      "-1803576042": "Black Rounded Heels",
      "-434290604": "Blue Rounded Heels",
      "-1356115347": "Red Rounded Heels",
      "-1058212368": "Hot Pink Rounded Heels",
      "-538672356": "Nude Lace Bustier",
      "-87639840": "Lilac Plaid Lace Bustier",
      "-1432655969": "Black Leopard Lace Bustier",
      "-432271409": "Black Plaid Lace Bustier",
      "-266394731": "Blue Dot Lace Bustier",
      "-1877948972": "Blue Embroidered Dress",
      "-325505192": "Brown Shimmer Dress",
      "-109786865": "Gold Shimmer Dress",
      "-1629681118": "Red Vintage Dress",
      "-1265420914": "Green Vintage Dress",
      "-989872783": "Nude Silk Lace Panties",
      "-1596197578": "Black Silk Lace Panties",
      "-942357733": "Blue Dot Silk Lace Panties",
      "-40948081": "Crimson Lace Panties",
      "-1262871322": "White Silk Lace Panties",
      "-495388573": "Diva Lace Panties",
      "-313291240": "Tan Lace Panties",
      "-1406864304": "Black Leopard Stockings",
      "-183158352": "Black Plaid Stockings",
      "-1894879840": "Purple Stripe Stockings",
      "-1664022235": "Tan Stripe Stockings",
      "-174365543": "Nude Lace Bustier",
      "-1450128251": "Lilac Plaid Lace Bustier",
      "-1848319017": "Red Stripe Lace Bustier",
      "-1811439245": "Black Plaid Lace Bustier",
      "-1193481443": "Red Leopard Lace Bustier",
      "-840652021": "Yellow Canvas Snugs",
      "-533835874": "Black Canvas Snugs",
      "-363240460": "Gray Canvas Snugs",
      "-1800226620": "Blue Canvas Snugs",
      "-1501012881": "Green Canvas Snugs",
      "-323814855": "Pinched Cornrows",
      "-338245878": "Leaf Cornrows",
      "-1635534722": "Zig Zag Cornrows",
      "-822213177": "White Classic",
      "-532666293": "Black Classic",
      "-1967035479": "White Mix Baseball Tee",
      "-1735260346": "Black Baseball Tee",
      "-1010579496": "Broker Baseball Shirt",
      "-779459739": "Double P Baseball Shirt",
      "-1640629059": "Magnetics Baseball Shirt",
      "-1410099144": "Trickster Baseball Shirt",
      "-79055061": "Feud Baseball Shirt",
      "-278947467": "Pink Sport Hoodie",
      "-748494468": "Blue Sport Hoodie",
      "-803349774": "Red Sport Hoodie",
      "-1919658765": "Black Hinterland Varsity",
      "-1681264290": "Green Magnetics Varsity",
      "-14829560": "Black Broker Print Varsity",
      "-1202443658": "Black Trickster Varsity",
      "-973453886": "Brown WSBL Varsity",
      "-1649227035": "Khaki Baggy Cargo",
      "-157352772": "Gray Baggy Cargo",
      "-356509979": "White Classic",
      "-117329048": "Black Classic",
      "-348253956": "White Classic",
      "-1603247900": "Gray Loose Tank",
      "-103199981": "White Mix Baseball Tee",
      "-540338441": "All Yellow Baseball Tee",
      "-2146256061": "Yellow Mix Baseball Tee",
      "-846440907": "White Mix Baseball Tee",
      "-102879428": "Black Baseball Tee",
      "-576552751": "All Yellow Baseball Tee",
      "-1729467684": "Gold Magnetics Necklace",
      "-416468603": "Gold Magnetics Necklace",
      "-655452920": "Platinum Magnetics Necklace",
      "-1198531326": "Golden Hi Tops",
      "-1377462398": "Navy Peacoat",
      "-1146342641": "Gray Peacoat",
      "-217308734": "Green Peacoat",
      "-440614570": "Gray Leather Fur Jacket",
      "-1709037022": "All Black Leather Fur Jacket",
      "-288309029": "White Leather Fur Jacket",
      "-598336538": "Fall Leather Fur Jacket",
      "-379046390": "Blue Leather Fur Jacket",
      "-1213640051": "Hunter Leather Fur Jacket",
      "-1008084369": "Black Deep Belted Jacket",
      "-172704252": "Brown Deep Belted Jacket",
      "-1679324565": "Red Deep Belted Jacket",
      "-844599828": "Teal Deep Belted Jacket",
      "-378485569": "Andromeda T-Shirt",
      "-1033269609": "Color Geo PRB T-Shirt",
      "-774165126": "Color Geo T-Shirt",
      "-555595896": "Brown Geo T-Shirt",
      "-135110206": "Medusa Art T-Shirt",
      "-842855068": "Angelica T-Shirt",
      "-594695431": "Classic Perseus T-Shirt",
      "-1299491087": "Shield & Sword T-Shirt",
      "-1069485476": "Full Shield T-Shirt",
      "-1762156598": "Brown Full Print T-Shirt",
      "-1587170138": "Brown Print T-Shirt",
      "-2090435241": "Brown Leather Zippers",
      "-2065377283": "Pegasus T-Shirt",
      "-2000856443": "Gold SN Print T-Shirt",
      "-1701904856": "Brown SN Print T-Shirt",
      "-462679583": "White SN Stripe T-Shirt",
      "-178605122": "Color Geo PRB T-Shirt",
      "-1621062412": "Medusa Art T-Shirt",
      "-1854377692": "Angelica T-Shirt",
      "-1623618430": "Classic Perseus T-Shirt",
      "-1862045674": "Shield & Sword T-Shirt",
      "-1127921767": "Full Shield T-Shirt",
      "-1361433661": "Brown Full Print T-Shirt",
      "-185176381": "Andromeda T-Shirt",
      "-295634318": "Pink SN PRB T-Shirt",
      "-1776832249": "Medusa Art T-Shirt",
      "-779966500": "Angelica T-Shirt",
      "-1029338590": "Classic Perseus T-Shirt",
      "-1441998607": "Shield & Sword T-Shirt",
      "-2042162842": "Brown Full Print T-Shirt",
      "-1199245855": "Brown Print T-Shirt",
      "-1498120008": "Gold Shiny Top",
      "-369921491": "Gold Shiny Top",
      "-1047292755": "Pegasus T-Shirt",
      "-1804453265": "Andromeda T-Shirt",
      "-1874760571": "Brown Geo PRB T-Shirt",
      "-1223476684": "Color Geo PRB T-Shirt",
      "-1980866585": "Color Geo T-Shirt",
      "-746654965": "Brown Geo T-Shirt",
      "-1506288134": "Medusa Art T-Shirt",
      "-1890930660": "Angelica T-Shirt",
      "-1584311127": "Classic Perseus T-Shirt",
      "-2044224042": "Full Shield T-Shirt",
      "-1222460701": "Black SN T-Shirt",
      "-1672510147": "Black SN T-Shirt",
      "-287819446": "Black SN T-Shirt",
      "-1017188246": "Gold Shiny Top",
      "-1065957785": "Platinum SN Necklace",
      "-1938026659": "Gold Zorse Necklace",
      "-120035304": "Platinum Zorse Necklace",
      "-909201304": "Gold LC Necklace",
      "-1139993371": "Platinum LC Necklace",
      "-2026786565": "Gold Dix Necklace",
      "-717034271": "Platinum Balaclava Necklace",
      "-81147995": "Platinum Zorse Necklace",
      "-1132118023": "Platinum LC Necklace",
      "-129652720": "Gold Le Chien Necklace",
      "-1290494545": "Platinum Le Chien Necklace",
      "-1174371529": "Platinum SN Necklace",
      "-1183075100": "Platinum Skull Necklace",
      "-473850396": "Platinum Balaclava Necklace",
      "-581152177": "Black Flight Boots",
      "-1114385357": "Night Vision",
      "-1067020949": "Rebreather",
      "-341046913": "Chemical Mask",
      "-670092377": "Crime Scene Tape",
      "-908093624": "Black Arrow Tape",
      "-1876706754": "Light Gray Duct Tape",
      "-1647782520": "Dark Gray Duct Tape",
      "-1394117691": "White Duct Tape",
      "-97470603": "Up-n-Atom Paper Bag",
      "-1293080337": "Manic Paper Bag",
      "-1137111266": "Zigzag Paper Bag",
      "-385914710": "Pink Paper Bag",
      "-1897876374": "Alien Paper Bag",
      "-861786128": "Help Me Paper Bag",
      "-633615581": "Puzzle Paper Bag",
      "-1531999116": "Sad Paper Bag",
      "-1298728310": "The Bird Paper Bag",
      "-156630377": "Sticker Paper Bag",
      "-2013146335": "Kill Me Paper Bag",
      "-1351109501": "Green Plastic Face",
      "-8858492": "The Don Plastic Face",
      "-697138568": "Clown Plastic Face",
      "-391043339": "Black Plastic Face",
      "-2128554018": "Puppet Plastic Face",
      "-1920307023": "Mime Plastic Face",
      "-1703735810": "Skull Face Bandana",
      "-175553495": "Desert Face Bandana",
      "-475815842": "Forest Face Bandana",
      "-853413029": "Paisley Face Bandana",
      "-1419137045": "Yellow Face Bandana",
      "-1441694810": "Gray Tight Ski",
      "-402884741": "Charcoal Tight Ski",
      "-1955185040": "Urban Tight Ski",
      "-1722820061": "Blue Tight Ski",
      "-728857530": "Black Hooded Ski",
      "-106672527": "White Hooded Ski",
      "-1674341487": "Green Hooded Ski",
      "-1426640612": "Khaki Hooded Ski",
      "-1616110970": "Charcoal Hooded Ski",
      "-825558845": "Forest Hooded Ski",
      "-1062773636": "Urban Hooded Ski",
      "-1951407139": "Justice T-Shirt Mask",
      "-706250677": "Love Fist T-Shirt Mask",
      "-933962458": "TPI T-Shirt Mask",
      "-539458143": "Charcoal Toggle Ski",
      "-1384675744": "Blue Loose Balaclava",
      "-603364477": "Black Loose Balaclava",
      "-945505606": "Khaki Loose Balaclava",
      "-188672778": "Bloody Loose Balaclava",
      "-130673163": "White Knit Balaclava",
      "-1686217589": "Green Knit Balaclava",
      "-874910415": "Copper Knit Balaclava",
      "-1240415841": "Gray Knit Balaclava",
      "-1695478944": "Rainbow Knit Balaclava",
      "-450420789": "Woodland Knit Balaclava",
      "-204554982": "Flying Bravo FB Balaclava",
      "-1615510302": "Bandit Knit Balaclava",
      "-2083484391": "Neon Camo Knit Balaclava",
      "-1372200477": "Pink Camo Knit Balaclava",
      "-162598372": "Black Stripe Knit Balaclava",
      "-393062749": "Pink Stripe Knit Balaclava",
      "-476401343": "Pink Infected",
      "-706275878": "Brown Infected",
      "-1697114941": "White Vampyr",
      "-1927218859": "Blue Vampyr",
      "-534990310": "Pale Frank",
      "-144825365": "Impotent Rage",
      "-1735362607": "Princess Robot Bubblegum",
      "-1014858178": "Black Tactical Boots",
      "-2065985352": "Black Scruffy Boots",
      "-483649657": "All Black Backside",
      "-404460465": "All Black Sports",
      "-1189772000": "Black Fitted Tux Open",
      "-2139974693": "Gray Fitted Tux Open",
      "-1639395449": "Navy Fitted Tux Open",
      "-222824344": "Teal Fitted Tux Open",
      "-462988345": "Red Fitted Tux Open",
      "-955506415": "White Fitted Tux Open",
      "-991945543": "Brown Fitted Tux Open",
      "-1203308385": "Black Fitted Tux",
      "-608583808": "Gray Fitted Tux",
      "-319102462": "Navy Fitted Tux",
      "-1906498360": "Red Fitted Tux",
      "-950626630": "All Gray Fitted Tux",
      "-303993926": "Black Hooded Jacket",
      "-5501105": "Light Gray Hooded Jacket",
      "-1566943959": "Navy Hooded Jacket",
      "-1270318971": "Tan Hooded Jacket",
      "-1180912499": "Light Gray Hooded Jacket",
      "-947826602": "Dark Gray Hooded Jacket",
      "-566002214": "Red Hooded Jacket",
      "-323675459": "Navy Hooded Jacket",
      "-1926898788": "Tan Hooded Jacket",
      "-1511561266": "Black SN T-Shirt",
      "-1477518667": "Black Tailcoat",
      "-888599841": "Gray Rolled Jacket",
      "-647223387": "Beige Rolled Jacket",
      "-309145606": "Blue Rolled Jacket",
      "-1087699876": "Beige Stealth Jacket",
      "-846356191": "Gray Stealth Jacket",
      "-713294913": "Black Battle Pants",
      "-1728882738": "Navy Regular Suit Pants",
      "-1498614975": "Teal Regular Suit Pants",
      "-2128992228": "White Regular Suit Pants",
      "-804731400": "Brown Regular Suit Pants",
      "-497256741": "Gray Scruffy Suit Pants",
      "-1330801794": "Beige Scruffy Suit Pants",
      "-1865640992": "Stealth Utility Vest",
      "-632479449": "Gray Heavy Utility Vest",
      "-1399700046": "Black Heavy Utility Vest",
      "-565297075": "Black SN T-Shirt",
      "-393808941": "Off-White Shirt",
      "-201684294": "Blue Striped Shirt",
      "-1388315322": "Tan Shirt",
      "-1685956149": "Ocean Stripe Shirt",
      "-2030486821": "Blue Woven Shirt",
      "-1704140350": "Pale Olive Shirt",
      "-1941748369": "Fuchsia Shirt",
      "-1916947083": "White Shirt",
      "-1679928906": "Silver Shirt",
      "-499617037": "Off-White Shirt",
      "-125526121": "Mint Shirt",
      "-2036417599": "Pink Striped Shirt",
      "-1965112255": "Tan Shirt",
      "-1725144868": "Ocean Stripe Shirt",
      "-1441305048": "Charcoal Shirt",
      "-1197044922": "Barely Blue Shirt",
      "-1017503571": "Pink Check Shirt",
      "-249856977": "Blue Woven Shirt",
      "-293165240": "Black Fitted Suit Vest",
      "-531330332": "Blue Fitted Suit Vest",
      "-2026940261": "Teal Fitted Suit Vest",
      "-367321503": "White Fitted Suit Vest",
      "-118965252": "Brown Fitted Suit Vest",
      "-1626330481": "Silver Fitted Suit Vest",
      "-1383708805": "Beige Fitted Suit Vest",
      "-1145904172": "Black Fitted Suit Vest",
      "-2107477712": "Gray Fitted Suit Vest",
      "-1869247082": "Navy Fitted Suit Vest",
      "-1622725895": "Teal Fitted Suit Vest",
      "-969733223": "Black Loose Bow Tie",
      "-1892419484": "Charcoal Loose Tie",
      "-2027611012": "Tan Stripy Loose Tie",
      "-1819331248": "Pink Loose Tie",
      "-1579494937": "Green Diamond Loose Tie",
      "-1341395383": "Blue Hatch Loose Tie",
      "-523592828": "Purple Diamond Loose Tie",
      "-2047777329": "Blue Stripy Loose Tie",
      "-1547755154": "Teal Loose Tie",
      "-1751260318": "White Skinny Tie",
      "-1688769839": "Black Skinny Tie",
      "-72452395": "Charcoal Straight Tie",
      "-378547624": "Khaki Hatch Straight Tie",
      "-125345933": "Blue Diamond Straight Tie",
      "-424625210": "Tan Stripy Straight Tie",
      "-533413918": "White Stripy Straight Tie",
      "-838657153": "Green Straight Tie",
      "-52659911": "Purple Diamond Straight Tie",
      "-282993212": "Fuchsia Straight Tie",
      "-664620986": "Gray Diamond Straight Tie",
      "-894626597": "Tan Straight Tie",
      "-1391965568": "Black Bow Tie",
      "-431899406": "White Bow Tie",
      "-745039970": "Red Bow Tie",
      "-1131862141": "Charcoal Loose Tie",
      "-2142886247": "Tan Stripy Loose Tie",
      "-688106500": "Pink Loose Tie",
      "-481858414": "Green Diamond Loose Tie",
      "-1115578093": "Blue Hatch Loose Tie",
      "-2133577518": "Tan Loose Tie",
      "-1634505648": "Blue Stripy Loose Tie",
      "-1902457757": "Teal Loose Tie",
      "-759881830": "White Skinny Tie",
      "-2060483472": "Gray Skinny Tie",
      "-1821040389": "Black Skinny Tie",
      "-1804417290": "Charcoal Straight Tie",
      "-2036356272": "Khaki Hatch Straight Tie",
      "-1495216308": "Orange Straight Tie",
      "-1800983847": "Blue Diamond Straight Tie",
      "-1020753957": "Tan Stripy Straight Tie",
      "-1326324882": "Pink Straight Tie",
      "-142675833": "Green Diamond Straight Tie",
      "-314516469": "Blue Hatch Straight Tie",
      "-381259612": "Purple Diamond Straight Tie",
      "-606480949": "Fuchsia Straight Tie",
      "-792477793": "Gray Diamond Straight Tie",
      "-1087759252": "Tan Straight Tie",
      "-339970584": "Blue Stripy Straight Tie",
      "-638332329": "Teal Straight Tie",
      "-1858193039": "Brown Driving Gloves",
      "-1301636615": "Black Driving Gloves",
      "-1005568700": "Brown Driving Gloves",
      "-840276017": "Black Driving Gloves",
      "-1822592330": "Brown Driving Gloves",
      "-591418577": "Black Driving Gloves",
      "-244985062": "Black Leather Gloves",
      "-474990673": "Brown Leather Gloves",
      "-1344081422": "Brown Leather Gloves",
      "-1158564771": "Black Leather Gloves",
      "-859875336": "Brown Leather Gloves",
      "-958872024": "Black Leather Gloves",
      "-1296654876": "Brown Leather Gloves",
      "-1978886808": "Black Leather Gloves",
      "-1745735373": "Brown Leather Gloves",
      "-268733734": "Black Leather Gloves",
      "-1044539809": "Brown Leather Gloves",
      "-1759053005": "Black Leather Gloves",
      "-1989976148": "Brown Leather Gloves",
      "-549346210": "Brown Leather Gloves",
      "-2029591494": "Black Leather Gloves",
      "-331193181": "Black Woolen Gloves",
      "-1099233003": "Gray Woolen Gloves",
      "-1315084792": "Black Woolen Gloves",
      "-1609383181": "Gray Woolen Gloves",
      "-1062430757": "Gray Woolen Gloves",
      "-420901598": "Black Driving Gloves",
      "-248012354": "Brown Driving Gloves",
      "-208098559": "Black Woolen Gloves",
      "-505968769": "Gray Woolen Gloves",
      "-69929428": "Black Woolen Gloves",
      "-825713640": "Gray Woolen Gloves",
      "-99079306": "Black Woolen Gloves",
      "-1521778214": "Gray Woolen Gloves",
      "-1279403197": "Black Woolen Gloves",
      "-972324898": "Gray Woolen Gloves",
      "-2124412821": "Black Woolen Gloves",
      "-1219726269": "Gray Woolen Gloves",
      "-1682905914": "Gray Woolen Gloves",
      "-1898790186": "Gray Woolen Gloves",
      "-1947098483": "Black Driving Gloves",
      "-1385727891": "Black Fingerless Gloves",
      "-447453114": "Gray Fingerless Gloves",
      "-596540583": "Black Fingerless Gloves",
      "-52187194": "Gray Fingerless Gloves",
      "-2038547154": "Gray Fingerless Gloves",
      "-1459998821": "Black Fingerless Gloves",
      "-360036697": "Black Fingerless Gloves",
      "-666983920": "Gray Fingerless Gloves",
      "-707909514": "Black Fingerless Gloves",
      "-1543715628": "Gray Fingerless Gloves",
      "-1503837941": "Brown Driving Gloves",
      "-893909282": "Black Fingerless Gloves",
      "-992019672": "Gray Fingerless Gloves",
      "-887980266": "Refuse Collector Gloves",
      "-653786071": "Refuse Collector Gloves",
      "-1148238879": "Black Driving Gloves",
      "-315676892": "Brown Driving Gloves",
      "-926433555": "Refuse Collector Gloves",
      "-306315670": "White Cotton Gloves",
      "-1929503325": "White Cotton Gloves",
      "-227700260": "Brown Driving Gloves",
      "-210146735": "White Cotton Gloves",
      "-521728710": "White Cotton Gloves",
      "-1196262225": "White Cotton Gloves",
      "-795005246": "White Cotton Gloves",
      "-934174767": "White Cotton Gloves",
      "-1154048938": "Blue Surgical Gloves",
      "-1189128367": "Blue Surgical Gloves",
      "-891979075": "White Surgical Gloves",
      "-2132413943": "Brown Driving Gloves",
      "-2079589815": "Blue Surgical Gloves",
      "-1179032157": "White Surgical Gloves",
      "-137095372": "Blue Surgical Gloves",
      "-1485106343": "White Surgical Gloves",
      "-664356399": "Blue Surgical Gloves",
      "-162794081": "White Surgical Gloves",
      "-1147008986": "Blue Surgical Gloves",
      "-1375834909": "White Surgical Gloves",
      "-234436397": "Blue Surgical Gloves",
      "-1866981918": "Blue Surgical Gloves",
      "-1173196650": "White Surgical Gloves",
      "-1925009287": "Black Driving Gloves",
      "-1559755280": "Blue Surgical Gloves",
      "-1872600939": "White Surgical Gloves",
      "-2005924878": "Khaki Walking Boots",
      "-1264731975": "Sienna Leather Loafers",
      "-958374594": "Orange Leather Loafers",
      "-1990532560": "Brown Leather Loafers",
      "-1683847485": "Black Leather Loafers",
      "-815661746": "Black Silk Pajamas",
      "-1190408030": "SN Silk Pajamas",
      "-470768021": "Perseus Silk Pajamas",
      "-566912267": "Gray Silk Pajamas",
      "-206486036": "Pink Silk Pajamas",
      "-766352173": "Red Shiny Open Jacket",
      "-1153884555": "Green Shiny Jacket",
      "-815519388": "Gold Print Open Jacket",
      "-1491335966": "Floral Loose Shirt",
      "-1013317568": "Red Silk Jacket",
      "-705583889": "Blue Silk Jacket",
      "-1546192324": "Red Smoking Jacket",
      "-1164657241": "Brown Smoking Jacket",
      "-705503641": "Black Smoking Jacket",
      "-466388248": "Pink Smoking Jacket",
      "-1939059877": "Green Smoking Jacket",
      "-245463287": "Dix Bikini",
      "-480384240": "Blossom Bikini",
      "-709603395": "Floral Bikini",
      "-1917302634": "Cream Long Suit",
      "-2031026344": "White Silk Robe",
      "-1774608915": "Gray Silk Robe",
      "-1543620234": "Black Silk Robe",
      "-1432664400": "Red Print Silk Robe",
      "-1200954801": "Purple Print Silk Robe",
      "-820965477": "Navy Print Silk Robe",
      "-595088760": "Black Print Silk Robe",
      "-1306503762": "Brown Print Silk Robe",
      "-960480251": "San Andreas Tucked Polo",
      "-13877721": "Denim Tucked Shirt",
      "-1814618793": "Beige Detail Battle Vest",
      "-1651429173": "Khaki Detail Battle Vest",
      "-1109205107": "White Continental Open Jacket",
      "-338576534": "Navy Continental Open Jacket",
      "-644901146": "Blue Continental Open Jacket",
      "-214545869": "Yellow Continental Open Jacket",
      "-181924378": "White Continental Closed Jacket",
      "-1582242055": "Blue Continental Closed Jacket",
      "-890095237": "Lilac Continental Closed Jacket",
      "-1106468944": "Yellow Continental Closed Jacket",
      "-411685603": "Le Chien Bikini",
      "-172570210": "Sessanta Nove Bikini",
      "-870353296": "Perseus Bikini",
      "-631565593": "Blossom Bikini",
      "-387785860": "Black Tracksuit Pants",
      "-664552834": "Charcoal Tracksuit Pants",
      "-2037049630": "Navy Tracksuit Pants",
      "-104399548": "Teal Tracksuit Pants",
      "-50873153": "Tan Battle Pants",
      "-1091223381": "Khaki Battle Pants",
      "-1397953147": "Tan Utility Pants",
      "-1795207349": "White Continental Pants",
      "-1559893160": "Navy Continental Pants",
      "-2046316200": "Yellow Continental Pants",
      "-1775942909": "White Continental Slim Pants",
      "-2021284412": "Navy Continental Slim Pants",
      "-2132764550": "Blue Continental Slim Pants",
      "-210043471": "Lilac Continental Slim Pants",
      "-581906083": "Yellow Continental Slim Pants",
      "-618676860": "Red Shiny Pants",
      "-460992432": "Blue Shiny Pants",
      "-153389829": "Black Shiny Pants",
      "-1609430223": "Gold Print Pants",
      "-310078170": "Red Fitted Shiny Pants",
      "-96620904": "Blue Fitted Shiny Pants",
      "-1300669754": "Gold Print Fitted Pants",
      "-182030260": "White Sweater Shirt",
      "-892781945": "Tan Pocket Utility Vest",
      "-1116102680": "Khaki Pocket Utility Vest",
      "-564862562": "Black Pocket Utility Vest",
      "-1519558015": "Black Desert Scarf",
      "-1509617832": "Black Bead Necklace",
      "-241792931": "Pink Cowboy Boots",
      "-928944791": "White Cowboy Boots",
      "-1226454542": "Red Cowboy Boots",
      "-1392069068": "Wine Cowboy Boots",
      "-1691217269": "Crimson Cowboy Boots",
      "-1106356149": "Green Cowboy Boots",
      "-330189615": "Purple Cowboy Boots",
      "-1516918950": "Orange Cowboy Boots",
      "-1813838859": "Navy Cowboy Boots",
      "-1042601872": "White Cowboy Boots",
      "-392399374": "Red Cowboy Boots",
      "-647243887": "Wine Cowboy Boots",
      "-2026065100": "Crimson Cowboy Boots",
      "-1430619601": "Purple Cowboy Boots",
      "-1809462010": "Orange Cowboy Boots",
      "-808564419": "Navy Liberty Polo",
      "-693269545": "French Navy Long Suit",
      "-446650051": "Light Gray Long Suit",
      "-1445758563": "Burgundy Long Suit",
      "-728281308": "Purple Long Suit",
      "-2042252670": "Pink Long Suit",
      "-140096056": "Gray Long Suit",
      "-685667153": "Black Pinstripe Long Suit",
      "-513564365": "Blue Pinstripe Long Suit",
      "-223250829": "Light Blue Tracksuit Top",
      "-1135703634": "Lilac Tracksuit Top",
      "-521809188": "Gray Tracksuit Top",
      "-1697826507": "Light Gray Cashmere Coat",
      "-1319501935": "Pastel Blue Pajamas",
      "-1300754875": "Navy Pinstripe Pajamas",
      "-619654314": "White Graphic Pajamas",
      "-117698764": "Blue Swirl Pajamas",
      "-1128556884": "Yellow Swirl Pajamas",
      "-2139070699": "Pastel Yellow Smoking Jacket",
      "-1564610862": "Red Swirl Smoking Jacket",
      "-1936539012": "Navy Pinstripe Smoking Jacket",
      "-1951763095": "Pastel Pink Smoking Jacket",
      "-1727459298": "Pastel Green Smoking Jacket",
      "-341035665": "Blue Swirl Smoking Jacket",
      "-565241163": "Yellow Swirl Smoking Jacket",
      "-1683575561": "Black Liberty Hoodie",
      "-1980757622": "Red Liberty Hoodie",
      "-1054705682": "White Flying Bravo Hoodie",
      "-2033335859": "Regal Loose Shirt",
      "-853291400": "Botanical Loose Shirt",
      "-696808515": "Gray Quilted Jacket",
      "-399888606": "Khaki Quilted Jacket",
      "-2042947809": "Black Leather Field Jacket",
      "-1812680046": "Brown Leather Field Jacket",
      "-389650303": "Red Turtleneck",
      "-1523162778": "Black Turtleneck",
      "-385996967": "Burgundy Tracksuit Pants",
      "-1021599230": "White Tracksuit Pants",
      "-492561755": "Tan Tracksuit Pants",
      "-1155773546": "Royal Blue Tracksuit Pants",
      "-1375162001": "Light Blue Tracksuit Pants",
      "-1615260464": "Orange Tracksuit Pants",
      "-2107501371": "Blue Sweater Shirt",
      "-1780663365": "Black Sweater Shirt",
      "-1520510274": "Check Sweater Shirt",
      "-166531186": "Red Turtleneck",
      "-1079147836": "Brown Turtleneck",
      "-1281790928": "Gray Turtleneck",
      "-595476992": "Purple Turtleneck",
      "-1527559543": "Gold Bead Necklace",
      "-1268717212": "Pearl Bead Necklace",
      "-1871352890": "Chocolate Dome Filter",
      "-165365981": "Tan Dome Filter",
      "-21589324": "Nagasaki White and Red Hoodie",
      "-1241874115": "Nagasaki Black Hoodie",
      "-880497583": "Purple Helmets Black Hoodie",
      "-485991592": "Principe Hoodie Black",
      "-1285164597": "Back Crew Emblem",
      "-541352697": "Back Crew Emblem",
      "-2067057901": "Front and Back Crew Emblem",
      "-760163114": "Back Crew Emblem",
      "-199230222": "Back Crew Emblem",
      "-501907046": "Back Crew Emblem",
      "-474382985": "Back Crew Emblem",
      "-1124822117": "Front and Back Crew Emblem",
      "-713264766": "Front and Back Crew Emblem",
      "-891530896": "Large Crew Emblem",
      "-1068704377": "Back Crew Emblem",
      "-1461206084": "Back Crew Emblem",
      "-1159942109": "Back Crew Emblem",
      "-1562978248": "Back Crew Emblem",
      "-432003065": "Back Crew Emblem",
      "-435379724": "Ox Blood Laceup Boots",
      "-664795493": "Chocolate Laceup Boots",
      "-90911996": "Worn Ox Blood Laceup Boots",
      "-1395478655": "Worn Chocolate Laceup Boots",
      "-200158113": "Worn Chocolate Laceup Boots",
      "-1341278215": "Tan Harness Boots",
      "-44417070": "Worn Ox Blood Slack Boots",
      "-385345746": "Worn Chocolate Slack Boots",
      "-1371335980": "Chocolate Slack Boots",
      "-462520538": "Worn Black Slack Boots",
      "-482360544": "Black Calf Boots",
      "-229383864": "Ox Blood Calf Boots",
      "-1005714243": "Tan Calf Boots",
      "-105188373": "Black Calf Boots",
      "-473446395": "Ox Blood Calf Boots",
      "-2085355783": "Tan Harness Boots",
      "-1534443355": "Black Harness Boots",
      "-1054284371": "Loose Swept Back",
      "-1453823309": "Undercut Swept Back",
      "-520312819": "Spiked Mohawk",
      "-341963269": "Layered Mod",
      "-1672011404": "Black Leather Cut",
      "-944900063": "Chocolate Leather Cut",
      "-569290156": "Black Defender Vest",
      "-799885609": "Worn Black Defender Vest",
      "-2104842851": "Beige Puffer Jacket",
      "-1378386894": "Lime Puffer Jacket",
      "-2119499996": "Black Puffer Jacket",
      "-1522809275": "Mustard Puffer Jacket",
      "-1206457349": "Brown Puffer Jacket",
      "-1471001482": "Gray Puffer Jacket",
      "-1144360090": "Hot Pink Puffer Jacket",
      "-1929341485": "Olive Puffer Jacket",
      "-1533371464": "Gray Leather Hoodie",
      "-1569601477": "Vintage Denim Biker",
      "-735499351": "Indigo Denim Biker",
      "-2123463115": "Washed Denim Biker",
      "-1349164414": "Charcoal Denim Biker",
      "-862876177": "Charcoal Denim Cut",
      "-1631412340": "Black Torn Sleeveless Crop",
      "-1356677044": "Gray Torn Sleeveless Crop",
      "-513694519": "Wine Torn Sleeveless Crop",
      "-2137169082": "Cream Torn Sleeveless Crop",
      "-1541330355": "Camo Torn Sleeveless Crop",
      "-1540209484": "Black Torn Tee",
      "-813458602": "Gray Torn Tee",
      "-2002809457": "Wine Torn Tee",
      "-1310334949": "Cream Torn Tee",
      "-76156098": "Mocha Torn Tee",
      "-433141584": "Camo Torn Tee",
      "-610906868": "Black Torn Short Crop",
      "-983162712": "Gray Torn Short Crop",
      "-2042140903": "Indigo Tied Shirt",
      "-865406129": "Washed Black Tied Shirt",
      "-1037771069": "Wine Checked Tied Shirt",
      "-1460786090": "Charcoal Checked Tied Shirt",
      "-1632692264": "Blue Checked Tied Shirt",
      "-1883561755": "Leather Halter Vest",
      "-619724710": "Black Darted Vest",
      "-917070616": "Worn Black Darted Vest",
      "-2037529217": "Vintage Patched Denim Biker",
      "-502530950": "Washed Patched Denim Biker",
      "-741711881": "Charcoal Patched Denim Biker",
      "-1250792305": "Vintage Patched Denim Cut",
      "-27951528": "Charcoal Patched Denim Cut",
      "-1427990851": "Worn Black Patched Classic",
      "-1713376088": "Ox Blood Patched Classic",
      "-1880235265": "Worn Black Patched Cut",
      "-2140126204": "Ox Blood Patched Cut",
      "-1288263280": "Chocolate Patched Cut",
      "-672206080": "Black Patched Cut",
      "-1658359938": "Patched Darted Vest",
      "-762951946": "Digital Sports Cut",
      "-1472761255": "Black Sports Cut",
      "-1207823890": "Camo Sports Cut",
      "-487397425": "Green Sports Cut",
      "-256408744": "Yellow Sports Cut",
      "-2088979470": "Brown Flat Front Cut",
      "-997000503": "Urban Closed Parka",
      "-139552932": "Forest Open Parka",
      "-251511811": "Worn Black Classic Biker",
      "-1952419521": "Black Classic Biker",
      "-519512439": "Worn Black Biker Cut",
      "-1738486478": "Ox Blood Biker Cut",
      "-1035460344": "Chocolate Biker Cut",
      "-2136869117": "Stitched Leather Baseball Shirt",
      "-200485711": "Green Sports Biker",
      "-834303709": "Yellow Sports Biker",
      "-1848977110": "Black Blouson Jacket",
      "-1189402674": "Ox Blood Blouson Jacket",
      "-1419441054": "Chocolate Blouson Jacket",
      "-595792239": "Worn Black Blouson Jacket",
      "-892187844": "Worn Ox Blood Blouson Jacket",
      "-300641860": "Worn Chocolate Blouson Jacket",
      "-476575076": "Vintage Ribbed",
      "-1766005850": "Dirty Wash Roadworn",
      "-303951377": "Vintage Roadworn",
      "-76862207": "Hard Washed Roadworn",
      "-228075959": "Mocha Plain",
      "-853701707": "Red Plain",
      "-860934656": "Red Quilted",
      "-1868288754": "Mocha Ribbed",
      "-1717878924": "Red Ribbed",
      "-1870990021": "Slate Denims and Stockings",
      "-47727775": "Brown Print T-Shirt",
      "-1735921109": "Pink SN PRB T-Shirt",
      "-1427597588": "White SN Stripe T-Shirt",
      "-1350885355": "Color Geo PRB T-Shirt",
      "-1900040548": "Pegasus T-Shirt",
      "-218748314": "Color Geo T-Shirt",
      "-1889049782": "Beige T-Shirt",
      "-1769390565": "Classic Perseus T-Shirt",
      "-2109270633": "Shield & Sword T-Shirt",
      "-1436752446": "Full Shield T-Shirt",
      "-1742519985": "Brown Full Print T-Shirt",
      "-834396750": "Khaki T-Shirt",
      "-1233030754": "White Rolled Tee",
      "-55283840": "White Rolled Tee",
      "-781412111": "Black Rolled Tee",
      "-542984867": "Gray Rolled Tee",
      "-319566829": "Black Rolled Tee",
      "-545701327": "White Rolled Tee",
      "-85886719": "Black Rolled Tee",
      "-928836475": "Gray Rolled Tee",
      "-2133916430": "Navy Blazer Shirt",
      "-755652290": "Red Blazer Shirt",
      "-1326530198": "Cream with White Shirt",
      "-1557125651": "Cream with Black Shirt",
      "-1582469378": "Cyan with Red Shirt",
      "-1949351102": "Black with White Shirt",
      "-2106871685": "Black with Black Shirt",
      "-877409213": "White with White Shirt",
      "-637966130": "White with Black Shirt",
      "-266682383": "Red with White Shirt",
      "-44213642": "Red with Black Shirt",
      "-163094609": "Cream with White Turtle",
      "-946977524": "Navy with Navy Turtle",
      "-252241955": "Cyan with Black Turtle",
      "-1509621254": "Black with White Turtle",
      "-2080539875": "Cream with Navy Turtle",
      "-414612666": "White with White Turtle",
      "-447512778": "White with Black Turtle",
      "-746726517": "White with Navy Turtle",
      "-2000583511": "Red with Black Turtle",
      "-1141970173": "Red with Navy Turtle",
      "-1769398216": "Navy with White Turtle",
      "-2138686938": "Black SN T-Shirt",
      "-1924308081": "Pink SN PRB T-Shirt",
      "-1210861409": "White SN Stripe T-Shirt",
      "-925476188": "Color Geo PRB T-Shirt",
      "-1807556193": "Pegasus T-Shirt",
      "-424995031": "Brown Geo T-Shirt",
      "-1899567262": "Beige T-Shirt",
      "-58052048": "Angelica T-Shirt",
      "-1281056666": "Brown Full Print T-Shirt",
      "-1001383672": "Black SN T-Shirt",
      "-619690360": "Black SN T-Shirt",
      "-73971901": "Brown Print T-Shirt",
      "-1545070618": "Color Geo PRB T-Shirt",
      "-388570603": "Pegasus T-Shirt",
      "-1890684401": "Beige T-Shirt",
      "-5238841": "Andromeda T-Shirt",
      "-267063135": "Medusa Art T-Shirt",
      "-1450876033": "Full Shield T-Shirt",
      "-1086288135": "Brown Full Print T-Shirt",
      "-395480358": "Khaki T-Shirt",
      "-1646863247": "White Classic",
      "-1063515919": "Black Classic",
      "-49460904": "Gray Classic",
      "-111757256": "Brown Driving Gloves",
      "-51036152": "Black Woolen Gloves",
      "-933144863": "Gray Woolen Gloves",
      "-671105758": "White Cotton Gloves",
      "-1439393512": "Blue Surgical Gloves",
      "-479032429": "White Surgical Gloves",
      "-1795808405": "Black Driving Gloves",
      "-2070904160": "Brown Driving Gloves",
      "-583173670": "Black Leather Gloves",
      "-1097003929": "Black Fingerless Gloves",
      "-2054743492": "Gray Fingerless Gloves",
      "-1021187095": "White Cotton Gloves",
      "-1662421384": "Blue Surgical Gloves",
      "-1935092233": "White Surgical Gloves",
      "-935552076": "Black Leather Gloves",
      "-183008523": "Gray Woolen Gloves",
      "-569574162": "Gray Fingerless Gloves",
      "-2105033798": "Refuse Collector Gloves",
      "-1746944984": "Blue Surgical Gloves",
      "-2103012938": "White Surgical Gloves",
      "-658080624": "Skull Tank",
      "-1498376091": "Two-Tone Striped Tank",
      "-126655146": "Electric Zebra Cropped Tank",
      "-960462351": "Leopard Cropped Tank",
      "-606163923": "Parrot Print Cropped Tank",
      "-1418900665": "Princess RB Cropped Tank",
      "-1075874773": "Softly Softly Cropped Tank",
      "-1895263618": "Neon Leopard Cropped Tank",
      "-1772369894": "The Barfs Racerback",
      "-1484101001": "Princess RB Racerback",
      "-917804055": "Green T-Shirt",
      "-1156067454": "Yellow T-Shirt",
      "-2124751863": "Lilac T-Shirt",
      "-2138704200": "Tabby Cat",
      "-929172578": "Brown Fox",
      "-594605578": "Brown Owl",
      "-1251302209": "Gray Racoon",
      "-614283619": "Chestnut Knee High",
      "-301601821": "Purple Knee High",
      "-1805338466": "Red Accent Knee High",
      "-1498260167": "Coffee Knee High",
      "-1193180773": "Ochre Accent Knee High",
      "-880007440": "Purple Accent Knee High",
      "-297394917": "Beige Folded Boots",
      "-1436314285": "Black Folded Boots",
      "-1691748640": "Coffee Folded Boots",
      "-791682517": "White Folded Boots",
      "-947073115": "Gray Folded Boots",
      "-1906418359": "Blue Folded Boots",
      "-701723290": "Big Bangs Black",
      "-119221546": "Big Bangs Brown",
      "-2033029490": "Braided Top Knot Black",
      "-478584561": "Faded Stars Denim Jacket",
      "-776913537": "Navy Denim Jacket",
      "-1441894854": "Ash Denim Jacket",
      "-220369049": "Leopard Tank",
      "-1926290420": "Two-Tone Striped Tank",
      "-360935337": "White Cropped Tank",
      "-60476376": "Zebra Cropped Tank",
      "-360214423": "Princess RB Cropped Tank",
      "-54250270": "Softly Softly Cropped Tank",
      "-935015452": "Neon Leopard Cropped Tank",
      "-650994700": "Camo Blazer",
      "-874970236": "Yellow Cropped Biker",
      "-166045690": "Cyan Cropped Biker",
      "-1129877217": "Silver Cropped Biker",
      "-1536772956": "Mustard Cropped Biker",
      "-573855891": "Red Cropped Biker",
      "-873200706": "Green Cropped Biker",
      "-223516253": "Blue Floral Babydoll",
      "-461255348": "Yellow Floral Babydoll",
      "-1910562680": "Red Floral Babydoll",
      "-2141682437": "Purple Floral Babydoll",
      "-310817200": "Yellow T-Shirt",
      "-138976564": "Lilac T-Shirt",
      "-905541781": "Grey T-Shirt",
      "-645735675": "Navy Distressed Denim Shorts",
      "-965692191": "Blue Distressed Denim Shorts",
      "-124351407": "Blue Beaded Denim Shorts",
      "-1274212326": "Blue Denim Shorts",
      "-1601214185": "Leopard Denim Shorts",
      "-1855927622": "Snakeskin Denim Shorts",
      "-766341295": "Tropical Sunset Leggings",
      "-528405586": "Princess RB Leggings",
      "-304134550": "Bright Patterned Leggings",
      "-66919759": "Navy Leggings",
      "-377757544": "Yellow Leggings",
      "-539439790": "Dark Brown Leggings",
      "-1914230416": "Leopard Leggings",
      "-1884174848": "Black & White Leather Straps",
      "-1980450170": "Summer Leather Straps",
      "-1635687521": "Pink Check Leather Straps",
      "-1666852516": "Olive Tassel Scarf",
      "-1972587286": "Pink Tassel Scarf",
      "-1072914383": "Teal Tassel Scarf",
      "-410586712": "Black Combat Mask",
      "-650226409": "Gray Combat Mask",
      "-851690221": "Charcoal Combat Mask",
      "-1221914383": "Tan Combat Mask",
      "-1596103594": "Forest Combat Mask",
      "-61075265": "Black Dragon Silk Bomber",
      "-1614585390": "Blue Aquatic Silk Bomber",
      "-1597941373": "Purple Solar Silk Bomber",
      "-1298268868": "Blue Warrior Silk Bomber",
      "-1911475165": "Brown Dragon Silk Bomber",
      "-641283179": "Teal Dragon Silk Bomber",
      "-692299588": "Chocolate JC Jacket",
      "-674026069": "Candy Motocross",
      "-1193832172": "Cherry Motocross",
      "-886884949": "Boost Motocross",
      "-1669539745": "Drive Motocross",
      "-1370260468": "Downhill Motocross",
      "-413962745": "Poison Motocross",
      "-238779663": "Pumped Motocross",
      "-904392139": "Atomic Motocross",
      "-1135708510": "Xtreme Motocross",
      "-1360241698": "Spotty Motocross",
      "-2130051046": "Rays Motocross",
      "-552061886": "Red Satin Jacket",
      "-781313810": "Black Satin Jacket",
      "-115549677": "Grotti Satin Jacket",
      "-1354873257": "Howitzer Satin Jacket",
      "-1654414686": "Imponte Racing Satin Jacket",
      "-1281175772": "Love Fist Satin Jacket",
      "-1578554447": "Malibu Club Satin Jacket",
      "-1036489649": "Rebel Radio Satin Jacket",
      "-823458152": "Vice Squad Satin Jacket",
      "-1064077595": "Stunts Satin Jacket",
      "-1370697128": "Fatal Satin Jacket",
      "-952212844": "Ruiner Racing Jacket",
      "-1466227378": "Pigalle Racing Jacket",
      "-1777958875": "Grotti Racing Jacket",
      "-42217714": "Pfister Racing Jacket",
      "-313757964": "Chocolate JC Logo Jacket",
      "-695320200": "Black JC Logo Jacket",
      "-20016656": "Blue JC Logo Jacket",
      "-2040813529": "Skull Muscle Pants",
      "-930774914": "Hamburgers Muscle Pants",
      "-607639805": "Up-n-Atom Muscle Pants",
      "-1392457355": "Barfs Muscle Pants",
      "-1086689816": "Bubblegum Muscle Pants",
      "-354761432": "Sprunk Muscle Pants",
      "-120025829": "Lazer Force Muscle Pants",
      "-1104275505": "Impotent Rage Muscle Pants",
      "-1426200858": "Racesuit Gloves",
      "-440312728": "Racesuit Gloves",
      "-1331719358": "Racesuit Gloves",
      "-1685493482": "Racesuit Gloves",
      "-930930196": "Racesuit Gloves",
      "-191759863": "Racesuit Gloves",
      "-848026911": "Motocross Gloves",
      "-2005407269": "Motocross Gloves",
      "-2024073556": "Motocross Gloves",
      "-1729807936": "Motocross Gloves",
      "-489271903": "Motocross Gloves",
      "-194154289": "Motocross Gloves",
      "-1385602360": "Motocross Gloves",
      "-1447328347": "Padded Leather Jacket",
      "-595256827": "Cream Trench Coat",
      "-396236277": "Gold Geo Print Sweater",
      "-641250090": "Le Chien Print Sweater",
      "-1189748724": "Brown P Wing Sweater",
      "-1420278639": "Classic SN Print Sweater",
      "-1460420664": "Gold Diamond Sweater",
      "-2040497502": "Color Geo Sweater",
      "-1011212100": "Black Geo Print Sweater",
      "-636859048": "Silver Geo Print Sweater",
      "-891965713": "Hound Print Sweater",
      "-1266711997": "Teal Tweed Sweater",
      "-61271563": "Black SN Print Sweater",
      "-833924167": "Black Skinny Cuts",
      "-1998075661": "Red Skinny Cuts",
      "-1762401013": "Burgundy Skinny Cuts",
      "-615132305": "Gold Loose Link Chain",
      "-1142519901": "Blue Plaid Woolen Scarf",
      "-1460543050": "Green Plaid Woolen Scarf",
      "-1770406714": "Tan Plaid Woolen Scarf",
      "-182257129": "Gray Plaid Woolen Scarf",
      "-520236595": "Black Plaid Woolen Scarf",
      "-775212184": "Peach Plaid Woolen Scarf",
      "-2035167406": "Gold Loose Link Chain",
      "-1348263628": "Platinum Loose Link Chain",
      "-1113053040": "Gold Pretzel Chain",
      "-1563854029": "Gold Heavy Curb Chain",
      "-1842882064": "Platinum Heavy Curb Chain",
      "-1835883597": "Gold Heavy Square Chain",
      "-531542192": "Gold Pretzel Chain",
      "-1232438337": "Platinum Pretzel Chain",
      "-1253277772": "Gold Rope Chain",
      "-1765957446": "Gold Curb Chain",
      "-1979152560": "Platinum Curb Chain",
      "-228319930": "Platinum Diamond Curb Chain",
      "-138029524": "Platinum Heavy Curb Chain",
      "-1426131106": "Gold Heavy Square Chain",
      "-1721084875": "Platinum Heavy Square Chain",
      "-1458876793": "Gold Rope Chain",
      "-671994892": "Platinum Rope Chain",
      "-1296539093": "Thick Stripe Hippy Hoodie",
      "-2063956304": "Thin Stripe Hippy Hoodie",
      "-513812": "Chianski Hippy Hoodie",
      "-682546340": "Black Stripe Hippy Hoodie",
      "-1449635861": "Rasta Hippy Hoodie",
      "-267166496": "Gray Chain Hippy Hoodie",
      "-78089366": "Black Chain Hippy Hoodie",
      "-455948729": "Yeti Hippy Hoodie",
      "-5571593": "Sweatbox Hippy Hoodie",
      "-22933672": "Yellow Sneaker Wedges",
      "-634304909": "Gray Sneaker Wedges",
      "-740771390": "Red Sneaker Wedges",
      "-979428017": "Blue Sneaker Wedges",
      "-754862064": "Green Sneaker Wedges",
      "-985129827": "Brown Sneaker Wedges",
      "-914153823": "Black Sneaker Boots",
      "-684148212": "Gray Sneaker Boots",
      "-88768247": "Red Sneaker Boots",
      "-587741810": "Blue Sneaker Boots",
      "-358457117": "Green Sneaker Boots",
      "-1066726283": "Brown Sneaker Boots",
      "-1254538285": "Wave Braids",
      "-1365658503": "Rolled Quiff",
      "-1604127232": "White Rolled Tee",
      "-2119812985": "Gray Rolled Tee",
      "-1611219517": "White Rolled Tee",
      "-1068344645": "Navy Work Shirt",
      "-1830259824": "White Bold Open Check",
      "-2002886916": "Red Bold Open Check",
      "-1081193253": "Mustard Bold Open Check",
      "-311023458": "Purple Bold Open Check",
      "-1215224988": "Purple Cross Open Check",
      "-244967667": "Tan Cross Open Check",
      "-24596142": "Purple Stripe Open Check",
      "-1763775005": "Blue Cross Check",
      "-2069608082": "Brown Cross Check",
      "-1913561205": "Mustard Stripe Check",
      "-1206668321": "White Bold Check",
      "-1465641728": "Red Bold Check",
      "-648612251": "Green Bold Check",
      "-1003303907": "Black Bold Check",
      "-287760023": "Mustard Bold Check",
      "-562069322": "Purple Bold Check",
      "-539459627": "Tan Cross Check",
      "-845554856": "Brown Stripe Check",
      "-1151420702": "Blue Stripe Check",
      "-1432545953": "Purple Stripe Check",
      "-1511547668": "Tan Chore Coat",
      "-724621933": "White Frill Shirt",
      "-273884338": "Red Frill Shirt",
      "-974987675": "Black Football Shirt",
      "-274648607": "White Football Shirt",
      "-499804406": "Gray Football Shirt",
      "-1643991650": "Black High Waisted",
      "-1949497037": "White High Waisted",
      "-1204799575": "Gray Rolled Tee",
      "-426771748": "Black Rolled Tee",
      "-1194516649": "Gray Rolled Tee",
      "-47053364": "Gray Rolled Tee",
      "-2140610080": "Gray Rolled Tee",
      "-12331095": "White Rolled Tee",
      "-674634193": "White Rolled Tee",
      "-1694547103": "Black Suspenders",
      "-1351586749": "White Suspenders",
      "-1793640559": "Red Suspenders",
      "-1135634646": "Platinum Rim Necklace",
      "-299346959": "Gold Alloy Necklace",
      "-538265738": "Platinum Alloy Necklace",
      "-1196530583": "Loose Tied",
      "-11455216": "Pixie",
      "-1209867165": "Shaved Bangs",
      "-280963593": "Wavy Bob",
      "-1799420756": "Messy Bun Chestnut",
      "-183005522": "Big Bangs Chestnut",
      "-43404913": "Braided Top Knot Chestnut",
      "-1999787805": "Zig Zag Cornrows",
      "-376063587": "Ponytail",
      "-1731161531": "Bandana and Braid",
      "-1746148370": "Skinbyrd",
      "-2020584438": "Bob",
      "-806150438": "French Twist",
      "-1075423680": "Long Bob",
      "-711768724": "Cluckin' Bell Mask",
      "-674658148": "White & Blue Optics Headset",
      "-391370143": "Purple & Black Optics Headset",
      "-92221942": "Red & Black Optics Headset",
      "-1670966824": "Green & Yellow Optics Headset",
      "-427415697": "Black Optics Headset",
      "-2038044812": "Gray & Red Optics Headset",
      "-373288539": "Light Brown Death Bird",
      "-86395944": "White Death Bird",
      "-1293705144": "Black & White Death Bird",
      "-106484270": "Ash Death Bird",
      "-488243120": "Brown & White Death Bird",
      "-1934634015": "Brown & Yellow Death Bird",
      "-514391873": "Splinter Death Bird",
      "-1111658975": "Green Stalker",
      "-1947235706": "Brown Stalker",
      "-1055239732": "Orange Raider",
      "-1490674212": "Chocolate Brown Raider",
      "-1702454792": "Red & Gray Raider",
      "-868975277": "Orange & Gray Raider",
      "-1871777686": "Brown Raider",
      "-896998239": "Red Raider",
      "-1245005019": "Beige Raider",
      "-2087496013": "Gray Raider",
      "-1372162722": "Beige Marauder",
      "-1558618332": "Black Marauder",
      "-89477680": "Bolt Marauder",
      "-484671820": "Crossbones Marauder",
      "-844147750": "Red Stripe Marauder",
      "-1082542225": "Yellow Marauder",
      "-1715049463": "Shooting Stars Marauder",
      "-606864220": "Paco the Taco Mask",
      "-18901701": "White & Green Light Ups",
      "-102006719": "Black & Pink Light Ups",
      "-559822422": "Pink & Blue Light Ups",
      "-1021832553": "Ash & Pink Light Ups",
      "-186780126": "Red Light Ups",
      "-1483056228": "Blue Print Light Ups",
      "-648462567": "Green Print Light Ups",
      "-1258061440": "White & Pink Light Ups",
      "-2030396583": "Red Camo Light Ups",
      "-1187151906": "Pink Camo Light Ups",
      "-58847108": "Gray & Red Light Ups",
      "-1471649782": "Black & Blue Light Ups",
      "-1709978719": "Black & Green Light Ups",
      "-2120601019": "Red Flaming Skull Boots",
      "-1466374663": "Red Flaming Skull Boots",
      "-1511671803": "Black Skull Harness Boots",
      "-1747510296": "Dark Brown Skull Harness Boots",
      "-1936607896": "Tan Skull Harness Boots",
      "-440369365": "Brown Raider Boots",
      "-733094842": "Dark Brown Raider Boots",
      "-17223264": "Green Raider Boots",
      "-256928499": "Beige Raider Boots",
      "-322008507": "Blue Camo Plated Boots",
      "-14078214": "Green Camo Plated Boots",
      "-1895280974": "Steel Plated Boots",
      "-1798345261": "Light Green Plated Boots",
      "-2084779090": "Beige Plated Boots",
      "-77415684": "Crosshatch Plated Boots",
      "-359130777": "Yellow Plated Boots",
      "-1191640792": "Blue Rocket Splash Tee",
      "-738609371": "Pink Rocket Splash Tee",
      "-978085223": "Black Spacesuit Alien Tee",
      "-1732868": "Pink Spacesuit Alien Tee",
      "-500280434": "Purple Two Moons Tee",
      "-1171487877": "Red Freedom Isn't Free Tee",
      "-5202099": "Black Space Rangers Tee",
      "-307627208": "White Space Rangers Tee",
      "-564109955": "Yellow Space Rangers Tee",
      "-862078472": "Green Space Rangers Tee",
      "-1294760348": "Black Space Ranger Logo Tee",
      "-1592139023": "Green Space Ranger Logo Tee",
      "-1761718598": "White Phases Tee",
      "-2068272593": "Yellow Phases Tee",
      "-570419790": "Black Burger Shot Hockey Shirt",
      "-1650855666": "Black Phat Chips Hockey Shirt",
      "-951597971": "Green Sprunk Hockey Shirt",
      "-364564932": "Red Burger Shot Hockey Shirt",
      "-778732323": "Dark Red Burger Shot Hockey Shirt",
      "-1762097244": "Black Cluckin' Bell Hockey Shirt",
      "-1086728154": "Wigwam Hockey Shirt",
      "-1969492245": "Redwood Hockey Shirt",
      "-1024579281": "Black & White Bones Festive Sweater",
      "-1791799878": "Black & Red Bones Festive Sweater",
      "-678440334": "Merry Sprunkmas Festive Sweater",
      "-371820801": "Ice Cold Sprunk Festive Sweater",
      "-468744959": "Green Cluckin' Festive Sweater",
      "-226745894": "Blue Slaying Festive Sweater",
      "-197417631": "Hail Santa Festive Sweater",
      "-1039154934": "Red Bones Festive Sweater",
      "-1929395648": "Green Mercenary Vest",
      "-46794133": "Black Splinter Mercenary Vest",
      "-237575279": "Black & Red Mercenary Vest",
      "-345964795": "White Mercenary Vest",
      "-733097761": "Blue Mercenary Vest",
      "-972344230": "Red Mercenary Vest",
      "-1328477722": "Yellow Mercenary Vest",
      "-330563365": "Blue Digital Mercenary Vest",
      "-1139338805": "Black Leather Feather Top",
      "-934860245": "Yellow Leather Feather Top",
      "-1280638729": "Green Leather Feather Top",
      "-1418355021": "Benedict Light Beer Hoodie",
      "-1097022207": "Taco Bomb Hoodie",
      "-1770834941": "Fries Hoodie",
      "-1522740842": "Mushrooms Hoodie",
      "-301341905": "Redwood Hoodie",
      "-1998186263": "eCola Infectious Hoodie",
      "-811817387": "Cluckin' Bell Logo Hoodie",
      "-565034048": "Lemons Hoodie",
      "-790369905": "Cluckin' Bell Logo Bomb Hoodie",
      "-1008250990": "Patriot Beer Hoodie",
      "-733515694": "Pisswasser Hoodie",
      "-1934925541": "Donut Hoodie",
      "-1327838275": "eCola Infectious Hoodie",
      "-2055637769": "Tacos Hoodie",
      "-1824307905": "Donut Hoodie",
      "-1932511143": "Lucky Plucker Hoodie",
      "-1423215349": "Logger Light Hoodie",
      "-741574523": "Burger Shot Pattern Sweater",
      "-501705439": "Burger Shot Logo Sweater",
      "-1039275023": "Infectious eCola Sweater",
      "-2002224857": "Magenta Heat Sweater",
      "-1470783080": "Burger Shot Sweater",
      "-263400254": "Bolt Burger Sweater",
      "-1632390767": "Lucky Plucker Sweater",
      "-1266688731": "Lucky Plucker Logo Bomb Sweater",
      "-1191165203": "White Sprunk Sweater",
      "-9646135": "Taco Bomb Chili Sweater",
      "-379020392": "Black Chain Pants",
      "-2042178170": "Gray Chain Pants",
      "-1244961057": "Gray Forest Chain Pants",
      "-1551580590": "Tan Forest Chain Pants",
      "-1760004311": "Tan Chain Pants",
      "-1049965615": "Beige Chain Pants",
      "-1311495004": "Gray Camo Chain Pants",
      "-832444993": "Dark Woodland Chain Paints",
      "-194268718": "Cobble Chain Paints",
      "-1836551832": "Black Chain Shorts",
      "-932020903": "Gray Forest Chain Shorts",
      "-1767663172": "Tan Forest Chain Shorts",
      "-1357567359": "White Chain Shorts",
      "-2056267977": "Brown Chain Shorts",
      "-378167491": "Dark Woodland Chain Shorts",
      "-447081287": "Black Leather Stitch Pants",
      "-217075676": "Black & Red Leather Stitch Pants",
      "-1437819245": "Red Leather Stitch Pants",
      "-66829823": "Blue Leather Stitch Pants",
      "-976792184": "Moss Leather Stitch Pants",
      "-1215743732": "Gray Leather Stitch Pants",
      "-719522765": "Orange Leather Stitch Pants",
      "-146534677": "Brown Raider Pants",
      "-510336115": "Black Raider Pants",
      "-1325291651": "Red Raider Pants",
      "-453767327": "Blue Raider Pants",
      "-1830618626": "Black Spacesuit Alien Tee",
      "-971808670": "Blue Two Moons Tee",
      "-1714124827": "Pink Two Moons Tee",
      "-445865988": "White Space Rangers Tee",
      "-423583068": "Yellow Space Rangers Tee",
      "-970792587": "Green Space Rangers Tee",
      "-1742142078": "Black Space Ranger Logo Tee",
      "-1452333042": "Green Space Ranger Logo Tee",
      "-63222363": "White Phases Tee",
      "-1893239941": "Yellow Phases Tee",
      "-935099306": "Black Spacesuit Alien Tee",
      "-158179085": "Pink Spacesuit Alien Tee",
      "-1397306051": "Purple Two Moons Tee",
      "-620975672": "Blue Two Moons Tee",
      "-1916170397": "Pink Two Moons Tee",
      "-1155831290": "Blue Freedom Isn't Free Tee",
      "-1634225921": "Red Freedom Isn't Free Tee",
      "-899459749": "Black Space Rangers Tee",
      "-1161710056": "White Space Rangers Tee",
      "-1460137339": "Yellow Space Rangers Tee",
      "-1122157877": "Green Space Rangers Tee",
      "-1554905291": "Black Space Ranger Logo Tee",
      "-1776653114": "Green Space Ranger Logo Tee",
      "-2082682805": "White Phases Tee",
      "-761183859": "Blue Two Moons Tee",
      "-940430293": "Pink Two Moons Tee",
      "-1749857362": "Blue Freedom Isn't Free Tee",
      "-1381271650": "Green Freedom Isn't Free Tee",
      "-1655713364": "Black Space Rangers Tee",
      "-1382387135": "White Space Rangers Tee",
      "-334635983": "Black Spacesuit Alien Tee",
      "-1700284058": "Pink Spacesuit Alien Tee",
      "-1997433350": "Purple Two Moons Tee",
      "-1227525695": "Blue Two Moons Tee",
      "-833281856": "Green Freedom Isn't Free Tee",
      "-65045420": "Red Freedom Isn't Free Tee",
      "-1533247949": "Black Space Rangers Tee",
      "-2027273393": "White Space Rangers Tee",
      "-879506399": "Black Space Ranger Logo Tee",
      "-1629556060": "White Phases Tee",
      "-1862248729": "Yellow Phases Tee",
      "-1892881715": "Blue Rocket Splash Tee",
      "-577534043": "Blue Two Moons Tee",
      "-346545362": "Pink Two Moons Tee",
      "-1168621269": "Blue Freedom Isn't Free Tee",
      "-820680027": "Green Freedom Isn't Free Tee",
      "-1531177485": "Red Freedom Isn't Free Tee",
      "-814287533": "Yellow Phases Tee",
      "-1358838449": "Blue Rocket Splash Tee",
      "-1825698392": "Black Spacesuit Alien Tee",
      "-2126452282": "Purple Two Moons Tee",
      "-901186595": "Blue Two Moons Tee",
      "-908164473": "Black Space Rangers Tee",
      "-607115670": "White Space Rangers Tee",
      "-2012152083": "White Phases Tee",
      "-1974467733": "Yellow Phases Tee",
      "-1602815183": "Epsilon Medallion",
      "-336624833": "Brown Bison",
      "-1506874956": "Brown Bull",
      "-45508669": "Black Vulture",
      "-2126126426": "Grey Wolf",
      "-1216327910": "Black Wolf",
      "-613419340": "Red Sparkly Shoes",
      "-304276594": "White Sparkly Shoes",
      "-343349275": "Mullet Brown",
      "-1442460379": "American Flag Top",
      "-384997801": "Amphibian Sea Beast",
      "-1297024609": "Alien Sea Beast",
      "-2073158374": "Reptilian Sea Beast",
      "-1566615172": "Deity Sea Beast",
      "-1643456595": "Bold Abstract Bigness Face",
      "-1402178448": "Pale Abstract Bigness Face",
      "-720583248": "Gray Leopard Bigness Face",
      "-492543777": "Blue Camo Bigness Face",
      "-1233952339": "Gray Camo Bigness Face",
      "-1808655061": "Geo Camo Bigness Face",
      "-760881369": "Striped Dino",
      "-1524988907": "Gray Dino",
      "-1268571482": "Tropical Dino",
      "-290056373": "Danger Dino",
      "-1384149858": "Red Oni",
      "-1675236885": "Blue Oni",
      "-831205752": "White Oni",
      "-1136711139": "Black Oni",
      "-659299578": "Green Oni",
      "-1321880364": "Blue Clown",
      "-1930957767": "Orange Clown",
      "-634583354": "Neon Clown",
      "-1006773660": "Franken Clown",
      "-742950441": "Sinister Clown",
      "-1828493157": "Silverback Crazed Ape",
      "-1977206692": "Black Horse",
      "-1521848668": "Brown Horse",
      "-1828926967": "Pinto Horse",
      "-1082902180": "Unicorn",
      "-884613032": "Red Ornate Skull",
      "-1114356491": "Silver Ornate Skull",
      "-1346754243": "White Ornate Skull",
      "-1578398304": "Black Ornate Skull",
      "-551066767": "Moe Pug",
      "-1334082022": "Black Pug",
      "-1080941497": "Gray Pug",
      "-1512705841": "Josephine Pug",
      "-521200785": "Back Crew Emblem",
      "-1417486585": "Peach Plain Hi Tops",
      "-1810583389": "Purple Plain Hi Tops",
      "-79226060": "Pink Plain Hi Tops",
      "-2121495661": "Blue Plain Hi Tops",
      "-1196066332": "Bronze Plain Hi Tops",
      "-1442259829": "Pearl Plain Hi Tops",
      "-852876595": "Copper Plain Hi Tops",
      "-1093237210": "Silver Plain Hi Tops",
      "-242422894": "Green Plain Hi Tops",
      "-480096451": "Cherry Plain Hi Tops",
      "-1381577540": "Grayscale Longline Hoodie",
      "-1151244239": "Chocolate Longline Hoodie",
      "-1466187062": "Olive Longline Hoodie",
      "-182604839": "Blush Longline Hoodie",
      "-363555257": "Tan Longline Hoodie",
      "-679939952": "Lime Longline Hoodie",
      "-46118516": "Black Exsorbeo Glow Sweater",
      "-1303511393": "Black Love Fist Glow Sweater",
      "-35580416": "Green Trees Glow Sweater",
      "-266358965": "Abominable Glow Sweater",
      "-773819703": "Snowman Glow Sweater",
      "-113589783": "Red Reindeer Glow Sweater",
      "-367189074": "Naughty! Glow Sweater",
      "-592508718": "Naughty! Knit Glow Sweater",
      "-1546611375": "Gray Exsorbeo Festive Sweater",
      "-766676406": "Black Exsorbeo Festive Sweater",
      "-1924928472": "Red Love Fist Festive Sweater",
      "-1165998428": "Black Love Fist Festive Sweater",
      "-1463835869": "Red Trees Festive Sweater",
      "-2135108918": "Red Cats Festive Sweater",
      "-1884065609": "Green Cats Festive Sweater",
      "-1379817165": "Snowman Festive Sweater",
      "-1986535204": "Red Reindeer Festive Sweater",
      "-582089674": "Noel Glow Sweater",
      "-349659165": "Festive Glow Sweater",
      "-1764266711": "Blue Trees Wool Sweater",
      "-1584299363": "Saucy Reindeer Wool Sweater",
      "-28424406": "Woodland Camo Bigness Hoodie",
      "-267375954": "Off-White Bigness Hoodie",
      "-503869827": "Red Camo Bigness Hoodie",
      "-641204710": "Blacklight Camo Bigness Hoodie",
      "-980101708": "Black Bigness Brand Hoodie",
      "-1222985536": "Orange Sand Castle Hoodie",
      "-1460659093": "Gray Güffy Hoodie",
      "-508490240": "Patchwork Güffy Hoodie",
      "-257381393": "White Squash Hoodie",
      "-27343013": "Red Squash Hoodie",
      "-1907262958": "Chocolate Blagueurs Hoodie",
      "-985655055": "Magenta Güffy Hoodie",
      "-688079766": "Bold Abstract Bigness Hoodie",
      "-533075445": "Black Sleeveless Hoodie",
      "-705243771": "Charcoal Sleeveless Hoodie",
      "-1397030046": "Green Sleeveless Hoodie",
      "-1193629940": "Orange Squash Hoodie",
      "-2045412000": "Woodland Camo Bigness Hoodie",
      "-2016902970": "Off-White Bigness Hoodie",
      "-1774215864": "Blacklight Camo Bigness Hoodie",
      "-1056967992": "Gray Güffy Hoodie",
      "-551080166": "Patchwork Güffy Hoodie",
      "-1533724173": "White Squash Hoodie",
      "-1295559081": "Red Squash Hoodie",
      "-498107915": "Black Blagueurs Hoodie",
      "-1828316079": "Beige Manor Hoodie",
      "-1654902531": "Black Manor Hoodie",
      "-1355492178": "White Manor Hoodie",
      "-1484848043": "Lime Blagueurs Hoodie",
      "-1569326541": "Primary Squash Hoodie",
      "-1840424478": "White Güffy Hoodie",
      "-640980771": "Magenta Güffy Hoodie",
      "-1072482963": "Bold Abstract Bigness Hoodie",
      "-1954373489": "Grayscale Longline Hoodie",
      "-1257278548": "Chocolate Longline Hoodie",
      "-1438491118": "Olive Longline Hoodie",
      "-1982622375": "Gray Longine Hoodie",
      "-1507373568": "White Longline Hoodie",
      "-1805014395": "Red Longline Hoodie",
      "-610551576": "Dark Red Longline Hoodie",
      "-1327209606": "Blush Longline Hoodie",
      "-668782085": "Tan Longline Hoodie",
      "-849273737": "Lime Longline Hoodie",
      "-634132956": "Charcoal Sleeveless Hoodie",
      "-1089949830": "Ash Sleeveless Hoodie",
      "-1481735994": "Green Sleeveless Hoodie",
      "-330383434": "Red Closed Parka",
      "-783819876": "Blue Camo Closed Parka",
      "-837778630": "Brown Closed Parka",
      "-2027358864": "Gray Camo Closed Parka",
      "-1371487329": "Woodland Camo Closed Parka",
      "-1611454716": "Dotwork Closed Parka",
      "-1419377336": "Yellow Güffy Rolled Tee",
      "-1716297249": "OJ Rolled Tee",
      "-504597932": "Blue Sky Rolled Tee",
      "-667590938": "Bright Güffy Rolled Tee",
      "-53794799": "Splat Rolled Tee",
      "-208071251": "Geo Bigness Rolled Tee",
      "-468378891": "Lime Squash Rolled Tee",
      "-170803602": "Leopard Rolled Tee",
      "-1197063144": "GoPostal Rolled Tee",
      "-884119194": "Manor Rolled Tee",
      "-1696888701": "Striped Rolled Tee",
      "-1368248400": "Primary Squash Rolled Tee",
      "-1887112750": "Bright Squash Rolled Tee",
      "-389868566": "Camo Bigness Rolled Tee",
      "-1689499905": "Blue Sky Rolled Tee",
      "-1459232142": "Bright Güffy Rolled Tee",
      "-1080488044": "Splat Rolled Tee",
      "-849630439": "Geo Bigness Rolled Tee",
      "-415788857": "Manor Rolled Tee",
      "-118475720": "Striped Rolled Tee",
      "-1024276402": "Primary Squash Rolled Tee",
      "-691376131": "Bright Squash Rolled Tee",
      "-2102522720": "Blue Camo Open Parka",
      "-104221167": "Gray Camo Open Parka",
      "-402255222": "Woodland Camo Open Parka",
      "-736171332": "Dotwork Open Parka",
      "-1019066109": "Tan Camo Open Parka",
      "-876207282": "Red Sand Castle Sweater",
      "-413879628": "Bold Güffy Sweater",
      "-1641602982": "Minimalist G Güffy Sweater",
      "-261471009": "Sprayed G Güffy Sweater",
      "-1141121681": "Diamond Manor Sweater",
      "-853180478": "Cyan Manor Sweater",
      "-1693672559": "Magenta Manor Sweater",
      "-467119086": "Yellow Sand Castle Sweater",
      "-151291464": "Aqua Camo Sand Castle Sweater",
      "-523186841": "Bold Camo Sand Castle Sweater",
      "-209521973": "Fruit Squash Sweater",
      "-1880249442": "Splat Squash Sweater",
      "-346065761": "Woodland Camo Bigness Puffer",
      "-439653396": "Pink Bigness Puffer",
      "-1983663138": "Magenta Pattern Bigness Puffer",
      "-1387824411": "Geometric Bigness Puffer",
      "-1668523665": "Zebra Bigness Puffer",
      "-1970326135": "Red Güffy Puffer",
      "-608873336": "G Güffy Puffer",
      "-1935198412": "Black Bigness Brand Puffer",
      "-1338704305": "Red Bigness Brand Puffer",
      "-1055167515": "Red Wool Coat",
      "-115314151": "Red Patterned Wool Coat",
      "-759945919": "Moss Patterned Wool Coat",
      "-459192037": "Gray Patterned Wool Coat",
      "-1625016995": "Black Sprayed Güffy Torn Tee",
      "-1399730120": "Skate Güffy Torn Tee",
      "-408241196": "CMYK Manor Torn Tee",
      "-672129953": "Geometric Güffy Torn Tee",
      "-2111311668": "Black Leopard Güffy Torn Tee",
      "-546365083": "Fruit Squash Torn Tee",
      "-1250112127": "Banana Squash Torn Tee",
      "-602858839": "Splat Squash Torn Tee",
      "-1364705324": "Butternut Squash Torn Tee",
      "-903967915": "Neon Manor Torn Tee",
      "-673601845": "White Güffy Torn Tee",
      "-441761170": "Bold Abstract Bigness Torn Tee",
      "-833350696": "White Sand Castle Torn Tee",
      "-2058613172": "Glow Santa Sweater",
      "-1354898897": "Glow Elf Sweater",
      "-1586542958": "Glow Pudding Sweater",
      "-494904602": "Decorated Santa Sweater",
      "-1643279036": "Black Low Crotch Pants",
      "-1971100112": "Blue Camo Low Crotch Pants",
      "-178963498": "Diamond Low Crotch Pants",
      "-509143942": "Hatched Low Crotch Pants",
      "-583883961": "Black Low Crotch Shorts",
      "-805533477": "Blue Camo Low Crotch Shorts",
      "-107947005": "Charcoal Low Crotch Shorts",
      "-1537920623": "Diamond Low Crotch Shorts",
      "-1777167092": "Hatched Low Crotch Shorts",
      "-32661440": "White Leather Low Crotch Shorts",
      "-224033296": "Classic Low Crotch",
      "-2016628672": "Charcoal Faded Low Crotch",
      "-1712696197": "Black Faded Low Crotch",
      "-1158247816": "Black Leather Low Crotch Jeans",
      "-540027862": "Red Leather Low Crotch Jeans",
      "-1912033123": "White Leather Low Crotch Jeans",
      "-93250717": "Banana Squash Leggings",
      "-1701616487": "Woodland Camo Leggings",
      "-2000109308": "Blue & Green Camo Leggings",
      "-947306864": "Gray Tigerstripe Leggings",
      "-1252550099": "Pink Tigerstripe Leggings",
      "-672285644": "Camo Bigness Rolled Tee",
      "-2000947114": "Sand Castle Rolled Tee",
      "-1940314868": "Leopard Rolled Tee",
      "-2077911923": "Manor Rolled Tee",
      "-1367611079": "Striped Rolled Tee",
      "-1827589532": "Bright Squash Rolled Tee",
      "-2044050451": "Camo Bigness Rolled Tee",
      "-864903977": "Yellow Güffy Rolled Tee",
      "-1792725443": "Splat Rolled Tee",
      "-405829854": "Leopard Rolled Tee",
      "-192601971": "GoPostal Rolled Tee",
      "-764158869": "Manor Rolled Tee",
      "-520193664": "Striped Rolled Tee",
      "-1362619116": "Primary Squash Rolled Tee",
      "-1078216965": "Bright Squash Rolled Tee",
      "-1700175778": "Zebra Rolled Tee",
      "-635530329": "Yellow Güffy Rolled Tee",
      "-2036470617": "OJ Rolled Tee",
      "-1558141524": "Bright Güffy Rolled Tee",
      "-1864171215": "Splat Rolled Tee",
      "-1887764903": "Geo Bigness Rolled Tee",
      "-723299119": "Lime Squash Rolled Tee",
      "-2009449600": "Leopard Rolled Tee",
      "-1823944279": "Primary Squash Rolled Tee",
      "-57924562": "Bright Squash Rolled Tee",
      "-289601392": "Red Güffy Rolled Tee",
      "-882985802": "Camo Bigness Rolled Tee",
      "-1727803391": "Zebra Rolled Tee",
      "-1245698649": "OJ Rolled Tee",
      "-1494087669": "Blue Sky Rolled Tee",
      "-649401156": "Bright Güffy Rolled Tee",
      "-1631651879": "Geo Bigness Rolled Tee",
      "-1850942027": "Sand Castle Rolled Tee",
      "-1525487585": "Lime Squash Rolled Tee",
      "-2073090344": "GoPostal Rolled Tee",
      "-584132534": "Primary Squash Rolled Tee",
      "-295863641": "Bright Squash Rolled Tee",
      "-1181609711": "Red Güffy Rolled Tee",
      "-1356399170": "Camo Bigness Rolled Tee",
      "-1149757848": "Zebra Rolled Tee",
      "-881750644": "Geo Bigness Rolled Tee",
      "-77959847": "Sand Castle Rolled Tee",
      "-1920353660": "Lime Squash Rolled Tee",
      "-1612751057": "Leopard Rolled Tee",
      "-290292512": "Striped Rolled Tee",
      "-103574750": "Primary Squash Rolled Tee",
      "-2131331970": "Camo Bigness Rolled Tee",
      "-1208857960": "OJ Rolled Tee",
      "-2038700108": "Blue Sky Rolled Tee",
      "-1646488039": "Splat Rolled Tee",
      "-861310030": "Geo Bigness Rolled Tee",
      "-1039180162": "Sand Castle Rolled Tee",
      "-345028210": "Leopard Rolled Tee",
      "-1118868153": "Striped Rolled Tee",
      "-1953199662": "Primary Squash Rolled Tee",
      "-657447860": "Bright Squash Rolled Tee",
      "-1492107063": "Red Güffy Rolled Tee",
      "-287098907": "Zebra Rolled Tee",
      "-214531806": "Yellow Güffy Rolled Tee",
      "-766754994": "Bright Güffy Rolled Tee",
      "-1131473964": "Splat Rolled Tee",
      "-333581583": "Geo Bigness Rolled Tee",
      "-565422258": "Sand Castle Rolled Tee",
      "-533849477": "GoPostal Rolled Tee",
      "-971119013": "Manor Rolled Tee",
      "-1814101538": "Striped Rolled Tee",
      "-1219311419": "Bright Squash Rolled Tee",
      "-1898547259": "Red Güffy Rolled Tee",
      "-1604073474": "Camo Bigness Rolled Tee",
      "-1164575646": "Zebra Rolled Tee",
      "-383103264": "Yellow Güffy Rolled Tee",
      "-1770346110": "Sand Castle Rolled Tee",
      "-955673271": "Leopard Rolled Tee",
      "-715705884": "GoPostal Rolled Tee",
      "-207655308": "Manor Rolled Tee",
      "-2118841695": "Striped Rolled Tee",
      "-1068660779": "Red Güffy Rolled Tee",
      "-1818532955": "Camo Bigness Rolled Tee",
      "-333708870": "Yellow Güffy Rolled Tee",
      "-541628171": "Blue Sky Rolled Tee",
      "-704948867": "Bright Güffy Rolled Tee",
      "-988761176": "Splat Rolled Tee",
      "-1185965018": "Geo Bigness Rolled Tee",
      "-1740514809": "Sand Castle Rolled Tee",
      "-610471009": "Manor Rolled Tee",
      "-1325228437": "Striped Rolled Tee",
      "-146232586": "Primary Squash Rolled Tee",
      "-964245133": "Bright Squash Rolled Tee",
      "-1211291530": "Camo Bigness Rolled Tee",
      "-1442345749": "Zebra Rolled Tee",
      "-1240942662": "Yellow Güffy Rolled Tee",
      "-310663517": "Bright Güffy Rolled Tee",
      "-152618642": "Geo Bigness Rolled Tee",
      "-212820100": "GoPostal Rolled Tee",
      "-1952460776": "Red Güffy Rolled Tee",
      "-232063339": "Camo Bigness Rolled Tee",
      "-1075308016": "Zebra Rolled Tee",
      "-641940316": "Yellow Güffy Rolled Tee",
      "-33256145": "Blue Sky Rolled Tee",
      "-829999282": "Lime Squash Rolled Tee",
      "-1760343969": "GoPostal Rolled Tee",
      "-1513790013": "Manor Rolled Tee",
      "-1842004317": "Striped Rolled Tee",
      "-535602586": "Primary Squash Rolled Tee",
      "-1989024277": "Camo Bigness Rolled Tee",
      "-805585991": "OJ Rolled Tee",
      "-1121872379": "Blue Sky Rolled Tee",
      "-397284251": "Bright Güffy Rolled Tee",
      "-694466312": "Splat Rolled Tee",
      "-418846249": "Geo Bigness Rolled Tee",
      "-734870485": "Sand Castle Rolled Tee",
      "-32026828": "Striped Rolled Tee",
      "-401857742": "Primary Squash Rolled Tee",
      "-1232322505": "Bright Squash Rolled Tee",
      "-723747625": "Red Güffy Rolled Tee",
      "-1866149930": "Black Driving Gloves",
      "-127905889": "Brown Leather Gloves",
      "-187478284": "Black Woolen Gloves",
      "-212448586": "White Cotton Gloves",
      "-575494038": "Blue Surgical Gloves",
      "-888700140": "White Surgical Gloves",
      "-68905083": "Brown Leather Gloves",
      "-152236945": "Gray Fingerless Gloves",
      "-1755663855": "White Cotton Gloves",
      "-277654310": "Blue Surgical Gloves",
      "-44896103": "White Surgical Gloves",
      "-1685192020": "Black Driving Gloves",
      "-1363597054": "Brown Driving Gloves",
      "-1603338898": "Contrast Camo Robo",
      "-1917233149": "Cobble Robo",
      "-1545632605": "Peach Camo Robo",
      "-1315626994": "Brushstroke Robo",
      "-930329092": "Flecktarn Robo",
      "-701044399": "Light Woodland Robo",
      "-1857626254": "Orange Striped Robo",
      "-1680542578": "Yellow Robo",
      "-848754668": "Brown Digital Robo",
      "-1939976835": "Zebra Robo",
      "-1702893120": "White Robo",
      "-322517297": "Fall Robo",
      "-1837985236": "Dark Woodland Robo",
      "-1457537146": "Crosshatch Robo",
      "-555373811": "Gray Woodland Robo",
      "-1010076451": "Aqua Camo Robo",
      "-2084388819": "Green Leaves Face Bandana",
      "-1586103405": "Blue Leaves Face Bandana",
      "-337571460": "Painted Face Bandana",
      "-502493569": "Blue Blagueurs Face Bandana",
      "-316824415": "Red Blagueurs Face Bandana",
      "-696242626": "Contrast Camo Mandible",
      "-995521903": "Cobble Mandible",
      "-129666616": "Brushstroke Mandible",
      "-573489960": "Flecktarn Mandible",
      "-817848393": "Light Woodland Mandible",
      "-186291456": "Blue Striped Mandible",
      "-1946445522": "Moss Striped Mandible",
      "-1603255785": "Yellow Mandible",
      "-372461916": "Brown Digital Mandible",
      "-1922271775": "Fall Mandible",
      "-1743451334": "Aqua Camo Mandible",
      "-1504565324": "Splinter Mandible",
      "-189114780": "Multicolor Leaves Tight Ski",
      "-1182893590": "SA Republic Tight Ski",
      "-719900753": "Bold Abstract Tight Ski",
      "-1522741241": "Camo Bigness Tight Ski",
      "-649748613": "Tropical Xero Tight Ski",
      "-412468284": "Red Stripe Tight Ski",
      "-1264462288": "Gray Bigness Tight Ski",
      "-1871737396": "Orange & Red Tight Ski",
      "-1640879791": "Vibrant Tight Ski",
      "-1264488304": "Dark Woodland Loose",
      "-1436001250": "Orange Pattern Loose",
      "-1726039669": "Red Pattern Loose",
      "-307436890": "Blue Pattern Loose",
      "-479343064": "Splinter Loose",
      "-768070723": "Purple Pattern Loose",
      "-611074440": "Jolly Roger Loose",
      "-891151083": "Peach Camo Loose",
      "-1235422545": "Flecktarn Loose",
      "-1486465854": "Weapon Pattern Loose",
      "-746564562": "Fall Loose",
      "-105652829": "Weapon Pattern Wrapped",
      "-1961557917": "Blue Pattern Wrapped",
      "-698476808": "Gray Woodland Wrapped",
      "-1042190853": "Orange Pattern Wrapped",
      "-1289924493": "Peach Camo Wrapped",
      "-2077527164": "Flecktarn Wrapped",
      "-772927760": "Purple Pattern Wrapped",
      "-579495172": "Brown Digital Wrapped",
      "-256982674": "Red Pattern Wrapped",
      "-1182477541": "Jolly Roger Wrapped",
      "-876447850": "Peach Digital Wrapped",
      "-1812461566": "Fall Wrapped",
      "-1168845993": "Teal Snood",
      "-2018955337": "Red Pattern Snood",
      "-1788490960": "Weapon Pattern Snood",
      "-1520145619": "Peach Camo Snood",
      "-1194323428": "Brushstroke Snood",
      "-1401276510": "Green Snood",
      "-1169943080": "Flecktarn Snood",
      "-939347627": "Jolly Roger Snood",
      "-574121412": "Yellow Snood",
      "-804913479": "Turquoise Snood",
      "-1178938833": "Fall Snood",
      "-245714181": "Bright Stripe Knit",
      "-400628071": "Aqua Camo Knit",
      "-1849607717": "Primary Stripe Knit",
      "-1531846724": "Black & Red Knit",
      "-1377570272": "Green Stripe Knit",
      "-861884419": "Tiger Knit",
      "-1243970959": "Leopard Knit",
      "-631813270": "Stars & Stripes Knit",
      "-759466543": "Green & Beige Knit",
      "-1740683793": "Green Luchador Knit",
      "-533262156": "Sunrise Knit",
      "-262557427": "Brown Digital Knit",
      "-1417439587": "Black Bigness T-Shirt",
      "-1780323493": "Red Bigness T-Shirt",
      "-258334499": "Stars & Stripes T-Shirt",
      "-498367424": "Black Stars & Stripes T-Shirt",
      "-422671330": "Green Pattern T-Shirt",
      "-564396977": "Magenta Leopard T-Shirt",
      "-314533352": "Navy Painted T-Shirt",
      "-1704260331": "Beige Stripe Scruffy",
      "-427973319": "Rasta Stripe Scruffy",
      "-121583169": "Triplet Stripe Scruffy",
      "-714276072": "Magenta Leopard Scruffy",
      "-1155704048": "Charcoal Scruffy",
      "-396034184": "Gray Woodland Scruffy",
      "-773991830": "Pretty Scruffy",
      "-120479667": "Dark Neon Scruffy",
      "-941919092": "Chocolate Scruffy",
      "-1956296275": "Classic Moc Toe Boots",
      "-1656099466": "Black Moc Toe Boots",
      "-1262642079": "Charcoal Moc Toe Boots",
      "-1216634403": "Chocolate Moc Toe Boots",
      "-764782662": "Tan Moc Toe Boots",
      "-493783032": "Rust Moc Toe Boots",
      "-362510418": "Russet Moc Toe Boots",
      "-2144502102": "Tan Moc Toe Boots",
      "-1786291494": "Green Closed Field",
      "-1488585129": "Sand Closed Field",
      "-2116013172": "Blue Closed Field",
      "-1251754147": "Green Open Field",
      "-308957260": "Blue Open Field",
      "-600634129": "Black Open Field",
      "-1876986679": "Charcoal Open Field",
      "-1083747496": "Dark Woodland Open Field",
      "-1191650256": "Black Shortsleeve",
      "-953124705": "Charcoal Shortsleeve",
      "-1252297708": "Blue Plaid Shortsleeve",
      "-1860424810": "Blue Gingham Shortsleeve",
      "-2099802355": "Red Patterned Shortsleeve",
      "-1326527488": "Gray Shortsleeve",
      "-219324737": "Brown Patterned Shortsleeve",
      "-2138736147": "Blue Dotted Shortsleeve",
      "-1079744149": "Ash Shortsleeve",
      "-1870820578": "White Shortsleeve",
      "-1691967376": "Skate Güffy Shortsleeve",
      "-322190379": "Red Güffy Shortsleeve",
      "-623009799": "Multicolor Leaves Shortsleeve",
      "-393528492": "Green Leaves Shortsleeve",
      "-845697578": "Superstroika Dark",
      "-1321339613": "Superstroika Light",
      "-1429676180": "LS Jardineros Dark",
      "-1216972601": "Liberty Cocks Dark",
      "-1575236086": "Red Mist XI Light",
      "-1797294938": "LS Benders Light Tucked",
      "-1140047105": "Liberty Cocks Dark Tucked",
      "-843782576": "Liberty Cocks Light Tucked",
      "-1603367996": "Red Mist XI Dark Tucked",
      "-1301794889": "Red Mist XI Light Tucked",
      "-1949092552": "Teal Leather Fur Jacket",
      "-2068240632": "Peach Leather Fur Jacket",
      "-1232584465": "LC Beavers Light",
      "-1677738024": "Superstroika Dark",
      "-1982784645": "Superstroika Light",
      "-935730094": "LS Benders Dark",
      "-1700099788": "LS Benders Light",
      "-1385877847": "LS Jardineros Light",
      "-1845331996": "Liberty Cocks Dark",
      "-1656866611": "Superstroika Dark Tucked",
      "-1836768393": "Superstroika Light Tucked",
      "-178534642": "LS Benders Dark Tucked",
      "-416568662": "LS Benders Light Tucked",
      "-1132636850": "LS Jardineros Light Tucked",
      "-894963293": "LS Jardineros Dark Tucked",
      "-1706585885": "Liberty Cocks Dark Tucked",
      "-1340752769": "Liberty Cocks Light Tucked",
      "-1541800416": "Impotent Rage Eye Mask",
      "-185710035": "Jack of Spades",
      "-1535644165": "Ace of Spades",
      "-1850062720": "Ace of Hearts",
      "-855589108": "Ace of Diamonds",
      "-748364916": "Pineapple Mask",
      "-385993145": "Lucky Seven Mask",
      "-2088516682": "King of Clubs",
      "-1790089399": "King of Diamonds",
      "-697524104": "Street Crimes Boxart Tee",
      "-1629380219": "Invade and Persuade Logo Tee",
      "-808516773": "Invade and Persuade Invader Tee",
      "-444780873": "Invade and Persuade Suck Tee",
      "-1156978253": "Street Crimes Bikers Tee",
      "-1397273330": "Street Crimes Hoods Tee",
      "-39227575": "Choose Your Side Tee",
      "-830730001": "Invade and Persuade RON Tee",
      "-1824828823": "Grayscale Retro Sneakers",
      "-1519323436": "Ash Retro Sneakers",
      "-1982054485": "White Pattern Retro Sneakers",
      "-799075670": "Red Retro Sneakers",
      "-568054220": "Two Tone Retro Sneakers",
      "-348796841": "Mono Retro Sneakers",
      "-90183893": "Blue Fade Retro Sneakers",
      "-2071004509": "Mauve Fade Retro Sneakers",
      "-1909667807": "Brown Retro Sneakers",
      "-2046091021": "Grayscale Retro Sneakers",
      "-1098773720": "Ash Retro Sneakers",
      "-851400539": "Gray Pattern Retro Sneakers",
      "-606485033": "White Pattern Retro Sneakers",
      "-1602589508": "Green Retro Sneakers",
      "-164685788": "Red Retro Sneakers",
      "-1015106876": "Blue Fade Retro Sneakers",
      "-2060591000": "Yellow FB Manor Slipper Loafers",
      "-1351076608": "Red FB Slipper Loafers",
      "-1109012005": "Yellow FB Slipper Loafers",
      "-1278308846": "Impotent Rage",
      "-641737380": "Purple Fade SN Parka",
      "-1410825810": "Green Fade SN Parka",
      "-2042604785": "Yellow Vines Parka",
      "-1454532311": "Tan Le Chien Parka",
      "-1352424107": "Black Le Chien Parka",
      "-1842943292": "Red Le Chien Parka",
      "-2021206652": "Cubic Le Chien Parka",
      "-1068251363": "Green Camo Blagueurs Parka",
      "-53173391": "Grayscale SN Parka",
      "-506412018": "Green Blagueurs Parka",
      "-861890130": "Lilac Blagueurs Parka",
      "-1183474512": "Blue SN Parka",
      "-953927667": "Black Baroque Parka",
      "-743222997": "White Baroque Parka",
      "-512201547": "Purple Baroque Parka",
      "-1402375532": "Purple Fade SN Parka",
      "-2091999149": "Purple Vines Parka",
      "-1787280218": "Pink Vines Parka",
      "-131986940": "Tan Le Chien Parka",
      "-571879948": "Gray Blagueurs Parka",
      "-201489985": "Black Baroque Parka",
      "-15591440": "White SC Broker Parka",
      "-54647997": "Snake Leather Fur",
      "-309623586": "Slate Perseus Leather Fur",
      "-1503693185": "Contrast Camo Leather Fur",
      "-1584108307": "Garland Leather Fur",
      "-2110558224": "Orange SN Bigness Hoodie",
      "-1194828519": "Squash Squares Hoodie",
      "-927007482": "Squash 19 Hoodie",
      "-701228712": "Adorned Hoodie",
      "-90217938": "Blagueurs Camo Box Hoodie",
      "-321206619": "Yeti Heat Hoodie",
      "-1328088403": "Black The Diamond Hoodie",
      "-527405312": "SC Broker Hoodie",
      "-1361867897": "Broker Ornate Hoodie",
      "-1137859013": "SC Broker Logo Hoodie",
      "-1975106967": "Blagueurs Gray Box Hoodie",
      "-2022982476": "Purple SN Bigness Hoodie",
      "-1805073967": "Ash The Diamond Hoodie",
      "-741812551": "Adorned Hoodie",
      "-975848749": "Blagueurs Camo Box Hoodie",
      "-1228202818": "Yeti Heat Hoodie",
      "-1735729094": "Gray Yeti LS 19 Hoodie",
      "-2044058284": "Gray The Diamond Hoodie",
      "-307727285": "Blue The Diamond Hoodie",
      "-515292410": "Broker Detail Sweater",
      "-1323514157": "Blue Pulga Sweater",
      "-970690338": "White Pulga Sweater",
      "-1119461598": "Red Pulga Sweater",
      "-212251833": "Yellow Pulga Sweater",
      "-1741712139": "Black Pulga Sweater",
      "-711716931": "SN Lazerforce Sweater",
      "-746084477": "Broker Coin Sweater",
      "-149786984": "SC Broker Sweater",
      "-1643627387": "Gray Blagueurs Waves Sweater",
      "-2007887591": "Black Blagueurs Waves Sweater",
      "-1014626432": "Squash Squares Sweater",
      "-1413031934": "Squash Comic Sweater",
      "-1725320544": "Black LC Diamond Sweater",
      "-1885196447": "Purple Color Jersey",
      "-2026385507": "Mustard FB Manor Jersey",
      "-1188154487": "Sebastian Dix Jersey",
      "-886581380": "Grey Dix Jersey",
      "-1506297893": "Maroon Broker Puffer",
      "-1212491039": "Black Broker Puffer",
      "-387388598": "Gray Yeti Puffer",
      "-922714772": "Teal Broker Puffer",
      "-407291175": "Yellow FB Puffer",
      "-715807428": "Black SC Silk Robe",
      "-395129990": "Gold SC Silk Robe",
      "-1724601089": "White The Diamond Silk Robe",
      "-2087747147": "Black The Diamond Silk Robe",
      "-1254791936": "Stars Fame or Shame Robe",
      "-1321509620": "Black Fame or Shame Robe",
      "-1546127906": "White High Roller Dress",
      "-1316384451": "Navy High Roller Dress",
      "-2030486495": "Blue Floral High Roller Dress",
      "-1766597738": "Green Stripe High Roller Dress",
      "-596678904": "Brown Stripe High Roller Dress",
      "-361954557": "Aqua Fade High Roller Dress",
      "-1069371729": "Cream High Roller Dress",
      "-875575863": "Green High Roller Dress",
      "-1340409985": "Black High Roller Dress",
      "-2089534869": "Queens High Roller Dress",
      "-1638706192": "Sprigs High Roller Dress",
      "-1822605820": "Geo High Roller Dress",
      "-2120050033": "Blue High Roller Dress",
      "-421501687": "White & Red High Roller Dress",
      "-2117625123": "Crimson High Roller Dress",
      "-417897093": "Purple Floral High Roller Dress",
      "-717372984": "Black Floral High Roller Dress",
      "-64488479": "Gray Pocket Jacket",
      "-326083406": "Ash Pocket Jacket",
      "-568137064": "Tan Rose Cocktail Dress",
      "-385811946": "Cyan E Cocktail Dress",
      "-60972845": "Black Fleur Cocktail Dress",
      "-1296822915": "Mauve Fleur Cocktail Dress",
      "-141846749": "Blue Floral Cocktail Dress",
      "-259879069": "Black Rose Cocktail Dress",
      "-1642862739": "White SN Paint Cocktail Dress",
      "-1939454958": "Pink SN Paint Cocktail Dress",
      "-1483605283": "Cyan SN Paint Cocktail Dress",
      "-1725538810": "Mauve Paint Cocktail Dress",
      "-890125924": "Cyan Paint Cocktail Dress",
      "-1782195745": "Purple Baroque Cocktail Dress",
      "-1098975550": "Invade and Persuade Jets Tee",
      "-216712082": "Black Street Crimes Icons Tee",
      "-710302413": "Invade and Persuade Oil Tee",
      "-939750951": "Invade and Persuade Hero Tee",
      "-1861706798": "Street Crimes Color Gangs Tee",
      "-2024335604": "Slate Pocket Jacket",
      "-1782533153": "Gray Pocket Jacket",
      "-503428007": "Ash Pocket Jacket",
      "-261297866": "White Pocket Jacket",
      "-486977973": "Chocolate Pocket Jacket",
      "-249304416": "Latte Pocket Jacket",
      "-1083341004": "Navy Pocket Jacket",
      "-845077605": "Blue Pocket Jacket",
      "-161544583": "Cyan Bigness Waterproof",
      "-2021325454": "Licquorice Waterproof",
      "-1277338078": "Blue Bigness Waterproof",
      "-1112313394": "Black Waterproof",
      "-631845271": "Magenta Bigness Waterproof",
      "-40537099": "Green Bigness Waterproof",
      "-1700123104": "Apricot Bigness Waterproof",
      "-1460352331": "Mauve Bigness Waterproof",
      "-453516373": "Red Bigness Waterproof",
      "-1094707396": "Mustard Bigness Waterproof",
      "-948295504": "Woodland Camo Waterproof",
      "-1952403206": "Contrast Camo Waterproof",
      "-1644145223": "Orange Camo Waterproof",
      "-271910571": "Neon Waterproof",
      "-2139841886": "Gray Camo Waterproof",
      "-762158933": "Black Bigness Waterproof",
      "-793524311": "Lime Waterproof",
      "-1107942866": "Black Güffy Waterproof",
      "-1322776430": "Purple Güffy Waterproof",
      "-1514376773": "Red FB Waterproof",
      "-1222334000": "Magenta Bigness Waterproof",
      "-2038353347": "Green FB Waterproof",
      "-1396408653": "Mauve Bigness Waterproof",
      "-1638205379": "Red Bigness Waterproof",
      "-1868276528": "Mustard Bigness Waterproof",
      "-1010253032": "Woodland Camo Waterproof",
      "-1772951511": "Gray Camo Waterproof",
      "-1584001626": "Black Bigness Bomber",
      "-1410850230": "White Bigness Bomber",
      "-117597112": "Teal SC Broker Bomber",
      "-1362491422": "Black Broker Ornate Bomber",
      "-198110557": "Red Floral Bomber",
      "-1491273604": "White Color Bomber",
      "-1157939080": "Black Broker Coin Bomber",
      "-26241597": "Bigness Rage Bomber",
      "-800494828": "White Broker Coin Bomber",
      "-1621063357": "Red Broker Coin Bomber",
      "-410871418": "Black SC Broker Bomber",
      "-298539286": "White SC Broker Bomber",
      "-591676213": "Black Ancient Large Shirt",
      "-1493872321": "Blue Ancient Large Shirt",
      "-2089285055": "Dice Large Shirt",
      "-1782206756": "Black Chips Large Shirt",
      "-1415069187": "Yellow Sci-Fi Large Shirt",
      "-1992483289": "Yellow Sunset Large Shirt",
      "-1752450364": "Pink Sunset Large Shirt",
      "-229675034": "Blue Prairie Large Shirt",
      "-559888247": "Salmon Prairie Large Shirt",
      "-2073881589": "Brown Prairie Large Shirt",
      "-1288572504": "Pink Prairie Large Shirt",
      "-1983480257": "Purple Painted Large Shirt",
      "-473222593": "Pink Painted Large Shirt",
      "-704801116": "Pink Floral Large Shirt",
      "-1629771679": "Blue Floral Large Shirt",
      "-1305475883": "Tan Le Chien Parka",
      "-1621500119": "Black Le Chien Parka",
      "-1984711715": "Red Le Chien Parka",
      "-71919651": "Green Camo Blagueurs Parka",
      "-1065476091": "Fall Blagueurs Parka",
      "-557491053": "Gray Blagueurs Parka",
      "-267780324": "Ruby Blagueurs Parka",
      "-26960935": "Green Blagueurs Parka",
      "-1694387422": "Blue SN Parka",
      "-1984425841": "Black Baroque Parka",
      "-1482797989": "White Baroque Parka",
      "-2029594620": "Purple Fade SN Parka",
      "-1781992056": "Green Fade SN Parka",
      "-1606539741": "Yellow Vines Parka",
      "-1785687860": "Purple Vines Parka",
      "-1487522729": "Pink Vines Parka",
      "-1174120013": "Tan Le Chien Parka",
      "-877593332": "Black Le Chien Parka",
      "-2136643850": "Red Le Chien Parka",
      "-1423229935": "Green Camo Blagueurs Parka",
      "-937888560": "Orange Camo Blagueurs Parka",
      "-2053843672": "Black Baroque Parka",
      "-1815318121": "White Baroque Parka",
      "-1638234457": "White SC Broker Parka",
      "-1406918086": "Green Vines Parka",
      "-1669423213": "Adorned Knee Shorts",
      "-744387112": "Snake Knee Shorts",
      "-513726121": "White SC Broker Knee Shorts",
      "-962268197": "Purple Painted Knee Shorts",
      "-599495856": "Black Perseus Wide Pants",
      "-1631981512": "Teal Perseus Wide Pants",
      "-1897307800": "Pink Vinewood Wide Pants",
      "-2130655849": "Gray Lazerforce Wide Pants",
      "-1385685403": "Green Sci-Fi Wide Pants",
      "-674139337": "Blue Sci-Fi Wide Pants",
      "-905783398": "Yellow Sci-Fi Wide Pants",
      "-1117704822": "Blue Perseus Wide Pants",
      "-1075428155": "Gray Patterned Wide Pants",
      "-845160392": "Blue Patterned Wide Pants",
      "-1072741093": "Orange Patterned Wide Pants",
      "-833822314": "Pink Patterned Wide Pants",
      "-1400726014": "Black SC Broker Wide Pants",
      "-2113882426": "Blue P Wide Pants",
      "-1482721928": "Black Love T-Shirt",
      "-1724065613": "Red Love T-Shirt",
      "-221826679": "White Love T-Shirt",
      "-1629824083": "Hideous Krampus",
      "-2017251970": "Heinous Krampus",
      "-504710083": "Black Night Vision",
      "-1774836523": "White Night Vision",
      "-663524684": "Green Digital Night Vision",
      "-902443463": "Splinter Night Vision",
      "-1609401869": "Gray Woodland Night Vision",
      "-420477023": "Cobble Night Vision",
      "-1151275222": "Blue Night Vision",
      "-1524710746": "Tan Night Vision",
      "-2108326636": "Aqua Camo Night Vision",
      "-282444444": "Manic Luminous",
      "-790888248": "Manic Electric",
      "-105666407": "Peaceful Neon",
      "-1659277454": "Transcendent Neon",
      "-1956656129": "Tribal Electric",
      "-818129993": "Tribal Luminous",
      "-1014864371": "Manic Neon",
      "-1846978602": "Tribal Neon",
      "-1530692214": "Iwazaru Luminous",
      "-931773201": "Iwazaru Neon",
      "-1250997785": "Amused Electric",
      "-1170713731": "Amused Luminous",
      "-1417234918": "Amused Neon",
      "-1699933081": "Furious Luminous",
      "-1873805395": "Furious Electric",
      "-1082362429": "Black Mono Ballistic",
      "-788284142": "Cranial Ballistic",
      "-1700343719": "Orange & Black Ballistic",
      "-1456577140": "Red Stripe Ballistic",
      "-84342444": "Red Ballistic",
      "-2001754941": "Fall Ballistic",
      "-477184533": "Red Goggled Ballistic",
      "-316451618": "Black Spec Ops",
      "-547866296": "Carbon Spec Ops",
      "-1652700357": "LSPD Spec Ops",
      "-1961974179": "Ornate Skull Spec Ops",
      "-779706971": "Scale Spec Ops",
      "-1507571999": "Tan Digital Spec Ops",
      "-1975480550": "Splinter Spec Ops",
      "-1290608450": "Mono Splinter Spec Ops",
      "-27046100": "Jovial Gingerbread Hockey",
      "-1617573334": "Green Pattern False Face",
      "-1312723327": "Gothic False Face",
      "-688141587": "Opera False Face",
      "-429160804": "Carbon Gas Mask",
      "-914945647": "White Industrial Gas Mask",
      "-1847501435": "Aqua Camo Gas Mask",
      "-1560674378": "Gray Striped Gas Mask",
      "-1741034938": "Peach Camo Gas Mask",
      "-865102797": "Black Respirator",
      "-89034570": "Flecktarn Respirator",
      "-843047327": "Gray Woodland Respirator",
      "-1670071353": "Contrast Camo Respirator",
      "-1984981443": "Viper Respirator",
      "-1210223976": "Crosshatch Respirator",
      "-242950563": "Gray Digital Respirator",
      "-1591624296": "Aqua Camo Respirator",
      "-2061531756": "Splinter Respirator",
      "-1294573311": "Gray Splinter Respirator",
      "-1466217333": "Tiger Striped Respirator",
      "-1401629638": "Green Digital Respirator",
      "-66968432": "Back Crew Emblem",
      "-1715369654": "Back Crew Emblem",
      "-546391983": "Back Crew Emblem",
      "-1338446215": "Back Crew Emblem",
      "-566450316": "Earth Tones Rubberized",
      "-653288166": "Mono Rubberized",
      "-1223702572": "Gray Camo Rubberized",
      "-1521081247": "Blue & Brown Rubberized",
      "-1818459922": "Navy & Brown Rubberized",
      "-10758141": "Blue Rubberized",
      "-241353594": "Orange Rubberized",
      "-604630728": "Red Rubberized",
      "-702741006": "Moss Rubberized",
      "-1186509533": "Chocolate Rubberized",
      "-152905536": "Grayscale Rubberized",
      "-1526778630": "Khaki Rubberized",
      "-1833594777": "Tan Rubberized",
      "-1308242169": "Rust Rubberized",
      "-1646287181": "Woodland Rubberized",
      "-1724670629": "Aqua Camo Rubberized",
      "-949126706": "Cyan Camo Rubberized",
      "-1781398949": "Navy & Brown Rubberized",
      "-244205163": "Houndstooth Rubberized",
      "-147471075": "Blue Rubberized",
      "-2136647722": "Orange Rubberized",
      "-1907428567": "Red Rubberized",
      "-886805293": "Moss Rubberized",
      "-267971694": "Gray & Red Rubberized",
      "-1790183089": "Black & Blue Rubberized",
      "-2019729934": "Chocolate Rubberized",
      "-1135890086": "Mono Trail",
      "-464354969": "Black & Sand Trail",
      "-1358495338": "Slate Trail",
      "-523901677": "Tan Trail",
      "-130411525": "Khaki Trail",
      "-1446873339": "Charcoal Trail",
      "-1839577035": "Red Trail",
      "-987484720": "Orange Trail",
      "-1532924949": "Earth Tones Trail",
      "-1774858476": "Light Blue Trail",
      "-1072160032": "Blue & Brown Trail",
      "-1310357893": "Gray Camo Trail",
      "-182902028": "Gray & Yellow Trail",
      "-1709773575": "Black & Light Brown Trail",
      "-1032405576": "White Trail",
      "-629144484": "Woodland Trail",
      "-917478919": "Slate Trail",
      "-1088860789": "Tan Trail",
      "-1547168023": "Moss Trail",
      "-1853197714": "Khaki Trail",
      "-2009833534": "Gray Trail",
      "-1779565767": "Charcoal Trail",
      "-2088839237": "Blue & Brown Trail",
      "-2034541016": "Aqua Camo Trail",
      "-1997069518": "Gray & Yellow Trail",
      "-1633595770": "Fall Trail",
      "-891555628": "Gray Catsuit Heels",
      "-1440960682": "Dark Brown Catsuit Heels",
      "-134860949": "Green Tactical Blouson",
      "-1283363392": "Cyan Camo Tactical Blouson",
      "-749392537": "Dark Green Tactical Blouson",
      "-464812010": "Grayscale Tactical Blouson",
      "-996895994": "Gray Tactical Blouson",
      "-1649444133": "White Tactical Blouson",
      "-2130951819": "Earth Tones Tactical Blouson",
      "-392869539": "Green Ugly Sweater",
      "-101258208": "Red Ugly Sweater",
      "-1915612200": "Unicorn Ugly Sweater",
      "-1617905835": "Claus Ugly Sweater",
      "-1320691005": "T-Rex Ugly Sweater",
      "-1022525874": "Humbug Ugly Sweater",
      "-599578850": "Black Tactical Sleeveless",
      "-360594533": "Ash Tactical Sleeveless",
      "-87424474": "Dark Blue Tactical Sleeveless",
      "-137823200": "Earth Tones Tactical Sleeveless",
      "-435136337": "Orange Tactical Sleeveless",
      "-751422725": "White & Black Tactical Sleeveless",
      "-1029926456": "Black & White Tactical Sleeveless",
      "-1638708934": "Light Blue Tactical Sleeveless",
      "-998009446": "Khaki Tactical Sleeveless",
      "-958432173": "Brown Tactical Sleeveless",
      "-1432033951": "Gray Tactical Sleeveless",
      "-1732099684": "Cyan Camo Tactical Sleeveless",
      "-844125322": "Dazzle Tactical Sleeveless",
      "-1133377285": "Sand Wool Tactical Sleeveless",
      "-250842577": "Slate Wool Tactical Sleeveless",
      "-540717151": "Gray & Brown Tactical Sleeveless",
      "-718858010": "Light Brown Tactical Sleeveless",
      "-115416875": "Red Piping Tactical Sleeveless",
      "-2040136867": "White Camo Tactical Sleeveless",
      "-270377389": "Black Tactical Midlength",
      "-1525921624": "Mocha Tactical Midlength",
      "-1661496175": "Light Blue Tactical Midlength",
      "-1422577396": "Brown Tactical Midlength",
      "-1041736074": "Dark Blue Tactical Midlength",
      "-979212822": "White Tactical Midlength",
      "-1823178417": "Ash Tactical Midlength",
      "-868444408": "Olive & Brown Tactical Midlength",
      "-738426502": "Fall Tactical Midlength",
      "-1121659957": "White Camo Tactical Midlength",
      "-1293697207": "Charcoal Tactical Midlength",
      "-1599530284": "Brown & Blue Tactical Midlength",
      "-1909450000": "Woodland Tactical Midlength",
      "-1855446688": "Blue Camo Tactical Midlength",
      "-2137227319": "Black & Gray Tactical Midlength",
      "-431846015": "Heavy Strike Vest",
      "-419712771": "Extreme Strike Vest",
      "-1261723782": "Voyeur",
      "-340492444": "Geo Fox",
      "-1928626977": "Geo Gray & White Cat",
      "-462689645": "Red Leather Half Face",
      "-272760521": "Cyan Leather Half Face",
      "-1018779575": "Dark Pink Leather Half Face",
      "-711963428": "Green Leather Half Face",
      "-1466961212": "Peach Leather Half Face",
      "-1157457983": "Purple Leather Half Face",
      "-1661805686": "Terracotta Leather Half Face",
      "-479302": "Gray & White Leather Half Face",
      "-2070992441": "Dusty Blue Leather Half Face",
      "-1588337840": "Putty Leather Half Face",
      "-1759850786": "White Leather Half Face",
      "-363625360": "Worn Red Leather Half Face",
      "-614078827": "Worn Yellow Leather Half Face",
      "-911719654": "Worn Green Leather Half Face",
      "-1228989112": "Black Swirl Leather Half Face",
      "-1524991485": "Red Swirl Leather Half Face",
      "-648572054": "Yellow Visor Respirator",
      "-197670614": "Green Visor Respirator",
      "-1520834287": "Geo Gold Dog",
      "-1668294787": "Geo White Dog",
      "-1966787608": "Geo Brown Dog",
      "-216103775": "Geo Gray Dog",
      "-244108921": "Cerberus",
      "-1666497391": "Smoke Leather with NVG",
      "-1064268705": "Peach Leather with NVG",
      "-772133070": "Purple Leather with NVG",
      "-663025008": "Gray & White Leather with NVG",
      "-363811269": "Worn Red Leather with NVG",
      "-838503003": "Yellow Swirl Leather with NVG",
      "-1724409013": "Grin",
      "-1269149296": "Laugh",
      "-1019678803": "Grimace",
      "-1997997302": "Gasp",
      "-562013712": "Ape",
      "-1427637736": "Grinner",
      "-1616712759": "Fluffy Rabbit",
      "-750293905": "Fleshless",
      "-1796530680": "Black Neck Gaiter",
      "-2117975675": "Purple Neon Camo Neck Gaiter",
      "-1354457959": "Cobble Neck Gaiter",
      "-1370435373": "Light Gray Neck Gaiter",
      "-896661175": "Stars & Stripes Neck Gaiter",
      "-339703162": "Back Crew Emblem",
      "-1030449544": "Dog With Cone Slip-Ons",
      "-256526585": "Yellow Dog With Cone Tee",
      "-1019288383": "Thog Bod Tee",
      "-311477983": "Monkey's Paradise Tee",
      "-1463078950": "Retro Defender of the Faith Tee",
      "-1316077216": "Defender of the Faith Tee",
      "-22357096": "Badlands Revenge II Romance Tee",
      "-560065832": "Space Monkey 3 Tee",
      "-497376160": "Race And Chase Signs Tee",
      "-853837342": "Race And Chase Decor Tee",
      "-1107240019": "Race And Chase Start Tee",
      "-1347010792": "T-Shirt",
      "-1476418152": "Space Monkey Boss Fights Tee",
      "-1782709995": "Space Monkey Space Crafts Tee",
      "-880907139": "Thog Mighty Sword Tee",
      "-1783365399": "Thog Tee",
      "-1240010651": "Blue Armored Shirt",
      "-1340344354": "Blue Camo Armored Shirt",
      "-204603559": "Contrast Camo Armored Shirt",
      "-2127193586": "Green Digital Armored Shirt",
      "-815647102": "Desert Camo Armored Shirt",
      "-627847963": "Woodland Armored Shirt",
      "-1224735298": "Blue Digital Armored Shirt",
      "-56356603": "Cobble Armored Shirt",
      "-177377515": "Forest Green Armored Shirt",
      "-34142973": "T-Shirt",
      "-1251085326": "T-Shirt",
      "-1519102977": "T-Shirt",
      "-2097803517": "T-Shirt",
      "-361823640": "T-Shirt",
      "-55138569": "T-Shirt",
      "-406094555": "T-Shirt",
      "-1227154619": "T-Shirt",
      "-2056051369": "Love Professor Score Tee",
      "-1463292928": "Love Professor Hers Tee",
      "-1757001475": "Love Professor Friendzoned Tee",
      "-856935344": "Love Professor Secrets Tee",
      "-624606289": "T-Shirt",
      "-1795246045": "T-Shirt",
      "-2025579346": "T-Shirt",
      "-681699516": "Black Smooth Fitted",
      "-908755921": "Navy Smooth Fitted",
      "-1187652880": "Teal Smooth Fitted",
      "-1637309098": "Red Smooth Fitted",
      "-2096992630": "Polar Smooth Fitted",
      "-2025607653": "Brown Smooth Fitted",
      "-1785378114": "Polar Smooth Fitted",
      "-1880441550": "Ho-Ho-Ho Sweater",
      "-1103125566": "Black Low Level Armor",
      "-427064862": "Black Uniform Closed",
      "-1116065856": "Green Uniform Closed",
      "-933640833": "Beige Uniform Closed",
      "-696032814": "Sage Uniform Closed",
      "-1684050937": "Dark Green Uniform Closed",
      "-648709350": "Yung Ancestor Hoodie",
      "-627862106": "Black Uniform Open",
      "-33596291": "Cream Uniform Open",
      "-946819278": "Sage Short Uniform Closed",
      "-665726796": "White Short Uniform Closed",
      "-369396729": "Light Gray Short Uniform Closed",
      "-55207549": "Gray Short Uniform Closed",
      "-1474458347": "Black Short Uniform Open",
      "-1846714187": "Beige Short Uniform Open",
      "-113430709": "Light Gray Short Uniform Open",
      "-1750084048": "White Dress Shirt Closed",
      "-103468769": "Gray Fitted Vest",
      "-331442702": "Black Fitted Vest",
      "-1506305343": "Sky Check Fitted Vest",
      "-61190419": "Crimson Check Fitted Vest",
      "-1025287168": "Classic Check Fitted Vest",
      "-1734080638": "Beige Check Fitted Vest",
      "-696554904": "Silver Fitted Vest",
      "-926822667": "Blue Fitted Vest",
      "-220519641": "Ash Fitted Vest",
      "-451639398": "Brown Fitted Vest",
      "-1717964634": "Burgundy Fitted Vest",
      "-1112028035": "Correctional Cargo",
      "-962669335": "Black Knee Pad Cargos",
      "-95927681": "Blue Camo Knee Pad Cargos",
      "-1741390263": "Blue Digital Knee Pad Cargos",
      "-883956637": "Cobble Knee Pad Cargos",
      "-1718746912": "Beige Camo Knee Pad Cargos",
      "-735285244": "Dark Gray Knee Pad Cargos",
      "-8763745": "Forest Green Knee Pad Cargos",
      "-650834731": "Black Guarded Cargos",
      "-765867876": "Splinter Guarded Cargos",
      "-616998297": "Contrast Camo Guarded Cargos",
      "-163573652": "Desert Camo Guarded Cargos",
      "-1367885989": "Charcoal Guarded Cargos",
      "-122532913": "Beige Guarded Cargos",
      "-965900206": "Beige Digital Armor",
      "-659280673": "Contrast Camo Armor",
      "-1680887017": "Blue Camo Armor",
      "-301607038": "Desert Camo Armor",
      "-1292508829": "Green Camo Armor",
      "-1030664654": "Black Pocket Vest",
      "-224690706": "Black Reinforced Armor",
      "-2104689229": "White Dress Shirt Open",
      "-1482334429": "Blue Digital Zombie",
      "-2133670757": "Aqua Camo Zombie",
      "-522025795": "Splinter Zombie",
      "-224614351": "Contrast Camo Zombie",
      "-656116655": "Cobble Zombie",
      "-1490710316": "Peach Camo Zombie",
      "-2075571096": "Black Putrefied Zombie",
      "-312828267": "Green Putrefied Zombie",
      "-16282134": "Fall Zombie",
      "-1243350112": "Gray Woodland Zombie",
      "-1294074740": "Blue Digital Tactical Ski",
      "-314566281": "Aqua Camo Tactical Ski",
      "-621939501": "Splinter Tactical Ski",
      "-1752273435": "Peach Camo Tactical Ski",
      "-2059417272": "Brushstroke Tactical Ski",
      "-1025325819": "Flecktarn Tactical Ski",
      "-541720917": "Light Woodland Tactical Ski",
      "-1495331586": "Moss Tactical Ski",
      "-1255560813": "Sand Tactical Ski",
      "-1887357485": "Green Digital Tactical Ski",
      "-1761655509": "Fall Tactical Ski",
      "-1521163818": "Dark Woodland Tactical Ski",
      "-83784028": "Black and Yellow Oni",
      "-746143825": "Stone Possessed Oni",
      "-1072162606": "Gray Oni",
      "-280791256": "Black and Gold Oni",
      "-579742843": "Gray and Orange Oni",
      "-678869336": "Gray and Gold Oni",
      "-1880166434": "Black Painted Oni",
      "-1530783352": "Black Possessed Oni",
      "-1231504075": "Brown Oni",
      "-932650795": "Yellow Oni",
      "-69082767": "Brown Digital Snake Skull",
      "-469020846": "Contrast Camo Snake Skull",
      "-230233143": "Cobble Snake Skull",
      "-999550956": "Brushstroke Snake Skull",
      "-2020993459": "Flecktarn Snake Skull",
      "-1771916290": "Light Woodland Snake Skull",
      "-582958663": "Moss Snake Skull",
      "-110167531": "Sand Snake Skull",
      "-1945009674": "Green Digital Snake Skull",
      "-514996681": "Red Snake Skull",
      "-267426886": "White Snake Skull",
      "-547477398": "Gray Digital Snake Skull",
      "-240792327": "Peach Digital Snake Skull",
      "-749137824": "Dark Woodland Snake Skull",
      "-1425515693": "Brown Digital Vent",
      "-1363146452": "Aqua Camo Vent",
      "-902447081": "Contrast Camo Vent",
      "-207285519": "Flecktarn Vent",
      "-1060065975": "Light Woodland Vent",
      "-595237710": "Sand Vent",
      "-962683254": "Weathered Skull",
      "-807547647": "Tan Leather Skull",
      "-1827122293": "Chocolate Leather Skull",
      "-983877636": "Orange Open-Eyed Skull",
      "-8278968": "Tattooed Skull",
      "-363298314": "Blue Painted Skull",
      "-716817447": "Aged Skull",
      "-34002345": "Orange Swirl-Eyed Skull",
      "-1560291507": "Venom Skull",
      "-1313704782": "Fresh Skull",
      "-39711596": "Fleshy Skull",
      "-636009093": "Sand Skull",
      "-390339900": "Inked Skull",
      "-1403686883": "Back Crew Emblem",
      "-1802539904": "Black Shrewsbury Hoodie",
      "-1196968784": "White Vom Feuer Hoodie",
      "-1502212019": "Black Vom Feuer Hoodie",
      "-584614481": "White Coil Hoodie",
      "-890709710": "Black Coil Hoodie",
      "-581140963": "Black Ammu-Nation Hoodie",
      "-870458464": "White Ammu-Nation Hoodie",
      "-864476154": "Splinter Cross Trainers",
      "-1089992412": "Contrast Camo Cross Trainers",
      "-248058495": "Cobble Cross Trainers",
      "-2083253567": "Moss Cross Trainers",
      "-1247414684": "Sand Cross Trainers",
      "-1660095382": "Green Digital Cross Trainers",
      "-82968489": "Slate Cross Trainers",
      "-1604039931": "Green Cross Trainers",
      "-1965535231": "Gray Digital Cross Trainers",
      "-70602264": "Moss Digital Cross Trainers",
      "-236872170": "Gray Woodland Cross Trainers",
      "-626624329": "Black Tech Boots",
      "-1065991081": "Beige Tech Boots",
      "-953724403": "Brown Tech Boots",
      "-571310173": "Moss Tech Boots",
      "-472708252": "Tawny Tech Boots",
      "-125356852": "Venom Tech Boots",
      "-1801491202": "Desert Tech Boots",
      "-2051163554": "Beige Tech Boots",
      "-1691196089": "Moss Tech Boots",
      "-1746510161": "Tawny Tech Boots",
      "-2117315758": "Charcoal Tactical Boots",
      "-1758888436": "Walnut Tactical Boots",
      "-1519379815": "Silver Tactical Boots",
      "-776244429": "Olive Tactical Boots",
      "-1361297712": "Desert Tactical Boots",
      "-1340128938": "Sage Tactical Boots",
      "-1686759540": "Silver Tactical Boots",
      "-1989643415": "Olive Tactical Boots",
      "-1932218876": "Aqua Camo Sleeveless",
      "-527018622": "Splinter Sleeveless",
      "-1476795298": "Light Woodland Sleeveless",
      "-1939002043": "Sand Sleeveless",
      "-753103051": "Green Digital Sleeveless",
      "-514970728": "Gray Digital Sleeveless",
      "-292993522": "Peach Digital Sleeveless",
      "-63708829": "Fall Sleeveless",
      "-1703600669": "Dark Woodland Sleeveless",
      "-1484081138": "Crosshatch Sleeveless",
      "-1244670824": "Moss Digital Sleeveless",
      "-954304715": "Gray Woodland Sleeveless",
      "-279147010": "Blue Digital Sleeveless",
      "-1318710766": "Brown Digital Sleeveless",
      "-249898140": "Aqua Camo Sleeveless",
      "-204676920": "Splinter Sleeveless",
      "-2054257587": "Contrast Camo Sleeveless",
      "-830073285": "Flecktarn Sleeveless",
      "-1012091233": "Green Digital Sleeveless",
      "-26072023": "Fall Sleeveless",
      "-48559904": "Aqua Camo Denim Cut",
      "-285774699": "Splinter Denim Cut",
      "-2094426885": "Moss Denim Cut",
      "-1852936044": "Green Digital Denim Cut",
      "-151930063": "Dark Woodland Denim Cut",
      "-1126873355": "Crosshatch Denim Cut",
      "-910761800": "Moss Digital Denim Cut",
      "-1620079574": "Gray Woodland Denim Cut",
      "-780400403": "Blue Digital Sleeveless Crop",
      "-704090026": "Aqua Camo Sleeveless Crop",
      "-1010152486": "Splinter Sleeveless Crop",
      "-205149232": "Cobble Sleeveless Crop",
      "-443281555": "Peach Camo Sleeveless Crop",
      "-167652872": "Green Digital Sleeveless Crop",
      "-1461471299": "Gray Digital Sleeveless Crop",
      "-1710319085": "Peach Digital Sleeveless Crop",
      "-925304921": "Fall Sleeveless Crop",
      "-1173628403": "Dark Woodland Sleeveless Crop",
      "-1238779496": "Brown Digital Torn Tee",
      "-1755788693": "Contrast Camo Torn Tee",
      "-1928153633": "Brushstroke Torn Tee",
      "-619327004": "Flecktarn Torn Tee",
      "-1453822358": "Purple Camo Torn Tee",
      "-1491592331": "Green Digital Torn Tee",
      "-775982909": "Gray Digital Torn Tee",
      "-1943607897": "Fall Torn Tee",
      "-1232422290": "Crosshatch Torn Tee",
      "-542423371": "Blue Digital Short Crop",
      "-1258263650": "Aqua Camo Short Crop",
      "-1453566890": "Splinter Short Crop",
      "-446837664": "Flecktarn Short Crop",
      "-719770665": "Purple Camo Short Crop",
      "-265166328": "Sand Short Crop",
      "-1220839978": "Gray Digital Short Crop",
      "-1527393973": "Peach Digital Short Crop",
      "-1677017211": "Gray Woodland Short Crop",
      "-169062677": "Blue Digital T-Shirt",
      "-326722018": "Contrast Camo T-Shirt",
      "-1217317900": "Brushstroke T-Shirt",
      "-237688645": "Sand T-Shirt",
      "-2078774471": "Dark Woodland T-Shirt",
      "-160398090": "Aqua Camo Rolled Tee",
      "-1710568400": "Splinter Rolled Tee",
      "-2009782139": "Contrast Camo Rolled Tee",
      "-1389301124": "Peach Camo Rolled Tee",
      "-716586323": "Brushstroke Rolled Tee",
      "-997777112": "Flecktarn Rolled Tee",
      "-395515661": "Moss Rolled Tee",
      "-816339956": "Gray Digital Rolled Tee",
      "-886989920": "Peach Digital Rolled Tee",
      "-51609803": "Fall Rolled Tee",
      "-424324409": "Dark Woodland Rolled Tee",
      "-2116318955": "Crosshatch Rolled Tee",
      "-1270714910": "Moss Digital Rolled Tee",
      "-827562327": "Blue Digital Rolled Tee",
      "-921674895": "Brown Digital Rolled Tee",
      "-1351566793": "Aqua Camo Rolled Tee",
      "-1801943929": "Splinter Rolled Tee",
      "-1016700382": "Contrast Camo Rolled Tee",
      "-1169993764": "Cobble Rolled Tee",
      "-347426326": "Peach Camo Rolled Tee",
      "-519201424": "Brushstroke Rolled Tee",
      "-190167895": "Light Woodland Rolled Tee",
      "-1153318956": "Green Digital Rolled Tee",
      "-1553166294": "Gray Digital Rolled Tee",
      "-1781336841": "Fall Rolled Tee",
      "-2146092434": "Urban Collared Parka",
      "-1900097706": "Forest Patched Collared Parka",
      "-1757353775": "Red Collared Parka",
      "-1904748737": "Brown Collared Parka",
      "-210132683": "Gray Camo Collared Parka",
      "-406092172": "Forest Open Parka",
      "-1738061342": "Urban Patched Open Parka",
      "-1440944819": "Forest Patched Open Parka",
      "-801908923": "Peach Closed Parka",
      "-495060007": "Red Closed Parka",
      "-1126158178": "Lime Closed Parka",
      "-2014296389": "Teal Closed Parka",
      "-1716622793": "Tangerine Closed Parka",
      "-248954029": "Blue Digital Sleeveless Shirt",
      "-281198725": "Brown Digital Sleeveless Shirt",
      "-667081637": "Aqua Camo Sleeveless Shirt",
      "-964591388": "Splinter Sleeveless Shirt",
      "-2072904510": "Contrast Camo Sleeveless Shirt",
      "-1591364051": "Peach Camo Sleeveless Shirt",
      "-1887956270": "Brushstroke Sleeveless Shirt",
      "-2054488328": "Moss Sleeveless Shirt",
      "-2036666824": "Green Digital Sleeveless Shirt",
      "-400738349": "Black Sleeveless Shirt",
      "-195112874": "Slate Sleeveless Shirt",
      "-1327478434": "White Sleeveless Shirt",
      "-954632752": "Wine Sleeveless Shirt",
      "-1824453088": "Blue Sleeveless Shirt",
      "-1584944467": "Brown Sleeveless Shirt",
      "-1175595811": "Peach Digital Sleeveless Shirt",
      "-1473892018": "Fall Sleeveless Shirt",
      "-1901920692": "Moss Digital Sleeveless Shirt",
      "-972652278": "Blue Digital T-Shirt",
      "-454836540": "Brown Digital T-Shirt",
      "-188823566": "Aqua Camo T-Shirt",
      "-495967403": "Splinter T-Shirt",
      "-1687153322": "Flecktarn T-Shirt",
      "-1998622667": "Light Woodland T-Shirt",
      "-1989146654": "Gray Digital T-Shirt",
      "-1692456128": "Peach Digital T-Shirt",
      "-34541342": "Fall T-Shirt",
      "-811461563": "Dark Woodland T-Shirt",
      "-1261904237": "Gray Woodland T-Shirt",
      "-173878184": "Aqua Camo Combat Shirt",
      "-717778046": "Contrast Camo Combat Shirt",
      "-2016773979": "Moss Combat Shirt",
      "-58126023": "Green Digital Combat Shirt",
      "-660529767": "Black Combat Shirt",
      "-557471258": "Slate Combat Shirt",
      "-796455575": "White Combat Shirt",
      "-95330051": "Brown Combat Shirt",
      "-334904210": "Red Combat Shirt",
      "-58027704": "Gray Woodland Combat Shirt",
      "-238050804": "Blue Digital Service Shirt",
      "-346745581": "Brown Digital Service Shirt",
      "-55434054": "Cobble Service Shirt",
      "-1572900906": "Flecktarn Service Shirt",
      "-1884697941": "Light Woodland Service Shirt",
      "-363462666": "Moss Service Shirt",
      "-670016661": "Sand Service Shirt",
      "-173332033": "Green Digital Service Shirt",
      "-1658559360": "Blue Service Shirt",
      "-824746984": "Gray Digital Service Shirt",
      "-654020494": "Peach Digital Service Shirt",
      "-1839766759": "Fall Service Shirt",
      "-1531836466": "Dark Woodland Service Shirt",
      "-2007019735": "Moss Digital Service Shirt",
      "-183289786": "Aqua Camo Service Short",
      "-1834060934": "Brushstroke Service Short",
      "-2091658043": "Flecktarn Service Short",
      "-410411725": "Sand Service Short",
      "-1764823785": "Black Service Short",
      "-1592524383": "Slate Service Short",
      "-1285446084": "White Service Short",
      "-1091963402": "Peach Digital Service Short",
      "-1406578571": "Fall Service Short",
      "-1691341181": "Dark Woodland Service Short",
      "-2005628660": "Crosshatch Service Short",
      "-140286104": "Moss Digital Service Short",
      "-438254621": "Gray Woodland Service Short",
      "-2086473476": "Black Sleeveless Puffer",
      "-672851589": "Lime Sleeveless Puffer",
      "-100115007": "Cyan Sleeveless Puffer",
      "-404637324": "Blue Sleeveless Puffer",
      "-873410314": "Salmon Collared Puffer",
      "-387773738": "Brown Collared Puffer",
      "-253937817": "Yellow Collared Puffer",
      "-582512580": "Lime Collared Puffer",
      "-1781300907": "Blue Collared Puffer",
      "-120911428": "Red R* Class of '98",
      "-1359197372": "Knuckleduster Pocket Tee",
      "-1013185306": "Blue Digital Collared Parka",
      "-1164572448": "Splinter Collared Parka",
      "-798673794": "Contrast Camo Collared Parka",
      "-1640083411": "Cobble Collared Parka",
      "-1244627119": "Peach Camo Collared Parka",
      "-652753437": "Light Woodland Collared Parka",
      "-422747826": "Moss Collared Parka",
      "-1829586578": "Sand Collared Parka",
      "-120361084": "Fall Collared Parka",
      "-367111654": "Blue Woodland Collared Parka",
      "-739596877": "Crosshatch Collared Parka",
      "-964654369": "Moss Digital Collared Parka",
      "-1387145090": "Gray Woodland Collared Parka",
      "-913738843": "Blue Digital Closed Parka",
      "-1208627074": "Brown Digital Closed Parka",
      "-484119796": "Aqua Camo Closed Parka",
      "-1326283096": "Splinter Closed Parka",
      "-1093131661": "Contrast Camo Closed Parka",
      "-1738680961": "Peach Camo Closed Parka",
      "-1515753454": "Purple Camo Closed Parka",
      "-2058834091": "Flecktarn Closed Parka",
      "-41181215": "Moss Closed Parka",
      "-1468780165": "Green Digital Closed Parka",
      "-1632035323": "Gray Digital Closed Parka",
      "-1929479536": "Peach Digital Closed Parka",
      "-918256972": "Brown Digital Closed Parka",
      "-945992815": "Moss Closed Parka",
      "-163174174": "Sand Closed Parka",
      "-625597033": "Green Digital Closed Parka",
      "-1524581779": "Gray Digital Closed Parka",
      "-1221108070": "Peach Digital Closed Parka",
      "-925630057": "Fall Closed Parka",
      "-621894196": "Blue Woodland Closed Parka",
      "-1522320778": "Crosshatch Closed Parka",
      "-1217863999": "Moss Digital Closed Parka",
      "-2080868387": "Gray Woodland Closed Parka",
      "-301107106": "Peach Camo Open Parka",
      "-534979459": "Purple Camo Open Parka",
      "-57043594": "Light Woodland Open Parka",
      "-1831190027": "Moss Open Parka",
      "-999873258": "Sand Open Parka",
      "-1953610050": "Blue Woodland Open Parka",
      "-1715870955": "Crosshatch Open Parka",
      "-1457028624": "Moss Digital Open Parka",
      "-1119966690": "Gray Woodland Open Parka",
      "-2046332523": "Brushstroke Defender Vest",
      "-1083382721": "Flecktarn Defender Vest",
      "-1919352680": "Light Woodland Defender Vest",
      "-1539363356": "Moss Defender Vest",
      "-159640195": "Gray Digital Defender Vest",
      "-463802053": "Gray Woodland Defender Vest",
      "-262405423": "Blue Digital Sports Biker",
      "-2068091391": "Brushstroke Sports Biker",
      "-1321154805": "Moss Sports Biker",
      "-871957353": "Sand Sports Biker",
      "-1155884977": "Gray Digital Sports Biker",
      "-897272029": "Peach Digital Sports Biker",
      "-313164604": "Dark Woodland Sports Biker",
      "-280788816": "Crosshatch Sports Biker",
      "-556507182": "Moss Digital Sports Biker",
      "-924353322": "Blue Digital Denim Biker",
      "-1362048855": "Brown Digital Denim Biker",
      "-1617372632": "Peach Camo Denim Biker",
      "-1319600729": "Brushstroke Denim Biker",
      "-2059557518": "Light Woodland Denim Biker",
      "-232423616": "Moss Denim Biker",
      "-536552705": "Sand Denim Biker",
      "-2083655008": "Gray Digital Denim Biker",
      "-1901504027": "Flecktarn Cargo",
      "-1608385322": "Light Woodland Cargo",
      "-1559297360": "Moss Cargo",
      "-1252612289": "Sand Cargo",
      "-1899573649": "Green Digital Cargo",
      "-713532463": "Dark Woodland Cargo",
      "-951533710": "Crosshatch Cargo",
      "-1478131540": "Moss Digital Cargo",
      "-1715674021": "Gray Woodland Cargo",
      "-807952147": "Aqua Camo Cargo",
      "-817193005": "Splinter Cargo",
      "-1123878076": "Contrast Camo Cargo",
      "-1444096744": "Cobble Cargo",
      "-1732365637": "Peach Camo Cargo",
      "-1356177521": "Brushstroke Cargo",
      "-1659454616": "Flecktarn Cargo",
      "-1967352140": "Light Woodland Cargo",
      "-1482526768": "Green Digital Cargo",
      "-1788294307": "Gray Digital Cargo",
      "-1316552606": "Blue Digital Cargo Shorts",
      "-113350540": "Splinter Cargo Shorts",
      "-896693485": "Contrast Camo Cargo Shorts",
      "-666130801": "Cobble Cargo Shorts",
      "-1665683608": "Brushstroke Cargo Shorts",
      "-352203777": "Flecktarn Cargo Shorts",
      "-130816413": "Light Woodland Cargo Shorts",
      "-978976440": "Moss Cargo Shorts",
      "-726120764": "Green Digital Cargo Shorts",
      "-1663674627": "Gray Digital Cargo Shorts",
      "-1437076992": "Peach Digital Cargo Shorts",
      "-397251076": "Fall Cargo Shorts",
      "-1240954519": "Dark Woodland Cargo Shorts",
      "-2139414969": "Gray Woodland Cargo Shorts",
      "-2072012360": "Blue Digital Overalls",
      "-267698635": "Aqua Camo Overalls",
      "-117288929": "Cobble Overalls",
      "-2037060722": "Sand Overalls",
      "-823000561": "Black Overalls",
      "-499373917": "White Overalls",
      "-1176512537": "Chocolate Overalls",
      "-1660412360": "Light Brown Overalls",
      "-554911402": "Dark Denim Overalls",
      "-976386280": "Faded Dark Denim Overalls",
      "-208051537": "Light Denim Overalls",
      "-495796126": "Faded Light Denim Overalls",
      "-1750258984": "Slate Denim Overalls",
      "-2026665499": "Faded Slate Denim Overalls",
      "-1385966011": "Black Denim Overalls",
      "-1972220391": "Splinter T-Shirt",
      "-745807797": "Peach Camo T-Shirt",
      "-1730417944": "Flecktarn T-Shirt",
      "-2031040750": "Light Woodland T-Shirt",
      "-180575316": "Sand T-Shirt",
      "-1330218524": "Green Digital T-Shirt",
      "-280135919": "Dark Woodland T-Shirt",
      "-1570906829": "Crosshatch T-Shirt",
      "-1827717482": "Moss Digital T-Shirt",
      "-1276018598": "Gray Woodland T-Shirt",
      "-80800759": "Blue Digital T-Shirt",
      "-1599412978": "Peach Camo T-Shirt",
      "-2075251627": "Flecktarn T-Shirt",
      "-915818865": "Light Woodland T-Shirt",
      "-1274180649": "Moss T-Shirt",
      "-1502711679": "Sand T-Shirt",
      "-1978322477": "Dark Woodland T-Shirt",
      "-2142233015": "Crosshatch T-Shirt",
      "-1806612917": "Moss Digital T-Shirt",
      "-1032969588": "Gray Woodland T-Shirt",
      "-2125833514": "Splinter T-Shirt",
      "-544532634": "Contrast Camo T-Shirt",
      "-65646468": "Peach Camo T-Shirt",
      "-306465849": "Brushstroke T-Shirt",
      "-1593238949": "Flecktarn T-Shirt",
      "-1000414970": "Moss T-Shirt",
      "-1230355043": "Sand T-Shirt",
      "-563679754": "Dark Woodland T-Shirt",
      "-868595299": "Crosshatch T-Shirt",
      "-1157617879": "Moss Digital T-Shirt",
      "-1481736058": "Gray Woodland T-Shirt",
      "-66549736": "Sand T-Shirt",
      "-1609322019": "Peach Digital T-Shirt",
      "-1311091350": "Fall T-Shirt",
      "-2086536970": "Dark Woodland T-Shirt",
      "-1864690836": "Crosshatch T-Shirt",
      "-195306900": "Moss Digital T-Shirt",
      "-509173029": "Blue Digital Rolled Tee",
      "-957125447": "Brown Digital Rolled Tee",
      "-1584583725": "Aqua Camo Rolled Tee",
      "-812775460": "Flecktarn Rolled Tee",
      "-377638451": "Green Digital Rolled Tee",
      "-70035848": "Gray Digital Rolled Tee",
      "-2087583259": "Blue Digital Rolled Tee",
      "-1789614742": "Brown Digital Rolled Tee",
      "-221194779": "Peach Camo Rolled Tee",
      "-1192500712": "Light Woodland Rolled Tee",
      "-1416018061": "Moss Rolled Tee",
      "-596006601": "Sand Rolled Tee",
      "-1969483755": "Green Digital Rolled Tee",
      "-1664830362": "Gray Digital Rolled Tee",
      "-1438691493": "Fall Rolled Tee",
      "-733950097": "Blue Digital Rolled Tee",
      "-1031394310": "Brown Digital Rolled Tee",
      "-980278613": "Splinter Rolled Tee",
      "-615756257": "Contrast Camo Rolled Tee",
      "-23554889": "Light Woodland Rolled Tee",
      "-1320056431": "Green Digital Rolled Tee",
      "-1161716607": "Peach Digital Rolled Tee",
      "-506041686": "Gray Woodland Rolled Tee",
      "-132474987": "Cobble Rolled Tee",
      "-1118363129": "Light Woodland Rolled Tee",
      "-809253152": "Moss Rolled Tee",
      "-1903416863": "Fall Rolled Tee",
      "-750668977": "Moss Digital Rolled Tee",
      "-980215822": "Gray Woodland Rolled Tee",
      "-1618922412": "Contrast Camo Rolled Tee",
      "-296660493": "Cobble Rolled Tee",
      "-1390686327": "Peach Camo Rolled Tee",
      "-1159697646": "Brushstroke Rolled Tee",
      "-496485855": "Flecktarn Rolled Tee",
      "-725115168": "Sand Rolled Tee",
      "-1742690670": "Gray Digital Rolled Tee",
      "-2048458209": "Peach Digital Rolled Tee",
      "-1018495770": "Dark Woodland Rolled Tee",
      "-1601849484": "Crosshatch Rolled Tee",
      "-1899490311": "Moss Digital Rolled Tee",
      "-1157337999": "Gray Woodland Rolled Tee",
      "-302316316": "Blue Digital Rolled Tee",
      "-389720339": "Splinter Rolled Tee",
      "-162074096": "Contrast Camo Rolled Tee",
      "-1272812120": "Cobble Rolled Tee",
      "-2115204803": "Peach Camo Rolled Tee",
      "-861397325": "Light Woodland Rolled Tee",
      "-621954242": "Moss Rolled Tee",
      "-1243605853": "Peach Digital Rolled Tee",
      "-1004687074": "Fall Rolled Tee",
      "-534910690": "Dark Woodland Rolled Tee",
      "-1690181785": "Gray Woodland Rolled Tee",
      "-83342033": "Brown Digital Rolled Tee",
      "-52904290": "Aqua Camo Rolled Tee",
      "-1794347261": "Splinter Rolled Tee",
      "-876258184": "Flecktarn Rolled Tee",
      "-1869421036": "Light Woodland Rolled Tee",
      "-1222560976": "Sand Rolled Tee",
      "-1767766940": "Gray Digital Rolled Tee",
      "-1528520471": "Peach Digital Rolled Tee",
      "-548268605": "Moss Digital Rolled Tee",
      "-85926646": "Brown Digital Rolled Tee",
      "-124384042": "Flecktarn Rolled Tee",
      "-1041686659": "Light Woodland Rolled Tee",
      "-803095570": "Moss Rolled Tee",
      "-581970358": "Sand Rolled Tee",
      "-383043169": "Green Digital Rolled Tee",
      "-911246676": "Gray Digital Rolled Tee",
      "-1358805678": "Peach Digital Rolled Tee",
      "-1640913999": "Fall Rolled Tee",
      "-1821405651": "Dark Woodland Rolled Tee",
      "-2112197757": "Moss Digital Rolled Tee",
      "-944236583": "Blue Digital T-Shirt",
      "-119375315": "Brown Digital T-Shirt",
      "-1745833256": "Aqua Camo T-Shirt",
      "-72123808": "Light Woodland T-Shirt",
      "-361146388": "Moss T-Shirt",
      "-790649671": "Sand T-Shirt",
      "-350429534": "Green Digital T-Shirt",
      "-21920305": "Peach Digital T-Shirt",
      "-1337136889": "Moss Digital T-Shirt",
      "-1035509522": "Blue Digital Rolled Tee",
      "-1280654411": "Brown Digital Rolled Tee",
      "-636627609": "Splinter Rolled Tee",
      "-398429748": "Contrast Camo Rolled Tee",
      "-44131320": "Cobble Rolled Tee",
      "-1439205961": "Brushstroke Rolled Tee",
      "-1215426452": "Flecktarn Rolled Tee",
      "-836223584": "Light Woodland Rolled Tee",
      "-605824745": "Moss Rolled Tee",
      "-446650592": "Green Digital Rolled Tee",
      "-81866084": "Peach Digital Rolled Tee",
      "-892866925": "Blue Digital Rolled Tee",
      "-1071228580": "Brown Digital Rolled Tee",
      "-263985023": "Splinter Rolled Tee",
      "-577715429": "Contrast Camo Rolled Tee",
      "-1825952177": "Cobble Rolled Tee",
      "-2122675472": "Peach Camo Rolled Tee",
      "-19659307": "Moss Rolled Tee",
      "-1533816490": "Sand Rolled Tee",
      "-770179777": "Green Digital Rolled Tee",
      "-1684172725": "Gray Digital Rolled Tee",
      "-1377159964": "Peach Digital Rolled Tee",
      "-370168594": "Fall Rolled Tee",
      "-662435305": "Moss Digital Rolled Tee",
      "-1989088286": "Gray Woodland Rolled Tee",
      "-278129308": "Cobble Rolled Tee",
      "-38358535": "Peach Camo Rolled Tee",
      "-2118600193": "Brushstroke Rolled Tee",
      "-2030713735": "Flecktarn Rolled Tee",
      "-1794350938": "Light Woodland Rolled Tee",
      "-2004818893": "Peach Digital Rolled Tee",
      "-1313425758": "Crosshatch Rolled Tee",
      "-1569056727": "Moss Digital Rolled Tee",
      "-734266452": "Gray Woodland Rolled Tee",
      "-1885662600": "Blue Digital Rolled Tee",
      "-1587956235": "Brown Digital Rolled Tee",
      "-104414016": "Contrast Camo Rolled Tee",
      "-395763195": "Cobble Rolled Tee",
      "-415031367": "Peach Camo Rolled Tee",
      "-698581524": "Brushstroke Rolled Tee",
      "-1003103841": "Flecktarn Rolled Tee",
      "-1108194012": "Light Woodland Rolled Tee",
      "-1414420317": "Moss Rolled Tee",
      "-1719696321": "Sand Rolled Tee",
      "-1274619057": "Green Digital Rolled Tee",
      "-968327214": "Gray Digital Rolled Tee",
      "-47387242": "Gray Woodland Rolled Tee",
      "-1437414097": "Knuckleduster Pocket Tee",
      "-1302540364": "Knuckleduster Pocket Tee",
      "-789876946": "Aqua Camo T-Shirt",
      "-1849954112": "Cobble T-Shirt",
      "-2061871235": "Peach Camo T-Shirt",
      "-1597468955": "Sand T-Shirt",
      "-1390633725": "Green Digital T-Shirt",
      "-612140592": "Gray Digital T-Shirt",
      "-926329764": "Peach Digital T-Shirt",
      "-149344005": "Fall T-Shirt",
      "-1863162705": "Crosshatch T-Shirt",
      "-2119973358": "Moss Digital T-Shirt",
      "-1334991963": "Gray Woodland T-Shirt",
      "-190850713": "Brown Digital T-Shirt",
      "-2143028600": "Flecktarn T-Shirt",
      "-1445343757": "Sand T-Shirt",
      "-1442200520": "Fall T-Shirt",
      "-1127683658": "Dark Woodland T-Shirt",
      "-807038989": "Crosshatch T-Shirt",
      "-508972165": "Moss Digital T-Shirt",
      "-1309818043": "Aqua Camo T-Shirt",
      "-1017158104": "Splinter T-Shirt",
      "-1787295142": "Contrast Camo T-Shirt",
      "-1595530954": "Cobble T-Shirt",
      "-2073466819": "Brushstroke T-Shirt",
      "-241499363": "Green Digital T-Shirt",
      "-539238497": "Gray Digital T-Shirt",
      "-902974393": "Dark Woodland T-Shirt",
      "-1201729366": "Crosshatch T-Shirt",
      "-290947780": "Moss Digital T-Shirt",
      "-590161519": "Gray Woodland T-Shirt",
      "-826682851": "Brown Digital T-Shirt",
      "-1222836145": "Aqua Camo T-Shirt",
      "-381033304": "Splinter T-Shirt",
      "-1266255070": "Contrast Camo T-Shirt",
      "-1495670839": "Cobble T-Shirt",
      "-1368232202": "Peach Camo T-Shirt",
      "-1650209447": "Brushstroke T-Shirt",
      "-2015518259": "Flecktarn T-Shirt",
      "-519866704": "Green Digital T-Shirt",
      "-154918351": "Gray Digital T-Shirt",
      "-309260341": "Dark Woodland T-Shirt",
      "-1877748526": "Moss Digital T-Shirt",
      "-878813801": "Blue Digital T-Shirt",
      "-1678180313": "Aqua Camo T-Shirt",
      "-760779389": "Splinter T-Shirt",
      "-1066546928": "Contrast Camo T-Shirt",
      "-451079566": "Cobble T-Shirt",
      "-144066805": "Flecktarn T-Shirt",
      "-453504476": "Sand T-Shirt",
      "-1712031164": "Peach Digital T-Shirt",
      "-9026230": "Fall T-Shirt",
      "-308436583": "Dark Woodland T-Shirt",
      "-487879627": "Crosshatch T-Shirt",
      "-623018983": "Gray Woodland T-Shirt",
      "-243390327": "Blue Digital T-Shirt",
      "-1927042019": "Contrast Camo T-Shirt",
      "-1447664318": "Peach Camo T-Shirt",
      "-1678030388": "Brushstroke T-Shirt",
      "-464954777": "Flecktarn T-Shirt",
      "-695484692": "Light Woodland T-Shirt",
      "-524823736": "Moss T-Shirt",
      "-753715201": "Sand T-Shirt",
      "-851386345": "Crosshatch T-Shirt",
      "-1616968492": "Moss Digital T-Shirt",
      "-639553764": "Aqua Camo T-Shirt",
      "-1591853673": "Splinter T-Shirt",
      "-363606015": "Contrast Camo T-Shirt",
      "-1431678805": "Moss T-Shirt",
      "-1371717005": "Peach Digital T-Shirt",
      "-1676993009": "Fall T-Shirt",
      "-1437287774": "Dark Woodland T-Shirt",
      "-87893115": "Crosshatch T-Shirt",
      "-749957991": "Gray Woodland T-Shirt",
      "-2003899363": "Brown Digital Armored",
      "-221013871": "Contrast Camo Armored",
      "-642816427": "Brushstroke Armored",
      "-1444936009": "Flecktarn Armored",
      "-948223507": "Moss Armored",
      "-1105406152": "Gray Digital Armored",
      "-1376307487": "Dark Woodland Armored",
      "-715258450": "Crosshatch Armored",
      "-87712721": "Aqua Camo Tactical",
      "-1051219632": "Splinter Tactical",
      "-1295578065": "Contrast Camo Tactical",
      "-1872509079": "Brushstroke Tactical",
      "-1977763107": "Flecktarn Tactical",
      "-425921574": "Moss Tactical",
      "-2013937176": "Dark Woodland Tactical",
      "-1612713544": "Moss Digital Tactical",
      "-1852943083": "Gray Woodland Tactical",
      "-1590450255": "Peach Camo Armored",
      "-294272460": "Brushstroke Armored",
      "-755823825": "Light Woodland Armored",
      "-545151868": "Moss Armored",
      "-850657255": "Sand Armored",
      "-362107129": "Peach Digital Armored",
      "-600599911": "Fall Armored",
      "-186432520": "Dark Woodland Armored",
      "-1499125891": "Crosshatch Armored",
      "-1743910321": "Moss Digital Armored",
      "-942937654": "Gray Woodland Armored",
      "-1777122048": "Brown Digital Armored",
      "-1601818893": "Aqua Camo Armored",
      "-77732707": "Cobble Armored",
      "-920387542": "Peach Camo Armored",
      "-1224156168": "Brushstroke Armored",
      "-996280542": "Flecktarn Armored",
      "-1536040515": "Green Digital Armored",
      "-1018159251": "Gray Digital Armored",
      "-778978320": "Peach Digital Armored",
      "-1706930862": "Moss Digital Armored",
      "-513320037": "Gray Woodland Armored",
      "-37756040": "Blue Digital Armored",
      "-343949576": "Brown Digital Armored",
      "-253839562": "Aqua Camo Armored",
      "-1504927213": "Splinter Armored",
      "-65057353": "Contrast Camo Armored",
      "-1869580641": "Light Woodland Armored",
      "-387696183": "Dark Woodland Armored",
      "-91431654": "Crosshatch Armored",
      "-704637951": "Gray Woodland Armored",
      "-5325525": "Blue Digital Armored",
      "-208558815": "Brown Digital Armored",
      "-978561772": "Aqua Camo Armored",
      "-1276399213": "Splinter Armored",
      "-1455842257": "Contrast Camo Armored",
      "-736103937": "Brushstroke Armored",
      "-891166845": "Flecktarn Armored",
      "-1220265912": "Light Woodland Armored",
      "-1938660703": "Sand Armored",
      "-1044266622": "Green Digital Armored",
      "-1375692288": "Gray Digital Armored",
      "-1128286338": "Peach Digital Armored",
      "-441218715": "Moss Digital Armored",
      "-2143338886": "Gray Woodland Armored",
      "-673088975": "Aqua Camo Armored",
      "-1440571724": "Splinter Armored",
      "-1269976310": "Contrast Camo Armored",
      "-515896094": "Brushstroke Armored",
      "-342023780": "Flecktarn Armored",
      "-134989226": "Light Woodland Armored",
      "-1885869170": "Fall Armored",
      "-2142614285": "Dark Woodland Armored",
      "-1431723611": "Crosshatch Armored",
      "-1670183624": "Moss Digital Armored",
      "-965125820": "Gray Woodland Armored",
      "-27813443": "Aqua Camo Armored",
      "-1903183309": "Flecktarn Armored",
      "-1425378520": "Moss Armored",
      "-1797645925": "Gray Digital Armored",
      "-1497449116": "Peach Digital Armored",
      "-2109606805": "Dark Woodland Armored",
      "-604821560": "Crosshatch Armored",
      "-305247362": "Moss Digital Armored",
      "-1230021307": "Gray Woodland Armored",
      "-1456322823": "Blue Digital Armored",
      "-617625722": "Aqua Camo Armored",
      "-1278707528": "Splinter Armored",
      "-981722081": "Contrast Camo Armored",
      "-1875005021": "Cobble Armored",
      "-1570482704": "Peach Camo Armored",
      "-1495507176": "Brushstroke Armored",
      "-1253835801": "Flecktarn Armored",
      "-2108582397": "Light Woodland Armored",
      "-1859636304": "Moss Armored",
      "-29724404": "Fall Armored",
      "-796879463": "Dark Woodland Armored",
      "-739206043": "Gray Woodland Armored",
      "-491777818": "Blue Digital Armored",
      "-1311396050": "Brown Digital Armored",
      "-1724894973": "Brushstroke Armored",
      "-1952082450": "Flecktarn Armored",
      "-1125451656": "Light Woodland Armored",
      "-1357292331": "Moss Armored",
      "-730224747": "Sand Armored",
      "-10827205": "Green Digital Armored",
      "-844536107": "Gray Digital Armored",
      "-1661565584": "Peach Digital Armored",
      "-1020571171": "Fall Armored",
      "-663913375": "Dark Woodland Armored",
      "-2107038166": "Contrast Camo Tactical",
      "-406621987": "Light Woodland Tactical",
      "-39805801": "Moss Tactical",
      "-2044736169": "Peach Digital Tactical",
      "-584877219": "Moss Digital Tactical",
      "-890218761": "Gray Woodland Tactical",
      "-164625564": "Blue Digital Tactical",
      "-2084167954": "Brown Digital Tactical",
      "-70352774": "Peach Camo Tactical",
      "-235148075": "Flecktarn Tactical",
      "-717966521": "Light Woodland Tactical",
      "-963176948": "Moss Tactical",
      "-1581790130": "Sand Tactical",
      "-232981606": "Green Digital Tactical",
      "-696138652": "Gray Digital Tactical",
      "-995024701": "Peach Digital Tactical",
      "-1451627947": "Crosshatch Tactical",
      "-1880508619": "Moss Digital Tactical",
      "-45966369": "Brushstroke Armored",
      "-5529423": "Flecktarn Armored",
      "-93907412": "Light Woodland Armored",
      "-973656755": "Sand Armored",
      "-68597119": "Green Digital Armored",
      "-634058987": "Fall Armored",
      "-394353752": "Dark Woodland Armored",
      "-21802991": "Crosshatch Armored",
      "-1690957544": "Gray Woodland Armored",
      "-815345802": "Blue Digital Tactical",
      "-668409606": "Brown Digital Tactical",
      "-391791557": "Aqua Camo Tactical",
      "-691332986": "Splinter Tactical",
      "-1414348206": "Flecktarn Tactical",
      "-2038761501": "Sand Tactical",
      "-372865991": "Green Digital Tactical",
      "-695852826": "Contrast Camo Tactical",
      "-1410479182": "Cobble Tactical",
      "-168632385": "Peach Camo Tactical",
      "-954105315": "Brushstroke Tactical",
      "-1588808080": "Flecktarn Tactical",
      "-1133548363": "Moss Tactical",
      "-1901719261": "Sand Tactical",
      "-1660098676": "Peach Digital Tactical",
      "-1756898302": "Fall Tactical",
      "-1038929500": "Dark Woodland Tactical",
      "-1277848279": "Crosshatch Tactical",
      "-2029602031": "Blue Digital Tactical",
      "-266267841": "Splinter Tactical",
      "-710189484": "Cobble Tactical",
      "-1476066552": "Brushstroke Tactical",
      "-691478385": "Flecktarn Tactical",
      "-1966847869": "Light Woodland Tactical",
      "-1185307215": "Moss Tactical",
      "-1578798898": "Green Digital Tactical",
      "-1078612882": "Gray Digital Tactical",
      "-1181708276": "Blue Digital Tactical",
      "-338725751": "Brown Digital Tactical",
      "-306915828": "Contrast Camo Tactical",
      "-67472745": "Cobble Tactical",
      "-764928141": "Peach Camo Tactical",
      "-527123508": "Brushstroke Tactical",
      "-1441018149": "Light Woodland Tactical",
      "-1209439626": "Moss Tactical",
      "-1653525114": "Sand Tactical",
      "-1467585016": "Gray Digital Tactical",
      "-2055362569": "Fall Tactical",
      "-243367945": "Dark Woodland Tactical",
      "-775995271": "Crosshatch Tactical",
      "-891342151": "Moss Digital Tactical",
      "-1131112924": "Gray Woodland Tactical",
      "-552192905": "Blue Digital Tactical",
      "-851144492": "Brown Digital Tactical",
      "-763117681": "Flecktarn Tactical",
      "-218627977": "Light Woodland Tactical",
      "-622079905": "Sand Tactical",
      "-1011221057": "Crosshatch Tactical",
      "-696070992": "Aqua Camo Tactical",
      "-1068130218": "Splinter Tactical",
      "-81291783": "Contrast Camo Tactical",
      "-456955599": "Cobble Tactical",
      "-356908184": "Green Digital Tactical",
      "-472255068": "Peach Digital Tactical",
      "-718874562": "Fall Tactical",
      "-290944179": "Dark Woodland Tactical",
      "-61102413": "Crosshatch Tactical",
      "-417039295": "Moss Digital Tactical",
      "-1251960646": "Gray Woodland Tactical",
      "-1894776690": "Blue Digital Tactical",
      "-1433601744": "Aqua Camo Tactical",
      "-1732061796": "Splinter Tactical",
      "-1016222991": "Cobble Tactical",
      "-1320253773": "Peach Camo Tactical",
      "-568827834": "Brushstroke Tactical",
      "-1913667594": "Flecktarn Tactical",
      "-128445243": "Moss Tactical",
      "-1912963485": "Green Digital Tactical",
      "-366463303": "Gray Woodland Tactical",
      "-2041177224": "Contrast Camo Tactical",
      "-1155398385": "Flecktarn Tactical",
      "-1453366902": "Light Woodland Tactical",
      "-1484825142": "Moss Tactical",
      "-1790854833": "Sand Tactical",
      "-1746466619": "Gray Digital Tactical",
      "-310692884": "Fall Tactical",
      "-549611663": "Dark Woodland Tactical",
      "-1984260867": "Blue Digital Tactical",
      "-1794790509": "Brown Digital Tactical",
      "-1233222577": "Splinter Tactical",
      "-1945915554": "Brushstroke Tactical",
      "-558967633": "Light Woodland Tactical",
      "-865390552": "Moss Tactical",
      "-1496428764": "Green Digital Tactical",
      "-1875238400": "Gray Digital Tactical",
      "-1443801746": "Peach Digital Tactical",
      "-1164183869": "Fall Tactical",
      "-988935257": "Dark Woodland Tactical",
      "-692080886": "Crosshatch Tactical",
      "-544817000": "Moss Digital Tactical",
      "-243964811": "Gray Woodland Tactical",
      "-164390831": "Splinter Tactical",
      "-1032179485": "Peach Camo Tactical",
      "-1357903345": "Brushstroke Tactical",
      "-570005509": "Flecktarn Tactical",
      "-860830384": "Light Woodland Tactical",
      "-1472005003": "Sand Tactical",
      "-260449137": "Moss Digital Tactical",
      "-1679871141": "Gray Woodland Tactical",
      "-1787244429": "Blue Digital Armored",
      "-1916361571": "Splinter Armored",
      "-393389527": "Contrast Camo Armored",
      "-79495276": "Cobble Armored",
      "-972057298": "Peach Camo Armored",
      "-691390813": "Brushstroke Armored",
      "-90662215": "Crosshatch Armored",
      "-1087527972": "Gray Woodland Armored",
      "-1815322218": "Blue Digital Tactical",
      "-1173052976": "Contrast Camo Tactical",
      "-1937783129": "Cobble Tactical",
      "-2015675042": "Brushstroke Tactical",
      "-749382575": "Light Woodland Tactical",
      "-529240433": "Moss Tactical",
      "-1432419611": "Sand Tactical",
      "-286386212": "Peach Digital Tactical",
      "-1513585278": "Moss Digital Tactical",
      "-23152835": "Gray Woodland Tactical",
      "-1831638000": "Aqua Camo Tactical",
      "-834870566": "Splinter Tactical",
      "-1721075402": "Peach Camo Tactical",
      "-1521741575": "Flecktarn Tactical",
      "-1196116022": "Light Woodland Tactical",
      "-1041380804": "Moss Tactical",
      "-1478920231": "Green Digital Tactical",
      "-1801596574": "Gray Digital Tactical",
      "-2060438905": "Peach Digital Tactical",
      "-558439025": "Dark Woodland Tactical",
      "-810727556": "Crosshatch Tactical",
      "-1112300663": "Moss Digital Tactical",
      "-752003681": "Blue Digital Tactical",
      "-310736323": "Brown Digital Tactical",
      "-1994206361": "Brushstroke Tactical",
      "-1696827686": "Flecktarn Tactical",
      "-1389126776": "Light Woodland Tactical",
      "-659033444": "Moss Tactical",
      "-350251157": "Sand Tactical",
      "-1232102300": "Green Digital Tactical",
      "-1058426600": "Gray Digital Tactical",
      "-1267427286": "Peach Digital Tactical",
      "-969720921": "Fall Tactical",
      "-1880076510": "Dark Woodland Tactical",
      "-1716100434": "Crosshatch Tactical",
      "-1363631640": "Aqua Camo Tactical",
      "-1616968779": "Splinter Tactical",
      "-782375118": "Contrast Camo Tactical",
      "-38223897": "Peach Camo Tactical",
      "-426077781": "Brushstroke Tactical",
      "-1876237132": "Green Digital Tactical",
      "-1981460": "Fall Tactical",
      "-1391387060": "Dark Woodland Tactical",
      "-479786249": "Crosshatch Tactical",
      "-45048240": "Brown Digital Armored",
      "-1391718736": "Aqua Camo Armored",
      "-1145459701": "Splinter Armored",
      "-233334586": "Peach Camo Armored",
      "-1922347073": "Sand Armored",
      "-2138266426": "Moss Digital Armored",
      "-1429472956": "Gray Woodland Armored",
      "-420653005": "Aqua Camo Tactical",
      "-1341199753": "Contrast Camo Tactical",
      "-1510025641": "Cobble Tactical",
      "-53214208": "Moss Tactical",
      "-1694538619": "Gray Digital Tactical",
      "-1941846262": "Peach Digital Tactical",
      "-2019902020": "Fall Tactical",
      "-2053677691": "Blue Digital Armored",
      "-1886097025": "Brown Digital Armored",
      "-835916328": "Aqua Camo Armored",
      "-606500563": "Splinter Armored",
      "-1449909081": "Contrast Camo Armored",
      "-1219379166": "Cobble Armored",
      "-1986599763": "Peach Camo Armored",
      "-1755545544": "Brushstroke Armored",
      "-2084644611": "Light Woodland Armored",
      "-1687287502": "Gray Digital Armored",
      "-870258025": "Peach Digital Armored",
      "-1466096752": "Dark Woodland Armored",
      "-430203124": "Crosshatch Armored",
      "-1059662845": "Gray Woodland Armored",
      "-914445721": "Aqua Camo Armored",
      "-611561854": "Splinter Armored",
      "-1396051710": "Contrast Camo Armored",
      "-2021284230": "Peach Camo Armored",
      "-1559306868": "Brushstroke Armored",
      "-38268223": "Sand Armored",
      "-266705933": "Green Digital Armored",
      "-527383328": "Gray Digital Armored",
      "-2120972571": "Moss Digital Armored",
      "-1412113563": "Gray Woodland Armored",
      "-116524123": "Blue Digital Armored",
      "-2084761343": "Brown Digital Armored",
      "-566065938": "Splinter Armored",
      "-336781245": "Contrast Camo Armored",
      "-1833013785": "Brushstroke Armored",
      "-1157874074": "Moss Armored",
      "-1000550105": "Sand Armored",
      "-1778141810": "Green Digital Armored",
      "-44235705": "Fall Armored",
      "-1480074978": "Crosshatch Armored",
      "-1186497507": "Moss Digital Armored",
      "-372444226": "Blue Digital Armored",
      "-1299380929": "Brown Digital Armored",
      "-777900304": "Contrast Camo Armored",
      "-1137703924": "Cobble Armored",
      "-302913649": "Peach Camo Armored",
      "-118293099": "Brushstroke Armored",
      "-491400933": "Flecktarn Armored",
      "-1787251042": "Light Woodland Armored",
      "-1311805621": "Sand Armored",
      "-1002493789": "Green Digital Armored",
      "-1926612358": "Gray Digital Armored",
      "-1596890680": "Peach Digital Armored",
      "-1142657855": "Aqua Camo Armored",
      "-530041396": "Contrast Camo Armored",
      "-767878798": "Cobble Armored",
      "-416267428": "Brushstroke Armored",
      "-832040508": "Light Woodland Armored",
      "-236726085": "Sand Armored",
      "-398253739": "Peach Digital Armored",
      "-628324888": "Fall Armored",
      "-897194533": "Dark Woodland Armored",
      "-1145321401": "Crosshatch Armored",
      "-1375195936": "Moss Digital Armored",
      "-1859456222": "Gray Woodland Armored",
      "-254517089": "Blue Digital Armored",
      "-991997113": "Aqua Camo Armored",
      "-1614739081": "Cobble Armored",
      "-1156988920": "Brushstroke Armored",
      "-1385880385": "Flecktarn Armored",
      "-390816927": "Light Woodland Armored",
      "-540628949": "Green Turtle Mask",
      "-233354036": "Brown Turtle Mask",
      "-63348464": "Moss Turtle Mask",
      "-1914698685": "Swamp Turtle Mask",
      "-562532858": "White Mouse Mask",
      "-2113129173": "Tan Mouse Mask",
      "-1815717729": "Gray Mouse Mask",
      "-1262395208": "Black & Green Tech Mask",
      "-289989431": "Blue T Tech Mask",
      "-119721707": "Pink T Tech Mask",
      "-1962865352": "Black & Pink Tech Mask",
      "-307572086": "Green Dot Tech Mask",
      "-1486436861": "Orange Dot Tech Mask",
      "-1705464857": "Blue Dot Tech Mask",
      "-469188798": "Pink Dot Tech Mask",
      "-757654305": "Green T Tech Mask",
      "-58429383": "Orange T Tech Mask",
      "-118382140": "Stone Hyena Mask",
      "-2114650851": "Cream Sports Track Top",
      "-1035630144": "Yellow DS Sports Track Top",
      "-276372414": "Dark Stone Sports Track Top",
      "-554449356": "Smoke Sports Track Top",
      "-2080276166": "Orange Prolaps Sports Track Top",
      "-2133084323": "Pink Tucked Rolled Shirt",
      "-1812275813": "Beige Tucked Rolled Shirt",
      "-1540325882": "Gray Tucked Rolled Shirt",
      "-1516732202": "Salmon Tucked Rolled Shirt",
      "-1207753301": "Dark Pink Tucked Rolled Shirt",
      "-886813715": "Yellow Tucked Rolled Shirt",
      "-614077328": "Cyan Tucked Rolled Shirt",
      "-443258981": "Beige Tucked Short Shirt",
      "-1035132659": "Salmon Tucked Short Shirt",
      "-1264613966": "Dark Pink Tucked Short Shirt",
      "-859621891": "Yellow Tucked Short Shirt",
      "-1242101659": "Cyan Tucked Short Shirt",
      "-1014566304": "Pink Untucked Rolled Shirt",
      "-1176117474": "Beige Untucked Rolled Shirt",
      "-1735502652": "Pink Untucked Short Shirt",
      "-1496190645": "Beige Untucked Short Shirt",
      "-95086512": "Salmon Untucked Short Shirt",
      "-506763459": "Yellow Untucked Short Shirt",
      "-824210433": "Black Bigness Bomber",
      "-594434205": "Yellow Bigness Bomber",
      "-1014696658": "Black 22 Bomber",
      "-1246832254": "Black Detail Bomber",
      "-568350105": "Yellow Detail Bomber",
      "-802091382": "Black Trickster Bomber",
      "-58169544": "Yellow Trickster Bomber",
      "-536039092": "Yellow Detail Bomber Zipped",
      "-234597061": "Black Trickster Bomber Zipped",
      "-1434040768": "Yellow Trickster Bomber Zipped",
      "-1398571139": "Black 22 Bomber Open",
      "-489002010": "Black Detail Bomber Open",
      "-730607847": "Yellow Detail Bomber Open",
      "-976592203": "Black Open",
      "-1231305640": "Charcoal Open",
      "-294646169": "Pink Geometric Open",
      "-114744359": "OJ Open",
      "-806137490": "Splat Open",
      "-596940194": "Blue Plaid Open",
      "-707601087": "Blue Gingham Open",
      "-526781745": "Red Patterned Open",
      "-1459181266": "Gray Open",
      "-89413606": "Brown Patterned Open",
      "-857355121": "Grayscale Patterned Open",
      "-376535584": "Black Dotted Open",
      "-1838655599": "Baby Blue Dotted Open",
      "-1548846563": "White Dotted Open",
      "-1676603581": "Ash Open",
      "-52309785": "White Open",
      "-296799294": "Skate Güffy Open",
      "-533948547": "Red Güffy Open",
      "-457695060": "Moss Leopard Open",
      "-1941183732": "Burgundy Garland Open",
      "-2126197506": "Black Garland Open",
      "-734817376": "Blue Leaves Open",
      "-139371877": "Red Leaves Open",
      "-1448984962": "Teal Leaves Open",
      "-1854468568": "Navy Posies Open",
      "-1279241542": "Blue Posies Open",
      "-974129387": "Lilac Floral Open",
      "-1262922584": "Floral Open",
      "-509628728": "Urban Gradient Open",
      "-1117469379": "Blue Savanna Open",
      "-1895602057": "Peach Botanical Open",
      "-1272270135": "Turquoise Botanical Open",
      "-1728281643": "White Office Unbuttoned",
      "-1489625016": "Cream Office Unbuttoned",
      "-2044568035": "Shell Office Unbuttoned",
      "-1802765584": "Dotty Office Unbuttoned",
      "-1914507882": "Rust Check Office Unbuttoned",
      "-1677424163": "Blue Check Office Unbuttoned",
      "-1447647935": "Big Blue Check Office Unbuttoned",
      "-1947899485": "Black Office Unbuttoned",
      "-267243009": "Beige Office Unbuttoned",
      "-28356999": "Ivory Office Unbuttoned",
      "-726893772": "Stone Office Unbuttoned",
      "-488466528": "Berry Office Unbuttoned",
      "-736272367": "White Champs Sports Tee",
      "-1026146941": "White Camo Sports Tee",
      "-257605507": "Purple Basketball Sports Tee",
      "-513105400": "Purple Champs Sports Tee",
      "-719877790": "Camo Bigness Sports Tee",
      "-643788168": "White Bigness Sports Tee",
      "-875825457": "White Baseball Sports Tee",
      "-1105339533": "White Broker Sports Tee",
      "-1337442360": "White Basketball Sports Tee",
      "-830144618": "White Office",
      "-448352987": "Cream Office",
      "-1020306110": "Light Blue Office",
      "-683375324": "Blue Stripes Office",
      "-63516920": "Rust Check Office",
      "-428760194": "Blue Check Office",
      "-1397444603": "Big Blue Check Office",
      "-818708225": "Navy Office",
      "-1732668412": "Black Office",
      "-1265513548": "Beige Office",
      "-1436403883": "Stone Office",
      "-1916371426": "Ash Office",
      "-1904545555": "Purple B Polo Shirt",
      "-1238646706": "White Bigness Polo Shirt",
      "-1019797200": "Axe of Fury Tee",
      "-1049748066": "Qub3d Qub3s Tee",
      "-258606099": "Get Metal Tee",
      "-1335820389": "Purple Sports Long Sleeve",
      "-1640539320": "Gray Sports Long Sleeve",
      "-1946601780": "Panic Sports Long Sleeve",
      "-624503710": "Purple White Sports Long Sleeve",
      "-949419072": "Khaki Service Shirt Tucked",
      "-1324132591": "Green Service Shirt Tucked",
      "-1665225112": "Black Service Shirt Tucked",
      "-1099435558": "Gray Service Shirt Tucked",
      "-2055340057": "Blue Service Shirt Tucked",
      "-701862172": "Khaki Short Service Shirt Tucked",
      "-351135565": "Green Short Service Shirt Tucked",
      "-230676721": "Beige Short Service Shirt Tucked",
      "-415330048": "Black Short Service Shirt Tucked",
      "-47465254": "Gray Short Service Shirt Tucked",
      "-983355377": "Red Popped Leather Jacket",
      "-1228696880": "Black Popped Leather Jacket",
      "-399084107": "Tan Popped Leather Jacket",
      "-2092717103": "Gray Popped Leather Jacket",
      "-2038534265": "Brown Cross Check Relaxed",
      "-313714182": "Mustard Stripe Check Relaxed",
      "-41174409": "White Bold Check Relaxed",
      "-1971628984": "Green Bold Check Relaxed",
      "-1506964564": "Black Bold Check Relaxed",
      "-1209520351": "Mustard Bold Check Relaxed",
      "-1995288190": "White Double Shirt Relaxed",
      "-705032579": "Purple Cross Check Relaxed",
      "-470046080": "Tan Cross Check Relaxed",
      "-918326000": "Brown Stripe Check Relaxed",
      "-1753378427": "Blue Stripe Check Relaxed",
      "-256850966": "Pale Blue Stripe Check Relaxed",
      "-1599167299": "Gray Double Shirt Open",
      "-979538278": "Navy Double Shirt Open",
      "-1889140180": "Orange Double Shirt Open",
      "-673443049": "Pink Double Shirt Open",
      "-375998836": "Green Double Shirt Open",
      "-58401688": "Red Double Shirt Open",
      "-1968265627": "Orange Double Shirt",
      "-1636315657": "Pink Double Shirt",
      "-1358336230": "Green Double Shirt",
      "-788942086": "Red Double Shirt",
      "-1462174410": "Dark Slacks",
      "-1960626955": "Dark Red Slacks",
      "-839042392": "Powder Blue Slacks",
      "-1077699019": "Ash Slacks",
      "-2025604596": "Navy Slacks",
      "-39874008": "Dark Blue Slacks",
      "-1836434433": "Green Slacks",
      "-595893122": "White Slacks",
      "-1412267219": "Blue Slacks",
      "-999476126": "Purple Slacks",
      "-152200862": "Olive Slacks",
      "-1078031387": "Cream Sports Track Pants",
      "-1188823380": "Gray Heat Sports Track Pants",
      "-398618784": "Cyan Sports Track Pants",
      "-658804636": "Black Sports Track Pants",
      "-1200869434": "Crimson Sports Track Pants",
      "-29672605": "Navy Sports Track Pants",
      "-335997217": "Blue DS Sports Track Pants",
      "-2117614978": "Red DS Sports Track Pants",
      "-1489924783": "Dark Stone Sports Track Pants",
      "-1802311660": "Snow Sports Track Pants",
      "-1561996752": "Mustard Heat Sports Track Pants",
      "-2052110043": "Smoke Sports Track Pants",
      "-2035082805": "Orange Heat Sports Track Pants",
      "-1744047377": "Navy Large Cargos",
      "-1553495642": "Khaki Large Cargos",
      "-1255002821": "Dark Gray Large Cargos",
      "-1993046870": "Black Chino Shorts",
      "-1106514344": "Gray Plaid Chino Shorts",
      "-460280523": "White Plaid Chino Shorts",
      "-873825279": "Olive Chino Shorts",
      "-1397077067": "Dark Gray Chino Shorts",
      "-508512835": "Yellow Chino Shorts",
      "-824045536": "Silver Plaid Chino Shorts",
      "-668007705": "T-Shirt",
      "-310825605": "T-Shirt",
      "-1132377204": "T-Shirt",
      "-1577445762": "T-Shirt",
      "-219400383": "T-Shirt",
      "-879105891": "T-Shirt",
      "-1099215264": "T-Shirt",
      "-828436702": "T-Shirt",
      "-137797258": "T-Shirt",
      "-381107083": "T-Shirt",
      "-1542374909": "T-Shirt",
      "-1764909188": "T-Shirt",
      "-1112707781": "T-Shirt",
      "-140949427": "T-Shirt",
      "-1653697543": "T-Shirt",
      "-1589143763": "T-Shirt",
      "-821202248": "T-Shirt",
      "-988389686": "T-Shirt",
      "-2014714778": "T-Shirt",
      "-93989720": "T-Shirt",
      "-699396995": "T-Shirt",
      "-395169599": "T-Shirt",
      "-1285798250": "T-Shirt",
      "-696482208": "T-Shirt",
      "-460447101": "T-Shirt",
      "-1992922159": "T-Shirt",
      "-57515238": "T-Shirt",
      "-1209553549": "T-Shirt",
      "-1507063300": "T-Shirt",
      "-598510006": "T-Shirt",
      "-896347447": "T-Shirt",
      "-1865261231": "T-Shirt",
      "-1091224682": "T-Shirt",
      "-1385719685": "T-Shirt",
      "-1012808465": "T-Shirt",
      "-107794007": "T-Shirt",
      "-809858757": "T-Shirt",
      "-529061196": "T-Shirt",
      "-297974208": "T-Shirt",
      "-50142261": "T-Shirt",
      "-1464911063": "T-Shirt",
      "-555373147": "T-Shirt",
      "-869332936": "T-Shirt",
      "-504296903": "T-Shirt",
      "-1870862526": "T-Shirt",
      "-788797361": "T-Shirt",
      "-944908877": "T-Shirt",
      "-977840838": "T-Shirt",
      "-1234258263": "T-Shirt",
      "-1459840059": "T-Shirt",
      "-1312435354": "T-Shirt",
      "-1669158688": "T-Shirt",
      "-1974369154": "T-Shirt",
      "-302901051": "T-Shirt",
      "-432198064": "T-Shirt",
      "-201864763": "T-Shirt",
      "-895387879": "T-Shirt",
      "-662498596": "T-Shirt",
      "-1424508922": "T-Shirt",
      "-1126278253": "T-Shirt",
      "-742389438": "T-Shirt",
      "-931073340": "T-Shirt",
      "-280903611": "T-Shirt",
      "-503372352": "T-Shirt",
      "-1525798769": "T-Shirt",
      "-1689774845": "T-Shirt",
      "-1018108652": "T-Shirt",
      "-1315552865": "T-Shirt",
      "-30287147": "T-Shirt",
      "-2128396503": "T-Shirt",
      "-1611203995": "T-Shirt",
      "-1636904471": "T-Shirt",
      "-1339198106": "T-Shirt",
      "-684833945": "T-Shirt",
      "-379131944": "T-Shirt",
      "-1289520002": "T-Shirt",
      "-2050350644": "T-Shirt",
      "-1115877071": "T-Shirt",
      "-599077172": "T-Shirt",
      "-28854535": "T-Shirt",
      "-349957966": "T-Shirt",
      "-1228560394": "T-Shirt",
      "-1647592474": "Black Armored",
      "-1341464476": "Gray Armored",
      "-393752255": "Smoke Armored",
      "-95062820": "White & Green Armored",
      "-227016798": "Black Armored",
      "-618475272": "Gray Armored",
      "-991550337": "Ash Armored",
      "-1081599549": "White Armored",
      "-129430716": "White & Green Armored",
      "-2028958832": "Black Armored",
      "-1300438428": "Gray Armored",
      "-2012115570": "Ash Armored",
      "-1758712893": "White Armored",
      "-825056555": "Brown Armored",
      "-95651384": "White & Green Armored",
      "-402286506": "Black Armored",
      "-20658732": "Gray Armored",
      "-693701223": "Ash Armored",
      "-1320408348": "Red & Gray Armored",
      "-955558302": "Brown Armored",
      "-700886724": "Ash Armored",
      "-2014890855": "White Armored",
      "-1404175002": "Brown Armored",
      "-909133739": "Smoke Armored",
      "-1341487925": "White & Green Armored",
      "-2097220484": "White & Green Armored",
      "-1634855663": "Black Armored",
      "-1336657763": "Gray Armored",
      "-974494775": "Ash Armored",
      "-620294650": "Red & Gray Armored",
      "-322424440": "Brown Armored",
      "-19540573": "Smoke Armored",
      "-1345963521": "Red & Gray Armored",
      "-559835211": "Brown Armored",
      "-154065358": "Ash Armored",
      "-450067735": "White Armored",
      "-620564858": "Brown Armored",
      "-1104038684": "Smoke Armored",
      "-1348266041": "White & Green Armored",
      "-432820384": "Brown Armored",
      "-945982924": "Smoke Armored",
      "-1723624063": "White & Green Armored",
      "-119648548": "Red & Gray Armored",
      "-374951827": "Smoke Armored",
      "-1202555345": "Black Armored",
      "-570211952": "Gray Armored",
      "-1815761642": "Ash Armored",
      "-847142775": "Red & Gray Armored",
      "-1835831229": "Ash Armored",
      "-2021696997": "Brown Armored",
      "-533045314": "Black Armored",
      "-123203431": "Ash Armored",
      "-1479446803": "White Armored",
      "-1786066336": "Red & Gray Armored",
      "-1007933662": "Brown Armored",
      "-1313701201": "Smoke Armored",
      "-1164942678": "Black Armored",
      "-1337569770": "Gray Armored",
      "-1944091191": "White Armored",
      "-2021983100": "Brown Armored",
      "-2063317122": "Black Armored",
      "-1853693833": "White Armored",
      "-1773720288": "Black Armored",
      "-1600044588": "Gray Armored",
      "-1815992302": "Ash Armored",
      "-1501770361": "White Armored",
      "-1406103725": "Baby Blue Tank",
      "-167304449": "Pink Striped Tank",
      "-63928837": "Crosses Bikini",
      "-1629661498": "Orange Striped Bikini",
      "-1777223233": "Pink Patterned Bikini",
      "-1991794649": "Island Print Bikini",
      "-72856977": "Tan Flip-Flops",
      "-666238029": "Cork Flip-Flops",
      "-220251939": "Lobster Flip-Flops",
      "-1381355920": "Pink Flip-Flops",
      "-1865583061": "Swingers Flip-Flops",
      "-1238992735": "Pin Up Girl Chestnut",
      "-1947261901": "Pin Up Girl Blonde",
      "-771018642": "Pin Up Girl Auburn",
      "-1486169302": "Pin Up Girl Black",
      "-2052614252": "Messy Bun Black",
      "-1818610823": "Messy Bun Brown",
      "-2047875219": "Barfs Tank",
      "-1204499466": "Pink Tank",
      "-1599038226": "Pink Striped Tank",
      "-890310294": "Lime Striped Tank",
      "-1631086312": "Red Tank",
      "-787841635": "Navy Tank",
      "-1548676226": "Parrot Print Shirt",
      "-252634032": "White Bikini",
      "-80269092": "Crosses Bikini",
      "-1721022302": "Orange Striped Bikini",
      "-1870996647": "Island Print Bikini",
      "-1525720089": "Blue Shorts",
      "-210905108": "Blue Bikini",
      "-1685936105": "Camo Bikini",
      "-1379382110": "Punk Bikini",
      "-788622578": "Pink Patterned Bikini",
      "-481740893": "Island Print Bikini",
      "-1771192668": "Light Pink Shorts",
      "-266743188": "Floral Bikini",
      "-342837943": "Pale Blue Shorts",
      "-127676689": "Red Shorts",
      "-817431378": "Beige Shorts",
      "-585000853": "White Striped Shorts",
      "-1998716701": "Floral Bangles",
      "-994210796": "Black Heart Necklace",
      "-259791968": "Pink Heart Necklace",
      "-840010097": "Stocking",
      "-1893001529": "Santa Sweater",
      "-1663258070": "Elf Sweater",
      "-1912826031": "Red Pajama Top",
      "-992377590": "Stripy Pajama Top",
      "-215916135": "Winter Pajama Top",
      "-1363024813": "Stripy Scarf",
      "-1258669849": "Stripy Scarf",
      "-1565256613": "Joy Scarf",
      "-1904219185": "Snowflake Scarf",
      "-382099366": "Santa T-Shirt",
      "-680493880": "Elf T-Shirt",
      "-713104178": "Santa T-Shirt",
      "-1835344121": "Snowman T-Shirt",
      "-1579909766": "Reindeer T-Shirt",
      "-1095857589": "Snowman Mask",
      "-125138072": "Santa T-Shirt",
      "-574486285": "Black Camisole",
      "-137717839": "Pink Camisole",
      "-724207846": "Cream Camisole",
      "-293229958": "Purple Camisole",
      "-62863888": "Yellow Camisole",
      "-1889309657": "Gray Camisole",
      "-185029212": "White Blouse",
      "-1386045831": "Black Blouse",
      "-680725875": "Tan Blouse",
      "-454161009": "Gray Blouse",
      "-1174312584": "Yellow Camisole",
      "-1192794304": "Light Blue Camisole",
      "-2027256889": "Gray Camisole",
      "-1670074789": "Orange Camisole",
      "-326349175": "Leopard Camisole",
      "-796060021": "Pink Camisole",
      "-570249206": "White Camisole",
      "-876115052": "Black Camisole",
      "-108599534": "Red Camisole",
      "-257698508": "Blue Camisole",
      "-1675837039": "Bullet Hockey",
      "-92701111": "Vinewood Hockey",
      "-2131217134": "Vile Zombie Hockey",
      "-2008366153": "Nightmare Skull Hockey",
      "-1173510340": "Electric Skull Hockey",
      "-2002117972": "Tourist Hockey",
      "-686966926": "Hound Hockey",
      "-448244761": "Wolf Hockey",
      "-1968716640": "Skull Hockey",
      "-1535707074": "Stitched Hockey",
      "-45733409": "Pale Stitched Hockey",
      "-472578723": "Neon Warrior",
      "-564233616": "Deadeye Warrior",
      "-194009454": "Stone Warrior",
      "-545293122": "Lightning Warrior",
      "-851847117": "Wooden Warrior",
      "-110725741": "Olive Platforms",
      "-893446075": "Turquoise Platforms",
      "-544988844": "Candy Platforms",
      "-716305176": "Blue Platforms",
      "-588202840": "Earth Platforms",
      "-2064347987": "Hot Pink Crush Platforms",
      "-192254912": "White Dipped Patent Heels",
      "-1026258731": "Zebra Patent Heels",
      "-720694853": "Red Patent Heels",
      "-1099030254": "Tight Bun Auburn",
      "-307724442": "Tight Bun Chestnut",
      "-637872117": "Tight Bun Blonde",
      "-663797501": "Twisted Bob Chestnut",
      "-1609936838": "Twisted Bob Brown",
      "-1880477702": "Twisted Bob Blonde",
      "-1723375047": "Yellow Tux",
      "-782740922": "Olive Tux",
      "-518515935": "Gray Woven Tux",
      "-740689755": "Black & Cream Tux",
      "-991143222": "Leopard Tux",
      "-1218003009": "Red Tux",
      "-1739423337": "Pink Plaid Tux",
      "-1975655054": "Blue Tux",
      "-616702410": "Black & Cream Blazer",
      "-1290404315": "Red Plaid Blazer",
      "-311954744": "Burgundy Blazer",
      "-1610262524": "Green Blazer",
      "-1848198233": "Leopard Blazer",
      "-467866094": "Orange Camisole",
      "-673000034": "Leopard Camisole",
      "-1984939718": "Pink Camisole",
      "-877868759": "Light Blue Camisole",
      "-1108464212": "Gray Camisole",
      "-463435307": "White Blouse",
      "-1699154297": "Gray Striped Blouse",
      "-1393091837": "Pink Striped Blouse",
      "-1086603380": "Gray Blouse",
      "-1396236192": "Black & White Vest",
      "-1423565538": "Brown Vest",
      "-531069050": "Blue Vest",
      "-1737693343": "Navy Vest",
      "-1833772051": "Black Vest",
      "-510346": "Silver Vest",
      "-963624029": "Olive Vest",
      "-1228233704": "White & Red Vest",
      "-1114134984": "Country Plaid Shirt",
      "-1315598796": "Red Check Shirt",
      "-736242876": "Two-Tone Shirt",
      "-2099007279": "Green Plaid Shirt",
      "-627885194": "Red Plaid Shirt",
      "-354362351": "Light Blue Shirt",
      "-61964564": "Navy Fade Shirt",
      "-553684252": "Blue Suit",
      "-2036793843": "Black & Cream Stripe Suit",
      "-792603031": "Purple Suit",
      "-2091500657": "Sky Blue Suit",
      "-1064323583": "Yellow Suit",
      "-1285645409": "Red Suit",
      "-451117286": "Pink Suit",
      "-426577952": "Vibrant Pencil",
      "-1294759838": "Blue Pencil",
      "-1484789554": "Fuchsia Pencil",
      "-1701685280": "Houndstooth Pencil",
      "-1471548593": "Gray Panel Pencil",
      "-548773557": "Sky Blue Pencil",
      "-1248588321": "Floral Pencil",
      "-1023629136": "Black & White Pencil",
      "-1439860974": "Leopard Pencil",
      "-1043324769": "Pink Bow Scarf",
      "-1277786964": "Red Bow Scarf",
      "-434837208": "Leopard Bow Scarf",
      "-666088041": "White Bow Scarf",
    },
  },
  props: {
    male: {
      1728834: "Crimson Suit Fedora",
      5724803: "Purple The Diamond Cap",
      6720512: "Red Snowflake Cap",
      7370356: "Blue Fame or Shame Shades",
      8886212: "Shatter Pattern Helmet",
      15147410: "Contrast Camo Dual Lens",
      16791183: "Toothy Grin Forwards Cap",
      20986019: "Dark Woodland Beanie Cap",
      21056435: "Silver Aviators Brown Tint",
      21258010: "Flight Helmet",
      22408663: "Blue & Orange Flight Helmet",
      28316324: "Slate Cop Frames",
      28958416: "Gold Pendulus Timestar",
      32981478: "Blue Chain Mod Helmet",
      35058608: "Ace of Spades Dome",
      39846427: "Splat Squash Cap",
      42741368: "Enema Smoke Shades",
      43684460: "Vibe Helmet",
      44589953: "Black Riot",
      46317436: "Purple Vine Aviators",
      49071095: "White SC Broker Cap",
      51092102: "Platinum Onyx Stud (L)",
      51730517: "Green Houndstooth Low Beanie",
      53610744: "Platinum Noir Square Stud (R)",
      53623951: "Green Digital Beanie Cap",
      58739900: "Silver Skull Stud (L)",
      67840136: "Fall Boonie Down",
      72993486: "White Janitor Frames",
      73549465: "Gold Gem Stud (L)",
      76217495: "Red Trilby",
      81473465: "Aqua Camo Boonie Up",
      84216645: "Classic Tree",
      85613815: "Gold Gem Stud (R)",
      86888593: "White Steel Shades",
      89379350: "Hawaiian Snow Copper",
      92744107: "Deadline Blue",
      96679142: "Fall Beret",
      97007497: "Gray Bowler Hat",
      99127719: "Cubist Helmet",
      99295936: "Matte All Black Biker",
      103881577: "Black Trend Glasses",
      108065461: "Green Flying Bravo Cap",
      110904666: "Brown Dual Lens",
      114660105: "Black Vom Feuer Cap",
      115105915: "Black Gem Stud (R)",
      115207322: "Blue Garrison Cap",
      116002452: "Black Riot",
      117937566: "Captain Peaked Cap",
      119253090: "Black Hotdogs Cap",
      124730587: "Green Digital Scope Night Vision",
      126080797: "Black Shielded Riot",
      128401301: "Chocolate Boonie Down",
      128536382: "Orange Retro Bubble",
      130534069: "Leopard Combat Helmet",
      131002837: "Red JC Helmet",
      136708667: "Onyx Wraparounds",
      142221196: "Platinum Pendulus Gravity",
      143902134: "Wolf Forwards Cap",
      145020657: "Black Skull Stud (L)",
      146756301: "Gray Woodland Riot",
      147717054: "Red Low Beanie",
      147944037: "Pink Hotdogs Cap",
      148387170: "Pink JC Helmet",
      152454915: "Silver SASS Bracelet",
      152542226: "Snakeskin Helmet",
      154208423: "Green Spiked",
      156190197: "Red Camo Garrison Cap",
      158494981: "Splinter Beret",
      158898383: "Cobble Helmet",
      166078557: "Leopard Full Face",
      166621255: "Green Pattern Quad Lens",
      168579644: "MP Riot",
      171726882: "Green Urban Deep Shades",
      173693630: "Black Autumn Shades",
      173882057: "Contrast Camo Boonie Up",
      177336864: "Blue Wave Backwards Cap",
      178920856: "Gold Illusion Square Studs",
      181266941: "Taco Canvas Hat",
      188532270: "Crosshatch Utility Cap",
      190143688: "Aqua Camo Dual Lens",
      191459960: "Pink Gold Kronos Quantum",
      194711301: "Bold Abstract Bigness Cap",
      197167874: "Black & Red Trilby",
      200799052: "Silver Pendulus Timestar",
      203458532: "Pale Blue Retro Bubble",
      204475861: "Benny's Fitted Cap",
      206451116: "White & Red Peaked Cap",
      207854850: "Roundel Mod",
      215114984: "Green The Diamond Cap",
      215712749: "Light Woodland Low Beanie",
      218634482: "Moss Quad Lens",
      230097217: "Pink LS Diamond Cap",
      235347453: "Contrast Camo Utility Cap",
      244401310: "Green Digital Scope Night Vision",
      246106447: "Blue Bowler Hat",
      252304375: "Black Jag Mod Helmet",
      252475373: "Orange LS Diamond Cap",
      253027340: "Tread Wrist Chain (L)",
      255890565: "Splinter Shielded Riot",
      256464108: "Black Flight Helmet",
      258657662: "White Sports",
      259806491: "Gray Digital Beanie Cap",
      264221625: "Black SASS Wrist Piece",
      267673462: "Gold Fifty Kronos Ära",
      272454777: "Light Woodland Boonie Down",
      278970991: "Black Superior Glasses",
      283794379: "Horizon Aviators",
      286613576: "Gray Yeti Cap",
      288210625: "Cheeky Elf Woolly Trail",
      295420667: "Flecktarn Dual Lens",
      298270133: "Yellow Cluckin' Bell Cap",
      304998684: "Blood Casuals",
      315287472: "Charcoal Janitor Frames",
      321413664: "Red Fame or Shame Kronos",
      328193308: "Black Scope Night Vision",
      328215936: "Blue Wave Forwards Cap",
      328510719: "Digital Helmet",
      328711652: "Crimson Helmet",
      329243676: "Brown Quad Lens",
      331272413: "Peach Digital Beret",
      333461191: "Shell Trend Glasses",
      333679875: "Yellow Cluckin' Bell Cap",
      333770097: "Gold Skull Stud (L)",
      334673705: "Charcoal Cop Frames",
      339914149: "Platinum Skull Studs",
      341110495: "Green Polarized Shades",
      348993233: "Burst Helmet",
      358996754: "White Boonie Down",
      359816857: "Steel Refined Warm Tint",
      365866200: "Purple Tree",
      378395720: "Clan Tartan Bobble",
      382778588: "Silver Dipped Trends",
      383916577: "Ash Bowler Hat",
      388069486: "Gray Digital Boonie Up",
      394959091: "Ash Low Beanie",
      396932399: "Sprunk Helmet",
      402857924: "Skull and Snake Dome",
      403180716: "Orange Flight Helmet",
      405239741: "Hawaiian Snow Tortoiseshell",
      405591683: "Xero Gas Cap",
      407408495: "Navy Garrison Cap",
      408053958: "White Dual Lens",
      408685188: "Blue LS Diamond Cap",
      408992005: "Gold Grid Square Studs",
      410377408: "Splinter Combat Helmet",
      412888723: "Red Güffy Cap",
      414434965: "Copper Elvis",
      419221971: "Brown Top Hat",
      420936259: "Cream Shielded Riot",
      421024602: "Shell Superior Glasses",
      421263445: "Gray Woodland Dual Lens",
      422710328: "White LS Diamond Cap",
      424054912: "Elf Hat",
      424941891: "Gold Enduring Watch",
      425131870: "Carbon Covgari Supernova",
      426688885: "Silver Pendulus Gravity",
      428087961: "Gold Polarized Hipsters",
      428827347: "Moss Digital Utility Cap",
      429467005: "Tiger Full Face",
      431694621: "White Retro Bubble",
      436032620: "Peach Digital Boonie Down",
      436838315: "Stars and Stripes Tied",
      441293198: "Colors Yeti Cap",
      441717456: "Contrast Camo Beret",
      443051646: "Spiked Gauntlet (R)",
      443283025: "Red Flying Bravo Cap",
      444212231: "Black Ammu-Nation Cap",
      445581891: "Splinter Shielded Riot",
      449607807: "Slate Mod Canvas",
      461502230: "Light Brown Beanie Cap",
      461861685: "Deadline Blue",
      464042304: "Cobble Utility Cap",
      464135028: "Link Trickster Snapback",
      468709395: "Black Sports",
      468873691: "Gold Tint Aviators",
      469826475: "Splinter Deep Shades",
      469860910: "Blue Digital Boonie Up",
      473967350: "White Lucky Plucker Cap",
      476893956: "Taco Bomb Cap",
      479061208: "Platinum Noir Square Stud (L)",
      480702126: "Blue Outlaw Goggles",
      481083063: "White Vom Feuer Cap",
      482979800: "Feathers Spiked",
      484383085: "Black Watch",
      485861484: "Gold Diamond Stud (R)",
      486234966: "Square Wrist Chain (R)",
      490176595: "Moss Digital Cap",
      491405556: "Stars & Stripes Forwards Cap",
      491826867: "Auto Exotic Cap",
      495850282: "Green Ho Ho Ho Flipped Cap",
      496331219: "Yellow Sports",
      501936632: "Peach Digital Beanie Cap",
      503836078: "Blue Guns",
      504157481: "White Peaked Cap",
      506395627: "Tan Spade Kronos Ära",
      512917107: "Splinter Riot",
      513489944: "Black Quad Lens",
      528073095: "Gold Noir Square Stud (R)",
      534050260: "Blue Digital Beanie Cap",
      537880958: "Enema Marble Glasses",
      538163190: "Black Bigness Cap",
      539503139: "Gold Kronos Tempo",
      547877290: "Red Retro Bubble",
      549092506: "Zebra Combat Helmet",
      551632893: "Carbon Kronos Submariner",
      552556691: "Squared Helmet",
      557258044: "Platinum Gem Stud (R)",
      560852692: "Light Gray Bowler Hat",
      561428904: "Red Earpiece",
      564515410: "White & Gold Trends",
      568551300: "White JC Helmet",
      572372924: "Brown Trilby",
      576657887: "Moss Digital Shielded Riot",
      577534167: "Moss Boonie Down",
      577900366: "Cobble Beanie Cap",
      581245858: "Skull Cap",
      587889003: "Red & Navy Garrison Cap",
      590505512: "Brushstroke Dual Lens",
      607424929: "Gray Aviators Green Tint",
      609276884: "Green Ho Ho Ho Cap",
      611661108: "White Trend Glasses",
      617938488: "Gray Camo Forwards Cap",
      618853682: "Matte All Black Biker",
      631645464: "Orange The Diamond Cap",
      640795235: "Light Woodland Shielded Riot",
      644055381: "Blood Cross Forwards Cap",
      649551865: "Black Dual Lens",
      652383702: "Blue Digital Shielded Riot",
      659342350: "Eastside Fitted Cap",
      659544850: "Brown Digital Shielded Riot",
      659556502: "Electric Blue Tint Aviators",
      659958550: "Tiger Quad Lens",
      660488765: "Blue Trilby",
      664142550: "Gray Garrison Cap",
      665568109: "Imponte Racing Cap",
      665583850: "Red Guns",
      667873479: "Silver Superior Hot Tint",
      670051848: "Cobble Beret",
      670083509: "Black The Diamond Cap",
      677467389: "Green Roundel Mod",
      678941318: "Aqua Camo Utility Cap",
      680070921: "Blue Stripes Mod Helmet",
      682005190: "Teal SC Broker Cap",
      682284723: "Black Shrewsbury Cap",
      682755652: "Brown Digital Quad Lens",
      683667953: "Gray Digital Boonie Down",
      684443612: "Ox and Hatchets Spiked",
      693604053: "Deadline White",
      694031973: "Aqua Deep Shades",
      696255068: "Heritage Tartan Bobble",
      700062617: "Black & Red Dual Lens",
      704955164: "Red Ammu-Nation Cap",
      706617162: "Visored Skull Cap",
      706674077: "Crosshatch Beret",
      708374172: "Purple Hotdogs Cap",
      713753968: "Slate Boonie Down",
      717190171: "Deadline Red",
      720439764: "Brushstroke Boonie Down",
      725710428: "Vintage Top Hat",
      730603843: "Brown Digital Boonie Up",
      730994195: "White Firefighter & Goggles",
      733552555: "Brushstroke Dual Lens",
      734656469: "Gold Pillow Stud (L)",
      741023614: "Gold SN Bullion Studs",
      745170819: "White Helmet",
      750003154: "Contrast Camo Beanie Cap",
      751679748: "Vapid Cap",
      755391483: "Peach Camo Utility Cap",
      756357692: "Olive Beanie Cap",
      760214879: "Crosshatch Dual Lens",
      762032124: "Light Woodland Shielded Riot",
      764519088: "Crimson Docks",
      767322812: "Coffee Cop Frames",
      770837136: "Black Sports",
      778909555: "Navy Mod Pork Pie",
      782583003: "Olive Polarized Hipsters",
      783751666: "Purple Neon Camo Backwards Cap",
      789297931: "Gray Digital Backwards Cap",
      793700065: "Gold Noir Square Studs",
      798340921: "Nice Flipped Cap",
      799313665: "Fall Utility Cap",
      804518135: "Aqua Camo Peaked Cap",
      808699450: "Black SC Broker Cap",
      811908865: "White Riot",
      813665495: "Black Combat Helmet",
      822023606: "Hornet Refined",
      823747944: "Gold Circle Stud (R)",
      823968567: "Lucky Plucker White Pattern Cap",
      825395315: "Flecktarn Boonie Up",
      846812229: "Cobble Full Face",
      849954049: "White Gold Watch",
      857582660: "Black Winter Shades",
      859098021: "Cluckin' Bell Logos Cap",
      859853336: "Black Tied",
      860255687: "Black & Gold Trends",
      861982888: "Leopard Flight Helmet",
      862102164: "Silver Kronos Pulse",
      862845286: "Moss Dual Lens",
      864994321: "Stars & Stripes Backwards Cap",
      866460993: "Black Stripes Mod Helmet",
      866499692: "Gray Woodland Shielded Riot",
      867931815: "Chieftain Tartan Bobble",
      869620121: "Shell Wraparound Glasses",
      872006079: "Red The Diamond Cap",
      874320934: "Light Combat Helmet",
      874861096: "Black Low Beanie",
      875037135: "Brown & Red Peaked Cap",
      877354565: "Striped Deep Shades",
      880920787: "Chocolate Beret",
      884343068: "Splinter Cap",
      885320733: "Platinum Grid Square Stud (R)",
      892345154: "Silver Crowex Époque",
      893970412: "OJ Squash Cap",
      896875808: "Beige Houndstooth Low Beanie",
      897744465: "Glow Reindeer Antlers",
      897744755: "Black Onyx Stud (L)",
      898704664: "Magenta Tint Aviators",
      899113123: "Westside Fitted Cap",
      900897585: "Gray Digital Utility Cap",
      901436551: "Glow Purple Tree",
      901531618: "Pink Pattern Quad Lens",
      902284643: "White The Diamond Cap",
      903007305: "Orange Urban Ski",
      908495888: "Zebra Dual Lens",
      908866960: "Steel Aviators Blue Tint",
      910522095: "Yellow Construction Helmet",
      911686663: "Gold Skull Stud (R)",
      916070850: "Cobble Forwards Cap",
      917598912: "White Shrewsbury Cap",
      918918878: "Enema Brown Glasses",
      923195949: "Blue Sweatbox Snapback",
      926585800: "Warstock Cap",
      927232119: "Brushstroke Utility Cap",
      927308939: "Beige Scope Night Vision",
      929531870: "Blue Peaked Cap",
      931963897: "Leopard Quad Lens",
      938553691: "Black SC Broker Cap",
      947310682: "LTD Cap",
      947731308: "Light Woodland Beanie Cap",
      952934899: "Black Boonie Down",
      957683780: "Gear Wrist Chains (R)",
      967693315: "Brown Urban Ski",
      969162478: "Light Wrist Chain (L)",
      972739283: "Gray Leopard Garrison Cap",
      973305921: "Faggio Mod",
      974992672: "Chunky Wrist Chain (R)",
      975429490: "Other Side Flight Helmet",
      978493003: "Chocolate Boonie Up",
      978749239: "White Dual Lens",
      985823003: "Splinter Utility Cap",
      992001638: "Flecktarn Dual Lens",
      994493816: "Black Broker Snapback",
      998131666: "Stars & Stripes Low Beanie",
      998871353: "Burger Shot Bullseye Cap",
      1002110341: "Red Forwards Cap",
      1003322744: "Death Helmet",
      1005568593: "Brushstroke Beanie Cap",
      1012303283: "Black Kronos Quad",
      1013137663: "Cobble Dual Lens",
      1015954629: "Pink Urban Deep Shades",
      1019484849: "White Superior Cool Tint",
      1021446350: "Gray Trends",
      1023764891: "Platinum Circle Stud (L)",
      1024057764: "Charcoal Hipsters",
      1024355318: "Gold Gaulle Retro Hex",
      1025171317: "Taco Bomb Cap",
      1032823085: "Brushstroke Boonie Up",
      1037160644: "No Master Shielded Riot",
      1037578074: "White Camo Garrison Cap",
      1038479894: "Gear Wrist Chains (L)",
      1039281052: "Dark Woodland Utility Cap",
      1042310774: "Beige Low Beanie",
      1043942002: "Silver iFruit Link",
      1044978947: "Green Digital Boonie Down",
      1045969823: "Orange Firefighter & Goggles",
      1053428710: "Downhill Helmet",
      1054794493: "Purple Hotdogs Cap",
      1057305084: "Flecktarn Boonie Down",
      1062757507: "White Broker Cap",
      1065029177: "Black Cop Frames",
      1071756155: "Steel Refined Cool Tint",
      1072731106: "Platinum Spike Stud (R)",
      1074623945: "Mono Deep Shades",
      1075305160: "Slate Mod Pork Pie",
      1082888158: "Brown Suit Fedora",
      1083527299: "Black Skull Stud (R)",
      1085536566: "Orange Camo Sand Castle Cap",
      1091562502: "Shark Mouth Flight Helmet",
      1095735895: "Sand Cap",
      1096007882: "Splinter Riot",
      1097091281: "White Silver Shades",
      1098789420: "Highland Tartan Bobble",
      1099555767: "Pink Urban Ski",
      1099724039: "Black Wraparound Glasses",
      1100922817: "Cobble Backwards Cap",
      1103092621: "Blue Snowflake Flipped Cap",
      1107630790: "Ace of Spades Helmet",
      1112672897: "Tri Helmet",
      1113747106: "Blue Low Beanie",
      1114509850: "Diamonds Earrings",
      1117141493: "Cobble Quad Lens",
      1117156242: "Pudding Woolly Knit",
      1121859230: "Gold Crowex Époque",
      1122422839: "Splinter Beanie Cap",
      1122611627: "Flecktarn Combat Helmet",
      1124065897: "Peach Digital Quad Lens",
      1124449147: "Beige Outlaw Goggles",
      1129041444: "Yellow Docks",
      1136122832: "Hotdogs Canvas Hat",
      1141958608: "Gold Watch",
      1148780446: "Woodland Canvas Hat",
      1151325986: "Cream Sweatbox Snapback",
      1153218425: "Sage Scope Night Vision",
      1154075964: "White Deep Shades",
      1155701570: "Silver Crowex Rond",
      1157066538: "Black Hotdogs Cap",
      1158198199: "Olive Boonie Up",
      1159077477: "Gold SASS Wrist Piece",
      1160868961: "Patriot Flight Helmet",
      1167021385: "Dark Woodland Boonie Up",
      1169680395: "Green Flight Helmet",
      1173965234: "Purple Snakeskin Backwards Cap",
      1174660768: "Dark Red Mod Pork Pie",
      1177755789: "Tiger Quad Lens",
      1184594017: "Red & White Flight Helmet",
      1192623422: "Wine Coil Cap",
      1194403102: "Skull Helmet",
      1197489804: "Peach Digital Utility Cap",
      1205219183: "Black & Red Dual Lens",
      1206868246: "Tan Aviators Dark Tint",
      1207712740: "Dark Combat Helmet",
      1211008939: "Dark Violet Undertaker Hat",
      1214118349: "Glow Holly Tree",
      1219435988: "Contrast Camo Shielded Riot",
      1226943314: "Black Peaked Cap",
      1228137277: "Rasta Stripes Low Beanie",
      1230948015: "Cobble Boonie Down",
      1232153697: "Green & Red Peaked Cap",
      1232174285: "Gold Roulette Kronos Tempo",
      1234181718: "Black Ho Ho Ho Cap",
      1235034508: "Slalom Helmet",
      1236729802: "Navy Bowler Hat",
      1238823805: "Ice Beret",
      1242660794: "Uptown Riders Tied",
      1243020603: "Glow Classic Tree",
      1243189645: "White Painted Güffy Cap",
      1244511138: "Black Angled Hoops",
      1244987393: "Ox and Hatchets Tied",
      1247421431: "Gray Eyewear",
      1248827370: "Silver JC Helmet",
      1249914032: "Aqua Camo Cap",
      1254010787: "Burger Shot Burgers Cap",
      1255377053: "Gold Spike Stud (L)",
      1257165058: "Red Star Combat Helmet",
      1259023058: "Black Full Face",
      1260135746: "Orange Dipped Trends",
      1263478096: "Flamejob Helmet",
      1267616682: "Green Camo Forwards Cap",
      1269061779: "Lime Saggy Beanie",
      1270380110: "White & Blue Garrison Cap",
      1271520355: "Lemon Casuals",
      1273346952: "Blue JC Helmet",
      1282133135: "Black Refined",
      1282705495: "Contrast Camo Full Face",
      1285848635: "Woodland Yeti Cap",
      1286343473: "Carbon Gaulle Retro Hex",
      1291339208: "Gray Woodland Combat Helmet",
      1297112089: "Red SC Broker Cap",
      1307111925: "Vapid Cap",
      1310516338: "Contrast Camo Dual Lens",
      1318976025: "Carbon iFruit Tech",
      1321035756: "Peach Camo Beanie Cap",
      1321664139: "Lucky Plucker Red Pattern Cap",
      1330547265: "Gold Ceaseless",
      1330757580: "Bronze Superior Warm Tint",
      1331744612: "White Firefighter",
      1337550203: "Crimson Polarized Shades",
      1346078735: "Choco Polarized Hipsters",
      1346201607: "White Docks",
      1347715159: "Silver Watch",
      1348583916: "Blue Superior",
      1349280912: "Red LED Brown Strap",
      1354306496: "Fall Full Face",
      1354617437: "Black Crowex Époque",
      1354639193: "SA Assault Helmet",
      1355164530: "Tropic Helmet",
      1356862354: "White Wraparound Glasses",
      1369207828: "Atomic Cap",
      1373660427: "Purple Saggy Beanie",
      1374824457: "Brown Digital Quad Lens",
      1379309694: "Atomic Cap",
      1383240553: "Platinum Diamond Stud (R)",
      1386764538: "Brown Digital Garrison Cap",
      1390045533: "Green Deep Shades",
      1394932586: "Crosshatch Shielded Riot",
      1396672290: "Grayscale Urban Ski",
      1396721393: "Brown Digital Boonie Down",
      1399488226: "Black Ho Ho Ho Flipped Cap",
      1406474060: "Blue Retro Bubble",
      1407714477: "Lime iFruit Tech",
      1411612772: "Naughty Flipped Cap",
      1413699378: "Red Sports",
      1414763718: "Brown Harsh Souls Snapback",
      1416127828: "Green Neon Camo Backwards Cap",
      1417138230: "Platinum Angled Hoops",
      1423430485: "Light Brown Boonie Up",
      1426160221: "Matte Black Off-road",
      1427004334: "Orange Guns",
      1429238986: "Aqua Camo Beanie Cap",
      1433985311: "Brown Digital Beanie Cap",
      1437517340: "Aqua Camo Dual Lens",
      1444780905: "Black Coil Cap",
      1450359131: "Blue Digital Shielded Riot",
      1453442047: "White Helmet",
      1454296662: "Glossy Mirrored Biker",
      1456447461: "Gray Woodland Full Face",
      1460083471: "Carbon Pendulus Galaxis",
      1464986778: "Red Stripes Mod Helmet",
      1470799820: "Cobble Quad Lens",
      1471858932: "Gray Peaked Cap",
      1473746472: "Bugstars Backwards Cap",
      1475444920: "Black & Yellow Low Beanie",
      1475898688: "Forest Bulletproof",
      1487297183: "Gray Woodland Beret",
      1491046386: "Crosshatch Riot",
      1493313350: "Glow Cheeky Elf Woolly Trail",
      1497522768: "Brown Digital Utility Cap",
      1497573501: "Glossy All Black Biker",
      1503248869: "Ace of Spades Helmet",
      1509641477: "Blue & Red Peaked Cap",
      1516618709: "Crimson Trends",
      1517430461: "Platinum Gaulle Retro Hex",
      1527647250: "Silver Watch",
      1529342529: "Peach Camo Boonie Down",
      1531275842: "Charcoal Refined",
      1533381874: "Nagasaki Racing Cap",
      1533885335: "Tropic Helmet",
      1536555172: "Purple SC Broker Cap",
      1538105989: "Orange & Black Flight Helmet",
      1538299998: "Red Lucky Plucker Cap",
      1541237140: "Sage Green Undertaker Hat",
      1541392130: "Smoke Cop Frames",
      1542364440: "Burger Shot Bullseye Cap",
      1544919034: "Slate Beret",
      1545727185: "Black Skull Forwards Cap",
      1547324680: "Brown Digital Full Face",
      1551254356: "Blue Construction Helmet",
      1552305463: "Splinter Quad Lens",
      1552385401: "Brown Bull Emic",
      1552603808: "Gruppe Sechs Helmet",
      1558905143: "Hawaiian Snow Gray",
      1560939239: "Flash Cap",
      1562689384: "Silver Skull Studs",
      1569561080: "White & Gold Garrison Cap",
      1574568904: "Blue Shielded Riot",
      1577290595: "Platinum Skull Stud (R)",
      1581730052: "Stone Gray Shielded Riot",
      1582081090: "Glow Elf Hat",
      1584639495: "Platinum SN Stud (R)",
      1588407496: "Flecktarn Full Face",
      1589828617: "Deadline Orange",
      1591035792: "Boost Helmet",
      1595646834: "Burger Shot Burgers Cap",
      1596096047: "Blue Retro Bubble",
      1597266062: "Blue Cluckin' Bell Cap",
      1601455173: "Black Coil Cap",
      1604284448: "Wheel Crowex Époque",
      1608086806: "Black Outlaw Goggles",
      1608192145: "Auto Exotic Cap",
      1609565355: "Zap Casuals",
      1611306301: "Fall Shielded Riot",
      1611498483: "Black Deep Shades",
      1611715243: "Brown Digital Dual Lens",
      1613634359: "Silver Retro Bubble",
      1614912291: "Cyan Mod Pork Pie",
      1615377111: "Aqua Camo Full Face",
      1616380410: "White Saggy Beanie",
      1618575620: "Slate Beanie Cap",
      1622036122: "Hearts Earrings",
      1626007888: "Stone Scope Night Vision",
      1626031863: "Red Ammu-Nation Cap",
      1626792542: "Blue Digital Boonie Down",
      1633513106: "Medic Combat Helmet",
      1635000195: "White Flight Helmet",
      1638087054: "Carbon Spiked",
      1639594648: "Blue Top Foam Hat",
      1644608347: "Eggshell Undertaker Hat",
      1645846800: "PRB iFruit Tech",
      1646552433: "Silver Superior",
      1650830148: "Prison Authority Backwards Cap",
      1655617451: "Dark Woodland Full Face",
      1663041629: "White Dice Earrings",
      1664968271: "Gray Top Hat",
      1665311928: "Blue Digital Riot",
      1666093326: "Moss Beanie Cap",
      1676239505: "Splinter Dual Lens",
      1676348091: "Blue Mod Canvas",
      1678097934: "Crosshatch Shielded Riot",
      1679182630: "Olive Utility Cap",
      1688711503: "Gold SN Bullion Stud (L)",
      1689691149: "Blue Mod Pork Pie",
      1691976193: "White Rim Tint Aviators",
      1698971674: "Zebra Deep Shades",
      1701657425: "Contrast Camo Quad Lens",
      1704243905: "White Polarized Hipsters",
      1706531157: "Dual Trey Baker Snapback",
      1711650735: "Silver Ceaseless",
      1719477511: "Bah Humbug Flipped Cap",
      1722750186: "Black Docks",
      1724365230: "Stripy Yeti Snapback",
      1724972851: "Hornet Guns",
      1729183056: "White Vom Feuer Cap",
      1731771637: "Black Diamond Stud (R)",
      1736093737: "Red Suit Fedora",
      1737799107: "Deck Enduring Watch",
      1749088724: "Moss Digital Beret",
      1757060059: "Gold Covgari Universe",
      1758713732: "Skeleton Helmet",
      1759289928: "Xero Gas Cap",
      1761558892: "Brushstroke Full Face",
      1761624451: "White Superior Glasses",
      1764777830: "Fifty Kronos Quad",
      1766375314: "Platinum Pendulus Galaxis",
      1768064158: "Dusty Pink Undertaker Hat",
      1768981672: "Spiked Gauntlet (L)",
      1772824957: "LTD Cap",
      1774503033: "Platinum Onyx Stud (R)",
      1777408510: "Pink Pattern Dual Lens",
      1777426664: "Roulette Kronos Quad",
      1788575978: "Gold Noir Square Stud (L)",
      1797325877: "Desert Digital Scope Night Vision",
      1801201547: "Fukaru Cap",
      1801518287: "Peach Camo Boonie Up",
      1801697220: "White Lucky Plucker Cap",
      1803355845: "Green Digital Utility Cap",
      1806119913: "Brown Flight Helmet",
      1807937089: "Flamejob Helmet",
      1812655126: "Gold Spike Stud (R)",
      1816249506: "Navy Trickster Snapback",
      1825449478: "Black Bull Emic",
      1827254217: "Gold Watch",
      1827741081: "Yellow LED",
      1829861542: "Deadline Green",
      1830796002: "Dusk Urban Ski",
      1831057942: "Midnight Beret",
      1831101822: "Naughty Cap",
      1832326262: "Peace Combat Helmet",
      1839288714: "Orange Fiber Spiked",
      1841520273: "Silver Retro Bubble",
      1843830936: "Tortoiseshell Casuals",
      1848940972: "Gray Bulletproof",
      1850504894: "Burger Shot Logo Cap",
      1855607109: "Chepalle Cap",
      1857811503: "Stars Helmet",
      1862030620: "Red Top Foam Hat",
      1862408492: "Patriot Combat Helmet",
      1863511255: "Skull Helmet",
      1865093859: "Purple Neon Camo Forwards Cap",
      1867286519: "Enema Gray Glasses",
      1872275269: "Brown Digital Shielded Riot",
      1874727181: "Yellow Guns",
      1878060283: "Digital Helmet",
      1882879280: "Moss Full Face",
      1885853255: "Boars Fitted Cap",
      1886138071: "Gold iFruit Link",
      1888984560: "Light Wrist Chain (R)",
      1890136623: "Platinum Onyx Studs",
      1892879108: "Green Digital Beret",
      1896116555: "Brown Eyewear",
      1897981854: "Wine Coil Cap",
      1900824849: "Yung Ancestor Backwards Cap",
      1901175437: "White Retro Bubble",
      1902156938: "Walnut Aviators",
      1906953849: "STFU Flight Helmet",
      1907959626: "Red Deep Shades",
      1909561463: "Flecktarn Quad Lens",
      1912943352: "Yellow Sweatbox Snapback",
      1917082251: "Moss Digital Shielded Riot",
      1917616924: "Deadline Pink",
      1919336360: "Gold JC Helmet",
      1925129615: "Black Beanie Cap",
      1929649532: "Platinum SN Studs",
      1930763872: "Yellow Sports",
      1932327570: "Silver SASS Wrist Piece",
      1932815241: "Black Ammu-Nation Cap",
      1941670055: "Black Superior",
      1941813588: "White Pork Pie",
      1941866665: "Gold Superior",
      1941939394: "Black Bulletproof",
      1946500788: "Platinum SN Bullion Stud (R)",
      1947432092: "Brown Shielded Riot",
      1948577318: "Burst Helmet",
      1950181044: "Yellow Kronos Submariner",
      1950375886: "White Undertaker Hat",
      1950800603: "Pink Pattern Full Face",
      1952270061: "Fall Riot",
      1953345639: "Checked Docks",
      1954380523: "Royalty Crowex Rond",
      1961752738: "Navy Suit Fedora",
      1967315379: "Black Vom Feuer Cap",
      1969901583: "Blue Cluckin' Bell Cap",
      1970098906: "Platinum SN Bullion Stud (L)",
      1973979949: "Blue Top Hat",
      1977681474: "Black Gem Studs",
      1982312244: "Red Mod Canvas",
      1985163913: "Peach Digital Cap",
      1987915332: "Red Saggy Beanie",
      1988042933: "Shell Refined Glasses",
      1988180712: "Gray Sweatbox Snapback",
      1988738536: "Blue & Yellow Low Beanie",
      1990786139: "Green Trends",
      1991648664: "Leopard Dual Lens",
      1993366836: "Gold Circle Stud (L)",
      1995715588: "Tiger Dual Lens",
      2001484922: "Coffee Broker Snapback",
      2005591207: "Houndstooth Deep Shades",
      2005705482: "Contrast Camo Boonie Down",
      2008237453: "Patriot Cap",
      2014140084: "Black Enduring Watch",
      2016102499: "Gingerbread Flipped Cap",
      2029314391: "Zebra Full Face",
      2032784118: "Green Urban Ski",
      2044342146: "Spade Kronos Pulse",
      2046492779: "Ox Blood Shielded Riot",
      2047234784: "Blue Stars Mod Helmet",
      2049357828: "White LED Tan Strap",
      2051292137: "Hawaiian Snow White",
      2055429016: "Roulette Enduring Watch",
      2056147345: "Aqua Camo Quad Lens",
      2056915951: "Downhill Helmet",
      2064144450: "Pink JC Helmet",
      2065673869: "Black Rim Tint Aviators",
      2067617710: "Dusk Check Suit Fedora",
      2068824345: "Silver Covgari Universe",
      2068890755: "Jungle Yeti Snapback",
      2070580233: "Slate Elvis",
      2072097035: "Green Stars Combat Helmet",
      2072115726: "Gold JC Helmet",
      2079317879: "Broker Black Hipsters",
      2086319732: "Green Snakeskin Backwards Cap",
      2090738330: "Enema Black Glasses",
      2090808422: "Stars & Stripes Combat Helmet",
      2091246818: "Skull and Snake Tied",
      2092930270: "Pink Retro Bubble",
      2093516866: "Crimson Helmet",
      2095734694: "Teal Broker Cap",
      2096519516: "Redwood Cap",
      2099401956: "Ash Mod Pork Pie",
      2104504236: "Contrast Camo Quad Lens",
      2112230267: "Peach Camo Cap",
      2119332380: "Low Santos Fitted Cap",
      2119797232: "Clubs Earrings",
      2120723888: "Suits Crowex Époque",
      2122521882: "Black Chips Earrings",
      2125947904: "Royal Enduring Watch",
      2128933905: "Star and Stripes Spiked",
      2131704888: "LSPD Riot",
      2133080081: "Orange Fade Tint Aviators",
      2146066521: "Black Cap",
      "-411722410": "Black Wraparounds",
      "-1432084031": "Gold Bull Emic",
      "-678593645": "Gray Bull Emic",
      "-915677360": "Silver Bull Emic",
      "-1989615813": "Slate Bull Emic",
      "-1291308423": "White Bull Emic",
      "-1545235404": "Purple Tint Bull Emic",
      "-1696478473": "Orange Elvis",
      "-1400148406": "Gray Elvis",
      "-567520885": "Black Elvis",
      "-238454587": "White Elvis",
      "-1015112656": "Blue Tint Elvis",
      "-966352384": "Pink Tint Elvis",
      "-1040520308": "Slate Hipsters",
      "-1959428606": "Candy Polarized Hipsters",
      "-1646629563": "White Guns",
      "-1943811624": "Gray Guns",
      "-263286212": "Pink Guns",
      "-66601447": "Black Summer Shades",
      "-145083158": "White Rust Shades",
      "-1190513632": "Slate Janitor Frames",
      "-1413801598": "Black Janitor Frames",
      "-578945785": "Gray Janitor Frames",
      "-229759321": "Ash Janitor Frames",
      "-884287311": "Tan Janitor Frames",
      "-49562574": "Smoke Janitor Frames",
      "-640754438": "Enema Tortoiseshell Glasses",
      "-383943785": "Enema Walnut Glasses",
      "-976767764": "Enema Smoke Glasses",
      "-1272565378": "Gold Aviators",
      "-286644475": "Steel Aviators",
      "-2117907267": "Silver Aviators Blue Tint",
      "-818092125": "Silver Aviators Copper Tint",
      "-613286995": "Black Casuals",
      "-2086089700": "Red Casuals",
      "-1838388829": "White Casuals",
      "-308207613": "Camo Collection Casuals",
      "-2102127442": "Silver Eyewear",
      "-752947795": "Hawaiian Snow Black",
      "-2005477298": "Hawaiian Snow Ash",
      "-1320703489": "Hawaiian Snow Marble",
      "-1013690728": "Hawaiian Snow Walnut",
      "-1211873923": "Deep Sea Watch",
      "-1904250124": "Black Watch",
      "-2134190197": "Gold Faced Silver Watch",
      "-1515417841": "White LED Black Strap",
      "-731288440": "Red LED White Strap",
      "-802858881": "Red Sports",
      "-1109150724": "White Sports",
      "-515278137": "Blue Sports",
      "-1816620390": "Zeus Flight Helmet",
      "-979208595": "Green & Yellow Flight Helmet",
      "-1557843597": "DFA Flight Helmet",
      "-619830968": "Snake Killers Flight Helmet",
      "-857373449": "Mind Over Matter Flight Helmet",
      "-732753242": "Zebra Flight Helmet",
      "-511431416": "Tiger Flight Helmet",
      "-802387391": "Yellow & Black Flight Helmet",
      "-2136613394": "Lime & Black Flight Helmet",
      "-1327251863": "51st Squad Flight Helmet",
      "-1610842821": "Charcoal Bulletproof",
      "-1968549225": "Tan Bulletproof",
      "-729343262": "Pink Tint Wraparounds",
      "-489343106": "Purple Tint Wraparounds",
      "-820867051": "Orange Tint Wraparounds",
      "-557994133": "Red Tint Wraparounds",
      "-328316212": "Crimson Wraparounds",
      "-97491376": "Green Tint Wraparounds",
      "-1257185072": "Green Canvas Hat",
      "-75666008": "Gray Canvas Hat",
      "-451657514": "Urban Canvas Hat",
      "-1339992339": "Red Canvas Hat",
      "-1987638855": "Floral Canvas Hat",
      "-1633579233": "Tan Pork Pie",
      "-1875283381": "Brown Pork Pie",
      "-2112956938": "Gray Pork Pie",
      "-175555347": "Purple Pork Pie",
      "-952049571": "Black Pork Pie",
      "-1193131104": "Green Pork Pie",
      "-1435228476": "Blue Pork Pie",
      "-361888891": "Blue Sports",
      "-1465678599": "Silver Refined",
      "-712712517": "Gold Refined",
      "-16367277": "White Refined Glasses",
      "-4836579": "Brown Refined",
      "-1549239545": "Black Refined Glasses",
      "-2055918566": "Steel Superior",
      "-214003082": "Black Bowler Hat",
      "-91135616": "Silver Bowler Hat",
      "-313997585": "White Bowler Hat",
      "-1438449536": "Olive Bowler Hat",
      "-1138580417": "Purple Bowler Hat",
      "-1431961294": "Lobster Bowler Hat",
      "-1126849135": "Brown Bowler Hat",
      "-2062567910": "Vintage Bowler Hat",
      "-682403188": "Cream Bowler Hat",
      "-1725279696": "Black Top Hat",
      "-1889967636": "Ash Top Hat",
      "-1627815748": "Navy Top Hat",
      "-582943414": "Silver Top Hat",
      "-880911931": "White Top Hat",
      "-776912067": "Light Gray Top Hat",
      "-472651902": "Olive Top Hat",
      "-1440812007": "Purple Top Hat",
      "-1130620653": "Lobster Top Hat",
      "-176682294": "Cream Top Hat",
      "-391281267": "Star Frame Shades",
      "-1080701017": "Star Spangled Shades",
      "-459563073": "USA Bucket Hat",
      "-1875794543": "USA Top Hat",
      "-43142523": "Patriotic Beanie",
      "-4635150": "USA Crown",
      "-1985316670": "USA Boppers",
      "-211721637": "Pisswasser Beer Hat",
      "-1027636968": "Benedict Beer Hat",
      "-1880351886": "J Lager Beer Hat",
      "-442186014": "Patriot Beer Hat",
      "-1438134231": "Blarneys Beer Hat",
      "-1066861461": "Supa Wet Beer Hat",
      "-1634132379": "Blue Check Suit Fedora",
      "-123120877": "Beige Check Suit Fedora",
      "-350570506": "Royal Suit Fedora",
      "-1006180032": "Black Suit Fedora",
      "-711160725": "White Suit Fedora",
      "-1569577449": "Sky Check Suit Fedora",
      "-1307130528": "Chocolate Suit Fedora",
      "-35234598": "Mustard Suit Fedora",
      "-616851579": "Classic Check Suit Fedora",
      "-1726767608": "Gold SN Stud (L)",
      "-947488019": "Platinum SN Stud (L)",
      "-381434971": "Gold SN Stud (R)",
      "-526110118": "Gold Onyx Stud (R)",
      "-218704129": "Black Onyx Stud (R)",
      "-1711962933": "Gold Onyx Studs",
      "-1940821633": "Black Onyx Studs",
      "-2118198745": "Gold SN Bullion Stud (R)",
      "-1938038754": "Platinum SN Bullion Studs",
      "-1613924594": "Gold SN Studs",
      "-1225935980": "Platinum Skull Stud (L)",
      "-1968872302": "Silver Skull Stud (R)",
      "-2113107657": "Gold Skull Studs",
      "-1346116443": "Black Skull Studs",
      "-1511080238": "Platinum Spike Stud (L)",
      "-107066662": "Platinum Spike Studs",
      "-344936833": "Gold Spike Studs",
      "-695221873": "Gold Onyx Stud (L)",
      "-690717941": "Silver Covgari Explorer",
      "-1047375737": "Pink Gold Covgari Explorer",
      "-214748212": "Gold Covgari Explorer",
      "-238423512": "Gold Pendulus Gravity",
      "-1918605886": "Steel Covgari Universe",
      "-1676658964": "Copper Gaulle Destiny",
      "-445724248": "Vintage Gaulle Destiny",
      "-149066491": "Silver Gaulle Destiny",
      "-557947194": "Carbon Medici Radial",
      "-659006790": "Silver Medici Radial",
      "-987090018": "Steel Medici Radial",
      "-1416514943": "Carbon Pendulus Timestar",
      "-2123628271": "Red Kronos Submariner",
      "-740313982": "Red iFruit Snap",
      "-966944386": "Blue iFruit Snap",
      "-2124443773": "Mint iFruit Snap",
      "-1905715277": "Gold Angled Hoop (L)",
      "-1656310418": "Black Angled Hoop (L)",
      "-234070248": "Platinum Angled Hoop (L)",
      "-534631979": "Gold Angled Hoop (R)",
      "-877330185": "Black Angled Hoop (R)",
      "-581000118": "Platinum Angled Hoop (R)",
      "-600796580": "Gold Pillow Stud (R)",
      "-414537584": "Black Pillow Stud (R)",
      "-175848188": "Platinum Pillow Stud (R)",
      "-1204373760": "Gold Pillow Studs",
      "-1503259797": "Black Pillow Studs",
      "-1262768106": "Platinum Pillow Studs",
      "-2073246032": "Black Gem Stud (L)",
      "-1233507638": "Platinum Gem Stud (L)",
      "-1120594711": "Gold Gem Studs",
      "-507912718": "Platinum Gem Studs",
      "-827209439": "Gold Illusion Square Stud (L)",
      "-2133283484": "Gold Grid Square Stud (L)",
      "-366280685": "Platinum Grid Square Stud (L)",
      "-567623958": "Gold Illusion Square Stud (R)",
      "-1587788466": "Gold Grid Square Stud (R)",
      "-1125023196": "Platinum Grid Square Studs",
      "-742084662": "Platinum Noir Square Studs",
      "-137881896": "Gold Angled Hoops",
      "-332604528": "Platinum Circle Stud (R)",
      "-651923792": "Gold Circle Studs",
      "-1517942924": "Platinum Circle Studs",
      "-544021598": "Gold Diamond Stud (L)",
      "-1252225226": "Black Diamond Stud (L)",
      "-518658404": "Platinum Diamond Stud (L)",
      "-1268058004": "Gold Diamond Studs",
      "-2092394968": "Black Diamond Studs",
      "-1846660237": "Platinum Diamond Studs",
      "-2041139979": "Black Pillow Stud (L)",
      "-1814280192": "Platinum Pillow Stud (L)",
      "-1262009015": "Silver Kronos Quantum",
      "-980621612": "Carbon Kronos Quantum",
      "-68500346": "Gold Covgari Supernova",
      "-1821248618": "Pink Gold Covgari Supernova",
      "-1448230817": "Gold Pendulus Galaxis",
      "-393006070": "Silver Crowex Chromosphere",
      "-1839986779": "Gold Crowex Chromosphere",
      "-856392475": "Carbon Crowex Chromosphere",
      "-1743979784": "Pink Gold Vangelico Geomeister",
      "-2042898602": "Silver Vangelico Geomeister",
      "-1940429943": "Gold Vangelico Geomeister",
      "-1832488053": "Pink Gold iFruit Link",
      "-726329981": "Red Broker Snapback",
      "-908656697": "Charcoal Broker Snapback",
      "-1043967635": "Diamond Yeti Snapback",
      "-763432226": "Cherry Broker Snapback",
      "-1607233976": "Tan Fruntalot Snapback",
      "-1358746649": "Green Sweatbox Snapback",
      "-1987878680": "Forest Trickster Snapback",
      "-1220060504": "Cream Trickster Snapback",
      "-475949529": "Red Yeti Snapback",
      "-1772422237": "White Harsh Souls Snapback",
      "-1475633404": "Navy Fruntalot Snapback",
      "-2125278829": "All Black Broker Snapback",
      "-1708154759": "Brown Broker Snapback",
      "-2111213455": "Orange Sweatbox Snapback",
      "-1712641707": "Magnetics Script Fitted Cap",
      "-1942647318": "Magnetics Block Fitted Cap",
      "-508544810": "Strawberry Fitted Cap",
      "-728064341": "Black SA Fitted Cap",
      "-19139795": "Davis Fitted Cap",
      "-1356946401": "Blue Digital Cap",
      "-36912774": "Brown Digital Cap",
      "-1590109664": "Contrast Camo Cap",
      "-1821163883": "Cobble Cap",
      "-268798050": "Brushstroke Cap",
      "-664385418": "Flecktarn Cap",
      "-898847613": "Light Woodland Cap",
      "-1282539822": "Moss Cap",
      "-325279974": "Green Digital Cap",
      "-86819961": "Gray Digital Cap",
      "-996749553": "Fall Cap",
      "-740332128": "Dark Woodland Cap",
      "-1607924172": "Crosshatch Cap",
      "-1930469439": "Gray Woodland Cap",
      "-1042663804": "Aqua Camo Boonie Down",
      "-1340304631": "Splinter Boonie Down",
      "-173957310": "Sand Boonie Down",
      "-139419736": "Olive Boonie Down",
      "-520523206": "Light Brown Boonie Down",
      "-144601291": "Dark Woodland Boonie Down",
      "-517578049": "Crosshatch Boonie Down",
      "-757086670": "Moss Digital Boonie Down",
      "-990336412": "Gray Woodland Boonie Down",
      "-167636473": "Splinter Boonie Up",
      "-64840108": "Cobble Boonie Up",
      "-1554191162": "Light Woodland Boonie Up",
      "-1772563778": "Moss Boonie Up",
      "-2004404453": "Sand Boonie Up",
      "-1724056409": "Green Digital Boonie Up",
      "-1846948468": "Black Boonie Up",
      "-1690902490": "Slate Boonie Up",
      "-1465124100": "White Boonie Up",
      "-424274024": "Peach Digital Boonie Up",
      "-192629963": "Fall Boonie Up",
      "-1041412605": "Crosshatch Boonie Up",
      "-800462148": "Moss Digital Boonie Up",
      "-1634236584": "Gray Woodland Boonie Up",
      "-864599477": "Blue Digital Beret",
      "-935380517": "Brown Digital Beret",
      "-68364806": "Aqua Camo Beret",
      "-955126711": "Peach Camo Beret",
      "-689665042": "Brushstroke Beret",
      "-475093630": "Flecktarn Beret",
      "-236830231": "Light Woodland Beret",
      "-1915192873": "Moss Beret",
      "-1641211264": "Sand Beret",
      "-1304443827": "Olive Beret",
      "-1592974872": "Light Brown Beret",
      "-492605789": "Gray Digital Beret",
      "-1209624278": "Dark Woodland Beret",
      "-1878405154": "Blue Digital Utility Cap",
      "-1176636084": "Flecktarn Utility Cap",
      "-962261190": "Light Woodland Utility Cap",
      "-739726911": "Moss Utility Cap",
      "-500513211": "Sand Utility Cap",
      "-1466510298": "Black Utility Cap",
      "-692277135": "Slate Utility Cap",
      "-167383293": "White Utility Cap",
      "-432287889": "Chocolate Utility Cap",
      "-1864129344": "Light Brown Utility Cap",
      "-454362741": "Gray Woodland Utility Cap",
      "-1992532759": "Flecktarn Beanie Cap",
      "-1728250774": "Sand Beanie Cap",
      "-1717472429": "White Beanie Cap",
      "-2073605921": "Chocolate Beanie Cap",
      "-226714852": "Fall Beanie Cap",
      "-937900459": "Crosshatch Beanie Cap",
      "-696950002": "Moss Digital Beanie Cap",
      "-1404891478": "Gray Woodland Beanie Cap",
      "-1361097493": "Red Hawk & Little Cap",
      "-1167465472": "Black Hawk & Little Cap",
      "-1124704392": "Warstock Cap",
      "-2105609173": "White Shrewsbury Cap",
      "-1864920868": "Black Shrewsbury Cap",
      "-1036580403": "Red Hawk & Little Cap",
      "-203035350": "Black Hawk & Little Cap",
      "-969630947": "Shatter Pattern Helmet",
      "-1198063650": "Stars Helmet",
      "-1630059638": "Vibe Helmet",
      "-1596927918": "Squared Helmet",
      "-1126236551": "Snakeskin Helmet",
      "-1936187924": "Boost Helmet",
      "-1387569326": "Atomic Helmet",
      "-2012223930": "Nagasaki Moto Cap",
      "-1304118613": "Rebel Radio Cap",
      "-1543430620": "Redwood Cap",
      "-854101936": "Scooter Brothers Cap",
      "-1061103709": "The Mount Cap",
      "-616035151": "Total Ride Cap",
      "-1962767847": "Cunning Stunts Cap",
      "-1654116636": "Flash Cap",
      "-1485356286": "Fukaru Cap",
      "-1178212449": "Globe Oil Cap",
      "-766633809": "Grotti Cap",
      "-288304716": "Lampadati Racing Cap",
      "-465032504": "White JC Helmet",
      "-1311914548": "Blue JC Helmet",
      "-712667837": "Black JC Helmet",
      "-332694519": "Red JC Helmet",
      "-687713865": "Black JC Helmet",
      "-1297989602": "Silver JC Helmet",
      "-1913882957": "Gold Retro Bubble",
      "-1895915257": "Gold Retro Bubble",
      "-1366562228": "SA Assault Helmet",
      "-418915513": "Tri Helmet",
      "-112099366": "Sprunk Helmet",
      "-1197834675": "Skeleton Helmet",
      "-1497113952": "Death Helmet",
      "-720029882": "Cobble Helmet",
      "-1016622101": "Cubist Helmet",
      "-801920437": "Atomic Helmet",
      "-329814172": "Slalom Helmet",
      "-360345197": "Glossy Mirrored Biker",
      "-1885895266": "Matte Mirrored Biker",
      "-482703775": "Cream Retro Bubble",
      "-781983052": "Gray Retro Bubble",
      "-382013997": "Red Retro Bubble",
      "-695187330": "Black Retro Bubble",
      "-170415205": "Pale Blue Retro Bubble",
      "-1357132328": "Cream Retro Bubble",
      "-507628768": "Gray Retro Bubble",
      "-294613700": "Black Retro Bubble",
      "-51762641": "Pink Retro Bubble",
      "-736323619": "Orange Retro Bubble",
      "-835659190": "White Stars Mod Helmet",
      "-1305853145": "Swirl Mod Helmet",
      "-999626840": "Red Mod Helmet",
      "-1602904130": "Brown Mod Helmet",
      "-1336885388": "White Flag Mod Helmet",
      "-1956252257": "Black Slash Mod Helmet",
      "-1147578719": "Nagasaki Racing Cap",
      "-700281869": "Nagasaki Moto Cap",
      "-416731712": "Patriot Cap",
      "-244104620": "Rebel Radio Cap",
      "-1892090399": "Scooter Brothers Cap",
      "-1609457774": "The Mount Cap",
      "-1437617138": "Total Ride Cap",
      "-2039456333": "Chepalle Cap",
      "-1807877810": "Cunning Stunts Cap",
      "-1048030226": "Globe Oil Cap",
      "-574649252": "Grotti Cap",
      "-1544972111": "Imponte Racing Cap",
      "-1306544867": "Lampadati Racing Cap",
      "-99908782": "Black & Silver Trends",
      "-1991976427": "Sunset Docks",
      "-1727628904": "Brown Docks",
      "-1432441645": "White Dock Glasses",
      "-402548847": "Red Docks",
      "-1623489018": "Shell Dock Glasses",
      "-1357503045": "Black Dock Glasses",
      "-1461972223": "Blue Saggy Beanie",
      "-314795075": "Yellow Saggy Beanie",
      "-2013625452": "Gray Trilby",
      "-818048515": "Black Trilby",
      "-453526159": "White Trilby",
      "-297480181": "Cream Trilby",
      "-1716464887": "Red Fedora",
      "-1348534555": "Pink Fedora",
      "-24054285": "Red LED White Strap",
      "-1943596767": "Red LED Brown Strap",
      "-506610579": "White LED Gold Strap",
      "-209952822": "Yellow LED Yellow Strap",
      "-2132472570": "Gray Earpiece",
      "-590910674": "LCD Earpiece",
      "-684016666": "Glossy Black Off-road",
      "-915226199": "Glossy All Black Biker",
      "-860205401": "Matte Mirrored Biker",
      "-1410320276": "Tan Cap",
      "-1823996132": "Khaki Cap",
      "-1980606050": "SecuroServ Cap",
      "-1854813796": "SecuroServ Backwards Cap",
      "-1328822575": "Burger Shot Fries Cap",
      "-304591325": "Pink Hotdogs Cap",
      "-919436072": "Red Lucky Plucker Cap",
      "-123378755": "Lucky Plucker Red Pattern Cap",
      "-503007616": "Lucky Plucker White Pattern Cap",
      "-808250851": "White Pisswasser Cap",
      "-1158092695": "Black Pisswasser Cap",
      "-1320168169": "White Taco Bomb Cap",
      "-1738595530": "Green Taco Bomb Cap",
      "-1969587601": "Burger Shot Logo Cap",
      "-1744451024": "Burger Shot Fries Cap",
      "-1326628194": "White Pisswasser Cap",
      "-1566005739": "Black Pisswasser Cap",
      "-1786606647": "White Taco Bomb Cap",
      "-2048856898": "Green Taco Bomb Cap",
      "-117896163": "Cluckin' Bell Logos Cap",
      "-520317349": "Burger Shot Canvas Hat",
      "-280939804": "Cluckin' Bell Canvas Hat",
      "-764306253": "Red Bigness Cap",
      "-1428303080": "Banana Squash Cap",
      "-405123824": "Multicolor Leaves Güffy Cap",
      "-1594050006": "Purple Güffy Cap",
      "-1296605793": "Off-White Bigness Cap",
      "-1911057312": "Gray Abstract Bigness Cap",
      "-430652239": "Pale Abstract Bigness Cap",
      "-736223164": "Primary Squash Cap",
      "-1970893546": "Spots Squash Cap",
      "-2112164538": "Glow Star Tree",
      "-2026050716": "Glow Pudding Woolly Knit",
      "-1730454111": "Woodland Combat Helmet",
      "-45238847": "Brown Digital Combat Helmet",
      "-291268499": "MP Combat Helmet",
      "-1176785186": "Tiger Combat Helmet",
      "-621612788": "Police Combat Helmet",
      "-852601469": "Flames Combat Helmet",
      "-34330691": "Tan Digital Combat Helmet",
      "-342457598": "Aqua Camo Combat Helmet",
      "-1474317841": "Light Brown Peaked Cap",
      "-1655071645": "Moss Peaked Cap",
      "-999200110": "Gray Digital Peaked Cap",
      "-1179232996": "Dark Woodland Peaked Cap",
      "-522902695": "Red Peaked Cap",
      "-686616619": "Chocolate Peaked Cap",
      "-1048798206": "Navy Peaked Cap",
      "-7425420": "Brushstroke Garrison Cap",
      "-170352888": "Moss Garrison Cap",
      "-2073346945": "Beige Garrison Cap",
      "-1417803092": "Zebra Garrison Cap",
      "-188528539": "Teal Garrison Cap",
      "-480172639": "Aqua Camo Garrison Cap",
      "-783449734": "Black Garrison Cap",
      "-156120006": "Chocolate Garrison Cap",
      "-455399283": "Red Garrison Cap",
      "-2045542796": "Peach Digital Full Face",
      "-1706187040": "Crosshatch Full Face",
      "-2090501872": "Green Pattern Full Face",
      "-607475235": "Splinter Full Face",
      "-1294763423": "Brown Full Face",
      "-1959098910": "Black & Red Full Face",
      "-1725282545": "White Full Face",
      "-609714837": "Peach Digital Dual Lens",
      "-802527629": "Fall Dual Lens",
      "-1024439297": "Dark Woodland Dual Lens",
      "-1283511011": "Crosshatch Dual Lens",
      "-1524494237": "Green Pattern Dual Lens",
      "-59326709": "Splinter Dual Lens",
      "-114653984": "Brown Dual Lens",
      "-1753024723": "Zebra Dual Lens",
      "-1689958125": "Leopard Dual Lens",
      "-1470560043": "Black Dual Lens",
      "-1111215189": "Moss Dual Lens",
      "-1879524693": "Tiger Dual Lens",
      "-695580723": "Pink Pattern Dual Lens",
      "-1412599212": "Peach Digital Dual Lens",
      "-2113724736": "Fall Dual Lens",
      "-957208419": "Dark Woodland Dual Lens",
      "-365334741": "Green Pattern Dual Lens",
      "-1199928402": "Gray Woodland Dual Lens",
      "-254606878": "Cobble Dual Lens",
      "-2010625924": "Brown Digital Dual Lens",
      "-1457813739": "Black Quad Lens",
      "-640030575": "Moss Quad Lens",
      "-516809009": "Fall Quad Lens",
      "-294995648": "Dark Woodland Quad Lens",
      "-54209036": "Crosshatch Quad Lens",
      "-1487623403": "Gray Woodland Quad Lens",
      "-1025416658": "Splinter Quad Lens",
      "-1883057071": "Brushstroke Quad Lens",
      "-2139376181": "Black & Red Quad Lens",
      "-1991424146": "Zebra Quad Lens",
      "-1235869302": "White Quad Lens",
      "-983949611": "Pink Pattern Quad Lens",
      "-208143536": "Peach Digital Quad Lens",
      "-489203249": "Fall Quad Lens",
      "-1893944741": "Dark Woodland Quad Lens",
      "-766887747": "Crosshatch Quad Lens",
      "-1048832223": "Green Pattern Quad Lens",
      "-272698458": "Gray Woodland Quad Lens",
      "-581447976": "Aqua Camo Quad Lens",
      "-796187335": "Brown Quad Lens",
      "-788229502": "Brushstroke Quad Lens",
      "-1026099673": "Flecktarn Quad Lens",
      "-1398224437": "Black & Red Quad Lens",
      "-1636684450": "Zebra Quad Lens",
      "-1095663226": "White Quad Lens",
      "-1543025614": "Leopard Quad Lens",
      "-1990460268": "Charcoal Low Beanie",
      "-704807738": "Aqua Camo Low Beanie",
      "-466314956": "Tiger Low Beanie",
      "-2073536091": "Tricolore Low Beanie",
      "-1843694325": "Blue Striped Low Beanie",
      "-1595206994": "Rasta Trio Low Beanie",
      "-1082568758": "Brown Striped Low Beanie",
      "-687531987": "White Low Beanie",
      "-446614299": "Light Blue Low Beanie",
      "-473714238": "Gray Woodland Low Beanie",
      "-1369817638": "Gold Fame or Shame Mics",
      "-1339276930": "Silver Fame or Shame Mics",
      "-707348243": "Spades Earrings",
      "-784802675": "Red Dice Earrings",
      "-1982542394": "Tan Dice Earrings",
      "-1758959507": "Gray Dice Earrings",
      "-53962333": "Yellow Chips Earrings",
      "-369003499": "Red Chips Earrings",
      "-676573333": "Pink Chips Earrings",
      "-1253464949": "Dot Fade Aviators",
      "-1402727744": "Herringbone Aviators",
      "-249357251": "Blue Argyle Aviators",
      "-1974478729": "Two Tone Deep Shades",
      "-778463005": "Mute Deep Shades",
      "-479773570": "Sunrise Deep Shades",
      "-1525334085": "Black Fame or Shame Shades",
      "-314716145": "Red Fame or Shame Shades",
      "-894498062": "White Fame or Shame Shades",
      "-238377153": "Digital Deep Shades",
      "-44908059": "White The Diamond Cap",
      "-275175822": "Black The Diamond Cap",
      "-1993607127": "Black Broker Cap",
      "-724529291": "Red Flying Bravo Cap",
      "-471061076": "Teal SC Broker Cap",
      "-1673847197": "Purple SC Broker Cap",
      "-1364638913": "Red SC Broker Cap",
      "-505476354": "White LS Diamond Cap",
      "-977899427": "White SC Broker Cap",
      "-1150264367": "Gray Yeti Cap",
      "-982460894": "Black LS Diamond Cap",
      "-1607496800": "Red The Diamond Cap",
      "-1325454017": "Orange The Diamond Cap",
      "-73153909": "Blue LS Diamond Cap",
      "-425912194": "Orange LS Diamond Cap",
      "-131679343": "Purple The Diamond Cap",
      "-1533441358": "Pink LS Diamond Cap",
      "-1883021050": "White Broker Cap",
      "-440726288": "Black Broker Cap",
      "-787160156": "Teal Broker Cap",
      "-183194717": "Green Flying Bravo Cap",
      "-412676884": "Colors Yeti Cap",
      "-203184667": "Woodland Yeti Cap",
      "-504095299": "Black LS Diamond Cap",
      "-1665592504": "Green The Diamond Cap",
      "-1959822088": "Silver Enduring Watch",
      "-166996477": "Silver Kronos Tempo",
      "-438487642": "Black Kronos Tempo",
      "-676980424": "Gold Fifty Kronos Tempo",
      "-1392360467": "Baroque Kronos Tempo",
      "-2061908479": "Gold Kronos Pulse",
      "-1330799320": "Black Kronos Pulse",
      "-566200243": "Silver Fifty Kronos Pulse",
      "-886320604": "Silver Roulette Kronos Pulse",
      "-1044332734": "Green Fame or Shame Kronos",
      "-1341908023": "Blue Fame or Shame Kronos",
      "-566364100": "Black Fame or Shame Kronos",
      "-724342475": "Gold Kronos Ära",
      "-1559755361": "Silver Kronos Ära",
      "-1331060510": "Black Kronos Ära",
      "-348285431": "Brown Spade Kronos Ära",
      "-1293758104": "Black Ceaseless",
      "-913244476": "Spade Ceaseless",
      "-1134238608": "Mixed Metals Ceaseless",
      "-1960902171": "Roulette Ceaseless",
      "-1887285275": "Roulette Crowex Époque",
      "-1534372325": "Gold Kronos Quad",
      "-759025012": "Silver Kronos Quad",
      "-1757529215": "Suits Kronos Quad",
      "-1621110605": "Gold Crowex Rond",
      "-1846135328": "Black Crowex Rond",
      "-2084824724": "Spade Crowex Rond",
      "-664190267": "Dice Crowex Rond",
      "-1189894313": "Gold SASS Bracelet",
      "-1489173590": "Black SASS Bracelet",
      "-554175663": "Tan Outlaw Goggles",
      "-97932876": "Mono Outlaw Goggles",
      "-360904101": "Ox Blood Outlaw Goggles",
      "-1699932676": "Tropical Urban Ski",
      "-1964280199": "Yellow Urban Ski",
      "-785117699": "Ride Free Tied",
      "-444713327": "Ace of Spades Tied",
      "-1217141458": "Black Spiked",
      "-767223088": "Ride Free Spiked",
      "-510412435": "Ace of Spades Spiked",
      "-204317206": "Skull and Snake Spiked",
      "-677956758": "Green Faggio Mod",
      "-2141338720": "Cream Mod Canvas",
      "-1509617934": "Cyan Mod Canvas",
      "-744166863": "White Mod Canvas",
      "-1746832805": "Ash Mod Canvas",
      "-1977755948": "Navy Mod Canvas",
      "-322003836": "Dark Red Mod Canvas",
      "-1008973152": "Moss Mod Canvas",
      "-917246650": "Cream Mod Pork Pie",
      "-1289371414": "Red Mod Pork Pie",
      "-1849917928": "White Mod Pork Pie",
      "-227950739": "Moss Mod Pork Pie",
      "-1000649444": "Finned Skull Cap",
      "-642849883": "Spiked Skull Cap",
      "-455132815": "Black Dome",
      "-98016253": "Carbon Dome",
      "-1796761261": "Orange Fiber Dome",
      "-1424046655": "Star and Stripes Dome",
      "-1150982578": "Green Dome",
      "-910949653": "Feathers Dome",
      "-577557847": "Ox and Hatchets Dome",
      "-204056785": "Ride Free Dome",
      "-1630133255": "Chromed Dome",
      "-2000564804": "Deadline Yellow",
      "-1221023079": "Deadline Green",
      "-1535671017": "Deadline Orange",
      "-773922843": "Deadline Purple",
      "-15484338": "Deadline Pink",
      "-305293374": "Deadline Red",
      "-1362592721": "Deadline Yellow",
      "-2003456082": "Deadline Purple",
      "-27747534": "Deadline White",
      "-477253165": "Chunky Wrist Chain (L)",
      "-539860110": "Square Wrist Chain (L)",
      "-1220182204": "Skull Wrist Chain (L)",
      "-1004783514": "Black Gauntlet (L)",
      "-1303178028": "Chocolate Gauntlet (L)",
      "-343341249": "Tan Gauntlet (L)",
      "-641899608": "Ox Blood Gauntlet (L)",
      "-652602146": "Skull Wrist Chain (R)",
      "-1894083573": "Tread Wrist Chain (R)",
      "-1594423916": "Black Gauntlet (R)",
      "-851943914": "Chocolate Gauntlet (R)",
      "-140135696": "Tan Gauntlet (R)",
      "-1218596247": "Ox Blood Gauntlet (R)",
      "-230136623": "White Riot",
      "-523239484": "Gray Woodland Riot",
      "-287204377": "Brushstroke Riot",
      "-57428149": "Moss Digital Riot",
      "-585614735": "Gray Riot",
      "-824861204": "Moss Riot",
      "-1079836793": "Brown Digital Riot",
      "-1454058773": "Gray Digital Riot",
      "-1807832897": "Crosshatch Riot",
      "-2048390126": "Blue Digital Riot",
      "-1860853015": "Fall Riot",
      "-2025615547": "Aqua Camo Riot",
      "-470808273": "Brushstroke Riot",
      "-703435404": "Moss Digital Riot",
      "-391933294": "MP Riot",
      "-631441915": "LSPD Riot",
      "-1371850072": "Gray Riot",
      "-1135061278": "Moss Riot",
      "-922292161": "Brown Digital Riot",
      "-675476053": "Gray Digital Riot",
      "-2112363934": "Aqua Camo Riot",
      "-161711824": "Black Shielded Riot",
      "-872143744": "Cream Shielded Riot",
      "-894989492": "Fall Shielded Riot",
      "-661346522": "Aqua Camo Shielded Riot",
      "-2122352383": "Gray Woodland Shielded Riot",
      "-1204525458": "No Master Shielded Riot",
      "-1444001310": "Police Shielded Riot",
      "-1852821611": "Blue Shielded Riot",
      "-53115362": "Gray Digital Shielded Riot",
      "-1908182610": "Aqua Camo Shielded Riot",
      "-294669823": "Police Shielded Riot",
      "-1429103178": "Stone Gray Shielded Riot",
      "-1170391923": "Brown Shielded Riot",
      "-872521713": "Ox Blood Shielded Riot",
      "-2091528513": "Gray Digital Shielded Riot",
      "-1786318047": "Contrast Camo Shielded Riot",
      "-461899376": "Yellow Firefighter",
      "-920272148": "Orange Firefighter",
      "-177002026": "Yellow Firefighter & Goggles",
      "-1134092333": "Black Scope Night Vision",
      "-951831155": "Sage Scope Night Vision",
      "-721301240": "Beige Scope Night Vision",
      "-215708219": "White Scope Night Vision",
      "-61890533": "Beige Digital Scope Night Vision",
      "-612573590": "Desert Digital Scope Night Vision",
      "-1303211357": "Stone Scope Night Vision",
      "-477399788": "White Scope Night Vision",
      "-707962472": "Beige Digital Scope Night Vision",
      "-1762148013": "Bugstars Forwards Cap",
      "-870700137": "Prison Authority Forwards Cap",
      "-1168472040": "Yung Ancestor Forwards Cap",
      "-443330249": "Black Forwards Cap",
      "-673139246": "Gray Forwards Cap",
      "-244934824": "Brown Skull Forwards Cap",
      "-1527939481": "Green Neon Camo Forwards Cap",
      "-907568672": "Light Gray Forwards Cap",
      "-1092735280": "Green Snakeskin Forwards Cap",
      "-1786029017": "Purple Snakeskin Forwards Cap",
      "-388179942": "Teal Forwards Cap",
      "-81560409": "Smiley Forwards Cap",
      "-2055630507": "Gray Digital Forwards Cap",
      "-1749862968": "Blue Digital Forwards Cap",
      "-592210348": "Black Backwards Cap",
      "-972592884": "Gray Backwards Cap",
      "-1051967714": "Toothy Grin Backwards Cap",
      "-1956195500": "Wolf Backwards Cap",
      "-1648789511": "Gray Camo Backwards Cap",
      "-435943283": "Black Skull Backwards Cap",
      "-143807648": "Blood Cross Backwards Cap",
      "-1031913086": "Brown Skull Backwards Cap",
      "-738925457": "Green Camo Backwards Cap",
      "-1203647103": "Light Gray Backwards Cap",
      "-1582522281": "Red Backwards Cap",
      "-1813117734": "Teal Backwards Cap",
      "-46049409": "Smiley Backwards Cap",
      "-397234782": "Blue Digital Backwards Cap",
      "-942433779": "Orange Construction Helmet",
      "-625131552": "White Construction Helmet",
      "-1291741217": "Black Undertaker Hat",
      "-1070321084": "Dark Gray Undertaker Hat",
      "-1234639842": "Ash Undertaker Hat",
      "-831303998": "Dusty Violet Undertaker Hat",
      "-604968515": "Light Gray Undertaker Hat",
      "-1768300788": "Red Undertaker Hat",
      "-1528464477": "Terracotta Undertaker Hat",
      "-1656624104": "Cream Undertaker Hat",
      "-1892724749": "Ivory Undertaker Hat",
      "-512146386": "Holly Tree",
      "-198481518": "Red Stripy Tree",
      "-837051021": "Green Stripy Tree",
      "-556187922": "Star Tree",
      "-687231161": "Santa Tree",
      "-142544843": "Elf Tree",
      "-882756821": "Naughty Elf Woolly Trail",
      "-1242625979": "Happy Elf Woolly Trail",
      "-1358792084": "Silly Elf Woolly Trail",
      "-944399713": "Blue Snowflake Cap",
      "-703154335": "Nice Cap",
      "-558053199": "Gingerbread Cap",
      "-320084721": "Bah Humbug Cap",
      "-1972900644": "Red Snowflake Flipped Cap",
      "-1287194865": "Red Santa Hat",
      "-1581755406": "Green Santa Hat",
      "-772482596": "Reindeer Antlers",
      "-2021286443": "Charcoal Suit Fedora",
    },
    female: {
      3113547: "Black Chips Earrings",
      4068556: "Lime & Black Flight Helmet",
      5422647: "White Dice Earrings",
      7690218: "Black Broker Cap",
      9136252: "Ride Free Tied",
      9215386: "Red Camo Garrison Cap",
      18623563: "Pale Blue Retro Bubble",
      19989197: "Gold Didier Sachs Mignon",
      20800824: "Gold Kronos Pulse",
      24981911: "Diamonds Earrings",
      28678404: "Black Sports",
      29878598: "Cream Mod Pork Pie",
      37122687: "Beige Digital Scope Night Vision",
      38181873: "Atomic Cap",
      39686519: "Leopard Dual Lens",
      40909304: "Red Backwards Cap",
      44037358: "Light Gray Bowler Hat",
      45011350: "Gray Digital Forwards Cap",
      51606258: "Aqua Deep Shades",
      58591362: "Glow Pudding Woolly Knit",
      59942738: "Yellow Firefighter & Goggles",
      60194771: "Brown Digital Combat Helmet",
      61814775: "White Taco Bomb Cap",
      62243550: "White Top Hat",
      70111784: "Burger Shot Burgers Cap",
      72664935: "Copper Fashion",
      74738479: "Tri Helmet",
      76371595: "White The Diamond Cap",
      84792928: "Black Forwards Cap",
      87670887: "Aqua Camo Riot",
      96238254: "Gold Enduring Watch",
      97609403: "Black Gold Diamond Studs",
      100477592: "Brushstroke Utility Cap",
      101092113: "Red Retro Bubble",
      101979507: "Green Faggio Mod",
      107846352: "Green Pattern Quad Lens",
      108253940: "Death Helmet",
      110684701: "Splinter Dual Lens",
      125862539: "Brown Quad Lens",
      131947941: "Peach Digital Full Face",
      139685993: "Globe Oil Cap",
      141495645: "Santa Tree",
      143361991: "Orange Sweatbox Snapback",
      144636459: "White Stars Mod Helmet",
      145710192: "White & Blue Garrison Cap",
      146026937: "Gold Crowex Époque",
      147288818: "Squared Helmet",
      147630071: "Yellow Construction Helmet",
      148714941: "Aqua Camo Riot",
      148857449: "Sand Boonie Down",
      160865769: "Pink Gold Le Chien Marquise",
      161742867: "Green Deep Shades",
      162664635: "Gold SASS Bracelet",
      164234798: "Dusk Urban Ski",
      165088329: "Black Boonie Up",
      173658661: "Peach Digital Boonie Down",
      174202283: "Orange Firefighter",
      178745558: "Flecktarn Dual Lens",
      179022901: "Blue Argyle Aviators",
      187575916: "Black Retro Classics",
      198032403: "Light Woodland Low Beanie",
      203583500: "Woodland Yeti Cap",
      205634429: "Dark Red Mod Canvas",
      208386122: "Patriot Cap",
      210152058: "Sand Beret",
      211807384: "Teal Cat Eyes",
      212853467: "Police Shielded Riot",
      218884056: "Snakeskin Helmet",
      223099377: "Desert Digital Scope Night Vision",
      229222371: "Moss Cap",
      231059445: "Lemon Casuals",
      235084622: "Silver Stem Slim Glasses",
      235655463: "Gray Backwards Cap",
      239473974: "Patriot Combat Helmet",
      240301293: "White Rim Tint Aviators",
      246092660: "Crosshatch Quad Lens",
      249229696: "Olive Boonie Down",
      249846200: "Blue Digital Beret",
      250663188: "Cluckin' Bell Canvas Hat",
      252966417: "Gray Woodland Riot",
      253463621: "Beige Scope Night Vision",
      256755328: "Brown Mod Helmet",
      261335322: "Cream Retro Bubble",
      263141351: "Gold Shields",
      266244209: "Black Plastic Glasses",
      272076825: "Olive Bowler Hat",
      273004049: "Atomic Helmet",
      286127538: "Blood Cross Backwards Cap",
      290253926: "Burger Shot Fries Cap",
      290254858: "Black LS Diamond Cap",
      291338199: "Mind Over Matter Flight Helmet",
      291708861: "Olive Beanie Cap",
      293090971: "Brown Skull Forwards Cap",
      295996305: "Gray Woodland Utility Cap",
      296143686: "Blue Stars Mod Helmet",
      297616184: "Light Brown Utility Cap",
      299088803: "Chocolate Peaked Cap",
      302513036: "Black Gold Emerald Chains",
      302830583: "Cream Undertaker Hat",
      303093168: "Blue Leopard Squared",
      304249668: "White Broker Cap",
      308770913: "Green Camo Backwards Cap",
      309224346: "Silver Fashion",
      311507643: "Green Sports",
      319110510: "Auto Exotic Cap",
      319113786: "Contrast Camo Dual Lens",
      320109507: "Screw You Hoops",
      320364963: "Silver Top Hat",
      323050498: "Gray Riot",
      324825853: "Gray Forwards Cap",
      327544088: "Digital Helmet",
      331131983: "Black Peaked Cap",
      332179101: "Black Retro Bubble",
      335664446: "Gold Le Chien Cuff",
      338532586: "Passion Sun Hat",
      340468017: "Chocolate Boonie Up",
      341406955: "Blue Digital Forwards Cap",
      349878186: "Splinter Quad Lens",
      351119453: "Bah Humbug Cap",
      353302536: "Pink Pattern Full Face",
      359612206: "51st Squad Flight Helmet",
      361189254: "Gray Woodland Low Beanie",
      366104487: "Crosshatch Riot",
      367205767: "White Cashmere Fedora",
      367442084: "Brown Digital Beanie Cap",
      370594299: "Stone Gray Shielded Riot",
      372154399: "Silver Kronos Ära",
      373105450: "Brown Harsh Souls Snapback",
      373735480: "Purple Neon Camo Forwards Cap",
      374391354: "Orange Sports",
      381397494: "Purple Tree",
      385038498: "Silver Le Chien Marquise",
      389766419: "Clubs Earrings",
      396473131: "White Painted Güffy Cap",
      396527258: "Ox Blood Gauntlet (R)",
      401822288: "Rasta Stripes Low Beanie",
      412797378: "Ombre Shields",
      418158968: "Sunrise Deep Shades",
      421482003: "Logger Cowgirl Hat",
      432821856: "Brown Digital Shielded Riot",
      438441729: "Silver Fifty Kronos Pulse",
      446043374: "Grotti Cap",
      460296220: "Fall Cap",
      471040836: "Chocolate Garrison Cap",
      472553912: "Stars Helmet",
      482562282: "Chepalle Cap",
      484987416: "Black Rim Tint Aviators",
      492185786: "Stone Scope Night Vision",
      493968191: "Suits Crowex Époque",
      497283167: "Smiley Backwards Cap",
      501111821: "Black Crowex Époque",
      501451067: "Black The Diamond Cap",
      503737509: "Black Pisswasser Cap",
      506083506: "Downhill Helmet",
      512761702: "Burst Helmet",
      512987754: "White The Diamond Cap",
      513334410: "White Scope Night Vision",
      523025232: "Light Brown Beanie Cap",
      523679511: "Leopard Combat Helmet",
      523736033: "Flecktarn Full Face",
      525084361: "USA Top Hat",
      525978435: "Brushstroke Cap",
      530255864: "SecuroServ Backwards Cap",
      533567330: "Gray Yeti Cap",
      534992240: "Star Frame Shades",
      535452785: "White Camo Garrison Cap",
      542974410: "Primary Squash Cap",
      543198473: "Light Gray Forwards Cap",
      544634364: "Black Backwards Cap",
      545623091: "Marble Sports Shades",
      548076869: "Brown Digital Beret",
      549201043: "Yung Ancestor Backwards Cap",
      549325644: "Burger Shot Bullseye Cap",
      550389358: "White Peaked Cap",
      555483049: "Gray Digital Boonie Down",
      564472722: "Moss Digital Utility Cap",
      571438509: "Purple Squared",
      574609641: "Shell Casual Glasses",
      578288239: "Moss Riot",
      590575172: "Ivory Undertaker Hat",
      591040577: "Purple Hotdogs Cap",
      591653973: "Cream Shielded Riot",
      607828228: "Beige Sun Hat",
      611315928: "Black Slash Mod Helmet",
      612685284: "Peach Digital Beanie Cap",
      615410057: "White Firefighter & Goggles",
      616809990: "Green Stripy Tree",
      619747093: "White Broker Cap",
      621614759: "Yellow Cluckin' Bell Cap",
      626713723: "USA Boppers",
      626853111: "Gray Bulletproof",
      632263023: "Vibe Helmet",
      638157098: "Blue Wave Backwards Cap",
      647282410: "Green Cashmere Fedora",
      648441926: "Moss Mod Canvas",
      648514572: "Gold Fashion",
      653114757: "Purple Bowler Hat",
      653134663: "Red Tint Marbles",
      654062979: "White Fame or Shame Shades",
      654602763: "Blue Digital Riot",
      662256573: "Green Urban Deep Shades",
      669135370: "Vibe Helmet",
      677758037: "Black Quad Lens",
      678409116: "Black Kronos Pulse",
      685201541: "FU Hoops",
      685372445: "Stars & Stripes Low Beanie",
      689416486: "Red SC Broker Cap",
      693476366: "Light Woodland Shielded Riot",
      693994327: "White Pisswasser Cap",
      700489365: "Hornet Sports Shades",
      702477078: "Beige Digital Scope Night Vision",
      711466726: "Platinum Figure 8s",
      713190801: "Flame Shields",
      717739147: "Pink Retro Bubble",
      719659239: "Red Garrison Cap",
      722881756: "Brown Broker Snapback",
      725401442: "Clan Tartan Bobble",
      730668158: "Reindeer Antlers",
      730931442: "Yellow Cluckin' Bell Cap",
      731677015: "Orange Retro Bubble",
      732329450: "Flecktarn Utility Cap",
      738033881: "Peach Digital Boonie Up",
      738291381: "Square Wrist Chain (L)",
      740882594: "Wheel Crowex Époque",
      741899064: "Brown Shielded Riot",
      743392617: "Pink Urban Deep Shades",
      744441552: "Green Digital Scope Night Vision",
      744670515: "Gold JC Helmet",
      751843682: "Imponte Racing Cap",
      756477607: "Black Casuals",
      760655423: "Gray Camo Backwards Cap",
      760877684: "Brown Fedora",
      763352592: "Rebel Radio Cap",
      766719139: "Dark Woodland Cap",
      773220540: "Flecktarn Cap",
      776834589: "Teal Squared",
      783690164: "Red Forwards Cap",
      788217689: "Skull Helmet",
      789956042: "Striped Deep Shades",
      791444185: "Brushstroke Garrison Cap",
      796465775: "Deadline Blue",
      797434849: "White & Red Peaked Cap",
      800908572: "Glow Reindeer Antlers",
      808987544: "Blue Sports Shades",
      810041826: "Gold Kronos Quad",
      812382133: "Gold Tint Aviators",
      821062469: "Pink Shooters",
      822827697: "White Boonie Up",
      831788638: "Taco Canvas Hat",
      837046740: "Tread Wrist Chain (R)",
      837518379: "Roulette Crowex Époque",
      841991535: "Spots Squash Cap",
      844853618: "Brown Digital Dual Lens",
      846249128: "White SC Broker Cap",
      856006728: "Charcoal Bulletproof",
      857039529: "Elf Tree",
      859091702: "Purple Hotdogs Cap",
      859170964: "Gold Snake Cuff",
      862532614: "Pink LS Diamond Cap",
      869838273: "SA Assault Helmet",
      870660224: "Light Woodland Boonie Down",
      870731796: "Crosshatch Utility Cap",
      872378356: "White Pisswasser Cap",
      883841286: "Lobster Bowler Hat",
      885523988: "Brown Digital Garrison Cap",
      888654762: "Ace of Spades Dome",
      894360887: "Yellow Urban Ski",
      895074294: "Black The Diamond Cap",
      897650066: "White iFruit Tech",
      904568462: "Blue Outlaw Goggles",
      908264513: "Light Brown Peaked Cap",
      917238317: "Blue & Red Peaked Cap",
      919756496: "Black Full Face",
      923919425: "Aqua Camo Quad Lens",
      924364720: "Black SASS Wrist Piece",
      932722835: "Splinter Shielded Riot",
      933935467: "Sapphire Figure 8s",
      935212918: "White Dual Lens",
      938692543: "Visored Skull Cap",
      938847616: "Gray Dice Earrings",
      939297301: "White Shrewsbury Cap",
      940263847: "Black SA Fitted Cap",
      947983877: "Aqua Camo Dual Lens",
      948941033: "Gold Diamond Rounds",
      950034841: "Silver Anna Rex Prestige",
      951091029: "Gray Woodland Quad Lens",
      957326241: "Tan Squared",
      959869364: "Gold Slim Glasses",
      960586670: "Moss Full Face",
      960980504: "Moss Quad Lens",
      962971662: "Black LS Diamond Cap",
      963645821: "Light Woodland Utility Cap",
      965012403: "Zebra Combat Helmet",
      965549044: "Green Digital Boonie Up",
      966582276: "Digital Deep Shades",
      968593239: "Two-Tone Cowgirl Hat",
      973717021: "Champagne Figure 8s",
      975626847: "Desert Digital Scope Night Vision",
      984032746: "Lucky Plucker White Pattern Cap",
      988804193: "Gingerbread Cap",
      992072494: "Crosshatch Dual Lens",
      992611283: "Black JC Helmet",
      992979830: "Blue Digital Backwards Cap",
      993136766: "Fuchsia Saggy Beanie",
      994463107: "Purple SC Broker Cap",
      997913676: "Black SASS Bracelet",
      1006701585: "SecuroServ Cap",
      1009277443: "Feathers Dome",
      1010025015: "Blue Cluckin' Bell Cap",
      1010866145: "Beige Scope Night Vision",
      1013976146: "Silver Retro Bubble",
      1019960284: "SA Assault Helmet",
      1020748209: "Dark Violet Undertaker Hat",
      1027988462: "Crimson Helmet",
      1029429881: "Lampadati Racing Cap",
      1042319929: "Crosshatch Quad Lens",
      1042504585: "Gold Diamond Chains",
      1044343731: "Deck Enduring Watch",
      1051482852: "Bronze Aviators",
      1051922895: "Zap Casuals",
      1054492439: "Fall Shielded Riot",
      1058793252: "Black Stripes Mod Helmet",
      1060333061: "Mono Deep Shades",
      1069549769: "Flecktarn Quad Lens",
      1074759702: "Deadline White",
      1081544158: "Cobble Quad Lens",
      1082234928: "Gold Plain Cuff",
      1085460185: "Green The Diamond Cap",
      1086100948: "Orange Flight Helmet",
      1086101892: "Red Retro Classics",
      1091909545: "Black Riot",
      1093765426: "Tan Canvas Hat",
      1095820292: "Flamejob Helmet",
      1109931910: "Hotdogs Canvas Hat",
      1115754897: "Peach Camo Cap",
      1118356156: "Pink Tint Marbles",
      1128946172: "Blue Cat Eyes",
      1129430236: "MP Riot",
      1132328842: "Navy Sun Hat",
      1133913012: "Red & Navy Garrison Cap",
      1134197198: "Grayscale Urban Ski",
      1135186107: "Lime Tint Shooters",
      1135689506: "Pink Fedora",
      1136409137: "Beige Outlaw Goggles",
      1139730669: "Gray Abstract Bigness Cap",
      1141431203: "Toothy Grin Backwards Cap",
      1142597521: "Black Scope Night Vision",
      1145453656: "Glow Elf Hat",
      1155222325: "Gold SASS Wrist Piece",
      1168567912: "Bugstars Backwards Cap",
      1172439627: "Splinter Shielded Riot",
      1173225373: "Black Kronos Ära",
      1180338603: "Black Beanie Cap",
      1184790053: "Chieftain Tartan Bobble",
      1185088643: "Black Fufu Jeunesse",
      1186426665: "Skull and Snake Dome",
      1186965403: "Black Shrewsbury Cap",
      1187460712: "Gray Digital Boonie Up",
      1194319637: "Moss Boonie Down",
      1199976915: "Blue Shielded Riot",
      1203935435: "Green Roundel Mod",
      1209882676: "Brown Dual Lens",
      1211507678: "Gold Retro Bubble",
      1212261510: "Gear Wrist Chains (R)",
      1213441101: "Cobble Forwards Cap",
      1221142925: "Moss Peaked Cap",
      1222811299: "Dark Woodland Beanie Cap",
      1224052545: "Silver SASS Bracelet",
      1227668279: "Fall Boonie Up",
      1228806057: "Orange Tint Mademoiselles",
      1229053712: "Cluckin' Bell Logos Cap",
      1229830327: "Matte All Black Biker",
      1234300084: "Davis Fitted Cap",
      1235733900: "Tan Bulletproof",
      1243708554: "Dark Woodland Utility Cap",
      1243936518: "Silver Roulette Kronos Pulse",
      1249281061: "Royal Enduring Watch",
      1251424451: "Beige Houndstooth Low Beanie",
      1254374027: "Gray Woodland Dual Lens",
      1255294758: "Pink Striped Squared",
      1257116963: "Black Slim Glasses",
      1262393247: "Khaki Cap",
      1268614884: "Brown Bowler Hat",
      1272666697: "Black Coil Cap",
      1272882613: "Dark Woodland Quad Lens",
      1275830513: "Moss Beanie Cap",
      1281464132: "Red Snowflake Cap",
      1283001864: "Moss Boonie Up",
      1285695028: "Contrast Camo Quad Lens",
      1287047669: "Red Lucky Plucker Cap",
      1288027992: "Contrast Camo Shielded Riot",
      1294197674: "Aqua Camo Shielded Riot",
      1297661210: "Black & Yellow Low Beanie",
      1301834192: "Ox Blood Gauntlet (L)",
      1303728333: "Gold iFruit Link",
      1307245960: "Green Dome",
      1308866081: "Red Striped Saggy Beanie",
      1311155603: "Faggio Mod",
      1312215722: "Gray Woodland Riot",
      1315400258: "Blue LS Diamond Cap",
      1319320010: "Beige Garrison Cap",
      1320038839: "Green Flight Helmet",
      1327643873: "Moss Utility Cap",
      1329430076: "Chepalle Cap",
      1330733365: "Wine Coil Cap",
      1331762545: "Cream Trickster Snapback",
      1333462622: "Ox and Hatchets Tied",
      1335040932: "Star Tree",
      1336177850: "Black & Red Full Face",
      1338147047: "Ace of Spades Helmet",
      1339096804: "Platinum Diamond Chains",
      1340345486: "Splinter Deep Shades",
      1348698753: "Ox and Hatchets Dome",
      1349331396: "Yellow Firefighter",
      1354257449: "Mono Outlaw Goggles",
      1356470642: "Beige Retro",
      1361888489: "PRB iFruit Tech",
      1388442128: "Burger Shot Bullseye Cap",
      1390073570: "Royalty Crowex Rond",
      1396673584: "Navy Mod Pork Pie",
      1397877264: "Matte All Black Biker",
      1400202335: "Blue Digital Boonie Down",
      1401132724: "Cream Bowler Hat",
      1407801454: "Lucky Plucker Red Pattern Cap",
      1408056387: "Tortoiseshell Casuals",
      1409852679: "Slate Beanie Cap",
      1411407481: "Moss Digital Riot",
      1411669343: "Light Gray Backwards Cap",
      1415415366: "Steel Aviators",
      1417125932: "Gray Fufu Jeunesse",
      1419732155: "Deadline White",
      1421184015: "Red Fame or Shame Kronos",
      1422696370: "Fall Quad Lens",
      1426772719: "Blue Digital Boonie Up",
      1434045011: "Stone Scope Night Vision",
      1436694562: "Gray Digital Beanie Cap",
      1437371496: "Pale Abstract Bigness Cap",
      1440153852: "Red The Diamond Cap",
      1446628467: "Cheeky Elf Woolly Trail",
      1450206368: "Brown Plaid Fedora",
      1453506976: "Brown Flight Helmet",
      1453941353: "Stars & Stripes Backwards Cap",
      1456659842: "Sage Green Undertaker Hat",
      1462944740: "Blue JC Helmet",
      1463079126: "Tiger Low Beanie",
      1464797138: "Green Digital Cap",
      1465919337: "Stars & Stripes Combat Helmet",
      1466788119: "Forest Bulletproof",
      1468220904: "Green Snakeskin Forwards Cap",
      1472008492: "Star and Stripes Dome",
      1473396148: "Tiger Quad Lens",
      1482223132: "Teal Marbles",
      1485453573: "Green Taco Bomb Cap",
      1495409020: "Silver Enduring Watch",
      1499538027: "Vintage Bowler Hat",
      1501550221: "White Harsh Souls Snapback",
      1509342549: "Orange Tint Shooters",
      1520422202: "Gray Digital Peaked Cap",
      1520646771: "Pink Tint Mademoiselles",
      1520776139: "Green Ho Ho Ho Cap",
      1522478085: "Light Woodland Shielded Riot",
      1524426555: "White Squared",
      1529908575: "Red Flying Bravo Cap",
      1530317526: "Red Casuals",
      1530396265: "Moss Dual Lens",
      1543171634: "Splinter Riot",
      1545657096: "Gray Digital Shielded Riot",
      1548780849: "Burger Shot Burgers Cap",
      1550891523: "Tan Cap",
      1555966456: "Brown Hipsters",
      1556907724: "Red Flying Bravo Cap",
      1558284086: "Orange The Diamond Cap",
      1562061458: "Carbon Anna Rex Prestige",
      1563387004: "Gray Retro Bubble",
      1565017046: "Roundel Mod",
      1565907463: "Sage Scope Night Vision",
      1567508410: "Moss Digital Beanie Cap",
      1568107382: "White Lucky Plucker Cap",
      1575507436: "White Vom Feuer Cap",
      1576837546: "Ash Mod Pork Pie",
      1577266424: "Cream Sun Hat",
      1578028493: "Leopard Flight Helmet",
      1578419940: "Gold Le Chien Marquise",
      1585747617: "Boars Fitted Cap",
      1585812579: "Black Gauntlet (R)",
      1586207233: "Gray Woodland Dual Lens",
      1591894100: "Pink iFruit Tech",
      1593760922: "Sand Utility Cap",
      1595158721: "Green Urban Ski",
      1598111822: "Platinum Totems",
      1599991698: "Roulette Ceaseless",
      1606907335: "Brushstroke Riot",
      1608037834: "Tiger Quad Lens",
      1608505817: "Purple Saggy Beanie",
      1608910789: "Leopard Dual Lens",
      1612101340: "Charcoal Broker Snapback",
      1614345002: "Ox Blood Outlaw Goggles",
      1620439838: "Red Bugs",
      1622101846: "Fall Quad Lens",
      1622281867: "Platinum Waterfalls",
      1622542486: "Black Gold Diamond Drops",
      1625214621: "Black & Red Quad Lens",
      1633029313: "White Figure 8s",
      1640866652: "Cunning Stunts Cap",
      1643646776: "Cream Top Hat",
      1646929422: "Ride Free Dome",
      1653197288: "Blue Peaked Cap",
      1653706377: "No Master Shielded Riot",
      1655095722: "Stars Helmet",
      1661461139: "Moss Garrison Cap",
      1667138219: "Moss Digital Beret",
      1668295044: "Spade Kronos Pulse",
      1677109583: "Downhill Helmet",
      1677195548: "Dice Crowex Rond",
      1677938045: "Black Flight Helmet",
      1679641125: "Pink Chips Earrings",
      1689896652: "Green Snakeskin Backwards Cap",
      1692676788: "Heritage Tartan Bobble",
      1692778472: "Green Pattern Quad Lens",
      1692835552: "Orange & Black Flight Helmet",
      1697239330: "Blue Canvas Hat",
      1700363752: "Burger Shot Canvas Hat",
      1705331345: "Yellow Slim Glasses",
      1708725970: "Blue Garrison Cap",
      1711856161: "Pink Pattern Quad Lens",
      1716974000: "Splinter Dual Lens",
      1720281330: "Tan Cowgirl Hat",
      1720462887: "Off-White Bigness Cap",
      1731415275: "Black Ho Ho Ho Cap",
      1731883522: "Red Yeti Snapback",
      1734493826: "Aqua Retro",
      1738450000: "Blue & Orange Flight Helmet",
      1743794938: "Prison Authority Backwards Cap",
      1746688416: "Blue Shooters",
      1750602562: "Black Vom Feuer Cap",
      1754104226: "Pink Hotdogs Cap",
      1755973330: "Gray Digital Riot",
      1762420986: "Purple Snakeskin Forwards Cap",
      1763377686: "Dusty Pink Undertaker Hat",
      1764374541: "Moss Mod Pork Pie",
      1768074233: "Crosshatch Cap",
      1769261424: "Aqua Camo Shielded Riot",
      1769518243: "Orange Fiber Dome",
      1775098997: "Sand Beanie Cap",
      1781457211: "Fall Beanie Cap",
      1783131820: "Black Vom Feuer Cap",
      1784800883: "Tiger Flight Helmet",
      1786878738: "Skeleton Helmet",
      1789520069: "Gold JC Helmet",
      1792666126: "White Flight Helmet",
      1793794889: "Red The Diamond Cap",
      1793898282: "Black Kronos Quad",
      1795530037: "Glow Cheeky Elf Woolly Trail",
      1810423995: "White Firefighter",
      1810965290: "Vintage Top Hat",
      1812540768: "Orange The Diamond Cap",
      1813835977: "Silver Accent Shields",
      1813982639: "Brushstroke Full Face",
      1827401558: "Red JC Helmet",
      1828670121: "Orange Hinge Plastic Frames",
      1832407177: "Pink Pattern Quad Lens",
      1832973467: "White Saggy Beanie",
      1837152235: "Dark Woodland Dual Lens",
      1841099636: "Dark Woodland Peaked Cap",
      1843286635: "Red Broker Snapback",
      1844418889: "Blue Tint Marbles",
      1851389190: "Elf Hat",
      1854963687: "Contrast Camo Shielded Riot",
      1855152117: "LCD Earpiece",
      1858377982: "Ash Top Hat",
      1859645187: "Aqua Camo Beret",
      1859775403: "Peach Digital Quad Lens",
      1861212367: "Nagasaki Racing Cap",
      1861763220: "Blue Fame or Shame Kronos",
      1864422494: "Gray Woodland Quad Lens",
      1865656444: "Gray Figure 8s",
      1866072577: "Yellow Sweatbox Snapback",
      1870910964: "Gold Textured Cuff",
      1872566970: "Deadline Purple",
      1875861023: "Nice Cap",
      1877771483: "Dark Woodland Dual Lens",
      1878685072: "Luxury Ice Sports",
      1884826134: "Gray Woodland Shielded Riot",
      1886909784: "White Casuals",
      1904955873: "Ace of Spades Spiked",
      1910682212: "Tan Gauntlet (L)",
      1911071035: "White Marbles",
      1917291884: "Moss Digital Boonie Up",
      1919702324: "Gold Anna Rex Prestige",
      1921204720: "Pink Pattern Dual Lens",
      1921801665: "Flames Combat Helmet",
      1925632506: "Silver JC Helmet",
      1926845998: "Hot Pink Hipsters",
      1927767993: "Red Chips Earrings",
      1938600505: "Teal Garrison Cap",
      1940801949: "Digital Helmet",
      1946961881: "Flash Cap",
      1954336919: "Houndstooth Deep Shades",
      1964779046: "Gray Woodland Beret",
      1967518676: "Zebra Quad Lens",
      1968294997: "Carbon Dome",
      1968569108: "Chunky Wrist Chain (L)",
      1970268516: "Naughty Cap",
      1971818918: "Slate Beret",
      1975896916: "Atomic Cap",
      1980699106: "Blue Digital Shielded Riot",
      1988160967: "Cherry Broker Snapback",
      1989956329: "Slate Mod Pork Pie",
      1990304449: "Crosshatch Riot",
      1994561498: "Blue Retro Bubble",
      1994753042: "Purple Tint Squared",
      1998535002: "Black Gold Sun Drops",
      2001058587: "Blue Cluckin' Bell Cap",
      2001641421: "Black Crowex Rond",
      2001886684: "Black Enduring Watch",
      2003024366: "Beige Sports Shades",
      2003858863: "Pink Canvas Hat",
      2006880771: "Blue Digital Shielded Riot",
      2007194744: "Black Deep Shades",
      2007302899: "Black Skull Forwards Cap",
      2009984738: "Copper Slim Glasses",
      2012827005: "Black Aviators",
      2013166731: "Cobble Cap",
      2015797281: "Black Undertaker Hat",
      2016392814: "Sprunk Helmet",
      2016569598: "Slate Boonie Up",
      2022875733: "Spade Crowex Rond",
      2026483804: "Naughty Flipped Cap",
      2029088472: "Chocolate Beanie Cap",
      2033472441: "Silver Kronos Quad",
      2034246774: "White Bugs",
      2034746968: "White Boonie Down",
      2037089414: "Zebra Flight Helmet",
      2041418586: "Happy Elf Woolly Trail",
      2041801652: "Spiked Gauntlet (L)",
      2043153306: "Red Marble Retro Classics",
      2048301143: "Zebra Dual Lens",
      2049558044: "Chromed Dome",
      2054451968: "Black JC Helmet",
      2054530251: "Red Undertaker Hat",
      2058765845: "Splinter Boonie Down",
      2059095722: "Moss Digital Cap",
      2059508112: "White Riot",
      2059866009: "Wine Coil Cap",
      2064297428: "Black Fedora",
      2065360608: "Pink Hinge Plastic Frames",
      2068969643: "Gold Diamond Cuff",
      2069666077: "Blue Striped Low Beanie",
      2072220237: "Glossy Black Off-road",
      2073560006: "Splinter Cap",
      2084733053: "White Lucky Plucker Cap",
      2087065925: "Chunky Wrist Chain (R)",
      2088725399: "Brown Urban Ski",
      2093025971: "Classic Hoops",
      2100412813: "Gold Diamond Drops",
      2113455896: "Topaz Sports Shades",
      2113498185: "Green Santa Hat",
      2114404000: "White Vom Feuer Cap",
      2116680404: "Blue Snowflake Cap",
      2120985705: "Glossy Mirrored Biker",
      2123418272: "Orange LS Diamond Cap",
      2127514158: "Burger Shot Logo Cap",
      2129325700: "Black Plastic Frames",
      2130436251: "Green Fame or Shame Kronos",
      2145711590: "Dark Woodland Quad Lens",
      2146048149: "Neon iFruit Snap",
      "-1809878191": "Two-Tone Sports Shades",
      "-2039097346": "Orange Sports Shades",
      "-1951899017": "Purple Sports Shades",
      "-1622115318": "Copper Marbles",
      "-1127336187": "Black Marbles",
      "-1986768750": "Purple Marbles",
      "-869061120": "Luxury Cowhide Sports",
      "-1939493298": "Black Pattern Sports",
      "-698531240": "Blue Pattern Sports",
      "-1343589033": "Pink Pattern Sports",
      "-809108203": "Pewter Aviators",
      "-2111086111": "Neon Aviators",
      "-877660963": "Copper Aviators",
      "-438228673": "Gold Aviators",
      "-1340850778": "Slate Aviators",
      "-1614474524": "Black Cat Eyes",
      "-714703322": "Brown Marble Cat Eyes",
      "-1188084296": "Pink Cat Eyes",
      "-383048273": "Green Marble Cat Eyes",
      "-692289326": "Red Cat Eyes",
      "-94484459": "Purple Cat Eyes",
      "-1291949308": "Marble Mademoiselles",
      "-1590081670": "Copper Mademoiselles",
      "-1396875610": "Walnut Mademoiselles",
      "-1376296678": "Black Mademoiselles",
      "-2142665281": "Vintage Red Mademoiselles",
      "-1847023363": "Gold Mademoiselles",
      "-1898269116": "Zebra Shields",
      "-1270644459": "Violet Shields",
      "-972675942": "Sun Shields",
      "-34040710": "Party Shields",
      "-1389080027": "Deep Walnut Retro",
      "-1007321177": "Marble Retro",
      "-2077425645": "Dice Retro",
      "-1696060023": "Black Retro",
      "-1341433905": "Toffee Retro",
      "-1109658768": "Red Retro",
      "-15223435": "Purple Tint Bugs",
      "-2062789587": "Amethyst Figure 8s",
      "-1824132960": "Gold Figure 8s",
      "-1109834294": "Garnet Figure 8s",
      "-1717761584": "Orange Tint Squared",
      "-2001069353": "Tropic Shooters",
      "-1745634998": "Fly Shooters",
      "-1656372242": "Crimson Shooters",
      "-1300763054": "Green Tint Shooters",
      "-1213510040": "Pewter Watch",
      "-1809744555": "Zeus Flight Helmet",
      "-1174189788": "Green & Yellow Flight Helmet",
      "-1680864066": "DFA Flight Helmet",
      "-913381317": "Snake Killers Flight Helmet",
      "-14757030": "Red & White Flight Helmet",
      "-216548532": "Other Side Flight Helmet",
      "-523135296": "STFU Flight Helmet",
      "-1546790582": "Patriot Flight Helmet",
      "-1869991237": "Shark Mouth Flight Helmet",
      "-2078467615": "Yellow & Black Flight Helmet",
      "-455474194": "Black Bulletproof",
      "-304450162": "Assault Hoops",
      "-208354700": "Chunky Hoops",
      "-2076276414": "Diamond Yeti Snapback",
      "-1365582342": "Tan Fruntalot Snapback",
      "-1885102068": "Green Sweatbox Snapback",
      "-907504491": "Jungle Yeti Snapback",
      "-1118405775": "Forest Trickster Snapback",
      "-1274550056": "Coffee Broker Snapback",
      "-1041628004": "Dual Trey Baker Snapback",
      "-794058209": "Gray Sweatbox Snapback",
      "-277291079": "Cream Sweatbox Snapback",
      "-2095109685": "Navy Fruntalot Snapback",
      "-1634475852": "All Black Broker Snapback",
      "-1864940229": "Black Broker Snapback",
      "-1450063403": "Navy Trickster Snapback",
      "-2107081857": "Blue Sweatbox Snapback",
      "-1690456867": "Stripy Yeti Snapback",
      "-1517502085": "Link Trickster Snapback",
      "-1355237368": "Magnetics Script Fitted Cap",
      "-1020665878": "Magnetics Block Fitted Cap",
      "-859835626": "Low Santos Fitted Cap",
      "-148879406": "Benny's Fitted Cap",
      "-1596351674": "Westside Fitted Cap",
      "-1296810245": "Eastside Fitted Cap",
      "-1140502115": "Strawberry Fitted Cap",
      "-1443711576": "Platinum Pendulums",
      "-1639548700": "Gold Pendulums",
      "-732139551": "Platinum Diamond Drops",
      "-1904154072": "Gold Waterfalls",
      "-83147973": "Black Gold Waterfalls",
      "-1681114781": "Gold Totems",
      "-1451338553": "Black Gold Totems",
      "-194852851": "Black Gold Diamond Chains",
      "-427023211": "Gold Emerald Chains",
      "-1546281175": "Platinum Emerald Chains",
      "-755928835": "Gold Sun Drops",
      "-995437456": "Platinum Sun Drops",
      "-245056030": "Platinum Diamond Studs",
      "-745373122": "Gold Diamond Studs",
      "-852297611": "Gold CaCa Di Lusso",
      "-2059736962": "Silver CaCa Di Lusso",
      "-1803417836": "Pink Gold CaCa Di Lusso",
      "-597673684": "Silver Didier Sachs Mignon",
      "-828203599": "Pink Gold Didier Sachs Mignon",
      "-775726873": "Silver iFruit Link",
      "-670276231": "Pink Gold iFruit Link",
      "-1135607426": "Flight Helmet",
      "-980660623": "Gray Earpiece",
      "-1307283359": "Red Earpiece",
      "-1800817877": "White Casual Glasses",
      "-142113927": "Camo Collection Casuals",
      "-740901860": "Blood Casuals",
      "-201458582": "Black Casual Glasses",
      "-825739308": "Matte Black Off-road",
      "-584470541": "Glossy All Black Biker",
      "-917609546": "Glossy Mirrored Biker",
      "-430949131": "Matte Mirrored Biker",
      "-520404198": "Black Cap",
      "-314372800": "Tan Outlaw Goggles",
      "-83187505": "Black Outlaw Goggles",
      "-788523881": "Tropical Urban Ski",
      "-1743772996": "Pink Urban Ski",
      "-1984199149": "Orange Urban Ski",
      "-624091904": "Black Tied",
      "-1830679253": "Uptown Riders Tied",
      "-1362836240": "Ace of Spades Tied",
      "-1544179886": "Skull and Snake Tied",
      "-1111399703": "Stars and Stripes Tied",
      "-491375563": "Black Spiked",
      "-174892561": "Carbon Spiked",
      "-1047727645": "Orange Fiber Spiked",
      "-750414508": "Star and Stripes Spiked",
      "-1917187522": "Green Spiked",
      "-1603948651": "Feathers Spiked",
      "-1799219126": "Ox and Hatchets Spiked",
      "-1494238043": "Ride Free Spiked",
      "-2061502198": "Skull and Snake Spiked",
      "-1494028059": "Cream Mod Canvas",
      "-976015707": "Red Mod Canvas",
      "-1273722072": "Blue Mod Canvas",
      "-481400421": "Cyan Mod Canvas",
      "-812891625": "White Mod Canvas",
      "-17227536": "Ash Mod Canvas",
      "-46129794": "Navy Mod Canvas",
      "-101476639": "Slate Mod Canvas",
      "-61776295": "Red Mod Pork Pie",
      "-1426768990": "Blue Mod Pork Pie",
      "-1088134144": "Cyan Mod Pork Pie",
      "-1381777153": "White Mod Pork Pie",
      "-2007828906": "Dark Red Mod Pork Pie",
      "-649711428": "Skull Cap",
      "-1817895920": "Finned Skull Cap",
      "-236006658": "Spiked Skull Cap",
      "-2028834858": "Black Dome",
      "-2141668303": "Deadline Yellow",
      "-869575723": "Deadline Green",
      "-1781110996": "Deadline Orange",
      "-1945218152": "Deadline Pink",
      "-1646987483": "Deadline Red",
      "-629228294": "Deadline Yellow",
      "-323034758": "Deadline Green",
      "-2134898306": "Deadline Orange",
      "-1873073996": "Deadline Purple",
      "-1575367631": "Deadline Pink",
      "-1213728947": "Deadline Red",
      "-1956012343": "Deadline Blue",
      "-948790545": "Light Wrist Chain (L)",
      "-1245653009": "Skull Wrist Chain (L)",
      "-1293826866": "Tread Wrist Chain (L)",
      "-391571123": "Gear Wrist Chains (L)",
      "-851580659": "Black Gauntlet (L)",
      "-1092072350": "Chocolate Gauntlet (L)",
      "-1161764833": "Light Wrist Chain (R)",
      "-463084870": "Square Wrist Chain (R)",
      "-607053256": "Skull Wrist Chain (R)",
      "-1699812762": "Spiked Gauntlet (R)",
      "-1321453105": "Chocolate Gauntlet (R)",
      "-1022829208": "Tan Gauntlet (R)",
      "-418716130": "Two-Tone Retro Classics",
      "-1067771713": "Multicolored Retro Classics",
      "-770393038": "Peach Retro Classics",
      "-1374456784": "Baby Blue Retro Classics",
      "-1969115827": "Lime Retro Classics",
      "-1200758446": "Black Hipsters",
      "-1413199873": "Blue Hipsters",
      "-1813112749": "Marble Hipsters",
      "-1528186290": "Dipped Hipsters",
      "-1756160223": "Red Hipsters",
      "-2107312827": "Orange Hipsters",
      "-1618381103": "Cream Fedora",
      "-2000074415": "White Fedora",
      "-82235921": "Gray Fedora",
      "-464322461": "Red Plaid Fedora",
      "-1665281132": "Gray Striped Saggy Beanie",
      "-379046860": "Shatter Pattern Helmet",
      "-1120255870": "Burst Helmet",
      "-1358650345": "Tri Helmet",
      "-131451295": "Cobble Helmet",
      "-1579710019": "Cubist Helmet",
      "-19215498": "Boost Helmet",
      "-981608259": "Tropic Helmet",
      "-146359218": "Atomic Helmet",
      "-1989217217": "White Helmet",
      "-1464192299": "Slalom Helmet",
      "-1730539866": "Glossy All Black Biker",
      "-2136376254": "LTD Cap",
      "-789144321": "Nagasaki Moto Cap",
      "-223092615": "Patriot Cap",
      "-549897852": "Redwood Cap",
      "-1976889495": "Scooter Brothers Cap",
      "-1410575637": "The Mount Cap",
      "-428980242": "Total Ride Cap",
      "-1731482454": "Vapid Cap",
      "-1390357480": "Xero Gas Cap",
      "-1178170642": "Cunning Stunts Cap",
      "-880726429": "Flash Cap",
      "-699776011": "Fukaru Cap",
      "-401873032": "Globe Oil Cap",
      "-700496933": "Grotti Cap",
      "-404429018": "Imponte Racing Cap",
      "-2134238990": "Lampadati Racing Cap",
      "-498935298": "White JC Helmet",
      "-1649618733": "Pink JC Helmet",
      "-33785330": "White JC Helmet",
      "-263266637": "Blue JC Helmet",
      "-2009624954": "Red JC Helmet",
      "-1530706019": "Pink JC Helmet",
      "-2012939146": "Gold Retro Bubble",
      "-1811803020": "Silver Retro Bubble",
      "-1863109289": "Silver JC Helmet",
      "-1795774903": "Shatter Pattern Helmet",
      "-97167695": "Sprunk Helmet",
      "-1128145973": "Skeleton Helmet",
      "-768538967": "Death Helmet",
      "-1757015852": "Cobble Helmet",
      "-855868352": "Cubist Helmet",
      "-1951624263": "Squared Helmet",
      "-1906494902": "Snakeskin Helmet",
      "-2060771354": "Boost Helmet",
      "-1295975663": "Tropic Helmet",
      "-1586249913": "Crimson Helmet",
      "-1472181024": "Skull Helmet",
      "-1116178608": "Ace of Spades Helmet",
      "-1028914761": "Flamejob Helmet",
      "-654496167": "White Helmet",
      "-194779866": "Slalom Helmet",
      "-2085952908": "Matte Mirrored Biker",
      "-1437794634": "Cream Retro Bubble",
      "-736809292": "Red Retro Bubble",
      "-1787383432": "Black Retro Bubble",
      "-2018175499": "Pink Retro Bubble",
      "-547723060": "White Retro Bubble",
      "-655377453": "Gray Retro Bubble",
      "-894099618": "Orange Retro Bubble",
      "-193432860": "Pale Blue Retro Bubble",
      "-1657846705": "White Retro Bubble",
      "-904028641": "Blue Retro Bubble",
      "-1007816466": "Blue Stripes Mod Helmet",
      "-1573606020": "Red Stripes Mod Helmet",
      "-848723007": "Blue Chain Mod Helmet",
      "-102277956": "Black Jag Mod Helmet",
      "-320175686": "Swirl Mod Helmet",
      "-22469321": "Red Mod Helmet",
      "-14277051": "White Flag Mod Helmet",
      "-2014351449": "Auto Exotic Cap",
      "-6087023": "LTD Cap",
      "-296977436": "Nagasaki Racing Cap",
      "-761772932": "Nagasaki Moto Cap",
      "-197031946": "Rebel Radio Cap",
      "-504896701": "Redwood Cap",
      "-781467061": "Scooter Brothers Cap",
      "-944394529": "The Mount Cap",
      "-1242690736": "Total Ride Cap",
      "-1704799214": "Vapid Cap",
      "-1481625167": "Xero Gas Cap",
      "-2076088253": "Fukaru Cap",
      "-1309846087": "Tan Cashmere Fedora",
      "-1556662195": "Light Gray Cashmere Fedora",
      "-824766608": "Brown Cashmere Fedora",
      "-1080299242": "Red Cashmere Fedora",
      "-352139321": "Gray Cashmere Fedora",
      "-598693277": "Navy Cashmere Fedora",
      "-266807440": "Blue Fufu Jeunesse",
      "-734772944": "Lime iFruit Snap",
      "-238846898": "White iFruit Snap",
      "-1763420750": "Gold Detail Cuff",
      "-1210534984": "Gold Swirl Cuff",
      "-1909775282": "Pink Hotdogs Cap",
      "-1299649271": "Red Lucky Plucker Cap",
      "-1622686073": "Lucky Plucker Red Pattern Cap",
      "-989425148": "Lucky Plucker White Pattern Cap",
      "-373138565": "Black Pisswasser Cap",
      "-696044291": "White Taco Bomb Cap",
      "-1616148187": "Burger Shot Logo Cap",
      "-351854629": "Cluckin' Bell Logos Cap",
      "-2019567350": "Black Hotdogs Cap",
      "-1772292476": "Taco Bomb Cap",
      "-1366349395": "Burger Shot Fries Cap",
      "-244345992": "Green Taco Bomb Cap",
      "-531460813": "Black Hotdogs Cap",
      "-367550275": "Taco Bomb Cap",
      "-1207676099": "Star Spangled Shades",
      "-1820516280": "USA Bucket Hat",
      "-809555989": "Red Top Foam Hat",
      "-586628482": "Blue Top Foam Hat",
      "-996489533": "Patriotic Beanie",
      "-1890152465": "USA Crown",
      "-1603287920": "Pisswasser Beer Hat",
      "-1372102625": "Benedict Beer Hat",
      "-2062742069": "J Lager Beer Hat",
      "-1832408768": "Patriot Beer Hat",
      "-1936122689": "Blarneys Beer Hat",
      "-1697531600": "Supa Wet Beer Hat",
      "-1649042315": "Black Bigness Cap",
      "-1604279861": "Red Bigness Cap",
      "-1358863892": "Banana Squash Cap",
      "-599081858": "Splat Squash Cap",
      "-1844140013": "OJ Squash Cap",
      "-2141551457": "Multicolor Leaves Güffy Cap",
      "-373631138": "Red Güffy Cap",
      "-1695803674": "Orange Camo Sand Castle Cap",
      "-1397343622": "Purple Güffy Cap",
      "-1994165419": "Bold Abstract Bigness Cap",
      "-1842791763": "Glow Classic Tree",
      "-398661937": "Glow Purple Tree",
      "-1992808069": "Glow Holly Tree",
      "-1769847793": "Glow Star Tree",
      "-1863208386": "Woodland Combat Helmet",
      "-2138762907": "Dark Combat Helmet",
      "-969997051": "Red Star Combat Helmet",
      "-238363588": "MP Combat Helmet",
      "-731340420": "Tiger Combat Helmet",
      "-887910702": "Police Combat Helmet",
      "-1251771615": "Light Combat Helmet",
      "-896856995": "Green Stars Combat Helmet",
      "-1639140383": "Peace Combat Helmet",
      "-1482563682": "Flecktarn Combat Helmet",
      "-668516188": "Black Combat Helmet",
      "-883120369": "Medic Combat Helmet",
      "-1772143355": "Gray Woodland Combat Helmet",
      "-1532110430": "Tan Digital Combat Helmet",
      "-1159789056": "Aqua Camo Combat Helmet",
      "-919297365": "Splinter Combat Helmet",
      "-5138593": "Red Peaked Cap",
      "-980742167": "Navy Peaked Cap",
      "-804510485": "Aqua Camo Peaked Cap",
      "-1172047589": "Gray Peaked Cap",
      "-1998416231": "Green & Red Peaked Cap",
      "-1782042524": "Brown & Red Peaked Cap",
      "-1173995733": "White & Gold Garrison Cap",
      "-1586831528": "Gray Garrison Cap",
      "-1408109402": "Zebra Garrison Cap",
      "-830445537": "Gray Leopard Garrison Cap",
      "-1655896647": "Navy Garrison Cap",
      "-1975066707": "Aqua Camo Garrison Cap",
      "-1743684798": "Black Garrison Cap",
      "-480013134": "Tiger Full Face",
      "-1449483999": "Fall Full Face",
      "-1674574260": "Dark Woodland Full Face",
      "-836146626": "Crosshatch Full Face",
      "-1061957805": "Green Pattern Full Face",
      "-1439653307": "Gray Woodland Full Face",
      "-1669200152": "Aqua Camo Full Face",
      "-1501586717": "Splinter Full Face",
      "-2087192490": "Brown Full Face",
      "-1834779977": "Contrast Camo Full Face",
      "-1178449672": "Cobble Full Face",
      "-2101683482": "Zebra Full Face",
      "-1786471373": "White Full Face",
      "-1747312418": "Leopard Full Face",
      "-1424439461": "Brown Digital Full Face",
      "-1805077109": "Black Dual Lens",
      "-2073160298": "Moss Dual Lens",
      "-355861856": "Tiger Dual Lens",
      "-670051028": "Pink Pattern Dual Lens",
      "-731394608": "Peach Digital Dual Lens",
      "-2111723195": "Fall Dual Lens",
      "-1649516450": "Crosshatch Dual Lens",
      "-1659478226": "Green Pattern Dual Lens",
      "-1310068595": "Brown Dual Lens",
      "-1042176020": "Cobble Dual Lens",
      "-1310455823": "Brushstroke Dual Lens",
      "-541531238": "Flecktarn Dual Lens",
      "-1946207192": "Black & Red Dual Lens",
      "-1482433535": "White Dual Lens",
      "-311483687": "Black Dual Lens",
      "-1498568124": "Tiger Dual Lens",
      "-939725598": "Peach Digital Dual Lens",
      "-1782118281": "Fall Dual Lens",
      "-1865056620": "Green Pattern Dual Lens",
      "-119910752": "Aqua Camo Dual Lens",
      "-517268002": "Contrast Camo Dual Lens",
      "-285034099": "Cobble Dual Lens",
      "-135705766": "Brushstroke Dual Lens",
      "-1721266608": "Black & Red Dual Lens",
      "-1479726309": "Zebra Dual Lens",
      "-864198462": "Brown Digital Dual Lens",
      "-492514497": "Aqua Camo Quad Lens",
      "-1301483080": "Brushstroke Quad Lens",
      "-1541647081": "Flecktarn Quad Lens",
      "-2103373279": "Zebra Quad Lens",
      "-1913942173": "White Quad Lens",
      "-758802154": "Leopard Quad Lens",
      "-466600981": "Brown Digital Quad Lens",
      "-2116957533": "Black Quad Lens",
      "-1819382244": "Moss Quad Lens",
      "-1024132091": "Peach Digital Quad Lens",
      "-985431902": "Splinter Quad Lens",
      "-2118202767": "Brown Quad Lens",
      "-92864968": "Contrast Camo Quad Lens",
      "-1585591225": "Cobble Quad Lens",
      "-1941659179": "Brushstroke Quad Lens",
      "-1316918194": "Black & Red Quad Lens",
      "-1812238614": "White Quad Lens",
      "-1520528976": "Leopard Quad Lens",
      "-1247399361": "Brown Digital Quad Lens",
      "-784873756": "Black Low Beanie",
      "-1769746051": "Charcoal Low Beanie",
      "-665955585": "Aqua Camo Low Beanie",
      "-1934214192": "Tricolore Low Beanie",
      "-1858943799": "Rasta Trio Low Beanie",
      "-207648343": "Brown Striped Low Beanie",
      "-864273565": "Blue & Yellow Low Beanie",
      "-1397359135": "Ash Low Beanie",
      "-1842493465": "Green Houndstooth Low Beanie",
      "-1346370575": "White Low Beanie",
      "-993120755": "Red Low Beanie",
      "-1961805164": "Blue Low Beanie",
      "-531438314": "Light Blue Low Beanie",
      "-166489953": "Beige Low Beanie",
      "-649574507": "Gold Fame or Shame Mics",
      "-2157370": "Silver Fame or Shame Mics",
      "-216689464": "Hearts Earrings",
      "-832681126": "Spades Earrings",
      "-879405891": "Red Dice Earrings",
      "-590416080": "Tan Dice Earrings",
      "-229054818": "Yellow Chips Earrings",
      "-2114381102": "Dot Fade Aviators",
      "-1816150433": "Orange Fade Tint Aviators",
      "-893014934": "Walnut Aviators",
      "-259196936": "Horizon Aviators",
      "-780420710": "Purple Vine Aviators",
      "-674970068": "Herringbone Aviators",
      "-1021895471": "Magenta Tint Aviators",
      "-118159160": "Electric Blue Tint Aviators",
      "-1534020014": "Two Tone Deep Shades",
      "-2025884136": "Zebra Deep Shades",
      "-1950941429": "Mute Deep Shades",
      "-848297344": "Black Fame or Shame Shades",
      "-482267614": "Red Fame or Shame Shades",
      "-237778105": "Blue Fame or Shame Shades",
      "-1828252865": "White Deep Shades",
      "-179710113": "Red Deep Shades",
      "-2007933483": "Black Broker Cap",
      "-1251592190": "Teal Broker Cap",
      "-1967234385": "Green Flying Bravo Cap",
      "-999991808": "Black SC Broker Cap",
      "-220122377": "Teal SC Broker Cap",
      "-1460494565": "Purple SC Broker Cap",
      "-696944096": "Red SC Broker Cap",
      "-401629808": "White LS Diamond Cap",
      "-1681356233": "White SC Broker Cap",
      "-881432174": "Gray Yeti Cap",
      "-920951580": "Colors Yeti Cap",
      "-1000973478": "Woodland Yeti Cap",
      "-1329942809": "Purple The Diamond Cap",
      "-1594746655": "Pink LS Diamond Cap",
      "-309349857": "Teal Broker Cap",
      "-917050966": "Green Flying Bravo Cap",
      "-1231305676": "Black SC Broker Cap",
      "-1530257263": "Teal SC Broker Cap",
      "-351032469": "White LS Diamond Cap",
      "-1627712069": "Colors Yeti Cap",
      "-2105157031": "Blue LS Diamond Cap",
      "-2000361769": "Green The Diamond Cap",
      "-730890721": "Orange LS Diamond Cap",
      "-1557357670": "Purple The Diamond Cap",
      "-1962375860": "Roulette Enduring Watch",
      "-391557691": "Gold Kronos Tempo",
      "-160700086": "Silver Kronos Tempo",
      "-951710977": "Black Kronos Tempo",
      "-588368305": "Gold Fifty Kronos Tempo",
      "-1441574758": "Gold Roulette Kronos Tempo",
      "-1049067676": "Baroque Kronos Tempo",
      "-33792330": "Silver Kronos Pulse",
      "-1404585166": "Black Fame or Shame Kronos",
      "-390281864": "Gold Kronos Ära",
      "-1127453288": "Gold Fifty Kronos Ära",
      "-1392325115": "Tan Spade Kronos Ära",
      "-667278221": "Brown Spade Kronos Ära",
      "-269217600": "Gold Ceaseless",
      "-1512211324": "Silver Ceaseless",
      "-1265821213": "Black Ceaseless",
      "-1035782833": "Spade Ceaseless",
      "-802565860": "Mixed Metals Ceaseless",
      "-94071526": "Silver Crowex Époque",
      "-1725983849": "Roulette Kronos Quad",
      "-1965033712": "Fifty Kronos Quad",
      "-1129686356": "Suits Kronos Quad",
      "-1927099531": "Silver Crowex Rond",
      "-1622315062": "Gold Crowex Rond",
      "-985871382": "Silver SASS Wrist Piece",
      "-1510674442": "Black Riot",
      "-1594680875": "Splinter Riot",
      "-1004740568": "Brushstroke Riot",
      "-1301955398": "Moss Digital Riot",
      "-377672944": "MP Riot",
      "-80753035": "LSPD Riot",
      "-1936704211": "Gray Riot",
      "-568532931": "Moss Riot",
      "-1336802136": "Brown Digital Riot",
      "-1012978878": "Gray Digital Riot",
      "-112355682": "Fall Riot",
      "-1114525536": "White Riot",
      "-1781898800": "LSPD Riot",
      "-405961445": "Brown Digital Riot",
      "-915126171": "Blue Digital Riot",
      "-618206262": "Fall Riot",
      "-1268249711": "Black Shielded Riot",
      "-9264723": "Cream Shielded Riot",
      "-1380232692": "Fall Shielded Riot",
      "-1219336914": "Gray Woodland Shielded Riot",
      "-1306371378": "Moss Digital Shielded Riot",
      "-1544503701": "Crosshatch Shielded Riot",
      "-1900702731": "No Master Shielded Riot",
      "-385922937": "Police Shielded Riot",
      "-790969226": "Stone Gray Shielded Riot",
      "-26501217": "Ox Blood Shielded Riot",
      "-1184720748": "Black Shielded Riot",
      "-1759021132": "Moss Digital Shielded Riot",
      "-770970244": "Crosshatch Shielded Riot",
      "-806894190": "Brown Shielded Riot",
      "-2070860058": "Ox Blood Shielded Riot",
      "-1362590892": "Blue Shielded Riot",
      "-528521535": "Brown Digital Shielded Riot",
      "-1725114339": "Gray Digital Shielded Riot",
      "-237501475": "Orange Firefighter & Goggles",
      "-216857217": "Green Digital Scope Night Vision",
      "-1635669225": "Black Scope Night Vision",
      "-1457995707": "Sage Scope Night Vision",
      "-196290900": "White Scope Night Vision",
      "-430220728": "Bugstars Forwards Cap",
      "-124125499": "Prison Authority Forwards Cap",
      "-1024027777": "Yung Ancestor Forwards Cap",
      "-1462377132": "Toothy Grin Forwards Cap",
      "-752535050": "Wolf Forwards Cap",
      "-1923928497": "Gray Camo Forwards Cap",
      "-550415858": "Blood Cross Forwards Cap",
      "-1011573995": "Green Camo Forwards Cap",
      "-168657008": "Green Neon Camo Forwards Cap",
      "-435546035": "Teal Forwards Cap",
      "-1144339505": "Smiley Forwards Cap",
      "-1318146281": "Blue Wave Forwards Cap",
      "-2079501215": "Stars & Stripes Forwards Cap",
      "-87504600": "Wolf Backwards Cap",
      "-566423535": "Black Skull Backwards Cap",
      "-392747839": "Brown Skull Backwards Cap",
      "-938744917": "Green Neon Camo Backwards Cap",
      "-1172158504": "Purple Neon Camo Backwards Cap",
      "-1306150945": "Cobble Backwards Cap",
      "-1163595103": "Purple Snakeskin Backwards Cap",
      "-272755564": "Teal Backwards Cap",
      "-1938043391": "Gray Digital Backwards Cap",
      "-2136741719": "Gruppe Sechs Helmet",
      "-158989462": "Orange Construction Helmet",
      "-1289257810": "White Construction Helmet",
      "-1531322413": "Blue Construction Helmet",
      "-1967962822": "Dark Gray Undertaker Hat",
      "-1165533937": "Ash Undertaker Hat",
      "-837876702": "Eggshell Undertaker Hat",
      "-529717026": "White Undertaker Hat",
      "-1614188698": "Dusty Violet Undertaker Hat",
      "-1373697007": "Light Gray Undertaker Hat",
      "-1933129363": "Terracotta Undertaker Hat",
      "-355881275": "Blue Digital Cap",
      "-989240507": "Brown Digital Cap",
      "-1033105043": "Aqua Camo Cap",
      "-1327141280": "Contrast Camo Cap",
      "-84671880": "Light Woodland Cap",
      "-427533931": "Sand Cap",
      "-1349207972": "Gray Digital Cap",
      "-1114287011": "Peach Digital Cap",
      "-726269270": "Gray Woodland Cap",
      "-213048308": "Brown Digital Boonie Down",
      "-1325256016": "Aqua Camo Boonie Down",
      "-1786152005": "Contrast Camo Boonie Down",
      "-401202985": "Cobble Boonie Down",
      "-104086462": "Peach Camo Boonie Down",
      "-862426660": "Brushstroke Boonie Down",
      "-565768903": "Flecktarn Boonie Down",
      "-309323630": "Green Digital Boonie Down",
      "-707199107": "Black Boonie Down",
      "-1959859674": "Slate Boonie Down",
      "-525855461": "Chocolate Boonie Down",
      "-1004512244": "Light Brown Boonie Down",
      "-1974119906": "Fall Boonie Down",
      "-1131661685": "Dark Woodland Boonie Down",
      "-666472961": "Crosshatch Boonie Down",
      "-1048559501": "Moss Digital Boonie Down",
      "-352840878": "Gray Woodland Boonie Down",
      "-232321747": "Brown Digital Boonie Up",
      "-91461076": "Aqua Camo Boonie Up",
      "-858616135": "Splinter Boonie Up",
      "-111024165": "Contrast Camo Boonie Up",
      "-913602513": "Cobble Boonie Up",
      "-1546732366": "Peach Camo Boonie Up",
      "-436322028": "Brushstroke Boonie Up",
      "-1105694395": "Flecktarn Boonie Up",
      "-1873439296": "Light Woodland Boonie Up",
      "-1362963814": "Sand Boonie Up",
      "-1114311742": "Olive Boonie Up",
      "-1294344628": "Light Brown Boonie Up",
      "-1869952526": "Dark Woodland Boonie Up",
      "-1648303010": "Crosshatch Boonie Up",
      "-2140001855": "Gray Woodland Boonie Up",
      "-1845545647": "Splinter Beret",
      "-1571301886": "Contrast Camo Beret",
      "-1308723889": "Cobble Beret",
      "-1068690936": "Peach Camo Beret",
      "-685031484": "Brushstroke Beret",
      "-450831441": "Flecktarn Beret",
      "-370023087": "Light Woodland Beret",
      "-140738394": "Moss Beret",
      "-1441329137": "Green Digital Beret",
      "-1647943133": "Midnight Beret",
      "-1960723238": "Ice Beret",
      "-1756539591": "Chocolate Beret",
      "-1408532811": "Olive Beret",
      "-505451940": "Light Brown Beret",
      "-1135561598": "Gray Digital Beret",
      "-1434971939": "Peach Digital Beret",
      "-1137593264": "Fall Beret",
      "-942027872": "Dark Woodland Beret",
      "-643797203": "Crosshatch Beret",
      "-1318794481": "Blue Digital Utility Cap",
      "-1557942643": "Brown Digital Utility Cap",
      "-1094542300": "Aqua Camo Utility Cap",
      "-858277810": "Splinter Utility Cap",
      "-760429576": "Contrast Camo Utility Cap",
      "-395579530": "Cobble Utility Cap",
      "-166032685": "Peach Camo Utility Cap",
      "-1931640319": "Green Digital Utility Cap",
      "-1699228369": "Black Utility Cap",
      "-826393285": "Slate Utility Cap",
      "-1195044535": "White Utility Cap",
      "-202242142": "Chocolate Utility Cap",
      "-598091662": "Olive Utility Cap",
      "-23009914": "Gray Digital Utility Cap",
      "-396379900": "Peach Digital Utility Cap",
      "-662890177": "Fall Utility Cap",
      "-809259937": "Blue Digital Beanie Cap",
      "-570506027": "Aqua Camo Beanie Cap",
      "-339124118": "Splinter Beanie Cap",
      "-1033171538": "Contrast Camo Beanie Cap",
      "-804607763": "Cobble Beanie Cap",
      "-1829392700": "Peach Camo Beanie Cap",
      "-1598731709": "Brushstroke Beanie Cap",
      "-430516855": "Flecktarn Beanie Cap",
      "-200052478": "Light Woodland Beanie Cap",
      "-467184346": "Green Digital Beanie Cap",
      "-1690651798": "White Beanie Cap",
      "-1901614548": "Crosshatch Beanie Cap",
      "-1543875375": "Gray Woodland Beanie Cap",
      "-73647644": "Red Hawk & Little Cap",
      "-313418417": "Black Hawk & Little Cap",
      "-850093035": "Warstock Cap",
      "-698486936": "White Shrewsbury Cap",
      "-1072905530": "Black Shrewsbury Cap",
      "-1563654102": "Black Ammu-Nation Cap",
      "-720081735": "Red Ammu-Nation Cap",
      "-1765816422": "Red Hawk & Little Cap",
      "-1533320367": "Black Hawk & Little Cap",
      "-1832969872": "Warstock Cap",
      "-1997689882": "Black Coil Cap",
      "-1617209023": "Black Ammu-Nation Cap",
      "-1391954917": "Red Ammu-Nation Cap",
      "-1292107961": "Captain Peaked Cap",
      "-723493963": "Brown Bugs",
      "-500992453": "Black Cool Tint Bugs",
      "-1739758960": "Green Marble Bugs",
      "-980697844": "Teal Bugs",
      "-2017083007": "Pink Bugs",
      "-479862111": "Black Cowgirl Hat",
      "-1254685116": "Pink Cowgirl Hat",
      "-990861897": "Red Striped Cowgirl Hat",
      "-1735340808": "Striped Cowgirl Hat",
      "-1344510330": "Red Canvas Hat",
      "-1636580427": "Yellow Canvas Hat",
      "-1684357629": "Sky Blue Canvas Hat",
      "-2010147027": "Spotted Canvas Hat",
      "-344209529": "Two-Tone Sun Hat",
      "-575034365": "Dark Brown Sun Hat",
      "-92904068": "Wild Sun Hat",
      "-336046992": "Classic Tree",
      "-879422550": "Holly Tree",
      "-45091041": "Red Stripy Tree",
      "-1451177777": "Pudding Woolly Knit",
      "-1938048778": "Naughty Elf Woolly Trail",
      "-1342898200": "Silly Elf Woolly Trail",
      "-721284370": "Highland Tartan Bobble",
      "-1977527541": "Black Ho Ho Ho Flipped Cap",
      "-1670449242": "Blue Snowflake Flipped Cap",
      "-1385031204": "Nice Flipped Cap",
      "-1088111295": "Green Ho Ho Ho Flipped Cap",
      "-1530918836": "Red Snowflake Flipped Cap",
      "-1221415631": "Gingerbread Flipped Cap",
      "-629869643": "Bah Humbug Flipped Cap",
      "-1316105355": "Red Santa Hat",
      "-1901945713": "Steel Slim Glasses",
      "-1679968507": "Pewter Slim Glasses",
      "-211753462": "Gold Stem Slim Glasses",
      "-284371143": "White Plastic Glasses",
      "-1976859387": "Marbled Plastic Frames",
      "-1536312951": "Latte Plastic Frames",
      "-1243128708": "Vixen Plastic Frames",
      "-1052478666": "Sunshine Plastic Frames",
      "-746383437": "Eccentric Plastic Frames",
      "-322745805": "Shell Plastic Glasses",
      "-341686545": "Black Bowler Hat",
      "-568448021": "Gray Bowler Hat",
      "-65078692": "Ash Bowler Hat",
      "-296132911": "Navy Bowler Hat",
      "-1277007392": "Silver Bowler Hat",
      "-1516188323": "White Bowler Hat",
      "-204318893": "Blue Bowler Hat",
      "-1197753210": "Black Top Hat",
      "-1337283612": "Gray Top Hat",
      "-1795562136": "Navy Top Hat",
      "-730074042": "Blue Top Hat",
      "-1028304711": "Light Gray Top Hat",
      "-1188348515": "Olive Top Hat",
      "-1495295738": "Purple Top Hat",
      "-678528413": "Lobster Top Hat",
      "-1102297121": "Brown Top Hat",
      "-28263585": "Black Fashion",
    },
  },
};
var wo = Object.defineProperty;
var xo = (_0x516bc3, _0xa414c) => {
  for (var _0x33d8a1 in _0xa414c) {
    wo(_0x516bc3, _0x33d8a1, {
      get: _0xa414c[_0x33d8a1],
      enumerable: true,
    });
  }
};
var yo = (_0x2a63a6, _0x520d1f, _0x1e3083) => {
  if (!_0x520d1f.has(_0x2a63a6)) {
    throw TypeError("Cannot " + _0x1e3083);
  }
};
var zo = (_0x307c99, _0x20d1e8, _0x27bb42) => {
  yo(_0x307c99, _0x20d1e8, "read from private field");
  if (_0x27bb42) {
    return _0x27bb42.call(_0x307c99);
  } else {
    return _0x20d1e8.get(_0x307c99);
  }
};
var Ao = (_0x1f9a3b, _0x56de2c, _0x546467) => {
  if (_0x56de2c.has(_0x1f9a3b)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (_0x56de2c instanceof WeakSet) {
    _0x56de2c.add(_0x1f9a3b);
  } else {
    _0x56de2c.set(_0x1f9a3b, _0x546467);
  }
};
var Bo = (_0x2f884e, _0x21757e, _0x2fbeeb, _0x114318) => {
  yo(_0x2f884e, _0x21757e, "write to private field");
  if (_0x114318) {
    _0x114318.call(_0x2f884e, _0x2fbeeb);
  } else {
    _0x21757e.set(_0x2f884e, _0x2fbeeb);
  }
  return _0x2fbeeb;
};
var Co = (_0x37fe81, _0x45970c, _0x44350b) => {
  yo(_0x37fe81, _0x45970c, "access private method");
  return _0x44350b;
};
var Go = {
  warning: 1,
  log: 2,
  error: 3,
  debug: 4,
};
var Ho =
  typeof GetConvar === "function"
    ? GetConvar(GetCurrentResourceName() + "_logLevel", "")
    : "";
var Io =
  typeof GetConvar === "function"
    ? GetConvar("sv_loglevel", "warning")
    : "warning";
Io = (Ho == null ? undefined : Ho.length) > 0 ? Ho : Io;
(() => {
  if (!Go[Io]) {
    throw new Error("Invalid log level: " + Io);
  }
})();
var Jo = () => Go[Io] >= Go.warning;
var Ko = () => Go[Io] >= Go.log;
var Lo = () => Go[Io] >= Go.error;
var Mo = () => Io === "debug";
var Oo = {};
var Po = {
  MathUtils: () => $o,
};
xo(Oo, Po);
var Qo;
var Ro;
var So = class a {
  constructor(_0x565f8e, _0x19962f, _0x323aff) {
    Ao(this, Qo);
    const _0x59e761 = Co(this, Qo, Ro).call(
      this,
      _0x565f8e,
      _0x19962f,
      _0x323aff
    );
    this.x = _0x59e761.x;
    this.y = _0x59e761.y;
    this.z = _0x59e761.z;
  }
  equals(_0x122b61, _0x54bd00, _0xe87ef4) {
    const _0x15c1c1 = Co(this, Qo, Ro).call(
      this,
      _0x122b61,
      _0x54bd00,
      _0xe87ef4
    );
    return (
      this.x === _0x15c1c1.x && this.y === _0x15c1c1.y && this.z === _0x15c1c1.z
    );
  }
  add(_0x382014, _0x46136a, _0x3acf24, _0x3575c0) {
    let _0x45cbf5 = Co(this, Qo, Ro).call(
      this,
      _0x382014,
      _0x46136a,
      _0x3acf24
    );
    this.x += _0x3575c0 ? _0x45cbf5.x * _0x3575c0 : _0x45cbf5.x;
    this.y += _0x3575c0 ? _0x45cbf5.y * _0x3575c0 : _0x45cbf5.y;
    this.z += _0x3575c0 ? _0x45cbf5.z * _0x3575c0 : _0x45cbf5.z;
    return this;
  }
  addScalar(_0xecdac8) {
    if (typeof _0xecdac8 !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x += _0xecdac8;
    this.y += _0xecdac8;
    this.z += _0xecdac8;
    return this;
  }
  sub(_0x4d6083, _0x2cf7da, _0x29508b, _0xda776) {
    const _0x9b5076 = Co(this, Qo, Ro).call(
      this,
      _0x4d6083,
      _0x2cf7da,
      _0x29508b
    );
    this.x -= _0xda776 ? _0x9b5076.x * _0xda776 : _0x9b5076.x;
    this.y -= _0xda776 ? _0x9b5076.y * _0xda776 : _0x9b5076.y;
    this.z -= _0xda776 ? _0x9b5076.z * _0xda776 : _0x9b5076.z;
    return this;
  }
  subScalar(_0x4d0a5f) {
    if (typeof _0x4d0a5f !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x -= _0x4d0a5f;
    this.y -= _0x4d0a5f;
    this.z -= _0x4d0a5f;
    return this;
  }
  multiply(_0x53cf70, _0x3600f4, _0x44a4cc) {
    const _0x566353 = Co(this, Qo, Ro).call(
      this,
      _0x53cf70,
      _0x3600f4,
      _0x44a4cc
    );
    this.x *= _0x566353.x;
    this.y *= _0x566353.y;
    this.z *= _0x566353.z;
    return this;
  }
  multiplyScalar(_0x1b495c) {
    if (typeof _0x1b495c !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x *= _0x1b495c;
    this.y *= _0x1b495c;
    this.z *= _0x1b495c;
    return this;
  }
  divide(_0x4dede2, _0x381d6b, _0x1c4378) {
    const _0x70deef = Co(this, Qo, Ro).call(
      this,
      _0x4dede2,
      _0x381d6b,
      _0x1c4378
    );
    this.x /= _0x70deef.x;
    this.y /= _0x70deef.y;
    this.z /= _0x70deef.z;
    return this;
  }
  divideScalar(_0x2624eb) {
    if (typeof _0x2624eb !== "number") {
      throw new Error("Invalid scalar");
    }
    this.x /= _0x2624eb;
    this.y /= _0x2624eb;
    this.z /= _0x2624eb;
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  getCenter(_0x2923aa, _0x18ad0a, _0x130f75) {
    const _0x3f3d1e = Co(this, Qo, Ro).call(
      this,
      _0x2923aa,
      _0x18ad0a,
      _0x130f75
    );
    return new a(
      (this.x + _0x3f3d1e.x) / 2,
      (this.y + _0x3f3d1e.y) / 2,
      (this.z + _0x3f3d1e.z) / 2
    );
  }
  getDistance(_0x2f79e3, _0x12e084, _0x97de75) {
    const [_0x488011, _0x3e0a00, _0x3d5314] =
      _0x2f79e3 instanceof Array
        ? _0x2f79e3
        : typeof _0x2f79e3 === "object"
        ? [_0x2f79e3.x, _0x2f79e3.y, _0x2f79e3.z]
        : [_0x2f79e3, _0x12e084, _0x97de75];
    if (
      typeof _0x488011 !== "number" ||
      typeof _0x3e0a00 !== "number" ||
      typeof _0x3d5314 !== "number"
    ) {
      throw new Error("Invalid vector coordinates");
    }
    const [_0x509336, _0x3d4d60, _0xd48abd] = [
      this.x - _0x488011,
      this.y - _0x3e0a00,
      this.z - _0x3d5314,
    ];
    return Math.sqrt(
      _0x509336 * _0x509336 + _0x3d4d60 * _0x3d4d60 + _0xd48abd * _0xd48abd
    );
  }
  toArray(_0x3ca83c) {
    if (typeof _0x3ca83c === "number") {
      return [
        parseFloat(this.x.toFixed(_0x3ca83c)),
        parseFloat(this.y.toFixed(_0x3ca83c)),
        parseFloat(this.z.toFixed(_0x3ca83c)),
      ];
    }
    return [this.x, this.y, this.z];
  }
  toJSON(_0x40a03a) {
    if (typeof _0x40a03a === "number") {
      return {
        x: parseFloat(this.x.toFixed(_0x40a03a)),
        y: parseFloat(this.y.toFixed(_0x40a03a)),
        z: parseFloat(this.z.toFixed(_0x40a03a)),
      };
    }
    var _0x3613ad = {
      x: this.x,
      y: this.y,
      z: this.z,
    };
    return _0x3613ad;
  }
  toString(_0x279893) {
    return JSON.stringify(this.toJSON(_0x279893));
  }
};
Qo = new WeakSet();
Ro = function (_0x17e108, _0x1842b3, _0x5cfd22) {
  let _0x1e125b = {
    x: 0,
    y: 0,
    z: 0,
  };
  if (_0x17e108 instanceof So) {
    _0x1e125b = _0x17e108;
  } else if (_0x17e108 instanceof Array) {
    var _0x2c2fe3 = {
      x: _0x17e108[0],
      y: _0x17e108[1],
      z: _0x17e108[2],
    };
    _0x1e125b = _0x2c2fe3;
  } else if (typeof _0x17e108 === "object") {
    _0x1e125b = _0x17e108;
  } else {
    var _0x404747 = {
      x: _0x17e108,
      y: _0x1842b3,
      z: _0x5cfd22,
    };
    _0x1e125b = _0x404747;
  }
  if (
    typeof _0x1e125b.x !== "number" ||
    typeof _0x1e125b.y !== "number" ||
    typeof _0x1e125b.z !== "number"
  ) {
    throw new Error("Invalid vector coordinates");
  }
  return _0x1e125b;
};
var To = So;
var Clamp = (_0x3945fb, _0x3e830e, _0x2a782a) => {
  return Math.min(Math.max(_0x3945fb, _0x3e830e), _0x2a782a);
};
var GetMapRange = (_0x19e862, _0x3c46b7, _0x5203d4) => {
  return (
    _0x3c46b7[0] +
    ((_0x5203d4 - _0x19e862[0]) * (_0x3c46b7[1] - _0x3c46b7[0])) /
      (_0x19e862[1] - _0x19e862[0])
  );
};
var GetDistance = (
  [_0x24a059, _0x1238d9, _0x2bd545],
  [_0x117e97, _0x1cb55e, _0xe0879]
) => {
  const [_0x5f200a, _0x115dda, _0x5b5664] = [
    _0x24a059 - _0x117e97,
    _0x1238d9 - _0x1cb55e,
    _0x2bd545 - _0xe0879,
  ];
  return Math.sqrt(
    _0x5f200a * _0x5f200a + _0x115dda * _0x115dda + _0x5b5664 * _0x5b5664
  );
};
var returnRandomNum = (_0x388da0, _0x17e587) => {
  if (_0x17e587) {
    return Math.floor(Math.random() * (_0x17e587 - _0x388da0 + 1) + _0x388da0);
  } else {
    return Math.floor(Math.random() * _0x388da0);
  }
};
var ParseVector3 = (_0x41a5ba, _0x390991, _0x1e9c08) => {
  if (_0x41a5ba instanceof To) {
    return _0x41a5ba;
  } else if (_0x41a5ba instanceof Array) {
    return new To(_0x41a5ba);
  } else if (typeof _0x41a5ba === "object") {
    return new To(_0x41a5ba);
  }
  if (
    typeof _0x41a5ba !== "number" ||
    typeof _0x390991 !== "number" ||
    typeof _0x1e9c08 !== "number"
  ) {
    throw new Error("Invalid vector coordinates");
  }
  return new To(_0x41a5ba, _0x390991, _0x1e9c08);
};
var Zo = {
  getMapRange: GetMapRange,
  getDistance: GetDistance,
  getRandomNumber: returnRandomNum,
  parseVector3: ParseVector3,
};
var $o = Zo;
function Cachee_Ghost(_0x4d9cd7, _0x3f4ce2) {
  const _0x7101e3 = "_";
  const _0x13be28 = CacheableMap((_0x3e2d4d, _0x25ebff, ..._0x53d968) => {
    return _0x4d9cd7(_0x3e2d4d, ..._0x53d968);
  }, _0x3f4ce2);
  return {
    get: function (..._0x484ead) {
      return _0x13be28.get(_0x7101e3, ..._0x484ead);
    },
    reset: function () {
      _0x13be28.reset(_0x7101e3);
    },
  };
}
function CacheableMap(_0xdb962, _0x1bb8a1) {
  const _0x56e93a = _0x1bb8a1.timeToLive || 60000;
  const _0x4fb3a1 = {};
  async function _0x52591f(_0x53677b, ..._0xf50305) {
    let _0x217aaa = _0x4fb3a1[_0x53677b];
    if (!_0x217aaa) {
      _0x217aaa = {
        value: null,
        lastUpdated: 0,
      };
      _0x4fb3a1[_0x53677b] = _0x217aaa;
    }
    const _0x11e1ed = Date.now();
    if (
      _0x217aaa.lastUpdated === 0 ||
      _0x11e1ed - _0x217aaa.lastUpdated > _0x56e93a
    ) {
      const [_0x2e984d, _0x51a1bc] = await _0xdb962(
        _0x217aaa,
        _0x53677b,
        ..._0xf50305
      );
      if (_0x2e984d) {
        _0x217aaa.lastUpdated = _0x11e1ed;
        _0x217aaa.value = _0x51a1bc;
      }
      return _0x51a1bc;
    }
    return await new Promise((_0x6a5294) =>
      setTimeout(() => _0x6a5294(_0x217aaa.value), 0)
    );
  }
  return {
    get: async function (_0x5e8ab0, ..._0x7bfaf8) {
      return await _0x52591f(_0x5e8ab0, ..._0x7bfaf8);
    },
    reset: function (_0x3b0205) {
      const _0x3e2390 = _0x4fb3a1[_0x3b0205];
      if (_0x3e2390) {
        _0x3e2390.lastUpdated = 0;
      }
    },
  };
}
function GetStringHash(_0x4dc7f7) {
  return B(_0x4dc7f7, B.URL);
}
function WaitForCondition(_0xc0fd12, _0x22bb31) {
  return new Promise((_0x1cb427, _0x3fc5d0) => {
    const _0xe5b0ba = Date.now();
    const _0x52bcaf = setInterval(() => {
      const _0x59d88a = Date.now() - _0xe5b0ba > _0x22bb31;
      if (_0xc0fd12() || _0x59d88a) {
        clearInterval(_0x52bcaf);
        return _0x1cb427(_0x59d88a);
      }
    }, 1);
  });
}
function GhostWait(_0x30cef9) {
  return new Promise((_0x1f7ba4) => setTimeout(() => _0x1f7ba4(), _0x30cef9));
}
function WaitForNextFrame() {
  return GhostWait(0);
}
var gp = {
  cache: Cachee_Ghost,
  cacheableMap: CacheableMap,
  waitForCondition: WaitForCondition,
  getStringHash: GetStringHash,
  wait: GhostWait,
  waitForNextFrame: WaitForNextFrame,
  ...Oo,
};
var Fivem_Util = gp;
var ip;
var jp;
var kp = class {
  constructor(_0x7b2e42) {
    Ao(this, ip, undefined);
    Ao(this, jp, undefined);
    Bo(this, jp, _0x7b2e42 ?? 5);
    Bo(this, ip, new Map());
  }
  setTTL(_0x273ad0) {
    Bo(this, jp, _0x273ad0);
  }
  set(_0x33086e, _0x3e8a9a, _0x3325f9) {
    zo(this, ip).set(_0x33086e, {
      value: _0x3e8a9a,
      expiration: Date.now() + (_0x3325f9 ?? zo(this, jp)) * 1000,
    });
    return this;
  }
  get(_0x312642, _0x295c6b = false) {
    const _0x423609 = zo(this, ip).get(_0x312642);
    const _0x419f13 = _0x423609
      ? _0x295c6b
        ? true
        : _0x423609.expiration > Date.now()
      : false;
    if (!_0x423609 || !_0x419f13) {
      if (_0x423609) {
        zo(this, ip).delete(_0x312642);
      }
      return;
    }
    return _0x423609.value;
  }
  has(_0x1dddd6, _0x770969 = false) {
    const _0x1442af = zo(this, ip).get(_0x1dddd6);
    const _0x5d64ac = _0x1442af
      ? _0x770969
        ? true
        : _0x1442af.expiration > Date.now()
      : false;
    if (_0x1442af && !_0x5d64ac) {
      zo(this, ip).delete(_0x1dddd6);
    }
    return _0x5d64ac;
  }
  delete(_0x4bb731) {
    return zo(this, ip).delete(_0x4bb731);
  }
  clear() {
    zo(this, ip).clear();
  }
  values(_0x1d42f0 = false) {
    const _0x59c953 = [];
    const _0x1a418e = Date.now();
    for (const _0x53be20 of zo(this, ip).values()) {
      if (_0x1d42f0 || _0x53be20.expiration > _0x1a418e) {
        _0x59c953.push(_0x53be20.value);
      }
    }
    return _0x59c953;
  }
  keys(_0x12f58f = false) {
    const _0x154905 = [];
    const _0x43c4d8 = Date.now();
    for (const [_0x50d074, _0x2ccd06] of zo(this, ip).entries()) {
      if (_0x12f58f || _0x2ccd06.expiration > _0x43c4d8) {
        _0x154905.push(_0x50d074);
      }
    }
    return _0x154905;
  }
  entries(_0x2a769b = false) {
    const _0x4ff469 = [];
    const _0x5a4490 = Date.now();
    for (const [_0x2bb471, _0x21de94] of zo(this, ip).entries()) {
      if (_0x2a769b || _0x21de94.expiration > _0x5a4490) {
        _0x4ff469.push([_0x2bb471, _0x21de94.value]);
      }
    }
    return _0x4ff469;
  }
};
ip = new WeakMap();
jp = new WeakMap();
var lp = ((_0x32cd06) => {
  _0x32cd06[(_0x32cd06.hat = 0)] = "hat";
  _0x32cd06[(_0x32cd06.mask = 1)] = "mask";
  _0x32cd06[(_0x32cd06.glasses = 2)] = "glasses";
  _0x32cd06[(_0x32cd06.armor = 3)] = "armor";
  _0x32cd06[(_0x32cd06.shoes = 4)] = "shoes";
  _0x32cd06[(_0x32cd06.idcard = 5)] = "idcard";
  _0x32cd06[(_0x32cd06.mobilephone = 6)] = "mobilephone";
  _0x32cd06[(_0x32cd06.keyring = 7)] = "keyring";
  _0x32cd06[(_0x32cd06.bankcard = 8)] = "bankcard";
  _0x32cd06[(_0x32cd06.backpack = 9)] = "backpack";
  return _0x32cd06;
})(lp || {});
var mp = /\u0000/g;
function getEntityHandle(_0x2d4af8, _0x40a047) {
  var _0x20dffe = new Uint8Array(_0x2d4af8, _0x40a047, 64);
  var _0x272d78 = Array.from(_0x20dffe);
  return String.fromCharCode.apply(null, _0x272d78).replace(mp, "");
}
function op(
  _0x50fd59,
  _0x228e17,
  _0x3ebb3c,
  _0x29d2e0,
  _0x3e139a,
  _0x50554c,
  _0x492c6a
) {
  try {
    var _0x5b6dc2 = _0x50fd59[_0x50554c](_0x492c6a);
    var _0x511e79 = _0x5b6dc2.value;
  } catch (_0x44fe31) {
    _0x3ebb3c(_0x44fe31);
    return;
  }
  if (_0x5b6dc2.done) {
    _0x228e17(_0x511e79);
  } else {
    Promise.resolve(_0x511e79).then(_0x29d2e0, _0x3e139a);
  }
}
function pp(_0x51dc0b) {
  return function () {
    var _0x4b0856 = this;
    var _0x53da39 = arguments;
    return new Promise(function (_0x56c708, _0x141495) {
      var _0x6904e5 = _0x51dc0b.apply(_0x4b0856, _0x53da39);
      function _0x2895a7(_0x3c2479) {
        op(
          _0x6904e5,
          _0x56c708,
          _0x141495,
          _0x2895a7,
          _0x13429a,
          "next",
          _0x3c2479
        );
      }
      function _0x13429a(_0x518216) {
        op(
          _0x6904e5,
          _0x56c708,
          _0x141495,
          _0x2895a7,
          _0x13429a,
          "throw",
          _0x518216
        );
      }
      _0x2895a7(undefined);
    });
  };
}
function qp(_0x3a0b5f, _0x5ac4a2) {
  var _0x31a102;
  var _0x4652e2;
  var _0x566013;
  var _0x89af5c;
  var _0x2c60da = {
    label: 0,
    sent: function () {
      if (_0x566013[0] & 1) {
        throw _0x566013[1];
      }
      return _0x566013[1];
    },
    trys: [],
    ops: [],
  };
  _0x89af5c = {
    next: _0xbac2ef(0),
    throw: _0xbac2ef(1),
    return: _0xbac2ef(2),
  };
  if (typeof Symbol === "function") {
    _0x89af5c[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x89af5c;
  function _0xbac2ef(_0x1c53d9) {
    return function (_0x96755d) {
      return _0x172401([_0x1c53d9, _0x96755d]);
    };
  }
  function _0x172401(_0x3bcbb5) {
    if (_0x31a102) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x2c60da) {
      try {
        _0x31a102 = 1;
        if (
          _0x4652e2 &&
          (_0x566013 =
            _0x3bcbb5[0] & 2
              ? _0x4652e2.return
              : _0x3bcbb5[0]
              ? _0x4652e2.throw ||
                ((_0x566013 = _0x4652e2.return) && _0x566013.call(_0x4652e2), 0)
              : _0x4652e2.next) &&
          !(_0x566013 = _0x566013.call(_0x4652e2, _0x3bcbb5[1])).done
        ) {
          return _0x566013;
        }
        _0x4652e2 = 0;
        if (_0x566013) {
          _0x3bcbb5 = [_0x3bcbb5[0] & 2, _0x566013.value];
        }
        switch (_0x3bcbb5[0]) {
          case 0:
          case 1:
            _0x566013 = _0x3bcbb5;
            break;
          case 4:
            _0x2c60da.label++;
            var _0x1d464f = {
              value: _0x3bcbb5[1],
              done: false,
            };
            return _0x1d464f;
          case 5:
            _0x2c60da.label++;
            _0x4652e2 = _0x3bcbb5[1];
            _0x3bcbb5 = [0];
            continue;
          case 7:
            _0x3bcbb5 = _0x2c60da.ops.pop();
            _0x2c60da.trys.pop();
            continue;
          default:
            if (
              !((_0x566013 = _0x2c60da.trys),
              (_0x566013 =
                _0x566013.length > 0 && _0x566013[_0x566013.length - 1])) &&
              (_0x3bcbb5[0] === 6 || _0x3bcbb5[0] === 2)
            ) {
              _0x2c60da = 0;
              continue;
            }
            if (
              _0x3bcbb5[0] === 3 &&
              (!_0x566013 ||
                (_0x3bcbb5[1] > _0x566013[0] && _0x3bcbb5[1] < _0x566013[3]))
            ) {
              _0x2c60da.label = _0x3bcbb5[1];
              break;
            }
            if (_0x3bcbb5[0] === 6 && _0x2c60da.label < _0x566013[1]) {
              _0x2c60da.label = _0x566013[1];
              _0x566013 = _0x3bcbb5;
              break;
            }
            if (_0x566013 && _0x2c60da.label < _0x566013[2]) {
              _0x2c60da.label = _0x566013[2];
              _0x2c60da.ops.push(_0x3bcbb5);
              break;
            }
            if (_0x566013[2]) {
              _0x2c60da.ops.pop();
            }
            _0x2c60da.trys.pop();
            continue;
        }
        _0x3bcbb5 = _0x5ac4a2.call(_0x3a0b5f, _0x2c60da);
      } catch (_0x380806) {
        _0x3bcbb5 = [6, _0x380806];
        _0x4652e2 = 0;
      } finally {
        _0x31a102 = _0x566013 = 0;
      }
    }
    if (_0x3bcbb5[0] & 5) {
      throw _0x3bcbb5[1];
    }
    var _0x280ebb = {
      value: _0x3bcbb5[0] ? _0x3bcbb5[1] : undefined,
      done: true,
    };
    return _0x280ebb;
  }
}
var SetupGeneartor = (function () {
  var _0x2716d9 = pp(function () {
    return qp(this, function (_0x5f0d1e) {
      return [2];
    });
  });
  return function _0xc00f87() {
    return _0x2716d9.apply(this, arguments);
  };
})();
function getLabelForEntity(
  _0x4cc362,
  _0x20ed5b,
  _0x3cba5e,
  _0x5ca9be,
  _0x26d9b1,
  _0x506b76 = false
) {
  var _0x882007 =
    (!_0x506b76
      ? GetHashNameForComponent(_0x4cc362, _0x3cba5e, _0x5ca9be, _0x26d9b1)
      : GetHashNameForProp(_0x4cc362, _0x3cba5e, _0x5ca9be, _0x26d9b1)) &
    4294967295;
  if (_0x882007) {
    var _0x581014 = new ArrayBuffer(180);
    var _0xd323b9 = new Uint32Array(_0x581014);
    Citizen.invokeNative(
      !_0x506b76 ? "0x74C0E2A57EC66760" : "0x5D5CAFF661DDF6FC",
      _0x882007,
      _0xd323b9
    );
    var _0x384910 = getEntityHandle(_0x581014, 66);
    if (_0x384910) {
      var _0x590c8b = GetLabelText(_0x384910);
      if (_0x590c8b !== "NULL") {
        return _0x590c8b;
      }
    }
  } else if (_0x3cba5e == 0 && _0x506b76) {
    var _0x55ce21 =
      "HT_FM" +
      (_0x20ed5b == "male" ? "M" : "F") +
      "_" +
      _0x5ca9be +
      "_" +
      _0x26d9b1;
    var _0x1d3967 = GetLabelText(_0x55ce21);
    if (_0x1d3967 !== "NULL") {
      return _0x1d3967;
    }
  } else {
    var _0x5c3ca0 = GetHashKey(
      "SP_" +
        (_0x20ed5b == "male" ? "M" : "F") +
        "_" +
        (_0x506b76 ? "P" : "") +
        (!_0x506b76 ? Kn[_0x3cba5e] : Ln[_0x3cba5e]) +
        "_" +
        _0x5ca9be +
        "_" +
        _0x26d9b1
    );
    var _0x4cb9ef = !_0x506b76
      ? AllClothingItemsAvail.clothing
      : AllClothingItemsAvail.props;
    var _0x19d958 = _0x4cb9ef[_0x20ed5b][_0x5c3ca0];
    if (_0x19d958) {
      return _0x19d958;
    }
  }
  return null;
}
var updatePlayerAppearanceDetails = Fivem_Util.cacheableMap(
  (function () {
    return async function (_0x308ca4, _0x38f256) {
      const _0x4fe69a = PlayerPedId();
      const _0x359b38 = {
        male: {},
        female: {},
      };
      const _0x49bd33 = {
        male: {},
        female: {},
      };
      for (
        let _0x5096d1 = 0;
        _0x5096d1 < Object.keys(ClothsTable1).length / 2;
        _0x5096d1++
      ) {
        const _0x170659 = GetNumberOfPedDrawableVariations(
          _0x4fe69a,
          _0x5096d1
        );
        for (let _0x1a149d = 0; _0x1a149d < _0x170659; _0x1a149d++) {
          const _0x20313e = GetNumberOfPedTextureVariations(
            _0x4fe69a,
            _0x5096d1,
            _0x1a149d
          );
          for (let _0x59bfa6 = 0; _0x59bfa6 < _0x20313e; _0x59bfa6++) {
            const _0x301f77 = getLabelForEntity(
              _0x4fe69a,
              _0x38f256,
              _0x5096d1,
              _0x1a149d,
              _0x59bfa6
            );
            if (_0x301f77) {
              _0x359b38[_0x38f256][_0x5096d1] =
                _0x359b38[_0x38f256][_0x5096d1] || {};
              _0x359b38[_0x38f256][_0x5096d1][_0x1a149d] =
                _0x359b38[_0x38f256][_0x5096d1][_0x1a149d] || {};
              _0x359b38[_0x38f256][_0x5096d1][_0x1a149d][_0x59bfa6] = _0x301f77;
            }
          }
        }
      }
      let _0x20b9b7;
      let _0x254de7;
      try {
        for (const _0x465d17 of Object.values(ClothingType).filter(
          (_0x11b837) => typeof _0x11b837 === "number"
        )) {
          const _0x37f4ba = GetNumberOfPedPropDrawableVariations(
            _0x4fe69a,
            _0x465d17
          );
          for (let _0x4f8e43 = 0; _0x4f8e43 < _0x37f4ba; _0x4f8e43++) {
            const _0x201ce7 = GetNumberOfPedPropTextureVariations(
              _0x4fe69a,
              _0x465d17,
              _0x4f8e43
            );
            for (let _0x20ed67 = 0; _0x20ed67 < _0x201ce7; _0x20ed67++) {
              const _0x53fc36 = getLabelForEntity(
                _0x4fe69a,
                _0x38f256,
                _0x465d17,
                _0x4f8e43,
                _0x20ed67,
                true
              );
              if (_0x53fc36) {
                _0x49bd33[_0x38f256][_0x465d17] =
                  _0x49bd33[_0x38f256][_0x465d17] || {};
                _0x49bd33[_0x38f256][_0x465d17][_0x4f8e43] =
                  _0x49bd33[_0x38f256][_0x465d17][_0x4f8e43] || {};
                _0x49bd33[_0x38f256][_0x465d17][_0x4f8e43][_0x20ed67] =
                  _0x53fc36;
              }
            }
          }
        }
      } catch (_0x16140a) {
        _0x20b9b7 = true;
        _0x254de7 = _0x16140a;
      }
      const _0x249fc2 = {
        clothing: _0x359b38,
        props: _0x49bd33,
      };
      return [true, _0x249fc2];
    };
  })(),
  {
    timeToLive: 1800000,
  }
);
var vp = false;
var wp = false;
var xp = new Set();
var yp = new Set();
function ToggleBarberblip() {
  vp = !vp;
  if (!vp) {
    var _0x1eddc9 = true;
    var _0x91adf7 = false;
    var _0xaec7e1 = undefined;
    try {
      for (
        var _0x36b7cd = xp.values()[Symbol.iterator](), _0x21ae3b;
        !(_0x1eddc9 = (_0x21ae3b = _0x36b7cd.next()).done);
        _0x1eddc9 = true
      ) {
        var _0x20309d = _0x21ae3b.value;
        RemoveBlip(_0x20309d);
      }
    } catch (_0x143fd6) {
      _0x91adf7 = true;
      _0xaec7e1 = _0x143fd6;
    } finally {
      try {
        if (!_0x1eddc9 && _0x36b7cd.return != null) {
          _0x36b7cd.return();
        }
      } finally {
        if (_0x91adf7) {
          throw _0xaec7e1;
        }
      }
    }
    xp.clear();
    return;
  }
  var _0x1a83b0 = true;
  var _0x275d7f = false;
  var _0x511323 = undefined;
  try {
    for (
      var _0x43ede0 = lu[Symbol.iterator](), _0x1b1a11;
      !(_0x1a83b0 = (_0x1b1a11 = _0x43ede0.next()).done);
      _0x1a83b0 = true
    ) {
      var _0x5b940d = _0x1b1a11.value;
      var _0x195d60 = jm.createBlip(
        "coord",
        _0x5b940d.vectors.x,
        _0x5b940d.vectors.y,
        _0x5b940d.vectors.z
      );
      jm.applyBlipSettings(_0x195d60, "Barber Shop", 71, 1);
      xp.add(_0x195d60);
    }
  } catch (_0x45764a) {
    _0x275d7f = true;
    _0x511323 = _0x45764a;
  } finally {
    try {
      if (!_0x1a83b0 && _0x43ede0.return != null) {
        _0x43ede0.return();
      }
    } finally {
      if (_0x275d7f) {
        throw _0x511323;
      }
    }
  }
}
function HandleSomeBlipsForShopTattos() {
  wp = !wp;
  if (!wp) {
    var _0x58c27b = true;
    var _0x20d236 = false;
    var _0x8e65bd = undefined;
    try {
      for (
        var _0x567f50 = yp.values()[Symbol.iterator](), _0x47c331;
        !(_0x58c27b = (_0x47c331 = _0x567f50.next()).done);
        _0x58c27b = true
      ) {
        var _0x37ad56 = _0x47c331.value;
        RemoveBlip(_0x37ad56);
      }
    } catch (_0x516006) {
      _0x20d236 = true;
      _0x8e65bd = _0x516006;
    } finally {
      try {
        if (!_0x58c27b && _0x567f50.return != null) {
          _0x567f50.return();
        }
      } finally {
        if (_0x20d236) {
          throw _0x8e65bd;
        }
      }
    }
    yp.clear();
    return;
  }
  var _0x5caf01 = true;
  var _0x1cc1b2 = false;
  var _0x15c1ca = undefined;
  try {
    for (
      var _0x45e9c7 = AleckZoneData[Symbol.iterator](), _0x189745;
      !(_0x5caf01 = (_0x189745 = _0x45e9c7.next()).done);
      _0x5caf01 = true
    ) {
      var _0x59e8d8 = _0x189745.value;
      var _0x240159 = jm.createBlip(
        "coord",
        _0x59e8d8.vectors.x,
        _0x59e8d8.vectors.y,
        _0x59e8d8.vectors.z
      );
      jm.applyBlipSettings(_0x240159, "Tattoo Shop", 75, 1);
      yp.add(_0x240159);
    }
  } catch (_0x26f2cc) {
    _0x1cc1b2 = true;
    _0x15c1ca = _0x26f2cc;
  } finally {
    try {
      if (!_0x5caf01 && _0x45e9c7.return != null) {
        _0x45e9c7.return();
      }
    } finally {
      if (_0x1cc1b2) {
        throw _0x15c1ca;
      }
    }
  }
}
function Dp(_0x561af2, _0x12388b) {
  if (_0x12388b == null || _0x12388b > _0x561af2.length) {
    _0x12388b = _0x561af2.length;
  }
  for (
    var _0x3e0503 = 0, _0x27b988 = new Array(_0x12388b);
    _0x3e0503 < _0x12388b;
    _0x3e0503++
  ) {
    _0x27b988[_0x3e0503] = _0x561af2[_0x3e0503];
  }
  return _0x27b988;
}
function Ep(_0x11aed5) {
  if (Array.isArray(_0x11aed5)) {
    return _0x11aed5;
  }
}
function Fp(_0x214185) {
  if (Array.isArray(_0x214185)) {
    return Dp(_0x214185);
  }
}
function Gp(
  _0x59952d,
  _0x5da81e,
  _0x1cba2e,
  _0x56f83a,
  _0x2f544d,
  _0x2c0494,
  _0x4aeff4
) {
  try {
    var _0x35af61 = _0x59952d[_0x2c0494](_0x4aeff4);
    var _0x162046 = _0x35af61.value;
  } catch (_0x4a0339) {
    _0x1cba2e(_0x4a0339);
    return;
  }
  if (_0x35af61.done) {
    _0x5da81e(_0x162046);
  } else {
    Promise.resolve(_0x162046).then(_0x56f83a, _0x2f544d);
  }
}
function Hp(_0x172573) {
  return function () {
    var _0x2c6b5c = this;
    var _0x2f0c41 = arguments;
    return new Promise(function (_0xab7335, _0x355b0e) {
      var _0x396d4f = _0x172573.apply(_0x2c6b5c, _0x2f0c41);
      function _0x484051(_0x5e385b) {
        Gp(
          _0x396d4f,
          _0xab7335,
          _0x355b0e,
          _0x484051,
          _0x45c780,
          "next",
          _0x5e385b
        );
      }
      function _0x45c780(_0x322efd) {
        Gp(
          _0x396d4f,
          _0xab7335,
          _0x355b0e,
          _0x484051,
          _0x45c780,
          "throw",
          _0x322efd
        );
      }
      _0x484051(undefined);
    });
  };
}
function Ip(_0x42a2c5) {
  if (
    (typeof Symbol !== "undefined" && _0x42a2c5[Symbol.iterator] != null) ||
    _0x42a2c5["@@iterator"] != null
  ) {
    return Array.from(_0x42a2c5);
  }
}
function Jp(_0x42e1cc, _0x44a7c7) {
  var _0x2f7c58 =
    _0x42e1cc == null
      ? null
      : (typeof Symbol !== "undefined" && _0x42e1cc[Symbol.iterator]) ||
        _0x42e1cc["@@iterator"];
  if (_0x2f7c58 == null) {
    return;
  }
  var _0x48c25f = [];
  var _0x28c771 = true;
  var _0x5b348b = false;
  var _0x42edf3;
  var _0x2e33bd;
  try {
    for (
      _0x2f7c58 = _0x2f7c58.call(_0x42e1cc);
      !(_0x28c771 = (_0x42edf3 = _0x2f7c58.next()).done);
      _0x28c771 = true
    ) {
      _0x48c25f.push(_0x42edf3.value);
      if (_0x44a7c7 && _0x48c25f.length === _0x44a7c7) {
        break;
      }
    }
  } catch (_0x44582d) {
    _0x5b348b = true;
    _0x2e33bd = _0x44582d;
  } finally {
    try {
      if (!_0x28c771 && _0x2f7c58.return != null) {
        _0x2f7c58.return();
      }
    } finally {
      if (_0x5b348b) {
        throw _0x2e33bd;
      }
    }
  }
  return _0x48c25f;
}
function Kp() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function Lp() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function Mp(_0x58fa4d, _0x551497) {
  return (
    Ep(_0x58fa4d) ||
    Jp(_0x58fa4d, _0x551497) ||
    Op(_0x58fa4d, _0x551497) ||
    Kp()
  );
}
function Np(_0x4d745a) {
  return Fp(_0x4d745a) || Ip(_0x4d745a) || Op(_0x4d745a) || Lp();
}
function Op(_0x4244a4, _0x41a401) {
  if (!_0x4244a4) {
    return;
  }
  if (typeof _0x4244a4 === "string") {
    return Dp(_0x4244a4, _0x41a401);
  }
  var _0xbb34a = Object.prototype.toString.call(_0x4244a4).slice(8, -1);
  if (_0xbb34a === "Object" && _0x4244a4.constructor) {
    _0xbb34a = _0x4244a4.constructor.name;
  }
  if (_0xbb34a === "Map" || _0xbb34a === "Set") {
    return Array.from(_0xbb34a);
  }
  if (
    _0xbb34a === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0xbb34a)
  ) {
    return Dp(_0x4244a4, _0x41a401);
  }
}
function Pp(_0x5b0dff, _0x267167) {
  var _0x4ebade;
  var _0x4a6f29;
  var _0x3e658c;
  var _0x33f622;
  var _0x532ddb = {
    label: 0,
    sent: function () {
      if (_0x3e658c[0] & 1) {
        throw _0x3e658c[1];
      }
      return _0x3e658c[1];
    },
    trys: [],
    ops: [],
  };
  _0x33f622 = {
    next: _0x31f5ee(0),
    throw: _0x31f5ee(1),
    return: _0x31f5ee(2),
  };
  if (typeof Symbol === "function") {
    _0x33f622[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x33f622;
  function _0x31f5ee(_0x392880) {
    return function (_0x57a8fa) {
      return _0x3bdbd4([_0x392880, _0x57a8fa]);
    };
  }
  function _0x3bdbd4(_0x4ed9a0) {
    if (_0x4ebade) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x532ddb) {
      try {
        _0x4ebade = 1;
        if (
          _0x4a6f29 &&
          (_0x3e658c =
            _0x4ed9a0[0] & 2
              ? _0x4a6f29.return
              : _0x4ed9a0[0]
              ? _0x4a6f29.throw ||
                ((_0x3e658c = _0x4a6f29.return) && _0x3e658c.call(_0x4a6f29), 0)
              : _0x4a6f29.next) &&
          !(_0x3e658c = _0x3e658c.call(_0x4a6f29, _0x4ed9a0[1])).done
        ) {
          return _0x3e658c;
        }
        _0x4a6f29 = 0;
        if (_0x3e658c) {
          _0x4ed9a0 = [_0x4ed9a0[0] & 2, _0x3e658c.value];
        }
        switch (_0x4ed9a0[0]) {
          case 0:
          case 1:
            _0x3e658c = _0x4ed9a0;
            break;
          case 4:
            _0x532ddb.label++;
            var _0x1316a3 = {
              value: _0x4ed9a0[1],
              done: false,
            };
            return _0x1316a3;
          case 5:
            _0x532ddb.label++;
            _0x4a6f29 = _0x4ed9a0[1];
            _0x4ed9a0 = [0];
            continue;
          case 7:
            _0x4ed9a0 = _0x532ddb.ops.pop();
            _0x532ddb.trys.pop();
            continue;
          default:
            if (
              !((_0x3e658c = _0x532ddb.trys),
              (_0x3e658c =
                _0x3e658c.length > 0 && _0x3e658c[_0x3e658c.length - 1])) &&
              (_0x4ed9a0[0] === 6 || _0x4ed9a0[0] === 2)
            ) {
              _0x532ddb = 0;
              continue;
            }
            if (
              _0x4ed9a0[0] === 3 &&
              (!_0x3e658c ||
                (_0x4ed9a0[1] > _0x3e658c[0] && _0x4ed9a0[1] < _0x3e658c[3]))
            ) {
              _0x532ddb.label = _0x4ed9a0[1];
              break;
            }
            if (_0x4ed9a0[0] === 6 && _0x532ddb.label < _0x3e658c[1]) {
              _0x532ddb.label = _0x3e658c[1];
              _0x3e658c = _0x4ed9a0;
              break;
            }
            if (_0x3e658c && _0x532ddb.label < _0x3e658c[2]) {
              _0x532ddb.label = _0x3e658c[2];
              _0x532ddb.ops.push(_0x4ed9a0);
              break;
            }
            if (_0x3e658c[2]) {
              _0x532ddb.ops.pop();
            }
            _0x532ddb.trys.pop();
            continue;
        }
        _0x4ed9a0 = _0x267167.call(_0x5b0dff, _0x532ddb);
      } catch (_0x1db823) {
        _0x4ed9a0 = [6, _0x1db823];
        _0x4a6f29 = 0;
      } finally {
        _0x4ebade = _0x3e658c = 0;
      }
    }
    if (_0x4ed9a0[0] & 5) {
      throw _0x4ed9a0[1];
    }
    var _0x599324 = {
      value: _0x4ed9a0[0] ? _0x4ed9a0[1] : undefined,
      done: true,
    };
    return _0x599324;
  }
}
var GhostsTattoosMap = new Map();
var fadeCollectionData = null;
var fadeLayer = undefined;
var fadeLayerCounter = 0;
var fetchGetFadeNextLayer = KarmaDevelopmentUtil.cacheableMap(
  (function () {
    var _0x51bc66 = Hp(function (_0x1a0874, _0x118117) {
      var _0x321f3d;
      return Pp(this, function (_0x525bb0) {
        switch (_0x525bb0.label) {
          case 0:
            return [
              4,
              RPC.execute("karma-clothing:getNextFadeLayerId", _0x118117),
            ];
          case 1:
            _0x321f3d = _0x525bb0.sent();
            return [2, [true, _0x321f3d]];
        }
      });
    });
    return function (_0x5cad3d, _0x59cab6) {
      return _0x51bc66.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 3600000,
  }
);
function characterSpawned() {
  return new Promise(function (_0x20ce98, _0x4cf469) {
    Hp(function () {
      Pp(this, function (_0xb845ce) {
        switch (_0xb845ce.label) {
          case 0:
            var _0x58e35e = PlayerPedId();
            var _0x1c73a8 = GetEntityModel(_0x58e35e);
            fetchGetFadeNextLayer
              .get(_0x1c73a8)
              .then(function (_0x343d2b) {
                if (_0x343d2b === null) {
                  _0x20ce98(null);
                } else {
                  fadeLayerCounter = _0x343d2b + 1;
                  _0x20ce98();
                }
              })
              .catch(function (_0x3857d4) {
                _0x4cf469(_0x3857d4);
              });
            break;
        }
      });
    });
  });
}
function setPlayerFadeStatus(_0x1dedf6) {
  fadeLayer = _0x1dedf6;
}
function AddDecorationFromHashes(_0x35ac59, _0x167824, _0x1d6419) {
  AddPedDecorationFromHashes(_0x35ac59, _0x167824, _0x1d6419);
}
function applyDecorations(_0x2d34a5, _0x287f5c) {
  ClearPedDecorations(_0x2d34a5);
  if (_0x287f5c.tattoos) {
    var _0xb72d03 = true;
    var _0xcb80b7 = false;
    var _0x5d04b3 = undefined;
    try {
      for (
        var _0x17ec55 = Object.values(_0x287f5c.tattoos)[Symbol.iterator](),
          _0xcd94f8;
        !(_0xb72d03 = (_0xcd94f8 = _0x17ec55.next()).done);
        _0xb72d03 = true
      ) {
        var _0x474dff = _0xcd94f8.value;
        var _0x5bf183 = true;
        var _0x5783aa = false;
        var _0x14185f = undefined;
        try {
          for (
            var _0x2d1d8c = _0x474dff[Symbol.iterator](), _0x4a3518;
            !(_0x5bf183 = (_0x4a3518 = _0x2d1d8c.next()).done);
            _0x5bf183 = true
          ) {
            var _0x48fce5 = _0x4a3518.value;
            AddDecorationFromHashes(
              _0x2d34a5,
              _0x48fce5.collection,
              _0x48fce5.overlay
            );
          }
        } catch (_0x197fde) {
          _0x5783aa = true;
          _0x14185f = _0x197fde;
        } finally {
          try {
            if (!_0x5bf183 && _0x2d1d8c.return != null) {
              _0x2d1d8c.return();
            }
          } finally {
            if (_0x5783aa) {
              throw _0x14185f;
            }
          }
        }
      }
    } catch (_0x125703) {
      _0xcb80b7 = true;
      _0x5d04b3 = _0x125703;
    } finally {
      try {
        if (!_0xb72d03 && _0x17ec55.return != null) {
          _0x17ec55.return();
        }
      } finally {
        if (_0xcb80b7) {
          throw _0x5d04b3;
        }
      }
    }
  }
  if (_0x287f5c.fade) {
    AddDecorationFromHashes(
      _0x2d34a5,
      _0x287f5c.fade.collection,
      _0x287f5c.fade.overlay
    );
  }
}
function fetchAndApplyPlayerDecorations(
  _0x168604,
  _0x538122 = {},
  _0x2d255b = false
) {
  return new Promise(async (_0x2b2b0d, _0x23face) => {
    try {
      const _0xb1b07 = GetEntityModel(_0x168604);
      const _0x188481 = await fetchgetFade.get(_0xb1b07);
      const _0x395047 = await fetchGetTattoos.get(_0xb1b07);
      const _0x2cf5dc = {
        fade: _0x2d255b ? undefined : _0x188481 ?? undefined,
        tattoos: _0x395047,
      };
      applyDecorations(_0x168604, _0x2cf5dc);
      _0x2b2b0d();
    } catch (_0x5e629b) {
      _0x23face(_0x5e629b);
    }
  });
}
var fetchgetFade = KarmaDevelopmentUtil.cache(
  (function () {
    var _0x1cd6e1 = Hp(function (_0x1e958c, _0x9d902f) {
      var _0x3665fc;
      return Pp(this, function (_0x361326) {
        switch (_0x361326.label) {
          case 0:
            return [
              4,
              RPC.execute("karma-clothing:getFade", _0x9d902f, fadeLayer),
            ];
          case 1:
            _0x3665fc = _0x361326.sent();
            if (!fadeLayer) {
              fadeLayer = _0x3665fc.layer;
            }
            return [2, [true, _0x3665fc]];
        }
      });
    });
    return function (_0x510e3b, _0x5e77fb) {
      return _0x1cd6e1.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 600000,
  }
);
var fetchGetTattoos = KarmaDevelopmentUtil.cacheableMap(
  (function () {
    var _0x402fa2 = Hp(function (_0x17d89e, _0x431558) {
      var _0x446d99;
      return Pp(this, function (_0x162128) {
        switch (_0x162128.label) {
          case 0:
            return [4, RPC.execute("karma-clothing:getTattoos", _0x431558)];
          case 1:
            _0x446d99 = _0x162128.sent();
            return [2, [true, _0x446d99]];
        }
      });
    });
    return function (_0x5dfdf2, _0x34cd3f) {
      return _0x402fa2.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 600000,
  }
);
var fetchFadeDatabase = KarmaDevelopmentUtil.cacheableMap(
  (function () {
    var _0x15575b = Hp(function (_0x3c423d, _0x371bfd, _0xe77d6e, _0x8c1975) {
      var _0x27b450;
      return Pp(this, function (_0x5ae0ec) {
        switch (_0x5ae0ec.label) {
          case 0:
            return [
              4,
              RPC.execute("karma-clothing:getFade", _0xe77d6e, _0x8c1975),
            ];
          case 1:
            _0x27b450 = _0x5ae0ec.sent();
            return [2, [true, _0x27b450]];
        }
      });
    });
    return function (_0x594f39, _0x5f14c1, _0x44be12, _0x191167) {
      return _0x15575b.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 1800000,
  }
);
function fq(_0x79bdae) {
  var _0x1ea870 = _0x79bdae === "male" ? 3 : 4;
  var _0x424ca5 = [];
  for (
    var _0x6f0b62 = 0;
    _0x6f0b62 < GetNumTattooShopDlcItems(_0x1ea870);
    _0x6f0b62++
  ) {
    var _0x19a41c = new ArrayBuffer(120);
    var _0x3f30ad = new Uint32Array(_0x19a41c);
    var _0xf459c4 = new DataView(_0x19a41c, 0, _0x19a41c.byteLength);
    var _0x109a4e = Citizen.invokeNative(
      "0xFF56381874F82086",
      _0x1ea870,
      _0x6f0b62,
      _0x3f30ad
    );
    if (_0x109a4e) {
      var _0x12f817 = _0xf459c4.getUint32(16, true) & 4294967295;
      var _0x1119a9 = _0xf459c4.getUint32(24, true) & 4294967295;
      var _0xc1f1f8 = _0xf459c4.getUint32(48, true) & 4294967295;
      if (_0xc1f1f8 !== Zn.hairOverlay) {
        continue;
      }
      var _0x1b9dba = {
        overlay: _0x1119a9,
        collection: _0x12f817,
      };
      _0x424ca5.push(_0x1b9dba);
    }
  }
  return _0x424ca5;
}
function getTattooShopItemsByGender(_0x526bde) {
  var _0x44fbab = _0x526bde === "male" ? 3 : 4;
  var _0x1ac0a1 = {};
  for (
    var _0x2d9635 = 0;
    _0x2d9635 < GetNumTattooShopDlcItems(_0x44fbab);
    _0x2d9635++
  ) {
    var _0x3e1455 = new ArrayBuffer(120);
    var _0xc60120 = new Uint32Array(_0x3e1455);
    var _0x637999 = new DataView(_0x3e1455, 0, _0x3e1455.byteLength);
    var _0x2a0404 = Citizen.invokeNative(
      "0xFF56381874F82086",
      _0x44fbab,
      _0x2d9635,
      _0xc60120
    );
    if (_0x2a0404) {
      var _0x5b329d = _0x637999.getUint32(16, true) & 4294967295;
      var _0x56a4e8 = _0x637999.getUint32(24, true) & 4294967295;
      var _0x151412 = GetPedDecorationZoneFromHashes(_0x5b329d, _0x56a4e8);
      var _0x4d1002 = _0x637999.getUint32(48, true) & 4294967295;
      var _0x261fbd = getEntityHandle(_0x3e1455, 56);
      if (
        _0x4d1002 === 1019352240 ||
        _0x4d1002 === Zn.hairOverlay ||
        _0x4d1002 === Zn.torsoDecal ||
        _0x4d1002 === Zn.rank
      ) {
        continue;
      }
      var _0x2d4bb8 = Yn[_0x151412];
      if (!_0x1ac0a1[_0x2d4bb8]) {
        _0x1ac0a1[_0x2d4bb8] = [];
      }
      _0x1ac0a1[_0x2d4bb8].push({
        overlay: _0x56a4e8,
        collection: _0x5b329d,
        label: GetLabelText(_0x261fbd),
      });
    }
  }
  return _0x1ac0a1;
}
function applydTattoosMybe(_0x493889, _0x31b41c) {
  return new Promise(function (_0x28ee50, _0x1b05d0) {
    var _0x3db42c = GetEntityModel(_0x493889);
    try {
      for (
        var _0x113ef4 = Object.entries(_0x31b41c)[Symbol.iterator](), _0x195fbe;
        !(_0x195fbe = _0x113ef4.next()).done;

      ) {
        var _0x7b0aa2 = _0x195fbe.value;
        var _0x3ee4dd = _0x7b0aa2[0];
        var _0x187caa = _0x7b0aa2[1];
        GhostsTattoosMap.set(_0x3ee4dd, _0x187caa);
      }
    } catch (_0x3b51fc) {
      _0x1b05d0(_0x3b51fc);
      return;
    }
    fetchgetFade
      .get(_0x3db42c)
      .then(function (_0x2ab133) {
        var _0x43cc6f = {
          tattoos: _0x31b41c,
          fade: _0x2ab133,
        };
        applyDecorations(_0x493889, _0x43cc6f);
        _0x28ee50();
      })
      .catch(function (_0xf63398) {
        _0x1b05d0(_0xf63398);
      });
  });
}
var adddecorationFromhashes = (function () {
  var _0x38e6e4 = Hp(function (_0x1aeb28, _0x1ab99b) {
    return Pp(this, function (_0x148c82) {
      switch (_0x148c82.label) {
        case 0:
          if (!!_0x1ab99b.overlay && !!_0x1ab99b.collection) {
            return [3, 2];
          }
          fadeCollectionData = null;
          return [4, fetchAndApplyPlayerDecorations(_0x1aeb28, {}, true)];
        case 1:
          _0x148c82.sent();
          return [2];
        case 2:
          return [4, fetchAndApplyPlayerDecorations(_0x1aeb28, {}, true)];
        case 3:
          _0x148c82.sent();
          AddDecorationFromHashes(
            _0x1aeb28,
            _0x1ab99b.collection,
            _0x1ab99b.overlay
          );
          fadeCollectionData = _0x1ab99b;
          return [2];
      }
    });
  });
  return function _0x192cd5(_0x337848, _0x2dc307) {
    return _0x38e6e4.apply(this, arguments);
  };
})();
async function funcSaveTattoos(_0x2d51d9) {
  if (GhostsTattoosMap.size === 0) {
    return true;
  }
  const _0x21d292 = GetEntityModel(_0x2d51d9);
  const _0x140387 = await RPC.execute(
    "karma-clothing:saveTattoos",
    _0x21d292,
    Array.from(GhostsTattoosMap.entries())
  );
  GhostsTattoosMap.clear();
  fetchGetTattoos.reset(_0x21d292);
  return _0x140387;
}
var SaveFadeFunction = (function () {
  var _0x8eadd9 = Hp(function (_0x450926) {
    var _0x14a811;
    var _0x54a912;
    var _0xc60877;
    return Pp(this, function (_0x3f0d5e) {
      switch (_0x3f0d5e.label) {
        case 0:
          if (!fadeCollectionData) {
            return [2, true];
          }
          _0x14a811 = GetEntityModel(_0x450926);
          _0x54a912 = fadeLayerCounter++;
          fetchGetFadeNextLayer.reset(_0x14a811);
          fadeCollectionData.layer = _0x54a912;
          return [
            4,
            RPC.execute(
              "karma-clothing:saveFade",
              _0x14a811,
              fadeCollectionData
            ),
          ];
        case 1:
          _0xc60877 = _0x3f0d5e.sent();
          if (!_0xc60877) {
            return [2, false];
          }
          fetchFadeDatabase.reset(_0x14a811 + "-" + _0x54a912);
          fadeLayer = _0x54a912;
          fadeCollectionData = null;
          fetchgetFade.reset();
          return [2, true];
      }
    });
  });
  return function _0x24c283(_0x2fa440) {
    return _0x8eadd9.apply(this, arguments);
  };
})();
exports("ApplyDecorations", applyDecorations);
var createAnimationData = {};
var hat_ = {
  name: "hat",
  type: "prop",
  item: "hat",
  componentId: ClothingType.Hat,
  animOn: {
    animDict: "mp_masks@on_foot",
    animName: "put_on_mask",
    length: 850,
  },
  animOff: {
    animDict: "mp_masks@on_foot",
    animName: "put_on_mask",
    length: 850,
  },
};
var earrings_ = {
  name: "earrings",
  type: "prop",
  componentId: ClothingType.Ears,
  animOn: {
    animDict: "mp_cp_stolen_tut",
    animName: "b_think",
    length: 2100,
  },
  animOff: {
    animDict: "mp_cp_stolen_tut",
    animName: "b_think",
    length: 2100,
  },
};
var glasses_ = {
  name: "glasses",
  type: "prop",
  componentId: ClothingType.Glasses,
  animOn: {
    animDict: "clothingspecs",
    animName: "put_on",
    length: 1800,
    stopSpeed: 2.5,
    offset: 0.4,
  },
  animOff: {
    animDict: "clothingspecs",
    animName: "take_off",
    length: 1500,
    stopSpeed: 2.5,
  },
};
var vest_ = {
  name: "vest",
  type: "drawable",
  componentId: ClothsTable1.Kevlar,
  animOn: {
    animDict: "clothingtie",
    animName: "try_tie_negative_a",
    length: 2000,
    stopSpeed: 2.5,
  },
  animOff: {
    animDict: "clothingtie",
    animName: "try_tie_negative_a",
    length: 2000,
    stopSpeed: 2.5,
  },
};
var mask_ = {
  name: "mask",
  type: "drawable",
  componentId: ClothsTable1.Mask,
  item: "mask",
  zeroIndex: true,
  animOn: {
    animDict: "mp_masks@on_foot",
    animName: "put_on_mask",
    length: 850,
  },
  animOff: {
    animDict: "missfbi4",
    animName: "takeoff_mask",
    length: 1600,
  },
};
var necklace_ = {
  name: "necklace",
  type: "drawable",
  componentId: ClothsTable1.Accessory,
  zeroIndex: true,
  animOn: {
    animDict: "clothingtie",
    animName: "try_tie_negative_a",
    length: 2000,
    stopSpeed: 2.5,
  },
  animOff: {
    animDict: "clothingtie",
    animName: "try_tie_negative_a",
    length: 2000,
    stopSpeed: 2.5,
  },
};
var pAnimsCloth = [hat_, earrings_, glasses_, vest_, mask_, necklace_];
function ClearAnimationData() {
  createAnimationData = {};
}
function FaceWear(_0x172240, _0x37dfa0, _0x312dc7) {
  return new Promise((_0x45a5f6, _0x234098) => {
    var _0xd5796b;
    var _0x4d3e65;
    var _0x57fc2d;
    var _0x4f62b9;
    var _0x2b853e;
    var _0x5066c0;
    var _0x4ccc3f;
    var _0x2796a8;
    var _0x223104;
    var _0x7be736;
    var _0x31f6de;
    var _0x3145cf;
    var _0x1ad9f0;
    var _0x201d28;
    var _0x2194c9;
    var _0xe0cc34;
    var _0x2ca458;
    var _0x44daa9;
    var _0xcd279b;
    var _0x5d0b44;
    _0xd5796b = PlayerPedId();
    _0x4d3e65 = GetEntityModel(_0xd5796b);
    _0x57fc2d = checkIfTattooIsUnique(_0x4d3e65);
    _0x312dc7 = _0x312dc7
      ? _0x312dc7
      : pAnimsCloth.find(function (_0x433353) {
          return _0x433353.name === _0x172240;
        });
    if (!_0x312dc7) {
      _0x234098("Animation not found");
      return;
    }
    _0x4f62b9 = _0x37dfa0 ? _0x312dc7.animOn : _0x312dc7.animOff;
    _0x2b853e =
      _0x312dc7.type === "drawable"
        ? ClothsTable1[_0x312dc7.componentId]
        : ClothingType[_0x312dc7.componentId];
    _0x5066c0 =
      _0x312dc7.type === "drawable"
        ? getEntityClothingDrawables(_0xd5796b)[_0x2b853e]
        : getProps(_0xd5796b)[_0x2b853e];
    rpcGetCurrentClothing
      .get()
      .then((_0x2e0286) => {
        if (!_0x2e0286) {
          _0x234098("Current clothing data not available");
          return;
        }
        _0x2796a8 = _0x37dfa0
          ? _0x37dfa0
          : _0x312dc7.type === "drawable"
          ? _0x2e0286.drawables?.[_0x2b853e]
          : _0x2e0286.props?.[_0x2b853e];
        createAnimationData[_0x2b853e] = _0x37dfa0
          ? !!_0x37dfa0
          : createAnimationData[_0x2b853e];
        _0x223104 = _0x5066c0[0];
        _0x7be736 = _0x5066c0[1];
        _0x31f6de = _0x2796a8[0];
        _0x3145cf = _0x2796a8[1];
        if (
          _0x37dfa0 &&
          ((!_0x31f6de && !_0x57fc2d && _0x312dc7.zeroIndex) ||
            _0x31f6de === -1) &&
          _0x223104 === _0x31f6de &&
          _0x7be736 === _0x3145cf
        ) {
          _0x234098("You don't have that item stored");
          return;
        }
        if (
          !_0x37dfa0 &&
          (_0x223104 === -1 ||
            (!_0x223104 && !_0x57fc2d && _0x312dc7.zeroIndex))
        ) {
          _0x234098("No valid clothing item selected");
          return;
        }
        FiveMUtil.loadAnim(_0x4f62b9.animDict)
          .then(() => {
            if (_0x4f62b9.offset) {
              _0x1ad9f0 = GetEntityCoords(_0xd5796b, false);
              _0x201d28 = _0x1ad9f0[0];
              _0x2194c9 = _0x1ad9f0[1];
              _0xe0cc34 = _0x1ad9f0[2];
              _0x2ca458 = GetEntityRotation(_0xd5796b, 2);
              _0x44daa9 = _0x2ca458[0];
              _0xcd279b = _0x2ca458[1];
              _0x5d0b44 = _0x2ca458[2];
              TaskPlayAnimAdvanced(
                _0xd5796b,
                _0x4f62b9.animDict,
                _0x4f62b9.animName,
                _0x201d28,
                _0x2194c9,
                _0xe0cc34,
                _0x44daa9,
                _0xcd279b,
                _0x5d0b44,
                4,
                3,
                -1,
                50,
                _0x4f62b9.offset,
                0,
                0
              );
            } else {
              TaskPlayAnim(
                _0xd5796b,
                _0x4f62b9.animDict,
                _0x4f62b9.animName,
                4,
                3,
                -1,
                50,
                0,
                false,
                false,
                false
              );
            }
            if (!_0x4f62b9.length) {
              _0x45a5f6();
              return;
            }
            delay(_0x4f62b9.length)
              .then(() => {
                if (_0x37dfa0) {
                  if (_0x312dc7.type === "drawable") {
                    setPedComponentVariation(
                      _0xd5796b,
                      Object.assign({}, _0x2b853e, _0x2796a8)
                    );
                  } else {
                    setPedPropsIndices(
                      _0xd5796b,
                      Object.assign({}, _0x2b853e, _0x2796a8)
                    );
                  }
                  if (
                    _0x312dc7.item &&
                    createAnimationData[_0x2b853e] &&
                    _0x223104 !== _0x31f6de
                  ) {
                    TriggerEvent(
                      "qb-inventory:removeItemByMetaKV",
                      _0x312dc7.item,
                      1,
                      _0x312dc7.item,
                      _0x31f6de
                    );
                    createAnimationData[_0x2b853e] = false;
                  }
                } else if (_0x312dc7.type === "drawable") {
                  setPedComponentVariation(
                    _0xd5796b,
                    Object.assign({}, _0x2b853e, [-1, 0])
                  );
                } else {
                  setPedPropsIndices(
                    _0xd5796b,
                    Object.assign({}, _0x2b853e, [-1, 0])
                  );
                }
                StopAnimTask(
                  _0xd5796b,
                  _0x4f62b9.animDict,
                  _0x4f62b9.animName,
                  _0x4f62b9.stopSpeed ?? 16
                );
                _0x45a5f6();
              })
              .catch(_0x234098);
          })
          .catch(_0x234098);
      })
      .catch(_0x234098);
  });
}
onNet("clothing:equip", function (_0x5d9a28, _0x47815e) {
  if (!_0x47815e) {
    FaceWear(_0x5d9a28, false);
    return;
  }
  var _0x3dba05 = GetEntityModel(PlayerPedId());
  if (_0x3dba05 !== _0x47815e.model) {
    return;
  }
  FaceWear(_0x5d9a28, true, [_0x47815e.componentId, _0x47815e.texture]);
});
function Rq(_0x3f2e7b, _0x2a1739) {
  if (_0x2a1739 == null || _0x2a1739 > _0x3f2e7b.length) {
    _0x2a1739 = _0x3f2e7b.length;
  }
  for (
    var _0xc08756 = 0, _0x17845e = new Array(_0x2a1739);
    _0xc08756 < _0x2a1739;
    _0xc08756++
  ) {
    _0x17845e[_0xc08756] = _0x3f2e7b[_0xc08756];
  }
  return _0x17845e;
}
function Sq(_0x32d422) {
  if (Array.isArray(_0x32d422)) {
    return _0x32d422;
  }
}
function Tq(
  _0xfe1029,
  _0x416e25,
  _0x4bca5f,
  _0x4ef56c,
  _0x599404,
  _0x15f333,
  _0x57e8e2
) {
  try {
    var _0x334f62 = _0xfe1029[_0x15f333](_0x57e8e2);
    var _0x9fbd40 = _0x334f62.value;
  } catch (_0x1a6864) {
    _0x4bca5f(_0x1a6864);
    return;
  }
  if (_0x334f62.done) {
    _0x416e25(_0x9fbd40);
  } else {
    Promise.resolve(_0x9fbd40).then(_0x4ef56c, _0x599404);
  }
}
function Uq(_0x73c531) {
  return function () {
    var _0xace0cc = this;
    var _0x4d4464 = arguments;
    return new Promise(function (_0x3a48a4, _0xca3287) {
      var _0x41d125 = _0x73c531.apply(_0xace0cc, _0x4d4464);
      function _0x2d7647(_0x11f139) {
        Tq(
          _0x41d125,
          _0x3a48a4,
          _0xca3287,
          _0x2d7647,
          _0x2f1969,
          "next",
          _0x11f139
        );
      }
      function _0x2f1969(_0x4622c2) {
        Tq(
          _0x41d125,
          _0x3a48a4,
          _0xca3287,
          _0x2d7647,
          _0x2f1969,
          "throw",
          _0x4622c2
        );
      }
      _0x2d7647(undefined);
    });
  };
}
function Vq(_0x1f759b, _0x140ebd) {
  var _0x1baa79 =
    _0x1f759b == null
      ? null
      : (typeof Symbol !== "undefined" && _0x1f759b[Symbol.iterator]) ||
        _0x1f759b["@@iterator"];
  if (_0x1baa79 == null) {
    return;
  }
  var _0x358379 = [];
  var _0x18c92d = true;
  var _0x543bf6 = false;
  var _0xe35aa7;
  var _0x104b4b;
  try {
    for (
      _0x1baa79 = _0x1baa79.call(_0x1f759b);
      !(_0x18c92d = (_0xe35aa7 = _0x1baa79.next()).done);
      _0x18c92d = true
    ) {
      _0x358379.push(_0xe35aa7.value);
      if (_0x140ebd && _0x358379.length === _0x140ebd) {
        break;
      }
    }
  } catch (_0x2ee1af) {
    _0x543bf6 = true;
    _0x104b4b = _0x2ee1af;
  } finally {
    try {
      if (!_0x18c92d && _0x1baa79.return != null) {
        _0x1baa79.return();
      }
    } finally {
      if (_0x543bf6) {
        throw _0x104b4b;
      }
    }
  }
  return _0x358379;
}
function Wq() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function Xq(_0x4685c5, _0x43a459) {
  return (
    Sq(_0x4685c5) ||
    Vq(_0x4685c5, _0x43a459) ||
    Yq(_0x4685c5, _0x43a459) ||
    Wq()
  );
}
function Yq(_0x1d2f2c, _0x439c96) {
  if (!_0x1d2f2c) {
    return;
  }
  if (typeof _0x1d2f2c === "string") {
    return Rq(_0x1d2f2c, _0x439c96);
  }
  var _0x1a8e0b = Object.prototype.toString.call(_0x1d2f2c).slice(8, -1);
  if (_0x1a8e0b === "Object" && _0x1d2f2c.constructor) {
    _0x1a8e0b = _0x1d2f2c.constructor.name;
  }
  if (_0x1a8e0b === "Map" || _0x1a8e0b === "Set") {
    return Array.from(_0x1a8e0b);
  }
  if (
    _0x1a8e0b === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1a8e0b)
  ) {
    return Rq(_0x1d2f2c, _0x439c96);
  }
}
function Zq(_0x3a819f, _0x22c402) {
  var _0x5cdd35;
  var _0x4c15c0;
  var _0x158f58;
  var _0x4dea17;
  var _0x48c589 = {
    label: 0,
    sent: function () {
      if (_0x158f58[0] & 1) {
        throw _0x158f58[1];
      }
      return _0x158f58[1];
    },
    trys: [],
    ops: [],
  };
  _0x4dea17 = {
    next: _0x1f621a(0),
    throw: _0x1f621a(1),
    return: _0x1f621a(2),
  };
  if (typeof Symbol === "function") {
    _0x4dea17[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x4dea17;
  function _0x1f621a(_0x275c89) {
    return function (_0x10d043) {
      return _0x13ee3d([_0x275c89, _0x10d043]);
    };
  }
  function _0x13ee3d(_0x4650ad) {
    if (_0x5cdd35) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x48c589) {
      try {
        _0x5cdd35 = 1;
        if (
          _0x4c15c0 &&
          (_0x158f58 =
            _0x4650ad[0] & 2
              ? _0x4c15c0.return
              : _0x4650ad[0]
              ? _0x4c15c0.throw ||
                ((_0x158f58 = _0x4c15c0.return) && _0x158f58.call(_0x4c15c0), 0)
              : _0x4c15c0.next) &&
          !(_0x158f58 = _0x158f58.call(_0x4c15c0, _0x4650ad[1])).done
        ) {
          return _0x158f58;
        }
        _0x4c15c0 = 0;
        if (_0x158f58) {
          _0x4650ad = [_0x4650ad[0] & 2, _0x158f58.value];
        }
        switch (_0x4650ad[0]) {
          case 0:
          case 1:
            _0x158f58 = _0x4650ad;
            break;
          case 4:
            _0x48c589.label++;
            var _0x1e4d1e = {
              value: _0x4650ad[1],
              done: false,
            };
            return _0x1e4d1e;
          case 5:
            _0x48c589.label++;
            _0x4c15c0 = _0x4650ad[1];
            _0x4650ad = [0];
            continue;
          case 7:
            _0x4650ad = _0x48c589.ops.pop();
            _0x48c589.trys.pop();
            continue;
          default:
            if (
              !((_0x158f58 = _0x48c589.trys),
              (_0x158f58 =
                _0x158f58.length > 0 && _0x158f58[_0x158f58.length - 1])) &&
              (_0x4650ad[0] === 6 || _0x4650ad[0] === 2)
            ) {
              _0x48c589 = 0;
              continue;
            }
            if (
              _0x4650ad[0] === 3 &&
              (!_0x158f58 ||
                (_0x4650ad[1] > _0x158f58[0] && _0x4650ad[1] < _0x158f58[3]))
            ) {
              _0x48c589.label = _0x4650ad[1];
              break;
            }
            if (_0x4650ad[0] === 6 && _0x48c589.label < _0x158f58[1]) {
              _0x48c589.label = _0x158f58[1];
              _0x158f58 = _0x4650ad;
              break;
            }
            if (_0x158f58 && _0x48c589.label < _0x158f58[2]) {
              _0x48c589.label = _0x158f58[2];
              _0x48c589.ops.push(_0x4650ad);
              break;
            }
            if (_0x158f58[2]) {
              _0x48c589.ops.pop();
            }
            _0x48c589.trys.pop();
            continue;
        }
        _0x4650ad = _0x22c402.call(_0x3a819f, _0x48c589);
      } catch (_0x27ada3) {
        _0x4650ad = [6, _0x27ada3];
        _0x4c15c0 = 0;
      } finally {
        _0x5cdd35 = _0x158f58 = 0;
      }
    }
    if (_0x4650ad[0] & 5) {
      throw _0x4650ad[1];
    }
    var _0xb7469a = {
      value: _0x4650ad[0] ? _0x4650ad[1] : undefined,
      done: true,
    };
    return _0xb7469a;
  }
}
function BarberData() {
  var _0xa52f47 =
    GetPedHeadBlendNumHeads(0) +
    GetPedHeadBlendNumHeads(1) +
    GetPedHeadBlendNumHeads(2) +
    GetPedHeadBlendNumHeads(3);
  var _0x48b6c9 = Object.values(FacialBarberStuff)
    .filter(function (_0x1cb1e0) {
      return typeof _0x1cb1e0 === "number";
    })
    .map(function (_0x3c7039) {
      var _0x9030bb = GetPedHeadOverlayNum(+_0x3c7039);
      var _0x3062f7 = {
        name: FacialBarberStuff[_0x3c7039],
        total: _0x9030bb,
      };
      return _0x3062f7;
    });
  var _0x3aef1d = {
    heads: _0xa52f47,
    headOverlays: _0x48b6c9,
  };
  return _0x3aef1d;
}
function getHairColorMybe() {
  var _0x420705 = [];
  for (var _0x5daf7b = 0; _0x5daf7b < 64; _0x5daf7b++) {
    var _0x2bf33a = Xq(GetPedHairRgbColor(_0x5daf7b), 3);
    var _0x46f2ba = _0x2bf33a[0];
    var _0x2d2bc1 = _0x2bf33a[1];
    var _0x2b039e = _0x2bf33a[2];
    var _0x5330fe = {
      id: _0x5daf7b,
      r: _0x46f2ba,
      g: _0x2d2bc1,
      b: _0x2b039e,
    };
    _0x420705.push(_0x5330fe);
  }
  return _0x420705;
}
function ar() {
  var _0x1e5fb0 = [];
  for (var _0x569d0c = 0; _0x569d0c < 64; _0x569d0c++) {
    var _0x6b47b2 = Xq(GetPedMakeupRgbColor(_0x569d0c), 3);
    var _0xd16cdc = _0x6b47b2[0];
    var _0x161cde = _0x6b47b2[1];
    var _0xae0c68 = _0x6b47b2[2];
    _0x1e5fb0[_0x569d0c] = {
      id: _0x569d0c,
      r: _0xd16cdc,
      g: _0x161cde,
      b: _0xae0c68,
    };
  }
  return _0x1e5fb0;
}
function getHeadBlend(_0x42af3a) {
  var _0x5ce70e = new Uint32Array(new ArrayBuffer(80));
  var _0x1e1adf = new Float32Array(new ArrayBuffer(80));
  Citizen.invokeNative("0x2746BD9D88C5C5D0", _0x42af3a, _0x5ce70e);
  Citizen.invokeNative("0x2746BD9D88C5C5D0", _0x42af3a, _0x1e1adf);
  return {
    ShapeFirst: _0x5ce70e[0],
    ShapeSecond: _0x5ce70e[2],
    ShapeThird: _0x5ce70e[4],
    SkinFirst: _0x5ce70e[6],
    SkinSecond: _0x5ce70e[8],
    SkinThird: _0x5ce70e[10],
    ShapeMix: +_0x1e1adf[12].toFixed(2),
    SkinMix: +_0x1e1adf[14].toFixed(2),
    ThirdMix: +_0x1e1adf[16].toFixed(2),
  };
}
function setPedHeadBlendData(_0xf8deb7, _0x45f26a) {
  SetPedHeadBlendData(
    _0xf8deb7,
    _0x45f26a.ShapeFirst ?? 0,
    _0x45f26a.ShapeSecond ?? 0,
    _0x45f26a.ShapeThird ?? 0,
    _0x45f26a.SkinFirst ?? 0,
    _0x45f26a.SkinSecond ?? 0,
    _0x45f26a.SkinThird ?? 0,
    _0x45f26a.ShapeMix ?? 0,
    _0x45f26a.SkinMix ?? 0,
    _0x45f26a.ThirdMix ?? 0,
    false
  );
}
function getPlayerHairStyleDetails(_0x59fde5) {
  return {
    component: GetPedDrawableVariation(_0x59fde5, 2),
    color: GetPedHairColor(_0x59fde5),
    highlightColor: GetPedHairHighlightColor(_0x59fde5),
  };
}
function setPedHairColor(_0x321420, _0x3f96d3, _0x2ad08c) {
  SetPedHairColor(_0x321420, _0x3f96d3, _0x2ad08c);
}
function FetchEyeColors() {
  return [
    "Parents",
    "Green",
    "Very Light Blue",
    "Dark Blue",
    "Brown",
    "Dark Brown",
    "Light Brown",
    "Blue",
    "Light Blue",
    "Pink",
    "Yellow",
    "Purple",
    "Black",
    "Gradient Spiral",
    "Orange",
    "Nuclear",
    "White Spiral",
    "Red Spiral",
    "Shiny Half Blue/Half Red",
    "Ying Yang",
    "Red Outline",
    "Green Snake",
    "Red Snake",
    "Blue Snake",
    "Yellow Snake",
    "Bright Yellow",
    "Fully Black",
    "Red Small Pupil",
    "Devil Blue",
    "Devil Black",
    "White Small Pupil",
    "Glossed Over",
    "Emerald",
  ];
}
function getFeatures(_0x1ca295) {
  return Object.values(Pn)
    .filter(function (_0x4c96a7) {
      return typeof _0x4c96a7 === "number";
    })
    .reduce(function (_0x4b5d35, _0x2c57a8) {
      _0x4b5d35[Pn[_0x2c57a8]] = +GetPedFaceFeature(
        _0x1ca295,
        +_0x2c57a8
      ).toFixed(2);
      return _0x4b5d35;
    }, {});
}
function setPedFaceFeature(_0x568cff, _0x1b0b23) {
  try {
    for (const [_0x1a68b6, _0x4a3db4] of Object.entries(_0x1b0b23)) {
      const _0x24dce8 = Pn[_0x1a68b6];
      const _0x442226 = +_0x4a3db4;
      SetPedFaceFeature(_0x568cff, _0x24dce8, _0x442226);
    }
  } catch (_0x3d3984) {
    console.error("Error while setting ped face feature:", _0x3d3984);
    throw _0x3d3984;
  }
}
function getOverlays(_0x58b841) {
  return Object.values(FacialBarberStuff)
    .filter(function (_0x28a142) {
      return typeof _0x28a142 === "number";
    })
    .reduce(function (_0x5928b3, _0x1c8aa1) {
      var _0x1d793a = GetPedHeadOverlayData(_0x58b841, +_0x1c8aa1);
      var _0x2548f4 = {
        value: _0x1d793a[1],
        colorType: _0x1d793a[2],
        firstColor: _0x1d793a[3],
        secondColor: _0x1d793a[4],
        opacity: +_0x1d793a[5].toFixed(2),
      };
      _0x5928b3[FacialBarberStuff[_0x1c8aa1]] = _0x2548f4;
      return _0x5928b3;
    }, {});
}
function setPedHeadoverlay(_0x23b583, _0x407265) {
  try {
    for (const [_0x1a84ad, _0x556573] of Object.entries(_0x407265)) {
      const _0x242758 = FacialBarberStuff[_0x1a84ad];
      const _0x2f2df5 = _0x556573.value;
      const _0x4b1fcd = _0x556573.opacity;
      SetPedHeadOverlay(_0x23b583, _0x242758, _0x2f2df5, _0x4b1fcd);
      const _0x213e25 = _0x556573.colorType;
      const _0x17bc74 = _0x556573.firstColor;
      const _0x1c27f4 = _0x556573.secondColor;
      SetPedHeadOverlayColor(
        _0x23b583,
        _0x242758,
        _0x213e25,
        _0x17bc74,
        _0x1c27f4
      );
    }
  } catch (_0x436c6d) {
    console.error("Error while setting ped head overlay:", _0x436c6d);
    throw _0x436c6d;
  }
}

async function setModel(
  _0x4db8f7 = "1885233650",
  _0x2dc94b,
  _0x2a2ea9,
  _0x51a4a2
) {
  var _0x3a4bb2;

  DebugLog('====================================');
  DebugLog('Model received:')
  DebugLog(_0x4db8f7)

  if (_0x4db8f7 == 1885233650 || _0x4db8f7 == -1667301416 || _0x4db8f7 == "mp_m_freemode_01" || _0x4db8f7 == "mp_f_freemode_01") {
    _0x3a4bb2 = await LoadModelGhost(_0x4db8f7);
  } else {
    _0x3a4bb2 = await FiveMUtil.loadModel(_0x4db8f7);
  }

  DebugLog("Model to Load:");
  DebugLog("Result: "+_0x3a4bb2 + " Model: " +_0x4db8f7);
  DebugLog("====================================");

  if (!_0x3a4bb2) {
    console.error("[CLOTHING] Model failed to load", _0x4db8f7);
    
    DebugLog("====================================");
    return PlayerPedId();
  }

  SetPlayerModel(PlayerId(), _0x4db8f7);
  var _0x5e6227 = PlayerPedId();

  emit("karma-clothing:pedChanged", _0x5e6227);
  SetModelAsNoLongerNeeded(_0x4db8f7);
  manageAnimalBehavior(_0x4db8f7);
  if (!checkIfTattooIsUnique(_0x4db8f7)) {
    loadPedDefaults(_0x5e6227, _0x51a4a2);
    _0x2dc94b = true;
    if (_0x2dc94b) {
      await applyPedDataToEntity(_0x5e6227, _0x51a4a2);
    }
    if (_0x2a2ea9) {
      fetchGetTattoos.reset(_0x4db8f7);
      fetchgetFade.reset();
      await fetchAndApplyPlayerDecorations(_0x5e6227);
    }
    return _0x5e6227;
  }
  return _0x5e6227;
}

var mr = KarmaDevelopmentUtil.cache(
  (function () {
    var _0xc1c53b = Uq(function (_0x1ef383) {
      var _0x41a7c3;
      return Zq(this, function (_0xfbad42) {
        switch (_0xfbad42.label) {
          case 0:
            return [4, RPC.execute("karma-clothing:getAllowedPeds")];
          case 1:
            _0x41a7c3 = _0xfbad42.sent();
            return [2, [true, _0x41a7c3]];
        }
      });
    });
    return function (_0x2904b6) {
      return _0xc1c53b.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 3600000,
  }
);
var PedData = KarmaDevelopmentUtil.cacheableMap(
  async function (_0x13408c, _0x11279d) {
    try {
      var _0x3ced92 = await RPC.execute("karma-clothing:getPedData", _0x11279d);
      return [true, _0x3ced92];
    } catch (_0x546926) {
      throw _0x546926;
    }
  },
  {
    timeToLive: 1800000,
  }
);

async function applyPedDataToEntity(_0x59d48b, _0x51ddbd = false) {
  emit("karma-clothing:applyCurrentClothing");
  var _0x4fb6be = GetEntityModel(_0x59d48b);
  var _0x39a038 = await PedData.get(_0x4fb6be);
  if (_0x39a038) {
    applyPedData(
      _0x59d48b,
      _0x39a038.headblend,
      _0x39a038.features,
      _0x39a038.overlays,
      _0x39a038.eyeColor,
      _0x51ddbd
    );
    return Promise.resolve();
  } else {
    throw new Error("Failed to fetch PedData for entity model: " + _0x4fb6be);
  }
}
async function getMaleFemale() {
  var _0x2fee2d;
  var _0x33aeb8 = false;
  _0x2fee2d = getCurrentResourceConfig("models");
  var _0x352236 = {
    male: _0x2fee2d.male,
    female: _0x2fee2d.female,
    whitelist: _0x33aeb8 ?? [],
  };
  return _0x352236;
}

var funcSavePedData = (function () {
  var _0x467842 = Uq(function (_0x5479e5) {
    return Zq(this, function (_0x2b723) {
      switch (_0x2b723.label) {
        case 0:
          var _0x2c5ead = GetEntityModel(_0x5479e5);
          var _0x4ebc9f = getHeadBlend(_0x5479e5);
          var _0x2ebb76 = getFeatures(_0x5479e5);
          var _0x568d2f = getOverlays(_0x5479e5);
          var _0x42a7ac = GetPedEyeColor(_0x5479e5);
          PedData.reset(_0x2c5ead);

          if (GetEntityArchetypeName(PlayerPedId()) == "mp_m_freemode_01" || GetEntityArchetypeName(PlayerPedId()) == "mp_f_freemode_01") {
            return [
              4,
              RPC.execute(
                "karma-clothing:savePedData",
                _0x2c5ead,
                _0x4ebc9f,
                _0x2ebb76,
                _0x568d2f,
                _0x42a7ac
              ),
            ];
          }
          
        case 1:
          return [2, _0x2b723.sent()];
      }
    });
  });
  return function _0x56b4e2(_0x1efdfb) {
    return _0x467842.apply(this, arguments);
  };
})();


function applyPedData(
  _0x2ff455,
  _0x5b9293,
  _0x3cad2f,
  _0x2fe321,
  _0x5439d3,
  _0x19c0f9 = false
) {
  if (!_0x19c0f9) {
    setPedHeadBlendData(_0x2ff455, _0x5b9293);
  }
  setPedFaceFeature(_0x2ff455, _0x3cad2f);
  setPedHeadoverlay(_0x2ff455, _0x2fe321);
  SetPedEyeColor(_0x2ff455, _0x5439d3);
}
function loadPedDefaults(_0x1bbc43, _0x3f629d = false) {
  SetPedDefaultComponentVariation(_0x1bbc43);
  if (!_0x3f629d) {
    SetPedHeadBlendData(_0x1bbc43, 0, 0, 0, 15, 0, 0, 0, 1, 0, false);
  }
  SetPedComponentVariation(_0x1bbc43, 11, 0, 1, 0);
  SetPedComponentVariation(_0x1bbc43, 8, 0, 1, 0);
  SetPedComponentVariation(_0x1bbc43, 6, 1, 2, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 1, 1, 0, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 2, 1, 0, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 4, 2, 0, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 5, 2, 0, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 8, 2, 0, 0);
  SetPedHeadOverlayColor(_0x1bbc43, 10, 1, 0, 0);
  SetPedHeadOverlay(_0x1bbc43, 1, 0, 0);
  SetPedHairColor(_0x1bbc43, 1, 1);
}
var AnimalModels1 = [
  GetHashKey("a_c_raccoon_01"),
  GetHashKey("a_c_racoon_01"),
  GetHashKey("a_c_seagull"),
  GetHashKey("a_c_pigeon"),
  GetHashKey("a_c_rat"),
  GetHashKey("a_c_cormorant"),
  GetHashKey("a_c_crow"),
  GetHashKey("a_c_hen"),
  GetHashKey("a_c_chickenhawk"),
  GetHashKey("a_c_boar"),
  GetHashKey("a_c_rabbit_01"),
  GetHashKey("a_c_pigeon"),
  GetHashKey("a_c_panther"),
  GetHashKey("a_c_horse"),
  GetHashKey("a_c_mtlion"),
  GetHashKey("a_c_seagull"),
  GetHashKey("a_c_deer"),
  GetHashKey("a_c_leopard"),
  GetHashKey("a_c_coyote"),
];
var AnimalModels2 = [
  GetHashKey("a_c_raccoon_01"),
  GetHashKey("a_c_racoon_01"),
  GetHashKey("a_c_hen"),
  GetHashKey("a_c_cat"),
  GetHashKey("a_c_cat_01"),
  GetHashKey("a_c_chop"),
  GetHashKey("a_c_retriever"),
  GetHashKey("a_c_husky"),
  GetHashKey("a_c_shepherd"),
  GetHashKey("a_c_shepherd_np"),
  GetHashKey("a_c_rottweiler"),
  GetHashKey("a_c_westy"),
  GetHashKey("a_c_westy_np"),
  GetHashKey("a_c_pug"),
  GetHashKey("a_c_poodle"),
  GetHashKey("a_c_panther"),
  GetHashKey("a_c_horse"),
  GetHashKey("a_c_mtlion"),
  GetHashKey("a_c_deer"),
  GetHashKey("a_c_leopard"),
  GetHashKey("a_c_coyote"),
];
var AnimalsModels3 = [
  GetHashKey("a_c_raccoon_01"),
  GetHashKey("a_c_racoon_01"),
  GetHashKey("a_c_hen"),
  GetHashKey("a_c_cat"),
  GetHashKey("a_c_cat_01"),
  GetHashKey("a_c_westy"),
  GetHashKey("a_c_westy_np"),
  GetHashKey("a_c_pug"),
];
function manageAnimalBehavior(_0x2247ec) {
  var _0x5bf2f1 =
    typeof _0x2247ec === "string" ? GetHashKey(_0x2247ec) : _0x2247ec;
  if (AnimalModels1.includes(_0x5bf2f1)) {
    var _0x5da7e0 = PlayerPedId();
    var _0x9a6bfb = GetEntityMaxHealth(_0x5da7e0);
    setEntityHealth(_0x5da7e0, _0x9a6bfb);
  }
  if (AnimalModels2.includes(_0x5bf2f1)) {
    var _0x372c1a = setInterval(function () {
      if (GetEntityModel(PlayerPedId()) !== _0x5bf2f1) {
        clearInterval(_0x372c1a);
        return;
      }
      ResetPlayerStamina(PlayerId());
    }, 2000);
  }
  if (AnimalsModels3.includes(_0x5bf2f1)) {
    var _0x372c1a = setInterval(function () {
      var _0x33874d = PlayerPedId();
      if (GetEntityModel(_0x33874d) !== _0x5bf2f1) {
        clearInterval(_0x372c1a);
        return;
      }
      if (IsPedSprinting(_0x33874d)) {
        SetPedMoveRateOverride(_0x33874d, 1.45);
      } else if (IsPedRunning(_0x33874d)) {
        SetPedMoveRateOverride(_0x33874d, 1.15);
      }
    });
  }
}
exports("ApplyPedData", applyPedData);
exports("SetModel", setModel);
exports("LoadPedDefaults", loadPedDefaults);
function yr(
  _0x4abbbf,
  _0x57c8cd,
  _0x5b0657,
  _0xce22a6,
  _0x274352,
  _0x1a8c12,
  _0xbba71d
) {
  try {
    var _0x13447e = _0x4abbbf[_0x1a8c12](_0xbba71d);
    var _0x8c9c7e = _0x13447e.value;
  } catch (_0x292b9b) {
    _0x5b0657(_0x292b9b);
    return;
  }
  if (_0x13447e.done) {
    _0x57c8cd(_0x8c9c7e);
  } else {
    Promise.resolve(_0x8c9c7e).then(_0xce22a6, _0x274352);
  }
}
function zr(_0x2d1be6) {
  return function () {
    var _0x28004d = this;
    var _0x2db72e = arguments;
    return new Promise(function (_0x3ef280, _0xe6f807) {
      var _0x468d29 = _0x2d1be6.apply(_0x28004d, _0x2db72e);
      function _0xbacf48(_0x333265) {
        yr(
          _0x468d29,
          _0x3ef280,
          _0xe6f807,
          _0xbacf48,
          _0x5034f6,
          "next",
          _0x333265
        );
      }
      function _0x5034f6(_0xe3428f) {
        yr(
          _0x468d29,
          _0x3ef280,
          _0xe6f807,
          _0xbacf48,
          _0x5034f6,
          "throw",
          _0xe3428f
        );
      }
      _0xbacf48(undefined);
    });
  };
}
function Ar(_0x29c076, _0x375fac) {
  var _0x38b008;
  var _0x35dc27;
  var _0x320bd1;
  var _0x1048ab;
  var _0x565054 = {
    label: 0,
    sent: function () {
      if (_0x320bd1[0] & 1) {
        throw _0x320bd1[1];
      }
      return _0x320bd1[1];
    },
    trys: [],
    ops: [],
  };
  _0x1048ab = {
    next: _0x774387(0),
    throw: _0x774387(1),
    return: _0x774387(2),
  };
  if (typeof Symbol === "function") {
    _0x1048ab[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x1048ab;
  function _0x774387(_0x3bc3f0) {
    return function (_0x236bb8) {
      return _0x5b2ceb([_0x3bc3f0, _0x236bb8]);
    };
  }
  function _0x5b2ceb(_0xdce83e) {
    if (_0x38b008) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x565054) {
      try {
        _0x38b008 = 1;
        if (
          _0x35dc27 &&
          (_0x320bd1 =
            _0xdce83e[0] & 2
              ? _0x35dc27.return
              : _0xdce83e[0]
              ? _0x35dc27.throw ||
                ((_0x320bd1 = _0x35dc27.return) && _0x320bd1.call(_0x35dc27), 0)
              : _0x35dc27.next) &&
          !(_0x320bd1 = _0x320bd1.call(_0x35dc27, _0xdce83e[1])).done
        ) {
          return _0x320bd1;
        }
        _0x35dc27 = 0;
        if (_0x320bd1) {
          _0xdce83e = [_0xdce83e[0] & 2, _0x320bd1.value];
        }
        switch (_0xdce83e[0]) {
          case 0:
          case 1:
            _0x320bd1 = _0xdce83e;
            break;
          case 4:
            _0x565054.label++;
            var _0x21b3be = {
              value: _0xdce83e[1],
              done: false,
            };
            return _0x21b3be;
          case 5:
            _0x565054.label++;
            _0x35dc27 = _0xdce83e[1];
            _0xdce83e = [0];
            continue;
          case 7:
            _0xdce83e = _0x565054.ops.pop();
            _0x565054.trys.pop();
            continue;
          default:
            if (
              !((_0x320bd1 = _0x565054.trys),
              (_0x320bd1 =
                _0x320bd1.length > 0 && _0x320bd1[_0x320bd1.length - 1])) &&
              (_0xdce83e[0] === 6 || _0xdce83e[0] === 2)
            ) {
              _0x565054 = 0;
              continue;
            }
            if (
              _0xdce83e[0] === 3 &&
              (!_0x320bd1 ||
                (_0xdce83e[1] > _0x320bd1[0] && _0xdce83e[1] < _0x320bd1[3]))
            ) {
              _0x565054.label = _0xdce83e[1];
              break;
            }
            if (_0xdce83e[0] === 6 && _0x565054.label < _0x320bd1[1]) {
              _0x565054.label = _0x320bd1[1];
              _0x320bd1 = _0xdce83e;
              break;
            }
            if (_0x320bd1 && _0x565054.label < _0x320bd1[2]) {
              _0x565054.label = _0x320bd1[2];
              _0x565054.ops.push(_0xdce83e);
              break;
            }
            if (_0x320bd1[2]) {
              _0x565054.ops.pop();
            }
            _0x565054.trys.pop();
            continue;
        }
        _0xdce83e = _0x375fac.call(_0x29c076, _0x565054);
      } catch (_0x48320c) {
        _0xdce83e = [6, _0x48320c];
        _0x35dc27 = 0;
      } finally {
        _0x38b008 = _0x320bd1 = 0;
      }
    }
    if (_0xdce83e[0] & 5) {
      throw _0xdce83e[1];
    }
    var _0x1549d8 = {
      value: _0xdce83e[0] ? _0xdce83e[1] : undefined,
      done: true,
    };
    return _0x1549d8;
  }
}
var hasCustomHeadModel = false;
function setHasCustomModelVariable(_0x9e8075) {
  hasCustomHeadModel = _0x9e8075;
}
function Drawables(_0x327564) {
  var _0x510535 = {};
  for (
    var _0x502ecc = 0;
    _0x502ecc < Object.keys(ClothsTable1).length / 2;
    _0x502ecc++
  ) {
    var _0x46d1bd = ClothsTable1[_0x502ecc];
    var _0x2b860f = GetNumberOfPedDrawableVariations(_0x327564, _0x502ecc);
    if (!_0x510535[_0x46d1bd]) {
      _0x510535[_0x46d1bd] = [];
    }
    for (var _0x4bd8ee = 0; _0x4bd8ee < _0x2b860f; _0x4bd8ee++) {
      var _0x1db0c0 = GetNumberOfPedTextureVariations(
        _0x327564,
        _0x502ecc,
        _0x4bd8ee
      );
      _0x510535[_0x46d1bd].push(_0x1db0c0);
    }
  }
  return _0x510535;
}
function Props(_0x3a5a3e) {
  var _0xf636bb = {};
  var _0x19ad49 = true;
  var _0x9ad7f = false;
  var _0x1b8c71 = undefined;
  try {
    for (
      var _0x1e024e = Object.values(ClothingType)
          .filter(function (_0x345805) {
            return typeof _0x345805 === "number";
          })
          [Symbol.iterator](),
        _0x49fd99;
      !(_0x19ad49 = (_0x49fd99 = _0x1e024e.next()).done);
      _0x19ad49 = true
    ) {
      var _0x161d66 = _0x49fd99.value;
      var _0x349a4a = ClothingType[_0x161d66];
      var _0x9730d9 = GetNumberOfPedPropDrawableVariations(
        _0x3a5a3e,
        _0x161d66
      );
      if (!_0xf636bb[_0x349a4a]) {
        _0xf636bb[_0x349a4a] = [];
      }
      for (var _0x2181f0 = 0; _0x2181f0 < _0x9730d9; _0x2181f0++) {
        var _0x178d78 = GetNumberOfPedPropTextureVariations(
          _0x3a5a3e,
          _0x161d66,
          _0x2181f0
        );
        _0xf636bb[_0x349a4a].push(_0x178d78);
      }
    }
  } catch (_0x186ff1) {
    _0x9ad7f = true;
    _0x1b8c71 = _0x186ff1;
  } finally {
    try {
      if (!_0x19ad49 && _0x1e024e.return != null) {
        _0x1e024e.return();
      }
    } finally {
      if (_0x9ad7f) {
        throw _0x1b8c71;
      }
    }
  }
  return _0xf636bb;
}
function setPedComponentVariation(_0x413302, _0x482859) {
  for (var _0xf04867 in _0x482859) {
    var _0x20b73f = ClothsTable1[_0xf04867];
    if (_0x20b73f === ClothsTable1.Face) {
      if (_0x482859[_0xf04867][0] < 0) {
        _0x482859[_0xf04867][0] = 0;
      }
    }
    SetPedComponentVariation(
      _0x413302,
      _0x20b73f,
      _0x482859[_0xf04867][0],
      _0x482859[_0xf04867][1],
      2
    );
  }
}
function setPedPropsIndices(_0x3eb632, _0x5f31da) {
  for (var _0x2cede2 in _0x5f31da) {
    if (_0x5f31da[_0x2cede2][0] === -1) {
      ClearPedProp(_0x3eb632, ClothingType[_0x2cede2]);
      continue;
    }
    SetPedPropIndex(
      _0x3eb632,
      ClothingType[_0x2cede2],
      _0x5f31da[_0x2cede2][0],
      _0x5f31da[_0x2cede2][1],
      true
    );
  }
}
function getEntityClothingDrawables(_0x396c12) {
  var _0x3e98e4 = {};
  for (
    var _0x59184c = 0;
    _0x59184c < Object.keys(ClothsTable1).length / 2;
    _0x59184c++
  ) {
    var _0x17ec4e = ClothsTable1[_0x59184c];
    var _0x92b728 = GetPedDrawableVariation(_0x396c12, _0x59184c);
    var _0x429527 = GetPedTextureVariation(_0x396c12, _0x59184c);
    _0x3e98e4[_0x17ec4e] = [_0x92b728, _0x429527];
  }
  return _0x3e98e4;
}
function getProps(_0x323f47) {
  var _0x1c5b15 = {};
  var _0x65aa2b = true;
  var _0x1b48c8 = false;
  var _0x531dec = undefined;
  try {
    for (
      var _0x497f08 = Object.values(ClothingType)
          .filter(function (_0x27743a) {
            return typeof _0x27743a === "number";
          })
          [Symbol.iterator](),
        _0x3d09cf;
      !(_0x65aa2b = (_0x3d09cf = _0x497f08.next()).done);
      _0x65aa2b = true
    ) {
      var _0x5df6f5 = _0x3d09cf.value;
      var _0x28be4d = ClothingType[_0x5df6f5];
      var _0x47dedc = GetPedPropIndex(_0x323f47, _0x5df6f5);
      var _0x343706 = GetPedPropTextureIndex(_0x323f47, _0x5df6f5);
      _0x1c5b15[_0x28be4d] = [_0x47dedc, _0x343706];
    }
  } catch (_0x4b16fb) {
    _0x1b48c8 = true;
    _0x531dec = _0x4b16fb;
  } finally {
    try {
      if (!_0x65aa2b && _0x497f08.return != null) {
        _0x497f08.return();
      }
    } finally {
      if (_0x1b48c8) {
        throw _0x531dec;
      }
    }
  }
  return _0x1c5b15;
}
var Kr = KarmaDevelopmentUtil.cache(
  (function () {
    var _0x4bdcfb = zr(function (_0x550899) {
      var _0x2cf71d;
      var _0x4de740;
      var _0x1e56da = arguments;
      return Ar(this, function (_0xf25bd1) {
        switch (_0xf25bd1.label) {
          case 0:
            _0x2cf71d =
              _0x1e56da.length > 1 && _0x1e56da[1] !== undefined
                ? _0x1e56da[1]
                : false;
            return [
              4,
              RPC.execute(
                "karma-clothing:fetchBlockedClothingForCharacter",
                _0x2cf71d
              ),
            ];
          case 1:
            _0x4de740 = _0xf25bd1.sent();
            if (!_0x4de740) {
              return [2, [false, null]];
            }
            return [2, [true, _0x4de740]];
        }
      });
    });
    return function (_0x4b486d) {
      return _0x4bdcfb.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 900000,
  }
);
var Mr = KarmaDevelopmentUtil.cache(
  (function () {
    var _0x5a66be = zr(function (_0x103d79) {
      var _0x3c58e2;
      var _0x4a31ca;
      var _0x1fad4b = arguments;
      return Ar(this, function (_0x435a29) {
        switch (_0x435a29.label) {
          case 0:
            _0x3c58e2 =
              _0x1fad4b.length > 1 && _0x1fad4b[1] !== undefined
                ? _0x1fad4b[1]
                : false;
            return [
              4,
              RPC.execute(
                "karma-clothing:fetchBlockedTattoosForCharacter",
                _0x3c58e2
              ),
            ];
          case 1:
            _0x4a31ca = _0x435a29.sent();
            if (!_0x4a31ca) {
              return [2, [false, null]];
            }
            return [2, [true, _0x4a31ca]];
        }
      });
    });
    return function (_0x31b78f) {
      return _0x5a66be.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 900000,
  }
);
var rpcGetCurrentClothing = KarmaDevelopmentUtil.cache(
  function () {
    return new Promise(function (_0x278b68, _0x2e85c5) {
      RPC.execute("karma-clothing:getCurrentClothing")
        .then(function (_0x2be64d) {
          _0x278b68([true, _0x2be64d]);
        })
        .catch(function (_0x51d851) {
          _0x2e85c5(_0x51d851);
        });
    });
  },
  {
    timeToLive: 900000,
  }
);

function saveCurrentClothing(_0x40f445) {
  var _0x1f6764 = GetEntityModel(_0x40f445);
  var _0x2d8e56 = getEntityClothingDrawables(_0x40f445);
  var _0x2e93b2 = getProps(_0x40f445);
  var _0x2d420c = getPlayerHairStyleDetails(_0x40f445);
  rpcGetCurrentClothing.reset();
  ClearAnimationData();

  return RPC.execute(
    "karma-clothing:saveCurrentClothing",
    _0x1f6764,// GetEntityArchetypeName(_0x40f445), //_0x1f6764,
    GetEntityArchetypeName(_0x40f445),
    _0x2d8e56,
    _0x2e93b2,
    [_0x2d420c.color, _0x2d420c.highlightColor],
    fadeLayer,
    hasCustomHeadModel
  );
  
}
  
  async function ApplyCurrentClothing(_0x401e1b, _0x10ed5d) {
  var _0x4247fe = GetEntityModel(_0x401e1b);
  var _0x23b031 = await rpcGetCurrentClothing.get();
  if (!_0x23b031) {
    return;
  }
  if (_0x23b031.fadeLayer) {
    setPlayerFadeStatus(_0x23b031.fadeLayer);
  }
  var _0x329c5f = hasCustomHeadModel;
  hasCustomHeadModel = _0x23b031.customHeadModel;
  if (!_0x23b031.model) {
    return;
  }
  if (
    _0x23b031.model === _0x4247fe &&
    !_0x10ed5d &&
    !hasCustomHeadModel &&
    !_0x329c5f
  ) {
    return;
  }
  await setModel(_0x23b031.model, true, true, hasCustomHeadModel);
  if (!_0x23b031.drawables || !_0x23b031.props || !_0x23b031.hairColor) {
    return;
  }
  applyPedClothing(
    _0x401e1b,
    _0x23b031.drawables,
    _0x23b031.props,
    _0x23b031.hairColor
  );
}
function applyPedClothing(
  _0x3bd1dc,
  _0xf0c900,
  _0x5276fb,
  _0x57353f,
  _0x58539f
) {
  setPedComponentVariation(_0x3bd1dc, _0xf0c900);
  setPedPropsIndices(_0x3bd1dc, _0x5276fb);
  setPedHairColor(_0x3bd1dc, _0x57353f[0], _0x57353f[1]);
  if (!_0x58539f && !checkIfTattooIsUnique(GetEntityModel(_0x3bd1dc))) {
    fetchgetFade.reset();
    fetchAndApplyPlayerDecorations(_0x3bd1dc);
  }
}
async function getCurrentPed() {
  return new Promise(async (_0x307e4c, _0x347b84) => {
    try {
      let _0x98e56c = PlayerPedId();
      let _0x522953 = GetEntityModel(_0x98e56c);
      let _0x1ff1fd = getPlayerHairStyleDetails(_0x98e56c);
      let _0xfddd6d = {};
      _0xfddd6d.tattoos = await fetchGetTattoos.get(_0x522953);
      _0xfddd6d.fade = await fetchgetFade.get();
      let _0x30ba28 = {
        clothing: {
          model: _0x522953,
          drawables: getEntityClothingDrawables(_0x98e56c),
          props: getProps(_0x98e56c),
          hairColor: [_0x1ff1fd.color, _0x1ff1fd.highlightColor],
          customHeadModel: hasCustomHeadModel,
        },
        pedData: {
          headblend: getHeadBlend(_0x98e56c),
          features: getFeatures(_0x98e56c),
          overlays: getOverlays(_0x98e56c),
          eyeColor: GetPedEyeColor(_0x98e56c),
        },
        decorations: _0xfddd6d,
      };
      _0x307e4c(_0x30ba28);
    } catch (_0x3f0df4) {
      _0x347b84(_0x3f0df4);
    }
  });
}
exports("ApplyPedClothing", applyPedClothing);
exports("SaveCurrentClothing", saveCurrentClothing);
exports("GetCurrentPed", getCurrentPed);
function Tr(
  _0x1a815b,
  _0x14fc5d,
  _0x2e5ae8,
  _0x1e1f44,
  _0x1c2aff,
  _0x2fcb14,
  _0x342cff
) {
  try {
    var _0x1c8768 = _0x1a815b[_0x2fcb14](_0x342cff);
    var _0x47d014 = _0x1c8768.value;
  } catch (_0x420876) {
    _0x2e5ae8(_0x420876);
    return;
  }
  if (_0x1c8768.done) {
    _0x14fc5d(_0x47d014);
  } else {
    Promise.resolve(_0x47d014).then(_0x1e1f44, _0x1c2aff);
  }
}
function Ur(_0x21ce23) {
  return function () {
    var _0x16b434 = this;
    var _0x11f333 = arguments;
    return new Promise(function (_0x4e1a7b, _0x5e1031) {
      var _0x5cf1d3 = _0x21ce23.apply(_0x16b434, _0x11f333);
      function _0x31bde1(_0x518124) {
        Tr(
          _0x5cf1d3,
          _0x4e1a7b,
          _0x5e1031,
          _0x31bde1,
          _0x2e5111,
          "next",
          _0x518124
        );
      }
      function _0x2e5111(_0x45a022) {
        Tr(
          _0x5cf1d3,
          _0x4e1a7b,
          _0x5e1031,
          _0x31bde1,
          _0x2e5111,
          "throw",
          _0x45a022
        );
      }
      _0x31bde1(undefined);
    });
  };
}
function Vr(_0x37afd5, _0x56b885) {
  var _0x10da9a;
  var _0x330d88;
  var _0x3fa3ce;
  var _0x1f9b8b;
  var _0x4b6c30 = {
    label: 0,
    sent: function () {
      if (_0x3fa3ce[0] & 1) {
        throw _0x3fa3ce[1];
      }
      return _0x3fa3ce[1];
    },
    trys: [],
    ops: [],
  };
  _0x1f9b8b = {
    next: _0x540881(0),
    throw: _0x540881(1),
    return: _0x540881(2),
  };
  if (typeof Symbol === "function") {
    _0x1f9b8b[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x1f9b8b;
  function _0x540881(_0x429590) {
    return function (_0x32efc1) {
      return _0x4df986([_0x429590, _0x32efc1]);
    };
  }
  function _0x4df986(_0x4a7b27) {
    if (_0x10da9a) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x4b6c30) {
      try {
        _0x10da9a = 1;
        if (
          _0x330d88 &&
          (_0x3fa3ce =
            _0x4a7b27[0] & 2
              ? _0x330d88.return
              : _0x4a7b27[0]
              ? _0x330d88.throw ||
                ((_0x3fa3ce = _0x330d88.return) && _0x3fa3ce.call(_0x330d88), 0)
              : _0x330d88.next) &&
          !(_0x3fa3ce = _0x3fa3ce.call(_0x330d88, _0x4a7b27[1])).done
        ) {
          return _0x3fa3ce;
        }
        _0x330d88 = 0;
        if (_0x3fa3ce) {
          _0x4a7b27 = [_0x4a7b27[0] & 2, _0x3fa3ce.value];
        }
        switch (_0x4a7b27[0]) {
          case 0:
          case 1:
            _0x3fa3ce = _0x4a7b27;
            break;
          case 4:
            _0x4b6c30.label++;
            var _0x441309 = {
              value: _0x4a7b27[1],
              done: false,
            };
            return _0x441309;
          case 5:
            _0x4b6c30.label++;
            _0x330d88 = _0x4a7b27[1];
            _0x4a7b27 = [0];
            continue;
          case 7:
            _0x4a7b27 = _0x4b6c30.ops.pop();
            _0x4b6c30.trys.pop();
            continue;
          default:
            if (
              !((_0x3fa3ce = _0x4b6c30.trys),
              (_0x3fa3ce =
                _0x3fa3ce.length > 0 && _0x3fa3ce[_0x3fa3ce.length - 1])) &&
              (_0x4a7b27[0] === 6 || _0x4a7b27[0] === 2)
            ) {
              _0x4b6c30 = 0;
              continue;
            }
            if (
              _0x4a7b27[0] === 3 &&
              (!_0x3fa3ce ||
                (_0x4a7b27[1] > _0x3fa3ce[0] && _0x4a7b27[1] < _0x3fa3ce[3]))
            ) {
              _0x4b6c30.label = _0x4a7b27[1];
              break;
            }
            if (_0x4a7b27[0] === 6 && _0x4b6c30.label < _0x3fa3ce[1]) {
              _0x4b6c30.label = _0x3fa3ce[1];
              _0x3fa3ce = _0x4a7b27;
              break;
            }
            if (_0x3fa3ce && _0x4b6c30.label < _0x3fa3ce[2]) {
              _0x4b6c30.label = _0x3fa3ce[2];
              _0x4b6c30.ops.push(_0x4a7b27);
              break;
            }
            if (_0x3fa3ce[2]) {
              _0x4b6c30.ops.pop();
            }
            _0x4b6c30.trys.pop();
            continue;
        }
        _0x4a7b27 = _0x56b885.call(_0x37afd5, _0x4b6c30);
      } catch (_0x5f2c80) {
        _0x4a7b27 = [6, _0x5f2c80];
        _0x330d88 = 0;
      } finally {
        _0x10da9a = _0x3fa3ce = 0;
      }
    }
    if (_0x4a7b27[0] & 5) {
      throw _0x4a7b27[1];
    }
    var _0x5dcf51 = {
      value: _0x4a7b27[0] ? _0x4a7b27[1] : undefined,
      done: true,
    };
    return _0x5dcf51;
  }
}
var isCameraActive = true;
var isCameraReady = true;
var isOutfitMenuOpen = false;
var isPlayerInVehicle = false;
var getOutFitsRPC = KarmaDevelopmentUtil.cache(
  (function () {
    var _0x1f0be1 = Ur(function (_0x1f1c60) {
      var _0x253a80;
      return Vr(this, function (_0x3487bb) {
        switch (_0x3487bb.label) {
          case 0:
            return [4, RPC.execute("karma-clothing:getOutfits")];
          case 1:
            _0x253a80 = _0x3487bb.sent();
            return [2, [true, _0x253a80]];
        }
      });
    });
    return function (_0x22579d) {
      return _0x1f0be1.apply(this, arguments);
    };
  })(),
  {
    timeToLive: 900000,
  }
);
var SaveOutfitFunc = (function () {
  var _0x3a42ab = Ur(function (_0xda2df6, _0x3710da, _0xbb5db8, _0x3e7a42) {
    var _0x4cb471;
    var _0x27783b;
    var _0xc19e74;
    var _0x2746ff;
    var _0x59d6e3;
    return Vr(this, function (_0x15f9ce) {
      switch (_0x15f9ce.label) {
        case 0:
          _0x4cb471 = GetEntityModel(_0xda2df6);
          _0x27783b = getEntityClothingDrawables(_0xda2df6);
          _0xc19e74 = getProps(_0xda2df6);
          _0x2746ff = getPlayerHairStyleDetails(_0xda2df6);
          return [
            4,
            RPC.execute(
              "karma-clothing:saveOutfit",
              _0x3710da,
              _0xbb5db8,
              _0x3e7a42 ?? "",
              _0x4cb471,
              _0x27783b,
              _0xc19e74,
              [_0x2746ff.color, _0x2746ff.highlightColor],
              fadeLayer,
              hasCustomHeadModel
            ),
          ];
        case 1:
          _0x59d6e3 = _0x15f9ce.sent();
          return [2, _0x59d6e3];
      }
    });
  });
  return function _0x28281e(_0x3280ac, _0x2ca99e, _0x3f8b0d, _0x3c87ff) {
    return _0x3a42ab.apply(this, arguments);
  };
})();
function applyOutfitAndPedClothing(_0x35cb42, _0xbb01da) {
  getOutFitsRPC.get().then(async function (_0x391ac8) {
    if (!_0x391ac8) {
      return;
    }
    var _0x15781c =
      typeof _0xbb01da === "number"
        ? _0x391ac8.find(function (_0x17648f) {
            return _0x17648f.slot === _0xbb01da;
          })
        : _0xbb01da;
    if (!_0x15781c) {
      return;
    }
    var _0x2cc6a3 = _0x15781c.model;
    var _0x54e14a = _0x15781c.drawables;
    var _0x5bf0f3 = _0x15781c.props;
    var _0x27a729 = _0x15781c.hairColor;
    var _0x244131 = _0x15781c.fadeLayer;
    var _0x112854 = _0x15781c.customHeadModel;
    if (_0x244131) {
      setPlayerFadeStatus(_0x244131);
    }
    if (_0x112854) {
      setHasCustomModelVariable(_0x112854);
    }
    if (_0x2cc6a3 === GetEntityModel(_0x39afcc) && !_0x112854) {
      setImmediate(function () {});
      return;
    }
    var _0x39afcc = await setModel(_0x2cc6a3, true, true, _0x112854);
    applyPedClothing(_0x39afcc, _0x54e14a, _0x5bf0f3, _0x27a729);
    saveCurrentClothing(_0x39afcc);
    TriggerEvent("InteractSound_CL:PlayOnOne", "Clothes1", 0.6);
  });
}
function openOutfits_() {
  getOutFitsRPC
    .get()
    .then(function (_0xb4a6c5) {
      if (!_0xb4a6c5) {
        return;
      }
      var _0x52d7da = _0xb4a6c5.map(function (_0x5725bc) {
        var _0x6ec3b = {
          name: _0x5725bc.name,
          tags: _0x5725bc.tags,
          slot: _0x5725bc.slot,
        };
        return _0x6ec3b;
      });
      var _0x5496e7 = IsPedInAnyVehicle(PlayerPedId(), true);
      if (!isOutfitMenuOpen && isCameraActive && isCameraReady && !_0x5496e7) {
        HandleCameraGhost(PlayerPedId(), true, 2);
      }
      isOutfitMenuOpen = true;
      exports["karma-outfits"].open(_0x52d7da);
    })
    .catch(function (_0x1db787) {
      console.error("^5 [clothing]Error #1004");
    });
}
var ds = (function () {
  var _0x42ae07 = Ur(function (_0x42ddce) {
    var _0x422556;
    var _0x471c68;
    var _0x660d98;
    var _0x1b5298;
    var _0x5d4dd3;
    var _0x10edac;
    var _0x4b3d96;
    var _0x3918a6;
    var _0x221325;
    var _0x5e5c18;
    return Vr(this, function (_0x4a9131) {
      switch (_0x4a9131.label) {
        case 0:
          _0x422556 = PlayerPedId();
          _0x471c68 = _0x42ddce.model;
          _0x660d98 = _0x42ddce.drawables;
          _0x1b5298 = _0x42ddce.props;
          _0x5d4dd3 = _0x42ddce.hairColor;
          _0x10edac = _0x42ddce.fadeLayer;
          _0x4b3d96 = _0x42ddce.customHeadModel;
          _0x3918a6 = checkIfTattooIsUnique(_0x471c68);
          if (_0x471c68 === GetEntityModel(_0x422556) && !_0x4b3d96) {
            return [3, 2];
          }
          return [4, setModel(_0x471c68, true, false, _0x4b3d96)];
        case 1:
          _0x422556 = _0x4a9131.sent();
          DoSomeFunctionStuff(_0x422556);
          _0x4a9131.label = 2;
        case 2:
          if (_0x3918a6) {
            return [3, 5];
          }
          return [
            4,
            fetchFadeDatabase.get(
              _0x471c68 + "-" + _0x10edac,
              _0x471c68,
              _0x10edac
            ),
          ];
        case 3:
          _0x221325 = _0x4a9131.sent();
          return [4, fetchGetTattoos.get(_0x471c68)];
        case 4:
          _0x5e5c18 = _0x4a9131.sent();
          if (!_0x5e5c18 || !_0x221325) {
            return [2];
          }
          var _0x48f508 = {
            tattoos: _0x5e5c18,
            fade: _0x221325,
          };
          applyDecorations(_0x422556, _0x48f508);
          _0x4a9131.label = 5;
        case 5:
          applyPedClothing(_0x422556, _0x660d98, _0x1b5298, _0x5d4dd3, true);
          return [2];
      }
    });
  });
  return function _0x3f37b1(_0x3cc755) {
    return _0x42ae07.apply(this, arguments);
  };
})();
async function PerformCleanup() {
  try {
    var _0x258048 = PlayerPedId();
    await ApplyCurrentClothing(_0x258048);
  } catch (_0x37d7a2) {
    console.error("Error while performing cleanup:", _0x37d7a2);
    throw _0x37d7a2;
  }
}
on("karma-outfits:onClose", function () {
  if (!isOutfitMenuOpen) {
    return;
  }
  isOutfitMenuOpen = false;
  if (!isCameraReady || isPlayerInVehicle) {
    return;
  }
  PerformCleanup();
  CleanUpCameras();
});
on(
  "karma-outfits:preview",
  (function () {
    var _0x46419b = Ur(function (_0x1e356c) {
      var _0x5d8f75;
      var _0x1fa388;
      return Vr(this, function (_0x56d7e8) {
        switch (_0x56d7e8.label) {
          case 0:
            if (!isOutfitMenuOpen || !isCameraReady || isPlayerInVehicle) {
              return [2];
            }
            return [4, getOutFitsRPC.get()];
          case 1:
            _0x5d8f75 = _0x56d7e8.sent();
            if (!_0x5d8f75) {
              return [2];
            }
            _0x1fa388 = _0x5d8f75.find(function (_0x23cda3) {
              return _0x23cda3.slot === _0x1e356c;
            });
            if (!_0x1fa388) {
              return [2];
            }
            return [4, ds(_0x1fa388)];
          case 2:
            _0x56d7e8.sent();
            return [2];
        }
      });
    });
    return function (_0x35eb5a) {
      return _0x46419b.apply(this, arguments);
    };
  })()
);
on("karma-outfits:apply", async function (_0x321685) {
  if (!isOutfitMenuOpen) {
    return;
  }
  try {
    await applyOutfitAndPedClothing(PlayerPedId(), _0x321685);
    CleanUpCameras();
    isOutfitMenuOpen = false;
    exports["karma-outfits"].close();
  } catch (_0xe24d25) {
    console.error("^2 [clothing] Error #1005");
  }
});
on("karma-outfits:save", async function (_0x501ad2) {
  try {
    if (!isOutfitMenuOpen) {
      return;
    }
    const _0x4fb382 = await getOutFitsRPC.get();
    if (!_0x4fb382) {
      return;
    }
    let _0x5e696e = getCurrentResourceConfig("maxOutfits");
    let _0x2a9efa = 0;
    for (let _0x257667 = 1; _0x257667 <= _0x5e696e; _0x257667++) {
      let _0x41bb03 = false;
      for (let _0x3d07d0 = 0; _0x3d07d0 < _0x4fb382.length; _0x3d07d0++) {
        if (_0x4fb382[_0x3d07d0].slot === _0x257667) {
          _0x41bb03 = true;
          break;
        }
      }
      if (!_0x41bb03) {
        _0x2a9efa = _0x257667;
        break;
      }
    }
    const _0x4596ff = await SaveOutfitFunc(
      PlayerPedId(),
      _0x2a9efa,
      _0x501ad2.name,
      _0x501ad2.tags
    );
    if (_0x4596ff) {
      getOutFitsRPC.reset();
      openOutfits_();
    }
  } catch (_0x260da7) {
    console.error("Error saving outfit: #9003");
  }
});
on(
  "karma-outfits:edit",
  (function () {
    var _0x1ebc0a = Ur(function (_0x7a3ebc) {
      var _0x4b94a3;
      var _0x49a369;
      var _0x1c9a00;
      return Vr(this, function (_0x269e47) {
        switch (_0x269e47.label) {
          case 0:
            if (!isOutfitMenuOpen) {
              return [2];
            }
            return [4, getOutFitsRPC.get()];
          case 1:
            _0x4b94a3 = _0x269e47.sent();
            if (!_0x4b94a3) {
              return [2];
            }
            _0x49a369 = _0x4b94a3.find(function (_0x291786) {
              return _0x291786.slot === _0x7a3ebc.slot;
            });
            if (!_0x49a369) {
              return [2];
            }
            return [4, ds(_0x49a369)];
          case 2:
            _0x269e47.sent();
            return [
              4,
              SaveOutfitFunc(
                PlayerPedId(),
                _0x7a3ebc.slot,
                _0x7a3ebc.name,
                _0x7a3ebc.tags
              ),
            ];
          case 3:
            _0x1c9a00 = _0x269e47.sent();
            if (_0x1c9a00) {
              PerformCleanup();
              getOutFitsRPC.reset();
              openOutfits_();
            }
            return [2];
        }
      });
    });
    return function (_0x291c49) {
      return _0x1ebc0a.apply(this, arguments);
    };
  })()
);
on(
  "karma-outfits:delete",
  (function () {
    var _0x20a934 = Ur(function (_0x452633) {
      var _0x10dde0;
      return Vr(this, function (_0x4a5797) {
        switch (_0x4a5797.label) {
          case 0:
            return [4, RPC.execute("karma-clothing:deleteOutfit", _0x452633)];
          case 1:
            _0x10dde0 = _0x4a5797.sent();
            if (!_0x10dde0) {
              return [3, 4];
            }
            if (!isCameraReady) {
              return [3, 3];
            }
            return [4, PerformCleanup()];
          case 2:
            _0x4a5797.sent();
            _0x4a5797.label = 3;
          case 3:
            getOutFitsRPC.reset();
            openOutfits_();
            _0x4a5797.label = 4;
          case 4:
            return [2];
        }
      });
    });
    return function (_0x53bed8) {
      return _0x20a934.apply(this, arguments);
    };
  })()
);
function SetPreferences(_0x527a5b) {
  isCameraActive = _0x527a5b["hud.outfits.camera.enabled"];
  isCameraReady = _0x527a5b["hud.outfits.preview.enabled"];
}
onNet("np-preferences:setPreferences", SetPreferences);
function gs() {
  var _0x1a6f93 = false;
  var _0x1f6f9e = false;
  return _0x1a6f93 || _0x1f6f9e;
}
function hs(_0x12f44d, _0x1108b3) {
  if (_0x1108b3 == null || _0x1108b3 > _0x12f44d.length) {
    _0x1108b3 = _0x12f44d.length;
  }
  for (
    var _0x354041 = 0, _0xc1611d = new Array(_0x1108b3);
    _0x354041 < _0x1108b3;
    _0x354041++
  ) {
    _0xc1611d[_0x354041] = _0x12f44d[_0x354041];
  }
  return _0xc1611d;
}
function is(_0x183796) {
  if (Array.isArray(_0x183796)) {
    return _0x183796;
  }
}
function js(
  _0x4c4864,
  _0x4e59e3,
  _0x60da4d,
  _0x30886c,
  _0x9ce87c,
  _0x33bd63,
  _0xc8f38e
) {
  try {
    var _0x42bca1 = _0x4c4864[_0x33bd63](_0xc8f38e);
    var _0x5d8c93 = _0x42bca1.value;
  } catch (_0x2159e9) {
    _0x60da4d(_0x2159e9);
    return;
  }
  if (_0x42bca1.done) {
    _0x4e59e3(_0x5d8c93);
  } else {
    Promise.resolve(_0x5d8c93).then(_0x30886c, _0x9ce87c);
  }
}
function ks(_0x3b2615) {
  return function () {
    var _0x4ed02d = this;
    var _0x145a22 = arguments;
    return new Promise(function (_0x4be269, _0x429484) {
      var _0x1e79cf = _0x3b2615.apply(_0x4ed02d, _0x145a22);
      function _0x3811f3(_0x1d20b0) {
        js(
          _0x1e79cf,
          _0x4be269,
          _0x429484,
          _0x3811f3,
          _0xe84ff5,
          "next",
          _0x1d20b0
        );
      }
      function _0xe84ff5(_0x276a1f) {
        js(
          _0x1e79cf,
          _0x4be269,
          _0x429484,
          _0x3811f3,
          _0xe84ff5,
          "throw",
          _0x276a1f
        );
      }
      _0x3811f3(undefined);
    });
  };
}
function ls(_0x24fc96) {
  if (
    (typeof Symbol !== "undefined" && _0x24fc96[Symbol.iterator] != null) ||
    _0x24fc96["@@iterator"] != null
  ) {
    return Array.from(_0x24fc96);
  }
}
function ms() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function ns(_0x58e720) {
  return is(_0x58e720) || ls(_0x58e720) || os(_0x58e720) || ms();
}
function os(_0x4e5048, _0x26406e) {
  if (!_0x4e5048) {
    return;
  }
  if (typeof _0x4e5048 === "string") {
    return hs(_0x4e5048, _0x26406e);
  }
  var _0x23ca1f = Object.prototype.toString.call(_0x4e5048).slice(8, -1);
  if (_0x23ca1f === "Object" && _0x4e5048.constructor) {
    _0x23ca1f = _0x4e5048.constructor.name;
  }
  if (_0x23ca1f === "Map" || _0x23ca1f === "Set") {
    return Array.from(_0x23ca1f);
  }
  if (
    _0x23ca1f === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x23ca1f)
  ) {
    return hs(_0x4e5048, _0x26406e);
  }
}
function ps(_0x49de02, _0x18a9d9) {
  var _0x4e4262;
  var _0xd9cd03;
  var _0x1678ea;
  var _0x1c72d0;
  var _0x1f2bf1 = {
    label: 0,
    sent: function () {
      if (_0x1678ea[0] & 1) {
        throw _0x1678ea[1];
      }
      return _0x1678ea[1];
    },
    trys: [],
    ops: [],
  };
  _0x1c72d0 = {
    next: _0x5b119a(0),
    throw: _0x5b119a(1),
    return: _0x5b119a(2),
  };
  if (typeof Symbol === "function") {
    _0x1c72d0[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x1c72d0;
  function _0x5b119a(_0x56ae82) {
    return function (_0x460bb6) {
      return _0x50fcf3([_0x56ae82, _0x460bb6]);
    };
  }
  function _0x50fcf3(_0x2ce77d) {
    if (_0x4e4262) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x1f2bf1) {
      try {
        _0x4e4262 = 1;
        if (
          _0xd9cd03 &&
          (_0x1678ea =
            _0x2ce77d[0] & 2
              ? _0xd9cd03.return
              : _0x2ce77d[0]
              ? _0xd9cd03.throw ||
                ((_0x1678ea = _0xd9cd03.return) && _0x1678ea.call(_0xd9cd03), 0)
              : _0xd9cd03.next) &&
          !(_0x1678ea = _0x1678ea.call(_0xd9cd03, _0x2ce77d[1])).done
        ) {
          return _0x1678ea;
        }
        _0xd9cd03 = 0;
        if (_0x1678ea) {
          _0x2ce77d = [_0x2ce77d[0] & 2, _0x1678ea.value];
        }
        switch (_0x2ce77d[0]) {
          case 0:
          case 1:
            _0x1678ea = _0x2ce77d;
            break;
          case 4:
            _0x1f2bf1.label++;
            var _0x3b41c2 = {
              value: _0x2ce77d[1],
              done: false,
            };
            return _0x3b41c2;
          case 5:
            _0x1f2bf1.label++;
            _0xd9cd03 = _0x2ce77d[1];
            _0x2ce77d = [0];
            continue;
          case 7:
            _0x2ce77d = _0x1f2bf1.ops.pop();
            _0x1f2bf1.trys.pop();
            continue;
          default:
            if (
              !((_0x1678ea = _0x1f2bf1.trys),
              (_0x1678ea =
                _0x1678ea.length > 0 && _0x1678ea[_0x1678ea.length - 1])) &&
              (_0x2ce77d[0] === 6 || _0x2ce77d[0] === 2)
            ) {
              _0x1f2bf1 = 0;
              continue;
            }
            if (
              _0x2ce77d[0] === 3 &&
              (!_0x1678ea ||
                (_0x2ce77d[1] > _0x1678ea[0] && _0x2ce77d[1] < _0x1678ea[3]))
            ) {
              _0x1f2bf1.label = _0x2ce77d[1];
              break;
            }
            if (_0x2ce77d[0] === 6 && _0x1f2bf1.label < _0x1678ea[1]) {
              _0x1f2bf1.label = _0x1678ea[1];
              _0x1678ea = _0x2ce77d;
              break;
            }
            if (_0x1678ea && _0x1f2bf1.label < _0x1678ea[2]) {
              _0x1f2bf1.label = _0x1678ea[2];
              _0x1f2bf1.ops.push(_0x2ce77d);
              break;
            }
            if (_0x1678ea[2]) {
              _0x1f2bf1.ops.pop();
            }
            _0x1f2bf1.trys.pop();
            continue;
        }
        _0x2ce77d = _0x18a9d9.call(_0x49de02, _0x1f2bf1);
      } catch (_0x1db02b) {
        _0x2ce77d = [6, _0x1db02b];
        _0xd9cd03 = 0;
      } finally {
        _0x4e4262 = _0x1678ea = 0;
      }
    }
    if (_0x2ce77d[0] & 5) {
      throw _0x2ce77d[1];
    }
    var _0x421885 = {
      value: _0x2ce77d[0] ? _0x2ce77d[1] : undefined,
      done: true,
    };
    return _0x421885;
  }
}
var isInSpawnSelect = false;
function SetClothingMenuEnabled(_0xcc8c93) {
  isInSpawnSelect = _0xcc8c93;
}
AddEventHandler("QBCore:Client:OnPlayerLoaded", function () {
  characterLoaded();
  characterSpawned();
});
on("np-base:spawnInitialized", function () {
  characterLoaded();
});
onNet("np-base:characterLoaded", function () {
  characterLoaded();
});
on("np-spawn:characterSpawned", function () {
  characterSpawned();
});
onNet(
  "karma-clothing:openClothing",
  function (_0xe9ba11, _0x409aeb, _0x50bde8 = false, _0x970cf6) {
    isInSpawnSelect = _0x409aeb;
    openClothing("clothing", false, _0x50bde8);
  }
);
onNet("karma-clothing:openBarber", function (_0x11c2d3, _0x20fb65) {
  openBarber(_0x11c2d3);
});
onNet(
  "karma-clothing:openTattoo",
  function (_0x2d0ca8, _0x359051 = false, _0x3bd1ee) {
    KARMAZoneFunction(_0x2d0ca8, _0x359051);
  }
);
RegisterNetEvent("karma-clothing:applyCurrentClothing");
AddEventHandler("karma-clothing:applyCurrentClothing", function () {
  var _0x37683a = PlayerPedId();
  TriggerServerEvent("Police:getMeta");
  emit("playerstate:pedUpdated", _0x37683a);
  TriggerEvent("Animation:Set:Reset");
  return ApplyCurrentClothing(_0x37683a, true);
});
on("karma-clothing:pedChanged", function (_0x4b3e64) {
  emit("playerstate:pedUpdated", _0x4b3e64);
  characterSpawned();
});
onNet("karma-clothing:setModel", function (_0x529a81) {
  setModel(_0x529a81);
});
onNet("qb-clothing:client:openOutfitMenu", function (_0xc143b4 = true) {
  if (!gs() && !_0xc143b4) {
    return;
  }
  openOutfits_();
});
onNet(
  "karma-clothing:addOutfit",
  (function () {
    var _0x484b71 = ks(function (_0x485b97) {
      var _0x82fbc4;
      var _0x389495;
      var _0x16ddf6;
      var _0x3c5818;
      var _0x3e3a20;
      var _0x4ffdf4;
      var _0x30687c;
      var _0x2f6827;
      return ps(this, function (_0x5bd36c) {
        switch (_0x5bd36c.label) {
          case 0:
            _0x82fbc4 = ns(_0x485b97);
            _0x389495 = _0x82fbc4[0];
            _0x16ddf6 = _0x82fbc4[1];
            _0x3c5818 = _0x82fbc4.slice(2);
            if (!gs()) {
              return [2];
            }
            _0x3e3a20 = +_0x16ddf6;
            _0x4ffdf4 = _0x3c5818.join(" ");
            _0x30687c = getCurrentResourceConfig("maxOutfits");
            if (!_0x3e3a20 || _0x3e3a20 > _0x30687c) {
              return [2];
            }
            return [4, SaveOutfitFunc(PlayerPedId(), _0x3e3a20, _0x4ffdf4)];
          case 1:
            _0x2f6827 = _0x5bd36c.sent();
            if (_0x2f6827) {
              getOutFitsRPC.reset();
              Config.Notification("Outfit saved", 1);
            }
            return [2];
        }
      });
    });
    return function (_0x53f83d) {
      return _0x484b71.apply(this, arguments);
    };
  })()
);
onNet(
  "karma-clothing:useOutfit",
  (function () {
    var _0x46f6be = ks(function (_0x568e91) {
      return ps(this, function (_0x4ae55d) {
        switch (_0x4ae55d.label) {
          case 0:
            if (!gs()) {
              return [2];
            }
            return [4, applyOutfitAndPedClothing(PlayerPedId(), +_0x568e91)];
          case 1:
            _0x4ae55d.sent();
            return [2];
        }
      });
    });
    return function (_0x1037f8) {
      return _0x46f6be.apply(this, arguments);
    };
  })()
);
onNet(
  "karma-clothing:deleteOutfit",
  (function () {
    var _0x4d5a6e = ks(function (_0x3a0d9f) {
      var _0x544ffc;
      return ps(this, function (_0x33ef22) {
        switch (_0x33ef22.label) {
          case 0:
            if (!gs()) {
              return [2];
            }
            return [4, RPC.execute("karma-clothing:deleteOutfit", +_0x3a0d9f)];
          case 1:
            _0x544ffc = _0x33ef22.sent();
            if (_0x544ffc) {
              getOutFitsRPC.reset();
              Config.Notification("Outfit deleted", 1);
            }
            return [2];
        }
      });
    });
    return function (_0x2aaee9) {
      return _0x4d5a6e.apply(this, arguments);
    };
  })()
);
on(
  "np-inventory:itemUsed",
  (function () {
    var _0x28df25 = ks(function (_0x4c61ef, _0x3ad6a2) {
      var _0x41672a;
      var _0x3baadb;
      var _0x3f287c;
      var _0x247c3c;
      var _0x13021c;
      var _0x10ef00;
      var _0x230a2d;
      var _0x34c9e2;
      var _0x34eed3;
      var _0x47f0ff;
      var _0x1b7051;
      var _0x441067;
      return ps(this, function (_0x28da5b) {
        switch (_0x28da5b.label) {
          case 0:
            if (_0x4c61ef !== "customclothing") {
              return [3, 3];
            }
            _0x41672a = JSON.parse(_0x3ad6a2);
            if (_0x41672a.type !== "clothing") {
              return [3, 2];
            }
            _0x3baadb = _0x41672a.model;
            _0x3f287c = _0x41672a.drawables;
            _0x247c3c = _0x41672a.props;
            _0x13021c = _0x41672a.hair;
            return [4, setModel(_0x3baadb, true, true)];
          case 1:
            _0x10ef00 = _0x28da5b.sent();
            applyPedClothing(
              _0x10ef00,
              _0x3f287c,
              _0x247c3c,
              [_0x13021c.color, _0x13021c.highlightColor],
              true
            );
            saveCurrentClothing(_0x10ef00);
            _0x28da5b.label = 2;
          case 2:
            if (_0x41672a.type === "barber") {
              _0x230a2d = _0x41672a.headblend;
              _0x34c9e2 = _0x41672a.features;
              _0x34eed3 = _0x41672a.overlays;
              _0x47f0ff = _0x41672a.eyeColor;
              _0x1b7051 = PlayerPedId();
              applyPedData(
                _0x1b7051,
                _0x230a2d,
                _0x34c9e2,
                _0x34eed3,
                _0x47f0ff
              );
              funcSavePedData(_0x1b7051);
            }
            _0x28da5b.label = 3;
          case 3:
            if (_0x4c61ef !== "mask" && _0x4c61ef !== "hat") {
              return [3, 5];
            }
            _0x441067 = JSON.parse(_0x3ad6a2);
            return [
              4,
              FaceWear(_0x4c61ef, true, [_0x441067[_0x4c61ef], _0x441067.txd]),
            ];
          case 4:
            _0x28da5b.sent();
            saveCurrentClothing(PlayerPedId());
            _0x28da5b.label = 5;
          case 5:
            return [2];
        }
      });
    });
    return function (_0x2d6941, _0x2bc76a) {
      return _0x28df25.apply(this, arguments);
    };
  })()
);
onNet(
  "karma-clothing:faceWear",
  (function () {
    var _0x50ac26 = ks(function (_0x433be2, _0x5bba13) {
      return ps(this, function (_0x5d4a2b) {
        FaceWear(_0x433be2, _0x5bba13);
        return [2];
      });
    });
    return function (_0x2eace7, _0x61d5db) {
      return _0x50ac26.apply(this, arguments);
    };
  })()
);
onNet(
  "karma-clothing:removeShoes",
  ks(function () {
    return ps(this, function (_0x59188d) {
      var _0x3492db = PlayerPedId();
      var _0x3fcc9f = GetEntityModel(_0x3492db);
      if (checkIfTattooIsUnique(_0x3fcc9f)) {
        return [2];
      }
      var _0x1fcf37 = getTattooGender(_0x3fcc9f) === "male" ? [34, 0] : [35, 0];
      var _0x436e15 = {
        Shoes: _0x1fcf37,
      };
      setPedComponentVariation(_0x3492db, _0x436e15);
      return [2];
    });
  })
);
RegisterCommand("togglebarber", function () {
  ToggleBarberblip();
});
on("karma-clothing:toggleBarberBlips", function () {
  ToggleBarberBlips();
});
RegisterCommand("toggletattoo", function () {
  HandleSomeBlipsForShopTattos();
});
on("karma-clothing:toggleTattooBlips", function () {
  HandleSomeBlipsForShopTattos();
});
function characterLoaded() {
  Kr.reset();
  Mr.reset();
  rpcGetCurrentClothing.reset();
  getOutFitsRPC.reset();
  fetchgetFade.reset();
  PedData.reset(existingTattoos.male);
  PedData.reset(existingTattoos.female);
  fetchGetTattoos.reset(existingTattoos.male);
  fetchGetTattoos.reset(existingTattoos.female);
  mr.reset();
}
function ts(_0x131e78, _0x5abca2) {
  if (_0x5abca2 == null || _0x5abca2 > _0x131e78.length) {
    _0x5abca2 = _0x131e78.length;
  }
  for (
    var _0x245b10 = 0, _0x30f528 = new Array(_0x5abca2);
    _0x245b10 < _0x5abca2;
    _0x245b10++
  ) {
    _0x30f528[_0x245b10] = _0x131e78[_0x245b10];
  }
  return _0x30f528;
}
function us(_0x39bcdd) {
  if (Array.isArray(_0x39bcdd)) {
    return _0x39bcdd;
  }
}
function vs(
  _0x59c0c3,
  _0x38859d,
  _0x32ed82,
  _0x55a318,
  _0x3c6281,
  _0xf1a233,
  _0x3f9602
) {
  try {
    var _0x20e1df = _0x59c0c3[_0xf1a233](_0x3f9602);
    var _0x4a218d = _0x20e1df.value;
  } catch (_0x5bcb7d) {
    _0x32ed82(_0x5bcb7d);
    return;
  }
  if (_0x20e1df.done) {
    _0x38859d(_0x4a218d);
  } else {
    Promise.resolve(_0x4a218d).then(_0x55a318, _0x3c6281);
  }
}
function ws(_0x44c984) {
  return function () {
    var _0x57f645 = this;
    var _0x2f82a6 = arguments;
    return new Promise(function (_0x582dbc, _0x403e1e) {
      var _0x3bc614 = _0x44c984.apply(_0x57f645, _0x2f82a6);
      function _0x224cee(_0x5e047b) {
        vs(
          _0x3bc614,
          _0x582dbc,
          _0x403e1e,
          _0x224cee,
          _0x5c648f,
          "next",
          _0x5e047b
        );
      }
      function _0x5c648f(_0x3ca13b) {
        vs(
          _0x3bc614,
          _0x582dbc,
          _0x403e1e,
          _0x224cee,
          _0x5c648f,
          "throw",
          _0x3ca13b
        );
      }
      _0x224cee(undefined);
    });
  };
}
function xs(_0x5eef1f, _0x5bb220) {
  var _0x5bd034 =
    _0x5eef1f == null
      ? null
      : (typeof Symbol !== "undefined" && _0x5eef1f[Symbol.iterator]) ||
        _0x5eef1f["@@iterator"];
  if (_0x5bd034 == null) {
    return;
  }
  var _0x41ab21 = [];
  var _0x4ef2ea = true;
  var _0x45ab24 = false;
  var _0x341c47;
  var _0x2ed173;
  try {
    for (
      _0x5bd034 = _0x5bd034.call(_0x5eef1f);
      !(_0x4ef2ea = (_0x341c47 = _0x5bd034.next()).done);
      _0x4ef2ea = true
    ) {
      _0x41ab21.push(_0x341c47.value);
      if (_0x5bb220 && _0x41ab21.length === _0x5bb220) {
        break;
      }
    }
  } catch (_0x30c35f) {
    _0x45ab24 = true;
    _0x2ed173 = _0x30c35f;
  } finally {
    try {
      if (!_0x4ef2ea && _0x5bd034.return != null) {
        _0x5bd034.return();
      }
    } finally {
      if (_0x45ab24) {
        throw _0x2ed173;
      }
    }
  }
  return _0x41ab21;
}
function ys() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function zs(_0x3fa7c1, _0x38bc7a) {
  return (
    us(_0x3fa7c1) ||
    xs(_0x3fa7c1, _0x38bc7a) ||
    As(_0x3fa7c1, _0x38bc7a) ||
    ys()
  );
}
function As(_0x7069d1, _0x2f2a9e) {
  if (!_0x7069d1) {
    return;
  }
  if (typeof _0x7069d1 === "string") {
    return ts(_0x7069d1, _0x2f2a9e);
  }
  var _0x5a3547 = Object.prototype.toString.call(_0x7069d1).slice(8, -1);
  if (_0x5a3547 === "Object" && _0x7069d1.constructor) {
    _0x5a3547 = _0x7069d1.constructor.name;
  }
  if (_0x5a3547 === "Map" || _0x5a3547 === "Set") {
    return Array.from(_0x5a3547);
  }
  if (
    _0x5a3547 === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x5a3547)
  ) {
    return ts(_0x7069d1, _0x2f2a9e);
  }
}
function Bs(_0x5f134a, _0x550bc0) {
  var _0x3249ad;
  var _0x4d433f;
  var _0xd5214f;
  var _0x4f783b;
  var _0x31672e = {
    label: 0,
    sent: function () {
      if (_0xd5214f[0] & 1) {
        throw _0xd5214f[1];
      }
      return _0xd5214f[1];
    },
    trys: [],
    ops: [],
  };
  _0x4f783b = {
    next: _0x30726e(0),
    throw: _0x30726e(1),
    return: _0x30726e(2),
  };
  if (typeof Symbol === "function") {
    _0x4f783b[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x4f783b;
  function _0x30726e(_0x4a0736) {
    return function (_0x44e26f) {
      return _0xbb27e9([_0x4a0736, _0x44e26f]);
    };
  }
  function _0xbb27e9(_0x5a1200) {
    if (_0x3249ad) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x31672e) {
      try {
        _0x3249ad = 1;
        if (
          _0x4d433f &&
          (_0xd5214f =
            _0x5a1200[0] & 2
              ? _0x4d433f.return
              : _0x5a1200[0]
              ? _0x4d433f.throw ||
                ((_0xd5214f = _0x4d433f.return) && _0xd5214f.call(_0x4d433f), 0)
              : _0x4d433f.next) &&
          !(_0xd5214f = _0xd5214f.call(_0x4d433f, _0x5a1200[1])).done
        ) {
          return _0xd5214f;
        }
        _0x4d433f = 0;
        if (_0xd5214f) {
          _0x5a1200 = [_0x5a1200[0] & 2, _0xd5214f.value];
        }
        switch (_0x5a1200[0]) {
          case 0:
          case 1:
            _0xd5214f = _0x5a1200;
            break;
          case 4:
            _0x31672e.label++;
            var _0xa49e1b = {
              value: _0x5a1200[1],
              done: false,
            };
            return _0xa49e1b;
          case 5:
            _0x31672e.label++;
            _0x4d433f = _0x5a1200[1];
            _0x5a1200 = [0];
            continue;
          case 7:
            _0x5a1200 = _0x31672e.ops.pop();
            _0x31672e.trys.pop();
            continue;
          default:
            if (
              !((_0xd5214f = _0x31672e.trys),
              (_0xd5214f =
                _0xd5214f.length > 0 && _0xd5214f[_0xd5214f.length - 1])) &&
              (_0x5a1200[0] === 6 || _0x5a1200[0] === 2)
            ) {
              _0x31672e = 0;
              continue;
            }
            if (
              _0x5a1200[0] === 3 &&
              (!_0xd5214f ||
                (_0x5a1200[1] > _0xd5214f[0] && _0x5a1200[1] < _0xd5214f[3]))
            ) {
              _0x31672e.label = _0x5a1200[1];
              break;
            }
            if (_0x5a1200[0] === 6 && _0x31672e.label < _0xd5214f[1]) {
              _0x31672e.label = _0xd5214f[1];
              _0xd5214f = _0x5a1200;
              break;
            }
            if (_0xd5214f && _0x31672e.label < _0xd5214f[2]) {
              _0x31672e.label = _0xd5214f[2];
              _0x31672e.ops.push(_0x5a1200);
              break;
            }
            if (_0xd5214f[2]) {
              _0x31672e.ops.pop();
            }
            _0x31672e.trys.pop();
            continue;
        }
        _0x5a1200 = _0x550bc0.call(_0x5f134a, _0x31672e);
      } catch (_0x214b39) {
        _0x5a1200 = [6, _0x214b39];
        _0x4d433f = 0;
      } finally {
        _0x3249ad = _0xd5214f = 0;
      }
    }
    if (_0x5a1200[0] & 5) {
      throw _0x5a1200[1];
    }
    var _0x17df48 = {
      value: _0x5a1200[0] ? _0x5a1200[1] : undefined,
      done: true,
    };
    return _0x17df48;
  }
}
var ActiveCamera = null;
var Ds = null;
var curIndex = 1;
var currentRotation = 0;
var entityMaybe_;
var Ks = {
  fov: 50,
  attachZ: -0.1,
  attachOffset: 2.5,
  widthOffset: 0.4,
};
var Ls = {
  fov: 30,
  attachZ: -0.7,
  attachOffset: 1.5,
  widthOffset: 0.2,
};
var EntityList = [
  {
    fov: 20,
    attachZ: 0.65,
    attachOffset: 1.5,
    widthOffset: 0.125,
  },
  {
    fov: 30,
    attachZ: 0.4,
    attachOffset: 2,
    widthOffset: 0.2,
  },
  {
    fov: 40,
    attachZ: 0.3,
    attachOffset: 2,
    widthOffset: 0.3,
  },
  Ks,
  Ls,
];
function DoSomeFunctionStuff(_0xd3f65d) {
  entityMaybe_ = _0xd3f65d;
}
var HandleCameraGhost = (function () {
  var _0x182945 = ws(function (_0x494432) {
    var _0x3d600a;
    var _0x376d6c;
    var _0x21ba96;
    var _0x2f9e2a;
    var _0x2e24a3 = arguments;
    return Bs(this, function (_0x4db937) {
      switch (_0x4db937.label) {
        case 0:
          _0x3d600a =
            _0x2e24a3.length > 1 && _0x2e24a3[1] !== undefined
              ? _0x2e24a3[1]
              : true;
          _0x376d6c =
            _0x2e24a3.length > 2 && _0x2e24a3[2] !== undefined
              ? _0x2e24a3[2]
              : 1;
          entityMaybe_ = _0x494432;
          _0x21ba96 = GetGameplayCamRot(2)[2];
          SetEntityHeading(PlayerPedId(), _0x21ba96 + 180);
          currentRotation = GetEntityHeading(entityMaybe_) + 90;
          SetFollowPedCamViewMode(0);
          SetPedCanPlayAmbientIdles(entityMaybe_, true, true);
          curIndex = _0x376d6c;
          ActiveCamera = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
          _0x2f9e2a = EntityList[curIndex];
          SetCamFov(ActiveCamera, _0x2f9e2a.fov);
          updateCameraPosition(entityMaybe_, ActiveCamera, 0, currentRotation);
          return [4, delay(0)];
        case 1:
          _0x4db937.sent();
          return [4, delay(0)];
        case 2:
          _0x4db937.sent();
          return [4, delay(0)];
        case 3:
          _0x4db937.sent();
          updateCameraPosition(entityMaybe_, ActiveCamera, 0.1);
          RenderScriptCams(true, _0x3d600a, 500, true, true);
          initializeControls();
          emit("karma-binds:should-execute", false);
          return [2];
      }
    });
  });
  return function _0x18c31d(_0x465a2d) {
    return _0x182945.apply(this, arguments);
  };
})();
function CleanUpCameras(_0x59ceca = true) {
  SetGameplayCamRelativeHeading(0);
  SetGameplayCamRelativePitch(0, 1);
  ClearPedTasks(entityMaybe_);
  RenderScriptCams(false, _0x59ceca, 500, false, false);
  if (ActiveCamera) {
    DestroyCam(ActiveCamera, true);
    ActiveCamera = null;
  }
  emit("karma-binds:should-execute", true);
}
function initializeControls() {
  var _0x1de935 = GetActiveScreenResolution();
  var _0x42e5ea = _0x1de935[0];
  var _0x29ee8f = _0x1de935[1];
  var _0x9aac1c = setTick(function () {
    if (!ActiveCamera) {
      clearTick(_0x9aac1c);
      return;
    }
    var _0x2526cf = GetNuiCursorPosition();
    for (var _0x35edc2 = 8; _0x35edc2 <= 143; _0x35edc2++) {
      DisableControlAction(0, _0x35edc2, true);
    }
    SetPauseMenuActive(false);
    DisableControlAction(0, 322, true);
    DisableControlAction(0, 245, true);
    if (IsDisabledControlJustPressed(0, 24)) {
      if (!IsNuiFocused() && isFirstTime) {
        SetNuiFocus(true, false);
      }
    }
    if (_0x2526cf[0] > _0x42e5ea * 0.65) {
      return;
    }
    var _0x48f462 = GetDisabledControlNormal(0, 220);
    if (IsDisabledControlPressed(0, 24)) {
      Ts(entityMaybe_, _0x48f462 * _0x42e5ea * 0.0125);
    }
    if (IsDisabledControlPressed(0, 25) && !isInSpawnSelect) {
      updateCameraPosition(
        entityMaybe_,
        ActiveCamera,
        _0x48f462 * _0x42e5ea * 0.0125
      );
    }
    var _0x43f8e6 = IsDisabledControlPressed(0, 16);
    if (_0x43f8e6) {
      Rs(entityMaybe_, true);
    }
    var _0x30bae2 = IsDisabledControlPressed(0, 17);
    if (_0x30bae2) {
      Rs(entityMaybe_, false);
    }
  });
}
function Rs(_0x2f8a85, _0x28ee4a, _0x1ba46f) {
  if (!ActiveCamera || Ds) {
    return;
  }
  var _0x96c0d = curIndex;
  var _0x440cc9 =
    _0x1ba46f && _0x1ba46f < EntityList.length - 1 ? _0x1ba46f : curIndex;
  if (_0x96c0d === EntityList.length - 1 && _0x28ee4a) {
    _0x28ee4a = false;
  }
  curIndex = _0x28ee4a
    ? Math.min(curIndex + 1, EntityList.length - 1)
    : Math.max(curIndex - 1, 0);
  var _0x5d4494 = _0x1ba46f ? EntityList[_0x1ba46f] : EntityList[curIndex];
  Ds = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
  SetCamFov(Ds, _0x5d4494.fov);
  updateCameraPosition(_0x2f8a85, Ds, 0, currentRotation);
  SetCamActiveWithInterp(Ds, ActiveCamera, 500, 1, 1);
  if (curIndex === 0 && curIndex !== _0x96c0d) {
    ws(function () {
      var _0x1b5b5a;
      var _0x6aff55;
      return Bs(this, function (_0x2bbe64) {
        switch (_0x2bbe64.label) {
          case 0:
            _0x1b5b5a = "gestures@m@standing@fat";
            _0x6aff55 = "gesture_hello";
            return [4, FiveMUtil.loadAnim(_0x1b5b5a)];
          case 1:
            _0x2bbe64.sent();
            TaskPlayAnim(
              _0x2f8a85,
              _0x1b5b5a,
              _0x6aff55,
              1000,
              8,
              -1,
              2,
              100,
              false,
              false,
              false
            );
            return [2];
        }
      });
    })();
  } else if (curIndex !== _0x96c0d) {
    ClearPedTasks(_0x2f8a85);
  }
  setTimeout(function () {
    if (!ActiveCamera) {
      return;
    }
    DestroyCam(ActiveCamera, false);
    ActiveCamera = Ds;
    Ds = null;
  }, 501);
}
function updateCameraPosition(_0xbd1156, _0x2182e5, _0x2dd4ae, _0x3a4e45) {
  if (!ActiveCamera) {
    return;
  }
  currentRotation = (currentRotation + _0x2dd4ae) % 360;
  var _0x59d40c = _0x3a4e45 ?? currentRotation;
  var _0x5b0005 = EntityList[curIndex];
  var _0x47ba83 =
    Math.cos((_0x59d40c * Math.PI) / 180) * _0x5b0005.attachOffset;
  var _0x151ec5 =
    Math.sin((_0x59d40c * Math.PI) / 180) * _0x5b0005.attachOffset;
  AttachCamToEntity(
    _0x2182e5,
    _0xbd1156,
    _0x47ba83,
    _0x151ec5,
    _0x5b0005.attachZ,
    false
  );
  var _0x2c7b10 = zs(GetCamRot(ActiveCamera, 2), 3);
  var _0x3fe63f = _0x2c7b10[0];
  var _0x1e5271 = _0x2c7b10[1];
  var _0x1c307a = _0x2c7b10[2];
  var _0x30d4f6 = Math.sin((_0x1c307a * Math.PI) / 180) * _0x5b0005.widthOffset;
  var _0x3b9b2d = Math.cos((_0x1c307a * Math.PI) / 180) * _0x5b0005.widthOffset;
  PointCamAtEntity(
    _0x2182e5,
    _0xbd1156,
    _0x3b9b2d,
    _0x30d4f6,
    _0x5b0005.attachZ,
    false
  );
}
function Ts(_0x2a67df, _0x5c028f) {
  SetEntityHeading(_0x2a67df, GetEntityHeading(_0x2a67df) + _0x5c028f);
}
function Us(_0x4b73c9, _0x2be314) {
  if (_0x2be314 == null || _0x2be314 > _0x4b73c9.length) {
    _0x2be314 = _0x4b73c9.length;
  }
  for (
    var _0x1b5eb1 = 0, _0x8427a6 = new Array(_0x2be314);
    _0x1b5eb1 < _0x2be314;
    _0x1b5eb1++
  ) {
    _0x8427a6[_0x1b5eb1] = _0x4b73c9[_0x1b5eb1];
  }
  return _0x8427a6;
}
function Vs(_0xeb1971) {
  if (Array.isArray(_0xeb1971)) {
    return _0xeb1971;
  }
}
function Ws(
  _0x4aaab7,
  _0x359c5a,
  _0x55f8c7,
  _0x5015a9,
  _0x52ced6,
  _0xafdcfa,
  _0x3bb1b5
) {
  try {
    var _0x377c1c = _0x4aaab7[_0xafdcfa](_0x3bb1b5);
    var _0x5cf5d = _0x377c1c.value;
  } catch (_0x163d90) {
    _0x55f8c7(_0x163d90);
    return;
  }
  if (_0x377c1c.done) {
    _0x359c5a(_0x5cf5d);
  } else {
    Promise.resolve(_0x5cf5d).then(_0x5015a9, _0x52ced6);
  }
}
function Xs(_0x2a040e) {
  return function () {
    var _0x108a12 = this;
    var _0x1ee1c2 = arguments;
    return new Promise(function (_0xe2bc83, _0x527179) {
      var _0x2c7305 = _0x2a040e.apply(_0x108a12, _0x1ee1c2);
      function _0x4aeed2(_0x1dfd6d) {
        Ws(
          _0x2c7305,
          _0xe2bc83,
          _0x527179,
          _0x4aeed2,
          _0x7873e9,
          "next",
          _0x1dfd6d
        );
      }
      function _0x7873e9(_0x1f2a4e) {
        Ws(
          _0x2c7305,
          _0xe2bc83,
          _0x527179,
          _0x4aeed2,
          _0x7873e9,
          "throw",
          _0x1f2a4e
        );
      }
      _0x4aeed2(undefined);
    });
  };
}
function Ys(_0x23b98e, _0x44c304, _0x5e84c7) {
  if (_0x44c304 in _0x23b98e) {
    var _0x94b454 = {
      value: _0x5e84c7,
      enumerable: true,
      configurable: true,
      writable: true,
    };
    Object.defineProperty(_0x23b98e, _0x44c304, _0x94b454);
  } else {
    _0x23b98e[_0x44c304] = _0x5e84c7;
  }
  return _0x23b98e;
}
function Zs(_0x5148e6, _0x3d79b5) {
  var _0x1fca71 =
    _0x5148e6 == null
      ? null
      : (typeof Symbol !== "undefined" && _0x5148e6[Symbol.iterator]) ||
        _0x5148e6["@@iterator"];
  if (_0x1fca71 == null) {
    return;
  }
  var _0x4568b1 = [];
  var _0x4a448b = true;
  var _0x2bf790 = false;
  var _0x58f249;
  var _0x43d72c;
  try {
    for (
      _0x1fca71 = _0x1fca71.call(_0x5148e6);
      !(_0x4a448b = (_0x58f249 = _0x1fca71.next()).done);
      _0x4a448b = true
    ) {
      _0x4568b1.push(_0x58f249.value);
      if (_0x3d79b5 && _0x4568b1.length === _0x3d79b5) {
        break;
      }
    }
  } catch (_0x3b5b71) {
    _0x2bf790 = true;
    _0x43d72c = _0x3b5b71;
  } finally {
    try {
      if (!_0x4a448b && _0x1fca71.return != null) {
        _0x1fca71.return();
      }
    } finally {
      if (_0x2bf790) {
        throw _0x43d72c;
      }
    }
  }
  return _0x4568b1;
}
function $s() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function SomeRandomFunc1(_0x575e28) {
  for (var _0x5d816e = 1; _0x5d816e < arguments.length; _0x5d816e++) {
    var _0x1f518a = arguments[_0x5d816e] ?? {};
    var _0x177bbc = Object.keys(_0x1f518a);
    if (typeof Object.getOwnPropertySymbols === "function") {
      _0x177bbc = _0x177bbc.concat(
        Object.getOwnPropertySymbols(_0x1f518a).filter(function (_0x19dc30) {
          return Object.getOwnPropertyDescriptor(
            _0x1f518a,
            _0x19dc30
          ).enumerable;
        })
      );
    }
    _0x177bbc.forEach(function (_0x351b70) {
      Ys(_0x575e28, _0x351b70, _0x1f518a[_0x351b70]);
    });
  }
  return _0x575e28;
}
function at(_0x475654, _0x2fe49d) {
  var _0x94ceb7 = Object.keys(_0x475654);
  if (Object.getOwnPropertySymbols) {
    var _0x57b38d = Object.getOwnPropertySymbols(_0x475654);
    if (_0x2fe49d) {
      _0x57b38d = _0x57b38d.filter(function (_0x4facfe) {
        return Object.getOwnPropertyDescriptor(_0x475654, _0x4facfe).enumerable;
      });
    }
    _0x94ceb7.push.apply(_0x94ceb7, _0x57b38d);
  }
  return _0x94ceb7;
}
function bt(_0x3290ae, _0x185528) {
  _0x185528 = _0x185528 ?? {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(
      _0x3290ae,
      Object.getOwnPropertyDescriptors(_0x185528)
    );
  } else {
    at(Object(_0x185528)).forEach(function (_0x1e53d9) {
      Object.defineProperty(
        _0x3290ae,
        _0x1e53d9,
        Object.getOwnPropertyDescriptor(_0x185528, _0x1e53d9)
      );
    });
  }
  return _0x3290ae;
}
function ct(_0x3f577f, _0x4cf9cf) {
  return (
    Vs(_0x3f577f) ||
    Zs(_0x3f577f, _0x4cf9cf) ||
    dt(_0x3f577f, _0x4cf9cf) ||
    $s()
  );
}
function dt(_0x2654e7, _0x37b07c) {
  if (!_0x2654e7) {
    return;
  }
  if (typeof _0x2654e7 === "string") {
    return Us(_0x2654e7, _0x37b07c);
  }
  var _0x32a3fd = Object.prototype.toString.call(_0x2654e7).slice(8, -1);
  if (_0x32a3fd === "Object" && _0x2654e7.constructor) {
    _0x32a3fd = _0x2654e7.constructor.name;
  }
  if (_0x32a3fd === "Map" || _0x32a3fd === "Set") {
    return Array.from(_0x32a3fd);
  }
  if (
    _0x32a3fd === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x32a3fd)
  ) {
    return Us(_0x2654e7, _0x37b07c);
  }
}
function et(_0x1cf967, _0x27fa80) {
  var _0x23e40b;
  var _0x2b8f68;
  var _0x55e7b6;
  var _0x54f961;
  var _0x518c2b = {
    label: 0,
    sent: function () {
      if (_0x55e7b6[0] & 1) {
        throw _0x55e7b6[1];
      }
      return _0x55e7b6[1];
    },
    trys: [],
    ops: [],
  };
  _0x54f961 = {
    next: _0x307955(0),
    throw: _0x307955(1),
    return: _0x307955(2),
  };
  if (typeof Symbol === "function") {
    _0x54f961[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x54f961;
  function _0x307955(_0x1a19ac) {
    return function (_0x5e1d2f) {
      return _0xbf0cb7([_0x1a19ac, _0x5e1d2f]);
    };
  }
  function _0xbf0cb7(_0x62f1aa) {
    if (_0x23e40b) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x518c2b) {
      try {
        _0x23e40b = 1;
        if (
          _0x2b8f68 &&
          (_0x55e7b6 =
            _0x62f1aa[0] & 2
              ? _0x2b8f68.return
              : _0x62f1aa[0]
              ? _0x2b8f68.throw ||
                ((_0x55e7b6 = _0x2b8f68.return) && _0x55e7b6.call(_0x2b8f68), 0)
              : _0x2b8f68.next) &&
          !(_0x55e7b6 = _0x55e7b6.call(_0x2b8f68, _0x62f1aa[1])).done
        ) {
          return _0x55e7b6;
        }
        _0x2b8f68 = 0;
        if (_0x55e7b6) {
          _0x62f1aa = [_0x62f1aa[0] & 2, _0x55e7b6.value];
        }
        switch (_0x62f1aa[0]) {
          case 0:
          case 1:
            _0x55e7b6 = _0x62f1aa;
            break;
          case 4:
            _0x518c2b.label++;
            var _0x3586c1 = {
              value: _0x62f1aa[1],
              done: false,
            };
            return _0x3586c1;
          case 5:
            _0x518c2b.label++;
            _0x2b8f68 = _0x62f1aa[1];
            _0x62f1aa = [0];
            continue;
          case 7:
            _0x62f1aa = _0x518c2b.ops.pop();
            _0x518c2b.trys.pop();
            continue;
          default:
            if (
              !((_0x55e7b6 = _0x518c2b.trys),
              (_0x55e7b6 =
                _0x55e7b6.length > 0 && _0x55e7b6[_0x55e7b6.length - 1])) &&
              (_0x62f1aa[0] === 6 || _0x62f1aa[0] === 2)
            ) {
              _0x518c2b = 0;
              continue;
            }
            if (
              _0x62f1aa[0] === 3 &&
              (!_0x55e7b6 ||
                (_0x62f1aa[1] > _0x55e7b6[0] && _0x62f1aa[1] < _0x55e7b6[3]))
            ) {
              _0x518c2b.label = _0x62f1aa[1];
              break;
            }
            if (_0x62f1aa[0] === 6 && _0x518c2b.label < _0x55e7b6[1]) {
              _0x518c2b.label = _0x55e7b6[1];
              _0x55e7b6 = _0x62f1aa;
              break;
            }
            if (_0x55e7b6 && _0x518c2b.label < _0x55e7b6[2]) {
              _0x518c2b.label = _0x55e7b6[2];
              _0x518c2b.ops.push(_0x62f1aa);
              break;
            }
            if (_0x55e7b6[2]) {
              _0x518c2b.ops.pop();
            }
            _0x518c2b.trys.pop();
            continue;
        }
        _0x62f1aa = _0x27fa80.call(_0x1cf967, _0x518c2b);
      } catch (_0x1baefb) {
        _0x62f1aa = [6, _0x1baefb];
        _0x2b8f68 = 0;
      } finally {
        _0x23e40b = _0x55e7b6 = 0;
      }
    }
    if (_0x62f1aa[0] & 5) {
      throw _0x62f1aa[1];
    }
    var _0x35239b = {
      value: _0x62f1aa[0] ? _0x62f1aa[1] : undefined,
      done: true,
    };
    return _0x35239b;
  }
}
var isFirstTime = false;
var StoreType = "clothing";
var mainDetailsDataForModel;
var isCustomModel = false;
var hasCustomHeadModel = false;
var keyValuePairs = {};
var localVarXD = undefined;
var numberOfTypes_ = {
  clothing: 1,
  barber: 3,
  tattoo: 9,
};
async function OpenShopType(_0x3f26fc, _0x43abce, _0x54f5fd, _0x10838d) {
  var _0x49b7d7 = PlayerPedId();
  var _0x58df6 = GetEntityModel(_0x49b7d7);
  if (!_0x10838d) {
    keyValuePairs = {};
    HandleCameraGhost(_0x3f26fc);
  }
  FreezeEntityPosition(_0x3f26fc, true);
  SetCurrentPedWeapon(PlayerPedId(), GetHashKey("WEAPON_UNARMED"), true);
  var _0xc7e470 = _0xc7e470 !== undefined ? _0xc7e470 : false;
  var _0x5a4188 = await getBarberMenuData(_0x49b7d7, _0x58df6, _0xc7e470);
  if (_0xc7e470) {
    if (!isInSpawnSelect) {
      return;
    }
    var _0x2428e7 = {
      show: true,
      type: "spawn",
      active: numberOfTypes_[_0x43abce],
      data: _0x54f5fd,
      barberData: _0x5a4188,
      isFree: _0x54f5fd.isFree ?? false,
    };
    SendNUIMessage({
      action: "clothing:show",
      data: _0x2428e7,
    });
    SetNuiFocusKeepInput(true);
    SetNuiFocus(true, true);
  } else {
    var _0x4be675 = {
      show: true,
      type: _0x43abce,
      active: numberOfTypes_[_0x43abce],
      data: _0x54f5fd,
      barberData: _0x5a4188,
      isFree: _0x54f5fd.isFree ?? false,
    };
    SendNUIMessage({
      action: "clothing:show",
      data: {
        show: true,
        type: _0x43abce,
        active: numberOfTypes_[_0x43abce],
        data: _0x54f5fd,
        barberData: _0x5a4188,
        isFree: _0x54f5fd.isFree ?? false,
      },
    });
    _0x4be675.isDev = true;
    SetNuiFocusKeepInput(true);
    SetNuiFocus(true, true);
  }
  emit("karma-binds:should-execute", false);
  StoreType = _0x43abce;
  isFirstTime = true;
  return _0x3f26fc;
}
function HandleClosingMenuCleanup(_0x49e001, _0x1270aa) {
  CleanUpCameras();
  FreezeEntityPosition(_0x49e001, false);
  SetNuiFocus(false, false);
  emit("karma-binds:should-execute", true);
  if (_0x1270aa) {
    SendNUIMessage({
      action: "clothing:show",
      data: {
        show: false,
      },
    });
  }
  SetClothingMenuEnabled(false);
}
RegisterNuiCallbackType("karma-clothing:ui:onChange");
on("__cfx_nui:karma-clothing:ui:onChange", async (_0x278acb, _0x21dfa4) => {
  let _0x46ce26 = await modifyCharacter(_0x278acb);
  _0x21dfa4(_0x46ce26);
});

async function modifyCharacter(_0x4c67f8) {
  var _0x5958d7 = {
    currentDrawables: {
      "-1": 1,
    },
    currentProps: {
      "-1": 1,
    },
    currentHair: {
      "-1": 1,
    },
  };
  var _0x419a92 = PlayerPedId();
  var _0x53675f = _0x4c67f8.type;
  _0x4c67f8 = _0x4c67f8.data || _0x4c67f8;
  switch (_0x53675f) {
    case "drawable":
      _0x5958d7.currentDrawables[_0x4c67f8.name] = [
        _0x4c67f8.component,
        _0x4c67f8.texture,
      ];
      if (_0x4c67f8.name === "Hair") {
        var _0xe1371b = {
          component: _0x4c67f8.component,
        };
        _0x5958d7.currentHair = _0xe1371b;
      }
      setPedComponentVariation(
        _0x419a92,
        Ys({}, _0x4c67f8.name, [_0x4c67f8.component, _0x4c67f8.texture])
      );
      break;
    case "prop":
      _0x5958d7.currentProps[_0x4c67f8.name] = [
        _0x4c67f8.component,
        _0x4c67f8.texture,
      ];
      setPedPropsIndices(
        _0x419a92,
        Ys({}, _0x4c67f8.name, [_0x4c67f8.component, _0x4c67f8.texture])
      );
      break;
    case "hairColors":
      _0x5958d7.currentHair = SomeRandomFunc1({}, _0x4c67f8);
      setPedHairColor(_0x419a92, _0x4c67f8.color, _0x4c67f8.highlightColor);
      break;
    case "headBlend":
      _0x5958d7.currentHeadBlend = SomeRandomFunc1({}, _0x4c67f8);
      isCustomModel = true;
      setPedHeadBlendData(_0x419a92, _0x4c67f8);
      break;
    case "randomizeHeadblend":
      var _0x4f0bf8 = {
        ShapeFirst: Math.floor(Math.random() * 45),
        ShapeSecond: Math.floor(Math.random() * 45),
        ShapeThird: Math.floor(Math.random() * 45),
        SkinFirst: Math.floor(Math.random() * 45),
        SkinSecond: Math.floor(Math.random() * 45),
        SkinThird: Math.floor(Math.random() * 45),
        ShapeMix: Math.random() * 1,
        SkinMix: Math.random() * 1,
        ThirdMix: Math.random() * 1,
      };
      _0x5958d7.currentHeadBlend = SomeRandomFunc1({}, _0x4f0bf8);
      isCustomModel = true;
      setPedHeadBlendData(_0x419a92, _0x4f0bf8);
      break;
    case "face":
      _0x5958d7.currentFace = SomeRandomFunc1({}, _0x4c67f8);
      isCustomModel = true;
      setPedFaceFeature(_0x419a92, _0x4c67f8);
      break;
    case "overlays":
      _0x5958d7.currentOverlays = SomeRandomFunc1({}, _0x4c67f8);
      isCustomModel = true;
      setPedHeadoverlay(_0x419a92, _0x4c67f8);
      break;
    case "eyeColor":
      _0x5958d7.currentEyeColor = _0x4c67f8;
      isCustomModel = true;
      if (typeof _0x4c67f8.data == "number") {
        SetPedEyeColor(_0x419a92, _0x4c67f8.data);
        break;
      }
      SetPedEyeColor(_0x419a92, _0x4c67f8);
      break;
    case "ped":
      var _0x1b6a7d = await getMaleFemale();
      var _0x3aa80c =
        _0x4c67f8.type === "custom"
          ? _0x4c67f8.model
          : _0x1b6a7d[_0x4c67f8.type][_0x4c67f8.value];
      isCustomModel = true;

      let isWhitelisted = false;

      if(_0x3aa80c == 'mp_m_freemode_01' || _0x3aa80c == 'mp_f_freemode_01' || _0x3aa80c == '1885233650' || _0x3aa80c == '1885233650' || _0x3aa80c == 1885233650 || _0x3aa80c == 1885233650) {
        isWhitelisted = true
      } else {
        for (let identifier in PlayerIdentifiers) {
          DebugLog('Verify whitelist id:')
          DebugLog(identifier)
          DebugLog(PlayerIdentifiers[identifier])

          if (Config.WhitelistedPedUsers.includes(PlayerIdentifiers[identifier])) {
            isWhitelisted = true;
            DebugLog('Found it!')
            break;
          }
        }
      }
      

      if (isWhitelisted) {
          
        var _0x419a92 = await setModel(_0x3aa80c, true, true);
        
        PedPlayerHas = GetEntityArchetypeName(_0x419a92);

        
        DoSomeFunctionStuff(_0x419a92);
        var _0x584f24 = GetEntityModel(_0x419a92);
        var _0xaa9e7e = await getClothingMenuData(
          _0x419a92,
          _0x584f24,
          localVarXD
        );
        _0x5958d7.overwriteData = _0xaa9e7e;
        
      } else {
        DebugLog("Don't have access to peds!")

        Config.Notification("You don't have access to change your ped!", 2);
      }

      break;
    case "tattoo":
      applydTattoosMybe(_0x419a92, _0x4c67f8);
      _0x5958d7.currentTattoos = SomeRandomFunc1({}, _0x4c67f8);
      isCustomModel = true;
      break;
    case "fade":
      var _0x279d4f = _0x4c67f8;
      if (Array.isArray(_0x279d4f)) {
        _0x279d4f = {
          overlay: false,
          collection: false,
        };
      }
      adddecorationFromhashes(_0x419a92, _0x279d4f);
      _0x5958d7.currentFade = _0x279d4f;
      isCustomModel = true;
      break;
    case "headModel":
      var _0x2aa091 = _0x4c67f8;
      hasCustomHeadModel = _0x2aa091;
      isCustomModel = true;
      var _0x546e9a = getEntityClothingDrawables(_0x419a92);
      var _0x476915 = getProps(_0x419a92);
      var _0x419a92 = await setModel(_0x419a92, false, true, true);
      DoSomeFunctionStuff(_0x419a92);
      setPedComponentVariation(_0x419a92, _0x546e9a);
      setPedPropsIndices(_0x419a92, _0x476915);
      break;
  }
  return {
    data: _0x5958d7,
    cost: GetPricingMaybe(_0x419a92),
  };
}
RegisterNuiCallbackType("karma-clothing:ui:close");
on("__cfx_nui:karma-clothing:ui:close", (_0x544ca8, _0x2814bd) => {
  CloseClothingMenu(_0x544ca8);
  _0x2814bd("ok");
});
async function CloseClothingMenu(_0x4457d2) {
  try {
    var _0x49ffac = PlayerPedId();
    var _0x2ef786;
    if (_0x4457d2.action === "discard") {
      updatePlayerAppearance(_0x49ffac);
      if (isInSpawnSelect) {
        SetClothingMenuEnabled(false);
        Config.FinishedClothingEvent();
      }
    } else if (_0x4457d2.action === "cash" || _0x4457d2.action === "bank") {

      _0x52e1a3 = PlayerPedId();
      _0x4fb771 = GetEntityModel(_0x52e1a3);

      fetchPlayerAppearanceData(_0x52e1a3, _0x4fb771);

      var _0x122000 = _0x4457d2.cost;
      var _0x527796 = _0x122000
        ? RPC.execute(
            "karma-clothing:purchaseClothing",
            _0x4457d2.action,
            _0x122000
          )
        : true;
      if (_0x527796) {
        var _0x554b2e = Object.entries(keyValuePairs);
        for (var _0x9b761e = 0; _0x9b761e < _0x554b2e.length; _0x9b761e++) {
          var _0x5ae456 = _0x554b2e[_0x9b761e];
          var _0x12c22a = _0x5ae456[0];
          var _0x3fecbf = _0x5ae456[1];
          if (
            _0x3fecbf.drawables &&
            Object.keys(_0x3fecbf.drawables).length > 0
          ) {
            setPedComponentVariation(_0x49ffac, _0x3fecbf.drawables);
          }
          if (_0x3fecbf.props && Object.keys(_0x3fecbf.props).length > 0) {
            setPedPropsIndices(_0x49ffac, _0x3fecbf.props);
          }
          keyValuePairs[_0x3fecbf.id] = null;
        }
        if (_0x4457d2.type === "clothing" || _0x4457d2.type === "spawn") {
          if (hasCustomHeadModel) {
            setHasCustomModelVariable(hasCustomHeadModel);
          }
          _0x2ef786 = await saveCurrentClothing(_0x49ffac);
        }
        if (_0x4457d2.type === "barber" || _0x4457d2.type === "spawn") {
          var _0x57435e = await SaveFadeFunction(_0x49ffac);
          _0x2ef786 =
            (
              await Promise.all([
                saveCurrentClothing(_0x49ffac),
                funcSavePedData(_0x49ffac),
              ])
            ).every(function (_0x24af61) {
              return _0x24af61;
            }) && _0x57435e;
        }
        if (_0x4457d2.type === "tattoo") {
          _0x2ef786 = await funcSaveTattoos(_0x49ffac);
        }
        if (!_0x2ef786) {
          updatePlayerAppearance(_0x49ffac);
        }
        if (_0x4457d2.type === "spawn") {
          SetClothingMenuEnabled(false);
          Config.FinishedClothingEvent();
        }
      } else {
        Config.Notification("Not enough money!", 2);
        updatePlayerAppearance(_0x49ffac);
      }
    }
    isFirstTime = false;
    HandleClosingMenuCleanup(PlayerPedId(), true);
    emit("karma-clothing:ui:closed", _0x4457d2);
    return true;
  } catch (_0x2059ff) {
    console.log("Error Closing Clothing");
    return false;
  }
}
on("karma-clothing:setToggles", function (_0x52d089) {
  var _0x225a9c = PlayerPedId();
  for (var _0x43c3be = 0; _0x43c3be < _0x52d089.length; _0x43c3be++) {
    var _0x438496 = _0x52d089[_0x43c3be];
    if (!_0x438496.active && keyValuePairs[_0x438496.id]) {
      var _0x9d7217 = Object.keys(keyValuePairs[_0x438496.id]?.drawables || {});
      if (_0x9d7217.length > 0) {
        setPedComponentVariation(
          _0x225a9c,
          keyValuePairs[_0x438496.id].drawables
        );
      }
      var _0x4d130d = Object.keys(keyValuePairs[_0x438496.id]?.props || {});
      if (_0x4d130d.length > 0) {
        setPedPropsIndices(_0x225a9c, keyValuePairs[_0x438496.id].props);
      }
      delete keyValuePairs[_0x438496.id];
    } else if (_0x438496.active && !keyValuePairs[_0x438496.id]) {
      var _0x4f9079 = getTattooGender(GetEntityModel(_0x225a9c));
      var _0x226d55 = getEntityClothingDrawables(_0x225a9c);
      var _0x374dab = getProps(_0x225a9c);
      var _0x5339cf = _0x438496[_0x4f9079].drawables;
      var _0x19dec2 = _0x438496.props;
      keyValuePairs[_0x438496.id] = {};
      keyValuePairs[_0x438496.id].drawables = Object.entries(_0x226d55).reduce(
        function (_0x3e6f51, [_0x392ee0, _0x3f056a]) {
          if (
            _0x5339cf[_0x392ee0] === undefined ||
            _0x5339cf[_0x392ee0] === null
          ) {
            return _0x3e6f51;
          }
          return Object.assign({}, _0x3e6f51, {
            [_0x392ee0]: _0x3f056a,
          });
        },
        {}
      );
      keyValuePairs[_0x438496.id].props = Object.entries(_0x374dab).reduce(
        function (_0x39aa5f, [_0x42fe55, _0x11f89b]) {
          if (
            _0x19dec2[_0x42fe55] === undefined ||
            _0x19dec2[_0x42fe55] === null
          ) {
            return _0x39aa5f;
          }
          return Object.assign({}, _0x39aa5f, {
            [_0x42fe55]: _0x11f89b,
          });
        },
        {}
      );
      setPedComponentVariation(_0x225a9c, _0x5339cf);
      setPedPropsIndices(_0x225a9c, _0x19dec2);
    }
  }
});
RegisterNuiCallbackType("karma-clothing:setToggles");
on("__cfx_nui:karma-clothing:setToggles", (_0x524f8d, _0x1943e2) => {
  emit("karma-clothing:setToggles", _0x524f8d.toggles);
  _0x1943e2("ok");
});
RegisterNuiCallbackType("karma-clothing:reset");
on("__cfx_nui:karma-clothing:reset", (_0xc7f031, _0x132723) => {
  updatePlayerAppearance(PlayerPedId());
  isCustomModel = false;
  _0x132723({
    cost: 0,
  });
});
RegisterNuiCallbackType("karma-clothing:dev:saveClothing");
on("__cfx_nui:karma-clothing:dev:saveClothing", (_0x668a03, _0x5caf76) => {
  var _0xc19ae2 = Xs(function (_0x3a74ad) {
    var _0x50eafd;
    var _0x42e44e;
    var _0x102ced;
    var _0xd9ba8a;
    var _0x5237e6;
    var _0x5c75bc;
    return et(this, function (_0x194f2c) {
      _0x50eafd = PlayerPedId();
      _0x42e44e = GetEntityModel(_0x50eafd);
      _0x102ced = getEntityClothingDrawables(_0x50eafd);
      _0xd9ba8a = getProps(_0x50eafd);
      _0x5237e6 = getPlayerHairStyleDetails(_0x50eafd);
      var _0x2f5d6b = {
        type: "clothing",
        model: _0x42e44e,
        drawables: _0x102ced,
        props: _0xd9ba8a,
        hair: _0x5237e6,
        _hideKeys: ["model", "drawables", "props", "hair"],
      };
      emit("player:receiveItem", "customclothing", 1, false, _0x2f5d6b);
      return [
        2,
        {
          cost: 0,
        },
      ];
    });
  });
  return function (_0x229f26) {
    return _0xc19ae2.apply(this, arguments);
  };
  _0x5caf76("ok");
});
RegisterNuiCallbackType("karma-clothing:dev:saveBarber");
on("__cfx_nui:karma-clothing:dev:saveBarber", (_0x1617a6, _0x4de321) => {
  var _0x1af45c = Xs(function (_0x3213c7) {
    var _0x36c9e5;
    return et(this, function (_0x3d396e) {
      _0x36c9e5 = PlayerPedId();
      var _0x3cba44 = getHeadBlend(_0x36c9e5);
      var _0x28aa02 = getFeatures(_0x36c9e5);
      var _0x13ef62 = getOverlays(_0x36c9e5);
      var _0x421314 = GetPedEyeColor(_0x36c9e5);
      var _0x488cac = {
        type: "barber",
        headblend: _0x3cba44,
        features: _0x28aa02,
        overlays: _0x13ef62,
        eyeColor: _0x421314,
        _hideKeys: ["headblend", "features", "overlays", "eyeColor"],
      };
      var _0x205e60 = _0x488cac;
      emit("player:receiveItem", "customclothing", 1, false, _0x205e60);
      return [
        2,
        {
          cost: 0,
        },
      ];
    });
  });
  return function (_0x101b6a) {
    return _0x1af45c.apply(this, arguments);
  };
  _0x4de321("ok");
});
async function updatePlayerAppearance(_0x53366b) {
  if (!mainDetailsDataForModel) {
    return console.log("No Details For This Player !");
  }
  if (!isCustomModel) {
    return await setModel(
      mainDetailsDataForModel.model,
      true,
      false,
      hasCustomHeadModel
    );
  }
  var _0x53366b = await setModel(
    mainDetailsDataForModel.model,
    false,
    false,
    hasCustomHeadModel
  );
  await delay(500);
  if (!checkIfTattooIsUnique(mainDetailsDataForModel.model)) {
    setPedFaceFeature(_0x53366b, mainDetailsDataForModel.face);
    if (!hasCustomHeadModel) {
      setPedHeadBlendData(_0x53366b, mainDetailsDataForModel.headblend);
    }
    setPedHeadoverlay(_0x53366b, mainDetailsDataForModel.overlays);
    SetPedEyeColor(_0x53366b, mainDetailsDataForModel.eyeColor);
    applyDecorations(_0x53366b, mainDetailsDataForModel.decorations);
  }
  setPedComponentVariation(_0x53366b, mainDetailsDataForModel.drawables);
  setPedPropsIndices(_0x53366b, mainDetailsDataForModel.props);
  setPedHairColor(
    _0x53366b,
    mainDetailsDataForModel.hair.color,
    mainDetailsDataForModel.hair.highlightColor
  );
}
async function fetchPlayerAppearanceData(_0x1930bc, _0x5b4ebd) {
  var _0x24f231 = await getClothingMenuData(_0x1930bc, _0x5b4ebd);
  var _0x40b2eb = await fetchGetTattoos.get(_0x5b4ebd);
  var _0x5c0d75 = await fetchgetFade.get(_0x5b4ebd);
  if (_0x5c0d75) {
    mainDetailsDataForModel = {
      model: _0x5b4ebd,
      drawables: _0x24f231.currentDrawables,
      customHeadModel: _0x24f231.customHeadModel ?? false,
      props: _0x24f231.currentProps,
      hair: _0x24f231.currentHair,
      headblend: getHeadBlend(_0x1930bc),
      face: getFeatures(_0x1930bc),
      overlays: getOverlays(_0x1930bc),
      eyeColor: GetPedEyeColor(_0x1930bc),
      decorations: {
        tattoos: _0x40b2eb ?? {},
        fade: _0x5c0d75,
      },
    };
  }
}
async function openClothing(_0x51800b, _0x41e561, _0x2b97ac) {
  var _0x2b97ac = _0x2b97ac !== undefined ? _0x2b97ac : false;
  var _0x7ce0ad = PlayerPedId();
  var _0x226f4b = GetEntityModel(_0x7ce0ad);
  try {
    var _0x1ca261 = await getClothingMenuData(_0x7ce0ad, _0x226f4b, _0x2b97ac);
    await fetchPlayerAppearanceData(_0x7ce0ad, _0x226f4b);
    OpenShopType(
      _0x7ce0ad,
      "clothing",
      bt(SomeRandomFunc1({}, _0x1ca261), {
        isFree: _0x51800b,
      })
    );
  } catch (_0x3e341d) {
    console.log("Error opening clothing shop");
  }
}
async function openBarber(_0x3b05e6 = false, _0x3d7e19) {
  try {
    const _0x58e1b4 = PlayerPedId();
    const _0x1b3ce4 = GetEntityModel(_0x58e1b4);
    const _0x2bb948 = await getClothingMenuData(
      _0x58e1b4,
      _0x1b3ce4,
      _0x3b05e6
    );
    await fetchPlayerAppearanceData(_0x58e1b4, _0x1b3ce4);
    const _0x4abd34 = {
      isFree: _0x3b05e6,
    };
    OpenShopType(
      _0x58e1b4,
      "barber",
      bt(SomeRandomFunc1({}, _0x2bb948), _0x4abd34),
      _0x3d7e19
    );
  } catch (_0x54b583) {
    console.error("Error opening barber shop");
  }
}
var allClothesFunc = (function () {
  var _0x3fcd9d = Xs(function (_0x30f06a) {
    var _0x53b4a1;
    var _0x52e1a3;
    var _0x4fb771;
    var _0x5cb759;
    var _0x2c3bc0 = arguments;
    return et(this, function (_0x5a1eaa) {
      switch (_0x5a1eaa.label) {
        case 0:
          _0x53b4a1 =
            _0x2c3bc0.length > 1 && _0x2c3bc0[1] !== undefined
              ? _0x2c3bc0[1]
              : false;
          _0x52e1a3 = PlayerPedId();
          _0x4fb771 = GetEntityModel(_0x52e1a3);
          return [4, getClothingMenuData(_0x52e1a3, _0x4fb771, _0x53b4a1)];
        case 1:
          _0x5cb759 = _0x5a1eaa.sent();
          return [4, fetchPlayerAppearanceData(_0x52e1a3, _0x4fb771)];
        case 2:
          _0x5a1eaa.sent();
          var _0x2163cd = {
            isFree: _0x30f06a,
          };
          OpenShopType(
            _0x52e1a3,
            "spawn",
            bt(SomeRandomFunc1({}, _0x5cb759), _0x2163cd)
          );
          return [2];
      }
    });
  });
  return function _0x4ceb3e(_0x4b2513) {
    return _0x3fcd9d.apply(this, arguments);
  };
})();
var KARMAZoneFunction = (function () {
  var _0x25d88e = Xs(function (_0x4c8131) {
    var _0x1ed3d2;
    var _0x45bba1;
    var _0x722fdd;
    var _0x41868e;
    var _0x24a135;
    var _0x2f9347;
    var _0x50d484;
    var _0x36f36a;
    var _0x38fec3;
    var _0x1f69a5;
    var _0x21d0e3;
    var _0x379c68 = arguments;
    return et(this, function (_0x35db0d) {
      switch (_0x35db0d.label) {
        case 0:
          _0x1ed3d2 =
            _0x379c68.length > 1 && _0x379c68[1] !== undefined
              ? _0x379c68[1]
              : false;
          _0x45bba1 = PlayerPedId();
          _0x722fdd = GetEntityModel(_0x45bba1);
          _0x41868e = checkIfTattooIsUnique(_0x722fdd);
          if (_0x41868e) {
            Config.Notification(
              "The tattoo shop is only available for customized characters.",
              2
            );
            return [2];
          }
          if (_0x1ed3d2 != localVarXD) {
            Mr.reset();
            localVarXD = _0x1ed3d2;
          }
          _0x24a135 = getTattooGender(_0x722fdd);
          _0x2f9347 = Object.values(Yn).filter(function (_0x46fc84) {
            return typeof _0x46fc84 === "string";
          });
          _0x50d484 = getTattooShopItemsByGender(_0x24a135);
          return [4, fetchGetTattoos.get(_0x722fdd)];
        case 1:
          _0x36f36a = _0x35db0d.sent();
          return [4, Mr.get(_0x1ed3d2)];
        case 2:
          _0x38fec3 = _0x35db0d.sent();
          return [4, fetchPlayerAppearanceData(_0x45bba1, _0x722fdd)];
        case 3:
          _0x35db0d.sent();
          _0x1f69a5 = GetEntityArchetypeName(_0x45bba1);
          var _0x44105e = {
            model: _0x722fdd,
            modelName: _0x1f69a5,
            gender: _0x24a135,
            zones: _0x2f9347,
            tattoos: _0x50d484,
            currentTattoos: _0x36f36a,
            whitelistedTattoos: _0x38fec3,
          };
          var _0x17e991 = {
            isFree: _0x4c8131,
          };
          OpenShopType(
            _0x45bba1,
            "tattoo",
            bt(SomeRandomFunc1({}, _0x44105e), _0x17e991)
          );
          return [2];
      }
    });
  });
  return function _0x246285(_0x36ed2e) {
    return _0x25d88e.apply(this, arguments);
  };
})();
async function getBarberMenuData(_0x3b2e4a, _0xbdeea1, _0x5a3941) {
  try {
    var _0xb026c7 = _0x5a3941 !== undefined ? _0x5a3941 : false;
    var _0x33beea = getTattooGender(_0xbdeea1);
    var _0x53066d = BarberData();
    var _0x5ba4ff = getPlayerHairStyleDetails(_0x3b2e4a);
    var _0x23cd8e = getHairColorMybe();
    var _0x3ef4c3 = await getClothingMenuData(_0x3b2e4a, _0xbdeea1);
    var _0x16b9b5 = getHeadBlend(_0x3b2e4a);
    var _0x16cdac = getFeatures(_0x3b2e4a);
    var _0x3157c4 = getOverlays(_0x3b2e4a);
    var _0x5e6f09 = ar();
    var _0xe2b258 = FetchEyeColors();
    var _0x563f8a = GetPedEyeColor(_0x3b2e4a);
    var _0x1ae9f5 = fq(_0x33beea);
    var _0x4e0c3c = await fetchgetFade.get(_0xbdeea1);
    var _0x422664 = {
      Hair: _0x3ef4c3.drawables.Hair,
    };
    var _0x48cf6c = {
      Hair: _0x3ef4c3.currentDrawables.Hair,
    };
    var _0x45e05f = {
      model: _0xbdeea1,
      gender: _0x33beea,
      barberData: _0x53066d,
      currentHair: _0x5ba4ff,
      hairColors: _0x23cd8e,
      currentHeadBlend: _0x16b9b5,
      currentFace: _0x16cdac,
      currentEyeColor: _0x563f8a,
      availableEyeColors: _0xe2b258,
      currentOverlays: _0x3157c4,
      makeupColors: _0x5e6f09,
      drawables: _0x422664,
      currentDrawables: _0x48cf6c,
      nameData: KARMADEVELOPMENTS_DATA.nameData,
      availableFades: _0x1ae9f5,
      currentFade: _0x4e0c3c,
    };
    return _0x45e05f;
  } catch (_0x595936) {
    console.log("error getting barber data");
    return null;
  }
}
async function getWhitelisted() {
  return Config.WhiteListClothingItems;
}
async function getClothingMenuData(_0x9e0a5a, _0x39bfa5, _0x2b02ce) {
  var _0x1c2066 = Drawables(_0x9e0a5a);
  var _0x4f7a20 = Props(_0x9e0a5a);
  var _0x2df59a = getEntityClothingDrawables(_0x9e0a5a);
  var _0xa1a8bf = getProps(_0x9e0a5a);
  var _0x536718 = getPlayerHairStyleDetails(_0x9e0a5a);
  var _0x1a7971 = getHairColorMybe();
  var _0x58b1a0 = checkIfTattooIsUnique(_0x39bfa5);
  var _0x113d91 = _0x113d91;
  var _0x2eb781 = await getMaleFemale();
  if (_0x2b02ce != localVarXD) {
    Kr.reset();
    localVarXD = _0x2b02ce;
  }
  var _0x3f756 = await getWhitelisted();
  var _0x46efd7 = getTattooGender(_0x39bfa5);
  var _0x56d351 = await updatePlayerAppearanceDetails.get(_0x46efd7);
  var _0x49865b = GetEntityArchetypeName(_0x9e0a5a);
  var _0x532dc7 = {
    model: _0x39bfa5,
    modelName: _0x49865b,
    gender: _0x46efd7,
    drawables: _0x1c2066,
    props: _0x4f7a20,
    currentDrawables: _0x2df59a,
    currentProps: _0xa1a8bf,
    currentHair: _0x536718,
    hairColors: _0x1a7971,
    isCustom: _0x58b1a0,
    pedEntries: _0x2eb781,
    whitelistedClothing: _0x3f756,
    nameData: _0x56d351,
    customHeadModel: _0x113d91,
  };
  return (KARMADEVELOPMENTS_DATA = _0x532dc7);
}
function GetPricingMaybe(_0x48001f) {
  var _0x1fb5f7 = GetEntityModel(_0x48001f);
  var _0x3ca92d = getCurrentResourceConfig("pricing");
  try {
    if (mainDetailsDataForModel.model !== _0x1fb5f7) {
      return _0x3ca92d.model;
    }
    var _0x3860cf = 0;
    if (StoreType === "tattoo") {
      var _0x22a0ad = mainDetailsDataForModel.decorations.tattoos;
      var _0xa98362 = GhostsTattoosMap.entries();
      var _0x52f6c3 = true;
      var _0x15ef2e = false;
      var _0x4114b9 = undefined;
      try {
        function _0x34aba9() {
          var _0x484e36 = ct(_0x3ef6b4.value, 2);
          var _0x3a0984 = _0x484e36[0];
          var _0x594022 = _0x484e36[1];
          var _0x21ff0e = true;
          var _0x14d355 = false;
          var _0x2cee2d = undefined;
          try {
            function _0x1a40d5() {
              var _0x1ae6b9 = _0xddca16.value;
              if (
                _0x1ae6b9.collection &&
                (!_0x22a0ad[_0x3a0984] ||
                  !_0x22a0ad[_0x3a0984].find(function (_0x4b51ff) {
                    return (
                      _0x4b51ff.collection === _0x1ae6b9.collection &&
                      _0x4b51ff.overlay === _0x1ae6b9.overlay
                    );
                  }))
              ) {
                _0x3860cf += _0x3ca92d.tattoos;
              }
            }
            for (
              var _0x2db55f = _0x594022[Symbol.iterator](), _0xddca16;
              !(_0x21ff0e = (_0xddca16 = _0x2db55f.next()).done);
              _0x21ff0e = true
            ) {
              _0x1a40d5();
            }
          } catch (_0x5c79fa) {
            _0x14d355 = true;
            _0x2cee2d = _0x5c79fa;
          } finally {
            try {
              if (!_0x21ff0e && _0x2db55f.return != null) {
                _0x2db55f.return();
              }
            } finally {
              if (_0x14d355) {
                throw _0x2cee2d;
              }
            }
          }
        }
        for (
          var _0x109c87 = _0xa98362[Symbol.iterator](), _0x3ef6b4;
          !(_0x52f6c3 = (_0x3ef6b4 = _0x109c87.next()).done);
          _0x52f6c3 = true
        ) {
          _0x34aba9();
        }
      } catch (_0x35db65) {
        _0x15ef2e = true;
        _0x4114b9 = _0x35db65;
      } finally {
        try {
          if (!_0x52f6c3 && _0x109c87.return != null) {
            _0x109c87.return();
          }
        } finally {
          if (_0x15ef2e) {
            throw _0x4114b9;
          }
        }
      }
      return _0x3860cf;
    }
    var _0x2870b7 = {};
    var _0x14effe = {};
    var _0x40cb40 = true;
    var _0x274866 = false;
    var _0x2f8185 = undefined;
    try {
      for (
        var _0x5e856e = Object.entries(keyValuePairs)[Symbol.iterator](),
          _0x4c1c28;
        !(_0x40cb40 = (_0x4c1c28 = _0x5e856e.next()).done);
        _0x40cb40 = true
      ) {
        var _0x3b230e = ct(_0x4c1c28.value, 2);
        var _0x22adcc = _0x3b230e[0];
        var _0x2be103 = _0x3b230e[1];
        if (
          _0x2be103.drawables &&
          Object.keys(_0x2be103.drawables).length > 0
        ) {
          _0x2870b7 = _0x2be103.drawables;
        }
        if (_0x2be103.props && Object.keys(_0x2be103.props).length > 0) {
          _0x14effe = _0x2be103.props;
        }
      }
    } catch (_0x344a31) {
      _0x274866 = true;
      _0x2f8185 = _0x344a31;
    } finally {
      try {
        if (!_0x40cb40 && _0x5e856e.return != null) {
          _0x5e856e.return();
        }
      } finally {
        if (_0x274866) {
          throw _0x2f8185;
        }
      }
    }
    var _0x153b18 = mainDetailsDataForModel.drawables;
    var _0x202d55 = getEntityClothingDrawables(_0x48001f);
    if (StoreType === "barber") {
      _0x202d55 = {
        Hair: _0x202d55.Hair,
      };
    }
    var _0x5327f3 = true;
    var _0x46634d = false;
    var _0x54f88c = undefined;
    try {
      for (
        var _0x3c0300 = Object.entries(_0x202d55)[Symbol.iterator](), _0x1e059e;
        !(_0x5327f3 = (_0x1e059e = _0x3c0300.next()).done);
        _0x5327f3 = true
      ) {
        var _0x3bc16c = ct(_0x1e059e.value, 2);
        var _0x437d85 = _0x3bc16c[0];
        var _0x2fdef6 = _0x3bc16c[1];
        if (
          (_0x153b18[_0x437d85][0] !== _0x2fdef6[0] ||
            _0x153b18[_0x437d85][1] !== _0x2fdef6[1]) &&
          !_0x2870b7[_0x437d85]
        ) {
          _0x3860cf += _0x3ca92d.drawables[_0x437d85];
        }
      }
    } catch (_0x1ea4b7) {
      _0x46634d = true;
      _0x54f88c = _0x1ea4b7;
    } finally {
      try {
        if (!_0x5327f3 && _0x3c0300.return != null) {
          _0x3c0300.return();
        }
      } finally {
        if (_0x46634d) {
          throw _0x54f88c;
        }
      }
    }
    if (StoreType === "clothing") {
      var _0x503590 = mainDetailsDataForModel.props;
      var _0x5b6076 = getProps(_0x48001f);
      var _0x2ace46 = true;
      var _0x463ab7 = false;
      var _0x226e6c = undefined;
      try {
        for (
          var _0x34bd5b = Object.entries(_0x5b6076)[Symbol.iterator](),
            _0xc16896;
          !(_0x2ace46 = (_0xc16896 = _0x34bd5b.next()).done);
          _0x2ace46 = true
        ) {
          var _0x42fb9b = ct(_0xc16896.value, 2);
          var _0x3f110c = _0x42fb9b[0];
          var _0x30d949 = _0x42fb9b[1];
          if (
            (_0x503590[_0x3f110c][0] !== _0x30d949[0] ||
              _0x503590[_0x3f110c][1] !== _0x30d949[1]) &&
            !_0x14effe[_0x3f110c]
          ) {
            _0x3860cf += _0x3ca92d.props[_0x3f110c];
          }
        }
      } catch (_0xbed170) {
        _0x463ab7 = true;
        _0x226e6c = _0xbed170;
      } finally {
        try {
          if (!_0x2ace46 && _0x34bd5b.return != null) {
            _0x34bd5b.return();
          }
        } finally {
          if (_0x463ab7) {
            throw _0x226e6c;
          }
        }
      }
    }
    var _0x5cfbd7 = mainDetailsDataForModel.hair;
    var _0xd2dfb9 = getPlayerHairStyleDetails(_0x48001f);
    if (
      _0x5cfbd7.color !== _0xd2dfb9.color ||
      _0x5cfbd7.highlightColor !== _0xd2dfb9.highlightColor
    ) {
      _0x3860cf += _0x3ca92d.hairColor;
    }
    if (!checkIfTattooIsUnique(_0x1fb5f7) && StoreType == "barber") {
      var _0x6d079a = mainDetailsDataForModel.headblend;
      var _0x543f71 = getHeadBlend(_0x48001f);
      var _0x5e3147 = true;
      var _0x68ab70 = false;
      var _0x365f08 = undefined;
      try {
        for (
          var _0x2d3eda = Object.entries(_0x543f71)[Symbol.iterator](),
            _0x370bee;
          !(_0x5e3147 = (_0x370bee = _0x2d3eda.next()).done);
          _0x5e3147 = true
        ) {
          var _0x4fda00 = ct(_0x370bee.value, 2);
          var _0x4ac9f2 = _0x4fda00[0];
          var _0x46ff21 = _0x4fda00[1];
          if (_0x6d079a[_0x4ac9f2] !== _0x46ff21) {
            _0x3860cf += _0x3ca92d.headblend[_0x4ac9f2];
          }
        }
      } catch (_0x205293) {
        _0x68ab70 = true;
        _0x365f08 = _0x205293;
      } finally {
        try {
          if (!_0x5e3147 && _0x2d3eda.return != null) {
            _0x2d3eda.return();
          }
        } finally {
          if (_0x68ab70) {
            throw _0x365f08;
          }
        }
      }
      var _0x1c5302 = mainDetailsDataForModel.face;
      var _0x9c8792 = getFeatures(_0x48001f);
      var _0x2afedf = true;
      var _0x4c7324 = false;
      var _0x2bc93f = undefined;
      try {
        for (
          var _0x57c305 = Object.entries(_0x9c8792)[Symbol.iterator](),
            _0x3301f4;
          !(_0x2afedf = (_0x3301f4 = _0x57c305.next()).done);
          _0x2afedf = true
        ) {
          var _0x3b7d49 = ct(_0x3301f4.value, 2);
          var _0x264fc8 = _0x3b7d49[0];
          var _0x2949d4 = _0x3b7d49[1];
          if (_0x1c5302[_0x264fc8] !== _0x2949d4) {
            _0x3860cf += _0x3ca92d.features[_0x264fc8];
          }
        }
      } catch (_0x5f42e5) {
        _0x4c7324 = true;
        _0x2bc93f = _0x5f42e5;
      } finally {
        try {
          if (!_0x2afedf && _0x57c305.return != null) {
            _0x57c305.return();
          }
        } finally {
          if (_0x4c7324) {
            throw _0x2bc93f;
          }
        }
      }
      var _0x305af5 = mainDetailsDataForModel.overlays;
      var _0x4e594c = getOverlays(_0x48001f);
      var _0x4ea625 = true;
      var _0x334733 = false;
      var _0x5a961c = undefined;
      try {
        for (
          var _0x59623f = Object.entries(_0x4e594c)[Symbol.iterator](),
            _0xa70357;
          !(_0x4ea625 = (_0xa70357 = _0x59623f.next()).done);
          _0x4ea625 = true
        ) {
          var _0x4bcae = ct(_0xa70357.value, 2);
          var _0x5380ae = _0x4bcae[0];
          var _0x27a1d7 = _0x4bcae[1];
          if (_0x305af5[_0x5380ae].value !== _0x27a1d7.value) {
            _0x3860cf += _0x3ca92d.overlays[_0x5380ae];
          }
        }
      } catch (_0xcba5e6) {
        _0x334733 = true;
        _0x5a961c = _0xcba5e6;
      } finally {
        try {
          if (!_0x4ea625 && _0x59623f.return != null) {
            _0x59623f.return();
          }
        } finally {
          if (_0x334733) {
            throw _0x5a961c;
          }
        }
      }
      var _0x2be222 = mainDetailsDataForModel.eyeColor;
      var _0x3875ab = GetPedEyeColor(_0x48001f);
      if (_0x2be222 !== _0x3875ab) {
        _0x3860cf += _0x3ca92d.eyeColor;
      }
      var _0x2c1e9b = mainDetailsDataForModel.decorations.fade;
      var _0x8ad573 = fadeCollectionData;
      if (
        _0x8ad573 &&
        _0x2c1e9b.collection !== _0x8ad573.collection &&
        _0x2c1e9b.overlay !== _0x8ad573.overlay
      ) {
        _0x3860cf += _0x3ca92d.fade;
      }
    }
    return _0x3860cf;
  } catch (_0x56fe0a) {
    console.log(_0x56fe0a);
  }
  return 0;
}
var FetchRanksRPC = KarmaDevelopmentUtil.cache(
  Xs(function () {
    var _0x15067d = RPC.execute("np-admin:isRanks", [
      "event",
      "dev",
      "junior",
      "special",
    ]);
    true;
    return _0x15067d;
  }),
  {
    timeToLive: 600000,
  }
);
exports("GetClothingMenuData", function (_0x2c069a, _0x10c3d2) {
  return getClothingMenuData(_0x2c069a, _0x10c3d2);
});
exports("GetBarberMenuData", function (_0x59a2f9, _0x7f28c2) {
  return getBarberMenuData(_0x59a2f9, _0x7f28c2);
});
var Gt = {
  x: -1153.52,
  y: -1426.09,
  z: 3.85,
};
var It = {
  id: "bbmc_tattoo",
  vectors: Gt,
  length: 2.8,
  width: 2.8,
  options: {
    heading: 212,
    minZ: 3.85,
    maxZ: 6.85,
  },
};
var AleckZoneData = [
  {
    id: "vinewood_boulevard_barbershop",
    vectors: {
      x: 323.34,
      y: 180.65,
      z: 103.59,
    },
    length: 5.2,
    width: 6.4,
    options: {
      heading: 337,
      minZ: 102.24,
      maxZ: 106.64,
    },
  },
  It,
  {
    id: "prison_tattoo_parlor",
    vectors: {
      x: 1771.34,
      y: 2583.39,
      z: 45.73,
    },
    length: 2,
    width: 2.2,
    options: {
      heading: 0,
      minZ: 44.73,
      maxZ: 46.93,
    },
    data: {
      isFree: true,
    },
  },
];
var Rt = {
  x: -277.51,
  y: 6227.35,
  z: 31.7,
};
var Tt = {
  id: "paleto_barbershop",
  vectors: Rt,
  length: 5.6,
  width: 5,
  options: {
    heading: 45,
    minZ: 30.7,
    maxZ: 33.7,
  },
};
var Ut = {
  x: 1213.32,
  y: -473.15,
  z: 66.21,
};
var Wt = {
  id: "mirror_park_barbershop",
  vectors: Ut,
  length: 6.8,
  width: 5.4,
  options: {
    heading: 75,
    minZ: 65.01,
    maxZ: 68.01,
  },
};
var Xt = {
  x: -33.67,
  y: -153.46,
  z: 57.08,
};
var Zt = {
  id: "hawick_ave_barbershop",
  vectors: Xt,
  length: 5.2,
  width: 7.2,
  options: {
    heading: 70,
    minZ: 55.88,
    maxZ: 58.88,
  },
};
var $t = {
  x: 137.73,
  y: -1707.2,
  z: 29.29,
};
var au = {
  id: "carson_avenue_barbershop",
  vectors: $t,
  length: 5.6,
  width: 7,
  options: {
    heading: 50,
    minZ: 28.09,
    maxZ: 31.29,
  },
};
var bu = {
  x: -813.86,
  y: -184.15,
  z: 37.57,
};
var du = {
  id: "bob_mulet_barbershop",
  vectors: bu,
  length: 7.4,
  width: 8.6,
  options: {
    heading: 30,
    minZ: 36.57,
    maxZ: 39.37,
  },
};
var eu = {
  x: -1281.76,
  y: -1117.41,
  z: 6.99,
};
var gu = {
  id: "vespucci_barbershop",
  vectors: eu,
  length: 6,
  width: 7,
  options: {
    heading: 0,
    minZ: 5.99,
    maxZ: 8.99,
  },
};
var lu = [
  {
    id: "sandy_shores_barbershop",
    vectors: {
      x: 1931.27,
      y: 3730.69,
      z: 32.84,
    },
    length: 4.8,
    width: 4.6,
    options: {
      heading: 30,
      minZ: 31.84,
      maxZ: 34.64,
    },
  },
  Tt,
  Wt,
  Zt,
  au,
  du,
  gu,
  {
    id: "prison_barbershop",
    vectors: {
      x: 1769.06,
      y: 2588.21,
      z: 45.73,
    },
    length: 2.2,
    width: 2.8,
    options: {
      heading: 0,
      minZ: 44.73,
      maxZ: 47.13,
    },
    data: {
      isFree: true,
    },
  },
];
var su = {
  x: -1177.32,
  y: -1780.57,
  z: 3.91,
};
var uu = {
  id: "vespucci_beach_clothing",
  vectors: su,
  length: 2.4,
  width: 2.6,
  options: {
    heading: 34,
    minZ: 2.09,
    maxZ: 5.69,
  },
};
var vu = {
  x: 198.53,
  y: -1647.11,
  z: 29.8,
};
var xu = {
  id: "davis_firedept_clothing",
  vectors: vu,
  length: 3.2,
  width: 2,
  options: {
    heading: 50,
    minZ: 28.8,
    maxZ: 31.4,
  },
};
var yu = {
  x: -710.38,
  y: -153.34,
  z: 37.42,
};
var Au = {
  id: "portala_drive_clothing",
  vectors: yu,
  length: 3.6,
  width: 2,
  options: {
    heading: 30,
    minZ: 36.37,
    maxZ: 38.77,
  },
};
var Bu = {
  x: -1191.46,
  y: -770.67,
  z: 17.32,
};
var Du = {
  id: "prosperity_street_promenade_clothing",
  vectors: Bu,
  length: 6.8,
  width: 6,
  options: {
    heading: 35,
    minZ: 16.32,
    maxZ: 18.52,
  },
};
var Eu = {
  x: 423.71,
  y: -807.34,
  z: 29.49,
};
var Gu = {
  id: "sinner_street_clothing",
  vectors: Eu,
  length: 4.6,
  width: 4.4,
  options: {
    heading: 0,
    minZ: 28.49,
    maxZ: 31.09,
  },
};
var Hu = {
  x: -162.12,
  y: -303.49,
  z: 39.73,
};
var Ju = {
  id: "las_lagunas_boulevard_clothing",
  vectors: Hu,
  length: 4.8,
  width: 3.4,
  options: {
    heading: 340,
    minZ: 38.73,
    maxZ: 41.13,
  },
};
var Ku = {
  x: -820.24,
  y: -1074.56,
  z: 11.33,
};
var Mu = {
  id: "south_rockford_drive_clothing",
  vectors: Ku,
  length: 4.6,
  width: 5.2,
  options: {
    heading: 30,
    minZ: 10.33,
    maxZ: 12.73,
  },
};
var Nu = {
  x: -1451.41,
  y: -236.7,
  z: 49.8,
};
var Pu = {
  id: "cougar_ave_clothing",
  vectors: Nu,
  length: 5.6,
  width: 3.4,
  options: {
    heading: 319,
    minZ: 48.09,
    maxZ: 51.69,
  },
};
var Zu = {
  x: -3173.26,
  y: 1045.35,
  z: 20.86,
};
var _u = {
  id: "chumash_clothing",
  vectors: Zu,
  length: 5.2,
  width: 7,
  options: {
    heading: 335,
    minZ: 19.66,
    maxZ: 22.26,
  },
};
var av = {
  x: -1099.3,
  y: 2709.9,
  z: 19.12,
};
var cv = {
  id: "route68_clothing",
  vectors: av,
  length: 4.6,
  width: 4.6,
  options: {
    heading: 43,
    minZ: 17.92,
    maxZ: 21.12,
  },
};
var dv = {
  x: 122.81,
  y: -222.09,
  z: 54.56,
};
var fv = {
  id: "hawick_awe_clothing",
  vectors: dv,
  length: 5.4,
  width: 8,
  options: {
    heading: 340,
    minZ: 53.36,
    maxZ: 56.36,
  },
};
var kv = {
  x: 107.71,
  y: -1305.32,
  z: 28.77,
};
var mv = {
  id: "vanilla_unicorn_clothing",
  vectors: kv,
  length: 3,
  width: 4.2,
  options: {
    heading: 35,
    minZ: 27.77,
    maxZ: 31.17,
  },
};
var nv = {
  x: 77.83099365234375,
  y: -1392.9818725585938,
  z: 30.026136779785155,
};
var pv = {
  id: "southside_clothing",
  vectors: nv,
  length: 7.8,
  width: 6.7,
  options: {
    heading: 180,
    minZ: 28.32,
    maxZ: 31.82,
  },
};
var qv = [
  {
    id: "casino_clothing",
    vectors: {
      x: 965.5,
      y: 26.63,
      z: 71.47,
    },
    length: 1.8,
    width: 2.4,
    options: {
      heading: 315,
      minZ: 71.4,
      maxZ: 73.4,
    },
  },
  {
    id: "grapeseed_clothing",
    vectors: {
      x: 1692.16,
      y: 4822.06,
      z: 42.06,
    },
    length: 5.2,
    width: 4.4,
    options: {
      heading: 8,
      minZ: 41.09,
      maxZ: 43.69,
    },
  },
  uu,
  xu,
  Au,
  Du,
  Gu,
  Ju,
  Mu,
  Pu,
  {
    id: "paleto_bay_clothing",
    vectors: {
      x: 2.7,
      y: 6512.82,
      z: 31.88,
    },
    length: 5,
    width: 4.2,
    options: {
      heading: 315,
      minZ: 30.09,
      maxZ: 32.69,
    },
  },
  {
    id: "harmony_dollarpill_clothing",
    vectors: {
      x: 617.2,
      y: 2762.5,
      z: 42.09,
    },
    length: 5.6,
    width: 8.4,
    options: {
      heading: 3,
      minZ: 41.09,
      maxZ: 43.69,
    },
  },
  {
    id: "harmony_bank_clothing",
    vectors: {
      x: 1197.9,
      y: 2708.73,
      z: 38.22,
    },
    length: 4,
    width: 5,
    options: {
      heading: 0,
      minZ: 37.22,
      maxZ: 39.82,
    },
  },
  _u,
  cv,
  fv,
  {
    id: "prison_clothing",
    vectors: {
      x: 1738.37,
      y: 2496.74,
      z: 45.82,
    },
    length: 4,
    width: 4,
    options: {
      heading: 30,
      minZ: 44.82,
      maxZ: 47.82,
    },
    data: {
      isFree: true,
    },
  },
  mv,
  pv,
];
var TattoShopZone = {
  zoneName: "tattoo_shop",
  zoneFunction: KARMAZoneFunction,
  zoneData: Config.TattooShopZones,
};
var clothingShopZone = {
  zoneName: "clothing_shop",
  zoneFunction: openClothing,
  zoneData: Config.ClothingShopZones,
};
var BarberShopZone = {
  zoneName: "barber_shop",
  zoneFunction: openBarber,
  zoneData: Config.BarberShopZones,
};
var pZones_ = [TattoShopZone, clothingShopZone, BarberShopZone];
function vv(
  _0x173a1f,
  _0x5d68ea,
  _0x34d7e8,
  _0x321c9d,
  _0x74f772,
  _0x591a8e,
  _0x3ca0b9
) {
  try {
    var _0x14c980 = _0x173a1f[_0x591a8e](_0x3ca0b9);
    var _0xaa5c8a = _0x14c980.value;
  } catch (_0x250624) {
    _0x34d7e8(_0x250624);
    return;
  }
  if (_0x14c980.done) {
    _0x5d68ea(_0xaa5c8a);
  } else {
    Promise.resolve(_0xaa5c8a).then(_0x321c9d, _0x74f772);
  }
}
function wv(_0x2f775c) {
  return function () {
    var _0x23732a = this;
    var _0x20ba01 = arguments;
    return new Promise(function (_0x22c65e, _0x34ed28) {
      var _0x494689 = _0x2f775c.apply(_0x23732a, _0x20ba01);
      function _0x37a28d(_0x5f104e) {
        vv(
          _0x494689,
          _0x22c65e,
          _0x34ed28,
          _0x37a28d,
          _0x589b0e,
          "next",
          _0x5f104e
        );
      }
      function _0x589b0e(_0x350c37) {
        vv(
          _0x494689,
          _0x22c65e,
          _0x34ed28,
          _0x37a28d,
          _0x589b0e,
          "throw",
          _0x350c37
        );
      }
      _0x37a28d(undefined);
    });
  };
}
function xv(_0x3fd146, _0x293d63) {
  var _0x53dbb9;
  var _0x568cd1;
  var _0x1562a2;
  var _0x577a51;
  var _0xc03db4 = {
    label: 0,
    sent: function () {
      if (_0x1562a2[0] & 1) {
        throw _0x1562a2[1];
      }
      return _0x1562a2[1];
    },
    trys: [],
    ops: [],
  };
  _0x577a51 = {
    next: _0xab20d7(0),
    throw: _0xab20d7(1),
    return: _0xab20d7(2),
  };
  if (typeof Symbol === "function") {
    _0x577a51[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x577a51;
  function _0xab20d7(_0x7013fa) {
    return function (_0x2ae25a) {
      return _0x30bbb7([_0x7013fa, _0x2ae25a]);
    };
  }
  function _0x30bbb7(_0x51cb4e) {
    if (_0x53dbb9) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0xc03db4) {
      try {
        _0x53dbb9 = 1;
        if (
          _0x568cd1 &&
          (_0x1562a2 =
            _0x51cb4e[0] & 2
              ? _0x568cd1.return
              : _0x51cb4e[0]
              ? _0x568cd1.throw ||
                ((_0x1562a2 = _0x568cd1.return) && _0x1562a2.call(_0x568cd1), 0)
              : _0x568cd1.next) &&
          !(_0x1562a2 = _0x1562a2.call(_0x568cd1, _0x51cb4e[1])).done
        ) {
          return _0x1562a2;
        }
        _0x568cd1 = 0;
        if (_0x1562a2) {
          _0x51cb4e = [_0x51cb4e[0] & 2, _0x1562a2.value];
        }
        switch (_0x51cb4e[0]) {
          case 0:
          case 1:
            _0x1562a2 = _0x51cb4e;
            break;
          case 4:
            _0xc03db4.label++;
            var _0x5243a6 = {
              value: _0x51cb4e[1],
              done: false,
            };
            return _0x5243a6;
          case 5:
            _0xc03db4.label++;
            _0x568cd1 = _0x51cb4e[1];
            _0x51cb4e = [0];
            continue;
          case 7:
            _0x51cb4e = _0xc03db4.ops.pop();
            _0xc03db4.trys.pop();
            continue;
          default:
            if (
              !((_0x1562a2 = _0xc03db4.trys),
              (_0x1562a2 =
                _0x1562a2.length > 0 && _0x1562a2[_0x1562a2.length - 1])) &&
              (_0x51cb4e[0] === 6 || _0x51cb4e[0] === 2)
            ) {
              _0xc03db4 = 0;
              continue;
            }
            if (
              _0x51cb4e[0] === 3 &&
              (!_0x1562a2 ||
                (_0x51cb4e[1] > _0x1562a2[0] && _0x51cb4e[1] < _0x1562a2[3]))
            ) {
              _0xc03db4.label = _0x51cb4e[1];
              break;
            }
            if (_0x51cb4e[0] === 6 && _0xc03db4.label < _0x1562a2[1]) {
              _0xc03db4.label = _0x1562a2[1];
              _0x1562a2 = _0x51cb4e;
              break;
            }
            if (_0x1562a2 && _0xc03db4.label < _0x1562a2[2]) {
              _0xc03db4.label = _0x1562a2[2];
              _0xc03db4.ops.push(_0x51cb4e);
              break;
            }
            if (_0x1562a2[2]) {
              _0xc03db4.ops.pop();
            }
            _0xc03db4.trys.pop();
            continue;
        }
        _0x51cb4e = _0x293d63.call(_0x3fd146, _0xc03db4);
      } catch (_0x5c8acb) {
        _0x51cb4e = [6, _0x5c8acb];
        _0x568cd1 = 0;
      } finally {
        _0x53dbb9 = _0x1562a2 = 0;
      }
    }
    if (_0x51cb4e[0] & 5) {
      throw _0x51cb4e[1];
    }
    var _0x138749 = {
      value: _0x51cb4e[0] ? _0x51cb4e[1] : undefined,
      done: true,
    };
    return _0x138749;
  }
}
var currentAction = 38;
var pInteraction_ = "Get stylish";
var pZone_ = "";
var StartZonesFuncListener = (function () {
  var _0x2cc554 = wv(function () {
    return xv(this, function (_0x56bb6e) {
      pZones_.forEach(function (_0x301de2) {
        if (_0x301de2.zoneData) {
          _0x301de2.zoneData.forEach(function (_0x1aa942) {
            Zones.addBoxZone(
              _0x1aa942.id,
              _0x301de2.zoneName,
              _0x1aa942.vectors,
              _0x1aa942.length,
              _0x1aa942.width,
              _0x1aa942.options,
              _0x1aa942.data
            );
          });
          ZoneEnterFunc(_0x301de2.zoneName, _0x301de2.zoneFunction);
        }
      });
      return [2];
    });
  });
  return function _0x5898ce() {
    return _0x2cc554.apply(this, arguments);
  };
})();
on("karma-clothing:ui:closed", function (_0x5967f) {
  if (Zones.isActive(pZone_)) {
    Config.ZoneDisplayText(pInteraction_);
  }
});
function ZoneEnterFunc(_0x2e0fa2, _0x431d82) {
  function _0x4f9c81(_0xe445fa, _0x2cc961 = false) {
    if (_0xe445fa !== currentAction) {
      return;
    }
    _0x431d82(_0x2cc961);
    Config.ZoneHideText();
  }
  Zones.onEnter(_0x2e0fa2, function (_0x1d56a1) {
    if (currentState.hasKey("karma-clothing:showMenu", currentAction)) {
      return;
    }
    Config.ZoneDisplayText(pInteraction_);
    currentState.addKey("karma-clothing:showMenu", currentAction);
    currentState.on("IsControlJustReleased", function () {
      _0x4f9c81(currentAction, _0x1d56a1.isFree);
    });
    pZone_ = _0x2e0fa2;
  });
  Zones.onExit(_0x2e0fa2, function () {
    Config.ZoneHideText();
    if (!currentState.hasKey("karma-clothing:showMenu", currentAction)) {
      return;
    }
    currentState.removeKey("karma-clothing:showMenu", currentAction);
    currentState.removeListener("IsControlJustReleased", _0x4f9c81);
  });
}
function Ev(_0x56c1ca, _0x5dedff) {
  if (_0x5dedff == null || _0x5dedff > _0x56c1ca.length) {
    _0x5dedff = _0x56c1ca.length;
  }
  for (
    var _0x2a38cc = 0, _0x1090ce = new Array(_0x5dedff);
    _0x2a38cc < _0x5dedff;
    _0x2a38cc++
  ) {
    _0x1090ce[_0x2a38cc] = _0x56c1ca[_0x2a38cc];
  }
  return _0x1090ce;
}
function Fv(_0x327390) {
  if (Array.isArray(_0x327390)) {
    return _0x327390;
  }
}
function Gv(_0x4b1755) {
  if (_0x4b1755 === undefined) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return _0x4b1755;
}
function Hv(_0x484a77, _0x154640) {
  if (!(_0x484a77 instanceof _0x154640)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Iv(_0x4f315f, _0x16e427) {
  for (var _0x2fb1fc = 0; _0x2fb1fc < _0x16e427.length; _0x2fb1fc++) {
    var _0x3ab674 = _0x16e427[_0x2fb1fc];
    _0x3ab674.enumerable = _0x3ab674.enumerable || false;
    _0x3ab674.configurable = true;
    if ("value" in _0x3ab674) {
      _0x3ab674.writable = true;
    }
    Object.defineProperty(_0x4f315f, _0x3ab674.key, _0x3ab674);
  }
}
function Jv(_0xb9fb04, _0x402d44, _0x2aa300) {
  if (_0x402d44) {
    Iv(_0xb9fb04.prototype, _0x402d44);
  }
  if (_0x2aa300) {
    Iv(_0xb9fb04, _0x2aa300);
  }
  return _0xb9fb04;
}
function Kv(_0x48b952, _0x43fbc4, _0x50eba7) {
  if (_0x43fbc4 in _0x48b952) {
    var _0x49313d = {
      value: _0x50eba7,
      enumerable: true,
      configurable: true,
      writable: true,
    };
    Object.defineProperty(_0x48b952, _0x43fbc4, _0x49313d);
  } else {
    _0x48b952[_0x43fbc4] = _0x50eba7;
  }
  return _0x48b952;
}
function Lv(_0x584c12) {
  Lv = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _0x2b4394(_0x421cc9) {
        return _0x421cc9.__proto__ || Object.getPrototypeOf(_0x421cc9);
      };
  return Lv(_0x584c12);
}
function Mv(_0x2bf581, _0x709d81) {
  if (typeof _0x709d81 !== "function" && _0x709d81 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x2bf581.prototype = Object.create(_0x709d81 && _0x709d81.prototype, {
    constructor: {
      value: _0x2bf581,
      writable: true,
      configurable: true,
    },
  });
  if (_0x709d81) {
    Qv(_0x2bf581, _0x709d81);
  }
}
function Nv(_0x27f344, _0x549513) {
  var _0x21184f =
    _0x27f344 == null
      ? null
      : (typeof Symbol !== "undefined" && _0x27f344[Symbol.iterator]) ||
        _0x27f344["@@iterator"];
  if (_0x21184f == null) {
    return;
  }
  var _0x5d6578 = [];
  var _0x15700a = true;
  var _0x40bde6 = false;
  var _0x47645a;
  var _0x3e0e37;
  try {
    for (
      _0x21184f = _0x21184f.call(_0x27f344);
      !(_0x15700a = (_0x47645a = _0x21184f.next()).done);
      _0x15700a = true
    ) {
      _0x5d6578.push(_0x47645a.value);
      if (_0x549513 && _0x5d6578.length === _0x549513) {
        break;
      }
    }
  } catch (_0x398f4c) {
    _0x40bde6 = true;
    _0x3e0e37 = _0x398f4c;
  } finally {
    try {
      if (!_0x15700a && _0x21184f.return != null) {
        _0x21184f.return();
      }
    } finally {
      if (_0x40bde6) {
        throw _0x3e0e37;
      }
    }
  }
  return _0x5d6578;
}
function Ov() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function Pv(_0xc852f4, _0x2161ec) {
  if (
    _0x2161ec &&
    (Sv(_0x2161ec) === "object" || typeof _0x2161ec === "function")
  ) {
    return _0x2161ec;
  }
  return Gv(_0xc852f4);
}
function Qv(_0x111f0f, _0x5d63c9) {
  Qv =
    Object.setPrototypeOf ||
    function _0x2806d9(_0x46a0e6, _0x4712a3) {
      _0x46a0e6.__proto__ = _0x4712a3;
      return _0x46a0e6;
    };
  return Qv(_0x111f0f, _0x5d63c9);
}
function Rv(_0x5bc7cc, _0x212153) {
  return (
    Fv(_0x5bc7cc) ||
    Nv(_0x5bc7cc, _0x212153) ||
    Tv(_0x5bc7cc, _0x212153) ||
    Ov()
  );
}
function Sv(_0x7eb731) {
  "@swc/helpers - typeof";

  if (
    _0x7eb731 &&
    typeof Symbol !== "undefined" &&
    _0x7eb731.constructor === Symbol
  ) {
    return "symbol";
  } else {
    return typeof _0x7eb731;
  }
}
function Tv(_0x4eaba6, _0x5da3be) {
  if (!_0x4eaba6) {
    return;
  }
  if (typeof _0x4eaba6 === "string") {
    return Ev(_0x4eaba6, _0x5da3be);
  }
  var _0x4adf23 = Object.prototype.toString.call(_0x4eaba6).slice(8, -1);
  if (_0x4adf23 === "Object" && _0x4eaba6.constructor) {
    _0x4adf23 = _0x4eaba6.constructor.name;
  }
  if (_0x4adf23 === "Map" || _0x4adf23 === "Set") {
    return Array.from(_0x4adf23);
  }
  if (
    _0x4adf23 === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4adf23)
  ) {
    return Ev(_0x4eaba6, _0x5da3be);
  }
}
function Uv() {
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false;
  }
  if (Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy === "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (_0x540a88) {
    return false;
  }
}
function Vv(_0x4b8514) {
  var _0x58e1f7 = Uv();
  return function _0x1ec3e3() {
    var _0x2b143e = Lv(_0x4b8514);
    var _0x309ea6;
    if (_0x58e1f7) {
      var _0x1507a2 = Lv(this).constructor;
      _0x309ea6 = Reflect.construct(_0x2b143e, arguments, _0x1507a2);
    } else {
      _0x309ea6 = _0x2b143e.apply(this, arguments);
    }
    return Pv(this, _0x309ea6);
  };
}
class CreateNewMap_ {
  constructor() {
    this.thread = undefined;
    this.contexts = undefined;
    this.keys = undefined;
    this.keys = new Set();
    this.contexts = new Map();
    this.listeners = {};
  }
  refresh() {
    this.keys.forEach((_0x2358e7) => {
      let _0x5edfce = false;
      for (let [_0x1f7fbd, _0x9b783c] of this.contexts) {
        if (_0x9b783c.has(_0x2358e7)) {
          _0x5edfce = true;
          break;
        }
      }
      if (!_0x5edfce) {
        this.keys.delete(_0x2358e7);
      }
    });
    if (this.thread && this.keys.size === 0) {
      this.stop();
    }
  }
  hasKey(_0xf51279, _0x4185e9) {
    return this.contexts.get(_0xf51279)?.has(_0x4185e9) ?? false;
  }
  addKey(_0x13f20c, _0x43c2ec) {
    if (!this.contexts.has(_0x13f20c)) {
      this.contexts.set(_0x13f20c, new Set());
    }
    this.keys.add(_0x43c2ec);
    this.contexts.get(_0x13f20c)?.add(_0x43c2ec);
    if (!this.thread) {
      this.start();
    }
  }
  removeKey(_0x2767c7, _0x243c29) {
    if (!this.contexts.has(_0x2767c7)) {
      this.contexts.set(_0x2767c7, new Set());
    }
    const _0x575cb0 = this.contexts.get(_0x2767c7);
    if (!_0x575cb0?.has(_0x243c29)) {
      return;
    }
    _0x575cb0.delete(_0x243c29);
    this.refresh();
  }
  start() {
    if (this.thread) {
      return;
    }
    this.thread = setTick(() => {
      if (this.keys.size === 0) {
        return this.stop();
      }
      this.keys.forEach((_0xbb5f2b) => {
        if (IsControlJustReleased(0, _0xbb5f2b)) {
          this.emit("IsControlJustReleased", _0xbb5f2b);
        }
      });
    });
  }
  stop() {
    if (!this.thread) {
      return;
    }
    const _0x1bf2c5 = this.thread;
    this.thread = undefined;
    clearTick(_0x1bf2c5);
    this.removeAllListeners();
  }
  on(_0x442188, _0x4a2fa7) {
    if (!this.listeners[_0x442188]) {
      this.listeners[_0x442188] = [];
    }
    this.listeners[_0x442188].push(_0x4a2fa7);
  }
  removeListener(_0x126ada, _0x1edf04) {
    if (!this.listeners[_0x126ada]) {
      return;
    }
    this.listeners[_0x126ada] = this.listeners[_0x126ada].filter(
      (_0x1c385c) => _0x1c385c !== _0x1edf04
    );
  }
  emit(_0x38e9fc, ..._0x5e8fd1) {
    if (this.listeners[_0x38e9fc]) {
      this.listeners[_0x38e9fc].forEach((_0x115a0f) => {
        _0x115a0f(..._0x5e8fd1);
      });
    }
  }
  removeAllListeners() {
    for (const _0x56632f in this.listeners) {
      delete this.listeners[_0x56632f];
    }
  }
}
var aVariable_ = false;
var pDrawables = undefined;
var MaleOrFemale = {
  male: 2,
  female: 4,
};
on("np-inventory:itemUsed", function (_0x19bffe) {
  if (_0x19bffe !== "hairtie") {
    return;
  }
  var _0x52cd07 = PlayerPedId();
  var _0x304154 = GetEntityModel(_0x52cd07);
  if (checkIfTattooIsUnique(_0x304154)) {
    return;
  }
  emit("animation:PlayAnimation", "hairtie");
  aVariable_ = !aVariable_;
  if (aVariable_) {
    pDrawables = getEntityClothingDrawables(_0x52cd07).Hair;
    var _0x23623f = MaleOrFemale[getTattooGender(_0x304154)];
    if (!pDrawables) {
      return;
    }
    var _0x2c9e = {
      Hair: [_0x23623f, pDrawables[1]],
    };
    var _0x4d0b3c = _0x2c9e;
    setPedComponentVariation(_0x52cd07, _0x4d0b3c);
    return;
  }
  var _0x194850 = {
    Hair: pDrawables,
  };
  setPedComponentVariation(_0x52cd07, _0x194850);
  pDrawables = undefined;
});
function AnotherFunc12(
  _0x316a08,
  _0x3a9643,
  _0x4de69e,
  _0x499211,
  _0x53ef99,
  _0x1da6f1,
  _0x203ad7
) {
  try {
    var _0x1b401e = _0x316a08[_0x1da6f1](_0x203ad7);
    var _0x5a7e1e = _0x1b401e.value;
  } catch (_0x2c0bb3) {
    _0x4de69e(_0x2c0bb3);
    return;
  }
  if (_0x1b401e.done) {
    _0x3a9643(_0x5a7e1e);
  } else {
    Promise.resolve(_0x5a7e1e).then(_0x499211, _0x53ef99);
  }
}
function aw(_0x35c57a) {
  return function () {
    var _0x24100b = this;
    var _0x35b3ed = arguments;
    return new Promise(function (_0x2b52a9, _0x567d6e) {
      var _0x5123fa = _0x35c57a.apply(_0x24100b, _0x35b3ed);
      function _0x2ac7fd(_0xc5b6c) {
        AnotherFunc12(
          _0x5123fa,
          _0x2b52a9,
          _0x567d6e,
          _0x2ac7fd,
          _0x159c90,
          "next",
          _0xc5b6c
        );
      }
      function _0x159c90(_0x3dfa51) {
        AnotherFunc12(
          _0x5123fa,
          _0x2b52a9,
          _0x567d6e,
          _0x2ac7fd,
          _0x159c90,
          "throw",
          _0x3dfa51
        );
      }
      _0x2ac7fd(undefined);
    });
  };
}
function bw(_0x1f41c8, _0x1943fd) {
  var _0x5e490a;
  var _0x8c5016;
  var _0xddcf3d;
  var _0x967517;
  var _0x1be8f3 = {
    label: 0,
    sent: function () {
      if (_0xddcf3d[0] & 1) {
        throw _0xddcf3d[1];
      }
      return _0xddcf3d[1];
    },
    trys: [],
    ops: [],
  };
  _0x967517 = {
    next: _0x31429e(0),
    throw: _0x31429e(1),
    return: _0x31429e(2),
  };
  if (typeof Symbol === "function") {
    _0x967517[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x967517;
  function _0x31429e(_0x54df97) {
    return function (_0x4f1425) {
      return _0x2ac9de([_0x54df97, _0x4f1425]);
    };
  }
  function _0x2ac9de(_0x32c978) {
    if (_0x5e490a) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x1be8f3) {
      try {
        _0x5e490a = 1;
        if (
          _0x8c5016 &&
          (_0xddcf3d =
            _0x32c978[0] & 2
              ? _0x8c5016.return
              : _0x32c978[0]
              ? _0x8c5016.throw ||
                ((_0xddcf3d = _0x8c5016.return) && _0xddcf3d.call(_0x8c5016), 0)
              : _0x8c5016.next) &&
          !(_0xddcf3d = _0xddcf3d.call(_0x8c5016, _0x32c978[1])).done
        ) {
          return _0xddcf3d;
        }
        _0x8c5016 = 0;
        if (_0xddcf3d) {
          _0x32c978 = [_0x32c978[0] & 2, _0xddcf3d.value];
        }
        switch (_0x32c978[0]) {
          case 0:
          case 1:
            _0xddcf3d = _0x32c978;
            break;
          case 4:
            _0x1be8f3.label++;
            var _0x5f44cb = {
              value: _0x32c978[1],
              done: false,
            };
            return _0x5f44cb;
          case 5:
            _0x1be8f3.label++;
            _0x8c5016 = _0x32c978[1];
            _0x32c978 = [0];
            continue;
          case 7:
            _0x32c978 = _0x1be8f3.ops.pop();
            _0x1be8f3.trys.pop();
            continue;
          default:
            if (
              !((_0xddcf3d = _0x1be8f3.trys),
              (_0xddcf3d =
                _0xddcf3d.length > 0 && _0xddcf3d[_0xddcf3d.length - 1])) &&
              (_0x32c978[0] === 6 || _0x32c978[0] === 2)
            ) {
              _0x1be8f3 = 0;
              continue;
            }
            if (
              _0x32c978[0] === 3 &&
              (!_0xddcf3d ||
                (_0x32c978[1] > _0xddcf3d[0] && _0x32c978[1] < _0xddcf3d[3]))
            ) {
              _0x1be8f3.label = _0x32c978[1];
              break;
            }
            if (_0x32c978[0] === 6 && _0x1be8f3.label < _0xddcf3d[1]) {
              _0x1be8f3.label = _0xddcf3d[1];
              _0xddcf3d = _0x32c978;
              break;
            }
            if (_0xddcf3d && _0x1be8f3.label < _0xddcf3d[2]) {
              _0x1be8f3.label = _0xddcf3d[2];
              _0x1be8f3.ops.push(_0x32c978);
              break;
            }
            if (_0xddcf3d[2]) {
              _0x1be8f3.ops.pop();
            }
            _0x1be8f3.trys.pop();
            continue;
        }
        _0x32c978 = _0x1943fd.call(_0x1f41c8, _0x1be8f3);
      } catch (_0x35ff6c) {
        _0x32c978 = [6, _0x35ff6c];
        _0x8c5016 = 0;
      } finally {
        _0x5e490a = _0xddcf3d = 0;
      }
    }
    if (_0x32c978[0] & 5) {
      throw _0x32c978[1];
    }
    var _0x53145d = {
      value: _0x32c978[0] ? _0x32c978[1] : undefined,
      done: true,
    };
    return _0x53145d;
  }
}
var currentState = new CreateNewMap_();
function fetchDataz_() {
  LoadNPXConfigFunc();
  StartZonesFuncListener();
  SetupGeneartor();
}
function fw(
  _0x1eb683,
  _0x3e0922,
  _0x1b345f,
  _0xc57814,
  _0x56ef0e,
  _0x8d2fac,
  _0x2a1038
) {
  try {
    var _0xd296fa = _0x1eb683[_0x8d2fac](_0x2a1038);
    var _0x6812c = _0xd296fa.value;
  } catch (_0x21adb8) {
    _0x1b345f(_0x21adb8);
    return;
  }
  if (_0xd296fa.done) {
    _0x3e0922(_0x6812c);
  } else {
    Promise.resolve(_0x6812c).then(_0xc57814, _0x56ef0e);
  }
}
function gw(_0x431384) {
  return function () {
    var _0x2b4993 = this;
    var _0x15b5c7 = arguments;
    return new Promise(function (_0x3d9718, _0x24886a) {
      var _0x55d9a8 = _0x431384.apply(_0x2b4993, _0x15b5c7);
      function _0x45f84e(_0x1b469b) {
        fw(
          _0x55d9a8,
          _0x3d9718,
          _0x24886a,
          _0x45f84e,
          _0x2f7880,
          "next",
          _0x1b469b
        );
      }
      function _0x2f7880(_0x506585) {
        fw(
          _0x55d9a8,
          _0x3d9718,
          _0x24886a,
          _0x45f84e,
          _0x2f7880,
          "throw",
          _0x506585
        );
      }
      _0x45f84e(undefined);
    });
  };
}
function hw(_0x39147c, _0x5a4d7d) {
  if (!(_0x39147c instanceof _0x5a4d7d)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function iw(_0x514bac, _0x175563) {
  for (var _0x1931aa = 0; _0x1931aa < _0x175563.length; _0x1931aa++) {
    var _0x11a2bd = _0x175563[_0x1931aa];
    _0x11a2bd.enumerable = _0x11a2bd.enumerable || false;
    _0x11a2bd.configurable = true;
    if ("value" in _0x11a2bd) {
      _0x11a2bd.writable = true;
    }
    Object.defineProperty(_0x514bac, _0x11a2bd.key, _0x11a2bd);
  }
}
function jw(_0x635a17, _0x5aada7, _0x2bde6a) {
  if (_0x5aada7) {
    iw(_0x635a17.prototype, _0x5aada7);
  }
  if (_0x2bde6a) {
    iw(_0x635a17, _0x2bde6a);
  }
  return _0x635a17;
}
function kw(_0x23a260, _0xd9fb3b, _0x38ca00) {
  if (_0xd9fb3b in _0x23a260) {
    var _0x3ec4e4 = {
      value: _0x38ca00,
      enumerable: true,
      configurable: true,
      writable: true,
    };
    Object.defineProperty(_0x23a260, _0xd9fb3b, _0x3ec4e4);
  } else {
    _0x23a260[_0xd9fb3b] = _0x38ca00;
  }
  return _0x23a260;
}
function lw(_0x51d373, _0x3b9871) {
  var _0x3000f2;
  var _0x34bc94;
  var _0x4849a4;
  var _0x5433c2;
  var _0x565e6e = {
    label: 0,
    sent: function () {
      if (_0x4849a4[0] & 1) {
        throw _0x4849a4[1];
      }
      return _0x4849a4[1];
    },
    trys: [],
    ops: [],
  };
  _0x5433c2 = {
    next: _0x6226b2(0),
    throw: _0x6226b2(1),
    return: _0x6226b2(2),
  };
  if (typeof Symbol === "function") {
    _0x5433c2[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x5433c2;
  function _0x6226b2(_0x33d7bf) {
    return function (_0x4bb8d6) {
      return _0x107caa([_0x33d7bf, _0x4bb8d6]);
    };
  }
  function _0x107caa(_0x32cc54) {
    if (_0x3000f2) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x565e6e) {
      try {
        _0x3000f2 = 1;
        if (
          _0x34bc94 &&
          (_0x4849a4 =
            _0x32cc54[0] & 2
              ? _0x34bc94.return
              : _0x32cc54[0]
              ? _0x34bc94.throw ||
                ((_0x4849a4 = _0x34bc94.return) && _0x4849a4.call(_0x34bc94), 0)
              : _0x34bc94.next) &&
          !(_0x4849a4 = _0x4849a4.call(_0x34bc94, _0x32cc54[1])).done
        ) {
          return _0x4849a4;
        }
        _0x34bc94 = 0;
        if (_0x4849a4) {
          _0x32cc54 = [_0x32cc54[0] & 2, _0x4849a4.value];
        }
        switch (_0x32cc54[0]) {
          case 0:
          case 1:
            _0x4849a4 = _0x32cc54;
            break;
          case 4:
            _0x565e6e.label++;
            var _0x456c03 = {
              value: _0x32cc54[1],
              done: false,
            };
            return _0x456c03;
          case 5:
            _0x565e6e.label++;
            _0x34bc94 = _0x32cc54[1];
            _0x32cc54 = [0];
            continue;
          case 7:
            _0x32cc54 = _0x565e6e.ops.pop();
            _0x565e6e.trys.pop();
            continue;
          default:
            if (
              !((_0x4849a4 = _0x565e6e.trys),
              (_0x4849a4 =
                _0x4849a4.length > 0 && _0x4849a4[_0x4849a4.length - 1])) &&
              (_0x32cc54[0] === 6 || _0x32cc54[0] === 2)
            ) {
              _0x565e6e = 0;
              continue;
            }
            if (
              _0x32cc54[0] === 3 &&
              (!_0x4849a4 ||
                (_0x32cc54[1] > _0x4849a4[0] && _0x32cc54[1] < _0x4849a4[3]))
            ) {
              _0x565e6e.label = _0x32cc54[1];
              break;
            }
            if (_0x32cc54[0] === 6 && _0x565e6e.label < _0x4849a4[1]) {
              _0x565e6e.label = _0x4849a4[1];
              _0x4849a4 = _0x32cc54;
              break;
            }
            if (_0x4849a4 && _0x565e6e.label < _0x4849a4[2]) {
              _0x565e6e.label = _0x4849a4[2];
              _0x565e6e.ops.push(_0x32cc54);
              break;
            }
            if (_0x4849a4[2]) {
              _0x565e6e.ops.pop();
            }
            _0x565e6e.trys.pop();
            continue;
        }
        _0x32cc54 = _0x3b9871.call(_0x51d373, _0x565e6e);
      } catch (_0xa08234) {
        _0x32cc54 = [6, _0xa08234];
        _0x34bc94 = 0;
      } finally {
        _0x3000f2 = _0x4849a4 = 0;
      }
    }
    if (_0x32cc54[0] & 5) {
      throw _0x32cc54[1];
    }
    var _0x280ed1 = {
      value: _0x32cc54[0] ? _0x32cc54[1] : undefined,
      done: true,
    };
    return _0x280ed1;
  }
}
var SomeClothingUtils = {
  shoes: function (_0x45c2b5) {
    var _0x53d14f = GetWorldPositionOfEntityBone(
      _0x45c2b5,
      GetPedBoneIndex(_0x45c2b5, 14201)
    );
    var _0x5d75f7 = GetWorldPositionOfEntityBone(
      _0x45c2b5,
      GetPedBoneIndex(_0x45c2b5, 52301)
    );
    var _0x41c5b7 = [
      (_0x53d14f[0] + _0x5d75f7[0]) / 2,
      (_0x53d14f[1] + _0x5d75f7[1]) / 2,
      (_0x53d14f[2] + _0x5d75f7[2]) / 2,
    ];
    var _0x182aa8 = GetEntityHeading(_0x45c2b5);
    var _0x6816ac = GetObjectOffsetFromCoords(
      _0x41c5b7[0],
      _0x41c5b7[1],
      _0x41c5b7[2],
      _0x182aa8,
      0.01,
      2,
      0.1
    );
    return _0x6816ac;
  },
  pants: function (_0x307ea9) {
    var _0x77585b = GetWorldPositionOfEntityBone(
      _0x307ea9,
      GetPedBoneIndex(_0x307ea9, 14201)
    );
    var _0x32e6bb = GetWorldPositionOfEntityBone(
      _0x307ea9,
      GetPedBoneIndex(_0x307ea9, 52301)
    );
    var _0xc8685d = [
      (_0x77585b[0] + _0x32e6bb[0]) / 2,
      (_0x77585b[1] + _0x32e6bb[1]) / 2,
      (_0x77585b[2] + _0x32e6bb[2]) / 2,
    ];
    var _0x5ba467 = GetEntityHeading(_0x307ea9);
    var _0xccfc1a = GetObjectOffsetFromCoords(
      _0xc8685d[0],
      _0xc8685d[1],
      _0xc8685d[2],
      _0x5ba467,
      0.01,
      3.45,
      0.62
    );
    return _0xccfc1a;
  },
  jacket: function (_0x2cbf98) {
    var _0x1f6c9b = GetWorldPositionOfEntityBone(
      _0x2cbf98,
      GetPedBoneIndex(_0x2cbf98, 0)
    );
    var _0x15a5c1 = GetEntityHeading(_0x2cbf98);
    var _0x5e0f49 = GetObjectOffsetFromCoords(
      _0x1f6c9b[0],
      _0x1f6c9b[1],
      _0x1f6c9b[2],
      _0x15a5c1,
      0,
      3.45,
      0.45
    );
    return _0x5e0f49;
  },
  undershirt: function (_0x59398d) {
    var _0x4e9a35 = GetWorldPositionOfEntityBone(
      _0x59398d,
      GetPedBoneIndex(_0x59398d, 0)
    );
    var _0x1bba2b = GetEntityHeading(_0x59398d);
    var _0x25882e = GetObjectOffsetFromCoords(
      _0x4e9a35[0],
      _0x4e9a35[1],
      _0x4e9a35[2],
      _0x1bba2b,
      0,
      3.45,
      0.45
    );
    return _0x25882e;
  },
  masks: function (_0x920b6) {
    var _0x42baf9 = GetWorldPositionOfEntityBone(
      _0x920b6,
      GetPedBoneIndex(_0x920b6, 31086)
    );
    var _0x21813d = GetEntityHeading(_0x920b6);
    var _0x49d7a5 = GetObjectOffsetFromCoords(
      _0x42baf9[0],
      _0x42baf9[1],
      _0x42baf9[2],
      _0x21813d,
      0,
      1.35,
      0.09
    );
    return _0x49d7a5;
  },
  accessory: function (_0x1615c7) {
    var _0x955a69 = GetWorldPositionOfEntityBone(
      _0x1615c7,
      GetPedBoneIndex(_0x1615c7, 0)
    );
    var _0x91d523 = GetEntityHeading(_0x1615c7);
    var _0x5bbebf = GetObjectOffsetFromCoords(
      _0x955a69[0],
      _0x955a69[1],
      _0x955a69[2],
      _0x91d523,
      0,
      2,
      0.45
    );
    return _0x5bbebf;
  },
  kevlar: function (_0x333c42) {
    var _0x53b4f7 = GetWorldPositionOfEntityBone(
      _0x333c42,
      GetPedBoneIndex(_0x333c42, 0)
    );
    var _0x3704a1 = GetEntityHeading(_0x333c42);
    var _0x22c2c3 = GetObjectOffsetFromCoords(
      _0x53b4f7[0],
      _0x53b4f7[1],
      _0x53b4f7[2],
      _0x3704a1,
      0,
      3.45,
      0.45
    );
    return _0x22c2c3;
  },
  bags: function (_0x3780f4) {
    var _0x4e46c6 = GetWorldPositionOfEntityBone(
      _0x3780f4,
      GetPedBoneIndex(_0x3780f4, 0)
    );
    var _0x210bb2 = GetEntityHeading(_0x3780f4);
    var _0x48445b = GetObjectOffsetFromCoords(
      _0x4e46c6[0],
      _0x4e46c6[1],
      _0x4e46c6[2],
      _0x210bb2,
      0,
      3.45,
      0.45
    );
    return _0x48445b;
  },
  hats: function (_0x1aa5e2) {
    var _0x2dbc3e = GetWorldPositionOfEntityBone(
      _0x1aa5e2,
      GetPedBoneIndex(_0x1aa5e2, 31086)
    );
    var _0x1d18ad = GetEntityHeading(_0x1aa5e2);
    var _0xcc844f = GetObjectOffsetFromCoords(
      _0x2dbc3e[0],
      _0x2dbc3e[1],
      _0x2dbc3e[2],
      _0x1d18ad,
      0,
      1.35,
      0.12
    );
    return _0xcc844f;
  },
  glasses: function (_0x5337ed) {
    var _0xd30950 = GetWorldPositionOfEntityBone(
      _0x5337ed,
      GetPedBoneIndex(_0x5337ed, 31086)
    );
    var _0x3a018e = GetEntityHeading(_0x5337ed);
    var _0x55e1ca = GetObjectOffsetFromCoords(
      _0xd30950[0],
      _0xd30950[1],
      _0xd30950[2],
      _0x3a018e,
      0,
      1.35,
      0.12
    );
    return _0x55e1ca;
  },
  ears: function (_0xe0f73e) {
    var _0x51ac0c = GetWorldPositionOfEntityBone(
      _0xe0f73e,
      GetPedBoneIndex(_0xe0f73e, 31086)
    );
    var _0x3856ee = GetEntityHeading(_0xe0f73e);
    var _0x23e774 = GetObjectOffsetFromCoords(
      _0x51ac0c[0],
      _0x51ac0c[1],
      _0x51ac0c[2],
      _0x3856ee,
      0,
      0.6,
      0.08
    );
    return _0x23e774;
  },
  watches: function (_0x53949c) {
    var _0x429aee = GetWorldPositionOfEntityBone(
      _0x53949c,
      GetPedBoneIndex(_0x53949c, 18905)
    );
    var _0x21d65a = GetEntityHeading(_0x53949c);
    var _0x52a97b = GetObjectOffsetFromCoords(
      _0x429aee[0],
      _0x429aee[1],
      _0x429aee[2],
      _0x21d65a,
      0,
      0.4,
      0.04
    );
    return _0x52a97b;
  },
  bracelets: function (_0xe84813) {
    var _0x578d12 = GetWorldPositionOfEntityBone(
      _0xe84813,
      GetPedBoneIndex(_0xe84813, 57005)
    );
    var _0x723bea = GetEntityHeading(_0xe84813);
    var _0x2bbe51 = GetObjectOffsetFromCoords(
      _0x578d12[0],
      _0x578d12[1],
      _0x578d12[2],
      _0x723bea,
      0,
      0.4,
      0.04
    );
    return _0x2bbe51;
  },
  torso: function (_0x23276d) {
    var _0x346506 = GetWorldPositionOfEntityBone(
      _0x23276d,
      GetPedBoneIndex(_0x23276d, 0)
    );
    var _0x3a14ed = GetEntityHeading(_0x23276d);
    var _0x269694 = GetObjectOffsetFromCoords(
      _0x346506[0],
      _0x346506[1],
      _0x346506[2] - 0.1,
      _0x3a14ed,
      0,
      3.45,
      0.45
    );
    return _0x269694;
  },
  hair: function (_0x58bf60) {
    var _0x33914b = GetWorldPositionOfEntityBone(
      _0x58bf60,
      GetPedBoneIndex(_0x58bf60, 31086)
    );
    var _0x1d6f0e = GetEntityHeading(_0x58bf60);
    var _0x1c691f = GetObjectOffsetFromCoords(
      _0x33914b[0],
      _0x33914b[1],
      _0x33914b[2],
      _0x1d6f0e,
      0,
      1.35,
      0.12
    );
    return _0x1c691f;
  },
  decals: function (_0x33a7ba) {
    var _0x2504dc = GetWorldPositionOfEntityBone(
      _0x33a7ba,
      GetPedBoneIndex(_0x33a7ba, 0)
    );
    var _0x385435 = GetEntityHeading(_0x33a7ba);
    var _0x1a074e = GetObjectOffsetFromCoords(
      _0x2504dc[0],
      _0x2504dc[1],
      _0x2504dc[2] - 0.1,
      _0x385435,
      0,
      3.45,
      0.45
    );
    return _0x1a074e;
  },
  facialHair: function (_0x4c617b) {
    var _0x3dd602 = GetWorldPositionOfEntityBone(
      _0x4c617b,
      GetPedBoneIndex(_0x4c617b, 31086)
    );
    var _0x80d648 = GetEntityHeading(_0x4c617b);
    var _0x5594f6 = GetObjectOffsetFromCoords(
      _0x3dd602[0],
      _0x3dd602[1],
      _0x3dd602[2],
      _0x80d648,
      0,
      0.9,
      0.05
    );
    return _0x5594f6;
  },
  makeup: function (_0x1750c3) {
    var _0x56eadc = GetWorldPositionOfEntityBone(
      _0x1750c3,
      GetPedBoneIndex(_0x1750c3, 31086)
    );
    var _0x316f2f = GetEntityHeading(_0x1750c3);
    var _0x1e7dc9 = GetObjectOffsetFromCoords(
      _0x56eadc[0],
      _0x56eadc[1],
      _0x56eadc[2],
      _0x316f2f,
      0,
      0.9,
      0.05
    );
    return _0x1e7dc9;
  },
  blush: function (_0x515f9b) {
    var _0x25473d = GetWorldPositionOfEntityBone(
      _0x515f9b,
      GetPedBoneIndex(_0x515f9b, 31086)
    );
    var _0x74b23f = GetEntityHeading(_0x515f9b);
    var _0x1f2d2f = GetObjectOffsetFromCoords(
      _0x25473d[0],
      _0x25473d[1],
      _0x25473d[2],
      _0x74b23f,
      0,
      0.9,
      0.05
    );
    return _0x1f2d2f;
  },
  blemishes: function (_0x3ddd9f) {
    var _0x4413b8 = GetWorldPositionOfEntityBone(
      _0x3ddd9f,
      GetPedBoneIndex(_0x3ddd9f, 31086)
    );
    var _0x40496a = GetEntityHeading(_0x3ddd9f);
    var _0x2c1461 = GetObjectOffsetFromCoords(
      _0x4413b8[0],
      _0x4413b8[1],
      _0x4413b8[2],
      _0x40496a,
      0,
      0.9,
      0.05
    );
    return _0x2c1461;
  },
  lipstick: function (_0x2aba3e) {
    var _0x10fa9b = GetWorldPositionOfEntityBone(
      _0x2aba3e,
      GetPedBoneIndex(_0x2aba3e, 31086)
    );
    var _0x1cded1 = GetEntityHeading(_0x2aba3e);
    var _0x42a27b = GetObjectOffsetFromCoords(
      _0x10fa9b[0],
      _0x10fa9b[1],
      _0x10fa9b[2],
      _0x1cded1,
      0,
      0.9,
      0.05
    );
    return _0x42a27b;
  },
  ageing: function (_0x51438f) {
    var _0x3320b2 = GetWorldPositionOfEntityBone(
      _0x51438f,
      GetPedBoneIndex(_0x51438f, 31086)
    );
    var _0x468429 = GetEntityHeading(_0x51438f);
    var _0x35f97b = GetObjectOffsetFromCoords(
      _0x3320b2[0],
      _0x3320b2[1],
      _0x3320b2[2],
      _0x468429,
      0,
      0.9,
      0.05
    );
    return _0x35f97b;
  },
  complexion: function (_0x3131ae) {
    var _0x55083d = GetWorldPositionOfEntityBone(
      _0x3131ae,
      GetPedBoneIndex(_0x3131ae, 31086)
    );
    var _0x32538f = GetEntityHeading(_0x3131ae);
    var _0x4d11d3 = GetObjectOffsetFromCoords(
      _0x55083d[0],
      _0x55083d[1],
      _0x55083d[2],
      _0x32538f,
      0,
      0.9,
      0.05
    );
    return _0x4d11d3;
  },
  sunDamage: function (_0x1cc5f3) {
    var _0x2ed1b2 = GetWorldPositionOfEntityBone(
      _0x1cc5f3,
      GetPedBoneIndex(_0x1cc5f3, 31086)
    );
    var _0x5a7701 = GetEntityHeading(_0x1cc5f3);
    var _0x5fb2f8 = GetObjectOffsetFromCoords(
      _0x2ed1b2[0],
      _0x2ed1b2[1],
      _0x2ed1b2[2],
      _0x5a7701,
      0,
      0.9,
      0.05
    );
    return _0x5fb2f8;
  },
  freckles: function (_0x125fbf) {
    var _0x3dc502 = GetWorldPositionOfEntityBone(
      _0x125fbf,
      GetPedBoneIndex(_0x125fbf, 31086)
    );
    var _0x37ac22 = GetEntityHeading(_0x125fbf);
    var _0xe3b646 = GetObjectOffsetFromCoords(
      _0x3dc502[0],
      _0x3dc502[1],
      _0x3dc502[2],
      _0x37ac22,
      0,
      0.9,
      0.05
    );
    return _0xe3b646;
  },
  chestHair: function (_0x47462a) {
    var _0x10e98e = GetWorldPositionOfEntityBone(
      _0x47462a,
      GetPedBoneIndex(_0x47462a, 0)
    );
    var _0x3d2e87 = GetEntityHeading(_0x47462a);
    var _0x79da78 = GetObjectOffsetFromCoords(
      _0x10e98e[0],
      _0x10e98e[1],
      _0x10e98e[2] - 0.1,
      _0x3d2e87,
      0,
      3.45,
      0.45
    );
    return _0x79da78;
  },
  bodyBlemishes: function (_0xdc5e56) {
    var _0x4b82b4 = GetWorldPositionOfEntityBone(
      _0xdc5e56,
      GetPedBoneIndex(_0xdc5e56, 0)
    );
    var _0x5660b4 = GetEntityHeading(_0xdc5e56);
    var _0x46490e = GetObjectOffsetFromCoords(
      _0x4b82b4[0],
      _0x4b82b4[1],
      _0x4b82b4[2] - 0.1,
      _0x5660b4,
      0,
      3.45,
      0.45
    );
    return _0x46490e;
  },
  addBodyBlemishes: function (_0x120bfd) {
    var _0x56c269 = GetWorldPositionOfEntityBone(
      _0x120bfd,
      GetPedBoneIndex(_0x120bfd, 0)
    );
    var _0x46f5eb = GetEntityHeading(_0x120bfd);
    var _0x550ced = GetObjectOffsetFromCoords(
      _0x56c269[0],
      _0x56c269[1],
      _0x56c269[2] - 0.1,
      _0x46f5eb,
      0,
      3.45,
      0.45
    );
    return _0x550ced;
  },
  contacts: function (_0x52c428) {
    var _0x4fb292 = GetWorldPositionOfEntityBone(
      _0x52c428,
      GetPedBoneIndex(_0x52c428, 31086)
    );
    var _0x392a2c = GetEntityHeading(_0x52c428);
    var _0x509e81 = GetObjectOffsetFromCoords(
      _0x4fb292[0],
      _0x4fb292[1],
      _0x4fb292[2],
      _0x392a2c,
      0.01,
      1,
      0.1
    );
    return _0x509e81;
  },
};
var CameraHandler = (function () {
  "use strict";

  function _0x2d7ed5() {
    hw(this, _0x2d7ed5);
  }
  jw(_0x2d7ed5, null, [
    {
      key: "start",
      value: function _0x301b16(_0x4c0838) {
        var _0x5ded09 = this;
        return gw(function () {
          var _0x42d4ed;
          var _0x5d5359;
          var _0x2cf72a;
          var _0x1cee4b;
          return lw(this, function (_0x3d6a8b) {
            switch (_0x3d6a8b.label) {
              case 0:
                _0x42d4ed = PlayerPedId();
                _0x5ded09.cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
                FreezeEntityPosition(_0x42d4ed, true);
                SetEntityCoords(
                  _0x42d4ed,
                  -582.51,
                  -923.15,
                  23.81,
                  false,
                  false,
                  false,
                  false
                );
                SetEntityHeading(_0x42d4ed, 180);
                _0x5d5359 = SomeClothingUtils[_0x4c0838](_0x42d4ed);
                SetCamCoord(
                  _0x5ded09.cam,
                  _0x5d5359[0],
                  _0x5d5359[1],
                  _0x5d5359[2]
                );
                SetCamRot(_0x5ded09.cam, -3, 0, 0, 2);
                RenderScriptCams(true, true, 750, true, false);
                SetCamFov(_0x5ded09.cam, 40);
                _0x2cf72a = "amb@code_human_wander_idles_fat@male@static";
                _0x1cee4b = "static";
                return [4, FiveMUtil.loadAnim(_0x2cf72a)];
              case 1:
                _0x3d6a8b.sent();
                TaskPlayAnim(
                  PlayerPedId(),
                  _0x2cf72a,
                  _0x1cee4b,
                  1000,
                  8,
                  -1,
                  2,
                  100,
                  false,
                  false,
                  false
                );
                return [4, KarmaDevelopmentUtil.wait(2000)];
              case 2:
                _0x3d6a8b.sent();
                return [2, true];
            }
          });
        })();
      },
    },
    {
      key: "stop",
      value: function _0x3b2ccf() {
        DestroyCam(this.cam, true);
        RenderScriptCams(false, true, 1000, true, false);
      },
    },
  ]);
  return _0x2d7ed5;
})();
kw(CameraHandler, "cam", 0);
function ow(_0x3fb1e2, _0x2521ab) {
  if (_0x2521ab == null || _0x2521ab > _0x3fb1e2.length) {
    _0x2521ab = _0x3fb1e2.length;
  }
  for (
    var _0x122235 = 0, _0x3143f0 = new Array(_0x2521ab);
    _0x122235 < _0x2521ab;
    _0x122235++
  ) {
    _0x3143f0[_0x122235] = _0x3fb1e2[_0x122235];
  }
  return _0x3143f0;
}
function pw(_0x5a9a3b) {
  if (Array.isArray(_0x5a9a3b)) {
    return _0x5a9a3b;
  }
}
function qw(
  _0x50e082,
  _0x48d578,
  _0x2cf871,
  _0x1e0f32,
  _0x551d70,
  _0x1ee4d7,
  _0xf98c53
) {
  try {
    var _0x5c2d3c = _0x50e082[_0x1ee4d7](_0xf98c53);
    var _0x5c2695 = _0x5c2d3c.value;
  } catch (_0x40d20e) {
    _0x2cf871(_0x40d20e);
    return;
  }
  if (_0x5c2d3c.done) {
    _0x48d578(_0x5c2695);
  } else {
    Promise.resolve(_0x5c2695).then(_0x1e0f32, _0x551d70);
  }
}
function rw(_0x52f49e) {
  return function () {
    var _0x3dd99d = this;
    var _0x13431f = arguments;
    return new Promise(function (_0xe2c9dd, _0x3e306c) {
      var _0x3ba850 = _0x52f49e.apply(_0x3dd99d, _0x13431f);
      function _0x15563e(_0x27fb38) {
        qw(
          _0x3ba850,
          _0xe2c9dd,
          _0x3e306c,
          _0x15563e,
          _0x1572ca,
          "next",
          _0x27fb38
        );
      }
      function _0x1572ca(_0x3d2ac3) {
        qw(
          _0x3ba850,
          _0xe2c9dd,
          _0x3e306c,
          _0x15563e,
          _0x1572ca,
          "throw",
          _0x3d2ac3
        );
      }
      _0x15563e(undefined);
    });
  };
}
function sw(_0x5c1b49, _0x473e6b) {
  var _0x13be84 =
    _0x5c1b49 == null
      ? null
      : (typeof Symbol !== "undefined" && _0x5c1b49[Symbol.iterator]) ||
        _0x5c1b49["@@iterator"];
  if (_0x13be84 == null) {
    return;
  }
  var _0x22e408 = [];
  var _0x577ce9 = true;
  var _0x31d844 = false;
  var _0x3b279f;
  var _0x5a19c7;
  try {
    for (
      _0x13be84 = _0x13be84.call(_0x5c1b49);
      !(_0x577ce9 = (_0x3b279f = _0x13be84.next()).done);
      _0x577ce9 = true
    ) {
      _0x22e408.push(_0x3b279f.value);
      if (_0x473e6b && _0x22e408.length === _0x473e6b) {
        break;
      }
    }
  } catch (_0x514a6a) {
    _0x31d844 = true;
    _0x5a19c7 = _0x514a6a;
  } finally {
    try {
      if (!_0x577ce9 && _0x13be84.return != null) {
        _0x13be84.return();
      }
    } finally {
      if (_0x31d844) {
        throw _0x5a19c7;
      }
    }
  }
  return _0x22e408;
}
function tw() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function uw(_0x2ef985, _0x33a89b) {
  return (
    pw(_0x2ef985) ||
    sw(_0x2ef985, _0x33a89b) ||
    vw(_0x2ef985, _0x33a89b) ||
    tw()
  );
}
function vw(_0x404261, _0x9454cf) {
  if (!_0x404261) {
    return;
  }
  if (typeof _0x404261 === "string") {
    return ow(_0x404261, _0x9454cf);
  }
  var _0x333021 = Object.prototype.toString.call(_0x404261).slice(8, -1);
  if (_0x333021 === "Object" && _0x404261.constructor) {
    _0x333021 = _0x404261.constructor.name;
  }
  if (_0x333021 === "Map" || _0x333021 === "Set") {
    return Array.from(_0x333021);
  }
  if (
    _0x333021 === "Arguments" ||
    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x333021)
  ) {
    return ow(_0x404261, _0x9454cf);
  }
}
function ww(_0x2da96e, _0x3d64d6) {
  var _0x44914c;
  var _0x3a31e3;
  var _0xacfafa;
  var _0x45373a;
  var _0x809fae = {
    label: 0,
    sent: function () {
      if (_0xacfafa[0] & 1) {
        throw _0xacfafa[1];
      }
      return _0xacfafa[1];
    },
    trys: [],
    ops: [],
  };
  _0x45373a = {
    next: _0x41df51(0),
    throw: _0x41df51(1),
    return: _0x41df51(2),
  };
  if (typeof Symbol === "function") {
    _0x45373a[Symbol.iterator] = function () {
      return this;
    };
  }
  return _0x45373a;
  function _0x41df51(_0x5bea82) {
    return function (_0x1f7ce9) {
      return _0x1575ba([_0x5bea82, _0x1f7ce9]);
    };
  }
  function _0x1575ba(_0x43f9b2) {
    if (_0x44914c) {
      throw new TypeError("Generator is already executing.");
    }
    while (_0x809fae) {
      try {
        _0x44914c = 1;
        if (
          _0x3a31e3 &&
          (_0xacfafa =
            _0x43f9b2[0] & 2
              ? _0x3a31e3.return
              : _0x43f9b2[0]
              ? _0x3a31e3.throw ||
                ((_0xacfafa = _0x3a31e3.return) && _0xacfafa.call(_0x3a31e3), 0)
              : _0x3a31e3.next) &&
          !(_0xacfafa = _0xacfafa.call(_0x3a31e3, _0x43f9b2[1])).done
        ) {
          return _0xacfafa;
        }
        _0x3a31e3 = 0;
        if (_0xacfafa) {
          _0x43f9b2 = [_0x43f9b2[0] & 2, _0xacfafa.value];
        }
        switch (_0x43f9b2[0]) {
          case 0:
          case 1:
            _0xacfafa = _0x43f9b2;
            break;
          case 4:
            _0x809fae.label++;
            var _0x22c222 = {
              value: _0x43f9b2[1],
              done: false,
            };
            return _0x22c222;
          case 5:
            _0x809fae.label++;
            _0x3a31e3 = _0x43f9b2[1];
            _0x43f9b2 = [0];
            continue;
          case 7:
            _0x43f9b2 = _0x809fae.ops.pop();
            _0x809fae.trys.pop();
            continue;
          default:
            if (
              !((_0xacfafa = _0x809fae.trys),
              (_0xacfafa =
                _0xacfafa.length > 0 && _0xacfafa[_0xacfafa.length - 1])) &&
              (_0x43f9b2[0] === 6 || _0x43f9b2[0] === 2)
            ) {
              _0x809fae = 0;
              continue;
            }
            if (
              _0x43f9b2[0] === 3 &&
              (!_0xacfafa ||
                (_0x43f9b2[1] > _0xacfafa[0] && _0x43f9b2[1] < _0xacfafa[3]))
            ) {
              _0x809fae.label = _0x43f9b2[1];
              break;
            }
            if (_0x43f9b2[0] === 6 && _0x809fae.label < _0xacfafa[1]) {
              _0x809fae.label = _0xacfafa[1];
              _0xacfafa = _0x43f9b2;
              break;
            }
            if (_0xacfafa && _0x809fae.label < _0xacfafa[2]) {
              _0x809fae.label = _0xacfafa[2];
              _0x809fae.ops.push(_0x43f9b2);
              break;
            }
            if (_0xacfafa[2]) {
              _0x809fae.ops.pop();
            }
            _0x809fae.trys.pop();
            continue;
        }
        _0x43f9b2 = _0x3d64d6.call(_0x2da96e, _0x809fae);
      } catch (_0x1af07b) {
        _0x43f9b2 = [6, _0x1af07b];
        _0x3a31e3 = 0;
      } finally {
        _0x44914c = _0xacfafa = 0;
      }
    }
    if (_0x43f9b2[0] & 5) {
      throw _0x43f9b2[1];
    }
    var _0x5e2977 = {
      value: _0x43f9b2[0] ? _0x43f9b2[1] : undefined,
      done: true,
    };
    return _0x5e2977;
  }
}
var additionalDataFetch = (function () {
  var _0x59c6da = rw(function () {
    return ww(this, function (_0x44d636) {
      return [2];
    });
  });
  return function _0x60a7a5() {
    return _0x59c6da.apply(this, arguments);
  };
})();
RegisterCommand(
  "allClothes",
  function () {
    allClothesFunc(true, false);
  },
  false
);
onNet("karma-clothing:firstCharacterMenu", function () {
  allClothesFunc(true, false);
});
onNet("qb-clothing:client:openBarberMenu", function () {
  openBarber(false);
});
onNet(
  "qb-clothing:client:openMenu",
  function (
    _0x24a22d = false,
    _0x396cc9 = false,
    _0x17bfe4 = false,
    _0x17c825 = "clothing"
  ) {
    openClothing(false, false, "clothing");
  }
);

onNet("qb-clothes:client:CreateFirstCharacter", function () {

  characterLoaded();
 
  TriggerEvent("qb-clothes:loadPlayerSkin",true);

  allClothesFunc(true, false);
});

onNet(
  "qb-clothing:client:openMenu",
  function (_0x3f37ef, _0x518b29, _0x345375 = false, _0x425500) {
    openClothing(false, false, "clothing");
  }
);

RegisterCommand(
  "recordClothes",
  (function () {
    var _0x2956aa = rw(function (_0x386200, _0x7d3cd3) {
      var _0x281c57;
      var _0x5c8dab;
      var _0xb6b9b3;
      return ww(this, function (_0x37eb52) {
        switch (_0x37eb52.label) {
          case 0:
            _0x281c57 = _0x7d3cd3[0];
            return [4, CameraHandler.start(_0x281c57)];
          case 1:
            _0x5c8dab = _0x37eb52.sent();
            if (!_0x5c8dab) {
              return [2];
            }
            switch (_0x281c57) {
              case "shoes":
                return [3, 2];
              case "pants":
                return [3, 4];
              case "jacket":
                return [3, 6];
              case "undershirt":
                return [3, 8];
              case "masks":
                return [3, 10];
              case "accessory":
                return [3, 12];
              case "kevlar":
                return [3, 14];
              case "bags":
                return [3, 16];
              case "hats":
                return [3, 18];
              case "glasses":
                return [3, 20];
              case "ears":
                return [3, 22];
              case "watches":
                return [3, 24];
              case "bracelets":
                return [3, 26];
              case "torso":
                return [3, 28];
              case "hair":
                return [3, 30];
              case "decals":
                return [3, 32];
              case "facialHair":
                return [3, 34];
              case "makeup":
                return [3, 36];
              case "blush":
                return [3, 38];
              case "lipstick":
                return [3, 40];
              case "blemishes":
                return [3, 42];
              case "ageing":
                return [3, 44];
              case "complexion":
                return [3, 46];
              case "sunDamage":
                return [3, 48];
              case "freckles":
                return [3, 50];
              case "chestHair":
                return [3, 52];
              case "bodyBlemishes":
                return [3, 54];
              case "addBodyBlemishes":
                return [3, 56];
              case "contacts":
                return [3, 58];
            }
            return [3, 60];
          case 2:
            return [4, yw(6)];
          case 3:
            _0x37eb52.sent();
            return [3, 61];
          case 4:
            return [4, yw(4)];
          case 5:
            _0x37eb52.sent();
            return [3, 61];
          case 6:
            return [4, yw(11)];
          case 7:
            _0x37eb52.sent();
            return [3, 61];
          case 8:
            return [4, yw(8)];
          case 9:
            _0x37eb52.sent();
            return [3, 61];
          case 10:
            return [4, yw(1)];
          case 11:
            _0x37eb52.sent();
            return [3, 61];
          case 12:
            return [4, yw(7)];
          case 13:
            _0x37eb52.sent();
            return [3, 61];
          case 14:
            return [4, yw(9)];
          case 15:
            _0x37eb52.sent();
            return [3, 61];
          case 16:
            _0xb6b9b3 = PlayerPedId();
            SetEntityHeading(_0xb6b9b3, 0);
            return [4, yw(5)];
          case 17:
            _0x37eb52.sent();
            return [3, 61];
          case 18:
            return [4, zw(0)];
          case 19:
            _0x37eb52.sent();
            return [3, 61];
          case 20:
            return [4, zw(1)];
          case 21:
            _0x37eb52.sent();
            return [3, 61];
          case 22:
            return [4, zw(2)];
          case 23:
            _0x37eb52.sent();
            return [3, 61];
          case 24:
            return [4, zw(6)];
          case 25:
            _0x37eb52.sent();
            return [3, 61];
          case 26:
            return [4, zw(7)];
          case 27:
            _0x37eb52.sent();
            return [3, 61];
          case 28:
            return [4, yw(3)];
          case 29:
            _0x37eb52.sent();
            return [3, 61];
          case 30:
            return [4, yw(2)];
          case 31:
            _0x37eb52.sent();
            return [3, 61];
          case 32:
            return [4, yw(10)];
          case 33:
            _0x37eb52.sent();
            return [3, 61];
          case 34:
            return [4, Bw(1)];
          case 35:
            _0x37eb52.sent();
            return [3, 61];
          case 36:
            return [4, Bw(4)];
          case 37:
            _0x37eb52.sent();
            return [3, 61];
          case 38:
            return [4, Bw(5)];
          case 39:
            _0x37eb52.sent();
            return [3, 61];
          case 40:
            return [4, Bw(8)];
          case 41:
            _0x37eb52.sent();
            return [3, 61];
          case 42:
            return [4, Bw(0)];
          case 43:
            _0x37eb52.sent();
            return [3, 61];
          case 44:
            return [4, Bw(3)];
          case 45:
            _0x37eb52.sent();
            return [3, 61];
          case 46:
            return [4, Bw(6)];
          case 47:
            _0x37eb52.sent();
            return [3, 61];
          case 48:
            return [4, Bw(7)];
          case 49:
            _0x37eb52.sent();
            return [3, 61];
          case 50:
            return [4, Bw(9)];
          case 51:
            _0x37eb52.sent();
            return [3, 61];
          case 52:
            return [4, Bw(10)];
          case 53:
            _0x37eb52.sent();
            return [3, 61];
          case 54:
            return [4, Bw(11)];
          case 55:
            _0x37eb52.sent();
            return [3, 61];
          case 56:
            return [4, Bw(12)];
          case 57:
            _0x37eb52.sent();
            return [3, 61];
          case 58:
            return [4, Aw(0)];
          case 59:
            _0x37eb52.sent();
            _0x37eb52.label = 60;
          case 60:
            return [3, 61];
          case 61:
            return [2];
        }
      });
    });
    return function (_0x3a98de, _0x2fa01a) {
      return _0x2956aa.apply(this, arguments);
    };
  })(),
  false
);
var yw = (function () {
  var _0x39dcf3 = rw(function (_0x8b3eb7) {
    var _0x45b320;
    var _0x50bad2;
    var _0x2b92de;
    return ww(this, function (_0x3071d6) {
      switch (_0x3071d6.label) {
        case 0:
          _0x45b320 = PlayerPedId();
          _0x50bad2 = GetNumberOfPedDrawableVariations(_0x45b320, _0x8b3eb7);
          _0x2b92de = 0;
          _0x3071d6.label = 1;
        case 1:
          if (_0x2b92de >= _0x50bad2) {
            return [3, 4];
          }
          SetPedComponentVariation(_0x45b320, _0x8b3eb7, _0x2b92de, 0, 0);
          return [4, KarmaDevelopmentUtil.wait(150)];
        case 2:
          _0x3071d6.sent();
          exports.screenshots.run(_0x2b92de, 125);
          _0x3071d6.label = 3;
        case 3:
          _0x2b92de++;
          return [3, 1];
        case 4:
          return [2];
      }
    });
  });
  return function _0x1249b1(_0x463f66) {
    return _0x39dcf3.apply(this, arguments);
  };
})();
var zw = (function () {
  var _0x209dc5 = rw(function (_0x449a84) {
    var _0x3ea007;
    var _0x36f194;
    var _0x552793;
    return ww(this, function (_0x3af9f2) {
      switch (_0x3af9f2.label) {
        case 0:
          _0x3ea007 = PlayerPedId();
          _0x36f194 = GetNumberOfPedPropDrawableVariations(
            _0x3ea007,
            _0x449a84
          );
          _0x552793 = 0;
          _0x3af9f2.label = 1;
        case 1:
          if (_0x552793 >= _0x36f194) {
            return [3, 4];
          }
          ClearPedProp(_0x3ea007, _0x449a84);
          SetPedPropIndex(_0x3ea007, _0x449a84, _0x552793, 0, true);
          return [4, KarmaDevelopmentUtil.wait(150)];
        case 2:
          _0x3af9f2.sent();
          exports.screenshots.run(_0x552793, 125);
          _0x3af9f2.label = 3;
        case 3:
          _0x552793++;
          return [3, 1];
        case 4:
          return [2];
      }
    });
  });
  return function _0x5ccc53(_0xd077a) {
    return _0x209dc5.apply(this, arguments);
  };
})();
var Aw = (function () {
  var _0x13642c = rw(function (_0x3f7cec) {
    var _0x227748;
    var _0x570ea8;
    var _0x34c2dd;
    var _0x2e66bc;
    var _0x32f7a6;
    var _0x3be771;
    var _0x4a970c;
    var _0x1a7d11;
    var _0x463c7f;
    var _0x1581fb;
    var _0x453650;
    var _0xa59733;
    var _0x3aed52;
    return ww(this, function (_0x492f66) {
      switch (_0x492f66.label) {
        case 0:
          return [4, RPC.execute("contacts:getContacts")];
        case 1:
          _0x227748 = _0x492f66.sent();
          _0x570ea8 = true;
          _0x34c2dd = false;
          _0x2e66bc = undefined;
          _0x492f66.label = 2;
        case 2:
          _0x492f66.trys.push([2, 8, 9, 10]);
          _0x32f7a6 = _0x227748.entries()[Symbol.iterator]();
          _0x492f66.label = 3;
        case 3:
          if ((_0x570ea8 = (_0x3be771 = _0x32f7a6.next()).done)) {
            return [3, 7];
          }
          _0x4a970c = uw(_0x3be771.value, 2);
          _0x1a7d11 = _0x4a970c[0];
          _0x463c7f = _0x4a970c[1];
          return [4, FiveMUtil.loadModel(_0x463c7f.npc.model)];
        case 4:
          _0x492f66.sent();
          SetPlayerModel(PlayerId(), _0x463c7f.npc.model);
          _0x1581fb = "gestures@m@standing@fat";
          _0x453650 = "gesture_hello";
          return [4, FiveMUtil.loadAnim(_0x1581fb)];
        case 5:
          _0x492f66.sent();
          _0xa59733 = PlayerPedId();
          TaskPlayAnim(
            _0xa59733,
            _0x1581fb,
            _0x453650,
            1000,
            8,
            -1,
            2,
            100,
            false,
            false,
            false
          );
          _0x492f66.label = 6;
        case 6:
          _0x570ea8 = true;
          return [3, 3];
        case 7:
          return [3, 10];
        case 8:
          _0x3aed52 = _0x492f66.sent();
          _0x34c2dd = true;
          _0x2e66bc = _0x3aed52;
          return [3, 10];
        case 9:
          try {
            if (!_0x570ea8 && _0x32f7a6.return != null) {
              _0x32f7a6.return();
            }
          } finally {
            if (_0x34c2dd) {
              throw _0x2e66bc;
            }
          }
          return [7];
        case 10:
          return [2];
      }
    });
  });
  return function _0x7c6ee3(_0x3b48e0) {
    return _0x13642c.apply(this, arguments);
  };
})();
var Bw = (function () {
  var _0x55d842 = rw(function (_0x172976) {
    var _0x4a1a33;
    var _0x19f3ea;
    var _0xa93565;
    return ww(this, function (_0x1d785b) {
      switch (_0x1d785b.label) {
        case 0:
          _0x4a1a33 = PlayerPedId();
          _0x19f3ea = GetNumHeadOverlayValues(_0x172976);
          _0xa93565 = 0;
          _0x1d785b.label = 1;
        case 1:
          if (_0xa93565 >= _0x19f3ea) {
            return [3, 4];
          }
          SetPedHeadOverlay(_0x4a1a33, _0x172976, _0xa93565, 1);
          return [4, KarmaDevelopmentUtil.wait(150)];
        case 2:
          _0x1d785b.sent();
          exports.screenshots.run(_0xa93565, 125);
          _0x1d785b.label = 3;
        case 3:
          _0xa93565++;
          return [3, 1];
        case 4:
          return [2];
      }
    });
  });
  return function _0x30895c(_0xeff099) {
    return _0x55d842.apply(this, arguments);
  };
})();
function initializeApp() {
  fetchDataz_();
  if (!Flagg) {
    return false;
  }
  additionalDataFetch();
}
initializeApp();
if (GetCurrentResourceName() === "karma-clothing") {
}
