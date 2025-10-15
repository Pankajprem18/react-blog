import College from "./College_comp";


function Student() {
    const collegeData = [
        {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [{
                name: "Pankaj Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Pankaj ",
                age: '29',
                email: "pankaj@gmail.com"
            }]
        }, {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [{
                name: "Pankaj Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Pankaj ",
                age: '29',
                email: "pankaj@gmail.com"
            }]
        }, {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [{
                name: "Pankaj Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Pankaj ",
                age: '29',
                email: "pankaj@gmail.com"
            }]
        }, {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [{
                name: "Pankaj Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Prem",
                age: '29',
                email: "pankaj@gmail.com"
            }, {
                name: "Pankaj ",
                age: '29',
                email: "pankaj@gmail.com"
            }]
        }
    ]
    return (
        <div>
            <h1>Nested looping with component</h1>
            {
                collegeData.map((college, index) => (
                    <div key={index}>
                       <College college={college}/>
                    </div>
                ))
            }
        </div>
    )
}
export default Student;
