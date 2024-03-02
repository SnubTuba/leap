"use strict";
(self["webpackChunkleap"] = self["webpackChunkleap"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "Pages": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _learn_fireball_learn_fireball_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learn-fireball/learn-fireball.component */ 7311);
/* harmony import */ var _heal_page_heal_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heal-page/heal-page.component */ 9167);
/* harmony import */ var _unlock_page_unlock_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unlock-page/unlock-page.component */ 7712);
/* harmony import */ var _gale_page_gale_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gale-page/gale-page.component */ 5076);
/* harmony import */ var _minimize_page_minimize_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minimize-page/minimize-page.component */ 9899);
/* harmony import */ var _combat_page_combat_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combat-page/combat-page.component */ 4865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










var Pages;
(function (Pages) {
  Pages["Heal"] = "heal-page";
  Pages["Unlock"] = "unlock-page";
  Pages["LearnFireball"] = "learn-fireball";
  Pages["Gale"] = "gale-page";
  Pages["Home"] = "";
  Pages["Minimize"] = "minimize-page";
  Pages["Combat"] = "combat-page";
})(Pages || (Pages = {}));
const routes = [{
  path: Pages.Unlock,
  component: _unlock_page_unlock_page_component__WEBPACK_IMPORTED_MODULE_3__.UnlockPageComponent
}, {
  path: Pages.LearnFireball,
  component: _learn_fireball_learn_fireball_component__WEBPACK_IMPORTED_MODULE_1__.LearnFireballComponent
}, {
  path: Pages.Heal,
  component: _heal_page_heal_page_component__WEBPACK_IMPORTED_MODULE_2__.HealComponent
}, {
  path: Pages.Gale,
  component: _gale_page_gale_page_component__WEBPACK_IMPORTED_MODULE_4__.GalePageComponent
}, {
  path: Pages.Minimize,
  component: _minimize_page_minimize_page_component__WEBPACK_IMPORTED_MODULE_5__.MinimizePageComponent
}, {
  path: Pages.Combat,
  component: _combat_page_combat_page_component__WEBPACK_IMPORTED_MODULE_6__.CombatPageComponent
}, {
  path: Pages.Home,
  component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _heal_page_heal_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heal-page/heal-page.component */ 9167);
/* harmony import */ var _learn_fireball_learn_fireball_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn-fireball/learn-fireball.component */ 7311);
/* harmony import */ var _unlock_page_unlock_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unlock-page/unlock-page.component */ 7712);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spell-button/spell-button.component */ 9896);
/* harmony import */ var _gale_page_gale_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gale-page/gale-page.component */ 5076);
/* harmony import */ var _minimize_page_minimize_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./minimize-page/minimize-page.component */ 9899);
/* harmony import */ var _combat_page_combat_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combat-page/combat-page.component */ 4865);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 3369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);













class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent, _heal_page_heal_page_component__WEBPACK_IMPORTED_MODULE_3__.HealComponent, _learn_fireball_learn_fireball_component__WEBPACK_IMPORTED_MODULE_4__.LearnFireballComponent, _unlock_page_unlock_page_component__WEBPACK_IMPORTED_MODULE_5__.UnlockPageComponent, _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_6__.SpellButtonComponent, _gale_page_gale_page_component__WEBPACK_IMPORTED_MODULE_7__.GalePageComponent, _minimize_page_minimize_page_component__WEBPACK_IMPORTED_MODULE_8__.MinimizePageComponent, _combat_page_combat_page_component__WEBPACK_IMPORTED_MODULE_9__.CombatPageComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__.ProgressBarComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7398:
/*!***************************************************!*\
  !*** ./src/app/combat-page/combat-log.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombatLogService": () => (/* binding */ CombatLogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CombatLogService {
  constructor() {
    this.combatLog = [];
  }
  addLine(line) {
    this.combatLog.unshift(line);
  }
  clear() {
    this.combatLog = [];
  }
}
CombatLogService.ɵfac = function CombatLogService_Factory(t) {
  return new (t || CombatLogService)();
};
CombatLogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CombatLogService,
  factory: CombatLogService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4865:
/*!******************************************************!*\
  !*** ./src/app/combat-page/combat-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CombatPageComponent": () => (/* binding */ CombatPageComponent)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ 5667);
/* harmony import */ var _encounter_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encounter-table.service */ 6170);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _combat_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combat-log.service */ 7398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spell-button/spell-button.component */ 9896);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 3369);










function CombatPageComponent_div_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_1_div_12_div_1_Template_app_spell_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.attackAction(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const monster_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "assets/sprites/" + monster_r8.name + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r10.selectedActon === "attack" ? "Attack" : "Cast", " ");
  }
}
function CombatPageComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CombatPageComponent_div_1_div_12_div_1_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const monster_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(monster_r8.hp <= 0));
  }
}
function CombatPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-progress-bar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CombatPageComponent_div_1_div_12_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 11)(14, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_1_Template_app_spell_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.attackBtn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_1_Template_app_spell_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.spellBtn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Spell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "app-spell-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " ??? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_1_Template_app_spell_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.confirmRun());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Your Level: ", ctx_r0.player.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.player.hp, " / ", ctx_r0.player.maxHp, " Player health");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("percent", ctx_r0.player.hp / ctx_r0.player.maxHp * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.player.mp, " / ", ctx_r0.player.maxMp, " Player mp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("percent", ctx_r0.player.mp / ctx_r0.player.maxMp * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Selected Spell: ", ctx_r0.selectedSpell == null ? null : ctx_r0.selectedSpell.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.monsters);
  }
}
function CombatPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "YOU DIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_3_Template_app_spell_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.returnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Return Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CombatPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "YOU WIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_5_Template_app_spell_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.returnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Return Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CombatPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "ERROR");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_7_Template_app_spell_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.returnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Return Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CombatPageComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CombatPageComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "app-spell-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CombatPageComponent_div_11_div_1_Template_app_spell_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const spell_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.selectSpell(spell_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spell_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", spell_r26.name, " ");
  }
}
function CombatPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CombatPageComponent_div_11_div_1_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.unlocksService.getUnlockedSpells());
  }
}
function CombatPageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const log_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](log_r29);
  }
}
class CombatPageComponent {
  constructor(router, player, activatedRoute, encounterTableService, unlocksService, combatLogService) {
    this.router = router;
    this.player = player;
    this.activatedRoute = activatedRoute;
    this.encounterTableService = encounterTableService;
    this.unlocksService = unlocksService;
    this.combatLogService = combatLogService;
    this.gameState = 'loading';
    this.selectedActon = 'attack';
    this.selectedSpell = this.unlocksService.getUnlockedSpells()[0];
    this.monsters = [];
    this.startingMonsters = [];
    this.combatLogService.clear();
    this.player.reset();
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const encounterNumber = queryParams['encounter'];
      if (encounterNumber === undefined) {
        this.gameState = 'error';
        throw new Error('No Envounter Error');
      }
      this.monsters = this.encounterTableService.getEncounter(+encounterNumber);
      this.startingMonsters = [...this.monsters];
      this.gameState = 'fighting';
      if (queryParams['playerLevel']) {
        this.player.setLevel(queryParams['playerLevel']);
      }
    });
  }
  attackAction(monsterIndex) {
    const monster = this.monsters[monsterIndex];
    if (this.selectedActon === 'attack') {
      const dmgDealt = monster.takeDamage(this.player.damage);
      this.combatLogService.addLine(`You deal ${dmgDealt} damage to ${monster.name}`);
    }
    if (this.selectedActon === 'spell' && this.selectedSpell) {
      const log = this.castSpell(monster, this.selectedSpell);
      this.combatLogService.addLine(log);
    }
    this.postActionPhase();
  }
  postActionPhase() {
    this.monsters = this.monsters.filter(monster => !monster.isDefeated());
    this.monsters.forEach(monster => {
      const log = monster.takeAction(this.monsters);
      this.combatLogService.addLine(log);
    });
    if (this.player.hp <= 0) {
      this.gameState = 'lost';
    }
    if (this.monsters.length === 0) {
      this.player.levelUp();
      this.combatLogService.addLine('You win and level up gaining 10 hp, 3 mp, and 3 attack.');
      this.gameState = 'win';
      this.startingMonsters.forEach(monster => monster.reward());
    }
  }
  castSpell(monster, spell) {
    if (this.player.mp < spell.mpCost) {
      return `You try to cast ${spell.name}, but you dont have enough mp`;
    }
    this.player.mp -= spell.mpCost;
    return spell.action(monster, this.monsters);
  }
  attackBtn() {
    this.selectedActon = 'attack';
  }
  spellBtn() {
    this.gameState = 'selectingSpell';
  }
  confirmRun() {
    const result = confirm('Do you wish to run?');
    if (result == true) {
      this.router.navigateByUrl(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home);
    }
  }
  selectSpell(spell) {
    if (spell.target === 'self' || spell.target === 'all') {
      const log = this.castSpell(this.monsters[0], spell);
      this.combatLogService.addLine(log);
      this.gameState = 'fighting';
      this.postActionPhase();
      return;
    }
    this.selectedSpell = spell;
    this.selectedActon = 'spell';
    this.gameState = 'fighting';
  }
  returnHome() {
    this.router.navigateByUrl('');
  }
}
CombatPageComponent.ɵfac = function CombatPageComponent_Factory(t) {
  return new (t || CombatPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_encounter_table_service__WEBPACK_IMPORTED_MODULE_2__.EncounterTableService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_3__.UnlocksService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_combat_log_service__WEBPACK_IMPORTED_MODULE_4__.CombatLogService));
};
CombatPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CombatPageComponent,
  selectors: [["app-combat-page"]],
  decls: 15,
  vars: 7,
  consts: [[1, "flex", "flex-col", "justify-items-center", "text-center", "bg-black", "text-white", "h-full", "justify-stretch"], ["class", "flex flex-col justify-items-center text-center px-5", 4, "ngIf"], [4, "ngIf"], ["class", "my-2", 4, "ngIf"], [1, "border-gray-500", "border-solid", "border-t-2", "border-spacing-6", "overflow-scroll"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "justify-items-center", "text-center", "px-5"], [3, "percent"], ["barColor", "bg-blue-500", 3, "percent"], [1, "flex", "flex-row", "justify-center"], ["class", "flex flex-col", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "grid-rows-2", "grid-flow-col"], ["bgColor", "bg-blue-500", 3, "click"], ["bgColor", "bg-blue-500"], [1, "flex", "flex-col"], ["class", "flex flex-col items-center", 4, "ngIf"], [1, "flex", "flex-col", "items-center"], ["alt", "monster image", 1, "mb-1", "flex", 2, "height", "100px", "width", "100px", 3, "src"], [1, "font-normal", "text-sm"], [1, "text-6xl", "text-red-800"], [1, "text-6xl", "text-yellow-600"], [1, "my-2"]],
  template: function CombatPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CombatPageComponent_div_1_Template, 22, 9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CombatPageComponent_div_3_Template, 5, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CombatPageComponent_div_5_Template, 5, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CombatPageComponent_div_7_Template, 5, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CombatPageComponent_p_9_Template, 2, 0, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CombatPageComponent_div_11_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Combat Log ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, CombatPageComponent_div_14_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "fighting");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "lost");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "win");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.gameState === "selectingSpell");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.combatLogService.combatLog);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_5__.SpellButtonComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__.ProgressBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21iYXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tYmF0LXBhZ2UvY29tYmF0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6170:
/*!********************************************************!*\
  !*** ./src/app/combat-page/encounter-table.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterTableService": () => (/* binding */ EncounterTableService)
/* harmony export */ });
/* harmony import */ var _monsters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monsters */ 8612);
/* harmony import */ var _utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-random-number-arbitrary */ 4397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 5667);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _combat_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combat-log.service */ 7398);






class EncounterTableService {
  constructor(playerService, unlocksService, combatLogService) {
    this.playerService = playerService;
    this.unlocksService = unlocksService;
    this.combatLogService = combatLogService;
  }
  getEncounter(encounterNumber) {
    const possibleEncounters = this.getPossibleEncounters(encounterNumber);
    const encounterTodo = Math.round((0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberArbitrary)(0, possibleEncounters.length - 1));
    return possibleEncounters[encounterTodo];
  }
  getPossibleEncounters(encounterNumber) {
    switch (encounterNumber) {
      case 1:
        return [[this.imp(), this.imp(), this.imp()]];
      case 2:
        return [[this.imp(), this.imp(), this.imp()], [this.slime(), this.slime()]];
      case 3:
        return [[this.slime(), this.slime(), this.slime()], [this.skeleton()]];
      case 4:
        return [[this.slime(), this.skeleton(), this.slime()], [this.skeleton(), this.skeleton(), this.skeleton()]];
      case 5:
        return [[this.slime(), this.slime(), this.slime()], [this.skeleton(), this.skeleton(), this.skeleton()], [this.scorpion()]];
      case 6:
        return [[this.slime(), this.scorpion(), this.slime()], [this.skeleton(), this.scorpion(), this.skeleton()], [this.dragon()]];
      case 7:
        return [[this.slime(), this.scorpion(), this.skeleton()], [this.skeleton(), this.skeleton(), this.skeleton()], [this.scorpion(), this.scorpion()]];
      case 8:
        return [[this.slime(), this.dragon(), this.slime()], [this.skeleton(), this.skeleton(), this.skeleton()], [this.scorpion(), this.scorpion()], [this.dragon()]];
      case 9:
        return [[this.skeleton(), this.scorpion(), this.skeleton()], [this.scorpion(), this.dragon(), this.scorpion()], [this.dragon(), this.dragon()]];
      case 89:
        return [[new _monsters__WEBPACK_IMPORTED_MODULE_0__.Golem(this.playerService, this.unlocksService, this.combatLogService)]];
      case 404:
        return [[new _monsters__WEBPACK_IMPORTED_MODULE_0__.King(this.playerService, this.unlocksService, this.combatLogService)]];
      case 99:
        return [[new _monsters__WEBPACK_IMPORTED_MODULE_0__.Firebird(this.playerService, this.unlocksService, this.combatLogService), new _monsters__WEBPACK_IMPORTED_MODULE_0__.Icebird(this.playerService, this.unlocksService, this.combatLogService)]];
      case 100:
        return [[new _monsters__WEBPACK_IMPORTED_MODULE_0__.Queen(this.playerService, this.unlocksService, this.combatLogService)]];
      case 999:
        return [[new _monsters__WEBPACK_IMPORTED_MODULE_0__.DemonLord(this.playerService, this.unlocksService, this.combatLogService)]];
      default:
        throw new Error('No Encounter Found for that number');
    }
  }
  imp() {
    return new _monsters__WEBPACK_IMPORTED_MODULE_0__.Imp(this.playerService, this.unlocksService, this.combatLogService);
  }
  slime() {
    return new _monsters__WEBPACK_IMPORTED_MODULE_0__.Slime(this.playerService, this.unlocksService, this.combatLogService);
  }
  skeleton() {
    return new _monsters__WEBPACK_IMPORTED_MODULE_0__.Skeleton(this.playerService, this.unlocksService, this.combatLogService);
  }
  scorpion() {
    return new _monsters__WEBPACK_IMPORTED_MODULE_0__.Scorpion(this.playerService, this.unlocksService, this.combatLogService);
  }
  dragon() {
    return new _monsters__WEBPACK_IMPORTED_MODULE_0__.Dragon(this.playerService, this.unlocksService, this.combatLogService);
  }
}
EncounterTableService.ɵfac = function EncounterTableService_Factory(t) {
  return new (t || EncounterTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_3__.UnlocksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_combat_log_service__WEBPACK_IMPORTED_MODULE_4__.CombatLogService));
};
EncounterTableService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: EncounterTableService,
  factory: EncounterTableService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8612:
/*!*****************************************!*\
  !*** ./src/app/combat-page/monsters.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemonLord": () => (/* binding */ DemonLord),
/* harmony export */   "Dragon": () => (/* binding */ Dragon),
/* harmony export */   "Firebird": () => (/* binding */ Firebird),
/* harmony export */   "Golem": () => (/* binding */ Golem),
/* harmony export */   "Icebird": () => (/* binding */ Icebird),
/* harmony export */   "Imp": () => (/* binding */ Imp),
/* harmony export */   "King": () => (/* binding */ King),
/* harmony export */   "Monster": () => (/* binding */ Monster),
/* harmony export */   "Queen": () => (/* binding */ Queen),
/* harmony export */   "Scorpion": () => (/* binding */ Scorpion),
/* harmony export */   "Skeleton": () => (/* binding */ Skeleton),
/* harmony export */   "Slime": () => (/* binding */ Slime)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells */ 6625);
/* harmony import */ var _utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-random-number-arbitrary */ 4397);


class Monster {
  constructor(playerService, unlocksService, combatLogService) {
    this.playerService = playerService;
    this.unlocksService = unlocksService;
    this.combatLogService = combatLogService;
    this.statuses = [];
    this.isDefeated = () => {
      return this.hp <= 0;
    };
    this.takeDamage = ammounOfDamage => {
      return this.takeDamageHelper(ammounOfDamage);
    };
    this.takeDamageHelper = ammounOfDamage => {
      if (this.statuses.includes('minimized')) {
        ammounOfDamage = Math.floor(ammounOfDamage * 1.5);
      }
      this.hp -= ammounOfDamage;
      return ammounOfDamage;
    };
  }
  giveStatus(status) {
    this.statuses.push(status);
  }
}
class Imp extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Imp';
    this.hp = 8;
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(5, this);
      return `${this.name} attacks you for ${damageTaken} damage`;
    };
    this.reward = () => {};
  }
}
class Slime extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Slime';
    this.hp = 10;
    this.takeAction = () => {
      this.combatLogService.addLine('Slime casts Thwack');
      const oneThoughOneHundred = (0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberArbitrary)(0, 100);
      if (oneThoughOneHundred > 50) {
        const returnValue = this.playerService.hp < 0 ? `Your already dead` : `You die`;
        this.playerService.takeDamage(99999, this);
        return returnValue;
      }
      return `Thwack misses`;
    };
    this.reward = () => {};
  }
}
class Skeleton extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Skeleton';
    this.hp = 40;
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(10, this);
      return `${this.name} attacks you for ${damageTaken} damage`;
    };
    this.reward = () => {};
  }
}
class Scorpion extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Scorpion';
    this.hp = 20;
    this.takeDamage = ammounOfDamage => {
      this.combatLogService.addLine(`Scorpion's thick armor reduces the damage by 20`);
      let dmgToDeal = ammounOfDamage - 20;
      if (dmgToDeal < 0) {
        dmgToDeal = 0;
      }
      return this.takeDamageHelper(dmgToDeal);
    };
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(20, this);
      return `${this.name} attacks you for ${damageTaken} damage`;
    };
    this.reward = () => {};
  }
}
class Dragon extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Dragon';
    this.hp = 60;
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(28, this);
      return `${this.name} attacks you for ${damageTaken} damage`;
    };
    this.reward = () => {};
  }
}
class Golem extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Golem';
    this.hp = 160;
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(20, this);
      return `${this.name} attacks you for ${damageTaken} damage`;
    };
    this.reward = () => {
      this.unlocksService.unlock(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.StoneDefence.name);
    };
  }
}
class King extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'King';
    this.hp = 160;
    this.turnsCharging = 0;
    this.takeAction = () => {
      if (this.turnsCharging >= 5) {
        this.playerService.takeDamage(99999, this);
        return `The king chops off your head with a mighty swing`;
      }
      this.turnsCharging++;
      return `King charges up a massive attack`;
    };
    this.reward = () => {
      this.unlocksService.unlock(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.ChargeAttack.name);
    };
  }
}
class Firebird extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Firebird';
    this.hp = 90;
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(30, this);
      return `${this.name} throws a fireball at you for ${damageTaken} damage`;
    };
    this.reward = () => {
      this.unlocksService.unlock(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Fireball.name);
      this.unlocksService.unlock(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Icebeam.name);
    };
  }
}
class Icebird extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Icebird';
    this.hp = 45;
    this.takeDamage = ammounOfDamage => {
      this.combatLogService.addLine(`Icebird's ice armor reduces the damage by 30`);
      let dmgToDeal = ammounOfDamage - 30;
      if (dmgToDeal < 0) {
        dmgToDeal = 0;
      }
      return this.takeDamageHelper(dmgToDeal);
    };
    this.takeAction = () => {
      const damageTaken = this.playerService.takeDamage(10, this);
      return `${this.name} shoots an icebeam at you for ${damageTaken} damage`;
    };
    this.reward = () => {};
  }
}
class Queen extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Queen';
    this.hp = 400;
    this.calledForHelp = false;
    this.takeAction = monsters => {
      if (this.calledForHelp) {
        this.calledForHelp = false;
        monsters.push(this.slime());
        monsters.unshift(this.slime());
        return `Help shows up`;
      }
      if (monsters.length === 1 && (0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberArbitrary)(0, 100) > 50) {
        this.calledForHelp = true;
        return `The Queen calls for help`;
      }
      const damageTaken = this.playerService.takeDamage(50, this);
      return `${this.name} bops you for ${damageTaken} damage`;
    };
    this.reward = () => {
      this.unlocksService.unlock(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.BlindingLight.name);
    };
  }
  slime() {
    return new Slime(this.playerService, this.unlocksService, this.combatLogService);
  }
}
class DemonLord extends Monster {
  constructor() {
    super(...arguments);
    this.name = 'Demon Lord';
    this.hp = 999999;
    this.calledForHelp = false;
    this.takeAction = monsters => {
      if (this.calledForHelp) {
        this.calledForHelp = false;
        monsters.push(this.dragon());
        return `Help shows up`;
      }
      if (monsters.length === 1 && (0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberArbitrary)(0, 100) > 90) {
        this.calledForHelp = true;
        return `The Demon Lord calls for help`;
      }
      const damageTaken = this.playerService.takeDamage(50, this);
      return `${this.name} slashes you for ${damageTaken} damage`;
    };
    this.reward = () => {
      alert('You defeated the Demon Lord. Show this alert to the Queen or King');
    };
  }
  dragon() {
    return new Dragon(this.playerService, this.unlocksService, this.combatLogService);
  }
}

/***/ }),

/***/ 5667:
/*!***********************************************!*\
  !*** ./src/app/combat-page/player.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerService": () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var _utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-random-number-arbitrary */ 4397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _combat_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat-log.service */ 7398);



class PlayerService {
  constructor(combatLogService) {
    this.combatLogService = combatLogService;
    this.level = +(localStorage.getItem('playerLevel') || '1');
    this.damage = this.level * 3 + 2;
    this.maxHp = this.level * 10 + 40;
    this.maxMp = this.level * 3 + 12;
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.statuses = [];
  }
  reset() {
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.statuses = [];
  }
  levelUp() {
    this.level++;
    localStorage.setItem('playerLevel', this.level.toString());
    this.maxHp += 10;
    this.damage += 3;
    this.maxMp += 3;
  }
  setLevel(level) {
    this.level = level;
    this.damage = this.level * 3 + 2;
    this.maxHp = this.level * 10 + 40;
    this.maxMp = this.level * 3 + 12;
    this.hp = this.maxHp;
    this.mp = this.maxMp;
  }
  takeDamage(ammountOfDamage, attackingMonster) {
    if (this.statuses.includes('stoneDefence')) {
      ammountOfDamage = Math.floor(ammountOfDamage * 0.5);
    }
    if (attackingMonster.statuses.includes('blinded') && (0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_0__.getRandomNumberArbitrary)(0, 100) < 30) {
      this.combatLogService.addLine(`${attackingMonster.name} misses because its blinded`);
      return 0;
    }
    this.hp -= ammountOfDamage;
    return ammountOfDamage;
  }
  giveStatus(status) {
    this.statuses.push(status);
  }
  removeStatus(status) {
    const index = this.statuses.indexOf(status);
    if (index > -1) {
      this.statuses.splice(index, 1);
    }
  }
}
PlayerService.ɵfac = function PlayerService_Factory(t) {
  return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_combat_log_service__WEBPACK_IMPORTED_MODULE_1__.CombatLogService));
};
PlayerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PlayerService,
  factory: PlayerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5076:
/*!**************************************************!*\
  !*** ./src/app/gale-page/gale-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalePageComponent": () => (/* binding */ GalePageComponent)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells */ 6625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spell-button/spell-button.component */ 9896);






function GalePageComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 4);
  }
}
class GalePageComponent {
  constructor(unlocksService) {
    this.unlocksService = unlocksService;
  }
  isGaleUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Gale);
  }
}
GalePageComponent.ɵfac = function GalePageComponent_Factory(t) {
  return new (t || GalePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_1__.UnlocksService));
};
GalePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GalePageComponent,
  selectors: [["app-gale-page"]],
  decls: 8,
  vars: 1,
  consts: [[1, "flex", "flex-col", "text-center", "align-middle", "justify-center", "mx-2"], [1, "text-3xl"], ["src", "assets/questionBlock.png", "alt", "Question Mark", "class", "my-4", 4, "ngIf"], ["bgColor", "bg-gray-900", "routerLink", ""], ["src", "assets/questionBlock.png", "alt", "Question Mark", 1, "my-4"]],
  template: function GalePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Gale");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Many spells are good for fighting one target. But you need something that can hit many creatures at once. Try looking for a wind sprite that can teach you Gale! Wind sprites tend to like things that move around a lot. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GalePageComponent_img_5_Template, 1, 0, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-spell-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Back to Spellbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isGaleUnlocked());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__.SpellButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FsZS1wYWdlL2dhbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9167:
/*!**************************************************!*\
  !*** ./src/app/heal-page/heal-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealComponent": () => (/* binding */ HealComponent)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells */ 6625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spell-button/spell-button.component */ 9896);






function HealComponent_div_3_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 14);
  }
}
function HealComponent_div_3_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 15);
  }
}
function HealComponent_div_3_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
}
function HealComponent_div_3_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
  }
}
function HealComponent_div_3_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 18);
  }
}
function HealComponent_div_3_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 19);
  }
}
function HealComponent_div_3_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 20);
  }
}
function HealComponent_div_3_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
  }
}
function HealComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Feeling tired after your battle, you stop by the healer's building to restore your health. A friendly woman working over a large cauldron greets you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \"Hello, warrior! I hear you're going to fight the Demonlord for us. I can heal you here, but I think it'd be better if you learned a spell to heal yourself in battle. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " However, I've been busy making potions to send to the armies on the frontlines too and haven't had a chance to restock my supply. Could you find me these ingredients, please? I can teach you the spell after. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Here are the ingredients I need.\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HealComponent_div_3_img_10_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HealComponent_div_3_img_11_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HealComponent_div_3_img_12_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HealComponent_div_3_img_13_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HealComponent_div_3_img_14_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HealComponent_div_3_img_15_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, HealComponent_div_3_img_16_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, HealComponent_div_3_img_17_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isMushroomUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isMushroomUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isGingerRootUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isGingerRootUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isChamomileUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isChamomileUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLavenderUnlocked());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLavenderUnlocked());
  }
}
const _c0 = function () {
  return {
    thingtounlock: "Heal"
  };
};
function HealComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "The woman is delighted to see you return with the ingredients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \"Thank you, this will go a long way to helping our soldiers on the frontlines.\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \"Here is the incantation for the spell. May it prove handy should you need it.\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "app-spell-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Unlock the heal spell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
class HealComponent {
  constructor(unlocksService) {
    this.unlocksService = unlocksService;
  }
  isMushroomUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Mushroom);
  }
  isGingerRootUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.GingerRoot);
  }
  isChamomileUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Chamomile);
  }
  isLavenderUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Lavender);
  }
  shouldChangeLayout() {
    return this.isChamomileUnlocked() && this.isGingerRootUnlocked() && this.isLavenderUnlocked() && this.isMushroomUnlocked();
  }
}
HealComponent.ɵfac = function HealComponent_Factory(t) {
  return new (t || HealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_1__.UnlocksService));
};
HealComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HealComponent,
  selectors: [["app-heal-page"]],
  decls: 8,
  vars: 2,
  consts: [[1, "flex", "flex-col", "text-center", "align-middle", "mx-1"], [1, "text-3xl"], [4, "ngIf"], [1, "my-2"], ["bgColor", "bg-gray-900", "routerLink", ""], [1, "flex", "flex-row", "w-full", "flex-wrap", "justify-center"], ["src", "assets/redMushroomCropBW.jpg", "alt", "Red Mushroom", "style", "height: 200px", 4, "ngIf"], ["src", "assets/redMushroomCrop.jpg", "alt", "Red Mushroom", "style", "height: 200px", 4, "ngIf"], ["src", "assets/gingerRootBW.PNG", "alt", "Ginger Root", "style", "height: 200px", 4, "ngIf"], ["src", "assets/gingerRoot.PNG", "alt", "Ginger Root", "style", "height: 200px", 4, "ngIf"], ["src", "assets/chamomileCropBW.jpg", "alt", "Chamomile", "style", "height: 200px", 4, "ngIf"], ["src", "assets/chamomileCrop.jpg", "alt", "Chamomile", "style", "height: 200px", 4, "ngIf"], ["src", "assets/lavenderCropBW.jpg", "alt", "Lavender", "style", "height: 200px", 4, "ngIf"], ["src", "assets/lavenderCrop.jpg", "alt", "Lavender", "style", "height: 200px", 4, "ngIf"], ["src", "assets/redMushroomCropBW.jpg", "alt", "Red Mushroom", 2, "height", "200px"], ["src", "assets/redMushroomCrop.jpg", "alt", "Red Mushroom", 2, "height", "200px"], ["src", "assets/gingerRootBW.PNG", "alt", "Ginger Root", 2, "height", "200px"], ["src", "assets/gingerRoot.PNG", "alt", "Ginger Root", 2, "height", "200px"], ["src", "assets/chamomileCropBW.jpg", "alt", "Chamomile", 2, "height", "200px"], ["src", "assets/chamomileCrop.jpg", "alt", "Chamomile", 2, "height", "200px"], ["src", "assets/lavenderCropBW.jpg", "alt", "Lavender", 2, "height", "200px"], ["src", "assets/lavenderCrop.jpg", "alt", "Lavender", 2, "height", "200px"], ["bgColor", "bg-gray-900", "routerLink", "/unlock-page", 1, "my-2", 3, "queryParams"]],
  template: function HealComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Heal");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HealComponent_div_3_Template, 18, 8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HealComponent_div_4_Template, 10, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "app-spell-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Back to Spellbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.shouldChangeLayout());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shouldChangeLayout());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__.SpellButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhbC1wYWdlL2hlYWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5079:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells */ 6625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _combat_page_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combat-page/player.service */ 5667);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spell-button/spell-button.component */ 9896);






class HomePageComponent {
  constructor(unlocksService, router, playerService) {
    this.unlocksService = unlocksService;
    this.router = router;
    this.playerService = playerService;
  }
  magicMissileConfirm() {
    alert('Magic Missile does random damage to one target');
  }
  healButtonClicked() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Heal)) {
      alert('Heal restores a portion of your health.');
    } else {
      this.router.navigateByUrl('heal-page');
    }
  }
  galeButtonClicked() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Gale)) {
      alert('Gale is a spell that damages multiple targets.');
    } else {
      this.router.navigateByUrl('gale-page');
    }
  }
  minimizeButtonClicked() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Minimize)) {
      alert('Minimize makes your target smaller causing them to take more damage.');
    } else {
      this.router.navigateByUrl('minimize-page');
    }
  }
  stoneDefenseConfirm() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.StoneDefence)) {
      return alert('Stone Defence makes you take less damage');
    }
    const confirmed = confirm('You need to defeat a powerful foe for this spell. Are you ready?');
    if (confirmed) {
      this.router.navigateByUrl('combat-page?encounter=89');
    }
  }
  chargeAttackConfirm() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.ChargeAttack)) {
      return alert('Charge Attack takes an extra turn, but deals massive damage');
    }
    alert('Find the King to learn charge attack');
  }
  fireballConfirm() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.Fireball)) {
      return alert('Fireball does damage to one foe. Icebeam does damage to all foes.');
    }
    const confirmed = confirm('You need to defeat a powerful foe for this spell. Are you ready?');
    if (confirmed) {
      this.router.navigateByUrl('combat-page?encounter=99');
    }
  }
  blindingLightConfirm() {
    if (this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.BlindingLight)) {
      return alert('Blinding Light blinds all enemies causing them to sometimes miss.');
    }
    alert('Find the Queen to learn BlindingLight');
  }
  demonlordConfirm() {
    const spellsUnlocked = this.unlocksService.getUnlockedSpells().length;
    if (spellsUnlocked <= 6) {
      return alert('You can only fight the Demonlord when you have 6 spells unlocked!');
    }
    const confirmed = confirm('Are you ready to fight the demonlord?');
    if (confirmed) {
      this.router.navigateByUrl('combat-page?encounter=999');
    }
  }
  combatButtonClicked() {
    const unlockedSpellsCount = this.unlocksService.getUnlockedSpells().length;
    const playerLevel = this.playerService.level;
    if (playerLevel >= unlockedSpellsCount * 2) {
      alert(`Your level (${playerLevel}) is 2x your number of spells (${unlockedSpellsCount}), Learn more spells to level up`);
      return;
    }
    this.router.navigateByUrl(`combat-page?encounter=${this.unlocksService.getUnlockedSpells().length}`);
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_1__.UnlocksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_combat_page_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService));
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 25,
  vars: 0,
  consts: [[1, "flex", "flex-col"], [1, "text-3xl", "font-bold", "underline", "flex", "flex-col", "text-center", "pb-2"], ["bgColor", "bg-purple-700", 3, "click"], ["bgColor", "bg-green-700", 3, "click"], ["bgColor", "bg-green-400", 3, "click"], ["bgColor", "bg-orange-700", 3, "click"], ["bgColor", "bg-amber-900", 3, "click"], ["bgColor", "bg-indigo-800", 3, "click"], ["bgColor", "bg-red-600", 1, "btn", "btn-danger", 3, "click"], ["bgColor", "bg-sky-500", 1, "btn", "btn-info", 3, "click"], ["bgColor", "bg-yellow-400", 3, "click"], ["bgColor", "bg-gray-900", 3, "click"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Spellbook ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-spell-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_3_listener() {
        return ctx.magicMissileConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Magic Missile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-spell-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_5_listener() {
        return ctx.healButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Heal");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-spell-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_7_listener() {
        return ctx.galeButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Gale");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-spell-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_9_listener() {
        return ctx.minimizeButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Minimize");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-spell-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_11_listener() {
        return ctx.stoneDefenseConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Stone Defense ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "app-spell-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_13_listener() {
        return ctx.chargeAttackConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Charge Attack ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "app-spell-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_15_listener() {
        return ctx.fireballConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Fireball");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "app-spell-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_17_listener() {
        return ctx.fireballConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Icebeam");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "app-spell-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_19_listener() {
        return ctx.blindingLightConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Blinding Light ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "app-spell-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_21_listener() {
        return ctx.combatButtonClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Fight monsters\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "app-spell-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_app_spell_button_click_23_listener() {
        return ctx.demonlordConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Fight Demonlord\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_3__.SpellButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7311:
/*!************************************************************!*\
  !*** ./src/app/learn-fireball/learn-fireball.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearnFireballComponent": () => (/* binding */ LearnFireballComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LearnFireballComponent {}
LearnFireballComponent.ɵfac = function LearnFireballComponent_Factory(t) {
  return new (t || LearnFireballComponent)();
};
LearnFireballComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LearnFireballComponent,
  selectors: [["app-learn-fireball"]],
  decls: 2,
  vars: 0,
  template: function LearnFireballComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "learn-fireball works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFybi1maXJlYmFsbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVhcm4tZmlyZWJhbGwvbGVhcm4tZmlyZWJhbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9899:
/*!**********************************************************!*\
  !*** ./src/app/minimize-page/minimize-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinimizePageComponent": () => (/* binding */ MinimizePageComponent)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells */ 6625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unlocks.service */ 8323);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spell-button/spell-button.component */ 9896);






function MinimizePageComponent_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 7);
  }
}
function MinimizePageComponent_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 8);
  }
}
function MinimizePageComponent_img_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 7);
  }
}
function MinimizePageComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 8);
  }
}
function MinimizePageComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 7);
  }
}
function MinimizePageComponent_img_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 8);
  }
}
const _c0 = function () {
  return {
    thingtounlock: "Minimize"
  };
};
function MinimizePageComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Wowie you did it");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p")(4, "app-spell-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Unlock the minimize spell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
class MinimizePageComponent {
  constructor(unlocksService) {
    this.unlocksService = unlocksService;
  }
  isBlueStoneUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.BlueStone);
  }
  isEatingPlantUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.EatingPlant);
  }
  isRainbowFishUnlocked() {
    return this.unlocksService.isUnlocked(_spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables.RainbowFish);
  }
  shouldChangeLayout() {
    return this.isBlueStoneUnlocked() && this.isEatingPlantUnlocked() && this.isRainbowFishUnlocked();
  }
}
MinimizePageComponent.ɵfac = function MinimizePageComponent_Factory(t) {
  return new (t || MinimizePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_1__.UnlocksService));
};
MinimizePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MinimizePageComponent,
  selectors: [["app-minimize-page"]],
  decls: 27,
  vars: 7,
  consts: [[1, "flex", "flex-col", "text-center", "align-middle", "justify-center", "mx-2"], [1, "text-3xl"], [1, "flex", "flex-row", "w-full", "flex-wrap", "justify-center", "gap-1"], ["src", "assets/questionBlock.png", "alt", "Question Mark", "style", "width: 100px; height: 100px", 4, "ngIf"], ["src", "assets/greencheck.png", "alt", "Question Mark", "style", "width: 100px; height: 100px", 4, "ngIf"], [4, "ngIf"], ["bgColor", "bg-gray-900", "routerLink", "", 1, "my-2"], ["src", "assets/questionBlock.png", "alt", "Question Mark", 2, "width", "100px", "height", "100px"], ["src", "assets/greencheck.png", "alt", "Question Mark", 2, "width", "100px", "height", "100px"], ["bgColor", "bg-gray-900", "routerLink", "/unlock-page", 3, "queryParams"]],
  template: function MinimizePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Minimize");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Some of your enemies are pretty tough. The pixies know a spell or two to help you out. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " You arrive at Pixie Grotto, and a small group approaches you. After explaining your request, they're hapy to help. If you can do something for them. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \"Solve our three riddles, and we'll teach you the spell Minimize! It can make your opponents much smaller which means it'll hurt more when you hit them. Be careful, if they're small they might be harder to hit too, and the spell won't last forever! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\"Bring us these items, and we'll help you on your way.\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "The ocean in solid form.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "A plant that preys on others.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "The fish that gives it scales away.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, MinimizePageComponent_img_18_Template, 1, 0, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, MinimizePageComponent_img_19_Template, 1, 0, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, MinimizePageComponent_img_20_Template, 1, 0, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, MinimizePageComponent_img_21_Template, 1, 0, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MinimizePageComponent_img_22_Template, 1, 0, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, MinimizePageComponent_img_23_Template, 1, 0, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MinimizePageComponent_div_24_Template, 6, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "app-spell-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Back to Spellbook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isBlueStoneUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBlueStoneUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEatingPlantUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEatingPlantUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isRainbowFishUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRainbowFishUnlocked());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shouldChangeLayout());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _spell_button_spell_button_component__WEBPACK_IMPORTED_MODULE_2__.SpellButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW5pbWl6ZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWluaW1pemUtcGFnZS9taW5pbWl6ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3369:
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) {
  return {
    width: a0
  };
};
class ProgressBarComponent {
  constructor() {
    this.percent = 100;
    this.barColor = 'bg-green-700';
  }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)();
};
ProgressBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["app-progress-bar"]],
  inputs: {
    percent: "percent",
    barColor: "barColor"
  },
  decls: 2,
  vars: 5,
  consts: [[1, "w-full", "bg-gray-200", "rounded-full", "h-2.5", "dark:bg-gray-700"], [1, "h-2.5", "rounded-full", 3, "ngClass"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.percent + "%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.barColor);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  encapsulation: 2
});

/***/ }),

/***/ 9896:
/*!********************************************************!*\
  !*** ./src/app/spell-button/spell-button.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpellButtonComponent": () => (/* binding */ SpellButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class SpellButtonComponent {}
SpellButtonComponent.ɵfac = function SpellButtonComponent_Factory(t) {
  return new (t || SpellButtonComponent)();
};
SpellButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SpellButtonComponent,
  selectors: [["app-spell-button"]],
  inputs: {
    bgColor: "bgColor"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [[1, "flex", "flex-row", "justify-center"], ["type", "button"]],
  template: function SpellButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.bgColor, " text-white font-bold py-2 px-10 rounded w-11/12 mb-5");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVsbC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3BlbGwtYnV0dG9uL3NwZWxsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6625:
/*!***************************!*\
  !*** ./src/app/spells.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unlockables": () => (/* binding */ Unlockables)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-random-number-arbitrary */ 4397);


var Unlockables;
(function (Unlockables) {
  class Unlockable {
    constructor(unlocksService, playerService, combatLogService) {
      this.unlocksService = unlocksService;
      this.playerService = playerService;
      this.combatLogService = combatLogService;
      this.name = this.constructor.name;
    }
  }
  Unlockables.Unlockable = Unlockable;
  class Mushroom extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Heal;
    }
  }
  Unlockables.Mushroom = Mushroom;
  class GingerRoot extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Heal;
    }
  }
  Unlockables.GingerRoot = GingerRoot;
  class Lavender extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Heal;
    }
  }
  Unlockables.Lavender = Lavender;
  class Chamomile extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Heal;
    }
  }
  Unlockables.Chamomile = Chamomile;
  class BlueStone extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Minimize;
    }
  }
  Unlockables.BlueStone = BlueStone;
  class EatingPlant extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Minimize;
    }
  }
  Unlockables.EatingPlant = EatingPlant;
  class RainbowFish extends Unlockable {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Minimize;
    }
  }
  Unlockables.RainbowFish = RainbowFish;
  class Spell extends Unlockable {}
  Unlockables.Spell = Spell;
  class MagicMissle extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'single';
      this.mpCost = 8;
      this.action = monster => {
        const dmg = Math.floor(this.playerService.damage * ((0,_utils_get_random_number_arbitrary__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberArbitrary)(10, 20) / 100 + 1));
        const dmgDealt = monster.takeDamage(dmg);
        return `MagicMissle does ${dmgDealt} non-elemental damage to ${monster.name}`;
      };
    }
  }
  Unlockables.MagicMissle = MagicMissle;
  class Gale extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'all';
      this.mpCost = 8;
      this.action = (_, monsters) => {
        monsters.forEach(monster => monster.takeDamage(10));
        return `Gale does 10 wind damage to all enemies`;
      };
    }
  }
  Unlockables.Gale = Gale;
  class Minimize extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'all';
      this.mpCost = 8;
      this.action = (_, monsters) => {
        monsters.forEach(monster => monster.giveStatus('minimized'));
        return `All foes have been minimized and will take extra damage`;
      };
    }
  }
  Unlockables.Minimize = Minimize;
  class StoneDefence extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'self';
      this.mpCost = 8;
      this.action = () => {
        this.playerService.giveStatus('stoneDefence');
        return `You gain stone armor you will take less damage`;
      };
    }
  }
  Unlockables.StoneDefence = StoneDefence;
  class ChargeAttack extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'single';
      this.mpCost = 0;
      this.action = monster => {
        if (this.playerService.statuses.includes('charged')) {
          this.playerService.removeStatus('charged');
          const dmgDealt = monster.takeDamage(Math.round(this.playerService.damage * 2.5));
          return `You deal ${dmgDealt} damage to ${monster.name} with a charged attack`;
        }
        this.playerService.giveStatus('charged');
        return `You charge up a huge attack`;
      };
    }
  }
  Unlockables.ChargeAttack = ChargeAttack;
  class Heal extends Spell {
    constructor() {
      super(...arguments);
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.target = 'self';
      this.mpCost = 10;
      this.action = () => {
        const ammountToHeal = Math.floor(this.playerService.maxHp * 0.5);
        this.playerService.hp += ammountToHeal;
        if (this.playerService.hp > this.playerService.maxHp) {
          this.playerService.hp = this.playerService.maxHp;
        }
        return `You cast Heal and gain ${ammountToHeal} hp`;
      };
    }
  }
  Unlockables.Heal = Heal;
  class Fireball extends Spell {
    constructor() {
      super(...arguments);
      this.target = 'single';
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.mpCost = 10;
      this.action = monster => {
        const dmgDealt = monster.takeDamage(this.playerService.damage + 30);
        return `Fireball does ${dmgDealt} fire damnge to ${monster.name}`;
      };
    }
  }
  Unlockables.Fireball = Fireball;
  class Icebeam extends Spell {
    constructor() {
      super(...arguments);
      this.target = 'all';
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.mpCost = 10;
      this.action = (_, monsters) => {
        monsters.forEach(monster => monster.takeDamage(20));
        return `Icebeam does 20 ice damage to all enemies`;
      };
    }
  }
  Unlockables.Icebeam = Icebeam;
  class BlindingLight extends Spell {
    constructor() {
      super(...arguments);
      this.target = 'all';
      this.placeToGoAfterUnlock = _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.Pages.Home;
      this.mpCost = 8;
      this.action = (_, monsters) => {
        monsters.forEach(monster => {
          if (monster.name === 'Demon Lord') {
            monster.hp = 1000;
            this.combatLogService.addLine('The Demon Lord is weakend by the light');
          }
        });
        monsters.forEach(monster => monster.giveStatus('blinded'));
        return `All the enemies become blinded`;
      };
    }
  }
  Unlockables.BlindingLight = BlindingLight;
})(Unlockables || (Unlockables = {}));

/***/ }),

/***/ 7712:
/*!******************************************************!*\
  !*** ./src/app/unlock-page/unlock-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockPageComponent": () => (/* binding */ UnlockPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _unlocks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unlocks.service */ 8323);



class UnlockPageComponent {
  constructor(route, router, unlocksService) {
    const value = route.snapshot.queryParams['thingtounlock'];
    if (value) {
      const unlock = unlocksService.unlock(value);
      return router.navigateByUrl(unlock.placeToGoAfterUnlock);
    }
    router.navigateByUrl('/');
  }
}
UnlockPageComponent.ɵfac = function UnlockPageComponent_Factory(t) {
  return new (t || UnlockPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_unlocks_service__WEBPACK_IMPORTED_MODULE_0__.UnlocksService));
};
UnlockPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UnlockPageComponent,
  selectors: [["app-unlock-page"]],
  decls: 2,
  vars: 0,
  template: function UnlockPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "unlock-page works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmxvY2stcGFnZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdW5sb2NrLXBhZ2UvdW5sb2NrLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8323:
/*!************************************!*\
  !*** ./src/app/unlocks.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlocksService": () => (/* binding */ UnlocksService)
/* harmony export */ });
/* harmony import */ var _spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spells */ 6625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _combat_page_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat-page/player.service */ 5667);
/* harmony import */ var _combat_page_combat_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combat-page/combat-log.service */ 7398);




const LOCAL_STORAGE_KEY = 'cookie';
class UnlocksService {
  constructor(playerService, combatLogService) {
    this.playerService = playerService;
    this.combatLogService = combatLogService;
    this.unlockedStuff = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{ "MagicMissle" : true}');
    this.unlockedClasses = Object.fromEntries(Object.entries(this.unlockedStuff).map(([className]) => [className, this.spellNameToSpellClass(className)]));
  }
  unlock(key) {
    this.unlockedStuff[key] = true;
    this.unlockedClasses[key] = this.spellNameToSpellClass(key);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.unlockedStuff));
    return this.unlockedClasses[key];
  }
  isUnlocked(unlock) {
    return this.unlockedStuff[unlock.name];
  }
  isMultipleUnlocked(unlocks) {
    return unlocks.map(unlock => this.isUnlocked(unlock)).every(Boolean);
  }
  getUnlockedSpells() {
    return Object.values(this.unlockedClasses).filter(unlockable => isSpell(unlockable));
  }
  spellNameToSpellClass(spellName) {
    return new _spells__WEBPACK_IMPORTED_MODULE_0__.Unlockables[spellName](this, this.playerService, this.combatLogService);
  }
}
UnlocksService.ɵfac = function UnlocksService_Factory(t) {
  return new (t || UnlocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_combat_page_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_combat_page_combat_log_service__WEBPACK_IMPORTED_MODULE_2__.CombatLogService));
};
UnlocksService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UnlocksService,
  factory: UnlocksService.ɵfac,
  providedIn: 'root'
});
function isSpell(unlockable) {
  return unlockable.action !== undefined;
}

/***/ }),

/***/ 4397:
/*!******************************************************!*\
  !*** ./src/app/utils/get-random-number-arbitrary.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNumberArbitrary": () => (/* binding */ getRandomNumberArbitrary)
/* harmony export */ });
function getRandomNumberArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map