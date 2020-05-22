function cal(D)
{
    var dates = Object.keys(D);
    var i;

    var arr=[];

    for(i=0;i<dates.length-1;i++)
    {
        var date1 = new Date(dates[i]);
        var date2 = new Date(dates[i+1]);

        var daysDiff = (date2.getTime()-date1.getTime())/(1000 * 3600 * 24);
        
        arr.push(dates[i])

        if(daysDiff!==1)
        {
            if((D[dates[i+1]]-D[dates[i]])%daysDiff===0)
            {
                let j;
                let add = (D[dates[i+1]]-D[dates[i]])/daysDiff

                for(j=1;j<daysDiff;j++)
                {
                    let newDate = new Date(arr[arr.length-1]);

                    newDate.setDate(newDate.getDate()+1)
                    
                    let datee = newDate.getDate();
                    let month = newDate.getMonth()+1;
                    let year = newDate.getFullYear();

                    if(month<10)
                        month="0"+month;

                    if(datee<10)
                        datee="0"+datee;

                    let newKey = year+"-"+month+"-"+datee;
                    arr.push(newKey)
                    
                    D[newKey] = D[dates[i]]+(j*add);
                }
            }
            else
            {
                console.log("hello")
                let j;
                let avg = (D[dates[i+1]]+D[dates[i]])/2

                for(j=1;j<daysDiff;j++)
                {
                    let newDate = new Date(arr[arr.length-1]);

                    newDate.setDate(newDate.getDate()+1)
                    
                    let datee = newDate.getDate();
                    let month = newDate.getMonth()+1;
                    let year = newDate.getFullYear();

                    if(month<10)
                        month="0"+month;

                    if(datee<10)
                        datee="0"+datee;

                    let newKey = year+"-"+month+"-"+datee;
                    arr.push(newKey)
                    
                    if(j==daysDiff-1)
                    {
                        D[newKey] = avg
                    }
                    else
                    {
                        D[newKey] = D[dates[i]];
                    }
                }
            }
        }

    }

    arr.push(dates[i])

    var newD = {}

    for(i=0;i<arr.length;i++)
    {
        newD[arr[i]] = D[arr[i]];
    }

    return newD
    
}

var inp = {"2019-01-01":100,"2019-01-04":115}
var res = cal(inp);

console.log(res)


/*
    TestCases ->

    Sample-> 
    {"2019-01-01":100,"2019-01-04":115}
    {"2019-01-10":10,"2019-01-11":20,"2019-01-13":10}


    Unit TestCases->
    {"2019-01-30":100,"2019-02-04":115}
    {"2019-01-30":101,"2019-02-04":116,"2019-03-05":200}
    {"2019-12-25":10,"2020-01-04":20,"2020-01-10":10}

*/