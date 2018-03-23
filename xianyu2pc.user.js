// ==UserScript==
// @name         闲鱼强制PC版页面
// @namespace    https://github.com/lihaoyun6/xianyu2pc
// @version      0.3
// @description  访问到移动版咸鱼页面时自动转到对应的PC版页面
// @author       lihaoyun6
// @include      *//2.famecl.com*.detail.*
// @include      *//g.alicdn.com*.detail.*
// @run-at     	 document-start
// @grant        none
// ==/UserScript==
let xianyuMobileObj = {
	init () {
		let curr_href = location.href;
        let cat_arr = /\.detail\.(\d+)\.?/.exec(curr_href);
        if (cat_arr == null) {
			console.log('log: detail info id not found.');
			die();
		}
		let id = cat_arr[1];
		location.href = 'https://2.taobao.com/item.htm?id=' + id; // done !
	}
};

xianyuMobileObj.init();
