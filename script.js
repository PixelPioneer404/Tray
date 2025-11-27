// const tasks = document.querySelectorAll('.task')
const todoCol = document.querySelector('#todo-col')
const progCol = document.querySelector('#prog-col')
const compCol = document.querySelector('#comp-col')
const todoCount = document.querySelector('#todo-count')
const progCount = document.querySelector('#prog-count')
const compCount = document.querySelector('#comp-count')

//add task components
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')
const modalCloseBtn = document.querySelector('#modal-close-btn')
const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const addTaskBtn = document.querySelector('#add-task-btn')
const titleAlert = document.querySelector('#title-alert')
const addTaskFromModalBtn = document.querySelector('#add-task-btn-modal')

//localstorage items
let taskData = JSON.parse(localStorage.getItem('taskData')) || {
    todoCol: {
        count: 0,
        tasks: []
    },
    progCol: {
        count: 0,
        tasks: []
    },
    compCol: {
        count: 0,
        tasks: []
    }
}

function setColData(colName, colEl, colCountEl) {
    if (taskData.todoCol.tasks.length !== 0 || taskData.progCol.tasks.length !== 0 || taskData.compCol.tasks.length !== 0) {
        colCountEl.textContent = taskData[colName].count
        taskData[colName].tasks.forEach((el) => {
            let newTask = document.createElement('div')
            newTask.setAttribute('draggable', 'true')
            newTask.classList.add(...'task cursor-grab w-full h-fit bg-(--col-bg-color) rounded-3xl px-(--padding-md) py-(--padding-md) flex flex-col items-start justify-center gap-3'.split(' '))
            newTask.innerHTML =
                `
            <h2 class="text-2xl font-mono font-semibold">${el.title}</h2>
            <p class="text-lg font-mono font-medium text-white/70">${el.desc}</p>
            <button
                class="dlt-btn px-(--padding-md) py-(--padding-sm) rounded-2xl font-medium text-lg flex gap-2 bg-(--dlt-btn-color) cursor-pointer self-end"><i
                    class="ri-delete-bin-line pointer-events-none"></i> Delete</button>
        `
            colEl.appendChild(newTask)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setColData('todoCol', todoCol, todoCount)
    setColData('progCol', progCol, progCount)
    setColData('compCol', compCol, compCount)
})

//flags
let isModalOpen = false

let currentDrag = null
let currentTodoCount = 0
let currentProgCount = 0
let currentCompCount = 0

document.addEventListener('drag', (e) => {
    if (e.target.classList.contains('task')) {
        currentDrag = e.target
    }
})

function updateData() {
    // Reset counters first!
    currentTodoCount = 0
    currentProgCount = 0
    currentCompCount = 0

    // Clear arrays before rebuilding
    taskData.todoCol.tasks = []
    taskData.progCol.tasks = []
    taskData.compCol.tasks = []

    // Count tasks in todo column
    todoCol.childNodes.forEach((el) => {
        if (el.classList && el.classList.contains('task')) {
            currentTodoCount++
            taskData.todoCol.tasks.push({
                title: el.querySelector('h2').textContent,
                desc: el.querySelector('p').textContent
            })
        }
    })
    taskData.todoCol.count = currentTodoCount
    todoCount.textContent = currentTodoCount

    progCol.childNodes.forEach((el) => {
        if (el.classList && el.classList.contains('task')) {
            currentProgCount++
            taskData.progCol.tasks.push({
                title: el.querySelector('h2').textContent,
                desc: el.querySelector('p').textContent
            })
        }
    })
    taskData.progCol.count = currentProgCount
    progCount.textContent = currentProgCount

    compCol.childNodes.forEach((el) => {
        if (el.classList && el.classList.contains('task')) {
            currentCompCount++
            taskData.compCol.tasks.push({
                title: el.querySelector('h2').textContent,
                desc: el.querySelector('p').textContent
            })
        }
    })
    taskData.compCol.count = currentCompCount
    compCount.textContent = currentCompCount

    // Save to localStorage
    localStorage.setItem('taskData', JSON.stringify(taskData))
}

function addDragClassOnCol(col) {
    col.addEventListener('dragenter', () => {
        col.classList.add('selected')
    })
    col.addEventListener('dragleave', () => {
        col.classList.remove('selected')
    })
    col.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow drop
    })

    col.addEventListener('drop', (e) => {
        e.preventDefault();
        col.appendChild(currentDrag)
        col.classList.remove('selected')
        updateData()
    })
}

addDragClassOnCol(todoCol)
addDragClassOnCol(progCol)
addDragClassOnCol(compCol)

//task handling
let invisibleClasses = ['opacity-0', 'pointer-events-none']
let visibleClasses = ['opacity-100', 'pointer-events-auto']
let initialScaleClass = 'scale-60'
let finalScaleClass = 'scale-100'

let taskTitle = ''
let taskDesc = ''

function openModal() {
    if (!isModalOpen) {
        isModalOpen = true
        overlay.classList.remove(...invisibleClasses)
        overlay.classList.add(...visibleClasses)
        modal.classList.remove(...invisibleClasses, initialScaleClass)
        modal.classList.add(...visibleClasses, finalScaleClass)
        title.focus()
    }
}

function closeModal() {
    if (isModalOpen) {
        isModalOpen = false
        overlay.classList.remove(...visibleClasses)
        overlay.classList.add(...invisibleClasses)
        modal.classList.remove(...visibleClasses, finalScaleClass)
        modal.classList.add(...invisibleClasses, initialScaleClass)
        resetModal()
    }
}

function resetModal() {
    titleAlert.classList.remove('flex')
    titleAlert.classList.add('hidden')
    title.value = ''
    desc.value = ''
}

function addTask() {
    if (title.value.trim() === '') {
        titleAlert.classList.remove('hidden')
        titleAlert.classList.add('flex')
        return
    }
    taskTitle = title.value
    taskDesc = desc.value
    let newTask = document.createElement('div')
    newTask.setAttribute('draggable', 'true')
    newTask.classList.add(...'task cursor-grab w-full h-fit bg-(--col-bg-color) rounded-3xl px-(--padding-md) py-(--padding-md) flex flex-col items-start justify-center gap-3'.split(' '))
    newTask.innerHTML =
        `
            <h2 class="text-2xl font-mono font-semibold">${taskTitle}</h2>
            <p class="text-lg font-mono font-medium text-white/70">${taskDesc}</p>
            <button
                class="dlt-btn px-(--padding-md) py-(--padding-sm) rounded-2xl font-medium text-lg flex gap-2 bg-(--dlt-btn-color) cursor-pointer self-end"><i
                    class="ri-delete-bin-line pointer-events-none"></i> Delete</button>
        `
    todoCol.appendChild(newTask)
    closeModal()
    updateData()
}

title.addEventListener('input', () => {
    if (title.value.trim() !== '') {
        titleAlert.classList.remove('flex')
        titleAlert.classList.add('hidden')
    }
})

addTaskBtn.addEventListener('click', openModal)
modalCloseBtn.addEventListener('click', closeModal)
addTaskFromModalBtn.addEventListener('click', addTask)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        addTask()
    }
})

function deleteTask(col) {
    col.addEventListener('click', (e) => {
        if (e.target.classList.contains('dlt-btn')) {
            col.removeChild(e.target.closest('.task'))
            updateData()
        }
    })
}

deleteTask(todoCol)
deleteTask(progCol)
deleteTask(compCol)