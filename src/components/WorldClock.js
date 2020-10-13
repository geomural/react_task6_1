import React, {useRef} from 'react'
import PropTypes from 'prop-types'

function WorldClock(props) {    
    const {addClock} = props;
    const nameRef = useRef();
    const zoneRef = useRef();

    const submitHandler = (evt) => {
        evt.preventDefault();
        
        if (nameRef.current && nameRef.current.value && zoneRef.current && zoneRef.current.value) {
            addClock(nameRef.current.value, zoneRef.current.value);
            nameRef.current.value = "";
            zoneRef.current.value = "";
        } else {
            alert("Empty field!");
        }
    }

    return(
        <form>
            <table>
            <tbody>
                <tr>
                    <td>Название</td>
                    <td>Временная зона</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <input type="text" ref={nameRef} name="name" />
                    </td>
                    <td>
                        <input type="text" ref={zoneRef} name="zone" />
                    </td>
                    <td>
                        <button id="submitBtn" onClick={submitHandler}>Добавить</button>
                    </td>
                </tr>            
            </tbody>
            </table>
        </form>
    )
}
WorldClock.propTypes = {
    addClock: PropTypes.func.isRequired
}
export default WorldClock;