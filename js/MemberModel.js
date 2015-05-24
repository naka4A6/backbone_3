var app = app || {};

app.MemberModel = Backbone.Model.extend ({
	defaults : {
		position : '', // ポジション
		name : '', // 名前
		birthday : '', // 誕生日
	},
});