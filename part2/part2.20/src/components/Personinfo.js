import React from 'react'

const Personinfo=({Mearn,removeName})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{Mearn.content} </td>
                      <td>{Mearn.number}</td>
                      <td><button onClick={() => removeName(Mearn.id, Mearn.content)}>Delete</button></td>

                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default Personinfo