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
			'<li><a href="'+base+'general/popular.html">Popular Stream</a></li>' +
			'<li><a href="'+base+'general/spotlight.html">Spotlight</a></li>' +
			'<li><a href="'+base+'general/hottopic.html">Hot topic</a></li>' +
			'<li><a href="'+base+'general/hottopicstream.html">Hot topic Stream</a></li>' +
			'<li><a href="'+base+'general/mightmiss.html">You Might Miss</a></li>' +
		'</ul>' +	
		
		'<h3>Topic API</h3>' +
		'<ul>' +
			'<li><a href="'+base+'topic/liststopic.html">List Topic</a></li>' +
			'<li><a href="'+base+'topic/populartopic.html">Popular Topic Stream</a></li>' +
			'<li><a href="'+base+'topic/similartopic.html">Similar Topic</a></li>' +
		'</ul>' +
		
		'<h3>Tag API</h3>' +
		'<ul>' +
			'<li><a href="'+base+'tag/streamtag.html">Stream Tag</a></li>' +
			'<li><a href="'+base+'tag/counttag.html">Count Tag Follower</a></li>' +
			'<li><a href="'+base+'topic/similartopic.html">Similar Tag</a></li>' +
		'</ul>' +	

				
		'</td><td class="td_sep" valign="top">' +

		'<h3>Authentication</h3>' +
		'<ul>' +
			'<li><a href="'+base+'authentication/login.html">Authentication Login</a></li>' +
			'<li><a href="'+base+'authentication/me.html">Me</a></li>' +
			'<li><a href="'+base+'authentication/mypage.html">My Page Stream</a></li>' +
			'<li><a href="'+base+'authentication/mysource.html">My Source Stream</a></li>' +
			'<li><a href="'+base+'authentication/mytag.html">My Tag Stream</a></li>' +
			'<li><a href="'+base+'authentication/mytaglist.html">My Tag list list</a></li>' +
			'<li><a href="'+base+'authentication/mysourcelist.html">My Source list</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

		'</td><td class="td_sep" valign="top">' +
		
		'</td></tr></table>');
}