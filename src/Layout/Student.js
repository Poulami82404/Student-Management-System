
// // import React,{useState,useEffect} from 'react';




// // function Student(){

// //   const[name,setName]=useState('')

// // const[address,setAddress]=useState('')

// // const [student,setStudents]=useState([])

// // const handleClick=(e)=>{
// //   e.preventDefault()
// //   const student={name,address}
// //   console.log(student)
// //   fetch("http://localhost:8080/student/add",{
// //     method:"POST",
// //     headers:{"Content-Type":"application/json"},
// //     body:JSON.stringify(student)

// // }).then(()=>{
// //   console.log("New Student added")
// // })
// // }


// // useEffect(()=>{
// //   fetch("https://localhost:8080/student/getAll")
// //   .then(res=>res.json())
// //   .then((result)=>{
// //     setStudents(result);

// //   }
// // )
// // },[])




// //   const studSample = () => {
// //     // Perform resampling here
// //     // This function should return a resampled dataset
// //     // Replace this with your resampling logic
// //     return student; // For demonstration, returning original dataset
// //   };





// //     return(
// // <>
// // <center>

// //   <div className="form-floating mb-3 w-50"
// //   value={name}
// //   onChange={(e)=>setName(e.target.value)}
// //   >
  
// //     <input
// //       type="text"
// //       className="form-control"
// //       id="floatingInput"
// //       placeholder="Student Name"
// //     />
// //     <label htmlFor="floatingInput">Name of student </label>


// //   </div>



// //   <div className="form-floating w-50 " 
// //   value={address}
// //   onChange={(e)=>setAddress(e.target.value)}>

  


// //     <input
// //       type="text"
// //       className="form-control"
// //       id="floatingPassword"
// //       placeholder="Student Name"
// //     />
// //     <label htmlFor="floatingPassword">Address</label>
// //   </div>



// //   <button type="button" className="btn btn-success"  onClick={handleClick}>
// //     Add
// //   </button>



// // {/* For Student display portion */}

// // <div>
// //       {studSample().map(student => (
// //         <div  key={student.id}>
// //           <div>
// //             <strong>Id:</strong> {student.id}
// //           </div>
// //           <div>
// //             <strong>Name:</strong> {student.name}
// //           </div>
// //           <div>
// //             <strong>Address:</strong> {student.address}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
  













  
  
// //   </center>






// // </>









// //     )
// // }

// // export default Student



import React, { useState, useEffect } from 'react';

function Student() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const newStudent = { name, address };
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent)
    })
      .then(() => {
        console.log("New Student added");
        // Clear the input fields
        setName('');
        setAddress('');
        // Fetch the updated list of students
        fetch("http://localhost:8080/student/getAll")
          .then(res => res.json())
          .then(result => {
            setStudents(result);
          })
          .catch(error => console.log("Error fetching students:", error));
      })
      .catch(error => console.error("Error adding student:", error));
  };
  
  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then(result => {
        setStudents(result);
      })
      .catch(error => console.log("Error fetching students:", error));
  }, []);

  return (
    <>
      <center>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Name of student </label>
        </div>

        <div className="form-floating w-50">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Student Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="floatingPassword">Address</label>
        </div>

        <button type="button" className="btn btn-success" onClick={handleClick}>
          Add
        </button>

        {/* Display Students */}
        <div>
          {students.map(student => (
            <div key={student.id}>
              <div>
                <strong>Id:</strong> {student.id}
              </div>
              <div>
                <strong>Name:</strong> {student.name}
              </div>
              <div>
                <strong>Address:</strong> {student.address}
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
}

export default Student;


// import React, { useState, useEffect } from 'react';

// function Student() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [students, setStudents] = useState([]);

//   const handleClick = (e) => {
//     e.preventDefault();
//     const newStudent = { name, address };
//     fetch("http://localhost:8080/student/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newStudent)
//     })
//       .then(() => {
//         console.log("New Student added");
//         // Clear the input fields
//         setName('');
//         setAddress('');
//         // Fetch the updated list of students
//         fetchStudents();
//       })
//       .catch(error => console.error("Error adding student:", error));
//   };

//   const handleDelete = (id) => {
//     fetch(`http://localhost:8080/student/delete/${id}`, {
//       method: "DELETE"
//     })
//       .then(() => {
//         console.log("Student deleted");
//         // Fetch the updated list of students
//         fetchStudents();
//       })
//       .catch(error => console.error("Error deleting student:", error));
//   };

//   const fetchStudents = () => {
//     fetch("http://localhost:8080/student/getAll")
//       .then(res => res.json())
//       .then(result => {
//         setStudents(result);
//       })
//       .catch(error => console.log("Error fetching students:", error));
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <>
//       <center>
//         <div className="form-floating mb-3 w-50">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingInput"
//             placeholder="Student Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="floatingInput">Name of student </label>
//         </div>

//         <div className="form-floating w-50">
//           <input
//             type="text"
//             className="form-control"
//             id="floatingPassword"
//             placeholder="Student Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <label htmlFor="floatingPassword">Address</label>
//         </div>

//         <button type="button" className="btn btn-success" onClick={handleClick}>
//           Add
//         </button>

//         {/* Display Students */}
//         <div>
//           {students.map(student => (
//             <div key={student.id}>
//               <div>
//                 <strong>Id:</strong> {student.id}
//               </div>
//               <div>
//                 <strong>Name:</strong> {student.name}
//               </div>
//               <div>
//                 <strong>Address:</strong> {student.address}
//               </div>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleDelete(student.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </center>
//     </>
//   );
// }

// export default Student;
