function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">User Guide Home</a></li>' +	
		'<li><a href="'+base+'toc.html">Table of Contents Page</a></li>' +
		'</ul>' +	

		'<h3>General API</h3>' +
		'<ul>' +
			'<li><a href="'+base+'api/deals.html">Deals</a></li>' +
			'<li><a href="'+base+'api/deal.html">Deal</a></li>' +
			'<li><a href="'+base+'api/login.html">Login</a></li>' +
			'<li><a href="'+base+'api/coupons.html">Coupons</a></li>' +
			'<li><a href="'+base+'api/coupon.html">Coupon</a></li>' +
		'</ul>' +	
		
		'</td><td class="td_sep" valign="top">' +

		'</td><td class="td_sep" valign="top">' +
		
		'</td></tr></table>');
}