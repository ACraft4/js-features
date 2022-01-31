
const timer = {
    start() {
        const startTime = Date.now(); 
        
        setInterval(() => {
            const currentTime = Date.now(); 
            const deltaTime = currentTime - startTime; 
            const TimeComponents = getTimeComponents(deltaTime);
            
            console.log(TimeComponents)
            
        }, 1000);
    },
};

timer.start()


// метод пад
// Принимает число, приводит к строке и добавляет в начало 0, если число меньше 2х знаков
function pad(value) {
    return String(value).padStart(2, '0');
}
// Принимает время в миллисекундах
// Высчитыывает сколько в них вмещается часов минут секунд
// возвращает обьект со свойствами 
function getTimeComponents(time) {
    const hours = pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minute = pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
    const sec = pad(Math.floor(time % (1000 * 60) / 1000)); 

    return { hours, minute, sec }; 
}