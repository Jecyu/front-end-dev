
// Mock响应模版
Mock.mock(
    'http://Jecyu.com', {
        "userName": "@name", // 模拟名称
        "age|1-100": 100,
        "color": "@color",
        "date": "@date('yyyy-MM-dd')", // 模拟时间
        "url": "@url()",
        "content": "@cparagraph" // 模拟文本
    }
);


// get请求
$('#get').click(function () {
    $.ajax({
        url: "http://Jecyu.com",
        type: "GET",
        dataType: "json",
        data: {

        },
        success: function (res) {
            // 请求成功处理
            console.log(res);
        },
        error: function (err) {
            // 请求失败处理
        }

    })
});

// post 请求
Mock.mock(
    'http://Jecyu.com/user/creat.do', function (options) {
        console.log(options);
        return Mock.mock({
            "user|1-3": [{
                "name": "@cname",
                "id|+1": 88
            }]
        });
    }
)

$('#post').click(function () {
    $.ajax({
        url: "http://Jecyu.com/user/creat.do",
        type: "POST",
        dataType: "json",
        data: {
            account: 888,
            pwd: 'abc123'
        },
        success: function (res) {
            // 请求成功处理
            console.log(res);
        },
        error: function (err) {
            // 请求失败处理
        }

    })
});
