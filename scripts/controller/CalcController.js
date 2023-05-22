class CalcController
{
    constructor()
    {
        this._displayCalc = 0;
        this._currentDate;
        this.initialize();
    }

    initialize()
    {
        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = '4567';
        dateEl.innerHTML = '22/05/2023';
        timeEl.innerHTML = '16:53';
    }

    get displayCalc()
    {
        return this._displayCalc;
    }

    set displayCalc(valor)
    {
        this._displayCalc = valor;
    }

    get currentDate()
    {
        return this.currentDate;
    }

    set currentDate(valor)
    {
        this.currentDate = valor;
    }
}