var MockResultSet = require('./app/data/mockResultSet');
var contextPath = require.resolve('./context.json'); // to run simple example
var bearcat = require('../../lib/bearcat');

bearcat.createApp([contextPath]);
bearcat.start(function() {

    var r, num;

	var car = bearcat.getModel('car'); // get bean
	car.$before('before').$after(['transform']).$set('num', 100);

	num = car.$get('num');
	console.log(num);

	r = car.$before(['checkNum']).$set('num', 'aaa');

	console.log(r.stack);

	num = car.$get('num');
	console.log(car.toJSON());
	console.log(num);

	r = car.$before().$set('len', 'aaaaa6');

	console.log(r);
	console.log(r.stack);




	var resultSet1 = MockResultSet.t1;
	var resultSet2 = MockResultSet.t2;
	var resultSet3 = MockResultSet.t3;
	var resultSet4 = MockResultSet.t4;




	var blogResult1 = bearcat.getModel('blogResult');
	// console.log(Object.keys(blogResult1.modelDefinition.modelKeyMap));
	for (var i = 0; i < resultSet1.length; i++) {
		var r = blogResult1.$packResultSet(resultSet1[i]);
		console.log(resultSet1[i], r);
		if (r) {
			console.log(r);
		}
	}
	blogResult1.run();



	var blogResult2 = bearcat.getModel('blogResult');

	for (var i = 0; i < resultSet2.length; i++) {
		var r = blogResult2.$packResultSet(resultSet2[i]);
		console.log(resultSet2[i], r);
		if (r) {
			console.log(r);
		}
	}
	blogResult2.run();



    var blogResult3 = bearcat.getModel('blogResult');

    for (var i = 0; i < resultSet3.length; i++) {
        var r = blogResult3.$packResultSet(resultSet3[i]);
        console.log(resultSet3[i], r);
        if (r) {
            console.log(r);
        }
    }
    blogResult3.run();



    var blogResult4 = bearcat.getModel('blogResult');

    let blog_id = 2;
    for (var i = 0; i < resultSet4.length; i++) {
        if (resultSet4[i].blog_id !== blog_id) continue;
        var r = blogResult4.$packResultSet(resultSet4[i]);
        if (r) {
            console.log(r);
        }
    }
    blogResult4.run();
});