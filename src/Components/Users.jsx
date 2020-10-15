import React from 'react';
import User from './User';
import fakeDate from '../fakedata.json';

export default function Users(props) {
    const [state, setState] = React.useState(fakeDate.users);
    return (
        <div className="users">
            <form>
                <div className="inp-group">
                    <label htmlFor="findId">Find ID</label>
                    <input className="inp-text" type="text" id="findId" />
                </div>
                <div className="inp-group">
                    <label htmlFor="findPhone">By user phone #</label>
                    <input className="inp-text" type="text" id="findPhone" />
                </div>
                <div className="inp-group">
                    <label htmlFor="findStatus">By status</label>
                    <select className="inp-select" id="findStatus">
                        <option selected>All</option>
                        <option>Active</option>
                        <option>Unverified</option>
                        <option>Blocked</option>
                    </select>
                </div>
                <div className="inp-group">
                    <button type="button" className="btn btn-success">Search</button>
                </div>
            </form>
            <table className="table table-hover">
                <tr className="row thead">
                    <td className="col">User ID</td>
                    <td className="col">User joined date</td>
                    <td className="col">User phone #</td>
                    <td className="col">User balance (₩)</td>
                    <td className="col">User bonuses (₩)</td>
                    <td className="col">Language</td>
                    <td className="col-1" style={{
                        fontSize: "large",
                        textAlign: "center"
                    }}>User status</td>
                    <td className="col-3"></td>
                </tr>
                {state.map( user => (
                    <User user={user} />
                ))}
            </table>
        </div>
    )
}