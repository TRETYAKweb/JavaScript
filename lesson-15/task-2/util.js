const getWorker = ({ name, hours, rate, salary }) => `
<div class="card p-4">
    <div class="d-flex align-items-center">
        <div class="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155">
        </div>
        <div class="ml-3 w-100">
            <h4 class="mb-0 mt-0">${name}</h4> 
            <span>Старший разработчик</span>
            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column">
                    <span class="hours">Часов</span>
                    <span class="number1">${hours}</span>
                </div>
                <div class="d-flex flex-column">
                    <span class="rate">$/час</span>
                    <span class="number2">${rate}</span>
                </div>
                <div class="d-flex flex-column">
                    <span class="salary">Зарплата</span>
                    <span class="number3">${salary}</span>
                </div>
            </div>
            <div class="button mt-2 d-flex flex-row align-items-center">
                <button class="btn btn-sm btn-outline-primary w-100">Распечатать</button>
                <button class="btn btn-sm btn-primary w-100 ml-2">Удалить</button>
            </div>
        </div>
    </div>
</div>
`;