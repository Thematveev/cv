let counters = document.querySelectorAll('.skill')

pos = {
    html: 80,
    js: 70,
    vue: 60,
    react: 50,
    figma: 85,
    python: 75,
    sql: 40,
    photoshop: 50
}

k = [0.00000003, 0.00000007, 0.00000004, 0.00000004, 0.00000002, 0.00000007, 0.00000003, 0.00000001]

function setPos(elem){
    let atr = elem.getAttribute('data')
    elem.querySelector('.skill_dash>div').style.width = pos[atr].toFixed(8) + '%'

    elem.querySelector('.percentage').innerText = pos[atr].toFixed(8) + '%'
}

counters.forEach(setPos)


function increaser(){
    keys = Object.keys(pos)

    keys.forEach((el, index) => {
        pos[el] = k[index] + pos[el]
    })

    // console.log(pos)
    counters.forEach(setPos)
}

function ticker(){
    setInterval(increaser, 100)
}

window.onload = ticker








