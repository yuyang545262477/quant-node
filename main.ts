import * as request from "superagent";

const url = "https://fundf10.eastmoney.com/F10DataApi.aspx?type=lsjz&code=540008&page=1&per=2";

request
    .get(url)
    .type("text/html")
    .then(value => {

        // console.log((<Object>value.text.slice(12, -1)).toString());
        let parse1 = value.text.slice(12, -1);
        parse1 = parse1.replace(/[\b\t\v]/ig, "");
        parse1 = parse1.replace(/\s/g, "");

        // const pattern = new RegExp("[`~!@#$^&*()=|'\\[\\]/?~！@#￥……&*（）——|【】‘；：”“'。，、？]");
        // let rs = "";
        // for (let i = 0; i < parse1.length; i++) {
        //     rs = rs + parse1.substr(i, 1).replace(pattern, "");
        // }
        // return rs;
        // console.log(rs.valueOf());
        const afterParse = JSON.parse(parse1, (key, value1) => {
            console.log(key);
            console.log(value1);
        });
        console.log(afterParse);
    }, reason => {
        console.log(reason);
    });
