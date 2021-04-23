const KEYS = {
    students: 'students',
    studentId: 'studentId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Science'},
    { id: '2', title: 'commarce'},
    { id: '3', title: 'Arts'},
    { id: '4', title: 'Business'},
])

export function insertStudent(data) {
    let students = getAllStudents();
    data['id'] = generateStudentId()
    students.push(data)
    localStorage.setItem(KEYS.students, JSON.stringify(students))
}

export function generateStudentId() {
    if (localStorage.getItem(KEYS.studentId) == null)
        localStorage.setItem(KEYS.studentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.studentId))
    localStorage.setItem(KEYS.studentId, (++id).toString())
    return id;
}

export function getAllStudents(){
    if(localStorage.getItem(KEYS.students) == null)
        localStorage.setItem(KEYS.students, JSON.stringify([]))
    let students =  JSON.parse(localStorage.getItem(KEYS.students));
    let departments = getDepartmentCollection();
    return students.map(x => ({
        ...x,
        department: departments[x.departmentId-1].title
    }))
}
export function updateStudent(data) {
    let students = getAllStudents();
    let recordIndex = students.findIndex(x => x.id == data.id);
    students[recordIndex] = { ...data }
    localStorage.setItem(KEYS.students, JSON.stringify(students));
}

export function deleteStudent(id) {
    window.alert(id);
    let students = getAllStudents();
    students.splice(id, 1);
    localStorage.setItem(KEYS.students, JSON.stringify(students));
}