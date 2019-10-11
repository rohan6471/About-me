
const circlearea = (x) => { return Math.round(Math.PI * x * x * 100) / 100 }

const area = new Vue({
    el: '#area',
    data: {
        guest: 'Rohan',
        firstNumber: 5,
    },
    computed: {
        result: function () {
            const i = parseInt(this.firstNumber);
            //   const j = parseInt(this.secondNumber);
            return `${this.guest},  area is ${circlearea(i)}.`
        }
    }
})