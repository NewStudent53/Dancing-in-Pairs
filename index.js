var Refresh = (window.onload = function() {
    let button = document.getElementById('button')
    button.addEventListener('click', function() {
        Refresh()
    })
    Refresh = () => {
        const input = document.getElementById('number')
        let number = input.value
        //            1,2,3,4,5,6,7,8,9,10...
        let Student1=[1,0,1,0,1,0,1,0,1,0]
        let Student2=[0,1,1,0,0,1,1,0,0,1]
        let Student3=[0,0,1,1,1,0,0,0,1,1]
        let Student4=[0,0,0,1,1,1,1,0,0,0]
        let Student5=[0,0,0,0,1,1,1,1,1,0]
        //            x,x,x,o,o,x,o,x,x,o
        number=number-1
    
        const Suma = Student1[number] + Student2[number] + Student3[number] + Student4[number] + Student5[number]
        number=number +1
        console.log(number)

        if (number ==0) {
            document.getElementById('results').innerHTML=('Remember: From Day#1 to Day#10')
        }
        else
        if (Suma%2 == 0) {
            console.log('Day #', number, 'is even')
            document.getElementById('results').innerHTML=('even')        
        }
        else {
            console.log('Day #', number, 'is odd')
            document.getElementById('results').innerHTML=('odd')
        }
    }
    Refresh()
})