import React from "react";
import studentsGrade from '../../data/students'

export default (props) =>{
    
    const liArray = studentsGrade.map(student =>{
        return (
            <li key={student.id}>
                {student.id} {student.name} - {student.grade}
            </li>
        );
    })
    
    return(
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {liArray}
            </ul>
        </div>
    );
}