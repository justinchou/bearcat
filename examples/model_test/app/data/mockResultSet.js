var MockResultSet = {};

MockResultSet.t1 = [{
	blog_id: 1,
	blog_title: 'test_title',
	blog_content: 'test_content',
	author_name: 'test_author'
}];

MockResultSet.t2 = [{
	blog_id: 1,
	blog_title: 'test_title',
	blog_content: 'test_content',
	author_name: 'test_author',
	comment_id: 1,
	comment_content: 'test_comment'
}, {
	blog_id: 1,
	blog_title: 'test_title',
	blog_content: 'test_content',
	author_name: 'test_author',
	comment_id: 2,
	comment_content: 'test_comment_2'
}];

MockResultSet.t3 = [{
	blog_id: 1,
	blog_title: 'test_title',
	blog_content: 'test_content',
	author_name: 'test_author',
	comment_id: 1,
	comment_content: 'test_comment',
	comment_author_id: 2,
	comment_author_name: 'test_comment_author'
}, {
	blog_id: 1,
	blog_title: 'test_title',
	blog_content: 'test_content',
	author_name: 'test_author',
	comment_id: 2,
	comment_content: 'test_comment_2',
	comment_author_id: 3,
	comment_author_name: 'test_comment_author_3'
}]

var r = [{
	"$mid": "commentResult",
	"author": {
		"$mid": "author",
		"$table": "ba_author",
		"$prefix": "author_",
		"id": 2,
		"name": "test_comment_author",
		"create_at": "$type:Number",
		"update_at": "$type:Number"
	},
	"comment": {
		"$mid": "comment",
		"$table": "ba_comment",
		"$prefix": "comment_",
		"id": 1,
		"aid": "$type:Number",
		"bid": "$type:Number",
		"content": "test_comment",
		"create_at": "$type:Number",
		"update_at": "$type:Number"
	}
}, {
	"$mid": "commentResult",
	"author": {
		"$mid": "author",
		"$table": "ba_author",
		"$prefix": "author_",
		"id": 3,
		"name": "test_comment_author_3",
		"create_at": "$type:Number",
		"update_at": "$type:Number"
	},
	"comment": {
		"$mid": "comment",
		"$table": "ba_comment",
		"$prefix": "comment_",
		"id": 2,
		"aid": "$type:Number",
		"bid": "$type:Number",
		"content": "test_comment_2",
		"create_at": "$type:Number",
		"update_at": "$type:Number"
	}
}];

// mockResultDB SQL

// SELECT *
// FROM (SELECT
// a.id      AS author_id,
//     a.name    AS author_name,
//     b.id      AS blog_id,
//     b.title   AS blog_title,
//     b.content AS blog_content
// FROM author AS a LEFT JOIN blog AS b ON a.id = b.aid
// ) AS t1 LEFT JOIN (SELECT
// a.id      AS comment_author_id,
//     a.name    AS comment_author_name,
//     c.id      AS comment_id,
//     c.content AS comment_content,
//     c.bid     AS blog_id
// FROM author AS a LEFT JOIN comment AS c ON a.id = c.aid
// ) AS t2 ON t1.blog_id = t2.blog_id;

MockResultSet.t4 = require('./mockResultDB.csv.json');

module.exports = MockResultSet;