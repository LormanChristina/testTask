import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Contact = (props) => {

 function getInit(firstName, lastName) {
        let init = firstName.substring(0, 1) + lastName.substring(0, 1);
        return init;
    }


    return (
        <div className="wrapper">
            <header>
                <h3>Contacts</h3>
            </header>
            <div className="main_section">
                <label className="iconLabel">
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                    <input type="search" id="top_input" onChange={(e) => props.findPerson(e.target.value)} />
                </label>
                <div class="checkbox-btn-group">
                <label>
                    {props.contacts.map((p, i) =>
                        <div className="element" key={i} id={p.id}>
                            <input type="checkbox"/>
                            <div  className="person" onClick={(e) => {props.choosePerson(e.currentTarget)
                                                                      console.log(p.id)}}>
                                    <img src={p.avatar ? p.avatar : `http://ui-avatars.com/api/?name=${getInit(p.first_name, p.last_name)}`} className="avatar"/>
                                    <div className="info">
                                    <h2>{p.first_name} {p.last_name}</h2>
                                    <p>{p.email}</p>
                                    </div>
                            </div> 
                        </div>
                            
                        )}
                </label>
                </div>

            </div>
        </div>

    )
}
export default Contact;