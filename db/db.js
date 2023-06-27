const expenses = ['продукты 500 26.05.2023'];


function addExpense(expense) {
    expenses.push(expense)
}

function getExpenses() {
    return expenses
}

function findExpensesByDate(date) {
    const expensesDate = []

    expenses.forEach( expense => {
        const curDate = expense.split(' ')[2]
        if (curDate === date) {
            expensesDate.push(expense)
        }
    })

    return expensesDate
}

module.exports = {
    addExpense
}