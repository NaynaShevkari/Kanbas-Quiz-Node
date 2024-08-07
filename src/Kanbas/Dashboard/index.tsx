// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// // import Allcourses from './AllCourses'
// import AllCourses from './AllCourses'

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrollUserInCourse
// }: {
//   courses: any[]
//   course: any
//   setCourse: (course: any) => void
//   addNewCourse: (userId: string) => void
//   deleteCourse: (course: any) => void
//   updateCourse: (course: any) => void
//   enrollUserInCourse: (course: any, userId: any)
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer)
//   const filteredCourses = courses.filter(course =>
//     course.enrolled.includes(currentUser._id)
//   )

//   return (
//     <div id='wd-dashboard'>
//       <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />


//       {currentUser.role === 'STUDENT' ? (
//         <>
//         <h2 id='wd-dashboard-selectcourses'>
//           You can enroll in the below courses
//         </h2><br/>
//         <button
//               className='btn btn-warning me-2'
//               onClick={enrollUserInCourse}
//               id='wd-update-course-click'
//             >
//               Rocket Propulsion
//           </button>

//           <button
//               className='btn btn-warning me-2'
//               onClick={enrollUserInCourse}
//               id='wd-update-course-click'
//             >
//               Aerodynamics
//           </button>

//           <button
//               className='btn btn-warning me-2'
//               onClick={enrollUserInCourse}
//               id='wd-update-course-click'
//             >
//               Spacecraft
//           </button>
//         </>

//       ) : (
//         <>
//           <h2 id='wd-dashboard-enrolled'>
//             Enrolled Courses ({filteredCourses.length})
//           </h2><hr />

//           <Link
//           to={`/Kanbas/Courses`}
//           className='btn btn-primary'
//           >
//           Enroll into Courses
//          </Link>
//         </>
//       )}


      
//       {currentUser.role === 'FACULTY' && (
//         <>
//           <h5>
//             New Course
//             <button
//               className='btn btn-primary float-end'
//               id='wd-add-new-course-click'
//               onClick={() => addNewCourse(currentUser._id)}
//             >
//               Add
//             </button>
//             <button
//               className='btn btn-warning float-end me-2'
//               onClick={updateCourse}
//               id='wd-update-course-click'
//             >
//               Update
//             </button>
//           </h5>
//           <br />
//           <input
//             value={course.name}
//             className='form-control mb-2'
//             onChange={e => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course.description}
//             className='form-control'
//             onChange={e =>
//               setCourse({ ...course, description: e.target.value })
//             }
//           />
//           <hr />
//         </>
//       )}
//       <hr />
//       {currentUser.role !== 'STUDENT' ? (
//         <h2 id='wd-dashboard-published'>
//           Published Courses ({filteredCourses.length})
//         </h2>
//       ) : (
//         <>
//           <h2 id='wd-dashboard-enrolled'>
//             Enrolled Courses ({filteredCourses.length})
//           </h2><hr />

//           <Link
//           to={`/Kanbas/Courses`}
//           className='btn btn-primary'
//           >
//           Enroll into Courses
//          </Link>

//           {/* <button onClick={registerForCourse} type="button" data-bs-dismiss="modal" className="btn btn-danger">
//           Enroll into Courses </button> */}

//           {/* <button
//             id='wd-dashboard-enroll'
//             className='btn btn-primary'
//             onClick={registerForCourse}
//           >
//             Enroll into Courses
//           </button> */}

//         {/* <button
//         onClick={registerForCourse}
//         type="button"
//         // data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//         className="btn btn-danger"
//       >
//         Enroll into Courses 1
//       </button> */}
//         </>
//       )}
//       <hr />
//       <div id='wd-dashboard-courses' className='row'>
//         <div className='row row-cols-1 row-cols-md-5 g-4'>
//           {filteredCourses.map(course => (
//             <div
//               key={course._id}
//               className='wd-dashboard-course col'
//               style={{ width: '300px' }}
//             >
//               <Link
//                 to={`/Kanbas/Courses/${course._id}/Home`}
//                 className='text-decoration-none'
//               >
//                 <div className='card rounded-3 overflow-hidden'>
//                 <img src={course.image} height="{160}" />
//                   <div className='card-body'>
//                     <span
//                       className='wd-dashboard-course-link'
//                       style={{
//                         textDecoration: 'none',
//                         color: 'navy',
//                         fontWeight: 'bold'
//                       }}
//                     >
//                       {course.name}
//                     </span>
//                     <p
//                       className='wd-dashboard-course-title card-text'
//                       style={{ maxHeight: 53, overflow: 'hidden' }}
//                     >
//                       {course.description}
//                     </p>
//                     <Link
//                       to={`/Kanbas/Courses/${course._id}/Home`}
//                       className='btn btn-primary'
//                     >
//                       Go
//                     </Link>
//                     {currentUser.role === 'FACULTY' && (
//                       <>
//                         <button
//                           onClick={event => {
//                             event.preventDefault()
//                             deleteCourse(course._id)
//                           }}
//                           className='btn btn-danger float-end'
//                           id='wd-delete-course-click'
//                         >
//                           Delete
//                         </button>
//                         <button
//                           id='wd-edit-course-click'
//                           onClick={event => {
//                             event.preventDefault()
//                             setCourse(course)
//                           }}
//                           className='btn btn-warning me-2 float-end'
//                         >
//                           Edit
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AllCourses from './AllCourses'

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollUserInCourse
}: {
  courses: any[]
  course: any
  setCourse: (course: any) => void
  addNewCourse: (userId: string) => void
  deleteCourse: (courseId: string) => void
  updateCourse: (course: any) => void
  enrollUserInCourse: (courseId: string, userId: string) => void
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer)
  const filteredCourses = courses.filter(course =>
    course.enrolled.includes(currentUser._id)
  )

  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>Dashboard</h1>
      <hr />

      {currentUser.role === 'STUDENT' ? (
        <>
          <h2 id='wd-dashboard-selectcourses'>
            You can enroll in the below courses
          </h2>
          <br />
          {courses.map(course => (
            <button
              key={course._id}
              className='btn btn-warning me-2'
              onClick={() => enrollUserInCourse(course._id, currentUser._id)}
              id='wd-enroll-course-click'
            >
              {course.name}
            </button>
          ))}
        </>
      ) : (
        <>
          <h2 id='wd-dashboard-enrolled'>
            Enrolled Courses ({filteredCourses.length})
          </h2>
          <hr />
          <Link to={`/Kanbas/Courses`} className='btn btn-primary'>
            Enroll into Courses
          </Link>
        </>
      )}

      {currentUser.role === 'FACULTY' && (
        <>
          <h5>
            New Course
            <button
              className='btn btn-primary float-end'
              id='wd-add-new-course-click'
              onClick={() => addNewCourse(currentUser._id)}
            >
              Add
            </button>
            <button
              className='btn btn-warning float-end me-2'
              onClick={() => updateCourse(course)}
              id='wd-update-course-click'
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className='form-control mb-2'
            onChange={e => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className='form-control'
            onChange={e =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <hr />
      {currentUser.role !== 'STUDENT' ? (
        <h2 id='wd-dashboard-published'>
          Published Courses ({filteredCourses.length})
        </h2>
      ) : (
        <>
          <h2 id='wd-dashboard-enrolled'>
            Enrolled Courses ({filteredCourses.length})
          </h2>
          <hr />
          <Link to={`/Kanbas/Courses`} className='btn btn-primary'>
            Enroll into Courses
          </Link>
        </>
      )}
      <hr />
      <div id='wd-dashboard-courses' className='row'>
        <div className='row row-cols-1 row-cols-md-5 g-4'>
          {filteredCourses.map(course => (
            <div
              key={course._id}
              className='wd-dashboard-course col'
              style={{ width: '300px' }}
            >
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className='text-decoration-none'
              >
                <div className='card rounded-3 overflow-hidden'>
                  <img src={course.image} height="160" alt={course.name} />
                  <div className='card-body'>
                    <span
                      className='wd-dashboard-course-link'
                      style={{
                        textDecoration: 'none',
                        color: 'navy',
                        fontWeight: 'bold'
                      }}
                    >
                      {course.name}
                    </span>
                    <p
                      className='wd-dashboard-course-title card-text'
                      style={{ maxHeight: 53, overflow: 'hidden' }}
                    >
                      {course.description}
                    </p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className='btn btn-primary'
                    >
                      Go
                    </Link>
                    {currentUser.role === 'FACULTY' && (
                      <>
                        <button
                          onClick={event => {
                            event.preventDefault()
                            deleteCourse(course._id)
                          }}
                          className='btn btn-danger float-end'
                          id='wd-delete-course-click'
                        >
                          Delete
                        </button>
                        <button
                          id='wd-edit-course-click'
                          onClick={event => {
                            event.preventDefault()
                            setCourse(course)
                          }}
                          className='btn btn-warning me-2 float-end'
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
